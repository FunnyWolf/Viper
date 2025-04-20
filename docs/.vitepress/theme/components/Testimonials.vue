<template>
  <div class="testimonials-container">
    <div class="testimonials-header">
      <div class="header-content">
        <h2 class="header-title">{{ config.header.title }}</h2>
        <p class="header-description">{{ config.header.description }}</p>
      </div>
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
const props = defineProps({
  config: {
    type: Object,
    required: true
  }
})

const getColumnTestimonials = (columnIndex) => {
  const itemsPerColumn = 3;
  const start = (columnIndex - 1) * itemsPerColumn;
  const end = start + itemsPerColumn;
  const testimonials = props.config.testimonials;
  const wrappedTestimonials = [...testimonials, ...testimonials];
  return wrappedTestimonials.slice(start, end);
}
</script>

<style scoped>
/* 新增标题和描述的样式 */
.testimonials-header {
  max-width: 1200px; /* 增加最大宽度 */
  margin: 0 auto 2rem;
  text-align: center;
  padding: 0 2rem;
}

.header-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap; /* 防止换行 */
}

.header-description {
  font-size: 1.2rem;
  max-width: 900px;
  margin: 0 auto 1rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  padding: 0 1rem;
}

/* 保持其他现有样式不变 */
.testimonial-column {
  overflow: hidden;
  height: 500px;
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

.testimonials-container {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  overflow: hidden;
}

.testimonials-columns {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.scroll-container {
  position: relative;
  animation-duration: 30s;
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
}

/* 其他样式保持不变 */
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

/* 添加响应式样式 */
@media (max-width: 768px) {
  .header-title {
    font-size: 2rem;
    white-space: normal; /* 在移动端允许换行 */
  }

  .header-description {
    font-size: 1.1rem;
  }
}
</style> 