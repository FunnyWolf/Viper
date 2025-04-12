<template>
  <div class="key-features-container">
    <div class="features-grid">
      <div v-for="(feature, index) in features" 
           :key="index"
           :class="['feature-card', `gradient-${index % 7}`]">
        <div class="feature-content">
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
        <div class="gradient-border"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    title: "AI智能助手",
    description: "集成多款LLM模型,提供渗透测试、社工邮件等智能化功能,大幅提升红队效率。",
    icon: "i-carbon-ai-status"
  },
  {
    title: "自动化工作流",
    description: "强大的自动化编排和通知机制,支持全天候监控和多级联动响应。",
    icon: "i-carbon-flow"
  },
  {
    title: "多平台兼容",
    description: "全面支持Windows、Linux、macOS和Android,提供Docker等多种部署方案。",
    icon: "i-carbon-devices"
  },
  {
    title: "渗透测试套件",
    description: "集成100+个后渗透模块和主流安全工具,覆盖ATT&CK全流程。",
    icon: "i-carbon-application"
  },
  {
    title: "安全防护",
    description: "内置反溯源、多级代理、防御规避等红队专用防护机制。",
    icon: "i-carbon-security"
  },
  {
    title: "开放扩展",
    description: "支持Python插件开发,可自定义工作流和功能模块,灵活应对各类场景。",
    icon: "i-carbon-code"
  },
  {
    title: "一键部署",
    description: "支持Docker容器化和云函数等多种快速部署方案,便捷高效。",
    icon: "i-carbon-cloud-satellite"
  },
  {
    title: "实时监控",
    description: "可视化展示网络拓扑、任务状态,支持多人协作和实时通知。",
    icon: "i-carbon-dashboard"
  },
  {
    title: "智能钓鱼",
    description: "基于LLM的智能钓鱼邮件生成,支持HTML模板定制和自动化发送。",
    icon: "i-carbon-email"
  },
  {
    title: "多模型支持",
    description: "支持OpenAI、Claude等多个AI模型,根据任务智能分配最适合的模型。",
    icon: "i-carbon-machine-learning"
  },
  {
    title: "工具集成",
    description: "无缝集成nmap、nuclei等主流安全工具,支持自然语言调用。",
    icon: "i-carbon-tools"
  },
  {
    title: "场景模拟",
    description: "内置多种攻击场景模板,快速构建真实的渗透测试环境。",
    icon: "i-carbon-template"
  },
  {
    title: "多级控制",
    description: "支持多层级的Payload控制,灵活管理大规模渗透测试任务。",
    icon: "i-carbon-hierarchy"
  },
  {
    title: "团队协作",
    description: "支持多用户协同作业,内置角色权限管理和操作审计功能。",
    icon: "i-carbon-collaboration"
  }
]
</script>

<style scoped>
.key-features-container {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  background: var(--vp-c-bg);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-card {
  position: relative;
  border-radius: 16px;
  padding: 2rem;
  height: 280px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  background-size: 200% 200%;
  animation: gradientFlow 15s ease infinite;
  backdrop-filter: blur(10px);
}

.feature-content {
  z-index: 2;
  position: relative;
  height: 100%;
}

.feature-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.feature-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

@keyframes gradientFlow {
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

/* 渐变背景系列 */
.gradient-0 {
  background: 
    /* 左下角 */
    radial-gradient(circle at 0% 100%, rgba(255, 71, 71, 0.8) 0%, transparent 50%),
    /* 右下角 */
    radial-gradient(circle at 100% 100%, rgba(123, 97, 255, 0.8) 0%, transparent 50%),
    /* 下边中间 */
    radial-gradient(circle at 50% 100%, rgba(255, 105, 180, 0.6) 0%, transparent 50%),
    /* 整体底色 */
    linear-gradient(to top, 
      rgba(18, 18, 18, 0.8) 0%,
      rgba(18, 18, 18, 0.95) 50%);
}

.gradient-1 {
  background: 
    radial-gradient(circle at 0% 100%, rgba(97, 255, 206, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(97, 210, 255, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 50% 100%, rgba(255, 97, 210, 0.6) 0%, transparent 50%),
    linear-gradient(to top, 
      rgba(18, 18, 18, 0.8) 0%,
      rgba(18, 18, 18, 0.95) 50%);
}

.gradient-2 {
  background: 
    radial-gradient(circle at 0% 100%, rgba(255, 185, 97, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(255, 97, 210, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 50% 100%, rgba(123, 97, 255, 0.6) 0%, transparent 50%),
    linear-gradient(to top, 
      rgba(18, 18, 18, 0.8) 0%,
      rgba(18, 18, 18, 0.95) 50%);
}

.gradient-3 {
  background: 
    radial-gradient(circle at 0% 100%, rgba(97, 255, 142, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(97, 255, 206, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 50% 100%, rgba(97, 210, 255, 0.6) 0%, transparent 50%),
    linear-gradient(to top, 
      rgba(18, 18, 18, 0.8) 0%,
      rgba(18, 18, 18, 0.95) 50%);
}

.gradient-4 {
  background: 
    radial-gradient(circle at 0% 100%, rgba(123, 97, 255, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(255, 97, 210, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 50% 100%, rgba(97, 255, 206, 0.6) 0%, transparent 50%),
    linear-gradient(to top, 
      rgba(18, 18, 18, 0.8) 0%,
      rgba(18, 18, 18, 0.95) 50%);
}

.gradient-5 {
  background: 
    radial-gradient(circle at 0% 100%, rgba(255, 97, 210, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(97, 255, 206, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 50% 100%, rgba(123, 97, 255, 0.6) 0%, transparent 50%),
    linear-gradient(to top, 
      rgba(18, 18, 18, 0.8) 0%,
      rgba(18, 18, 18, 0.95) 50%);
}

.gradient-6 {
  background: 
    radial-gradient(circle at 0% 100%, rgba(97, 210, 255, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 100% 100%, rgba(123, 97, 255, 0.8) 0%, transparent 50%),
    radial-gradient(circle at 50% 100%, rgba(255, 97, 210, 0.6) 0%, transparent 50%),
    linear-gradient(to top, 
      rgba(18, 18, 18, 0.8) 0%,
      rgba(18, 18, 18, 0.95) 50%);
}

/* 添加光晕效果 */
.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  filter: blur(20px);
  opacity: 0.7;
  z-index: -1;
}

.feature-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 0, 0, 0.2)
  );
  pointer-events: none;
}

.gradient-border {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(
    45deg,
    rgba(255, 97, 210, 0.3),
    rgba(123, 97, 255, 0.3),
    rgba(97, 255, 206, 0.3),
    rgba(255, 97, 210, 0.3)
  );
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.feature-card:hover .gradient-border {
  opacity: 1;
}

@media (max-width: 1200px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    height: 240px;
  }
}
</style> 
