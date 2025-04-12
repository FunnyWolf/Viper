<template>
  <div class="hero-container">
    <div class="hero-section gradient-hero">
      <div class="main">
        <div class="text">
          <h1 class="name">VIPER</h1>
          <p class="tagline">一个平台满足对手仿真和红队行动的所有需求</p>
          <div class="actions">
            <a v-for="action in actions"
               :key="action.text"
               :href="action.link"
        :class="['action', `theme-${action.theme}`]">
              {{ action.text }}
            </a>
          </div>
        </div>
        <div class="image">
          <img src="/viper.svg" alt="VIPER">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const actions = [
  {text: 'VIPER是什么', link: '/zh/guide/welcome_to_viper', theme: 'brand'},
  {text: '快速开始', link: '/zh/guide/getting_start', theme: 'alt'},
  {text: '功能预览', link: '/zh/guide/screenshots', theme: 'alt'}
]
</script>

<style scoped>
.hero-container {
  padding: 2rem;
}

.hero-section {
  height: calc(100vh - var(--vp-nav-height) - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background-size: 200% 200%;
  animation: gradientBg 30s ease infinite;
  position: relative;
  backdrop-filter: blur(10px);
  border-radius: 24px;
}

.gradient-hero {
  background: 
    /* 左上角 */
    radial-gradient(circle at 0% 0%, rgba(255, 0, 92, 0.5) 0%, transparent 25%),
    /* 右上角 */
    radial-gradient(circle at 100% 0%, rgba(90, 0, 190, 0.5) 0%, transparent 25%),
    /* 上边中间 */
    radial-gradient(circle at 50% 0%, rgba(255, 120, 0, 0.3) 0%, transparent 25%),
    /* 左边中间 */
    radial-gradient(circle at 0% 50%, rgba(0, 180, 180, 0.3) 0%, transparent 25%),
    /* 右边中间 */
    radial-gradient(circle at 100% 50%, rgba(180, 0, 180, 0.3) 0%, transparent 25%),
    /* 中心 */
    radial-gradient(circle at 50% 50%, rgba(255, 100, 255, 0.2) 0%, transparent 35%),
    /* 左下角 */
    radial-gradient(circle at 0% 100%, rgba(0, 150, 70, 0.4) 0%, transparent 25%),
    /* 右下角 */
    radial-gradient(circle at 100% 100%, rgba(0, 90, 190, 0.5) 0%, transparent 25%),
    /* 下边中间 */
    radial-gradient(circle at 50% 100%, rgba(255, 180, 0, 0.3) 0%, transparent 25%),
    /* 整体底色 */
    linear-gradient(45deg, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.92));
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
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 0 24px;
}

.text {
  flex: 1;
  padding: 0 24px;
}

.name {
  font-size: 6rem;
  line-height: 1.2;
  font-weight: 700;
  color: var(--vp-c-text-1);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.tagline {
  font-size: 2rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  margin-bottom: 2rem;
  max-width: 800px;
  margin: 0 auto 2rem;
}

.actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
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

.image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image img {
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 960px) {
  .hero-container {
    padding: 1rem;
  }

  .hero-section {
    height: calc(100vh - var(--vp-nav-height) - 2rem);
    border-radius: 20px; /* 中等屏幕稍微减小圆角 */
  }

  .main {
    flex-direction: column;
    text-align: center;
  }

  .name {
    font-size: 4rem;
  }

  .tagline {
    font-size: 1.5rem;
  }

  .actions {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero-container {
    padding: 0.5rem;
  }

  .hero-section {
    height: calc(100vh - var(--vp-nav-height) - 1rem);
    border-radius: 16px; /* 小屏幕进一步减小圆角 */
  }

  .name {
    font-size: 3rem;
  }

  .tagline {
    font-size: 1.25rem;
  }

  .action {
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
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
