exports.ids = [2];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return favoriteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return unfavoriteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return publishArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return delArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const getArticles = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params: data
  });
};
const getFeedArticles = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params: data
  });
};
const favoriteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
};
const unfavoriteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
};
const updateArticle = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data
  });
};
const publishArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
};
const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
};
const delArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProfiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unfollowUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const getProfiles = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
};
const followUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
};
const unfollowUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  });
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/FollowBtn.vue?vue&type=template&id=2acff7b6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-sm btn-outline-secondary",class:{ active: _vm.author.following },attrs:{"disabled":_vm.author.followingDisabled},on:{"click":_vm.handlerFollowing}},[_vm._ssrNode("<i class=\"ion-plus-round\" data-v-2acff7b6></i>"+_vm._ssrEscape("\n   \n  "+_vm._s(_vm.author.following ? "Unfollow" : "Follow")+"\n  "+_vm._s(_vm.author.username)+"\n"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/components/FollowBtn.vue?vue&type=template&id=2acff7b6&scoped=true&

// EXTERNAL MODULE: ./api/profile.js
var profile = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/FollowBtn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FollowBtnvue_type_script_lang_js_ = ({
  name: "FollowBtn",
  props: {
    profile: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },

  data() {
    return {
      author: this.profile
    };
  },

  methods: {
    async handlerFollowing() {
      this.$set(this.author, "followingDisabled", true);

      try {
        await (this.author.following ? profile["c" /* unfollowUser */] : profile["a" /* followUser */])(this.author.author.username);
        this.author.following = !this.author.following;
      } catch (error) {}

      this.$set(this.author, "followingDisabled", false);
    }

  }
});
// CONCATENATED MODULE: ./pages/components/FollowBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FollowBtnvue_type_script_lang_js_ = (FollowBtnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/components/FollowBtn.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FollowBtnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2acff7b6",
  "62f87604"
  
)

/* harmony default export */ var FollowBtn = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=b7e038b0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_c('article-comment',{attrs:{"article":_vm.article}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=b7e038b0&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/ArticleComment.vue?vue&type=template&id=4a7845fa&
var ArticleCommentvue_type_template_id_4a7845fa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.comment.body))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">\n          Post Comment\n        </button></div></form> "),_vm._l((_vm.comments),function(comment){return _c('article-comment-card',{key:comment.id,attrs:{"comment":comment},on:{"delComment":_vm.delComment}})})],2)])}
var ArticleCommentvue_type_template_id_4a7845fa_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/ArticleComment.vue?vue&type=template&id=4a7845fa&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/ArticleCommentCard.vue?vue&type=template&id=33bc66ab&
var ArticleCommentCardvue_type_template_id_33bc66ab_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.comment.body)+"\n    ")+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.comment.author.username,
        },
      }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":_vm.comment.author.image}})]),_vm._ssrNode("\n     \n    <a href class=\"comment-author\">"+_vm._ssrEscape(_vm._s(_vm.comment.author.username))+"</a> <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.comment.createdAt)))+"</span> <span class=\"mod-options\""+(_vm._ssrStyle(null,null, { display: (_vm.comment.author.username === _vm.user.username) ? '' : 'none' }))+"><i class=\"ion-trash-a\"></i></span>")],2)],2)}
var ArticleCommentCardvue_type_template_id_33bc66ab_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/ArticleCommentCard.vue?vue&type=template&id=33bc66ab&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/ArticleCommentCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ArticleCommentCardvue_type_script_lang_js_ = ({
  name: "ArticleCommenCard",
  props: {
    comment: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed: { ...Object(external_vuex_["mapState"])(["user"])
  },
  methods: {
    delComment() {
      this.$emit('delComment', this.comment);
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/ArticleCommentCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleCommentCardvue_type_script_lang_js_ = (ArticleCommentCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/ArticleCommentCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ArticleCommentCardvue_type_script_lang_js_,
  ArticleCommentCardvue_type_template_id_33bc66ab_render,
  ArticleCommentCardvue_type_template_id_33bc66ab_staticRenderFns,
  false,
  injectStyles,
  null,
  "885494d2"
  
)

/* harmony default export */ var ArticleCommentCard = (component.exports);
// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/comments.js

const getComments = slug => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
};
const addComments = (slug, data) => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  });
};
const delComment = (slug, id) => {
  return Object(request["b" /* request */])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  });
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/ArticleComment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ArticleCommentvue_type_script_lang_js_ = ({
  components: {
    ArticleCommentCard: ArticleCommentCard
  },
  name: "ArticleComment",
  props: {
    article: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },

  data() {
    return {
      comment: {
        body: null
      },
      comments: null
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["user"])
  },

  created() {
    getComments(this.article.slug).then(({
      data
    }) => {
      this.comments = data.comments;
    });
  },

  methods: {
    async submit() {
      let {
        data
      } = await addComments(this.article.slug, {
        comment: this.comment
      });
      this.comments.unshift(data.comment);
      console.log(data);
    },

    async delComment(comment) {
      try {
        await delComment(this.article.slug, comment.id);
        this.comments = this.comments.filter(item => item.id !== comment.id);
      } catch (error) {}
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/ArticleComment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleCommentvue_type_script_lang_js_ = (ArticleCommentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/ArticleComment.vue



function ArticleComment_injectStyles (context) {
  
  
}

/* normalize component */

var ArticleComment_component = Object(componentNormalizer["a" /* default */])(
  components_ArticleCommentvue_type_script_lang_js_,
  ArticleCommentvue_type_template_id_4a7845fa_render,
  ArticleCommentvue_type_template_id_4a7845fa_staticRenderFns,
  false,
  ArticleComment_injectStyles,
  null,
  "a115c432"
  
)

/* harmony default export */ var ArticleComment = (ArticleComment_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/ArticleMeta.vue?vue&type=template&id=346157da&
var ArticleMetavue_type_template_id_346157da_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name: 'profile',
      params: {
        username: _vm.currentArticle.author.username,
      },
    }}},[_c('img',{attrs:{"src":_vm.currentArticle.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.currentArticle.author.username,
        },
      }}},[_vm._v("\n      "+_vm._s(_vm.currentArticle.author.username)+"\n    ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.currentArticle.createdAt)))+"</span>")],2),_vm._ssrNode(" "),(_vm.currentArticle.author.username === _vm.user.username)?[_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary",attrs:{"to":{
        name: 'editor',
        query: {
          slug: _vm.currentArticle.slug,
        },
      }}},[_c('i',{staticClass:"ion-edit"}),_vm._v("\n        Edit Article\n    ")]),_vm._ssrNode(" <button class=\"btn btn-sm btn-outline-danger\"><i class=\"ion-trash-a\"></i>\n        Delete Article\n    </button>")]:[_c('follow-btn',{attrs:{"profile":_vm.currentArticle.author}}),_vm._ssrNode("\n      \n    <button"+(_vm._ssrAttr("disabled",_vm.currentArticle.favoriteDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{ active: _vm.currentArticle.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n       \n      "+_vm._s(_vm.currentArticle.favorited ? "Unfavorite Post" : "Favorite Post")+"\n      ")+"<span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.currentArticle.favoritesCount)+")")+"</span></button>")]],2)}
var ArticleMetavue_type_template_id_346157da_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/ArticleMeta.vue?vue&type=template&id=346157da&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: ./pages/components/FollowBtn.vue + 4 modules
var FollowBtn = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/ArticleMeta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ArticleMetavue_type_script_lang_js_ = ({
  components: {
    FollowBtn: FollowBtn["a" /* default */]
  },
  name: "ArticleMeta",
  props: {
    article: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },

  data() {
    return {
      currentArticle: this.article
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["user"])
  },
  methods: {
    async handlerFavorited() {
      this.$set(this.currentArticle, "favoriteDisabled", true);

      try {
        let {
          data
        } = await (this.currentArticle.favorited ? api_article["g" /* unfavoriteArticle */] : api_article["b" /* favoriteArticle */])(this.currentArticle.slug);
        this.currentArticle = { ...this.currentArticle,
          ...data.article
        };
      } catch (error) {}

      this.$set(this.currentArticle, "favoriteDisabled", false);
    },

    async delArticle() {
      try {
        await Object(api_article["a" /* delArticle */])(this.currentArticle.slug);
        this.$router.push("/");
      } catch (error) {}
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/ArticleMeta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleMetavue_type_script_lang_js_ = (ArticleMetavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/ArticleMeta.vue



function ArticleMeta_injectStyles (context) {
  
  
}

/* normalize component */

var ArticleMeta_component = Object(componentNormalizer["a" /* default */])(
  components_ArticleMetavue_type_script_lang_js_,
  ArticleMetavue_type_template_id_346157da_render,
  ArticleMetavue_type_template_id_346157da_staticRenderFns,
  false,
  ArticleMeta_injectStyles,
  null,
  "138c4fad"
  
)

/* harmony default export */ var ArticleMeta = (ArticleMeta_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  components: {
    ArticleMeta: ArticleMeta,
    ArticleComment: ArticleComment
  },
  name: "Article",

  head() {
    return {
      title: `${this.article.title}-condiut`,
      meta: [{
        hid: "description",
        name: "description",
        content: this.article.description
      }]
    };
  },

  async asyncData({
    params
  }) {
    let {
      data: {
        article
      }
    } = await Object(api_article["c" /* getArticle */])(params.slug);
    return {
      article
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "23947277"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map