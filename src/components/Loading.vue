<template functional>
  <div class="area-loader">
    <font-awesome-icon icon="spinner" class="icon"/>
    <div v-if="props.text" class="text">{{ props.text }}...</div>
  </div>
</template>

<style lang="scss">
.area-loader {
  align-content: center;
  backdrop-filter: blur(2px);
  background: rgba(255,255,255,0.6);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  transform: .5s;
  z-index: 10;

  .icon {
    animation: fa-spin 1.5s infinite ease-in-out;
    font-size: 3rem;
    margin: 0 auto;
  }
  .text {
    margin-top: 10px;
  }
}
</style>