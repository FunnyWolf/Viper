<template>
  <div class="pricing">
    <div class="pricing-header">
      <h1 class="pricing-title">Pricing</h1>
      <p class="pricing-subtitle">Choose the plan that works for you</p>
    </div>

    <div class="pricing-toggle">
      <button :class="{ active: !isYearly }" @click="isYearly = false">MONTHLY</button>
      <button :class="{ active: isYearly }" @click="isYearly = true">YEARLY (SAVE 20%)</button>
    </div>

    <div class="pricing-grid">
      <!-- Hobby Plan -->
      <div class="pricing-card">
        <div class="card-content">
          <h2>Hobby</h2>
          <div class="price">Free</div>
          <div class="divider"></div>
          <div class="includes">Includes</div>
          <ul class="features">
            <li>30分钟session运行时长</li>
            <li>2个并发session</li>
            <li>2个并发handler</li>
          </ul>
          <div class="cta-buttons">
            <a href="/guide/getting_start" class="btn btn-download">DOWNLOAD</a>
            <a href="#" class="btn btn-others">OTHERS</a>
          </div>
        </div>
      </div>

      <!-- Pro Plan -->
      <div class="pricing-card featured">
        <div class="card-content">
          <div class="gradient-bg"></div>
          <h2>Pro</h2>
          <div class="price">
            ${{ isYearly ? '192' : '20' }}
            <span class="period">/{{ isYearly ? 'year' : 'month' }}</span>
          </div>
          <div class="divider"></div>
          <div class="includes">Everything in Hobby, plus</div>
          <ul class="features">
            <li>无限session时长</li>
            <li>无限并发session</li>
            <li>无限并发handler</li>
            <li>自定义插件框架</li>
          </ul>
          <a href="https://www.creem.io/payment/prod_50tkiXWWYeOfBOXPV83eei" class="btn btn-primary">GET STARTED</a>
        </div>
      </div>

      <!-- Business Plan -->
      <div class="pricing-card">
        <div class="card-content">
          <h2>Business</h2>
          <div class="price">
            ${{ isYearly ? '384' : '40' }}
            <span class="period">/user/{{ isYearly ? 'year' : 'month' }}</span>
          </div>
          <div class="divider"></div>
          <div class="includes">Everything in Pro, plus</div>
          <ul class="features">
            <li>优先技术支持</li>
            <li>团队账单管理</li>
            <li>管理员仪表板</li>
            <li>SAML/OIDC SSO</li>
          </ul>
          <a href="#" class="btn btn-primary">GET STARTED</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isYearly = ref(false)
</script>

<style scoped>
.pricing {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-header {
  text-align: left;
  margin-bottom: 2rem;
  padding-left: 1rem;
}

.pricing-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, var(--vp-c-text-1) 30%, var(--vp-c-text-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.pricing-subtitle {
  font-size: 1.5rem;
  color: var(--vp-c-text-2);
}

.pricing-toggle {
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  margin: 2rem 0 3rem 1rem;
  background: var(--vp-c-bg-soft);
  padding: 0.25rem;
  border-radius: 8px;
  width: fit-content;
}

.pricing-toggle button {
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: all 0.3s ease;
}

.pricing-toggle button.active {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.pricing-card {
  position: relative;
  border-radius: 16px;
  background: var(--vp-c-bg);
  box-shadow: 
    0 0 0 1px rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.1);
}

.pricing-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 17px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  z-index: 0;
  pointer-events: none;
}

.card-content {
  position: relative;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.pricing-card.featured {
  background: linear-gradient(180deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
}

.pricing-card.featured::before {
  background: linear-gradient(to bottom, var(--vp-c-brand), transparent);
  opacity: 0.5;
}

.gradient-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, 
    rgba(255, 0, 0, 0.1), 
    rgba(255, 166, 0, 0.1), 
    rgba(0, 128, 0, 0.1), 
    rgba(0, 0, 255, 0.1)
  );
  opacity: 0.5;
  border-radius: 16px;
  filter: blur(20px);
  animation: gradientMove 8s linear infinite;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.pricing-card h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.price {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
}

.period {
  font-size: 1.125rem;
  color: var(--vp-c-text-2);
  font-weight: 400;
}

.divider {
  height: 1px;
  background: linear-gradient(to right, 
    var(--vp-c-divider) 0%, 
    var(--vp-c-divider) 100%
  );
  margin: 1.5rem 0;
  opacity: 0.5;
}

.includes {
  font-size: 1rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex-grow: 1;
}

.features li {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--vp-c-text-1);
  font-size: 1rem;
}

.features li::before {
  content: "✓";
  color: var(--vp-c-brand);
  font-weight: bold;
}

.btn {
  display: inline-block;
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  font-size: 0.9375rem;
}

.btn-primary {
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: 1px solid transparent;
}

.btn-primary:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
}

.btn-download {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.btn-download:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
}

.btn-others {
  background: transparent;
  color: var(--vp-c-text-1);
  padding: 0.875rem 1rem;
}

.btn-others:hover {
  color: var(--vp-c-brand);
}

.cta-buttons {
  display: flex;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
  
  .pricing-header {
    text-align: center;
    padding-left: 0;
  }
  
  .pricing-toggle {
    margin: 2rem auto 3rem;
  }
  
  .pricing-title {
    font-size: 3rem;
  }
}
</style> 