export const pricingConfig = {
  header: {
    title: '定价',
    subtitle: '选择适合您的方案'
  },
  basic: {
    title: '社区版',
    freeLabel: '免费',
    description: '核心功能免费试用',
    ctaText: '免费开始',
    ctaLink: '/zh/guide/getting_start',
    features: [
      { text: '30分钟session运行时长', enabled: true },
      { text: '2个并发session', enabled: true },
      { text: '2个并发handler', enabled: true },
      { text: '自定义插件框架', enabled: false },
      { text: '优先技术支持', enabled: false }
    ]
  },
  pro: {
    title: '专业版',
    popularTag: '最受欢迎',
    price: '9',
    period: '用户/月',
    description: '适用于专业红队和企业',
    ctaText: '立即升级',
    ctaLink: 'https://www.creem.io/payment/prod_50tkiXWWYeOfBOXPV83eei',
    features: [
      { text: '无限session时长', enabled: true },
      { text: '无限并发session', enabled: true },
      { text: '无限并发handler', enabled: true },
      { text: '自定义插件框架', enabled: true },
      { text: '优先技术支持', enabled: true }
    ]
  },
  disclaimer: '购买后license会通过邮件发送.如许可证未激活,可全额退款.'
}