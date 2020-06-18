<template>
  <div id="app">
    <Navigation/>
    <div class="content">
      <Header/>
      <main class="main-content">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Header,
    Navigation
  }
}
</script>

<style lang="scss">
html {
  /* 1rem = 10px */
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
}

#app {
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  > * {
    box-sizing: border-box;
  }
  .content {
    padding-left: $desktop__navigation__width;
    position: relative;
    width: 100%;

    > * {
      box-sizing: border-box;
    }
  }
  .main-content {
    height: $desktop__main-content__height;
    overflow-y: auto;
  }
}
</style>
