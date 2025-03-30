---
layout: page
aside: false
sidebar: false
---

<div class="pricing-comparison">
  <div class="pricing-table">
    <div class="pricing-column basic">
      <div class="plan-header">
        <h3>社区版</h3>
        <div class="price">
          <span class="amount">$0</span>
          <span class="period">/月</span>
        </div>
        <p class="description">核心功能免费试用</p>
        <a href="/guide/getting_start" class="cta-button">免费开始</a>
      </div>
      <div class="features">
        <div class="feature-item">
          <span class="check">✓</span>
          <span>30分钟session运行时长</span>
        </div>
        <div class="feature-item">
          <span class="check">✓</span>
          <span>2个并发session</span>
        </div>
        <div class="feature-item">
          <span class="check">✓</span>
          <span>2个并发handler</span>
        </div>
        <div class="feature-item disabled">
          <span class="cross">✕</span>
          <span>自定义插件框架</span>
        </div>
        <div class="feature-item disabled">
          <span class="cross">✕</span>
          <span>优先技术支持</span>
        </div>
      </div>
    </div>
    <div class="pricing-column pro">
      <div class="popular-tag">最受欢迎</div>
      <div class="plan-header">
        <h3>专业版</h3>
        <div class="price">
          <span class="amount">$9</span>
          <span class="period">/月</span>
        </div>
        <p class="description">适用于专业红队和企业</p>
        <a href="https://www.creem.io/checkout/prod_50tkiXWWYeOfBOXPV83eei/ch_4RCvgrmKeH1dLv7flsTjHe" target="_blank" class="cta-button primary">立即升级</a>
      </div>
      <div class="features">
        <div class="feature-item">
          <span class="check">✓</span>
          <span>无限session时长</span>
        </div>
        <div class="feature-item">
          <span class="check">✓</span>
          <span>无限并发session</span>
        </div>
        <div class="feature-item">
          <span class="check">✓</span>
          <span>无限并发handler</span>
        </div>
        <div class="feature-item">
          <span class="check">✓</span>
          <span>自定义插件框架</span>
        </div>
        <div class="feature-item">
          <span class="check">✓</span>
          <span>优先技术支持</span>
        </div>
      </div>
    </div>
  </div>
  <p class="pricing-disclaimer">购买后license会通过邮件发送.如许可证未激活,可全额退款.</p>
</div>

<style>
.pricing-comparison {
  padding: 2rem 0;
  font-family: var(--vp-font-family-base);
}

.pricing-disclaimer {
  text-align: center;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-top: 2rem;
  font-style: italic;
}

.pricing-table {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;
  max-width: 1200px;
}

.pricing-column {
  flex: 1;
  max-width: 400px;
  border-radius: 12px;
  padding: 2rem;
  background: var(--vp-c-bg);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;
}

.pricing-column.basic,
.pricing-column.pro {
  transform: scale(1);
}

.pricing-column.pro {
  border: 2px solid var(--vp-c-brand);
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
}

.plan-header {
  text-align: center;
  margin-bottom: 2rem;
}

.plan-header h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--vp-c-divider);
}

.price {
  margin-bottom: 1rem;
}

.price .amount {
  font-size: 3rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
}

.price .period {
  color: var(--vp-c-text-2);
}

.description {
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  width: 80%;
}

.cta-button:not(.primary) {
  border: 2px solid var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.cta-button.primary {
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
}

.features {
  margin-top: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  color: var(--vp-c-text-1);
}

.feature-item .check {
  color: var(--vp-c-green);
  margin-right: 0.75rem;
  font-weight: bold;
}

.feature-item .cross {
  color: var(--vp-c-red);
  margin-right: 0.75rem;
  font-weight: bold;
}

.feature-item.disabled {
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .pricing-table {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
}

:root.dark .pricing-column {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}
</style>

