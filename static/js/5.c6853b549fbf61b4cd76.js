webpackJsonp([5],{cRba:function(t,a){},scgW:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("ZYmg"),s={data:function(){return{blogs:[],total:0,page:1}},created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,n.a.getIndexBlogs({page:this.page}).then(function(a){t.blogs=a.data,t.total=a.total,t.page=a.page})},methods:{onPageChange:function(t){var a=this;console.log("MARk",t),n.a.getIndexBlogs({page:t}).then(function(e){a.blogs=e.data,a.total=e.total,a.page=e.page,a.$router.push({path:"/",query:{page:t}})})}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"index"}},[e("section",{staticClass:"blogs-post"},t._l(t.blogs,function(a){return e("div",[e("router-link",{staticClass:"item",attrs:{to:"/detail/"+a.id}},[e("figure",{staticClass:"avatar"},[e("img",{attrs:{src:a.user.avatar,alt:a.user.username}}),t._v(" "),e("figcaption",[t._v(t._s(a.user.username))])]),t._v(" "),e("div",{staticClass:"content"},[e("h3",[t._v(t._s(a.title)),e("span",[t._v(t._s(t.friendlyDate(a.createdAt)))])]),t._v(" "),e("p",[t._v(t._s(a.description))])])])],1)}),0),t._v(" "),e("section",{staticClass:"pagination"},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.onPageChange}})],1)])},staticRenderFns:[]};var r=e("VU/8")(s,o,!1,function(t){e("cRba")},null,null);a.default=r.exports}});
//# sourceMappingURL=5.c6853b549fbf61b4cd76.js.map