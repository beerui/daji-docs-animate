<template>
  <div class="logo-sheen">
    <div class="sheen-mark">
      <slot>
        <span class="sheen-icon">✦</span>
      </slot>
    </div>
    <div class="sheen-label">
      <slot name="label">Logo</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoSheen'
}
</script>

<style scoped lang="scss">
.logo-sheen {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.sheen-mark {
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(145deg, #0f6df3, #19cff4);
  box-shadow: 0 14px 32px rgba(21, 109, 242, 0.3);
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: -50%;
    background: linear-gradient(120deg, transparent 35%, rgba(255, 255, 255, 0.68), transparent 64%);
    transform: translateX(-95%) rotate(15deg);
    animation: logoSheen 4.2s ease-in-out infinite;
  }
}

@keyframes logoSheen {
  0%, 46% { transform: translateX(-95%) rotate(15deg); }
  70%, 100% { transform: translateX(95%) rotate(15deg); }
}

.sheen-icon {
  font-size: 24px;
  color: #fff;
  z-index: 1;
}

.sheen-label {
  font-weight: 800;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: #0b3c9d;
}
</style>
