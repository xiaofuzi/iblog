(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{250:function(t,e,n){__NEXT_REGISTER_PAGE("/",function(){return t.exports=n(251),{page:t.exports.default}})},251:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return w});var r=n(3),o=n.n(r),u=n(0),i=n.n(u),a=(n(56),n(14)),c=n(15),f=n(24),s=n(16);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e,n,r,o,u,i){try{var a=t[u](i),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,m(e).apply(this,arguments))}var n,r,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,u["Component"]),n=e,r=[{key:"render",value:function(){return i.a.createElement("div",{className:""},i.a.createElement(a.a,null),i.a.createElement("div",{className:"container markdown-body"},i.a.createElement(f.a,{items:this.props.notesList})),i.a.createElement(c.a,null))}}],p=[{key:"getInitialProps",value:function(){var t,e=(t=o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/notes/notesList");case 2:return e=t.sent,t.abrupt("return",{notesList:e.websites||[]});case 4:case"end":return t.stop()}},t)}),function(){var e=this,n=arguments;return new Promise(function(r,o){var u=t.apply(e,n);function i(t){l(u,r,o,i,a,"next",t)}function a(t){l(u,r,o,i,a,"throw",t)}i(void 0)})});return function(){return e.apply(this,arguments)}}()}],r&&y(n.prototype,r),p&&y(n,p),e}()}},[[250,1,0]]]);