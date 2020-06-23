<template>
  <nav class="main-nav">
    <div class="logo">
      <router-link to="/scenarios">
        <img alt="Rain logo" src="../assets/rain_logo.png">
      </router-link>
    </div>
    <div class="links">
      <router-link to="/scenarios" title="Scenarios">
        <font-awesome-icon icon="layer-group" class="icon"/>
      </router-link>
      <a href="/logout" class="logout" @click.prevent="logOut" title="Logout">
        <font-awesome-icon icon="sign-out-alt" class="icon"/>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },
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

  .links {
    padding: 10px 5px;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    justify-content: space-between;

    a {
      color: #ababab;
      display: block;
      font-size: 3rem;
      text-align: center;
      transition-duration: .5s;
      width: 100%;

      &.router-link-active, &:hover {
        color: #000;
      }
    }
  }
}
</style>