<template>
  <div class="container">
    <div v-for="(feature, index) in features"
         :key="index"
         class="feature-wrapper">
      <div class="feature-content">
        <div class="feature-title">{{ feature.title }}</div>
        <div class="feature-details">{{ feature.details }}</div>
      </div>
      <div class="feature-section">
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
  max-width: 1200px;
  margin: 0 auto;
}

.feature-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature-details {
  font-size: 1.2rem;
  max-width: 900px;
  margin: 0 auto 1rem;
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

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (max-width: 960px) {
  .feature-section {
    padding: 3rem 0 1.5rem 0;
    margin: 2rem auto 1rem auto;
  }

  .feature-image {
    width: 98%;
  }
}

@media (max-width: 640px) {
  .feature-section {
    padding: 2rem 0 1rem 0;
    margin: 1.5rem auto 0.75rem auto;
  }

  .feature-content {
    padding: 0 0.5rem;
  }

  .feature-image {
    width: 100%;
  }
}
</style>
