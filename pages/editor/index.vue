<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="article.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.tagList"
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                />
                <div class="tag-list"></div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="publish"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticle, updateArticle, publishArticle } from "@/api/article";
export default {
  name: "editor",
  middleware: "authenticated",
  data() {
    return {
      isEdit: false,
      article: {},
    };
  },
  async created() {
    if (this.$route.query.slug) {
      this.isEdit = true;
      let {
        data: { article },
      } = await getArticle(this.$route.query.slug);
      this.article = article;
    }
  },
  methods: {
    async publish() {
      let { data } = await (this.isEdit
        ? updateArticle(this.article.slug, {
            article: this.article,
          })
        : publishArticle({
            article: this.article,
          }));
      this.$router.push({
        name: "article",
        params: {
          slug: data.article.slug,
        },
      });
    },
  },
};
</script>

<style>
</style>