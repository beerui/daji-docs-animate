<template>
  <div class="bounce-ball">
    <div class="ball"></div>
  </div>
</template>

<style scoped lang="scss">
.bounce-ball {
  height: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  
  .ball {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
    border-radius: 50%;
    animation: bounce 1.5s infinite ease-in-out;
    box-shadow: 0 2px 10px rgba(255, 107, 107, 0.3);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-60px);
  }
  60% {
    transform: translateY(-30px);
  }
}
</style> 