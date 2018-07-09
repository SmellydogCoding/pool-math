webpackJsonp([41],{100:function(t,e,n){"use strict";e.a={computed:{src:function(){return this.$store.getters.image.src},alt:function(){return this.$store.getters.image.alt}}}},101:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.src,alt:t.alt}})},r=[],a={render:s,staticRenderFns:r};e.a=a},171:function(t,e,n){"use strict";var s=n(97),r=n(88),a=n(91),o=n(94);e.a={data:function(){return{problem:"s1p2",image:{src:"src/assets/section1/problem2.jpg",alt:"pool image for problem 2"},hint:{title:"Hint for Problem 2",type:"textHint",text:"Fluid Ounces / 128 = Gallons"},next:{text:"Problem 3: Fluid Ounces to Cups",route:"/converting-fluid-ounces-to-cups"},newButton:"New Fluid Ounces to Gallons Problem",answerSet:{type:"conversion",decimals:2}}},components:{appIllustrationBlock:s.a,appNextOrNew:r.a,appAnswerMessage:a.a,appSelectAnswer:o.a},computed:{title:function(){return"You need to add "+this.units.flOunces+" Fluid Ounces of Sodium Hypochlorite to do breakpoint chlorination for your pool.  How many Gallons is this?"},units:function(){return this.$store.getters.units}},created:function(){var t={problem:this.problem,image:this.image,hint:this.hint,next:this.next,newButton:this.newButton,answerSet:this.answerSet};this.$store.dispatch("init",t)}}},172:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-container",{attrs:{"grid-list":"grid-list","text-xs-center":"text-xs-center"}},[n("v-layout",{attrs:{row:"row",wrap:"wrap"}},[n("v-flex",{staticClass:"my-2",attrs:{xs12:"xs12"}},[n("p",{staticClass:"title"},[t._v(t._s(t.title))])]),n("v-flex",{attrs:{xs12:"xs12",md6:"md6"}},[n("app-IllustrationBlock")],1),n("v-flex",{staticClass:"answer-block--background pa-2",attrs:{xs12:"xs12",md6:"md6"}},[n("app-SelectAnswer"),n("app-AnswerMessage"),n("app-NextOrNew")],1)],1)],1)],1)},r=[],a={render:s,staticRenderFns:r};e.a=a},45:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(171),r=n(172),a=n(1),o=a(s.a,r.a,!1,null,null,null);e.default=o.exports},88:function(t,e,n){"use strict";var s=n(89),r=n(90),a=n(1),o=a(s.a,r.a,!1,null,null,null);e.a=o.exports},89:function(t,e,n){"use strict";e.a={methods:{makeNew:function(){this.$store.dispatch("newProblem")}},computed:{data:function(){return this.$store.getters.newOrNext}}}},90:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",[t.data.showCorrect?n("v-btn",{staticClass:"mt-3 mobile--reduce-text-085",attrs:{color:"info",dark:"dark",block:"block"},on:{click:function(e){t.makeNew()}}},[t._v(t._s(t.data.newButton)),n("v-icon",{staticClass:"ml-2"},[t._v("refresh")])],1):t._e(),t.data.showCorrect?n("v-btn",{staticClass:"mt-3 mobile--reduce-text-085",attrs:{color:"success",dark:"dark",block:"block"},on:{click:function(e){t.$router.push(t.data.next.route)}}},[t._v(t._s(t.data.next.text)),n("v-icon",{staticClass:"ml-2"},[t._v("arrow_forward")])],1):t._e()],1)])},r=[],a={render:s,staticRenderFns:r};e.a=a},91:function(t,e,n){"use strict";var s=n(92),r=n(93),a=n(1),o=a(s.a,r.a,!1,null,null,null);e.a=o.exports},92:function(t,e,n){"use strict";e.a={computed:{data:function(){return this.$store.getters.answerMessage}}}},93:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.data.showCorrect?n("v-alert",{staticClass:"title",attrs:{color:"success",icon:"check_circle",value:"true"}},[t._v(t._s(t.data.correctMessage))]):t._e(),t.data.showIncorrect?n("v-alert",{staticClass:"title",attrs:{color:"error",icon:"close",value:"true"}},[t._v(t._s(t.data.incorrectMessage))]):t._e()],1)],1)},r=[],a={render:s,staticRenderFns:r};e.a=a},94:function(t,e,n){"use strict";var s=n(95),r=n(96),a=n(1),o=a(s.a,r.a,!1,null,null,null);e.a=o.exports},95:function(t,e,n){"use strict";var s=function(){return n.e(51).then(n.bind(null,102))},r=function(){return n.e(52).then(n.bind(null,103))};e.a={data:function(){return{}},methods:{sendAnswer:function(){this.$store.dispatch("answerQuestion")},selection:function(t){this.$store.dispatch("selection",t)}},components:{appTextHint:s,appComponentHint:r},computed:{data:function(){return this.$store.getters.select},hint:function(){return this.$store.getters.hint},componentToUse:function(){return"app-"+this.hint.type}}}},96:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-select",{attrs:{items:t.data.answers,label:"Select Answer",disabled:t.data.showCorrect},on:{change:t.selection},model:{value:t.data.answer,callback:function(e){t.$set(t.data,"answer",e)},expression:"data.answer"}}),n("v-btn",{staticClass:"color--white mb-2",attrs:{color:"info",light:"light",disabled:null===t.data.answer||t.data.showCorrect},on:{click:function(e){t.sendAnswer()}}},[t._v("Answer")]),n("transition",{attrs:{name:"fade"}},[t.hint.showHintButton?n(t.componentToUse,{tag:"component",attrs:{component:t.hint.component,title:t.hint.title,text:t.hint.text,cyanuric:t.hint.cyanuric}}):t._e()],1)],1)},r=[],a={render:s,staticRenderFns:r};e.a=a},97:function(t,e,n){"use strict";function s(t){n(98)}var r=n(100),a=n(101),o=n(1),i=s,c=o(r.a,a.a,!1,i,"data-v-46bdd84f",null);e.a=c.exports},98:function(t,e,n){var s=n(99);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(3)("65d6252f",s,!0)},99:function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,"img[data-v-46bdd84f]{width:80%}",""])}});
//# sourceMappingURL=41.build.js.map