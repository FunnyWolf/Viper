<template>
  <div class="container">
    <div v-for="(feature, index) in features"
         :key="index"
         :class="['feature-section', `gradient-${index + 1}`]">
      <div class="feature-content">
        <div class="feature-title">{{ feature.title }}</div>
        <div class="feature-details">{{ feature.details }}</div>
      </div>
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
  padding: 4rem 0 2rem 0;  /* 减小底部内边距 */
  text-align: center;
  position: relative;
  margin: 3rem auto 1.5rem auto;  /* 减小底部外边距 */
  border-radius: 24px;
  overflow: hidden;
  background-size: 400% 400%;
  animation: gradientBg 15s ease infinite;
  max-width: 1400px;
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
  margin-bottom: 0.75rem;  /* 减小标题底部边距 */
  color: var(--vp-c-text-1);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature-details {
  font-size: 1.2rem;
  max-width: 900px;
  margin: 0 auto 1rem;  /* 减小描述文字底部边距 */
  line-height: 1.6;
  color: var(--vp-c-text-1);
  padding: 0 1rem;
}

.feature-image {
  max-width: 1200px;
  width: 95%;
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
  background: linear-gradient(-45deg, #992929, #2a7571, #264d5a, #3d5a41);
}

.gradient-2 {
  background: linear-gradient(-45deg, #997f25, #995459, #362e8a, #456354);
}

.gradient-3 {
  background: linear-gradient(-45deg, #008c5e, #00818f, #5c2f70, #412c65);
}

.gradient-4 {
  background: linear-gradient(-45deg, #993a7e, #975656, #999642, #3b6b92);
}

.gradient-5 {
  background: linear-gradient(-45deg, #448e91, #2f2f89, #995e5f, #997a4d);
}

.gradient-6 {
  background: linear-gradient(-45deg, #937e28, #993189, #283c94, #279483);
}

.gradient-7 {
  background: linear-gradient(-45deg, #999413, #237800, #992689, #008c5e);
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
  background: rgba(0, 0, 0, 0.6); /* 增加暗度 */
  pointer-events: none;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem; /* 减小容器左右内边距 */
}

.feature-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 1rem;  /* 减小内容区域底部边距 */
}

/* 添加响应式调整 */
@media (max-width: 960px) {
  .feature-section {
    padding: 3rem 0 1.5rem 0;  /* 减小移动端底部内边距 */
    margin: 2rem auto 1rem auto;  /* 减小移动端底部外边距 */
  }

  .feature-image {
    width: 98%; /* 在小屏幕上增加宽度占比 */
  }
}

@media (max-width: 640px) {
  .feature-section {
    padding: 2rem 0 1rem 0;  /* 进一步减小小屏幕底部内边距 */
    margin: 1.5rem auto 0.75rem auto;  /* 进一步减小小屏幕底部外边距 */
  }

  .feature-content {
    padding: 0 0.5rem;
  }

  .feature-image {
    width: 100%;
  }
}
</style>