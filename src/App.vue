<template>
  <div id="app">
    <Header/>
    <Navigation/>
    <main class="content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navigation
  }
}

</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
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
    width: calc(100% - 86px);
  }
}
</style>
