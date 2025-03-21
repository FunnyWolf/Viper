<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { initializePaddle, type Paddle } from '@paddle/paddle-js'

// 创建 Paddle 实例的响应式引用
const paddle = ref<Paddle>()

// 组件挂载时初始化 Paddle
onMounted(() => {
  initializePaddle({
    environment: 'sandbox', // 替换你的环境配置
    token: 'test_3f950f53ea728c7c769ecb3bcd8'         // 替换你的认证令牌
  }).then((paddleInstance: Paddle | undefined) => {
    if (paddleInstance) {
      paddle.value = paddleInstance
    }
  })
})

// 打开结账页面的方法
const openCheckout = () => {
  paddle.value?.Checkout.open({
    items: [{ priceId: 'pri_01jpw8ptcyxr4j6ggznv86z0r1', quantity: 1 }] // 替换你的价格ID
  })
}
</script>

<style module>
.button {
  background: linear-gradient(135deg, #4caf50, #2e7d32);
  color: white;
  font-weight: bold;
  padding: 16px 48px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  min-width: 240px;
  transition: all 0.3s ease;
}

.button:hover {
  background: linear-gradient(135deg, #2e7d32, #4caf50);
  transform: scale(1.05);
}
</style>

# Pricing Plans

## 🆓 Basic License (Free Forever)

**$0/month**  
For personal education and testing environments

### Included Features:

- ✅ Session runtime: 30 minutes
- ✅ Concurrent sessions: 2 max
- ✅ Handlers limit: 2 max
- ❌ Custom plugin development
- ❌ Priority ticket support

## ⚡ Pro License (Premium Features)

**$39/month per user**  
Monthly billing with instant cancellation

### Enhanced Capabilities:

- ✅ **Unlimited** session duration
- ✅ **Unrestricted** concurrent sessions
- ✅ **Unlimited** handler creation
- ✅ Custom plugin framework
- ✅ 24/7 priority technical support

*All prices in USD. Local taxes may apply. Full refund available if license is not activated.*

<button :class="$style.button" @click="openCheckout">Buy Now</button>
