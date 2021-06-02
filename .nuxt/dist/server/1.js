exports.ids = [1];
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/ArticleCard.vue?vue&type=template&id=3f8c3470&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.currentArticle.author.username,
        },
      }}},[_c('img',{attrs:{"src":_vm.currentArticle.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
          name: 'profile',
          params: {
            username: _vm.currentArticle.author.username,
          },
        }}},[_vm._v("\n        "+_vm._s(_vm.currentArticle.author.username)+"\n      ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.currentArticle.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.currentArticle.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
        active: _vm.currentArticle.favorited,
      }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.currentArticle.favoritesCount)+"\n    ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{ name: 'article', params: { slug: _vm.currentArticle.slug } }}},[_c('h1',[_vm._v(_vm._s(_vm.currentArticle.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.currentArticle.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/components/ArticleCard.vue?vue&type=template&id=3f8c3470&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/components/ArticleCard.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ArticleCardvue_type_script_lang_js_ = ({
  name: "ArticleCard",
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

  methods: {
    async handlerFavorited() {
      this.$set(this.currentArticle, "favoriteDisabled", true);

      try {
        let {
          data
        } = await (this.currentArticle.favorited ? article["g" /* unfavoriteArticle */] : article["b" /* favoriteArticle */])(this.currentArticle.slug);
        this.currentArticle = { ...this.currentArticle,
          ...data.article
        };
      } catch (error) {}

      this.$set(this.currentArticle, "favoriteDisabled", false);
    }

  }
});
// CONCATENATED MODULE: ./pages/components/ArticleCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleCardvue_type_script_lang_js_ = (ArticleCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/components/ArticleCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ArticleCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "74a2d47f"
  
)

/* harmony default export */ var ArticleCard = __webpack_exports__["a"] = (component.exports);

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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("7392b3fc", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19406378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19406378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19406378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19406378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19406378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn[data-v-19406378]{float:right}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=19406378&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\" data-v-19406378>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-19406378>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-19406378>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-19406378>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\" data-v-19406378> <h4 data-v-19406378>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p data-v-19406378>"+_vm._ssrEscape("\n            "+_vm._s(_vm.profile.bio)+"\n          ")+"</p> "),(_vm.profile.username === _vm.user.username)?_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary",attrs:{"to":{ name: 'settings' }}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v("\n              Edit Profile Settings\n          ")]):_c('follow-btn',{attrs:{"profile":_vm.profile}})],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\" data-v-19406378>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-19406378>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-19406378>","</div>",[_vm._ssrNode("<div class=\"articles-toggle\" data-v-19406378>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-19406378>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-19406378>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'my_articles' },attrs:{"to":{
                  name: 'profile',
                  query: {
                    tab: 'my_articles',
                  },
                }}},[_vm._v("\n                My Articles\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-19406378>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'favorited_articles' },attrs:{"to":{
                  name: 'profile',
                  query: {
                    tab: 'favorited_articles',
                  },
                }}},[_vm._v("\n                Favorited Article\n              ")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-19406378>","</div>",[_c('article-card',{attrs:{"article":article}})],1)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-19406378>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-19406378>","</ul>",_vm._l((_vm.totalPage),function(pos){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{ active: _vm.page === pos }))+" data-v-19406378>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{ name: 'profile', query: { page: pos, tab: _vm.tab } }}},[_vm._v("\n                "+_vm._s(pos)+"\n              ")])],1)}),0)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=19406378&scoped=true&

// EXTERNAL MODULE: ./api/profile.js
var api_profile = __webpack_require__(28);

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./pages/components/FollowBtn.vue + 4 modules
var FollowBtn = __webpack_require__(30);

// EXTERNAL MODULE: ./pages/components/ArticleCard.vue + 4 modules
var ArticleCard = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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





const limit = 20;
/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  components: {
    ArticleCard: ArticleCard["a" /* default */],
    FollowBtn: FollowBtn["a" /* default */]
  },
  name: "profile",
  middleware: "authenticated",
  watchQuery: ["tab", "page"],

  head() {
    FollowBtn["a" /* default */];
    return {
      title: `${this.profile.username}-condiut`,
      meta: [{
        hid: "description",
        name: "description",
        content: this.profile.bio
      }]
    };
  },

  async asyncData({
    params,
    query
  }) {
    const page = Number(query.page || 1);
    const offset = (page - 1) * limit;
    const tab = query.tab === "favorited_articles" ? "favorited_articles" : "my_articles";
    let [{
      data: {
        articles,
        articlesCount
      }
    }, {
      data: {
        profile
      }
    }] = await Promise.all([Object(article["d" /* getArticles */])(tab === "my_articles" ? {
      page,
      offset,
      limit,
      author: params.username
    } : {
      page,
      offset,
      limit,
      favorited: params.username
    }), Object(api_profile["b" /* getProfiles */])(params.username)]);
    return {
      page,
      tab,
      profile,
      articles,
      articlesCount
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["user"]),

    totalPage() {
      return Math.ceil(this.articlesCount / limit);
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "19406378",
  "0db82b6a"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map