---
layout: page
aside: false
sidebar: false
---

<div class="pricing-comparison">
  <div class="pricing-table">
    <div class="pricing-column basic">
      <div class="plan-header">
        <h3>COMMUNITY</h3>
        <div class="price">
          <span class="amount">$0</span>
          <span class="period">/month</span>
        </div>
        <p class="description">Free Trial of Core Capabilities</p>
        <a href="/guide/getting_start" class="cta-button">Start for Free</a>
      </div>
      <div class="features">
        <div class="feature-item">
          <span class="check">✓</span>
          <span>30 minutes session runtime</span>
        </div>
        <div class="feature-item">
          <span class="check">✓</span>
          <span>2 concurrent sessions</span>
        </div>
        <div class="feature-item">
          <span class="check">✓</span>
          <span>2 concurrent handlers</span>
        </div>
        <div class="feature-item disabled">
          <span class="cross">✕</span>
          <span>Custom plugin development</span>
        </div>
        <div class="feature-item disabled">
          <span class="cross">✕</span>
          <span>Priority ticket support</span>
        </div>
      </div>
    </div>
    <div class="pricing-column pro">
      <div class="popular-tag">Most Popular</div>
      <div class="plan-header">
        <h3>PROFESSIONAL</h3>
        <div class="price">
          <span class="amount">$9</span>
          <span class="period">/month per user</span>
        </div>
        <p class="description">For professional red teams and enterprises</p>
        <a href="https://www.creem.io/payment/prod_50tkiXWWYeOfBOXPV83eei" target="_blank" class="cta-button primary">Upgrade Now</a>
      </div>
      <div class="features">
        <div class="feature-item">
          <span class="check">✓</span>
          <span>Unlimited session runtime</span>
        </div>
        <div class="feature-item">
          <span class="check">✓</span>
          <span>Unlimited concurrent sessions</span>
        </div>
        <div class="feature-item">
          <span class="check">✓</span>
          <span>Unlimited concurrent handler</span>
        </div>
        <div class="feature-item">
          <span class="check">✓</span>
          <span>Custom plugin framework</span>
        </div>
        <div class="feature-item">
          <span class="check">✓</span>
          <span>Priority technical support</span>
        </div>
      </div>
    </div>
  </div>
  <p class="pricing-disclaimer">License will be sent via email after purchase. Full refund available if license is not activated.</p>
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

