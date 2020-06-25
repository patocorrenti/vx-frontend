<template>
  <article class="scenarios-view">
    <div v-if="scenarioSelected">
      <header class="scenario-header">
        <h1 class="title">{{ currentScenario.title }}</h1>
        <div class="update">Updated {{ currentScenario.last_update | moment("MM/D/YYYY") }}</div>
        <Status :status="currentScenario.status"/>
        <button
          v-if="currentScenario.status !== 'pending'"
          type="button" class="ScenarioAction"
          @click="changeStatus('pending')"
        >
          Clear
        </button>
      </header>
      <ol class="scenario-content">
        <li v-for="(line, key) in currentScenario.text_lines" :key="key">
          <ScenarioText :line="line"/>
        </li>
        <li>
          <div class="scenario-item-text">
            <div class="type"></div>
            <div class="text final">
              <div>
                {{ currentScenario.title }}
                was updated on
                {{ currentScenario.last_update | moment("MM/D/YYYY") }}
                <span v-if="currentScenario.status === 'pending'">
                  <button type="button" class="ScenarioAction approve" @click="changeStatus('approved')">
                      Approve
                  </button>
                  <button type="button" class="ScenarioAction reject" @click="changeStatus('rejected')">
                      Reject
                  </button>
                </span>
                <Loading v-if="loadingStatus"/>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="scenario-item-text paginator">
            <div class="type"></div>
            <div class="text"><Paginator/></div>
          </div>
        </li>
      </ol>
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
import Paginator from '@/components/scenarios/Paginator.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Scenario_View',
  props: ['scenario'],
  components: {
    ScenarioText, Loading, Status, Paginator
  },
  computed: {
    ...mapState('scenario', ['currentScenario', 'loadingScenario', 'loadingStatus']),
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
  overflow: auto;
  padding: 40px 15px 40px 25px;
  position: relative;

  .scenario-header {
    margin-bottom: 15px;
    padding: 0 10px;

    .title {
      font-size: 2.5rem;
      margin: 0;
      vertical-align: middle;
    }
    .update {
      display: inline-block;
      font-size: 1.3rem;
      vertical-align: middle;
      text-transform: uppercase;
    }
  }
  .scenario-content {
    @include reset-list;

    > li {
      padding: 10px;
    }
  }
  .scenario-item-text .text.final > div {
    background-color: #e6e6e6;
    padding: 5px 20px;
    position: relative;
  }
  .ScenarioAction {
    background: transparent;
    border: none;
    color: $color-text-grey;
    cursor: pointer;
    font-family: $font-serif;
    font-size: 1.8rem;
    font-weight: bold;
    text-decoration: underline;
    transition-duration: .4s;

    &.approve {
      color: $color-green;
    }
    &.reject {
      color: $color-red;
    }
    &:hover {
      color: #000;
      text-decoration: none;
    }
    &:focus {
      outline: none;
    }
  }
}
@media (min-width: $breakpoint_movile_large) {
  .scenarios-view {
    height: $desktop__main-content__height;
    
    .scenario-header {
      margin-left: 116px;
      
      .title {
        display: inline-block;
      }
      .update {
        margin-left: 10px;
      }
    }
  }
}
@media (min-width: $breakpoint_tablet) {
  .scenarios-view {
    padding: 40px 20px;
  }
}
</style>