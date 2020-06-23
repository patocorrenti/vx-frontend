<template>
  <nav class="scenarios-list">
    <ul>
      <li
        v-for="(scenario, key) in scenarios"
        :key="key"
        :class="{selected: scenario.id === currentScenario.id}"
      >
        <article class="scenario-item" @click="getScenario(scenario.id)">
          <header>
            <h4 class="title">{{ scenario.title }}</h4>
            <Status :status="scenario.status"/>
          </header>
          <p class="excerpt">{{ scenario.setup_instructions }}</p>
        </article>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Status from '@/components/scenarios/Status.vue'

export default {
  name: 'Scenarios_List',
  props: ['scenarios'],
  components: {
    Status
  },
  computed: {
    ...mapState('scenario', ['currentScenario'])
  },
  methods: {
    ...mapActions('scenario', ['getScenario'])
  }
}
</script>

<style lang="scss">
.scenarios-list {
  border-right: solid 1px $color-line-grey;
  height: $desktop__main-content__height;
  overflow: auto;
  width: 30%;

  > ul {
    @include reset-list;
    
    > li {
      border-bottom: solid 1px $color-line-grey;

      &.selected .scenario-item {
        color: #000;
      }
      &:not(.selected) .scenario-item:hover {
        cursor: pointer;
        padding: 20px 10px 30px;
      }
    }
  }
  .scenario-item {
    color: $color-text-grey;
    padding: 25px 10px;
    transition-duration: .3s;
    
    > header {
      margin-bottom: 10px;
    }
    .title {
      display: inline-block;
      font-size: 1.8rem;
      font-weight: 900;
      margin: 0;
    }
    .excerpt {
      font-size: 1.8rem;
      margin: 0;
    }
  }
}
</style>