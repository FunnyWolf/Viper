<template>
  <div class="key-features-container">
    <div class="features-header">
      <div class="header-content">
        <h2 class="header-title">更强大的红队能力</h2>
        <p class="header-description">智能、高效且专业，VIPER 是使用AI进行红队行动的最佳选择。</p>
      </div>
      <a href="/zh/guide/welcome_to_viper" class="learn-more">
        了解更多特性
      </a>
    </div>
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
    title: "一键部署",
    description: "支持Docker容器化部署方案,便捷高效。",
    icon: "i-carbon-cloud-satellite"
  },
  {
    title: "溯源防护",
    description: "内置反溯源、多级代理、防御规避等红队专用防护机制。",
    icon: "i-carbon-security"
  },
  {
    title: "团队协作",
    description: "支持多用户协同作业,内置角色权限管理和操作记录功能。",
    icon: "i-carbon-collaboration"
  },
  {
    title: "多模型支持",
    description: "支持OpenAI、Deepseek等多个AI模型,根据任务智能分配最适合的模型。",
    icon: "i-carbon-machine-learning"
  },
  {
    title: "MCP服务",
    description: "独立运行的MCP服务器，集成nmap、nuclei等安全工具，支持自然语言调用。",
    icon: "i-carbon-cloud-services"
  },
  {
    title: "开放扩展",
    description: "支持Python插件开发,可自定义工作流和功能模块,灵活应对各类场景。",
    icon: "i-carbon-code"
  },
  {
    title: "多级控制",
    description: "支持多层级的Payload控制,灵活管理大型网络红队任务。",
    icon: "i-carbon-hierarchy"
  },
  {
    title: "原生命令行",
    description: "完整复制msfconsole操作体验，支持智能提示、快捷键操作和实时输出。",
    icon: "i-carbon-terminal"
  },
  {
    title: "网络穿透",
    description: "集成内网路由、端口转发、Socks代理等功能，轻松处理复杂网络环境。",
    icon: "i-carbon-network"
  },
  {
    title: "红队武器库",
    description: "内置WebDelivery、凭证获取等红队常用功能，使用更加便捷。",
    icon: "i-carbon-security"
  },
  {
    title: "完善的文档",
    description: "提供中英双语技术文档，包含详细的使用教程和原理解析，助力快速上手。",
    icon: "i-carbon-document"
  },
  {
    title: "自动化通知",
    description: "支持钉钉、Server酱等多种通知方式，可配置Session上线、任务完成等自动推送。",
    icon: "i-carbon-notification"
  },

]
</script>

<style scoped>
/* 添加新的样式 */
.features-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding: 0 2rem;
}

.header-content {
  flex: 1;
}

.header-title {
  font-size: 3.5rem; /* 增大字体大小 */
  font-weight: 700; /* 加粗 */
  margin-bottom: 1.2rem;
  color: rgba(255, 255, 255, 0.95); /* 改为白色 */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 添加文字阴影提高可读性 */
}

.header-description {
  font-size: 1.4rem; /* 稍微增大描述文字 */
  color: rgba(255, 255, 255, 0.8);
  max-width: 640px;
  line-height: 1.6;
}

.learn-more {
  display: inline-block;
  padding: 0.8rem 1.6rem;
  background: white;
  color: #1a1a1a;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.learn-more:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 保持原有的其他样式不变 */
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
  background: /* 左下角 */ radial-gradient(circle at 0% 100%, rgba(255, 71, 71, 0.8) 0%, transparent 50%),
    /* 右下角 */ radial-gradient(circle at 100% 100%, rgba(123, 97, 255, 0.8) 0%, transparent 50%),
    /* 下边中间 */ radial-gradient(circle at 50% 100%, rgba(255, 105, 180, 0.6) 0%, transparent 50%),
    /* 整体底色 */ linear-gradient(to top,
      rgba(18, 18, 18, 0.8) 0%,
      rgba(18, 18, 18, 0.95) 50%);
}

.gradient-1 {
  background: radial-gradient(circle at 0% 100%, rgba(97, 255, 206, 0.8) 0%, transparent 50%),
  radial-gradient(circle at 100% 100%, rgba(97, 210, 255, 0.8) 0%, transparent 50%),
  radial-gradient(circle at 50% 100%, rgba(255, 97, 210, 0.6) 0%, transparent 50%),
  linear-gradient(to top,
      rgba(18, 18, 18, 0.8) 0%,
      rgba(18, 18, 18, 0.95) 50%);
}

.gradient-2 {
  background: radial-gradient(circle at 0% 100%, rgba(255, 185, 97, 0.8) 0%, transparent 50%),
  radial-gradient(circle at 100% 100%, rgba(255, 97, 210, 0.8) 0%, transparent 50%),
  radial-gradient(circle at 50% 100%, rgba(123, 97, 255, 0.6) 0%, transparent 50%),
  linear-gradient(to top,
      rgba(18, 18, 18, 0.8) 0%,
      rgba(18, 18, 18, 0.95) 50%);
}

.gradient-3 {
  background: radial-gradient(circle at 0% 100%, rgba(97, 255, 142, 0.8) 0%, transparent 50%),
  radial-gradient(circle at 100% 100%, rgba(97, 255, 206, 0.8) 0%, transparent 50%),
  radial-gradient(circle at 50% 100%, rgba(97, 210, 255, 0.6) 0%, transparent 50%),
  linear-gradient(to top,
      rgba(18, 18, 18, 0.8) 0%,
      rgba(18, 18, 18, 0.95) 50%);
}

.gradient-4 {
  background: radial-gradient(circle at 0% 100%, rgba(123, 97, 255, 0.8) 0%, transparent 50%),
  radial-gradient(circle at 100% 100%, rgba(255, 97, 210, 0.8) 0%, transparent 50%),
  radial-gradient(circle at 50% 100%, rgba(97, 255, 206, 0.6) 0%, transparent 50%),
  linear-gradient(to top,
      rgba(18, 18, 18, 0.8) 0%,
      rgba(18, 18, 18, 0.95) 50%);
}

.gradient-5 {
  background: radial-gradient(circle at 0% 100%, rgba(255, 97, 210, 0.8) 0%, transparent 50%),
  radial-gradient(circle at 100% 100%, rgba(97, 255, 206, 0.8) 0%, transparent 50%),
  radial-gradient(circle at 50% 100%, rgba(123, 97, 255, 0.6) 0%, transparent 50%),
  linear-gradient(to top,
      rgba(18, 18, 18, 0.8) 0%,
      rgba(18, 18, 18, 0.95) 50%);
}

.gradient-6 {
  background: radial-gradient(circle at 0% 100%, rgba(97, 210, 255, 0.8) 0%, transparent 50%),
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
  -webkit-mask: linear-gradient(#fff 0 0) content-box,
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

@media (max-width: 768px) {
  .features-header {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .header-description {
    margin: 0 auto;
  }
}

/* 移动端适配 */
@media (max-width: 768px) {
  .header-title {
    font-size: 2.8rem; /* 移动端稍微缩小字体 */
  }

  .header-description {
    font-size: 1.2rem;
  }
}
</style> 
