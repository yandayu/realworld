<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Sign in" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="isLogin" to="/register"
              >Need an account?</nuxt-link
            >
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="msg in messages" :key="field + msg">{{ field }} {{ msg }}</li>
            </template>
          </ul>

          <form>
            <fieldset class="form-group" v-if="!isLogin">
              <input
                v-model="user.username"
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.email"
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              @click.prevent="handlerLogin"
            >
              {{ isLogin ? "Sign in" : "Sign up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "@/api/login";
import Cookie from "js-cookie";
import { mapMutations } from 'vuex'
export default {
  name: "login",
  data() {
    return {
      user: {},
      errors: [],
    };
  },
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  methods: {
    ...mapMutations(['setUser']),
    async handlerLogin() {
      try {
        let { data } = await (this.isLogin ? login : register)({
          user: this.user,
        });
        this.setUser(data.user)
        Cookie.set("user", data.user);
      } catch (error) {
        this.errors = error.response.data.errors;
        return;
      }
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>