<template>
  <div class="pricing-comparison">
    <div class="pricing-header">
      <h2 class="pricing-title">{{ config.header.title }}</h2>
      <p class="pricing-subtitle">{{ config.header.subtitle }}</p>
    </div>
    <div class="pricing-table">
      <div class="pricing-column basic">
        <div class="inner-column">
          <div class="header-section">
            <div class="plan-type">{{ config.basic.title }}</div>
            <div class="price">
              <span class="amount free">{{ config.basic.freeLabel }}</span>
            </div>
            <div class="divider"></div>
            <p class="description">{{ config.basic.description }}</p>
          </div>
          <div class="content-section">
            <div class="features">
              <div v-for="(feature, index) in config.basic.features"
                   :key="index"
                   :class="['feature-item', { disabled: !feature.enabled }]">
                <span :class="feature.enabled ? 'check' : 'cross'">{{ feature.enabled ? '✓' : '✕' }}</span>
                <span>{{ feature.text }}</span>
              </div>
            </div>
          </div>
          <div class="action-section">
            <a :href="config.basic.ctaLink" class="cta-button">{{ config.basic.ctaText }}</a>
          </div>
        </div>
      </div>

      <div class="pricing-column pro">
        <div class="inner-column">
          <div class="header-section">
            <div class="plan-type">{{ config.pro.title }}</div>
            <div class="price">
              <span class="amount">${{ config.pro.price }}</span>
              <span class="period">/{{ config.pro.period }}</span>
            </div>
            <div class="divider"></div>
            <p class="description">{{ config.pro.description }}</p>
          </div>
          <div class="content-section">
            <div class="features">
              <div v-for="(feature, index) in config.pro.features"
                   :key="index"
                   :class="['feature-item', { disabled: !feature.enabled }]">
                <span :class="feature.enabled ? 'check' : 'cross'">{{ feature.enabled ? '✓' : '✕' }}</span>
                <span>{{ feature.text }}</span>
              </div>
            </div>
          </div>
          <div class="action-section">
            <a :href="config.pro.ctaLink" target="_blank" class="cta-button">{{ config.pro.ctaText }}</a>
          </div>
        </div>
      </div>
    </div>
    <p class="pricing-disclaimer">{{ config.disclaimer }}</p>
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
.pricing-comparison {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: var(--vp-font-family-base);
}

.pricing-table {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 6rem;
  margin-bottom: 2rem;
}

.pricing-column {
  position: relative;
  padding: 8px;
  border-radius: 16px;
  background: var(--vp-c-bg);
  transition: transform 0.3s ease;
  transform: scale(1.05);
}

.pricing-column:hover {
  transform: scale(1.08);
}

.pricing-column::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 2px;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05)
  );
  border-radius: 16px;
  -webkit-mask: linear-gradient(#fff 0 0) content-box,
  linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.inner-column {
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: rgba(18, 18, 18, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
}

.inner-column::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  filter: blur(20px);
  opacity: 0.9;
  background-size: 200% 200%;
  animation: gradientFlow 15s ease infinite;
}

.basic .inner-column::before {
  background: radial-gradient(circle at 50% 100%, rgba(95, 103, 238, 0.9) 0%, transparent 50%),
  radial-gradient(circle at 0% 100%, rgba(95, 103, 238, 0.8) 0%, transparent 40%),
  radial-gradient(circle at 100% 100%, rgba(65, 209, 255, 0.8) 0%, transparent 40%),
  radial-gradient(circle at 0% 70%, rgba(95, 103, 238, 0.4) 0%, transparent 30%),
  radial-gradient(circle at 100% 70%, rgba(65, 209, 255, 0.4) 0%, transparent 30%),
  linear-gradient(to top,
      rgba(18, 18, 18, 0.2) 0%,
      rgba(18, 18, 18, 0.7) 30%,
      rgba(18, 18, 18, 0.9) 60%,
      rgba(18, 18, 18, 0.95) 100%
  );
}

.pro .inner-column::before {
  background: radial-gradient(circle at 50% 100%, rgba(255, 0, 255, 0.9) 0%, transparent 50%),
  radial-gradient(circle at 0% 100%, rgba(255, 0, 128, 0.8) 0%, transparent 40%),
  radial-gradient(circle at 100% 100%, rgba(0, 255, 255, 0.8) 0%, transparent 40%),
  radial-gradient(circle at 0% 70%, rgba(255, 128, 0, 0.4) 0%, transparent 30%),
  radial-gradient(circle at 100% 70%, rgba(0, 255, 128, 0.4) 0%, transparent 30%),
  linear-gradient(to top,
      rgba(18, 18, 18, 0.2) 0%,
      rgba(18, 18, 18, 0.7) 30%,
      rgba(18, 18, 18, 0.9) 60%,
      rgba(18, 18, 18, 0.95) 100%
  );
}

.header-section {
  text-align: center;
  margin-bottom: 1.5rem;
}

.plan-type {
  font-size: 1.75rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  text-align: left;
}

.price {
  text-align: left;
  margin: 1.5rem 0;
  line-height: 0.9;
}

.amount {
  font-size: 3.5rem;
  font-weight: 900;
  color: white;
  line-height: 1;
  display: inline-block;
  margin-right: 4px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.amount.free {
  background: none;
  color: white;
  -webkit-text-fill-color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.period {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-left: 4px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.divider {
  height: 2px;
  background: linear-gradient(
      90deg,
      transparent 0%,
      var(--vp-c-brand) 50%,
      transparent 100%
  );
  opacity: 0.5;
  animation: dividerFlow 3s ease infinite;
  margin: 1rem 0;
}

.description {
  font-size: 1.35rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  text-align: left;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.content-section {
  flex-grow: 1;
  margin: 1rem 0;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.0625rem;
  padding: 0.5rem 0;
  position: relative;
  transition: transform 0.2s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.feature-item:hover {
  transform: translateX(5px);
}

.feature-item.disabled {
  color: rgba(255, 255, 255, 0.5);
}

.feature-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
      90deg,
      transparent,
      rgba(var(--vp-c-brand-rgb), 0.2),
      transparent
  );
}

.check, .cross {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
  font-weight: bold;
}

.check {
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, var(--vp-c-brand-dark) 100%);
  color: white;
  animation: pulse 2s infinite;
}

.cross {
  background: var(--vp-c-bg-soft);
  color: rgba(255, 255, 255, 0.5);
}

.action-section {
  margin-top: 1.5rem;
}

.cta-button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.125rem;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  background: white;
  color: #000;
  border: none;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
}

.cta-button:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4);
}

.pricing-disclaimer {
  text-align: center;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-top: 4rem;
  font-style: italic;
}

@keyframes gradientFlow {
  0% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 50% 80%;
  }
  100% {
    background-position: 50% 100%;
  }
}

@keyframes dividerFlow {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(var(--vp-c-brand-rgb), 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(var(--vp-c-brand-rgb), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--vp-c-brand-rgb), 0);
  }
}

@media (max-width: 768px) {
  .pricing-table {
    grid-template-columns: 1fr;
  }

  .pricing-column {
    max-width: 400px;
    margin: 0 auto;
    transform: scale(1);
  }

  .pricing-column:hover {
    transform: scale(1.02);
  }
}

.pricing-header {
  text-align: left;
  margin-bottom: 3rem;
}

.pricing-title {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.pricing-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}
</style>
