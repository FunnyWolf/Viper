<template>
  <div class="key-features-container">
    <div class="features-header">
      <div class="header-content">
        <h2 class="header-title">{{ config.header.title }}</h2>
        <p class="header-description">{{ config.header.description }}</p>
      </div>
      <a :href="config.header.learnMoreLink" class="learn-more">
        {{ config.header.learnMore }}
      </a>
    </div>
    <div class="features-grid">
      <div v-for="(feature, index) in config.features"
           :key="index"
           :class="['feature-card', `accent-${index % 6}`]">
        <div class="accent-bar"></div>
        <div class="feature-content">
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
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
.features-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding: 0 2rem;
}

.header-content {
  flex: 1;
}

.header-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1);
}

.header-description {
  font-size: 1.2rem;
  max-width: 900px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.learn-more {
  display: inline-block;
  padding: 0.8rem 1.6rem;
  background: var(--vp-c-brand-1);
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}

.learn-more:hover {
  opacity: 0.85;
}

.key-features-container {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.feature-card {
  position: relative;
  border-radius: 12px;
  padding: 2rem;
  height: 280px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  contain: content;
  content-visibility: auto;
  contain-intrinsic-size: auto 280px;
  transition: transform 0.2s, box-shadow 0.2s;
  will-change: transform;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.accent-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
}

.accent-0 .accent-bar { background: linear-gradient(90deg, #ff6b6b, #ee5a24); }
.accent-1 .accent-bar { background: linear-gradient(90deg, #4ecdc4, #0abde3); }
.accent-2 .accent-bar { background: linear-gradient(90deg, #a55eea, #8854d0); }
.accent-3 .accent-bar { background: linear-gradient(90deg, #ffd93d, #f7b731); }
.accent-4 .accent-bar { background: linear-gradient(90deg, #26de81, #20bf6b); }
.accent-5 .accent-bar { background: linear-gradient(90deg, #45aaf2, #2d98da); }

.feature-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
}

.feature-title {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1);
}

.feature-description {
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  flex: 1;
}

@media (max-width: 1200px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    height: auto;
    min-height: 200px;
    contain-intrinsic-size: auto 200px;
  }

  .features-header {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .header-description {
    margin: 0 auto;
  }

  .header-title {
    font-size: 2rem;
  }
}
</style>
