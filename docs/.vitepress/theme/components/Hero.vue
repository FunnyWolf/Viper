<template>
  <div class="hero-container">
    <div class="hero-section gradient-hero">
      <div class="main">
        <div class="content">
          <div class="text">
            <h1 class="name">{{ config.name }}</h1>
            <p class="tagline">{{ config.tagline }}</p>
            <div class="actions">
              <a v-for="action in config.actions"
                 :key="action.text"
                 :href="action.link"
                 :class="['action', `theme-${action.theme}`]">
                {{ action.text }}
              </a>
            </div>
          </div>
          <div class="preview-container">
            <div class="preview-image">
              <img :src=config.image alt="VIPER Preview">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  config: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.hero-container {
  padding: 2rem;
}

.hero-section {
  height: calc(100vh - var(--vp-nav-height) - 4rem);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background-size: 200% 200%;
  animation: gradientBg 30s ease infinite;
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2rem;
}

.gradient-hero {
  background: 
    /* 左上角 */
    radial-gradient(circle at 0% 0%, rgba(255, 71, 71, 0.8) 0%, transparent 25%),
    /* 右上角 */
    radial-gradient(circle at 100% 0%, rgba(123, 97, 255, 0.8) 0%, transparent 25%),
    /* 上边中间 */
    radial-gradient(circle at 50% 0%, rgba(255, 105, 180, 0.6) 0%, transparent 25%),
    /* 左边中间 */
    radial-gradient(circle at 0% 50%, rgba(0, 255, 255, 0.6) 0%, transparent 25%),
    /* 右边中间 */
    radial-gradient(circle at 100% 50%, rgba(191, 64, 255, 0.6) 0%, transparent 25%),
    /* 中心 */
    radial-gradient(circle at 50% 50%, rgba(255, 64, 255, 0.5) 0%, transparent 35%),
    /* 左下角 */
    radial-gradient(circle at 0% 100%, rgba(0, 255, 128, 0.7) 0%, transparent 25%),
    /* 右下角 */
    radial-gradient(circle at 100% 100%, rgba(64, 166, 255, 0.8) 0%, transparent 25%),
    /* 下边中间 */
    radial-gradient(circle at 50% 100%, rgba(255, 234, 0, 0.6) 0%, transparent 25%),
    /* 整体底色 */
    linear-gradient(45deg, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0.90));
  background-size: 150% 150%;
  animation: gradientFlow 30s ease infinite;
  backdrop-filter: blur(100px);
}

@keyframes gradientFlow {
  0% {
    background-position: 
      0% 0%, 100% 0%, 50% 0%,
      0% 50%, 100% 50%, 50% 50%,
      0% 100%, 100% 100%, 50% 100%,
      0% 0%;
  }
  25% {
    background-position: 
      15% 15%, 85% 15%, 65% 15%,
      15% 50%, 85% 50%, 35% 65%,
      15% 85%, 85% 85%, 35% 85%,
      15% 15%;
  }
  50% {
    background-position: 
      25% 25%, 75% 25%, 75% 25%,
      25% 50%, 75% 50%, 50% 75%,
      25% 75%, 75% 75%, 50% 75%,
      25% 25%;
  }
  75% {
    background-position: 
      15% 85%, 85% 85%, 65% 85%,
      15% 50%, 85% 50%, 35% 35%,
      15% 15%, 85% 15%, 35% 15%,
      15% 85%;
  }
  100% {
    background-position: 
      0% 0%, 100% 0%, 50% 0%,
      0% 50%, 100% 50%, 50% 50%,
      0% 100%, 100% 100%, 50% 100%,
      0% 0%;
  }
}

.main {
  max-width: 1400px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  max-width: 1400px;
  width: 100%;
  height: 100%;
}

.text {
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-shrink: 0;
  padding-top: 2rem;
  padding-bottom: 3rem;
  background: transparent;
}

.name {
  font-size: clamp(4.2rem, 8.5vw, 7.8rem);
  line-height: 1;
  font-weight: 800;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  margin: 0;
  padding: 0;
  letter-spacing: -0.02em;
}

.tagline {
  font-size: clamp(1rem, 1.6vw, 1.4rem);
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  max-width: 1400px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
}

.action {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.theme-brand {
  background: var(--vp-c-bg);
  color: var(--vp-c-brand);
  border: 2px solid var(--vp-c-brand);
}

.theme-brand:hover {
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  transform: translateY(-2px);
}

.theme-alt {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.theme-alt:hover {
  background: var(--vp-c-bg-mute);
  transform: translateY(-2px);
}

.preview-container {
  position: relative;
  width: 100%;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: -2rem;
}

.preview-image {
  position: absolute;
  inset: 0;
  padding: 0 1rem;
  overflow: hidden;
}

.preview-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

@media (max-width: 960px) {
  .hero-container {
    padding: 1rem;
  }

  .hero-section {
    height: auto;
    min-height: calc(100vh - var(--vp-nav-height) - 2rem);
    padding: 2rem;
  }

  .name {
    font-size: clamp(3.5rem, 7vw, 5.6rem);
    white-space: normal;
    text-align: center;
  }

  .text {
    padding: 0;
    padding-bottom: 2rem;
    gap: 1.2rem;
  }

  .preview-container {
    margin-bottom: -2rem;
  }

  .preview-image img {
    border-radius: 16px 16px 0 0;
  }

  .tagline {
    font-size: clamp(0.9rem, 1.4vw, 1.2rem);
    white-space: normal;
    text-align: center;
  }
}

@media (max-width: 640px) {
  .hero-container {
    padding: 0.5rem 0.5rem 0 0.5rem;
  }

  .hero-section {
    padding: 1.5rem 1.5rem 0 1.5rem;
    border-radius: 16px;
  }

  .content {
    gap: 1rem;
  }
}

:deep(.dark) .hero-section {
  background-blend-mode: overlay;
}

/* 添加光晕效果 */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  filter: blur(20px);
  opacity: 0.7;
  z-index: -1;
}

/* 移除之前的暗色主题叠加层 */
:deep(.dark) .hero-section::after {
  display: none;
}
</style>
