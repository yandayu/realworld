<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
        name: 'profile',
        params: {
          username: currentArticle.author.username,
        },
      }"
    >
      <img :src="currentArticle.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link
        :to="{
          name: 'profile',
          params: {
            username: currentArticle.author.username,
          },
        }"
        class="author"
      >
        {{ currentArticle.author.username }}
      </nuxt-link>
      <span class="date">{{ currentArticle.createdAt | date }}</span>
    </div>
    <template v-if="currentArticle.author.username === user.username">
      <nuxt-link
        class="btn btn-sm btn-outline-secondary"
        :to="{
          name: 'editor',
          query: {
            slug: currentArticle.slug,
          },
        }"
      >
        <i class="ion-edit"></i>
        &nbsp; Edit Article
      </nuxt-link>
      <button class="btn btn-sm btn-outline-danger" @click="delArticle">
        <i class="ion-trash-a"></i>
        &nbsp; Delete Article
      </button>
    </template>
    <template v-else>
      <follow-btn :profile="currentArticle.author" />
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{ active: currentArticle.favorited }"
        :disabled="currentArticle.favoriteDisabled"
        @click="handlerFavorited"
      >
        <i class="ion-heart"></i>
        &nbsp;
        {{ currentArticle.favorited ? "Unfavorite Post" : "Favorite Post" }}
        <span class="counter">({{ currentArticle.favoritesCount }})</span>
      </button>
    </template>
  </div>
</template>

<script>
import { favoriteArticle, unfavoriteArticle, delArticle } from "@/api/article";
import { mapState } from "vuex";
import FollowBtn from "../../components/FollowBtn.vue";
export default {
  components: { FollowBtn },
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      currentArticle: this.article,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async handlerFavorited() {
      this.$set(this.currentArticle, "favoriteDisabled", true);
      try {
        let { data } = await (this.currentArticle.favorited
          ? unfavoriteArticle
          : favoriteArticle)(this.currentArticle.slug);
        this.currentArticle = {
          ...this.currentArticle,
          ...data.article,
        };
      } catch (error) {}
      this.$set(this.currentArticle, "favoriteDisabled", false);
    },
    async delArticle() {
      try {
        await delArticle(this.currentArticle.slug);
        this.$router.push("/");
      } catch (error) {}
    },
  },
};
</script>

<style>
</style>