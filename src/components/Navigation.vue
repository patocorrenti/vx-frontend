<template>
  <nav class="main-nav">
    <div class="logo">R</div>
    <router-link to="/scenarios">Scenarios</router-link>
    <router-link to="/">Login</router-link>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
}
</script>

<style lang="scss">
.main-nav {
  background: $color-light-grey;
  border-right: solid 1px $color-line-grey;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  left: 0;
  max-width: $desktop__navigation__width;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}
</style>