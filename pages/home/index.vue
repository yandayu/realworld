<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'your_feed' }"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'your_feed',
                      page,
                    },
                  }"
                >
                  Your Feed
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'global_feed' }"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'global_feed',
                      page,
                    },
                  }"
                >
                  Global Feed
                </nuxt-link>
              </li>
              <li class="nav-item" v-if="tag">
                <nuxt-link
                  class="nav-link"
                  exact
                  :class="{ active: tab === 'tag' }"
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'tag',
                      page,
                      tag,
                    },
                  }"
                >
                  #{{ tag }}
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <article-card :article="article" />
          </div>
          <nav>
            <ul class="pagination">
              <li
                v-for="pos of totalPage"
                class="page-item"
                :class="{ active: page === pos }"
                :key="pos"
              >
                <nuxt-link
                  :to="{ name: 'home', query: { page: pos, tag, tab } }"
                  class="page-link"
                >
                  {{ pos }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                :to="{ name: 'home', query: { tag: tag } }"
                v-for="tag in tags"
                :key="tag"
                class="tag-pill tag-default"
              >
                {{ tag }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  getArticles,
  getFeedArticles,
} from "@/api/article";
import { getTags } from "@/api/tag";
import ArticleCard from "../components/ArticleCard.vue";
const limit = 20;

export default {
  components: { ArticleCard },
  name: "home",
  watchQuery: ["tag", "page", "tab"],
  async asyncData({ query, store }) {
    const page = Number(query.page || 1);
    const offset = (page - 1) * limit;
    const tag = query.tag;
    const tab = tag
      ? "tag"
      : query.tab === "your_feed" && store.state.user
      ? "your_feed"
      : "global_feed";
    let [
      {
        data: { articles, articlesCount },
      },
      {
        data: { tags },
      },
    ] = await Promise.all([
      (query.tab === "your_feed" ? getFeedArticles : getArticles)({
        page,
        offset,
        limit,
        tag,
      }),
      getTags(),
    ]);
    return {
      articles,
      articlesCount,
      tags,
      page,
      tab,
      tag,
    };
  },
  data() {
    return {
      favoriting: false,
    };
  },
  computed: {
    ...mapState(["user"]),
    totalPage() {
      return Math.ceil(this.articlesCount / limit);
    },
  },
};
</script>

<style>
</style>