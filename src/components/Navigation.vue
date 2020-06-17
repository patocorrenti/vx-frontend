<template>
  <nav class="main-nav">
    <div class="logo">R</div>
    <router-link to="/user-scenarios">Scenarios</router-link>
    <router-link to="/">Login</router-link>
  </nav>
</template>

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
}
</style>