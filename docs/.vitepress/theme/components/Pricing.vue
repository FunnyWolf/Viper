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
        <div class="popular-tag">{{ config.pro.popularTag }}</div>
        <div class="inner-column">
          <div class="plan-type">{{ config.pro.title }}</div>
          <div class="price">
            <span class="amount">${{ config.pro.price }}</span>
            <span class="period">/{{ config.pro.period }}</span>
          </div>
          <div class="divider"></div>
          <div class="gradient-content">
            <p class="description">{{ config.pro.description }}</p>
            <div class="features">
              <div v-for="(feature, index) in config.pro.features"
                   :key="index"
                   class="feature-item">
                <span class="check">✓</span>
                <span>{{ feature.text }}</span>
              </div>
            </div>
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

.pricing-column.pro::before {
  background: linear-gradient(
      to bottom,
      var(--vp-c-brand),
      var(--vp-c-brand-dark)
  );
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

.pricing-column:hover {
  transform: translateY(-5px);
}

.popular-tag {
  position: absolute;
  top: -12px;
  right: 20px;
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  z-index: 1;
}

.plan-type {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
  text-align: center;
}

.price {
  text-align: center;
  margin-bottom: 1.5rem;
}

.free {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vp-c-brand);
}

.amount {
  font-size: 3rem;
  font-weight: 700;
  color: var(--vp-c-brand);
}

.period {
  font-size: 1.125rem;
  color: var(--vp-c-text-2);
}

.divider {
  height: 2px;
  background: linear-gradient(to right,
  transparent,
  var(--vp-c-divider),
  transparent
  );
  margin: 1.5rem 0;
}

.description {
  color: var(--vp-c-text-2);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.125rem;
  line-height: 1.5;
}

.features {
  flex-grow: 1;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
  font-size: 1.0625rem;
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
  display: inline-block;
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
  position: relative;
  z-index: 2;
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

.gradient-content {
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.gradient-content::before {
  content: '';
  position: absolute;
  inset: 0;
  background: /* 左下角 */ radial-gradient(circle at 0% 100%, rgba(255, 0, 128, 0.8) 0%, transparent 50%),
    /* 右下角 */ radial-gradient(circle at 100% 100%, rgba(0, 255, 255, 0.8) 0%, transparent 50%),
    /* 下边中间 */ radial-gradient(circle at 50% 100%, rgba(255, 0, 255, 0.8) 0%, transparent 50%),
    /* 左边中间 */ radial-gradient(circle at 0% 50%, rgba(255, 255, 0, 0.6) 0%, transparent 50%),
    /* 右边中间 */ radial-gradient(circle at 100% 50%, rgba(0, 255, 128, 0.6) 0%, transparent 50%),
    /* 整体底色渐变 */ linear-gradient(to top,
      rgba(18, 18, 18, 0.4) 0%,
      rgba(18, 18, 18, 0.95) 100%);
  background-size: 200% 200%;
  animation: gradientFlow 15s ease infinite;
  z-index: -1;
  filter: blur(20px);
}

@keyframes gradientFlow {
  0% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 50% 100%;
  }
}

/* 添加发光效果 */
.gradient-content::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.1),
      transparent
  );
  pointer-events: none;
  z-index: 1;
}

/* 修复按钮悬停问题 */
.cta-button {
  position: relative;
  z-index: 2;
  margin-top: auto;
}

/* 确保渐变效果不会影响其他元素 */
.pricing-column.pro .inner-column {
  overflow: hidden;
}

@media (max-width: 768px) {
  .pricing-table {
    grid-template-columns: 1fr;
  }

  .pricing-column {
    margin-bottom: 2rem;
  }
}
</style>