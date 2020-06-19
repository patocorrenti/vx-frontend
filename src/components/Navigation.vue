<template>
  <nav class="main-nav">
    <div class="logo">
      <router-link to="/">
        <img alt="Rain logo" src="../assets/rain_logo.png">
      </router-link>
    </div>
    <router-link to="/scenarios">
      Scenarios
    </router-link>
    <a v-if="loggedIn" href="/logout" @click.prevent="logOut">
      Logout
    </a>
    <router-link v-else to="/login">
      Login
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
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

  .logo {
    border-bottom: solid 1px $color-line-grey;
    box-sizing: border-box;
    height: $desktop__header__height;
    padding: 24px;

    img {
      display: block;
      height: auto;
      max-width: 100%;
    }
  }
}
</style>