<template>
  <div class="testimonials-container">
    <div class="testimonials-header">
      <h2 class="header-title">深受全球红队专家信赖</h2>
      <p class="header-description">来自世界各地的安全工程师都在使用 Viper 进行红队评估</p>
    </div>
    <div class="testimonials-grid">
      <div v-for="(testimonial, index) in testimonials" 
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
      </div>
    </div>
  </div>
</template>

<script setup>
const testimonials = [
  {
    text: "Viper平台让红队评估工作变得更加高效，内置的智能体和自动化工作流令人印象深刻。",
    name: "0xDark",
    title: "资深安全工程师",
    avatar: "/avatars/user1.jpg"
  },
  {
    text: "丰富的后渗透模块和自定义扩展能力，让我们能够应对各种复杂的渗透测试场景。",
    name: "RedHunter",
    title: "红队负责人", 
    avatar: "/avatars/user2.jpg"
  },
  {
    text: "平台的多级代理和反溯源功能非常实用，为红队行动提供了可靠的安全保障。",
    name: "ByteKiller",
    title: "安全研究员",
    avatar: "/avatars/user3.jpg"
  },
  {
    text: "Log4j被动扫描模块帮我们及时发现了几个重要系统的漏洞，避免了可能的安全事故。",
    name: "NullByte",
    title: "渗透测试工程师",
    avatar: "/avatars/user4.jpg"
  },
  {
    text: "智能邮件钓鱼模块极大提升了社会工程评估的效率，生成的邮件内容非常专业。",
    name: "PhishMaster",
    title: "社会工程专家",
    avatar: "/avatars/user5.jpg"
  },
  {
    text: "作为一个开源平台，Viper的代码质量和文档完整性都令人惊喜。",
    name: "CodeShadow",
    title: "开源贡献者",
    avatar: "/avatars/user6.jpg"
  },
  {
    text: "父进程PID伪装功能帮助我们绕过了多个终端防护软件，效果显著。",
    name: "ShellStorm",
    title: "安全工具开发者",
    avatar: "/avatars/user7.jpg"
  },
  {
    text: "Docker部署非常便捷，几分钟就能搭建完整的红队基础设施。",
    name: "DockerNinja",
    title: "DevSecOps工程师",
    avatar: "/avatars/user8.jpg"
  },
  {
    text: "内置的LDAP服务器让内网渗透测试变得更加顺畅，特别是在评估Log4j漏洞时。",
    name: "NetStalker",
    title: "网络安全顾问",
    avatar: "/avatars/user9.jpg"
  },
  {
    text: "平台的多人协作功能让团队配合更加默契，大大提高了红队评估的效率。",
    name: "TeamHacker",
    title: "红队技术主管",
    avatar: "/avatars/user10.jpg"
  },
  {
    text: "随机身份生成模块在社会工程测试中非常有用，生成的信息非常真实。",
    name: "IDForger",
    title: "社工专家",
    avatar: "/avatars/user11.jpg"
  },
  {
    text: "Web界面设计直观易用，即使是新手也能快速上手各项功能。",
    name: "WebHunter",
    title: "Web安全专家",
    avatar: "/avatars/user12.jpg"
  },
  {
    text: "MSF集成做得很好，既保留了原有的灵活性，又增加了很多实用的扩展。",
    name: "MSFMaster",
    title: "漏洞利用专家",
    avatar: "/avatars/user13.jpg"
  },
  {
    text: "反溯源机制设计得很巧妙，多层代理让行动更有保障。",
    name: "ProxyKing",
    title: "网络专家",
    avatar: "/avatars/user14.jpg"
  },
  {
    text: "自定义模块开发文档很详细，让我们能够根据需求快速开发新功能。",
    name: "ModMaker",
    title: "安全开发工程师",
    avatar: "/avatars/user15.jpg"
  },
  {
    text: "资产管理功能很强大，让目标梳理和漏洞跟踪变得系统化。",
    name: "AssetHunter",
    title: "安全架构师",
    avatar: "/avatars/user16.jpg"
  },
  {
    text: "一键部署到Heroku的功能很实用，让C2服务器的隐藏变得简单。",
    name: "CloudRider",
    title: "云安全专家",
    avatar: "/avatars/user17.jpg"
  },
  {
    text: "漏洞扫描引擎的误报率很低，节省了大量人工验证的时间。",
    name: "BugSeeker",
    title: "漏洞挖掘专家",
    avatar: "/avatars/user18.jpg"
  },
  {
    text: "完整的API支持让我们能够将Viper整合进现有的安全流程中。",
    name: "APIWizard",
    title: "系统架构师",
    avatar: "/avatars/user19.jpg"
  },
  {
    text: "持续的更新和活跃的社区支持让人对这个项目充满信心。",
    name: "CyberPunk",
    title: "安全社区贡献者",
    avatar: "/avatars/user20.jpg"
  }
]
</script>

<style scoped>
.testimonials-container {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.testimonials-header {
  text-align: center;
  margin-bottom: 4rem;
}

.header-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1); /* 使用主题的文本颜色，通常在暗色主题下为白色 */
}

.header-description {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.testimonial-card {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.author-title {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

@media (max-width: 768px) {
  .testimonials-container {
    padding: 3rem 1rem;
  }

  .testimonials-title {
    font-size: 2rem;
  }

  .testimonial-card {
    padding: 1.5rem;
  }
}
</style> 