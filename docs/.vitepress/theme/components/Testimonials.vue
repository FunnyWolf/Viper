<template>
  <div class="testimonials-container fade-in">
    <div class="testimonials-header">
      <h2 class="header-title">深受全球红队专家信赖</h2>
      <p class="header-description">来自世界各地的安全工程师都在使用 Viper 进行红队评估</p>
    </div>
    
    <div class="testimonials-columns">
      <div v-for="columnIndex in 4" :key="columnIndex" class="testimonial-column">
        <div class="scroll-container" :class="columnIndex % 2 === 0 ? 'scroll-up' : 'scroll-down'">
          <div v-for="(testimonial, index) in getColumnTestimonials(columnIndex)" 
               :key="index" 
               class="testimonial-card">
            <div class="testimonial-content">
              <p class="testimonial-text">{{ testimonial.text }}</p>
              <div class="testimonial-author">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="author-avatar">
                <div class="author-info">
                  <h3 class="author-name">{{ testimonial.name }}</h3>
                  <p class="author-title">{{ testimonial.title }}</p>
                </div>
              </div>
            </div>
            <div class="gradient-border"></div>
          </div>
          <!-- 复制第一组卡片到底部以实现无缝滚动 -->
          <div v-for="(testimonial, index) in getColumnTestimonials(columnIndex)" 
               :key="`duplicate-${index}`" 
               class="testimonial-card">
            <div class="testimonial-content">
              <p class="testimonial-text">{{ testimonial.text }}</p>
              <div class="testimonial-author">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="author-avatar">
                <div class="author-info">
                  <h3 class="author-name">{{ testimonial.name }}</h3>
                  <p class="author-title">{{ testimonial.title }}</p>
                </div>
              </div>
            </div>
            <div class="gradient-border"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const testimonials = [
  {
    text: "Viper平台让红队评估工作变得更加高效，内置的智能体和自动化工作流令人印象深刻。",
    name: "zhang_sec",
    title: "资深安全工程师",
    avatar: "/user_avatar/user_5221866.jpg"
  },
  {
    text: "丰富的后渗透模块和自定义扩展能力，让我们能够应对各种复杂的渗透测试场景。",
    name: "hex0punk",
    title: "红队负责人",
    avatar: "/user_avatar/user_53968859.jpg"
  },
  {
    text: "平台的多级代理和反溯源功能非常实用，为红队行动提供了可靠的安全保障。",
    name: "binary-ninja42",
    title: "安全研究员",
    avatar: "/user_avatar/user_54470486.jpg"
  },
  {
    text: "Log4j被动扫描模块帮我们及时发现了几个重要系统的漏洞，避免了可能的安全事故。",
    name: "exploit3r",
    title: "渗透测试工程师",
    avatar: "/user_avatar/user_55073742.jpg"
  },
  {
    text: "智能邮件钓鱼模块极大提升了社会工程评估的效率，生成的邮件内容非常专业。",
    name: "darknet-hunter",
    title: "社会工程专家",
    avatar: "/user_avatar/user_57172303.jpg"
  },
  {
    text: "作为一个开源平台，Viper的代码质量和文档完整性都令人惊喜。",
    name: "code-slinger",
    title: "开源贡献者",
    avatar: "/user_avatar/user_573204.jpg"
  },
  {
    text: "父进程PID伪装功能帮助我们绕过了多个终端防护软件，效果显著。",
    name: "shell-storm99",
    title: "安全工具开发者",
    avatar: "/user_avatar/user_58617927.jpg"
  },
  {
    text: "Docker部署非常便捷，几分钟就能搭建完整的红队基础设施。",
    name: "container-wizard",
    title: "DevSecOps工程师",
    avatar: "/user_avatar/user_59047746.jpg"
  },
  {
    text: "内置的LDAP服务器让内网渗透测试变得更加顺畅。",
    name: "net-nomad",
    title: "网络安全顾问",
    avatar: "/user_avatar/user_61531053.jpg"
  },
  {
    text: "平台的多人协作功能让团队配合更加默契。",
    name: "dave_miller",
    title: "红队技术主管",
    avatar: "/user_avatar/user_61972524.jpg"
  },
  {
    text: "随机身份生成模块在社会工程测试中非常有用。",
    name: "li_wei",
    title: "社工专家",
    avatar: "/user_avatar/user_66939505.jpg"
  },
  {
    text: "Web界面设计直观易用，即使是新手也能快速上手。",
    name: "john_smith82",
    title: "Web安全专家",
    avatar: "/user_avatar/user_69196480.jpg"
  },
  {
    text: "MSF集成做得很好，既保留了原有的灵活性，又增加了很多实用的扩展。",
    name: "wang_hacker",
    title: "漏洞利用专家",
    avatar: "/user_avatar/user_73398250.jpg"
  },
  {
    text: "反溯源机制设计得很巧妙，多层代理让行动更有保障。",
    name: "stealth-ops",
    title: "网络专家",
    avatar: "/user_avatar/user_79766401.jpg"
  },
  {
    text: "自定义模块开发文档很详细，让我们能够快速开发新功能。",
    name: "dev-shadow",
    title: "安全开发工程师",
    avatar: "/user_avatar/user_84424775.jpg"
  },
  {
    text: "资产管理功能很强大，让目标梳理和漏洞跟踪变得系统化。",
    name: "mike_security",
    title: "安全架构师",
    avatar: "/user_avatar/user_84717628.jpg"
  },
  {
    text: "一键部署功能很实用，让服务器的隐藏变得简单。",
    name: "chen_cloud",
    title: "云安全专家",
    avatar: "/user_avatar/user_85027235.jpg"
  },
  {
    text: "漏洞扫描引擎的误报率很低，节省了大量人工验证的时间。",
    name: "vuln-hunter",
    title: "漏洞挖掘专家",
    avatar: "/user_avatar/user_90662554.jpg"
  },
  {
    text: "完整的API支持让我们能够将系统整合进现有的安全流程中。",
    name: "api-ninja",
    title: "系统架构师",
    avatar: "/user_avatar/user_91668850.jpg"
  },
  {
    text: "持续的更新和活跃的社区支持让人充满信心。",
    name: "cyber-ronin",
    title: "安全社区贡献者",
    avatar: "/user_avatar/user_93545815.jpg"
  },
  {
    text: "内置的代码混淆功能帮助我们有效规避了检测。",
    name: "alex_wilson",
    title: "恶意代码分析师",
    avatar: "/user_avatar/user_96396687.jpg"
  },
  {
    text: "多平台支持让我们在不同环境下都能高效完成任务。",
    name: "liu_pentest",
    title: "渗透测试工程师",
    avatar: "/user_avatar/user_98887868.jpg"
  },
  {
    text: "内存加载技术的实现非常巧妙，提高了隐蔽性。",
    name: "mem-wizard",
    title: "逆向工程师",
    avatar: "/user_avatar/user_9956785.jpg"
  },
  {
    text: "插件系统设计得很灵活，让功能扩展变得简单。",
    name: "plugin-smith",
    title: "安全研发工程师",
    avatar: "/user_avatar/user_17442138.jpg"
  },
  {
    text: "权限维持模块的多样性给了我们更多选择空间。",
    name: "root-keeper",
    title: "后渗透专家",
    avatar: "/user_avatar/user_20459135.jpg"
  },
  {
    text: "UI设计简洁明了，操作流程很符合实战需求。",
    name: "ui-phantom",
    title: "用户体验设计师",
    avatar: "/user_avatar/user_22866522.jpg"
  },
  {
    text: "实时监控和告警功能帮助我们及时发现和响应安全事件。",
    name: "alert-0day",
    title: "安全运营专家",
    avatar: "/user_avatar/user_2657077.jpg"
  },
  {
    text: "自动化报告生成功能节省了大量的文档编写时间。",
    name: "report-forge",
    title: "安全评估专家",
    avatar: "/user_avatar/user_29817545.jpg"
  },
  {
    text: "漏洞利用模块的成功率很高，大大提升了渗透测试效率。",
    name: "exploit-labs",
    title: "漏洞研究员",
    avatar: "/user_avatar/user_32714454.jpg"
  },
  {
    text: "内网渗透模块让横向移动变得更加顺畅。",
    name: "lateral-move",
    title: "内网渗透专家",
    avatar: "/user_avatar/user_5221866.jpg"
  }
]

// 获取每列的评价，限制每列显示的数量
const getColumnTestimonials = (columnIndex) => {
  const itemsPerColumn = 3; // 每列显示3个评价
  const totalColumns = 4;
  const start = (columnIndex - 1) * itemsPerColumn;
  const end = start + itemsPerColumn;
  
  // 如果到达数组末尾，从头开始取
  const wrappedTestimonials = [...testimonials, ...testimonials];
  return wrappedTestimonials.slice(start, end);
}

// 添加渐入效果
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  const container = document.querySelector('.testimonials-container');
  if (container) {
    observer.observe(container);
  }
});
</script>

<style scoped>
/* 添加渐入渐出效果 */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.testimonials-container {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  overflow: hidden;
}

.testimonials-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.header-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
  position: relative;
  z-index: 1;
}

.header-title::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.8;
  z-index: -1;
}

.header-description {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto;
}

.testimonials-columns {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem;
}

.testimonial-column {
  overflow: hidden;
  height: 500px; /* 减小高度以显示2-3个评价 */
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.scroll-container {
  position: relative;
  animation-duration: 30s; /* 减慢滚动速度 */
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-play-state: running;
}

.scroll-container:hover {
  animation-play-state: paused;
}

.scroll-up {
  animation-name: scrollUp;
}

.scroll-down {
  animation-name: scrollDown;
}

@keyframes scrollUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

@keyframes scrollDown {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}

.testimonial-card {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  height: 180px; /* 固定卡片高度 */
}

.testimonial-card:hover {
  transform: translateY(-4px);
}

.testimonial-card:hover .gradient-border {
  opacity: 1;
}

.gradient-border {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(
    45deg,
    #ff3366,
    #ff6b6b,
    #4ecdc4,
    #45b7d1,
    #96e6a1,
    #ff3366
  );
  background-size: 200% 200%;
  animation: gradientBorder 3s linear infinite;
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

@keyframes gradientBorder {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.testimonial-content {
  position: relative;
  z-index: 1;
}

.testimonial-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0;
  color: var(--vp-c-text-1);
}

.author-title {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

@media (max-width: 1200px) {
  .testimonials-columns {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .testimonial-column {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .testimonials-columns {
    grid-template-columns: 1fr;
  }
  
  .testimonial-column {
    height: 350px;
  }
}
</style> 