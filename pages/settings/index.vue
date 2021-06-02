<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="userCopy.image"
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="userCopy.username"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="userCopy.bio"
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="userCopy.email"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="userCopy.password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button
                class="btn btn-lg btn-primary pull-xs-right"
                @click.prevent="update"
              >
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" @click="logout">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updateUser } from "@/api/setting.js";
import Cookie from "js-cookie";
import { mapState, mapMutations } from "vuex";
export default {
  name: "settings",
  middleware: "authenticated",
  data() {
    return {
      userCopy: {},
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  created() {
    this.userCopy = { ...this.user };
  },
  methods: {
    ...mapMutations(["setUser"]),
    async update() {
      let { data } = await updateUser({
        user: this.userCopy,
      });
      this.setUser(data.user);
      this.$router.push({
        name: "profile",
        params: {
          username: data.user.username,
        },
      });
    },
    logout() {
      Cookie.set("user", null);
      this.setUser();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>