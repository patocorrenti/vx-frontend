<template functional>
  <div class="scenario-item-text" :class="props.line.text_type">
    <div class="type">
      {{ props.line.type_description }}
    </div>
    <div class="text">{{ props.line.content }}</div>
  </div>
</template>

<script>
export default {
  name: 'Scenarios_View_Text'
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