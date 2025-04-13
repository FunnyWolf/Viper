# MSF sleep vs. CobaltStrike sleep

## Preface
The metasploit-framework and cobalt strike (abbreviated as CS) are currently the two mainstream red team assessment tools.

During the red team assessment process, in order to minimize the risk of exposure and reduce communication traffic as much as possible, it is a basic requirement. Coincidentally, both CS and the metasploit-framework use the sleep command to control communication intervals. (MSF joined in 2015 [pr link](https://github.com/rapid7/meterpreter/pull/158), and CS should have joined in version 2.13).

The implementation methods of the two should be mostly the same, but the presented effects are different.



## Cobalt Strike sleep
Because cobalt strike is not open source, the sleep principle cannot be analyzed from the code layer.

From the perspective of effects, the Cobalt Strike sleep achieves the control of the communication interval of the beacon. The beacon calls the system sleep to enter hibernation, and the teamserver implements a message queue to store commands in the message queue. When the beacon connects to the teamserver, it reads and executes the commands.

Of course, because the code has not been analyzed, the above are all guesses based on functions.



## MSF Sleep
Because the metasploit-framework and meterpreter are open source, we can analyze how sleep works and is implemented from the source code.

### Sleep effect


![](img\msfsleep_and_cobaltstrikesleep\1.webp)

+ The sleep of the metasploit-framework will directly put the session into a dormant state, which is shown as the session being closed on the UI.
+ The session reconnects after the specified time (if the handler is not deleted).
+ The communication interval does not change after the session reconnects.

### Sleep on Metasploit-framework
The Metasploit-framework code mainly comes from this pr [link](https://github.com/rapid7/metasploit-framework/pull/5339)

The code is mainly divided into two parts. One part is the command processing/help processing, etc. on the UI.

```ruby
  def cmd_sleep_help
    print_line('Usage: sleep <time>')
    print_line
    print_line('  time: Number of seconds to wait (positive integer)')
    print_line
    print_line('  This command tells Meterpreter to go to sleep for the specified')
    print_line('  number of seconds. Sleeping will result in the transport being')
    print_line('  shut down and restarted after the designated timeout.')
  end

  #
  # Handle the sleep command.
  #
  def cmd_sleep(*args)
    if args.length == 0
      cmd_sleep_help
      return
    end

    seconds = args.shift.to_i

    if seconds <= 0
      cmd_sleep_help
      return
    end

    print_status("Telling the target instance to sleep for #{seconds} seconds...")
    if client.core.transport_sleep(seconds)
      print_good("Target instance has gone to sleep, terminating current session.")
      client.shutdown_passive_dispatcher
      shell.stop
    else
      print_error("Target instance failed to go to sleep.")
    end
  end
```

The second part is the specific TLV control sent to meterpreter.

```ruby
  def transport_sleep(seconds)
    return false if seconds == 0

    request = Packet.create_request('core_transport_sleep')

    # we're reusing the comms timeout setting here instead of
    # creating a whole new TLV value
    request.add_tlv(TLV_TYPE_TRANS_COMM_TIMEOUT, seconds)
    client.send_request(request)
    return true
  end
```

### Sleep on Meterpreter
The Meterpreter code mainly comes from this pr [link](https://github.com/rapid7/meterpreter/pull/158/files)

Because [https://github.com/rapid7/meterpreter](https://github.com/rapid7/meterpreter) has been deprecated, we will analyze the subsequent code based on [https://github.com/rapid7/metasploit-payloads](https://github.com/rapid7/metasploit-payloads).

In addition to the regular TLV control, the main part of the code is as follows:

```c
				// transport switching and failover both need to support the waiting functionality.
				if (remote->next_transport_wait > 0)
				{
					dprintf("[TRANS] Sleeping for %u seconds...", remote->next_transport_wait);

					sleep(remote->next_transport_wait);

					// the wait is a once-off thing, needs to be reset each time
					remote->next_transport_wait = 0;
				}

```

It can be seen that the final implementation uses sleep for hibernation.



### Hibernation-reconnection process principle
The code for implementing hibernation and reconnection mainly comes from the following two lines in ruby:

```ruby
      client.shutdown_passive_dispatcher
      shell.stop
```

The first line closes the thread that handles HTTP requests, and the second line closes the session.



## Implementing the effect of Cobalt Strike in MSF
In my opinion, the sleep of msf is more in line with the logic of hibernation and concealment. The communication interval method of Cobalt Strike depends on the queue/request model. But in reality, most security personnel in China prefer the model of Cobalt Strike. So can we achieve the effect of Cobalt Strike in MSF?

The answer is yes.

### Native communication interval of MSF
In fact, MSF itself has communication interval control. If you execute session -x, you will find that the checkin field will change between 1 and 10.

![](img\msfsleep_and_cobaltstrikesleep\2.webp)

This is because the http-type meterpreter will connect to the server at most every 10 seconds.

The premise of a 10-second interval is that no operation is performed on the session. If operations are performed on the session, you will find that the heartbeat interval is shortened to 1 second. After stopping the operation, the communication interval will slowly increase to 10 seconds.

### Implementation principle
We will find that the communication interval control of meterpreter is very ingenious. It increases the communication interval when no operation is performed on the session, and reduces the communication interval to the minimum when operating the session to ensure quick acquisition of operation results. If the operation is stopped, the communication interval will slowly increase. This achieves a balance between reducing communication traffic and smooth operation.

The specific code link is [link](https://github.com/rapid7/metasploit-payloads/blob/master/c/meterpreter/source/metsrv/server_transport_winhttp.c)

```c
			else if (result == ERROR_BAD_CONFIGURATION)
			{
				// something went wrong with WinINET so break.
				break;
			}

			delay = 10 * ecount;
			if (ecount >= 10)
			{
				delay *= 10;
			}

			ecount++;

			dprintf("[DISPATCH] no pending packets, sleeping for %dms...", min(10000, delay));
			Sleep(min(10000, delay));
		}
		else
		{
			transport->comms_last_packet = current_unix_timestamp();

			// Reset the empty count when we receive a packet
			ecount = 0;

			dprintf("[DISPATCH] Returned result: %d", result);

```



![](img\msfsleep_and_cobaltstrikesleep\3.webp)



### Simulating the effect of Cobalt Strike
If you want to simulate the effect of Cobalt Strike, in fact, you only need to modify the delay in Sleep(min(10000, delay)). So how do we achieve dynamic control? In order to modify the code as little as possible, we will first use the existing functions to help us achieve it.

In meterpreter, set_timeout is a parameter that controls the timeout time of the session. We can use the wait time in this parameter to achieve communication interval control.

![](img\msfsleep_and_cobaltstrikesleep\4.webp)

The code is as follows:

```c
			delay = 10 * ecount;
			if (ecount >= 10)
			{
				delay *= 10;
			}

			ecount++;
			if (transport->timeouts.retry_wait > 60) {
				dprintf("[DISPATCH] no pending packets, sleeping for %dms...", transport->timeouts.retry_wait * 1000);
				Sleep(transport->timeouts.retry_wait*1000);
			}
			else {
				dprintf("[DISPATCH] no pending packets, sleeping for %dms...", min(10000, delay));
				Sleep(min(10000, delay));
			}
```

When retry_wait is greater than 60, we use retry_wait as the communication interval parameter.

+ Compile the code
+ Upload the generated metsrv.x64.dll to metasploit-framework/data/meterpreter/
+ Regenerate the session
+ After entering the session, execute set_timeout -w 61

![](img\msfsleep_and_cobaltstrikesleep\5.webp)

+ We can see that the communication interval is greater than 10.
+ When checkin is greater than 55, execute set_timeout -w 10 to restore the original communication interval. (Because the default timeout time of the meterpreter command is 10 seconds, you need to operate when checkin is greater than 50).

![](img\msfsleep_and_cobaltstrikesleep\6.webp)



## Summary
The sleep implementations of Cobalt Strike and MSF should be mostly the same, except for the presented effects. Because MSF is open source, we can also achieve the function of custom communication interval through custom code.