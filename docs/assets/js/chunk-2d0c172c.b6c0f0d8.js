(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c172c"],{"45a6":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.isLoader?s("div",{staticClass:"is-loader row"},[s("div",{staticClass:"col-md-12"},[s("center",[s("div",{staticClass:"spinner-border",attrs:{role:"status"}})])],1)]):s("div",{staticClass:"is-contacts",attrs:{id:"contactsPage"}},[s("div",{staticClass:"container"},[t.contactsPageInfo.title?s("vue-headful",{attrs:{title:t.contactsPageInfo.title.rendered+" | Ревизор"}}):t._e(),s("div",{staticClass:"is-breadcrumb-list"},[s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:{name:"homePage"},exact:""}},[t._v(" Главная ")])],1),t.contactsPageInfo.title?s("li",{staticClass:"breadcrumb-item active"},[t._v(" "+t._s(t.contactsPageInfo.title.rendered)+" ")]):t._e()])])]),s("div",{staticClass:"row is-contacts__info"},[s("div",{staticClass:"col-md-12"},[t.contactsPageInfo.title?s("h2",[t._v(" "+t._s(t.contactsPageInfo.title.rendered)+" ")]):t._e()]),t.contactsPageInfo.content?s("div",{staticClass:"col-md-6 is-contacts__info-details",domProps:{innerHTML:t._s(t.contactsPageInfo.content.rendered)}}):t._e(),s("div",{staticClass:"col-md-6 is-contacts__info-map"},[t.contactsPageInfo.acf?s("img",{staticClass:"img-fluid",attrs:{src:t.contactsPageInfo.acf.contacts_map,alt:""}}):t._e()])])],1)])},c=[],n=s("bc3a"),i=s.n(n),o={name:"contactsPage",components:{},data:function(){return{contactsPageInfo:{},isLoader:!0}},mounted:function(){var t=this;i.a.get("http://revisor.iceslam.ru/wp-json/wp/v2/pages/16").then((function(a){return t.contactsPageInfo=a.data})),this.isLoader=!1}},r=o,l=s("2877"),d=Object(l["a"])(r,e,c,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0c172c.b6c0f0d8.js.map