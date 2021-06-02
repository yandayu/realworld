<template>
  <div class="row">
    <div class="col-xs-12 col-md-8 offset-md-2">
      <form class="card comment-form">
        <div class="card-block">
          <textarea
            v-model="comment.body"
            class="form-control"
            placeholder="Write a comment..."
            rows="3"
          ></textarea>
        </div>
        <div class="card-footer">
          <img :src="user.image" class="comment-author-img" />
          <button class="btn btn-sm btn-primary" @click.prevent="submit">
            Post Comment
          </button>
        </div>
      </form>
      <article-comment-card 
      v-for="comment in comments"
       :key="comment.id" 
       :comment="comment"
       @delComment="delComment"
       />
    </div>
  </div>
</template>

<script>
import ArticleCommentCard from "./ArticleCommentCard";
import { mapState } from "vuex";
import { getComments, addComments, delComment } from "@/api/comments";
export default {
  components: { ArticleCommentCard },
  name: "ArticleComment",
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
      comment: {
        body: null,
      },
      comments: null
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  created() {
    getComments(this.article.slug).then(({ data }) => {
      this.comments = data.comments;
    });
  },
  methods: {
    async submit() {
      let { data } = await addComments(this.article.slug, {
        comment: this.comment,
      });
      this.comments.unshift(data.comment)
      console.log(data);
    },
    async delComment(comment) {
      try {
        await delComment(this.article.slug, comment.id)
        this.comments = this.comments.filter(item => item.id !== comment.id)
      } catch (error) {
        
      }
    }
  },
};
</script>

<style>
</style>