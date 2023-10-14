// Custom Scripts
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});
/*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2019 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.2-beta.1
 */
!(function webpackUniversalModuleDefinition(root, factory) {
    if ('object' == typeof exports && 'object' == typeof module) module.exports = factory();
    else if ('function' == typeof define && define.amd) define([], factory);
    else {
        var a = factory();
        for (var i in a) ('object' == typeof exports ? exports : root)[i] = a[i];
    }
})(window, function () {
    return (
        (modules = [
            function (module) {
                module.exports = JSON.parse(
                    '{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}'
                );
            },
            function (module, exports, __webpack_require__) {
                'use strict';
                function _typeof(obj) {
                    return (
                        (_typeof =
                            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                ? function _typeof(obj) {
                                    return typeof obj;
                                }
                                : function _typeof(obj) {
                                    return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                                        ? 'symbol'
                                        : typeof obj;
                                }),
                            _typeof(obj)
                    );
                }
                var $ = __webpack_require__(2),
                    window = __webpack_require__(3),
                    document = window.document,
                    generateMaskSet = __webpack_require__(4).generateMaskSet,
                    analyseMask = __webpack_require__(4).analyseMask,
                    maskScope = __webpack_require__(7);
                function Inputmask(alias, options, internal) {
                    if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
                    (this.el = void 0),
                        (this.events = {}),
                        (this.maskset = void 0),
                        (this.refreshValue = !1),
                    !0 !== internal &&
                    ($.isPlainObject(alias)
                        ? (options = alias)
                        : ((options = options || {}), alias && (options.alias = alias)),
                        (this.opts = $.extend(!0, {}, this.defaults, options)),
                        (this.noMasksCache = options && void 0 !== options.definitions),
                        (this.userOptions = options || {}),
                        resolveAlias(this.opts.alias, options, this.opts),
                        (this.isRTL = this.opts.numericInput));
                }
                function resolveAlias(aliasStr, options, opts) {
                    var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
                    return aliasDefinition
                        ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, void 0, opts),
                            $.extend(!0, opts, aliasDefinition),
                            $.extend(!0, opts, options),
                            !0)
                        : (null === opts.mask && (opts.mask = aliasStr), !1);
                }
                function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                    function importOption(option, optionData) {
                        (optionData = void 0 !== optionData ? optionData : npt.getAttribute(dataAttribute + '-' + option)),
                        null !== optionData &&
                        ('string' == typeof optionData &&
                        (0 === option.indexOf('on')
                            ? (optionData = window[optionData])
                            : 'false' === optionData
                                ? (optionData = !1)
                                : 'true' === optionData && (optionData = !0)),
                            (userOptions[option] = optionData));
                    }
                    if (!0 === opts.importDataAttributes) {
                        var attrOptions = npt.getAttribute(dataAttribute),
                            option,
                            dataoptions,
                            optionData,
                            p;
                        if (
                            (attrOptions &&
                            '' !== attrOptions &&
                            ((attrOptions = attrOptions.replace(/'/g, '"')), (dataoptions = JSON.parse('{' + attrOptions + '}'))),
                                dataoptions)
                        )
                            for (p in ((optionData = void 0), dataoptions))
                                if ('alias' === p.toLowerCase()) {
                                    optionData = dataoptions[p];
                                    break;
                                }
                        for (option in (importOption('alias', optionData),
                        userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts),
                            opts)) {
                            if (dataoptions)
                                for (p in ((optionData = void 0), dataoptions))
                                    if (p.toLowerCase() === option.toLowerCase()) {
                                        optionData = dataoptions[p];
                                        break;
                                    }
                            importOption(option, optionData);
                        }
                    }
                    return (
                        $.extend(!0, opts, userOptions),
                        ('rtl' !== npt.dir && !opts.rightAlign) || (npt.style.textAlign = 'right'),
                        ('rtl' !== npt.dir && !opts.numericInput) ||
                        ((npt.dir = 'ltr'), npt.removeAttribute('dir'), (opts.isRTL = !0)),
                            Object.keys(userOptions).length
                    );
                }
                (Inputmask.prototype = {
                    dataAttribute: 'data-inputmask',
                    defaults: {
                        _maxTestPos: 500,
                        placeholder: '_',
                        optionalmarker: ['[', ']'],
                        quantifiermarker: ['{', '}'],
                        groupmarker: ['(', ')'],
                        alternatormarker: '|',
                        escapeChar: '\\',
                        mask: null,
                        regex: null,
                        oncomplete: $.noop,
                        onincomplete: $.noop,
                        oncleared: $.noop,
                        repeat: 0,
                        greedy: !1,
                        autoUnmask: !1,
                        removeMaskOnSubmit: !1,
                        clearMaskOnLostFocus: !0,
                        insertMode: !0,
                        insertModeVisual: !0,
                        clearIncomplete: !1,
                        alias: null,
                        onKeyDown: $.noop,
                        onBeforeMask: null,
                        onBeforePaste: function onBeforePaste(pastedValue, opts) {
                            return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
                        },
                        onBeforeWrite: null,
                        onUnMask: null,
                        showMaskOnFocus: !0,
                        showMaskOnHover: !0,
                        onKeyValidation: $.noop,
                        skipOptionalPartCharacter: ' ',
                        numericInput: !1,
                        rightAlign: !1,
                        undoOnEscape: !0,
                        radixPoint: '',
                        _radixDance: !1,
                        groupSeparator: '',
                        keepStatic: null,
                        positionCaretOnTab: !0,
                        tabThrough: !1,
                        supportsInputType: ['text', 'tel', 'url', 'password', 'search'],
                        ignorables: [
                            8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120,
                            121, 122, 123, 0, 229,
                        ],
                        isComplete: null,
                        preValidation: null,
                        postValidation: null,
                        staticDefinitionSymbol: void 0,
                        jitMasking: !1,
                        nullable: !0,
                        inputEventOnly: !1,
                        noValuePatching: !1,
                        positionCaretOnClick: 'lvp',
                        casing: null,
                        inputmode: 'text',
                        importDataAttributes: !0,
                        shiftPositions: !0,
                    },
                    definitions: {
                        9: { validator: '[0-9\uff11-\uff19]', definitionSymbol: '*' },
                        a: { validator: '[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]', definitionSymbol: '*' },
                        '*': { validator: '[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]' },
                    },
                    aliases: {},
                    masksCache: {},
                    mask: function mask(elems) {
                        var that = this;
                        return (
                            'string' == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)),
                                (elems = elems.nodeName ? [elems] : elems),
                                $.each(elems, function (ndx, el) {
                                    var scopedOpts = $.extend(!0, {}, that.opts);
                                    if (importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute)) {
                                        var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                                        void 0 !== maskset &&
                                        (void 0 !== el.inputmask && ((el.inputmask.opts.autoUnmask = !0), el.inputmask.remove()),
                                            (el.inputmask = new Inputmask(void 0, void 0, !0)),
                                            (el.inputmask.opts = scopedOpts),
                                            (el.inputmask.noMasksCache = that.noMasksCache),
                                            (el.inputmask.userOptions = $.extend(!0, {}, that.userOptions)),
                                            (el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput),
                                            (el.inputmask.el = el),
                                            (el.inputmask.maskset = maskset),
                                            $.data(el, '_inputmask_opts', scopedOpts),
                                            maskScope.call(el.inputmask, { action: 'mask' }));
                                    }
                                }),
                            (elems && elems[0] && elems[0].inputmask) || this
                        );
                    },
                    option: function option(options, noremask) {
                        return 'string' == typeof options
                            ? this.opts[options]
                            : 'object' === _typeof(options)
                                ? ($.extend(this.userOptions, options), this.el && !0 !== noremask && this.mask(this.el), this)
                                : void 0;
                    },
                    unmaskedvalue: function unmaskedvalue(value) {
                        return (
                            (this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache)),
                                maskScope.call(this, { action: 'unmaskedvalue', value: value })
                        );
                    },
                    remove: function remove() {
                        return maskScope.call(this, { action: 'remove' });
                    },
                    getemptymask: function getemptymask() {
                        return (
                            (this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache)),
                                maskScope.call(this, { action: 'getemptymask' })
                        );
                    },
                    hasMaskedValue: function hasMaskedValue() {
                        return !this.opts.autoUnmask;
                    },
                    isComplete: function isComplete() {
                        return (
                            (this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache)),
                                maskScope.call(this, { action: 'isComplete' })
                        );
                    },
                    getmetadata: function getmetadata() {
                        return (
                            (this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache)),
                                maskScope.call(this, { action: 'getmetadata' })
                        );
                    },
                    isValid: function isValid(value) {
                        return (
                            (this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache)),
                                maskScope.call(this, { action: 'isValid', value: value })
                        );
                    },
                    format: function format(value, metadata) {
                        return (
                            (this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache)),
                                maskScope.call(this, { action: 'format', value: value, metadata: metadata })
                        );
                    },
                    setValue: function setValue(value) {
                        this.el && $(this.el).trigger('setvalue', [value]);
                    },
                    analyseMask: analyseMask,
                }),
                    (Inputmask.extendDefaults = function (options) {
                        $.extend(!0, Inputmask.prototype.defaults, options);
                    }),
                    (Inputmask.extendDefinitions = function (definition) {
                        $.extend(!0, Inputmask.prototype.definitions, definition);
                    }),
                    (Inputmask.extendAliases = function (alias) {
                        $.extend(!0, Inputmask.prototype.aliases, alias);
                    }),
                    (Inputmask.format = function (value, options, metadata) {
                        return Inputmask(options).format(value, metadata);
                    }),
                    (Inputmask.unmask = function (value, options) {
                        return Inputmask(options).unmaskedvalue(value);
                    }),
                    (Inputmask.isValid = function (value, options) {
                        return Inputmask(options).isValid(value);
                    }),
                    (Inputmask.remove = function (elems) {
                        'string' == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)),
                            (elems = elems.nodeName ? [elems] : elems),
                            $.each(elems, function (ndx, el) {
                                el.inputmask && el.inputmask.remove();
                            });
                    }),
                    (Inputmask.setValue = function (elems, value) {
                        'string' == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)),
                            (elems = elems.nodeName ? [elems] : elems),
                            $.each(elems, function (ndx, el) {
                                el.inputmask ? el.inputmask.setValue(value) : $(el).trigger('setvalue', [value]);
                            });
                    });
                var escapeRegexRegex = new RegExp(
                    '(\\' + ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^'].join('|\\') + ')',
                    'gim'
                );
                (Inputmask.escapeRegex = function (str) {
                    return str.replace(escapeRegexRegex, '\\$1');
                }),
                    (Inputmask.dependencyLib = $),
                    (window.Inputmask = Inputmask),
                    (module.exports = Inputmask);
            },
            function (module, exports, __webpack_require__) {
                'use strict';
                function _typeof(obj) {
                    return (
                        (_typeof =
                            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                ? function _typeof(obj) {
                                    return typeof obj;
                                }
                                : function _typeof(obj) {
                                    return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                                        ? 'symbol'
                                        : typeof obj;
                                }),
                            _typeof(obj)
                    );
                }
                var window = __webpack_require__(3),
                    document = window.document;
                function indexOf(list, elem) {
                    for (var i = 0, len = list.length; i < len; i++) if (list[i] === elem) return i;
                    return -1;
                }
                function isWindow(obj) {
                    return null != obj && obj === obj.window;
                }
                function isArraylike(obj) {
                    var length = 'length' in obj && obj.length,
                        ltype = _typeof(obj);
                    return (
                        'function' !== ltype &&
                        !isWindow(obj) &&
                        (!(1 !== obj.nodeType || !length) ||
                            'array' === ltype ||
                            0 === length ||
                            ('number' == typeof length && 0 < length && length - 1 in obj))
                    );
                }
                function isValidElement(elem) {
                    return elem instanceof Element;
                }
                function DependencyLib(elem) {
                    return elem instanceof DependencyLib
                        ? elem
                        : this instanceof DependencyLib
                            ? void (
                                null != elem &&
                                elem !== window &&
                                ((this[0] = elem.nodeName
                                    ? elem
                                    : void 0 !== elem[0] && elem[0].nodeName
                                        ? elem[0]
                                        : document.querySelector(elem)),
                                void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))
                            )
                            : new DependencyLib(elem);
                }
                (DependencyLib.prototype = {
                    on: function on(events, handler) {
                        function addEvent(ev, namespace) {
                            elem.addEventListener
                                ? elem.addEventListener(ev, handler, !1)
                                : elem.attachEvent && elem.attachEvent('on' + ev, handler),
                                (eventRegistry[ev] = eventRegistry[ev] || {}),
                                (eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || []),
                                eventRegistry[ev][namespace].push(handler);
                        }
                        if (isValidElement(this[0]))
                            for (
                                var eventRegistry = this[0].eventRegistry, elem = this[0], _events = events.split(' '), endx = 0;
                                endx < _events.length;
                                endx++
                            ) {
                                var nsEvent = _events[endx].split('.'),
                                    ev = nsEvent[0],
                                    namespace = nsEvent[1] || 'global';
                                addEvent(ev, namespace);
                            }
                        return this;
                    },
                    off: function off(events, handler) {
                        var eventRegistry, elem;
                        function removeEvent(ev, namespace, handler) {
                            if (ev in eventRegistry == !0)
                                if (
                                    (elem.removeEventListener
                                        ? elem.removeEventListener(ev, handler, !1)
                                        : elem.detachEvent && elem.detachEvent('on' + ev, handler),
                                    'global' === namespace)
                                )
                                    for (var nmsp in eventRegistry[ev])
                                        eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1);
                                else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
                        }
                        function resolveNamespace(ev, namespace) {
                            var evts = [],
                                hndx,
                                hndL;
                            if (0 < ev.length)
                                if (void 0 === handler)
                                    for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++)
                                        evts.push({
                                            ev: ev,
                                            namespace: namespace && 0 < namespace.length ? namespace : 'global',
                                            handler: eventRegistry[ev][namespace][hndx],
                                        });
                                else
                                    evts.push({
                                        ev: ev,
                                        namespace: namespace && 0 < namespace.length ? namespace : 'global',
                                        handler: handler,
                                    });
                            else if (0 < namespace.length)
                                for (var evNdx in eventRegistry)
                                    for (var nmsp in eventRegistry[evNdx])
                                        if (nmsp === namespace)
                                            if (void 0 === handler)
                                                for (hndx = 0, hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++)
                                                    evts.push({ ev: evNdx, namespace: nmsp, handler: eventRegistry[evNdx][nmsp][hndx] });
                                            else evts.push({ ev: evNdx, namespace: nmsp, handler: handler });
                            return evts;
                        }
                        if (isValidElement(this[0])) {
                            (eventRegistry = this[0].eventRegistry), (elem = this[0]);
                            for (var _events = events.split(' '), endx = 0; endx < _events.length; endx++)
                                for (
                                    var nsEvent = _events[endx].split('.'),
                                        offEvents = resolveNamespace(nsEvent[0], nsEvent[1]),
                                        i = 0,
                                        offEventsL = offEvents.length;
                                    i < offEventsL;
                                    i++
                                )
                                    removeEvent(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);
                        }
                        return this;
                    },
                    trigger: function trigger(events, argument_1) {
                        if (isValidElement(this[0]))
                            for (
                                var eventRegistry = this[0].eventRegistry,
                                    elem = this[0],
                                    _events = 'string' == typeof events ? events.split(' ') : [events.type],
                                    endx = 0;
                                endx < _events.length;
                                endx++
                            ) {
                                var nsEvent = _events[endx].split('.'),
                                    ev = nsEvent[0],
                                    namespace = nsEvent[1] || 'global';
                                if (void 0 !== document && 'global' === namespace) {
                                    var evnt,
                                        i,
                                        params = { bubbles: !0, cancelable: !0, detail: argument_1 };
                                    if (document.createEvent) {
                                        try {
                                            evnt = new CustomEvent(ev, params);
                                        } catch (e) {
                                            (evnt = document.createEvent('CustomEvent')),
                                                evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
                                        }
                                        events.type && DependencyLib.extend(evnt, events), elem.dispatchEvent(evnt);
                                    } else
                                        (evnt = document.createEventObject()),
                                            (evnt.eventType = ev),
                                            (evnt.detail = argument_1),
                                        events.type && DependencyLib.extend(evnt, events),
                                            elem.fireEvent('on' + evnt.eventType, evnt);
                                } else if (void 0 !== eventRegistry[ev])
                                    if (
                                        ((events = events.type ? events : DependencyLib.Event(events)),
                                            (events.detail = arguments.slice(1)),
                                        'global' === namespace)
                                    )
                                        for (var nmsp in eventRegistry[ev])
                                            for (i = 0; i < eventRegistry[ev][nmsp].length; i++)
                                                eventRegistry[ev][nmsp][i].apply(elem, arguments);
                                    else
                                        for (i = 0; i < eventRegistry[ev][namespace].length; i++)
                                            eventRegistry[ev][namespace][i].apply(elem, arguments);
                            }
                        return this;
                    },
                }),
                    (DependencyLib.isFunction = function (obj) {
                        return 'function' == typeof obj;
                    }),
                    (DependencyLib.noop = function () {}),
                    (DependencyLib.isArray = Array.isArray),
                    (DependencyLib.inArray = function (elem, arr, i) {
                        return null == arr ? -1 : indexOf(arr, elem, i);
                    }),
                    (DependencyLib.valHooks = void 0),
                    (DependencyLib.isPlainObject = function (obj) {
                        return (
                            'object' === _typeof(obj) &&
                            !obj.nodeType &&
                            !isWindow(obj) &&
                            !(obj.constructor && !Object.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf'))
                        );
                    }),
                    (DependencyLib.extend = function () {
                        var options,
                            name,
                            src,
                            copy,
                            copyIsArray,
                            clone,
                            target = arguments[0] || {},
                            i = 1,
                            length = arguments.length,
                            deep = !1;
                        for (
                            'boolean' == typeof target && ((deep = target), (target = arguments[i] || {}), i++),
                            'object' === _typeof(target) || DependencyLib.isFunction(target) || (target = {}),
                            i === length && ((target = this), i--);
                            i < length;
                            i++
                        )
                            if (null != (options = arguments[i]))
                                for (name in options)
                                    (src = target[name]),
                                        (copy = options[name]),
                                    target !== copy &&
                                    (deep &&
                                    copy &&
                                    (DependencyLib.isPlainObject(copy) || (copyIsArray = DependencyLib.isArray(copy)))
                                        ? ((clone = copyIsArray
                                            ? ((copyIsArray = !1), src && DependencyLib.isArray(src) ? src : [])
                                            : src && DependencyLib.isPlainObject(src)
                                                ? src
                                                : {}),
                                            (target[name] = DependencyLib.extend(deep, clone, copy)))
                                        : void 0 !== copy && (target[name] = copy));
                        return target;
                    }),
                    (DependencyLib.each = function (obj, callback) {
                        var value,
                            i = 0;
                        if (isArraylike(obj))
                            for (
                                var length = obj.length;
                                i < length && ((value = callback.call(obj[i], i, obj[i])), !1 !== value);
                                i++
                            );
                        else for (i in obj) if (((value = callback.call(obj[i], i, obj[i])), !1 === value)) break;
                        return obj;
                    }),
                    (DependencyLib.data = function (owner, key, value) {
                        if (void 0 === value) return owner.__data ? owner.__data[key] : null;
                        (owner.__data = owner.__data || {}), (owner.__data[key] = value);
                    }),
                    'function' == typeof window.CustomEvent
                        ? (DependencyLib.Event = window.CustomEvent)
                        : ((DependencyLib.Event = function (event, params) {
                            params = params || { bubbles: !1, cancelable: !1, detail: void 0 };
                            var evt = document.createEvent('CustomEvent');
                            return evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail), evt;
                        }),
                            (DependencyLib.Event.prototype = window.Event.prototype)),
                    (module.exports = DependencyLib);
            },
            function (module, exports, __webpack_require__) {
                'use strict';
                var __WEBPACK_AMD_DEFINE_RESULT__;
                function _typeof(obj) {
                    return (
                        (_typeof =
                            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                ? function _typeof(obj) {
                                    return typeof obj;
                                }
                                : function _typeof(obj) {
                                    return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                                        ? 'symbol'
                                        : typeof obj;
                                }),
                            _typeof(obj)
                    );
                }
                (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                    return 'undefined' != typeof window ? window : new (eval("require('jsdom').JSDOM"))('').window;
                }.call(exports, __webpack_require__, exports, module)),
                void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            },
            function (module, exports, __webpack_require__) {
                'use strict';
                var $ = __webpack_require__(2);
                function generateMaskSet(opts, nocache) {
                    var ms;
                    function generateMask(mask, metadata, opts) {
                        var regexMask = !1,
                            masksetDefinition,
                            maskdefKey;
                        if (
                            ((null !== mask && '' !== mask) ||
                            ((regexMask = null !== opts.regex),
                                (mask = regexMask
                                    ? ((mask = opts.regex), mask.replace(/^(\^)(.*)(\$)$/, '$2'))
                                    : ((regexMask = !0), '.*'))),
                            1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ''),
                            0 < opts.repeat || '*' === opts.repeat || '+' === opts.repeat)
                        ) {
                            var repeatStart = '*' === opts.repeat ? 0 : '+' === opts.repeat ? 1 : opts.repeat;
                            mask =
                                opts.groupmarker[0] +
                                mask +
                                opts.groupmarker[1] +
                                opts.quantifiermarker[0] +
                                repeatStart +
                                ',' +
                                opts.repeat +
                                opts.quantifiermarker[1];
                        }
                        return (
                            (maskdefKey = regexMask
                                ? 'regex_' + opts.regex
                                : opts.numericInput
                                    ? mask.split('').reverse().join('')
                                    : mask),
                            !1 !== opts.keepStatic && (maskdefKey = 'ks_' + maskdefKey),
                                void 0 === Inputmask.prototype.masksCache[maskdefKey] || !0 === nocache
                                    ? ((masksetDefinition = {
                                        mask: mask,
                                        maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                                        validPositions: {},
                                        _buffer: void 0,
                                        buffer: void 0,
                                        tests: {},
                                        excludes: {},
                                        metadata: metadata,
                                        maskLength: void 0,
                                        jitOffset: {},
                                    }),
                                    !0 !== nocache &&
                                    ((Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition),
                                        (masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))))
                                    : (masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey])),
                                masksetDefinition
                        );
                    }
                    if (($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask))) {
                        if (1 < opts.mask.length) {
                            null === opts.keepStatic && (opts.keepStatic = !0);
                            var altMask = opts.groupmarker[0];
                            return (
                                $.each(opts.isRTL ? opts.mask.reverse() : opts.mask, function (ndx, msk) {
                                    1 < altMask.length && (altMask += opts.groupmarker[1] + opts.alternatormarker + opts.groupmarker[0]),
                                        void 0 === msk.mask || $.isFunction(msk.mask) ? (altMask += msk) : (altMask += msk.mask);
                                }),
                                    (altMask += opts.groupmarker[1]),
                                    generateMask(altMask, opts.mask, opts)
                            );
                        }
                        opts.mask = opts.mask.pop();
                    }
                    return (
                        null === opts.keepStatic && (opts.keepStatic = !1),
                            (ms =
                                opts.mask && void 0 !== opts.mask.mask && !$.isFunction(opts.mask.mask)
                                    ? generateMask(opts.mask.mask, opts.mask, opts)
                                    : generateMask(opts.mask, opts.mask, opts)),
                            ms
                    );
                }
                function analyseMask(mask, regexMask, opts) {
                    var tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                        regexTokenizer =
                            /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                        escaped = !1,
                        currentToken = new MaskToken(),
                        match,
                        m,
                        openenings = [],
                        maskTokens = [],
                        openingToken,
                        currentOpeningToken,
                        alternator,
                        lastMatch,
                        closeRegexGroup = !1;
                    function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                        (this.matches = []),
                            (this.openGroup = isGroup || !1),
                            (this.alternatorGroup = !1),
                            (this.isGroup = isGroup || !1),
                            (this.isOptional = isOptional || !1),
                            (this.isQuantifier = isQuantifier || !1),
                            (this.isAlternator = isAlternator || !1),
                            (this.quantifier = { min: 1, max: 1 });
                    }
                    function insertTestDefinition(mtoken, element, position) {
                        position = void 0 !== position ? position : mtoken.matches.length;
                        var prevMatch = mtoken.matches[position - 1];
                        if (regexMask)
                            0 === element.indexOf('[') || (escaped && /\\d|\\s|\\w]/i.test(element)) || '.' === element
                                ? mtoken.matches.splice(position++, 0, {
                                    fn: new RegExp(element, opts.casing ? 'i' : ''),
                                    static: !1,
                                    optionality: !1,
                                    newBlockMarker: void 0 === prevMatch ? 'master' : prevMatch.def !== element,
                                    casing: null,
                                    def: element,
                                    placeholder: void 0,
                                    nativeDef: element,
                                })
                                : (escaped && (element = element[element.length - 1]),
                                    $.each(element.split(''), function (ndx, lmnt) {
                                        (prevMatch = mtoken.matches[position - 1]),
                                            mtoken.matches.splice(position++, 0, {
                                                fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt)
                                                    ? new RegExp('[' + (opts.staticDefinitionSymbol || lmnt) + ']', opts.casing ? 'i' : '')
                                                    : null,
                                                static: !0,
                                                optionality: !1,
                                                newBlockMarker:
                                                    void 0 === prevMatch ? 'master' : prevMatch.def !== lmnt && !0 !== prevMatch.static,
                                                casing: null,
                                                def: opts.staticDefinitionSymbol || lmnt,
                                                placeholder: void 0 !== opts.staticDefinitionSymbol ? lmnt : void 0,
                                                nativeDef: (escaped ? "'" : '') + lmnt,
                                            });
                                    })),
                                (escaped = !1);
                        else {
                            var maskdef =
                                (opts.definitions ? opts.definitions[element] : void 0) || Inputmask.prototype.definitions[element];
                            maskdef && !escaped
                                ? mtoken.matches.splice(position++, 0, {
                                    fn: maskdef.validator
                                        ? 'string' == typeof maskdef.validator
                                            ? new RegExp(maskdef.validator, opts.casing ? 'i' : '')
                                            : new (function () {
                                                this.test = maskdef.validator;
                                            })()
                                        : new RegExp('.'),
                                    static: maskdef.static || !1,
                                    optionality: !1,
                                    newBlockMarker:
                                        void 0 === prevMatch ? 'master' : prevMatch.def !== (maskdef.definitionSymbol || element),
                                    casing: maskdef.casing,
                                    def: maskdef.definitionSymbol || element,
                                    placeholder: maskdef.placeholder,
                                    nativeDef: element,
                                    generated: maskdef.generated,
                                })
                                : (mtoken.matches.splice(position++, 0, {
                                    fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element)
                                        ? new RegExp('[' + (opts.staticDefinitionSymbol || element) + ']', opts.casing ? 'i' : '')
                                        : null,
                                    static: !0,
                                    optionality: !1,
                                    newBlockMarker:
                                        void 0 === prevMatch ? 'master' : prevMatch.def !== element && !0 !== prevMatch.static,
                                    casing: null,
                                    def: opts.staticDefinitionSymbol || element,
                                    placeholder: void 0 !== opts.staticDefinitionSymbol ? element : void 0,
                                    nativeDef: (escaped ? "'" : '') + element,
                                }),
                                    (escaped = !1));
                        }
                    }
                    function verifyGroupMarker(maskToken) {
                        maskToken &&
                        maskToken.matches &&
                        $.each(maskToken.matches, function (ndx, token) {
                            var nextToken = maskToken.matches[ndx + 1];
                            (void 0 === nextToken || void 0 === nextToken.matches || !1 === nextToken.isQuantifier) &&
                            token &&
                            token.isGroup &&
                            ((token.isGroup = !1),
                            regexMask ||
                            (insertTestDefinition(token, opts.groupmarker[0], 0),
                            !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker[1]))),
                                verifyGroupMarker(token);
                        });
                    }
                    function defaultCase() {
                        if (0 < openenings.length) {
                            if (
                                ((currentOpeningToken = openenings[openenings.length - 1]),
                                    insertTestDefinition(currentOpeningToken, m),
                                    currentOpeningToken.isAlternator)
                            ) {
                                alternator = openenings.pop();
                                for (var mndx = 0; mndx < alternator.matches.length; mndx++)
                                    alternator.matches[mndx].isGroup && (alternator.matches[mndx].isGroup = !1);
                                0 < openenings.length
                                    ? ((currentOpeningToken = openenings[openenings.length - 1]),
                                        currentOpeningToken.matches.push(alternator))
                                    : currentToken.matches.push(alternator);
                            }
                        } else insertTestDefinition(currentToken, m);
                    }
                    function reverseTokens(maskToken) {
                        function reverseStatic(st) {
                            return (
                                st === opts.optionalmarker[0]
                                    ? (st = opts.optionalmarker[1])
                                    : st === opts.optionalmarker[1]
                                        ? (st = opts.optionalmarker[0])
                                        : st === opts.groupmarker[0]
                                            ? (st = opts.groupmarker[1])
                                            : st === opts.groupmarker[1] && (st = opts.groupmarker[0]),
                                    st
                            );
                        }
                        for (var match in ((maskToken.matches = maskToken.matches.reverse()), maskToken.matches))
                            if (Object.prototype.hasOwnProperty.call(maskToken.matches, match)) {
                                var intMatch = parseInt(match);
                                if (
                                    maskToken.matches[match].isQuantifier &&
                                    maskToken.matches[intMatch + 1] &&
                                    maskToken.matches[intMatch + 1].isGroup
                                ) {
                                    var qt = maskToken.matches[match];
                                    maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
                                }
                                void 0 !== maskToken.matches[match].matches
                                    ? (maskToken.matches[match] = reverseTokens(maskToken.matches[match]))
                                    : (maskToken.matches[match] = reverseStatic(maskToken.matches[match]));
                            }
                        return maskToken;
                    }
                    function groupify(matches) {
                        var groupToken = new MaskToken(!0);
                        return (groupToken.openGroup = !1), (groupToken.matches = matches), groupToken;
                    }
                    function closeGroup() {
                        if (((openingToken = openenings.pop()), (openingToken.openGroup = !1), void 0 !== openingToken))
                            if (0 < openenings.length) {
                                if (
                                    ((currentOpeningToken = openenings[openenings.length - 1]),
                                        currentOpeningToken.matches.push(openingToken),
                                        currentOpeningToken.isAlternator)
                                ) {
                                    alternator = openenings.pop();
                                    for (var mndx = 0; mndx < alternator.matches.length; mndx++)
                                        (alternator.matches[mndx].isGroup = !1), (alternator.matches[mndx].alternatorGroup = !1);
                                    0 < openenings.length
                                        ? ((currentOpeningToken = openenings[openenings.length - 1]),
                                            currentOpeningToken.matches.push(alternator))
                                        : currentToken.matches.push(alternator);
                                }
                            } else currentToken.matches.push(openingToken);
                        else defaultCase();
                    }
                    function groupQuantifier(matches) {
                        var lastMatch = matches.pop();
                        return lastMatch.isQuantifier && (lastMatch = groupify([matches.pop(), lastMatch])), lastMatch;
                    }
                    for (
                        regexMask && ((opts.optionalmarker[0] = void 0), (opts.optionalmarker[1] = void 0));
                        (match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask));

                    ) {
                        if (((m = match[0]), regexMask))
                            switch (m.charAt(0)) {
                                case '?':
                                    m = '{0,1}';
                                    break;
                                case '+':
                                case '*':
                                    m = '{' + m + '}';
                                    break;
                                case '|':
                                    if (0 === openenings.length) {
                                        var altRegexGroup = groupify(currentToken.matches);
                                        (altRegexGroup.openGroup = !0),
                                            openenings.push(altRegexGroup),
                                            (currentToken.matches = []),
                                            (closeRegexGroup = !0);
                                    }
                                    break;
                            }
                        if (escaped) defaultCase();
                        else
                            switch (m.charAt(0)) {
                                case '(?=':
                                    break;
                                case '(?!':
                                    break;
                                case '(?<=':
                                    break;
                                case '(?<!':
                                    break;
                                case opts.escapeChar:
                                    (escaped = !0), regexMask && defaultCase();
                                    break;
                                case opts.optionalmarker[1]:
                                case opts.groupmarker[1]:
                                    closeGroup();
                                    break;
                                case opts.optionalmarker[0]:
                                    openenings.push(new MaskToken(!1, !0));
                                    break;
                                case opts.groupmarker[0]:
                                    openenings.push(new MaskToken(!0));
                                    break;
                                case opts.quantifiermarker[0]:
                                    var quantifier = new MaskToken(!1, !1, !0);
                                    m = m.replace(/[{}]/g, '');
                                    var mqj = m.split('|'),
                                        mq = mqj[0].split(','),
                                        mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                                        mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                                    ('*' !== mq0 && '+' !== mq0) || (mq0 = '*' === mq1 ? 0 : 1),
                                        (quantifier.quantifier = { min: mq0, max: mq1, jit: mqj[1] });
                                    var matches =
                                        0 < openenings.length ? openenings[openenings.length - 1].matches : currentToken.matches;
                                    if (((match = matches.pop()), match.isAlternator)) {
                                        matches.push(match), (matches = match.matches);
                                        var groupToken = new MaskToken(!0),
                                            tmpMatch = matches.pop();
                                        matches.push(groupToken), (matches = groupToken.matches), (match = tmpMatch);
                                    }
                                    match.isGroup || (match = groupify([match])), matches.push(match), matches.push(quantifier);
                                    break;
                                case opts.alternatormarker:
                                    if (0 < openenings.length) {
                                        currentOpeningToken = openenings[openenings.length - 1];
                                        var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                                        lastMatch =
                                            currentOpeningToken.openGroup &&
                                            (void 0 === subToken.matches || (!1 === subToken.isGroup && !1 === subToken.isAlternator))
                                                ? openenings.pop()
                                                : groupQuantifier(currentOpeningToken.matches);
                                    } else lastMatch = groupQuantifier(currentToken.matches);
                                    if (lastMatch.isAlternator) openenings.push(lastMatch);
                                    else if (
                                        (lastMatch.alternatorGroup
                                            ? ((alternator = openenings.pop()), (lastMatch.alternatorGroup = !1))
                                            : (alternator = new MaskToken(!1, !1, !1, !0)),
                                            alternator.matches.push(lastMatch),
                                            openenings.push(alternator),
                                            lastMatch.openGroup)
                                    ) {
                                        lastMatch.openGroup = !1;
                                        var alternatorGroup = new MaskToken(!0);
                                        (alternatorGroup.alternatorGroup = !0), openenings.push(alternatorGroup);
                                    }
                                    break;
                                default:
                                    defaultCase();
                            }
                    }
                    for (closeRegexGroup && closeGroup(); 0 < openenings.length; )
                        (openingToken = openenings.pop()), currentToken.matches.push(openingToken);
                    return (
                        0 < currentToken.matches.length && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)),
                        (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]),
                            maskTokens
                    );
                }
                module.exports = { generateMaskSet: generateMaskSet, analyseMask: analyseMask };
            },
            function (module, exports, __webpack_require__) {
                'use strict';
                __webpack_require__(6),
                    __webpack_require__(8),
                    __webpack_require__(9),
                    __webpack_require__(10),
                    (module.exports = __webpack_require__(1));
            },
            function (module, exports, __webpack_require__) {
                'use strict';
                var Inputmask = __webpack_require__(1);
                Inputmask.extendDefinitions({
                    A: { validator: '[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]', casing: 'upper' },
                    '&': { validator: '[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]', casing: 'upper' },
                    '#': { validator: '[0-9A-Fa-f]', casing: 'upper' },
                });
                var ipValidatorRegex = new RegExp('25[0-5]|2[0-4][0-9]|[01][0-9][0-9]');
                function ipValidator(chrs, maskset, pos, strict, opts) {
                    return (
                        (chrs =
                            -1 < pos - 1 && '.' !== maskset.buffer[pos - 1]
                                ? ((chrs = maskset.buffer[pos - 1] + chrs),
                                    -1 < pos - 2 && '.' !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : '0' + chrs)
                                : '00' + chrs),
                            ipValidatorRegex.test(chrs)
                    );
                }
                Inputmask.extendAliases({
                    cssunit: { regex: '[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)' },
                    url: { regex: '(https?|ftp)//.*', autoUnmask: !1 },
                    ip: {
                        mask: 'i[i[i]].j[j[j]].k[k[k]].l[l[l]]',
                        definitions: {
                            i: { validator: ipValidator },
                            j: { validator: ipValidator },
                            k: { validator: ipValidator },
                            l: { validator: ipValidator },
                        },
                        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                            return maskedValue;
                        },
                        inputmode: 'numeric',
                    },
                    email: {
                        mask: '*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]',
                        greedy: !1,
                        casing: 'lower',
                        onBeforePaste: function onBeforePaste(pastedValue, opts) {
                            return (pastedValue = pastedValue.toLowerCase()), pastedValue.replace('mailto:', '');
                        },
                        definitions: {
                            '*': { validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]" },
                            '-': { validator: '[0-9A-Za-z-]' },
                        },
                        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                            return maskedValue;
                        },
                        inputmode: 'email',
                    },
                    mac: { mask: '##:##:##:##:##:##' },
                    vin: {
                        mask: 'V{13}9{4}',
                        definitions: { V: { validator: '[A-HJ-NPR-Za-hj-npr-z\\d]', casing: 'upper' } },
                        clearIncomplete: !0,
                        autoUnmask: !0,
                    },
                    ssn: {
                        mask: '999-99-9999',
                        postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
                            return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(buffer.join(''));
                        },
                    },
                }),
                    (module.exports = Inputmask);
            },
            function (module, exports, __webpack_require__) {
                'use strict';
                function _typeof(obj) {
                    return (
                        (_typeof =
                            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                ? function _typeof(obj) {
                                    return typeof obj;
                                }
                                : function _typeof(obj) {
                                    return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                                        ? 'symbol'
                                        : typeof obj;
                                }),
                            _typeof(obj)
                    );
                }
                var $ = __webpack_require__(2),
                    window = __webpack_require__(3),
                    document = window.document,
                    ua = (window.navigator && window.navigator.userAgent) || '',
                    ie = 0 < ua.indexOf('MSIE ') || 0 < ua.indexOf('Trident/'),
                    mobile = 'ontouchstart' in window,
                    iemobile = /iemobile/i.test(ua),
                    iphone = /iphone/i.test(ua) && !iemobile,
                    keyCode = __webpack_require__(0);
                module.exports = function maskScope(actionObj, maskset, opts) {
                    (maskset = maskset || this.maskset), (opts = opts || this.opts);
                    var inputmask = this,
                        el = this.el,
                        isRTL = this.isRTL || (this.isRTL = opts.numericInput),
                        undoValue,
                        $el,
                        skipKeyPressEvent = !1,
                        skipInputEvent = !1,
                        validationEvent = !1,
                        ignorable = !1,
                        maxLength,
                        mouseEnter = !1,
                        originalPlaceholder = void 0;
                    function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail) {
                        var greedy = opts.greedy;
                        clearOptionalTail && (opts.greedy = !1), (minimalPos = minimalPos || 0);
                        var maskTemplate = [],
                            ndxIntlzr,
                            pos = 0,
                            test,
                            testPos,
                            jitRenderStatic;
                        do {
                            if (!0 === baseOnInput && maskset.validPositions[pos])
                                (testPos =
                                    clearOptionalTail &&
                                    !0 === maskset.validPositions[pos].match.optionality &&
                                    void 0 === maskset.validPositions[pos + 1] &&
                                    (!0 === maskset.validPositions[pos].generatedInput ||
                                        (maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && 0 < pos))
                                        ? determineTestTemplate(pos, getTests(pos, ndxIntlzr, pos - 1))
                                        : maskset.validPositions[pos]),
                                    (test = testPos.match),
                                    (ndxIntlzr = testPos.locator.slice()),
                                    maskTemplate.push(
                                        !0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test)
                                    );
                            else {
                                (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1)),
                                    (test = testPos.match),
                                    (ndxIntlzr = testPos.locator.slice());
                                var jitMasking = !0 !== noJit && (!1 !== opts.jitMasking ? opts.jitMasking : test.jit);
                                (jitRenderStatic =
                                    (jitRenderStatic && test.static && test.def !== opts.groupSeparator && null === test.fn) ||
                                    (maskset.validPositions[pos - 1] &&
                                        test.static &&
                                        test.def !== opts.groupSeparator &&
                                        null === test.fn)),
                                    jitRenderStatic ||
                                    !1 === jitMasking ||
                                    void 0 === jitMasking ||
                                    ('number' == typeof jitMasking && isFinite(jitMasking) && pos < jitMasking)
                                        ? maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))
                                        : (jitRenderStatic = !1);
                            }
                            pos++;
                        } while (
                            ((void 0 === maxLength || pos < maxLength) && (!0 !== test.static || '' !== test.def)) ||
                            pos < minimalPos
                            );
                        return (
                            '' === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(),
                            (!1 === includeMode && void 0 !== maskset.maskLength) || (maskset.maskLength = pos - 1),
                                (opts.greedy = greedy),
                                maskTemplate
                        );
                    }
                    function resetMaskSet(soft) {
                        (maskset.buffer = void 0), !0 !== soft && ((maskset.validPositions = {}), (maskset.p = 0));
                    }
                    function getLastValidPosition(closestTo, strict, validPositions) {
                        var before = -1,
                            after = -1,
                            valids = validPositions || maskset.validPositions;
                        for (var posNdx in (void 0 === closestTo && (closestTo = -1), valids)) {
                            var psNdx = parseInt(posNdx);
                            valids[psNdx] &&
                            (strict || !0 !== valids[psNdx].generatedInput) &&
                            (psNdx <= closestTo && (before = psNdx), closestTo <= psNdx && (after = psNdx));
                        }
                        return -1 === before || before == closestTo
                            ? after
                            : -1 == after
                                ? before
                                : closestTo - before < after - closestTo
                                    ? before
                                    : after;
                    }
                    function getDecisionTaker(tst) {
                        var decisionTaker = tst.locator[tst.alternation];
                        return (
                            'string' == typeof decisionTaker &&
                            0 < decisionTaker.length &&
                            (decisionTaker = decisionTaker.split(',')[0]),
                                void 0 !== decisionTaker ? decisionTaker.toString() : ''
                        );
                    }
                    function getLocator(tst, align) {
                        var locator = (null != tst.alternation ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join('');
                        if ('' !== locator) for (; locator.length < align; ) locator += '0';
                        return locator;
                    }
                    function determineTestTemplate(pos, tests) {
                        pos = 0 < pos ? pos - 1 : 0;
                        for (
                            var altTest = getTest(pos), targetLocator = getLocator(altTest), tstLocator, closest, bestMatch, ndx = 0;
                            ndx < tests.length;
                            ndx++
                        ) {
                            var tst = tests[ndx];
                            tstLocator = getLocator(tst, targetLocator.length);
                            var distance = Math.abs(tstLocator - targetLocator);
                            (void 0 === closest ||
                                ('' !== tstLocator && distance < closest) ||
                                (bestMatch &&
                                    !opts.greedy &&
                                    bestMatch.match.optionality &&
                                    'master' === bestMatch.match.newBlockMarker &&
                                    (!tst.match.optionality || !tst.match.newBlockMarker)) ||
                                (bestMatch && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier)) &&
                            ((closest = distance), (bestMatch = tst));
                        }
                        return bestMatch;
                    }
                    function getTestTemplate(pos, ndxIntlzr, tstPs) {
                        return (
                            maskset.validPositions[pos] ||
                            determineTestTemplate(pos, getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs))
                        );
                    }
                    function getTest(pos, tests) {
                        return maskset.validPositions[pos] ? maskset.validPositions[pos] : (tests || getTests(pos))[0];
                    }
                    function positionCanMatchDefinition(pos, testDefinition, opts) {
                        for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) {
                            if (
                                tests[tndx].match &&
                                (!(
                                        tests[tndx].match.nativeDef !== testDefinition.match[opts.shiftPositions ? 'def' : 'nativeDef'] ||
                                        (opts.shiftPositions && testDefinition.match.static)
                                    ) ||
                                    tests[tndx].match.nativeDef === testDefinition.match.nativeDef)
                            ) {
                                valid = !0;
                                break;
                            }
                            if (tests[tndx].match && tests[tndx].match.def === testDefinition.match.nativeDef) {
                                valid = void 0;
                                break;
                            }
                        }
                        return (
                            !1 === valid &&
                            void 0 !== maskset.jitOffset[pos] &&
                            (valid = positionCanMatchDefinition(pos + maskset.jitOffset[pos], testDefinition, opts)),
                                valid
                        );
                    }
                    function getTests(pos, ndxIntlzr, tstPs) {
                        var maskTokens = maskset.maskToken,
                            testPos = ndxIntlzr ? tstPs : 0,
                            ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
                            matches = [],
                            insertStop = !1,
                            latestMatch,
                            cacheDependency = ndxIntlzr ? ndxIntlzr.join('') : '';
                        function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                            function handleMatch(match, loopNdx, quantifierRecurse) {
                                function isFirstMatch(latestMatch, tokenGroup) {
                                    var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
                                    return (
                                        firstMatch ||
                                        $.each(tokenGroup.matches, function (ndx, match) {
                                            if (
                                                (!0 === match.isQuantifier
                                                    ? (firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]))
                                                    : Object.prototype.hasOwnProperty.call(match, 'matches') &&
                                                    (firstMatch = isFirstMatch(latestMatch, match)),
                                                    firstMatch)
                                            )
                                                return !1;
                                        }),
                                            firstMatch
                                    );
                                }
                                function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                                    var bestMatch, indexPos;
                                    if (
                                        ((maskset.tests[pos] || maskset.validPositions[pos]) &&
                                        $.each(maskset.tests[pos] || [maskset.validPositions[pos]], function (ndx, lmnt) {
                                            if (lmnt.mloc[alternateNdx]) return (bestMatch = lmnt), !1;
                                            var alternation = void 0 !== targetAlternation ? targetAlternation : lmnt.alternation,
                                                ndxPos =
                                                    void 0 !== lmnt.locator[alternation]
                                                        ? lmnt.locator[alternation].toString().indexOf(alternateNdx)
                                                        : -1;
                                            (void 0 === indexPos || ndxPos < indexPos) &&
                                            -1 !== ndxPos &&
                                            ((bestMatch = lmnt), (indexPos = ndxPos));
                                        }),
                                            bestMatch)
                                    ) {
                                        var bestMatchAltIndex = bestMatch.locator[bestMatch.alternation],
                                            locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
                                        return locator.slice(
                                            (void 0 !== targetAlternation ? targetAlternation : bestMatch.alternation) + 1
                                        );
                                    }
                                    return void 0 !== targetAlternation ? resolveNdxInitializer(pos, alternateNdx) : void 0;
                                }
                                function isSubsetOf(source, target) {
                                    function expand(pattern) {
                                        for (var expanded = [], start = -1, end, i = 0, l = pattern.length; i < l; i++)
                                            if ('-' === pattern.charAt(i))
                                                for (end = pattern.charCodeAt(i + 1); ++start < end; )
                                                    expanded.push(String.fromCharCode(start));
                                            else (start = pattern.charCodeAt(i)), expanded.push(pattern.charAt(i));
                                        return expanded.join('');
                                    }
                                    return (
                                        source.match.def === target.match.nativeDef ||
                                        (!(
                                                !(opts.regex || (source.match.fn instanceof RegExp && target.match.fn instanceof RegExp)) ||
                                                !0 === source.match.static ||
                                                !0 === target.match.static
                                            ) &&
                                            -1 !==
                                            expand(target.match.fn.toString().replace(/[[\]/]/g, '')).indexOf(
                                                expand(source.match.fn.toString().replace(/[[\]/]/g, ''))
                                            ))
                                    );
                                }
                                function staticCanMatchDefinition(source, target) {
                                    return (
                                        !0 === source.match.static &&
                                        !0 !== target.match.static &&
                                        target.match.fn.test(source.match.def, maskset, pos, !1, opts, !1)
                                    );
                                }
                                function setMergeLocators(targetMatch, altMatch) {
                                    var alternationNdx = targetMatch.alternation,
                                        shouldMerge =
                                            void 0 === altMatch ||
                                            (alternationNdx === altMatch.alternation &&
                                                -1 ===
                                                targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]));
                                    if (!shouldMerge && alternationNdx > altMatch.alternation)
                                        for (var i = altMatch.alternation; i < alternationNdx; i++)
                                            if (targetMatch.locator[i] !== altMatch.locator[i]) {
                                                (alternationNdx = i), (shouldMerge = !0);
                                                break;
                                            }
                                    if (shouldMerge) {
                                        targetMatch.mloc = targetMatch.mloc || {};
                                        var locNdx = targetMatch.locator[alternationNdx];
                                        if (void 0 !== locNdx) {
                                            if (
                                                ('string' == typeof locNdx && (locNdx = locNdx.split(',')[0]),
                                                void 0 === targetMatch.mloc[locNdx] && (targetMatch.mloc[locNdx] = targetMatch.locator.slice()),
                                                void 0 !== altMatch)
                                            ) {
                                                for (var ndx in altMatch.mloc)
                                                    'string' == typeof ndx && (ndx = ndx.split(',')[0]),
                                                    void 0 === targetMatch.mloc[ndx] && (targetMatch.mloc[ndx] = altMatch.mloc[ndx]);
                                                targetMatch.locator[alternationNdx] = Object.keys(targetMatch.mloc).join(',');
                                            }
                                            return !0;
                                        }
                                        targetMatch.alternation = void 0;
                                    }
                                    return !1;
                                }
                                if (testPos > opts._maxTestPos && void 0 !== quantifierRecurse)
                                    throw (
                                        'Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ' +
                                        maskset.mask
                                    );
                                if (testPos === pos && void 0 === match.matches)
                                    return matches.push({ match: match, locator: loopNdx.reverse(), cd: cacheDependency, mloc: {} }), !0;
                                if (void 0 !== match.matches) {
                                    if (match.isGroup && quantifierRecurse !== match) {
                                        if (
                                            ((match = handleMatch(
                                                maskToken.matches[$.inArray(match, maskToken.matches) + 1],
                                                loopNdx,
                                                quantifierRecurse
                                            )),
                                                match)
                                        )
                                            return !0;
                                    } else if (match.isOptional) {
                                        var optionalToken = match,
                                            mtchsNdx = matches.length;
                                        if (((match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)), match)) {
                                            if (
                                                ($.each(matches, function (ndx, mtch) {
                                                    mtchsNdx <= ndx && (mtch.match.optionality = !0);
                                                }),
                                                    (latestMatch = matches[matches.length - 1].match),
                                                void 0 !== quantifierRecurse || !isFirstMatch(latestMatch, optionalToken))
                                            )
                                                return !0;
                                            (insertStop = !0), (testPos = pos);
                                        }
                                    } else if (match.isAlternator) {
                                        var alternateToken = match,
                                            malternateMatches = [],
                                            maltMatches,
                                            currentMatches = matches.slice(),
                                            loopNdxCnt = loopNdx.length,
                                            altIndex = 0 < ndxInitializer.length ? ndxInitializer.shift() : -1;
                                        if (-1 === altIndex || 'string' == typeof altIndex) {
                                            var currentPos = testPos,
                                                ndxInitializerClone = ndxInitializer.slice(),
                                                altIndexArr = [],
                                                amndx;
                                            if ('string' == typeof altIndex) altIndexArr = altIndex.split(',');
                                            else
                                                for (amndx = 0; amndx < alternateToken.matches.length; amndx++)
                                                    altIndexArr.push(amndx.toString());
                                            if (void 0 !== maskset.excludes[pos]) {
                                                for (
                                                    var altIndexArrClone = altIndexArr.slice(), i = 0, el = maskset.excludes[pos].length;
                                                    i < el;
                                                    i++
                                                ) {
                                                    var excludeSet = maskset.excludes[pos][i].toString().split(':');
                                                    loopNdx.length == excludeSet[1] && altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1);
                                                }
                                                0 === altIndexArr.length && (delete maskset.excludes[pos], (altIndexArr = altIndexArrClone));
                                            }
                                            (!0 === opts.keepStatic ||
                                                (isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic)) &&
                                            (altIndexArr = altIndexArr.slice(0, 1));
                                            for (var unMatchedAlternation = !1, ndx = 0; ndx < altIndexArr.length; ndx++) {
                                                (amndx = parseInt(altIndexArr[ndx])),
                                                    (matches = []),
                                                    (ndxInitializer =
                                                        ('string' == typeof altIndex && resolveNdxInitializer(testPos, amndx, loopNdxCnt)) ||
                                                        ndxInitializerClone.slice()),
                                                    alternateToken.matches[amndx] &&
                                                    handleMatch(alternateToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse)
                                                        ? (match = !0)
                                                        : 0 === ndx && (unMatchedAlternation = !0),
                                                    (maltMatches = matches.slice()),
                                                    (testPos = currentPos),
                                                    (matches = []);
                                                for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                                    var altMatch = maltMatches[ndx1],
                                                        dropMatch = !1;
                                                    (altMatch.match.jit = altMatch.match.jit || unMatchedAlternation),
                                                        (altMatch.alternation = altMatch.alternation || loopNdxCnt),
                                                        setMergeLocators(altMatch);
                                                    for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                                        var altMatch2 = malternateMatches[ndx2];
                                                        if (
                                                            'string' != typeof altIndex ||
                                                            (void 0 !== altMatch.alternation &&
                                                                -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr))
                                                        ) {
                                                            if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                                                                (dropMatch = !0), setMergeLocators(altMatch2, altMatch);
                                                                break;
                                                            }
                                                            if (isSubsetOf(altMatch, altMatch2)) {
                                                                setMergeLocators(altMatch, altMatch2) &&
                                                                ((dropMatch = !0),
                                                                    malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                                break;
                                                            }
                                                            if (isSubsetOf(altMatch2, altMatch)) {
                                                                setMergeLocators(altMatch2, altMatch);
                                                                break;
                                                            }
                                                            if (staticCanMatchDefinition(altMatch, altMatch2)) {
                                                                setMergeLocators(altMatch, altMatch2) &&
                                                                ((dropMatch = !0),
                                                                    malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    dropMatch || malternateMatches.push(altMatch);
                                                }
                                            }
                                            (matches = currentMatches.concat(malternateMatches)),
                                                (testPos = pos),
                                                (insertStop = 0 < matches.length),
                                                (match = 0 < malternateMatches.length),
                                                (ndxInitializer = ndxInitializerClone.slice());
                                        } else
                                            match = handleMatch(
                                                alternateToken.matches[altIndex] || maskToken.matches[altIndex],
                                                [altIndex].concat(loopNdx),
                                                quantifierRecurse
                                            );
                                        if (match) return !0;
                                    } else if (
                                        match.isQuantifier &&
                                        quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]
                                    )
                                        for (
                                            var qt = match, qndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0;
                                            qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos;
                                            qndx++
                                        ) {
                                            var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                            if (((match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup)), match)) {
                                                if (
                                                    ((latestMatch = matches[matches.length - 1].match),
                                                        (latestMatch.optionalQuantifier = qndx >= qt.quantifier.min),
                                                        (latestMatch.jit =
                                                            (qndx || 1) * tokenGroup.matches.indexOf(latestMatch) >= qt.quantifier.jit),
                                                    latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup))
                                                ) {
                                                    (insertStop = !0), (testPos = pos);
                                                    break;
                                                }
                                                return (
                                                    latestMatch.jit &&
                                                    (maskset.jitOffset[pos] =
                                                        tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch)),
                                                        !0
                                                );
                                            }
                                        }
                                    else if (((match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)), match))
                                        return !0;
                                } else testPos++;
                            }
                            for (
                                var tndx = 0 < ndxInitializer.length ? ndxInitializer.shift() : 0;
                                tndx < maskToken.matches.length;
                                tndx++
                            )
                                if (!0 !== maskToken.matches[tndx].isQuantifier) {
                                    var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
                                    if (match && testPos === pos) return match;
                                    if (pos < testPos) break;
                                }
                        }
                        function mergeLocators(pos, tests) {
                            var locator = [];
                            return (
                                $.isArray(tests) || (tests = [tests]),
                                0 < tests.length &&
                                (void 0 === tests[0].alternation || !0 === opts.keepStatic
                                    ? ((locator = determineTestTemplate(pos, tests.slice()).locator.slice()),
                                    0 === locator.length && (locator = tests[0].locator.slice()))
                                    : $.each(tests, function (ndx, tst) {
                                        if ('' !== tst.def)
                                            if (0 === locator.length) locator = tst.locator.slice();
                                            else
                                                for (var i = 0; i < locator.length; i++)
                                                    tst.locator[i] &&
                                                    -1 === locator[i].toString().indexOf(tst.locator[i]) &&
                                                    (locator[i] += ',' + tst.locator[i]);
                                    })),
                                    locator
                            );
                        }
                        if (-1 < pos && (void 0 === maxLength || pos < maxLength)) {
                            if (void 0 === ndxIntlzr) {
                                for (
                                    var previousPos = pos - 1, test;
                                    void 0 === (test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) &&
                                    -1 < previousPos;

                                )
                                    previousPos--;
                                void 0 !== test &&
                                -1 < previousPos &&
                                ((ndxInitializer = mergeLocators(previousPos, test)),
                                    (cacheDependency = ndxInitializer.join('')),
                                    (testPos = previousPos));
                            }
                            if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) return maskset.tests[pos];
                            for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                                var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
                                if ((match && testPos === pos) || pos < testPos) break;
                            }
                        }
                        return (
                            (0 !== matches.length && !insertStop) ||
                            matches.push({
                                match: { fn: null, static: !0, optionality: !1, casing: null, def: '', placeholder: '' },
                                locator: [],
                                mloc: {},
                                cd: cacheDependency,
                            }),
                                void 0 !== ndxIntlzr && maskset.tests[pos]
                                    ? $.extend(!0, [], matches)
                                    : ((maskset.tests[pos] = $.extend(!0, [], matches)), maskset.tests[pos])
                        );
                    }
                    function getBufferTemplate() {
                        return (
                            void 0 === maskset._buffer &&
                            ((maskset._buffer = getMaskTemplate(!1, 1)),
                            void 0 === maskset.buffer && (maskset.buffer = maskset._buffer.slice())),
                                maskset._buffer
                        );
                    }
                    function getBuffer(noCache) {
                        return (
                            (void 0 !== maskset.buffer && !0 !== noCache) ||
                            ((maskset.buffer = getMaskTemplate(!0, getLastValidPosition(), !0)),
                            void 0 === maskset._buffer && (maskset._buffer = maskset.buffer.slice())),
                                maskset.buffer
                        );
                    }
                    function refreshFromBuffer(start, end, buffer) {
                        var i,
                            p,
                            skipOptionalPartCharacter = opts.skipOptionalPartCharacter,
                            bffr = isRTL ? buffer.slice().reverse() : buffer;
                        if (((opts.skipOptionalPartCharacter = ''), !0 === start))
                            resetMaskSet(),
                                (maskset.tests = {}),
                                (start = 0),
                                (end = buffer.length),
                                (p = determineNewCaretPosition({ begin: 0, end: 0 }, !1).begin);
                        else {
                            for (i = start; i < end; i++) delete maskset.validPositions[i];
                            p = start;
                        }
                        var keypress = new $.Event('keypress');
                        for (i = start; i < end; i++) {
                            (keypress.which = bffr[i].toString().charCodeAt(0)), (ignorable = !1);
                            var valResult = EventHandlers.keypressEvent.call(el, keypress, !0, !1, !1, p);
                            !1 !== valResult && (p = valResult.forwardPosition);
                        }
                        opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
                    }
                    function casing(elem, test, pos) {
                        switch (opts.casing || test.casing) {
                            case 'upper':
                                elem = elem.toUpperCase();
                                break;
                            case 'lower':
                                elem = elem.toLowerCase();
                                break;
                            case 'title':
                                var posBefore = maskset.validPositions[pos - 1];
                                elem =
                                    0 === pos || (posBefore && posBefore.input === String.fromCharCode(keyCode.SPACE))
                                        ? elem.toUpperCase()
                                        : elem.toLowerCase();
                                break;
                            default:
                                if ($.isFunction(opts.casing)) {
                                    var args = Array.prototype.slice.call(arguments);
                                    args.push(maskset.validPositions), (elem = opts.casing.apply(this, args));
                                }
                        }
                        return elem;
                    }
                    function checkAlternationMatch(altArr1, altArr2, na) {
                        for (
                            var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1),
                                isMatch = !1,
                                naArr = void 0 !== na ? na.split(',') : [],
                                naNdx,
                                i = 0;
                            i < naArr.length;
                            i++
                        )
                            -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
                        for (var alndx = 0; alndx < altArr1.length; alndx++)
                            if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
                                isMatch = !0;
                                break;
                            }
                        return isMatch;
                    }
                    function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
                        var validPsClone = $.extend(!0, {}, maskset.validPositions),
                            tstClone = $.extend(!0, {}, maskset.tests),
                            lastAlt,
                            alternation,
                            isValidRslt = !1,
                            returnRslt = !1,
                            altPos,
                            prevAltPos,
                            i,
                            validPos,
                            decisionPos,
                            lAltPos = void 0 !== rAltPos ? rAltPos : getLastValidPosition(),
                            nextPos,
                            input,
                            begin,
                            end;
                        if (
                            (selection &&
                            ((begin = selection.begin),
                                (end = selection.end),
                            selection.begin > selection.end && ((begin = selection.end), (end = selection.begin))),
                            -1 === lAltPos && void 0 === rAltPos)
                        )
                            (lastAlt = 0), (prevAltPos = getTest(lastAlt)), (alternation = prevAltPos.alternation);
                        else
                            for (; 0 <= lAltPos; lAltPos--)
                                if (((altPos = maskset.validPositions[lAltPos]), altPos && void 0 !== altPos.alternation)) {
                                    if (prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation])
                                        break;
                                    (lastAlt = lAltPos),
                                        (alternation = maskset.validPositions[lastAlt].alternation),
                                        (prevAltPos = altPos);
                                }
                        if (void 0 !== alternation) {
                            (decisionPos = parseInt(lastAlt)),
                                (maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || []),
                            !0 !== maskPos &&
                            maskset.excludes[decisionPos].push(getDecisionTaker(prevAltPos) + ':' + prevAltPos.alternation);
                            var validInputs = [],
                                resultPos = -1;
                            for (i = decisionPos; i < getLastValidPosition(void 0, !0) + 1; i++)
                                -1 === resultPos &&
                                maskPos <= i &&
                                void 0 !== c &&
                                (validInputs.push(c), (resultPos = validInputs.length - 1)),
                                    (validPos = maskset.validPositions[i]),
                                validPos &&
                                !0 !== validPos.generatedInput &&
                                (void 0 === selection || i < begin || end <= i) &&
                                validInputs.push(validPos.input),
                                    delete maskset.validPositions[i];
                            for (
                                -1 === resultPos && void 0 !== c && (validInputs.push(c), (resultPos = validInputs.length - 1));
                                void 0 !== maskset.excludes[decisionPos] && maskset.excludes[decisionPos].length < 10;

                            ) {
                                for (
                                    maskset.tests = {}, resetMaskSet(!0), isValidRslt = !0, i = 0;
                                    i < validInputs.length &&
                                    ((nextPos = isValidRslt.caret || getLastValidPosition(void 0, !0) + 1),
                                        (input = validInputs[i]),
                                        (isValidRslt = isValid(nextPos, input, !1, fromIsValid, !0)));
                                    i++
                                )
                                    i === resultPos && (returnRslt = isValidRslt),
                                    1 == maskPos && isValidRslt && (returnRslt = { caretPos: i });
                                if (isValidRslt) break;
                                if (
                                    (resetMaskSet(),
                                        (prevAltPos = getTest(decisionPos)),
                                        (maskset.validPositions = $.extend(!0, {}, validPsClone)),
                                        (maskset.tests = $.extend(!0, {}, tstClone)),
                                        !maskset.excludes[decisionPos])
                                ) {
                                    returnRslt = alternate(maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                                    break;
                                }
                                var decisionTaker = getDecisionTaker(prevAltPos);
                                if (-1 !== maskset.excludes[decisionPos].indexOf(decisionTaker + ':' + prevAltPos.alternation)) {
                                    returnRslt = alternate(maskPos, c, strict, fromIsValid, decisionPos - 1, selection);
                                    break;
                                }
                                for (
                                    maskset.excludes[decisionPos].push(decisionTaker + ':' + prevAltPos.alternation), i = decisionPos;
                                    i < getLastValidPosition(void 0, !0) + 1;
                                    i++
                                )
                                    delete maskset.validPositions[i];
                            }
                        }
                        return (returnRslt && !1 === opts.keepStatic) || delete maskset.excludes[decisionPos], returnRslt;
                    }
                    function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly) {
                        function isSelection(posObj) {
                            return isRTL
                                ? 1 < posObj.begin - posObj.end || posObj.begin - posObj.end == 1
                                : 1 < posObj.end - posObj.begin || posObj.end - posObj.begin == 1;
                        }
                        strict = !0 === strict;
                        var maskPos = pos;
                        function processCommandObject(commandObj) {
                            if (void 0 !== commandObj) {
                                if (
                                    (void 0 !== commandObj.remove &&
                                    ($.isArray(commandObj.remove) || (commandObj.remove = [commandObj.remove]),
                                        $.each(
                                            commandObj.remove.sort(function (a, b) {
                                                return b.pos - a.pos;
                                            }),
                                            function (ndx, lmnt) {
                                                revalidateMask({ begin: lmnt, end: lmnt + 1 });
                                            }
                                        ),
                                        (commandObj.remove = void 0)),
                                    void 0 !== commandObj.insert &&
                                    ($.isArray(commandObj.insert) || (commandObj.insert = [commandObj.insert]),
                                        $.each(
                                            commandObj.insert.sort(function (a, b) {
                                                return a.pos - b.pos;
                                            }),
                                            function (ndx, lmnt) {
                                                '' !== lmnt.c &&
                                                isValid(
                                                    lmnt.pos,
                                                    lmnt.c,
                                                    void 0 === lmnt.strict || lmnt.strict,
                                                    void 0 !== lmnt.fromIsValid ? lmnt.fromIsValid : fromIsValid
                                                );
                                            }
                                        ),
                                        (commandObj.insert = void 0)),
                                    commandObj.refreshFromBuffer && commandObj.buffer)
                                ) {
                                    var refresh = commandObj.refreshFromBuffer;
                                    refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, commandObj.buffer),
                                        (commandObj.refreshFromBuffer = void 0);
                                }
                                void 0 !== commandObj.rewritePosition && ((maskPos = commandObj.rewritePosition), (commandObj = !0));
                            }
                            return commandObj;
                        }
                        function _isValid(position, c, strict) {
                            var rslt = !1;
                            return (
                                $.each(getTests(position), function (ndx, tst) {
                                    var test = tst.match;
                                    if (
                                        (getBuffer(!0),
                                            (rslt =
                                                null != test.fn
                                                    ? test.fn.test(c, maskset, position, strict, opts, isSelection(pos))
                                                    : (c === test.def || c === opts.skipOptionalPartCharacter) &&
                                                    '' !== test.def && { c: getPlaceholder(position, test, !0) || test.def, pos: position }),
                                        !1 !== rslt)
                                    ) {
                                        var elem = void 0 !== rslt.c ? rslt.c : c,
                                            validatedPos = position;
                                        return (
                                            (elem =
                                                elem === opts.skipOptionalPartCharacter && !0 === test.static
                                                    ? getPlaceholder(position, test, !0) || test.def
                                                    : elem),
                                                (rslt = processCommandObject(rslt)),
                                            !0 !== rslt && void 0 !== rslt.pos && rslt.pos !== position && (validatedPos = rslt.pos),
                                                !0 !== rslt && void 0 === rslt.pos && void 0 === rslt.c
                                                    ? !1
                                                    : (!1 ===
                                                    revalidateMask(
                                                        pos,
                                                        $.extend({}, tst, { input: casing(elem, test, validatedPos) }),
                                                        fromIsValid,
                                                        validatedPos
                                                    ) && (rslt = !1),
                                                        !1)
                                        );
                                    }
                                }),
                                    rslt
                            );
                        }
                        void 0 !== pos.begin && (maskPos = isRTL ? pos.end : pos.begin);
                        var result = !0,
                            positionsClone = $.extend(!0, {}, maskset.validPositions);
                        if (
                            !1 === opts.keepStatic &&
                            void 0 !== maskset.excludes[maskPos] &&
                            !0 !== fromAlternate &&
                            !0 !== fromIsValid
                        )
                            for (var i = maskPos; i < (isRTL ? pos.begin : pos.end); i++)
                                void 0 !== maskset.excludes[i] && ((maskset.excludes[i] = void 0), delete maskset.tests[i]);
                        if (
                            ($.isFunction(opts.preValidation) &&
                            !0 !== fromIsValid &&
                            !0 !== validateOnly &&
                            ((result = opts.preValidation.call(
                                el,
                                getBuffer(),
                                maskPos,
                                c,
                                isSelection(pos),
                                opts,
                                maskset,
                                pos,
                                strict || fromAlternate
                            )),
                                (result = processCommandObject(result))),
                            !0 === result)
                        ) {
                            if (void 0 === maxLength || maskPos < maxLength) {
                                if (
                                    ((result = _isValid(maskPos, c, strict)),
                                    (!strict || !0 === fromIsValid) && !1 === result && !0 !== validateOnly)
                                ) {
                                    var currentPosValid = maskset.validPositions[maskPos];
                                    if (
                                        !currentPosValid ||
                                        !0 !== currentPosValid.match.static ||
                                        (currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter)
                                    ) {
                                        if (opts.insertMode || void 0 === maskset.validPositions[seekNext(maskPos)] || pos.end > maskPos) {
                                            var skip = !1;
                                            if (
                                                (maskset.jitOffset[maskPos] &&
                                                void 0 === maskset.validPositions[seekNext(maskPos)] &&
                                                ((result = isValid(maskPos + maskset.jitOffset[maskPos], c, !0)),
                                                !1 !== result && (!0 !== fromAlternate && (result.caret = maskPos), (skip = !0))),
                                                pos.end > maskPos && (maskset.validPositions[maskPos] = void 0),
                                                !skip && !isMask(maskPos, opts.keepStatic))
                                            )
                                                for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++)
                                                    if (((result = _isValid(nPos, c, strict)), !1 !== result)) {
                                                        (result = trackbackPositions(maskPos, void 0 !== result.pos ? result.pos : nPos) || result),
                                                            (maskPos = nPos);
                                                        break;
                                                    }
                                        }
                                    } else result = { caret: seekNext(maskPos) };
                                }
                            } else result = !1;
                            !1 !== result ||
                            !opts.keepStatic ||
                            (!isComplete(getBuffer()) && 0 !== maskPos) ||
                            strict ||
                            !0 === fromAlternate
                                ? isSelection(pos) &&
                                maskset.tests[maskPos] &&
                                1 < maskset.tests[maskPos].length &&
                                opts.keepStatic &&
                                !strict &&
                                !0 !== fromAlternate &&
                                (result = alternate(!0))
                                : (result = alternate(maskPos, c, strict, fromIsValid, void 0, pos)),
                            !0 === result && (result = { pos: maskPos });
                        }
                        if ($.isFunction(opts.postValidation) && !0 !== fromIsValid && !0 !== validateOnly) {
                            var postResult = opts.postValidation.call(
                                el,
                                getBuffer(!0),
                                void 0 !== pos.begin ? (isRTL ? pos.end : pos.begin) : pos,
                                c,
                                result,
                                opts,
                                maskset,
                                strict
                            );
                            void 0 !== postResult && (result = !0 === postResult ? result : postResult);
                        }
                        result && void 0 === result.pos && (result.pos = maskPos),
                            !1 === result || !0 === validateOnly
                                ? (resetMaskSet(!0), (maskset.validPositions = $.extend(!0, {}, positionsClone)))
                                : trackbackPositions(void 0, maskPos, !0);
                        var endResult = processCommandObject(result);
                        return endResult;
                    }
                    function trackbackPositions(originalPos, newPos, fillOnly) {
                        if (void 0 === originalPos)
                            for (originalPos = newPos - 1; 0 < originalPos && !maskset.validPositions[originalPos]; originalPos--);
                        for (var ps = originalPos; ps < newPos; ps++)
                            if (void 0 === maskset.validPositions[ps] && !isMask(ps, !0)) {
                                var vp = 0 == ps ? getTest(ps) : maskset.validPositions[ps - 1];
                                if (vp) {
                                    var tests = getTests(ps).slice();
                                    '' === tests[tests.length - 1].match.def && tests.pop();
                                    var bestMatch = determineTestTemplate(ps, tests),
                                        np;
                                    if (
                                        bestMatch &&
                                        (!0 !== bestMatch.match.jit ||
                                            ('master' === bestMatch.match.newBlockMarker &&
                                                (np = maskset.validPositions[ps + 1]) &&
                                                !0 === np.match.optionalQuantifier)) &&
                                        ((bestMatch = $.extend({}, bestMatch, {
                                            input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def,
                                        })),
                                            (bestMatch.generatedInput = !0),
                                            revalidateMask(ps, bestMatch, !0),
                                        !0 !== fillOnly)
                                    ) {
                                        var cvpInput = maskset.validPositions[newPos].input;
                                        return (maskset.validPositions[newPos] = void 0), isValid(newPos, cvpInput, !0, !0);
                                    }
                                }
                            }
                    }
                    function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
                        function IsEnclosedStatic(pos, valids, selection) {
                            var posMatch = valids[pos];
                            if (
                                void 0 === posMatch ||
                                !0 !== posMatch.match.static ||
                                !0 === posMatch.match.optionality ||
                                (void 0 !== valids[0] && void 0 !== valids[0].alternation)
                            )
                                return !1;
                            var prevMatch =
                                    selection.begin <= pos - 1
                                        ? valids[pos - 1] && !0 === valids[pos - 1].match.static && valids[pos - 1]
                                        : valids[pos - 1],
                                nextMatch =
                                    selection.end > pos + 1
                                        ? valids[pos + 1] && !0 === valids[pos + 1].match.static && valids[pos + 1]
                                        : valids[pos + 1];
                            return prevMatch && nextMatch;
                        }
                        var offset = 0,
                            begin = void 0 !== pos.begin ? pos.begin : pos,
                            end = void 0 !== pos.end ? pos.end : pos;
                        if (
                            (pos.begin > pos.end && ((begin = pos.end), (end = pos.begin)),
                                (validatedPos = void 0 !== validatedPos ? validatedPos : begin),
                            begin !== end ||
                            (opts.insertMode && void 0 !== maskset.validPositions[validatedPos] && void 0 === fromIsValid) ||
                            void 0 === validTest)
                        ) {
                            var positionsClone = $.extend(!0, {}, maskset.validPositions),
                                lvp = getLastValidPosition(void 0, !0),
                                i;
                            for (maskset.p = begin, i = lvp; begin <= i; i--)
                                delete maskset.validPositions[i], void 0 === validTest && delete maskset.tests[i + 1];
                            var valid = !0,
                                j = validatedPos,
                                posMatch = j,
                                t,
                                canMatch;
                            for (
                                i = j,
                                validTest &&
                                ((maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest)),
                                    posMatch++,
                                    j++,
                                begin < end && i++);
                                i <= lvp;
                                i++
                            ) {
                                if (
                                    void 0 !== (t = positionsClone[i]) &&
                                    !0 !== t.generatedInput &&
                                    (end <= i || (begin <= i && IsEnclosedStatic(i, positionsClone, { begin: begin, end: end })))
                                ) {
                                    for (; '' !== getTest(posMatch).match.def; ) {
                                        if (!1 !== (canMatch = positionCanMatchDefinition(posMatch, t, opts)) || '+' === t.match.def) {
                                            '+' === t.match.def && getBuffer(!0);
                                            var result = isValid(posMatch, t.input, '+' !== t.match.def, '+' !== t.match.def);
                                            if (((valid = !1 !== result), (j = (result.pos || posMatch) + 1), !valid && canMatch)) break;
                                        } else valid = !1;
                                        if (valid) {
                                            void 0 === validTest && t.match.static && i === pos.begin && offset++;
                                            break;
                                        }
                                        if (!valid && posMatch > maskset.maskLength) break;
                                        posMatch++;
                                    }
                                    '' == getTest(posMatch).match.def && (valid = !1), (posMatch = j);
                                }
                                if (!valid) break;
                            }
                            if (!valid) return (maskset.validPositions = $.extend(!0, {}, positionsClone)), resetMaskSet(!0), !1;
                        } else
                            validTest &&
                            getTest(validatedPos).match.cd === validTest.match.cd &&
                            (maskset.validPositions[validatedPos] = $.extend(!0, {}, validTest));
                        return resetMaskSet(!0), offset;
                    }
                    function isMask(pos, strict, fuzzy) {
                        var test = getTestTemplate(pos).match;
                        if (('' === test.def && (test = getTest(pos).match), !0 !== test.static)) return test.fn;
                        if (
                            !0 === fuzzy &&
                            void 0 !== maskset.validPositions[pos] &&
                            !0 !== maskset.validPositions[pos].generatedInput
                        )
                            return !0;
                        if (!0 !== strict && -1 < pos) {
                            if (fuzzy) {
                                var tests = getTests(pos);
                                return tests.length > 1 + ('' === tests[tests.length - 1].match.def ? 1 : 0);
                            }
                            var testTemplate = determineTestTemplate(pos, getTests(pos)),
                                testPlaceHolder = getPlaceholder(pos, testTemplate.match);
                            return testTemplate.match.def !== testPlaceHolder;
                        }
                        return !1;
                    }
                    function seekNext(pos, newBlock, fuzzy) {
                        void 0 === fuzzy && (fuzzy = !0);
                        for (
                            var position = pos + 1;
                            '' !== getTest(position).match.def &&
                            ((!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position, void 0, !0))) ||
                                (!0 !== newBlock && !isMask(position, void 0, fuzzy)));

                        )
                            position++;
                        return position;
                    }
                    function seekPrevious(pos, newBlock) {
                        var position = pos,
                            tests;
                        if (position <= 0) return 0;
                        for (
                            ;
                            0 < --position &&
                            ((!0 === newBlock && !0 !== getTest(position).match.newBlockMarker) ||
                                (!0 !== newBlock &&
                                    !isMask(position, void 0, !0) &&
                                    ((tests = getTests(position)),
                                    tests.length < 2 || (2 === tests.length && '' === tests[1].match.def))));

                        );
                        return position;
                    }
                    function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
                        if (event && $.isFunction(opts.onBeforeWrite)) {
                            var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                            if (result) {
                                if (result.refreshFromBuffer) {
                                    var refresh = result.refreshFromBuffer;
                                    refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer),
                                        (buffer = getBuffer(!0));
                                }
                                void 0 !== caretPos && (caretPos = void 0 !== result.caret ? result.caret : caretPos);
                            }
                        }
                        if (
                            void 0 !== input &&
                            (input.inputmask._valueSet(buffer.join('')),
                            void 0 === caretPos ||
                            (void 0 !== event && 'blur' === event.type) ||
                            caret(
                                input,
                                caretPos,
                                void 0,
                                void 0,
                                void 0 !== event &&
                                'keydown' === event.type &&
                                (event.keyCode === keyCode.DELETE || event.keyCode === keyCode.BACKSPACE)
                            ),
                            !0 === triggerEvents)
                        ) {
                            var $input = $(input),
                                nptVal = input.inputmask._valueGet();
                            (skipInputEvent = !0),
                                $input.trigger('input'),
                                setTimeout(function () {
                                    nptVal === getBufferTemplate().join('')
                                        ? $input.trigger('cleared')
                                        : !0 === isComplete(buffer) && $input.trigger('complete');
                                }, 0);
                        }
                    }
                    function getPlaceholder(pos, test, returnPL) {
                        if (((test = test || getTest(pos).match), void 0 !== test.placeholder || !0 === returnPL))
                            return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
                        if (!0 !== test.static) return opts.placeholder.charAt(pos % opts.placeholder.length);
                        if (-1 < pos && void 0 === maskset.validPositions[pos]) {
                            var tests = getTests(pos),
                                staticAlternations = [],
                                prevTest;
                            if (tests.length > 1 + ('' === tests[tests.length - 1].match.def ? 1 : 0))
                                for (var i = 0; i < tests.length; i++)
                                    if (
                                        '' !== tests[i].match.def &&
                                        !0 !== tests[i].match.optionality &&
                                        !0 !== tests[i].match.optionalQuantifier &&
                                        (!0 === tests[i].match.static ||
                                            void 0 === prevTest ||
                                            !1 !== tests[i].match.fn.test(prevTest.match.def, maskset, pos, !0, opts)) &&
                                        (staticAlternations.push(tests[i]),
                                        !0 === tests[i].match.static && (prevTest = tests[i]),
                                        1 < staticAlternations.length && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))
                                    )
                                        return opts.placeholder.charAt(pos % opts.placeholder.length);
                        }
                        return test.def;
                    }
                    function HandleNativePlaceholder(npt, value) {
                        if (ie) {
                            if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || '' === npt.placeholder)) {
                                var buffer = getBuffer().slice(),
                                    nptValue = npt.inputmask._valueGet();
                                if (nptValue !== value) {
                                    var lvp = getLastValidPosition();
                                    -1 === lvp && nptValue === getBufferTemplate().join('')
                                        ? (buffer = [])
                                        : -1 !== lvp && clearOptionalTail(buffer),
                                        writeBuffer(npt, buffer);
                                }
                            }
                        } else
                            npt.placeholder !== value &&
                            ((npt.placeholder = value), '' === npt.placeholder && npt.removeAttribute('placeholder'));
                    }
                    function determineNewCaretPosition(selectedCaret, tabbed) {
                        function doRadixFocus(clickPos) {
                            if ('' !== opts.radixPoint && 0 !== opts.digits) {
                                var vps = maskset.validPositions;
                                if (void 0 === vps[clickPos] || vps[clickPos].input === getPlaceholder(clickPos)) {
                                    if (clickPos < seekNext(-1)) return !0;
                                    var radixPos = $.inArray(opts.radixPoint, getBuffer());
                                    if (-1 !== radixPos) {
                                        for (var vp in vps) if (vps[vp] && radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
                                        return !0;
                                    }
                                }
                            }
                            return !1;
                        }
                        if (
                            (tabbed &&
                            (isRTL ? (selectedCaret.end = selectedCaret.begin) : (selectedCaret.begin = selectedCaret.end)),
                            selectedCaret.begin === selectedCaret.end)
                        ) {
                            switch (opts.positionCaretOnClick) {
                                case 'none':
                                    break;
                                case 'select':
                                    selectedCaret = { begin: 0, end: getBuffer().length };
                                    break;
                                case 'ignore':
                                    selectedCaret.end = selectedCaret.begin = seekNext(getLastValidPosition());
                                    break;
                                case 'radixFocus':
                                    if (doRadixFocus(selectedCaret.begin)) {
                                        var radixPos = getBuffer().join('').indexOf(opts.radixPoint);
                                        selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext(radixPos) : radixPos;
                                        break;
                                    }
                                default:
                                    var clickPosition = selectedCaret.begin,
                                        lvclickPosition = getLastValidPosition(clickPosition, !0),
                                        lastPosition = seekNext(-1 !== lvclickPosition || isMask(0) ? lvclickPosition : 0);
                                    if (clickPosition < lastPosition)
                                        selectedCaret.end = selectedCaret.begin =
                                            isMask(clickPosition, !0) || isMask(clickPosition - 1, !0)
                                                ? clickPosition
                                                : seekNext(clickPosition);
                                    else {
                                        var lvp = maskset.validPositions[lvclickPosition],
                                            tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : void 0, lvp),
                                            placeholder = getPlaceholder(lastPosition, tt.match);
                                        if (
                                            ('' !== placeholder &&
                                                getBuffer()[lastPosition] !== placeholder &&
                                                !0 !== tt.match.optionalQuantifier &&
                                                !0 !== tt.match.newBlockMarker) ||
                                            (!isMask(lastPosition, opts.keepStatic) && tt.match.def === placeholder)
                                        ) {
                                            var newPos = seekNext(lastPosition);
                                            (newPos <= clickPosition || clickPosition === lastPosition) && (lastPosition = newPos);
                                        }
                                        selectedCaret.end = selectedCaret.begin = lastPosition;
                                    }
                            }
                            return selectedCaret;
                        }
                    }
                    var EventRuler = {
                            on: function on(input, eventName, eventHandler) {
                                var ev = function ev(e) {
                                    e.originalEvent && ((e = e.originalEvent || e), (arguments[0] = e));
                                    var that = this,
                                        args;
                                    if (void 0 === that.inputmask && 'FORM' !== this.nodeName) {
                                        var imOpts = $.data(that, '_inputmask_opts');
                                        imOpts ? new Inputmask(imOpts).mask(that) : EventRuler.off(that);
                                    } else {
                                        if (
                                            'setvalue' === e.type ||
                                            'FORM' === this.nodeName ||
                                            !(
                                                that.disabled ||
                                                (that.readOnly &&
                                                    !(
                                                        ('keydown' === e.type && e.ctrlKey && 67 === e.keyCode) ||
                                                        (!1 === opts.tabThrough && e.keyCode === keyCode.TAB)
                                                    ))
                                            )
                                        ) {
                                            switch (e.type) {
                                                case 'input':
                                                    if (!0 === skipInputEvent || (e.inputType && 'insertCompositionText' === e.inputType))
                                                        return (skipInputEvent = !1), e.preventDefault();
                                                    break;
                                                case 'keydown':
                                                    (skipKeyPressEvent = !1), (skipInputEvent = !1);
                                                    break;
                                                case 'keypress':
                                                    if (!0 === skipKeyPressEvent) return e.preventDefault();
                                                    skipKeyPressEvent = !0;
                                                    break;
                                                case 'click':
                                                case 'focus':
                                                    return (
                                                        validationEvent
                                                            ? ((validationEvent = !1),
                                                                input.blur(),
                                                                HandleNativePlaceholder(
                                                                    input,
                                                                    (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).join('')
                                                                ),
                                                                setTimeout(function () {
                                                                    input.focus();
                                                                }, 3e3))
                                                            : ((args = arguments),
                                                                setTimeout(function () {
                                                                    eventHandler.apply(that, args);
                                                                }, 0)),
                                                            !1
                                                    );
                                            }
                                            var returnVal = eventHandler.apply(that, arguments);
                                            return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;
                                        }
                                        e.preventDefault();
                                    }
                                };
                                (input.inputmask.events[eventName] = input.inputmask.events[eventName] || []),
                                    input.inputmask.events[eventName].push(ev),
                                    -1 !== $.inArray(eventName, ['submit', 'reset'])
                                        ? null !== input.form && $(input.form).on(eventName, ev)
                                        : $(input).on(eventName, ev);
                            },
                            off: function off(input, event) {
                                var events;
                                input.inputmask &&
                                input.inputmask.events &&
                                (event
                                    ? ((events = []), (events[event] = input.inputmask.events[event]))
                                    : (events = input.inputmask.events),
                                    $.each(events, function (eventName, evArr) {
                                        for (; 0 < evArr.length; ) {
                                            var ev = evArr.pop();
                                            -1 !== $.inArray(eventName, ['submit', 'reset'])
                                                ? null !== input.form && $(input.form).off(eventName, ev)
                                                : $(input).off(eventName, ev);
                                        }
                                        delete input.inputmask.events[eventName];
                                    }));
                            },
                        },
                        EventHandlers = {
                            keydownEvent: function keydownEvent(e) {
                                var input = this,
                                    $input = $(input),
                                    k = e.keyCode,
                                    pos = caret(input),
                                    kdResult = opts.onKeyDown.call(this, e, getBuffer(), pos, opts);
                                if (void 0 !== kdResult) return kdResult;
                                if (
                                    k === keyCode.BACKSPACE ||
                                    k === keyCode.DELETE ||
                                    (iphone && k === keyCode.BACKSPACE_SAFARI) ||
                                    (e.ctrlKey && k === keyCode.X && !('oncut' in input))
                                )
                                    e.preventDefault(),
                                        handleRemove(input, k, pos),
                                        writeBuffer(
                                            input,
                                            getBuffer(!0),
                                            maskset.p,
                                            e,
                                            input.inputmask._valueGet() !== getBuffer().join('')
                                        );
                                else if (k === keyCode.END || k === keyCode.PAGE_DOWN) {
                                    e.preventDefault();
                                    var caretPos = seekNext(getLastValidPosition());
                                    caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
                                } else
                                    (k === keyCode.HOME && !e.shiftKey) || k === keyCode.PAGE_UP
                                        ? (e.preventDefault(), caret(input, 0, e.shiftKey ? pos.begin : 0, !0))
                                        : ((opts.undoOnEscape && k === keyCode.ESCAPE) || (90 === k && e.ctrlKey)) && !0 !== e.altKey
                                            ? (checkVal(input, !0, !1, undoValue.split('')), $input.trigger('click'))
                                            : !0 === opts.tabThrough && k === keyCode.TAB
                                                ? (!0 === e.shiftKey
                                                    ? (!0 === getTest(pos.begin).match.static && (pos.begin = seekNext(pos.begin)),
                                                        (pos.end = seekPrevious(pos.begin, !0)),
                                                        (pos.begin = seekPrevious(pos.end, !0)))
                                                    : ((pos.begin = seekNext(pos.begin, !0)),
                                                        (pos.end = seekNext(pos.begin, !0)),
                                                    pos.end < maskset.maskLength && pos.end--),
                                                pos.begin < maskset.maskLength && (e.preventDefault(), caret(input, pos.begin, pos.end)))
                                                : e.shiftKey ||
                                                (opts.insertModeVisual &&
                                                    !1 === opts.insertMode &&
                                                    (k === keyCode.RIGHT
                                                        ? setTimeout(function () {
                                                            var caretPos = caret(input);
                                                            caret(input, caretPos.begin);
                                                        }, 0)
                                                        : k === keyCode.LEFT &&
                                                        setTimeout(function () {
                                                            var caretPos_begin = translatePosition(input.inputmask.caretPos.begin),
                                                                caretPos_end = translatePosition(input.inputmask.caretPos.end);
                                                            caret(
                                                                input,
                                                                isRTL
                                                                    ? caretPos_begin + (caretPos_begin === maskset.maskLength ? 0 : 1)
                                                                    : caretPos_begin - (0 === caretPos_begin ? 0 : 1)
                                                            );
                                                        }, 0)));
                                ignorable = -1 !== $.inArray(k, opts.ignorables);
                            },
                            keypressEvent: function keypressEvent(e, checkval, writeOut, strict, ndx) {
                                var input = this,
                                    $input = $(input),
                                    k = e.which || e.charCode || e.keyCode;
                                if (!(!0 === checkval || (e.ctrlKey && e.altKey)) && (e.ctrlKey || e.metaKey || ignorable))
                                    return (
                                        k === keyCode.ENTER &&
                                        undoValue !== getBuffer().join('') &&
                                        ((undoValue = getBuffer().join('')),
                                            setTimeout(function () {
                                                $input.trigger('change');
                                            }, 0)),
                                            (skipInputEvent = !0),
                                            !0
                                    );
                                if (k) {
                                    (44 !== k && 46 !== k) ||
                                    3 !== e.location ||
                                    '' === opts.radixPoint ||
                                    (k = opts.radixPoint.charCodeAt(0));
                                    var pos = checkval ? { begin: ndx, end: ndx } : caret(input),
                                        forwardPosition,
                                        c = String.fromCharCode(k);
                                    maskset.writeOutBuffer = !0;
                                    var valResult = isValid(pos, c, strict);
                                    if (
                                        (!1 !== valResult &&
                                        (resetMaskSet(!0),
                                            (forwardPosition =
                                                void 0 !== valResult.caret
                                                    ? valResult.caret
                                                    : seekNext(valResult.pos.begin ? valResult.pos.begin : valResult.pos)),
                                            (maskset.p = forwardPosition)),
                                            (forwardPosition =
                                                opts.numericInput && void 0 === valResult.caret
                                                    ? seekPrevious(forwardPosition)
                                                    : forwardPosition),
                                        !1 !== writeOut &&
                                        (setTimeout(function () {
                                            opts.onKeyValidation.call(input, k, valResult);
                                        }, 0),
                                        maskset.writeOutBuffer && !1 !== valResult))
                                    ) {
                                        var buffer = getBuffer();
                                        writeBuffer(input, buffer, forwardPosition, e, !0 !== checkval);
                                    }
                                    if ((e.preventDefault(), checkval))
                                        return !1 !== valResult && (valResult.forwardPosition = forwardPosition), valResult;
                                }
                            },
                            pasteEvent: function pasteEvent(e) {
                                var input = this,
                                    inputValue = this.inputmask._valueGet(!0),
                                    caretPos = caret(this),
                                    tempValue;
                                isRTL && ((tempValue = caretPos.end), (caretPos.end = caretPos.begin), (caretPos.begin = tempValue));
                                var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
                                    valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                                if (
                                    (valueBeforeCaret ==
                                    (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate())
                                        .slice(0, caretPos.begin)
                                        .join('') && (valueBeforeCaret = ''),
                                    valueAfterCaret ==
                                    (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate())
                                        .slice(caretPos.end)
                                        .join('') && (valueAfterCaret = ''),
                                    window.clipboardData && window.clipboardData.getData)
                                )
                                    inputValue = valueBeforeCaret + window.clipboardData.getData('Text') + valueAfterCaret;
                                else {
                                    if (!e.clipboardData || !e.clipboardData.getData) return !0;
                                    inputValue = valueBeforeCaret + e.clipboardData.getData('text/plain') + valueAfterCaret;
                                }
                                var pasteValue = inputValue;
                                if ($.isFunction(opts.onBeforePaste)) {
                                    if (((pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts)), !1 === pasteValue))
                                        return e.preventDefault();
                                    pasteValue = pasteValue || inputValue;
                                }
                                return (
                                    checkVal(this, !1, !1, pasteValue.toString().split('')),
                                        writeBuffer(
                                            this,
                                            getBuffer(),
                                            seekNext(getLastValidPosition()),
                                            e,
                                            undoValue !== getBuffer().join('')
                                        ),
                                        e.preventDefault()
                                );
                            },
                            inputFallBackEvent: function inputFallBackEvent(e) {
                                function ieMobileHandler(input, inputValue, caretPos) {
                                    if (iemobile) {
                                        var inputChar = inputValue.replace(getBuffer().join(''), '');
                                        if (1 === inputChar.length) {
                                            var iv = inputValue.split('');
                                            iv.splice(caretPos.begin, 0, inputChar), (inputValue = iv.join(''));
                                        }
                                    }
                                    return inputValue;
                                }
                                function analyseChanges(inputValue, buffer, caretPos) {
                                    for (
                                        var frontPart = inputValue.substr(0, caretPos.begin).split(''),
                                            backPart = inputValue.substr(caretPos.begin).split(''),
                                            frontBufferPart = buffer.substr(0, caretPos.begin).split(''),
                                            backBufferPart = buffer.substr(caretPos.begin).split(''),
                                            fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length,
                                            bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length,
                                            bl,
                                            i,
                                            action = '',
                                            data = [],
                                            marker = '~',
                                            placeholder;
                                        frontPart.length < fpl;

                                    )
                                        frontPart.push('~');
                                    for (; frontBufferPart.length < fpl; ) frontBufferPart.push('~');
                                    for (; backPart.length < bpl; ) backPart.unshift('~');
                                    for (; backBufferPart.length < bpl; ) backBufferPart.unshift('~');
                                    var newBuffer = frontPart.concat(backPart),
                                        oldBuffer = frontBufferPart.concat(backBufferPart);
                                    for (i = 0, bl = newBuffer.length; i < bl; i++)
                                        switch (((placeholder = getPlaceholder(translatePosition(i))), action)) {
                                            case 'insertText':
                                                oldBuffer[i - 1] === newBuffer[i] &&
                                                caretPos.begin == newBuffer.length - 1 &&
                                                data.push(newBuffer[i]),
                                                    (i = bl);
                                                break;
                                            case 'insertReplacementText':
                                                '~' === newBuffer[i] ? caretPos.end++ : (i = bl);
                                                break;
                                            case 'deleteContentBackward':
                                                '~' === newBuffer[i] ? caretPos.end++ : (i = bl);
                                                break;
                                            default:
                                                newBuffer[i] !== oldBuffer[i] &&
                                                (('~' !== newBuffer[i + 1] &&
                                                    newBuffer[i + 1] !== placeholder &&
                                                    void 0 !== newBuffer[i + 1]) ||
                                                ((oldBuffer[i] !== placeholder || '~' !== oldBuffer[i + 1]) && '~' !== oldBuffer[i])
                                                    ? '~' === oldBuffer[i + 1] && oldBuffer[i] === newBuffer[i + 1]
                                                        ? ((action = 'insertText'), data.push(newBuffer[i]), caretPos.begin--, caretPos.end--)
                                                        : newBuffer[i] !== placeholder &&
                                                        '~' !== newBuffer[i] &&
                                                        ('~' === newBuffer[i + 1] ||
                                                            (oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1]))
                                                            ? ((action = 'insertReplacementText'), data.push(newBuffer[i]), caretPos.begin--)
                                                            : '~' === newBuffer[i]
                                                                ? ((action = 'deleteContentBackward'),
                                                                (!isMask(translatePosition(i), !0) && oldBuffer[i] !== opts.radixPoint) ||
                                                                caretPos.end++)
                                                                : (i = bl)
                                                    : ((action = 'insertText'), data.push(newBuffer[i]), caretPos.begin--, caretPos.end--));
                                                break;
                                        }
                                    return { action: action, data: data, caret: caretPos };
                                }
                                var input = this,
                                    inputValue = input.inputmask._valueGet(!0),
                                    buffer = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join(''),
                                    caretPos = caret(input, void 0, void 0, !0);
                                if (buffer !== inputValue) {
                                    inputValue = ieMobileHandler(input, inputValue, caretPos);
                                    var changes = analyseChanges(inputValue, buffer, caretPos);
                                    switch (
                                        ((input.inputmask.shadowRoot || document).activeElement !== input && input.focus(),
                                            writeBuffer(input, getBuffer()),
                                            caret(input, caretPos.begin, caretPos.end, !0),
                                            changes.action)
                                        ) {
                                        case 'insertText':
                                        case 'insertReplacementText':
                                            $.each(changes.data, function (ndx, entry) {
                                                var keypress = new $.Event('keypress');
                                                (keypress.which = entry.charCodeAt(0)),
                                                    (ignorable = !1),
                                                    EventHandlers.keypressEvent.call(input, keypress);
                                            }),
                                                setTimeout(function () {
                                                    $el.trigger('keyup');
                                                }, 0);
                                            break;
                                        case 'deleteContentBackward':
                                            var keydown = new $.Event('keydown');
                                            (keydown.keyCode = keyCode.BACKSPACE), EventHandlers.keydownEvent.call(input, keydown);
                                            break;
                                        default:
                                            applyInputValue(input, inputValue);
                                            break;
                                    }
                                    e.preventDefault();
                                }
                            },
                            compositionendEvent: function compositionendEvent(e) {
                                $el.trigger('input');
                            },
                            setValueEvent: function setValueEvent(e, argument_1, argument_2) {
                                var input = this,
                                    value = e && e.detail ? e.detail[0] : argument_1;
                                void 0 === value && (value = this.inputmask._valueGet(!0)),
                                    applyInputValue(this, value),
                                ((e.detail && void 0 !== e.detail[1]) || void 0 !== argument_2) &&
                                caret(this, e.detail ? e.detail[1] : argument_2);
                            },
                            focusEvent: function focusEvent(e) {
                                var input = this,
                                    nptValue = this.inputmask._valueGet();
                                opts.showMaskOnFocus &&
                                nptValue !== getBuffer().join('') &&
                                writeBuffer(this, getBuffer(), seekNext(getLastValidPosition())),
                                !0 !== opts.positionCaretOnTab ||
                                !1 !== mouseEnter ||
                                (isComplete(getBuffer()) && -1 !== getLastValidPosition()) ||
                                EventHandlers.clickEvent.apply(this, [e, !0]),
                                    (undoValue = getBuffer().join(''));
                            },
                            invalidEvent: function invalidEvent(e) {
                                validationEvent = !0;
                            },
                            mouseleaveEvent: function mouseleaveEvent() {
                                var input = this;
                                (mouseEnter = !1),
                                opts.clearMaskOnLostFocus &&
                                (this.inputmask.shadowRoot || document).activeElement !== this &&
                                HandleNativePlaceholder(this, originalPlaceholder);
                            },
                            clickEvent: function clickEvent(e, tabbed) {
                                var input = this;
                                if ((this.inputmask.shadowRoot || document).activeElement === this) {
                                    var newCaretPosition = determineNewCaretPosition(caret(this), tabbed);
                                    void 0 !== newCaretPosition && caret(this, newCaretPosition);
                                }
                            },
                            cutEvent: function cutEvent(e) {
                                var input = this,
                                    pos = caret(this),
                                    clipboardData = window.clipboardData || e.clipboardData,
                                    clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                                clipboardData.setData('text', isRTL ? clipData.reverse().join('') : clipData.join('')),
                                document.execCommand && document.execCommand('copy'),
                                    handleRemove(this, keyCode.DELETE, pos),
                                    writeBuffer(this, getBuffer(), maskset.p, e, undoValue !== getBuffer().join(''));
                            },
                            blurEvent: function blurEvent(e) {
                                var $input = $(this),
                                    input = this;
                                if (this.inputmask) {
                                    HandleNativePlaceholder(this, originalPlaceholder);
                                    var nptValue = this.inputmask._valueGet(),
                                        buffer = getBuffer().slice();
                                    '' !== nptValue &&
                                    (opts.clearMaskOnLostFocus &&
                                    (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join('')
                                        ? (buffer = [])
                                        : clearOptionalTail(buffer)),
                                    !1 === isComplete(buffer) &&
                                    (setTimeout(function () {
                                        $input.trigger('incomplete');
                                    }, 0),
                                    opts.clearIncomplete &&
                                    (resetMaskSet(), (buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice()))),
                                        writeBuffer(this, buffer, void 0, e)),
                                    undoValue !== getBuffer().join('') &&
                                    ((undoValue = getBuffer().join('')), $input.trigger('change'));
                                }
                            },
                            mouseenterEvent: function mouseenterEvent() {
                                var input = this;
                                (mouseEnter = !0),
                                (this.inputmask.shadowRoot || document).activeElement !== this &&
                                (null == originalPlaceholder &&
                                this.placeholder !== originalPlaceholder &&
                                (originalPlaceholder = this.placeholder),
                                opts.showMaskOnHover &&
                                HandleNativePlaceholder(
                                    this,
                                    (isRTL ? getBufferTemplate().slice().reverse() : getBufferTemplate()).join('')
                                ));
                            },
                            submitEvent: function submitEvent() {
                                undoValue !== getBuffer().join('') && $el.trigger('change'),
                                opts.clearMaskOnLostFocus &&
                                -1 === getLastValidPosition() &&
                                el.inputmask._valueGet &&
                                el.inputmask._valueGet() === getBufferTemplate().join('') &&
                                el.inputmask._valueSet(''),
                                opts.clearIncomplete && !1 === isComplete(getBuffer()) && el.inputmask._valueSet(''),
                                opts.removeMaskOnSubmit &&
                                (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0),
                                    setTimeout(function () {
                                        writeBuffer(el, getBuffer());
                                    }, 0));
                            },
                            resetEvent: function resetEvent() {
                                (el.inputmask.refreshValue = !0),
                                    setTimeout(function () {
                                        applyInputValue(el, el.inputmask._valueGet(!0));
                                    }, 0);
                            },
                        },
                        valueBuffer;
                    function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
                        var inputmask = this || input.inputmask,
                            inputValue = nptvl.slice(),
                            charCodes = '',
                            initialNdx = -1,
                            result = void 0;
                        function isTemplateMatch(ndx, charCodes) {
                            for (
                                var targetTemplate = getMaskTemplate(!0, 0).slice(ndx, seekNext(ndx)).join('').replace(/'/g, ''),
                                    charCodeNdx = targetTemplate.indexOf(charCodes);
                                0 < charCodeNdx && ' ' === targetTemplate[charCodeNdx - 1];

                            )
                                charCodeNdx--;
                            var match =
                                0 === charCodeNdx &&
                                !isMask(ndx) &&
                                (getTest(ndx).match.nativeDef === charCodes.charAt(0) ||
                                    (!0 === getTest(ndx).match.static && getTest(ndx).match.nativeDef === "'" + charCodes.charAt(0)) ||
                                    (' ' === getTest(ndx).match.nativeDef &&
                                        (getTest(ndx + 1).match.nativeDef === charCodes.charAt(0) ||
                                            (!0 === getTest(ndx + 1).match.static &&
                                                getTest(ndx + 1).match.nativeDef === "'" + charCodes.charAt(0)))));
                            return !match && 0 < charCodeNdx && (inputmask.caretPos = { begin: seekNext(charCodeNdx) }), match;
                        }
                        resetMaskSet(),
                            (maskset.tests = {}),
                            (initialNdx = opts.radixPoint ? determineNewCaretPosition({ begin: 0, end: 0 }).begin : 0),
                            (maskset.p = initialNdx),
                            (inputmask.caretPos = { begin: initialNdx });
                        var staticMatches = [],
                            prevCaretPos = inputmask.caretPos;
                        if (
                            ($.each(inputValue, function (ndx, charCode) {
                                if (void 0 !== charCode)
                                    if (
                                        void 0 === maskset.validPositions[ndx] &&
                                        inputValue[ndx] === getPlaceholder(ndx) &&
                                        isMask(ndx, !0) &&
                                        !1 === isValid(ndx, inputValue[ndx], !0, void 0, void 0, !0)
                                    )
                                        maskset.p++;
                                    else {
                                        var keypress = new $.Event('_checkval');
                                        (keypress.which = charCode.toString().charCodeAt(0)), (charCodes += charCode);
                                        var lvp = getLastValidPosition(void 0, !0);
                                        isTemplateMatch(initialNdx, charCodes)
                                            ? (result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, lvp + 1))
                                            : ((result = EventHandlers.keypressEvent.call(
                                                input,
                                                keypress,
                                                !0,
                                                !1,
                                                strict,
                                                inputmask.caretPos.begin
                                            )),
                                            result && ((initialNdx = inputmask.caretPos.begin + 1), (charCodes = ''))),
                                            result
                                                ? (void 0 !== result.pos &&
                                                maskset.validPositions[result.pos] &&
                                                !0 === maskset.validPositions[result.pos].match.static &&
                                                void 0 === maskset.validPositions[result.pos].alternation &&
                                                (staticMatches.push(result.pos), isRTL || (result.forwardPosition = result.pos + 1)),
                                                    writeBuffer(void 0, getBuffer(), result.forwardPosition, keypress, !1),
                                                    (inputmask.caretPos = { begin: result.forwardPosition, end: result.forwardPosition }),
                                                    (prevCaretPos = inputmask.caretPos))
                                                : (inputmask.caretPos = prevCaretPos);
                                    }
                            }),
                            0 < staticMatches.length)
                        ) {
                            var sndx,
                                validPos,
                                nextValid = seekNext(-1, void 0, !1);
                            if (
                                (!isComplete(getBuffer()) && staticMatches.length <= nextValid) ||
                                (isComplete(getBuffer()) &&
                                    0 < staticMatches.length &&
                                    staticMatches.length !== nextValid &&
                                    0 === staticMatches[0])
                            )
                                for (var nextSndx = nextValid; void 0 !== (sndx = staticMatches.shift()); ) {
                                    var keypress = new $.Event('_checkval');
                                    if (
                                        ((validPos = maskset.validPositions[sndx]),
                                            (validPos.generatedInput = !0),
                                            (keypress.which = validPos.input.charCodeAt(0)),
                                            (result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, nextSndx)),
                                        result &&
                                        void 0 !== result.pos &&
                                        result.pos !== sndx &&
                                        maskset.validPositions[result.pos] &&
                                        !0 === maskset.validPositions[result.pos].match.static)
                                    )
                                        staticMatches.push(result.pos);
                                    else if (!result) break;
                                    nextSndx++;
                                }
                            else
                                for (; (sndx = staticMatches.pop()); )
                                    (validPos = maskset.validPositions[sndx]), validPos && (validPos.generatedInput = !0);
                        }
                        if (writeOut)
                            for (var vndx in (writeBuffer(
                                input,
                                getBuffer(),
                                result ? result.forwardPosition : void 0,
                                initiatingEvent || new $.Event('checkval'),
                                initiatingEvent && 'input' === initiatingEvent.type
                            ),
                                maskset.validPositions))
                                !0 !== maskset.validPositions[vndx].match.generated &&
                                delete maskset.validPositions[vndx].generatedInput;
                    }
                    function unmaskedvalue(input) {
                        if (input) {
                            if (void 0 === input.inputmask) return input.value;
                            input.inputmask && input.inputmask.refreshValue && applyInputValue(input, input.inputmask._valueGet(!0));
                        }
                        var umValue = [],
                            vps = maskset.validPositions;
                        for (var pndx in vps)
                            vps[pndx] && vps[pndx].match && 1 != vps[pndx].match.static && umValue.push(vps[pndx].input);
                        var unmaskedValue = 0 === umValue.length ? '' : (isRTL ? umValue.reverse() : umValue).join('');
                        if ($.isFunction(opts.onUnMask)) {
                            var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join('');
                            unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
                        }
                        return unmaskedValue;
                    }
                    function translatePosition(pos) {
                        return (
                            !isRTL ||
                            'number' != typeof pos ||
                            (opts.greedy && '' === opts.placeholder) ||
                            !el ||
                            (pos = el.inputmask._valueGet().length - pos),
                                pos
                        );
                    }
                    function caret(input, begin, end, notranslate, isDelete) {
                        var range;
                        if (void 0 === begin)
                            return (
                                'selectionStart' in input && 'selectionEnd' in input
                                    ? ((begin = input.selectionStart), (end = input.selectionEnd))
                                    : window.getSelection
                                        ? ((range = window.getSelection().getRangeAt(0)),
                                        (range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input) ||
                                        ((begin = range.startOffset), (end = range.endOffset)))
                                        : document.selection &&
                                        document.selection.createRange &&
                                        ((range = document.selection.createRange()),
                                            (begin = 0 - range.duplicate().moveStart('character', -input.inputmask._valueGet().length)),
                                            (end = begin + range.text.length)),
                                    {
                                        begin: notranslate ? begin : translatePosition(begin),
                                        end: notranslate ? end : translatePosition(end),
                                    }
                            );
                        if (
                            ($.isArray(begin) && ((end = isRTL ? begin[0] : begin[1]), (begin = isRTL ? begin[1] : begin[0])),
                            void 0 !== begin.begin &&
                            ((end = isRTL ? begin.begin : begin.end), (begin = isRTL ? begin.end : begin.begin)),
                            'number' == typeof begin)
                        ) {
                            (begin = notranslate ? begin : translatePosition(begin)),
                                (end = notranslate ? end : translatePosition(end)),
                                (end = 'number' == typeof end ? end : begin);
                            var scrollCalc =
                                parseInt(
                                    ((input.ownerDocument.defaultView || window).getComputedStyle
                                            ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null)
                                            : input.currentStyle
                                    ).fontSize
                                ) * end;
                            if (
                                ((input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0),
                                    (input.inputmask.caretPos = { begin: begin, end: end }),
                                opts.insertModeVisual && !1 === opts.insertMode && begin === end && (isDelete || end++),
                                input === (input.inputmask.shadowRoot || document).activeElement)
                            )
                                if ('setSelectionRange' in input) input.setSelectionRange(begin, end);
                                else if (window.getSelection) {
                                    if (((range = document.createRange()), void 0 === input.firstChild || null === input.firstChild)) {
                                        var textNode = document.createTextNode('');
                                        input.appendChild(textNode);
                                    }
                                    range.setStart(
                                        input.firstChild,
                                        begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length
                                    ),
                                        range.setEnd(
                                            input.firstChild,
                                            end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length
                                        ),
                                        range.collapse(!0);
                                    var sel = window.getSelection();
                                    sel.removeAllRanges(), sel.addRange(range);
                                } else
                                    input.createTextRange &&
                                    ((range = input.createTextRange()),
                                        range.collapse(!0),
                                        range.moveEnd('character', end),
                                        range.moveStart('character', begin),
                                        range.select());
                        }
                    }
                    function determineLastRequiredPosition(returnDefinition) {
                        var buffer = getMaskTemplate(!0, getLastValidPosition(), !0, !0),
                            bl = buffer.length,
                            pos,
                            lvp = getLastValidPosition(),
                            positions = {},
                            lvTest = maskset.validPositions[lvp],
                            ndxIntlzr = void 0 !== lvTest ? lvTest.locator.slice() : void 0,
                            testPos;
                        for (pos = lvp + 1; pos < buffer.length; pos++)
                            (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1)),
                                (ndxIntlzr = testPos.locator.slice()),
                                (positions[pos] = $.extend(!0, {}, testPos));
                        var lvTestAlt = lvTest && void 0 !== lvTest.alternation ? lvTest.locator[lvTest.alternation] : void 0;
                        for (
                            pos = bl - 1;
                            lvp < pos &&
                            ((testPos = positions[pos]),
                            (testPos.match.optionality ||
                                (testPos.match.optionalQuantifier && testPos.match.newBlockMarker) ||
                                (lvTestAlt &&
                                    ((lvTestAlt !== positions[pos].locator[lvTest.alternation] && 1 != testPos.match.static) ||
                                        (!0 === testPos.match.static &&
                                            testPos.locator[lvTest.alternation] &&
                                            checkAlternationMatch(
                                                testPos.locator[lvTest.alternation].toString().split(','),
                                                lvTestAlt.toString().split(',')
                                            ) &&
                                            '' !== getTests(pos)[0].def)))) &&
                            buffer[pos] === getPlaceholder(pos, testPos.match));
                            pos--
                        )
                            bl--;
                        return returnDefinition ? { l: bl, def: positions[bl] ? positions[bl].match : void 0 } : bl;
                    }
                    function clearOptionalTail(buffer) {
                        buffer.length = 0;
                        for (var template = getMaskTemplate(!0, 0, !0, void 0, !0), lmnt; void 0 !== (lmnt = template.shift()); )
                            buffer.push(lmnt);
                        return buffer;
                    }
                    function isComplete(buffer) {
                        if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
                        if ('*' !== opts.repeat) {
                            var complete = !1,
                                lrp = determineLastRequiredPosition(!0),
                                aml = seekPrevious(lrp.l);
                            if (void 0 === lrp.def || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                                complete = !0;
                                for (var i = 0; i <= aml; i++) {
                                    var test = getTestTemplate(i).match;
                                    if (
                                        (!0 !== test.static &&
                                            void 0 === maskset.validPositions[i] &&
                                            !0 !== test.optionality &&
                                            !0 !== test.optionalQuantifier) ||
                                        (!0 === test.static && buffer[i] !== getPlaceholder(i, test))
                                    ) {
                                        complete = !1;
                                        break;
                                    }
                                }
                            }
                            return complete;
                        }
                    }
                    function handleRemove(input, k, pos, strict, fromIsValid) {
                        if (
                            (opts.numericInput || isRTL) &&
                            (k === keyCode.BACKSPACE ? (k = keyCode.DELETE) : k === keyCode.DELETE && (k = keyCode.BACKSPACE), isRTL)
                        ) {
                            var pend = pos.end;
                            (pos.end = pos.begin), (pos.begin = pend);
                        }
                        var offset;
                        if (
                            (k === keyCode.BACKSPACE
                                ? pos.end - pos.begin < 1 && (pos.begin = seekPrevious(pos.begin))
                                : k === keyCode.DELETE &&
                                pos.begin === pos.end &&
                                (pos.end = isMask(pos.end, !0, !0) ? pos.end + 1 : seekNext(pos.end) + 1),
                            !1 !== (offset = revalidateMask(pos)))
                        ) {
                            if (
                                (!0 !== strict && !1 !== opts.keepStatic) ||
                                (null !== opts.regex && -1 !== getTest(pos.begin).match.def.indexOf('|'))
                            ) {
                                var result = alternate(!0);
                                if (result) {
                                    var newPos =
                                        void 0 !== result.caret
                                            ? result.caret
                                            : result.pos
                                                ? seekNext(result.pos.begin ? result.pos.begin : result.pos)
                                                : getLastValidPosition(-1, !0);
                                    (k !== keyCode.DELETE || pos.begin > newPos) && pos.begin;
                                }
                            }
                            !0 !== strict && (maskset.p = k === keyCode.DELETE ? pos.begin + offset : pos.begin);
                        }
                    }
                    function applyInputValue(input, value) {
                        (input.inputmask.refreshValue = !1),
                        $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value),
                            (value = value.toString().split('')),
                            checkVal(input, !0, !1, value),
                            (undoValue = getBuffer().join('')),
                        (opts.clearMaskOnLostFocus || opts.clearIncomplete) &&
                        input.inputmask._valueGet() === getBufferTemplate().join('') &&
                        -1 === getLastValidPosition() &&
                        input.inputmask._valueSet('');
                    }
                    function mask(elem) {
                        function isElementTypeSupported(input, opts) {
                            function patchValueProperty(npt) {
                                var valueGet, valueSet;
                                function patchValhook(type) {
                                    if ($.valHooks && (void 0 === $.valHooks[type] || !0 !== $.valHooks[type].inputmaskpatch)) {
                                        var valhookGet =
                                                $.valHooks[type] && $.valHooks[type].get
                                                    ? $.valHooks[type].get
                                                    : function (elem) {
                                                        return elem.value;
                                                    },
                                            valhookSet =
                                                $.valHooks[type] && $.valHooks[type].set
                                                    ? $.valHooks[type].set
                                                    : function (elem, value) {
                                                        return (elem.value = value), elem;
                                                    };
                                        $.valHooks[type] = {
                                            get: function get(elem) {
                                                if (elem.inputmask) {
                                                    if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                                                    var result = valhookGet(elem);
                                                    return -1 !== getLastValidPosition(void 0, void 0, elem.inputmask.maskset.validPositions) ||
                                                    !0 !== opts.nullable
                                                        ? result
                                                        : '';
                                                }
                                                return valhookGet(elem);
                                            },
                                            set: function set(elem, value) {
                                                var result = valhookSet(elem, value);
                                                return elem.inputmask && applyInputValue(elem, value), result;
                                            },
                                            inputmaskpatch: !0,
                                        };
                                    }
                                }
                                function getter() {
                                    return this.inputmask
                                        ? this.inputmask.opts.autoUnmask
                                            ? this.inputmask.unmaskedvalue()
                                            : -1 !== getLastValidPosition() || !0 !== opts.nullable
                                                ? (this.inputmask.shadowRoot || document.activeElement) === this && opts.clearMaskOnLostFocus
                                                    ? (isRTL
                                                            ? clearOptionalTail(getBuffer().slice()).reverse()
                                                            : clearOptionalTail(getBuffer().slice())
                                                    ).join('')
                                                    : valueGet.call(this)
                                                : ''
                                        : valueGet.call(this);
                                }
                                function setter(value) {
                                    valueSet.call(this, value), this.inputmask && applyInputValue(this, value);
                                }
                                function installNativeValueSetFallback(npt) {
                                    EventRuler.on(npt, 'mouseenter', function () {
                                        var input = this,
                                            value = this.inputmask._valueGet(!0);
                                        value !== (isRTL ? getBuffer().reverse() : getBuffer()).join('') && applyInputValue(this, value);
                                    });
                                }
                                if (!npt.inputmask.__valueGet) {
                                    if (!0 !== opts.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            'function' != typeof Object.getPrototypeOf &&
                                            (Object.getPrototypeOf =
                                                'object' === _typeof('test'.__proto__)
                                                    ? function (object) {
                                                        return object.__proto__;
                                                    }
                                                    : function (object) {
                                                        return object.constructor.prototype;
                                                    });
                                            var valueProperty = Object.getPrototypeOf
                                                ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), 'value')
                                                : void 0;
                                            valueProperty && valueProperty.get && valueProperty.set
                                                ? ((valueGet = valueProperty.get),
                                                    (valueSet = valueProperty.set),
                                                    Object.defineProperty(npt, 'value', { get: getter, set: setter, configurable: !0 }))
                                                : 'input' !== npt.tagName.toLowerCase() &&
                                                ((valueGet = function valueGet() {
                                                    return this.textContent;
                                                }),
                                                    (valueSet = function valueSet(value) {
                                                        this.textContent = value;
                                                    }),
                                                    Object.defineProperty(npt, 'value', { get: getter, set: setter, configurable: !0 }));
                                        } else
                                            document.__lookupGetter__ &&
                                            npt.__lookupGetter__('value') &&
                                            ((valueGet = npt.__lookupGetter__('value')),
                                                (valueSet = npt.__lookupSetter__('value')),
                                                npt.__defineGetter__('value', getter),
                                                npt.__defineSetter__('value', setter));
                                        (npt.inputmask.__valueGet = valueGet), (npt.inputmask.__valueSet = valueSet);
                                    }
                                    (npt.inputmask._valueGet = function (overruleRTL) {
                                        return isRTL && !0 !== overruleRTL
                                            ? valueGet.call(this.el).split('').reverse().join('')
                                            : valueGet.call(this.el);
                                    }),
                                        (npt.inputmask._valueSet = function (value, overruleRTL) {
                                            valueSet.call(
                                                this.el,
                                                null == value ? '' : !0 !== overruleRTL && isRTL ? value.split('').reverse().join('') : value
                                            );
                                        }),
                                    void 0 === valueGet &&
                                    ((valueGet = function valueGet() {
                                        return this.value;
                                    }),
                                        (valueSet = function valueSet(value) {
                                            this.value = value;
                                        }),
                                        patchValhook(npt.type),
                                        installNativeValueSetFallback(npt));
                                }
                            }
                            'textarea' !== input.tagName.toLowerCase() && opts.ignorables.push(keyCode.ENTER);
                            var elementType = input.getAttribute('type'),
                                isSupported =
                                    ('input' === input.tagName.toLowerCase() && -1 !== $.inArray(elementType, opts.supportsInputType)) ||
                                    input.isContentEditable ||
                                    'textarea' === input.tagName.toLowerCase();
                            if (!isSupported)
                                if ('input' === input.tagName.toLowerCase()) {
                                    var el = document.createElement('input');
                                    el.setAttribute('type', elementType), (isSupported = 'text' === el.type), (el = null);
                                } else isSupported = 'partial';
                            return !1 !== isSupported ? patchValueProperty(input) : (input.inputmask = void 0), isSupported;
                        }
                        EventRuler.off(elem);
                        var isSupported = isElementTypeSupported(elem, opts);
                        if (!1 !== isSupported) {
                            (el = elem),
                                ($el = $(el)),
                                (originalPlaceholder = el.placeholder),
                                (maxLength = void 0 !== el ? el.maxLength : void 0),
                            -1 === maxLength && (maxLength = void 0),
                            'inputMode' in el &&
                            null === el.getAttribute('inputmode') &&
                            ((el.inputMode = opts.inputmode), el.setAttribute('inputmode', opts.inputmode)),
                            !0 === isSupported &&
                            ((opts.showMaskOnFocus =
                                opts.showMaskOnFocus && -1 === ['cc-number', 'cc-exp'].indexOf(el.autocomplete)),
                            iphone && (opts.insertModeVisual = !1),
                                EventRuler.on(el, 'submit', EventHandlers.submitEvent),
                                EventRuler.on(el, 'reset', EventHandlers.resetEvent),
                                EventRuler.on(el, 'blur', EventHandlers.blurEvent),
                                EventRuler.on(el, 'focus', EventHandlers.focusEvent),
                                EventRuler.on(el, 'invalid', EventHandlers.invalidEvent),
                                EventRuler.on(el, 'click', EventHandlers.clickEvent),
                                EventRuler.on(el, 'mouseleave', EventHandlers.mouseleaveEvent),
                                EventRuler.on(el, 'mouseenter', EventHandlers.mouseenterEvent),
                                EventRuler.on(el, 'paste', EventHandlers.pasteEvent),
                                EventRuler.on(el, 'cut', EventHandlers.cutEvent),
                                EventRuler.on(el, 'complete', opts.oncomplete),
                                EventRuler.on(el, 'incomplete', opts.onincomplete),
                                EventRuler.on(el, 'cleared', opts.oncleared),
                                mobile || !0 === opts.inputEventOnly
                                    ? el.removeAttribute('maxLength')
                                    : (EventRuler.on(el, 'keydown', EventHandlers.keydownEvent),
                                        EventRuler.on(el, 'keypress', EventHandlers.keypressEvent)),
                                EventRuler.on(el, 'input', EventHandlers.inputFallBackEvent),
                                EventRuler.on(el, 'compositionend', EventHandlers.compositionendEvent)),
                                EventRuler.on(el, 'setvalue', EventHandlers.setValueEvent),
                                (undoValue = getBufferTemplate().join(''));
                            var activeElement = (el.inputmask.shadowRoot || document).activeElement;
                            if ('' !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || activeElement === el) {
                                applyInputValue(el, el.inputmask._valueGet(!0), opts);
                                var buffer = getBuffer().slice();
                                !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(),
                                opts.clearMaskOnLostFocus &&
                                activeElement !== el &&
                                (-1 === getLastValidPosition() ? (buffer = []) : clearOptionalTail(buffer)),
                                (!1 === opts.clearMaskOnLostFocus ||
                                    (opts.showMaskOnFocus && activeElement === el) ||
                                    '' !== el.inputmask._valueGet(!0)) &&
                                writeBuffer(el, buffer),
                                activeElement === el && caret(el, seekNext(getLastValidPosition()));
                            }
                        }
                    }
                    if (void 0 !== actionObj)
                        switch (actionObj.action) {
                            case 'isComplete':
                                return (el = actionObj.el), isComplete(getBuffer());
                            case 'unmaskedvalue':
                                return (
                                    (void 0 !== el && void 0 === actionObj.value) ||
                                    ((valueBuffer = actionObj.value),
                                        (valueBuffer = (
                                            ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, valueBuffer, opts)) ||
                                            valueBuffer
                                        ).split('')),
                                        checkVal.call(this, void 0, !1, !1, valueBuffer),
                                    $.isFunction(opts.onBeforeWrite) &&
                                    opts.onBeforeWrite.call(inputmask, void 0, getBuffer(), 0, opts)),
                                        unmaskedvalue(el)
                                );
                            case 'mask':
                                mask(el);
                                break;
                            case 'format':
                                return (
                                    (valueBuffer = (
                                        ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts)) ||
                                        actionObj.value
                                    ).split('')),
                                        checkVal.call(this, void 0, !0, !1, valueBuffer),
                                        actionObj.metadata
                                            ? {
                                                value: isRTL ? getBuffer().slice().reverse().join('') : getBuffer().join(''),
                                                metadata: maskScope.call(this, { action: 'getmetadata' }, maskset, opts),
                                            }
                                            : isRTL
                                                ? getBuffer().slice().reverse().join('')
                                                : getBuffer().join('')
                                );
                            case 'isValid':
                                actionObj.value
                                    ? ((valueBuffer = (
                                        ($.isFunction(opts.onBeforeMask) && opts.onBeforeMask.call(inputmask, actionObj.value, opts)) ||
                                        actionObj.value
                                    ).split('')),
                                        checkVal.call(this, void 0, !0, !1, valueBuffer))
                                    : (actionObj.value = isRTL ? getBuffer().slice().reverse().join('') : getBuffer().join(''));
                                for (
                                    var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1;
                                    rl < lmib && !isMask(lmib);
                                    lmib--
                                );
                                return (
                                    buffer.splice(rl, lmib + 1 - rl),
                                    isComplete(buffer) &&
                                    actionObj.value === (isRTL ? getBuffer().slice().reverse().join('') : getBuffer().join(''))
                                );
                            case 'getemptymask':
                                return getBufferTemplate().join('');
                            case 'remove':
                                if (el && el.inputmask) {
                                    $.data(el, '_inputmask_opts', null), ($el = $(el));
                                    var cv = opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(opts.autoUnmask),
                                        valueProperty;
                                    cv !== getBufferTemplate().join('')
                                        ? el.inputmask._valueSet(cv, opts.autoUnmask)
                                        : el.inputmask._valueSet(''),
                                        EventRuler.off(el),
                                        Object.getOwnPropertyDescriptor && Object.getPrototypeOf
                                            ? ((valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), 'value')),
                                            valueProperty &&
                                            el.inputmask.__valueGet &&
                                            Object.defineProperty(el, 'value', {
                                                get: el.inputmask.__valueGet,
                                                set: el.inputmask.__valueSet,
                                                configurable: !0,
                                            }))
                                            : document.__lookupGetter__ &&
                                            el.__lookupGetter__('value') &&
                                            el.inputmask.__valueGet &&
                                            (el.__defineGetter__('value', el.inputmask.__valueGet),
                                                el.__defineSetter__('value', el.inputmask.__valueSet)),
                                        (el.inputmask = void 0);
                                }
                                return el;
                            case 'getmetadata':
                                if ($.isArray(maskset.metadata)) {
                                    var maskTarget = getMaskTemplate(!0, 0, !1).join('');
                                    return (
                                        $.each(maskset.metadata, function (ndx, mtdt) {
                                            if (mtdt.mask === maskTarget) return (maskTarget = mtdt), !1;
                                        }),
                                            maskTarget
                                    );
                                }
                                return maskset.metadata;
                        }
                };
            },
            function (module, exports, __webpack_require__) {
                'use strict';
                function _typeof(obj) {
                    return (
                        (_typeof =
                            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                ? function _typeof(obj) {
                                    return typeof obj;
                                }
                                : function _typeof(obj) {
                                    return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                                        ? 'symbol'
                                        : typeof obj;
                                }),
                            _typeof(obj)
                    );
                }
                var Inputmask = __webpack_require__(1),
                    $ = Inputmask.dependencyLib,
                    keyCode = __webpack_require__(0),
                    formatCode = {
                        d: ['[1-9]|[12][0-9]|3[01]', Date.prototype.setDate, 'day', Date.prototype.getDate],
                        dd: [
                            '0[1-9]|[12][0-9]|3[01]',
                            Date.prototype.setDate,
                            'day',
                            function () {
                                return pad(Date.prototype.getDate.call(this), 2);
                            },
                        ],
                        ddd: [''],
                        dddd: [''],
                        m: [
                            '[1-9]|1[012]',
                            Date.prototype.setMonth,
                            'month',
                            function () {
                                return Date.prototype.getMonth.call(this) + 1;
                            },
                        ],
                        mm: [
                            '0[1-9]|1[012]',
                            Date.prototype.setMonth,
                            'month',
                            function () {
                                return pad(Date.prototype.getMonth.call(this) + 1, 2);
                            },
                        ],
                        mmm: [''],
                        mmmm: [''],
                        yy: [
                            '[0-9]{2}',
                            Date.prototype.setFullYear,
                            'year',
                            function () {
                                return pad(Date.prototype.getFullYear.call(this), 2);
                            },
                        ],
                        yyyy: [
                            '[0-9]{4}',
                            Date.prototype.setFullYear,
                            'year',
                            function () {
                                return pad(Date.prototype.getFullYear.call(this), 4);
                            },
                        ],
                        h: ['[1-9]|1[0-2]', Date.prototype.setHours, 'hours', Date.prototype.getHours],
                        hh: [
                            '0[1-9]|1[0-2]',
                            Date.prototype.setHours,
                            'hours',
                            function () {
                                return pad(Date.prototype.getHours.call(this), 2);
                            },
                        ],
                        hx: [
                            function (x) {
                                return '[0-9]{'.concat(x, '}');
                            },
                            Date.prototype.setHours,
                            'hours',
                            function (x) {
                                return Date.prototype.getHours;
                            },
                        ],
                        H: ['1?[0-9]|2[0-3]', Date.prototype.setHours, 'hours', Date.prototype.getHours],
                        HH: [
                            '0[0-9]|1[0-9]|2[0-3]',
                            Date.prototype.setHours,
                            'hours',
                            function () {
                                return pad(Date.prototype.getHours.call(this), 2);
                            },
                        ],
                        Hx: [
                            function (x) {
                                return '[0-9]{'.concat(x, '}');
                            },
                            Date.prototype.setHours,
                            'hours',
                            function (x) {
                                return function () {
                                    return pad(Date.prototype.getHours.call(this), x);
                                };
                            },
                        ],
                        M: ['[1-5]?[0-9]', Date.prototype.setMinutes, 'minutes', Date.prototype.getMinutes],
                        MM: [
                            '0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]',
                            Date.prototype.setMinutes,
                            'minutes',
                            function () {
                                return pad(Date.prototype.getMinutes.call(this), 2);
                            },
                        ],
                        s: ['[1-5]?[0-9]', Date.prototype.setSeconds, 'seconds', Date.prototype.getSeconds],
                        ss: [
                            '0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]',
                            Date.prototype.setSeconds,
                            'seconds',
                            function () {
                                return pad(Date.prototype.getSeconds.call(this), 2);
                            },
                        ],
                        l: [
                            '[0-9]{3}',
                            Date.prototype.setMilliseconds,
                            'milliseconds',
                            function () {
                                return pad(Date.prototype.getMilliseconds.call(this), 3);
                            },
                        ],
                        L: [
                            '[0-9]{2}',
                            Date.prototype.setMilliseconds,
                            'milliseconds',
                            function () {
                                return pad(Date.prototype.getMilliseconds.call(this), 2);
                            },
                        ],
                        t: ['[ap]'],
                        tt: ['[ap]m'],
                        T: ['[AP]'],
                        TT: ['[AP]M'],
                        Z: [''],
                        o: [''],
                        S: [''],
                    },
                    formatAlias = {
                        isoDate: 'yyyy-mm-dd',
                        isoTime: 'HH:MM:ss',
                        isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                        isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
                    };
                function formatcode(match) {
                    var dynMatches = new RegExp('\\d+$').exec(match[0]);
                    if (dynMatches && void 0 !== dynMatches[0]) {
                        var fcode = formatCode[match[0][0] + 'x'].slice('');
                        return (fcode[0] = fcode[0](dynMatches[0])), (fcode[3] = fcode[3](dynMatches[0])), fcode;
                    }
                    if (formatCode[match[0]]) return formatCode[match[0]];
                }
                function getTokenizer(opts) {
                    if (!opts.tokenizer) {
                        var tokens = [],
                            dyntokens = [];
                        for (var ndx in formatCode)
                            if (/\.*x$/.test(ndx)) {
                                var dynToken = ndx[0] + '\\d+';
                                -1 === dyntokens.indexOf(dynToken) && dyntokens.push(dynToken);
                            } else -1 === tokens.indexOf(ndx[0]) && tokens.push(ndx[0]);
                        (opts.tokenizer =
                            '(' + (0 < dyntokens.length ? dyntokens.join('|') + '|' : '') + tokens.join('+|') + ')+?|.'),
                            (opts.tokenizer = new RegExp(opts.tokenizer, 'g'));
                    }
                    return opts.tokenizer;
                }
                function isValidDate(dateParts, currentResult) {
                    return (
                        (!isFinite(dateParts.rawday) ||
                            ('29' == dateParts.day && !isFinite(dateParts.rawyear)) ||
                            new Date(
                                dateParts.date.getFullYear(),
                                isFinite(dateParts.rawmonth) ? dateParts.month : dateParts.date.getMonth() + 1,
                                0
                            ).getDate() >= dateParts.day) &&
                        currentResult
                    );
                }
                function isDateInRange(dateParts, opts) {
                    var result = !0;
                    if (opts.min) {
                        if (dateParts.rawyear) {
                            var rawYear = dateParts.rawyear.replace(/[^0-9]/g, ''),
                                minYear = opts.min.year.substr(0, rawYear.length);
                            result = minYear <= rawYear;
                        }
                        dateParts.year === dateParts.rawyear &&
                        opts.min.date.getTime() == opts.min.date.getTime() &&
                        (result = opts.min.date.getTime() <= dateParts.date.getTime());
                    }
                    return (
                        result &&
                        opts.max &&
                        opts.max.date.getTime() == opts.max.date.getTime() &&
                        (result = opts.max.date.getTime() >= dateParts.date.getTime()),
                            result
                    );
                }
                function parse(format, dateObjValue, opts, raw) {
                    var mask = '',
                        match,
                        fcode;
                    for (getTokenizer(opts).lastIndex = 0; (match = getTokenizer(opts).exec(format)); )
                        if (void 0 === dateObjValue)
                            if ((fcode = formatcode(match))) mask += '(' + fcode[0] + ')';
                            else
                                switch (match[0]) {
                                    case '[':
                                        mask += '(';
                                        break;
                                    case ']':
                                        mask += ')?';
                                        break;
                                    default:
                                        mask += Inputmask.escapeRegex(match[0]);
                                }
                        else if ((fcode = formatcode(match)))
                            if (!0 !== raw && fcode[3]) {
                                var getFn = fcode[3];
                                mask += getFn.call(dateObjValue.date);
                            } else fcode[2] ? (mask += dateObjValue['raw' + fcode[2]]) : (mask += match[0]);
                        else mask += match[0];
                    return mask;
                }
                function pad(val, len) {
                    for (val = String(val), len = len || 2; val.length < len; ) val = '0' + val;
                    return val;
                }
                function analyseMask(maskString, format, opts) {
                    var dateObj = { date: new Date(1, 0, 1) },
                        targetProp,
                        mask = maskString,
                        match,
                        dateOperation;
                    function extendProperty(value) {
                        var correctedValue = value.replace(/[^0-9]/g, '0');
                        return correctedValue;
                    }
                    function setValue(dateObj, value, opts) {
                        (dateObj[targetProp] = extendProperty(value)),
                            (dateObj['raw' + targetProp] = value),
                        void 0 !== dateOperation &&
                        dateOperation.call(
                            dateObj.date,
                            'month' == targetProp ? parseInt(dateObj[targetProp]) - 1 : dateObj[targetProp]
                        );
                    }
                    if ('string' == typeof mask) {
                        for (getTokenizer(opts).lastIndex = 0; (match = getTokenizer(opts).exec(format)); ) {
                            var value = mask.slice(0, match[0].length);
                            formatCode.hasOwnProperty(match[0]) &&
                            ((targetProp = formatCode[match[0]][2]),
                                (dateOperation = formatCode[match[0]][1]),
                                setValue(dateObj, value, opts)),
                                (mask = mask.slice(value.length));
                        }
                        return dateObj;
                    }
                    if (mask && 'object' === _typeof(mask) && mask.hasOwnProperty('date')) return mask;
                }
                function importDate(dateObj, opts) {
                    var match,
                        date = '';
                    for (getTokenizer(opts).lastIndex = 0; (match = getTokenizer(opts).exec(opts.inputFormat)); )
                        'd' === match[0].charAt(0)
                            ? (date += pad(dateObj.getDate(), match[0].length))
                            : 'm' === match[0].charAt(0)
                                ? (date += pad(dateObj.getMonth() + 1, match[0].length))
                                : 'yyyy' === match[0]
                                    ? (date += dateObj.getFullYear().toString())
                                    : 'y' === match[0].charAt(0) && (date += pad(dateObj.getYear(), match[0].length));
                    return date;
                }
                function getTokenMatch(pos, opts) {
                    var calcPos = 0,
                        targetMatch,
                        match;
                    for (getTokenizer(opts).lastIndex = 0; (match = getTokenizer(opts).exec(opts.inputFormat)); )
                        if (((calcPos += match[0].length), pos <= calcPos)) {
                            (targetMatch = match), (match = getTokenizer(opts).exec(opts.inputFormat));
                            break;
                        }
                    return { nextMatch: match, targetMatch: targetMatch };
                }
                Inputmask.extendAliases({
                    datetime: {
                        mask: function mask(opts) {
                            return (
                                (opts.numericInput = !1),
                                    (formatCode.S = opts.i18n.ordinalSuffix.join('|')),
                                    (opts.inputFormat = formatAlias[opts.inputFormat] || opts.inputFormat),
                                    (opts.displayFormat = formatAlias[opts.displayFormat] || opts.displayFormat || opts.inputFormat),
                                    (opts.outputFormat = formatAlias[opts.outputFormat] || opts.outputFormat || opts.inputFormat),
                                    (opts.placeholder = '' !== opts.placeholder ? opts.placeholder : opts.inputFormat.replace(/[[\]]/, '')),
                                    (opts.regex = parse(opts.inputFormat, void 0, opts)),
                                    (opts.min = analyseMask(opts.min, opts.inputFormat, opts)),
                                    (opts.max = analyseMask(opts.max, opts.inputFormat, opts)),
                                    null
                            );
                        },
                        placeholder: '',
                        inputFormat: 'isoDateTime',
                        displayFormat: void 0,
                        outputFormat: void 0,
                        min: null,
                        max: null,
                        skipOptionalPartCharacter: '',
                        i18n: {
                            dayNames: [
                                'Mon',
                                'Tue',
                                'Wed',
                                'Thu',
                                'Fri',
                                'Sat',
                                'Sun',
                                'Monday',
                                'Tuesday',
                                'Wednesday',
                                'Thursday',
                                'Friday',
                                'Saturday',
                                'Sunday',
                            ],
                            monthNames: [
                                'Jan',
                                'Feb',
                                'Mar',
                                'Apr',
                                'May',
                                'Jun',
                                'Jul',
                                'Aug',
                                'Sep',
                                'Oct',
                                'Nov',
                                'Dec',
                                'January',
                                'February',
                                'March',
                                'April',
                                'May',
                                'June',
                                'July',
                                'August',
                                'September',
                                'October',
                                'November',
                                'December',
                            ],
                            ordinalSuffix: ['st', 'nd', 'rd', 'th'],
                        },
                        preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                            if (strict) return !0;
                            if (isNaN(c) && buffer[pos] !== c) {
                                var tokenMatch = getTokenMatch(pos, opts);
                                if (tokenMatch.nextMatch && tokenMatch.nextMatch[0] === c && 1 < tokenMatch.targetMatch[0].length) {
                                    var validator = formatCode[tokenMatch.targetMatch[0]][0];
                                    if (new RegExp(validator).test('0' + buffer[pos - 1]))
                                        return (
                                            (buffer[pos] = buffer[pos - 1]),
                                                (buffer[pos - 1] = '0'),
                                                { fuzzy: !0, buffer: buffer, refreshFromBuffer: { start: pos - 1, end: pos + 1 }, pos: pos + 1 }
                                        );
                                }
                            }
                            return !0;
                        },
                        postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
                            if (strict) return !0;
                            var tokenMatch;
                            if (!1 === currentResult) {
                                if (
                                    ((tokenMatch = getTokenMatch(pos + 1, opts)),
                                    tokenMatch.targetMatch &&
                                    tokenMatch.targetMatch.index === pos &&
                                    1 < tokenMatch.targetMatch[0].length &&
                                    void 0 !== formatCode[tokenMatch.targetMatch[0]])
                                ) {
                                    var validator = formatCode[tokenMatch.targetMatch[0]][0];
                                    if (new RegExp(validator).test('0' + c))
                                        return {
                                            insert: [
                                                { pos: pos, c: '0' },
                                                { pos: pos + 1, c: c },
                                            ],
                                            pos: pos + 1,
                                        };
                                }
                                return currentResult;
                            }
                            if (
                                (currentResult.fuzzy && ((buffer = currentResult.buffer), (pos = currentResult.pos)),
                                    (tokenMatch = getTokenMatch(pos, opts)),
                                tokenMatch.targetMatch && tokenMatch.targetMatch[0] && void 0 !== formatCode[tokenMatch.targetMatch[0]])
                            ) {
                                var validator = formatCode[tokenMatch.targetMatch[0]][0],
                                    part = buffer.slice(
                                        tokenMatch.targetMatch.index,
                                        tokenMatch.targetMatch.index + tokenMatch.targetMatch[0].length
                                    );
                                !1 === new RegExp(validator).test(part.join('')) &&
                                2 === tokenMatch.targetMatch[0].length &&
                                maskset.validPositions[tokenMatch.targetMatch.index] &&
                                maskset.validPositions[tokenMatch.targetMatch.index + 1] &&
                                (maskset.validPositions[tokenMatch.targetMatch.index + 1].input = '0');
                            }
                            var result = currentResult,
                                dateParts = analyseMask(buffer.join(''), opts.inputFormat, opts);
                            return (
                                result &&
                                dateParts.date.getTime() == dateParts.date.getTime() &&
                                ((result = isValidDate(dateParts, result)), (result = result && isDateInRange(dateParts, opts))),
                                    pos && result && currentResult.pos !== pos
                                        ? {
                                            buffer: parse(opts.inputFormat, dateParts, opts).split(''),
                                            refreshFromBuffer: { start: pos, end: currentResult.pos },
                                        }
                                        : result
                            );
                        },
                        onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                            var input = this;
                            e.ctrlKey &&
                            e.keyCode === keyCode.RIGHT &&
                            (this.inputmask._valueSet(importDate(new Date(), opts)), $(this).trigger('setvalue'));
                        },
                        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                            return unmaskedValue
                                ? parse(opts.outputFormat, analyseMask(maskedValue, opts.inputFormat, opts), opts, !0)
                                : unmaskedValue;
                        },
                        casing: function casing(elem, test, pos, validPositions) {
                            return 0 == test.nativeDef.indexOf('[ap]')
                                ? elem.toLowerCase()
                                : 0 == test.nativeDef.indexOf('[AP]')
                                    ? elem.toUpperCase()
                                    : elem;
                        },
                        onBeforeMask: function onBeforeMask(initialValue, opts) {
                            return (
                                '[object Date]' === Object.prototype.toString.call(initialValue) &&
                                (initialValue = importDate(initialValue, opts)),
                                    initialValue
                            );
                        },
                        insertMode: !1,
                        shiftPositions: !1,
                        keepStatic: !1,
                        inputmode: 'numeric',
                    },
                }),
                    (module.exports = Inputmask);
            },
            function (module, exports, __webpack_require__) {
                'use strict';
                var Inputmask = __webpack_require__(1),
                    $ = Inputmask.dependencyLib,
                    keyCode = __webpack_require__(0);
                function autoEscape(txt, opts) {
                    for (var escapedTxt = '', i = 0; i < txt.length; i++)
                        Inputmask.prototype.definitions[txt.charAt(i)] ||
                        opts.definitions[txt.charAt(i)] ||
                        opts.optionalmarker[0] === txt.charAt(i) ||
                        opts.optionalmarker[1] === txt.charAt(i) ||
                        opts.quantifiermarker[0] === txt.charAt(i) ||
                        opts.quantifiermarker[1] === txt.charAt(i) ||
                        opts.groupmarker[0] === txt.charAt(i) ||
                        opts.groupmarker[1] === txt.charAt(i) ||
                        opts.alternatormarker === txt.charAt(i)
                            ? (escapedTxt += '\\' + txt.charAt(i))
                            : (escapedTxt += txt.charAt(i));
                    return escapedTxt;
                }
                function alignDigits(buffer, digits, opts, force) {
                    if (0 < digits && (!opts.digitsOptional || force)) {
                        var radixPosition = $.inArray(opts.radixPoint, buffer);
                        -1 === radixPosition && (buffer.push(opts.radixPoint), (radixPosition = buffer.length - 1));
                        for (var i = 1; i <= digits; i++) isFinite(buffer[radixPosition + i]) || (buffer[radixPosition + i] = '0');
                    }
                    return buffer;
                }
                function findValidator(symbol, maskset) {
                    var posNdx = 0;
                    if ('+' === symbol) {
                        for (posNdx in maskset.validPositions);
                        posNdx = parseInt(posNdx);
                    }
                    for (var tstNdx in maskset.tests)
                        if (((tstNdx = parseInt(tstNdx)), posNdx <= tstNdx))
                            for (var ndx = 0, ndxl = maskset.tests[tstNdx].length; ndx < ndxl; ndx++)
                                if (
                                    (void 0 === maskset.validPositions[tstNdx] || '-' === symbol) &&
                                    maskset.tests[tstNdx][ndx].match.def === symbol
                                )
                                    return tstNdx + (void 0 !== maskset.validPositions[tstNdx] && '-' !== symbol ? 1 : 0);
                    return posNdx;
                }
                function findValid(symbol, maskset) {
                    var ret = -1;
                    return (
                        $.each(maskset.validPositions, function (ndx, tst) {
                            if (tst && tst.match.def === symbol) return (ret = parseInt(ndx)), !1;
                        }),
                            ret
                    );
                }
                function parseMinMaxOptions(opts) {
                    void 0 === opts.parseMinMaxOptions &&
                    (null !== opts.min &&
                    ((opts.min = opts.min
                        .toString()
                        .replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), 'g'), '')),
                    ',' === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, '.')),
                        (opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN),
                    isNaN(opts.min) && (opts.min = Number.MIN_VALUE)),
                    null !== opts.max &&
                    ((opts.max = opts.max
                        .toString()
                        .replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), 'g'), '')),
                    ',' === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, '.')),
                        (opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN),
                    isNaN(opts.max) && (opts.max = Number.MAX_VALUE)),
                        (opts.parseMinMaxOptions = 'done'));
                }
                function genMask(opts) {
                    (opts.repeat = 0),
                    opts.groupSeparator === opts.radixPoint &&
                    opts.digits &&
                    '0' !== opts.digits &&
                    ('.' === opts.radixPoint
                        ? (opts.groupSeparator = ',')
                        : ',' === opts.radixPoint
                            ? (opts.groupSeparator = '.')
                            : (opts.groupSeparator = '')),
                    ' ' === opts.groupSeparator && (opts.skipOptionalPartCharacter = void 0),
                    1 < opts.placeholder.length && (opts.placeholder = opts.placeholder.charAt(0)),
                    'radixFocus' === opts.positionCaretOnClick &&
                    '' === opts.placeholder &&
                    (opts.positionCaretOnClick = 'lvp');
                    var decimalDef = '0',
                        radixPointDef = opts.radixPoint;
                    !0 === opts.numericInput && void 0 === opts.__financeInput
                        ? ((decimalDef = '1'),
                            (opts.positionCaretOnClick =
                                'radixFocus' === opts.positionCaretOnClick ? 'lvp' : opts.positionCaretOnClick),
                            (opts.digitsOptional = !1),
                        isNaN(opts.digits) && (opts.digits = 2),
                            (opts._radixDance = !1),
                            (radixPointDef = ',' === opts.radixPoint ? '?' : '!'),
                        '' !== opts.radixPoint &&
                        void 0 === opts.definitions[radixPointDef] &&
                        ((opts.definitions[radixPointDef] = {}),
                            (opts.definitions[radixPointDef].validator = '[' + opts.radixPoint + ']'),
                            (opts.definitions[radixPointDef].placeholder = opts.radixPoint),
                            (opts.definitions[radixPointDef].static = !0),
                            (opts.definitions[radixPointDef].generated = !0)))
                        : ((opts.__financeInput = !1), (opts.numericInput = !0));
                    var mask = '[+]',
                        altMask;
                    if (
                        ((mask += autoEscape(opts.prefix, opts)),
                            '' !== opts.groupSeparator
                                ? (void 0 === opts.definitions[opts.groupSeparator] &&
                                ((opts.definitions[opts.groupSeparator] = {}),
                                    (opts.definitions[opts.groupSeparator].validator = '[' + opts.groupSeparator + ']'),
                                    (opts.definitions[opts.groupSeparator].placeholder = opts.groupSeparator),
                                    (opts.definitions[opts.groupSeparator].static = !0),
                                    (opts.definitions[opts.groupSeparator].generated = !0)),
                                    (mask += opts._mask(opts)))
                                : (mask += '9{+}'),
                        void 0 !== opts.digits && 0 !== opts.digits)
                    ) {
                        var dq = opts.digits.toString().split(',');
                        isFinite(dq[0]) && dq[1] && isFinite(dq[1])
                            ? (mask += radixPointDef + decimalDef + '{' + opts.digits + '}')
                            : (isNaN(opts.digits) || 0 < parseInt(opts.digits)) &&
                            (opts.digitsOptional
                                ? ((altMask = mask + radixPointDef + decimalDef + '{0,' + opts.digits + '}'), (opts.keepStatic = !0))
                                : (mask += radixPointDef + decimalDef + '{' + opts.digits + '}'));
                    }
                    return (
                        (mask += autoEscape(opts.suffix, opts)),
                            (mask += '[-]'),
                        altMask && (mask = [altMask + autoEscape(opts.suffix, opts) + '[-]', mask]),
                            (opts.greedy = !1),
                            parseMinMaxOptions(opts),
                            mask
                    );
                }
                function hanndleRadixDance(pos, c, radixPos, maskset, opts) {
                    return (
                        opts._radixDance &&
                        opts.numericInput &&
                        c !== opts.negationSymbol.back &&
                        pos <= radixPos &&
                        (0 < radixPos || c == opts.radixPoint) &&
                        (void 0 === maskset.validPositions[pos - 1] ||
                            maskset.validPositions[pos - 1].input !== opts.negationSymbol.back) &&
                        (pos -= 1),
                            pos
                    );
                }
                function decimalValidator(chrs, maskset, pos, strict, opts) {
                    var radixPos = maskset.buffer ? maskset.buffer.indexOf(opts.radixPoint) : -1,
                        result = -1 !== radixPos && new RegExp('[0-9\uff11-\uff19]').test(chrs);
                    return opts._radixDance && result && null == maskset.validPositions[radixPos]
                        ? { insert: { pos: radixPos === pos ? radixPos + 1 : radixPos, c: opts.radixPoint }, pos: pos }
                        : result;
                }
                function checkForLeadingZeroes(buffer, opts) {
                    var numberMatches = new RegExp(
                            '(^' +
                            ('' !== opts.negationSymbol.front ? Inputmask.escapeRegex(opts.negationSymbol.front) + '?' : '') +
                            Inputmask.escapeRegex(opts.prefix) +
                            ')(.*)(' +
                            Inputmask.escapeRegex(opts.suffix) +
                            ('' != opts.negationSymbol.back ? Inputmask.escapeRegex(opts.negationSymbol.back) + '?' : '') +
                            '$)'
                        ).exec(buffer.slice().reverse().join('')),
                        number = numberMatches ? numberMatches[2] : '',
                        leadingzeroes = !1;
                    return (
                        number &&
                        ((number = number.split(opts.radixPoint.charAt(0))[0]),
                            (leadingzeroes = new RegExp('^[0' + opts.groupSeparator + ']*').exec(number))),
                        !(
                            !leadingzeroes ||
                            !(1 < leadingzeroes[0].length || (0 < leadingzeroes[0].length && leadingzeroes[0].length < number.length))
                        ) && leadingzeroes
                    );
                }
                Inputmask.extendAliases({
                    numeric: {
                        mask: genMask,
                        _mask: function _mask(opts) {
                            return '(' + opts.groupSeparator + '999){+|1}';
                        },
                        digits: '*',
                        digitsOptional: !0,
                        enforceDigitsOnBlur: !1,
                        radixPoint: '.',
                        positionCaretOnClick: 'radixFocus',
                        _radixDance: !0,
                        groupSeparator: '',
                        allowMinus: !0,
                        negationSymbol: { front: '-', back: '' },
                        prefix: '',
                        suffix: '',
                        min: null,
                        max: null,
                        step: 1,
                        unmaskAsNumber: !1,
                        roundingFN: Math.round,
                        inputmode: 'numeric',
                        shortcuts: { k: '000', m: '000000' },
                        placeholder: '0',
                        greedy: !1,
                        rightAlign: !0,
                        insertMode: !0,
                        autoUnmask: !1,
                        skipOptionalPartCharacter: '',
                        definitions: {
                            0: { validator: decimalValidator },
                            1: { validator: decimalValidator, definitionSymbol: '9' },
                            '+': {
                                validator: function validator(chrs, maskset, pos, strict, opts) {
                                    return opts.allowMinus && ('-' === chrs || chrs === opts.negationSymbol.front);
                                },
                            },
                            '-': {
                                validator: function validator(chrs, maskset, pos, strict, opts) {
                                    return opts.allowMinus && chrs === opts.negationSymbol.back;
                                },
                            },
                        },
                        preValidation: function preValidation(buffer, pos, c, isSelection, opts, maskset, caretPos, strict) {
                            if (!1 !== opts.__financeInput && c === opts.radixPoint) return !1;
                            var pattern;
                            if ((pattern = opts.shortcuts && opts.shortcuts[c])) {
                                if (1 < pattern.length)
                                    for (var inserts = [], i = 0; i < pattern.length; i++)
                                        inserts.push({ pos: pos + i, c: pattern[i], strict: !1 });
                                return { insert: inserts };
                            }
                            var radixPos = $.inArray(opts.radixPoint, buffer),
                                initPos = pos;
                            if (
                                ((pos = hanndleRadixDance(pos, c, radixPos, maskset, opts)),
                                '-' === c || c === opts.negationSymbol.front)
                            ) {
                                if (!0 !== opts.allowMinus) return !1;
                                var isNegative = !1,
                                    front = findValid('+', maskset),
                                    back = findValid('-', maskset);
                                return (
                                    -1 !== front && (isNegative = [front, back]),
                                        !1 !== isNegative
                                            ? { remove: isNegative, caret: initPos }
                                            : {
                                                insert: [
                                                    { pos: findValidator('+', maskset), c: opts.negationSymbol.front, fromIsValid: !0 },
                                                    { pos: findValidator('-', maskset), c: opts.negationSymbol.back, fromIsValid: void 0 },
                                                ],
                                                caret: initPos + opts.negationSymbol.back.length,
                                            }
                                );
                            }
                            if (strict) return !0;
                            if (
                                -1 !== radixPos &&
                                !0 === opts._radixDance &&
                                !1 === isSelection &&
                                c === opts.radixPoint &&
                                void 0 !== opts.digits &&
                                (isNaN(opts.digits) || 0 < parseInt(opts.digits)) &&
                                radixPos !== pos
                            )
                                return { caret: opts._radixDance && pos === radixPos - 1 ? radixPos + 1 : radixPos };
                            if (!1 === opts.__financeInput)
                                if (isSelection) {
                                    if (opts.digitsOptional) return { rewritePosition: caretPos.end };
                                    if (!opts.digitsOptional) {
                                        if (caretPos.begin > radixPos && caretPos.end <= radixPos)
                                            return c === opts.radixPoint
                                                ? { insert: { pos: radixPos + 1, c: '0', fromIsValid: !0 }, rewritePosition: radixPos }
                                                : { rewritePosition: radixPos + 1 };
                                        if (caretPos.begin < radixPos) return { rewritePosition: caretPos.begin - 1 };
                                    }
                                } else if (
                                    !opts.showMaskOnHover &&
                                    !opts.showMaskOnFocus &&
                                    !opts.digitsOptional &&
                                    0 < opts.digits &&
                                    '' === this.inputmask.__valueGet.call(this)
                                )
                                    return { rewritePosition: radixPos };
                            return { rewritePosition: pos };
                        },
                        postValidation: function postValidation(buffer, pos, c, currentResult, opts, maskset, strict) {
                            if (!1 === currentResult) return currentResult;
                            if (strict) return !0;
                            if (null !== opts.min || null !== opts.max) {
                                var unmasked = opts.onUnMask(
                                    buffer.slice().reverse().join(''),
                                    void 0,
                                    $.extend({}, opts, { unmaskAsNumber: !0 })
                                );
                                if (
                                    null !== opts.min &&
                                    unmasked < opts.min &&
                                    (unmasked.toString().length >= opts.min.toString().length || unmasked < 0)
                                )
                                    return !1;
                                if (null !== opts.max && unmasked > opts.max) return !1;
                            }
                            return currentResult;
                        },
                        onUnMask: function onUnMask(maskedValue, unmaskedValue, opts) {
                            if ('' === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
                            var processValue = maskedValue.replace(opts.prefix, '');
                            return (
                                (processValue = processValue.replace(opts.suffix, '')),
                                    (processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), 'g'), '')),
                                '' !== opts.placeholder.charAt(0) &&
                                (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), 'g'), '0')),
                                    opts.unmaskAsNumber
                                        ? ('' !== opts.radixPoint &&
                                        -1 !== processValue.indexOf(opts.radixPoint) &&
                                        (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), '.')),
                                            (processValue = processValue.replace(
                                                new RegExp('^' + Inputmask.escapeRegex(opts.negationSymbol.front)),
                                                '-'
                                            )),
                                            (processValue = processValue.replace(
                                                new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + '$'),
                                                ''
                                            )),
                                            Number(processValue))
                                        : processValue
                            );
                        },
                        isComplete: function isComplete(buffer, opts) {
                            var maskedValue = (opts.numericInput ? buffer.slice().reverse() : buffer).join('');
                            return (
                                (maskedValue = maskedValue.replace(
                                    new RegExp('^' + Inputmask.escapeRegex(opts.negationSymbol.front)),
                                    '-'
                                )),
                                    (maskedValue = maskedValue.replace(
                                        new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + '$'),
                                        ''
                                    )),
                                    (maskedValue = maskedValue.replace(opts.prefix, '')),
                                    (maskedValue = maskedValue.replace(opts.suffix, '')),
                                    (maskedValue = maskedValue.replace(
                                        new RegExp(Inputmask.escapeRegex(opts.groupSeparator) + '([0-9]{3})', 'g'),
                                        '$1'
                                    )),
                                ',' === opts.radixPoint &&
                                (maskedValue = maskedValue.replace(Inputmask.escapeRegex(opts.radixPoint), '.')),
                                    isFinite(maskedValue)
                            );
                        },
                        onBeforeMask: function onBeforeMask(initialValue, opts) {
                            var radixPoint = opts.radixPoint || ',';
                            isFinite(opts.digits) && (opts.digits = parseInt(opts.digits)),
                            ('number' != typeof initialValue && 'number' !== opts.inputType) ||
                            '' === radixPoint ||
                            (initialValue = initialValue.toString().replace('.', radixPoint));
                            var valueParts = initialValue.split(radixPoint),
                                integerPart = valueParts[0].replace(/[^\-0-9]/g, ''),
                                decimalPart = 1 < valueParts.length ? valueParts[1].replace(/[^0-9]/g, '') : '',
                                forceDigits = 1 < valueParts.length;
                            initialValue = integerPart + ('' !== decimalPart ? radixPoint + decimalPart : decimalPart);
                            var digits = 0;
                            if (
                                '' !== radixPoint &&
                                ((digits = opts.digitsOptional
                                    ? opts.digits < decimalPart.length
                                        ? opts.digits
                                        : decimalPart.length
                                    : opts.digits),
                                '' !== decimalPart || !opts.digitsOptional)
                            ) {
                                var digitsFactor = Math.pow(10, digits || 1);
                                (initialValue = initialValue.replace(Inputmask.escapeRegex(radixPoint), '.')),
                                isFinite(initialValue) &&
                                (initialValue = (opts.roundingFN(parseFloat(initialValue) * digitsFactor) / digitsFactor).toFixed(
                                    digits
                                )),
                                    (initialValue = initialValue.toString().replace('.', radixPoint));
                            }
                            if (
                                (0 === opts.digits &&
                                -1 !== initialValue.indexOf(radixPoint) &&
                                (initialValue = initialValue.substring(0, initialValue.indexOf(radixPoint))),
                                null !== opts.min || null !== opts.max)
                            ) {
                                var numberValue = initialValue.toString().replace(radixPoint, '.');
                                null !== opts.min && numberValue < opts.min
                                    ? (initialValue = opts.min.toString().replace('.', radixPoint))
                                    : null !== opts.max &&
                                    numberValue > opts.max &&
                                    (initialValue = opts.max.toString().replace('.', radixPoint));
                            }
                            return alignDigits(initialValue.toString().split(''), digits, opts, forceDigits).join('');
                        },
                        onBeforeWrite: function onBeforeWrite(e, buffer, caretPos, opts) {
                            function stripBuffer(buffer, stripRadix) {
                                if (!1 !== opts.__financeInput || stripRadix) {
                                    var position = $.inArray(opts.radixPoint, buffer);
                                    -1 !== position && buffer.splice(position, 1);
                                }
                                if ('' !== opts.groupSeparator)
                                    for (; -1 !== (position = buffer.indexOf(opts.groupSeparator)); ) buffer.splice(position, 1);
                                return buffer;
                            }
                            var result,
                                leadingzeroes = checkForLeadingZeroes(buffer, opts);
                            if (leadingzeroes) {
                                var buf = buffer.slice().reverse(),
                                    caretNdx = buf.join('').indexOf(leadingzeroes[0]);
                                buf.splice(caretNdx, leadingzeroes[0].length);
                                var newCaretPos = buf.length - caretNdx;
                                stripBuffer(buf),
                                    (result = {
                                        refreshFromBuffer: !0,
                                        buffer: buf.reverse(),
                                        caret: caretPos < newCaretPos ? caretPos : newCaretPos,
                                    });
                            }
                            if (e)
                                switch (e.type) {
                                    case 'blur':
                                    case 'checkval':
                                        if (null !== opts.min) {
                                            var unmasked = opts.onUnMask(
                                                buffer.slice().reverse().join(''),
                                                void 0,
                                                $.extend({}, opts, { unmaskAsNumber: !0 })
                                            );
                                            if (null !== opts.min && unmasked < opts.min)
                                                return {
                                                    refreshFromBuffer: !0,
                                                    buffer: alignDigits(
                                                        opts.min.toString().replace('.', opts.radixPoint).split(''),
                                                        opts.digits,
                                                        opts
                                                    ).reverse(),
                                                };
                                        }
                                        if (buffer[buffer.length - 1] === opts.negationSymbol.front) {
                                            var nmbrMtchs = new RegExp(
                                                    '(^' +
                                                    ('' != opts.negationSymbol.front
                                                        ? Inputmask.escapeRegex(opts.negationSymbol.front) + '?'
                                                        : '') +
                                                    Inputmask.escapeRegex(opts.prefix) +
                                                    ')(.*)(' +
                                                    Inputmask.escapeRegex(opts.suffix) +
                                                    ('' != opts.negationSymbol.back
                                                        ? Inputmask.escapeRegex(opts.negationSymbol.back) + '?'
                                                        : '') +
                                                    '$)'
                                                ).exec(stripBuffer(buffer.slice(), !0).reverse().join('')),
                                                number = nmbrMtchs ? nmbrMtchs[2] : '';
                                            0 == number && (result = { refreshFromBuffer: !0, buffer: [0] });
                                        } else
                                            '' !== opts.radixPoint &&
                                            buffer[0] === opts.radixPoint &&
                                            (result && result.buffer
                                                ? result.buffer.shift()
                                                : (buffer.shift(), (result = { refreshFromBuffer: !0, buffer: stripBuffer(buffer) })));
                                        if (opts.enforceDigitsOnBlur) {
                                            result = result || {};
                                            var bffr = (result && result.buffer) || buffer.slice().reverse();
                                            (result.refreshFromBuffer = !0),
                                                (result.buffer = alignDigits(bffr, opts.digits, opts, !0).reverse());
                                        }
                                }
                            return result;
                        },
                        onKeyDown: function onKeyDown(e, buffer, caretPos, opts) {
                            var $input = $(this),
                                bffr;
                            if (e.ctrlKey)
                                switch (e.keyCode) {
                                    case keyCode.UP:
                                        return (
                                            this.inputmask.__valueSet.call(
                                                this,
                                                parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)
                                            ),
                                                $input.trigger('setvalue'),
                                                !1
                                        );
                                    case keyCode.DOWN:
                                        return (
                                            this.inputmask.__valueSet.call(
                                                this,
                                                parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)
                                            ),
                                                $input.trigger('setvalue'),
                                                !1
                                        );
                                }
                            if (
                                !e.shiftKey &&
                                (e.keyCode === keyCode.DELETE ||
                                    e.keyCode === keyCode.BACKSPACE ||
                                    e.keyCode === keyCode.BACKSPACE_SAFARI) &&
                                caretPos.begin !== buffer.length
                            ) {
                                if (
                                    buffer[e.keyCode === keyCode.DELETE ? caretPos.begin - 1 : caretPos.end] === opts.negationSymbol.front
                                )
                                    return (
                                        (bffr = buffer.slice().reverse()),
                                        '' !== opts.negationSymbol.front && bffr.shift(),
                                        '' !== opts.negationSymbol.back && bffr.pop(),
                                            $input.trigger('setvalue', [bffr.join(''), caretPos.begin]),
                                            !1
                                    );
                                if (!0 === opts._radixDance) {
                                    var radixPos = $.inArray(opts.radixPoint, buffer);
                                    if (opts.digitsOptional) {
                                        if (0 === radixPos)
                                            return (
                                                (bffr = buffer.slice().reverse()),
                                                    bffr.pop(),
                                                    $input.trigger('setvalue', [
                                                        bffr.join(''),
                                                        caretPos.begin >= bffr.length ? bffr.length : caretPos.begin,
                                                    ]),
                                                    !1
                                            );
                                    } else if (
                                        -1 !== radixPos &&
                                        (caretPos.begin < radixPos ||
                                            caretPos.end < radixPos ||
                                            (e.keyCode === keyCode.DELETE && caretPos.begin === radixPos))
                                    )
                                        return (
                                            caretPos.begin !== caretPos.end ||
                                            (e.keyCode !== keyCode.BACKSPACE && e.keyCode !== keyCode.BACKSPACE_SAFARI) ||
                                            caretPos.begin++,
                                                (bffr = buffer.slice().reverse()),
                                                bffr.splice(bffr.length - caretPos.begin, caretPos.begin - caretPos.end + 1),
                                                (bffr = alignDigits(bffr, opts.digits, opts).join('')),
                                                $input.trigger('setvalue', [bffr, caretPos.begin >= bffr.length ? radixPos + 1 : caretPos.begin]),
                                                !1
                                        );
                                }
                            }
                        },
                    },
                    currency: { prefix: '', groupSeparator: ',', alias: 'numeric', digits: 2, digitsOptional: !1 },
                    decimal: { alias: 'numeric' },
                    integer: { alias: 'numeric', digits: 0 },
                    percentage: { alias: 'numeric', min: 0, max: 100, suffix: ' %', digits: 0, allowMinus: !1 },
                    indianns: {
                        alias: 'numeric',
                        _mask: function _mask(opts) {
                            return '(' + opts.groupSeparator + '99){*|1}(' + opts.groupSeparator + '999){1|1}';
                        },
                        groupSeparator: ',',
                        radixPoint: '.',
                        placeholder: '0',
                        digits: 2,
                        digitsOptional: !1,
                    },
                }),
                    (module.exports = Inputmask);
            },
            function (module, exports, __webpack_require__) {
                'use strict';
                var _inputmask = _interopRequireDefault(__webpack_require__(1));
                function _typeof(obj) {
                    return (
                        (_typeof =
                            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                ? function _typeof(obj) {
                                    return typeof obj;
                                }
                                : function _typeof(obj) {
                                    return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
                                        ? 'symbol'
                                        : typeof obj;
                                }),
                            _typeof(obj)
                    );
                }
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
                }
                function _possibleConstructorReturn(self, call) {
                    return !call || ('object' !== _typeof(call) && 'function' != typeof call)
                        ? _assertThisInitialized(self)
                        : call;
                }
                function _assertThisInitialized(self) {
                    if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                }
                function _inherits(subClass, superClass) {
                    if ('function' != typeof superClass && null !== superClass)
                        throw new TypeError('Super expression must either be null or a function');
                    (subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: { value: subClass, writable: !0, configurable: !0 },
                    })),
                    superClass && _setPrototypeOf(subClass, superClass);
                }
                function _wrapNativeSuper(Class) {
                    var _cache = 'function' == typeof Map ? new Map() : void 0;
                    return (
                        (_wrapNativeSuper = function _wrapNativeSuper(Class) {
                            if (null === Class || !_isNativeFunction(Class)) return Class;
                            if ('function' != typeof Class) throw new TypeError('Super expression must either be null or a function');
                            if ('undefined' != typeof _cache) {
                                if (_cache.has(Class)) return _cache.get(Class);
                                _cache.set(Class, Wrapper);
                            }
                            function Wrapper() {
                                return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                            }
                            return (
                                (Wrapper.prototype = Object.create(Class.prototype, {
                                    constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 },
                                })),
                                    _setPrototypeOf(Wrapper, Class)
                            );
                        }),
                            _wrapNativeSuper(Class)
                    );
                }
                function isNativeReflectConstruct() {
                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function _construct(Parent, args, Class) {
                    return (
                        (_construct = isNativeReflectConstruct()
                            ? Reflect.construct
                            : function _construct(Parent, args, Class) {
                                var a = [null];
                                a.push.apply(a, args);
                                var Constructor = Function.bind.apply(Parent, a),
                                    instance = new Constructor();
                                return Class && _setPrototypeOf(instance, Class.prototype), instance;
                            }),
                            _construct.apply(null, arguments)
                    );
                }
                function _isNativeFunction(fn) {
                    return -1 !== Function.toString.call(fn).indexOf('[native code]');
                }
                function _setPrototypeOf(o, p) {
                    return (
                        (_setPrototypeOf =
                            Object.setPrototypeOf ||
                            function _setPrototypeOf(o, p) {
                                return (o.__proto__ = p), o;
                            }),
                            _setPrototypeOf(o, p)
                    );
                }
                function _getPrototypeOf(o) {
                    return (
                        (_getPrototypeOf = Object.setPrototypeOf
                            ? Object.getPrototypeOf
                            : function _getPrototypeOf(o) {
                                return o.__proto__ || Object.getPrototypeOf(o);
                            }),
                            _getPrototypeOf(o)
                    );
                }
                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }
                if (document.head.createShadowRoot || document.head.attachShadow) {
                    var InputmaskElement = (function (_HTMLElement) {
                        function InputmaskElement() {
                            var _this;
                            _classCallCheck(this, InputmaskElement),
                                (_this = _possibleConstructorReturn(this, _getPrototypeOf(InputmaskElement).call(this)));
                            var attributeNames = _this.getAttributeNames(),
                                shadow = _this.attachShadow({ mode: 'closed' }),
                                input = document.createElement('input');
                            for (var attr in ((input.type = 'text'), shadow.appendChild(input), attributeNames))
                                Object.prototype.hasOwnProperty.call(attributeNames, attr) &&
                                input.setAttribute(
                                    'data-inputmask-' + attributeNames[attr],
                                    _this.getAttribute(attributeNames[attr])
                                );
                            return new _inputmask.default().mask(input), (input.inputmask.shadowRoot = shadow), _this;
                        }
                        return _inherits(InputmaskElement, _HTMLElement), InputmaskElement;
                    })(_wrapNativeSuper(HTMLElement));
                    customElements.define('input-mask', InputmaskElement);
                }
            },
        ]),
            (installedModules = {}),
            (__webpack_require__.m = modules),
            (__webpack_require__.c = installedModules),
            (__webpack_require__.d = function (exports, name, getter) {
                __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, { enumerable: !0, get: getter });
            }),
            (__webpack_require__.r = function (exports) {
                'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' }),
                    Object.defineProperty(exports, '__esModule', { value: !0 });
            }),
            (__webpack_require__.t = function (value, mode) {
                if ((1 & mode && (value = __webpack_require__(value)), 8 & mode)) return value;
                if (4 & mode && 'object' == typeof value && value && value.__esModule) return value;
                var ns = Object.create(null);
                if (
                    (__webpack_require__.r(ns),
                        Object.defineProperty(ns, 'default', { enumerable: !0, value: value }),
                    2 & mode && 'string' != typeof value)
                )
                    for (var key in value)
                        __webpack_require__.d(
                            ns,
                            key,
                            function (key) {
                                return value[key];
                            }.bind(null, key)
                        );
                return ns;
            }),
            (__webpack_require__.n = function (module) {
                var getter =
                    module && module.__esModule
                        ? function getDefault() {
                            return module.default;
                        }
                        : function getModuleExports() {
                            return module;
                        };
                return __webpack_require__.d(getter, 'a', getter), getter;
            }),
            (__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            }),
            (__webpack_require__.p = ''),
            __webpack_require__((__webpack_require__.s = 5))
    );
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = (installedModules[moduleId] = { i: moduleId, l: !1, exports: {} });
        return (
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__),
                (module.l = !0),
                module.exports
        );
    }
    var modules, installedModules;
});
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}class n extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function l(e){void 0===e&&(e=[]);const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...l(e)):t.push(e)})),t}function o(e,t){return Array.prototype.filter.call(e,t)}function d(e,t){const s=r(),i=a();let l=[];if(!t&&e instanceof n)return e;if(!e)return new n(l);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=i.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)l.push(t.childNodes[e])}else l=function(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)l.push(e);else if(Array.isArray(e)){if(e instanceof n)return e;l=e}return new n(function(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(l))}d.fn=n.prototype;const c={addClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...a)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...a)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return o(this,(e=>a.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));this.forEach((e=>{a.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;function l(e){const t=e.target;if(!t)return;const s=e.target.dom7EventData||[];if(s.indexOf(e)<0&&s.unshift(e),d(t).is(i))r.apply(t,s);else{const e=d(t).parents();for(let t=0;t<e.length;t+=1)d(e[t]).is(i)&&r.apply(e[t],s)}}function o(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const c=a.split(" ");let p;for(let e=0;e<this.length;e+=1){const t=this[e];if(i)for(p=0;p<c.length;p+=1){const e=c[p];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:l}),t.addEventListener(e,l,n)}else for(p=0;p<c.length;p+=1){const e=c[p];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:o}),t.addEventListener(e,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const l=a.split(" ");for(let e=0;e<l.length;e+=1){const t=l[e];for(let e=0;e<this.length;e+=1){const s=this[e];let a;if(!i&&s.dom7Listeners?a=s.dom7Listeners[t]:i&&s.dom7LiveListeners&&(a=s.dom7LiveListeners[t]),a&&a.length)for(let e=a.length-1;e>=0;e-=1){const i=a[e];r&&i.listener===r||r&&i.listener&&i.listener.dom7proxy&&i.listener.dom7proxy===r?(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1)):r||(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1))}}}return this},trigger:function(){const e=r();for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];const i=s[0].split(" "),n=s[1];for(let t=0;t<i.length;t+=1){const a=i[t];for(let t=0;t<this.length;t+=1){const i=this[t];if(e.CustomEvent){const t=new e.CustomEvent(a,{detail:n,bubbles:!0,cancelable:!0});i.dom7EventData=s.filter(((e,t)=>t>0)),i.dispatchEvent(t),i.dom7EventData=[],delete i.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=a(),s=this[0],i=s.getBoundingClientRect(),n=t.body,l=s.clientTop||n.clientTop||0,o=s.clientLeft||n.clientLeft||0,d=s===e?e.scrollY:s.scrollTop,c=s===e?e.scrollX:s.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}return null},css:function(e,t){const s=r();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),s=a(),i=this[0];let l,o;if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(l=d(e),o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}if(e===s)return i===s;if(e===t)return i===t;if(e.nodeType||e instanceof n){for(l=e.nodeType?[e]:e,o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return d([]);if(e<0){const s=t+e;return d(s<0?[]:[this[s]])}return d([this[e]])},append:function(){let e;const t=a();for(let s=0;s<arguments.length;s+=1){e=s<0||arguments.length<=s?void 0:arguments[s];for(let s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e;a.firstChild;)this[s].appendChild(a.firstChild)}else if(e instanceof n)for(let t=0;t<e.length;t+=1)this[s].appendChild(e[t]);else this[s].appendChild(e)}return this},prepend:function(e){const t=a();let s,i;for(s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(a.childNodes[i],this[s].childNodes[0])}else if(e instanceof n)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&d(this[0].nextElementSibling).is(e)?d([this[0].nextElementSibling]):d([]):this[0].nextElementSibling?d([this[0].nextElementSibling]):d([]):d([])},nextAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&d(t.previousElementSibling).is(e)?d([t.previousElementSibling]):d([]):t.previousElementSibling?d([t.previousElementSibling]):d([])}return d([])},prevAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},parent:function(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?d(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return d(t)},parents:function(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?d(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return d(t)},closest:function(e){let t=this;return void 0===e?d([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return d(t)},children:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!d(a[s]).is(e)||t.push(a[s])}return d(t)},filter:function(e){return d(o(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function p(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function u(){return Date.now()}function h(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function m(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function g(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const a=s<0||arguments.length<=s?void 0:arguments[s];if(null!=a&&!f(a)){const s=Object.keys(Object(a)).filter((e=>t.indexOf(e)<0));for(let t=0,i=s.length;t<i;t+=1){const i=s[t],r=Object.getOwnPropertyDescriptor(a,i);void 0!==r&&r.enumerable&&(m(e[i])&&m(a[i])?a[i].__swiper__?e[i]=a[i]:g(e[i],a[i]):!m(e[i])&&m(a[i])?(e[i]={},a[i].__swiper__?e[i]=a[i]:g(e[i],a[i])):e[i]=a[i])}}}return e}function v(e,t,s){e.style.setProperty(t,s)}function w(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}let b,x,y;function E(){return b||(b=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),b}function C(e){return void 0===e&&(e={}),x||(x=function(e){let{userAgent:t}=void 0===e?{}:e;const s=E(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),h=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!m&&(l.os="android",l.android=!0),(p||h||u)&&(l.os="ios",l.ios=!0),l}(e)),x}function T(){return y||(y=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),y}Object.keys(c).forEach((e=>{Object.defineProperty(d.fn,e,{value:c[e],writable:!0})}));var $={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};var S={updateSize:function(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),p=o?e.virtual.slides.length:c.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let g=a.slidesOffsetAfter;"function"==typeof g&&(g=a.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=a.spaceBetween,y=-f,E=0,C=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*r),e.virtualSize=-x,n?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(v(e.wrapperEl,"--swiper-centered-offset-before",""),v(e.wrapperEl,"--swiper-centered-offset-after",""));const T=a.grid&&a.grid.rows>1&&e.grid;let $;T&&e.grid.initSlides(p);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<p;i+=1){$=0;const n=c.eq(i);if(T&&e.grid.updateSlide(i,n,p,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(c[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)$=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)$=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];$=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&($=Math.floor($))}else $=(r-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&($=Math.floor($)),c[i]&&(c[i].style[t("width")]=`${$}px`);c[i]&&(c[i].swiperSlideSize=$),m.push($),a.centeredSlides?(y=y+$/2+E/2+x,0===E&&0!==i&&(y=y-r/2-x),0===i&&(y=y-r/2-x),Math.abs(y)<.001&&(y=0),a.roundLengths&&(y=Math.floor(y)),C%a.slidesPerGroup==0&&u.push(y),h.push(y)):(a.roundLengths&&(y=Math.floor(y)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+$+x),e.virtualSize+=$+x,E=$,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+g,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),T&&e.grid.updateWrapperSize($,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");c.filter(((e,t)=>!a.cssMode||t!==c.length-1)).css({[s]:`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+g:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){v(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),v(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(p!==d&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),!(o||a.cssMode||"slide"!==a.effect&&"fade"!==a.effect)){const t=`${a.containerModifierClass}backface-hidden`,s=e.$el.hasClass(t);p<=a.maxBackfaceHiddenSlides?s||e.$el.addClass(t):s&&e.$el.removeClass(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||d([])).each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const l=a[e];let o=l.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(o-=a[0].swiperSlideOffset);const d=(n+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=-(n-o),u=p+t.slidesSizesGrid[e];(p>=0&&p<t.size-1||u>1&&u<=t.size||p<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),l.progress=i?-d:d,l.originalProgress=i?-c:c}t.visibleSlides=d(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,c=e;if(void 0===c){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?c=e:s>=a[e]&&s<a[e+1]&&(c=e+1):s>=a[e]&&(c=e);r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,c);d=e+Math.floor((c-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),c===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const p=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:d,realIndex:p,previousIndex:n,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=d(e).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(d(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var M={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=h(i[0],e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o,d=0,c=0;s.isHorizontal()?d=a?-e:e:c=e,i.roundLengths&&(d=Math.floor(d),c=Math.floor(c)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-c:i.virtualTranslate||r.transform(`translate3d(${d}px, ${c}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:c;const p=s.maxTranslate()-s.minTranslate();o=0===p?0:(e-s.minTranslate())/p,o!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}};function P(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var k={slideTo:function(e,t,s,a,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1);const v=-o[g];if(l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*v),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(n!==(c||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(v),b=n>p?"next":n<p?"prev":"reset",u&&-v===r.translate||!u&&v===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(v),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return n.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=c(o?a.translate:-a.translate),u=n.map((e=>c(e)));let h=n[u.indexOf(p)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{p>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;if(void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return a.slideTo(m,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var z={loopCreate:function(){const e=this,t=a(),{params:s,$wrapperEl:i}=e,r=i.children().length>0?d(i.children()[0].parentNode):i;r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let n=r.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-n.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let a=0;a<e;a+=1){const e=d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);r.append(e)}n=r.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=n.length);const l=[],o=[];n.each(((e,t)=>{d(e).attr("data-swiper-slide-index",t)}));for(let t=0;t<e.loopedSlides;t+=1){const e=t-Math.floor(t/n.length)*n.length;o.push(n.eq(e)[0]),l.unshift(n.eq(n.length-e-1)[0])}for(let e=0;e<o.length;e+=1)r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=l.length-1;e>=0;e-=1)r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}};function L(e){const t=this,s=a(),i=r(),n=t.touchEventsData,{params:l,touches:o,enabled:c}=t;if(!c)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=e;p.originalEvent&&(p=p.originalEvent);let h=d(p.target);if("wrapper"===l.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(n.isTouchEvent="touchstart"===p.type,!n.isTouchEvent&&"which"in p&&3===p.which)return;if(!n.isTouchEvent&&"button"in p&&p.button>0)return;if(n.isTouched&&n.isMoved)return;const m=!!l.noSwipingClass&&""!==l.noSwipingClass,f=e.composedPath?e.composedPath():e.path;m&&p.target&&p.target.shadowRoot&&f&&(h=d(f[0]));const g=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,v=!(!p.target||!p.target.shadowRoot);if(l.noSwiping&&(v?function(e,t){return void 0===t&&(t=this),function t(s){if(!s||s===a()||s===r())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(e);return i||s.getRootNode?i||t(s.getRootNode().host):null}(t)}(g,h[0]):h.closest(g)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!h.closest(l.swipeHandler)[0])return;o.currentX="touchstart"===p.type?p.targetTouches[0].pageX:p.pageX,o.currentY="touchstart"===p.type?p.targetTouches[0].pageY:p.pageY;const w=o.currentX,b=o.currentY,x=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,y=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(x&&(w<=y||w>=i.innerWidth-y)){if("prevent"!==x)return;e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=w,o.startY=b,n.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==p.type){let e=!0;h.is(n.focusableElements)&&(e=!1,"SELECT"===h[0].nodeName&&(n.isTouched=!1)),s.activeElement&&d(s.activeElement).is(n.focusableElements)&&s.activeElement!==h[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!a||h[0].isContentEditable||p.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",p)}function O(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=s;if(!o)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",c));if(i.isTouchEvent&&"touchmove"!==c.type)return;const p="touchmove"===c.type&&c.targetTouches&&(c.targetTouches[0]||c.changedTouches[0]),h="touchmove"===c.type?p.pageX:c.pageX,m="touchmove"===c.type?p.pageY:c.pageY;if(c.preventedByNestedSwiper)return n.startX=h,void(n.startY=m);if(!s.allowTouchMove)return d(c.target).is(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:h,startY:m,currentX:h,currentY:m}),i.touchStartTime=u()));if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<n.startX&&s.translate<=s.maxTranslate()||h>n.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&c.target===t.activeElement&&d(c.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;n.currentX=h,n.currentY=m;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",c),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",c)),s.emit("sliderMove",c),i.isMoved=!0;let v=s.isHorizontal()?f:g;n.diff=v,v*=r.touchRatio,l&&(v=-v),s.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0&&i.currentTranslate>s.minTranslate()?(w=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**b)):v<0&&i.currentTranslate<s.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**b)),w&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function I(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),c=d-s.touchStartTime;if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath();t.updateClickedSlide(e&&e[0]||o.target),t.emit("tap click",o),c<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(s.lastClickTime=u(),p((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let m=0,f=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?h>=n[e]&&h<n[e+t]&&(m=e,f=n[e+t]-n[e]):h>=n[e]&&(m=e,f=n[n.length-1]-n[n.length-2])}let g=null,v=null;a.rewind&&(t.isBeginning?v=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const w=(h-n[m])/f,b=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(c>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(w>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+b):t.slideTo(m)),"prev"===t.swipeDirection&&(w>1-a.longSwipesRatio?t.slideTo(m+b):null!==v&&w<0&&Math.abs(w)>a.longSwipesRatio?t.slideTo(v):t.slideTo(m))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(m+b):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(null!==g?g:m+b),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:m))}}function A(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function D(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function G(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let N=!1;function B(){}const H=(e,t)=>{const s=a(),{params:i,touchEvents:r,el:n,wrapperEl:l,device:o,support:d}=e,c=!!i.nested,p="on"===t?"addEventListener":"removeEventListener",u=t;if(d.touch){const t=!("touchstart"!==r.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};n[p](r.start,e.onTouchStart,t),n[p](r.move,e.onTouchMove,d.passiveListener?{passive:!1,capture:c}:c),n[p](r.end,e.onTouchEnd,t),r.cancel&&n[p](r.cancel,e.onTouchEnd,t)}else n[p](r.start,e.onTouchStart,!1),s[p](r.move,e.onTouchMove,c),s[p](r.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&n[p]("click",e.onClick,!0),i.cssMode&&l[p]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",A,!0):e[u]("observerUpdate",A,!0)};var X={attachEvents:function(){const e=this,t=a(),{params:s,support:i}=e;e.onTouchStart=L.bind(e),e.onTouchMove=O.bind(e),e.onTouchEnd=I.bind(e),s.cssMode&&(e.onScroll=G.bind(e)),e.onClick=D.bind(e),i.touch&&!N&&(t.addEventListener("touchstart",B),N=!0),H(e,"on")},detachEvents:function(){H(this,"off")}};const Y=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var R={addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}};var W={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function q(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),g(t,s)):g(t,s)):g(t,s)}}const j={eventsEmitter:$,update:S,translate:M,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),P({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),P({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:k,loop:z,grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:X,breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=Y(e,i),c=Y(e,o),p=i.enabled;d&&!c?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const s=i[t]&&i[t].enabled,a=o[t]&&o[t].enabled;s&&!a&&e[t].disable(),!s&&a&&e[t].enable()}));const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),g(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:R,images:{loadImage:function(e,t,s,a,i,n){const l=r();let o;function c(){n&&n()}d(e).parent("picture")[0]||e.complete&&i?c():t?(o=new l.Image,o.onload=c,o.onerror=c,a&&(o.sizes=a),s&&(o.srcset=s),t&&(o.src=t)):c()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}}},_={};class V{constructor(){let e,t;for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];if(1===a.length&&a[0].constructor&&"Object"===Object.prototype.toString.call(a[0]).slice(8,-1)?t=a[0]:[e,t]=a,t||(t={}),t=g({},t),e&&!t.el&&(t.el=e),t.el&&d(t.el).length>1){const e=[];return d(t.el).each((s=>{const a=g({},t,{el:s});e.push(new V(a))})),e}const r=this;r.__swiper__=!0,r.support=E(),r.device=C({userAgent:t.userAgent}),r.browser=T(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const n={};r.modules.forEach((e=>{e({swiper:r,extendParams:q(t,n),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const l=g({},W,n);return r.params=g({},l,_,t),r.originalParams=g({},r.params),r.passedParams=g({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach((e=>{r.on(e,r.params.on[e])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=d,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:d(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},r.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:u(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.$el.addClass(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.$el.removeClass(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;const s=d(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=d(e.shadowRoot.querySelector(i()));return t.children=e=>s.children(e),t}return s.children?s.children(i()):d(s).children(i())})();if(0===r.length&&t.params.createElements){const e=a().createElement("div");r=d(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){g(_,e)}static get extendedDefaults(){return _}static get defaults(){return W}static installModule(e){V.prototype.__modules__||(V.prototype.__modules__=[]);const t=V.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>V.installModule(e))),V):(V.installModule(e),V)}}function F(e,t,s,i){const r=a();return e.params.createElements&&Object.keys(i).forEach((a=>{if(!s[a]&&!0===s.auto){let n=e.$el.children(`.${i[a]}`)[0];n||(n=r.createElement("div"),n.className=i[a],e.$el.append(n)),s[a]=n,t[a]=n}})),s}function U(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function K(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function Z(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function Q(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function J(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function ee(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function te(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l,recreateShadows:o,getEffectParams:d}=e;let c;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("transitionEnd",(()=>{if(s.params.effect===t&&o){if(!d||!d().slideShadows)return;s.slides.each((e=>{s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()})),o()}})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(c=!0),requestAnimationFrame((()=>{c&&s.slides&&s.slides.length&&(i(),c=!1)})))}))}function se(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function ae(e){let{swiper:t,duration:s,transformEl:a,allSlides:i}=e;const{slides:r,activeIndex:n,$wrapperEl:l}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a?r.find(a):r:a?r.eq(n).find(a):r.eq(n),e.transitionEnd((()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=["webkitTransitionEnd","transitionend"];for(let t=0;t<e.length;t+=1)l.trigger(e[t])}))}}function ie(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(j).forEach((e=>{Object.keys(j[e]).forEach((t=>{V.prototype[t]=j[e][t]}))})),V.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,t){void 0===t&&(t={});const s=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(1===e.length)return void i("observerUpdate",e[0]);const t=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(t):l.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),n.push(s)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=t.$el.parents();for(let t=0;t<e.length;t+=1)o(e[t])}o(t.$el[0],{childList:t.params.observeSlideChildren}),o(t.$wrapperEl[0],{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const re=[function(e){let t,{swiper:s,extendParams:a,on:i,emit:r}=e;function n(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];const i=a.renderSlide?d(a.renderSlide.call(s,e,t)):d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",t),a.cache&&(s.virtual.cache[t]=i),i}function l(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:d,to:c,slides:p,slidesGrid:u,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const m=s.activeIndex||0;let f,g,v;f=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(g=Math.floor(t/2)+a+o,v=Math.floor(t/2)+a+l):(g=t+(a-1)+o,v=a+l);const w=Math.max((m||0)-v,0),b=Math.min((m||0)+g,p.length-1),x=(s.slidesGrid[w]||0)-(s.slidesGrid[0]||0);function y(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),s.lazy&&s.params.lazy.enabled&&s.lazy.load(),r("virtualUpdate")}if(Object.assign(s.virtual,{from:w,to:b,offset:x,slidesGrid:s.slidesGrid}),d===w&&c===b&&!e)return s.slidesGrid!==u&&x!==h&&s.slides.css(f,`${x}px`),s.updateProgress(),void r("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:w,to:b,slides:function(){const e=[];for(let t=w;t<=b;t+=1)e.push(p[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?y():r("virtualUpdate"));const E=[],C=[];if(e)s.$wrapperEl.find(`.${s.params.slideClass}`).remove();else for(let e=d;e<=c;e+=1)(e<w||e>b)&&s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();for(let t=0;t<p.length;t+=1)t>=w&&t<=b&&(void 0===c||e?C.push(t):(t>c&&C.push(t),t<d&&E.push(t)));C.forEach((e=>{s.$wrapperEl.append(n(p[e],e))})),E.sort(((e,t)=>t-e)).forEach((e=>{s.$wrapperEl.prepend(n(p[e],e))})),s.$wrapperEl.children(".swiper-slide").css(f,`${x}px`),y()}a({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},i("beforeInit",(()=>{s.params.virtual.enabled&&(s.virtual.slides=s.params.virtual.slides,s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,s.params.initialSlide||l())})),i("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{l()}),100)):l())})),i("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&v(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);l(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}l(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.virtual.slides.splice(e[a],1),s.params.virtual.cache&&delete s.virtual.cache[e[a]],e[a]<t&&(t-=1),t=Math.max(t,0);else s.virtual.slides.splice(e,1),s.params.virtual.cache&&delete s.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);l(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),l(!0),s.slideTo(0,0)},update:l})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function c(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,h=38===i,m=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&m||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||h||m)){let e=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&0===t.$el.parents(`.${t.params.slideActiveClass}`).length)return;const a=t.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=o.innerWidth,l=o.innerHeight,d=t.$el.offset();s&&(d.left-=t.$el[0].scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||m)&&t.slideNext(),(d||h)&&t.slidePrev()),n("keyPress",i)}}function p(){t.keyboard.enabled||(d(l).on("keydown",c),t.keyboard.enabled=!0)}function u(){t.keyboard.enabled&&(d(l).off("keydown",c),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&p()})),i("destroy",(()=>{t.keyboard.enabled&&u()})),Object.assign(t.keyboard,{enable:p,disable:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let l;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),t.mousewheel={enabled:!1};let o,c=u();const h=[];function m(){t.enabled&&(t.mouseEntered=!0)}function f(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&u()-c<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&u()-c<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),c=(new n.Date).getTime(),!1)))}function v(e){let s=e,a=!0;if(!t.enabled)return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(n=d(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!n[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let c=0;const m=t.rtlTranslate?-1:1,f=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(f.pixelX)>Math.abs(f.pixelY)))return!0;c=-f.pixelX*m}else{if(!(Math.abs(f.pixelY)>Math.abs(f.pixelX)))return!0;c=-f.pixelY}else c=Math.abs(f.pixelX)>Math.abs(f.pixelY)?-f.pixelX*m:-f.pixelY;if(0===c)return!0;r.invert&&(c=-c);let v=t.getTranslate()+c*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:u(),delta:Math.abs(c),direction:Math.sign(c)},a=o&&e.time<o.time+500&&e.delta<=o.delta&&e.direction===o.direction;if(!a){o=void 0,t.params.loop&&t.loopFix();let n=t.getTranslate()+c*r.sensitivity;const d=t.isBeginning,u=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!d&&t.isBeginning||!u&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeMode.sticky){clearTimeout(l),l=void 0,h.length>=15&&h.shift();const s=h.length?h[h.length-1]:void 0,a=h[0];if(h.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))h.splice(0);else if(h.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=c>0?.8:.2;o=e,h.splice(0),l=p((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}l||(l=p((()=>{o=e,h.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),n===t.minTranslate()||n===t.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(c),direction:Math.sign(c),raw:e};h.length>=2&&h.shift();const a=h.length?h[h.length-1]:void 0;if(h.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&g(s):g(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function w(e){let s=t.$el;"container"!==t.params.mousewheel.eventsTarget&&(s=d(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",f),s[e]("wheel",v)}function b(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",v),!0):!t.mousewheel.enabled&&(w("on"),t.mousewheel.enabled=!0,!0)}function x(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,v),!0):!!t.mousewheel.enabled&&(w("off"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&x(),t.params.mousewheel.enabled&&b()})),a("destroy",(()=>{t.params.cssMode&&b(),t.mousewheel.enabled&&x()})),Object.assign(t.mousewheel,{enable:b,disable:x})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;function r(e){let s;return e&&(s=d(e),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.$el.find(e).length&&(s=t.$el.find(e))),s}function n(e,s){const a=t.params.navigation;e&&e.length>0&&(e[s?"addClass":"removeClass"](a.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=s),t.params.watchOverflow&&t.enabled&&e[t.isLocked?"addClass":"removeClass"](a.lockClass))}function l(){if(t.params.loop)return;const{$nextEl:e,$prevEl:s}=t.navigation;n(s,t.isBeginning&&!t.params.rewind),n(e,t.isEnd&&!t.params.rewind)}function o(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const e=t.params.navigation;if(t.params.navigation=F(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;const s=r(e.nextEl),a=r(e.prevEl);s&&s.length>0&&s.on("click",c),a&&a.length>0&&a.on("click",o),Object.assign(t.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),t.enabled||(s&&s.addClass(e.lockClass),a&&a.addClass(e.lockClass))}function u(){const{$nextEl:e,$prevEl:s}=t.navigation;e&&e.length&&(e.off("click",c),e.removeClass(t.params.navigation.disabledClass)),s&&s.length&&(s.off("click",o),s.removeClass(t.params.navigation.disabledClass))}s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},a("init",(()=>{!1===t.params.navigation.enabled?h():(p(),l())})),a("toEdge fromEdge lock unlock",(()=>{l()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{const{$nextEl:e,$prevEl:s}=t.navigation;e&&e[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),s&&s[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)})),a("click",((e,s)=>{const{$nextEl:a,$prevEl:r}=t.navigation,n=s.target;if(t.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(a)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===n||t.pagination.el.contains(n)))return;let e;a?e=a.hasClass(t.params.navigation.hiddenClass):r&&(e=r.hasClass(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),a&&a.toggleClass(t.params.navigation.hiddenClass),r&&r.toggleClass(t.params.navigation.hiddenClass)}}));const h=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),u()};Object.assign(t.navigation,{enable:()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),p(),l()},disable:h,update:l,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let l=0;function o(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||0===t.pagination.$el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function p(){const e=t.rtl,s=t.params.pagination;if(o())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,r=t.pagination.$el;let p;const u=t.params.loop?Math.ceil((a-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(p=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),p>a-1-2*t.loopedSlides&&(p-=a-2*t.loopedSlides),p>u-1&&(p-=u),p<0&&"bullets"!==t.params.paginationType&&(p=u+p)):p=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const a=t.pagination.bullets;let i,o,u;if(s.dynamicBullets&&(n=a.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(t.isHorizontal()?"width":"height",n*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==t.previousIndex&&(l+=p-(t.previousIndex-t.loopedSlides||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),i=Math.max(p-l,0),o=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(o+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),r.length>1)a.each((e=>{const t=d(e),a=t.index();a===p&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=o&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&c(t,"prev"),a===o&&c(t,"next"))}));else{const e=a.eq(p),r=e.index();if(e.addClass(s.bulletActiveClass),s.dynamicBullets){const e=a.eq(i),n=a.eq(o);for(let e=i;e<=o;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(t.params.loop)if(r>=a.length){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else c(e,"prev"),c(n,"next");else c(e,"prev"),c(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),r=(n*i-n)/2-u*n,l=e?"right":"left";a.css(t.isHorizontal()?l:"top",`${r}px`)}}if("fraction"===s.type&&(r.find(U(s.currentClass)).text(s.formatFractionCurrent(p+1)),r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let e;e=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const a=(p+1)/u;let i=1,n=1;"horizontal"===e?i=a:n=a,r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)}"custom"===s.type&&s.renderCustom?(r.html(s.renderCustom(t,p+1,u)),i("paginationRender",r[0])):i("paginationUpdate",r[0]),t.params.watchOverflow&&t.enabled&&r[t.isLocked?"addClass":"removeClass"](s.lockClass)}function u(){const e=t.params.pagination;if(o())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,a=t.pagination.$el;let r="";if("bullets"===e.type){let i=t.params.loop?Math.ceil((s-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&i>s&&(i=s);for(let s=0;s<i;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;a.html(r),t.pagination.bullets=a.find(U(e.bulletClass))}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,a.html(r)),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`,a.html(r)),"custom"!==e.type&&i("paginationRender",t.pagination.$el[0])}function h(){t.params.pagination=F(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s=d(e.el);0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&s.length>1&&(s=t.$el.find(e.el),s.length>1&&(s=s.filter((e=>d(e).parents(".swiper")[0]===t.el)))),"bullets"===e.type&&e.clickable&&s.addClass(e.clickableClass),s.addClass(e.modifierClass+e.type),s.addClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.addClass(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.addClass(e.progressbarOppositeClass),e.clickable&&s.on("click",U(e.bulletClass),(function(e){e.preventDefault();let s=d(this).index()*t.params.slidesPerGroup;t.params.loop&&(s+=t.loopedSlides),t.slideTo(s)})),Object.assign(t.pagination,{$el:s,el:s[0]}),t.enabled||s.addClass(e.lockClass))}function m(){const e=t.params.pagination;if(o())return;const s=t.pagination.$el;s.removeClass(e.hiddenClass),s.removeClass(e.modifierClass+e.type),s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&s.off("click",U(e.bulletClass))}a("init",(()=>{!1===t.params.pagination.enabled?f():(h(),u(),p())})),a("activeIndexChange",(()=>{(t.params.loop||void 0===t.snapIndex)&&p()})),a("snapIndexChange",(()=>{t.params.loop||p()})),a("slidesLengthChange",(()=>{t.params.loop&&(u(),p())})),a("snapGridLengthChange",(()=>{t.params.loop||(u(),p())})),a("destroy",(()=>{m()})),a("enable disable",(()=>{const{$el:e}=t.pagination;e&&e[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)})),a("lock unlock",(()=>{p()})),a("click",((e,s)=>{const a=s.target,{$el:r}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!d(a).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r.hasClass(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.toggleClass(t.params.pagination.hiddenClass)}}));const f=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),m()};Object.assign(t.pagination,{enable:()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),h(),u(),p()},disable:f,render:u,update:p,init:h,destroy:m})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const n=a();let l,o,c,u,h=!1,m=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s,progress:a}=t,{$dragEl:i,$el:r}=e,n=t.params.scrollbar;let l=o,d=(c-o)*a;s?(d=-d,d>0?(l=o-d,d=0):-d+o>c&&(l=c+d)):d<0?(l=o+d,d=0):d+o>c&&(l=c-d),t.isHorizontal()?(i.transform(`translate3d(${d}px, 0, 0)`),i[0].style.width=`${l}px`):(i.transform(`translate3d(0px, ${d}px, 0)`),i[0].style.height=`${l}px`),n.hide&&(clearTimeout(m),r[0].style.opacity=1,m=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{$dragEl:s,$el:a}=e;s[0].style.width="",s[0].style.height="",c=t.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),o="auto"===t.params.scrollbar.dragSize?c*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s[0].style.width=`${o}px`:s[0].style.height=`${o}px`,a[0].style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a[0].style.opacity=0),t.params.watchOverflow&&t.enabled&&e.$el[t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}function w(e){return t.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY}function b(e){const{scrollbar:s,rtlTranslate:a}=t,{$el:i}=s;let r;r=(w(e)-i.offset()[t.isHorizontal()?"left":"top"]-(null!==l?l:o/2))/(c-o),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n,$dragEl:o}=a;h=!0,l=e.target===o[0]||e.target===o?w(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.transition(100),o.transition(100),b(e),clearTimeout(f),n.transition(0),s.hide&&n.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),r("scrollbarDragStart",e)}function y(e){const{scrollbar:s,$wrapperEl:a}=t,{$el:i,$dragEl:n}=s;h&&(e.preventDefault?e.preventDefault():e.returnValue=!1,b(e),a.transition(0),i.transition(0),n.transition(0),r("scrollbarDragMove",e))}function E(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n}=a;h&&(h=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),i.transition("")),s.hide&&(clearTimeout(f),f=p((()=>{n.css("opacity",0),n.transition(400)}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function C(e){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:r,support:l}=t,o=s.$el;if(!o)return;const d=o[0],c=!(!l.passiveListener||!r.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};if(!d)return;const u="on"===e?"addEventListener":"removeEventListener";l.touch?(d[u](a.start,x,c),d[u](a.move,y,c),d[u](a.end,E,p)):(d[u](i.start,x,c),n[u](i.move,y,c),n[u](i.end,E,p))}function T(){const{scrollbar:e,$el:s}=t;t.params.scrollbar=F(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i=d(a.el);t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el)),i.addClass(t.isHorizontal()?a.horizontalClass:a.verticalClass);let r=i.find(`.${t.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${t.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(e,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&C("on"),i&&i[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}function $(){const e=t.params.scrollbar,s=t.scrollbar.$el;s&&s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.params.scrollbar.el&&t.scrollbar.el&&C("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},i("init",(()=>{!1===t.params.scrollbar.enabled?S():(T(),v(),g())})),i("update resize observerUpdate lock unlock",(()=>{v()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)}(s)})),i("enable disable",(()=>{const{$el:e}=t.scrollbar;e&&e[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)})),i("destroy",(()=>{$()}));const S=()=>{t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),$()};Object.assign(t.scrollbar,{enable:()=>{t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),T(),v(),g()},disable:S,updateSize:v,setTranslate:g,init:T,destroy:$})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i=(e,s)=>{const{rtl:a}=t,i=d(e),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const c=i.attr("data-swiper-parallax-scale"),p=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):t.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=p){const e=p-(p-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==c)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=c-(c-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},r=()=>{const{$el:e,slides:s,progress:a,snapGrid:r}=t;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,a)})),s.each(((e,s)=>{let n=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(s/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,n)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&r()})),a("setTranslate",(()=>{t.params.parallax.enabled&&r()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{$el:s}=t;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{const s=d(t);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||e;0===e&&(a=0),s.transition(a)}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c,p=1,u=!1;const m={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function w(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function b(e){const s=t.support,a=t.params.zoom;if(o=!1,c=!1,!s.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;o=!0,m.scaleStart=w(e)}m.$slideEl&&m.$slideEl.length||(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`),0===m.$slideEl.length&&(m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`),m.maxRatio=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==m.$imageWrapEl.length)?(m.$imageEl&&m.$imageEl.transition(0),u=!0):m.$imageEl=void 0}function x(e){const s=t.support,a=t.params.zoom,i=t.zoom;if(!s.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;c=!0,m.scaleMove=w(e)}m.$imageEl&&0!==m.$imageEl.length?(s.gestures?i.scale=e.scale*p:i.scale=m.scaleMove/m.scaleStart*p,i.scale>m.maxRatio&&(i.scale=m.maxRatio-1+(i.scale-m.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===e.type&&b(e)}function y(e){const s=t.device,a=t.support,i=t.params.zoom,r=t.zoom;if(!a.gestures){if(!o||!c)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!s.android)return;o=!1,c=!1}m.$imageEl&&0!==m.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,m.maxRatio),i.minRatio),m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),p=r.scale,u=!1,1===r.scale&&(m.$slideEl=void 0))}function E(e){const s=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(t.allowClick=!1,!f.isTouched||!m.$slideEl)return;f.isMoved||(f.width=m.$imageEl[0].offsetWidth,f.height=m.$imageEl[0].offsetHeight,f.startX=h(m.$imageWrapEl[0],"x")||0,f.startY=h(m.$imageWrapEl[0],"y")||0,m.slideWidth=m.$slideEl[0].offsetWidth,m.slideHeight=m.$slideEl[0].offsetHeight,m.$imageWrapEl.transition(0));const a=f.width*s.scale,i=f.height*s.scale;if(!(a<m.slideWidth&&i<m.slideHeight)){if(f.minX=Math.min(m.slideWidth/2-a/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-i/2,0),f.maxY=-f.minY,f.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!f.isMoved&&!u){if(t.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x))return void(f.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y))return void(f.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),f.isMoved=!0,f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX,f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY,f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=f.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=f.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(f.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(f.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(f.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(f.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=f.touchesCurrent.x,g.prevPositionY=f.touchesCurrent.y,g.prevTime=Date.now(),m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}}function C(){const e=t.zoom;m.$slideEl&&t.previousIndex!==t.activeIndex&&(m.$imageEl&&m.$imageEl.transform("translate3d(0,0,0) scale(1)"),m.$imageWrapEl&&m.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,p=1,m.$slideEl=void 0,m.$imageEl=void 0,m.$imageWrapEl=void 0)}function T(e){const s=t.zoom,a=t.params.zoom;if(m.$slideEl||(e&&e.target&&(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`)),m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`)),!m.$imageEl||0===m.$imageEl.length||!m.$imageWrapEl||0===m.$imageWrapEl.length)return;let i,r,l,o,c,u,h,g,v,w,b,x,y,E,C,T,$,S;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===f.touchesStart.x&&e?(i="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,r="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(i=f.touchesStart.x,r=f.touchesStart.y),s.scale=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,p=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,e?($=m.$slideEl[0].offsetWidth,S=m.$slideEl[0].offsetHeight,l=m.$slideEl.offset().left+n.scrollX,o=m.$slideEl.offset().top+n.scrollY,c=l+$/2-i,u=o+S/2-r,v=m.$imageEl[0].offsetWidth,w=m.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),C=-y,T=-E,h=c*s.scale,g=u*s.scale,h<y&&(h=y),h>C&&(h=C),g<E&&(g=E),g>T&&(g=T)):(h=0,g=0),m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function $(){const e=t.zoom,s=t.params.zoom;m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex),m.$imageEl=m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${s.containerClass}`)),m.$imageEl&&0!==m.$imageEl.length&&m.$imageWrapEl&&0!==m.$imageWrapEl.length&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,p=1,m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),m.$slideEl.removeClass(`${s.zoomedSlideClass}`),m.$slideEl=void 0)}function S(e){const s=t.zoom;s.scale&&1!==s.scale?$():T(e)}function M(){const e=t.support;return{passiveListener:!("touchstart"!==t.touchEvents.start||!e.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!e.passiveListener||{passive:!1,capture:!0}}}function P(){return`.${t.params.slideClass}`}function k(e){const{passiveListener:s}=M(),a=P();t.$wrapperEl[e]("gesturestart",a,b,s),t.$wrapperEl[e]("gesturechange",a,x,s),t.$wrapperEl[e]("gestureend",a,y,s)}function z(){l||(l=!0,k("on"))}function L(){l&&(l=!1,k("off"))}function O(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const s=t.support,{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.on(t.touchEvents.start,z,a),t.$wrapperEl.on(t.touchEvents.end,L,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.on(t.touchEvents.start,r,b,a),t.$wrapperEl.on(t.touchEvents.move,r,x,i),t.$wrapperEl.on(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.on(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.on(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}function I(){const e=t.zoom;if(!e.enabled)return;const s=t.support;e.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.off(t.touchEvents.start,z,a),t.$wrapperEl.off(t.touchEvents.end,L,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.off(t.touchEvents.start,r,b,a),t.$wrapperEl.off(t.touchEvents.move,r,x,i),t.$wrapperEl.off(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.off(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.off(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=m.$imageEl?m.$imageEl[0]:void 0,s=m.$slideEl?m.$slideEl[0]:void 0;i("zoomChange",e,t,s)}v=e}}),a("init",(()=>{t.params.zoom.enabled&&O()})),a("destroy",(()=>{I()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;m.$imageEl&&0!==m.$imageEl.length&&(f.isTouched||(s.android&&e.cancelable&&e.preventDefault(),f.isTouched=!0,f.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(!f.isTouched||!f.isMoved)return f.isTouched=!1,void(f.isMoved=!1);f.isTouched=!1,f.isMoved=!1;let s=300,a=300;const i=g.x*s,r=f.currentX+i,n=g.y*a,l=f.currentY+n;0!==g.x&&(s=Math.abs((r-f.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-f.currentY)/g.y));const o=Math.max(s,a);f.currentX=r,f.currentY=l;const d=f.width*e.scale,c=f.height*e.scale;f.minX=Math.min(m.slideWidth/2-d/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-c/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&S(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&C()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&C()})),Object.assign(t.zoom,{enable:O,disable:I,in:T,out:$,toggle:S})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),t.lazy={};let n=!1,l=!1;function o(e,s){void 0===s&&(s=!0);const a=t.params.lazy;if(void 0===e)return;if(0===t.slides.length)return;const r=t.virtual&&t.params.virtual.enabled?t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`):t.slides.eq(e),n=r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||n.push(r[0]),0!==n.length&&n.each((e=>{const n=d(e);n.addClass(a.loadingClass);const l=n.attr("data-background"),c=n.attr("data-src"),p=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");t.loadImage(n[0],c||l,p,u,!1,(()=>{if(null!=t&&t&&(!t||t.params)&&!t.destroyed){if(l?(n.css("background-image",`url("${l}")`),n.removeAttr("data-background")):(p&&(n.attr("srcset",p),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),c&&(n.attr("src",c),n.removeAttr("data-src"))),n.addClass(a.loadedClass).removeClass(a.loadingClass),r.find(`.${a.preloaderClass}`).remove(),t.params.loop&&s){const e=r.attr("data-swiper-slide-index");if(r.hasClass(t.params.slideDuplicateClass)){o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(),!1)}else{o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(),!1)}}i("lazyImageReady",r[0],n[0]),t.params.autoHeight&&t.updateAutoHeight()}})),i("lazyImageLoad",r[0],n[0])}))}function c(){const{$wrapperEl:e,params:s,slides:a,activeIndex:i}=t,r=t.virtual&&s.virtual.enabled,n=s.lazy;let c=s.slidesPerView;function p(t){if(r){if(e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)return!0}else if(a[t])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===c&&(c=0),l||(l=!0),t.params.watchSlidesProgress)e.children(`.${s.slideVisibleClass}`).each((e=>{o(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(c>1)for(let e=i;e<i+c;e+=1)p(e)&&o(e);else o(i);if(n.loadPrevNext)if(c>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){const e=n.loadPrevNextAmount,t=Math.ceil(c),s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+t;e<s;e+=1)p(e)&&o(e);for(let e=r;e<i;e+=1)p(e)&&o(e)}else{const t=e.children(`.${s.slideNextClass}`);t.length>0&&o(u(t));const a=e.children(`.${s.slidePrevClass}`);a.length>0&&o(u(a))}}function p(){const e=r();if(!t||t.destroyed)return;const s=t.params.lazy.scrollingElement?d(t.params.lazy.scrollingElement):d(e),a=s[0]===e,i=a?e.innerWidth:s[0].offsetWidth,l=a?e.innerHeight:s[0].offsetHeight,o=t.$el.offset(),{rtlTranslate:u}=t;let h=!1;u&&(o.left-=t.$el[0].scrollLeft);const m=[[o.left,o.top],[o.left+t.width,o.top],[o.left,o.top+t.height],[o.left+t.width,o.top+t.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=i&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==t.touchEvents.start||!t.support.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};h?(c(),s.off("scroll",p,f)):n||(n=!0,s.on("scroll",p,f))}a("beforeInit",(()=>{t.params.lazy.enabled&&t.params.preloadImages&&(t.params.preloadImages=!1)})),a("init",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("scroll",(()=>{t.params.freeMode&&t.params.freeMode.enabled&&!t.params.freeMode.sticky&&c()})),a("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("transitionStart",(()=>{t.params.lazy.enabled&&(t.params.lazy.loadOnTransitionStart||!t.params.lazy.loadOnTransitionStart&&!l)&&(t.params.lazy.checkInView?p():c())})),a("transitionEnd",(()=>{t.params.lazy.enabled&&!t.params.lazy.loadOnTransitionStart&&(t.params.lazy.checkInView?p():c())})),a("slideChange",(()=>{const{lazy:e,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=t.params;e.enabled&&(s||a&&(i||0===r))&&c()})),a("destroy",(()=>{t.$el&&t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)})),Object.assign(t.lazy,{load:c,loadInSlide:o})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline||(t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid))}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&p((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===t.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function r(e){const t=i;0!==t.length&&(t.html(""),t.html(e))}function n(e){e.attr("tabIndex","0")}function l(e){e.attr("tabIndex","-1")}function o(e,t){e.attr("role",t)}function c(e,t){e.attr("aria-roledescription",t)}function p(e,t){e.attr("aria-label",t)}function u(e){e.attr("aria-disabled",!0)}function h(e){e.attr("aria-disabled",!1)}function m(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=d(e.target);t.navigation&&t.navigation.$nextEl&&a.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&a.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.is(U(t.params.pagination.bulletClass))&&a[0].click()}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function g(){return f()&&t.params.pagination.clickable}const v=(e,t,s)=>{n(e),"BUTTON"!==e[0].tagName&&(o(e,"button"),e.on("keydown",m)),p(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)},w=()=>{t.a11y.clicked=!0},b=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.destroyed||(t.a11y.clicked=!1)}))}))},x=e=>{if(t.a11y.clicked)return;const s=e.target.closest(`.${t.params.slideClass}`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(s),0))},y=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&c(d(t.slides),e.itemRoleDescriptionMessage),e.slideRole&&o(d(t.slides),e.slideRole);const s=t.params.loop?t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length:t.slides.length;e.slideLabelMessage&&t.slides.each(((a,i)=>{const r=d(a),n=t.params.loop?parseInt(r.attr("data-swiper-slide-index"),10):i;p(r,e.slideLabelMessage.replace(/\{\{index\}\}/,n+1).replace(/\{\{slidesLength\}\}/,s))}))},E=()=>{const e=t.params.a11y;t.$el.append(i);const s=t.$el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.$wrapperEl,r=e.id||a.attr("id")||`swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var n;const l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var o;let d,u;o=r,a.attr("id",o),function(e,t){e.attr("aria-live",t)}(a,l),y(),t.navigation&&t.navigation.$nextEl&&(d=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(u=t.navigation.$prevEl),d&&d.length&&v(d,r,e.nextSlideMessage),u&&u.length&&v(u,r,e.prevSlideMessage),g()&&t.pagination.$el.on("keydown",U(t.params.pagination.bulletClass),m),t.$el.on("focus",x,!0),t.$el.on("pointerdown",w,!0),t.$el.on("pointerup",b,!0)};a("beforeInit",(()=>{i=d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),a("afterInit",(()=>{t.params.a11y.enabled&&E()})),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&y()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{$nextEl:e,$prevEl:s}=t.navigation;s&&s.length>0&&(t.isBeginning?(u(s),l(s)):(h(s),n(s))),e&&e.length>0&&(t.isEnd?(u(e),l(e)):(h(e),n(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.each((s=>{const a=d(s);t.params.pagination.clickable&&(n(a),t.params.pagination.renderBullet||(o(a,"button"),p(a,e.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))),a.is(`.${t.params.pagination.bulletActiveClass}`)?a.attr("aria-current","true"):a.removeAttr("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){let e,s;i&&i.length>0&&i.remove(),t.navigation&&t.navigation.$nextEl&&(e=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(s=t.navigation.$prevEl),e&&e.off("keydown",m),s&&s.off("keydown",m),g()&&t.pagination.$el.off("keydown",U(t.params.pagination.bulletClass),m),t.$el.off("focus",x,!0),t.$el.off("pointerdown",w,!0),t.$el.off("pointerup",b,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides.eq(s);let d=l(o.attr("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e}/${d}`}else n.pathname.includes(e)||(d=`${e}/${d}`);t.params.history.keepQuery&&(d+=n.search);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides.eq(i);if(l(r.attr("data-history"))===s&&!r.hasClass(t.params.slideDuplicateClass)){const s=r.index();t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,n.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),(n.key||n.value)&&(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p))}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),c=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const p=()=>{i("hashChange");const e=o.location.hash.replace("#","");if(e!==t.slides.eq(t.activeIndex).attr("data-hash")){const s=t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();if(void 0===s)return;t.slideTo(s)}},u=()=>{if(l&&t.params.hashNavigation.enabled)if(t.params.hashNavigation.replaceState&&c.history&&c.history.replaceState)c.history.replaceState(null,null,`#${t.slides.eq(t.activeIndex).attr("data-hash")}`||""),i("hashSet");else{const e=t.slides.eq(t.activeIndex),s=e.attr("data-hash")||e.attr("data-history");o.location.hash=s||"",i("hashSet")}};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0;for(let a=0,i=t.slides.length;a<i;a+=1){const i=t.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===e&&!i.hasClass(t.params.slideDuplicateClass)){const e=i.index();t.slideTo(e,s,t.params.runCallbacksOnInit,!0)}}}t.params.hashNavigation.watchState&&d(c).on("hashchange",p)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d(c).off("hashchange",p)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&u()})),n("slideChange",(()=>{l&&t.params.cssMode&&u()}))},function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;function l(){if(!s.size)return s.autoplay.running=!1,void(s.autoplay.paused=!1);const e=s.slides.eq(s.activeIndex);let a=s.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(a=e.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(t),t=p((()=>{let e;s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),n("autoplay")):(e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.params.loop?(s.loopFix(),e=s.slideNext(s.params.speed,!0,!0),n("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(0,s.params.speed,!0,!0),n("autoplay")):(e=s.slideNext(s.params.speed,!0,!0),n("autoplay")),(s.params.cssMode&&s.autoplay.running||!1===e)&&l()}),a)}function o(){return void 0===t&&(!s.autoplay.running&&(s.autoplay.running=!0,n("autoplayStart"),l(),!0))}function d(){return!!s.autoplay.running&&(void 0!==t&&(t&&(clearTimeout(t),t=void 0),s.autoplay.running=!1,n("autoplayStop"),!0))}function c(e){s.autoplay.running&&(s.autoplay.paused||(t&&clearTimeout(t),s.autoplay.paused=!0,0!==e&&s.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].addEventListener(e,h)})):(s.autoplay.paused=!1,l())))}function u(){const e=a();"hidden"===e.visibilityState&&s.autoplay.running&&c(),"visible"===e.visibilityState&&s.autoplay.paused&&(l(),s.autoplay.paused=!1)}function h(e){s&&!s.destroyed&&s.$wrapperEl&&e.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)})),s.autoplay.paused=!1,s.autoplay.running?l():d())}function m(){s.params.autoplay.disableOnInteraction?d():(n("autoplayPause"),c()),["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)}))}function f(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,n("autoplayResume"),l())}s.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),r("init",(()=>{if(s.params.autoplay.enabled){o();a().addEventListener("visibilitychange",u),s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",m),s.$el.on("mouseleave",f))}})),r("beforeTransitionStart",((e,t,a)=>{s.autoplay.running&&(a||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(t):d())})),r("sliderFirstMove",(()=>{s.autoplay.running&&(s.params.autoplay.disableOnInteraction?d():c())})),r("touchEnd",(()=>{s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&l()})),r("destroy",(()=>{s.$el.off("mouseenter",m),s.$el.off("mouseleave",f),s.autoplay.running&&d();a().removeEventListener("visibilitychange",u)})),Object.assign(s.autoplay,{pause:c,run:l,start:o,stop:d})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,r=!1;function n(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&d(a).hasClass(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=e.params.loop?parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10):s,t.params.loop){let e=t.activeIndex;t.slides.eq(e).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,e=t.activeIndex);const s=t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-e<e-s?a:s}t.slideTo(i)}function l(){const{thumbs:e}=t.params;if(i)return!1;i=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),r=!0}return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",n),!0}function o(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView;let i=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),s.slides.removeClass(r),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<i;e+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(r);else for(let e=0;e<i;e+=1)s.slides.eq(t.realIndex+e).addClass(r);const n=t.params.thumbs.autoScrollOffset,l=n&&!s.params.loop;if(t.realIndex!==s.realIndex||l){let i,r,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const e=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();i=void 0===e?a:void 0===a?e:a-o==o-e?s.params.slidesPerGroup>1?a:o:a-o<o-e?a:e,r=t.activeIndex>t.previousIndex?"next":"prev"}else i=t.realIndex,r=i>t.previousIndex?"next":"prev";l&&(i+="next"===r?n:-1*n),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(i)<0&&(s.params.centeredSlides?i=i>o?i-Math.floor(a/2)+1:i+Math.floor(a/2)-1:i>o&&s.params.slidesPerGroup,s.slideTo(i,e?0:void 0))}}t.thumbs={swiper:null},a("beforeInit",(()=>{const{thumbs:e}=t.params;e&&e.swiper&&(l(),o(!0))})),a("slideChange update resize observerUpdate",(()=>{o()})),a("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),a("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&r&&e.destroy()})),Object.assign(t.thumbs,{init:l,update:o})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function(e){let{currentPos:s}=e;const{params:r,$wrapperEl:n,rtlTranslate:l,snapGrid:o,touchEventsData:d}=t,c=u()-d.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(d.velocities.length>1){const e=d.velocities.pop(),s=d.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||u()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,d.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let c=t.translate+s;l&&(c=-c);let p,h=!1;const m=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(c<t.maxTranslate())r.freeMode.momentumBounce?(c+t.maxTranslate()<-m&&(c=t.maxTranslate()-m),p=t.maxTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(c>t.minTranslate())r.freeMode.momentumBounce?(c-t.minTranslate()>m&&(c=t.minTranslate()+m),p=t.minTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<o.length;t+=1)if(o[t]>-c){e=t;break}c=Math.abs(o[e]-c)<Math.abs(o[e-1]-c)||"next"===t.swipeDirection?o[e]:o[e-1],c=-c}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-c-t.translate)/t.velocity):Math.abs((c-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-c:c)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&h?(t.updateProgress(p),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&d.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(p),n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(c),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(c),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||c>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,{swiper:i,extendParams:r}=e;r({grid:{rows:1,fill:"column"}}),i.grid={initSlides:e=>{const{slidesPerView:r}=i.params,{rows:n,fill:l}=i.params.grid;s=t/n,a=Math.floor(e/n),t=Math.floor(e/n)===e/n?e:Math.ceil(e/n)*n,"auto"!==r&&"row"===l&&(t=Math.max(t,r*n))},updateSlide:(e,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=i.params,{rows:c,fill:p}=i.params.grid;let u,h,m;if("row"===p&&o>1){const s=Math.floor(e/(o*c)),a=e-c*o*s,i=0===s?o:Math.min(Math.ceil((n-s*c*o)/c),o);m=Math.floor(a/i),h=a-m*i+s*o,u=h+m*t/c,r.css({"-webkit-order":u,order:u})}else"column"===p?(h=Math.floor(e/c),m=e-h*c,(h>a||h===a&&m===c-1)&&(m+=1,m>=c&&(m=0,h+=1))):(m=Math.floor(e/s),h=e-m*s);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(e,s,a)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=i.params,{rows:o}=i.params.grid;if(i.virtualSize=(e+r)*t,i.virtualSize=Math.ceil(i.virtualSize/o)-r,i.$wrapperEl.css({[a("width")]:`${i.virtualSize+r}px`}),n){s.splice(0,s.length);const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];l&&(a=Math.floor(a)),s[t]<i.virtualSize+s[0]&&e.push(a)}s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:K.bind(t),prependSlide:Z.bind(t),addSlide:Q.bind(t),removeSlide:J.bind(t),removeAllSlides:ee.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1,transformEl:null}}),te({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t,s=t.params.fadeEffect;for(let a=0;a<e.length;a+=1){const e=t.slides.eq(a);let i=-e[0].swiperSlideOffset;t.params.virtualTranslate||(i-=t.translate);let r=0;t.isHorizontal()||(r=i,i=0);const n=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e[0].progress),0):1+Math.min(Math.max(e[0].progress,-1),0);se(s,e).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:e=>{const{transformEl:s}=t.params.fadeEffect;(s?t.slides.find(s):t.slides).transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),i=s?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===a.length&&(a=d(`<div class="swiper-slide-shadow-${s?"left":"top"}"></div>`),e.append(a)),0===i.length&&(i=d(`<div class="swiper-slide-shadow-${s?"right":"bottom"}"></div>`),e.append(i)),a.length&&(a[0].style.opacity=Math.max(-t,0)),i.length&&(i[0].style.opacity=Math.max(t,0))};te({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{$el:e,$wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:c}=t,p=t.params.cubeEffect,u=t.isHorizontal(),h=t.virtual&&t.params.virtual.enabled;let m,f=0;p.shadow&&(u?(m=s.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),s.append(m)),m.css({height:`${r}px`})):(m=e.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),e.append(m))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;h&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let r=90*s,n=Math.floor(r/360);l&&(r=-r,n=Math.floor(-r/360));const d=Math.max(Math.min(t[0].progress,1),-1);let c=0,m=0,g=0;s%4==0?(c=4*-n*o,g=0):(s-1)%4==0?(c=0,g=4*-n*o):(s-2)%4==0?(c=o+4*n*o,g=o):(s-3)%4==0&&(c=-o,g=3*o+4*o*n),l&&(c=-c),u||(m=c,c=0);const v=`rotateX(${u?0:-r}deg) rotateY(${u?r:0}deg) translate3d(${c}px, ${m}px, ${g}px)`;d<=1&&d>-1&&(f=90*s+90*d,l&&(f=90*-s-90*d)),t.transform(v),p.slideShadows&&i(t,d,u)}if(s.css({"-webkit-transform-origin":`50% 50% -${o/2}px`,"transform-origin":`50% 50% -${o/2}px`}),p.shadow)if(u)m.transform(`translate3d(0px, ${r/2+p.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);else{const e=Math.abs(f)-90*Math.floor(Math.abs(f)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=p.shadowScale,a=p.shadowScale/t,i=p.shadowOffset;m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-90deg)`)}const g=c.isSafari||c.isWebView?-o/2:0;s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`),s[0].style.setProperty("--swiper-cube-translate-z",`${g}px`)},setTransition:e=>{const{$el:s,slides:a}=t;a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&s.find(".swiper-cube-shadow").transition(e)},recreateShadows:()=>{const e=t.isHorizontal();t.slides.each((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(d(t),s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});const i=(e,s,a)=>{let i=t.isHorizontal()?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),r=t.isHorizontal()?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===i.length&&(i=ie(a,e,t.isHorizontal()?"left":"top")),0===r.length&&(r=ie(a,e,t.isHorizontal()?"right":"bottom")),i.length&&(i[0].style.opacity=Math.max(-s,0)),r.length&&(r[0].style.opacity=Math.max(s,0))};te({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e.eq(r);let l=n[0].progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n[0].progress,1),-1));const o=n[0].swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),n[0].style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l,a);const h=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;se(a,n).transform(h)}},setTransition:e=>{const{transformEl:s}=t.params.flipEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),ae({swiper:t,duration:e,transformEl:s})},recreateShadows:()=>{const e=t.params.flipEffect;t.slides.each((s=>{const a=d(s);let r=a[0].progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s.progress,1),-1)),i(a,r,e)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),te({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s,p="function"==typeof r.modifier?r.modifier(l):l*r.modifier;let u=n?d*p:0,h=n?0:d*p,m=-c*Math.abs(p),f=r.stretch;"string"==typeof f&&-1!==f.indexOf("%")&&(f=parseFloat(r.stretch)/100*s);let g=n?0:f*p,v=n?f*p:0,w=1-(1-r.scale)*Math.abs(p);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(h)<.001&&(h=0),Math.abs(w)<.001&&(w=0);const b=`translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;if(se(r,t).transform(b),t[0].style.zIndex=1-Math.abs(Math.round(p)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=ie(r,t,n?"left":"top")),0===s.length&&(s=ie(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=p>0?p:0),s.length&&(s[0].style.opacity=-p>0?-p:0)}}},setTransition:e=>{const{transformEl:s}=t.params.coverflowEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;te({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,$wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${e}px))`)}for(let s=0;s<e.length;s+=1){const a=e.eq(s),o=a[0].progress,d=Math.min(Math.max(a[0].progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a[0].originalProgress,-r.limitProgress),r.limitProgress));const p=a[0].swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],h=[0,0,0];let m=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,m=!0):d>0&&(f=r.prev,m=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),h.forEach(((e,t)=>{h[t]=f.rotate[t]*Math.abs(d*n)})),a[0].style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,x=`translate3d(${g}) ${v} ${w}`;if(m&&f.shadow||!m){let e=a.children(".swiper-slide-shadow");if(0===e.length&&f.shadow&&(e=ie(r,a)),e.length){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const y=se(r,a);y.transform(x).css({opacity:b}),f.origin&&y.css("transform-origin",f.origin)}},setTransition:e=>{const{transformEl:s}=t.params.creativeEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),te({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s}=t,a=t.params.cardsEffect,{startTranslate:i,isTouched:r}=t.touchEventsData,n=t.translate;for(let l=0;l<e.length;l+=1){const o=e.eq(l),d=o[0].progress,c=Math.min(Math.max(d,-4),4);let p=o[0].swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(p-=e[0].swiperSlideOffset);let u=t.params.cssMode?-p-t.translate:-p,h=0;const m=-100*Math.abs(c);let f=1,g=-a.perSlideRotate*c,v=a.perSlideOffset-.75*Math.abs(c);const w=t.virtual&&t.params.virtual.enabled?t.virtual.from+l:l,b=(w===s||w===s-1)&&c>0&&c<1&&(r||t.params.cssMode)&&n<i,x=(w===s||w===s+1)&&c<0&&c>-1&&(r||t.params.cssMode)&&n>i;if(b||x){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!t.isHorizontal()){const e=h;h=u,u=e}const y=c<0?""+(1+(1-f)*c):""+(1-(1-f)*c),E=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${y})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=ie(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+e.length;se(a,o).transform(E)}},setTransition:e=>{const{transformEl:s}=t.params.cardsEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return V.use(re),V}));
//# sourceMappingURL=swiper-bundle.min.js.map
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).noUiSlider={})}(this,function(ot){"use strict";function n(t){return"object"==typeof t&&"function"==typeof t.to}function st(t){t.parentElement.removeChild(t)}function at(t){return null!=t}function lt(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function ut(t,e,r){0<r&&(ft(t,e),setTimeout(function(){dt(t,e)},r))}function ct(t){return Math.max(Math.min(t,100),0)}function pt(t){return Array.isArray(t)?t:[t]}function e(t){t=(t=String(t)).split(".");return 1<t.length?t[1].length:0}function ft(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function dt(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function ht(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:(r?t.documentElement:t.body).scrollLeft,y:e?window.pageYOffset:(r?t.documentElement:t.body).scrollTop}}function s(t,e){return 100/(e-t)}function a(t,e,r){return 100*e/(t[r+1]-t[r])}function l(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=l(r,t),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return t+(r=r,a(o=[i,o],o[0]<0?r+Math.abs(o[0]):r-o[0],0)/s(t,n))}function o(t,e,r,n){if(100===n)return n;var i=l(n,t),o=t[i-1],s=t[i];return r?(s-o)/2<n-o?s:o:e[i-1]?t[i-1]+(t=n-t[i-1],i=e[i-1],Math.round(t/i)*i):n}ot.PipsMode=void 0,(H=ot.PipsMode||(ot.PipsMode={})).Range="range",H.Steps="steps",H.Positions="positions",H.Count="count",H.Values="values",ot.PipsType=void 0,(H=ot.PipsType||(ot.PipsType={}))[H.None=-1]="None",H[H.NoValue=0]="NoValue",H[H.LargeValue=1]="LargeValue",H[H.SmallValue=2]="SmallValue";var u=(t.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=a(this.xVal,t,r);return e},t.prototype.getAbsoluteDistance=function(t,e,r){var n=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[n+1];)n++;else t===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||t!==this.xPct[n+1]||n++;for(var i,o=1,s=(e=null===e?[]:e)[n],a=0,l=0,u=0,c=r?(t-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-t)/(this.xPct[n+1]-this.xPct[n]);0<s;)i=this.xPct[n+1+u]-this.xPct[n+u],100<e[n+u]*o+100-100*c?(a=i*c,o=(s-100*c)/e[n+u],c=1):(a=e[n+u]*i/100*o,o=0),r?(l-=a,1<=this.xPct.length+u&&u--):(l+=a,1<=this.xPct.length-u&&u++),s=e[n+u]*o;return t+l},t.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n=l(r,e),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return(r-t)*s(t,n)*((o=[i,o])[1]-o[0])/100+o[0]}(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=o(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,r){var n=l(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},t.prototype.getNearbySteps=function(t){t=l(t,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){t="min"===t?0:"max"===t?100:parseFloat(t);if(!i(t)||!i(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(t),this.xVal.push(e[0]);e=Number(e[1]);t?this.xSteps.push(!isNaN(e)&&e):isNaN(e)||(this.xSteps[0]=e),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){e&&(this.xVal[t]!==this.xVal[t+1]?(this.xSteps[t]=a([this.xVal[t],this.xVal[t+1]],e,0)/s(this.xPct[t],this.xPct[t+1]),e=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],e=Math.ceil(Number(e.toFixed(3))-1),e=this.xVal[t]+this.xNumSteps[t]*e,this.xHighestCompleteStep[t]=e):this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t])},t);function t(e,t,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=t;var i=[];for(Object.keys(e).forEach(function(t){i.push([pt(e[t]),t])}),i.sort(function(t,e){return t[0][0]-e[0][0]}),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}var c={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},p={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},mt={tooltips:".__tooltips",aria:".__aria"};function f(t,e){if(!i(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function d(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function h(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function m(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function g(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new u(e,t.snap||!1,t.singleStep)}function v(t,e){if(e=pt(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function b(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function S(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function x(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function y(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function w(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function E(t,e){if(!i(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function P(t,e){if(!i(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function C(t,e){var r;if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],e=t.spectrum.xVal[0];if(1<n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-e))throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function N(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function V(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),s=0<=e.indexOf("hover"),a=0<=e.indexOf("unconstrained"),l=0<=e.indexOf("drag-all"),e=0<=e.indexOf("smooth-steps");if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");E(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,dragAll:l,smoothSteps:e,fixed:i,snap:o,hover:s,unconstrained:a}}function A(t,e){if(!1!==e)if(!0===e||n(e)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(e)}else{if((e=pt(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(t){if("boolean"!=typeof t&&!n(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function k(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function M(t,e){if(!n(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function U(t,e){if(!n(r=e)||"function"!=typeof r.from)throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");var r;t.format=e}function D(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function O(t,e){t.documentElement=e}function L(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function T(e,r){if("object"!=typeof r)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof e.cssPrefix?(e.cssClasses={},Object.keys(r).forEach(function(t){e.cssClasses[t]=e.cssPrefix+r[t]})):e.cssClasses=r}function gt(e){var r={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:c,format:c},n={step:{r:!1,t:f},keyboardPageMultiplier:{r:!1,t:d},keyboardMultiplier:{r:!1,t:h},keyboardDefaultStep:{r:!1,t:m},start:{r:!0,t:v},connect:{r:!0,t:y},direction:{r:!0,t:N},snap:{r:!1,t:b},animate:{r:!1,t:S},animationDuration:{r:!1,t:x},range:{r:!0,t:g},orientation:{r:!1,t:w},margin:{r:!1,t:E},limit:{r:!1,t:P},padding:{r:!1,t:C},behaviour:{r:!0,t:V},ariaFormat:{r:!1,t:M},format:{r:!1,t:U},tooltips:{r:!1,t:A},keyboardSupport:{r:!0,t:D},documentElement:{r:!1,t:O},cssPrefix:{r:!0,t:L},cssClasses:{r:!0,t:T},handleAttributes:{r:!1,t:k}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:p,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(at(e[t])||void 0!==i[t])n[t].t(r,(at(e[t])?e:i)[t]);else if(n[t].r)throw new Error("noUiSlider: '"+t+"' is required.")}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,t=void 0!==t.style.transform;r.transformRule=t?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function j(t,f,o){var i,l,a,n,s,u,c=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},p=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),d=t,S=f.spectrum,h=[],m=[],g=[],v=0,b={},x=t.ownerDocument,y=f.documentElement||x.documentElement,w=x.body,E="rtl"===x.dir||1===f.ort?0:100;function P(t,e){var r=x.createElement("div");return e&&ft(r,e),t.appendChild(r),r}function C(t,e){var r,t=P(t,f.cssClasses.origin),n=P(t,f.cssClasses.handle);return P(n,f.cssClasses.touchArea),n.setAttribute("data-handle",String(e)),f.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(V()||A(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],o=["Home","End"];f.dir&&!f.ort?r.reverse():f.ort&&!f.dir&&(n.reverse(),i.reverse());var s=t.key.replace("Arrow",""),a=s===i[0],l=s===i[1],i=s===n[0]||s===r[0]||a,n=s===n[1]||s===r[1]||l,r=s===o[0],o=s===o[1];if(!(i||n||r||o))return!0;if(t.preventDefault(),n||i){var u=i?0:1,u=nt(e)[u];if(null===u)return!1;!1===u&&(u=S.getDefaultStep(m[e],i,f.keyboardDefaultStep)),u*=l||a?f.keyboardPageMultiplier:f.keyboardMultiplier,u=Math.max(u,1e-7),u*=i?-1:1,u=h[e]+u}else u=o?f.spectrum.xVal[f.spectrum.xVal.length-1]:f.spectrum.xVal[0];return Q(e,S.toStepping(u),!0,!0),I("slide",e),I("update",e),I("change",e),I("set",e),!1}(t,e)})),void 0!==f.handleAttributes&&(r=f.handleAttributes[e],Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",f.ort?"vertical":"horizontal"),0===e?ft(n,f.cssClasses.handleLower):e===f.handles-1&&ft(n,f.cssClasses.handleUpper),t.handle=n,t}function N(t,e){return!!e&&P(t,f.cssClasses.connect)}function e(t,e){return!(!f.tooltips||!f.tooltips[e])&&P(t.firstChild,f.cssClasses.tooltip)}function V(){return d.hasAttribute("disabled")}function A(t){return l[t].hasAttribute("disabled")}function k(){s&&(Y("update"+mt.tooltips),s.forEach(function(t){t&&st(t)}),s=null)}function M(){k(),s=l.map(e),X("update"+mt.tooltips,function(t,e,r){s&&f.tooltips&&!1!==s[e]&&(t=t[e],!0!==f.tooltips[e]&&(t=f.tooltips[e].to(r[e])),s[e].innerHTML=t)})}function U(t,e){return t.map(function(t){return S.fromStepping(e?S.getStep(t):t)})}function D(d){var h=function(t){if(t.mode===ot.PipsMode.Range||t.mode===ot.PipsMode.Steps)return S.xVal;if(t.mode!==ot.PipsMode.Count)return t.mode===ot.PipsMode.Positions?U(t.values,t.stepped):t.mode===ot.PipsMode.Values?t.stepped?t.values.map(function(t){return S.fromStepping(S.getStep(S.toStepping(t)))}):t.values:[];if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var e=t.values-1,r=100/e,n=[];e--;)n[e]=e*r;return n.push(100),U(n,t.stepped)}(d),m={},t=S.xVal[0],e=S.xVal[S.xVal.length-1],g=!1,v=!1,b=0;return(h=h.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==t&&(h.unshift(t),g=!0),h[h.length-1]!==e&&(h.push(e),v=!0),h.forEach(function(t,e){var r,n,i,o,s,a,l,u,t=t,c=h[e+1],p=d.mode===ot.PipsMode.Steps,f=(f=p?S.xNumSteps[e]:f)||c-t;for(void 0===c&&(c=t),f=Math.max(f,1e-7),r=t;r<=c;r=Number((r+f).toFixed(7))){for(a=(o=(i=S.toStepping(r))-b)/(d.density||1),u=o/(l=Math.round(a)),n=1;n<=l;n+=1)m[(s=b+n*u).toFixed(5)]=[S.fromStepping(s),0];a=-1<h.indexOf(r)?ot.PipsType.LargeValue:p?ot.PipsType.SmallValue:ot.PipsType.NoValue,!e&&g&&r!==c&&(a=0),r===c&&v||(m[i.toFixed(5)]=[r,a]),b=i}}),m}function O(i,o,s){var t,a=x.createElement("div"),n=((t={})[ot.PipsType.None]="",t[ot.PipsType.NoValue]=f.cssClasses.valueNormal,t[ot.PipsType.LargeValue]=f.cssClasses.valueLarge,t[ot.PipsType.SmallValue]=f.cssClasses.valueSub,t),l=((t={})[ot.PipsType.None]="",t[ot.PipsType.NoValue]=f.cssClasses.markerNormal,t[ot.PipsType.LargeValue]=f.cssClasses.markerLarge,t[ot.PipsType.SmallValue]=f.cssClasses.markerSub,t),u=[f.cssClasses.valueHorizontal,f.cssClasses.valueVertical],c=[f.cssClasses.markerHorizontal,f.cssClasses.markerVertical];function p(t,e){var r=e===f.cssClasses.value;return e+" "+(r?u:c)[f.ort]+" "+(r?n:l)[t]}return ft(a,f.cssClasses.pips),ft(a,0===f.ort?f.cssClasses.pipsHorizontal:f.cssClasses.pipsVertical),Object.keys(i).forEach(function(t){var e,r,n;r=i[e=t][0],n=i[t][1],(n=o?o(r,n):n)!==ot.PipsType.None&&((t=P(a,!1)).className=p(n,f.cssClasses.marker),t.style[f.style]=e+"%",n>ot.PipsType.NoValue&&((t=P(a,!1)).className=p(n,f.cssClasses.value),t.setAttribute("data-value",String(r)),t.style[f.style]=e+"%",t.innerHTML=String(s.to(r))))}),a}function L(){n&&(st(n),n=null)}function T(t){L();var e=D(t),r=t.filter,t=t.format||{to:function(t){return String(Math.round(t))}};return n=d.appendChild(O(e,r,t))}function j(){var t=i.getBoundingClientRect(),e="offset"+["Width","Height"][f.ort];return 0===f.ort?t.width||i[e]:t.height||i[e]}function z(n,i,o,s){function e(t){var e,r=function(e,t,r){var n=0===e.type.indexOf("touch"),i=0===e.type.indexOf("mouse"),o=0===e.type.indexOf("pointer"),s=0,a=0;0===e.type.indexOf("MSPointer")&&(o=!0);if("mousedown"===e.type&&!e.buttons&&!e.touches)return!1;if(n){var l=function(t){t=t.target;return t===r||r.contains(t)||e.composed&&e.composedPath().shift()===r};if("touchstart"===e.type){n=Array.prototype.filter.call(e.touches,l);if(1<n.length)return!1;s=n[0].pageX,a=n[0].pageY}else{l=Array.prototype.find.call(e.changedTouches,l);if(!l)return!1;s=l.pageX,a=l.pageY}}t=t||ht(x),(i||o)&&(s=e.clientX+t.x,a=e.clientY+t.y);return e.pageOffset=t,e.points=[s,a],e.cursor=i||o,e}(t,s.pageOffset,s.target||i);return!!r&&(!(V()&&!s.doNotReject)&&(e=d,t=f.cssClasses.tap,!((e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className))&&!s.doNotReject)&&(!(n===c.start&&void 0!==r.buttons&&1<r.buttons)&&((!s.hover||!r.buttons)&&(p||r.preventDefault(),r.calcPoint=r.points[f.ort],void o(r,s))))))}var r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!p&&{passive:!0}),r.push([t,e])}),r}function H(t){var e,r,n=ct(n=100*(t-(n=i,e=f.ort,r=n.getBoundingClientRect(),n=(t=n.ownerDocument).documentElement,t=ht(t),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(t.x=0),e?r.top+t.y-n.clientTop:r.left+t.x-n.clientLeft))/j());return f.dir?100-n:n}function F(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&_(t,e)}function R(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return _(t,e);t=(f.dir?-1:1)*(t.calcPoint-e.startCalcPoint);G(0<t,100*t/e.baseSize,e.locations,e.handleNumbers,e.connect)}function _(t,e){e.handle&&(dt(e.handle,f.cssClasses.active),--v),e.listeners.forEach(function(t){y.removeEventListener(t[0],t[1])}),0===v&&(dt(d,f.cssClasses.drag),K(),t.cursor&&(w.style.cursor="",w.removeEventListener("selectstart",lt))),f.events.smoothSteps&&(e.handleNumbers.forEach(function(t){Q(t,m[t],!0,!0,!1,!1)}),e.handleNumbers.forEach(function(t){I("update",t)})),e.handleNumbers.forEach(function(t){I("change",t),I("set",t),I("end",t)})}function B(t,e){var r,n,i,o;e.handleNumbers.some(A)||(1===e.handleNumbers.length&&(o=l[e.handleNumbers[0]].children[0],v+=1,ft(o,f.cssClasses.active)),t.stopPropagation(),n=z(c.move,y,R,{target:t.target,handle:o,connect:e.connect,listeners:r=[],startCalcPoint:t.calcPoint,baseSize:j(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:m.slice()}),i=z(c.end,y,_,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),o=z("mouseout",y,F,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),r.push.apply(r,n.concat(i,o)),t.cursor&&(w.style.cursor=getComputedStyle(t.target).cursor,1<l.length&&ft(d,f.cssClasses.drag),w.addEventListener("selectstart",lt,!1)),e.handleNumbers.forEach(function(t){I("start",t)}))}function r(t){t.stopPropagation();var i,o,s,e=H(t.calcPoint),r=(i=e,s=!(o=100),l.forEach(function(t,e){var r,n;A(e)||(r=m[e],((n=Math.abs(r-i))<o||n<=o&&r<i||100===n&&100===o)&&(s=e,o=n))}),s);!1!==r&&(f.events.snap||ut(d,f.cssClasses.tap,f.animationDuration),Q(r,e,!0,!0),K(),I("slide",r,!0),I("update",r,!0),f.events.snap?B(t,{handleNumbers:[r]}):(I("change",r,!0),I("set",r,!0)))}function q(t){var t=H(t.calcPoint),t=S.getStep(t),e=S.fromStepping(t);Object.keys(b).forEach(function(t){"hover"===t.split(".")[0]&&b[t].forEach(function(t){t.call(it,e)})})}function X(t,e){b[t]=b[t]||[],b[t].push(e),"update"===t.split(".")[0]&&l.forEach(function(t,e){I("update",e)})}function Y(t){var n=t&&t.split(".")[0],i=n?t.substring(n.length):t;Object.keys(b).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||((e=r)!==mt.aria&&e!==mt.tooltips||i===r)&&delete b[t]})}function I(r,n,i){Object.keys(b).forEach(function(t){var e=t.split(".")[0];r===e&&b[t].forEach(function(t){t.call(it,h.map(f.format.to),n,h.slice(),i||!1,m.slice(),it)})})}function W(t,e,r,n,i,o,s){var a;return 1<l.length&&!f.events.unconstrained&&(n&&0<e&&(a=S.getAbsoluteDistance(t[e-1],f.margin,!1),r=Math.max(r,a)),i&&e<l.length-1&&(a=S.getAbsoluteDistance(t[e+1],f.margin,!0),r=Math.min(r,a))),1<l.length&&f.limit&&(n&&0<e&&(a=S.getAbsoluteDistance(t[e-1],f.limit,!1),r=Math.min(r,a)),i&&e<l.length-1&&(a=S.getAbsoluteDistance(t[e+1],f.limit,!0),r=Math.max(r,a))),f.padding&&(0===e&&(a=S.getAbsoluteDistance(0,f.padding[0],!1),r=Math.max(r,a)),e===l.length-1&&(a=S.getAbsoluteDistance(100,f.padding[1],!0),r=Math.min(r,a))),!((r=ct(r=!s?S.getStep(r):r))===t[e]&&!o)&&r}function $(t,e){var r=f.ort;return(r?e:t)+", "+(r?t:e)}function G(t,r,n,e,i){var o=n.slice(),s=e[0],a=f.events.smoothSteps,l=[!t,t],u=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){e=W(o,t,o[t]+r,l[e],u[e],!1,a);!1===e?r=0:(r=e-o[t],o[t]=e)}):l=u=[!0];var c=!1;e.forEach(function(t,e){c=Q(t,n[t]+r,l[e],u[e],!1,a)||c}),c&&(e.forEach(function(t){I("update",t),I("slide",t)}),null!=i&&I("drag",s))}function J(t,e){return f.dir?100-t-e:t}function K(){g.forEach(function(t){var e=50<m[t]?-1:1,e=3+(l.length+e*t);l[t].style.zIndex=String(e)})}function Q(t,e,r,n,i,o){return!1!==(e=i?e:W(m,t,e,r,n,!1,o))&&(e=e,m[t=t]=e,h[t]=S.fromStepping(e),e="translate("+$(J(e,0)-E+"%","0")+")",l[t].style[f.transformRule]=e,Z(t),Z(t+1),!0)}function Z(t){var e,r;a[t]&&(r=100,e="translate("+$(J(e=(e=0)!==t?m[t-1]:e,r=(r=t!==a.length-1?m[t]:r)-e)+"%","0")+")",r="scale("+$(r/100,"1")+")",a[t].style[f.transformRule]=e+" "+r)}function tt(t,e){return null===t||!1===t||void 0===t?m[e]:("number"==typeof t&&(t=String(t)),!1===(t=!1!==(t=f.format.from(t))?S.toStepping(t):t)||isNaN(t)?m[e]:t)}function et(t,e,r){var n=pt(t),t=void 0===m[0];e=void 0===e||e,f.animate&&!t&&ut(d,f.cssClasses.tap,f.animationDuration),g.forEach(function(t){Q(t,tt(n[t],t),!0,!1,r)});var i,o=1===g.length?0:1;for(t&&S.hasNoSize()&&(r=!0,m[0]=0,1<g.length&&(i=100/(g.length-1),g.forEach(function(t){m[t]=t*i})));o<g.length;++o)g.forEach(function(t){Q(t,m[t],!0,!0,r)});K(),g.forEach(function(t){I("update",t),null!==n[t]&&e&&I("set",t)})}function rt(t){if(t=void 0===t?!1:t)return 1===h.length?h[0]:h.slice(0);t=h.map(f.format.to);return 1===t.length?t[0]:t}function nt(t){var e=m[t],r=S.getNearbySteps(e),n=h[t],i=r.thisStep.step,t=null;if(f.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),t=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(t=null);e=S.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(e))),[t=null!==t&&!1!==t?Number(t.toFixed(e)):t,i]}ft(t=d,f.cssClasses.target),0===f.dir?ft(t,f.cssClasses.ltr):ft(t,f.cssClasses.rtl),0===f.ort?ft(t,f.cssClasses.horizontal):ft(t,f.cssClasses.vertical),ft(t,"rtl"===getComputedStyle(t).direction?f.cssClasses.textDirectionRtl:f.cssClasses.textDirectionLtr),i=P(t,f.cssClasses.base),function(t,e){var r=P(e,f.cssClasses.connects);l=[],(a=[]).push(N(r,t[0]));for(var n=0;n<f.handles;n++)l.push(C(e,n)),g[n]=n,a.push(N(r,t[n+1]))}(f.connect,i),(u=f.events).fixed||l.forEach(function(t,e){z(c.start,t.children[0],B,{handleNumbers:[e]})}),u.tap&&z(c.start,i,r,{}),u.hover&&z(c.move,i,q,{hover:!0}),u.drag&&a.forEach(function(e,t){var r,n,i,o,s;!1!==e&&0!==t&&t!==a.length-1&&(r=l[t-1],n=l[t],i=[e],o=[r,n],s=[t-1,t],ft(e,f.cssClasses.draggable),u.fixed&&(i.push(r.children[0]),i.push(n.children[0])),u.dragAll&&(o=l,s=g),i.forEach(function(t){z(c.start,t,B,{handles:o,handleNumbers:s,connect:e})}))}),et(f.start),f.pips&&T(f.pips),f.tooltips&&M(),Y("update"+mt.aria),X("update"+mt.aria,function(t,e,o,r,s){g.forEach(function(t){var e=l[t],r=W(m,t,0,!0,!0,!0),n=W(m,t,100,!0,!0,!0),i=s[t],t=String(f.ariaFormat.to(o[t])),r=S.fromStepping(r).toFixed(1),n=S.fromStepping(n).toFixed(1),i=S.fromStepping(i).toFixed(1);e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",t)})});var it={destroy:function(){for(Y(mt.aria),Y(mt.tooltips),Object.keys(f.cssClasses).forEach(function(t){dt(d,f.cssClasses[t])});d.firstChild;)d.removeChild(d.firstChild);delete d.noUiSlider},steps:function(){return g.map(nt)},on:X,off:Y,get:rt,set:et,setHandle:function(t,e,r,n){if(!(0<=(t=Number(t))&&t<g.length))throw new Error("noUiSlider: invalid handle number, got: "+t);Q(t,tt(e,t),!0,!0,n),I("update",t),r&&I("set",t)},reset:function(t){et(f.start,t)},disable:function(t){null!=t?(l[t].setAttribute("disabled",""),l[t].handle.removeAttribute("tabindex")):(d.setAttribute("disabled",""),l.forEach(function(t){t.handle.removeAttribute("tabindex")}))},enable:function(t){null!=t?(l[t].removeAttribute("disabled"),l[t].handle.setAttribute("tabindex","0")):(d.removeAttribute("disabled"),l.forEach(function(t){t.removeAttribute("disabled"),t.handle.setAttribute("tabindex","0")}))},__moveHandles:function(t,e,r){G(t,e,m,r)},options:o,updateOptions:function(e,t){var r=rt(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=gt(o);n.forEach(function(t){void 0!==e[t]&&(f[t]=i[t])}),S=i.spectrum,f.margin=i.margin,f.limit=i.limit,f.padding=i.padding,f.pips?T(f.pips):L(),(f.tooltips?M:k)(),m=[],et(at(e.start)?e.start:r,t)},target:d,removePips:L,removeTooltips:k,getPositions:function(){return m.slice()},getTooltips:function(){return s},getOrigins:function(){return l},pips:T};return it}function z(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");e=j(t,gt(e),e);return t.noUiSlider=e}var H={__spectrum:u,cssClasses:p,create:z};ot.create=z,ot.cssClasses=p,ot.default=H,Object.defineProperty(ot,"__esModule",{value:!0})});
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100 / 375) * (0.1 * $(window).width()) * rem;
    }
};

const swiperSettings = (init, ...payload) => ({
    loop: true,
    speed: 1200,
    keyboard: {
        enabled: true
    },
    pagination: {
        el: `.${init}-pagination`,
        clickable: true
    },
    navigation: {
        nextEl: `.${init}-next`,
        prevEl: `.${init}-prev`
    },
    on: {
        init: ({ slides, loopedSlides }) => {
            const totalSlidesLength = slides.length - loopedSlides * 2;
            const selector = document.querySelector(`.${init}-length-slides`);

            selector.textContent = totalSlidesLength.toString().padStart('2', 0);
        },
        slideChange: ({ realIndex }) => {
            $(`.${init}-current-slide`).text(String(realIndex + 1).padStart(2, '0'));
        }
    },
    ...payload
});

new Swiper('.hero__swiper', {
    grabCursor: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    ...swiperSettings('hero')
});

new Swiper('.categories__swiper', {
    spaceBetween: rem(3),
    slidesPerView: 1,
    ...swiperSettings('categories')
});

new Swiper('.brands__swiper', {
    slidesPerView: 1,
    grabCursor: true,
    centeredSlides: true,
    speed: 1200,
    loop: true,
    pagination: {
        el: `.brands-pagination`,
        clickable: true
    },
    navigation: {
        nextEl: `.brands-next`,
        prevEl: `.brands-prev`
    },
    on: {
        init: ({ slides, loopedSlides }) => {
            const totalSlidesLength = slides.length - loopedSlides * 2;
            const selector = document.querySelector(`.brands-length-slides`);

            selector.textContent = totalSlidesLength.toString().padStart('2', 0);
        },
        slideChange: ({ realIndex }) => {
            $(`.brands-current-slide`).text(String(realIndex + 1).padStart(2, '0'));
        }
    },
});

new Swiper('.brands__swiper-mobile', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    speed: 1200,
    pagination: {
        el: `.brands-mobile-pagination`,
        clickable: true
    },
    navigation: {
        nextEl: `.brands-mobile-next`,
        prevEl: `.brands-mobile-prev`
    },
    on: {
        init: ({ slides, loopedSlides }) => {
            const totalSlidesLength = slides.length - loopedSlides * 2;
            const selector = document.querySelector(`.brands-mobile-length-slides`);

            selector.textContent = totalSlidesLength.toString().padStart('2', 0);
        },
        slideChange: ({ realIndex }) => {
            $(`.brands-mobile-current-slide`).text(String(realIndex + 1).padStart(2, '0'));
        }
    },
});

new Swiper('.shares__swiper', {
    ...swiperSettings('shares'),
    spaceBetween: rem(3),
    slidesPerView: 1,
    grabCursor: true,
    speed: 700
});

new Swiper('.shares-categories__swiper', {
    slidesPerView: 'auto',
    grabCursor: true,
    speed: 1200,
    navigation: {
        nextEl: `.shares-categories-next`,
        prevEl: `.shares-categories-prev`
    }
});

new Swiper('.leaders__swiper', {
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    spaceBetween: rem(3),
    ...swiperSettings('leaders')
});

new Swiper('.novelties__swiper', {
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    spaceBetween: rem(3),
    ...swiperSettings('novelties')
});

document.querySelector('.our-services__swiper');
const swiper = new Swiper('.our-services__swiper', {
    spaceBetween: rem(4),
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    ...swiperSettings('our-services')
});

new Swiper('.showroom__swiper', {
    spaceBetween: rem(4),
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    ...swiperSettings('showroom')
});

new Swiper('.interested__swiper', {
    spaceBetween: rem(4),
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    ...swiperSettings('interested')
});

new Swiper('.service-products__swiper', {
    spaceBetween: rem(4),
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    ...swiperSettings('service-products')
});

new Swiper('.usable-materials__swiper', {
    spaceBetween: rem(4),
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    ...swiperSettings('usable-materials')
});

new Swiper('.project__swiper', {
    slidesPerView: 1.5,
    grabCursor: true,
    speed: 700,
    breakpoints: {
        1: {
            spaceBetween: rem(1)
        },
        768: {
            spaceBetween: rem(3)
        }
    },
    ...swiperSettings('project')
});

new Swiper('.related-products__swiper', {
    spaceBetween: rem(4),
    slidesPerView: 1,
    grabCursor: true,
    speed: 700,
    ...swiperSettings('related-products')
});

const feedbackSlider = new Swiper('.feedback__swiper', {
    slidesPerView: 1,
    speed: 1200,
    loop: true,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

const swiperFeedbackImages = new Swiper('.feedback-list__swiper', {
    slidesPerView: 3,
    speed: 1200,
    allowTouchMove: false,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    thumbs: {
        swiper: feedbackSlider
    },
    navigation: {
        nextEl: `.feedback-next`,
        prevEl: `.feedback-prev`
    }
});

const productSlider = new Swiper('.product__slider-thumb__swiper', {
    spaceBetween: rem(3),
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    grabCursor: true
});
const productSliderThumb = new Swiper('.product__slider__swiper', {
    spaceBetween: rem(1),
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    keyboard: {
        enabled: true
    },
    thumbs: {
        swiper: productSlider
    }
});


// Custom scripts
function isMobile() {
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobileRegex.test(navigator.userAgent);
}

function isMatchMedia(matcher = 48) {
    return window.matchMedia(`(max-width: ${rem(matcher)}px)`).matches;
}

$('.burger-entry').on('click', function () {
    $('.header__burger-menu').addClass('--active');
    $('body').addClass('locked');
});

$('.header__burger-close').on('click', function () {
    $('.header__burger-menu').removeClass('--active');
    $('body').removeClass('locked');
});

function bindModal(trigger, modal, close, callback = () => null) {
    (modal = document.querySelector(modal)), (close = document.querySelector(close));

    const body = document.body;
    const modalBody = modal.querySelector('.modal');

    if (!$(trigger) || !modal || !close || !modalBody) return;

    $(trigger).each(function () {
        $(this).on('click', (e) => {
            e.preventDefault();
            modal.classList.add('--active');
            modalBody.classList.add('--active');
            body.classList.add('locked');
        });
    });
    $(close).on('click', () => {
        modalBody.classList.remove('--active');
        modal.classList.remove('--active');
        body.classList.remove('locked');
    });
    $(modal).on('click', (e) => {
        if (e.target === modal) {
            modalBody.classList.remove('--active');
            modal.classList.remove('--active');
            body.classList.remove('locked');
        }
    });

    callback();
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal('.request-button', '#request-modal', '#request-modal .modal__close');
bindModal(
    '.request-success-button',
    '#request-modal-success',
    '#request-modal-success .modal__close',
    bindSuccessModal
);
bindModal('.room-setup__form-button', '#request-modal-success', '#request-modal-success .modal__close');
bindModal('.designers-request-button', '#request-modal', '#request-modal .modal__close', bindSuccessModal);
bindModal(
    '.designers-request-mobile-button',
    '#request-modal',
    '#request-modal .modal__close',
    bindSuccessModal
);
bindModal('.our-services-request-button', '#request-modal', '#request-modal .modal__close', bindSuccessModal);
bindModal(
    '.banner-paints-request-button',
    '#request-modal-paints',
    '#request-modal-paints .modal__close',
    bindSuccessModal
);
bindModal('.service-request-button', '#request-modal', '#request-modal .modal__close', bindSuccessModal);
bindModal('.request__form-submit-button', '#request-modal-success', '#request-modal-success .modal__close');
bindModal('.burger-modal-phone-entry', '#request-modal', '#request-modal .modal__close', bindSuccessModal);
bindModal(
    '.feedback-entry',
    '#request-modal-feedback',
    '#request-modal-feedback .modal__close',
    bindSuccessModal
);
bindModal(
    '.request-feedback-success',
    '#request-modal-feedback-success',
    '#request-modal-feedback-success .modal__close',
    bindFeedbackSuccessModal
);
bindModal('.select-color-entry', '#select-color-modal', '#select-color-modal .modal__close');

function bindSuccessModal() {
    $('.request-success-button').on('click', (event) => {
        event.preventDefault();

        $('.modal__wrapper').each(function () {
            $(this).removeClass('--active');
            $(this).find('.modal').removeClass('--active');
        });

        $('#request-modal-success').addClass('--active');
        $('#request-modal-success .modal').addClass('--active');
    });
}

function bindFeedbackSuccessModal() {
    $('.request-feedback-success').on('click', (event) => {
        event.preventDefault();

        $('.modal__wrapper').each(function () {
            $(this).removeClass('--active');
            $(this).find('.modal').removeClass('--active');
        });

        $('#request-modal-feedback-success').addClass('--active');
        $('#request-modal-feedback-success .modal').addClass('--active');
    });
}

function accordion(accordionSelector, accordionItem = 'empty') {
    const items = document.querySelectorAll(accordionSelector);
    items.forEach((item) => {
        item.addEventListener('click', () => {
            const parent = item.parentNode;
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active');
            } else {
                document
                    .querySelectorAll(accordionItem)
                    .forEach((child) => child.classList.remove('accordion__item-active'));
                parent.classList.add('accordion__item-active');
            }
        });
    });
}

if (document.querySelector('.service')) {
    accordion('.accordion__item-trigger', '.accordion__item');
}

if (document.querySelector('.product__additionally-accordion-item-trigger')) {
    accordion('.product__additionally-accordion-item-trigger');
}

function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);
    function hideTabContent() {
        content.forEach((item) => {
            item.classList.remove('--active');
        });
        tab.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }
    function showTabContent(i = 0) {
        content[i].classList.add('--active');
        tab[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();
    header.addEventListener('click', (e) => {
        const target = e.target;
        if (
            target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
        ) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
if (document.querySelector('.tabs__header')) {
    tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active');
}

$('.showroom__up-button').on('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
$('.request-details-dropdown').on('click', function () {
    $(this).closest('.request__details').toggleClass('--active');

    $(this).siblings('.request__details-list').slideToggle(500);
});

let timeout = null;

$('.header__content-searchbar-input').on(isMobile() && isMatchMedia() ? 'focus' : 'click', function () {
    $('.header__searchbar-menu').addClass('--active');
    isMobile() && isMatchMedia() && $('#menu-search-field').focus();

    if (timeout) {
        clearTimeout(timeout);
    }
});

$('.header__searchbar-menu-back-button').on('click', function () {
    $('.header__searchbar-menu').removeClass('--active');
});

$('.header__searchbar-menu-input .reset-input-text').on('click', function () {
    $('#menu-search-field').val('');
});

$('.header__content-searchbar-input').on('blur', function (event) {
    timeout = setTimeout(() => {
        !(isMobile() && isMatchMedia()) && $('.header__searchbar-menu').removeClass('--active');
    }, 50);
});

$('.header__catalog-category').each(function () {
    $(this).on(isMobile() && isMatchMedia() ? 'click' : 'mouseenter', function () {
        if (!(isMobile() && isMatchMedia())) {
            $('.header__catalog-category').each(function () {
                $(this).removeClass('--active');
            });

            $(this).addClass('--active');
        } else {
            $(this).find('.header__catalog-category-content').slideToggle('slow');
            $(this).toggleClass('--active');
        }
    });

    if (isMobile() && isMatchMedia() && $(this).hasClass('--active')) {
        $(this).find('.header__catalog-category-content').slideDown('slow');
    }
});

$('.catalog-entry').each(function () {
    $(this).on('click', function () {
        $(this).toggleClass('--active');
        $('body').toggleClass('locked');
        $('.header').toggleClass('--active');

        !isMobile() && window.scrollTo({ top: 0, behavior: 'smooth' });
        $('.header__catalog').toggleClass('--active');
    });
});

$('.header__catalog').on('click', (event) => {
    if ($(event.target).hasClass('header__catalog')) {
        $('.catalog-entry').toggleClass('--active');
        $('body').toggleClass('locked');
        $('.header').toggleClass('--active');

        $('.header__catalog').toggleClass('--active');
    }
});

$('.header__catalog-menu-back').on('click', () => {
    $('.catalog-entry').removeClass('--active');
    $('body').removeClass('locked');
    $('.header').removeClass('--active');

    $('.header__catalog').removeClass('--active');
});

$('.catalog__sort-heading').on('click', function () {
    $(this).closest('.catalog__sort').toggleClass('--active');
    isMobile() && isMatchMedia() && $('body').addClass('locked');
});

$('.modal__body-heading-select').on('click', function () {
    $(this).find('.modal__body-heading-select-list').toggleClass('--active');
    isMobile() && isMatchMedia() && $('body').addClass('locked');
});

$('.catalog__filters-show-more').on('click', function () {
    $(this).closest('.catalog__filters').addClass('--active');
});

$('.catalog__filters-hide').on('click', function () {
    $(this).closest('.catalog__filters').removeClass('--active');
});

function closeSelectAfterChange(classname, parent, callback = () => null) {
        $(classname).on('click', function (event) {
            setTimeout(() => {
                $(this).closest(parent).removeClass('--active');
                callback(event.target.id);
            }, 0)
        });
}

closeSelectAfterChange('.catalog__sort-item', '.catalog__sort', () => {
    $('body').removeClass('locked')
});
closeSelectAfterChange('.modal__body-heading-select-item', '.modal__body-heading-select-list', (value) => {
    $('.modal__body-heading-select-name span').html(value);
});

const rangeSlider = document.querySelector('.range-slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        range: {
            min: 0,
            max: 20000
        },
        step: 1,
        start: [0, 10000],
        connect: true
    });

    const inputFrom = document.getElementById('input-0');
    const inputTo = document.getElementById('input-1');

    const inputs = [inputFrom, inputTo];

    rangeSlider.noUiSlider.on('update', (values, handle) => {
        inputs[handle].value = Math.round(values[handle]);
    });

    inputs.forEach((input, index) => {
        input.addEventListener('change', (event) => {
            const range = [null, null];
            range[index] = event.currentTarget.value;

            rangeSlider.noUiSlider.set(range);
        });
    });
}

$('.catalog__products-filters-reset').on('click', () => {
    rangeSlider.noUiSlider.reset();
});

function useClickOutside(element, callback) {
    document.addEventListener('click', function (event) {
        const outsideClick =
            typeof event.composedPath === 'function' && !event.composedPath().includes(element);

        if (outsideClick) {
            callback();
        }
    });
}

useClickOutside(document.querySelector('.catalog__heading-settings'), () => {
    $('.catalog__sort').removeClass('--active');
});

$(window).on('scroll', function () {
    if (!$('.catalog__heading-settings').length) return;

    if (
        isMobile() &&
        isMatchMedia() &&
        $(this).scrollTop() > $('.section-heading.catalog__heading').position().top
    ) {
        $('.catalog__heading-settings').addClass('--active');
        $('.section-heading.catalog__heading').css(
            'height',
            $('.catalog__heading-settings').height() + rem(5)
        );
    } else {
        $('.catalog__heading-settings').removeClass('--active');
        $('.section-heading.catalog__heading').css('height', 'initial');
    }
});

$('.catalog__heading-settings-filter').on('click', () => {
    $('.catalog__products-filters').addClass('--active');
    $('body').addClass('locked');
});

$('.catalog__products-filters-heading button').on('click', () => {
    $('.catalog__products-filters').removeClass('--active');
    $('body').removeClass('locked');
});

$('.social-media__button').on('mouseenter', () => {
    $('.social-media__list').addClass('--active');
});

$('.social-media__list').on('mouseleave', () => {
    $('.social-media__list').removeClass('--active');
});

$('#select-all').on('change', function (event) {
    if (event.target.checked) {
        $('.basket__item').each(function () {
            $(this).find('input').prop('checked', true);
        });
    } else {
        $('.basket__item').each(function () {
            $(this).find('input').prop('checked', false);
        });
    }
});

$('.basket__item input').on('change', function () {
    const data = [];

    $('.basket__item').each(function () {
        data.push($(this).find('input').prop('checked'));
    });

    const isChecked = data.every((item) => item);

    if (isChecked) {
        $('#select-all').prop('checked', true);
    } else {
        $('#select-all').prop('checked', false);
    }
});

$('.modal__body-color').each(function () {
    $(this).find('.modal__body-color-background').on('click', function () {
        $(this).toggleClass('--selected')
    })
})

//mobile sort menu remove active class
$('.catalog__sort-menu').on('click', function (event) {
    if ($(event.target).hasClass('catalog__sort-menu')) {
        $(this).find('.catalog__sort').removeClass('--active');

        setTimeout(() => {
            $('body').removeClass('locked')
        }, 0)
    }
});

function setPhoneMask() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');

    phoneInputs.forEach((phoneInput) => {
        const im = new Inputmask('+ 7 (999) 999-99-99');
        im.mask(phoneInput);
    });
}

setPhoneMask();


