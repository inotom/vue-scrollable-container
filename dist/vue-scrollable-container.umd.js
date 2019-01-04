/*! vue-scrollable-container v1.6.0 inotom (http://www.serendip.ws/) | MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ScrollableContainer",[],e):"object"==typeof exports?exports.ScrollableContainer=e():t.ScrollableContainer=e()}(window,function(){return function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){var a=n(5);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(7)(a,r);a.locals&&(t.exports=a.locals)},function(t,e,n){"use strict";function a(t,e,n,a){var r,i=0;return"boolean"!=typeof e&&(a=n,n=e,e=void 0),function(){var o=this,s=Number(new Date)-i,l=arguments;function c(){i=Number(new Date),n.apply(o,l)}a&&!r&&c(),r&&clearTimeout(r),void 0===a&&s>t?c():!0!==e&&(r=setTimeout(a?function(){r=void 0}:c,void 0===a?t-s:t))}}var r=function(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t.clientHeight<t.scrollHeight:t.clientWidth<t.scrollWidth},i={props:{size:{type:Number,default:100},theme:{type:String,default:"light"},label:{type:String,default:"scrollable"},isVertical:{type:Boolean,default:!1}},data:function(){return{once:!1,notificationEnabled:!1,notificationStyle:{top:0,left:0,width:this.size+"px",height:this.size+"px",color:function(t){switch(t){case"light":return"#fff";case"dark":return"#111"}return"#fff"}(this.theme),backgroundColor:function(t){switch(t){case"light":return"rgba(0, 0, 0, .5)";case"dark":return"rgba(255, 255, 255, .8)"}return"rgba(0, 0, 0, .5)"}(this.theme),borderRadius:.1*this.size+"px"},messageStyle:{fontSize:.12*this.size+"px"},scrollableFrom:!1,scrollableTo:!1}},computed:{isScrollable:function(){return this.scrollableFrom||this.scrollableTo}},mounted:function(){var t=this,e=this.$refs.root;this.notificationStyle.top=(e.clientHeight-this.size)/2+"px",this.notificationStyle.left=(e.clientWidth-this.size)/2+"px",window.addEventListener("load",function(){t._updateScrollable(e)});var n=a(150,function(){t._updateScrollable(e)&&window.removeEventListener("scroll",n)});window.addEventListener("scroll",n),r(e,this.isVertical)&&(this.scrollableFrom=!1,this.scrollableTo=!0)},methods:{_updateScrollable:function(t){var e=t.getBoundingClientRect(),n=e.top<window.innerHeight&&e.top>0;return!this.once&&n&&(this.once=!0,this.notificationEnabled=r(t,this.isVertical)),n},scroll:function(t){this.notificationEnabled=!1;var e=t.target;r(e,this.isVertical)&&(this.scrollableFrom=function(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?0!==t.scrollTop:0!==t.scrollLeft}(e,this.isVertical),this.scrollableTo=function(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t.scrollTop+t.offsetHeight!==t.scrollHeight:t.scrollLeft+t.offsetWidth!==t.scrollWidth}(e,this.isVertical))}}};n(4);var o=function(t,e,n,a,r,i,o,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:c}}(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scrollable-container",attrs:{"scrollable-theme":t.theme}},[n("div",{ref:"root",staticClass:"scrollable-container__content",attrs:{"is-vertical":t.isVertical,"is-horizontal":!t.isVertical,"is-scrollable":t.isScrollable},on:{scroll:t.scroll}},[t._t("default"),t._v(" "),n("transition",{attrs:{name:"notification"}},[t.notificationEnabled?n("div",{staticClass:"scrollable-container__notify",style:t.notificationStyle},[n("div",{staticClass:"scrollable-container__picture"},[n("svg",{staticClass:"scrollable-container__pointer",attrs:{"is-vertical":t.isVertical,"is-horizontal":!t.isVertical,width:.24*t.size,height:.24*t.size,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"}})])]),t._v(" "),n("div",{staticClass:"scrollable-container__message",style:t.messageStyle},[t._v("\n          "+t._s(t.label)+"\n        ")])]):t._e()])],2),t._v(" "),n("transition",{attrs:{name:"shadow-from"}},[t.scrollableFrom?n("div",{staticClass:"scrollable-container__shadow--from",attrs:{"is-vertical":t.isVertical,"is-horizontal":!t.isVertical}}):t._e()]),t._v(" "),n("transition",{attrs:{name:"shadow-to"}},[t.scrollableTo?n("div",{staticClass:"scrollable-container__shadow--to",attrs:{"is-vertical":t.isVertical,"is-horizontal":!t.isVertical}}):t._e()])],1)},[],!1,null,"33cd94f7",null);o.options.__file="ScrollableContainer.vue";e.a=o.exports},function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"install",function(){return r});var a=n(1);function r(t){r.installed||(r.installed=!0,t.component("scrollable-container",a.a))}var i={install:r},o=null;"undefined"!=typeof window?o=window.Vue:void 0!==t&&(o=t.Vue),o&&o.use(i),e.default=a.a}.call(this,n(3))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var a=n(0);n.n(a).a},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"\n.scrollable-container[data-v-33cd94f7]{position:relative\n}\n.scrollable-container__content[data-v-33cd94f7]{position:relative\n}\n.scrollable-container__content[is-horizontal][is-scrollable][data-v-33cd94f7]{overflow-x:scroll\n}\n.scrollable-container__content[is-vertical][is-scrollable][data-v-33cd94f7]{overflow-y:scroll\n}\n.scrollable-container__notify[data-v-33cd94f7]{box-sizing:border-box;position:absolute;box-shadow:2px 2px 4px rgba(0,0,0,0.2)\n}\n.scrollable-container__picture[data-v-33cd94f7]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:50%;padding:0 .5em\n}\n.scrollable-container__pointer[data-v-33cd94f7]{position:relative;fill:currentColor;-webkit-transition:all .3s;transition:all .3s\n}\n.scrollable-container__pointer[is-horizontal][data-v-33cd94f7]{-webkit-animation:swipe-horizontal-data-v-33cd94f7 1s linear infinite;animation:swipe-horizontal-data-v-33cd94f7 1s linear infinite\n}\n.scrollable-container__pointer[is-vertical][data-v-33cd94f7]{-webkit-animation:swipe-vertical-data-v-33cd94f7 1s linear infinite;animation:swipe-vertical-data-v-33cd94f7 1s linear infinite\n}\n.scrollable-container__message[data-v-33cd94f7]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:50%;padding:0 1em;text-align:center;line-height:1.4\n}\n.scrollable-container__shadow[data-v-33cd94f7],.scrollable-container__shadow--from[data-v-33cd94f7],.scrollable-container__shadow--to[data-v-33cd94f7]{position:absolute;background-repeat:no-repeat\n}\n.scrollable-container__shadow[is-horizontal][data-v-33cd94f7],.scrollable-container__shadow--from[is-horizontal][data-v-33cd94f7],.scrollable-container__shadow--to[is-horizontal][data-v-33cd94f7]{background-size:16px 150%\n}\n.scrollable-container__shadow[is-vertical][data-v-33cd94f7],.scrollable-container__shadow--from[is-vertical][data-v-33cd94f7],.scrollable-container__shadow--to[is-vertical][data-v-33cd94f7]{background-size:150% 16px\n}\n.scrollable-container__shadow--from[data-v-33cd94f7]{top:0;left:0\n}\n.scrollable-container__shadow--from[is-vertical][data-v-33cd94f7]{width:100%;height:16px;background-image:-webkit-radial-gradient(at top, rgba(0,0,0,0.2), transparent 70%);background-image:radial-gradient(at top, rgba(0,0,0,0.2), transparent 70%);background-position:50% top\n}\n.scrollable-container__shadow--from[is-horizontal][data-v-33cd94f7]{width:16px;height:100%;background-image:-webkit-radial-gradient(at left, rgba(0,0,0,0.2), transparent 70%);background-image:radial-gradient(at left, rgba(0,0,0,0.2), transparent 70%);background-position:left 50%\n}\n.scrollable-container__shadow--to[data-v-33cd94f7]{bottom:0;right:0\n}\n.scrollable-container__shadow--to[is-vertical][data-v-33cd94f7]{width:100%;height:16px;background-image:-webkit-radial-gradient(at bottom, rgba(0,0,0,0.2), transparent 70%);background-image:radial-gradient(at bottom, rgba(0,0,0,0.2), transparent 70%);background-position:50% bottom\n}\n.scrollable-container__shadow--to[is-horizontal][data-v-33cd94f7]{width:16px;height:100%;background-image:-webkit-radial-gradient(at right, rgba(0,0,0,0.2), transparent 70%);background-image:radial-gradient(at right, rgba(0,0,0,0.2), transparent 70%);background-position:right 50%\n}\n.notification-enter-active[data-v-33cd94f7],.notification-leave-active[data-v-33cd94f7]{-webkit-transition:opacity .5s;transition:opacity .5s\n}\n.notification-enter-active[data-v-33cd94f7]{-webkit-transition-delay:.5s;transition-delay:.5s\n}\n.notification-enter[data-v-33cd94f7],.notification-leave-to[data-v-33cd94f7]{opacity:0\n}\n.shadow-from-enter-active[data-v-33cd94f7],.shadow-from-leave-active[data-v-33cd94f7]{-webkit-transition:opacity .3s;transition:opacity .3s\n}\n.shadow-from-enter[data-v-33cd94f7],.shadow-from-leave-to[data-v-33cd94f7]{opacity:0\n}\n.shadow-to-enter-active[data-v-33cd94f7],.shadow-to-leave-active[data-v-33cd94f7]{-webkit-transition:opacity .3s;transition:opacity .3s\n}\n.shadow-to-enter[data-v-33cd94f7],.shadow-to-leave-to[data-v-33cd94f7]{opacity:0\n}\n@-webkit-keyframes swipe-horizontal-data-v-33cd94f7{\n0%{-webkit-transform:translate3d(100%, 25%, 0) scale(1.5);transform:translate3d(100%, 25%, 0) scale(1.5);opacity:0\n}\n20%{opacity:1\n}\n80%{opacity:1\n}\n100%{-webkit-transform:translate3d(-100%, 25%, 0) scale(1.5);transform:translate3d(-100%, 25%, 0) scale(1.5);opacity:0\n}\n}\n@keyframes swipe-horizontal-data-v-33cd94f7{\n0%{-webkit-transform:translate3d(100%, 25%, 0) scale(1.5);transform:translate3d(100%, 25%, 0) scale(1.5);opacity:0\n}\n20%{opacity:1\n}\n80%{opacity:1\n}\n100%{-webkit-transform:translate3d(-100%, 25%, 0) scale(1.5);transform:translate3d(-100%, 25%, 0) scale(1.5);opacity:0\n}\n}\n@-webkit-keyframes swipe-vertical-data-v-33cd94f7{\n0%{-webkit-transform:translate3d(0, 80%, 0) scale(1.5);transform:translate3d(0, 80%, 0) scale(1.5);opacity:0\n}\n20%{opacity:1\n}\n80%{opacity:1\n}\n100%{-webkit-transform:translate3d(0, -50%, 0) scale(1.5);transform:translate3d(0, -50%, 0) scale(1.5);opacity:0\n}\n}\n@keyframes swipe-vertical-data-v-33cd94f7{\n0%{-webkit-transform:translate3d(0, 80%, 0) scale(1.5);transform:translate3d(0, 80%, 0) scale(1.5);opacity:0\n}\n20%{opacity:1\n}\n80%{opacity:1\n}\n100%{-webkit-transform:translate3d(0, -50%, 0) scale(1.5);transform:translate3d(0, -50%, 0) scale(1.5);opacity:0\n}\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(a),i=a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(a[i]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&a[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){var a={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var a=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(t){a=null}e[t]=a}return e[t]}}(),o=null,s=0,l=[],c=n(8);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(v(r.parts[o],e))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(v(r.parts[o],e));a[r.id]={id:r.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],a={},r=0;r<t.length;r++){var i=t[r],o=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};a[o]?a[o].parts.push(s):n.push(a[o]={id:o,parts:[s]})}return n}function u(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=l[l.length-1];if("top"===t.insertAt)a?a.nextSibling?n.insertBefore(e,a.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(t.insertAt.before,n);n.insertBefore(e,r)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var a=function(){0;return n.nc}();a&&(t.attrs.nonce=a)}return h(e,t.attrs),u(t,e),e}function h(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,a,r,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var l=s++;n=o||(o=b(e)),a=g.bind(null,n,l,!1),r=g.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(e,t.attrs),u(t,e),e}(e),a=function(t,e,n){var a=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(a=c(a));r&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([a],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),a=function(t,e){var n=e.css,a=e.media;a&&t.setAttribute("media",a);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){p(n)});return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return d(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var o=n[i];(s=a[o.id]).refs--,r.push(s)}t&&d(f(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete a[s.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function g(t,e,n,a){var r=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var i=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,a=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:a+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}])});
//# sourceMappingURL=vue-scrollable-container.umd.js.map