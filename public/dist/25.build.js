webpackJsonp([25],{100:function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,"img[data-v-46bdd84f]{width:80%}",""])},101:function(t,e,n){"use strict";e.a={computed:{src:function(){return this.$store.getters.image.src},alt:function(){return this.$store.getters.image.alt}}}},102:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.src,alt:t.alt}})},a=[],r={render:s,staticRenderFns:a};e.a=r},347:function(t,e,n){"use strict";var s=n(98),a=n(89),r=n(92),o=n(95);e.a={data:function(){return{problem:"s6p2",image:{src:n(348),alt:"illustration for problem 2"},hint:{title:"Hint for Problem 2",type:"textHint",text:"Turnover Rate = Hot Tub Volume / Flow Rate"},next:{text:"Problem 3: Calculate Flow Rate of a Pool",route:"/flow-rate-of-a-pool"},newButton:"New Hot Tub Turnover Rate Problem",answerSet:{type:"turnover",decimals:1}}},components:{appIllustrationBlock:s.a,appNextOrNew:a.a,appAnswerMessage:r.a,appSelectAnswer:o.a},computed:{title:function(){return"You have a "+this.units.volume+" gallon hot tub that has a flow rate of "+this.units.flow+" Gallons Per Minute.  What is the Turnover Rate (in Minutes) of this Hot Tub?"},units:function(){return this.$store.getters.units}},created:function(){var t={problem:this.problem,image:this.image,hint:this.hint,next:this.next,newButton:this.newButton,answerSet:this.answerSet};this.$store.dispatch("init",t)}}},348:function(t,e,n){t.exports=n.p+"83860f19913835a041a23dcacdeaab81.jpg"},349:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-container",{attrs:{"grid-list":"grid-list","text-xs-center":"text-xs-center"}},[n("v-layout",{attrs:{row:"row",wrap:"wrap"}},[n("v-flex",{staticClass:"my-2",attrs:{xs12:"xs12"}},[n("p",{staticClass:"title"},[t._v(t._s(t.title))])]),n("v-flex",{attrs:{xs12:"xs12",md6:"md6"}},[n("app-IllustrationBlock")],1),n("v-flex",{staticClass:"answer-block--background pa-2",attrs:{xs12:"xs12",md6:"md6"}},[n("app-SelectAnswer"),n("app-AnswerMessage"),n("app-NextOrNew")],1)],1)],1)],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},76:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(347),a=n(349),r=n(1),o=r(s.a,a.a,!1,null,null,null);e.default=o.exports},89:function(t,e,n){"use strict";var s=n(90),a=n(91),r=n(1),o=r(s.a,a.a,!1,null,null,null);e.a=o.exports},90:function(t,e,n){"use strict";e.a={methods:{makeNew:function(){this.$store.dispatch("newProblem")}},computed:{data:function(){return this.$store.getters.newOrNext}}}},91:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",[t.data.showCorrect?n("v-btn",{staticClass:"mt-3 mobile--reduce-text-085",attrs:{color:"info",dark:"dark",block:"block"},on:{click:function(e){t.makeNew()}}},[t._v(t._s(t.data.newButton)),n("v-icon",{staticClass:"ml-2"},[t._v("refresh")])],1):t._e(),t.data.showCorrect?n("v-btn",{staticClass:"mt-3 mobile--reduce-text-085",attrs:{color:"success",dark:"dark",block:"block"},on:{click:function(e){t.$router.push(t.data.next.route)}}},[t._v(t._s(t.data.next.text)),n("v-icon",{staticClass:"ml-2"},[t._v("arrow_forward")])],1):t._e()],1)])},a=[],r={render:s,staticRenderFns:a};e.a=r},92:function(t,e,n){"use strict";var s=n(93),a=n(94),r=n(1),o=r(s.a,a.a,!1,null,null,null);e.a=o.exports},93:function(t,e,n){"use strict";e.a={computed:{data:function(){return this.$store.getters.answerMessage}}}},94:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.data.showCorrect?n("v-alert",{staticClass:"title",attrs:{color:"success",icon:"check_circle",value:"true"}},[t._v(t._s(t.data.correctMessage))]):t._e(),t.data.showIncorrect?n("v-alert",{staticClass:"title",attrs:{color:"error",icon:"close",value:"true"}},[t._v(t._s(t.data.incorrectMessage))]):t._e()],1)],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},95:function(t,e,n){"use strict";var s=n(96),a=n(97),r=n(1),o=r(s.a,a.a,!1,null,null,null);e.a=o.exports},96:function(t,e,n){"use strict";var s=function(){return n.e(51).then(n.bind(null,103))},a=function(){return n.e(52).then(n.bind(null,104))};e.a={data:function(){return{}},methods:{sendAnswer:function(){this.$store.dispatch("answerQuestion")},selection:function(t){this.$store.dispatch("selection",t)}},components:{appTextHint:s,appComponentHint:a},computed:{data:function(){return this.$store.getters.select},hint:function(){return this.$store.getters.hint},componentToUse:function(){return"app-"+this.hint.type}}}},97:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-select",{attrs:{items:t.data.answers,label:"Select Answer",disabled:t.data.showCorrect},on:{change:t.selection},model:{value:t.data.answer,callback:function(e){t.$set(t.data,"answer",e)},expression:"data.answer"}}),n("v-btn",{staticClass:"color--white mb-2",attrs:{color:"info",light:"light",disabled:null===t.data.answer||t.data.showCorrect},on:{click:function(e){t.sendAnswer()}}},[t._v("Answer")]),n("transition",{attrs:{name:"fade"}},[t.hint.showHintButton?n(t.componentToUse,{tag:"component",attrs:{component:t.hint.component,title:t.hint.title,text:t.hint.text,cyanuric:t.hint.cyanuric}}):t._e()],1)],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},98:function(t,e,n){"use strict";function s(t){n(99)}var a=n(101),r=n(102),o=n(1),i=s,c=o(a.a,r.a,!1,i,"data-v-46bdd84f",null);e.a=c.exports},99:function(t,e,n){var s=n(100);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(3)("65d6252f",s,!0)}});
//# sourceMappingURL=25.build.js.map