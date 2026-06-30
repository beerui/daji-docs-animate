<template>
  <div class="tilt-card" ref="cardRef">
    <div class="tilt-shine"></div>
    <div class="tilt-content">
      <slot>
        <div class="tilt-placeholder">
          <strong>3D Tilt Card</strong>
          <span>Hover me</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue'

export default {
  name: 'TiltCard',
  setup() {
    const cardRef = ref(null)

    const onMove = (e) => {
      const card = cardRef.value
      if (!card || window.innerWidth < 760) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const px = x / rect.width
      const py = y / rect.height
      card.style.setProperty('--tilt-x', ((0.5 - py) * 12).toFixed(2) + 'deg')
      card.style.setProperty('--tilt-y', ((px - 0.5) * 14).toFixed(2) + 'deg')
      card.style.setProperty('--tilt-lift', '-6px')
      card.style.setProperty('--shine-x', (px * 100).toFixed(1) + '%')
      card.style.setProperty('--shine-y', (py * 100).toFixed(1) + '%')
    }

    const onLeave = () => {
      const card = cardRef.value
      if (!card) return
      card.style.setProperty('--tilt-x', '0deg')
      card.style.setProperty('--tilt-y', '0deg')
      card.style.setProperty('--tilt-lift', '0px')
    }

    onBeforeUnmount(() => {
      const card = cardRef.value
      if (card) {
        card.removeEventListener('pointermove', onMove)
        card.removeEventListener('pointerleave', onLeave)
      }
    })

    return { cardRef, onMove, onLeave }
  }
}
</script>

<style scoped lang="scss">
.tilt-card {
  position: relative;
  border-radius: 22px;
  background: linear-gradient(145deg, #ffffff, #f0f4ff);
  border: 1px solid rgba(18, 63, 125, 0.12);
  box-shadow: 0 20px 60px rgba(18, 53, 105, 0.11);
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  transform-style: preserve-3d;
  transform: perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) translateY(var(--tilt-lift, 0px));
  transition: transform 0.16s ease, box-shadow 0.22s ease;
  min-height: 240px;
  padding: 28px;

  &:hover {
    box-shadow: 0 28px 80px rgba(18, 53, 105, 0.18);
  }
}

.tilt-shine {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(circle at var(--shine-x, 50%) var(--shine-y, 50%), rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0) 38%);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.tilt-card:hover .tilt-shine {
  opacity: 1;
}

.tilt-content {
  position: relative;
  z-index: 2;
}

.tilt-placeholder {
  text-align: center;
  padding: 60px 20px;

  strong {
    display: block;
    font-size: 22px;
    letter-spacing: -0.03em;
    color: #0b3c9d;
  }

  span {
    display: block;
    margin-top: 8px;
    color: #5d6d86;
    font-size: 14px;
  }
}
</style>
