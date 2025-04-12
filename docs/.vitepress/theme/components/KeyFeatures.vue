<template>
  <div class="key-features-container">
    <h2 class="features-title">核心特性</h2>
    <div class="features-grid">
      <div v-for="(feature, index) in features" 
           :key="index"
           class="feature-card">
        <div class="feature-icon">
          <i :class="feature.icon"></i>
        </div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-description">{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    title: "智能化决策",
    description: "内置大型语言模型智能体，提供智能化的决策支持和自动化处理能力。",
    icon: "i-carbon-ai-status"
  },
  {
    title: "自动化工作流",
    description: "强大的自动化编排和通知机制，支持全天候监控目标状态。",
    icon: "i-carbon-flow"
  },
  {
    title: "多平台支持",
    description: "全面支持Windows、Linux、macOS和Android等多个操作系统。",
    icon: "i-carbon-devices"
  },
  {
    title: "丰富模块库",
    description: "超过100个后渗透模块，覆盖MITRE ATT&CK框架各个阶段。",
    icon: "i-carbon-application"
  },
  {
    title: "安全防护",
    description: "内置反溯源、回连过滤、防御规避、多级代理等安全功能。",
    icon: "i-carbon-security"
  },
  {
    title: "扩展能力",
    description: "支持通过Python编写自定义插件，灵活扩展平台功能。",
    icon: "i-carbon-code"
  }
]
</script>

<style scoped>
.key-features-container {
  padding: 6rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  background: var(--vp-c-bg);
}

.features-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--vp-c-text-1);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.feature-card {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  color: var(--vp-c-brand);
  background: var(--vp-c-bg-mute);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.feature-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0;
}

@media (max-width: 768px) {
  .key-features-container {
    padding: 4rem 1rem;
  }

  .features-title {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .feature-card {
    padding: 1.5rem;
  }
}
</style> 