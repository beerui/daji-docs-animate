<template>
  <div class="pulse-heart">
    <div class="heart">❤️</div>
  </div>
</template>

<style scoped lang="scss">
.pulse-heart {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .heart {
    font-size: 40px;
    animation: pulse 1.2s infinite;
    filter: drop-shadow(0 0 10px rgba(255, 69, 0, 0.5));
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style> 