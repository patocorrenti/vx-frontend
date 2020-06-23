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
    color: #7a7a7a;
    font-size: 1.4rem;
    font-weight: bold;
    opacity: 0.6;
    padding-top: .8rem;
    text-transform: uppercase;
    width: 80px;
  }
  .text {
    box-sizing: border-box;
    color: #000;
    flex: 1 1 0;
    font-family: "Athelas";
    font-size: 1.7rem;
    line-height: 1.75;
    max-width: 663px;
    padding-left: 36px;
  }
  &.scenario_setup {
    .text { font-family: "Circular"; font-weight: bold; font-size: 1.6rem; }
  }
  &.user {
    .type { color: $color-type-user; }
    .text { font-style: italic; }
  }
  &.sfx {
    .type { color: $color-type-sfx; }
  }
  &.assistant  {
    .type { color: $color-type-assistant; }
  }

}
</style>