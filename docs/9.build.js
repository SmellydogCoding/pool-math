webpackJsonp([9],{128:function(t,e,n){"use strict";function s(t){n(129)}var a=n(131),r=n(132),i=n(1),o=s,c=i(a.a,r.a,!1,o,"data-v-4d491590",null);e.a=c.exports},129:function(t,e,n){var s=n(130);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(3)("2afaeba1",s,!0)},130:function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,"table[data-v-4d491590]{background-color:#424242;color:#fff}thead[data-v-4d491590]{border-bottom:1px solid #333}thead tr th[data-v-4d491590]{padding:.25rem}tbody tr td[data-v-4d491590]:first-child{text-align:left}@media screen and (max-width:960px){table[data-v-4d491590]{margin-bottom:.5rem}}",""])},131:function(t,e,n){"use strict";e.a={computed:{units:function(){return this.$store.getters.units},attempts:function(){return this.$store.getters.attempts},correct:function(){return this.$store.getters.correct},correctState:function(){return this.$store.getters.answerMessage.showCorrect}}}},132:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[t._m(0,!1,!1),n("tbody",[n("tr",[n("td",[t._v("pH")]),n("td",[t._v(t._s(t.units.pH))]),t.attempts>=2||t.correctState?n("td",[t._v(t._s(t.units.pH))]):t._e()]),n("tr",[n("td",[t._v("Temperature")]),n("td",[t._v(t._s(t.units.temperature))]),t.attempts>=2||t.correctState?n("td",[t._v(t._s(t.units.temperaturef))]):t._e()]),n("tr",[n("td",[t._v("Calcium Hardness")]),n("td",[t._v(t._s(t.units.calcium))]),t.attempts>=2||t.correctState?n("td",[t._v(t._s(t.units.calciumf))]):t._e()]),n("tr",[n("td",[t._v("Total Alkalinity")]),n("td",[t._v(t._s(t.units.alkalinity))]),t.attempts>=2||t.correctState?n("td",[t._v(t._s(t.units.alkalinityf))]):t._e()]),n("tr",[n("td",[t._v("Sub-Total ")]),n("td"),t.attempts>=3||t.correctState?n("td",[t._v(t._s(t.units.sub))]):t._e()]),n("tr",[n("td",[t._v("Total Dissolved Solids")]),n("td",[t._v(t._s(t.units.TDS))]),t.attempts>=2||t.correctState?n("td",[t._v(t._s(t.units.TDSf))]):t._e()]),n("tr",[n("td",[t._v("Saturation Index")]),n("td"),t.correctState?n("td",[t._v(t._s(t.correct))]):t._e()])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Item")]),n("th",[t._v("Value")]),n("th",[t._v("Factor")])])])}],r={render:s,staticRenderFns:a};e.a=r},236:function(t,e,n){var s=n(237);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(3)("9431fdbc",s,!0)},237:function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,"@media screen and (min-width:960px){.SI-container[data-v-cacd956a]{padding-right:.5rem}}",""])},238:function(t,e,n){"use strict";var s=n(128),a=n(88),r=n(91),i=n(94);e.a={data:function(){return{problem:"s3p2",hint:{title:"Hint for Problem 2",type:"componentHint",text:"",component:"SaturationIndexTable",cyanuric:!0},next:{text:"Intro to Section 4",route:"/intro-to-section-4"},newButton:"New Saturation Index Problem",answerSet:{type:"SI",decimals:1}}},components:{appSaturationIndexBlock:s.a,appNextOrNew:a.a,appAnswerMessage:r.a,appSelectAnswer:i.a},computed:{title:function(){return"The chemistry readings for your pool are:  pH: "+this.units.pH+", Temperature: "+this.units.temperature+", Calcium Hardness: "+this.units.calcium+", Total Alkalinity: "+this.units.alkalinity+", Cyanuric Acid: "+this.units.cyanuric+", Total Dissolved Solids: "+this.units.TDS+".  What is the Saturation Index of this pool?"},units:function(){return this.$store.getters.units}},created:function(){var t={problem:this.problem,hint:this.hint,next:this.next,newButton:this.newButton,answerSet:this.answerSet};this.$store.dispatch("init",t)}}},239:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-container",{attrs:{"grid-list":"grid-list","text-xs-center":"text-xs-center"}},[n("v-layout",{attrs:{row:"row",wrap:"wrap"}},[n("v-flex",{staticClass:"my-2",attrs:{xs12:"xs12"}},[n("p",{staticClass:"title"},[t._v(t._s(t.title))])]),n("v-flex",{staticClass:"SI-container",attrs:{xs12:"xs12",md6:"md6"}},[n("app-SaturationIndexBlock")],1),n("v-flex",{staticClass:"answer-block--background pa-2",attrs:{xs12:"xs12",md6:"md6"}},[n("app-SelectAnswer"),n("app-AnswerMessage"),n("app-NextOrNew")],1)],1)],1)],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},60:function(t,e,n){"use strict";function s(t){n(236)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(238),r=n(239),i=n(1),o=s,c=i(a.a,r.a,!1,o,"data-v-cacd956a",null);e.default=c.exports},88:function(t,e,n){"use strict";var s=n(89),a=n(90),r=n(1),i=r(s.a,a.a,!1,null,null,null);e.a=i.exports},89:function(t,e,n){"use strict";e.a={methods:{makeNew:function(){this.$store.dispatch("newProblem")}},computed:{data:function(){return this.$store.getters.newOrNext}}}},90:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",[t.data.showCorrect?n("v-btn",{staticClass:"mt-3 mobile--reduce-text-085",attrs:{color:"info",dark:"dark",block:"block"},on:{click:function(e){t.makeNew()}}},[t._v(t._s(t.data.newButton)),n("v-icon",{staticClass:"ml-2"},[t._v("refresh")])],1):t._e(),t.data.showCorrect?n("v-btn",{staticClass:"mt-3 mobile--reduce-text-085",attrs:{color:"success",dark:"dark",block:"block"},on:{click:function(e){t.$router.push(t.data.next.route)}}},[t._v(t._s(t.data.next.text)),n("v-icon",{staticClass:"ml-2"},[t._v("arrow_forward")])],1):t._e()],1)])},a=[],r={render:s,staticRenderFns:a};e.a=r},91:function(t,e,n){"use strict";var s=n(92),a=n(93),r=n(1),i=r(s.a,a.a,!1,null,null,null);e.a=i.exports},92:function(t,e,n){"use strict";e.a={computed:{data:function(){return this.$store.getters.answerMessage}}}},93:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-4"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.data.showCorrect?n("v-alert",{staticClass:"title",attrs:{color:"success",icon:"check_circle",value:"true"}},[t._v(t._s(t.data.correctMessage))]):t._e(),t.data.showIncorrect?n("v-alert",{staticClass:"title",attrs:{color:"error",icon:"close",value:"true"}},[t._v(t._s(t.data.incorrectMessage))]):t._e()],1)],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},94:function(t,e,n){"use strict";var s=n(95),a=n(96),r=n(1),i=r(s.a,a.a,!1,null,null,null);e.a=i.exports},95:function(t,e,n){"use strict";var s=function(){return n.e(51).then(n.bind(null,102))},a=function(){return n.e(52).then(n.bind(null,103))};e.a={data:function(){return{}},methods:{sendAnswer:function(){this.$store.dispatch("answerQuestion")},selection:function(t){this.$store.dispatch("selection",t)}},components:{appTextHint:s,appComponentHint:a},computed:{data:function(){return this.$store.getters.select},hint:function(){return this.$store.getters.hint},componentToUse:function(){return"app-"+this.hint.type}}}},96:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-select",{attrs:{items:t.data.answers,label:"Select Answer",disabled:t.data.showCorrect},on:{change:t.selection},model:{value:t.data.answer,callback:function(e){t.$set(t.data,"answer",e)},expression:"data.answer"}}),n("v-btn",{staticClass:"color--white mb-2",attrs:{color:"info",light:"light",disabled:null===t.data.answer||t.data.showCorrect},on:{click:function(e){t.sendAnswer()}}},[t._v("Answer")]),n("transition",{attrs:{name:"fade"}},[t.hint.showHintButton?n(t.componentToUse,{tag:"component",attrs:{component:t.hint.component,title:t.hint.title,text:t.hint.text,cyanuric:t.hint.cyanuric}}):t._e()],1)],1)},a=[],r={render:s,staticRenderFns:a};e.a=r}});
//# sourceMappingURL=9.build.js.map