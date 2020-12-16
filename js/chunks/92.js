(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1584:function(t,e,n){"use strict";n.r(e);var l=n(34),s=n.n(l),o={components:{"v-select":s.a}},a=n(0),r=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vx-card",{attrs:{title:"Basic","code-toggler":"","no-shadow":"","card-border":""}},[n("div",[n("v-select",{attrs:{options:["foo","bar"],dir:t.$vs.rtl?"rtl":"ltr"}}),t._v(" "),n("p",{staticClass:"my-5"},[t._v("When provided an array of objects, "),n("code",[t._v("vue-select")]),t._v(" will display a single value of the object. By default, "),n("code",[t._v("vue-select")]),t._v(" will look for a key named "),n("code",[t._v("label")]),t._v(" on the object to use as display text")]),t._v(" "),n("v-select",{attrs:{options:[{label:"Foo",value:"foo"}],dir:t.$vs.rtl?"rtl":"ltr"}})],1),t._v(" "),n("template",{slot:"codeContainer"},[t._v("\n<template>\n  <v-select :options=\"['foo','bar']\" :dir=\"$vs.rtl ? 'rtl' : 'ltr'\" />\n  <v-select :options=\"[{label: 'Foo', value: 'foo'}]\" :dir=\"$vs.rtl ? 'rtl' : 'ltr'\" />\n</template>\n\n<script>\nimport vSelect from 'vue-select'\n\nexport default{\n  components: {\n    'v-select': vSelect,\n  }\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports,c=n(16),i=n.n(c),u={data:function(){return{countries:[{countryCode:"DE",countryName:"Germany"},{countryCode:"AUS",countryName:"Australia"},{countryCode:"CA",countryName:"Canada"}]}},components:{"v-select":s.a,Prism:i.a}},v={data:function(){return{}},components:{DropdownOptionsBasic:r,DropdownOptionsOptionLabels:Object(a.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("vx-card",{attrs:{title:"Option Labels","code-toggler":"","no-shadow":"","card-border":""}},[e("div",[e("p",{staticClass:"mb-3"},[this._v("When the options array contains objects, vue-select looks for the label key to display by default. You can set your own label to match your source data using the label prop")]),this._v(" "),e("v-select",{attrs:{label:"countryName",options:this.countries,dir:this.$vs.rtl?"rtl":"ltr"}})],1),this._v(" "),e("template",{slot:"codeContainer"},[this._v('\n<template>\n  <v-select label="countryName" :options="countries" :dir="$vs.rtl ? \'rtl\' : \'ltr\'" />\n</template>\n\n<script>\nimport vSelect from \'vue-select\'\n\nexport default{\n  data() {\n    return {\n      countries: [\n        {\n          countryCode: "DE",\n          countryName: "Germany",\n        },\n        {\n          countryCode: "AUS",\n          countryName: "Australia",\n        },\n        {\n          countryCode: "CA",\n          countryName: "Canada",\n        },\n      ]\n    }\n  },\n  components: {\n    \'v-select\': vSelect,\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports}},p=Object(a.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("vx-card",{attrs:{title:"Dropdown Options"}},[e("p",[this._v("vue-select accepts arrays of strings or objects to use as options through the "),e("code",[this._v("options")]),this._v(" prop")]),this._v(" "),e("div",{staticClass:"mt-5"},[e("dropdown-options-basic"),this._v(" "),e("dropdown-options-option-labels")],1)])}),[],!1,null,null,null).exports,d={data:function(){return{options:[{id:1,label:"foo"},{id:3,label:"bar"},{id:2,label:"baz"}],selected:{id:3,label:"bar"}}},components:{"v-select":s.a,Prism:i.a}},m=Object(a.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vx-card",{attrs:{title:"Default","code-toggler":"","no-shadow":"","card-border":""}},[n("div",[n("p",{staticClass:"mb-3"},[t._v("The most common use case for vue-select is to have the chosen value synced with a parent component. vue-select takes advantage of the v-model syntax to sync values with a parent")]),t._v(" "),n("v-select",{attrs:{options:t.options,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),n("br"),t._v(" "),n("p",[t._v("If you don't require the value to be synced, you can also pass the prop directly:")]),t._v(" "),n("prism",{staticClass:"rounded-lg"},[t._v('\n<v-select :value="selected"></v-select>\n            ')]),t._v(" "),n("p",{staticClass:"mt-5"},[t._v("This method allows you to pre-select a value(s), without syncing any changes to the parent component. This is also very useful when using a state management tool, like Vuex")])],1),t._v(" "),n("template",{slot:"codeContainer"},[t._v("\n<template>\n  <v-select v-model=\"selected\" :options=\"options\" :dir=\"$vs.rtl ? 'rtl' : 'ltr'\" /><br>\n</template>\n\n<script>\nimport vSelect from 'vue-select'\n\nexport default{\n  data() {\n    return {\n      options: [\n        {id: 1, label: 'foo'},\n        {id: 3, label: 'bar'},\n        {id: 2, label: 'baz'},\n      ],\n      selected: {id: 3, label: 'bar'},\n    }\n  },\n  components: {\n    'v-select': vSelect,\n  }\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports,h={data:function(){return{selected:["foo","bar"],options:["foo","bar","baz"]}},components:{"v-select":s.a}},b=Object(a.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vx-card",{attrs:{title:"Single/Multiple Selection","code-toggler":"","no-shadow":"","card-border":""}},[n("div",[n("p",{staticClass:"mb-3"},[t._v("By default, vue-select supports choosing a single value. If you need multiple values, use the multiple prop")]),t._v(" "),n("v-select",{attrs:{multiple:"",closeOnSelect:!1,options:t.options,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),n("br")],1),t._v(" "),n("template",{slot:"codeContainer"},[t._v("\n<template>\n  <v-select multiple :closeOnSelect=\"false\" v-model=\"selected\" :options=\"options\" :dir=\"$vs.rtl ? 'rtl' : 'ltr'\" /><br>\n</template>\n\n<script>\nimport vSelect from 'vue-select'\n\nexport default{\n  data() {\n    return {\n      selected: ['foo','bar'],\n      options: ['foo','bar','baz']\n    }\n  },\n  components: {\n    'v-select': vSelect,\n  }\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports,g={data:function(){return{options:[]}},components:{"v-select":s.a}},_={components:{SelectingValuesDefault:m,SelectingValuesSingleMultipleSelection:b,SelectingValuesTagging:Object(a.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vx-card",{attrs:{title:"Tagging","code-toggler":"","no-shadow":"","card-border":""}},[n("div",[n("p",{staticClass:"mb-3"},[t._v("To allow input that's not present within the options, set the taggable prop to true. If you want new tags to be pushed to the options list, set push-tags to true")]),n("br"),t._v(" "),n("h6",{staticClass:"mb-2"},[t._v("Vue Select - Taggable")]),t._v(" "),n("v-select",{attrs:{taggable:"",dir:t.$vs.rtl?"rtl":"ltr"}}),n("br"),t._v(" "),n("h6",{staticClass:"mb-2"},[t._v("Vue Select - Taggable & Push-Tags")]),t._v(" "),n("v-select",{attrs:{taggable:"","push-tags":"",dir:t.$vs.rtl?"rtl":"ltr"}}),t._v(" "),n("small",{staticClass:"muted"},[t._v("Try adding a tag and removing it. It'll still be present within the options list.")])],1),t._v(" "),n("template",{slot:"codeContainer"},[t._v("\n<template>\n  <h6>Vue Select - Taggable</h6>\n  <v-select taggable :dir=\"$vs.rtl ? 'rtl' : 'ltr'\" /><br>\n\n  <h6>Vue Select - Taggable &amp; Push-Tags</h6>\n  <v-select taggable push-tags :dir=\"$vs.rtl ? 'rtl' : 'ltr'\" />\n</template>\n\n<script>\nimport vSelect from 'vue-select'\n\nexport default{\n  data() {\n    return {\n      options: []\n    }\n  },\n  components: {\n    'v-select': vSelect,\n  }\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports}},f={components:{SelectDropdownOptions:p,SelectSelectingValues:Object(a.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("vx-card",{attrs:{title:"Selecting Values"}},[e("div",[e("selecting-values-default"),this._v(" "),e("selecting-values-single-multiple-selection"),this._v(" "),e("selecting-values-tagging")],1)])}),[],!1,null,null,null).exports}},y=Object(a.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"extra-component-select-demo"}},[this._m(0),this._v(" "),e("select-dropdown-options"),this._v(" "),e("select-selecting-values")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-4"},[e("a",{attrs:{href:"http://sagalbot.github.io/vue-select/",target:"_blank",rel:"nofollow"}},[this._v("vue-select")]),this._v(" is a native Vue.js select component that provides similar functionality to Select2. Read full documnetation "),e("a",{attrs:{href:"http://sagalbot.github.io/vue-select/docs/",target:"_blank",rel:"nofollow"}},[this._v("here")])])}],!1,null,null,null);e.default=y.exports}}]);