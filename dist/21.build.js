webpackJsonp([21],{100:function(t,e,r){e=t.exports=r(0)(void 0),e.push([t.i,"img[data-v-46bdd84f]{width:80%}",""])},101:function(t,e,r){"use strict";e.a={computed:{src:function(){return this.$store.getters.image.src},alt:function(){return this.$store.getters.image.alt}}}},102:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.src,alt:t.alt}})},s=[],a={render:n,staticRenderFns:s};e.a=a},117:function(t,e,r){t.exports=r.p+"ed24c33bb81619647575be20a268f85f.jpg"},376:function(t,e,r){"use strict";var n=r(98),s=r(89),a=r(92),i=r(95);e.a={data:function(){return{problem:"s7p2",image:{src:r(117),alt:"illustration for problem 2"},hint:{title:"Hint for Problem 2",type:"textHint",text:"Filter Area Required = Flow Rate / Filter Media Rate<br>Grid Filtering Area = Length x Width x 2<br>Total Grids Needed = Filter Area Required / Grid Filtering Area"},next:{text:"Problem 3: Maximum Flow Provided by a Diatomaceous Earth Filter",route:"/diatomaceous-earth-max-flow-provided"},newButton:"New Diatomaceous Earth Grids Required Problem",answerSet:{type:"filter grid",decimals:0}}},components:{appIllustrationBlock:n.a,appNextOrNew:s.a,appAnswerMessage:a.a,appSelectAnswer:i.a},computed:{title:function(){return"You have a diatomaceous earth filter array that consists of grids that are "+this.units.length+" ft long and "+this.units.width+" ft wide.  Each grid filters from both sides.  The flow rate is "+this.units.flow+"gpm and the filter media rate is "+this.units.fmr+"gpm/ft².  How many grids are required for this filter array?"},units:function(){return this.$store.getters.units}},created:function(){var t={problem:this.problem,image:this.image,hint:this.hint,next:this.next,newButton:this.newButton,answerSet:this.answerSet};this.$store.dispatch("init",t)}}},377:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",[r("v-container",{attrs:{"grid-list":"grid-list","text-xs-center":"text-xs-center"}},[r("v-layout",{attrs:{row:"row",wrap:"wrap"}},[r("v-flex",{staticClass:"my-2",attrs:{xs12:"xs12"}},[r("p",{staticClass:"title"},[t._v(t._s(t.title))])]),r("v-flex",{attrs:{xs12:"xs12",md6:"md6"}},[r("app-IllustrationBlock")],1),r("v-flex",{staticClass:"answer-block--background pa-2",attrs:{xs12:"xs12",md6:"md6"}},[r("app-SelectAnswer"),r("app-AnswerMessage"),r("app-NextOrNew")],1)],1)],1)],1)},s=[],a={render:n,staticRenderFns:s};e.a=a},81:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(376),s=r(377),a=r(1),i=a(n.a,s.a,!1,null,null,null);e.default=i.exports},89:function(t,e,r){"use strict";var n=r(90),s=r(91),a=r(1),i=a(n.a,s.a,!1,null,null,null);e.a=i.exports},90:function(t,e,r){"use strict";e.a={methods:{makeNew:function(){this.$store.dispatch("newProblem")}},computed:{data:function(){return this.$store.getters.newOrNext}}}},91:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade"}},[r("div",[t.data.showCorrect?r("v-btn",{staticClass:"mt-3 mobile--reduce-text-085",attrs:{color:"info",dark:"dark",block:"block"},on:{click:function(e){t.makeNew()}}},[t._v(t._s(t.data.newButton)),r("v-icon",{staticClass:"ml-2"},[t._v("refresh")])],1):t._e(),t.data.showCorrect?r("v-btn",{staticClass:"mt-3 mobile--reduce-text-085",attrs:{color:"success",dark:"dark",block:"block"},on:{click:function(e){t.$router.push(t.data.next.route)}}},[t._v(t._s(t.data.next.text)),r("v-icon",{staticClass:"ml-2"},[t._v("arrow_forward")])],1):t._e()],1)])},s=[],a={render:n,staticRenderFns:s};e.a=a},92:function(t,e,r){"use strict";var n=r(93),s=r(94),a=r(1),i=a(n.a,s.a,!1,null,null,null);e.a=i.exports},93:function(t,e,r){"use strict";e.a={computed:{data:function(){return this.$store.getters.answerMessage}}}},94:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-4"},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[t.data.showCorrect?r("v-alert",{staticClass:"title",attrs:{color:"success",icon:"check_circle",value:"true"}},[t._v(t._s(t.data.correctMessage))]):t._e(),t.data.showIncorrect?r("v-alert",{staticClass:"title",attrs:{color:"error",icon:"close",value:"true"}},[t._v(t._s(t.data.incorrectMessage))]):t._e()],1)],1)},s=[],a={render:n,staticRenderFns:s};e.a=a},95:function(t,e,r){"use strict";var n=r(96),s=r(97),a=r(1),i=a(n.a,s.a,!1,null,null,null);e.a=i.exports},96:function(t,e,r){"use strict";var n=function(){return r.e(51).then(r.bind(null,103))},s=function(){return r.e(52).then(r.bind(null,104))};e.a={data:function(){return{}},methods:{sendAnswer:function(){this.$store.dispatch("answerQuestion")},selection:function(t){this.$store.dispatch("selection",t)}},components:{appTextHint:n,appComponentHint:s},computed:{data:function(){return this.$store.getters.select},hint:function(){return this.$store.getters.hint},componentToUse:function(){return"app-"+this.hint.type}}}},97:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-select",{attrs:{items:t.data.answers,label:"Select Answer",disabled:t.data.showCorrect},on:{change:t.selection},model:{value:t.data.answer,callback:function(e){t.$set(t.data,"answer",e)},expression:"data.answer"}}),r("v-btn",{staticClass:"color--white mb-2",attrs:{color:"info",light:"light",disabled:null===t.data.answer||t.data.showCorrect},on:{click:function(e){t.sendAnswer()}}},[t._v("Answer")]),r("transition",{attrs:{name:"fade"}},[t.hint.showHintButton?r(t.componentToUse,{tag:"component",attrs:{component:t.hint.component,title:t.hint.title,text:t.hint.text,cyanuric:t.hint.cyanuric}}):t._e()],1)],1)},s=[],a={render:n,staticRenderFns:s};e.a=a},98:function(t,e,r){"use strict";function n(t){r(99)}var s=r(101),a=r(102),i=r(1),o=n,c=i(s.a,a.a,!1,o,"data-v-46bdd84f",null);e.a=c.exports},99:function(t,e,r){var n=r(100);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(3)("65d6252f",n,!0)}});
//# sourceMappingURL=21.build.js.map