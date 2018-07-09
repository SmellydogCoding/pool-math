webpackJsonp([49],{104:function(t,e,a){t.exports=a.p+"3cbbcddfa51148e6d3ba06701a0dea37.pdf"},105:function(t,e,a){"use strict";function s(t){a(106)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(108),c=a(109),d=a(1),o=s,i=d(r.a,c.a,!1,o,"data-v-3ca2ea7c",null);e.default=i.exports},106:function(t,e,a){var s=a(107);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(3)("9a734104",s,!0)},107:function(t,e,a){e=t.exports=a(0)(void 0),e.push([t.i,".subheading[data-v-3ca2ea7c]{font-weight:600}td[data-v-3ca2ea7c]{padding:.25rem 1rem;height:3.125rem}.hintModal td[data-v-3ca2ea7c]{color:#fff}.border--bottom[data-v-3ca2ea7c]{border-bottom:1px solid #ccc!important}.border--left[data-v-3ca2ea7c]{border-left:1px solid #ccc}.border--right[data-v-3ca2ea7c]{border-right:1px solid #ccc}td[data-v-3ca2ea7c]:last-child{min-width:2rem}.hide--pool-volume[data-v-3ca2ea7c]{color:#0d47a1!important}.hide--desired-change[data-v-3ca2ea7c]{color:#1b5e20!important}.hide--chemical-cells[data-v-3ca2ea7c]{color:#b71c1c!important}.hide--water-factor[data-v-3ca2ea7c]{color:#4a148c!important}.hide--chemical-factor[data-v-3ca2ea7c]{color:#e65100!important}.hide--math-operator[data-v-3ca2ea7c]{color:#616161!important}.hide--total[data-v-3ca2ea7c]{color:#fff!important}@media screen and (max-height:700px){.slim td[data-v-3ca2ea7c]{height:2rem}}@media screen and (max-width:600px){tbody tr td[data-v-3ca2ea7c]{width:15%;padding:.5rem}tbody tr td[data-v-3ca2ea7c]:nth-child(2){padding:0;width:5%}tbody tr td[data-v-3ca2ea7c]:nth-child(4){padding:0;width:0}tbody tr td[data-v-3ca2ea7c]:nth-child(6){padding:0;width:5%}}",""])},108:function(t,e,a){"use strict";var s=a(104),r=a.n(s);e.a={data:function(){return{cW:r.a}},props:["poolVolume","desiredChange","unitVolume","changeProvided","chemicalAmount","chemicalType","waterFactor","chemicalFactor","total","conversion","problemUse","hintModal"],computed:{attempts:function(){return this.$store.getters.attempts},correctState:function(){return this.$store.getters.answerMessage.showCorrect},showUnits:function(){return this.hintModal?{chemUnits:"",waterUnits:""}:{chemUnits:"ppm",waterUnits:"gallons"}}}}},109:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"ma-a text-xs-center",class:{"white--text":t.problemUse||t.hintModal}},[a("tbody",{staticClass:"black"},[a("tr",[a("td"),a("td",{staticClass:"border--right"}),a("td",{staticClass:"blue darken-4",class:{"hide--pool-volume":t.problemUse&&t.attempts<2&&!t.correctState}},[t._v(t._s(t.poolVolume)+" "+t._s(t.showUnits.waterUnits))]),a("td",{staticClass:"border--left border--right"}),a("td",{staticClass:"green darken-4",class:{"hide--desired-change":t.problemUse&&t.attempts<2&&!t.correctState}},[t._v(t._s(t.desiredChange)+" "+t._s(t.showUnits.chemUnits))]),a("td",{staticClass:"border--left"}),a("td")]),t._m(0,!1,!1),a("tr",[a("td"),a("td",{staticClass:"border--right"}),a("td",{staticClass:"red darken-4",class:{"hide--chemical-cells":t.problemUse&&t.attempts<2&&!t.correctState}},[t._v(t._s(t.unitVolume)+" "+t._s(t.showUnits.waterUnits))]),a("td",{staticClass:"border--left border--right"}),a("td",{staticClass:"red darken-4",class:{"hide--chemical-cells":t.problemUse&&t.attempts<2&&!t.correctState}},[t._v(t._s(t.changeProvided)+" "+t._s(t.showUnits.chemUnits))]),a("td",{staticClass:"border--left"}),a("td")]),t._m(1,!1,!1),a("tr",[a("td",{staticClass:"red darken-4",class:{"hide--chemical-cells":t.problemUse&&t.attempts<2&&!t.correctState}},[t._v(t._s(t.chemicalAmount)+" "+t._s(t.chemicalType))]),a("td",{staticClass:"grey darken-2"},[t._v("X")]),a("td",{staticClass:"purple darken-4",class:{"hide--water-factor":t.problemUse&&t.attempts<3&&!t.correctState}},[t._v(t._s(t.waterFactor))]),a("td",{staticClass:"grey darken-2"},[t._v("X")]),a("td",{staticClass:"orange darken-4",class:{"hide--chemical-factor":t.problemUse&&t.attempts<3&&!t.correctState}},[t._v(t._s(t.chemicalFactor))]),a("td",{staticClass:"grey darken-2"},[t._v("=")]),a("td",{staticClass:"white black--text body-2",class:{"hide--total":t.problemUse&&!t.correctState}},[t._v(t._s(t.total)+" "+t._s(t.chemicalType))])])])]),t.conversion?t._e():a("p",{staticClass:"text-xs-center mt-2"},[a("a",{staticClass:"blue--text darken-2",attrs:{href:t.cW,target:"new"}},[t._v("Download the Chemical Adjustment Worksheet")])]),t.conversion&&t.correctState?a("p",{staticClass:"text-xs-center mt-2 mb-0 subheading"},[t._v(t._s(t.conversion))]):t._e()])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"slim"},[a("td"),a("td",{staticClass:"border--right"}),a("td",{staticClass:"grey darken-2"},[t._v("÷")]),a("td",{staticClass:"border--left border--right"}),a("td",{staticClass:"grey darken-2"},[t._v("÷")]),a("td",{staticClass:"border--left"}),a("td")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"slim"},[a("td",{staticClass:"border--bottom"}),a("td",{staticClass:"border--right border--bottom"}),a("td",{staticClass:"grey darken-2"},[t._v("=")]),a("td",{staticClass:"border--left border--right border--bottom"}),a("td",{staticClass:"grey darken-2"},[t._v("=")]),a("td",{staticClass:"border--left border--bottom"}),a("td",{staticClass:"border--bottom"})])}],c={render:s,staticRenderFns:r};e.a=c}});
//# sourceMappingURL=49.build.js.map