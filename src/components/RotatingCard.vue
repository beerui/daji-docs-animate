<template>
  <div class="rotating-card" @mouseenter="isFlipped = true" @mouseleave="isFlipped = false">
    <div class="card-3d" :class="{ flipped: isFlipped }">
      <div class="card-front">
        <div class="card-icon">🎨</div>
        <h3>前面</h3>
        <p>悬停查看背面</p>
      </div>
      <div class="card-back">
        <div class="card-icon">✨</div>
        <h3>背面</h3>
        <p>3D 翻转效果</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'RotatingCard',
  setup() {
    const isFlipped = ref(false)
    return {
      isFlipped
    }
  }
}
</script>

<style scoped lang="scss">
.rotating-card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  perspective: 1000px;
  padding: 20px;
}

.card-3d {
  width: 200px;
  height: 120px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
  cursor: pointer;
  
  &.flipped {
    transform: rotateY(180deg);
  }
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-front {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  z-index: 2;
}

.card-back {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  transform: rotateY(180deg);
  z-index: 1;
}

.card-icon {
  font-size: 24px;
  margin-bottom: 8px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

p {
  margin: 0;
  font-size: 14px;
  text-align: center;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  line-height: 1.4;
}

// 移动端优化
@media (max-width: 768px) {
  .rotating-card {
    height: 130px;
    padding: 10px;
  }
  
  .card-3d {
    width: 180px;
    height: 100px;
  }
  
  .card-front,
  .card-back {
    padding: 15px;
  }
  
  h3 {
    font-size: 16px;
  }
  
  p {
    font-size: 13px;
  }
  
  .card-icon {
    font-size: 20px;
  }
}
</style> 