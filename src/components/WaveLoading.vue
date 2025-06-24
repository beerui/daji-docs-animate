<template>
  <div class="wave-loading">
    <div class="wave-container">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wave-loading {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .wave-container {
    display: flex;
    gap: 4px;
    align-items: flex-end;
    height: 60px;
  }
  
  .wave {
    width: 6px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 3px;
    animation: wave 1.2s ease-in-out infinite;
    
    &:nth-child(1) {
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}

@keyframes wave {
  0%, 40%, 100% {
    height: 20px;
  }
  20% {
    height: 60px;
  }
}
</style> 