<template>
  <div
    class="big-screen-animation"
    :class="[`visual-${config.visual}`]"
    :style="styleVars"
    :aria-label="`${config.label} 大屏动画`"
  >
    <div class="grid-layer"></div>
    <div class="data-rain">
      <span v-for="item in rainItems" :key="item" :style="{ '--i': item }"></span>
    </div>
    <div class="orbit layer">
      <span v-for="item in ringItems" :key="item" :style="{ '--i': item }"></span>
      <i></i>
    </div>
    <div class="flow layer">
      <span v-for="item in streamItems" :key="item" :style="{ '--i': item }"></span>
    </div>
    <div class="radar layer">
      <i></i>
    </div>
    <div class="scan layer">
      <span></span>
      <i></i>
    </div>
    <div class="constellation layer">
      <span
        v-for="item in nodeItems"
        :key="item.id"
        :style="{ left: `${item.x}%`, top: `${item.y}%`, '--i': item.id }"
      ></span>
      <i
        v-for="item in lineItems"
        :key="item.id"
        :style="{
          left: `${item.x}%`,
          top: `${item.y}%`,
          width: `${item.width}px`,
          transform: `rotate(${item.rotate}deg)`,
          '--i': item.id
        }"
      ></i>
    </div>
    <div class="equalizer layer">
      <span
        v-for="item in barItems"
        :key="item.index"
        :style="{ '--i': item.index, height: `${item.height}%` }"
      ></span>
    </div>
    <div class="aurora layer">
      <span v-for="item in waveItems" :key="item" :style="{ '--i': item }"></span>
    </div>
    <div class="core layer">
      <span v-for="item in ringItems" :key="item" :style="{ '--i': item }"></span>
      <i></i>
    </div>
    <div class="rings layer">
      <span v-for="item in pulseItems" :key="item" :style="{ '--i': item }"></span>
    </div>
    <div class="hex layer">
      <span v-for="item in hexItems" :key="item" :style="{ '--i': item }"></span>
    </div>
    <div class="tunnel layer">
      <span v-for="item in tunnelItems" :key="item" :style="{ '--i': item }"></span>
    </div>
    <div class="comet layer">
      <span></span>
      <i></i>
    </div>
    <div class="blueprint layer">
      <span v-for="item in blueprintItems" :key="item" :style="{ '--i': item }"></span>
    </div>
    <div class="heatmap layer">
      <span v-for="item in heatItems" :key="item" :style="{ '--i': item }"></span>
    </div>
    <div class="panels layer">
      <span
        v-for="item in panelItems"
        :key="item.id"
        :style="{
          transform: `translate(${item.x}px, ${item.y}px) rotate(${item.rotate}deg)`,
          '--i': item.id
        }"
      ></span>
    </div>
    <div class="timeline layer">
      <span v-for="item in timelineItems" :key="item" :style="{ '--i': item }"></span>
    </div>
    <div class="ribbons layer">
      <span v-for="item in waveItems" :key="item" :style="{ '--i': item }"></span>
    </div>
    <div class="map layer">
      <span
        v-for="item in mapItems"
        :key="item.id"
        :style="{ left: `${item.x}%`, top: `${item.y}%`, '--i': item.id }"
      ></span>
      <i></i>
    </div>
    <div class="command layer">
      <span v-for="item in pulseItems" :key="item" :style="{ '--i': item }"></span>
      <i
        v-for="item in panelItems"
        :key="item.id"
        :style="{
          transform: `translate(${item.x}px, ${item.y}px) rotate(${item.rotate}deg)`,
          '--i': item.id
        }"
      ></i>
    </div>
    <strong>{{ config.label }}</strong>
  </div>
</template>

<script>
import { computed } from 'vue'
import { bigScreenVisuals } from '../data/bigScreenAnimations.js'

const range = (count) => Array.from({ length: count }, (_, index) => index)
const circlePoints = (count, radiusX, radiusY) => {
  return range(count).map((id) => {
    const angle = (Math.PI * 2 * id) / count
    return {
      id,
      x: Math.round(Math.cos(angle) * radiusX),
      y: Math.round(Math.sin(angle) * radiusY),
      rotate: Math.round((angle * 180) / Math.PI)
    }
  })
}

export default {
  name: 'BigScreenAnimation',
  props: {
    variant: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const config = computed(() => {
      return bigScreenVisuals[props.variant] || bigScreenVisuals['orbital-command']
    })

    const styleVars = computed(() => ({
      '--primary': config.value.primary,
      '--secondary': config.value.secondary,
      '--accent': config.value.accent
    }))

    return {
      config,
      styleVars,
      rainItems: range(14),
      ringItems: range(4),
      streamItems: range(7),
      nodeItems: [
        { id: 0, x: 16, y: 18 },
        { id: 1, x: 44, y: 12 },
        { id: 2, x: 73, y: 22 },
        { id: 3, x: 26, y: 44 },
        { id: 4, x: 54, y: 42 },
        { id: 5, x: 82, y: 50 },
        { id: 6, x: 18, y: 72 },
        { id: 7, x: 48, y: 74 },
        { id: 8, x: 76, y: 70 }
      ],
      lineItems: [
        { id: 0, x: 18, y: 24, width: 78, rotate: 12 },
        { id: 1, x: 44, y: 18, width: 82, rotate: 20 },
        { id: 2, x: 28, y: 46, width: 70, rotate: -5 },
        { id: 3, x: 54, y: 46, width: 76, rotate: 12 },
        { id: 4, x: 20, y: 72, width: 88, rotate: 2 },
        { id: 5, x: 48, y: 70, width: 70, rotate: -10 }
      ],
      barItems: range(18).map(index => ({
        index,
        height: 30 + ((index * 17) % 58)
      })),
      waveItems: range(5),
      pulseItems: range(5),
      hexItems: range(12),
      tunnelItems: range(8),
      blueprintItems: range(9),
      heatItems: range(24),
      panelItems: circlePoints(6, 72, 44),
      timelineItems: range(7),
      mapItems: [
        { id: 0, x: 14, y: 24 },
        { id: 1, x: 32, y: 34 },
        { id: 2, x: 54, y: 22 },
        { id: 3, x: 74, y: 38 },
        { id: 4, x: 24, y: 62 },
        { id: 5, x: 46, y: 56 },
        { id: 6, x: 66, y: 68 },
        { id: 7, x: 84, y: 58 }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.big-screen-animation {
  position: relative;
  width: min(320px, 92%);
  height: 172px;
  overflow: hidden;
  border-radius: 8px;
  background:
    radial-gradient(circle at 50% 48%, color-mix(in srgb, var(--primary), transparent 78%), transparent 34%),
    linear-gradient(135deg, #0b1020 0%, #141927 58%, #090d18 100%);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.08),
    inset 0 0 36px rgba(0, 0, 0, 0.45);
  color: #fff;
  isolation: isolate;
}

.grid-layer {
  position: absolute;
  inset: 0;
  opacity: 0.28;
  background-image:
    linear-gradient(color-mix(in srgb, var(--primary), transparent 78%) 1px, transparent 1px),
    linear-gradient(90deg, color-mix(in srgb, var(--secondary), transparent 82%) 1px, transparent 1px);
  background-size: 22px 22px;
  transform: perspective(240px) rotateX(60deg) translateY(20px);
  transform-origin: 50% 100%;
}

.layer,
.data-rain {
  position: absolute;
  inset: 18px;
  display: none;
}

strong {
  position: absolute;
  left: 16px;
  bottom: 14px;
  z-index: 6;
  color: color-mix(in srgb, var(--primary), white 30%);
  font-size: 12px;
  letter-spacing: 0;
  text-shadow: 0 0 14px var(--primary);
}

.data-rain span {
  position: absolute;
  top: -24px;
  left: calc((var(--i) + 1) * 6.4%);
  width: 2px;
  height: 52px;
  border-radius: 999px;
  background: linear-gradient(180deg, transparent, var(--primary), transparent);
  animation: rain 1.8s linear infinite;
  animation-delay: calc(var(--i) * -0.18s);
}

.orbit,
.core,
.rings,
.command {
  place-items: center;
}

.orbit span,
.core span,
.rings span,
.command span {
  position: absolute;
  width: calc(46px + var(--i) * 26px);
  aspect-ratio: 1;
  border: 1px solid color-mix(in srgb, var(--primary), transparent 28%);
  border-radius: 50%;
  box-shadow: 0 0 18px color-mix(in srgb, var(--primary), transparent 45%);
  animation: spin calc(4s + var(--i) * 1.1s) linear infinite;
}

.orbit span:nth-child(even),
.core span:nth-child(even),
.command span:nth-child(even) {
  border-color: color-mix(in srgb, var(--secondary), transparent 35%);
  animation-direction: reverse;
}

.orbit i,
.core i {
  width: 44px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0 8%, var(--primary) 18%, transparent 68%);
  box-shadow: 0 0 30px var(--primary);
  animation: pulse 1.6s ease-in-out infinite;
}

.flow {
  overflow: hidden;
}

.flow span {
  position: absolute;
  left: -30%;
  top: calc(16% + var(--i) * 10%);
  width: 52%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent);
  box-shadow: 0 0 16px var(--primary);
  animation: flow 1.9s linear infinite;
  animation-delay: calc(var(--i) * -0.22s);
}

.radar {
  place-items: center;
}

.radar::before {
  content: '';
  width: 128px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(circle, transparent 0 22%, color-mix(in srgb, var(--primary), transparent 70%) 23% 24%, transparent 25% 47%, color-mix(in srgb, var(--primary), transparent 75%) 48% 49%, transparent 50%),
    conic-gradient(from 0deg, color-mix(in srgb, var(--primary), transparent 12%), transparent 72deg);
  border: 1px solid color-mix(in srgb, var(--primary), transparent 35%);
  animation: spin 2.2s linear infinite;
}

.radar i {
  position: absolute;
  width: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 16px var(--accent);
  transform: translate(42px, -26px);
  animation: blink 1.4s ease-in-out infinite;
}

.scan {
  display: none;
  place-items: center;
}

.scan span {
  width: 150px;
  height: 96px;
  border: 1px solid color-mix(in srgb, var(--primary), transparent 22%);
  border-radius: 8px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--primary), transparent 88%), transparent);
  box-shadow: inset 0 0 28px color-mix(in srgb, var(--secondary), transparent 62%);
}

.scan i {
  position: absolute;
  width: 150px;
  height: 3px;
  background: var(--accent);
  box-shadow: 0 0 22px var(--accent);
  animation: scan 1.8s ease-in-out infinite;
}

.constellation {
  display: none;
}

.constellation span {
  position: absolute;
  width: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 16px var(--primary);
  animation: pulse 1.8s ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.17s);
}

.constellation i {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--secondary), transparent);
  animation: blink 2.1s ease-in-out infinite;
}

.equalizer {
  align-items: flex-end;
  justify-content: center;
  gap: 5px;
}

.equalizer span {
  width: 7px;
  border-radius: 999px 999px 0 0;
  background: linear-gradient(180deg, var(--accent), var(--primary), var(--secondary));
  box-shadow: 0 0 14px var(--primary);
  animation: equalize 1s ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.08s);
}

.aurora,
.ribbons {
  display: none;
  overflow: hidden;
}

.aurora span,
.ribbons span {
  position: absolute;
  left: -14%;
  top: calc(24% + var(--i) * 10%);
  width: 130%;
  height: 34px;
  border-radius: 50%;
  background: linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent);
  filter: blur(8px);
  opacity: 0.52;
  transform: rotate(calc(-10deg + var(--i) * 5deg));
  animation: wave 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.28s);
}

.rings {
  display: none;
}

.rings span {
  animation: ripple 2.4s ease-out infinite;
  animation-delay: calc(var(--i) * -0.38s);
}

.hex {
  grid-template-columns: repeat(4, 34px);
  grid-auto-rows: 30px;
  place-content: center;
  gap: 8px;
}

.hex span {
  width: 32px;
  aspect-ratio: 1.15;
  background: color-mix(in srgb, var(--primary), transparent 82%);
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%);
  border: 1px solid var(--primary);
  box-shadow: 0 0 14px color-mix(in srgb, var(--primary), transparent 40%);
  animation: pulse 1.9s ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.13s);
}

.tunnel {
  place-items: center;
  perspective: 300px;
}

.tunnel span {
  position: absolute;
  width: calc(40px + var(--i) * 26px);
  height: calc(24px + var(--i) * 16px);
  border: 1px solid color-mix(in srgb, var(--primary), transparent 34%);
  transform: rotateX(62deg) translateZ(calc(var(--i) * -14px));
  box-shadow: 0 0 14px var(--secondary);
  animation: tunnel 1.7s linear infinite;
  animation-delay: calc(var(--i) * -0.16s);
}

.comet {
  display: none;
}

.comet span {
  position: absolute;
  width: 16px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 22px var(--accent), 0 0 40px var(--primary);
  animation: comet 2.2s cubic-bezier(0.28, 0.7, 0.4, 1) infinite;
}

.comet i {
  position: absolute;
  width: 130px;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, var(--primary), var(--accent));
  filter: blur(1px);
  animation: cometTail 2.2s cubic-bezier(0.28, 0.7, 0.4, 1) infinite;
}

.blueprint {
  grid-template-columns: repeat(3, 42px);
  grid-auto-rows: 28px;
  place-content: center;
  gap: 10px;
}

.blueprint span {
  border: 1px solid var(--primary);
  border-radius: 4px;
  box-shadow: inset 0 0 16px color-mix(in srgb, var(--primary), transparent 72%);
  animation: reveal 2s ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.09s);
}

.heatmap {
  grid-template-columns: repeat(6, 20px);
  grid-auto-rows: 18px;
  place-content: center;
  gap: 6px;
}

.heatmap span {
  border-radius: 4px;
  background: linear-gradient(135deg, var(--primary), var(--secondary), var(--accent));
  filter: hue-rotate(calc(var(--i) * 9deg));
  box-shadow: 0 0 12px color-mix(in srgb, var(--primary), transparent 45%);
  animation: heat 1.7s ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.06s);
}

.panels,
.command {
  display: none;
}

.panels span,
.command i {
  position: absolute;
  width: 54px;
  height: 26px;
  border: 1px solid color-mix(in srgb, var(--primary), transparent 25%);
  border-radius: 6px;
  background: linear-gradient(135deg, color-mix(in srgb, var(--primary), transparent 82%), color-mix(in srgb, var(--secondary), transparent 88%));
  box-shadow: 0 0 18px color-mix(in srgb, var(--primary), transparent 58%);
  animation: float 2s ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.15s);
}

.timeline {
  align-items: center;
  justify-content: center;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 76%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
}

.timeline span {
  width: 12px;
  aspect-ratio: 1;
  margin: 0 8px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 16px var(--primary);
  animation: timeline 1.8s ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.16s);
}

.map {
  display: none;
}

.map span {
  position: absolute;
  width: 9px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 16px var(--accent);
  animation: pulse 1.5s ease-in-out infinite;
  animation-delay: calc(var(--i) * -0.14s);
}

.map i {
  position: absolute;
  inset: 24px 36px;
  border: 1px solid color-mix(in srgb, var(--primary), transparent 40%);
  border-radius: 42% 58% 45% 55%;
  box-shadow: inset 0 0 24px color-mix(in srgb, var(--secondary), transparent 70%);
  animation: float 2.6s ease-in-out infinite;
}

.visual-orbit .orbit,
.visual-core .core,
.visual-radar .radar,
.visual-scan .scan,
.visual-constellation .constellation,
.visual-equalizer .equalizer,
.visual-aurora .aurora,
.visual-rings .rings,
.visual-hex .hex,
.visual-tunnel .tunnel,
.visual-blueprint .blueprint,
.visual-heatmap .heatmap,
.visual-panels .panels,
.visual-timeline .timeline,
.visual-command .command {
  display: grid;
}

.visual-flow .flow,
.visual-comet .comet,
.visual-ribbons .ribbons,
.visual-map .map {
  display: block;
}

.visual-matrix .data-rain {
  display: block;
}

.visual-command .command {
  place-items: center;
}

.visual-command .command::before {
  content: '';
  width: 72px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: conic-gradient(var(--primary), var(--secondary), var(--accent), var(--primary));
  box-shadow: 0 0 26px var(--primary);
  animation: spin 2.4s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  50% {
    transform: scale(1.16);
    opacity: 0.72;
  }
}

@keyframes blink {
  50% {
    opacity: 0.35;
  }
}

@keyframes rain {
  to {
    transform: translateY(220px);
  }
}

@keyframes flow {
  to {
    transform: translateX(260%);
  }
}

@keyframes scan {
  0%,
  100% {
    transform: translateY(-46px);
  }

  50% {
    transform: translateY(46px);
  }
}

@keyframes equalize {
  50% {
    transform: scaleY(0.42);
  }
}

@keyframes wave {
  50% {
    transform: translateX(8%) rotate(calc(-4deg + var(--i) * 6deg));
  }
}

@keyframes ripple {
  from {
    opacity: 0.9;
    transform: scale(0.2);
  }

  to {
    opacity: 0;
    transform: scale(1.6);
  }
}

@keyframes tunnel {
  to {
    transform: rotateX(62deg) translateZ(80px);
    opacity: 0;
  }
}

@keyframes comet {
  0% {
    transform: translate(-28px, 118px);
  }

  70%,
  100% {
    transform: translate(232px, 8px);
  }
}

@keyframes cometTail {
  0% {
    transform: translate(-122px, 126px) rotate(-23deg);
  }

  70%,
  100% {
    transform: translate(132px, 18px) rotate(-23deg);
  }
}

@keyframes reveal {
  50% {
    opacity: 0.38;
    transform: translateY(-4px);
  }
}

@keyframes heat {
  50% {
    opacity: 0.45;
    transform: scale(0.84);
  }
}

@keyframes float {
  50% {
    translate: 0 -6px;
  }
}

@keyframes timeline {
  50% {
    transform: scale(1.5);
    background: var(--accent);
  }
}

@media (max-width: 520px) {
  .big-screen-animation {
    width: min(300px, 94%);
    height: 164px;
  }
}
</style>
