<template>
  <div class="camera-container">
    <div class="camera-wrapper group">
      <!-- 相机图标 -->
      <svg width="64" height="54" viewBox="0 0 64 54" fill="none" class="camera-icon">
        <path
          d="M63.8788 45.168C63.9023 45.1284 63.9301 45.0864 63.9464 45.0422L64 45.0422C63.9651 45.1028 63.9187 45.154 63.8789 45.2099L63.8789 49.1567C63.8789 51.3247 62.1069 53.0874 59.9298 53.0874L3.94921 53.0874C1.77214 53.0874 0 51.3247 0 49.1567L0 10.8894C0 8.72271 1.77214 6.96 3.94921 6.96L15.9178 6.96L15.9854 6.82964L17.5502 3.71988C17.6178 3.56733 19.2407 7.37868e-07 21.4435 7.37868e-07L42.4377 0C44.5916 0 46.1728 3.36244 46.3497 3.75599L47.8958 6.82964L47.9634 6.96L59.9297 6.96C62.1068 6.96 63.8788 8.72271 63.8788 10.8894L63.8788 45.168ZM49.2881 15.486C49.2881 17.222 50.7016 18.6353 52.4364 18.6353C54.1735 18.6353 55.5869 17.222 55.5869 15.486C55.5869 13.7477 54.1735 12.3354 52.4364 12.3354C50.7016 12.3354 49.2881 13.7477 49.2881 15.486ZM18.2138 28.4839C18.2138 35.9003 24.2819 41.936 31.7379 41.936C39.1939 41.936 45.2598 35.9003 45.2598 28.4839C45.2598 21.0676 39.1939 15.0343 31.7379 15.0343C24.2819 15.0343 18.2138 21.0676 18.2138 28.4839ZM22.3817 28.4839C22.3817 23.3565 26.5777 19.186 31.7378 19.186C36.8956 19.186 41.0938 23.3565 41.0938 28.4839C41.0938 33.6114 36.8956 37.7842 31.7378 37.7842C26.5777 37.7842 22.3817 33.6114 22.3817 28.4839Z"
          class="camera-path"
        />
      </svg>
      <div class="camera-label">相机图标动画</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CameraIcon'
}
</script>

<style scoped lang="scss">
.camera-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 2rem;
}

.camera-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 2rem;
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(250, 62, 62, 0.05);
    transform: translateY(-2px);
  }
}

.camera-label {
  font-size: 14px;
  color: #666;
  font-weight: 500;
  text-align: center;
}

/* 相机图标SVG动画 */
.camera-icon {
  transform: scale(1);
  transition: transform 0.1s ease;
}

.camera-path {
  fill: #fa3e3e;
  stroke: none;
  transition: all 0.1s ease;
}

/* 鼠标悬停时的动画效果 */
.group:hover .camera-icon {
  animation: camera-pulse-once 1s ease-in-out forwards !important;
}

.group:hover .camera-path {
  animation: camera-stroke-once 2s ease-in-out forwards !important;
}

/* 鼠标移出时的反向动画 */
.group:not(:hover) .camera-icon {
  animation: camera-pulse-out 1s ease-in-out forwards !important;
}

.group:not(:hover) .camera-path {
  animation: camera-stroke-out 1.5s ease-in-out forwards !important;
}

@keyframes camera-stroke-once {
  0% {
    fill: rgba(250, 62, 62, 0);
    stroke: #fa3e3e;
    stroke-dashoffset: 300;
    stroke-dasharray: 0 300;
    stroke-width: 2;
  }
  50% {
    fill: rgba(250, 62, 62, 0);
    stroke: #fa3e3e;
    stroke-dashoffset: 0;
    stroke-dasharray: 300 0;
    stroke-width: 2;
  }
  80% {
    fill: rgba(250, 62, 62, 0);
    stroke: #fa3e3e;
    stroke-width: 1;
  }
  100% {
    fill: rgba(250, 62, 62, 1);
    stroke: rgba(250, 62, 62, 0);
    stroke-dashoffset: -300;
    stroke-dasharray: 300 0;
    stroke-width: 0;
  }
}

@keyframes camera-pulse-once {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1.05);
  }
}

@keyframes camera-pulse-out {
  0% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes camera-stroke-out {
  0% {
    fill: rgba(250, 62, 62, 1);
    stroke: rgba(250, 62, 62, 0);
    stroke-dashoffset: -300;
    stroke-dasharray: 300 0;
    stroke-width: 0;
  }
  30% {
    fill: rgba(250, 62, 62, 0.5);
    stroke: #fa3e3e;
    stroke-width: 1;
    stroke-dashoffset: -150;
    stroke-dasharray: 150 150;
  }
  60% {
    fill: rgba(250, 62, 62, 0);
    stroke: #fa3e3e;
    stroke-dashoffset: 0;
    stroke-dasharray: 0 300;
    stroke-width: 2;
  }
  100% {
    fill: #fa3e3e;
    stroke: none;
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0;
    stroke-width: 0;
  }
}
</style> 