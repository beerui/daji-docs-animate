<template>
  <div class="steps-grid">
    <div class="step-card">
      <img src="https://static.chinamarket.cn/static/trade-exhibition/en-station/about/how-works-1.png" alt="Sign up & Share your Needs" class="step-image" />
      <div class="step-title">Sign up</div>
      <div class="btn">RFQ</div>
    </div>
  </div>
</template>

<script setup>
</script>
<style scoped lang="scss">
.steps-grid {
  padding: 20px;
}
.step-card {
  text-align: center;
  width: 205px;
  height: 180px;
  position: relative;
  box-sizing: content-box;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid transparent;
  cursor: pointer;
  background: #ffffff23;
  .btn {
    background: #2B3245;
    border-radius: 4px;
    padding: 6px 14px;
    color: #fff;
    font-size: 20px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
    transition: all 0.3s ease;
  }
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
    .step-image {
      transform: scale(1.2);
    } 
    .step-title {
      transform: translateY(6px);
    }
    .btn {
      display: block;
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
  
  .step-image {
    width: 100px;
    height: 60px;
    object-fit: contain;
    margin: 0 auto 20px;
    transition: transform 0.3s ease;
  }
  
  .step-title {
    font-size: 24px;
    font-weight: 500;
    color: #2B3245;
    line-height: 1.3;
    transition: transform 0.3s ease;
  }
}
</style>