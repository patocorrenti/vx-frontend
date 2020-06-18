<template>
  <div class="scenario-item-text">
    <div class="type">{{ item.type }}</div>
    <div class="text">{{ item.content }}</div>
  </div>
</template>

<script>
export default {
  name: 'Scenarios View Text',
  props: ['item']
}
</script>

<style lang="scss">
.scenario-item-text {
  display: flex;

  .type {
    font-size: 1.4rem;
    width: 80px;
  }
  .text {
    box-sizing: border-box;
    flex: 1 1 0;
    font-size: 1.6rem;
    padding-left: 36px;
    max-width: 663px;
  }
}
</style>