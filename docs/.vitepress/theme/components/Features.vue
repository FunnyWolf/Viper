<template>
  <div class="container">
    <div v-for="(feature, index) in features"
         :key="index"
         class="feature-wrapper">
      <div class="feature-content">
        <div class="feature-title">{{ feature.title }}</div>
        <div class="feature-details">{{ feature.details }}</div>
      </div>
      <div :class="['feature-section', `gradient-${index + 1}`]">
        <div class="feature-image">
          <img :src="feature.image" :alt="feature.title">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  features: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.feature-wrapper {
  margin: 4rem 0;
}

.feature-content {
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
  padding: 0 2rem;
}

.feature-section {
  padding: 2rem 0;
  text-align: center;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background-size: 400% 400%;
  animation: gradientBg 15s ease infinite;
  max-width: 1200px;
  margin: 0 auto;
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
  background: linear-gradient(-45deg, #FF6B6B, #FF8E9E, #FF61D2, #FF52E5);
}

.gradient-2 {
  background: linear-gradient(-45deg, #4ECDC4, #00D9F5, #42FCDB, #72EDF2);
}

.gradient-3 {
  background: linear-gradient(-45deg, #6C5CE7, #5151E5, #4364F7, #3CD500);
}

.gradient-4 {
  background: linear-gradient(-45deg, #FFD93D, #FFF46E, #FFD280, #F6D242);
}

.gradient-5 {
  background: linear-gradient(-45deg, #9D50BB, #6E48AA, #FF43E5, #FF52E5);
}

.gradient-6 {
  background: linear-gradient(-45deg, #00F5A0, #42FCDB, #72EDF2, #64B3F4);
}

.gradient-7 {
  background: linear-gradient(-45deg, #FF9D9E, #FF8E9E, #FE9090, #FF61D2);
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