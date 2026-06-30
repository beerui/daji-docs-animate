<template>
  <div class="float-orb">
    <div class="orb-glow"></div>
  </div>
</template>

<script>
export default {
  name: 'FloatOrb'
}
</script>

<style scoped lang="scss">
.float-orb {
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: floatOrb 6s ease-in-out infinite;
}

.orb-glow {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle at 34% 26%, rgba(255, 255, 255, 0.96), rgba(77, 163, 255, 0.72) 36%, rgba(9, 84, 196, 0.85) 70%, rgba(3, 35, 95, 0.9));
  box-shadow:
    inset -18px -22px 46px rgba(3, 30, 75, 0.32),
    0 0 56px rgba(21, 109, 242, 0.38),
    0 0 12px rgba(255, 255, 255, 0.55);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -16px;
    border: 2px solid rgba(255, 255, 255, 0.35);
    border-left-color: transparent;
    border-right-color: transparent;
    border-radius: 50%;
    transform: rotate(-22deg);
    animation: orbRingSpin 8s linear infinite;
  }
}

@keyframes floatOrb {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
}

@keyframes orbRingSpin {
  to { transform: rotate(-382deg); }
}
</style>
