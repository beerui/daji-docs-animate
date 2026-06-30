<template>
  <div class="svg-draw">
    <svg viewBox="0 0 480 160" class="draw-svg" aria-label="SVG路径绘制动画">
      <defs>
        <linearGradient id="drawGrad" x1="0" x2="1">
          <stop offset="0" stop-color="#0f6df3"/>
          <stop offset="1" stop-color="#23c7f7"/>
        </linearGradient>
        <filter id="drawGlow">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path class="draw-path"
            d="M40 120 C100 30, 210 160, 280 80 S390 30, 440 110"
            fill="none"
            stroke="url(#drawGrad)"
            stroke-width="5"
            stroke-linecap="round"
            filter="url(#drawGlow)"/>
      <circle class="draw-dot" r="7" fill="#ffffff" filter="url(#drawGlow)"/>
      <g fill="#0f6df3" opacity="0.6">
        <circle cx="40" cy="120" r="6"/>
        <circle cx="280" cy="80" r="6"/>
        <circle cx="440" cy="110" r="6"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SvgDrawPath'
}
</script>

<style scoped lang="scss">
.svg-draw {
  max-width: 520px;
  margin: 0 auto;
}

.draw-svg {
  width: 100%;
  height: auto;
}

.draw-path {
  stroke-dasharray: 900;
  stroke-dashoffset: 900;
  animation: drawStroke 2.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards, pathGlow 3.2s ease-in-out 3.4s infinite;
}

@keyframes drawStroke {
  to { stroke-dashoffset: 0; }
}

@keyframes pathGlow {
  0%, 100% { stroke-width: 5; }
  50% { stroke-width: 7; }
}

.draw-dot {
  filter: drop-shadow(0 0 10px rgba(35, 199, 247, 0.7));
  offset-path: path("M40 120 C100 30, 210 160, 280 80 S390 30, 440 110");
  offset-rotate: auto;
  animation: dotTravel 5s ease-in-out infinite;
}

@keyframes dotTravel {
  0% { offset-distance: 0%; opacity: 0.2; }
  10%, 90% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0.2; }
}
</style>
