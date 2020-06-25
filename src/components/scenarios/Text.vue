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
  margin-bottom: 10px;

  .type {
    color: #7a7a7a;
    font-size: 1.4rem;
    font-weight: bold;
    opacity: 0.6;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .text {
    box-sizing: border-box;
    color: #000;
    flex: 1 1 0;
    font-family: $font-serif;
    font-size: 1.6rem;
    line-height: 1.65;
    max-width: 663px;
  }
  &.scenario_setup {
    .text { font-family: $font-sans; font-weight: bold; font-size: 1.5rem; }
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
@media (min-width: $breakpoint_movile_large) {
  .scenario-item-text {
    display: flex;
    margin-bottom: 0;

    .type {
      width: $scenario-type__width;
      padding-top: .8rem;
    }
    .text {
      font-size: 1.7rem;
      line-height: 1.75;
      padding-left: 36px;
    }
    &.scenario_setup {
      font-size: 1.6rem;
    }
  }
}
</style>