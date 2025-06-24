<template>
  <div class="floating-button">
    <button class="float-btn">
      点击我
    </button>
  </div>
</template>

<style scoped lang="scss">
.floating-button {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .float-btn {
    padding: 15px 30px;
    background: linear-gradient(45deg, #ff9a56, #ff6b6b);
    border: none;
    border-radius: 25px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    animation: float 2s ease-in-out infinite;
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
    }
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style> 