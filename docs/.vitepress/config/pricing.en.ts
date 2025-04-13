export const pricingConfig = {
  header: {
    title: 'Pricing',
    subtitle: 'Choose the plan that works for you'
  },
  basic: {
    title: 'Community',
    freeLabel: 'Free',
    description: 'Try core features for free',
    ctaText: 'Get Started',
    ctaLink: '/guide/getting_start',
    features: [
      { text: '30 minutes session duration', enabled: true },
      { text: '2 concurrent sessions', enabled: true },
      { text: '2 concurrent handlers', enabled: true },
      { text: 'Custom plugin framework', enabled: false },
      { text: 'Priority support', enabled: false }
    ]
  },
  pro: {
    title: 'Professional',
    popularTag: 'Most Popular',
    price: '9',
    period: 'month',
    description: 'For professional red teams and enterprises',
    ctaText: 'Upgrade Now',
    ctaLink: 'https://www.creem.io/payment/prod_50tkiXWWYeOfBOXPV83eei',
    features: [
      { text: 'Unlimited session duration', enabled: true },
      { text: 'Unlimited concurrent sessions', enabled: true },
      { text: 'Unlimited concurrent handlers', enabled: true },
      { text: 'Custom plugin framework', enabled: true },
      { text: 'Priority support', enabled: true }
    ]
  },
  disclaimer: 'License will be sent via email after purchase. Full refund available if license is not activated.'
}