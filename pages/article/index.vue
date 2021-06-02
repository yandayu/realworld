<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <article-meta :article="article" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>
      <hr />
      <div class="article-actions">
        <article-meta :article="article" />
      </div>
      <article-comment :article="article" />
    </div>
  </div>
</template>

<script>
import ArticleComment from "./components/ArticleComment";
import ArticleMeta from "./components/ArticleMeta";
import { getArticle } from "@/api/article";

export default {
  components: { ArticleMeta, ArticleComment },
  name: "Article",
  head() {
    return {
      title: `${this.article.title}-condiut`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
  async asyncData({ params }) {
    let {
      data: { article },
    } = await getArticle(params.slug);
    return {
      article,
    };
  },
};
</script>

<style>
</style>