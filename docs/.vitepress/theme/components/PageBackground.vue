<template>
  <canvas ref="canvasRef" class="page-bg-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animId = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  let w, h

  const orbs = [
    { x: 0.2, y: 0.3, vx: 0.15, vy: 0.1, radius: 280, color: [100, 108, 255], alpha: 0.1, phase: 0 },
    { x: 0.8, y: 0.2, vx: -0.12, vy: 0.08, radius: 240, color: [180, 120, 255], alpha: 0.08, phase: 1.5 },
    { x: 0.5, y: 0.7, vx: 0.1, vy: -0.12, radius: 300, color: [80, 200, 255], alpha: 0.07, phase: 3 },
    { x: 0.15, y: 0.8, vx: 0.08, vy: -0.06, radius: 200, color: [100, 255, 160], alpha: 0.06, phase: 4.5 },
    { x: 0.85, y: 0.65, vx: -0.1, vy: 0.09, radius: 220, color: [255, 100, 180], alpha: 0.07, phase: 2 },
  ]

  const dots = Array.from({ length: 100 }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.0003,
    vy: (Math.random() - 0.5) * 0.0003,
    r: Math.random() * 1.5 + 0.5,
    alpha: Math.random() * 0.4 + 0.1
  }))

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    w = window.innerWidth
    h = window.innerHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = w + 'px'
    canvas.style.height = h + 'px'
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  let t = 0

  function draw() {
    ctx.clearRect(0, 0, w, h)
    t += 0.004

    for (const orb of orbs) {
      const ox = orb.x * w + Math.sin(t + orb.phase) * 60
      const oy = orb.y * h + Math.cos(t * 0.7 + orb.phase) * 40
      const pa = orb.alpha * (0.75 + 0.25 * Math.sin(t * 1.5 + orb.phase))
      const [r, g, b] = orb.color
      const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.radius)
      grad.addColorStop(0, `rgba(${r},${g},${b},${pa})`)
      grad.addColorStop(0.5, `rgba(${r},${g},${b},${pa * 0.3})`)
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
      ctx.beginPath()
      ctx.arc(ox, oy, orb.radius, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()
    }

    for (const d of dots) {
      d.x += d.vx
      d.y += d.vy
      if (d.x < 0) d.x = 1
      if (d.x > 1) d.x = 0
      if (d.y < 0) d.y = 1
      if (d.y > 1) d.y = 0
      ctx.beginPath()
      ctx.arc(d.x * w, d.y * h, d.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(180,190,255,${d.alpha})`
      ctx.fill()
    }

    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = (dots[i].x - dots[j].x) * w
        const dy = (dots[i].y - dots[j].y) * h
        const dist2 = dx * dx + dy * dy
        if (dist2 < 18000) {
          ctx.beginPath()
          ctx.moveTo(dots[i].x * w, dots[i].y * h)
          ctx.lineTo(dots[j].x * w, dots[j].y * h)
          ctx.strokeStyle = `rgba(160,170,255,${0.06 * (1 - Math.sqrt(dist2) / 134)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    animId = requestAnimationFrame(draw)
  }

  resize()
  draw()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
})
</script>

<style scoped>
.page-bg-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
}
</style>
