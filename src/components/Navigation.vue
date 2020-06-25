<template>
  <div class="main-nav-wrapper" :class="{ mobileShow }">
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
    <button type="button" class="mobile-nav-bt" @click="mobileNavToggle">
      <font-awesome-icon icon="bars" class="icon"/>
    </button>
    <div class="overlay-back" @click="mobileNavToggle"></div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    mobileShow: false,
  }),
  methods: {
    logOut () {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
    mobileNavToggle () {
      this.mobileShow = !this.mobileShow
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
  margin-left: - $desktop__navigation__width;
  max-width: $desktop__navigation__width;
  position: fixed;
  top: 0;
  transition-duration: .4s;
  width: 100%;
  z-index: 20;

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
.mobile-nav-bt {
  background: #fff;
  border: 1px solid $color-line-grey;
  color: $color-text-grey;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 5px 7px;
  position: fixed;
  right: 15px;
  top: 30px;
  z-index: 5;

  &:hover, &:focus {
    outline: none;
    color: #000;
  }
}
.overlay-back {
  backdrop-filter: blur(2px);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 19;
  margin-right: 100%;
  opacity: 0;
  transition: opacity .5s;
}

// Show mobile navigation
.main-nav-wrapper.mobileShow {
  .main-nav {
    margin-left: 0;
  }
  .overlay-back {
    margin-right: 0;
    opacity: 1;
  }
}

@media (min-width: $breakpoint_tablet) {
  .main-nav {
    margin-left: 0;
  }
  .overlay-back, .mobile-nav-bt {
    display: none;
  }
}
</style>