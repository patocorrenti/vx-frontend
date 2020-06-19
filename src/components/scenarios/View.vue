<template>
  <article class="scenarios-view">
    <header class="scenario-header">
      <h1 class="title">{{ scenario.name }}</h1>
      <div class="status">Updated {{ scenario.updated }}</div>
    </header>
    <ol class="scenario-content">
      <li v-for="(item, key) in scenario.items" :key="key">
        <ScenarioText :item="item"/>
      </li>
      <li>
        {{ scenario.name }} was updated on {{ scenario.updated }}
        <button type="button">Approve</button>
        <button type="button">Reject</button>
      </li>
    </ol>
  </article>
</template>

<script>
import ScenarioText from '@/components/scenarios/Text.vue';

export default {
  name: 'Scenarios_View',
  props: ['scenario'],
  components: {
    ScenarioText
  }
}
</script>

<style lang="scss">
.scenarios-view {
  box-sizing: border-box;
  flex: 1 1 0;
  height: $desktop__main-content__height;
  overflow: auto;
  padding: 40px 20px;

  .scenario-header {
    margin-bottom: 15px;

    .title {
      display: inline-block;
      font-size: 2.5rem;
      margin: 0;
      vertical-align: middle;
    }
    .status {
      display: inline-block;
      font-size: 1.3rem;
      margin-left: 10px;
      vertical-align: middle;
      text-transform: uppercase;
    }
  }
  .scenario-content {
    @include reset-list;

    > li {
      padding: 20px 10px;
    }
  }
}
</style>