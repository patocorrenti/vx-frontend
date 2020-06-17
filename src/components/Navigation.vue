<template>
  <nav class="main-nav">
    <router-link to="/user-scenarios">Scenarios</router-link>
    <router-link to="/">Login</router-link>
  </nav>
</template>

<style lang="scss">
.main-nav {
  background: $color-light-grey;
  border-right: solid 1px $color-line-grey;
  display: flex;
  flex-wrap: wrap;
  max-width: 86px;
  width: 100%;
}
</style>