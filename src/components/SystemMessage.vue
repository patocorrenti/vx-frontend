<template functional>
  <div class="system-message" :class="props.type">
    <div style="display: none;">{{ props.type }}</div>
    <slot></slot>
  </div>
</template>

<style lang="scss">
.system-message {
  font-size: 1.6rem;
  margin-bottom: 20px;
  padding: 15px;

  &.error {
    background: $color-red-light;
    color: $color-red;
  }
}
</style>