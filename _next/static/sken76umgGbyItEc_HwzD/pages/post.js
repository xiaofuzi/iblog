(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{256:function(t,e,n){__NEXT_REGISTER_PAGE("/post",function(){return t.exports=n(257),{page:t.exports.default}})},257:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return v});var r=n(3),o=n.n(r),u=n(0),a=n.n(u),i=n(14),c=n(15),f=(n(24),n(16));function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e,n,r,o,u,a){try{var i=t[u](a),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,b(e).apply(this,arguments))}var n,r,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,u["Component"]),n=e,r=[{key:"render",value:function(){return a.a.createElement("div",{className:""},a.a.createElement(i.a,null),a.a.createElement("div",{className:"container markdown-body"},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.note.content}})),a.a.createElement(c.a,null))}}],p=[{key:"getInitialProps",value:function(){var t,e=(t=o.a.mark(function t(e){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.query,t.next=3,f.a.get("/notes/getNote",{key:n.id});case 3:return r=t.sent,t.abrupt("return",{note:r});case 5:case"end":return t.stop()}},t)}),function(){var e=this,n=arguments;return new Promise(function(r,o){var u=t.apply(e,n);function a(t){s(u,r,o,a,i,"next",t)}function i(t){s(u,r,o,a,i,"throw",t)}a(void 0)})});return function(t){return e.apply(this,arguments)}}()}],r&&l(n.prototype,r),p&&l(n,p),e}()}},[[256,1,0]]]);