(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{461:function(e,t,o){"use strict";o.r(t);var r=o(341),s=o(356),c=Object(r.defineComponent)({name:"UseClipboard",setup:function(){var e=Object(r.ref)(""),t=Object(s.useClipboard)({source:e}),o=t.copy,c=t.copied;return{source:e,text:t.text,copy:o,copied:c,clear:t.clear}}}),n=o(57),a=Object(n.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("example-block",[o("template",{staticClass:"w-full text-center",slot:"component"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.source,expression:"source"}],staticClass:"px-3 py-2 leading-5 border rounded-sm ml-2",attrs:{type:"text",placeholder:"Type something"},domProps:{value:e.source},on:{input:function(t){t.target.composing||(e.source=t.target.value)}}}),e._v(" "),o("button",{staticClass:"cursor-pointer ml-2 px-4 py-2 border rounded-sm hover:bg-gray-100",on:{click:e.copy}},[e._v("Copy to Clipboard")]),e._v(" "),o("button",{staticClass:"cursor-pointer ml-2 px-4 py-2 border rounded-sm bg-gray-100 hover:bg-white",on:{click:e.clear}},[e._v("Clear Clipboard")])]),e._v(" "),o("template",{slot:"code"},[o("span",[e._v("Copied Value: "+e._s(e.text))])])],2)],1)}),[],!1,null,null,null);t.default=a.exports}}]);