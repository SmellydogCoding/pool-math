webpackJsonp([52],{104:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(187),o=a(188),c=a(1),i=c(n.a,o.a,!1,null,null,null);e.default=i.exports},187:function(t,e,a){"use strict";var n=function(){return a.e(47).then(a.bind(null,119))},o=function(){return a.e(50).then(a.bind(null,126))},c=function(){return a.e(49).then(a.bind(null,106))},i=function(){return a.e(48).then(a.bind(null,112))};e.a={data:function(){return{dialog:!1,width:"",poolVolume:"Pool Volume",desiredChange:"Desired Change",unitVolume:"Unit Volume of Water",changeProvided:"Change Provided by the Chemical",chemicalAmount:"Amount of the Chemical",waterFactor:"Water Factor",chemicalFactor:"Chemical Factor",total:"Total",hintModal:!0}},props:["title","component","cyanuric"],components:{appSaturationIndexTable:n,appChemicalAdjustmentTable:o,appChemicalAdjustmentWorksheet:c,appChemicalAdjustmentWorksheetAlgaecide:i},computed:{data:function(){return this.$store.getters.select},componentToUse:function(){return"app-"+this.component}}}},188:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("v-btn",{staticClass:"px-2",attrs:{color:"orange darken-1",dark:"dark"},nativeOn:{click:function(e){e.stopPropagation(),t.dialog=!t.dialog}}},[t._v("Hint")]),a("v-dialog",{attrs:{"content-class":"hint--dialog-component"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"theme--dark"},[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.title))]),a("v-card-text",{staticClass:"py-0"},[a(t.componentToUse,{tag:"component",attrs:{cyanuric:t.cyanuric,poolVolume:t.poolVolume,desiredChange:t.desiredChange,unitVolume:t.unitVolume,changeProvided:t.changeProvided,chemicalAmount:t.chemicalAmount,waterFactor:t.waterFactor,chemicalFactor:t.chemicalFactor,total:t.total,hintModal:t.hintModal}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){t.dialog=!t.dialog}}},[t._v("Close")])],1)],1)],1)],1)},o=[],c={render:n,staticRenderFns:o};e.a=c}});
//# sourceMappingURL=52.build.js.map