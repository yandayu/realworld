(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{192:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"e",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"g",(function(){return d})),r.d(e,"h",(function(){return m})),r.d(e,"f",(function(){return f})),r.d(e,"c",(function(){return v})),r.d(e,"a",(function(){return h}));var n=r(63),c=function(data){return Object(n.b)({method:"GET",url:"/api/articles",params:data})},o=function(data){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:data})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},m=function(t,data){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:data})},f=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},h=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})}},209:function(t,e,r){"use strict";r.r(e);var n=r(4),c=(r(36),r(192)),o={name:"editor",middleware:"authenticated",data:function(){return{isEdit:!1,article:{}}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$route.query.slug){e.next=7;break}return t.isEdit=!0,e.next=4,Object(c.c)(t.$route.query.slug);case 4:r=e.sent,article=r.data.article,t.article=article;case 7:case"end":return e.stop()}}),e)})))()},methods:{publish:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.isEdit?Object(c.h)(t.article.slug,{article:t.article}):Object(c.f)({article:t.article});case 2:r=e.sent,data=r.data,t.$router.push({name:"article",params:{slug:data.article.slug}});case 5:case"end":return e.stop()}}),e)})))()}}},l=r(30),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("form",[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.tagList,expression:"article.tagList"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},domProps:{value:t.article.tagList},on:{input:function(e){e.target.composing||t.$set(t.article,"tagList",e.target.value)}}}),t._v(" "),r("div",{staticClass:"tag-list"})]),t._v(" "),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{type:"button"},on:{click:t.publish}},[t._v("\n              Publish Article\n            ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);