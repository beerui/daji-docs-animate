<template>
  <div class="orbit-stage">
    <div class="orbit-core"></div>
    <div class="orbit-ring">
      <span class="orbit-dot dot-a"></span>
      <span class="orbit-dot dot-b"></span>
    </div>
    <div class="orbit-ring ring-outer">
      <span class="orbit-dot dot-c"></span>
      <span class="orbit-dot dot-d"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrbitRing'
}
</script>

<style scoped lang="scss">
.orbit-stage {
  position: relative;
  width: 280px;
  height: 280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbit-core {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: radial-gradient(circle at 36% 30%, #fff, #2388f7 58%, #0b3c9d);
  box-shadow: 0 0 34px rgba(35, 136, 247, 0.55), 0 0 8px rgba(255, 255, 255, 0.9);
  z-index: 2;
  animation: corePulse 2.4s ease-in-out infinite;
}

@keyframes corePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.25); }
}

.orbit-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(35, 199, 247, 0.35);
  filter: drop-shadow(0 0 12px rgba(35, 199, 247, 0.18));
  animation: orbitSpin 8s linear infinite;
  transform-origin: center;
}

.ring-outer {
  inset: -24px;
  border-color: rgba(21, 109, 242, 0.22);
  animation-direction: reverse;
  animation-duration: 12s;
}

@keyframes orbitSpin {
  to { transform: rotate(360deg); }
}

.orbit-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 14px rgba(35, 199, 247, 0.85), 0 0 28px rgba(21, 109, 242, 0.45);
}

.dot-a { left: 38px; top: 64px; }
.dot-b { right: 46px; bottom: 72px; }
.dot-c { left: 18px; bottom: 52px; }
.dot-d { right: 28px; top: 42px; }
</style>
