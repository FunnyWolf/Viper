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
  padding: 1.25rem 1.5rem;  /* 减小内边距 */
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left; /* 所有内容左对齐 */
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
    /* 底部主要光源 */
    radial-gradient(circle at 50% 100%, rgba(255, 0, 255, 0.9) 0%, transparent 50%),
    radial-gradient(circle at 0% 100%, rgba(255, 0, 128, 0.8) 0%, transparent 40%),
    radial-gradient(circle at 100% 100%, rgba(0, 255, 255, 0.8) 0%, transparent 40%),
    
    /* 中部过渡 */
    radial-gradient(circle at 0% 70%, rgba(255, 128, 0, 0.4) 0%, transparent 30%),
    radial-gradient(circle at 100% 70%, rgba(0, 255, 128, 0.4) 0%, transparent 30%),
    
    /* 整体底色渐变 - 从底部明亮过渡到顶部暗色 */
    linear-gradient(to top,
      rgba(18, 18, 18, 0.2) 0%,    /* 底部较透明 */
      rgba(18, 18, 18, 0.7) 30%,   /* 渐变过渡 */
      rgba(18, 18, 18, 0.9) 60%,   /* 渐变过渡 */
      rgba(18, 18, 18, 0.95) 100%  /* 顶部接近全黑 */
    );
  background-size: 200% 200%;
  animation: gradientFlow 15s ease infinite;
  z-index: -1;
  filter: blur(20px);
  opacity: 0.9;
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

.header-section {
  text-align: center;
  margin-bottom: 0.5rem;  /* 减小头部区域底部间距 */
}

.content-section {
  flex-grow: 1;
  margin: 0.5rem 0;  /* 减小内容区域上下间距 */
}

.action-section {
  margin-top: 0.5rem;  /* 减小按钮区域顶部间距 */
}

.plan-type {
  font-size: 1.75rem;
  font-weight: 800; /* 加粗 */
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;  /* 减小标题下方间距 */
  text-align: left;
}

.price {
  text-align: left;
  margin-bottom: 0.25rem;  /* 减小价格下方间距 */
  line-height: 0.9;  /* 调整行高使价格更紧凑 */
}

.free {
  font-size: 3.5rem; /* 调大字体 */
  font-weight: 900; /* 更粗 */
  color: var(--vp-c-brand);
}

.amount {
  font-size: 4rem; /* 调大字体 */
  font-weight: 900; /* 更粗 */
  color: var(--vp-c-brand);
  line-height: 1;
  background: linear-gradient(135deg,
    var(--vp-c-brand) 0%,
    var(--vp-c-brand-dark) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.period {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  margin-left: 4px;
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
  margin: 0.5rem 0;  /* 减小分隔线上下间距 */
}

@keyframes dividerFlow {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.description {
  font-size: 1.25rem; /* 调大描述文字 */
  font-weight: 600; /* 加粗 */
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;  /* 减小描述下方间距 */
  line-height: 1.3;  /* 调整行高 */
  text-align: left;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;  /* 减小特性项之间的间距 */
  margin: 0.25rem 0;  /* 减小特性列表整体间距 */
}

.feature-item {
  display: flex;
  align-items: center;
  color: var(--vp-c-text-1);
  font-size: 1.0625rem;
  padding: 0.15rem 0;  /* 减小特性项内部间距 */
  position: relative;
  transition: transform 0.2s ease;
}

.feature-item:hover {
  transform: translateX(5px);
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
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, var(--vp-c-brand-dark) 100%);
  color: white;
  animation: pulse 2s infinite;
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

.cross {
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
}

.cta-button {
  display: block;
  width: 100%;
  padding: 0.75rem;  /* 减小按钮内部间距 */
  margin-top: 0.5rem;  /* 减小按钮顶部间距 */
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
  background: white;
  color: #000;  /* 黑色文字 */
  font-weight: 700;
  border: none;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
}

.cta-button.primary:hover {
  background: rgba(255, 255, 255, 0.95);
  color: #000;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4);
}

.price .amount {
  background: linear-gradient(135deg,
    var(--vp-c-brand) 0%,
    var(--vp-c-brand-dark) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: priceGlow 3s ease-in-out infinite;
}

@keyframes priceGlow {
  0%, 100% {
    filter: brightness(100%) drop-shadow(0 0 2px rgba(var(--vp-c-brand-rgb), 0.2));
  }
  50% {
    filter: brightness(120%) drop-shadow(0 0 4px rgba(var(--vp-c-brand-rgb), 0.4));
  }
}

.pricing-disclaimer {
  text-align: center;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-top: 2rem;
  font-style: italic;
}

.pro {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.pro:hover {
  transform: scale(1.08);
}

.pro .inner-column {
  background: rgba(18, 18, 18, 0.7);
  backdrop-filter: blur(10px);
}

/* 确保渐变动画在暗色主题下更加明显 */
:root.dark .gradient-content::before {
  opacity: 0.8;
}

/* Pro版本特殊样式 */
.pricing-column.pro .description {
  font-size: 1.35rem; /* 更大的描述文字 */
  font-weight: 700; /* 更粗 */
  color: white; /* 确保在深色背景上清晰可见 */
}

.pricing-column.pro .feature-item {
  color: rgba(255, 255, 255, 0.9); /* 提高特性文字对比度 */
}

/* 确保在暗色主题下的可读性 */
:root.dark .pricing-column.pro .description {
  color: white;
}

:root.dark .pricing-column.pro .feature-item {
  color: rgba(255, 255, 255, 0.9);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .pricing-table {
    grid-template-columns: 1fr;
  }
  
  .pricing-column {
    max-width: 400px;
    margin: 0 auto;
  }

  .pro {
    transform: scale(1);
  }
  
  .pro:hover {
    transform: scale(1.02);
  }
}

/* 修复价格显示 */
.pricing-column.pro .amount {
  font-size: 4.5rem;
  font-weight: 900;
  color: white;
  background: none;
  -webkit-text-fill-color: white;
  line-height: 1;
  display: inline-block;
  margin-right: 4px;
}

.pricing-column.pro .period {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  vertical-align: bottom;
  line-height: 1;
}

/* 修改按钮文字颜色 */
.cta-button.primary {
  background: white;
  color: #000;  /* 黑色文字 */
  font-weight: 700;
  border: none;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
}

.cta-button.primary:hover {
  background: rgba(255, 255, 255, 0.95);
  color: #000;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4);
}

/* 增强Pro版本的内容可见度 */
.pricing-column.pro .inner-column {
  background: rgba(18, 18, 18, 0.7);
  backdrop-filter: blur(10px);
}

/* 确保文字在渐变背景上清晰可见 */
.pricing-column.pro .description,
.pricing-column.pro .feature-item,
.pricing-column.pro .amount,
.pricing-column.pro .period {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* 暗色主题优化 */
:root.dark .gradient-content::before {
  opacity: 0.95;
}
</style>