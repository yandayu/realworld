<template>
  <button
    class="btn btn-sm btn-outline-secondary"
    :class="{ active: author.following }"
    :disabled="author.followingDisabled"
    @click="handlerFollowing"
  >
    <i class="ion-plus-round"></i>
    &nbsp;
    {{ author.following ? "Unfollow" : "Follow" }}
    {{ author.username }}
  </button>
</template>

<script>
import { followUser, unfollowUser } from "@/api/profile";
export default {
  name: "FollowBtn",
  props: {
    profile: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      author: this.profile,
    };
  },
  methods: {
    async handlerFollowing() {
      this.$set(this.author, "followingDisabled", true);
      try {
        await (this.author.following ? unfollowUser : followUser)(
          this.author.author.username
        );
        this.author.following = !this.author.following;
      } catch (error) {}
      this.$set(this.author, "followingDisabled", false);
    },
  },
};
</script>

<style scoped>
</style>>