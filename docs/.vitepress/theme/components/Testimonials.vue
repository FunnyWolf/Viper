<template>
  <div class="testimonials-container">
    <div class="testimonials-header">
      <h2 class="header-title">{{ config.header.title }}</h2>
      <p class="header-description">{{ config.header.description }}</p>
    </div>

    <div class="testimonials-grid">
      <div v-for="(testimonial, index) in config.testimonials"
           :key="index"
           :class="['testimonial-card', `accent-${index % 6}`]">
        <div class="card-inner">
          <div class="author-row">
            <div class="avatar-ring">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="author-avatar" loading="lazy">
            </div>
            <div class="author-info">
              <h3 class="author-name">{{ testimonial.name }}</h3>
              <p class="author-title">{{ testimonial.title }}</p>
            </div>
          </div>
          <p class="testimonial-text">{{ testimonial.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  config: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.testimonials-header {
  max-width: 1200px;
  margin: 0 auto 3rem;
  text-align: center;
  padding: 0 2rem;
}

.header-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1);
}

.header-description {
  font-size: 1.2rem;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.testimonials-container {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.testimonial-card {
  border-radius: 12px;
  padding: 3px;
  transition: transform 0.2s;
  will-change: transform;
  contain: content;
  content-visibility: auto;
  contain-intrinsic-size: auto 180px;
}

.testimonial-card:hover {
  transform: translateY(-3px);
}

.accent-0 { background: linear-gradient(135deg, #ff6b6b, #ee5a24); }
.accent-1 { background: linear-gradient(135deg, #4ecdc4, #0abde3); }
.accent-2 { background: linear-gradient(135deg, #a55eea, #8854d0); }
.accent-3 { background: linear-gradient(135deg, #ffd93d, #f7b731); }
.accent-4 { background: linear-gradient(135deg, #26de81, #20bf6b); }
.accent-5 { background: linear-gradient(135deg, #45aaf2, #2d98da); }

.card-inner {
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.author-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.avatar-ring {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  padding: 2px;
  flex-shrink: 0;
}

.accent-0 .avatar-ring { background: linear-gradient(135deg, #ff6b6b, #ee5a24); }
.accent-1 .avatar-ring { background: linear-gradient(135deg, #4ecdc4, #0abde3); }
.accent-2 .avatar-ring { background: linear-gradient(135deg, #a55eea, #8854d0); }
.accent-3 .avatar-ring { background: linear-gradient(135deg, #ffd93d, #f7b731); }
.accent-4 .avatar-ring { background: linear-gradient(135deg, #26de81, #20bf6b); }
.accent-5 .avatar-ring { background: linear-gradient(135deg, #45aaf2, #2d98da); }

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--vp-c-bg-soft);
}

.author-info {
  flex: 1;
  min-width: 0;
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

.testimonial-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--vp-c-text-1);
  flex: 1;
}

@media (max-width: 1200px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .header-title {
    font-size: 2rem;
  }

  .header-description {
    font-size: 1.1rem;
  }
}
</style>
