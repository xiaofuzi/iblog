(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{252:function(e,t,n){__NEXT_REGISTER_PAGE("/note",function(){return e.exports=n(253),{page:e.exports.default}})},253:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r=n(3),o=n.n(r),a=n(0),c=n.n(a),i=(n(56),n(14)),u=n(15),s=(n(24),n(16));n(254);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){var e,n,r,o,a,i,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,f=new Array(s),p=0;p<s;p++)f[p]=arguments[p];return r=this,o=(e=y(t)).call.apply(e,[this].concat(f)),n=!o||"object"!==l(o)&&"function"!=typeof o?m(r):o,a=m(n),u=function(){return(n.props.notesList||[]).map(function(e,t){return c.a.createElement("div",{className:"note-item",key:e.key},n.renderTags(e.tags),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}),c.a.createElement("span",{className:"create-time has-gray"},e.createdAt))})},(i="renderList")in a?Object.defineProperty(a,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[i]=u,n}var n,r,v;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a["Component"]),n=t,r=[{key:"render",value:function(){return c.a.createElement("div",{className:"micro-notes"},c.a.createElement(i.a,null),c.a.createElement("div",{className:"container markdown-body"},c.a.createElement("div",null,this.renderList())),c.a.createElement(u.a,null))}},{key:"renderTags",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return c.a.createElement("span",{className:"tags"},e.map(function(e){return c.a.createElement("span",{className:"tag has-gray"},"#",e)}))}}],v=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/notes/notesList");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return t=e.t0,e.abrupt("return",{notesList:t["my-note"]||[]});case 7:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function c(e){f(a,r,o,c,i,"next",e)}function i(e){f(a,r,o,c,i,"throw",e)}c(void 0)})});return function(){return t.apply(this,arguments)}}()}],r&&p(n.prototype,r),v&&p(n,v),t}()}},[[252,1,0,2]]]);