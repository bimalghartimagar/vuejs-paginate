!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VuejsPaginate=t():e.VuejsPaginate=t()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var s=n[a]={exports:{},id:a,loaded:!1};return e[a].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var s=n(1),r=a(s);e.exports=r.default},function(e,t,n){n(2);var a=n(7)(n(8),n(9),"data-v-6418090e",null);e.exports=a.exports},function(e,t,n){var a=n(3);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);n(5)("7d98caa9",a,!0)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"a[data-v-6418090e]{cursor:pointer}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(a[r]=!0)}for(s=0;s<t.length;s++){var i=t[s];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function a(e){for(var t=0;t<e.length;t++){var n=e[t],a=u[n.id];if(a){a.refs++;for(var s=0;s<a.parts.length;s++)a.parts[s](n.parts[s]);for(;s<n.parts.length;s++)a.parts.push(r(n.parts[s]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var i=[],s=0;s<n.parts.length;s++)i.push(r(n.parts[s]));u[n.id]={id:n.id,refs:1,parts:i}}}}function s(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function r(e){var t,n,a=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(a){if(g)return h;a.parentNode.removeChild(a)}if(y){var r=f++;a=p||(p=s()),t=i.bind(null,a,r,!1),n=i.bind(null,a,r,!0)}else a=s(),t=l.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}function i(e,t,n,a){var s=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=k(t,s);else{var r=document.createTextNode(s),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function l(e,t){var n=t.css,a=t.media,s=t.sourceMap;if(a&&e.setAttribute("media",a),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var o="undefined"!=typeof document,d=n(6),u={},c=o&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,g=!1,h=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){g=n;var s=d(e,t);return a(s),function(t){for(var n=[],r=0;r<s.length;r++){var i=s[r],l=u[i.id];l.refs--,n.push(l)}t?(s=d(e,t),a(s)):s=[];for(var r=0;r<n.length;r++){var l=n[r];if(0===l.refs){for(var o=0;o<l.parts.length;o++)l.parts[o]();delete u[l.id]}}}};var k=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],a={},s=0;s<t.length;s++){var r=t[s],i=r[0],l=r[1],o=r[2],d=r[3],u={id:e+":"+s,css:l,media:o,sourceMap:d};a[i]?a[i].parts.push(u):n.push(a[i]={id:i,parts:[u]})}return n}},function(e,t){e.exports=function(e,t,n,a){var s,r=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(s=e,r=e.default);var l="function"==typeof r?r.options:r;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),n&&(l._scopeId=n),a){var o=l.computed||(l.computed={});Object.keys(a).forEach(function(e){var t=a[e];o[e]=function(){return t}})}return{esModule:s,exports:r,options:l}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},lowEndMargin:{type:Boolean,default:!0},highEndMargin:{type:Boolean,default:!0},lowEndBreakView:{type:Boolean,default:!0},highEndBreakView:{type:Boolean,default:!0},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1},pageFormatFnc:{type:Function,default:function(e){return e}},htmlPrefix:{type:String,default:""}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var n=0;n<this.pageCount;n++){var a={index:n,content:this.pageFormatFnc(n+1),selected:n===this.selected-1};t[n]=a}else{var s=Math.floor(this.pageRange/2),r=function(n){var a={index:n,content:e.pageFormatFnc(n+1),selected:n===e.selected-1};t[n]=a},i=function(e){var n={disabled:!0,breakView:!0};t[e]=n};if(this.lowEndMargin)for(var l=0;l<this.marginPages;l++)r(l);var o=0;this.selected-s>0&&(o=this.selected-1-s);var d=o+this.pageRange-1;d>=this.pageCount&&(d=this.pageCount-1,o=d-this.pageRange+1);for(var u=o;u<=d&&u<=this.pageCount-1;u++)r(u);if(this.lowEndBreakView&&o>this.marginPages&&i(o-1),this.highEndBreakView&&d+1<this.pageCount-this.marginPages&&i(d+1),this.highEndMargin)for(var c=this.pageCount-1;c>=this.pageCount-this.marginPages;c--)r(c)}return t}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return 1===this.selected},lastPageSelected:function(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noLiSurround?n("div",{class:e.containerClass},[e.firstLastButton?n("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}}):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}}),e._v(" "),e._l(e.pages,function(t){return[t.breakView?n("a",{key:t.content+"-breakview",class:[e.pageLinkClass,e.breakViewLinkClass,t.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",function(){return[e._v(e._s(e.breakViewText))]})],2):t.disabled?n("a",{key:t.content+"-disabled",class:[e.pageLinkClass,t.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.htmlPrefix+t.content)}}):n("a",{key:t.content+"-page",class:[e.pageLinkClass,t.selected?e.activeClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.htmlPrefix+t.content)},on:{click:function(n){return e.handlePageSelected(t.index+1)},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handlePageSelected(t.index+1)}}})]}),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}}),e._v(" "),e.firstLastButton?n("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}}):e._e()],2):n("ul",{class:e.containerClass},[e.firstLastButton?n("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(t){return e.selectFirstPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectFirstPage()}}})]):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[n("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(t){return e.prevPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.prevPage()}}})]),e._v(" "),e._l(e.pages,function(t){return n("li",{key:t.text,class:[e.pageClass,t.selected?e.activeClass:"",t.disabled?e.disabledClass:"",t.breakView?e.breakViewClass:""]},[t.breakView?n("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",function(){return[e._v(e._s(e.breakViewText))]})],2):t.disabled?n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.htmlPrefix+t.content)}}):n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.htmlPrefix+t.content)},on:{click:function(n){return e.handlePageSelected(t.index+1)},keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.handlePageSelected(t.index+1)}}})])}),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():n("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(t){return e.nextPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextPage()}}})]),e._v(" "),e.firstLastButton?n("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[n("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(t){return e.selectLastPage()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectLastPage()}}})]):e._e()],2)},staticRenderFns:[]}}])});