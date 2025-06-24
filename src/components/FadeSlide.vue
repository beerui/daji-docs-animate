<template>
  <div class="fade-slide-container">
    <div class="fade-slide-item">淡入滑动效果</div>
  </div>
</template>

<style scoped lang="scss">
.fade-slide-container {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .fade-slide-item {
    background: linear-gradient(45deg, #4ecdc4, #44a08d);
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    font-weight: 600;
    animation: fadeSlideIn 2s infinite;
    box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
  }
}

@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  50% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style> 