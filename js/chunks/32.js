(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{240:function(e,t,a){var s=a(783);"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(8)(s,i);s.locals&&(e.exports=s.locals)},502:function(e,t,a){"use strict";a.r(t);var s={data:function(){return{knowledgeBaseSearchQuery:"",kb:[{id:1,title:"Réactivité",description:"Muffin lemon drops chocolate carrot cake chocolate bar sweet roll.",graphic:a(779),url:"/pages/knowledge-base/category"},{id:2,title:"Fiabilité",description:"Gingerbread sesame snaps wafer soufflé. Macaroon brownie ice cream",graphic:a(780),url:"/pages/knowledge-base/category"},{id:3,title:"Rapidité",description:"cotton candy caramels danish chocolate cake pie candy. Lemon drops tart.",graphic:a(781),url:"/pages/knowledge-base/category"}]}},computed:{filteredKB:function(){var e=this;return this.kb.filter((function(t){return t.title.toLowerCase().includes(e.knowledgeBaseSearchQuery.toLowerCase())||t.description.toLowerCase().includes(e.knowledgeBaseSearchQuery.toLowerCase())}))}},methods:{},components:{}},i=(a(782),a(0)),n=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"knowledge-base-page"}},[e._m(0),e._v(" "),a("div",{staticClass:"vx-row"},e._l(e.filteredKB,(function(t){return a("div",{key:t.id,staticClass:"vx-col w-full md:w-1/3 sm:w-1/2 mb-base",on:{click:function(a){e.$router.push(t.url).catch((function(){}))}}},[a("vx-card",{staticClass:"text-center cursor-pointer"},[a("img",{staticClass:"mx-auto mb-4",attrs:{src:t.graphic,alt:"graphic",width:"180"}}),e._v(" "),a("h4",{staticClass:"mb-2"},[e._v(e._s(t.title.toUpperCase()))]),e._v(" "),a("small",[e._v(e._s(t.description))])])],1)})),0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"knowledge-base-jumbotron"},[t("div",{staticClass:"knowledge-base-jumbotron-content md:p-24 sm:p-16  rounded-lg mb-base bg-right-top"},[t("h1",{staticClass:"mb-6 text-2xl   font-black font-Comic Sans MS text-blue-600 pt-8"},[this._v("\n                QUI SOMME-NOUS\n            ")]),this._v(" "),t("p",{staticClass:"max-w-sm text-left sm:text-center md:text-right lg:text-justify "},[this._v("\n                AWID est avant tout une équipe dédiée à la satisfaction de\n                ses clients. Notre société associe plusieurs compétences\n                nous permettons d'être spécialisée et innovant dans la\n                course urgente, la e-logistique et le service chauffeur\n                Premium.\n            ")])])])}],!1,null,"7cf2b317",null);t.default=n.exports},779:function(e,t){e.exports="/images/graphic-1.png?22b046f6fc2c8b16f16334eabab57831"},780:function(e,t){e.exports="/images/graphic-2.png?560d813bbfa933a94178e2cc12a486c6"},781:function(e,t){e.exports="/images/graphic-4.png?6ab88846ad3498bdc9b1f00cc2243315"},782:function(e,t,a){"use strict";var s=a(240);a.n(s).a},783:function(e,t,a){var s=a(187);(e.exports=a(7)(!1)).push([e.i,"[dir] .knowledge-base-jumbotron-content[data-v-7cf2b317]{background-image:url("+s(a(784))+");background-size:90%}",""])},784:function(e,t){e.exports="/images/exemple.jpg?fa3dfefe88102562f35754aff46740c1"}}]);