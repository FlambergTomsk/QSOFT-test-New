(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{262:function(e,t,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("0d1eb552",content,!0,{sourceMap:!1})},263:function(e,t,n){e.exports=n.p+"img/henkel.8c60dd6.svg"},264:function(e,t,n){e.exports=n.p+"img/johnDeeree.203af71.svg"},265:function(e,t,n){e.exports=n.p+"img/mcDonalds.263c988.svg"},266:function(e,t,n){e.exports=n.p+"img/ikea.a020ad2.svg"},267:function(e,t,n){e.exports=n.p+"img/reebok.a35f201.svg"},268:function(e,t,n){e.exports=n.p+"img/nike.c811965.svg"},269:function(e,t,n){e.exports=n.p+"img/caterpillar.9479971.svg"},270:function(e,t,n){"use strict";n(262)},271:function(e,t,n){var r=n(28)(!1);r.push([e.i,".content[data-v-1ed6e1d0]{transition:.5s}.content__field[data-v-1ed6e1d0]{margin:70px 0 73px}.field[data-v-1ed6e1d0]{transition:.5s}.field__partners[data-v-1ed6e1d0]{display:flex;flex-wrap:wrap;align-items:center;grid-gap:30px;gap:30px}.field_fixed[data-v-1ed6e1d0]{margin-top:150px}.field__title[data-v-1ed6e1d0]{font-size:36px;font-weight:500;line-height:58px;letter-spacing:0;text-align:left;margin-bottom:20px}.partners[data-v-1ed6e1d0]{transition:.5s}.partners__item[data-v-1ed6e1d0]{width:270px;height:120px;border:1px solid #ebebf1;border-radius:5px;display:flex;align-items:center;justify-content:center;transition:.5s;cursor:pointer}.partners__item[data-v-1ed6e1d0]:hover{box-shadow:-3px 0 40px rgba(0,0,0,.1)}@media (max-width:1199px){.content__field[data-v-1ed6e1d0]{padding:0 20px}.field__partners[data-v-1ed6e1d0]{transition:1s;grid-gap:20px;gap:20px}.partners__item[data-v-1ed6e1d0]{width:229px}}@media (max-width:767px){.field__partners[data-v-1ed6e1d0]{justify-content:space-around}}@media (max-width:575px){.partners__item[data-v-1ed6e1d0]{width:335px}}",""]),e.exports=r},273:function(e,t,n){"use strict";n.r(t);n(3),n(2),n(4),n(5);var r=n(0),o=(n(1),n(43),n(37),n(13),n(36));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={name:"Content",data:function(){return{partners:[{name:"Henkel",logo:n(263)},{name:"John Deere",logo:n(264)},{name:"McDonalds.svg",logo:n(265)},{name:"Ikea",logo:n(266)},{name:"Reebok",logo:n(267)},{name:"Nike",logo:n(268)},{name:"Caterpillar",logo:n(269)}]}},computed:l(l({},Object(o.c)({searchValue:"data/getSearchValue"})),{},{filteredPartners:function(){var e=this;return this.partners.filter((function(t){return t.name.toLowerCase().includes(e.searchValue.toLowerCase())}))}}),created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var e=document.querySelector(".field");window.pageYOffset>150?e.classList.add("field_fixed"):e.classList.remove("field_fixed")}}},f=(n(270),n(20)),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("div",{staticClass:"content__field field"},[n("div",{staticClass:"field__title"},[e._v("\n      НАШИ ПАРТНЕРЫ\n    ")]),e._v(" "),n("div",{staticClass:"field__partners partners"},e._l(e.filteredPartners,(function(e,t){return n("div",{key:"item-"+e+"-"+t,staticClass:"partners__item item"},[n("img",{class:e.class,attrs:{src:e.logo,alt:"Company logo"}})])})),0)])])}),[],!1,null,"1ed6e1d0",null);t.default=component.exports}}]);