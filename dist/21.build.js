webpackJsonp([21],{409:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(671),r=n(672),a=n(65),i=a(s.a,r.a,!1,null,null,null);e.default=i.exports},415:function(t,e,n){"use strict";var s=n(416),r=n(417),a=n(65),i=a(s.a,r.a,!1,null,null,null);e.a=i.exports},416:function(t,e,n){"use strict";e.a={methods:{makeNew:function(){this.$store.dispatch("newProblem")}},computed:{data:function(){return this.$store.getters.newOrNext}}}},417:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",[t.data.showCorrect?n("v-btn",{staticClass:"mt-3 mobile--reduce-text-085",attrs:{color:"info",dark:"dark",block:"block"},on:{click:function(e){t.makeNew()}}},[t._v(t._s(t.data.newButton)),n("v-icon",{staticClass:"ml-2"},[t._v("refresh")])],1):t._e(),t.data.showCorrect?n("v-btn",{staticClass:"mt-3 mobile--reduce-text-085",attrs:{color:"success",dark:"dark",block:"block"},on:{click:function(e){t.$router.push(t.data.next.route)}}},[t._v(t._s(t.data.next.text)),n("v-icon",{staticClass:"ml-2"},[t._v("arrow_forward")])],1):t._e()],1)])},r=[],a={render:s,staticRenderFns:r};e.a=a},418:function(t,e,n){"use strict";var s=n(419),r=n(420),a=n(65),i=a(s.a,r.a,!1,null,null,null);e.a=i.exports},419:function(t,e,n){"use strict";e.a={computed:{data:function(){return this.$store.getters.answerMessage}}}},420:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.data.showCorrect?n("v-alert",{staticClass:"title",attrs:{color:"success",icon:"check_circle",value:"true"}},[t._v(t._s(t.data.correctMessage))]):t._e(),t.data.showIncorrect?n("v-alert",{staticClass:"title",attrs:{color:"error",icon:"close",value:"true"}},[t._v(t._s(t.data.incorrectMessage))]):t._e()],1)],1)},r=[],a={render:s,staticRenderFns:r};e.a=a},421:function(t,e,n){"use strict";var s=n(422),r=n(423),a=n(65),i=a(s.a,r.a,!1,null,null,null);e.a=i.exports},422:function(t,e,n){"use strict";var s=function(){return n.e(51).then(n.bind(null,429))},r=function(){return n.e(52).then(n.bind(null,430))};e.a={data:function(){return{}},methods:{sendAnswer:function(){this.$store.dispatch("answerQuestion")},selection:function(t){this.$store.dispatch("selection",t)}},components:{appTextHint:s,appComponentHint:r},computed:{data:function(){return this.$store.getters.select},hint:function(){return this.$store.getters.hint},componentToUse:function(){return"app-"+this.hint.type}}}},423:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-select",{attrs:{items:t.data.answers,label:"Select Answer",disabled:t.data.showCorrect},on:{change:t.selection},model:{value:t.data.answer,callback:function(e){t.$set(t.data,"answer",e)},expression:"data.answer"}}),n("v-btn",{staticClass:"color--white mb-2",attrs:{color:"info",light:"light",disabled:null===t.data.answer||t.data.showCorrect},on:{click:function(e){t.sendAnswer()}}},[t._v("Answer")]),n("transition",{attrs:{name:"fade"}},[t.hint.showHintButton?n(t.componentToUse,{tag:"component",attrs:{component:t.hint.component,title:t.hint.title,text:t.hint.text,cyanuric:t.hint.cyanuric}}):t._e()],1)],1)},r=[],a={render:s,staticRenderFns:r};e.a=a},424:function(t,e,n){"use strict";function s(t){n(425)}var r=n(427),a=n(428),i=n(65),o=s,c=i(r.a,a.a,!1,o,"data-v-46bdd84f",null);e.a=c.exports},425:function(t,e,n){var s=n(426);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(93)("65d6252f",s,!0)},426:function(t,e,n){e=t.exports=n(50)(void 0),e.push([t.i,"img[data-v-46bdd84f]{width:80%}",""])},427:function(t,e,n){"use strict";e.a={computed:{src:function(){return this.$store.getters.image.src},alt:function(){return this.$store.getters.image.alt}}}},428:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.src,alt:t.alt}})},r=[],a={render:s,staticRenderFns:r};e.a=a},671:function(t,e,n){"use strict";var s=n(424),r=n(415),a=n(418),i=n(421);e.a={data:function(){return{problem:"s7p4",image:{src:"src/assets/section7/problem4-5-6.jpg",alt:"illustration for problem 4"},hint:{title:"Hint for Problem 4",type:"textHint",text:"Total Filter Area = Radius x Radius x 3.14<br>Radius = Diameter / 2"},next:{text:"Problem 5: Sand Filter - Filter Size Required",route:"/sand-filter-size-required"},newButton:"New Sand Filter Size Problem",answerSet:{type:"filter",decimals:1}}},components:{appIllustrationBlock:s.a,appNextOrNew:r.a,appAnswerMessage:a.a,appSelectAnswer:i.a},computed:{title:function(){return"You have a sand filter that has a diameter of "+this.units.diameter+"ft.  What is the total filtering area (in ft²) of this filter?"},units:function(){return this.$store.getters.units}},created:function(){var t={problem:this.problem,image:this.image,hint:this.hint,next:this.next,newButton:this.newButton,answerSet:this.answerSet};this.$store.dispatch("init",t)}}},672:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-container",{attrs:{"grid-list":"grid-list","text-xs-center":"text-xs-center"}},[n("v-layout",{attrs:{row:"row",wrap:"wrap"}},[n("v-flex",{staticClass:"my-2",attrs:{xs12:"xs12"}},[n("p",{staticClass:"title"},[t._v(t._s(t.title))])]),n("v-flex",{attrs:{xs12:"xs12",md6:"md6"}},[n("app-IllustrationBlock")],1),n("v-flex",{staticClass:"answer-block--background pa-2",attrs:{xs12:"xs12",md6:"md6"}},[n("app-SelectAnswer"),n("app-AnswerMessage"),n("app-NextOrNew")],1)],1)],1)],1)},r=[],a={render:s,staticRenderFns:r};e.a=a}});
//# sourceMappingURL=21.build.js.map