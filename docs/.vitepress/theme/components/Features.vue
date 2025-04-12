<template>
  <div class="container">
    <div v-for="(feature, index) in features"
         :key="index"
         :class="['feature-section', `gradient-${index + 1}`]">
      <div class="feature-title">{{ feature.title }}</div>
      <div class="feature-details">{{ feature.details }}</div>
      <div class="feature-image">
        <img :src="feature.image" :alt="feature.title">
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    title: '直观的操作界面',
    details: '提供简洁明了的用户体验，便于快速上手。通过清晰的布局和直观的操作流程，让红队成员能够快速适应并开展工作。',
    image: './guide/webp/screenshots/img.webp'
  },
  {
    title: '多平台支持',
    details: '全面支持Windows、Linux、macOS和Android等多个操作系统的红队评估工作。无论目标环境如何，都能完美适配。',
    image: './guide/webp/screenshots/img_1.webp'
  },
  {
    title: 'LLM Agent智能体',
    details: '内置大型语言模型智能体，提供智能化的决策支持和自动化处理能力，让红队工作更加高效。',
    image: './guide/webp/screenshots/img_2.webp'
  },
  {
    title: '自动化工作流',
    details: '强大的自动化编排和通知机制，支持全天候监控目标状态，提高红队工作效率。',
    image: './guide/webp/screenshots/img_3.webp'
  },
  {
    title: '丰富的内置模块',
    details: '超过100个后渗透模块，全面覆盖MITRE ATT&CK框架各个阶段，满足各类渗透测试场景需求。',
    image: './guide/webp/screenshots/img_4.webp'
  },
  {
    title: '自定义扩展能力',
    details: '支持通过Python编写自定义插件，灵活扩展平台功能，满足特定场景需求。',
    image: './guide/webp/screenshots/img_5.webp'
  },
  {
    title: '更多高级功能',
    details: '内置反溯源、回连过滤、防御规避、多级代理等多项高级功能，全方位保障红队行动安全。',
    image: './guide/webp/screenshots/img_6.webp'
  }
]
</script>

<style scoped>
.feature-section {
  padding: 6rem 0;
  text-align: center;
  position: relative;
  margin: 4rem auto;
  border-radius: 24px;
  overflow: hidden;
  background-size: 400% 400%;
  animation: gradientBg 15s ease infinite;
  max-width: 1200px;
}

@keyframes gradientBg {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

.feature-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature-details {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  padding: 0 2rem;
}

.feature-image {
  max-width: 900px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
}

.feature-image img {
  width: 100%;
  height: auto;
  display: block;
}

.gradient-1 {
  background: linear-gradient(-45deg, #FF6B6B, #4ECDC4, #45B7D1, #96E6A1);
}

.gradient-2 {
  background: linear-gradient(-45deg, #FFD93D, #FF8E9E, #6C5CE7, #A8E6CF);
}

.gradient-3 {
  background: linear-gradient(-45deg, #00F5A0, #00D9F5, #9D50BB, #6E48AA);
}

.gradient-4 {
  background: linear-gradient(-45deg, #FF61D2, #FE9090, #FFF46E, #64B3F4);
}

.gradient-5 {
  background: linear-gradient(-45deg, #72EDF2, #5151E5, #FF9D9E, #FFD280);
}

.gradient-6 {
  background: linear-gradient(-45deg, #F6D242, #FF52E5, #4364F7, #42FCDB);
}

.gradient-7 {
  background: linear-gradient(-45deg, #FFF720, #3CD500, #FF43E5, #00F5A0);
}

:deep(.dark) .feature-section {
  background-blend-mode: overlay;
}

:deep(.dark) .feature-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>