<template>
  <div class="daji-tilt-rotate" aria-label="倾斜旋转的大集圆环动画">
    <div class="ring-wrap">
      <div class="shadow"></div>
      <div class="ring">
        <img :src="imageUrl" alt="" />
      </div>
    </div>
    <div class="rim"></div>
  </div>
</template>

<script>
export default {
  name: 'DajiTiltRotate',
  data() {
    return {
      imageUrl: `${import.meta.env.BASE_URL}daji-bg-base.png`
    }
  }
}
</script>

<style scoped lang="scss">
.daji-tilt-rotate {
  position: relative;
  width: min(320px, 92%);
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.ring-wrap {
  position: absolute;
  left: 50%;
  bottom: 14%;
  width: 48%;
  aspect-ratio: 1;
  transform: translateX(-50%);
  perspective: 720px;
  transform-style: preserve-3d;
}

.shadow {
  position: absolute;
  inset: 30% 10%;
  transform: rotateX(72deg);
  border-radius: 50%;
  background: radial-gradient(
    ellipse,
    rgba(24, 190, 233, 0.5),
    rgba(24, 190, 233, 0.1) 42%,
    transparent 70%
  );
  filter: blur(18px);
  animation: breathe 2.8s ease-in-out infinite;
}

.ring {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;

  img {
    width: 100%;
    height: 100%;
    display: block;
    transform: rotateX(70deg) rotateZ(-18deg);
    transform-origin: 50% 50%;
    animation: spin 2.6s linear infinite;
    filter:
      drop-shadow(0 0 4px rgba(35, 205, 247, 0.9))
      drop-shadow(0 0 14px rgba(35, 205, 247, 0.5));
    will-change: transform;
  }
}

.rim {
  position: absolute;
  left: 50%;
  bottom: 23%;
  width: 50%;
  aspect-ratio: 4.8 / 1;
  transform: translateX(-50%);
  border: 6px solid rgba(54, 205, 246, 0.78);
  border-radius: 50%;
  box-shadow:
    0 0 8px rgba(54, 205, 246, 0.9),
    inset 0 0 12px rgba(6, 100, 170, 0.9);
  pointer-events: none;
}

@keyframes spin {
  from {
    transform: rotateX(70deg) rotateZ(-18deg);
  }

  to {
    transform: rotateX(70deg) rotateZ(342deg);
  }
}

@keyframes breathe {
  0%,
  100% {
    opacity: 0.55;
    transform: rotateX(72deg) scale(0.95);
  }

  50% {
    opacity: 0.85;
    transform: rotateX(72deg) scale(1.06);
  }
}

@media (max-width: 520px) {
  .daji-tilt-rotate {
    width: min(300px, 94%);
    aspect-ratio: 4 / 3;
  }

  .ring-wrap {
    width: 66%;
    bottom: 13%;
  }

  .rim {
    width: 68%;
    bottom: 22%;
  }
}
</style>
