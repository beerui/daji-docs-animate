<template>
  <div class="shimmer-loading">
    <div class="shimmer-card">
      <div class="shimmer-line long"></div>
      <div class="shimmer-line medium"></div>
      <div class="shimmer-line short"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.shimmer-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding: 20px;
}

.shimmer-card {
  width: 200px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.shimmer-line {
  height: 16px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  margin-bottom: 12px;
  animation: shimmer 1.5s infinite;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &.long {
    width: 100%;
  }
  
  &.medium {
    width: 75%;
  }
  
  &.short {
    width: 50%;
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style> 