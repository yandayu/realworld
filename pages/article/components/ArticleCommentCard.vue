<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">
        {{ comment.body }}
      </p>
    </div>
    <div class="card-footer">
      <nuxt-link
        :to="{
          name: 'profile',
          params: {
            username: comment.author.username,
          },
        }"
        class="comment-author"
      >
        <img :src="comment.author.image" class="comment-author-img" />
      </nuxt-link>
      &nbsp;
      <a href="" class="comment-author">{{ comment.author.username }}</a>
      <span class="date-posted">{{ comment.createdAt | date }}</span>
      <span
        v-show="comment.author.username === user.username"
        class="mod-options"
        @click="delComment"
      >
        <i class="ion-trash-a"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ArticleCommenCard",
  props: {
    comment: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    delComment() {
      this.$emit('delComment', this.comment)
    }
  }
};
</script>

<style>
</style>