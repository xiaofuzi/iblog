(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{217:function(t,e,n){__NEXT_REGISTER_PAGE("/books",function(){return t.exports=n(218),{page:t.exports.default}})},218:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return h});var r=n(3),o=n.n(r),u=n(0),a=n.n(u),i=(n(56),n(14)),c=n(15),f=n(24),s=n(16);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e,n,r,o,u,a){try{var i=t[u](a),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,m(e).apply(this,arguments))}var n,r,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,u["Component"]),n=e,r=[{key:"render",value:function(){return a.a.createElement("div",{className:""},a.a.createElement(i.a,null),a.a.createElement("div",{className:"container markdown-body"},a.a.createElement("h2",null,"读书笔记:"),a.a.createElement(f.a,{items:this.props.notesList})),a.a.createElement(c.a,null))}}],l=[{key:"getInitialProps",value:function(){var t,e=(t=o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/notes/notesList");case 2:return e=t.sent,t.abrupt("return",{notesList:e.books});case 4:case"end":return t.stop()}},t)}),function(){var e=this,n=arguments;return new Promise(function(r,o){var u=t.apply(e,n);function a(t){p(u,r,o,a,i,"next",t)}function i(t){p(u,r,o,a,i,"throw",t)}a(void 0)})});return function(){return e.apply(this,arguments)}}()}],r&&y(n.prototype,r),l&&y(n,l),e}()}},[[217,1,0]]]);