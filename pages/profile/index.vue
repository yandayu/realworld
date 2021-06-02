<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>
              {{ profile.bio }}
            </p>
            <nuxt-link
              v-if="profile.username === user.username"
              :to="{ name: 'settings' }"
              class="btn btn-sm btn-outline-secondary"
            >
              <i class="ion-gear-a"></i>
              &nbsp; Edit Profile Settings
            </nuxt-link>
            <follow-btn
              v-else
              :profile="profile"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'my_articles' }"
                  :to="{
                    name: 'profile',
                    query: {
                      tab: 'my_articles',
                    },
                  }"
                >
                  My Articles
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{ active: tab === 'favorited_articles' }"
                  :to="{
                    name: 'profile',
                    query: {
                      tab: 'favorited_articles',
                    },
                  }"
                >
                  Favorited Article
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
                  :to="{ name: 'profile', query: { page: pos, tab } }"
                  class="page-link"
                >
                  {{ pos }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProfiles } from "@/api/profile";
import { getArticles } from "@/api/article";
import { mapState } from "vuex";
import FollowBtn from "../components/FollowBtn.vue";
import ArticleCard from "../components/ArticleCard.vue";
const limit = 20;

export default {
  components: { ArticleCard, FollowBtn },
  name: "profile",
  middleware: "authenticated",
  watchQuery: ["tab", "page"],
  head() {
    FollowBtn;
    return {
      title: `${this.profile.username}-condiut`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.profile.bio,
        },
      ],
    };
  },
  async asyncData({ params, query }) {
    const page = Number(query.page || 1);
    const offset = (page - 1) * limit;
    const tab =
      query.tab === "favorited_articles" ? "favorited_articles" : "my_articles";
    let [
      {
        data: { articles, articlesCount },
      },
      {
        data: { profile },
      },
    ] = await Promise.all([
      getArticles(
        tab === "my_articles"
          ? {
              page,
              offset,
              limit,
              author: params.username,
            }
          : {
              page,
              offset,
              limit,
              favorited: params.username,
            }
      ),
      getProfiles(params.username),
    ]);
    return {
      page,
      tab,
      profile,
      articles,
      articlesCount,
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
<style scoped>
.btn {
  float: right;
}
</style>