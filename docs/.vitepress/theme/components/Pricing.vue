<template>
  <div class="pricing-comparison">
    <div class="pricing-table">
      <div class="pricing-column basic">
        <div class="inner-column">
          <div class="plan-type">{{ config.basic.title }}</div>
          <div class="price">
            <span class="free">{{ config.basic.freeLabel }}</span>
          </div>
          <div class="divider"></div>
          <p class="description">{{ config.basic.description }}</p>
          <div class="features">
            <div v-for="(feature, index) in config.basic.features"
                 :key="index"
                 :class="['feature-item', { disabled: !feature.enabled }]">
              <span :class="feature.enabled ? 'check' : 'cross'">{{ feature.enabled ? '✓' : '✕' }}</span>
              <span>{{ feature.text }}</span>
            </div>
          </div>
          <a :href="config.basic.ctaLink" class="cta-button">{{ config.basic.ctaText }}</a>
        </div>
      </div>

      <div class="pricing-column pro">
        <div class="inner-column gradient-content">
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
                   class="feature-item">
                <span class="check">✓</span>
                <span>{{ feature.text }}</span>
              </div>
            </div>
          </div>
          
          <div class="action-section">
            <a :href="config.pro.ctaLink" target="_blank" class="cta-button primary">{{ config.pro.ctaText }}</a>
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
  gap: 2rem;
  margin-bottom: 2rem;
}

.pricing-column {
  position: relative;
  padding: 8px;
  border-radius: 16px;
  background: var(--vp-c-bg);
  transition: transform 0.3s ease;
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
  background: var(--vp-c-bg);
  border-radius: 12px;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.gradient-content {
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.gradient-content::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 0% 0%, rgba(255, 0, 128, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 100% 0%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(255, 0, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 0% 100%, rgba(255, 255, 0, 0.15) 0%, transparent 50%);
  z-index: -1;
  filter: blur(20px);
}

.header-section {
  text-align: center;
  margin-bottom: 2rem;
}

.content-section {
  flex-grow: 1;
  margin: 2rem 0;
}

.action-section {
  margin-top: auto;
  padding-top: 2rem;
}

.plan-type {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
}

.price {
  text-align: center;
  margin-bottom: 1rem;
}

.free {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vp-c-brand);
}

.amount {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--vp-c-brand);
  line-height: 1;
}

.period {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
}

.divider {
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    var(--vp-c-divider),
    transparent
  );
  margin: 1.5rem 0;
}

.description {
  color: var(--vp-c-text-2);
  font-size: 1.125rem;
  line-height: 1.5;
  margin: 1rem 0;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  color: var(--vp-c-text-1);
  font-size: 1.0625rem;
  padding: 0.5rem 0;
}

.feature-item.disabled {
  color: var(--vp-c-text-3);
}

.check, .cross {
  margin-right: 1rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
}

.check {
  color: var(--vp-c-brand);
  background: var(--vp-c-brand-dimm);
}

.cross {
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
}

.cta-button {
  display: block;
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid var(--vp-c-brand);
  color: var(--vp-c-brand);
  background: transparent;
}

.cta-button:hover {
  background: var(--vp-c-brand-dimm);
}

.cta-button.primary {
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
}

.cta-button.primary:hover {
  background: var(--vp-c-brand-dark);
  border-color: var(--vp-c-brand-dark);
}

.pricing-disclaimer {
  text-align: center;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-top: 2rem;
  font-style: italic;
}

@media (max-width: 768px) {
  .pricing-table {
    grid-template-columns: 1fr;
  }
  
  .pricing-column {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>