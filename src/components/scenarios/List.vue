<template>
  <nav class="scenarios-list">
    <ul>
      <li v-for="(scenario, key) in scenarios" :key="key">
        <article class="scenario-item" @click="getScenario(scenario.id)">
          <header>
            <h4 class="title">{{ scenario.title }}</h4>
            <div class="status">{{ scenario.status }}</div>
          </header>
          <p class="excerpt">{{ scenario.content }}</p>
        </article>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Scenarios_List',
  props: ['scenarios'],
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
    }
  }
  .scenario-item {
    color: $color-text-grey;
    padding: 25px 10px;
    
    > header {
      margin-bottom: 10px;
    }

    .title {
      display: inline-block;
      font-size: 1.8rem;
      font-weight: bold;
      margin: 0;
    }
    .status {
      display: inline-block;
      font-size: 1.3rem;
      margin-left: 10px;
      text-transform: uppercase;
    }

    .excerpt {
      font-size: 1.8rem;
      margin: 0;
    }
  }
}
</style>