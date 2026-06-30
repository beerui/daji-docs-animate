<template>
  <div class="radar-breath">
    <div class="radar-core"></div>
    <div class="radar-ring r1"></div>
    <div class="radar-ring r2"></div>
    <div class="radar-ring r3"></div>
  </div>
</template>

<script>
export default {
  name: 'RadarBreath'
}
</script>

<style scoped lang="scss">
.radar-breath {
  position: relative;
  width: 220px;
  height: 220px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.radar-core {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #0f6df3;
  box-shadow: 0 0 20px rgba(15, 109, 243, 0.65);
  z-index: 2;
}

.radar-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(15, 109, 243, 0.3);
  animation: radarExpand 3.6s ease-out infinite;
  opacity: 0;
}

.r2 { animation-delay: 1.2s; }
.r3 { animation-delay: 2.4s; }

@keyframes radarExpand {
  0% {
    transform: scale(0.2);
    opacity: 0.85;
    border-color: rgba(35, 199, 247, 0.5);
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
    border-color: rgba(15, 109, 243, 0);
  }
}
</style>
