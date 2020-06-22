<template>
  <div class="login">
    <h1 class="title">Welcome!</h1>
    <form @submit.prevent="submitLogin">
      <div class="row">
        <label for="user" :class="{pristine: !user.username}">
          User
        </label>
        <input
          placeholder="User"
          id="user"
          type="text"
          v-model="user.username"
          required
        />
      </div>
      <div class="row">
        <label for="password" :class="{pristine: !user.password}">
          Password
        </label>
        <input
          placeholder="Password"
          id="password"
          type="password"
          v-model="user.password"
          autocomplete="on"
          required
        />
      </div>
      <SystemMessage v-if="errorMessage" type="error">
        {{ errorMessage }}
      </SystemMessage>
      <div class="actions">
        <button type="submit" class="submit">
          Login
        </button>
      </div>
    </form>
    <Loading v-if="loading"/>
  </div>
</template>

<script>
import User from "../models/user";
import Loading from '@/components/Loading.vue';
import SystemMessage from '@/components/SystemMessage.vue';

export default {
  name: 'Login',
  components: {
    Loading, SystemMessage
  },
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
.login {
  background: #fff;
  border: 1px solid $color-line-grey;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 500px;
  padding: 20px;
  position: relative;
  width: 100%;

  .title {
    font-size: 3rem;
    margin: 0 0 20px;
  }

  > form {
    .row {
      margin-bottom: 20px;
    }
    label {
      color: $color-text-grey;
      display: block;
      font-size: 1.4rem;
      margin-bottom: 5px;
      transition-duration: .3s;

      &.pristine {
        font-size: 0;
        opacity: 0;
      }
    }
    input {
      border: 1px solid $color-line-grey;

      border-left-color: transparent;
      border-right-color: transparent;
      border-top-color: transparent;
      font-size: 1.8rem;
      padding: 10px 5px;
      transition-duration: .5s;
      width: 100%;

      &:focus {
        border-color: $color-text-grey;
        outline: none;
      }
    }
    .actions {
      display: flex;
      justify-content: flex-end;

      .submit {
        background: #000;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 1.8rem;
        padding: 10px 20px;
        transition-duration: .5s;

        &:hover, &:focus {
          background: $color-green;
          outline: none;
        }
      }
    }
  }
}
</style>