(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{258:function(e,t,n){__NEXT_REGISTER_PAGE("/post",function(){return e.exports=n(259),{page:e.exports.default}})},259:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r=n(3),o=n.n(r),a=n(0),u=n.n(a),c=n(14),i=n(15),f=(n(24),n(16));function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,r,o,a,u){try{var c=e[a](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,b(t).apply(this,arguments))}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a["Component"]),n=t,r=[{key:"render",value:function(){return u.a.createElement("div",{className:""},u.a.createElement(c.a,null),u.a.createElement("div",{className:"container markdown-body"},u.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.note.content}}),u.a.createElement("span",{className:"create-time has-gray"},this.props.note.createdAt)),u.a.createElement(i.a,null))}}],s=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,e.next=3,f.a.get("/notes/getNote",{key:n.id});case 3:return r=e.sent,e.abrupt("return",{note:r});case 5:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function u(e){p(a,r,o,u,c,"next",e)}function c(e){p(a,r,o,u,c,"throw",e)}u(void 0)})});return function(e){return t.apply(this,arguments)}}()}],r&&l(n.prototype,r),s&&l(n,s),t}()}},[[258,1,0,2]]]);