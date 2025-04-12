<template>
  <div class="testimonials-container">
    <h2 class="testimonials-title">用户评价</h2>
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
    name: "张三",
    title: "资深安全工程师",
    avatar: "/avatars/user1.jpg"
  },
  {
    text: "丰富的后渗透模块和自定义扩展能力，让我们能够应对各种复杂的渗透测试场景。",
    name: "李四",
    title: "红队负责人",
    avatar: "/avatars/user2.jpg"
  },
  {
    text: "平台的多级代理和反溯源功能非常实用，为红队行动提供了可靠的安全保障。",
    name: "王五",
    title: "安全研究员",
    avatar: "/avatars/user3.jpg"
  }
]
</script>

<style scoped>
.testimonials-container {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.testimonials-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--vp-c-text-1);
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