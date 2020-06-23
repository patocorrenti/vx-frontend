<template>
  <article class="scenarios-view">
    <div v-if="scenarioSelected">
      <header class="scenario-header">
        <h1 class="title">{{ currentScenario.title }}</h1>
        <div class="update">Updated {{ currentScenario.last_update }}</div>
        <Status :status="currentScenario.status"/>
      </header>
      <ol class="scenario-content">
        <li v-for="(line, key) in currentScenario.text_lines" :key="key">
          <ScenarioText :line="line"/>
        </li>
        <li>
          {{ currentScenario.title }} was updated on {{ currentScenario.last_update }}
          <button type="button" @click="changeStatus('approved')">Approve</button>
          <button type="button" @click="changeStatus('rejected')">Reject</button>
          <button type="button" @click="changeStatus('pending')">Undo</button>
        </li>
      </ol>
      <button type="button">Prev</button>
      <button type="button">Next</button>
    </div>
    <div v-else>
      Select a User Scenario
    </div>
    <Loading v-if="loadingScenario" text="Loading Scenario"/>
  </article>
</template>

<script>
import ScenarioText from '@/components/scenarios/Text.vue';
import Loading from '@/components/Loading.vue';
import Status from '@/components/scenarios/Status.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Scenario_View',
  props: ['scenario'],
  components: {
    ScenarioText, Loading, Status
  },
  computed: {
    ...mapState('scenario', ['currentScenario', 'loadingScenario']),
    scenarioSelected () {
      return !!this.currentScenario.id
    }
  },
  methods: {
    ...mapActions('scenario', ['changeStatus'])
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
  position: relative;

  .scenario-header {
    margin-bottom: 15px;

    .title {
      display: inline-block;
      font-size: 2.5rem;
      margin: 0;
      vertical-align: middle;
    }
    .update {
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