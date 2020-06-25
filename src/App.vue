<template>
  <div id="app" :class="{loggedIn: loggedIn}">
    <Navigation v-if="loggedIn"/>
    <div class="content">
      <Header  v-if="loggedIn"/>
      <main class="main-content">
        <router-view/>
      </main>
      <Loading v-if="loading" text="Loading Projects"/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'App',
  components: {
    Header, Navigation, Loading
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn;
    },
    loading () {
      return this.$store.state.project.loadingProjects;
    }
  },
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  font-family: $font-sans;

  > * {
    box-sizing: border-box;
  }
  .content {
    position: relative;
    width: 100%;

    > * {
      box-sizing: border-box;
    }
  }

  // Login screen
  &:not(.loggedIn) {
    background: $color-light-grey;

    .content {
      padding-left: 0;
    }
    .main-content {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: auto;
      padding: 10vh 10px 20px;
      min-height: 100vh;
    }
  }

  @media (min-width: $breakpoint_tablet) {
    .main-content {
      height: $desktop__main-content__height;
      overflow-y: auto;
    }
    .content {
      padding-left: $desktop__navigation__width;
    }
  }

}
</style>
