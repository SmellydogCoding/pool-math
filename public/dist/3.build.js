webpackJsonp([3,49],{105:function(t,e,a){t.exports=a.p+"3cbbcddfa51148e6d3ba06701a0dea37.pdf"},106:function(t,e,a){"use strict";function s(t){a(107)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(109),n=a(110),c=a(1),o=s,i=c(r.a,n.a,!1,o,"data-v-3ca2ea7c",null);e.default=i.exports},107:function(t,e,a){var s=a(108);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(3)("9a734104",s,!0)},108:function(t,e,a){e=t.exports=a(0)(void 0),e.push([t.i,".subheading[data-v-3ca2ea7c]{font-weight:600}td[data-v-3ca2ea7c]{padding:.25rem 1rem;height:3.125rem}.hintModal td[data-v-3ca2ea7c]{color:#fff}.border--bottom[data-v-3ca2ea7c]{border-bottom:1px solid #ccc!important}.border--left[data-v-3ca2ea7c]{border-left:1px solid #ccc}.border--right[data-v-3ca2ea7c]{border-right:1px solid #ccc}td[data-v-3ca2ea7c]:last-child{min-width:2rem}.hide--pool-volume[data-v-3ca2ea7c]{color:#0d47a1!important}.hide--desired-change[data-v-3ca2ea7c]{color:#1b5e20!important}.hide--chemical-cells[data-v-3ca2ea7c]{color:#b71c1c!important}.hide--water-factor[data-v-3ca2ea7c]{color:#4a148c!important}.hide--chemical-factor[data-v-3ca2ea7c]{color:#e65100!important}.hide--math-operator[data-v-3ca2ea7c]{color:#616161!important}.hide--total[data-v-3ca2ea7c]{color:#fff!important}@media screen and (max-height:700px){.slim td[data-v-3ca2ea7c]{height:2rem}}@media screen and (max-width:600px){tbody tr td[data-v-3ca2ea7c]{width:15%;padding:.5rem}tbody tr td[data-v-3ca2ea7c]:nth-child(2){padding:0;width:5%}tbody tr td[data-v-3ca2ea7c]:nth-child(4){padding:0;width:0}tbody tr td[data-v-3ca2ea7c]:nth-child(6){padding:0;width:5%}}",""])},109:function(t,e,a){"use strict";var s=a(105),r=a.n(s);e.a={data:function(){return{cW:r.a}},props:["poolVolume","desiredChange","unitVolume","changeProvided","chemicalAmount","chemicalType","waterFactor","chemicalFactor","total","conversion","problemUse","hintModal"],computed:{attempts:function(){return this.$store.getters.attempts},correctState:function(){return this.$store.getters.answerMessage.showCorrect},showUnits:function(){return this.hintModal?{chemUnits:"",waterUnits:""}:{chemUnits:"ppm",waterUnits:"gallons"}}}}},110:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"ma-a text-xs-center",class:{"white--text":t.problemUse||t.hintModal}},[a("tbody",{staticClass:"black"},[a("tr",[a("td"),a("td",{staticClass:"border--right"}),a("td",{staticClass:"blue darken-4",class:{"hide--pool-volume":t.problemUse&&t.attempts<2&&!t.correctState}},[t._v(t._s(t.poolVolume)+" "+t._s(t.showUnits.waterUnits))]),a("td",{staticClass:"border--left border--right"}),a("td",{staticClass:"green darken-4",class:{"hide--desired-change":t.problemUse&&t.attempts<2&&!t.correctState}},[t._v(t._s(t.desiredChange)+" "+t._s(t.showUnits.chemUnits))]),a("td",{staticClass:"border--left"}),a("td")]),t._m(0,!1,!1),a("tr",[a("td"),a("td",{staticClass:"border--right"}),a("td",{staticClass:"red darken-4",class:{"hide--chemical-cells":t.problemUse&&t.attempts<2&&!t.correctState}},[t._v(t._s(t.unitVolume)+" "+t._s(t.showUnits.waterUnits))]),a("td",{staticClass:"border--left border--right"}),a("td",{staticClass:"red darken-4",class:{"hide--chemical-cells":t.problemUse&&t.attempts<2&&!t.correctState}},[t._v(t._s(t.changeProvided)+" "+t._s(t.showUnits.chemUnits))]),a("td",{staticClass:"border--left"}),a("td")]),t._m(1,!1,!1),a("tr",[a("td",{staticClass:"red darken-4",class:{"hide--chemical-cells":t.problemUse&&t.attempts<2&&!t.correctState}},[t._v(t._s(t.chemicalAmount)+" "+t._s(t.chemicalType))]),a("td",{staticClass:"grey darken-2"},[t._v("X")]),a("td",{staticClass:"purple darken-4",class:{"hide--water-factor":t.problemUse&&t.attempts<3&&!t.correctState}},[t._v(t._s(t.waterFactor))]),a("td",{staticClass:"grey darken-2"},[t._v("X")]),a("td",{staticClass:"orange darken-4",class:{"hide--chemical-factor":t.problemUse&&t.attempts<3&&!t.correctState}},[t._v(t._s(t.chemicalFactor))]),a("td",{staticClass:"grey darken-2"},[t._v("=")]),a("td",{staticClass:"white black--text body-2",class:{"hide--total":t.problemUse&&!t.correctState}},[t._v(t._s(t.total)+" "+t._s(t.chemicalType))])])])]),t.conversion?t._e():a("p",{staticClass:"text-xs-center mt-2"},[a("a",{staticClass:"blue--text darken-2",attrs:{href:t.cW,target:"new"}},[t._v("Download the Chemical Adjustment Worksheet")])]),t.conversion&&t.correctState?a("p",{staticClass:"text-xs-center mt-2 mb-0 subheading"},[t._v(t._s(t.conversion))]):t._e()])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"slim"},[a("td"),a("td",{staticClass:"border--right"}),a("td",{staticClass:"grey darken-2"},[t._v("÷")]),a("td",{staticClass:"border--left border--right"}),a("td",{staticClass:"grey darken-2"},[t._v("÷")]),a("td",{staticClass:"border--left"}),a("td")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"slim"},[a("td",{staticClass:"border--bottom"}),a("td",{staticClass:"border--right border--bottom"}),a("td",{staticClass:"grey darken-2"},[t._v("=")]),a("td",{staticClass:"border--left border--right border--bottom"}),a("td",{staticClass:"grey darken-2"},[t._v("=")]),a("td",{staticClass:"border--left border--bottom"}),a("td",{staticClass:"border--bottom"})])}],n={render:s,staticRenderFns:r};e.a=n},111:function(t,e,a){t.exports=a.p+"c0a97585418a0e69d8a2bed503a543e1.pdf"},332:function(t,e,a){var s=a(333);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(3)("752a1eb2",s,!0)},333:function(t,e,a){e=t.exports=a(0)(void 0),e.push([t.i,".rounded[data-v-77955164]{border-radius:10px}p[data-v-77955164]{font-weight:500}",""])},334:function(t,e,a){"use strict";var s=a(106),r=a(111),n=a.n(r),c=a(89),o=a(92),i=a(95);e.a={data:function(){return{problem:"s5p2",hint:{title:"Hint for Problem 2",type:"componentHint",text:"",component:"ChemicalAdjustmentWorksheet"},next:{text:"Intro to Section 6",route:"/intro-to-section-6"},newButton:"New Breakpoint Chemical Adjustment Problem",answerSet:{type:"Chemical Adjustment",decimals:2},problemUse:!0,cT:n.a}},components:{appChemicalAdjustmentWorksheet:s.default,appNextOrNew:c.a,appAnswerMessage:o.a,appSelectAnswer:i.a},computed:{title:function(){return"You have a "+this.units.poolVolume+" gallon pool.  The current free chlorine in your pool is "+this.units.freeCl+" ppm.  The total chlorine is "+this.units.totalCl+" ppm.  How many "+this.units.conversionType+" of "+this.units.chemicalName+" are needed to reach breakpoint?"},correctState:function(){return this.$store.getters.answerMessage.showCorrect},attempts:function(){return this.$store.getters.attempts},units:function(){return this.$store.getters.units}},created:function(){var t={problem:this.problem,hint:this.hint,next:this.next,newButton:this.newButton,answerSet:this.answerSet};this.$store.dispatch("init",t)}}},335:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-container",{attrs:{"grid-list":"grid-list","text-xs-center":"text-xs-center"}},[a("v-layout",{attrs:{row:"row",wrap:"wrap"}},[a("v-flex",{staticClass:"my-2",attrs:{xs12:"xs12"}},[a("p",{staticClass:"title"},[t._v(t._s(t.title))])]),a("v-flex",{staticClass:"CA-container",attrs:{xs12:"xs12",md6:"md6"}},[a("appChemicalAdjustmentWorksheet",{attrs:{poolVolume:t.units.poolVolume,unitVolume:t.units.unitVolume,desiredChange:t.units.desiredChange,chemicalAmount:t.units.chemicalAmount,chemicalType:t.units.chemicalUnit,changeProvided:t.units.changeProvided,waterFactor:t.units.waterFactor,chemicalFactor:t.units.chemicalFactor,total:t.units.total,conversion:t.units.conversion,problemUse:t.problemUse}}),a("p",{staticClass:"mt-2 py-1 px-2 white d-inline-block rounded"},[a("a",{staticClass:"indigo--text darken-4",attrs:{href:t.cT,target:"new"}},[t._v("Download the Chemical Adjustment Table")])]),t.attempts>=1||t.correctState?a("p",{staticClass:"mb-0 white"},[t._v(t._s(t.units.totalCl)+" ppm total chlorine - "+t._s(t.units.freeCl)+" ppm free chlorine = "+t._s(t.units.totalCl-t.units.freeCl)+" ppm combined chlorine")]):t._e(),t.attempts>=1||t.correctState?a("p",{staticClass:"my-0 white"},[t._v(t._s(t.units.totalCl-t.units.freeCl)+" ppm combined chlorine * 10 = "+t._s(t.units.breakpoint)+" ppm breakpoint value")]):t._e(),t.attempts>=2||t.correctState?a("p",{staticClass:"my-0 white"},[t._v(t._s(t.units.breakpoint)+" ppm breakpoint value - "+t._s(t.units.freeCl)+" ppm free chlorine = "+t._s(t.units.desiredChange)+" ppm desired change")]):t._e()],1),a("v-flex",{staticClass:"answer-block--background pa-2",attrs:{xs12:"xs12",md6:"md6"}},[a("app-SelectAnswer"),a("app-AnswerMessage"),a("app-NextOrNew")],1)],1)],1)],1)},r=[],n={render:s,staticRenderFns:r};e.a=n},73:function(t,e,a){"use strict";function s(t){a(332)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(334),n=a(335),c=a(1),o=s,i=c(r.a,n.a,!1,o,"data-v-77955164",null);e.default=i.exports},89:function(t,e,a){"use strict";var s=a(90),r=a(91),n=a(1),c=n(s.a,r.a,!1,null,null,null);e.a=c.exports},90:function(t,e,a){"use strict";e.a={methods:{makeNew:function(){this.$store.dispatch("newProblem")}},computed:{data:function(){return this.$store.getters.newOrNext}}}},91:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",[t.data.showCorrect?a("v-btn",{staticClass:"mt-3 mobile--reduce-text-085",attrs:{color:"info",dark:"dark",block:"block"},on:{click:function(e){t.makeNew()}}},[t._v(t._s(t.data.newButton)),a("v-icon",{staticClass:"ml-2"},[t._v("refresh")])],1):t._e(),t.data.showCorrect?a("v-btn",{staticClass:"mt-3 mobile--reduce-text-085",attrs:{color:"success",dark:"dark",block:"block"},on:{click:function(e){t.$router.push(t.data.next.route)}}},[t._v(t._s(t.data.next.text)),a("v-icon",{staticClass:"ml-2"},[t._v("arrow_forward")])],1):t._e()],1)])},r=[],n={render:s,staticRenderFns:r};e.a=n},92:function(t,e,a){"use strict";var s=a(93),r=a(94),n=a(1),c=n(s.a,r.a,!1,null,null,null);e.a=c.exports},93:function(t,e,a){"use strict";e.a={computed:{data:function(){return this.$store.getters.answerMessage}}}},94:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.data.showCorrect?a("v-alert",{staticClass:"title",attrs:{color:"success",icon:"check_circle",value:"true"}},[t._v(t._s(t.data.correctMessage))]):t._e(),t.data.showIncorrect?a("v-alert",{staticClass:"title",attrs:{color:"error",icon:"close",value:"true"}},[t._v(t._s(t.data.incorrectMessage))]):t._e()],1)],1)},r=[],n={render:s,staticRenderFns:r};e.a=n},95:function(t,e,a){"use strict";var s=a(96),r=a(97),n=a(1),c=n(s.a,r.a,!1,null,null,null);e.a=c.exports},96:function(t,e,a){"use strict";var s=function(){return a.e(51).then(a.bind(null,103))},r=function(){return a.e(52).then(a.bind(null,104))};e.a={data:function(){return{}},methods:{sendAnswer:function(){this.$store.dispatch("answerQuestion")},selection:function(t){this.$store.dispatch("selection",t)}},components:{appTextHint:s,appComponentHint:r},computed:{data:function(){return this.$store.getters.select},hint:function(){return this.$store.getters.hint},componentToUse:function(){return"app-"+this.hint.type}}}},97:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-select",{attrs:{items:t.data.answers,label:"Select Answer",disabled:t.data.showCorrect},on:{change:t.selection},model:{value:t.data.answer,callback:function(e){t.$set(t.data,"answer",e)},expression:"data.answer"}}),a("v-btn",{staticClass:"color--white mb-2",attrs:{color:"info",light:"light",disabled:null===t.data.answer||t.data.showCorrect},on:{click:function(e){t.sendAnswer()}}},[t._v("Answer")]),a("transition",{attrs:{name:"fade"}},[t.hint.showHintButton?a(t.componentToUse,{tag:"component",attrs:{component:t.hint.component,title:t.hint.title,text:t.hint.text,cyanuric:t.hint.cyanuric}}):t._e()],1)],1)},r=[],n={render:s,staticRenderFns:r};e.a=n}});
//# sourceMappingURL=3.build.js.map