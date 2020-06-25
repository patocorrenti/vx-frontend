<template>
  <nav class="scenarios-list" :class="{ showMobile }">
    <header>
      <span>Index</span>
      <button type="button" title="close" @click="mobileToggle(false)">
        <font-awesome-icon icon="times" class="icon"/>
      </button>
    </header>
    <ul>
      <li
        v-for="(scenario, key) in scenarios"
        :key="key"
        :class="{selected: scenario.id === currentScenario.id}"
      >
        <article class="scenario-item" @click="selectScenario(scenario.id)">
          <header>
            <h4 class="title">{{ scenario.title }}</h4>
            <Status :status="scenario.status"/>
          </header>
          <p class="excerpt">{{ scenario.setup_instructions }}</p>
        </article>
      </li>
    </ul>
    <button class="scenario-index" type="button" @click="mobileToggle(true)" title="Show index">
      <font-awesome-icon icon="chevron-right" class="icon"/>
    </button>
    <div class="overlay" @click="mobileToggle(false)"></div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Status from '@/components/scenarios/Status.vue'

export default {
  name: 'Scenarios_List',
  props: ['scenarios'],
  data: () => ({
    showMobile: false,
  }),
  components: {
    Status
  },
  computed: {
    ...mapState('scenario', ['currentScenario'])
  },
  methods: {
    ...mapActions('scenario', ['getScenario']),
    selectScenario (id) {
      this.getScenario(id)
      this.mobileToggle(false)
    },
    mobileToggle (close) {
      this.showMobile = close || !this.showMobile
    }
  }
}
</script>

<style lang="scss">
.scenarios-list {
  background-color: #fff;
  border-right: solid 1px $color-line-grey;
  bottom: 0;
  display: block;
  left: 0;
  margin-left: -100%;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  transition-duration: .5s;
  width: 80%;
  z-index: 15;

  > header {
    align-items: center;
    background: $color-light-grey;
    display: flex;
    font-size: 1.8rem;
    font-weight: bold;
    justify-content: space-between;
    padding: 15px;

    > button {
      background-color: $color-light-grey;
      border: 1px solid $color-line-grey;
      color: $color-text-grey;
      cursor: pointer;
      padding: 5px 8px;
      transition-duration: .5s;

      &:hover, &:focus {
        color: #000;
        outline: none;
      }
    }
  }
  > ul {
    @include reset-list;
    
    > li {
      border-bottom: solid 1px $color-line-grey;

      &.selected .scenario-item {
        color: #000;
      }
    }
  }
  .scenario-item {
    color: $color-text-grey;
    padding: 15px;
    transition-duration: .3s;
    
    > header {
      margin-bottom: 10px;
    }
    .title {
      display: inline-block;
      font-size: 1.6rem;
      font-weight: 900;
      margin: 0;
    }
    .excerpt {
      font-size: 1.5rem;
      margin: 0;
    }
  }
  .scenario-index {
    background-color: $color-light-grey;
    border-left: none;
    border-radius: 0 5px 5px 0;
    border: 1px solid $color-line-grey;
    color: $color-text-grey;
    cursor: pointer;
    left: 0;
    padding: 15px 5px 15px 8px;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    transition-duration: .5s;

    &:hover, &:focus {
      color: #000;
      outline: none;
      padding-left: 12px;
    }
  }
  .overlay {
    backdrop-filter: blur(2px);
    bottom: 0;
    left: 80%;
    margin-left: 100%;
    opacity: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: opacity .5s;
  }

  &.showMobile {
    margin-left: 0;

    .scenario-index {
      display: none;
    }
    .overlay {
      margin-left: 0;
      opacity: 1;
    }
  }
}
@media (min-width: $breakpoint_tablet) {
  .scenarios-list {
    height: $desktop__main-content__height;
    margin-left: 0;
    position: static;
    width: 30%;

    > header {
      display: none;
    }
    > ul > li {
      &:not(.selected) .scenario-item:hover {
        cursor: pointer;
        padding: 20px 20px 30px;
      }
    }
    .scenario-item {
      padding: 25px 20px;
      .title, .excerpt {
        font-size: 1.8rem;
      }
    }
    .overlay, .scenario-index {
      display: none;
    }
  }
}
</style>