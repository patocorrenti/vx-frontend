<template>
  <nav class="scenarios-paginator">
    <button class="prev" v-if="prevScenario" type="button" @click="getScenario(prevScenario)">
      <font-awesome-icon icon="chevron-left" class="icon"/>
      Previous
    </button>
    <button class="next" v-if="nextScenario" type="button" @click="getScenario(nextScenario)">
      Next 
      <font-awesome-icon icon="chevron-right" class="icon"/>
    </button>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Scenarios_Paginator',
  computed: {
    ...mapGetters('project', ['prevScenario', 'nextScenario'])
  },
  methods: {
    ...mapActions('scenario', ['getScenario'])
  }
}
</script>

<style lang="scss">
.scenarios-paginator {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  button {
    align-items: center;
    background: transparent;
    border: none;
    color: $color-text-grey;
    cursor: pointer;
    display: flex;
    font-family: $font-sans;
    font-size: 1.4rem;
    line-height: 0;
    transition-duration: color .4s;
    font-weight: bold;
    text-transform: uppercase;

    .icon {
      padding: 0 4px;
      transition-duration: .5s;
    }
    &.next {
      margin-left: auto;
    }
    &:focus, &:hover {
      color: #000;
      outline: none;

      &.prev .icon {
        padding: 0 8px 0 0;
      }
      &.next .icon {
        padding: 0 0 0 8px;
      }
    }
  }
}
</style>