(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1607:function(e,t,o){"use strict";o.r(t);var n={data:function(){return{popupActive:!1}}},i=o(0),p={data:function(){return{value1:"",value2:"",popupActive2:!1,popupActive3:!1}}},a={data:function(){return{popupActive:!1}}},u={data:function(){return{colorx:"#def1d1",popupActive:!1}}},l={components:{PopupDefault:Object(i.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("vx-card",{attrs:{title:"Default","code-toggler":""}},[o("p",[e._v("To implement the popup we have the component "),o("code",[e._v("vs-popup")])]),e._v(" "),o("div",{staticClass:"demo-alignment"},[o("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:function(t){e.popupActive=!0}}},[e._v("Open Default popup")]),e._v(" "),o("vs-popup",{staticClass:"holamundo",attrs:{title:"Lorem ipsum dolor sit amet",active:e.popupActive},on:{"update:active":function(t){e.popupActive=t}}},[o("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])])],1),e._v(" "),o("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div class="demo-alignment">\n\n    <vs-button @click="popupActive=true" color="primary" type="border">Open Default popup</vs-button>\n\n    <vs-popup class="holamundo" title="Lorem ipsum dolor sit amet" :active.sync="popupActive">\n      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n    </vs-popup>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      popupActive: false,\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,PopupInnerPopup:Object(i.a)(p,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("vx-card",{attrs:{title:"Inner Popup","code-toggler":""}},[o("p",[e._v("You can add one popup inside another")]),e._v(" "),o("div",{staticClass:"demo-alignment"},[o("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:function(t){e.popupActive2=!0}}},[e._v("Open Popup")]),e._v(" "),o("vs-popup",{attrs:{classContent:"popup-example",title:"Lorem ipsum dolor sit amet",active:e.popupActive2},on:{"update:active":function(t){e.popupActive2=t}}},[o("vs-input",{staticClass:"inputx mb-3",attrs:{placeholder:"Placeholder"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),e._v(" "),o("vs-input",{staticClass:"inputx mb-3",attrs:{disabled:"",placeholder:"Disabled"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),e._v(" "),o("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:function(t){e.popupActive3=!0}}},[e._v("Open Inner Popup")]),e._v(" "),o("vs-popup",{attrs:{title:"Inner popup",active:e.popupActive3},on:{"update:active":function(t){e.popupActive3=t}}},[o("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])])],1)],1),e._v(" "),o("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div class="demo-alignment">\n\n    <vs-button @click="popupActive2=true" color="primary" type="filled">Open Popup</vs-button>\n\n    <vs-popup classContent="popup-example" title="Lorem ipsum dolor sit amet" :active.sync="popupActive2">\n      <vs-input class="inputx mb-3" placeholder="Placeholder" v-model="value1" />\n      <vs-input disabled class="inputx mb-3" placeholder="Disabled" v-model="value2" />\n      <vs-button @click="popupActive3=true" color="primary" type="filled">Open Inner Popup</vs-button>\n\n      <vs-popup title="Inner popup" :active.sync="popupActive3">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n      </vs-popup>\n    </vs-popup>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value1: \'\',\n      value2: \'\',\n      popupActive2: false,\n      popupActive3: false\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,PopupFullscreen:Object(i.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("vx-card",{attrs:{title:"Fullscreen","code-toggler":""}},[o("p",[e._v("the popup can be full screen you just have to add the property "),o("code",[e._v("fullscreen")])]),e._v(" "),o("div",{staticClass:"demo-alignment"},[o("vs-button",{attrs:{color:"primary"},on:{click:function(t){e.popupActive=!0}}},[e._v("Open fullscreen popup")]),e._v(" "),o("vs-popup",{attrs:{fullscreen:"",title:"fullscreen",active:e.popupActive},on:{"update:active":function(t){e.popupActive=t}}},[o("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])],1),e._v(" "),o("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div class="demo-alignment">\n      <vs-button @click="popupActive=true" color="primary">Open fullscreen popup</vs-button>\n      <vs-popup fullscreen title="fullscreen" :active.sync="popupActive">\n        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n      </vs-popup>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      popupActive: false,\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,PopupBackground:Object(i.a)(u,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("vx-card",{attrs:{title:"Background","code-toggler":""}},[o("p",[e._v("You can change the background of the property with the property "),o("code",[e._v("background-color")]),e._v(" or if you want to change the color of the popup you can use the property "),o("code",[e._v("background-color-popup")])]),e._v(" "),o("div",{staticClass:"demo-alignment"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.colorx,expression:"colorx"}],attrs:{type:"color",name:"",value:""},domProps:{value:e.colorx},on:{input:function(t){t.target.composing||(e.colorx=t.target.value)}}}),e._v(" "),o("vs-button",{attrs:{"text-color":"rgba(0,0,0,0.5)",color:e.colorx,type:"filled"},on:{click:function(t){e.popupActive=!0}}},[e._v("Open background popup")]),e._v(" "),o("vs-popup",{attrs:{"background-color":"rgba(152,152,152,.7)","background-color-popup":e.colorx,title:"Background",active:e.popupActive},on:{"update:active":function(t){e.popupActive=t}}},[o("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])])],1),e._v(" "),o("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div class="demo-alignment">\n\n      <input v-model="colorx" type="color" name="" value="">\n      <vs-button text-color="rgba(0,0,0,0.5)" :color="colorx" @click="popupActive=true" type="filled">Open background popup</vs-button>\n\n      <vs-popup background-color="rgba(255,255,255,.6)" :background-color-popup="colorx" class=""  title="Background" :active.sync="popupActive">\n        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n      </vs-popup>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      colorx:"#def1d1",\n      popupActive: false,\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports}},c=Object(i.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"popup-demo"}},[t("popup-default"),this._v(" "),t("popup-inner-popup"),this._v(" "),t("popup-fullscreen"),this._v(" "),t("popup-background")],1)}),[],!1,null,null,null);t.default=c.exports}}]);