(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1502:function(e,s){e.exports="/images/register.jpg?cfd9ef099bfc1f99c6f2970ae05a6a4a"},1503:function(e,s,a){"use strict";var t=a(356);a.n(t).a},1504:function(e,s,a){(e.exports=a(7)(!1)).push([e.i,".register-tabs-container{min-height:517px}[dir] .register-tabs-container .con-tab{padding-bottom:23px}",""])},1621:function(e,s,a){"use strict";a.r(s);var t={data:function(){return{displayName:"",email:"",password:"",confirm_password:"",isTermsConditionAccepted:!0}},computed:{validateForm:function(){return!this.errors.any()&&""!==this.displayName&&""!==this.email&&""!==this.password&&""!==this.confirm_password&&!0===this.isTermsConditionAccepted}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerUserJWt:function(){if(this.validateForm&&this.checkLogin()){var e={userDetails:{displayName:this.displayName,email:this.email,password:this.password,confirmPassword:this.confirm_password},notify:this.$vs.notify};this.$store.dispatch("auth/registerUserJWT",e)}}}},i=a(0),r={data:function(){return{displayName:"",email:"",password:"",confirm_password:"",isTermsConditionAccepted:!0}},computed:{validateForm:function(){return!this.errors.any()&&""!==this.displayName&&""!==this.email&&""!==this.password&&""!==this.confirm_password&&!0===this.isTermsConditionAccepted}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerUser:function(){if(this.validateForm&&this.checkLogin()){var e={userDetails:{displayName:this.displayName,email:this.email,password:this.password,confirmPassword:this.confirm_password},notify:this.$vs.notify};this.$store.dispatch("auth/registerUser",e)}}}},l={methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerAuth0:function(){this.checkLogin()&&this.$auth.login({target:this.$route.query.to})}}},o={components:{RegisterJwt:Object(i.a)(t,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"clearfix"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash|min:3",expression:"'required|alpha_dash|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur","label-placeholder":"Name",name:"displayName",placeholder:"Name"},model:{value:e.displayName,callback:function(s){e.displayName=s},expression:"displayName"}}),e._v(" "),a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("displayName")))]),e._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"email",type:"email","label-placeholder":"Email",placeholder:"Email"},model:{value:e.email,callback:function(s){e.email=s},expression:"email"}}),e._v(" "),a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))]),e._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],ref:"password",staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur",name:"password","label-placeholder":"Password",placeholder:"Password"},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),e._v(" "),a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("password")))]),e._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|max:10|confirmed:password",expression:"'min:6|max:10|confirmed:password'"}],staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur","data-vv-as":"password",name:"confirm_password","label-placeholder":"Confirm Password",placeholder:"Confirm Password"},model:{value:e.confirm_password,callback:function(s){e.confirm_password=s},expression:"confirm_password"}}),e._v(" "),a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("confirm_password")))]),e._v(" "),a("vs-checkbox",{staticClass:"mt-6",model:{value:e.isTermsConditionAccepted,callback:function(s){e.isTermsConditionAccepted=s},expression:"isTermsConditionAccepted"}},[e._v("I accept the terms & conditions.")]),e._v(" "),a("vs-button",{staticClass:"mt-6",attrs:{type:"border",to:"/pages/login"}},[e._v("Login")]),e._v(" "),a("vs-button",{staticClass:"float-right mt-6",attrs:{disabled:!e.validateForm},on:{click:e.registerUserJWt}},[e._v("Register")])],1)}),[],!1,null,null,null).exports,RegisterFirebase:Object(i.a)(r,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"clearfix"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash|min:3",expression:"'required|alpha_dash|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur","label-placeholder":"Name",name:"displayName",placeholder:"Name"},model:{value:e.displayName,callback:function(s){e.displayName=s},expression:"displayName"}}),e._v(" "),a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("displayName")))]),e._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"email",type:"email","label-placeholder":"Email",placeholder:"Email"},model:{value:e.email,callback:function(s){e.email=s},expression:"email"}}),e._v(" "),a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))]),e._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],ref:"password",staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur",name:"password","label-placeholder":"Password",placeholder:"Password"},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),e._v(" "),a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("password")))]),e._v(" "),a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|max:10|confirmed:password",expression:"'min:6|max:10|confirmed:password'"}],staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur","data-vv-as":"password",name:"confirm_password","label-placeholder":"Confirm Password",placeholder:"Confirm Password"},model:{value:e.confirm_password,callback:function(s){e.confirm_password=s},expression:"confirm_password"}}),e._v(" "),a("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("confirm_password")))]),e._v(" "),a("vs-checkbox",{staticClass:"mt-6",model:{value:e.isTermsConditionAccepted,callback:function(s){e.isTermsConditionAccepted=s},expression:"isTermsConditionAccepted"}},[e._v("I accept the terms & conditions.")]),e._v(" "),a("vs-button",{staticClass:"mt-6",attrs:{type:"border",to:"/pages/login"}},[e._v("Login")]),e._v(" "),a("vs-button",{staticClass:"float-right mt-6",attrs:{disabled:!e.validateForm},on:{click:e.registerUser}},[e._v("Register")])],1)}),[],!1,null,null,null).exports,RegisterAuth0:Object(i.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("vs-button",{staticClass:"mb-3 mt-4 ml-2",attrs:{color:"#eb5424"},on:{click:this.registerAuth0}},[this._v("Auth0")])}),[],!1,null,null,null).exports}},n=(a(1503),Object(i.a)(o,(function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"},[s("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"},[s("vx-card",[s("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[s("div",{staticClass:"vx-row no-gutter"},[s("div",{staticClass:"vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"},[s("img",{staticClass:"mx-auto",attrs:{src:a(1502),alt:"register"}})]),this._v(" "),s("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg"},[s("div",{staticClass:"px-8 pt-8 register-tabs-container"},[s("div",{staticClass:"vx-card__title mb-4"},[s("h4",{staticClass:"mb-4"},[this._v("Create Account")]),this._v(" "),s("p",[this._v("Fill the below form to create a new account.")])]),this._v(" "),s("vs-tabs",[s("vs-tab",{attrs:{label:"JWT"}},[s("register-jwt")],1),this._v(" "),s("vs-tab",{attrs:{label:"Firebase"}},[s("register-firebase")],1),this._v(" "),s("vs-tab",{attrs:{label:"Auth0"}},[s("register-auth0")],1)],1)],1)])])])])],1)])}),[],!1,null,null,null));s.default=n.exports},356:function(e,s,a){var t=a(1504);"string"==typeof t&&(t=[[e.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(8)(t,i);t.locals&&(e.exports=t.locals)}}]);