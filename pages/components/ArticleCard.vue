<template>
  <div>
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
      <button
        class="btn btn-outline-primary btn-sm pull-xs-right"
        :class="{
          active: currentArticle.favorited,
        }"
        :disabled="currentArticle.favoriteDisabled"
        @click="handlerFavorited"
      >
        <i class="ion-heart"></i> {{ currentArticle.favoritesCount }}
      </button>
    </div>
    <nuxt-link
      :to="{ name: 'article', params: { slug: currentArticle.slug } }"
      class="preview-link"
    >
      <h1>{{ currentArticle.title }}</h1>
      <p>{{ currentArticle.description }}</p>
      <span>Read more...</span>
    </nuxt-link>
  </div>
</template>

<script>
import { favoriteArticle, unfavoriteArticle } from "@/api/article";
export default {
  name: "ArticleCard",
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
  },
};
</script>

<style>
</style>