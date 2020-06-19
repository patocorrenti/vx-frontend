<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="submitLogin">
      <div>
        <label for="user">User</label>
        <input id="user" type="text" v-model="user.username" required/>
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" v-model="user.password" required/>
      </div>
      <button type="submit">
        Login
      </button>
    </form>
    <div v-if="errorMessage">
      {{ errorMessage }}
    </div>
      Loading: {{ loading }}
  </div>
</template>

<script>
import User from "../models/user";

export default {
  name: 'Login',
  data: () => ({
    user: new User(),
    errorMessage: '',
    loading: false,
  }),
  methods: {
    submitLogin () {
      if (!this.user.username || !this.user.password) return;
      this.loading = true;
      this.errorMessage = '';

      this.$store.dispatch('auth/login', this.user).then(
        () => {
          this.$router.push('/scenarios');
        },
        error => {
          this.errorMessage = error.response.data.detail || error.toString();
          this.loading = false;
        }
      );
    },
  },
}
</script>

<style lang="scss">

</style>