<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1 class="name">{{ config.name }}</h1>
      <p class="tagline">{{ config.tagline }}</p>
      <div class="actions">
        <a class="action brand" :href="config.actions[0].link">
          {{ config.actions[0].text }}
        </a>
        <a v-if="config.actions[1]" class="action alt" :href="config.actions[1].link">
          {{ config.actions[1].text }}
        </a>
      </div>
      <div class="preview">
        <img :src="config.image" alt="Preview" loading="lazy" />
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
.hero-section {
  min-height: calc(100vh - var(--vp-nav-height));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem 2rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem 2rem;
  max-width: 1400px;
  width: 100%;
}

.name {
  font-size: clamp(3.2rem, 7vw, 6.5rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.05;
  margin: 0;
  letter-spacing: -0.03em;
}

.tagline {
  font-size: clamp(1.05rem, 1.8vw, 1.35rem);
  color: rgba(255, 255, 255, 0.5);
  margin: 1.5rem 0 2.5rem;
  max-width: 1200px;
  line-height: 1.6;
}

.actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.action {
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 2rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.action.brand {
  background: #fff;
  color: #0a0a0a;
}

.action.brand:hover {
  background: rgba(255, 255, 255, 0.92);
  transform: translateY(-1px);
  box-shadow: 0 4px 24px rgba(255, 255, 255, 0.12);
}

.action.alt {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.action.alt:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  transform: translateY(-1px);
}

.preview {
  margin-top: 4.5rem;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
}

.preview img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 960px) {
  .hero-section {
    min-height: auto;
    padding: 0 1rem 1rem;
  }

  .hero-content {
    padding: 3.5rem 1.5rem;
  }

  .name {
    white-space: normal;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding: 0 0.5rem 0.5rem;
  }

  .hero-content {
    padding: 2.5rem 1rem;
  }

  .tagline {
    margin-bottom: 2rem;
  }
}
</style>
