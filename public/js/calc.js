/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("><(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);;

/**
 * Override jQuery.fn.init to guard against XSS attacks.
 *
 * See http://bugs.jquery.com/ticket/9521
 */
(function () {
  var jquery_init = jQuery.fn.init;
  jQuery.fn.init = function (selector, context, rootjQuery) {
    // If the string contains a "#" before a "<", treat it as invalid HTML.
    if (selector && typeof selector === 'string') {
      var hash_position = selector.indexOf('#');
      if (hash_position >= 0) {
        var bracket_position = selector.indexOf('<');
        if (bracket_position > hash_position) {
          throw 'Syntax error, unrecognized expression: ' + selector;
        }
      }
    }
    return jquery_init.call(this, selector, context, rootjQuery);
  };
  jQuery.fn.init.prototype = jquery_init.prototype;
})();

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = true;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  // Execute all of them.
  jQuery.each(Drupal.behaviors, function() {
    this(context);
  });
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'), args);
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim(xmlhttp.responseText)) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message.replace(/\n/g, '<br />');
}

// Global Killswitch on the <html> element
$(document.documentElement).addClass('js');
// Attach all behaviors.
$(document).ready(function() {
  Drupal.attachBehaviors(this);
});

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(B,I,L){if(typeof I!="undefined"){L=L||{};if(I===null){I="";L.expires=-1}var E="";if(L.expires&&(typeof L.expires=="number"||L.expires.toUTCString)){var F;if(typeof L.expires=="number"){F=new Date();F.setTime(F.getTime()+(L.expires*24*60*60*1000))}else{F=L.expires}E="; expires="+F.toUTCString()}var K=L.path?"; path="+(L.path):"";var G=L.domain?"; domain="+(L.domain):"";var A=L.secure?"; secure":"";document.cookie=[B,"=",encodeURIComponent(I),E,K,G,A].join("")}else{var D=null;if(document.cookie&&document.cookie!=""){var J=document.cookie.split(";");for(var H=0;H<J.length;H++){var C=jQuery.trim(J[H]);if(C.substring(0,B.length+1)==(B+"=")){D=decodeURIComponent(C.substring(B.length+1));break}}}return D}};
;
/* Code first created by Zewa,
 * fixed up by AlexisWilke so it works with any type of page
 */
/**
* Reply, Edit & Delete buttons for included comments.
*
* Store where the user was when clicking add comment or reply,
* and bring him or her back there afterwards.
*/
function insert_node_destination(link){
  var attr=jQuery(link).attr('href');
  var p=attr.indexOf('#');
  var anchor='';
  if(p!=-1){
    anchor=attr.substr(p);
    attr=attr.substr(0,p);
  }
  attr+=attr.indexOf('?')==-1?'?':'&';
  url=location.pathname.substring(1);
  jQuery(link).attr('href',attr+'destination='+url+anchor);
}
jQuery(document).ready(function() {
  jQuery("a[href*='comment/reply'],a[href*='comment/edit'],a[href*='comment/delete']").click(function(){insert_node_destination(this);});
});
;

(function ($) {
  Drupal.Panels = {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
/*!
 * jQuery UI 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(b,d){function e(f){return!b(f).parents().andSelf().filter(function(){return b.curCSS(this,"visibility")==="hidden"||b.expr.filters.hidden(this)}).length}b.ui=b.ui||{};if(!b.ui.version){b.extend(b.ui,{version:"1.8.12",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});b.fn.extend({_focus:b.fn.focus,focus:function(f,g){return typeof f==="number"?this.each(function(){var a=this;setTimeout(function(){b(a).focus();g&&g.call(a)},f)}):this._focus.apply(this,arguments)},scrollParent:function(){var f;f=b.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(b.curCSS(this,
"position",1))&&/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(b.curCSS(this,"overflow",1)+b.curCSS(this,"overflow-y",1)+b.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!f.length?b(document):f},zIndex:function(f){if(f!==d)return this.css("zIndex",f);if(this.length){f=b(this[0]);for(var g;f.length&&f[0]!==document;){g=f.css("position");
if(g==="absolute"||g==="relative"||g==="fixed"){g=parseInt(f.css("zIndex"),10);if(!isNaN(g)&&g!==0)return g}f=f.parent()}}return 0},disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(f){f.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});b.each(["Width","Height"],function(f,g){function a(j,n,o,l){b.each(c,function(){n-=parseFloat(b.curCSS(j,"padding"+this,true))||0;if(o)n-=parseFloat(b.curCSS(j,
"border"+this+"Width",true))||0;if(l)n-=parseFloat(b.curCSS(j,"margin"+this,true))||0});return n}var c=g==="Width"?["Left","Right"]:["Top","Bottom"],h=g.toLowerCase(),i={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};b.fn["inner"+g]=function(j){if(j===d)return i["inner"+g].call(this);return this.each(function(){b(this).css(h,a(this,j)+"px")})};b.fn["outer"+g]=function(j,n){if(typeof j!=="number")return i["outer"+g].call(this,j);return this.each(function(){b(this).css(h,
a(this,j,true,n)+"px")})}});b.extend(b.expr[":"],{data:function(f,g,a){return!!b.data(f,a[3])},focusable:function(f){var g=f.nodeName.toLowerCase(),a=b.attr(f,"tabindex");if("area"===g){g=f.parentNode;a=g.name;if(!f.href||!a||g.nodeName.toLowerCase()!=="map")return false;f=b("img[usemap=#"+a+"]")[0];return!!f&&e(f)}return(/input|select|textarea|button|object/.test(g)?!f.disabled:"a"==g?f.href||!isNaN(a):!isNaN(a))&&e(f)},tabbable:function(f){var g=b.attr(f,"tabindex");return(isNaN(g)||g>=0)&&b(f).is(":focusable")}});
b(function(){var f=document.body,g=f.appendChild(g=document.createElement("div"));b.extend(g.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});b.support.minHeight=g.offsetHeight===100;b.support.selectstart="onselectstart"in g;f.removeChild(g).style.display="none"});b.extend(b.ui,{plugin:{add:function(f,g,a){f=b.ui[f].prototype;for(var c in a){f.plugins[c]=f.plugins[c]||[];f.plugins[c].push([g,a[c]])}},call:function(f,g,a){if((g=f.plugins[g])&&f.element[0].parentNode)for(var c=0;c<g.length;c++)f.options[g[c][0]]&&
g[c][1].apply(f.element,a)}},contains:function(f,g){return document.compareDocumentPosition?f.compareDocumentPosition(g)&16:f!==g&&f.contains(g)},hasScroll:function(f,g){if(b(f).css("overflow")==="hidden")return false;g=g&&g==="left"?"scrollLeft":"scrollTop";var a=false;if(f[g]>0)return true;f[g]=1;a=f[g]>0;f[g]=0;return a},isOverAxis:function(f,g,a){return f>g&&f<g+a},isOver:function(f,g,a,c,h,i){return b.ui.isOverAxis(f,a,h)&&b.ui.isOverAxis(g,c,i)}})}})(jQuery);
(function(b,d){if(b.cleanData){var e=b.cleanData;b.cleanData=function(g){for(var a=0,c;(c=g[a])!=null;a++)b(c).triggerHandler("remove");e(g)}}else{var f=b.fn.remove;b.fn.remove=function(g,a){return this.each(function(){if(!a)if(!g||b.filter(g,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return f.call(b(this),g,a)})}}b.widget=function(g,a,c){var h=g.split(".")[0],i;g=g.split(".")[1];i=h+"-"+g;if(!c){c=a;a=b.Widget}b.expr[":"][i]=function(j){return!!b.data(j,
g)};b[h]=b[h]||{};b[h][g]=function(j,n){arguments.length&&this._createWidget(j,n)};a=new a;a.options=b.extend(true,{},a.options);b[h][g].prototype=b.extend(true,a,{namespace:h,widgetName:g,widgetEventPrefix:b[h][g].prototype.widgetEventPrefix||g,widgetBaseClass:i},c);b.widget.bridge(g,b[h][g])};b.widget.bridge=function(g,a){b.fn[g]=function(c){var h=typeof c==="string",i=Array.prototype.slice.call(arguments,1),j=this;c=!h&&i.length?b.extend.apply(null,[true,c].concat(i)):c;if(h&&c.charAt(0)==="_")return j;
h?this.each(function(){var n=b.data(this,g),o=n&&b.isFunction(n[c])?n[c].apply(n,i):n;if(o!==n&&o!==d){j=o;return false}}):this.each(function(){var n=b.data(this,g);n?n.option(c||{})._init():b.data(this,g,new a(c,this))});return j}};b.Widget=function(g,a){arguments.length&&this._createWidget(g,a)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(g,a){b.data(a,this.widgetName,this);this.element=b(a);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),g);var c=this;this.element.bind("remove."+this.widgetName,function(){c.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(g,a){var c=g;if(arguments.length===0)return b.extend({},this.options);if(typeof g==="string"){if(a===d)return this.options[g];c={};c[g]=a}this._setOptions(c);return this},_setOptions:function(g){var a=this;b.each(g,function(c,h){a._setOption(c,h)});return this},_setOption:function(g,a){this.options[g]=a;if(g==="disabled")this.widget()[a?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",a);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(g,a,c){var h=this.options[g];a=b.Event(a);a.type=(g===this.widgetEventPrefix?g:this.widgetEventPrefix+g).toLowerCase();c=c||{};if(a.originalEvent){g=b.event.props.length;for(var i;g;){i=b.event.props[--g];a[i]=a.originalEvent[i]}}this.element.trigger(a,c);return!(b.isFunction(h)&&h.call(this.element[0],a,c)===false||a.isDefaultPrevented())}}})(jQuery);
(function(b){b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var d=this;this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)}).bind("click."+this.widgetName,function(e){if(true===b.data(e.target,d.widgetName+".preventClickEvent")){b.removeData(e.target,d.widgetName+".preventClickEvent");e.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(d){d.originalEvent=
d.originalEvent||{};if(!d.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(d);this._mouseDownEvent=d;var e=this,f=d.which==1,g=typeof this.options.cancel=="string"?b(d.target).parents().add(d.target).filter(this.options.cancel).length:false;if(!f||g||!this._mouseCapture(d))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=
this._mouseStart(d)!==false;if(!this._mouseStarted){d.preventDefault();return true}}true===b.data(d.target,this.widgetName+".preventClickEvent")&&b.removeData(d.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(a){return e._mouseMove(a)};this._mouseUpDelegate=function(a){return e._mouseUp(a)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);d.preventDefault();return d.originalEvent.mouseHandled=
true}},_mouseMove:function(d){if(b.browser.msie&&!(document.documentMode>=9)&&!d.button)return this._mouseUp(d);if(this._mouseStarted){this._mouseDrag(d);return d.preventDefault()}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,d)!==false)?this._mouseDrag(d):this._mouseUp(d);return!this._mouseStarted},_mouseUp:function(d){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;d.target==this._mouseDownEvent.target&&b.data(d.target,this.widgetName+".preventClickEvent",true);this._mouseStop(d)}return false},_mouseDistanceMet:function(d){return Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(b){b.widget("ui.draggable",b.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(d){var e=
this.options;if(this.helper||e.disabled||b(d.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(d);if(!this.handle)return false;return true},_mouseStart:function(d){var e=this.options;this.helper=this._createHelper(d);this._cacheHelperProportions();if(b.ui.ddmanager)b.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-
this.margins.top,left:this.offset.left-this.margins.left};b.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(d);this.originalPageX=d.pageX;this.originalPageY=d.pageY;e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt);e.containment&&this._setContainment();if(this._trigger("start",d)===false){this._clear();return false}this._cacheHelperProportions();
b.ui.ddmanager&&!e.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,d);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(d,true);return true},_mouseDrag:function(d,e){this.position=this._generatePosition(d);this.positionAbs=this._convertPositionTo("absolute");if(!e){e=this._uiHash();if(this._trigger("drag",d,e)===false){this._mouseUp({});return false}this.position=e.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||
this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";b.ui.ddmanager&&b.ui.ddmanager.drag(this,d);return false},_mouseStop:function(d){var e=false;if(b.ui.ddmanager&&!this.options.dropBehaviour)e=b.ui.ddmanager.drop(this,d);if(this.dropped){e=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!e||this.options.revert=="valid"&&e||this.options.revert===true||b.isFunction(this.options.revert)&&
this.options.revert.call(this.element,e)){var f=this;b(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",d)!==false&&f._clear()})}else this._trigger("stop",d)!==false&&this._clear();return false},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(d){var e=!this.options.handle||!b(this.options.handle,this.element).length?true:false;b(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
d.target)e=true});return e},_createHelper:function(d){var e=this.options;d=b.isFunction(e.helper)?b(e.helper.apply(this.element[0],[d])):e.helper=="clone"?this.element.clone():this.element;d.parents("body").length||d.appendTo(e.appendTo=="parent"?this.element[0].parentNode:e.appendTo);d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");return d},_adjustOffsetFromHelper:function(d){if(typeof d=="string")d=d.split(" ");if(b.isArray(d))d={left:+d[0],top:+d[1]||
0};if("left"in d)this.offset.click.left=d.left+this.margins.left;if("right"in d)this.offset.click.left=this.helperProportions.width-d.right+this.margins.left;if("top"in d)this.offset.click.top=d.top+this.margins.top;if("bottom"in d)this.offset.click.top=this.helperProportions.height-d.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var d=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],
this.offsetParent[0])){d.left+=this.scrollParent.scrollLeft();d.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&b.browser.msie)d={top:0,left:0};return{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var d=this.element.position();return{top:d.top-
(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),
height:this.helper.outerHeight()}},_setContainment:function(){var d=this.options;if(d.containment=="parent")d.containment=this.helper[0].parentNode;if(d.containment=="document"||d.containment=="window")this.containment=[(d.containment=="document"?0:b(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(d.containment=="document"?0:b(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(d.containment=="document"?0:b(window).scrollLeft())+b(d.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(d.containment=="document"?0:b(window).scrollTop())+(b(d.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(d.containment)&&d.containment.constructor!=Array){var e=b(d.containment)[0];if(e){d=b(d.containment).offset();var f=b(e).css("overflow")!="hidden";this.containment=[d.left+(parseInt(b(e).css("borderLeftWidth"),
10)||0)+(parseInt(b(e).css("paddingLeft"),10)||0),d.top+(parseInt(b(e).css("borderTopWidth"),10)||0)+(parseInt(b(e).css("paddingTop"),10)||0),d.left+(f?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(b(e).css("borderLeftWidth"),10)||0)-(parseInt(b(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,d.top+(f?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(b(e).css("borderTopWidth"),10)||0)-(parseInt(b(e).css("paddingBottom"),
10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]}}else if(d.containment.constructor==Array)this.containment=d.containment},_convertPositionTo:function(d,e){if(!e)e=this.position;d=d=="absolute"?1:-1;var f=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:e.top+this.offset.relative.top*d+this.offset.parent.top*d-(b.browser.safari&&
b.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:e.left+this.offset.relative.left*d+this.offset.parent.left*d-(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(d){var e=this.options,f=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName),a=d.pageX,c=d.pageY;if(this.originalPosition){if(this.containment){if(d.pageX-this.offset.click.left<this.containment[0])a=this.containment[0]+this.offset.click.left;if(d.pageY-this.offset.click.top<this.containment[1])c=this.containment[1]+this.offset.click.top;if(d.pageX-this.offset.click.left>this.containment[2])a=this.containment[2]+this.offset.click.left;if(d.pageY-this.offset.click.top>this.containment[3])c=
this.containment[3]+this.offset.click.top}if(e.grid){c=this.originalPageY+Math.round((c-this.originalPageY)/e.grid[1])*e.grid[1];c=this.containment?!(c-this.offset.click.top<this.containment[1]||c-this.offset.click.top>this.containment[3])?c:!(c-this.offset.click.top<this.containment[1])?c-e.grid[1]:c+e.grid[1]:c;a=this.originalPageX+Math.round((a-this.originalPageX)/e.grid[0])*e.grid[0];a=this.containment?!(a-this.offset.click.left<this.containment[0]||a-this.offset.click.left>this.containment[2])?
a:!(a-this.offset.click.left<this.containment[0])?a-e.grid[0]:a+e.grid[0]:a}}return{top:c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(b.browser.safari&&b.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
g?0:f.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(d,e,f){f=f||this._uiHash();b.ui.plugin.call(this,d,[e,f]);if(d=="drag")this.positionAbs=this._convertPositionTo("absolute");return b.Widget.prototype._trigger.call(this,d,e,f)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,
offset:this.positionAbs}}});b.extend(b.ui.draggable,{version:"1.8.12"});b.ui.plugin.add("draggable","connectToSortable",{start:function(d,e){var f=b(this).data("draggable"),g=f.options,a=b.extend({},e,{item:f.element});f.sortables=[];b(g.connectToSortable).each(function(){var c=b.data(this,"sortable");if(c&&!c.options.disabled){f.sortables.push({instance:c,shouldRevert:c.options.revert});c.refreshPositions();c._trigger("activate",d,a)}})},stop:function(d,e){var f=b(this).data("draggable"),g=b.extend({},
e,{item:f.element});b.each(f.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;f.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(d);this.instance.options.helper=this.instance.options._helper;f.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",d,g)}})},drag:function(d,e){var f=
b(this).data("draggable"),g=this;b.each(f.sortables,function(){this.instance.positionAbs=f.positionAbs;this.instance.helperProportions=f.helperProportions;this.instance.offset.click=f.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=b(g).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return e.helper[0]};
d.target=this.instance.currentItem[0];this.instance._mouseCapture(d,true);this.instance._mouseStart(d,true,true);this.instance.offset.click.top=f.offset.click.top;this.instance.offset.click.left=f.offset.click.left;this.instance.offset.parent.left-=f.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=f.offset.parent.top-this.instance.offset.parent.top;f._trigger("toSortable",d);f.dropped=this.instance.element;f.currentItem=f.element;this.instance.fromOutside=f}this.instance.currentItem&&
this.instance._mouseDrag(d)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",d,this.instance._uiHash(this.instance));this.instance._mouseStop(d,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();f._trigger("fromSortable",d);f.dropped=false}})}});b.ui.plugin.add("draggable","cursor",
{start:function(){var d=b("body"),e=b(this).data("draggable").options;if(d.css("cursor"))e._cursor=d.css("cursor");d.css("cursor",e.cursor)},stop:function(){var d=b(this).data("draggable").options;d._cursor&&b("body").css("cursor",d._cursor)}});b.ui.plugin.add("draggable","iframeFix",{start:function(){var d=b(this).data("draggable").options;b(d.iframeFix===true?"iframe":d.iframeFix).each(function(){b('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+
"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(b(this).offset()).appendTo("body")})},stop:function(){b("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});b.ui.plugin.add("draggable","opacity",{start:function(d,e){d=b(e.helper);e=b(this).data("draggable").options;if(d.css("opacity"))e._opacity=d.css("opacity");d.css("opacity",e.opacity)},stop:function(d,e){d=b(this).data("draggable").options;d._opacity&&b(e.helper).css("opacity",
d._opacity)}});b.ui.plugin.add("draggable","scroll",{start:function(){var d=b(this).data("draggable");if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML")d.overflowOffset=d.scrollParent.offset()},drag:function(d){var e=b(this).data("draggable"),f=e.options,g=false;if(e.scrollParent[0]!=document&&e.scrollParent[0].tagName!="HTML"){if(!f.axis||f.axis!="x")if(e.overflowOffset.top+e.scrollParent[0].offsetHeight-d.pageY<f.scrollSensitivity)e.scrollParent[0].scrollTop=g=e.scrollParent[0].scrollTop+
f.scrollSpeed;else if(d.pageY-e.overflowOffset.top<f.scrollSensitivity)e.scrollParent[0].scrollTop=g=e.scrollParent[0].scrollTop-f.scrollSpeed;if(!f.axis||f.axis!="y")if(e.overflowOffset.left+e.scrollParent[0].offsetWidth-d.pageX<f.scrollSensitivity)e.scrollParent[0].scrollLeft=g=e.scrollParent[0].scrollLeft+f.scrollSpeed;else if(d.pageX-e.overflowOffset.left<f.scrollSensitivity)e.scrollParent[0].scrollLeft=g=e.scrollParent[0].scrollLeft-f.scrollSpeed}else{if(!f.axis||f.axis!="x")if(d.pageY-b(document).scrollTop()<
f.scrollSensitivity)g=b(document).scrollTop(b(document).scrollTop()-f.scrollSpeed);else if(b(window).height()-(d.pageY-b(document).scrollTop())<f.scrollSensitivity)g=b(document).scrollTop(b(document).scrollTop()+f.scrollSpeed);if(!f.axis||f.axis!="y")if(d.pageX-b(document).scrollLeft()<f.scrollSensitivity)g=b(document).scrollLeft(b(document).scrollLeft()-f.scrollSpeed);else if(b(window).width()-(d.pageX-b(document).scrollLeft())<f.scrollSensitivity)g=b(document).scrollLeft(b(document).scrollLeft()+
f.scrollSpeed)}g!==false&&b.ui.ddmanager&&!f.dropBehaviour&&b.ui.ddmanager.prepareOffsets(e,d)}});b.ui.plugin.add("draggable","snap",{start:function(){var d=b(this).data("draggable"),e=d.options;d.snapElements=[];b(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var f=b(this),g=f.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:f.outerWidth(),height:f.outerHeight(),top:g.top,left:g.left})})},drag:function(d,e){for(var f=b(this).data("draggable"),
g=f.options,a=g.snapTolerance,c=e.offset.left,h=c+f.helperProportions.width,i=e.offset.top,j=i+f.helperProportions.height,n=f.snapElements.length-1;n>=0;n--){var o=f.snapElements[n].left,l=o+f.snapElements[n].width,k=f.snapElements[n].top,m=k+f.snapElements[n].height;if(o-a<c&&c<l+a&&k-a<i&&i<m+a||o-a<c&&c<l+a&&k-a<j&&j<m+a||o-a<h&&h<l+a&&k-a<i&&i<m+a||o-a<h&&h<l+a&&k-a<j&&j<m+a){if(g.snapMode!="inner"){var p=Math.abs(k-j)<=a,q=Math.abs(m-i)<=a,s=Math.abs(o-h)<=a,r=Math.abs(l-c)<=a;if(p)e.position.top=
f._convertPositionTo("relative",{top:k-f.helperProportions.height,left:0}).top-f.margins.top;if(q)e.position.top=f._convertPositionTo("relative",{top:m,left:0}).top-f.margins.top;if(s)e.position.left=f._convertPositionTo("relative",{top:0,left:o-f.helperProportions.width}).left-f.margins.left;if(r)e.position.left=f._convertPositionTo("relative",{top:0,left:l}).left-f.margins.left}var u=p||q||s||r;if(g.snapMode!="outer"){p=Math.abs(k-i)<=a;q=Math.abs(m-j)<=a;s=Math.abs(o-c)<=a;r=Math.abs(l-h)<=a;if(p)e.position.top=
f._convertPositionTo("relative",{top:k,left:0}).top-f.margins.top;if(q)e.position.top=f._convertPositionTo("relative",{top:m-f.helperProportions.height,left:0}).top-f.margins.top;if(s)e.position.left=f._convertPositionTo("relative",{top:0,left:o}).left-f.margins.left;if(r)e.position.left=f._convertPositionTo("relative",{top:0,left:l-f.helperProportions.width}).left-f.margins.left}if(!f.snapElements[n].snapping&&(p||q||s||r||u))f.options.snap.snap&&f.options.snap.snap.call(f.element,d,b.extend(f._uiHash(),
{snapItem:f.snapElements[n].item}));f.snapElements[n].snapping=p||q||s||r||u}else{f.snapElements[n].snapping&&f.options.snap.release&&f.options.snap.release.call(f.element,d,b.extend(f._uiHash(),{snapItem:f.snapElements[n].item}));f.snapElements[n].snapping=false}}}});b.ui.plugin.add("draggable","stack",{start:function(){var d=b(this).data("draggable").options;d=b.makeArray(b(d.stack)).sort(function(f,g){return(parseInt(b(f).css("zIndex"),10)||0)-(parseInt(b(g).css("zIndex"),10)||0)});if(d.length){var e=
parseInt(d[0].style.zIndex)||0;b(d).each(function(f){this.style.zIndex=e+f});this[0].style.zIndex=e+d.length}}});b.ui.plugin.add("draggable","zIndex",{start:function(d,e){d=b(e.helper);e=b(this).data("draggable").options;if(d.css("zIndex"))e._zIndex=d.css("zIndex");d.css("zIndex",e.zIndex)},stop:function(d,e){d=b(this).data("draggable").options;d._zIndex&&b(e.helper).css("zIndex",d._zIndex)}})})(jQuery);
(function(b){b.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var d=this.options,e=d.accept;this.isover=0;this.isout=1;this.accept=b.isFunction(e)?e:function(f){return f.is(e)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};b.ui.ddmanager.droppables[d.scope]=b.ui.ddmanager.droppables[d.scope]||[];b.ui.ddmanager.droppables[d.scope].push(this);
d.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var d=b.ui.ddmanager.droppables[this.options.scope],e=0;e<d.length;e++)d[e]==this&&d.splice(e,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(d,e){if(d=="accept")this.accept=b.isFunction(e)?e:function(f){return f.is(e)};b.Widget.prototype._setOption.apply(this,arguments)},_activate:function(d){var e=b.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);e&&this._trigger("activate",d,this.ui(e))},_deactivate:function(d){var e=b.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);e&&this._trigger("deactivate",d,this.ui(e))},_over:function(d){var e=b.ui.ddmanager.current;if(!(!e||(e.currentItem||e.element)[0]==this.element[0]))if(this.accept.call(this.element[0],e.currentItem||e.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",d,this.ui(e))}},_out:function(d){var e=b.ui.ddmanager.current;if(!(!e||(e.currentItem||e.element)[0]==this.element[0]))if(this.accept.call(this.element[0],e.currentItem||e.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",d,this.ui(e))}},_drop:function(d,e){var f=e||b.ui.ddmanager.current;if(!f||(f.currentItem||f.element)[0]==this.element[0])return false;var g=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var a=
b.data(this,"droppable");if(a.options.greedy&&!a.options.disabled&&a.options.scope==f.options.scope&&a.accept.call(a.element[0],f.currentItem||f.element)&&b.ui.intersect(f,b.extend(a,{offset:a.element.offset()}),a.options.tolerance)){g=true;return false}});if(g)return false;if(this.accept.call(this.element[0],f.currentItem||f.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
d,this.ui(f));return this.element}return false},ui:function(d){return{draggable:d.currentItem||d.element,helper:d.helper,position:d.position,offset:d.positionAbs}}});b.extend(b.ui.droppable,{version:"1.8.12"});b.ui.intersect=function(d,e,f){if(!e.offset)return false;var g=(d.positionAbs||d.position.absolute).left,a=g+d.helperProportions.width,c=(d.positionAbs||d.position.absolute).top,h=c+d.helperProportions.height,i=e.offset.left,j=i+e.proportions.width,n=e.offset.top,o=n+e.proportions.height;
switch(f){case "fit":return i<=g&&a<=j&&n<=c&&h<=o;case "intersect":return i<g+d.helperProportions.width/2&&a-d.helperProportions.width/2<j&&n<c+d.helperProportions.height/2&&h-d.helperProportions.height/2<o;case "pointer":return b.ui.isOver((d.positionAbs||d.position.absolute).top+(d.clickOffset||d.offset.click).top,(d.positionAbs||d.position.absolute).left+(d.clickOffset||d.offset.click).left,n,i,e.proportions.height,e.proportions.width);case "touch":return(c>=n&&c<=o||h>=n&&h<=o||c<n&&h>o)&&(g>=
i&&g<=j||a>=i&&a<=j||g<i&&a>j);default:return false}};b.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(d,e){var f=b.ui.ddmanager.droppables[d.options.scope]||[],g=e?e.type:null,a=(d.currentItem||d.element).find(":data(droppable)").andSelf(),c=0;a:for(;c<f.length;c++)if(!(f[c].options.disabled||d&&!f[c].accept.call(f[c].element[0],d.currentItem||d.element))){for(var h=0;h<a.length;h++)if(a[h]==f[c].element[0]){f[c].proportions.height=0;continue a}f[c].visible=f[c].element.css("display")!=
"none";if(f[c].visible){g=="mousedown"&&f[c]._activate.call(f[c],e);f[c].offset=f[c].element.offset();f[c].proportions={width:f[c].element[0].offsetWidth,height:f[c].element[0].offsetHeight}}}},drop:function(d,e){var f=false;b.each(b.ui.ddmanager.droppables[d.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&b.ui.intersect(d,this,this.options.tolerance))f=f||this._drop.call(this,e);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],d.currentItem||
d.element)){this.isout=1;this.isover=0;this._deactivate.call(this,e)}}});return f},drag:function(d,e){d.options.refreshPositions&&b.ui.ddmanager.prepareOffsets(d,e);b.each(b.ui.ddmanager.droppables[d.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var f=b.ui.intersect(d,this,this.options.tolerance);if(f=!f&&this.isover==1?"isout":f&&this.isover==0?"isover":null){var g;if(this.options.greedy){var a=this.element.parents(":data(droppable):eq(0)");if(a.length){g=
b.data(a[0],"droppable");g.greedyChild=f=="isover"?1:0}}if(g&&f=="isover"){g.isover=0;g.isout=1;g._out.call(g,e)}this[f]=1;this[f=="isout"?"isover":"isout"]=0;this[f=="isover"?"_over":"_out"].call(this,e);if(g&&f=="isout"){g.isout=0;g.isover=1;g._over.call(g,e)}}}})}}})(jQuery);
(function(b){b.widget("ui.resizable",b.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var f=this,g=this.options;this.element.addClass("ui-resizable");b.extend(this,{_aspectRatio:!!g.aspectRatio,aspectRatio:g.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:g.helper||g.ghost||g.animate?g.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&b.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(b('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=g.handles||(!b(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var a=this.handles.split(",");this.handles={};for(var c=0;c<a.length;c++){var h=b.trim(a[c]),i=b('<div class="ui-resizable-handle '+("ui-resizable-"+h)+'"></div>');/sw|se|ne|nw/.test(h)&&i.css({zIndex:++g.zIndex});"se"==h&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[h]=".ui-resizable-"+h;this.element.append(i)}}this._renderAxis=function(j){j=j||this.element;for(var n in this.handles){if(this.handles[n].constructor==
String)this.handles[n]=b(this.handles[n],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var o=b(this.handles[n],this.element),l=0;l=/sw|ne|nw|se|n|s/.test(n)?o.outerHeight():o.outerWidth();o=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");j.css(o,l);this._proportionallyResize()}b(this.handles[n])}};this._renderAxis(this.element);this._handles=b(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!f.resizing){if(this.className)var j=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);f.axis=j&&j[1]?j[1]:"se"}});if(g.autoHide){this._handles.hide();b(this.element).addClass("ui-resizable-autohide").hover(function(){b(this).removeClass("ui-resizable-autohide");f._handles.show()},function(){if(!f.resizing){b(this).addClass("ui-resizable-autohide");f._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var f=function(a){b(a).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};
if(this.elementIsWrapper){f(this.element);var g=this.element;g.after(this.originalElement.css({position:g.css("position"),width:g.outerWidth(),height:g.outerHeight(),top:g.css("top"),left:g.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);f(this.originalElement);return this},_mouseCapture:function(f){var g=false;for(var a in this.handles)if(b(this.handles[a])[0]==f.target)g=true;return!this.options.disabled&&g},_mouseStart:function(f){var g=this.options,a=this.element.position(),
c=this.element;this.resizing=true;this.documentScroll={top:b(document).scrollTop(),left:b(document).scrollLeft()};if(c.is(".ui-draggable")||/absolute/.test(c.css("position")))c.css({position:"absolute",top:a.top,left:a.left});b.browser.opera&&/relative/.test(c.css("position"))&&c.css({position:"relative",top:"auto",left:"auto"});this._renderProxy();a=d(this.helper.css("left"));var h=d(this.helper.css("top"));if(g.containment){a+=b(g.containment).scrollLeft()||0;h+=b(g.containment).scrollTop()||0}this.offset=
this.helper.offset();this.position={left:a,top:h};this.size=this._helper?{width:c.outerWidth(),height:c.outerHeight()}:{width:c.width(),height:c.height()};this.originalSize=this._helper?{width:c.outerWidth(),height:c.outerHeight()}:{width:c.width(),height:c.height()};this.originalPosition={left:a,top:h};this.sizeDiff={width:c.outerWidth()-c.width(),height:c.outerHeight()-c.height()};this.originalMousePosition={left:f.pageX,top:f.pageY};this.aspectRatio=typeof g.aspectRatio=="number"?g.aspectRatio:
this.originalSize.width/this.originalSize.height||1;g=b(".ui-resizable-"+this.axis).css("cursor");b("body").css("cursor",g=="auto"?this.axis+"-resize":g);c.addClass("ui-resizable-resizing");this._propagate("start",f);return true},_mouseDrag:function(f){var g=this.helper,a=this.originalMousePosition,c=this._change[this.axis];if(!c)return false;a=c.apply(this,[f,f.pageX-a.left||0,f.pageY-a.top||0]);if(this._aspectRatio||f.shiftKey)a=this._updateRatio(a,f);a=this._respectSize(a,f);this._propagate("resize",
f);g.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(a);this._trigger("resize",f,this.ui());return false},_mouseStop:function(f){this.resizing=false;var g=this.options,a=this;if(this._helper){var c=this._proportionallyResizeElements,h=c.length&&/textarea/i.test(c[0].nodeName);c=h&&b.ui.hasScroll(c[0],"left")?0:a.sizeDiff.height;
h=h?0:a.sizeDiff.width;h={width:a.helper.width()-h,height:a.helper.height()-c};c=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var i=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;g.animate||this.element.css(b.extend(h,{top:i,left:c}));a.helper.height(a.size.height);a.helper.width(a.size.width);this._helper&&!g.animate&&this._proportionallyResize()}b("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",f);this._helper&&this.helper.remove();return false},_updateCache:function(f){this.offset=this.helper.offset();if(e(f.left))this.position.left=f.left;if(e(f.top))this.position.top=f.top;if(e(f.height))this.size.height=f.height;if(e(f.width))this.size.width=f.width},_updateRatio:function(f){var g=this.position,a=this.size,c=this.axis;if(f.height)f.width=a.height*this.aspectRatio;else if(f.width)f.height=a.width/this.aspectRatio;if(c=="sw"){f.left=g.left+(a.width-f.width);f.top=
null}if(c=="nw"){f.top=g.top+(a.height-f.height);f.left=g.left+(a.width-f.width)}return f},_respectSize:function(f){var g=this.options,a=this.axis,c=e(f.width)&&g.maxWidth&&g.maxWidth<f.width,h=e(f.height)&&g.maxHeight&&g.maxHeight<f.height,i=e(f.width)&&g.minWidth&&g.minWidth>f.width,j=e(f.height)&&g.minHeight&&g.minHeight>f.height;if(i)f.width=g.minWidth;if(j)f.height=g.minHeight;if(c)f.width=g.maxWidth;if(h)f.height=g.maxHeight;var n=this.originalPosition.left+this.originalSize.width,o=this.position.top+
this.size.height,l=/sw|nw|w/.test(a);a=/nw|ne|n/.test(a);if(i&&l)f.left=n-g.minWidth;if(c&&l)f.left=n-g.maxWidth;if(j&&a)f.top=o-g.minHeight;if(h&&a)f.top=o-g.maxHeight;if((g=!f.width&&!f.height)&&!f.left&&f.top)f.top=null;else if(g&&!f.top&&f.left)f.left=null;return f},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var f=this.helper||this.element,g=0;g<this._proportionallyResizeElements.length;g++){var a=this._proportionallyResizeElements[g];if(!this.borderDif){var c=
[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],h=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];this.borderDif=b.map(c,function(i,j){i=parseInt(i,10)||0;j=parseInt(h[j],10)||0;return i+j})}b.browser.msie&&(b(f).is(":hidden")||b(f).parents(":hidden").length)||a.css({height:f.height()-this.borderDif[0]-this.borderDif[2]||0,width:f.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var f=
this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||b('<div style="overflow:hidden;"></div>');var g=b.browser.msie&&b.browser.version<7,a=g?1:0;g=g?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+g,height:this.element.outerHeight()+g,position:"absolute",left:this.elementOffset.left-a+"px",top:this.elementOffset.top-a+"px",zIndex:++f.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(f,
g){return{width:this.originalSize.width+g}},w:function(f,g){return{left:this.originalPosition.left+g,width:this.originalSize.width-g}},n:function(f,g,a){return{top:this.originalPosition.top+a,height:this.originalSize.height-a}},s:function(f,g,a){return{height:this.originalSize.height+a}},se:function(f,g,a){return b.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[f,g,a]))},sw:function(f,g,a){return b.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[f,g,
a]))},ne:function(f,g,a){return b.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[f,g,a]))},nw:function(f,g,a){return b.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[f,g,a]))}},_propagate:function(f,g){b.ui.plugin.call(this,f,[g,this.ui()]);f!="resize"&&this._trigger(f,g,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,
originalPosition:this.originalPosition}}});b.extend(b.ui.resizable,{version:"1.8.12"});b.ui.plugin.add("resizable","alsoResize",{start:function(){var f=b(this).data("resizable").options,g=function(a){b(a).each(function(){var c=b(this);c.data("resizable-alsoresize",{width:parseInt(c.width(),10),height:parseInt(c.height(),10),left:parseInt(c.css("left"),10),top:parseInt(c.css("top"),10),position:c.css("position")})})};if(typeof f.alsoResize=="object"&&!f.alsoResize.parentNode)if(f.alsoResize.length){f.alsoResize=
f.alsoResize[0];g(f.alsoResize)}else b.each(f.alsoResize,function(a){g(a)});else g(f.alsoResize)},resize:function(f,g){var a=b(this).data("resizable");f=a.options;var c=a.originalSize,h=a.originalPosition,i={height:a.size.height-c.height||0,width:a.size.width-c.width||0,top:a.position.top-h.top||0,left:a.position.left-h.left||0},j=function(n,o){b(n).each(function(){var l=b(this),k=b(this).data("resizable-alsoresize"),m={},p=o&&o.length?o:l.parents(g.originalElement[0]).length?["width","height"]:["width",
"height","top","left"];b.each(p,function(q,s){if((q=(k[s]||0)+(i[s]||0))&&q>=0)m[s]=q||null});if(b.browser.opera&&/relative/.test(l.css("position"))){a._revertToRelativePosition=true;l.css({position:"absolute",top:"auto",left:"auto"})}l.css(m)})};typeof f.alsoResize=="object"&&!f.alsoResize.nodeType?b.each(f.alsoResize,function(n,o){j(n,o)}):j(f.alsoResize)},stop:function(){var f=b(this).data("resizable"),g=f.options,a=function(c){b(c).each(function(){var h=b(this);h.css({position:h.data("resizable-alsoresize").position})})};
if(f._revertToRelativePosition){f._revertToRelativePosition=false;typeof g.alsoResize=="object"&&!g.alsoResize.nodeType?b.each(g.alsoResize,function(c){a(c)}):a(g.alsoResize)}b(this).removeData("resizable-alsoresize")}});b.ui.plugin.add("resizable","animate",{stop:function(f){var g=b(this).data("resizable"),a=g.options,c=g._proportionallyResizeElements,h=c.length&&/textarea/i.test(c[0].nodeName),i=h&&b.ui.hasScroll(c[0],"left")?0:g.sizeDiff.height;h={width:g.size.width-(h?0:g.sizeDiff.width),height:g.size.height-
i};i=parseInt(g.element.css("left"),10)+(g.position.left-g.originalPosition.left)||null;var j=parseInt(g.element.css("top"),10)+(g.position.top-g.originalPosition.top)||null;g.element.animate(b.extend(h,j&&i?{top:j,left:i}:{}),{duration:a.animateDuration,easing:a.animateEasing,step:function(){var n={width:parseInt(g.element.css("width"),10),height:parseInt(g.element.css("height"),10),top:parseInt(g.element.css("top"),10),left:parseInt(g.element.css("left"),10)};c&&c.length&&b(c[0]).css({width:n.width,
height:n.height});g._updateCache(n);g._propagate("resize",f)}})}});b.ui.plugin.add("resizable","containment",{start:function(){var f=b(this).data("resizable"),g=f.element,a=f.options.containment;if(g=a instanceof b?a.get(0):/parent/.test(a)?g.parent().get(0):a){f.containerElement=b(g);if(/document/.test(a)||a==document){f.containerOffset={left:0,top:0};f.containerPosition={left:0,top:0};f.parentData={element:b(document),left:0,top:0,width:b(document).width(),height:b(document).height()||document.body.parentNode.scrollHeight}}else{var c=
b(g),h=[];b(["Top","Right","Left","Bottom"]).each(function(n,o){h[n]=d(c.css("padding"+o))});f.containerOffset=c.offset();f.containerPosition=c.position();f.containerSize={height:c.innerHeight()-h[3],width:c.innerWidth()-h[1]};a=f.containerOffset;var i=f.containerSize.height,j=f.containerSize.width;j=b.ui.hasScroll(g,"left")?g.scrollWidth:j;i=b.ui.hasScroll(g)?g.scrollHeight:i;f.parentData={element:g,left:a.left,top:a.top,width:j,height:i}}}},resize:function(f){var g=b(this).data("resizable"),a=g.options,
c=g.containerOffset,h=g.position;f=g._aspectRatio||f.shiftKey;var i={top:0,left:0},j=g.containerElement;if(j[0]!=document&&/static/.test(j.css("position")))i=c;if(h.left<(g._helper?c.left:0)){g.size.width+=g._helper?g.position.left-c.left:g.position.left-i.left;if(f)g.size.height=g.size.width/a.aspectRatio;g.position.left=a.helper?c.left:0}if(h.top<(g._helper?c.top:0)){g.size.height+=g._helper?g.position.top-c.top:g.position.top;if(f)g.size.width=g.size.height*a.aspectRatio;g.position.top=g._helper?
c.top:0}g.offset.left=g.parentData.left+g.position.left;g.offset.top=g.parentData.top+g.position.top;a=Math.abs((g._helper?g.offset.left-i.left:g.offset.left-i.left)+g.sizeDiff.width);c=Math.abs((g._helper?g.offset.top-i.top:g.offset.top-c.top)+g.sizeDiff.height);h=g.containerElement.get(0)==g.element.parent().get(0);i=/relative|absolute/.test(g.containerElement.css("position"));if(h&&i)a-=g.parentData.left;if(a+g.size.width>=g.parentData.width){g.size.width=g.parentData.width-a;if(f)g.size.height=
g.size.width/g.aspectRatio}if(c+g.size.height>=g.parentData.height){g.size.height=g.parentData.height-c;if(f)g.size.width=g.size.height*g.aspectRatio}},stop:function(){var f=b(this).data("resizable"),g=f.options,a=f.containerOffset,c=f.containerPosition,h=f.containerElement,i=b(f.helper),j=i.offset(),n=i.outerWidth()-f.sizeDiff.width;i=i.outerHeight()-f.sizeDiff.height;f._helper&&!g.animate&&/relative/.test(h.css("position"))&&b(this).css({left:j.left-c.left-a.left,width:n,height:i});f._helper&&!g.animate&&
/static/.test(h.css("position"))&&b(this).css({left:j.left-c.left-a.left,width:n,height:i})}});b.ui.plugin.add("resizable","ghost",{start:function(){var f=b(this).data("resizable"),g=f.options,a=f.size;f.ghost=f.originalElement.clone();f.ghost.css({opacity:0.25,display:"block",position:"relative",height:a.height,width:a.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof g.ghost=="string"?g.ghost:"");f.ghost.appendTo(f.helper)},resize:function(){var f=b(this).data("resizable");
f.ghost&&f.ghost.css({position:"relative",height:f.size.height,width:f.size.width})},stop:function(){var f=b(this).data("resizable");f.ghost&&f.helper&&f.helper.get(0).removeChild(f.ghost.get(0))}});b.ui.plugin.add("resizable","grid",{resize:function(){var f=b(this).data("resizable"),g=f.options,a=f.size,c=f.originalSize,h=f.originalPosition,i=f.axis;g.grid=typeof g.grid=="number"?[g.grid,g.grid]:g.grid;var j=Math.round((a.width-c.width)/(g.grid[0]||1))*(g.grid[0]||1);g=Math.round((a.height-c.height)/
(g.grid[1]||1))*(g.grid[1]||1);if(/^(se|s|e)$/.test(i)){f.size.width=c.width+j;f.size.height=c.height+g}else if(/^(ne)$/.test(i)){f.size.width=c.width+j;f.size.height=c.height+g;f.position.top=h.top-g}else{if(/^(sw)$/.test(i)){f.size.width=c.width+j;f.size.height=c.height+g}else{f.size.width=c.width+j;f.size.height=c.height+g;f.position.top=h.top-g}f.position.left=h.left-j}}});var d=function(f){return parseInt(f,10)||0},e=function(f){return!isNaN(parseInt(f,10))}})(jQuery);
(function(b){b.widget("ui.selectable",b.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var d=this;this.element.addClass("ui-selectable");this.dragged=false;var e;this.refresh=function(){e=b(d.options.filter,d.element[0]);e.each(function(){var f=b(this),g=f.offset();b.data(this,"selectable-item",{element:this,$element:f,left:g.left,top:g.top,right:g.left+f.outerWidth(),bottom:g.top+f.outerHeight(),startselected:false,selected:f.hasClass("ui-selected"),
selecting:f.hasClass("ui-selecting"),unselecting:f.hasClass("ui-unselecting")})})};this.refresh();this.selectees=e.addClass("ui-selectee");this._mouseInit();this.helper=b("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(d){var e=this;this.opos=[d.pageX,
d.pageY];if(!this.options.disabled){var f=this.options;this.selectees=b(f.filter,this.element[0]);this._trigger("start",d);b(f.appendTo).append(this.helper);this.helper.css({left:d.clientX,top:d.clientY,width:0,height:0});f.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var g=b.data(this,"selectable-item");g.startselected=true;if(!d.metaKey){g.$element.removeClass("ui-selected");g.selected=false;g.$element.addClass("ui-unselecting");g.unselecting=true;e._trigger("unselecting",
d,{unselecting:g.element})}});b(d.target).parents().andSelf().each(function(){var g=b.data(this,"selectable-item");if(g){var a=!d.metaKey||!g.$element.hasClass("ui-selected");g.$element.removeClass(a?"ui-unselecting":"ui-selected").addClass(a?"ui-selecting":"ui-unselecting");g.unselecting=!a;g.selecting=a;(g.selected=a)?e._trigger("selecting",d,{selecting:g.element}):e._trigger("unselecting",d,{unselecting:g.element});return false}})}},_mouseDrag:function(d){var e=this;this.dragged=true;if(!this.options.disabled){var f=
this.options,g=this.opos[0],a=this.opos[1],c=d.pageX,h=d.pageY;if(g>c){var i=c;c=g;g=i}if(a>h){i=h;h=a;a=i}this.helper.css({left:g,top:a,width:c-g,height:h-a});this.selectees.each(function(){var j=b.data(this,"selectable-item");if(!(!j||j.element==e.element[0])){var n=false;if(f.tolerance=="touch")n=!(j.left>c||j.right<g||j.top>h||j.bottom<a);else if(f.tolerance=="fit")n=j.left>g&&j.right<c&&j.top>a&&j.bottom<h;if(n){if(j.selected){j.$element.removeClass("ui-selected");j.selected=false}if(j.unselecting){j.$element.removeClass("ui-unselecting");
j.unselecting=false}if(!j.selecting){j.$element.addClass("ui-selecting");j.selecting=true;e._trigger("selecting",d,{selecting:j.element})}}else{if(j.selecting)if(d.metaKey&&j.startselected){j.$element.removeClass("ui-selecting");j.selecting=false;j.$element.addClass("ui-selected");j.selected=true}else{j.$element.removeClass("ui-selecting");j.selecting=false;if(j.startselected){j.$element.addClass("ui-unselecting");j.unselecting=true}e._trigger("unselecting",d,{unselecting:j.element})}if(j.selected)if(!d.metaKey&&
!j.startselected){j.$element.removeClass("ui-selected");j.selected=false;j.$element.addClass("ui-unselecting");j.unselecting=true;e._trigger("unselecting",d,{unselecting:j.element})}}}});return false}},_mouseStop:function(d){var e=this;this.dragged=false;b(".ui-unselecting",this.element[0]).each(function(){var f=b.data(this,"selectable-item");f.$element.removeClass("ui-unselecting");f.unselecting=false;f.startselected=false;e._trigger("unselected",d,{unselected:f.element})});b(".ui-selecting",this.element[0]).each(function(){var f=
b.data(this,"selectable-item");f.$element.removeClass("ui-selecting").addClass("ui-selected");f.selecting=false;f.selected=true;f.startselected=true;e._trigger("selected",d,{selected:f.element})});this._trigger("stop",d);this.helper.remove();return false}});b.extend(b.ui.selectable,{version:"1.8.12"})})(jQuery);
(function(b){b.widget("ui.sortable",b.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var d=this.items.length-1;d>=0;d--)this.items[d].item.removeData("sortable-item");return this},_setOption:function(d,e){if(d==="disabled"){this.options[d]=
e;this.widget()[e?"addClass":"removeClass"]("ui-sortable-disabled")}else b.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(d,e){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(d);var f=null,g=this;b(d.target).parents().each(function(){if(b.data(this,"sortable-item")==g){f=b(this);return false}});if(b.data(d.target,"sortable-item")==g)f=b(d.target);if(!f)return false;if(this.options.handle&&!e){var a=false;
b(this.options.handle,f).find("*").andSelf().each(function(){if(this==d.target)a=true});if(!a)return false}this.currentItem=f;this._removeCurrentsFromItems();return true},_mouseStart:function(d,e,f){e=this.options;var g=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(d);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-
this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");b.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(d);this.originalPageX=d.pageX;this.originalPageY=d.pageY;e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();e.containment&&this._setContainment();if(e.cursor){if(b("body").css("cursor"))this._storedCursor=b("body").css("cursor");b("body").css("cursor",e.cursor)}if(e.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",e.opacity)}if(e.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",e.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",d,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!f)for(f=this.containers.length-1;f>=0;f--)this.containers[f]._trigger("activate",d,g._uiHash(this));if(b.ui.ddmanager)b.ui.ddmanager.current=this;b.ui.ddmanager&&!e.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,d);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(d);
return true},_mouseDrag:function(d){this.position=this._generatePosition(d);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var e=this.options,f=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-d.pageY<e.scrollSensitivity)this.scrollParent[0].scrollTop=f=this.scrollParent[0].scrollTop+e.scrollSpeed;else if(d.pageY-this.overflowOffset.top<
e.scrollSensitivity)this.scrollParent[0].scrollTop=f=this.scrollParent[0].scrollTop-e.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-d.pageX<e.scrollSensitivity)this.scrollParent[0].scrollLeft=f=this.scrollParent[0].scrollLeft+e.scrollSpeed;else if(d.pageX-this.overflowOffset.left<e.scrollSensitivity)this.scrollParent[0].scrollLeft=f=this.scrollParent[0].scrollLeft-e.scrollSpeed}else{if(d.pageY-b(document).scrollTop()<e.scrollSensitivity)f=b(document).scrollTop(b(document).scrollTop()-
e.scrollSpeed);else if(b(window).height()-(d.pageY-b(document).scrollTop())<e.scrollSensitivity)f=b(document).scrollTop(b(document).scrollTop()+e.scrollSpeed);if(d.pageX-b(document).scrollLeft()<e.scrollSensitivity)f=b(document).scrollLeft(b(document).scrollLeft()-e.scrollSpeed);else if(b(window).width()-(d.pageX-b(document).scrollLeft())<e.scrollSensitivity)f=b(document).scrollLeft(b(document).scrollLeft()+e.scrollSpeed)}f!==false&&b.ui.ddmanager&&!e.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,
d)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(e=this.items.length-1;e>=0;e--){f=this.items[e];var g=f.item[0],a=this._intersectsWithPointer(f);if(a)if(g!=this.currentItem[0]&&this.placeholder[a==1?"next":"prev"]()[0]!=g&&!b.ui.contains(this.placeholder[0],g)&&(this.options.type=="semi-dynamic"?!b.ui.contains(this.element[0],
g):true)){this.direction=a==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f))this._rearrange(d,f);else break;this._trigger("change",d,this._uiHash());break}}this._contactContainers(d);b.ui.ddmanager&&b.ui.ddmanager.drag(this,d);this._trigger("sort",d,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(d,e){if(d){b.ui.ddmanager&&!this.options.dropBehaviour&&b.ui.ddmanager.drop(this,d);if(this.options.revert){var f=this;e=f.placeholder.offset();
f.reverting=true;b(this.helper).animate({left:e.left-this.offset.parent.left-f.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-f.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){f._clear(d)})}else this._clear(d,e);return false}},cancel:function(){var d=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--){this.containers[e]._trigger("deactivate",null,d._uiHash(this));if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",null,d._uiHash(this));this.containers[e].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();b.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?b(this.domPosition.prev).after(this.currentItem):b(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(d){var e=this._getItemsAsjQuery(d&&d.connected),f=[];d=d||{};b(e).each(function(){var g=(b(d.item||this).attr(d.attribute||"id")||"").match(d.expression||/(.+)[-=_](.+)/);if(g)f.push((d.key||g[1]+"[]")+"="+(d.key&&d.expression?g[1]:g[2]))});!f.length&&d.key&&f.push(d.key+"=");return f.join("&")},
toArray:function(d){var e=this._getItemsAsjQuery(d&&d.connected),f=[];d=d||{};e.each(function(){f.push(b(d.item||this).attr(d.attribute||"id")||"")});return f},_intersectsWith:function(d){var e=this.positionAbs.left,f=e+this.helperProportions.width,g=this.positionAbs.top,a=g+this.helperProportions.height,c=d.left,h=c+d.width,i=d.top,j=i+d.height,n=this.offset.click.top,o=this.offset.click.left;n=g+n>i&&g+n<j&&e+o>c&&e+o<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>d[this.floating?"width":"height"]?n:c<e+this.helperProportions.width/2&&f-this.helperProportions.width/2<h&&i<g+this.helperProportions.height/2&&a-this.helperProportions.height/2<j},_intersectsWithPointer:function(d){var e=b.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height);d=b.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width);e=e&&d;d=this._getDragVerticalDirection();
var f=this._getDragHorizontalDirection();if(!e)return false;return this.floating?f&&f=="right"||d=="down"?2:1:d&&(d=="down"?2:1)},_intersectsWithSides:function(d){var e=b.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top+d.height/2,d.height);d=b.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left+d.width/2,d.width);var f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return this.floating&&g?g=="right"&&d||g=="left"&&!d:f&&(f=="down"&&e||f=="up"&&!e)},
_getDragVerticalDirection:function(){var d=this.positionAbs.top-this.lastPositionAbs.top;return d!=0&&(d>0?"down":"up")},_getDragHorizontalDirection:function(){var d=this.positionAbs.left-this.lastPositionAbs.left;return d!=0&&(d>0?"right":"left")},refresh:function(d){this._refreshItems(d);this.refreshPositions();return this},_connectWith:function(){var d=this.options;return d.connectWith.constructor==String?[d.connectWith]:d.connectWith},_getItemsAsjQuery:function(d){var e=[],f=[],g=this._connectWith();
if(g&&d)for(d=g.length-1;d>=0;d--)for(var a=b(g[d]),c=a.length-1;c>=0;c--){var h=b.data(a[c],"sortable");if(h&&h!=this&&!h.options.disabled)f.push([b.isFunction(h.options.items)?h.options.items.call(h.element):b(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}f.push([b.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):b(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(d=f.length-1;d>=0;d--)f[d][0].each(function(){e.push(this)});return b(e)},_removeCurrentsFromItems:function(){for(var d=this.currentItem.find(":data(sortable-item)"),e=0;e<this.items.length;e++)for(var f=0;f<d.length;f++)d[f]==this.items[e].item[0]&&this.items.splice(e,1)},_refreshItems:function(d){this.items=[];this.containers=[this];var e=this.items,f=[[b.isFunction(this.options.items)?this.options.items.call(this.element[0],d,{item:this.currentItem}):b(this.options.items,this.element),
this]],g=this._connectWith();if(g)for(var a=g.length-1;a>=0;a--)for(var c=b(g[a]),h=c.length-1;h>=0;h--){var i=b.data(c[h],"sortable");if(i&&i!=this&&!i.options.disabled){f.push([b.isFunction(i.options.items)?i.options.items.call(i.element[0],d,{item:this.currentItem}):b(i.options.items,i.element),i]);this.containers.push(i)}}for(a=f.length-1;a>=0;a--){d=f[a][1];g=f[a][0];h=0;for(c=g.length;h<c;h++){i=b(g[h]);i.data("sortable-item",d);e.push({item:i,instance:d,width:0,height:0,left:0,top:0})}}},refreshPositions:function(d){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var e=this.items.length-1;e>=0;e--){var f=this.items[e];if(!(f.instance!=this.currentContainer&&this.currentContainer&&f.item[0]!=this.currentItem[0])){var g=this.options.toleranceElement?b(this.options.toleranceElement,f.item):f.item;if(!d){f.width=g.outerWidth();f.height=g.outerHeight()}g=g.offset();f.left=g.left;f.top=g.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(e=
this.containers.length-1;e>=0;e--){g=this.containers[e].element.offset();this.containers[e].containerCache.left=g.left;this.containers[e].containerCache.top=g.top;this.containers[e].containerCache.width=this.containers[e].element.outerWidth();this.containers[e].containerCache.height=this.containers[e].element.outerHeight()}return this},_createPlaceholder:function(d){var e=d||this,f=e.options;if(!f.placeholder||f.placeholder.constructor==String){var g=f.placeholder;f.placeholder={element:function(){var a=
b(document.createElement(e.currentItem[0].nodeName)).addClass(g||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!g)a.style.visibility="hidden";return a},update:function(a,c){if(!(g&&!f.forcePlaceholderSize)){c.height()||c.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10));c.width()||c.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||
0,10))}}}}e.placeholder=b(f.placeholder.element.call(e.element,e.currentItem));e.currentItem.after(e.placeholder);f.placeholder.update(e,e.placeholder)},_contactContainers:function(d){for(var e=null,f=null,g=this.containers.length-1;g>=0;g--)if(!b.ui.contains(this.currentItem[0],this.containers[g].element[0]))if(this._intersectsWith(this.containers[g].containerCache)){if(!(e&&b.ui.contains(this.containers[g].element[0],e.element[0]))){e=this.containers[g];f=g}}else if(this.containers[g].containerCache.over){this.containers[g]._trigger("out",
d,this._uiHash(this));this.containers[g].containerCache.over=0}if(e)if(this.containers.length===1){this.containers[f]._trigger("over",d,this._uiHash(this));this.containers[f].containerCache.over=1}else if(this.currentContainer!=this.containers[f]){e=1E4;g=null;for(var a=this.positionAbs[this.containers[f].floating?"left":"top"],c=this.items.length-1;c>=0;c--)if(b.ui.contains(this.containers[f].element[0],this.items[c].item[0])){var h=this.items[c][this.containers[f].floating?"left":"top"];if(Math.abs(h-
a)<e){e=Math.abs(h-a);g=this.items[c]}}if(g||this.options.dropOnEmpty){this.currentContainer=this.containers[f];g?this._rearrange(d,g,null,true):this._rearrange(d,null,this.containers[f].element,true);this._trigger("change",d,this._uiHash());this.containers[f]._trigger("change",d,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[f]._trigger("over",d,this._uiHash(this));this.containers[f].containerCache.over=1}}},_createHelper:function(d){var e=
this.options;d=b.isFunction(e.helper)?b(e.helper.apply(this.element[0],[d,this.currentItem])):e.helper=="clone"?this.currentItem.clone():this.currentItem;d.parents("body").length||b(e.appendTo!="parent"?e.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]);if(d[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(d[0].style.width==
""||e.forceHelperSize)d.width(this.currentItem.width());if(d[0].style.height==""||e.forceHelperSize)d.height(this.currentItem.height());return d},_adjustOffsetFromHelper:function(d){if(typeof d=="string")d=d.split(" ");if(b.isArray(d))d={left:+d[0],top:+d[1]||0};if("left"in d)this.offset.click.left=d.left+this.margins.left;if("right"in d)this.offset.click.left=this.helperProportions.width-d.right+this.margins.left;if("top"in d)this.offset.click.top=d.top+this.margins.top;if("bottom"in d)this.offset.click.top=
this.helperProportions.height-d.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var d=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0])){d.left+=this.scrollParent.scrollLeft();d.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&b.browser.msie)d=
{top:0,left:0};return{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var d=this.currentItem.position();return{top:d.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),
10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var d=this.options;if(d.containment=="parent")d.containment=this.helper[0].parentNode;if(d.containment=="document"||d.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,b(d.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(b(d.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(d.containment)){var e=b(d.containment)[0];d=b(d.containment).offset();var f=b(e).css("overflow")!="hidden";this.containment=[d.left+(parseInt(b(e).css("borderLeftWidth"),10)||0)+(parseInt(b(e).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(b(e).css("borderTopWidth"),
10)||0)+(parseInt(b(e).css("paddingTop"),10)||0)-this.margins.top,d.left+(f?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(b(e).css("borderLeftWidth"),10)||0)-(parseInt(b(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(f?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(b(e).css("borderTopWidth"),10)||0)-(parseInt(b(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(d,e){if(!e)e=
this.position;d=d=="absolute"?1:-1;var f=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:e.top+this.offset.relative.top*d+this.offset.parent.top*d-(b.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:e.left+this.offset.relative.left*d+this.offset.parent.left*d-(b.browser.safari&&
this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(d){var e=this.options,f=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&b.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();
var a=d.pageX,c=d.pageY;if(this.originalPosition){if(this.containment){if(d.pageX-this.offset.click.left<this.containment[0])a=this.containment[0]+this.offset.click.left;if(d.pageY-this.offset.click.top<this.containment[1])c=this.containment[1]+this.offset.click.top;if(d.pageX-this.offset.click.left>this.containment[2])a=this.containment[2]+this.offset.click.left;if(d.pageY-this.offset.click.top>this.containment[3])c=this.containment[3]+this.offset.click.top}if(e.grid){c=this.originalPageY+Math.round((c-
this.originalPageY)/e.grid[1])*e.grid[1];c=this.containment?!(c-this.offset.click.top<this.containment[1]||c-this.offset.click.top>this.containment[3])?c:!(c-this.offset.click.top<this.containment[1])?c-e.grid[1]:c+e.grid[1]:c;a=this.originalPageX+Math.round((a-this.originalPageX)/e.grid[0])*e.grid[0];a=this.containment?!(a-this.offset.click.left<this.containment[0]||a-this.offset.click.left>this.containment[2])?a:!(a-this.offset.click.left<this.containment[0])?a-e.grid[0]:a+e.grid[0]:a}}return{top:c-
this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(b.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(b.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())}},_rearrange:function(d,e,f,g){f?f[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],
this.direction=="down"?e.item[0]:e.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var a=this,c=this.counter;window.setTimeout(function(){c==a.counter&&a.refreshPositions(!g)},0)},_clear:function(d,e){this.reverting=false;var f=[];!this._noFinalSort&&this.currentItem[0].parentNode&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var g in this._storedCSS)if(this._storedCSS[g]=="auto"||this._storedCSS[g]=="static")this._storedCSS[g]=
"";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!e&&f.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e)f.push(function(a){this._trigger("update",a,this._uiHash())});if(!b.ui.contains(this.element[0],this.currentItem[0])){e||f.push(function(a){this._trigger("remove",
a,this._uiHash())});for(g=this.containers.length-1;g>=0;g--)if(b.ui.contains(this.containers[g].element[0],this.currentItem[0])&&!e){f.push(function(a){return function(c){a._trigger("receive",c,this._uiHash(this))}}.call(this,this.containers[g]));f.push(function(a){return function(c){a._trigger("update",c,this._uiHash(this))}}.call(this,this.containers[g]))}}for(g=this.containers.length-1;g>=0;g--){e||f.push(function(a){return function(c){a._trigger("deactivate",c,this._uiHash(this))}}.call(this,
this.containers[g]));if(this.containers[g].containerCache.over){f.push(function(a){return function(c){a._trigger("out",c,this._uiHash(this))}}.call(this,this.containers[g]));this.containers[g].containerCache.over=0}}this._storedCursor&&b("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!e){this._trigger("beforeStop",
d,this._uiHash());for(g=0;g<f.length;g++)f[g].call(this,d);this._trigger("stop",d,this._uiHash())}return false}e||this._trigger("beforeStop",d,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!e){for(g=0;g<f.length;g++)f[g].call(this,d);this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){b.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},
_uiHash:function(d){var e=d||this;return{helper:e.helper,placeholder:e.placeholder||b([]),position:e.position,originalPosition:e.originalPosition,offset:e.positionAbs,item:e.currentItem,sender:d?d.element:null}}});b.extend(b.ui.sortable,{version:"1.8.12"})})(jQuery);
jQuery.effects||function(b,d){function e(l){var k;if(l&&l.constructor==Array&&l.length==3)return l;if(k=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(l))return[parseInt(k[1],10),parseInt(k[2],10),parseInt(k[3],10)];if(k=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(l))return[parseFloat(k[1])*2.55,parseFloat(k[2])*2.55,parseFloat(k[3])*2.55];if(k=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(l))return[parseInt(k[1],
16),parseInt(k[2],16),parseInt(k[3],16)];if(k=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(l))return[parseInt(k[1]+k[1],16),parseInt(k[2]+k[2],16),parseInt(k[3]+k[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(l))return j.transparent;return j[b.trim(l).toLowerCase()]}function f(l,k){var m;do{m=b.curCSS(l,k);if(m!=""&&m!="transparent"||b.nodeName(l,"body"))break;k="backgroundColor"}while(l=l.parentNode);return e(m)}function g(){var l=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
k={},m,p;if(l&&l.length&&l[0]&&l[l[0]])for(var q=l.length;q--;){m=l[q];if(typeof l[m]=="string"){p=m.replace(/\-(\w)/g,function(s,r){return r.toUpperCase()});k[p]=l[m]}}else for(m in l)if(typeof l[m]==="string")k[m]=l[m];return k}function a(l){var k,m;for(k in l){m=l[k];if(m==null||b.isFunction(m)||k in o||/scrollbar/.test(k)||!/color/i.test(k)&&isNaN(parseFloat(m)))delete l[k]}return l}function c(l,k){var m={_:0},p;for(p in k)if(l[p]!=k[p])m[p]=k[p];return m}function h(l,k,m,p){if(typeof l=="object"){p=
k;m=null;k=l;l=k.effect}if(b.isFunction(k)){p=k;m=null;k={}}if(typeof k=="number"||b.fx.speeds[k]){p=m;m=k;k={}}if(b.isFunction(m)){p=m;m=null}k=k||{};m=m||k.duration;m=b.fx.off?0:typeof m=="number"?m:m in b.fx.speeds?b.fx.speeds[m]:b.fx.speeds._default;p=p||k.complete;return[l,k,m,p]}function i(l){if(!l||typeof l==="number"||b.fx.speeds[l])return true;if(typeof l==="string"&&!b.effects[l])return true;return false}b.effects={};b.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(l,k){b.fx.step[k]=function(m){if(!m.colorInit){m.start=f(m.elem,k);m.end=e(m.end);m.colorInit=true}m.elem.style[k]="rgb("+Math.max(Math.min(parseInt(m.pos*(m.end[0]-m.start[0])+m.start[0],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[1]-m.start[1])+m.start[1],10),255),0)+","+Math.max(Math.min(parseInt(m.pos*(m.end[2]-m.start[2])+m.start[2],10),255),0)+")"}});var j={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},n=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};b.effects.animateClass=function(l,k,m,
p){if(b.isFunction(m)){p=m;m=null}return this.queue("fx",function(){var q=b(this),s=q.attr("style")||" ",r=a(g.call(this)),u,v=q.attr("className");b.each(n,function(w,y){l[y]&&q[y+"Class"](l[y])});u=a(g.call(this));q.attr("className",v);q.animate(c(r,u),k,m,function(){b.each(n,function(w,y){l[y]&&q[y+"Class"](l[y])});if(typeof q.attr("style")=="object"){q.attr("style").cssText="";q.attr("style").cssText=s}else q.attr("style",s);p&&p.apply(this,arguments)});r=b.queue(this);u=r.splice(r.length-1,1)[0];
r.splice(1,0,u);b.dequeue(this)})};b.fn.extend({_addClass:b.fn.addClass,addClass:function(l,k,m,p){return k?b.effects.animateClass.apply(this,[{add:l},k,m,p]):this._addClass(l)},_removeClass:b.fn.removeClass,removeClass:function(l,k,m,p){return k?b.effects.animateClass.apply(this,[{remove:l},k,m,p]):this._removeClass(l)},_toggleClass:b.fn.toggleClass,toggleClass:function(l,k,m,p,q){return typeof k=="boolean"||k===d?m?b.effects.animateClass.apply(this,[k?{add:l}:{remove:l},m,p,q]):this._toggleClass(l,
k):b.effects.animateClass.apply(this,[{toggle:l},k,m,p])},switchClass:function(l,k,m,p,q){return b.effects.animateClass.apply(this,[{add:k,remove:l},m,p,q])}});b.extend(b.effects,{version:"1.8.12",save:function(l,k){for(var m=0;m<k.length;m++)k[m]!==null&&l.data("ec.storage."+k[m],l[0].style[k[m]])},restore:function(l,k){for(var m=0;m<k.length;m++)k[m]!==null&&l.css(k[m],l.data("ec.storage."+k[m]))},setMode:function(l,k){if(k=="toggle")k=l.is(":hidden")?"show":"hide";return k},getBaseline:function(l,
k){var m;switch(l[0]){case "top":m=0;break;case "middle":m=0.5;break;case "bottom":m=1;break;default:m=l[0]/k.height}switch(l[1]){case "left":l=0;break;case "center":l=0.5;break;case "right":l=1;break;default:l=l[1]/k.width}return{x:l,y:m}},createWrapper:function(l){if(l.parent().is(".ui-effects-wrapper"))return l.parent();var k={width:l.outerWidth(true),height:l.outerHeight(true),"float":l.css("float")},m=b("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",
border:"none",margin:0,padding:0});l.wrap(m);m=l.parent();if(l.css("position")=="static"){m.css({position:"relative"});l.css({position:"relative"})}else{b.extend(k,{position:l.css("position"),zIndex:l.css("z-index")});b.each(["top","left","bottom","right"],function(p,q){k[q]=l.css(q);if(isNaN(parseInt(k[q],10)))k[q]="auto"});l.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return m.css(k).show()},removeWrapper:function(l){if(l.parent().is(".ui-effects-wrapper"))return l.parent().replaceWith(l);
return l},setTransition:function(l,k,m,p){p=p||{};b.each(k,function(q,s){unit=l.cssUnit(s);if(unit[0]>0)p[s]=unit[0]*m+unit[1]});return p}});b.fn.extend({effect:function(l){var k=h.apply(this,arguments),m={options:k[1],duration:k[2],callback:k[3]};k=m.options.mode;var p=b.effects[l];if(b.fx.off||!p)return k?this[k](m.duration,m.callback):this.each(function(){m.callback&&m.callback.call(this)});return p.call(this,m)},_show:b.fn.show,show:function(l){if(i(l))return this._show.apply(this,arguments);
else{var k=h.apply(this,arguments);k[1].mode="show";return this.effect.apply(this,k)}},_hide:b.fn.hide,hide:function(l){if(i(l))return this._hide.apply(this,arguments);else{var k=h.apply(this,arguments);k[1].mode="hide";return this.effect.apply(this,k)}},__toggle:b.fn.toggle,toggle:function(l){if(i(l)||typeof l==="boolean"||b.isFunction(l))return this.__toggle.apply(this,arguments);else{var k=h.apply(this,arguments);k[1].mode="toggle";return this.effect.apply(this,k)}},cssUnit:function(l){var k=this.css(l),
m=[];b.each(["em","px","%","pt"],function(p,q){if(k.indexOf(q)>0)m=[parseFloat(k),q]});return m}});b.easing.jswing=b.easing.swing;b.extend(b.easing,{def:"easeOutQuad",swing:function(l,k,m,p,q){return b.easing[b.easing.def](l,k,m,p,q)},easeInQuad:function(l,k,m,p,q){return p*(k/=q)*k+m},easeOutQuad:function(l,k,m,p,q){return-p*(k/=q)*(k-2)+m},easeInOutQuad:function(l,k,m,p,q){if((k/=q/2)<1)return p/2*k*k+m;return-p/2*(--k*(k-2)-1)+m},easeInCubic:function(l,k,m,p,q){return p*(k/=q)*k*k+m},easeOutCubic:function(l,
k,m,p,q){return p*((k=k/q-1)*k*k+1)+m},easeInOutCubic:function(l,k,m,p,q){if((k/=q/2)<1)return p/2*k*k*k+m;return p/2*((k-=2)*k*k+2)+m},easeInQuart:function(l,k,m,p,q){return p*(k/=q)*k*k*k+m},easeOutQuart:function(l,k,m,p,q){return-p*((k=k/q-1)*k*k*k-1)+m},easeInOutQuart:function(l,k,m,p,q){if((k/=q/2)<1)return p/2*k*k*k*k+m;return-p/2*((k-=2)*k*k*k-2)+m},easeInQuint:function(l,k,m,p,q){return p*(k/=q)*k*k*k*k+m},easeOutQuint:function(l,k,m,p,q){return p*((k=k/q-1)*k*k*k*k+1)+m},easeInOutQuint:function(l,
k,m,p,q){if((k/=q/2)<1)return p/2*k*k*k*k*k+m;return p/2*((k-=2)*k*k*k*k+2)+m},easeInSine:function(l,k,m,p,q){return-p*Math.cos(k/q*(Math.PI/2))+p+m},easeOutSine:function(l,k,m,p,q){return p*Math.sin(k/q*(Math.PI/2))+m},easeInOutSine:function(l,k,m,p,q){return-p/2*(Math.cos(Math.PI*k/q)-1)+m},easeInExpo:function(l,k,m,p,q){return k==0?m:p*Math.pow(2,10*(k/q-1))+m},easeOutExpo:function(l,k,m,p,q){return k==q?m+p:p*(-Math.pow(2,-10*k/q)+1)+m},easeInOutExpo:function(l,k,m,p,q){if(k==0)return m;if(k==
q)return m+p;if((k/=q/2)<1)return p/2*Math.pow(2,10*(k-1))+m;return p/2*(-Math.pow(2,-10*--k)+2)+m},easeInCirc:function(l,k,m,p,q){return-p*(Math.sqrt(1-(k/=q)*k)-1)+m},easeOutCirc:function(l,k,m,p,q){return p*Math.sqrt(1-(k=k/q-1)*k)+m},easeInOutCirc:function(l,k,m,p,q){if((k/=q/2)<1)return-p/2*(Math.sqrt(1-k*k)-1)+m;return p/2*(Math.sqrt(1-(k-=2)*k)+1)+m},easeInElastic:function(l,k,m,p,q){l=1.70158;var s=0,r=p;if(k==0)return m;if((k/=q)==1)return m+p;s||(s=q*0.3);if(r<Math.abs(p)){r=p;l=s/4}else l=
s/(2*Math.PI)*Math.asin(p/r);return-(r*Math.pow(2,10*(k-=1))*Math.sin((k*q-l)*2*Math.PI/s))+m},easeOutElastic:function(l,k,m,p,q){l=1.70158;var s=0,r=p;if(k==0)return m;if((k/=q)==1)return m+p;s||(s=q*0.3);if(r<Math.abs(p)){r=p;l=s/4}else l=s/(2*Math.PI)*Math.asin(p/r);return r*Math.pow(2,-10*k)*Math.sin((k*q-l)*2*Math.PI/s)+p+m},easeInOutElastic:function(l,k,m,p,q){l=1.70158;var s=0,r=p;if(k==0)return m;if((k/=q/2)==2)return m+p;s||(s=q*0.3*1.5);if(r<Math.abs(p)){r=p;l=s/4}else l=s/(2*Math.PI)*Math.asin(p/
r);if(k<1)return-0.5*r*Math.pow(2,10*(k-=1))*Math.sin((k*q-l)*2*Math.PI/s)+m;return r*Math.pow(2,-10*(k-=1))*Math.sin((k*q-l)*2*Math.PI/s)*0.5+p+m},easeInBack:function(l,k,m,p,q,s){if(s==d)s=1.70158;return p*(k/=q)*k*((s+1)*k-s)+m},easeOutBack:function(l,k,m,p,q,s){if(s==d)s=1.70158;return p*((k=k/q-1)*k*((s+1)*k+s)+1)+m},easeInOutBack:function(l,k,m,p,q,s){if(s==d)s=1.70158;if((k/=q/2)<1)return p/2*k*k*(((s*=1.525)+1)*k-s)+m;return p/2*((k-=2)*k*(((s*=1.525)+1)*k+s)+2)+m},easeInBounce:function(l,
k,m,p,q){return p-b.easing.easeOutBounce(l,q-k,0,p,q)+m},easeOutBounce:function(l,k,m,p,q){return(k/=q)<1/2.75?p*7.5625*k*k+m:k<2/2.75?p*(7.5625*(k-=1.5/2.75)*k+0.75)+m:k<2.5/2.75?p*(7.5625*(k-=2.25/2.75)*k+0.9375)+m:p*(7.5625*(k-=2.625/2.75)*k+0.984375)+m},easeInOutBounce:function(l,k,m,p,q){if(k<q/2)return b.easing.easeInBounce(l,k*2,0,p,q)*0.5+m;return b.easing.easeOutBounce(l,k*2-q,0,p,q)*0.5+p*0.5+m}})}(jQuery);
(function(b){b.effects.blind=function(d){return this.queue(function(){var e=b(this),f=["position","top","bottom","left","right"],g=b.effects.setMode(e,d.options.mode||"hide"),a=d.options.direction||"vertical";b.effects.save(e,f);e.show();var c=b.effects.createWrapper(e).css({overflow:"hidden"}),h=a=="vertical"?"height":"width";a=a=="vertical"?c.height():c.width();g=="show"&&c.css(h,0);var i={};i[h]=g=="show"?a:0;c.animate(i,d.duration,d.options.easing,function(){g=="hide"&&e.hide();b.effects.restore(e,
f);b.effects.removeWrapper(e);d.callback&&d.callback.apply(e[0],arguments);e.dequeue()})})}})(jQuery);
(function(b){b.effects.bounce=function(d){return this.queue(function(){var e=b(this),f=["position","top","bottom","left","right"],g=b.effects.setMode(e,d.options.mode||"effect"),a=d.options.direction||"up",c=d.options.distance||20,h=d.options.times||5,i=d.duration||250;/show|hide/.test(g)&&f.push("opacity");b.effects.save(e,f);e.show();b.effects.createWrapper(e);var j=a=="up"||a=="down"?"top":"left";a=a=="up"||a=="left"?"pos":"neg";c=d.options.distance||(j=="top"?e.outerHeight({margin:true})/3:e.outerWidth({margin:true})/
3);if(g=="show")e.css("opacity",0).css(j,a=="pos"?-c:c);if(g=="hide")c/=h*2;g!="hide"&&h--;if(g=="show"){var n={opacity:1};n[j]=(a=="pos"?"+=":"-=")+c;e.animate(n,i/2,d.options.easing);c/=2;h--}for(n=0;n<h;n++){var o={},l={};o[j]=(a=="pos"?"-=":"+=")+c;l[j]=(a=="pos"?"+=":"-=")+c;e.animate(o,i/2,d.options.easing).animate(l,i/2,d.options.easing);c=g=="hide"?c*2:c/2}if(g=="hide"){n={opacity:0};n[j]=(a=="pos"?"-=":"+=")+c;e.animate(n,i/2,d.options.easing,function(){e.hide();b.effects.restore(e,f);b.effects.removeWrapper(e);
d.callback&&d.callback.apply(this,arguments)})}else{o={};l={};o[j]=(a=="pos"?"-=":"+=")+c;l[j]=(a=="pos"?"+=":"-=")+c;e.animate(o,i/2,d.options.easing).animate(l,i/2,d.options.easing,function(){b.effects.restore(e,f);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments)})}e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);
(function(b){b.effects.clip=function(d){return this.queue(function(){var e=b(this),f=["position","top","bottom","left","right","height","width"],g=b.effects.setMode(e,d.options.mode||"hide"),a=d.options.direction||"vertical";b.effects.save(e,f);e.show();var c=b.effects.createWrapper(e).css({overflow:"hidden"});c=e[0].tagName=="IMG"?c:e;var h={size:a=="vertical"?"height":"width",position:a=="vertical"?"top":"left"};a=a=="vertical"?c.height():c.width();if(g=="show"){c.css(h.size,0);c.css(h.position,
a/2)}var i={};i[h.size]=g=="show"?a:0;i[h.position]=g=="show"?0:a/2;c.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){g=="hide"&&e.hide();b.effects.restore(e,f);b.effects.removeWrapper(e);d.callback&&d.callback.apply(e[0],arguments);e.dequeue()}})})}})(jQuery);
(function(b){b.effects.drop=function(d){return this.queue(function(){var e=b(this),f=["position","top","bottom","left","right","opacity"],g=b.effects.setMode(e,d.options.mode||"hide"),a=d.options.direction||"left";b.effects.save(e,f);e.show();b.effects.createWrapper(e);var c=a=="up"||a=="down"?"top":"left";a=a=="up"||a=="left"?"pos":"neg";var h=d.options.distance||(c=="top"?e.outerHeight({margin:true})/2:e.outerWidth({margin:true})/2);if(g=="show")e.css("opacity",0).css(c,a=="pos"?-h:h);var i={opacity:g==
"show"?1:0};i[c]=(g=="show"?a=="pos"?"+=":"-=":a=="pos"?"-=":"+=")+h;e.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){g=="hide"&&e.hide();b.effects.restore(e,f);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments);e.dequeue()}})})}})(jQuery);
(function(b){b.effects.explode=function(d){return this.queue(function(){var e=d.options.pieces?Math.round(Math.sqrt(d.options.pieces)):3,f=d.options.pieces?Math.round(Math.sqrt(d.options.pieces)):3;d.options.mode=d.options.mode=="toggle"?b(this).is(":visible")?"hide":"show":d.options.mode;var g=b(this).show().css("visibility","hidden"),a=g.offset();a.top-=parseInt(g.css("marginTop"),10)||0;a.left-=parseInt(g.css("marginLeft"),10)||0;for(var c=g.outerWidth(true),h=g.outerHeight(true),i=0;i<e;i++)for(var j=
0;j<f;j++)g.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*(c/f),top:-i*(h/e)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:c/f,height:h/e,left:a.left+j*(c/f)+(d.options.mode=="show"?(j-Math.floor(f/2))*(c/f):0),top:a.top+i*(h/e)+(d.options.mode=="show"?(i-Math.floor(e/2))*(h/e):0),opacity:d.options.mode=="show"?0:1}).animate({left:a.left+j*(c/f)+(d.options.mode=="show"?0:(j-Math.floor(f/2))*(c/f)),top:a.top+
i*(h/e)+(d.options.mode=="show"?0:(i-Math.floor(e/2))*(h/e)),opacity:d.options.mode=="show"?1:0},d.duration||500);setTimeout(function(){d.options.mode=="show"?g.css({visibility:"visible"}):g.css({visibility:"visible"}).hide();d.callback&&d.callback.apply(g[0]);g.dequeue();b("div.ui-effects-explode").remove()},d.duration||500)})}})(jQuery);
(function(b){b.effects.fade=function(d){return this.queue(function(){var e=b(this),f=b.effects.setMode(e,d.options.mode||"hide");e.animate({opacity:f},{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){d.callback&&d.callback.apply(this,arguments);e.dequeue()}})})}})(jQuery);
(function(b){b.effects.fold=function(d){return this.queue(function(){var e=b(this),f=["position","top","bottom","left","right"],g=b.effects.setMode(e,d.options.mode||"hide"),a=d.options.size||15,c=!!d.options.horizFirst,h=d.duration?d.duration/2:b.fx.speeds._default/2;b.effects.save(e,f);e.show();var i=b.effects.createWrapper(e).css({overflow:"hidden"}),j=g=="show"!=c,n=j?["width","height"]:["height","width"];j=j?[i.width(),i.height()]:[i.height(),i.width()];var o=/([0-9]+)%/.exec(a);if(o)a=parseInt(o[1],
10)/100*j[g=="hide"?0:1];if(g=="show")i.css(c?{height:0,width:a}:{height:a,width:0});c={};o={};c[n[0]]=g=="show"?j[0]:a;o[n[1]]=g=="show"?j[1]:0;i.animate(c,h,d.options.easing).animate(o,h,d.options.easing,function(){g=="hide"&&e.hide();b.effects.restore(e,f);b.effects.removeWrapper(e);d.callback&&d.callback.apply(e[0],arguments);e.dequeue()})})}})(jQuery);
(function(b){b.effects.highlight=function(d){return this.queue(function(){var e=b(this),f=["backgroundImage","backgroundColor","opacity"],g=b.effects.setMode(e,d.options.mode||"show"),a={backgroundColor:e.css("backgroundColor")};if(g=="hide")a.opacity=0;b.effects.save(e,f);e.show().css({backgroundImage:"none",backgroundColor:d.options.color||"#ffff99"}).animate(a,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){g=="hide"&&e.hide();b.effects.restore(e,f);g=="show"&&!b.support.opacity&&
this.style.removeAttribute("filter");d.callback&&d.callback.apply(this,arguments);e.dequeue()}})})}})(jQuery);
(function(b){b.effects.pulsate=function(d){return this.queue(function(){var e=b(this),f=b.effects.setMode(e,d.options.mode||"show");times=(d.options.times||5)*2-1;duration=d.duration?d.duration/2:b.fx.speeds._default/2;isVisible=e.is(":visible");animateTo=0;if(!isVisible){e.css("opacity",0).show();animateTo=1}if(f=="hide"&&isVisible||f=="show"&&!isVisible)times--;for(f=0;f<times;f++){e.animate({opacity:animateTo},duration,d.options.easing);animateTo=(animateTo+1)%2}e.animate({opacity:animateTo},duration,
d.options.easing,function(){animateTo==0&&e.hide();d.callback&&d.callback.apply(this,arguments)});e.queue("fx",function(){e.dequeue()}).dequeue()})}})(jQuery);
(function(b){b.effects.puff=function(d){return this.queue(function(){var e=b(this),f=b.effects.setMode(e,d.options.mode||"hide"),g=parseInt(d.options.percent,10)||150,a=g/100,c={height:e.height(),width:e.width()};b.extend(d.options,{fade:true,mode:f,percent:f=="hide"?g:100,from:f=="hide"?c:{height:c.height*a,width:c.width*a}});e.effect("scale",d.options,d.duration,d.callback);e.dequeue()})};b.effects.scale=function(d){return this.queue(function(){var e=b(this),f=b.extend(true,{},d.options),g=b.effects.setMode(e,
d.options.mode||"effect"),a=parseInt(d.options.percent,10)||(parseInt(d.options.percent,10)==0?0:g=="hide"?0:100),c=d.options.direction||"both",h=d.options.origin;if(g!="effect"){f.origin=h||["middle","center"];f.restore=true}h={height:e.height(),width:e.width()};e.from=d.options.from||(g=="show"?{height:0,width:0}:h);a={y:c!="horizontal"?a/100:1,x:c!="vertical"?a/100:1};e.to={height:h.height*a.y,width:h.width*a.x};if(d.options.fade){if(g=="show"){e.from.opacity=0;e.to.opacity=1}if(g=="hide"){e.from.opacity=
1;e.to.opacity=0}}f.from=e.from;f.to=e.to;f.mode=g;e.effect("size",f,d.duration,d.callback);e.dequeue()})};b.effects.size=function(d){return this.queue(function(){var e=b(this),f=["position","top","bottom","left","right","width","height","overflow","opacity"],g=["position","top","bottom","left","right","overflow","opacity"],a=["width","height","overflow"],c=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],i=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
j=b.effects.setMode(e,d.options.mode||"effect"),n=d.options.restore||false,o=d.options.scale||"both",l=d.options.origin,k={height:e.height(),width:e.width()};e.from=d.options.from||k;e.to=d.options.to||k;if(l){l=b.effects.getBaseline(l,k);e.from.top=(k.height-e.from.height)*l.y;e.from.left=(k.width-e.from.width)*l.x;e.to.top=(k.height-e.to.height)*l.y;e.to.left=(k.width-e.to.width)*l.x}var m={from:{y:e.from.height/k.height,x:e.from.width/k.width},to:{y:e.to.height/k.height,x:e.to.width/k.width}};
if(o=="box"||o=="both"){if(m.from.y!=m.to.y){f=f.concat(h);e.from=b.effects.setTransition(e,h,m.from.y,e.from);e.to=b.effects.setTransition(e,h,m.to.y,e.to)}if(m.from.x!=m.to.x){f=f.concat(i);e.from=b.effects.setTransition(e,i,m.from.x,e.from);e.to=b.effects.setTransition(e,i,m.to.x,e.to)}}if(o=="content"||o=="both")if(m.from.y!=m.to.y){f=f.concat(c);e.from=b.effects.setTransition(e,c,m.from.y,e.from);e.to=b.effects.setTransition(e,c,m.to.y,e.to)}b.effects.save(e,n?f:g);e.show();b.effects.createWrapper(e);
e.css("overflow","hidden").css(e.from);if(o=="content"||o=="both"){h=h.concat(["marginTop","marginBottom"]).concat(c);i=i.concat(["marginLeft","marginRight"]);a=f.concat(h).concat(i);e.find("*[width]").each(function(){child=b(this);n&&b.effects.save(child,a);var p={height:child.height(),width:child.width()};child.from={height:p.height*m.from.y,width:p.width*m.from.x};child.to={height:p.height*m.to.y,width:p.width*m.to.x};if(m.from.y!=m.to.y){child.from=b.effects.setTransition(child,h,m.from.y,child.from);
child.to=b.effects.setTransition(child,h,m.to.y,child.to)}if(m.from.x!=m.to.x){child.from=b.effects.setTransition(child,i,m.from.x,child.from);child.to=b.effects.setTransition(child,i,m.to.x,child.to)}child.css(child.from);child.animate(child.to,d.duration,d.options.easing,function(){n&&b.effects.restore(child,a)})})}e.animate(e.to,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){e.to.opacity===0&&e.css("opacity",e.from.opacity);j=="hide"&&e.hide();b.effects.restore(e,
n?f:g);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments);e.dequeue()}})})}})(jQuery);
(function(b){b.effects.shake=function(d){return this.queue(function(){var e=b(this),f=["position","top","bottom","left","right"];b.effects.setMode(e,d.options.mode||"effect");var g=d.options.direction||"left",a=d.options.distance||20,c=d.options.times||3,h=d.duration||d.options.duration||140;b.effects.save(e,f);e.show();b.effects.createWrapper(e);var i=g=="up"||g=="down"?"top":"left",j=g=="up"||g=="left"?"pos":"neg";g={};var n={},o={};g[i]=(j=="pos"?"-=":"+=")+a;n[i]=(j=="pos"?"+=":"-=")+a*2;o[i]=
(j=="pos"?"-=":"+=")+a*2;e.animate(g,h,d.options.easing);for(a=1;a<c;a++)e.animate(n,h,d.options.easing).animate(o,h,d.options.easing);e.animate(n,h,d.options.easing).animate(g,h/2,d.options.easing,function(){b.effects.restore(e,f);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments)});e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);
(function(b){b.effects.slide=function(d){return this.queue(function(){var e=b(this),f=["position","top","bottom","left","right"],g=b.effects.setMode(e,d.options.mode||"show"),a=d.options.direction||"left";b.effects.save(e,f);e.show();b.effects.createWrapper(e).css({overflow:"hidden"});var c=a=="up"||a=="down"?"top":"left";a=a=="up"||a=="left"?"pos":"neg";var h=d.options.distance||(c=="top"?e.outerHeight({margin:true}):e.outerWidth({margin:true}));if(g=="show")e.css(c,a=="pos"?isNaN(h)?"-"+h:-h:h);
var i={};i[c]=(g=="show"?a=="pos"?"+=":"-=":a=="pos"?"-=":"+=")+h;e.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){g=="hide"&&e.hide();b.effects.restore(e,f);b.effects.removeWrapper(e);d.callback&&d.callback.apply(this,arguments);e.dequeue()}})})}})(jQuery);
(function(b){b.effects.transfer=function(d){return this.queue(function(){var e=b(this),f=b(d.options.to),g=f.offset();f={top:g.top,left:g.left,height:f.innerHeight(),width:f.innerWidth()};g=e.offset();var a=b('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(d.options.className).css({top:g.top,left:g.left,height:e.innerHeight(),width:e.innerWidth(),position:"absolute"}).animate(f,d.duration,d.options.easing,function(){a.remove();d.callback&&d.callback.apply(e[0],arguments);
e.dequeue()})})}})(jQuery);
(function(b){b.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var d=this,e=d.options;d.running=0;d.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");d.headers=
d.element.find(e.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){e.disabled||b(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){e.disabled||b(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){e.disabled||b(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){e.disabled||b(this).removeClass("ui-state-focus")});d.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(e.navigation){var f=d.element.find("a").filter(e.navigationFilter).eq(0);if(f.length){var g=f.closest(".ui-accordion-header");d.active=g.length?g:f.closest(".ui-accordion-content").prev()}}d.active=d._findActive(d.active||e.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");d.active.next().addClass("ui-accordion-content-active");d._createIcons();d.resize();d.element.attr("role","tablist");d.headers.attr("role","tab").bind("keydown.accordion",
function(a){return d._keydown(a)}).next().attr("role","tabpanel");d.headers.not(d.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();d.active.length?d.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):d.headers.eq(0).attr("tabIndex",0);b.browser.safari||d.headers.find("a").attr("tabIndex",-1);e.event&&d.headers.bind(e.event.split(" ").join(".accordion ")+".accordion",function(a){d._clickHandler.call(d,a,this);a.preventDefault()})},_createIcons:function(){var d=
this.options;if(d.icons){b("<span></span>").addClass("ui-icon "+d.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var d=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var e=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(d.autoHeight||d.fillHeight)e.css("height","");return b.Widget.prototype.destroy.call(this)},_setOption:function(d,e){b.Widget.prototype._setOption.apply(this,arguments);d=="active"&&this.activate(e);if(d=="icons"){this._destroyIcons();
e&&this._createIcons()}if(d=="disabled")this.headers.add(this.headers.next())[e?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(d){if(!(this.options.disabled||d.altKey||d.ctrlKey)){var e=b.ui.keyCode,f=this.headers.length,g=this.headers.index(d.target),a=false;switch(d.keyCode){case e.RIGHT:case e.DOWN:a=this.headers[(g+1)%f];break;case e.LEFT:case e.UP:a=this.headers[(g-1+f)%f];break;case e.SPACE:case e.ENTER:this._clickHandler({target:d.target},d.target);
d.preventDefault()}if(a){b(d.target).attr("tabIndex",-1);b(a).attr("tabIndex",0);a.focus();return false}return true}},resize:function(){var d=this.options,e;if(d.fillSpace){if(b.browser.msie){var f=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}e=this.element.parent().height();b.browser.msie&&this.element.parent().css("overflow",f);this.headers.each(function(){e-=b(this).outerHeight(true)});this.headers.next().each(function(){b(this).height(Math.max(0,e-b(this).innerHeight()+
b(this).height()))}).css("overflow","auto")}else if(d.autoHeight){e=0;this.headers.next().each(function(){e=Math.max(e,b(this).height("").height())}).height(e)}return this},activate:function(d){this.options.active=d;d=this._findActive(d)[0];this._clickHandler({target:d},d);return this},_findActive:function(d){return d?typeof d==="number"?this.headers.filter(":eq("+d+")"):this.headers.not(this.headers.not(d)):d===false?b([]):this.headers.filter(":eq(0)")},_clickHandler:function(d,e){var f=this.options;
if(!f.disabled)if(d.target){d=b(d.currentTarget||e);e=d[0]===this.active[0];f.active=f.collapsible&&e?false:this.headers.index(d);if(!(this.running||!f.collapsible&&e)){var g=this.active;i=d.next();c=this.active.next();h={options:f,newHeader:e&&f.collapsible?b([]):d,oldHeader:this.active,newContent:e&&f.collapsible?b([]):i,oldContent:c};var a=this.headers.index(this.active[0])>this.headers.index(d[0]);this.active=e?b([]):d;this._toggle(i,c,h,e,a);g.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(f.icons.headerSelected).addClass(f.icons.header);
if(!e){d.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(f.icons.header).addClass(f.icons.headerSelected);d.next().addClass("ui-accordion-content-active")}}}else if(f.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(f.icons.headerSelected).addClass(f.icons.header);this.active.next().addClass("ui-accordion-content-active");var c=this.active.next(),
h={options:f,newHeader:b([]),oldHeader:f.active,newContent:b([]),oldContent:c},i=this.active=b([]);this._toggle(i,c,h)}},_toggle:function(d,e,f,g,a){var c=this,h=c.options;c.toShow=d;c.toHide=e;c.data=f;var i=function(){if(c)return c._completed.apply(c,arguments)};c._trigger("changestart",null,c.data);c.running=e.size()===0?d.size():e.size();if(h.animated){f={};f=h.collapsible&&g?{toShow:b([]),toHide:e,complete:i,down:a,autoHeight:h.autoHeight||h.fillSpace}:{toShow:d,toHide:e,complete:i,down:a,autoHeight:h.autoHeight||
h.fillSpace};if(!h.proxied)h.proxied=h.animated;if(!h.proxiedDuration)h.proxiedDuration=h.duration;h.animated=b.isFunction(h.proxied)?h.proxied(f):h.proxied;h.duration=b.isFunction(h.proxiedDuration)?h.proxiedDuration(f):h.proxiedDuration;g=b.ui.accordion.animations;var j=h.duration,n=h.animated;if(n&&!g[n]&&!b.easing[n])n="slide";g[n]||(g[n]=function(o){this.slide(o,{easing:n,duration:j||700})});g[n](f)}else{if(h.collapsible&&g)d.toggle();else{e.hide();d.show()}i(true)}e.prev().attr({"aria-expanded":"false",
"aria-selected":"false",tabIndex:-1}).blur();d.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(d){this.running=d?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});b.extend(b.ui.accordion,{version:"1.8.12",
animations:{slide:function(d,e){d=b.extend({easing:"swing",duration:300},d,e);if(d.toHide.size())if(d.toShow.size()){var f=d.toShow.css("overflow"),g=0,a={},c={},h;e=d.toShow;h=e[0].style.width;e.width(parseInt(e.parent().width(),10)-parseInt(e.css("paddingLeft"),10)-parseInt(e.css("paddingRight"),10)-(parseInt(e.css("borderLeftWidth"),10)||0)-(parseInt(e.css("borderRightWidth"),10)||0));b.each(["height","paddingTop","paddingBottom"],function(i,j){c[j]="hide";i=(""+b.css(d.toShow[0],j)).match(/^([\d+-.]+)(.*)$/);
a[j]={value:i[1],unit:i[2]||"px"}});d.toShow.css({height:0,overflow:"hidden"}).show();d.toHide.filter(":hidden").each(d.complete).end().filter(":visible").animate(c,{step:function(i,j){if(j.prop=="height")g=j.end-j.start===0?0:(j.now-j.start)/(j.end-j.start);d.toShow[0].style[j.prop]=g*a[j.prop].value+a[j.prop].unit},duration:d.duration,easing:d.easing,complete:function(){d.autoHeight||d.toShow.css("height","");d.toShow.css({width:h,overflow:f});d.complete()}})}else d.toHide.animate({height:"hide",
paddingTop:"hide",paddingBottom:"hide"},d);else d.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},d)},bounceslide:function(d){this.slide(d,{easing:d.down?"easeOutBounce":"swing",duration:d.down?1E3:200})}}})})(jQuery);
(function(b){var d=0;b.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var e=this,f=this.element[0].ownerDocument,g;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(a){if(!(e.options.disabled||e.element.attr("readonly"))){g=
false;var c=b.ui.keyCode;switch(a.keyCode){case c.PAGE_UP:e._move("previousPage",a);break;case c.PAGE_DOWN:e._move("nextPage",a);break;case c.UP:e._move("previous",a);a.preventDefault();break;case c.DOWN:e._move("next",a);a.preventDefault();break;case c.ENTER:case c.NUMPAD_ENTER:if(e.menu.active){g=true;a.preventDefault()}case c.TAB:if(!e.menu.active)return;e.menu.select(a);break;case c.ESCAPE:e.element.val(e.term);e.close(a);break;default:clearTimeout(e.searching);e.searching=setTimeout(function(){if(e.term!=
e.element.val()){e.selectedItem=null;e.search(null,a)}},e.options.delay);break}}}).bind("keypress.autocomplete",function(a){if(g){g=false;a.preventDefault()}}).bind("focus.autocomplete",function(){if(!e.options.disabled){e.selectedItem=null;e.previous=e.element.val()}}).bind("blur.autocomplete",function(a){if(!e.options.disabled){clearTimeout(e.searching);e.closing=setTimeout(function(){e.close(a);e._change(a)},150)}});this._initSource();this.response=function(){return e._response.apply(e,arguments)};
this.menu=b("<ul></ul>").addClass("ui-autocomplete").appendTo(b(this.options.appendTo||"body",f)[0]).mousedown(function(a){var c=e.menu.element[0];b(a.target).closest(".ui-menu-item").length||setTimeout(function(){b(document).one("mousedown",function(h){h.target!==e.element[0]&&h.target!==c&&!b.ui.contains(c,h.target)&&e.close()})},1);setTimeout(function(){clearTimeout(e.closing)},13)}).menu({focus:function(a,c){c=c.item.data("item.autocomplete");false!==e._trigger("focus",a,{item:c})&&/^key/.test(a.originalEvent.type)&&
e.element.val(c.value)},selected:function(a,c){var h=c.item.data("item.autocomplete"),i=e.previous;if(e.element[0]!==f.activeElement){e.element.focus();e.previous=i;setTimeout(function(){e.previous=i;e.selectedItem=h},1)}false!==e._trigger("select",a,{item:h})&&e.element.val(h.value);e.term=e.element.val();e.close(a);e.selectedItem=h},blur:function(){e.menu.element.is(":visible")&&e.element.val()!==e.term&&e.element.val(e.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
b.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();b.Widget.prototype.destroy.call(this)},_setOption:function(e,f){b.Widget.prototype._setOption.apply(this,arguments);e==="source"&&this._initSource();if(e==="appendTo")this.menu.element.appendTo(b(f||"body",this.element[0].ownerDocument)[0]);e==="disabled"&&
f&&this.xhr&&this.xhr.abort()},_initSource:function(){var e=this,f,g;if(b.isArray(this.options.source)){f=this.options.source;this.source=function(a,c){c(b.ui.autocomplete.filter(f,a.term))}}else if(typeof this.options.source==="string"){g=this.options.source;this.source=function(a,c){e.xhr&&e.xhr.abort();e.xhr=b.ajax({url:g,data:a,dataType:"json",autocompleteRequest:++d,success:function(h){this.autocompleteRequest===d&&c(h)},error:function(){this.autocompleteRequest===d&&c([])}})}}else this.source=
this.options.source},search:function(e,f){e=e!=null?e:this.element.val();this.term=this.element.val();if(e.length<this.options.minLength)return this.close(f);clearTimeout(this.closing);if(this._trigger("search",f)!==false)return this._search(e)},_search:function(e){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:e},this.response)},_response:function(e){if(!this.options.disabled&&e&&e.length){e=this._normalize(e);this._suggest(e);this._trigger("open")}else this.close();
this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(e){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",e)}},_change:function(e){this.previous!==this.element.val()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(e){if(e.length&&e[0].label&&e[0].value)return e;return b.map(e,function(f){if(typeof f==="string")return{label:f,value:f};return b.extend({label:f.label||
f.value,value:f.value||f.label},f)})},_suggest:function(e){var f=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(f,e);this.menu.deactivate();this.menu.refresh();f.show();this._resizeMenu();f.position(b.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next(new b.Event("mouseover"))},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(e,f){var g=this;
b.each(f,function(a,c){g._renderItem(e,c)})},_renderItem:function(e,f){return b("<li></li>").data("item.autocomplete",f).append(b("<a></a>").text(f.label)).appendTo(e)},_move:function(e,f){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(e)||this.menu.last()&&/^next/.test(e)){this.element.val(this.term);this.menu.deactivate()}else this.menu[e](f);else this.search(null,f)},widget:function(){return this.menu.element}});b.extend(b.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(e,f){var g=new RegExp(b.ui.autocomplete.escapeRegex(f),"i");return b.grep(e,function(a){return g.test(a.label||a.value||a)})}})})(jQuery);
(function(b){b.widget("ui.menu",{_create:function(){var d=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(e){if(b(e.target).closest(".ui-menu-item a").length){e.preventDefault();d.select(e)}});this.refresh()},refresh:function(){var d=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(e){d.activate(e,b(this).parent())}).mouseleave(function(){d.deactivate()})},activate:function(d,e){this.deactivate();if(this.hasScroll()){var f=e.offset().top-this.element.offset().top,g=this.element.attr("scrollTop"),a=this.element.height();if(f<0)this.element.attr("scrollTop",g+f);else f>=a&&this.element.attr("scrollTop",g+f-a+e.height())}this.active=e.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",d,{item:e})},
deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null}},next:function(d){this.move("next",".ui-menu-item:first",d)},previous:function(d){this.move("prev",".ui-menu-item:last",d)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(d,e,f){if(this.active){d=this.active[d+"All"](".ui-menu-item").eq(0);
d.length?this.activate(f,d):this.activate(f,this.element.children(e))}else this.activate(f,this.element.children(e))},nextPage:function(d){if(this.hasScroll())if(!this.active||this.last())this.activate(d,this.element.children(".ui-menu-item:first"));else{var e=this.active.offset().top,f=this.element.height(),g=this.element.children(".ui-menu-item").filter(function(){var a=b(this).offset().top-e-f+b(this).height();return a<10&&a>-10});g.length||(g=this.element.children(".ui-menu-item:last"));this.activate(d,
g)}else this.activate(d,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(d){if(this.hasScroll())if(!this.active||this.first())this.activate(d,this.element.children(".ui-menu-item:last"));else{var e=this.active.offset().top,f=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var g=b(this).offset().top-e+f-b(this).height();return g<10&&g>-10});result.length||(result=this.element.children(".ui-menu-item:first"));
this.activate(d,result)}else this.activate(d,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(d){this._trigger("selected",d,{item:this.active})}})})(jQuery);
(function(b){var d,e=function(g){b(":ui-button",g.target.form).each(function(){var a=b(this).data("button");setTimeout(function(){a.refresh()},1)})},f=function(g){var a=g.name,c=g.form,h=b([]);if(a)h=c?b(c).find("[name='"+a+"']"):b("[name='"+a+"']",g.ownerDocument).filter(function(){return!this.form});return h};b.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",
e);if(typeof this.options.disabled!=="boolean")this.options.disabled=this.element.attr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var g=this,a=this.options,c=this.type==="checkbox"||this.type==="radio",h="ui-state-hover"+(!c?" ui-state-active":"");if(a.label===null)a.label=this.buttonElement.html();if(this.element.is(":disabled"))a.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",
function(){if(!a.disabled){b(this).addClass("ui-state-hover");this===d&&b(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){a.disabled||b(this).removeClass(h)}).bind("focus.button",function(){b(this).addClass("ui-state-focus")}).bind("blur.button",function(){b(this).removeClass("ui-state-focus")});c&&this.element.bind("change.button",function(){g.refresh()});if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(a.disabled)return false;b(this).toggleClass("ui-state-active");
g.buttonElement.attr("aria-pressed",g.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(a.disabled)return false;b(this).addClass("ui-state-active");g.buttonElement.attr("aria-pressed",true);var i=g.element[0];f(i).not(i).map(function(){return b(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",function(){if(a.disabled)return false;b(this).addClass("ui-state-active");
d=this;b(document).one("mouseup",function(){d=null})}).bind("mouseup.button",function(){if(a.disabled)return false;b(this).removeClass("ui-state-active")}).bind("keydown.button",function(i){if(a.disabled)return false;if(i.keyCode==b.ui.keyCode.SPACE||i.keyCode==b.ui.keyCode.ENTER)b(this).addClass("ui-state-active")}).bind("keyup.button",function(){b(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(i){i.keyCode===b.ui.keyCode.SPACE&&b(this).click()})}this._setOption("disabled",
a.disabled)},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type==="radio"){var g=this.element.parents().filter(":last"),a="label[for="+this.element.attr("id")+"]";this.buttonElement=g.find(a);if(!this.buttonElement.length){g=g.length?g.siblings():this.element.siblings();this.buttonElement=g.filter(a);if(!this.buttonElement.length)this.buttonElement=g.find(a)}this.element.addClass("ui-helper-hidden-accessible");
(g=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",g)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
this.hasTitle||this.buttonElement.removeAttr("title");b.Widget.prototype.destroy.call(this)},_setOption:function(g,a){b.Widget.prototype._setOption.apply(this,arguments);if(g==="disabled")a?this.element.attr("disabled",true):this.element.removeAttr("disabled");this._resetButton()},refresh:function(){var g=this.element.is(":disabled");g!==this.options.disabled&&this._setOption("disabled",g);if(this.type==="radio")f(this.element[0]).each(function(){b(this).is(":checked")?b(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
true):b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var g=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
a=b("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(g.empty()).text(),c=this.options.icons,h=c.primary&&c.secondary,i=[];if(c.primary||c.secondary){if(this.options.text)i.push("ui-button-text-icon"+(h?"s":c.primary?"-primary":"-secondary"));c.primary&&g.prepend("<span class='ui-button-icon-primary ui-icon "+c.primary+"'></span>");c.secondary&&g.append("<span class='ui-button-icon-secondary ui-icon "+c.secondary+"'></span>");if(!this.options.text){i.push(h?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||g.attr("title",a)}}else i.push("ui-button-text-only");g.addClass(i.join(" "))}}});b.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(g,a){g==="disabled"&&this.buttons.button("option",g,a);b.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},
destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");b.Widget.prototype.destroy.call(this)}})})(jQuery);
(function(b,d){function e(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};b.extend(this._defaults,this.regional[""]);this.dpDiv=b('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}function f(a,c){b.extend(a,c);for(var h in c)if(c[h]==
null||c[h]==d)a[h]=c[h];return a}b.extend(b.ui,{datepicker:{version:"1.8.12"}});var g=(new Date).getTime();b.extend(e.prototype,{markerClassName:"hasDatepicker",log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){f(this._defaults,a||{});return this},_attachDatepicker:function(a,c){var h=null;for(var i in this._defaults){var j=a.getAttribute("date:"+i);if(j){h=h||{};try{h[i]=eval(j)}catch(n){h[i]=j}}}i=a.nodeName.toLowerCase();
j=i=="div"||i=="span";if(!a.id){this.uuid+=1;a.id="dp"+this.uuid}var o=this._newInst(b(a),j);o.settings=b.extend({},c||{},h||{});if(i=="input")this._connectDatepicker(a,o);else j&&this._inlineDatepicker(a,o)},_newInst:function(a,c){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:!c?this.dpDiv:b('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}},
_connectDatepicker:function(a,c){var h=b(a);c.append=b([]);c.trigger=b([]);if(!h.hasClass(this.markerClassName)){this._attachments(h,c);h.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(i,j,n){c.settings[j]=n}).bind("getData.datepicker",function(i,j){return this._get(c,j)});this._autoSize(c);b.data(a,"datepicker",c)}},_attachments:function(a,c){var h=this._get(c,"appendText"),i=this._get(c,"isRTL");c.append&&
c.append.remove();if(h){c.append=b('<span class="'+this._appendClass+'">'+h+"</span>");a[i?"before":"after"](c.append)}a.unbind("focus",this._showDatepicker);c.trigger&&c.trigger.remove();h=this._get(c,"showOn");if(h=="focus"||h=="both")a.focus(this._showDatepicker);if(h=="button"||h=="both"){h=this._get(c,"buttonText");var j=this._get(c,"buttonImage");c.trigger=b(this._get(c,"buttonImageOnly")?b("<img/>").addClass(this._triggerClass).attr({src:j,alt:h,title:h}):b('<button type="button"></button>').addClass(this._triggerClass).html(j==
""?h:b("<img/>").attr({src:j,alt:h,title:h})));a[i?"before":"after"](c.trigger);c.trigger.click(function(){b.datepicker._datepickerShowing&&b.datepicker._lastInput==a[0]?b.datepicker._hideDatepicker():b.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var c=new Date(2009,11,20),h=this._get(a,"dateFormat");if(h.match(/[DM]/)){var i=function(j){for(var n=0,o=0,l=0;l<j.length;l++)if(j[l].length>n){n=j[l].length;o=l}return o};c.setMonth(i(this._get(a,
h.match(/MM/)?"monthNames":"monthNamesShort")));c.setDate(i(this._get(a,h.match(/DD/)?"dayNames":"dayNamesShort"))+20-c.getDay())}a.input.attr("size",this._formatDate(a,c).length)}},_inlineDatepicker:function(a,c){var h=b(a);if(!h.hasClass(this.markerClassName)){h.addClass(this.markerClassName).append(c.dpDiv).bind("setData.datepicker",function(i,j,n){c.settings[j]=n}).bind("getData.datepicker",function(i,j){return this._get(c,j)});b.data(a,"datepicker",c);this._setDate(c,this._getDefaultDate(c),
true);this._updateDatepicker(c);this._updateAlternate(c);c.dpDiv.show()}},_dialogDatepicker:function(a,c,h,i,j){a=this._dialogInst;if(!a){this.uuid+=1;this._dialogInput=b('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);b("body").append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};b.data(this._dialogInput[0],"datepicker",a)}f(a.settings,i||{});
c=c&&c.constructor==Date?this._formatDate(a,c):c;this._dialogInput.val(c);this._pos=j?j.length?j:[j.pageX,j.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=h;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);b.blockUI&&b.blockUI(this.dpDiv);b.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var c=b(a),h=b.data(a,"datepicker");if(c.hasClass(this.markerClassName)){var i=a.nodeName.toLowerCase();b.removeData(a,"datepicker");if(i=="input"){h.append.remove();h.trigger.remove();c.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",
this._doKeyUp)}else if(i=="div"||i=="span")c.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var c=b(a),h=b.data(a,"datepicker");if(c.hasClass(this.markerClassName)){var i=a.nodeName.toLowerCase();if(i=="input"){a.disabled=false;h.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(i=="div"||i=="span")c.children("."+this._inlineClass).children().removeClass("ui-state-disabled");this._disabledInputs=b.map(this._disabledInputs,
function(j){return j==a?null:j})}},_disableDatepicker:function(a){var c=b(a),h=b.data(a,"datepicker");if(c.hasClass(this.markerClassName)){var i=a.nodeName.toLowerCase();if(i=="input"){a.disabled=true;h.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(i=="div"||i=="span")c.children("."+this._inlineClass).children().addClass("ui-state-disabled");this._disabledInputs=b.map(this._disabledInputs,function(j){return j==a?null:
j});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;for(var c=0;c<this._disabledInputs.length;c++)if(this._disabledInputs[c]==a)return true;return false},_getInst:function(a){try{return b.data(a,"datepicker")}catch(c){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,c,h){var i=this._getInst(a);if(arguments.length==2&&typeof c=="string")return c=="defaults"?b.extend({},b.datepicker._defaults):i?c=="all"?b.extend({},
i.settings):this._get(i,c):null;var j=c||{};if(typeof c=="string"){j={};j[c]=h}if(i){this._curInst==i&&this._hideDatepicker();var n=this._getDateDatepicker(a,true),o=this._getMinMaxDate(i,"min"),l=this._getMinMaxDate(i,"max");f(i.settings,j);if(o!==null&&j.dateFormat!==d&&j.minDate===d)i.settings.minDate=this._formatDate(i,o);if(l!==null&&j.dateFormat!==d&&j.maxDate===d)i.settings.maxDate=this._formatDate(i,l);this._attachments(b(a),i);this._autoSize(i);this._setDateDatepicker(a,n);this._updateDatepicker(i)}},
_changeDatepicker:function(a,c,h){this._optionDatepicker(a,c,h)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,c){if(a=this._getInst(a)){this._setDate(a,c);this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,c){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,c);return a?this._getDate(a):null},_doKeyDown:function(a){var c=b.datepicker._getInst(a.target),h=true,i=c.dpDiv.is(".ui-datepicker-rtl");
c._keyEvent=true;if(b.datepicker._datepickerShowing)switch(a.keyCode){case 9:b.datepicker._hideDatepicker();h=false;break;case 13:h=b("td."+b.datepicker._dayOverClass+":not(."+b.datepicker._currentClass+")",c.dpDiv);h[0]?b.datepicker._selectDay(a.target,c.selectedMonth,c.selectedYear,h[0]):b.datepicker._hideDatepicker();return false;case 27:b.datepicker._hideDatepicker();break;case 33:b.datepicker._adjustDate(a.target,a.ctrlKey?-b.datepicker._get(c,"stepBigMonths"):-b.datepicker._get(c,"stepMonths"),
"M");break;case 34:b.datepicker._adjustDate(a.target,a.ctrlKey?+b.datepicker._get(c,"stepBigMonths"):+b.datepicker._get(c,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)b.datepicker._clearDate(a.target);h=a.ctrlKey||a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)b.datepicker._gotoToday(a.target);h=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,i?+1:-1,"D");h=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)b.datepicker._adjustDate(a.target,a.ctrlKey?
-b.datepicker._get(c,"stepBigMonths"):-b.datepicker._get(c,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,-7,"D");h=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,i?-1:+1,"D");h=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)b.datepicker._adjustDate(a.target,a.ctrlKey?+b.datepicker._get(c,"stepBigMonths"):+b.datepicker._get(c,"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)b.datepicker._adjustDate(a.target,
+7,"D");h=a.ctrlKey||a.metaKey;break;default:h=false}else if(a.keyCode==36&&a.ctrlKey)b.datepicker._showDatepicker(this);else h=false;if(h){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var c=b.datepicker._getInst(a.target);if(b.datepicker._get(c,"constrainInput")){c=b.datepicker._possibleChars(b.datepicker._get(c,"dateFormat"));var h=String.fromCharCode(a.charCode==d?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||h<" "||!c||c.indexOf(h)>-1}},_doKeyUp:function(a){a=b.datepicker._getInst(a.target);
if(a.input.val()!=a.lastVal)try{if(b.datepicker.parseDate(b.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,b.datepicker._getFormatConfig(a))){b.datepicker._setDateFromField(a);b.datepicker._updateAlternate(a);b.datepicker._updateDatepicker(a)}}catch(c){b.datepicker.log(c)}return true},_showDatepicker:function(a){a=a.target||a;if(a.nodeName.toLowerCase()!="input")a=b("input",a.parentNode)[0];if(!(b.datepicker._isDisabledDatepicker(a)||b.datepicker._lastInput==a)){var c=b.datepicker._getInst(a);
b.datepicker._curInst&&b.datepicker._curInst!=c&&b.datepicker._curInst.dpDiv.stop(true,true);var h=b.datepicker._get(c,"beforeShow");f(c.settings,h?h.apply(a,[a,c]):{});c.lastVal=null;b.datepicker._lastInput=a;b.datepicker._setDateFromField(c);if(b.datepicker._inDialog)a.value="";if(!b.datepicker._pos){b.datepicker._pos=b.datepicker._findPos(a);b.datepicker._pos[1]+=a.offsetHeight}var i=false;b(a).parents().each(function(){i|=b(this).css("position")=="fixed";return!i});if(i&&b.browser.opera){b.datepicker._pos[0]-=
document.documentElement.scrollLeft;b.datepicker._pos[1]-=document.documentElement.scrollTop}h={left:b.datepicker._pos[0],top:b.datepicker._pos[1]};b.datepicker._pos=null;c.dpDiv.empty();c.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});b.datepicker._updateDatepicker(c);h=b.datepicker._checkOffset(c,h,i);c.dpDiv.css({position:b.datepicker._inDialog&&b.blockUI?"static":i?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"});if(!c.inline){h=b.datepicker._get(c,"showAnim");
var j=b.datepicker._get(c,"duration"),n=function(){b.datepicker._datepickerShowing=true;var o=c.dpDiv.find("iframe.ui-datepicker-cover");if(o.length){var l=b.datepicker._getBorders(c.dpDiv);o.css({left:-l[0],top:-l[1],width:c.dpDiv.outerWidth(),height:c.dpDiv.outerHeight()})}};c.dpDiv.zIndex(b(a).zIndex()+1);b.effects&&b.effects[h]?c.dpDiv.show(h,b.datepicker._get(c,"showOptions"),j,n):c.dpDiv[h||"show"](h?j:null,n);if(!h||!j)n();c.input.is(":visible")&&!c.input.is(":disabled")&&c.input.focus();b.datepicker._curInst=
c}}},_updateDatepicker:function(a){var c=this,h=b.datepicker._getBorders(a.dpDiv);a.dpDiv.empty().append(this._generateHTML(a));var i=a.dpDiv.find("iframe.ui-datepicker-cover");i.length&&i.css({left:-h[0],top:-h[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()});a.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){b(this).removeClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&b(this).removeClass("ui-datepicker-prev-hover");
this.className.indexOf("ui-datepicker-next")!=-1&&b(this).removeClass("ui-datepicker-next-hover")}).bind("mouseover",function(){if(!c._isDisabledDatepicker(a.inline?a.dpDiv.parent()[0]:a.input[0])){b(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");b(this).addClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&b(this).addClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&b(this).addClass("ui-datepicker-next-hover")}}).end().find("."+
this._dayOverClass+" a").trigger("mouseover").end();h=this._getNumberOfMonths(a);i=h[1];i>1?a.dpDiv.addClass("ui-datepicker-multi-"+i).css("width",17*i+"em"):a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");a.dpDiv[(h[0]!=1||h[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==b.datepicker._curInst&&b.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&
a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var j=a.yearshtml;setTimeout(function(){j===a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);j=a.yearshtml=null},0)}},_getBorders:function(a){var c=function(h){return{thin:1,medium:2,thick:3}[h]||h};return[parseFloat(c(a.css("border-left-width"))),parseFloat(c(a.css("border-top-width")))]},_checkOffset:function(a,c,h){var i=a.dpDiv.outerWidth(),j=a.dpDiv.outerHeight(),n=a.input?a.input.outerWidth():
0,o=a.input?a.input.outerHeight():0,l=document.documentElement.clientWidth+b(document).scrollLeft(),k=document.documentElement.clientHeight+b(document).scrollTop();c.left-=this._get(a,"isRTL")?i-n:0;c.left-=h&&c.left==a.input.offset().left?b(document).scrollLeft():0;c.top-=h&&c.top==a.input.offset().top+o?b(document).scrollTop():0;c.left-=Math.min(c.left,c.left+i>l&&l>i?Math.abs(c.left+i-l):0);c.top-=Math.min(c.top,c.top+j>k&&k>j?Math.abs(j+o):0);return c},_findPos:function(a){for(var c=this._get(this._getInst(a),
"isRTL");a&&(a.type=="hidden"||a.nodeType!=1||b.expr.filters.hidden(a));)a=a[c?"previousSibling":"nextSibling"];a=b(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var c=this._curInst;if(!(!c||a&&c!=b.data(a,"datepicker")))if(this._datepickerShowing){a=this._get(c,"showAnim");var h=this._get(c,"duration"),i=function(){b.datepicker._tidyDialog(c);this._curInst=null};b.effects&&b.effects[a]?c.dpDiv.hide(a,b.datepicker._get(c,"showOptions"),h,i):c.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?
"fadeOut":"hide"](a?h:null,i);a||i();if(a=this._get(c,"onClose"))a.apply(c.input?c.input[0]:null,[c.input?c.input.val():"",c]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(b.blockUI){b.unblockUI();b("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(b.datepicker._curInst){a=
b(a.target);a[0].id!=b.datepicker._mainDivId&&a.parents("#"+b.datepicker._mainDivId).length==0&&!a.hasClass(b.datepicker.markerClassName)&&!a.hasClass(b.datepicker._triggerClass)&&b.datepicker._datepickerShowing&&!(b.datepicker._inDialog&&b.blockUI)&&b.datepicker._hideDatepicker()}},_adjustDate:function(a,c,h){a=b(a);var i=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(i,c+(h=="M"?this._get(i,"showCurrentAtPos"):0),h);this._updateDatepicker(i)}},_gotoToday:function(a){a=
b(a);var c=this._getInst(a[0]);if(this._get(c,"gotoCurrent")&&c.currentDay){c.selectedDay=c.currentDay;c.drawMonth=c.selectedMonth=c.currentMonth;c.drawYear=c.selectedYear=c.currentYear}else{var h=new Date;c.selectedDay=h.getDate();c.drawMonth=c.selectedMonth=h.getMonth();c.drawYear=c.selectedYear=h.getFullYear()}this._notifyChange(c);this._adjustDate(a)},_selectMonthYear:function(a,c,h){a=b(a);var i=this._getInst(a[0]);i._selectingMonthYear=false;i["selected"+(h=="M"?"Month":"Year")]=i["draw"+(h==
"M"?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10);this._notifyChange(i);this._adjustDate(a)},_clickMonthYear:function(a){var c=this._getInst(b(a)[0]);c.input&&c._selectingMonthYear&&setTimeout(function(){c.input.focus()},0);c._selectingMonthYear=!c._selectingMonthYear},_selectDay:function(a,c,h,i){var j=b(a);if(!(b(i).hasClass(this._unselectableClass)||this._isDisabledDatepicker(j[0]))){j=this._getInst(j[0]);j.selectedDay=j.currentDay=b("a",i).html();j.selectedMonth=j.currentMonth=
c;j.selectedYear=j.currentYear=h;this._selectDate(a,this._formatDate(j,j.currentDay,j.currentMonth,j.currentYear))}},_clearDate:function(a){a=b(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,c){a=this._getInst(b(a)[0]);c=c!=null?c:this._formatDate(a);a.input&&a.input.val(c);this._updateAlternate(a);var h=this._get(a,"onSelect");if(h)h.apply(a.input?a.input[0]:null,[c,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);else{this._hideDatepicker();
this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var c=this._get(a,"altField");if(c){var h=this._get(a,"altFormat")||this._get(a,"dateFormat"),i=this._getDate(a),j=this.formatDate(h,i,this._getFormatConfig(a));b(c).each(function(){b(this).val(j)})}},noWeekends:function(a){a=a.getDay();return[a>0&&a<6,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var c=a.getTime();a.setMonth(0);
a.setDate(1);return Math.floor(Math.round((c-a)/864E5)/7)+1},parseDate:function(a,c,h){if(a==null||c==null)throw"Invalid arguments";c=typeof c=="object"?c.toString():c+"";if(c=="")return null;var i=(h?h.shortYearCutoff:null)||this._defaults.shortYearCutoff;i=typeof i!="string"?i:(new Date).getFullYear()%100+parseInt(i,10);for(var j=(h?h.dayNamesShort:null)||this._defaults.dayNamesShort,n=(h?h.dayNames:null)||this._defaults.dayNames,o=(h?h.monthNamesShort:null)||this._defaults.monthNamesShort,l=(h?
h.monthNames:null)||this._defaults.monthNames,k=h=-1,m=-1,p=-1,q=false,s=function(x){(x=y+1<a.length&&a.charAt(y+1)==x)&&y++;return x},r=function(x){var C=s(x);x=new RegExp("^\\d{1,"+(x=="@"?14:x=="!"?20:x=="y"&&C?4:x=="o"?3:2)+"}");x=c.substring(w).match(x);if(!x)throw"Missing number at position "+w;w+=x[0].length;return parseInt(x[0],10)},u=function(x,C,J){x=s(x)?J:C;for(C=0;C<x.length;C++)if(c.substr(w,x[C].length).toLowerCase()==x[C].toLowerCase()){w+=x[C].length;return C+1}throw"Unknown name at position "+
w;},v=function(){if(c.charAt(w)!=a.charAt(y))throw"Unexpected literal at position "+w;w++},w=0,y=0;y<a.length;y++)if(q)if(a.charAt(y)=="'"&&!s("'"))q=false;else v();else switch(a.charAt(y)){case "d":m=r("d");break;case "D":u("D",j,n);break;case "o":p=r("o");break;case "m":k=r("m");break;case "M":k=u("M",o,l);break;case "y":h=r("y");break;case "@":var B=new Date(r("@"));h=B.getFullYear();k=B.getMonth()+1;m=B.getDate();break;case "!":B=new Date((r("!")-this._ticksTo1970)/1E4);h=B.getFullYear();k=B.getMonth()+
1;m=B.getDate();break;case "'":if(s("'"))v();else q=true;break;default:v()}if(h==-1)h=(new Date).getFullYear();else if(h<100)h+=(new Date).getFullYear()-(new Date).getFullYear()%100+(h<=i?0:-100);if(p>-1){k=1;m=p;do{i=this._getDaysInMonth(h,k-1);if(m<=i)break;k++;m-=i}while(1)}B=this._daylightSavingAdjust(new Date(h,k-1,m));if(B.getFullYear()!=h||B.getMonth()+1!=k||B.getDate()!=m)throw"Invalid date";return B},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",
RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(a,c,h){if(!c)return"";var i=(h?h.dayNamesShort:null)||this._defaults.dayNamesShort,j=(h?h.dayNames:null)||this._defaults.dayNames,n=(h?h.monthNamesShort:null)||this._defaults.monthNamesShort;h=(h?h.monthNames:null)||this._defaults.monthNames;var o=function(s){(s=q+1<a.length&&
a.charAt(q+1)==s)&&q++;return s},l=function(s,r,u){r=""+r;if(o(s))for(;r.length<u;)r="0"+r;return r},k=function(s,r,u,v){return o(s)?v[r]:u[r]},m="",p=false;if(c)for(var q=0;q<a.length;q++)if(p)if(a.charAt(q)=="'"&&!o("'"))p=false;else m+=a.charAt(q);else switch(a.charAt(q)){case "d":m+=l("d",c.getDate(),2);break;case "D":m+=k("D",c.getDay(),i,j);break;case "o":m+=l("o",(c.getTime()-(new Date(c.getFullYear(),0,0)).getTime())/864E5,3);break;case "m":m+=l("m",c.getMonth()+1,2);break;case "M":m+=k("M",
c.getMonth(),n,h);break;case "y":m+=o("y")?c.getFullYear():(c.getYear()%100<10?"0":"")+c.getYear()%100;break;case "@":m+=c.getTime();break;case "!":m+=c.getTime()*1E4+this._ticksTo1970;break;case "'":if(o("'"))m+="'";else p=true;break;default:m+=a.charAt(q)}return m},_possibleChars:function(a){for(var c="",h=false,i=function(n){(n=j+1<a.length&&a.charAt(j+1)==n)&&j++;return n},j=0;j<a.length;j++)if(h)if(a.charAt(j)=="'"&&!i("'"))h=false;else c+=a.charAt(j);else switch(a.charAt(j)){case "d":case "m":case "y":case "@":c+=
"0123456789";break;case "D":case "M":return null;case "'":if(i("'"))c+="'";else h=true;break;default:c+=a.charAt(j)}return c},_get:function(a,c){return a.settings[c]!==d?a.settings[c]:this._defaults[c]},_setDateFromField:function(a,c){if(a.input.val()!=a.lastVal){var h=this._get(a,"dateFormat"),i=a.lastVal=a.input?a.input.val():null,j,n;j=n=this._getDefaultDate(a);var o=this._getFormatConfig(a);try{j=this.parseDate(h,i,o)||n}catch(l){this.log(l);i=c?"":i}a.selectedDay=j.getDate();a.drawMonth=a.selectedMonth=
j.getMonth();a.drawYear=a.selectedYear=j.getFullYear();a.currentDay=i?j.getDate():0;a.currentMonth=i?j.getMonth():0;a.currentYear=i?j.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,c,h){var i=function(n){var o=new Date;o.setDate(o.getDate()+n);return o},j=function(n){try{return b.datepicker.parseDate(b.datepicker._get(a,"dateFormat"),n,b.datepicker._getFormatConfig(a))}catch(o){}var l=
(n.toLowerCase().match(/^c/)?b.datepicker._getDate(a):null)||new Date,k=l.getFullYear(),m=l.getMonth();l=l.getDate();for(var p=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,q=p.exec(n);q;){switch(q[2]||"d"){case "d":case "D":l+=parseInt(q[1],10);break;case "w":case "W":l+=parseInt(q[1],10)*7;break;case "m":case "M":m+=parseInt(q[1],10);l=Math.min(l,b.datepicker._getDaysInMonth(k,m));break;case "y":case "Y":k+=parseInt(q[1],10);l=Math.min(l,b.datepicker._getDaysInMonth(k,m));break}q=p.exec(n)}return new Date(k,
m,l)};if(c=(c=c==null||c===""?h:typeof c=="string"?j(c):typeof c=="number"?isNaN(c)?h:i(c):new Date(c.getTime()))&&c.toString()=="Invalid Date"?h:c){c.setHours(0);c.setMinutes(0);c.setSeconds(0);c.setMilliseconds(0)}return this._daylightSavingAdjust(c)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,c,h){var i=!c,j=a.selectedMonth,n=a.selectedYear;c=this._restrictMinMax(a,this._determineDate(a,c,new Date));a.selectedDay=
a.currentDay=c.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=c.getMonth();a.drawYear=a.selectedYear=a.currentYear=c.getFullYear();if((j!=a.selectedMonth||n!=a.selectedYear)&&!h)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(i?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var c=new Date;c=this._daylightSavingAdjust(new Date(c.getFullYear(),
c.getMonth(),c.getDate()));var h=this._get(a,"isRTL"),i=this._get(a,"showButtonPanel"),j=this._get(a,"hideIfNoPrevNext"),n=this._get(a,"navigationAsDateFormat"),o=this._getNumberOfMonths(a),l=this._get(a,"showCurrentAtPos"),k=this._get(a,"stepMonths"),m=o[0]!=1||o[1]!=1,p=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),q=this._getMinMaxDate(a,"min"),s=this._getMinMaxDate(a,"max");l=a.drawMonth-l;var r=a.drawYear;if(l<0){l+=12;r--}if(s){var u=
this._daylightSavingAdjust(new Date(s.getFullYear(),s.getMonth()-o[0]*o[1]+1,s.getDate()));for(u=q&&u<q?q:u;this._daylightSavingAdjust(new Date(r,l,1))>u;){l--;if(l<0){l=11;r--}}}a.drawMonth=l;a.drawYear=r;u=this._get(a,"prevText");u=!n?u:this.formatDate(u,this._daylightSavingAdjust(new Date(r,l-k,1)),this._getFormatConfig(a));u=this._canAdjustMonth(a,-1,r,l)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+g+".datepicker._adjustDate('#"+a.id+"', -"+k+", 'M');\" title=\""+u+'"><span class="ui-icon ui-icon-circle-triangle-'+
(h?"e":"w")+'">'+u+"</span></a>":j?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+u+'"><span class="ui-icon ui-icon-circle-triangle-'+(h?"e":"w")+'">'+u+"</span></a>";var v=this._get(a,"nextText");v=!n?v:this.formatDate(v,this._daylightSavingAdjust(new Date(r,l+k,1)),this._getFormatConfig(a));j=this._canAdjustMonth(a,+1,r,l)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+g+".datepicker._adjustDate('#"+a.id+"', +"+k+", 'M');\" title=\""+v+'"><span class="ui-icon ui-icon-circle-triangle-'+
(h?"w":"e")+'">'+v+"</span></a>":j?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+v+'"><span class="ui-icon ui-icon-circle-triangle-'+(h?"w":"e")+'">'+v+"</span></a>";k=this._get(a,"currentText");v=this._get(a,"gotoCurrent")&&a.currentDay?p:c;k=!n?k:this.formatDate(k,v,this._getFormatConfig(a));n=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+g+'.datepicker._hideDatepicker();">'+this._get(a,
"closeText")+"</button>":"";i=i?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(h?n:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+g+".datepicker._gotoToday('#"+a.id+"');\">"+k+"</button>":"")+(h?"":n)+"</div>":"";n=parseInt(this._get(a,"firstDay"),10);n=isNaN(n)?0:n;k=this._get(a,"showWeek");v=this._get(a,"dayNames");this._get(a,"dayNamesShort");var w=this._get(a,"dayNamesMin"),y=
this._get(a,"monthNames"),B=this._get(a,"monthNamesShort"),x=this._get(a,"beforeShowDay"),C=this._get(a,"showOtherMonths"),J=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var M=this._getDefaultDate(a),K="",G=0;G<o[0];G++){for(var N="",H=0;H<o[1];H++){var O=this._daylightSavingAdjust(new Date(r,l,a.selectedDay)),A=" ui-corner-all",D="";if(m){D+='<div class="ui-datepicker-group';if(o[1]>1)switch(H){case 0:D+=" ui-datepicker-group-first";A=" ui-corner-"+(h?"right":"left");break;case o[1]-
1:D+=" ui-datepicker-group-last";A=" ui-corner-"+(h?"left":"right");break;default:D+=" ui-datepicker-group-middle";A="";break}D+='">'}D+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+A+'">'+(/all|left/.test(A)&&G==0?h?j:u:"")+(/all|right/.test(A)&&G==0?h?u:j:"")+this._generateMonthYearHeader(a,l,r,q,s,G>0||H>0,y,B)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var E=k?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(A=0;A<7;A++){var z=
(A+n)%7;E+="<th"+((A+n+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+v[z]+'">'+w[z]+"</span></th>"}D+=E+"</tr></thead><tbody>";E=this._getDaysInMonth(r,l);if(r==a.selectedYear&&l==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,E);A=(this._getFirstDayOfMonth(r,l)-n+7)%7;E=m?6:Math.ceil((A+E)/7);z=this._daylightSavingAdjust(new Date(r,l,1-A));for(var P=0;P<E;P++){D+="<tr>";var Q=!k?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(z)+"</td>";for(A=0;A<7;A++){var I=
x?x.apply(a.input?a.input[0]:null,[z]):[true,""],F=z.getMonth()!=l,L=F&&!J||!I[0]||q&&z<q||s&&z>s;Q+='<td class="'+((A+n+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(z.getTime()==O.getTime()&&l==a.selectedMonth&&a._keyEvent||M.getTime()==z.getTime()&&M.getTime()==O.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!C?"":" "+I[1]+(z.getTime()==p.getTime()?" "+this._currentClass:"")+(z.getTime()==c.getTime()?" ui-datepicker-today":
""))+'"'+((!F||C)&&I[2]?' title="'+I[2]+'"':"")+(L?"":' onclick="DP_jQuery_'+g+".datepicker._selectDay('#"+a.id+"',"+z.getMonth()+","+z.getFullYear()+', this);return false;"')+">"+(F&&!C?"&#xa0;":L?'<span class="ui-state-default">'+z.getDate()+"</span>":'<a class="ui-state-default'+(z.getTime()==c.getTime()?" ui-state-highlight":"")+(z.getTime()==p.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+'" href="#">'+z.getDate()+"</a>")+"</td>";z.setDate(z.getDate()+1);z=this._daylightSavingAdjust(z)}D+=
Q+"</tr>"}l++;if(l>11){l=0;r++}D+="</tbody></table>"+(m?"</div>"+(o[0]>0&&H==o[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");N+=D}K+=N}K+=i+(b.browser.msie&&parseInt(b.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");a._keyEvent=false;return K},_generateMonthYearHeader:function(a,c,h,i,j,n,o,l){var k=this._get(a,"changeMonth"),m=this._get(a,"changeYear"),p=this._get(a,"showMonthAfterYear"),q='<div class="ui-datepicker-title">',
s="";if(n||!k)s+='<span class="ui-datepicker-month">'+o[c]+"</span>";else{o=i&&i.getFullYear()==h;var r=j&&j.getFullYear()==h;s+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+g+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" onclick=\"DP_jQuery_"+g+".datepicker._clickMonthYear('#"+a.id+"');\">";for(var u=0;u<12;u++)if((!o||u>=i.getMonth())&&(!r||u<=j.getMonth()))s+='<option value="'+u+'"'+(u==c?' selected="selected"':"")+">"+l[u]+"</option>";s+="</select>"}p||(q+=s+(n||!(k&&
m)?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(n||!m)q+='<span class="ui-datepicker-year">'+h+"</span>";else{l=this._get(a,"yearRange").split(":");var v=(new Date).getFullYear();o=function(w){w=w.match(/c[+-].*/)?h+parseInt(w.substring(1),10):w.match(/[+-].*/)?v+parseInt(w,10):parseInt(w,10);return isNaN(w)?v:w};c=o(l[0]);l=Math.max(c,o(l[1]||""));c=i?Math.max(c,i.getFullYear()):c;l=j?Math.min(l,j.getFullYear()):l;for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+g+".datepicker._selectMonthYear('#"+
a.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+g+".datepicker._clickMonthYear('#"+a.id+"');\">";c<=l;c++)a.yearshtml+='<option value="'+c+'"'+(c==h?' selected="selected"':"")+">"+c+"</option>";a.yearshtml+="</select>";if(b.browser.mozilla)q+='<select class="ui-datepicker-year"><option value="'+h+'" selected="selected">'+h+"</option></select>";else{q+=a.yearshtml;a.yearshtml=null}}}q+=this._get(a,"yearSuffix");if(p)q+=(n||!(k&&m)?"&#xa0;":"")+s;q+="</div>";return q},_adjustInstDate:function(a,c,h){var i=
a.drawYear+(h=="Y"?c:0),j=a.drawMonth+(h=="M"?c:0);c=Math.min(a.selectedDay,this._getDaysInMonth(i,j))+(h=="D"?c:0);i=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(i,j,c)));a.selectedDay=i.getDate();a.drawMonth=a.selectedMonth=i.getMonth();a.drawYear=a.selectedYear=i.getFullYear();if(h=="M"||h=="Y")this._notifyChange(a)},_restrictMinMax:function(a,c){var h=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");c=h&&c<h?h:c;return c=a&&c>a?a:c},_notifyChange:function(a){var c=this._get(a,
"onChangeMonthYear");if(c)c.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a},_getMinMaxDate:function(a,c){return this._determineDate(a,this._get(a,c+"Date"),null)},_getDaysInMonth:function(a,c){return 32-this._daylightSavingAdjust(new Date(a,c,32)).getDate()},_getFirstDayOfMonth:function(a,c){return(new Date(a,c,1)).getDay()},_canAdjustMonth:function(a,c,h,i){var j=this._getNumberOfMonths(a);
h=this._daylightSavingAdjust(new Date(h,i+(c<0?c:j[0]*j[1]),1));c<0&&h.setDate(this._getDaysInMonth(h.getFullYear(),h.getMonth()));return this._isInRange(a,h)},_isInRange:function(a,c){var h=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!h||c.getTime()>=h.getTime())&&(!a||c.getTime()<=a.getTime())},_getFormatConfig:function(a){var c=this._get(a,"shortYearCutoff");c=typeof c!="string"?c:(new Date).getFullYear()%100+parseInt(c,10);return{shortYearCutoff:c,dayNamesShort:this._get(a,
"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,c,h,i){if(!c){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}c=c?typeof c=="object"?c:this._daylightSavingAdjust(new Date(i,h,c)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),c,this._getFormatConfig(a))}});b.fn.datepicker=
function(a){if(!this.length)return this;if(!b.datepicker.initialized){b(document).mousedown(b.datepicker._checkExternalClick).find("body").append(b.datepicker.dpDiv);b.datepicker.initialized=true}var c=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return b.datepicker["_"+a+"Datepicker"].apply(b.datepicker,[this[0]].concat(c));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return b.datepicker["_"+a+"Datepicker"].apply(b.datepicker,
[this[0]].concat(c));return this.each(function(){typeof a=="string"?b.datepicker["_"+a+"Datepicker"].apply(b.datepicker,[this].concat(c)):b.datepicker._attachDatepicker(this,a)})};b.datepicker=new e;b.datepicker.initialized=false;b.datepicker.uuid=(new Date).getTime();b.datepicker.version="1.8.12";window["DP_jQuery_"+g]=b})(jQuery);
(function(b,d){var e={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},f={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},g=b.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};b.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,
position:{my:"center",at:"center",collision:"fit",using:function(a){var c=b(this).css(a).offset().top;c<0&&b(this).css("top",a.top-c)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var a=this,c=a.options,h=c.title||"&#160;",i=b.ui.dialog.getTitleId(a.element),j=(a.uiDialog=b("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+
c.dialogClass).css({zIndex:c.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(l){if(c.closeOnEscape&&l.keyCode&&l.keyCode===b.ui.keyCode.ESCAPE){a.close(l);l.preventDefault()}}).attr({role:"dialog","aria-labelledby":i}).mousedown(function(l){a.moveToTop(false,l)});a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(j);var n=(a.uiDialogTitlebar=b("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(j),
o=b('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){o.addClass("ui-state-hover")},function(){o.removeClass("ui-state-hover")}).focus(function(){o.addClass("ui-state-focus")}).blur(function(){o.removeClass("ui-state-focus")}).click(function(l){a.close(l);return false}).appendTo(n);(a.uiDialogTitlebarCloseText=b("<span></span>")).addClass("ui-icon ui-icon-closethick").text(c.closeText).appendTo(o);b("<span></span>").addClass("ui-dialog-title").attr("id",
i).html(h).prependTo(n);if(b.isFunction(c.beforeclose)&&!b.isFunction(c.beforeClose))c.beforeClose=c.beforeclose;n.find("*").add(n).disableSelection();c.draggable&&b.fn.draggable&&a._makeDraggable();c.resizable&&b.fn.resizable&&a._makeResizable();a._createButtons(c.buttons);a._isOpen=false;b.fn.bgiframe&&j.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;a.overlay&&a.overlay.destroy();a.uiDialog.hide();a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
a.uiDialog.remove();a.originalTitle&&a.element.attr("title",a.originalTitle);return a},widget:function(){return this.uiDialog},close:function(a){var c=this,h,i;if(false!==c._trigger("beforeClose",a)){c.overlay&&c.overlay.destroy();c.uiDialog.unbind("keypress.ui-dialog");c._isOpen=false;if(c.options.hide)c.uiDialog.hide(c.options.hide,function(){c._trigger("close",a)});else{c.uiDialog.hide();c._trigger("close",a)}b.ui.dialog.overlay.resize();if(c.options.modal){h=0;b(".ui-dialog").each(function(){if(this!==
c.uiDialog[0]){i=b(this).css("z-index");isNaN(i)||(h=Math.max(h,i))}});b.ui.dialog.maxZ=h}return c}},isOpen:function(){return this._isOpen},moveToTop:function(a,c){var h=this,i=h.options;if(i.modal&&!a||!i.stack&&!i.modal)return h._trigger("focus",c);if(i.zIndex>b.ui.dialog.maxZ)b.ui.dialog.maxZ=i.zIndex;if(h.overlay){b.ui.dialog.maxZ+=1;h.overlay.$el.css("z-index",b.ui.dialog.overlay.maxZ=b.ui.dialog.maxZ)}a={scrollTop:h.element.attr("scrollTop"),scrollLeft:h.element.attr("scrollLeft")};b.ui.dialog.maxZ+=
1;h.uiDialog.css("z-index",b.ui.dialog.maxZ);h.element.attr(a);h._trigger("focus",c);return h},open:function(){if(!this._isOpen){var a=this,c=a.options,h=a.uiDialog;a.overlay=c.modal?new b.ui.dialog.overlay(a):null;a._size();a._position(c.position);h.show(c.show);a.moveToTop(true);c.modal&&h.bind("keypress.ui-dialog",function(i){if(i.keyCode===b.ui.keyCode.TAB){var j=b(":tabbable",this),n=j.filter(":first");j=j.filter(":last");if(i.target===j[0]&&!i.shiftKey){n.focus(1);return false}else if(i.target===
n[0]&&i.shiftKey){j.focus(1);return false}}});b(a.element.find(":tabbable").get().concat(h.find(".ui-dialog-buttonpane :tabbable").get().concat(h.get()))).eq(0).focus();a._isOpen=true;a._trigger("open");return a}},_createButtons:function(a){var c=this,h=false,i=b("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),j=b("<div></div>").addClass("ui-dialog-buttonset").appendTo(i);c.uiDialog.find(".ui-dialog-buttonpane").remove();typeof a==="object"&&a!==null&&b.each(a,
function(){return!(h=true)});if(h){b.each(a,function(n,o){o=b.isFunction(o)?{click:o,text:n}:o;var l=b('<button type="button"></button>').click(function(){o.click.apply(c.element[0],arguments)}).appendTo(j);b.each(o,function(k,m){if(k!=="click")k in g?l[k](m):l.attr(k,m)});b.fn.button&&l.button()});i.appendTo(c.uiDialog)}},_makeDraggable:function(){function a(n){return{position:n.position,offset:n.offset}}var c=this,h=c.options,i=b(document),j;c.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",
handle:".ui-dialog-titlebar",containment:"document",start:function(n,o){j=h.height==="auto"?"auto":b(this).height();b(this).height(b(this).height()).addClass("ui-dialog-dragging");c._trigger("dragStart",n,a(o))},drag:function(n,o){c._trigger("drag",n,a(o))},stop:function(n,o){h.position=[o.position.left-i.scrollLeft(),o.position.top-i.scrollTop()];b(this).removeClass("ui-dialog-dragging").height(j);c._trigger("dragStop",n,a(o));b.ui.dialog.overlay.resize()}})},_makeResizable:function(a){function c(n){return{originalPosition:n.originalPosition,
originalSize:n.originalSize,position:n.position,size:n.size}}a=a===d?this.options.resizable:a;var h=this,i=h.options,j=h.uiDialog.css("position");a=typeof a==="string"?a:"n,e,s,w,se,sw,ne,nw";h.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:h.element,maxWidth:i.maxWidth,maxHeight:i.maxHeight,minWidth:i.minWidth,minHeight:h._minHeight(),handles:a,start:function(n,o){b(this).addClass("ui-dialog-resizing");h._trigger("resizeStart",n,c(o))},resize:function(n,o){h._trigger("resize",
n,c(o))},stop:function(n,o){b(this).removeClass("ui-dialog-resizing");i.height=b(this).height();i.width=b(this).width();h._trigger("resizeStop",n,c(o));b.ui.dialog.overlay.resize()}}).css("position",j).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(a){var c=[],h=[0,0],i;if(a){if(typeof a==="string"||typeof a==="object"&&"0"in a){c=a.split?a.split(" "):
[a[0],a[1]];if(c.length===1)c[1]=c[0];b.each(["left","top"],function(j,n){if(+c[j]===c[j]){h[j]=c[j];c[j]=n}});a={my:c.join(" "),at:c.join(" "),offset:h.join(" ")}}a=b.extend({},b.ui.dialog.prototype.options.position,a)}else a=b.ui.dialog.prototype.options.position;(i=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(b.extend({of:window},a));i||this.uiDialog.hide()},_setOptions:function(a){var c=this,h={},i=false;b.each(a,function(j,n){c._setOption(j,n);
if(j in e)i=true;if(j in f)h[j]=n});i&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",h)},_setOption:function(a,c){var h=this,i=h.uiDialog;switch(a){case "beforeclose":a="beforeClose";break;case "buttons":h._createButtons(c);break;case "closeText":h.uiDialogTitlebarCloseText.text(""+c);break;case "dialogClass":i.removeClass(h.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+c);break;case "disabled":c?i.addClass("ui-dialog-disabled"):
i.removeClass("ui-dialog-disabled");break;case "draggable":var j=i.is(":data(draggable)");j&&!c&&i.draggable("destroy");!j&&c&&h._makeDraggable();break;case "position":h._position(c);break;case "resizable":(j=i.is(":data(resizable)"))&&!c&&i.resizable("destroy");j&&typeof c==="string"&&i.resizable("option","handles",c);!j&&c!==false&&h._makeResizable(c);break;case "title":b(".ui-dialog-title",h.uiDialogTitlebar).html(""+(c||"&#160;"));break}b.Widget.prototype._setOption.apply(h,arguments)},_size:function(){var a=
this.options,c,h,i=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(a.minWidth>a.width)a.width=a.minWidth;c=this.uiDialog.css({height:"auto",width:a.width}).height();h=Math.max(0,a.minHeight-c);if(a.height==="auto")if(b.support.minHeight)this.element.css({minHeight:h,height:"auto"});else{this.uiDialog.show();a=this.element.css("height","auto").height();i||this.uiDialog.hide();this.element.height(Math.max(a,h))}else this.element.height(Math.max(a.height-
c,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}});b.extend(b.ui.dialog,{version:"1.8.12",uuid:0,maxZ:0,getTitleId:function(a){a=a.attr("id");if(!a){this.uuid+=1;a=this.uuid}return"ui-dialog-title-"+a},overlay:function(a){this.$el=b.ui.dialog.overlay.create(a)}});b.extend(b.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:b.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),
create:function(a){if(this.instances.length===0){setTimeout(function(){b.ui.dialog.overlay.instances.length&&b(document).bind(b.ui.dialog.overlay.events,function(h){if(b(h.target).zIndex()<b.ui.dialog.overlay.maxZ)return false})},1);b(document).bind("keydown.dialog-overlay",function(h){if(a.options.closeOnEscape&&h.keyCode&&h.keyCode===b.ui.keyCode.ESCAPE){a.close(h);h.preventDefault()}});b(window).bind("resize.dialog-overlay",b.ui.dialog.overlay.resize)}var c=(this.oldInstances.pop()||b("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),
height:this.height()});b.fn.bgiframe&&c.bgiframe();this.instances.push(c);return c},destroy:function(a){var c=b.inArray(a,this.instances);c!=-1&&this.oldInstances.push(this.instances.splice(c,1)[0]);this.instances.length===0&&b([document,window]).unbind(".dialog-overlay");a.remove();var h=0;b.each(this.instances,function(){h=Math.max(h,this.css("z-index"))});this.maxZ=h},height:function(){var a,c;if(b.browser.msie&&b.browser.version<7){a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return a<c?b(window).height()+"px":a+"px"}else return b(document).height()+"px"},width:function(){var a,c;if(b.browser.msie&&b.browser.version<7){a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);c=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return a<c?b(window).width()+"px":a+"px"}else return b(document).width()+"px"},resize:function(){var a=b([]);b.each(b.ui.dialog.overlay.instances,
function(){a=a.add(this)});a.css({width:0,height:0}).css({width:b.ui.dialog.overlay.width(),height:b.ui.dialog.overlay.height()})}});b.extend(b.ui.dialog.overlay.prototype,{destroy:function(){b.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
(function(b){b.ui=b.ui||{};var d=/left|center|right/,e=/top|center|bottom/,f=b.fn.position,g=b.fn.offset;b.fn.position=function(a){if(!a||!a.of)return f.apply(this,arguments);a=b.extend({},a);var c=b(a.of),h=c[0],i=(a.collision||"flip").split(" "),j=a.offset?a.offset.split(" "):[0,0],n,o,l;if(h.nodeType===9){n=c.width();o=c.height();l={top:0,left:0}}else if(h.setTimeout){n=c.width();o=c.height();l={top:c.scrollTop(),left:c.scrollLeft()}}else if(h.preventDefault){a.at="left top";n=o=0;l={top:a.of.pageY,
left:a.of.pageX}}else{n=c.outerWidth();o=c.outerHeight();l=c.offset()}b.each(["my","at"],function(){var k=(a[this]||"").split(" ");if(k.length===1)k=d.test(k[0])?k.concat(["center"]):e.test(k[0])?["center"].concat(k):["center","center"];k[0]=d.test(k[0])?k[0]:"center";k[1]=e.test(k[1])?k[1]:"center";a[this]=k});if(i.length===1)i[1]=i[0];j[0]=parseInt(j[0],10)||0;if(j.length===1)j[1]=j[0];j[1]=parseInt(j[1],10)||0;if(a.at[0]==="right")l.left+=n;else if(a.at[0]==="center")l.left+=n/2;if(a.at[1]==="bottom")l.top+=
o;else if(a.at[1]==="center")l.top+=o/2;l.left+=j[0];l.top+=j[1];return this.each(function(){var k=b(this),m=k.outerWidth(),p=k.outerHeight(),q=parseInt(b.curCSS(this,"marginLeft",true))||0,s=parseInt(b.curCSS(this,"marginTop",true))||0,r=m+q+(parseInt(b.curCSS(this,"marginRight",true))||0),u=p+s+(parseInt(b.curCSS(this,"marginBottom",true))||0),v=b.extend({},l),w;if(a.my[0]==="right")v.left-=m;else if(a.my[0]==="center")v.left-=m/2;if(a.my[1]==="bottom")v.top-=p;else if(a.my[1]==="center")v.top-=
p/2;v.left=Math.round(v.left);v.top=Math.round(v.top);w={left:v.left-q,top:v.top-s};b.each(["left","top"],function(y,B){b.ui.position[i[y]]&&b.ui.position[i[y]][B](v,{targetWidth:n,targetHeight:o,elemWidth:m,elemHeight:p,collisionPosition:w,collisionWidth:r,collisionHeight:u,offset:j,my:a.my,at:a.at})});b.fn.bgiframe&&k.bgiframe();k.offset(b.extend(v,{using:a.using}))})};b.ui.position={fit:{left:function(a,c){var h=b(window);h=c.collisionPosition.left+c.collisionWidth-h.width()-h.scrollLeft();a.left=
h>0?a.left-h:Math.max(a.left-c.collisionPosition.left,a.left)},top:function(a,c){var h=b(window);h=c.collisionPosition.top+c.collisionHeight-h.height()-h.scrollTop();a.top=h>0?a.top-h:Math.max(a.top-c.collisionPosition.top,a.top)}},flip:{left:function(a,c){if(c.at[0]!=="center"){var h=b(window);h=c.collisionPosition.left+c.collisionWidth-h.width()-h.scrollLeft();var i=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,j=c.at[0]==="left"?c.targetWidth:-c.targetWidth,n=-2*c.offset[0];a.left+=
c.collisionPosition.left<0?i+j+n:h>0?i+j+n:0}},top:function(a,c){if(c.at[1]!=="center"){var h=b(window);h=c.collisionPosition.top+c.collisionHeight-h.height()-h.scrollTop();var i=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,j=c.at[1]==="top"?c.targetHeight:-c.targetHeight,n=-2*c.offset[1];a.top+=c.collisionPosition.top<0?i+j+n:h>0?i+j+n:0}}}};if(!b.offset.setOffset){b.offset.setOffset=function(a,c){if(/static/.test(b.curCSS(a,"position")))a.style.position="relative";var h=b(a),
i=h.offset(),j=parseInt(b.curCSS(a,"top",true),10)||0,n=parseInt(b.curCSS(a,"left",true),10)||0;i={top:c.top-i.top+j,left:c.left-i.left+n};"using"in c?c.using.call(a,i):h.css(i)};b.fn.offset=function(a){var c=this[0];if(!c||!c.ownerDocument)return null;if(a)return this.each(function(){b.offset.setOffset(this,a)});return g.call(this)}}})(jQuery);
(function(b,d){b.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)},value:function(e){if(e===d)return this._value();this._setOption("value",e);return this},_setOption:function(e,f){if(e==="value"){this.options.value=f;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}b.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var e=this.options.value;if(typeof e!=="number")e=0;return Math.min(this.options.max,Math.max(this.min,e))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var e=this.value(),f=this._percentage();if(this.oldValue!==e){this.oldValue=e;this._trigger("change")}this.valueDiv.toggle(e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(f.toFixed(0)+"%");this.element.attr("aria-valuenow",e)}});b.extend(b.ui.progressbar,{version:"1.8.12"})})(jQuery);
(function(b){b.widget("ui.slider",b.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var d=this,e=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");e.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");
this.range=b([]);if(e.range){if(e.range===true){this.range=b("<div></div>");if(!e.values)e.values=[this._valueMin(),this._valueMin()];if(e.values.length&&e.values.length!==2)e.values=[e.values[0],e.values[0]]}else this.range=b("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(e.range==="min"||e.range==="max")this.range.addClass("ui-slider-range-"+e.range);this.range.addClass("ui-widget-header")}b(".ui-slider-handle",this.element).length===0&&b("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
if(e.values&&e.values.length)for(;b(".ui-slider-handle",this.element).length<e.values.length;)b("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=b(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(f){f.preventDefault()}).hover(function(){e.disabled||b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")}).focus(function(){if(e.disabled)b(this).blur();
else{b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");b(this).addClass("ui-state-focus")}}).blur(function(){b(this).removeClass("ui-state-focus")});this.handles.each(function(f){b(this).data("index.ui-slider-handle",f)});this.handles.keydown(function(f){var g=true,a=b(this).data("index.ui-slider-handle"),c,h,i;if(!d.options.disabled){switch(f.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:g=
false;if(!d._keySliding){d._keySliding=true;b(this).addClass("ui-state-active");c=d._start(f,a);if(c===false)return}break}i=d.options.step;c=d.options.values&&d.options.values.length?(h=d.values(a)):(h=d.value());switch(f.keyCode){case b.ui.keyCode.HOME:h=d._valueMin();break;case b.ui.keyCode.END:h=d._valueMax();break;case b.ui.keyCode.PAGE_UP:h=d._trimAlignValue(c+(d._valueMax()-d._valueMin())/5);break;case b.ui.keyCode.PAGE_DOWN:h=d._trimAlignValue(c-(d._valueMax()-d._valueMin())/5);break;case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(c===
d._valueMax())return;h=d._trimAlignValue(c+i);break;case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(c===d._valueMin())return;h=d._trimAlignValue(c-i);break}d._slide(f,a,h);return g}}).keyup(function(f){var g=b(this).data("index.ui-slider-handle");if(d._keySliding){d._keySliding=false;d._stop(f,g);d._change(f,g);b(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();return this},_mouseCapture:function(d){var e=this.options,f,g,a,c,h;if(e.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();f=this._normValueFromMouse({x:d.pageX,y:d.pageY});g=this._valueMax()-this._valueMin()+1;c=this;this.handles.each(function(i){var j=Math.abs(f-c.values(i));if(g>j){g=j;a=b(this);h=i}});if(e.range===true&&this.values(1)===e.min){h+=1;a=b(this.handles[h])}if(this._start(d,
h)===false)return false;this._mouseSliding=true;c._handleIndex=h;a.addClass("ui-state-active").focus();e=a.offset();this._clickOffset=!b(d.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:d.pageX-e.left-a.width()/2,top:d.pageY-e.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(d,h,f);return this._animateOff=true},_mouseStart:function(){return true},
_mouseDrag:function(d){var e=this._normValueFromMouse({x:d.pageX,y:d.pageY});this._slide(d,this._handleIndex,e);return false},_mouseStop:function(d){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(d,this._handleIndex);this._change(d,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(d){var e;
if(this.orientation==="horizontal"){e=this.elementSize.width;d=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{e=this.elementSize.height;d=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}e=d/e;if(e>1)e=1;if(e<0)e=0;if(this.orientation==="vertical")e=1-e;d=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+e*d)},_start:function(d,e){var f={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){f.value=
this.values(e);f.values=this.values()}return this._trigger("start",d,f)},_slide:function(d,e,f){var g;if(this.options.values&&this.options.values.length){g=this.values(e?0:1);if(this.options.values.length===2&&this.options.range===true&&(e===0&&f>g||e===1&&f<g))f=g;if(f!==this.values(e)){g=this.values();g[e]=f;d=this._trigger("slide",d,{handle:this.handles[e],value:f,values:g});this.values(e?0:1);d!==false&&this.values(e,f,true)}}else if(f!==this.value()){d=this._trigger("slide",d,{handle:this.handles[e],
value:f});d!==false&&this.value(f)}},_stop:function(d,e){var f={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){f.value=this.values(e);f.values=this.values()}this._trigger("stop",d,f)},_change:function(d,e){if(!this._keySliding&&!this._mouseSliding){var f={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){f.value=this.values(e);f.values=this.values()}this._trigger("change",d,f)}},value:function(d){if(arguments.length){this.options.value=
this._trimAlignValue(d);this._refreshValue();this._change(null,0)}else return this._value()},values:function(d,e){var f,g,a;if(arguments.length>1){this.options.values[d]=this._trimAlignValue(e);this._refreshValue();this._change(null,d)}else if(arguments.length)if(b.isArray(arguments[0])){f=this.options.values;g=arguments[0];for(a=0;a<f.length;a+=1){f[a]=this._trimAlignValue(g[a]);this._change(null,a)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(d):
this.value();else return this._values()},_setOption:function(d,e){var f,g=0;if(b.isArray(this.options.values))g=this.options.values.length;b.Widget.prototype._setOption.apply(this,arguments);switch(d){case "disabled":if(e){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(f=0;f<g;f+=1)this._change(null,f);this._animateOff=false;break}},_value:function(){var d=this.options.value;return d=this._trimAlignValue(d)},_values:function(d){var e,f;if(arguments.length){e=this.options.values[d];
return e=this._trimAlignValue(e)}else{e=this.options.values.slice();for(f=0;f<e.length;f+=1)e[f]=this._trimAlignValue(e[f]);return e}},_trimAlignValue:function(d){if(d<=this._valueMin())return this._valueMin();if(d>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,f=(d-this._valueMin())%e;alignValue=d-f;if(Math.abs(f)*2>=e)alignValue+=f>0?e:-e;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var d=this.options.range,e=this.options,f=this,g=!this._animateOff?e.animate:false,a,c={},h,i,j,n;if(this.options.values&&this.options.values.length)this.handles.each(function(o){a=(f.values(o)-f._valueMin())/(f._valueMax()-f._valueMin())*100;c[f.orientation==="horizontal"?"left":"bottom"]=a+"%";b(this).stop(1,1)[g?"animate":"css"](c,e.animate);if(f.options.range===true)if(f.orientation==="horizontal"){if(o===0)f.range.stop(1,1)[g?"animate":"css"]({left:a+"%"},e.animate);
if(o===1)f.range[g?"animate":"css"]({width:a-h+"%"},{queue:false,duration:e.animate})}else{if(o===0)f.range.stop(1,1)[g?"animate":"css"]({bottom:a+"%"},e.animate);if(o===1)f.range[g?"animate":"css"]({height:a-h+"%"},{queue:false,duration:e.animate})}h=a});else{i=this.value();j=this._valueMin();n=this._valueMax();a=n!==j?(i-j)/(n-j)*100:0;c[f.orientation==="horizontal"?"left":"bottom"]=a+"%";this.handle.stop(1,1)[g?"animate":"css"](c,e.animate);if(d==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[g?"animate":"css"]({width:a+"%"},e.animate);if(d==="max"&&this.orientation==="horizontal")this.range[g?"animate":"css"]({width:100-a+"%"},{queue:false,duration:e.animate});if(d==="min"&&this.orientation==="vertical")this.range.stop(1,1)[g?"animate":"css"]({height:a+"%"},e.animate);if(d==="max"&&this.orientation==="vertical")this.range[g?"animate":"css"]({height:100-a+"%"},{queue:false,duration:e.animate})}}});b.extend(b.ui.slider,{version:"1.8.12"})})(jQuery);
(function(b,d){function e(){return++g}function f(){return++a}var g=0,a=0;b.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(c,h){if(c=="selected")this.options.collapsible&&
h==this.options.selected||this.select(h);else{this.options[c]=h;this._tabify()}},_tabId:function(c){return c.title&&c.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()},_sanitizeSelector:function(c){return c.replace(/:/g,"\\:")},_cookie:function(){var c=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+f());return b.cookie.apply(null,[c].concat(b.makeArray(arguments)))},_ui:function(c,h){return{tab:c,panel:h,index:this.anchors.index(c)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var c=
b(this);c.html(c.data("label.tabs")).removeData("label.tabs")})},_tabify:function(c){function h(r,u){r.css("display","");!b.support.opacity&&u.opacity&&r[0].style.removeAttribute("filter")}var i=this,j=this.options,n=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=b(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return b("a",this)[0]});this.panels=b([]);this.anchors.each(function(r,u){var v=b(u).attr("href"),w=v.split("#")[0],y;if(w&&(w===location.toString().split("#")[0]||
(y=b("base")[0])&&w===y.href)){v=u.hash;u.href=v}if(n.test(v))i.panels=i.panels.add(i.element.find(i._sanitizeSelector(v)));else if(v&&v!=="#"){b.data(u,"href.tabs",v);b.data(u,"load.tabs",v.replace(/#.*$/,""));v=i._tabId(u);u.href="#"+v;u=i.element.find("#"+v);if(!u.length){u=b(j.panelTemplate).attr("id",v).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(i.panels[r-1]||i.list);u.data("destroy.tabs",true)}i.panels=i.panels.add(u)}else j.disabled.push(r)});if(c){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(j.selected===d){location.hash&&this.anchors.each(function(r,u){if(u.hash==location.hash){j.selected=r;return false}});if(typeof j.selected!=="number"&&j.cookie)j.selected=parseInt(i._cookie(),10);if(typeof j.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)j.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));j.selected=j.selected||(this.lis.length?0:-1)}else if(j.selected===null)j.selected=-1;j.selected=j.selected>=0&&this.anchors[j.selected]||j.selected<0?j.selected:0;j.disabled=b.unique(j.disabled.concat(b.map(this.lis.filter(".ui-state-disabled"),function(r){return i.lis.index(r)}))).sort();b.inArray(j.selected,j.disabled)!=-1&&j.disabled.splice(b.inArray(j.selected,j.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(j.selected>=0&&this.anchors.length){i.element.find(i._sanitizeSelector(i.anchors[j.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(j.selected).addClass("ui-tabs-selected ui-state-active");i.element.queue("tabs",function(){i._trigger("show",null,i._ui(i.anchors[j.selected],i.element.find(i._sanitizeSelector(i.anchors[j.selected].hash))[0]))});this.load(j.selected)}b(window).bind("unload",function(){i.lis.add(i.anchors).unbind(".tabs");i.lis=i.anchors=i.panels=null})}else j.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[j.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");j.cookie&&this._cookie(j.selected,j.cookie);c=0;for(var o;o=this.lis[c];c++)b(o)[b.inArray(c,j.disabled)!=-1&&!b(o).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");j.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(j.event!=="mouseover"){var l=function(r,u){u.is(":not(.ui-state-disabled)")&&u.addClass("ui-state-"+r)},k=function(r,u){u.removeClass("ui-state-"+
r)};this.lis.bind("mouseover.tabs",function(){l("hover",b(this))});this.lis.bind("mouseout.tabs",function(){k("hover",b(this))});this.anchors.bind("focus.tabs",function(){l("focus",b(this).closest("li"))});this.anchors.bind("blur.tabs",function(){k("focus",b(this).closest("li"))})}var m,p;if(j.fx)if(b.isArray(j.fx)){m=j.fx[0];p=j.fx[1]}else m=p=j.fx;var q=p?function(r,u){b(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.hide().removeClass("ui-tabs-hide").animate(p,p.duration||"normal",
function(){h(u,p);i._trigger("show",null,i._ui(r,u[0]))})}:function(r,u){b(r).closest("li").addClass("ui-tabs-selected ui-state-active");u.removeClass("ui-tabs-hide");i._trigger("show",null,i._ui(r,u[0]))},s=m?function(r,u){u.animate(m,m.duration||"normal",function(){i.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");h(u,m);i.element.dequeue("tabs")})}:function(r,u){i.lis.removeClass("ui-tabs-selected ui-state-active");u.addClass("ui-tabs-hide");i.element.dequeue("tabs")};
this.anchors.bind(j.event+".tabs",function(){var r=this,u=b(r).closest("li"),v=i.panels.filter(":not(.ui-tabs-hide)"),w=i.element.find(i._sanitizeSelector(r.hash));if(u.hasClass("ui-tabs-selected")&&!j.collapsible||u.hasClass("ui-state-disabled")||u.hasClass("ui-state-processing")||i.panels.filter(":animated").length||i._trigger("select",null,i._ui(this,w[0]))===false){this.blur();return false}j.selected=i.anchors.index(this);i.abort();if(j.collapsible)if(u.hasClass("ui-tabs-selected")){j.selected=
-1;j.cookie&&i._cookie(j.selected,j.cookie);i.element.queue("tabs",function(){s(r,v)}).dequeue("tabs");this.blur();return false}else if(!v.length){j.cookie&&i._cookie(j.selected,j.cookie);i.element.queue("tabs",function(){q(r,w)});i.load(i.anchors.index(this));this.blur();return false}j.cookie&&i._cookie(j.selected,j.cookie);if(w.length){v.length&&i.element.queue("tabs",function(){s(r,v)});i.element.queue("tabs",function(){q(r,w)});i.load(i.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
b.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(c){if(typeof c=="string")c=this.anchors.index(this.anchors.filter("[href$="+c+"]"));return c},destroy:function(){var c=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var h=
b.data(this,"href.tabs");if(h)this.href=h;var i=b(this).unbind(".tabs");b.each(["href","load","cache"],function(j,n){i.removeData(n+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){b.data(this,"destroy.tabs")?b(this).remove():b(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});c.cookie&&this._cookie(null,c.cookie);return this},add:function(c,
h,i){if(i===d)i=this.anchors.length;var j=this,n=this.options;h=b(n.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,h));c=!c.indexOf("#")?c.replace("#",""):this._tabId(b("a",h)[0]);h.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var o=j.element.find("#"+c);o.length||(o=b(n.panelTemplate).attr("id",c).data("destroy.tabs",true));o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(i>=this.lis.length){h.appendTo(this.list);o.appendTo(this.list[0].parentNode)}else{h.insertBefore(this.lis[i]);
o.insertBefore(this.panels[i])}n.disabled=b.map(n.disabled,function(l){return l>=i?++l:l});this._tabify();if(this.anchors.length==1){n.selected=0;h.addClass("ui-tabs-selected ui-state-active");o.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){j._trigger("show",null,j._ui(j.anchors[0],j.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[i],this.panels[i]));return this},remove:function(c){c=this._getIndex(c);var h=this.options,i=this.lis.eq(c).remove(),j=this.panels.eq(c).remove();
if(i.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(c+(c+1<this.anchors.length?1:-1));h.disabled=b.map(b.grep(h.disabled,function(n){return n!=c}),function(n){return n>=c?--n:n});this._tabify();this._trigger("remove",null,this._ui(i.find("a")[0],j[0]));return this},enable:function(c){c=this._getIndex(c);var h=this.options;if(b.inArray(c,h.disabled)!=-1){this.lis.eq(c).removeClass("ui-state-disabled");h.disabled=b.grep(h.disabled,function(i){return i!=c});this._trigger("enable",null,
this._ui(this.anchors[c],this.panels[c]));return this}},disable:function(c){c=this._getIndex(c);var h=this.options;if(c!=h.selected){this.lis.eq(c).addClass("ui-state-disabled");h.disabled.push(c);h.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[c],this.panels[c]))}return this},select:function(c){c=this._getIndex(c);if(c==-1)if(this.options.collapsible&&this.options.selected!=-1)c=this.options.selected;else return this;this.anchors.eq(c).trigger(this.options.event+".tabs");return this},
load:function(c){c=this._getIndex(c);var h=this,i=this.options,j=this.anchors.eq(c)[0],n=b.data(j,"load.tabs");this.abort();if(!n||this.element.queue("tabs").length!==0&&b.data(j,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(c).addClass("ui-state-processing");if(i.spinner){var o=b("span",j);o.data("label.tabs",o.html()).html(i.spinner)}this.xhr=b.ajax(b.extend({},i.ajaxOptions,{url:n,success:function(l,k){h.element.find(h._sanitizeSelector(j.hash)).html(l);h._cleanup();i.cache&&b.data(j,
"cache.tabs",true);h._trigger("load",null,h._ui(h.anchors[c],h.panels[c]));try{i.ajaxOptions.success(l,k)}catch(m){}},error:function(l,k){h._cleanup();h._trigger("load",null,h._ui(h.anchors[c],h.panels[c]));try{i.ajaxOptions.error(l,k,c,j)}catch(m){}}}));h.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(c,h){this.anchors.eq(c).removeData("cache.tabs").data("load.tabs",h);return this},length:function(){return this.anchors.length}});b.extend(b.ui.tabs,{version:"1.8.12"});b.extend(b.ui.tabs.prototype,{rotation:null,rotate:function(c,h){var i=this,j=this.options,n=i._rotate||(i._rotate=function(o){clearTimeout(i.rotation);i.rotation=setTimeout(function(){var l=j.selected;i.select(++l<i.anchors.length?l:0)},c);o&&o.stopPropagation()});h=i._unrotate||(i._unrotate=!h?function(o){o.clientX&&
i.rotate(null)}:function(){t=j.selected;n()});if(c){this.element.bind("tabsshow",n);this.anchors.bind(j.event+".tabs",h);n()}else{clearTimeout(i.rotation);this.element.unbind("tabsshow",n);this.anchors.unbind(j.event+".tabs",h);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
;
/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 * 
 * overlay/overlay.js
 * scrollable/scrollable.js
 * tabs/tabs.js
 * tooltip/tooltip.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
(function(a){a.tools=a.tools||{version:"v1.2.7"},a.tools.overlay={addEffect:function(a,b,d){c[a]=[b,d]},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!a.browser.msie||a.browser.version>6,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};var b=[],c={};a.tools.overlay.addEffect("default",function(b,c){var d=this.getConf(),e=a(window);d.fixed||(b.top+=e.scrollTop(),b.left+=e.scrollLeft()),b.position=d.fixed?"fixed":"absolute",this.getOverlay().css(b).fadeIn(d.speed,c)},function(a){this.getOverlay().fadeOut(this.getConf().closeSpeed,a)});function d(d,e){var f=this,g=d.add(f),h=a(window),i,j,k,l=a.tools.expose&&(e.mask||e.expose),m=Math.random().toString().slice(10);l&&(typeof l=="string"&&(l={color:l}),l.closeOnClick=l.closeOnEsc=!1);var n=e.target||d.attr("rel");j=n?a(n):null||d;if(!j.length)throw"Could not find Overlay: "+n;d&&d.index(j)==-1&&d.click(function(a){f.load(a);return a.preventDefault()}),a.extend(f,{load:function(d){if(f.isOpened())return f;var i=c[e.effect];if(!i)throw"Overlay: cannot find effect : \""+e.effect+"\"";e.oneInstance&&a.each(b,function(){this.close(d)}),d=d||a.Event(),d.type="onBeforeLoad",g.trigger(d);if(d.isDefaultPrevented())return f;k=!0,l&&a(j).expose(l);var n=e.top,o=e.left,p=j.outerWidth({margin:!0}),q=j.outerHeight({margin:!0});typeof n=="string"&&(n=n=="center"?Math.max((h.height()-q)/2,0):parseInt(n,10)/100*h.height()),o=="center"&&(o=Math.max((h.width()-p)/2,0)),i[0].call(f,{top:n,left:o},function(){k&&(d.type="onLoad",g.trigger(d))}),l&&e.closeOnClick&&a.mask.getMask().one("click",f.close),e.closeOnClick&&a(document).on("click."+m,function(b){a(b.target).parents(j).length||f.close(b)}),e.closeOnEsc&&a(document).on("keydown."+m,function(a){a.keyCode==27&&f.close(a)});return f},close:function(b){if(!f.isOpened())return f;b=b||a.Event(),b.type="onBeforeClose",g.trigger(b);if(!b.isDefaultPrevented()){k=!1,c[e.effect][1].call(f,function(){b.type="onClose",g.trigger(b)}),a(document).off("click."+m+" keydown."+m),l&&a.mask.close();return f}},getOverlay:function(){return j},getTrigger:function(){return d},getClosers:function(){return i},isOpened:function(){return k},getConf:function(){return e}}),a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(b,c){a.isFunction(e[c])&&a(f).on(c,e[c]),f[c]=function(b){b&&a(f).on(c,b);return f}}),i=j.find(e.close||".close"),!i.length&&!e.close&&(i=a("<a class=\"close\"></a>"),j.prepend(i)),i.click(function(a){f.close(a)}),e.load&&f.load()}a.fn.overlay=function(c){var e=this.data("overlay");if(e)return e;a.isFunction(c)&&(c={onBeforeLoad:c}),c=a.extend(!0,{},a.tools.overlay.conf,c),this.each(function(){e=new d(a(this),c),b.push(e),a(this).data("overlay",e)});return c.api?e:this}})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.7"},a.tools.scrollable={conf:{activeClass:"active",circular:!1,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:"> *",items:".items",keyboard:!0,mousewheel:!1,next:".next",prev:".prev",size:1,speed:400,vertical:!1,touch:!0,wheelSpeed:0}};function b(a,b){var c=parseInt(a.css(b),10);if(c)return c;var d=a[0].currentStyle;return d&&d.width&&parseInt(d.width,10)}function c(b,c){var d=a(c);return d.length<2?d:b.parent().find(c)}var d;function e(b,e){var f=this,g=b.add(f),h=b.children(),i=0,j=e.vertical;d||(d=f),h.length>1&&(h=a(e.items,b)),e.size>1&&(e.circular=!1),a.extend(f,{getConf:function(){return e},getIndex:function(){return i},getSize:function(){return f.getItems().size()},getNaviButtons:function(){return n.add(o)},getRoot:function(){return b},getItemWrap:function(){return h},getItems:function(){return h.find(e.item).not("."+e.clonedClass)},move:function(a,b){return f.seekTo(i+a,b)},next:function(a){return f.move(e.size,a)},prev:function(a){return f.move(-e.size,a)},begin:function(a){return f.seekTo(0,a)},end:function(a){return f.seekTo(f.getSize()-1,a)},focus:function(){d=f;return f},addItem:function(b){b=a(b),e.circular?(h.children().last().before(b),h.children().first().replaceWith(b.clone().addClass(e.clonedClass))):(h.append(b),o.removeClass("disabled")),g.trigger("onAddItem",[b]);return f},seekTo:function(b,c,k){b.jquery||(b*=1);if(e.circular&&b===0&&i==-1&&c!==0)return f;if(!e.circular&&b<0||b>f.getSize()||b<-1)return f;var l=b;b.jquery?b=f.getItems().index(b):l=f.getItems().eq(b);var m=a.Event("onBeforeSeek");if(!k){g.trigger(m,[b,c]);if(m.isDefaultPrevented()||!l.length)return f}var n=j?{top:-l.position().top}:{left:-l.position().left};i=b,d=f,c===undefined&&(c=e.speed),h.animate(n,c,e.easing,k||function(){g.trigger("onSeek",[b])});return f}}),a.each(["onBeforeSeek","onSeek","onAddItem"],function(b,c){a.isFunction(e[c])&&a(f).on(c,e[c]),f[c]=function(b){b&&a(f).on(c,b);return f}});if(e.circular){var k=f.getItems().slice(-1).clone().prependTo(h),l=f.getItems().eq(1).clone().appendTo(h);k.add(l).addClass(e.clonedClass),f.onBeforeSeek(function(a,b,c){if(!a.isDefaultPrevented()){if(b==-1){f.seekTo(k,c,function(){f.end(0)});return a.preventDefault()}b==f.getSize()&&f.seekTo(l,c,function(){f.begin(0)})}});var m=b.parents().add(b).filter(function(){if(a(this).css("display")==="none")return!0});m.length?(m.show(),f.seekTo(0,0,function(){}),m.hide()):f.seekTo(0,0,function(){})}var n=c(b,e.prev).click(function(a){a.stopPropagation(),f.prev()}),o=c(b,e.next).click(function(a){a.stopPropagation(),f.next()});e.circular||(f.onBeforeSeek(function(a,b){setTimeout(function(){a.isDefaultPrevented()||(n.toggleClass(e.disabledClass,b<=0),o.toggleClass(e.disabledClass,b>=f.getSize()-1))},1)}),e.initialIndex||n.addClass(e.disabledClass)),f.getSize()<2&&n.add(o).addClass(e.disabledClass),e.mousewheel&&a.fn.mousewheel&&b.mousewheel(function(a,b){if(e.mousewheel){f.move(b<0?1:-1,e.wheelSpeed||50);return!1}});if(e.touch){var p={};h[0].ontouchstart=function(a){var b=a.touches[0];p.x=b.clientX,p.y=b.clientY},h[0].ontouchmove=function(a){if(a.touches.length==1&&!h.is(":animated")){var b=a.touches[0],c=p.x-b.clientX,d=p.y-b.clientY;f[j&&d>0||!j&&c>0?"next":"prev"](),a.preventDefault()}}}e.keyboard&&a(document).on("keydown.scrollable",function(b){if(!(!e.keyboard||b.altKey||b.ctrlKey||b.metaKey||a(b.target).is(":input"))){if(e.keyboard!="static"&&d!=f)return;var c=b.keyCode;if(j&&(c==38||c==40)){f.move(c==38?-1:1);return b.preventDefault()}if(!j&&(c==37||c==39)){f.move(c==37?-1:1);return b.preventDefault()}}}),e.initialIndex&&f.seekTo(e.initialIndex,0,function(){})}a.fn.scrollable=function(b){var c=this.data("scrollable");if(c)return c;b=a.extend({},a.tools.scrollable.conf,b),this.each(function(){c=new e(a(this),b),a(this).data("scrollable",c)});return b.api?c:this}})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.7"},a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialEffect:!1,initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){var c=this.getConf();this.getPanes().slideUp(c.slideUpSpeed),this.getPanes().eq(a).slideDown(c.slideDownSpeed,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c,d;a.tools.tabs.addEffect("horizontal",function(b,e){if(!c){var f=this.getPanes().eq(b),g=this.getCurrentPane();d||(d=this.getPanes().eq(0).width()),c=!0,f.show(),g.animate({width:0},{step:function(a){f.css("width",d-a)},complete:function(){a(this).hide(),e.call(),c=!1}}),g.length||(e.call(),c=!1)}});function e(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(d,i){var k=h.eq(d),l=!c.data("tabs");typeof d=="string"&&d.replace("#","")&&(k=h.filter("[href*=\""+d.replace("#","")+"\"]"),d=Math.max(h.index(k),0));if(e.rotate){var m=h.length-1;if(d<0)return f.click(m,i);if(d>m)return f.click(0,i)}if(!k.length){if(j>=0)return f;d=e.initialIndex,k=h.eq(d)}if(d===j)return f;i=i||a.Event(),i.type="onBeforeClick",g.trigger(i,[d]);if(!i.isDefaultPrevented()){var n=l?e.initialEffect&&e.effect||"default":e.effect;b[n].call(f,d,function(){j=d,i.type="onClick",g.trigger(i,[d])}),h.removeClass(e.current),k.addClass(e.current);return f}},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){h.off(e.event).removeClass(e.current),i.find("a[href^=\"#\"]").off("click.T");return f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).on(c,e[c]),f[c]=function(b){b&&a(f).on(c,b);return f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).on(e.event,function(a){f.click(b,a);return a.preventDefault()})}),i.find("a[href^=\"#\"]").on("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href=\""+location.hash+"\"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.fn.tabs=function(b,c){var d=this.data("tabs");d&&(d.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){d=new e(a(this),b,c),a(this).data("tabs",d)});return c.api?d:this}})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.7"},a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,c,d){b[a]=[c,d]}};var b={toggle:[function(a){var b=this.getConf(),c=this.getTip(),d=b.opacity;d<1&&c.css({opacity:d}),c.show(),a.call()},function(a){this.getTip().hide(),a.call()}],fade:[function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeTo(c.fadeInSpeed,c.opacity,b):(this.getTip().show(),b())},function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeOut(c.fadeOutSpeed,b):(this.getTip().hide(),b())}]};function c(b,c,d){var e=d.relative?b.position().top:b.offset().top,f=d.relative?b.position().left:b.offset().left,g=d.position[0];e-=c.outerHeight()-d.offset[0],f+=b.outerWidth()+d.offset[1],/iPad/i.test(navigator.userAgent)&&(e-=a(window).scrollTop());var h=c.outerHeight()+b.outerHeight();g=="center"&&(e+=h/2),g=="bottom"&&(e+=h),g=d.position[1];var i=c.outerWidth()+b.outerWidth();g=="center"&&(f-=i/2),g=="left"&&(f-=i);return{top:e,left:f}}function d(d,e){var f=this,g=d.add(f),h,i=0,j=0,k=d.attr("title"),l=d.attr("data-tooltip"),m=b[e.effect],n,o=d.is(":input"),p=o&&d.is(":checkbox, :radio, select, :button, :submit"),q=d.attr("type"),r=e.events[q]||e.events[o?p?"widget":"input":"def"];if(!m)throw"Nonexistent effect \""+e.effect+"\"";r=r.split(/,\s*/);if(r.length!=2)throw"Tooltip: bad events configuration for "+q;d.on(r[0],function(a){clearTimeout(i),e.predelay?j=setTimeout(function(){f.show(a)},e.predelay):f.show(a)}).on(r[1],function(a){clearTimeout(j),e.delay?i=setTimeout(function(){f.hide(a)},e.delay):f.hide(a)}),k&&e.cancelDefault&&(d.removeAttr("title"),d.data("title",k)),a.extend(f,{show:function(b){if(!h){l?h=a(l):e.tip?h=a(e.tip).eq(0):k?h=a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k):(h=d.next(),h.length||(h=d.parent().next()));if(!h.length)throw"Cannot find tooltip for "+d}if(f.isShown())return f;h.stop(!0,!0);var o=c(d,h,e);e.tip&&h.html(d.data("title")),b=a.Event(),b.type="onBeforeShow",g.trigger(b,[o]);if(b.isDefaultPrevented())return f;o=c(d,h,e),h.css({position:"absolute",top:o.top,left:o.left}),n=!0,m[0].call(f,function(){b.type="onShow",n="full",g.trigger(b)});var p=e.events.tooltip.split(/,\s*/);h.data("__set")||(h.off(p[0]).on(p[0],function(){clearTimeout(i),clearTimeout(j)}),p[1]&&!d.is("input:not(:checkbox, :radio), textarea")&&h.off(p[1]).on(p[1],function(a){a.relatedTarget!=d[0]&&d.trigger(r[1].split(" ")[0])}),e.tip||h.data("__set",!0));return f},hide:function(c){if(!h||!f.isShown())return f;c=a.Event(),c.type="onBeforeHide",g.trigger(c);if(!c.isDefaultPrevented()){n=!1,b[e.effect][1].call(f,function(){c.type="onHide",g.trigger(c)});return f}},isShown:function(a){return a?n=="full":n},getConf:function(){return e},getTip:function(){return h},getTrigger:function(){return d}}),a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(b,c){a.isFunction(e[c])&&a(f).on(c,e[c]),f[c]=function(b){b&&a(f).on(c,b);return f}})}a.fn.tooltip=function(b){var c=this.data("tooltip");if(c)return c;b=a.extend(!0,{},a.tools.tooltip.conf,b),typeof b.position=="string"&&(b.position=b.position.split(/,?\s/)),this.each(function(){c=new d(a(this),b),a(this).data("tooltip",c)});return b.api?c:this}})(jQuery);
;
/**
 * Aliases
 *  console.log
 *  console.debug
 *
 * This file should be used in prod. The calls to Drupal.console.log
 * and .debug will go in to a black hole
 *
 * @param object Drupal The drupal namespace ref
 */

;(function(Drupal) {
  Drupal.console = {
    log: function() {},
    debug: function() {}
  };
})(Drupal)
;
(function($, Drupal) {
  Drupal.WongaSliders = Drupal.WongaSliders || {};
  Drupal.WongaSliders.Factories = Drupal.WongaSliders.Factories || {};

  Drupal.WongaSliders.Factories.simple = function(settings) {
    var slider = new Slider(settings),
            view = new slider.View(settings);

    slider['sliderType'] = 'simple';

    var $sliderInput = $('#' + view.inputId);

    $sliderInput.change(function(e) {
      var offset = slider.valueToOffset($(this).val());
      slider.setOffset(view.snapFrom(offset));
      view.update();
    });

    // This code triggers on key press. Stops users from entering non-numeric
    // values into the input, but still allows them to use control chars.
    $sliderInput.keydown(function (e) {
      // Allow: backspace, delete, tab, escape
      if ($.inArray(e.keyCode, [46, 8, 9, 27, 110]) !== -1 ||
          // Allow: Ctrl+A
         (e.keyCode === 65 && e.ctrlKey === true) ||
          // Allow: home, end, left, right
         (e.keyCode >= 35 && e.keyCode <= 39)) {

        // let it happen, don't do anything
        return;
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
        (e.keyCode < 96 || e.keyCode > 105)) {

        e.preventDefault();
      }
    });

    return {
      model: slider,
      view: view
    };
  };
})(jQuery, Drupal);

;
(function($, Drupal) {
  Drupal.WongaSliders = Drupal.WongaSliders || {};
  Drupal.WongaSliders.sliders = Drupal.WongaSliders.sliders || {};

  /**
   * Updates the views of all sliders on the page.
   */
  Drupal.WongaSliders.updateAllViews = function() {
    $.each(Drupal.WongaSliders.sliders, function(name, objects) {
      if (objects.model) {
        objects.model.setOffset(objects.model.getOffset());
      }
    });
  };

  /**
   * Raises custom event with jQuery when a slider changes
   *
   * @param {Slider~model} model
   */
  Drupal.WongaSliders.raiseEventOnSetOffset = function(model) {
    $(document).trigger('wongaSliders.change', this);
  };
  
  /**
   * A Drupal behaviour for creating sliders for any FAPI form elements which
   * have settings in Drupal.settings.wongaSliders (created as a result of
   * #slider* attributes).
   */
  Drupal.behaviors.wongaSliders = function(context) {
    $('body').not('.wonga-sliders-processed').
      addClass('wonga-sliders-processed').each(function() {
        $.each(Drupal.settings.wongaSliders, function(name, slider) {
          Drupal.WongaSliders.sliders[name] =
            Drupal.WongaSliders.Factories[slider.type](slider.settings);
        });
      });
    // Binds window resize events to trigger all sliders to update.
    $(window).on('orientationchange resize', Drupal.WongaSliders.updateAllViews);
  };
})(jQuery, Drupal);
;
/*! Hammer.JS - v1.0.6dev - 2013-07-31
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=t.navigator.pointerEnabled||t.navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&t.navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=t.document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which?o=!0:u.match(/mouse/)&&1!==c.which&&(o=!1),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),(h||null===r)&&(r=c),n.call(i.detection,a.collectEventData(t,e,a.getTouchList(r,e),c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:(t.indentifier=1,[t])},collectEventData:function(t,e,n,r){var o=i.POINTER_TOUCH;return(r.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,r))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(n),timeStamp:(new Date).getTime(),target:r.target,touches:n,eventType:e,pointerType:o,srcEvent:r,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","Moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;if(i.detection.current.name!=this.name&&(i.detection.current.name=this.name,n.options.correct_for_drag_min_distance)){var r=Math.abs(n.options.drag_min_distance/t.distance);i.detection.current.startEvent.center.pageX+=t.deltaX*r,i.detection.current.startEvent.center.pageY+=t.deltaY*r,t=i.detection.extendEventData(t)}(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var o=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&o!==t.direction&&(t.direction=i.utils.isVertical(o)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return i}):"object"==typeof module&&"object"==typeof module.exports?module.exports=i:t.Hammer=i})(this);;
(function($, undefined) {
    'use strict';

    // no jQuery or Zepto!
    if($ === undefined) {
        return;
    }

    /**
     * bind dom events
     * this overwrites addEventListener
     * @param   {HTMLElement}   element
     * @param   {String}        eventTypes
     * @param   {Function}      handler
     */
    Hammer.event.bindDom = function(element, eventTypes, handler) {
        $(element).on(eventTypes, function(ev) {
            var data = ev.originalEvent || ev;

            // IE pageX fix
            if(data.pageX === undefined) {
                data.pageX = ev.pageX;
                data.pageY = ev.pageY;
            }

            // IE target fix
            if(!data.target) {
                data.target = ev.target;
            }

            // IE button fix
            if(data.which === undefined) {
                data.which = data.button;
            }

            // IE preventDefault
            if(!data.preventDefault) {
                data.preventDefault = ev.preventDefault;
            }

            // IE stopPropagation
            if(!data.stopPropagation) {
                data.stopPropagation = ev.stopPropagation;
            }

            handler.call(this, data);
        });
    };

    /**
     * the methods are called by the instance, but with the jquery plugin
     * we use the jquery event methods instead.
     * @this    {Hammer.Instance}
     * @return  {jQuery}
     */
    Hammer.Instance.prototype.on = function(types, handler) {
        return $(this.element).on(types, handler);
    };
    Hammer.Instance.prototype.off = function(types, handler) {
        return $(this.element).off(types, handler);
    };


    /**
     * trigger events
     * this is called by the gestures to trigger an event like 'tap'
     * @this    {Hammer.Instance}
     * @param   {String}    gesture
     * @param   {Object}    eventData
     * @return  {jQuery}
     */
    Hammer.Instance.prototype.trigger = function(gesture, eventData){
        var el = $(this.element);
        if(el.has(eventData.target).length) {
            el = $(eventData.target);
        }

        return el.trigger({
            type: gesture,
            gesture: eventData
        });
    };


    /**
     * jQuery plugin
     * create instance of Hammer and watch for gestures,
     * and when called again you can change the options
     * @param   {Object}    [options={}]
     * @return  {jQuery}
     */
    $.fn.hammer = function(options) {
        return this.each(function() {
            var el = $(this);
            var inst = el.data('hammer');
            // start new hammer instance
            if(!inst) {
                el.data('hammer', new Hammer(this, options || {}));
            }
            // change the options
            else if(inst && options) {
                Hammer.utils.extend(inst.options, options);
            }
        });
    };

})(window.jQuery || window.Zepto);;
/**
 * Creates a new slider model.
 *
 * @constructor
 *
 * @param {Slider~settings} settings
 *  An object of settings with which the new slider should be configured.
 */
function Slider(settings) {
  var model = this;

  /**
   * The identity function. Returns its argument.
   *
   * @private
   *
   * @param {*} x
   *  The value to return.
   *
   * @return
   *  The supplied value.
   */
  var identity = function(x) {
    return x;
  };

  /**
   * Combines the properties of a set of objects into a single object,
   * destructively overwriting the first argument.
   *
   * @param {object} o
   *  The object to extend with the properties of successive arguments.
   *
   * @param {...object} os
   *  A variable number of objects with which to extend the first argument.
   *
   * @return {object}
   *  The initial argument, extended with the fields of any additional
   *  arguments.
   */
  var extend = function() {
    var result = arguments[0];
    for (var i = 1; i < arguments.length; ++i) {
      var source = arguments[i];
      for (var property in source) {
        result[property] = source[property];
      }
    }

    return result;
  };

  /**
   * Ensures that a given set of keys correspond to settings with functional
   * values. If a setting is found to map to a string, the string is treated as
   * a function name and evaluated in order to produce the requisite function.
   *
   * @param {string[]} keys
   *  A list of settings which should have functional values.
   */
  var ensureFunctionSettings = function(keys) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (typeof settings[key] === 'string') {
        settings[key] = eval(settings[key]);
      }
    }
  }

  /**
   * Ensures that a given set of keys correspond to settings with numeric
   * values.
   *
   * @param {string[]} keys
   *  A list of settings which should have numeric values.
   */
  var ensureNumericSettings = function(keys) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (typeof settings[key] === 'string') {
        settings[key] = parseFloat(settings[key]);
      }
    }
  };

  /**
   * Clamps a given input to the range specified by the supplied minimum and
   * maximum values.
   *
   * @private
   *
   * @param {number} x
   *  The value to clamp.
   *
   * @param {number} minimum
   *  The minimum acceptable value.
   *
   * @param {number} maximum
   *  The maximum acceptable value.
   *
   * @return {number}
   *  A clamped value.
   */
  var clamp = function(x, minimum, maximum) {
    return Math.min(Math.max(x, minimum), maximum);
  };

  /**
   * An object of default settings with which new slider models may be
   * configured.
   *
   * @private
   * @type {Slider~settings}
   */
  var defaults = {
    defaultOffset: 1,
    maximum: 100,
    minimum: 1,
    observers: [],
    offsetToValue: identity,
    onSetOffset: function(model) { },
    valueToOffset: identity
  };

  /**
   * Initialises a new slider model using the provided settings.
   *
   * @private
   */
  var __construct = function() {
    ensureFunctionSettings([
      'offsetToValue',
      'onSetOffset',
      'valueToOffset'
    ]);

    ensureNumericSettings([
      'defaultOffset',
      'maximum',
      'minimum'
    ]);

    extend(model, defaults, settings);

    // Cache the range so that we don't have to repeatedly compute it.
    updateRange();
    model.setOffset(model.defaultOffset);
  };

  /**
   * Updates the cached copy of the slider's range.
   *
   * @private
   */
  var updateRange = function() {
    model.range = model.maximum - model.minimum;
  };

  /**
   * Adds an observer to the slider which will be notified whenever the
   * slider's offset is changed.
   *
   * @param {object} observer
   *  The object to be notified (through its update() method) when the slider's
   *  offset is changed.
   */
  model.addObserver = function(observer) {
    model.observers.push(observer);
  };

  /**
   * Returns the slider's current maximum offset.
   *
   * @method
   *
   * @return {number}
   *  The slider's current maximum offset.
   */
  model.getMaximum = function() {
    return model.maximum;
  };

  /**
   * Sets the slider's maximum offset.
   *
   * @method
   *
   * @param {number} maximum
   *  The new maximum offset. The slider's current offset will be clamped to
   *  the new range.
   *
   * @return {Slider}
   *  The slider model, suitable for method chaining.
   */
  model.setMaximum = function(maximum) {
    model.maximum = parseFloat(maximum);
    updateRange();

    return model.setOffset(model.offset);
  };

  /**
   * Returns the slider's current minimum offset.
   *
   * @method
   *
   * @return {number}
   *  The slider's current minimum offset.
   */
  model.getMinimum = function() {
    return model.minimum;
  };

  /**
   * Sets the slider's minimum offset.
   *
   * @method
   *
   * @param {number} minimum
   *  The new minimum offset. The slider's current offset will be clamped to
   *  the new range.
   *
   * @return {Slider}
   *  The slider model, suitable for method chaining.
   */
  model.setMinimum = function(minimum) {
    model.minimum = parseFloat(minimum);
    updateRange();

    return model.setOffset(model.offset);
  };

  /**
   * Returns the slider's current offset.
   *
   * @method
   *
   * @return {number}
   *  The slider's current offset.
   */
  model.getOffset = function() {
    return model.offset;
  };

  /**
   * Sets the slider's current offset.
   *
   * @method
   *
   * @param {number} offset
   *  The offset to set. This will be clamped to the slider's minimum and
   *  maximum values.
   *
   * @return {Slider}
   *  The slider model, suitable for method chaining.
   */
  model.setOffset = function(offset) {
    model.offset = clamp(Math.round(offset), model.minimum, model.maximum);

    notifyObservers();
    model.onSetOffset(model);

    return model;
  };

  /**
   * Notifies the slider's observers of a change in the slider's state.
   */
  var notifyObservers = function() {
    for (var i = 0; i < model.observers.length; ++i) {
      model.observers[i].update();
    }
  };

  /**
   * Returns the slider's range.
   *
   * @method
   *
   * @return {number}
   *  The slider's range.
   */
  model.getRange = function() {
    return model.range;
  };

  /**
   * Returns the slider's current value, as computed from the current offset.
   *
   * @method
   *
   * @return {?}
   *  The slider's current value, as computed from the current offset.
   */
  model.getValue = function() {
    return model.offsetToValue(model.offset);
  };

  /**
   * Sets the slider's current offset as computed from the supplied value.
   *
   * @method
   *
   * @param {?} value
   *  The value from which a new offset should be computed. Note that the
   *  resulting offset will be clamped to the slider's minimum and maximum
   *  values.
   *
   * @return {Slider}
   *  The slider model, suitable for method chaining.
   */
  model.setValue = function(value) {
    return model.setOffset(model.valueToOffset(value));
  };

  /**
   * Creates a new view of the enclosing slider model.
   *
   * @constructor
   *
   * @param {Slider~View~settings} settings
   *  An object of settings with which the new slider view should be configured.
   */
  model.View = function(settings) {
    var view = this;

    /**
     * An object of default settings with which new slider views may be
     * configured.
     *
     * @private
     * @type {Slider~View~settings}
     */
    var defaults = {
      buttonType: 'a',
      decrementButtonClassName: 'wonga-slider-button wonga-slider-decrement',
      decrementButtonInnerHTML: '-',
      handleClassName: 'wonga-slider-handle',
      handleType: 'a',
      handleId: settings.inputId + '-wonga-slider-handle',
      incrementButtonClassName: 'wonga-slider-button wonga-slider-increment',
      incrementButtonInnerHTML: '+',
      onAttach: function(view) { },
      rangeClassName: 'wonga-slider-range',
      rangeType: 'div',
      rangeId: settings.inputId + '-wonga-slider-range',
      replaceParent: false,
      snapFrom: function(offset) {
        return view.step * Math.round(offset / view.step);
      },

      step: 5,
      template: '<div class="wonga-slider-wrapper">{{D}}{{T}}{{I}}</div>',
      trackClassName: 'wonga-slider-track',
      trackId: settings.inputId + '-wonga-slider-track',
      trackType: 'div',
      valueToString: identity,
      stringToValue: identity
    };

    /**
     * Initialises a new slider view using the provided settings.
     *
     * @private
     */
    var __construct = function() {
      ensureFunctionSettings([
        'attach',
        'onAttach'
      ]);

      ensureNumericSettings([
        'step'
      ]);

      extend(view, defaults, settings);
      attach();

      model.addObserver(view);
      view.update();
    };


    /**
     * Returns the offset from the left of the window of the element passed in.
     *
     * @private
     *
     * @param {node} A dom element
     */
    var leftOffset = function(node) {
      if (typeof node.getBoundingClientRect !== 'undefined') {
        var pageLeft = window.pageXOffset || document.body.scrollLeft || 0,
            clientLeft = document.documentElement.clientLeft;

        left = node.getBoundingClientRect().left + pageLeft - clientLeft;
      }
      else {
        left = 0;
        while (node = node.offsetParent) {
          left += node.offsetLeft;
        }
      }

      return left;
    };

    /**
     * Creates the HTML elements necessary for the slider's view and attaches
     * them to the HTML element which is to be bound to the slider model.
     *
     * @private
     */
    var attach = function() {
      // Cache the created elements on the view object so that we don't have to
      // repeatedly find them in the document.
      view.track = createTrack();
      view.range = createRange();
      view.handle = createHandle();
      view.decrementButton = createButton(view.decrementButtonClassName,
        view.decrementButtonInnerHTML, decrement);

      view.incrementButton = createButton(view.incrementButtonClassName,
        view.incrementButtonInnerHTML, increment);

      view.input = document.getElementById(view.inputId);
      view.input.onchange = change;

      view.inputLabel = findLabel(view.input);
      view.inputParent = view.parentId ?
        document.getElementById(view.parentId) : view.input.parentNode;

      view.track.appendChild(view.range);
      view.track.appendChild(view.handle);

      var elements = {
            D: view.decrementButton,
            T: view.track,
            I: view.incrementButton,
            E: view.input,
            L: view.inputLabel
          };

      // Now we have an object containing the elements to be attached, we have
      // two choices. If an attach function has been provided, use that.
      // Otherwise, fall back to instantiating a template, for which a default
      // is always available.
      if (typeof view.attach !== 'undefined') {
        view.attach(view.inputParent, elements);
      }
      else {
        var nodes = instantiateTemplate(elements);

        if (view.replaceParent) {
          var replacingParent = view.inputParent.parentNode;
          for (var i = 0, n = nodes.length; i < n; ++i) {
            replacingParent.insertBefore(nodes[i], view.inputParent);
          }

          replacingParent.removeChild(view.inputParent);
        }
        else {
          for (var i = nodes.length - 1; i >= 0; --i) {
            view.inputParent.insertBefore(
              nodes[i], view.inputParent.children[1]);
          }
        }
      }

      // Fire an event once slider attachment is complete.
      view.onAttach(view);
    };

    /**
     * Locates the corresponding label element associated with a given input.
     *
     * @param {HTMLElement} input
     *  The input element for which a label element should be retrieved.
     *
     * @return {?HTMLElement}
     *  The label associated with the given input element, or null if no such
     *  label could be found.
     */
    var findLabel = (function() {
      // The findLabel function is built conditionally -- if the HTML5 'labels'
      // property is available, we use that to gain quick access to the input's
      // labels. Otherwise, we fall back to a one-off construction of a lookup
      // table which maps identifiers to their labels and use that.
      if (typeof document.createElement('input').labels !== 'undefined') {
        return function(input) {
          return input.labels.length > 0 ? input.labels[0] : null;
        };
      }
      else {
        var labels = document.getElementsByTagName('LABEL'),
            labelFor = {};

        for (var i = 0; i < labels.length; ++i) {
          label = labels[i];
          if (document.getElementById(label.getAttribute("for"))) {
            labelFor[label.getAttribute("for")] = label;
          }
        }

        return function(input) {
          return typeof labelFor[input.id] !== 'undefined' ?
            labelFor[input.id] : null;
        };
      }
    })();

    /**
     * Instantiates the view's template with a given set of elements, returning
     * the resulting DOM element.
     *
     * @param {object.<string, HTMLElement>} elements
     *  A mapping from template specifiers (such as 'D' [decrement button], 'T'
     *  [track]) to HTML elements which should be inserted when those
     *  specifiers are encountered.
     *
     * @return {HTMLElement}
     *  An HTML element representing the instantiated template.
     */
    var instantiateTemplate = function(elements) {
      var classFor = function(type) {
            return '__wonga_sliders_' + type;
          },

          replacer = function(match, type, offset, string) {
            return '<div class="' + classFor(type) + '"></div>';
          },

          templateHTML = view.template.replace(/{{([^}]+)}}/g, replacer),
          templateElement = document.createElement('div');

      // Trick the browser into compiling the HTML string into a DOM element by
      // setting it as the innerHTML of another, freshly created, element.
      templateElement.innerHTML = templateHTML;
      for (var type in elements) {
        var element = elements[type],
            targetClass = classFor(type);

            targets = typeof document.getElementsByClassName !== 'undefined' ?
              templateElement.getElementsByClassName(targetClass) :
              templateElement.querySelectorAll('.' + targetClass);

        if (targets.length > 0) {
          var target = targets[0];
          target.parentNode.replaceChild(element, target);
        }
      }

      // We clone the element's list of child nodes so that it won't change
      // due to DOM updates.
      var nodeList = templateElement.childNodes,
          nodeArray = [];

      for (var i = 0, n = nodeArray.length = nodeList.length; i < n; ++i) {
        nodeArray[i] = nodeList[i];
      }

      return nodeArray;
    };

    /**
     * Handles slider touch and drag events. This callback is used to handle
     * interactions with both the slider track and handle.
     *
     * @param {Hammer~Event} e
     *  The touch or drag event that was fired.
     */
    var onTouchDrag = function(e) {
      var touches = e.gesture.touches;

      // In IE8, the touches object may not always be defined, so we check its
      // existence before proceeding.
      if (touches) {
        var left = touches[0].pageX - leftOffset(view.track),
            scaleFactor = view.track.offsetWidth / model.getRange(),

            // In order to ensure that sliders whose minimum offset isn't zero
            // appear correctly, we must modify the offset used by the view to
            // compute the handle's position by the minimum possible value. Here,
            // we add the minimum value to account for the fact that the leftmost
            // position on the track might not represent zero. When we update the
            // view, the corresponding subtraction will be made to ensure that
            // the handle's offset is indeed zero.
            offset = (left / scaleFactor) + model.minimum;

        model.setOffset(view.snapFrom(offset, Slider.View.SnapType.DRAG));

        e.gesture.preventDefault();
      }
    };

    /**
     * Creates a new slider track.
     *
     * @private
     *
     * @return {HTMLElement}
     *  The created track.
     */
    var createTrack = function() {
      var track = document.createElement(view.trackType);

      track.className = view.trackClassName;
      track.id = view.trackId;

      // Set up the track to respond appropriately to touch events.
      Hammer(track).on('touch drag', onTouchDrag);

      return track;
    };

    /**
     * Creates a new slider range.
     *
     * @private
     *
     * @return {HTMLElement}
     *  The created range.
     */
    var createRange = function() {
      var range = document.createElement(view.rangeType);

      range.className = view.rangeClassName;
      range.id = view.rangeId;

      return range;
    };

    /**
     * Creates a new slider handle.
     *
     * @private
     *
     * @return {HTMLElement}
     *  The created handle.
     */
    var createHandle = function() {
      var handle = document.createElement(view.handleType);

      handle.className = view.handleClassName;
      handle.id = view.handleId;
      handle.style.position = 'absolute';

      // Set up the handle to respond appropriately to touch events.
      Hammer(handle).on('touch drag', onTouchDrag);

      return handle;
    };

    /**
     * Creates a new slider button with the given HTML class attribute, content
     * and click handler.
     *
     * @private
     *
     * @param {string} className
     *  The value of the HTML class attribute that should be assigned to the
     *  new button.
     *
     * @param {string} innerHTML
     *  The content that should be placed inside the new button.
     *
     * @param {function(e)} onClick
     *  The event handler callback to be fired when the new button is clicked.
     *
     * @return {HTMLElement}
     *  The created button.
     */
    var createButton = function(className, innerHTML, onClick) {
      var button = document.createElement(view.buttonType);

      button.className = className;
      button.innerHTML = innerHTML;
      Hammer(button).on('tap', onClick);

      return button;
    };

    /**
     * Change handler for the slider's input element.
     *
     * @private
     */
    var change = function() {
      model.setValue(view.stringToValue(view.input.value));
    };

    /**
     * Click handler for the slider's decrement button.
     *
     * @private
     */
    var decrement = function() {
      model.setOffset(view.snapFrom(
        model.offset - view.step, Slider.View.SnapType.DECREMENT));

      return false;
    };

    /**
     * Click handler for the slider's increment button.
     *
     * @private
     */
    var increment = function() {
      model.setOffset(view.snapFrom(
        model.offset + view.step, Slider.View.SnapType.INCREMENT));

      return false;
    };

    /**
     * Updates the slider's view.
     *
     * @private
     */
    view.update = function() {
      var offset = model.offset - model.minimum,
          scaleFactor = view.track.offsetWidth / model.getRange(),
          halfHandleWidth = view.handle.offsetWidth / 2,
          trackWidth = Math.floor(offset * scaleFactor),
          left = Math.round((view.track.offsetLeft + trackWidth) - halfHandleWidth);

      view.range.style.width = trackWidth + 'px';
      view.handle.style.left = left + 'px';
      view.input.value = view.valueToString(model.getValue());
    };

    __construct();
  };

  __construct();
}

Slider.View = Slider.View || {};

/**
 * The type of events which may cause a snap in a slider view.
 *
 * @readonly
 * @enum {number}
 */
Slider.View.SnapType = {
  /**
   * A drag event.
   */
  DRAG: 0,

  /**
   * A decrement event, triggered by clicking the relevant button.
   */
  DECREMENT: 1,

  /**
   * An increment event, triggered by clicking the relevant button.
   */
  INCREMENT: 2
};

/**
 * The type of settings objects that may be used to construct slider models.
 *
 * @typedef object Slider~settings
 *
 * @property {number} defaultOffset
 *  The slider's default (initial) offset.
 *
 * @property {number} maximum
 *  The slider's maximum offset.
 *
 * @property {number} minimum
 *  The slider's minimum offset
 *
 * @property {Slider~eventHandler} onSetOffset
 *  A callback to be invoked in response to changes in the slider's offset.
 *
 * @property {Slider~offsetValueConverter} offsetToValue
 *  The callback to be used for converting offsets to values. This should be a
 *  functional inverse of the callback supplied as the valueToOffset property.
 *
 * @property {Slider~offsetValueConverter} valueToOffset
 *  The callback to be used for converting values to offsets. This should be a
 *  functional inverse of the callback supplied as the offsetToValue property.
 */

/**
 * The type of slider model event handlers.
 *
 * @callback Slider~eventHandler
 *
 * @param {Slider} model
 *  The slider model which fired the event.
 */

/**
 * The type of callbacks used by slider models to convert between offsets and
 * values.
 *
 * @callback Slider~offsetValueConverter
 *
 * @param {number|?} offsetOrValue
 *  The offset of value to be converted.
 *
 * @return {number|?}
 *  Either the value corresponding to the supplied offset or the offset
 *  corresponding to the supplier value.
 */

/**
 * The type of settings objects that may be used to construct slider views.
 *
 * @typedef object Slider~View~settings
 *
 * @property {Slider~View~attacher} attach
 *  The callback to be used to attach a set of slider elements to the DOM.
 *  Takes precedence over the replaceParent/template properties, which
 *  simplify this operation in most cases.
 *
 * @property {string} buttonType
 *  The type of HTML element that should be created for slider buttons.
 *
 * @property {string} decrementButtonClassName
 *  The value of the HTML class attribute that should be assigned to the
 *  decrement button.
 *
 * @property {string} decrementButtonInnerHTML
 *  The HTML that be placed inside the decrement button.
 *
 * @property {string} handleClassName
 *  The value of the HTML class attribute that should be assigned to the
 *  slider handle.
 *
 * @property {string} handleId
 *  The HTML identifier that should be assigned to the slider handle.
 *
 * @property {string} handleType
 *  The type of HTML element that should be created for the slider handle.
 *
 * @property {string} incrementButtonClassName
 *  The value of the HTML class attribute that should be assigned to the
 *  increment button.
 *
 * @property {string} incrementButtonInnerHTML
 *  The HTML that be placed inside the increment button.
 *
 * @property {Slider~View~eventHandler} onAttach
 *  A callback to be invoked in response to the attachment of the slider view
 *  to an input element.
 *
 * @property {string} rangeClassName
 *  The value of the HTML class attribute that should be assigned to the
 *  slider range.
 *
 * @property {string} rangeId
 *  The HTML identifier that should be assigned to the slider range.
 *
 * @property {string} rangeType
 *  The type of HTML element that should be created for the slider range.
 *
 * @property {boolean} replaceParent
 *  Only to be used in conjunction with the template setting. True if and only
 *  if the parent element (as specified by parentId, for instance) should be
 *  replaced with the result of template instantiation (rather than
 *  supplemented).
 *
 * @property {Slider~View~snapConverter} snapFrom
 *  The callback to be used for snapping to a desired offset given an arbitrary
 *  position in the slider view.
 *
 * @property {number} step
 *  The value by which the increment and decrement buttons should increment and
 *  decrement the underlying model's offset respectively.
 *
 * @property {string} template
 *  A template string which should be used to produce slider markup. May
 *  contain the following variables:
 *
 *  * '{{D}}': The decrement button.
 *  * '{{I}}': The increment button.
 *  * '{{T}}': The slider track.
 *  * '{{E}}': The input element the slider is bound to.
 *  * '{{L}}': The label of the input element the slider is bound to, if
 *    available.
 *
 * @property {string} trackClassName
 *  The value of the HTML class attribute that should be assigned to the
 *  slider track.
 *
 * @property {string} trackId
 *  The HTML identifier that should be assigned to the slider track.
 *
 * @property {string} trackType
 *  The type of HTML element that should be created for the slider track.
 *
 * @property {Slider~View~valueStringifier} valueToString
 *  The callback to be used for converting slider values into strings suitable
 *  for insertion into the linked HTML element.
 */

/**
 * The type of slider view DOM attachment callbacks.
 *
 * @callback Slider~View~attacher
 *
 * @param {HTMLElement} inputParent
 *  The parent of the input element to which a slider view is being attached.
 *
 * @param {object.<string, HTMLElement} elements
 *  An object containing the following slider elements:
 *
 *  * D: The decrement button.
 *  * I: The increment button.
 *  * T: The slider track.
 *  * E: The input element the slider is bound to.
 *  * L: The label of the input element the slider is bound to, if available.
 */

/**
 * The type of slider view event handlers.
 *
 * @callback Slider~View~eventHandler
 *
 * @param {Slider~View} view
 *  The view which fired the event.
 */

/**
 * The type of callbacks used by slider views to snap to a desired offset given
 * an arbitrary position in the slider view.
 *
 * @callback Slider~View~snapConverter
 *
 * @param {number} offset
 *  The offset from which a new, snapped, offset should be computed.
 *
 * @param {Slider~View~SnapType} snapType
 *  The type of event that has caused the snap.
 *
 * @return {number}
 *  The snapped offset.
 */

/**
 * The type of callbacks used by slider views to convert slider values into
 * strings suitable for insertion into their linked HTML element.
 *
 * @callback Slider~View~valueStringifier
 *
 * @param {?} value
 *  The value to stringify.
 *
 * @return {string}
 *  The stringified value.
 */
;
if (typeof window !== 'undefined') {
  global = window;
}

global.Wonga = global.Wonga || {};

/**
 * Returns a date in the future formatted like so:
 *  Tuesday 4th Nov 2014
 *
 * @param {integer} duration
 *   The number of days in the furure to get a date for
 * @returns
 *  Returns a date in the future formatted like so: Tuesday 4th Nov 2014
 */
global.Wonga.summary_date_from_duration = function(duration) {
  var d = new Date(serverdate_year, serverdate_month, serverdate_day,
        serverdate_hour, serverdate_minute, serverdate_second, 0),
      offset = 0;

  d.setDate(d.getDate() + duration + offset);

  var days =
    ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  var new_date = days[d.getDay()] + ' ';

  switch (d.getDate()) {
    case 1: case 21: case 31: suffix = 'st'; break;
    case 2: case 22: suffix = 'nd'; break;
    case 3: case 23: suffix='rd'; break;
    default: suffix='th';
  }
  new_date += d.getDate() + suffix;

  var months =
    ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  new_date += ' '+months[d.getMonth()] + ' ';

  new_date += d.getFullYear();
  return new_date;
};

;
(function($, Drupal) {
  var $repaymentDate,
    $loanAmount,
    $loanInterest,
    $loanTotal,
    applicationPrinciple = 0,
    applicationDuration = 0;

  $(document).on('wongaSliders.change', function(e, slider) {
    if (slider.name === "loan_amount") {
      updatePrinciple(slider.offset);
    } else if (slider.name === "loan_duration") {
      updateDuration(slider.offset);
    }
  });

  $(function() {
    // Document ready
    initialiseVars();
    $(document).on('applicationSliders.change', updateSummaryTable);
  });

  var initialiseVars = function () {
    var $parent = $('.wonga-application-sliders');
    var $loanSummaryWrapper = $parent.find('#wonga-slider-loan-summary');
    $repaymentDate = $parent.find('.repayment-date');
    $loanAmount = $loanSummaryWrapper.find('.loan-amount');
    $loanInterest = $loanSummaryWrapper.find('.loan-interest');
    $loanTotal = $loanSummaryWrapper.find('.loan-total');
  };

  var updatePrinciple = function (newPrinciple) {
    if (newPrinciple !== applicationPrinciple) {
      applicationPrinciple = newPrinciple;
      $(document).trigger('applicationSliders.change');
    }
  };

  var updateDuration = function (newDuration) {
    if (newDuration !== applicationDuration) {
      applicationDuration = newDuration;
      $(document).trigger('applicationSliders.change');
      $(document).trigger('WongaSlidersUpdateDuration',
        {'durationText': Wonga.summary_date_from_duration(applicationDuration)}
      );
    }
  };
  
  var updateLoanAmount = function (applicationPrinciple) {
    var nStr = applicationPrinciple + '';
	nStr = nStr.replace( /\,/g, "");
	nStr = nStr.replace(/[^0-9\.]/g,"");
	x = nStr.split( '.' );
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while ( rgx.test(x1) ) {
		x1 = x1.replace( rgx, '$1' + ',' + '$2' );
	}
	input = x1 + x2;
	return input;
  };
  
  var pmt = function(p,n,r) {	
	var i = r/(100*12);	
	var base = 1 + i ;
	var top = Math.pow(base,n);
	var pmt = Math.round((p / ((1-(1/top))/i))*100)/100;
	return pmt;  
  };
  
  var monthTotalAmount = function(loanTotal) {
									   
		var duration = $("#edit-loan-duration").val();
		duration = duration.replace(/\,/g,'');
		var amtRequired = $("#edit-loan-amount").val();
		amtRequired = amtRequired.replace(/\,/g,'');
		
		var rate = 23;		
				
		var emi = pmt(amtRequired,duration,rate);
		return updateLoanAmount(emi);				
	}

  var updateSummaryTable = function () {
    var currencySign = Drupal.settings.wonga.currencysign;
    if (typeof Wonga.Pricing === "undefined") {
      // There was a problem getting the Pricing calculator so don't init
      return;
    }
    var pricingResult = Wonga.Pricing.calculateInterestDue(applicationPrinciple,
      applicationDuration);

    if (pricingResult === null) {
      return;
    }

    var loanTotal = pricingResult.totalToRepay;
    var loanFees = pricingResult.interestAndFees;

    $loanAmount.html(currencySign + updateLoanAmount(applicationPrinciple));
    $loanTotal.html(currencySign + monthTotalAmount(loanTotal));
    $loanInterest.html(currencySign + loanFees);
    $repaymentDate.html(Wonga.summary_date_from_duration(applicationDuration));
  };
})(jQuery, Drupal);

;
/**
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(c){c.extend(c.fn,{validate:function(a){if(this.length){var b=c.data(this[0],"validator");if(b)return b;this.attr("novalidate","novalidate");b=new c.validator(a,this[0]);c.data(this[0],"validator",b);if(b.settings.onsubmit){a=this.find("input, button");a.filter(".cancel").click(function(){b.cancelSubmit=true});b.settings.submitHandler&&a.filter(":submit").click(function(){b.submitButton=this});this.submit(function(d){function e(){if(b.settings.submitHandler){if(b.submitButton)var f=c("<input type='hidden'/>").attr("name",
b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);b.settings.submitHandler.call(b,b.currentForm);b.submitButton&&f.remove();return false}return true}b.settings.debug&&d.preventDefault();if(b.cancelSubmit){b.cancelSubmit=false;return e()}if(b.form()){if(b.pendingRequest){b.formSubmitted=true;return false}return e()}else{b.focusInvalid();return false}})}return b}else a&&a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")},valid:function(){if(c(this[0]).is("form"))return this.validate().form();
else{var a=true,b=c(this[0].form).validate();this.each(function(){a&=b.element(this)});return a}},removeAttrs:function(a){var b={},d=this;c.each(a.split(/\s/),function(e,f){b[f]=d.attr(f);d.removeAttr(f)});return b},rules:function(a,b){var d=this[0];if(a){var e=c.data(d.form,"validator").settings,f=e.rules,g=c.validator.staticRules(d);switch(a){case "add":c.extend(g,c.validator.normalizeRule(b));f[d.name]=g;if(b.messages)e.messages[d.name]=c.extend(e.messages[d.name],b.messages);break;case "remove":if(!b){delete f[d.name];
return g}var h={};c.each(b.split(/\s/),function(j,i){h[i]=g[i];delete g[i]});return h}}d=c.validator.normalizeRules(c.extend({},c.validator.metadataRules(d),c.validator.classRules(d),c.validator.attributeRules(d),c.validator.staticRules(d)),d);if(d.required){e=d.required;delete d.required;d=c.extend({required:e},d)}return d}});c.extend(c.expr[":"],{blank:function(a){return!c.trim(""+a.value)},filled:function(a){return!!c.trim(""+a.value)},unchecked:function(a){return!a.checked}});c.validator=function(a,
b){this.settings=c.extend(true,{},c.validator.defaults,a);this.currentForm=b;this.init()};c.validator.format=function(a,b){if(arguments.length==1)return function(){var d=c.makeArray(arguments);d.unshift(a);return c.validator.format.apply(this,d)};if(arguments.length>2&&b.constructor!=Array)b=c.makeArray(arguments).slice(1);if(b.constructor!=Array)b=[b];c.each(b,function(d,e){a=a.replace(RegExp("\\{"+d+"\\}","g"),e)});return a};c.extend(c.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",
validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:c([]),errorLabelContainer:c([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(a){this.lastActive=a;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass);this.addWrapper(this.errorsFor(a)).hide()}},onfocusout:function(a){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a)))this.element(a)},
onkeyup:function(a){if(a.name in this.submitted||a==this.lastElement)this.element(a)},onclick:function(a){if(a.name in this.submitted)this.element(a);else a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).addClass(b).removeClass(d):c(a).addClass(b).removeClass(d)},unhighlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).removeClass(b).addClass(d):c(a).removeClass(b).addClass(d)}},setDefaults:function(a){c.extend(c.validator.defaults,
a)},messages:{required: Drupal.t("This field is required."),remote:Drupal.t("Please fix this field."),email:Drupal.t("Please enter a valid email address."),url:Drupal.t("Please enter a valid URL."),date:Drupal.t("Please enter a valid date."),dateISO:Drupal.t("Please enter a valid date (ISO)."),number: Drupal.t("Please enter a valid number."),digits:Drupal.t("Please enter only digits."),creditcard:Drupal.t("Please enter a valid credit card number."),equalTo:Drupal.t("Please enter the same value again."),accept:Drupal.t("Please enter a value with a valid extension."),maxlength:c.validator.format(Drupal.t("Please enter no more than {0} characters.")),
minlength:c.validator.format(Drupal.t("Please enter at least {0} characters.")),rangelength:c.validator.format(Drupal.t("Please enter a value between {0} and {1} characters long.")),range:c.validator.format(Drupal.t("Please enter a value between {0} and {1}.")),max:c.validator.format(Drupal.t("Please enter a value less than or equal to {0}.")),min:c.validator.format(Drupal.t("Please enter a value greater than or equal to {0}."))},autoCreateRanges:false,prototype:{init:function(){function a(e){var f=c.data(this[0].form,"validator"),g="on"+e.type.replace(/^validate/,
"");f.settings[g]&&f.settings[g].call(f,this[0],e)}this.labelContainer=c(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||c(this.currentForm);this.containers=c(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var b=this.groups={};c.each(this.settings.groups,function(e,f){c.each(f.split(/\s/),function(g,h){b[h]=e})});var d=
this.settings.rules;c.each(d,function(e,f){d[e]=c.validator.normalizeRule(f)});c(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",a).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",
a);this.settings.invalidHandler&&c(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){this.checkForm();c.extend(this.submitted,this.errorMap);this.invalid=c.extend({},this.errorMap);this.valid()||c(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(a){this.lastElement=
a=this.validationTargetFor(this.clean(a));this.prepareElement(a);this.currentElements=c(a);var b=this.check(a);if(b)delete this.invalid[a.name];else this.invalid[a.name]=true;if(!this.numberOfInvalids())this.toHide=this.toHide.add(this.containers);this.showErrors();return b},showErrors:function(a){if(a){c.extend(this.errorMap,a);this.errorList=[];for(var b in a)this.errorList.push({message:a[b],element:this.findByName(b)[0]});this.successList=c.grep(this.successList,function(d){return!(d.name in a)})}this.settings.showErrors?
this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){c.fn.resetForm&&c(this.currentForm).resetForm();this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b=0,d;for(d in a)b++;return b},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()==
0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{c(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var a=this.lastActive;return a&&c.grep(this.errorList,function(b){return b.element.name==a.name}).length==1&&a},elements:function(){var a=this,b={};return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&
a.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in b||!a.objectLength(c(this).rules()))return false;return b[this.name]=true})},clean:function(a){return c(a)[0]},errors:function(){return c(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=c([]);this.toHide=c([]);this.currentElements=c([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},
prepareElement:function(a){this.reset();this.toHide=this.errorsFor(a)},check:function(a){a=this.validationTargetFor(this.clean(a));var b=c(a).rules(),d=false,e;for(e in b){var f={method:e,parameters:b[e]};try{var g=c.validator.methods[e].call(this,a.value.replace(/\r/g,""),a,f.parameters);if(g=="dependency-mismatch")d=true;else{d=false;if(g=="pending"){this.toHide=this.toHide.not(this.errorsFor(a));return}if(!g){this.formatAndAdd(a,f);return false}}}catch(h){this.settings.debug&&window.console&&console.log("exception occured when checking element "+
a.id+", check the '"+f.method+"' method",h);throw h;}}if(!d){this.objectLength(b)&&this.successList.push(a);return true}},customMetaMessage:function(a,b){if(c.metadata){var d=this.settings.meta?c(a).metadata()[this.settings.meta]:c(a).metadata();return d&&d.messages&&d.messages[b]}},customMessage:function(a,b){var d=this.settings.messages[a];return d&&(d.constructor==String?d:d[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(arguments[a]!==undefined)return arguments[a]},defaultMessage:function(a,
b){return this.findDefined(this.customMessage(a.name,b),this.customMetaMessage(a,b),!this.settings.ignoreTitle&&a.title||undefined,c.validator.messages[b],"<strong>Warning: No message defined for "+a.name+"</strong>")},formatAndAdd:function(a,b){var d=this.defaultMessage(a,b.method),e=/\$?\{(\d+)\}/g;if(typeof d=="function")d=d.call(this,b.parameters,a);else if(e.test(d))d=jQuery.format(d.replace(e,"{$1}"),b.parameters);this.errorList.push({message:d,element:a});this.errorMap[a.name]=d;this.submitted[a.name]=
d},addWrapper:function(a){if(this.settings.wrapper)a=a.add(a.parent(this.settings.wrapper));return a},defaultShowErrors:function(){for(var a=0;this.errorList[a];a++){var b=this.errorList[a];this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass);this.showLabel(b.element,b.message)}if(this.errorList.length)this.toShow=this.toShow.add(this.containers);if(this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);
if(this.settings.unhighlight){a=0;for(b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass)}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return c(this.errorList).map(function(){return this.element})},showLabel:function(a,b){var d=this.errorsFor(a);if(d.length){d.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
d.attr("generated")&&d.html(b)}else{d=c("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(a),generated:true}).addClass(this.settings.errorClass).html(b||"");if(this.settings.wrapper)d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,c(a)):d.insertAfter(a))}if(!b&&this.settings.success){d.text("");typeof this.settings.success=="string"?d.addClass(this.settings.success):this.settings.success(d)}this.toShow=
this.toShow.add(d)},errorsFor:function(a){var b=this.idOrName(a);return this.errors().filter(function(){return c(this).attr("for")==b})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){if(this.checkable(a))a=this.findByName(a.name).not(this.settings.ignore)[0];return a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(a){var b=this.currentForm;return c(document.getElementsByName(a)).map(function(d,
e){return e.form==b&&e.name==a&&e||null})},getLength:function(a,b){switch(b.nodeName.toLowerCase()){case "select":return c("option:selected",b).length;case "input":if(this.checkable(b))return this.findByName(b.name).filter(":checked").length}return a.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):true},dependTypes:{"boolean":function(a){return a},string:function(a,b){return!!c(a,b.form).length},"function":function(a,b){return a(b)}},optional:function(a){return!c.validator.methods.required.call(this,
c.trim(a.value),a)&&"dependency-mismatch"},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;this.pending[a.name]=true}},stopRequest:function(a,b){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[a.name];if(b&&this.pendingRequest==0&&this.formSubmitted&&this.form()){c(this.currentForm).submit();this.formSubmitted=false}else if(!b&&this.pendingRequest==0&&this.formSubmitted){c(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=
false}},previousValue:function(a){return c.data(a,"previousValue")||c.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,"remote")})}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,b){a.constructor==String?this.classRuleSettings[a]=b:c.extend(this.classRuleSettings,
a)},classRules:function(a){var b={};(a=c(a).attr("class"))&&c.each(a.split(" "),function(){this in c.validator.classRuleSettings&&c.extend(b,c.validator.classRuleSettings[this])});return b},attributeRules:function(a){var b={};a=c(a);for(var d in c.validator.methods){var e;if(e=d==="required"&&typeof c.fn.prop==="function"?a.prop(d):a.attr(d))b[d]=e;else if(a[0].getAttribute("type")===d)b[d]=true}b.maxlength&&/-1|2147483647|524288/.test(b.maxlength)&&delete b.maxlength;return b},metadataRules:function(a){if(!c.metadata)return{};
var b=c.data(a.form,"validator").settings.meta;return b?c(a).metadata()[b]:c(a).metadata()},staticRules:function(a){var b={},d=c.data(a.form,"validator");if(d.settings.rules)b=c.validator.normalizeRule(d.settings.rules[a.name])||{};return b},normalizeRules:function(a,b){c.each(a,function(d,e){if(e===false)delete a[d];else if(e.param||e.depends){var f=true;switch(typeof e.depends){case "string":f=!!c(e.depends,b.form).length;break;case "function":f=e.depends.call(b,b)}if(f)a[d]=e.param!==undefined?
e.param:true;else delete a[d]}});c.each(a,function(d,e){a[d]=c.isFunction(e)?e(b):e});c.each(["minlength","maxlength","min","max"],function(){if(a[this])a[this]=Number(a[this])});c.each(["rangelength","range"],function(){if(a[this])a[this]=[Number(a[this][0]),Number(a[this][1])]});if(c.validator.autoCreateRanges){if(a.min&&a.max){a.range=[a.min,a.max];delete a.min;delete a.max}if(a.minlength&&a.maxlength){a.rangelength=[a.minlength,a.maxlength];delete a.minlength;delete a.maxlength}}a.messages&&delete a.messages;
return a},normalizeRule:function(a){if(typeof a=="string"){var b={};c.each(a.split(/\s/),function(){b[this]=true});a=b}return a},addMethod:function(a,b,d){c.validator.methods[a]=b;c.validator.messages[a]=d!=undefined?d:c.validator.messages[a];b.length<3&&c.validator.addClassRules(a,c.validator.normalizeRule(a))},methods:{required:function(a,b,d){if(!this.depend(d,b))return"dependency-mismatch";switch(b.nodeName.toLowerCase()){case "select":return(a=c(b).val())&&a.length>0;case "input":if(this.checkable(b))return this.getLength(a,
b)>0;default:return c.trim(a).length>0}},remote:function(a,b,d){if(this.optional(b))return"dependency-mismatch";var e=this.previousValue(b);this.settings.messages[b.name]||(this.settings.messages[b.name]={});e.originalMessage=this.settings.messages[b.name].remote;this.settings.messages[b.name].remote=e.message;d=typeof d=="string"&&{url:d}||d;if(this.pending[b.name])return"pending";if(e.old===a)return e.valid;e.old=a;var f=this;this.startRequest(b);var g={};g[b.name]=a;c.ajax(c.extend(true,{url:d,
mode:"abort",port:"validate"+b.name,dataType:"json",data:g,success:function(h){f.settings.messages[b.name].remote=e.originalMessage;var j=h===true;if(j){var i=f.formSubmitted;f.prepareElement(b);f.formSubmitted=i;f.successList.push(b);f.showErrors()}else{i={};h=h||f.defaultMessage(b,"remote");i[b.name]=e.message=c.isFunction(h)?h(a):h;f.showErrors(i)}e.valid=j;f.stopRequest(b,j)}},d));return"pending"},minlength:function(a,b,d){return this.optional(b)||this.getLength(c.trim(a),b)>=d},maxlength:function(a,
b,d){return this.optional(b)||this.getLength(c.trim(a),b)<=d},rangelength:function(a,b,d){a=this.getLength(c.trim(a),b);return this.optional(b)||a>=d[0]&&a<=d[1]},min:function(a,b,d){return this.optional(b)||a>=d},max:function(a,b,d){return this.optional(b)||a<=d},range:function(a,b,d){return this.optional(b)||a>=d[0]&&a<=d[1]},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},
url:function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},
date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a))},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 -]+/.test(a))return false;var d=0,e=0,f=false;a=a.replace(/\D/g,"");for(var g=a.length-1;g>=
0;g--){e=a.charAt(g);e=parseInt(e,10);if(f)if((e*=2)>9)e-=9;d+=e;f=!f}return d%10==0},accept:function(a,b,d){d=typeof d=="string"?d.replace(/,/g,"|"):"png|jpe?g|gif";return this.optional(b)||a.match(RegExp(".("+d+")$","i"))},equalTo:function(a,b,d){d=c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){c(b).valid()});return a==d.val()}}});c.format=c.validator.format})(jQuery);
(function(c){var a={};if(c.ajaxPrefilter)c.ajaxPrefilter(function(d,e,f){e=d.port;if(d.mode=="abort"){a[e]&&a[e].abort();a[e]=f}});else{var b=c.ajax;c.ajax=function(d){var e=("port"in d?d:c.ajaxSettings).port;if(("mode"in d?d:c.ajaxSettings).mode=="abort"){a[e]&&a[e].abort();return a[e]=b.apply(this,arguments)}return b.apply(this,arguments)}}})(jQuery);
(function(c){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.handle.call(this,e)}c.event.special[b]={setup:function(){this.addEventListener(a,d,true)},teardown:function(){this.removeEventListener(a,d,true)},handler:function(e){arguments[0]=c.event.fix(e);arguments[0].type=b;return c.event.handle.apply(this,arguments)}}});c.extend(c.fn,{validateDelegate:function(a,
b,d){return this.bind(b,function(e){var f=c(e.target);if(f.is(a))return d.apply(f,arguments)})}})})(jQuery);
;
// This file attaches custom validation methods to the jQuery validator
(function($, Drupal) {
  $.validator.passwordRating2 = function (password, username) {
    var cleanPass = password.replace(/[^a-zA-Z 0-9]+/g, '');
    if ((typeof username != "undefined") && (username != false)) {
      var cleanUser = username.replace(/[^a-zA-Z 0-9]+/g, '');
    } else {
      cleanUser = '';
    }

    if (!password) return [0, "too-short", Drupal.t("Too short")];
    if (password.length < 8) return [0, "too-short", Drupal.t("Too short")];
    if (password.indexOf(' ') != -1) return [0, "too-short", Drupal.t("Cannot contain a space")];
    if (cleanUser && cleanPass.toLowerCase().match(cleanUser.toLowerCase())) return [0, "similar-to-username", Drupal.t("Too similar to your username")];

    var LOWER = /[a-z]/,
      UPPER = /[A-Z]/,
      DIGIT = /[0-9]/,
      DIGITS = /[0-9].*[0-9]/,
      SPECIAL = /[^a-zA-Z0-9]/;

    var lower = LOWER.test(password),
      upper = UPPER.test(password),
      digit = DIGIT.test(password),
      digits = DIGITS.test(password),
      special = SPECIAL.test(password);

    var strength = 1;
    if (lower && upper && digit) {
      strength = 3;
      if (special || (password.length > 12)) {
        strength = 4;
      }
    }

    if (strength == 1) return [1, "too-weak", Drupal.t("Too weak (add more characters)")];
    if (strength == 2) return [2, "still-too-weak", Drupal.t("Still too weak (keep typing!)")];
    if (strength == 3) return [3, "ok", Drupal.t("Ok (make it longer or add a symbol to make it stronger)")];
    if (strength == 4) return [4, "strong", Drupal.t("Strong enough")];
  }


  /////////////////////////////
  // custom validation methods
  $.validator.addMethod('NextPayDate',function() {
    if (Drupal.settings.wonga.country_code == 'CA' &&
      $('select[name$="next_payday[day]"]').val() &&
      $('select[name$="next_payday[month]"]').val() &&
      $('select[name$="next_payday[year]"]').val())
    {
      var duration = $('input[name$="loan_duration"]').val();
      var duedate = new Date();

      var offset = 0;
      switch(duedate.getDay())
      {
        case 6: offset = 2; break; //saturday
        case 5: offset = 3; break; //friday
        default: offset = 1; break; //otherdays
      }

      duedate.setDate(duedate.getDate() + (duration * 1) + offset);
      var paydate = new Date($('select[name$="next_payday[year]"]').val(), $('select[name$="next_payday[month]"]').val() * 1 - 1, $('select[name$="next_payday[day]"]').val());

      if (paydate >= duedate) return false;
    }
    return true;
  }, 'Oops! You have selected a promise date before your next paydate. Please update your application, as it\'s a legal requirement your loan term isn\'t shorter than the time between now and your next paydate. Don\'t worry, you can still choose to repay early by logging in to your Wonga account at any time. <a onclick="changedate()" id="adjustnextpaydate" href="#">Change loan term</a>');

  $.validator.addMethod('NextIncomeDate',function() {
    if (Drupal.settings.wonga.country_code == 'CA' &&
      $('select[name$="next_income_due[day]"]').val() &&
      $('select[name$="next_income_due[month]"]').val() &&
      $('select[name$="next_income_due[year]"]').val())
    {
      var duration = $('input[name$="loan_duration"]').val();
      var duedate = new Date();

      duedate.setDate(duedate.getDate() + (duration * 1) + 1);
      var paydate = new Date($('select[name$="next_income_due[year]"]').val(), $('select[name$="next_income_due[month]"]').val() * 1 - 1, $('select[name$="next_income_due[day]"]').val());
      if (paydate >= duedate) return false;
    }
    return true;
  }, 'Oops! You have selected a promise date before your next paydate. Please update your application, as it\'s a legal requirement your loan term isn\'t shorter than the time between now and your next paydate. Don\'t worry, you can still choose to repay early by logging in to your Wonga account at any time. <a onclick="changedate()" id="adjustnextpaydate" href="#">Change loan term</a>');

  $.validator.addMethod('wongapassword', function (value, element, usernameField) {

    if (typeof($(usernameField)[0]) != 'undefined') {
      usernamefieldvalue = $(usernameField)[0].value;
    }
    else {
      usernamefieldvalue = false;
    }

    if (element.id =='edit-pass') return true;
    if (element.disabled == 'disabled') return true;

    passwordStrength = $.validator.passwordRating2(element.value,usernamefieldvalue);
    var meter = $(".password-meter", element.form);
    meter.find(".password-meter-bar").removeClass().addClass("password-meter-bar").addClass("password-meter-" + passwordStrength[1]);
    meter.find(".password-meter-message").html(passwordStrength[2]);
    meter.find(".password-meter-message").removeClass().addClass("password-meter-message").addClass("password-meter-message-" + passwordStrength[1])

    if (usernamefieldvalue == element.value) {
      this.settings.messages[element.name] = Drupal.t('Password must not contain user name.');
      return this.optional(element);
    }

    if (/[а-яА-Я]/.test(value) == true) {
      this.settings.messages[element.name] = Drupal.t('You have entered illegal characters in this field.');
      return this.optional(element);
    }

    if (/\s/.test(value) == true) {
      this.settings.messages[element.name] = Drupal.t(' ');
      return this.optional(element);
    }

    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,75}$/.test(value) == false) {
      this.settings.messages[element.name] = Drupal.t('Your password must be 8 or more characters and must include a capital letter and a number.');
      return this.optional(element);
    }

    return true;

  });

  $.validator.addMethod('trueEmail', function(value, element) {
    if (/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/.test(value) == false)
    {
      return this.optional(element);
    }
    return true;
  }, Drupal.t('Please enter a valid email address.'));

  $.validator.addMethod('notSpamEmail', function(value, element) {
    if (/^.*(spam@|junk@).*$/.test(value))
    {
      return this.optional(element);
    }
    return true;
  }, Drupal.t('Oops! We cannot accept email addresses that contain the term junk or spam.'));

  // mobile number UK
  $.validator.addMethod('MobileUK', function (value, element) {
    return this.optional(element) || /^\(?(07[1-9]\d{2})\)?[ \-]?\d{6}$/.test(value);
  }, 'Please enter mobile number in the following format 07712345678.');

  // PhoneUK landline
  $.validator.addMethod('PhoneUK', function (value, element) {
    this.settings.messages[element.name] = "Please enter a "  + Drupal.settings.regional.territory + " phone number in the following format 02071111234.";
    return this.optional(element)
      || /^0[1-9]\d{8,9}$/.test(value);
  }, 'Please enter phone number in the following format 02071111234.');
  // PostalCodeUK
  $.validator.addMethod('PostalCodeUK', function (value, element) {
    return this.optional(element)
      || /[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]? ?[0-9][A-Za-z]{2}/.test(value);
  },function(){
    var region = Drupal.settings.wonga.country_code;
    var message = '';
    message = 'Please enter post code in the following format SW6 6PN.';
    return message;
  });

  // UK Financial Assessment Debts page Monthly validation
  $.validator.addMethod('debtsPageMonthlyComparison',
    function(value, element) {
      var TotalValue = $('#' + element.id +'-total').val();
      var TotalValParsed = parseFloat(TotalValue);
      var ThisValParsed = parseFloat(value);
      if (!isNaN(TotalValParsed) &&
          !isNaN(ThisValParsed) &&
          ThisValParsed > TotalValParsed
         ) {
            return false;
      }
      return true;
    },
    Drupal.t("Your monthly debt can't be more than your total arrears")
  );

  // UK Financial Assessment Debts page Total arrears validation
  $.validator.addMethod('debtsPageTotalComparison',
    function(value, element) {
      var MonthlyValue = $('#' + element.id.replace('-total','')).val();
      var MonthlyValParsed = parseFloat(MonthlyValue);
      var ThisValParsed = parseFloat(value);
      if (!isNaN(MonthlyValParsed) &&
          !isNaN(ThisValParsed) &&
          ThisValParsed < MonthlyValParsed
         ) {
            return false;
      }
      return true;
    },
    Drupal.t("Your total arrears can't be less than your monthly debts")
  );

  // BankAccountNumberUK 7-8 numbers
  $.validator.addMethod('BANumberUK', function (value) {
    return /[0-9]{8}/.test(value);
  }, 'Please enter your account number. If your account has less than 8 digits, add zeros before it.');
  // BankSortCodeUK 	6 numbers, optional spaces separating blocks of 2
  $.validator.addMethod('BSCodeUK', function (value) {
    return /([0-9]{2}[ \-]?){2}[0-9]{2}/.test(value);
  }, '6 numbers, optional spaces separating blocks of 2.');
  // UK card number
  $.validator.addMethod('UKcard', function (value) {
    // Strip out any white space
    value = value.replace(/ /g, '');
    return /^[0-9]{13,19}$/.test(value);
  }, Drupal.t('Please enter a valid card number'));

  // to allow only numbers or letters
  $.validator.addMethod("accept", function(value, element, param) {
    return value.match(new RegExp("." + param + "$"));
  });
  //just single space
  $.validator.addMethod('singlespace', function (value) {
    return !/([ ]{2})/.test(value);
  }, Drupal.t('Single spaces only'));
  //No space at the beggining
  $.validator.addMethod('nofirstspace', function (value) {
    return !/(^ )/.test(value);
  }, Drupal.t('No leading spaces'));
  //No more than one \s-' between the words in the field
  $.validator.addMethod('norepeatedsigns', function (value) {
    return !/(\S\s{2,}\S)|\-{2,}|\'{2,}/.test(value);
  }, Drupal.t('There is an issue with repeated characters. Please check and enter again.'));

  /*
   * Accepts an element with an id of the form '<field>-confirm' and tests that
   * its value is equal (modulo case sensitivity) to that of the field with
   * id '<field>'.
   */
  $.validator.addMethod('fieldEqual', function (value, element, param) {
    var confirmedFieldId = element.id.replace('-confirm', '');
    return value.toLowerCase() ===
      $('#' + confirmedFieldId).val().toLowerCase();
  }, Drupal.t('Please enter the same value again.'));

  $.validator.addMethod('checkBizTypes', function (value) {
    return value.toLowerCase() !== 'other';
  }, Drupal.t(
    'Unfortunately we can only lend to the other types of company listed. ' +
    "If your company's circumstances change, you're welcome to apply again."
  ));

  $.validator.addMethod('checkBizDebitCard', function (value) {
    return $('input[type="radio"][name="business_bank_account_debit_card"]').
      prop('checked');
  }, Drupal.t('Unfortunately at this point we only lend to businesses that have a valid business debit card attached to their business bank accounts. Your bank can normally issue you a debit card within 48 hours of requesting one.'));



  $.validator.addMethod('overAGE', function(value, element) {
    var province = $('#edit-province').val();

    var year = $("#edit-date-of-birth-year").val();
    var month = $("#edit-date-of-birth-month").val()-1;
    var day = $("#edit-date-of-birth-day").val();

    var today_date = new Date();
    var today_year = today_date.getFullYear();
    var today_month = today_date.getMonth();
    var today_day = today_date.getDate();

    var age = today_year - year;
    if (today_month<month) age--;
    if ((month == today_month) && (today_day < day)) age--;

    if (province=='BC' && age<19) {

      this.settings.messages['date_of_birth[year]'] = "You must be 19 or over in British Columbia";
      this.settings.messages['date_of_birth[month]'] = "You must be 19 or over in British Columbia";
      this.settings.messages['date_of_birth[day]'] = "You must be 19 or over in British Columbia";
      return false;

    } else if (age<18) {
      this.settings.messages['date_of_birth[year]'] = "You must be over 18 ";
      this.settings.messages['date_of_birth[month]'] = "You must be over 18";
      this.settings.messages['date_of_birth[day]'] = "You must be over 18";
      return false
    }

    return true;
  });




  //check that the date is real - dob
  $.validator.addMethod('realdate', function(value, element) {
    var day = $("#edit-date-of-birth-day").val();
    var month = $("#edit-date-of-birth-month").val()-1;
    var year = $("#edit-date-of-birth-year").val();
    var testDate = new Date(year, month, day);
    //check - when a date like 31-2-10 is turned into a js date obect it becomes the 3-3-10 so we check the date against the user input field value
    if (testDate.getDate()!= $("#edit-date-of-birth-day").val() || testDate.getMonth()!=month || testDate.getFullYear() != year) {
      return false;
    } else {
      return true;
    }
  },  jQuery.format("The date you have chosen is incorrect"));

  //check that one of house name, flat, house number is filled in
  $.validator.addMethod('address_filled', function(value, element, params) {
    if(params == true)
    {
      var housenum = "#edit-house-number";
      var housename = "#edit-house-name";
    }else{
      housenum = "#edit-house-number-"+params;
      housename = "#edit-house-name-"+params;
    }


    if ($(housenum).val() == ''
      &&	$(housename).val() == '')
    {
      return false;
    }else{

      return true;
    }
  },  jQuery.format("You must fill in House number or House name."));

  //check that the expiry is not befor the start date - card details section
  $.validator.addMethod('start_expiry', function(value, element) {

    $('#edit-card-start-date-month').is(":visible")

    var smonth = $("#edit-card-start-date-month").val();
    var syear = $("#edit-card-start-date-year").val();
    var emonth = $("#edit-card-expiry-date-month").val();
    var eyear = $("#edit-card-expiry-date-year").val();
    var day = 01
    var startD = new Date();
    startD.setFullYear(syear, smonth, day);
    var expiryD = new Date();
    expiryD.setFullYear(eyear, emonth, day);

    //	return this.optional(element)
    //|| ( expiryD < startD );
    if ($('#edit-card-start-date-month').is(":visible"))
    {
      if ( expiryD < startD ) {
        return false;
      } else {
        return true;
      }
    }else{
      return true;
    }

  },  jQuery.format("You can not have an expiry date before the start date"))

  //check that the start date is not in the future
  $.validator.addMethod('start_check', function(value, element) {
    var smonth = $("#edit-card-start-date-month").val()-1;
    var syear = $("#edit-card-start-date-year").val();
    var day = 01;
    var startD = new Date();
    startD.setFullYear(syear, smonth, day);
    var today = new Date();

    if ($('#edit-card-start-date-month').is(":visible"))
    {
      if ( startD > today ) {
        return false;
      } else {
        return true;
      }
    }else{
      return true;
    }

  },  jQuery.format("You can not have a start date in the future"));

  //check that the expiry date is not in the past
  $.validator.addMethod('expiry_check', function(value, element) {
    var emonth = $("#edit-card-expiry-date-month").val();
    var eyear = $("#edit-card-expiry-date-year").val();
    var day = 01;
    var expiryD = new Date();
    expiryD.setFullYear(eyear, emonth, day);
    var today = new Date();

    this.settings.messages[element.name] = Drupal.t("You can not have an expiry date in the past");

    if ( expiryD < today ) return false;
    return true;
  });

  //check that the card doesnt expire before the chosen repayment date
  $.validator.addMethod('card_expires_before_payment', function(value, element) {

    var region = Drupal.settings.wonga.country_code;
    var edate = new Date($("#edit-card-expiry-date-year").val(),
      $("#edit-card-expiry-date-month").val()-1,1);

    //get duration from query string
    var query = document.URL.substr( document.URL.indexOf('?')+1 );
    var splits = query.split('&');
    var data = {};
    $.each(splits, function(x,y){
      var temp = y.split('=');
      data[temp[0]] = temp[1];
    });
    var duration = data['duration'];

    //add the duration in days to todays date
    var now = new Date();
    var pay_date = new Date();
    pay_date.setDate(now.getDate()+parseInt(duration));

    if( edate.getTime() < pay_date.getTime() ) {
      return false;
    } else {
      return true;
    }

  },  jQuery.format("The cards expiry date can not be before the repayment date"));



  // check user is over 18
  $.validator.addMethod('over18', function(value, element) {

    var day = $("#edit-date-of-birth-day").val();
    var month = $("#edit-date-of-birth-month").val();
    var year = $("#edit-date-of-birth-year").val();
    var age =  18;
    var msg = "";
    var realdate = new Date();
    realdate.setFullYear(year, month-1, day);
    var mydate = new Date();
    mydate.setFullYear(year, month-1, day);
    var currdate = new Date();
    currdate.setFullYear(currdate.getFullYear() - age);
    return (currdate - mydate < 0 ? false : true);

  },  jQuery.format("You must be over 18"));


  // check date is not in the past
  $.validator.addMethod("pastcheck", function(value, element, params) {
    // todays date
    var Tdate = new Date();
    var validate_this_field = false;
    var Udate;
    if (($('#edit-next-payday-day').val() > 0)
      || ($('#edit-next-payday-month').val() > 0)
      || ($('#edit-next-payday-year').val() > 0)) {
      validate_this_field = true;
      Udate = new Date($('#edit-next-payday-year').val(), $('#edit-next-payday-month').val()*1 - 1, $('#edit-next-payday-day').val());
    }

    if (($('#edit-next-income-due-day').val() > 0)
      || ($('#edit-next-income-due-month').val() > 0)
      || ($('#edit-next-income-due-year').val() > 0)) {
      validate_this_field = true;
      Udate = new Date($('#edit-next-income-due-year').val(), $('#edit-next-income-due-month').val()*1 - 1, $('#edit-next-income-due-day').val());
    }

    if(validate_this_field && (Udate < Tdate))
    {
      return false;
      //	break
    }else{
      return true;
    }

    //}else{
    //return true;
    //}
  }, jQuery.format(Drupal.t("Please enter a date in the future")));

  //PLT check date is in future
  $.validator.addMethod("paydaterealdate", function(value, element, params) {
    var month = parseInt($('#edit-next-payday-month').val());
    var day = parseInt($('#edit-next-payday-day').val());
    var year = parseInt($('#edit-next-payday-year').val());

    sd = new Date (year,month-1,day); //months start at 0, correct for right month

    if(((isNaN(day) && isNaN(month) && isNaN(year)) || (sd.getMonth()+1) == month && sd.getDate() == day)){
      //if this date passes the through Date object and is the same as the user entered
      //then we know we have a correct date
      return true;
    } else {
      return false;
    };

  }, jQuery.format("The pay date you have chosen is incorrect"));

  //check date is real  //TODO: rewrite this crap
  $.validator.addMethod("npdrealdate", function(value, element, params) {
    // todays date
    var Tdate = new Date()
    // split user date in order to get number for month string
    var month = value.split(' ');
    var monthNames	 = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
//		if($("#edit-employment-status").val() != 'SelfEmployed'	)
//		{
    for (x in monthNames)
    {
      if (month[1] == monthNames[x])
      {
        var Udate = new Date (month[02],x,month[0])

        if(Udate.getDate() == value.substring(0, 2))
        {
          return true;
          //	break
        }else{
          return false;
        }
      }
    }
//		}else{
//			return true;
//		}
  }, jQuery.format("Please choose a real date"));


  // required for date of birth and expirey/start  dates
  $.validator.addMethod("require_from_group", function(value, element, options) {

    if( $(element).is(":visible"))
    {
      numberRequired = options[0];
      selector = options[1];
      //Look for our selector within the parent form
      var validOrNot = $(selector, element.form).filter(function() {
        // Each field is kept if it has a value
        return $(this).val();
        // Set to true if there are enough, else to false
      }).length >= numberRequired;
      if(!$(element).data('being_validated')) {
        var fields = $(selector, element.form);
        //.valid() means "validate using all applicable rules" (which
        //includes this one)
        // fields.data('being_validated', true).valid();
        //fields.data('being_validated', false);
      }
      return validOrNot;
    }else{
      //return this.optional(element);
      return true;
    }
    // {0} below is the 0th item in the options field
  }, jQuery.format(Drupal.t("Please enter all {0} fields.")));

  $.validator.addMethod('SortCodeParts', function (value, element) {

    this.settings.messages[element.name] = "Please enter a valid sort code";
    var sort = $('#edit-sort-code-part1').val() + $('#edit-sort-code-part2').val() + $('#edit-sort-code-part3').val();
    if (/^\d{6}$/.test(sort)) return true;

    return false;

  });

  $.validator.addMethod('BirthDateDigits', function (value, element) {
    this.settings.messages[element.name] = "Please enter only digits";
    var digits = $('#edit-getbirthdateverification-part1').val() +
      $('#edit-getbirthdateverification-part2').val();
    if (/^\d{2}$/.test(digits)) {
      return true;
    }
    return false;
  });

  $.validator.addMethod('valid_name', function (value, element) {
    return this.optional(element) || /^[a-zA-Z\'\-\ ]{1,40}$/.test(value);
  },"You have entered illegal characters in this field.");

  $.validator.addMethod('textd', function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9\'\-\ \.]{1,75}$/.test(value);
  }, Drupal.t("You have entered illegal characters in this field."));

  $.validator.addMethod('textdplus', function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9\'\-\ \.\?]{1,75}$/.test(value);
  }, Drupal.t('You have entered illegal characters in this field.'));

  $.validator.addMethod('employer_textd', function (value, element) {
    this.settings.messages[element.name] = "You have entered illegal characters in this field.";
    return this.optional(element) || /^[a-zA-Z0-9\'\-\ \.\:]{1,75}$/.test(value);
  }, 'error');

  $.validator.addMethod('disabledRequiredField', function (value, element, params) {
    // if the bank account number in the LN journey is blank and disabled
    // we need to return false

    if ($(element).val().length < 1) {
      $(element).attr('disabled', true);
      return false;
    }
    $(element).attr('disabled', true);
    return true;
    //}
  }, 'This field is required');

 /**
  * General validation methods like in wonga.validation.inc to unificate
  * validation for custom fields
  */

  $.validator.addMethod('Alpha', function (value, element) {
     return this.optional(element) || /^[a-zA-Z- ]+$/.test(value);
   },Drupal.t("You have entered illegal characters in this field."));

  //alphanumeric + dot ;)
  $.validator.addMethod('AlphaDot', function (value, element) {
     return this.optional(element) || /^[a-zA-Z-\ \.]+$/.test(value);
   },Drupal.t("You have entered illegal characters in this field."));

  $.validator.addMethod('AlphaNumeric', function (value, element) {
     return this.optional(element) || /^[\w\s\.\- ,:']+$/.test(value);
   },Drupal.t("You have entered illegal characters in this field."));

   $.validator.addMethod('AlphaSpecial', function (value, element) {
     return this.optional(element) || /^[a-zA-Z-\- ,']+$/.test(value);
   },Drupal.t("You have entered illegal characters in this field."));

   $.validator.addMethod('TextSimpleType', function (value, element) {
     return this.optional(element) || /^[A-Za-z0-9 \-'.]{1,75}$/.test(value);
   },Drupal.t("You have entered illegal characters in this field."));

   $.validator.addMethod('StreetSimpleType', function (value, element) {
     return this.optional(element) || /(?!.{76,})(^[A-Za-z]([A-Za-z&][\s]{0,}[\-'.,]{0,1}[\s]{0,})*[A-Za-z\.]$)/.test(value);
   },Drupal.t("You have entered illegal characters in this field."));

   $.validator.addMethod('TownSimpleType', function (value, element) {
     return this.optional(element) ||
       /(?!.{76,})(^[A-Za-z]([A-Za-z][ \-'.,]{0,1})*[A-Za-z]$)/.test(value);
   },Drupal.t("You have entered illegal characters in this field."));

   /**
    * Checks that the field starts with simple character
    **/
   $.validator.addMethod('StartSymbol', function (value, element) {
     return this.optional(element) || /^[\w]/.test(value);
   },Drupal.t("You have entered illegal characters at the start of this " +
     "field."));

   /**
    * Checks that the field ends with simple character
    **/
   $.validator.addMethod('EndSymbol', function (value, element) {
     return this.optional(element) || /[\w]$/.test(value);
   },Drupal.t("You have entered illegal characters at the end of this field."));

  $.validator.addMethod('Numeric', function (value, element) {
     return this.optional(element) || /^[0-9 -]+$/.test(value);
   },Drupal.t("You have entered illegal characters in this field."));

  //eof general validation methods

  //birthdate for repayment validation
  $.validator.addMethod('repaymentBirthDate',
    function (value, element) {
        return /^[0-9]{4}-([0-2][1-9]|[1-3]0|31)-(0[1-9]|1[0-2])$/.test(value);
    },
    Drupal.t('Entered date is not correct')
  );

  $.validator.addMethod('repaymentMoney',
    function (value, element) {
      if ($('#edit-all-income')) {
        var fields = $('.wonga-repayment-money-field');

        var summ=0;
        for (var i=0; i<fields.length-1; i++) {
          summ += (!isNaN(Number(fields[i].value)))
            ?
            Number(fields[i].value)
          :
            0;
        }
        $('#edit-all-income').val(summ.toFixed(2));
      }
      $('#' + element.id + '-wrapper .form-error').empty();
      return /^[0-9]*\.?[0-9]?[0-9]?$/.test(value);
    },
    Drupal.t('You have entered illegal characters in this field')
  );

  $.validator.addMethod('repaymentDebtsCustomLoans',
    function (value, element) {
      if (value == 'Monthly' || value == 'Total arrears') {
        return true;
      }
      if (!/^[0-9]*\.?[0-9]?[0-9]?$/.test(value)){
        $('#' + element.id + '-wrapper .form-error').empty();
        return false;
      }
      var tmp = element.id.split('-');
      var loan_id = tmp[3];

      $('#' + element.id + '-wrapper .form-error').empty();

      if (value != "" && $('#edit-loan-name-'+loan_id).val()=="" && Number(value)>0) {
        return false;
      }

      return true;
    },
    Drupal.t('You should enter valid amount and Creditor Name')
  );

  $.validator.addMethod('repaymentDebtsCustomLoansName',
    function (value, element) {

        var tmp = element.id.split('-');
        var loan_id = tmp[3];

         $('#edit-loan-value-'+loan_id).valid();

        return true;
    },
    Drupal.t('You should enter valid amount and Creditor Name')
  );

  $.validator.addMethod('repaymentCheckAmount',
    function (value, element) {
        if (!/^[0-9]*\.?[0-9]?[0-9]?$/.test(value))
          return false;

        if (Number(value) > Drupal.settings.wonga.repayment.balance)
          element.value = Drupal.settings.wonga.repayment.balance;

        return true;
    },
    Drupal.t('You should enter valid amount')
  );

  $.validator.addMethod('repayment_get_all_income',
    function (value, element) {

        var fields = $('.wonga-repayment-money-field');

          var summ=0;
          for (var i=0; i<fields.length-1; i++) {
            summ += (!isNaN(Number(fields[i].value)))
              ?
              Number(fields[i].value)
            :
              0;
          }
        $('#edit-all-income').val(summ.toFixed(2));
        value = $('#edit-all-income').val();

        return /^[0-9]*\.?[0-9]?[0-9]?$/.test(value) && Number(value)>0;
    },
    Drupal.t('You should enter at least one item of income')
  );

  /**
   * Lhun card number checksum Validator
   */
  $.validator.addMethod('LhunValidator', function(value, element) {

    // gets the full card number
    var card = $('#edit-card-number-part0').val() +
    $('#edit-card-number-part1').val() +
    $('#edit-card-number-part2').val() +
    $('#edit-card-number-part3').val();

    if (card.length == 16) {
      var ca, sum = 0, mul = 1;
      var len = card.length;
      while (len--) {
        ca = parseInt(card.charAt(len), 10) * mul;
        sum += ca - (ca > 9) * 9;
        mul ^= 3;
      }
      return (sum % 10 === 0) && (sum > 0);
    }

    // Default behaviour is to return true
    return true;
  }, Drupal.t('Card number entered incorrectly. Please check your card number.')
    );

      //check that the date is not in the future
  $.validator.addMethod('futurecheck', function(value, element) {

    var smonth = $("#edit-getlastloandateverification-month").val();
    var syear = $("#edit-getlastloandateverification-year").val();
    if ( 1 > smonth || smonth > 12) {
      return false;
    }
    var day = 01;
    var startD = new Date();
    startD.setFullYear(syear, (smonth - 1), day); //adjustment for month values of 0 - 11 in javascript
    var today = new Date();

    if ($('#edit-getlastloandateverification-month').is(":visible"))
    {
      if ( startD > today ) {
        return false;
      } else {
        return true;
      }
    }else{
      return true;
    }

  }, Drupal.t("You can not have a last loan date in the future"));

  $.validator.addMethod('income_monthlyUK', function (value, element) {
    if (Drupal.settings.wonga.country_code != 'UK') return true;
     return this.optional(element) || /^[0-9]+$/.test(value);
   },Drupal.t("You have entered illegal characters in this field."));

  /**
   * Add a validator method for benefits checkboxes
   */
  $.validator.addMethod('benefits_received', function (value, element) {
    // Ensure at least one checkbox is selected
    return $('input.benefits_received:checked').length > 0;
  }, Drupal.t('Please select the benefits you receive'));

    /**
   * Add a validator method for benefits checkboxes
   */
  $.validator.addMethod('upcoming_changes', function (value, element) {
    // Ensure at least one radio is selected
    return $('input.upcoming_changes:checked').length > 0;
  }, Drupal.t('Please select whether you are aware of any change in your ' +
          'financial situation over the next 6 months that could make it ' +
          'more difficult to make repayments.'));

})(jQuery, Drupal);

;
/**
 * This file attaches validation to every form found on the page, excluding the
 */
(function($, Drupal) {
  /**
   * An object to store params to initialise jQuery validator.
   * @type {Object}
   */
  var validate_params = {
    submitHandler: function(form) {
      var $form = $(form);

      if ($form.hasClass('ctools-use-modal-processed')) {
        // Don't submit ctools modals manually
        return;
      }

      if ($form.data('blockFormSubmit') === true) {
        // Previously submitted - don't submit again.
        return;
      }

      if ($form.not('.js-allow-double-submission')) {
        // This form does not allow multiple clicks so set flag to block submit
        $form.data('blockFormSubmit', true);
      }
      form.submit();
    },
    onfocusout: function(element, event) {
      // Get the Jquery element that was clicked
      var $el = $(element),
        // Get the rules for this element
        element_rules = $el.rules();

      // Trim elements on focus out.
      $el.val($.trim($el.val()));

      // If field is part of group only validate the last item.
      if (element_rules.require_from_group) {
        var number_group_items = element_rules.require_from_group[0],
          group_selector = element_rules.require_from_group[1];
        // Get all the elements in the group
        var group_elements = $(group_selector);
        // Check if this is not the last item in the group
        if (!group_elements[number_group_items - 1] ||
          group_elements[number_group_items - 1] !== element) {
          // This item is not the last item in the group so don't validate it
          return;
        }
      }
      // Continue with validation
      this.element(element);
    },
    // Ignore all hidden fields, except those hidden by jqMultiBrowserForm
    ignore: function (index, element) {
      var $element_to_check = $(element);
      if ($element_to_check.hasClass("jqMultiHide")) {
        // jqMultiHide input elements are hidden so check the parent instead
        $element_to_check = $element_to_check.parent();
      }
      return $element_to_check.is(":hidden");
    },
    errorClass: "invalid",
    validClass: "success",
    success: "success",
    errorElement: "div",
    groups: {
      'edit-start-card-date0':"start_card_date0[month] start_card_date0[year]",
      'edit-start-card-date1':"start_card_date1[month] start_card_date1[year]",
      'edit-date-of-birth':"date_of_birth[day] date_of_birth[month] date_of_birth[year]",
      'edit-next-payday':"next_payday[day] next_payday[month] next_payday[year]",
      'edit-next-income':"next_income_due[day] next_income_due[month] next_income_due[year]",
      car_owner:"edit-car-ownership-Y edit-car-ownership-N",
      start_date:"card_start_date[month] card_start_date[year]",
      expiry:"card_expiry_date[month] card_expiry_date[year]",
      aditional_expiry:"additional_card_expiry_date[month] additional_card_expiry_date[year]",
      loan_start_date: "getlastloandateverification[month] getlastloandateverification[year]",
      sort_code: "sort_code[part1] sort_code[part2] sort_code[part3]",
      security_birthday_digits: "getbirthdateverification[part1] getbirthdateverification[part2]"
    },
    errorPlacement: function(error, element) {
      if (element.is(".jqMultiHide:radio"))
        error.appendTo(element.parent().parent().parent().parent().parent().parent().parent().next());
      if (element.is(":radio"))
        error.appendTo(element.parent().parent().parent().parent().parent().parent().next());
      else if (element.is(".jqMultiHide:checkbox")) {
        if (element.hasClass('benefits_received')) {
          error.appendTo(element.closest('.form-input.form-input-checkboxes').next());
        } else {
          error.appendTo(element.parent().parent().parent().next());
        }
      } else if (element.is(":checkbox")) {
        if (element.hasClass('benefits_received')) {
          error.appendTo(element.closest('.form-input.checkboxes').next());
        } else {
          error.appendTo(element.parent().parent().next());
        }
      } else if (element.attr('id') == 'edit-date-of-birth-day' || element.attr('id') == 'edit-date-of-birth-month' || element.attr('id') == 'edit-date-of-birth-year')
        error.appendTo('#edit-date-of-birth-wrapper > .form-error');
      else if (element.attr('id') == 'edit-next-payday-day' || element.attr('id') == 'edit-next-payday-month' || element.attr('id') == 'edit-next-payday-year')
        error.appendTo('#edit-next-payday-wrapper > .form-error');
      else if (element.attr('id') == 'edit-next-income-due-day' || element.attr('id') == 'edit-next-income-due-month' || element.attr('id') == 'edit-next-income-due-year')
        error.appendTo('#edit-next-income-due-wrapper > .form-error');
      else if (element.attr('id') == 'edit-card-start-date-month' || element.attr('id') == 'edit-card-start-date-year')
        error.appendTo('#edit-card-start-date-wrapper > .form-error');
      else if (element.attr('id') == 'edit-card-expiry-date-month' || element.attr('id') == 'edit-card-expiry-date-year')
        error.appendTo('#edit-card-expiry-date-wrapper > .form-error');
      else if (element.attr('id').indexOf('edit-sort-code-part') > -1)
        error.appendTo('#edit-sort-code-wrapper > .form-error');
      else if (element.attr('id') == 'edit-getlastloandateverification-month' || element.attr('id') == 'edit-getlastloandateverification-year')
        error.appendTo('#edit-getlastloandateverification-wrapper > .form-error');
      else if (element.attr('id').indexOf('edit-getbirthdateverification-part') > -1)
        error.appendTo('#edit-getbirthdateverification-wrapper > .form-error');
      else if (element.attr('id') == 'edit-loan-repayment-amount'
        || element.attr('id') == 'edit-loan-amount'
        || element.attr('id') == 'edit-loan-duration') {
        // @TODO This is silly
        // Add sliders to here so they dont get errors added
        return;
      }
      else if (element.attr('id') == 'edit-agreement-confirm')
        error.appendTo('#edit-agreement-confirm-wrapper > .form-error');
      else {
        error.appendTo(element.parent().siblings('.form-error'));
      }
    },

    /////////////////////////
    // Applies highlight class to invalid fields (what makes it go grey)
    highlight: function(element, errorClass, validClass) {
      if ($(element).is(":radio")) {
        $(element).addClass(errorClass).removeClass(validClass);
        $(element).parents('div:eq(5)').addClass("error_hlight");
        $(element).parents('div:eq(5)').removeClass("success_hlight");
      } else if ($(element).attr('id') == 'edit-date-of-birth-day'
        || $(element).attr('id') == 'edit-date-of-birth-month'
        || $(element).attr('id') == 'edit-date-of-birth-year'
        || $(element).attr('id') == 'edit-next-payday-day'
        || $(element).attr('id') == 'edit-next-payday-month'
        || $(element).attr('id') == 'edit-next-payday-year'
        || $(element).attr('id') == 'edit-next-income-due-day'
        || $(element).attr('id') == 'edit-next-income-due-month'
        || $(element).attr('id') == 'edit-next-income-due-year'
        || $(element).attr('id') == 'edit-card-start-date-year'
        || $(element).attr('id') == 'edit-card-start-date-month'
        || $(element).attr('id') == 'edit-card-expiry-date-year'
        || $(element).attr('id') == 'edit-card-expiry-date-month'
        || $(element).attr('id') == 'edit-additional-card-expiry-date-year'
        || $(element).attr('id') == 'edit-additional-card-expiry-date-month'
        || $(element).attr('id') == 'edit-getlastloandateverification-year'
        || $(element).attr('id') == 'edit-getlastloandateverification-month'
        ) {
        $(element).parents('div:eq(5)').removeClass(validClass),
        $(element).parents('div:eq(5)').removeClass("success_hlight");
        $(element).removeClass(validClass);
        $(element).parents('div:eq(5)').addClass("error_hlight");
      } else if ($(element).hasClass('benefits_received')) {
        var $sibling_checkboxes = $(element).closest('.form-checkboxes')
            .find('input');
        $sibling_checkboxes.each(function() {
          $(this).parents('div:eq(1)').addClass("error_hlight");
        });
        $(element).parents('div:eq(5)').addClass("error_hlight");
      } else if ($(element).attr('id').indexOf('edit-sort-code-part') > -1) {

        var $sort_code_inputs = $(element).closest('#edit-sort-code-wrapper')
            .find('input');
        $sort_code_inputs.each(function() {
          $(this).removeClass("success").addClass("invalid");
        });
      } else if ($(element).attr('id').indexOf('edit-getbirthdateverification-part') > -1) {
        var $inputs = $(element).closest('#edit-getbirthdateverification-wrapper')
          .find('input');
        $inputs.each(function() {
          $(this).removeClass("success").addClass("invalid");
        });
      } else {
        $(element).addClass(errorClass).removeClass(validClass);
        $(element).parents('div:eq(1)').addClass("error_hlight");
        $(element).parents('div:eq(5)').removeClass("success_hlight");
        $(element).parents('div:eq(1)').removeClass("success_hlight");
      }
    },
    // make the background white when the field is correct
    unhighlight:function (element, errorClass, validClass) {
      if ($(element).is(":radio")) {
        $(element).parents('div:eq(5)').addClass("success_hlight"),
        $(element).parents('div:eq(5)').removeClass("error_hlight");
      } else if ($(element).attr('id') == 'edit-date-of-birth-day'
        || $(element).attr('id') == 'edit-date-of-birth-month'
        || $(element).attr('id') == 'edit-date-of-birth-year'
        || $(element).attr('id') == 'edit-next-payday-day'
        || $(element).attr('id') == 'edit-next-payday-month'
        || $(element).attr('id') == 'edit-next-payday-year'
        || $(element).attr('id') == 'edit-next-income-due-day'
        || $(element).attr('id') == 'edit-next-income-due-month'
        || $(element).attr('id') == 'edit-next-income-due-year'
        || $(element).attr('id') == 'edit-card-start-date-year'
        || $(element).attr('id') == 'edit-card-start-date-month'
        || $(element).attr('id') == 'edit-card-expiry-date-year'
        || $(element).attr('id') == 'edit-card-expiry-date-month'
        || $(element).attr('id') == 'edit-additional-card-expiry-date-year'
        || $(element).attr('id') == 'edit-additional-card-expiry-date-month'
        || $(element).attr('id') == 'edit-getlastloandateverification-year'
        || $(element).attr('id') == 'edit-getlastloandateverification-month'
      ) {
        $(element).parents('div:eq(5)').addClass("success_hlight"),
        $(element).parents('div:eq(5)').removeClass("error_hlight"),
        $(element).parents('div:eq(2)').removeClass("success_hlight"),
        $(element).addClass("valid");
      } else if ($(element).hasClass('benefits_received')) {
        var $sibling_checkboxes = $(element).closest('.form-checkboxes')
            .find('input');
        $sibling_checkboxes.each(function() {
          $(this).parents('div:eq(1)').removeClass("error_hlight");
        });
        $(element).parents('div:eq(5)').removeClass("error_hlight");
      } else if ($(element).attr('id').indexOf('edit-sort-code-part') > -1) {
        var $sort_code_inputs = $(element).closest('#edit-sort-code-wrapper')
            .find('input');
        $sort_code_inputs.each(function() {
          $(this).removeClass("invalid").addClass("success");
        });
      } else if ($(element).attr('id').indexOf('edit-getbirthdateverification-part') > -1) {
        var $inputs = $(element).closest('#edit-getbirthdateverification-wrapper')
          .find('input');
        $inputs.each(function() {
          $(this).removeClass("invalid").addClass("success");
        });
      } else {
        $(element).removeClass(errorClass).addClass(validClass);
        $(element).parents('div:eq(1)').removeClass("error_hlight");
        $(element).parents('div:eq(1)').addClass("success_hlight");
      }
    },

    //////////////////
    /// validation rules
    rules:{
      first_name:{
        norepeatedsigns:true,
        valid_name:true,
        minlength:2
      },
      middle_name:{
        norepeatedsigns:true,
        valid_name:true
      },
      last_name:{
        norepeatedsigns:true,
        valid_name:true,
        minlength:2
      },
      "date_of_birth[day]":{
        require_from_group:[3,
          '#edit-date-of-birth-wrapper .form-element-type-date_select'],
        realdate:true,
        overAGE:true
      },
      "date_of_birth[month]":{
        require_from_group:[3,
          '#edit-date-of-birth-wrapper .form-element-type-date_select'],
        realdate:true,
        overAGE:true
      },
      "date_of_birth[year]":{
        require_from_group:[3,
          '#edit-date-of-birth-wrapper .form-element-type-date_select'],
        realdate:true,
        overAGE:true
      },
      email:{
        notSpamEmail: true,
        trueEmail: true
      },
      email_confirm:{
        notSpamEmail: true,
        trueEmail: true,
        fieldEqual: true
      },
      repeat_password:{
        equalTo:'#edit-new-password'
      },
      vehicle_registration:{
        required:"input[name=vehicle_owner][value=1]:checked",
        AlphaNumeric:true
      },

      /////////////////////////
      // conditional elements - employment status

      income:{
        number:true
      },
      monthly_income:{
        number:true,
        min: 1,
        required:function (element) {
          return (
            $("#edit-employment-status").val() == 'EmployedFullTime'
            || $("#edit-employment-status").val() == 'EmployedPartTime'
            || $("#edit-employment-status").val() == 'EmployedTemporary'
            || $("#edit-employment-status").val() == 'Student'
              || $("#edit-employment-status").val() == 'ArmedForces'
              || $("#edit-employment-status").val() == ''
          )
        }
      },
      industry_other: {
        required: function(element) {
          return (
            $("#edit-industry").val() == 'Other'
            )
        }
      },
      employer_name:{
        required:function (element) {
          return (
            $("#edit-employment-status").val() == 'EmployedFullTime'
            || $("#edit-employment-status").val() == 'EmployedPartTime'
            || $("#edit-employment-status").val() == 'EmployedTemporary'
          )
        }
      },
      employer_industry:{
        required:function (element) {
          return (
            $("#edit-employment-status").val() == 'EmployedFullTime'
            || $("#edit-employment-status").val() == 'EmployedPartTime'
            || $("#edit-employment-status").val() == 'EmployedTemporary'
          )
        }
      },
      employment_position:{
        required:function (element) {
          return (
            $("#edit-employment-status").val() == 'EmployedFullTime'
            || $("#edit-employment-status").val() == 'EmployedPartTime'
            || $("#edit-employment-status").val() == 'EmployedTemporary'
          )
        }
      },
      employment_time_years:{
        required:function (element) {
          return (
            $("#edit-employment-status").val() == 'EmployedFullTime'
            || $("#edit-employment-status").val() == 'EmployedPartTime'
            || $("#edit-employment-status").val() == 'EmployedTemporary'
          )
        }
      },
      employment_time_months:{
        required:function (element) {
          return (
            $("#edit-employment-status").val() == 'EmployedFullTime'
            || $("#edit-employment-status").val() == 'EmployedPartTime'
            || $("#edit-employment-status").val() == 'EmployedTemporary'
          )
        }
      },
      work_phone:{
        required:function (element) {
          return (
            $("#edit-employment-status").val() == 'EmployedFullTime'
            || $("#edit-employment-status").val() == 'EmployedPartTime'
            || $("#edit-employment-status").val() == 'EmployedTemporary'
            || $("#edit-employment-status").val() == 'SelfEmployed'
            || $("#edit-employment-status").val() == 'ArmedForces'
          )
        },
        number:true,
        maxlength:11,
        PhoneUK:true
      },

      income_frequency:{
        required:function (element) {
          return (
            $("#edit-employment-status").val() == 'EmployedFullTime'
            || $("#edit-employment-status").val() == 'EmployedPartTime'
            || $("#edit-employment-status").val() == 'EmployedTemporary'
            || $("#edit-employment-status").val() == 'Student'
            || $("#edit-employment-status").val() == 'HomeMaker'
            || $("#edit-employment-status").val() == 'SelfEmployed'
            || $("#edit-employment-status").val() == 'Retired'
            || $("#edit-employment-status").val() == 'Unemployed'
            || $("#edit-employment-status").val() == 'OnBenefits'
            || $("#edit-employment-status").val() == 'ArmedForces'
            || $("#edit-employment-status").val() == ''
          )
        }
      },
      'next_payday[day]':{
        require_from_group:[3,
          '#edit-next-payday-wrapper .form-element-type-date_select'],
        pastcheck:true,
        NextPayDate:true
      },
      'next_payday[month]':{
        require_from_group:[3,
          '#edit-next-payday-wrapper .form-element-type-date_select'],
        pastcheck:true,
        NextPayDate:true
      },
      'next_payday[year]':{
        require_from_group:[3,
          '#edit-next-payday-wrapper .form-element-type-date_select'],
        pastcheck:true,
        NextPayDate:true
      },
      'next_payday':{
        /* Payday field on mobile. In addition the data seleector
         * handles most of ensuring the user selects something valid.
         */
        //date: true,
        required:true,
        pastcheck:true,
        npdrealdate:true,
        maxlength:12
      },
      'next_income_due[day]':{
        require_from_group:[3,
          '#edit-next-income-due-wrapper .form-element-type-date_select'],
        pastcheck:true,
        maxlength:12,
        NextIncomeDate:true
      },
      'next_income_due[month]':{
        require_from_group:[3,
          '#edit-next-income-due-wrapper .form-element-type-date_select'],
        pastcheck:true,
        maxlength:12,
        NextIncomeDate:true
      },
      'next_income_due[year]':{
        require_from_group:[3,
          '#edit-next-income-due-wrapper .form-element-type-date_select'],
        pastcheck:true,
        maxlength:12,
        NextIncomeDate:true
      },
      'next_income_due[date]':{
        //date: true,
        required:function (element) {
          return (
            $("#edit-employment-status").val() == 'SelfEmployed'
          )
        },
        pastcheck:true,
        npdrealdate:true,
        maxlength:12
      },
      'next_income_due':{
        /* Income due field on mobile. In addition the data seleector
         * handles most of ensuring the user selects something valid.
         */
        //date: true,
        required:true,
        pastcheck:true,
        npdrealdate:true,
        maxlength:12
      },
      salary_to_bank:{
        required:function (element) {
          return (
            $("#edit-employment-status").val() == 'EmployedFullTime'
            || $("#edit-employment-status").val() == 'EmployedPartTime'
            || $("#edit-employment-status").val() == 'EmployedTemporary'
            || $("#edit-employment-status").val() == 'SelfEmployed'
            || $("#edit-employment-status").val() == 'Student'
            || $("#edit-employment-status").val() == 'ArmedForces'
          )
        }
      },
      household_income:{
        number:true,
        min:1,
        required:function (element) {
          return (
            $("#edit-employment-status").val() == 'SelfEmployed'
            || $("#edit-employment-status").val() == 'HomeMaker'
            || $("#edit-employment-status").val() == 'Retired'
            || $("#edit-employment-status").val() == 'Unemployed'
            || $("#edit-employment-status").val() == 'OnBenefits'
          )
        }
      },

      /////////////////////////
      //// University
      university:{
        required:function (element) {
          return ($("#edit-employment-status").val() == 'Student')
        }
      },
      university_time_months:{
        required:function (element) {
          return ($("#edit-employment-status").val() == 'Student')
        }
      },
      university_time_years:{
        required:function (element) {
          return ($("#edit-employment-status").val() == 'Student')
        }
      },
      /////////////////////////
      //// Armed Forces
      division:{
        required:function (element) {
          return ($("#edit-employment-status").val() == 'ArmedForces')
        }
      },
      service_time_years:{
        required:function (element) {
          return ($("#edit-employment-status").val() == 'ArmedForces')
        }
      },
      service_time_months:{
        required:function (element) {
          return ($("#edit-employment-status").val() == 'ArmedForces')
        }
      },

      /////////////////////////
      // Other personal information
      home_phone:{
        PhoneUK:true
      },
      mobile_phone:{
        required:true,
        MobileUK:true
      },
      update_option:"required",
      married:"required",
      car_ownership:"required",
      vehicle_owner:"required",
      upcoming_changes:"required",
      /////////////////////////
      // Address fields
      select_address:{
        required:true
      },
      postcode_finder:{
        PostalCodeUK:true,
        maxlength:8
      },
      postcode_lookup_uk:{
        required: true,
        PostalCodeUK:true,
        maxlength:8
      },
      town: {
        TownSimpleType: true,
        StartSymbol: true,
        EndSymbol: true
      },
      street: {
        StreetSimpleType: true,
        StartSymbol: true,
        EndSymbol: true
      },
      //////////////////////////
      //profile update address
      house_name:{
        address_filled:true
      },
      house_number: {
        AlphaNumeric: true,
        address_filled:true
      },
      postcode:{
        PostalCodeUK:true
      },
      postcode_uk:{
        PostalCodeUK:true
      },
      previous_postcode_uk:{
        PostalCodeUK: function (element) {
          // Less than 1 year.
          return (($('#edit-time-at-address').val() == '0') ||
            ($('#edit-time-at-address').val() == '4'))
        }
      },
      time_at_address:{
        required:true
      },
      /////////////////////////
      // Password / user
      password:{
        //password: "#edit-username",
        wongapassword:"#edit-username",
        required:function (element){
          return ($(element).is(":visible"))
        }
      },
      password_confirm:{
        equalTo:"#edit-password"
      },
      /////////////////////////
      // Bank Details
      sort_code:{
        required:true,
        BSCodeUK:true,
        maxlength:function (element) {
          //change max length if user inputs hyphens or spaces
          var patt = /([0-9]{2}-[0-9]{2}-)/;
          var patt2 = /([0-9]{2} [0-9]{2} )/;
          if (patt.test($('#edit-sort-code').val()) || patt2.test($('#edit-sort-code').val())) {
            return 8;
          }
          else {
            return 6;
          }
        }
      },
      'sort_code[part1]':{
        SortCodeParts:true,
        require_from_group:[3, '#edit-sort-code-wrapper input']
      },
      'sort_code[part2]':{
        SortCodeParts:true,
        require_from_group:[3, '#edit-sort-code-wrapper input']
      },
      'sort_code[part3]':{
        SortCodeParts:true,
        require_from_group:[3, '#edit-sort-code-wrapper input']
      },
      account_number:{
        BANumberUK:true,
        maxlength:8,
        number:true
      },
      bank_account_masked:{
        required:true
      },
      mobile_number:{
        ignore:true
        //disabledRequiredField: true,
        //required:false
      },

      //////////////////////
      // Card page elements
      card_number:{
        UKcard:true,
        maxlength:19
      },
      "card_start_date[month]":{
        start_check:true
      },
      "card_start_date[year]":{
        start_check:true
      },
      "card_expiry_date[month]":{
        require_from_group:[2,
          '#edit-card-expiry-date-wrapper .form-input .form-element-type-date_select'],
        expiry_check:true,
        card_expires_before_payment:true
      },
      "card_expiry_date[year]":{
        require_from_group:[2,
          '#edit-card-expiry-date-wrapper .form-input .form-element-type-date_select'],
        expiry_check:true,
        card_expires_before_payment:true
      },
      "card_expiry_date":{
        required:true,
        expiry_check:true,
        card_expires_before_payment:true
      },
      card_name:{
        required:true,
        AlphaDot: true
      },
      card_type:{
        required:true
      },
      card_issue:{
        minlength:2
      },
      card_security:{
        number:true,
        required:true,
        minlength:3
      },
      pin:{
        minlength:4,
        required:true,
        number:true
      },
      mobile_pin:{
        number:true,
        minlength:4,
        required:true
      },

      ////////// ln fields /////////////
      new_mobile_number:{
        MobileUK:true,
        required:true
      },
      security_code:{
        required:true,
        minlength:3,
        digits:true
      },
      confirm_repay:{
        required: true
      },
      agreement_confirm:{
        required:true
      },

      /*repayment*/
      birthdate:{
        required:true,
        repaymentBirthDate:true
      },

      people_in_house_personal:{
        required:true,
        Numeric:true,
        minlength:1
      },

      dependents_under_14_personal: {
        required:true,
        Numeric:true,
        minlength:1
      },

      dependents_over_14_personal: {
        required:true,
        Numeric:true,
        minlength:1
      },

      number_vehicles: {
        required:true,
        Numeric:true,
        minlength:1
      },

      salary: {
        repaymentMoney:true
      },

      partners_salary: {
        repaymentMoney:true
      },

      jobseekers_allowance: {
        repaymentMoney:true
      },

      income_support: {
        repaymentMoney:true
      },

      working_tax_credit: {
        repaymentMoney:true
      },

      child_tax_credit: {
        repaymentMoney:true
      },

      state_pensions: {
        repaymentMoney:true
      },

      private_work_pensions: {
        repaymentMoney:true
      },

      pension_credit: {
        repaymentMoney:true
      },

      other_income: {
        repaymentMoney:true
      },

      all_income: {
        repayment_get_all_income:true
      },

      other_pension_income: {
        repaymentMoney:true
      },

      boarders: {
        repaymentMoney:true
      },

      loans_or_grants: {
        repaymentMoney:true
      },

      rent: {
        repaymentMoney:true,
        debtsPageMonthlyComparison:true
      },

      rent_total: {
        repaymentMoney:true,
        debtsPageTotalComparison:true
      },

      ground_rent_service_charges: {
        repaymentMoney:true
      },

      mortgage: {
        repaymentMoney:true,
        debtsPageMonthlyComparison:true
      },

      mortgage_total: {
        repaymentMoney:true,
        debtsPageTotalComparison:true
      },

      other_secured_loans: {
        repaymentMoney:true,
        debtsPageMonthlyComparison:true
      },

      other_secured_loans_total: {
        repaymentMoney:true,
        debtsPageTotalComparison:true
      },

      building_insurance: {
        repaymentMoney:true
      },

      pension_insurence: {
        repaymentMoney:true
      },

      council_tax: {
        repaymentMoney:true,
        debtsPageMonthlyComparison:true
      },

      council_tax_total: {
        repaymentMoney:true,
        debtsPageTotalComparison:true
      },

      gas: {
        repaymentMoney:true,
        debtsPageMonthlyComparison:true
      },

      gas_total: {
        repaymentMoney:true,
        debtsPageTotalComparison:true
      },

      electricity: {
        repaymentMoney:true,
        debtsPageMonthlyComparison:true
      },

      electricity_total: {
        repaymentMoney:true,
        debtsPageTotalComparison:true
      },

      water: {
        repaymentMoney:true
      },

      other_utilities: {
        repaymentMoney:true
      },

      tv_licence: {
        repaymentMoney:true
      },

      magistrates: {
        repaymentMoney:true
      },

      maintenance: {
        repaymentMoney:true,
        debtsPageMonthlyComparison:true
      },

      maintenance_total: {
        repaymentMoney:true,
        debtsPageTotalComparison:true
      },

      hire_purchase: {
        repaymentMoney:true,
        debtsPageMonthlyComparison:true
      },

      hire_purchase_total: {
        repaymentMoney:true,
        debtsPageTotalComparison:true
      },

      childcare: {
        repaymentMoney:true
      },

      adultcare: {
        repaymentMoney:true
      },

      other_exp: {
        repaymentMoney:true,
        debtsPageMonthlyComparison:true
      },

      other_exp_total: {
        repaymentMoney:true,
        debtsPageTotalComparison:true
      },

      home_phone_exp: {
        repaymentMoney:true
      },

      mobile_phone_exp: {
        repaymentMoney:true
      },

      other_phone_exp: {
        repaymentMoney:true
      },

      food_milk: {
        repaymentMoney:true
      },

      cleaning_toiletries: {
        repaymentMoney:true
      },

      toiletries: {
        repaymentMoney:true
      },

      newspapers_magazines: {
        repaymentMoney:true
      },

      cigaretes_tabacco_sweets: {
        repaymentMoney:true
      },

      alcohol: {
        repaymentMoney:true
      },

      laundry_dry_cleaning: {
        repaymentMoney:true
      },

      clothing_footwear: {
        repaymentMoney:true
      },

      baby_items: {
        repaymentMoney:true
      },

      pet_items: {
        repaymentMoney:true
      },

      other_housekeeping: {
        repaymentMoney:true
      },

      public_transport: {
        repaymentMoney:true
      },

      other_taxis: {
        repaymentMoney:true
      },

      car_insurance: {
        repaymentMoney:true
      },

      vehicle_taxi: {
        repaymentMoney:true
      },

      fuel: {
        repaymentMoney:true
      },

      mot_exp: {
        repaymentMoney:true
      },

      breakdown: {
        repaymentMoney:true
      },

      parking_charges: {
        repaymentMoney:true
      },

      other_travel_exp: {
        repaymentMoney:true
      },
      other_expendeture_postage: {
        repaymentMoney:true
      },
      health_expenditure: {
        repaymentMoney:true
      },
      meals_expenditure: {
        repaymentMoney:true
      },
      pets_expenditure: {
        repaymentMoney:true
      },
      mortgage_endownment_expenditure: {
        repaymentMoney:true
      },

      child_benefit: {
        repaymentMoney:true
      },

      employment_support_allowence: {
        repaymentMoney:true
      },

      disabiltiy_allowence: {
        repaymentMoney:true
      },

      carers_allowence: {
        repaymentMoney:true
      },

      housing_benefit: {
        repaymentMoney:true
      },

      council_tax_benefit: {
        repaymentMoney:true
      },

      other_benefits: {
        repaymentMoney:true
      },

      non_dependant: {
        repaymentMoney:true
      },

      other_benefit_examples: {
        repaymentMoney:true
      },

      property_value_assets: {
        repaymentMoney:true
      },

      mortgage_outstanding_assets: {
        repaymentMoney:true
      },

      loan_outstanding_assets: {
        repaymentMoney:true
      },

      vehicle_value_assets: {
        repaymentMoney:true
      },

      other_assets: {
        repaymentMoney:true
      },

      loan_value_0_total: {
        repaymentDebtsCustomLoans:true,
        debtsPageTotalComparison:true
      },

      loan_value_1_total: {
        repaymentDebtsCustomLoans:true,
        debtsPageTotalComparison:true
      },

      loan_value_2_total: {
        repaymentDebtsCustomLoans:true,
        debtsPageTotalComparison:true
      },

      loan_value_3_total: {
        repaymentDebtsCustomLoans:true,
        debtsPageTotalComparison:true
      },

      loan_value_4_total: {
        repaymentDebtsCustomLoans:true,
        debtsPageTotalComparison:true
      },

      loan_value_5_total: {
        repaymentDebtsCustomLoans:true,
        debtsPageTotalComparison:true
      },

      loan_value_6_total: {
        repaymentDebtsCustomLoans:true,
        debtsPageTotalComparison:true
      },

      loan_value_7_total: {
        repaymentDebtsCustomLoans:true,
        debtsPageTotalComparison:true
      },

      loan_value_8_total: {
        repaymentDebtsCustomLoans:true,
        debtsPageTotalComparison:true
      },

      loan_value_9_total: {
        repaymentDebtsCustomLoans:true,
        debtsPageTotalComparison:true
      },

      loan_value_0: {
        repaymentDebtsCustomLoans:true,
        debtsPageMonthlyComparison:true
      },

      loan_value_1: {
        repaymentDebtsCustomLoans:true,
        debtsPageMonthlyComparison:true
      },

      loan_value_2: {
        repaymentDebtsCustomLoans:true,
        debtsPageMonthlyComparison:true
      },

      loan_value_3: {
        repaymentDebtsCustomLoans:true,
        debtsPageMonthlyComparison:true
      },

      loan_value_4: {
        repaymentDebtsCustomLoans:true,
        debtsPageMonthlyComparison:true
      },

      loan_value_5: {
        repaymentDebtsCustomLoans:true,
        debtsPageMonthlyComparison:true
      },

      loan_value_6: {
        repaymentDebtsCustomLoans:true,
        debtsPageMonthlyComparison:true
      },

      loan_value_7: {
        repaymentDebtsCustomLoans:true,
        debtsPageMonthlyComparison:true
      },

      loan_value_8: {
        repaymentDebtsCustomLoans:true,
        debtsPageMonthlyComparison:true
      },

      loan_value_9: {
        repaymentDebtsCustomLoans:true,
        debtsPageMonthlyComparison:true
      },

      loan_name_0: {
        repaymentDebtsCustomLoansName:true
      },

      loan_name_1: {
        repaymentDebtsCustomLoansName:true
      },

      loan_name_2: {
        repaymentDebtsCustomLoansName:true
      },

      loan_name_3: {
        repaymentDebtsCustomLoansName:true
      },

      loan_name_4: {
        repaymentDebtsCustomLoansName:true
      },

      loan_name_5: {
        repaymentDebtsCustomLoansName:true
      },

      loan_name_6: {
        repaymentDebtsCustomLoansName:true
      },

      loan_name_7: {
        repaymentDebtsCustomLoansName:true
      },

      loan_name_8: {
        repaymentDebtsCustomLoansName:true
      },

      loan_name_9: {
        repaymentDebtsCustomLoansName:true
      },

      repayment_amount: {
        repaymentCheckAmount:true
      },

      'first_repayment_date[date]':{
        date: true,
        pastcheck:true,
        npdrealdate:true,
        maxlength:12
      },

    //////////////////
    /// validation rules for UK reset-password

      email_pass: {
        required: false,
        notSpamEmail: true,
        trueEmail: true
      },
      captcha_response: {
        required:false
      },
      question_text0: {
        required:true,
        textd:true,
        maxlength:30,
        minlength:1
      },
      question_text1: {
        required:true,
        textd:true,
        maxlength:30,
        minlength:1
      },

      "start_card_date0[month]":{
        start_date_check0:true,
        required:true
      },
      "start_card_date0[year]":{
        start_date_check0:true,
        required:true
      },
      "start_card_date1[month]":{
        required:true
      },
      "start_card_date1[year]":{
        required:true
      },
      start_card_date0: {
        required:true
      },
      question_number0: {
        required:false
      },
      question_number1: {
        required:false
      },
      four_digits0: {
        number:true,
        required:true,
        maxlength:4,
        minlength:4
      },
      four_digits1: {
        number:true,
        required:true,
        maxlength:4,
        minlength:4
      },
      bank_account_number0:{
        BANumberUK:true,
        maxlength:8,
        number:true
      },
      bank_account_number1:{
        BANumberUK:true,
        maxlength:8,
        number:true
      },
    // end UK validation rules reset-password

    // Data verification and security questions fields
      "getlastloandateverification[month]": {
        require_from_group:[2, '#edit-getlastloandateverification-wrapper .form-input .form-element-type-date_select'],
        required:true,
        futurecheck:true
      },
      "getlastloandateverification[year]": {
        require_from_group:[2, '#edit-getlastloandateverification-wrapper .form-input .form-element-type-date_select'],
        required:true,
        futurecheck:true
      },

      "getbirthdateverification[part1]": {
        require_from_group:[2, '#edit-getbirthdateverification-wrapper input.form-text'],
        BirthDateDigits:true,
        required:true
      },
      "getbirthdateverification[part2]": {
        require_from_group:[2, '#edit-getbirthdateverification-wrapper input.form-text'],
        BirthDateDigits:true,
        required:true
      },

      getmaskedcardnumberverification: {
        required:true,
        number:true,
        maxlength:4,
        minlength:4
      },

      getdependentsverification: {
        required:true,
        number:true
      },

      getmiddlenameverification: {
        required:true
      },

      security_question_1: {
        required:true,
        minlength:2
      },

      security_question_2: {
        required:true,
        minlength:2
      },
      business_type: {
        checkBizTypes: true
      },
      business_bank_account_debit_card: {
        checkBizDebitCard: true
      },
      select_email: {
        required:true
      }
    // end validation rules

    },

  /////////////////////////
  // Custom error messages
  messages:{

      /////////////////////////////
      // UK validation messages reset-password
      question_text0: {
        required: Drupal.t('Please enter your answer')
      },
      question_text1: {
        required: Drupal.t('Please enter your answer')
      },
      four_digits0: {
        required: Drupal.t('Please enter the last 4 digits of your debit card number'),
        number: Drupal.t('Please enter the last 4 digits of your debit card number'),
        maxlength: Drupal.t('Please enter the last 4 digits of your debit card number'),
        minlength: Drupal.t('Please enter the last 4 digits of your debit card number')
      },
      four_digits1: {
        required: Drupal.t('Please enter the last 4 digits of your debit card number'),
        number: Drupal.t('Please enter the last 4 digits of your debit card number'),
        maxlength: Drupal.t('Please enter the last 4 digits of your debit card number'),
        minlength: Drupal.t('Please enter the last 4 digits of your debit card number')
      },
      bank_account_number0: {
        BANumberUK: Drupal.t('Please enter a valid  bank account number'),
        maxlength: Drupal.t('Please enter a valid  bank account number'),
        number: Drupal.t('Please enter a valid  bank account number'),
        required: Drupal.t('Please enter a valid  bank account number')
      },
      bank_account_number1: {
        BANumberUK: Drupal.t('Please enter a valid  bank account number'),
        maxlength: Drupal.t('Please enter a valid  bank account number'),
        number: Drupal.t('Please enter a valid  bank account number'),
        required: Drupal.t('Please enter a valid  bank account number')
      },
      start_card_date0: {
        required:'Please select a month and year'
      },
      'start_card_date0[month]':{
        required:'Please select a month and year'
      },
      'start_card_date0[year]':{
        required:'Please select a month and year'
      },
      start_card_date1: {
        required:'Please select a month and year'
      },
      'start_card_date1[month]':{
        required:'Please select a month and year'
      },
      'start_card_date1[year]':{
        required:'Please select a month and year'
      },
      // end  UK validation messages reset-password

      title:{
        required:Drupal.t("Please select your title")
      },
      title_name:{
        required:Drupal.t("Please select your title")
      },
      first_name:{
        required: Drupal.t("Please enter your first name"),
        minlength:$.validator.format("You need to use at least {0} characters for your first name."),
        accept:'You can not have numbers in your first name'
      },
      last_name:{
        required:Drupal.t('Please enter your last name'),
        minlength:$.validator.format("You need to use at least {0} characters for your last name."),
        accept:'You can not have numbers in your last name'
      },
      'full_name[title_name]':{
        required:Drupal.t("Please select your title")
      },
      'full_name[first_name]':{
        required: Drupal.t("Please enter your first name"),
        minlength:$.validator.format("You need to use at least {0} characters for your first name."),
        accept:'You can not have numbers in your first name'
      },
      'full_name[last_name]':{
        required:Drupal.t('Please enter your last name'),
        minlength:$.validator.format("You need to use at least {0} characters for your last name."),
        accept:'You can not have numbers in your last name'
      },
      vehicle_registration:{
        required:"Please enter your vehicle registration"
      },
      dob:{
        required:'Please select your date of birth'
      },
      'date_of_birth[day]':{
        required:'Please select your date of birth'
      },
      'date_of_birth[month]':{
        required:'Please select your date of birth'
      },
      'date_of_birth[year]':{
        required:'Please select your date of birth'
      },
      home_status:{
        required:'Please select your home status'
      },
      marital_status:{
        required: Drupal.t('Please select your marital status')
      },
      dependants:{
        required: Drupal.t('Please select your number of dependants')
      },
      car_ownership:{
        required:'Please select car ownership'
      },
      vehicle_owner:{
        required:'Please confirm whether you have a car'
      },
      upcoming_changes: {
        required:'Please select whether you are aware of any change in your ' +
          'financial situation over the next 6 months that could make it ' +
          'more difficult to make repayments.'
      },
      postcode_lookup_uk:{
        PostalCodeUK:'Sorry we don\'t recognise that postcode. Please' +
          ' check and try again'
      },

      //conditional elements - employment status
      employment_status:{
        required: Drupal.t('Please select your employment status')
      },
      monthly_income:{
        required:'Please enter your monthly income',
        number:'Please only input numbers in to this field',
        minlength: Drupal.t('Please ensure this is your actual income, as we need it to process your application')
      },
      employer_name:{
        required:'Please enter your employer name'
      },
      employer_industry:{
        required:'Please select your employer industry'
      },
      employment_position:{
        required:'Please select your employment position'
      },
      employment_time_years:{
        required:'Please select the number of years'
      },
      employment_time_months:{
        required:'Please select the number of months'
      },
      work_phone:{
        required:'Please enter your work phone number'
      },
      income_frequency:{
        required:'Please enter the frequency of your income'
      },
      'next_payday[day]':{
        required: Drupal.t('Please enter all 3 fields')
      },
      'next_payday[month]':{
        required: Drupal.t('Please enter all 3 fields')
      },
      'next_payday[year]':{
        required: Drupal.t('Please enter all 3 fields')
      },
      'next_payday':{
        required: Drupal.t('Please enter the date of your next payday')
      },

      'next_income_due[day]':{
        required: Drupal.t('Please enter all 3 fields')
      },
      'next_income_due[month]':{
        required: Drupal.t('Please enter all 3 fields')
      },
      'next_income_due[year]':{
        required: Drupal.t('Please enter all 3 fields')
      },
      'next_payday_ca[date]':{
        required: 'Please enter your next pay day'
      },
      'next_income_due[date]':{
        required: Drupal.t('Please enter the date of your next income')
      },
      'next_income_due':{
        required: Drupal.t('Please enter the date of your next income')
      },
      salary_to_bank:{
        required: Drupal.t('Please select if your if salary is paid to bank')
      },
      industry_other:{
        required: Drupal.t('Please tell us your industry if it\'s not listed')
      },
      household_income:{
        required: Drupal.t('Please enter your household income'),
        minlength: Drupal.t('Please ensure this is your actual income, as we need it to process your application')
      },
      /////////////////////////////////////////////
      //// University
      university:{
        required:'Please enter your university'
      },
      university_time_months:{
        required:'Please select the number of months at university'
      },
      university_time_years:{
        required:'Please select the number of years at university'
      },
      ///////////////////////////////////////////
      //// Armed Forces
      division:{
        required:'Please enter your division'
      },
      service_time_years:{
        required:'Please select the number of years in service'
      },
      service_time_months:{
        required:'Please select the number of month in service'
      },
      /////////////////////////
      // Other personal information
      home_phone:{
        //  required:'Please enter your UK home phone number'
      },
      bill_holder_surname:{
        required:'Please enter the surname of the bill holder'
      },
      mobile_phone:{
        required:'Please enter mobile number in the following format 07712345678.'
      },
      new_mobile_number:{
        required:'Please enter mobile number in the following format 07712345678.'
      },
      email:{
        required:Drupal.t('Please enter a valid email address')
      },
      email_confirm:{
        required:Drupal.t('Please enter a valid email address'),
        fieldEqual:Drupal.t('The email addresses do not match.')
      },
      update_option:{
        required:'Please select an option'
      },
      privacy:{
        required: Drupal.t('Please accept the privacy statement')
      },
      repay_reminder:{
        required: Drupal.t('Please tick the box to confirm you\'ve' +
          ' considered how you\'ll repay your loan.<br/>If you haven\'t' +
          ' identified a means of repayment, please think carefully' +
          ' before applying.')
      },
      captcha_response:{
        required:'Please enter the characters shown in the image'
      },
      /////////////////////////
      // Address fields
      select_address_1:{
        required:'Please choose an address'
      },
      postcode_finder_1:{
        required:'Please enter a valid UK postcode'
      },
      postcode_finder_2:{
        required:'Please enter a valid UK postcode'
      },
      select_address_2:{
        required:'Please choose an address'
      },
      postcode_1:{
        required:'Please enter a valid UK postcode'
      },
      select_address_plt:{
        required:'Select your address from the drop down'
      },
      previous_select_address_plt:{
        required:'Select your address from the drop down'
      },
      time_at_address:{
        required:'Please select time that you lived at this address'
      },
      /////////////////////////
      // Password / user
      password:{
        required:Drupal.t('Please enter a password')
      },
      password_confirm:{
        required:Drupal.t('Passwords must match.'),
        equalTo:Drupal.t('Passwords must match.')
      },
      secret_question:{
        required:'Please enter your secret question'
      },
      secret_answer:{
        required:'Please enter your secret answer'
      },
      pin:{
        required:Drupal.t('Please enter your 4 digit PIN exactly as it is in the SMS sent to your mobile'),
        minlength:Drupal.t('Please enter 4 characters')
      },
      select_email:{
        required:Drupal.t('Please select which email to use from now on')
      },

      /////////////////////////
      // Bank Details
      bank_name:{
        required:'Please choose your bank'
      },
      sort_code:{
        required:'Please enter your sort code'
      },
      account_number:{
        required:'Please enter your account number'
      },
      bank_period:{
        required:'Please choose an option'
      },

      //////////////////////
      // Card page elements
      "card_start_date[month]":{
        required:'Please choose your card start date'
      },
      "card_start_date[year]":{
        required:'Please choose your card start date'
      },
      "card_expiry_date[month]":{
        required: Drupal.t('Please choose your card expiry date'),
        require_from_group: Drupal.t('Please choose your card expiry date')
      },
      "card_expiry_date[year]":{
        required: Drupal.t('Please choose your card expiry date'),
        require_from_group: Drupal.t('Please choose your card expiry date')
      },
      "card_expiry_date":{
        required: Drupal.t('Please choose your card expiry date')
      },
      card_name:{
        required: Drupal.t('Please enter the name on your card'),
        AlphaDot: 'Please enter a valid name without numbers or special characters'
      },
      card_type:{
        required: Drupal.t('Please choose your card type')
      },
      card_number:{
        required: Drupal.t('Please enter your card number')
      },
      card_security:{
        required: Drupal.t('Please enter your card security number'),
        minlength: Drupal.t('Please enter {0} characters')
      },
      security_code:{
        required: Drupal.t('Please enter your card security number'),
        minlength: Drupal.t('Please enter {0} characters')
      },
      card_issue:{
        minlength:'Please enter 2 characters'
      },

      // repayment
      postcode:{
        required: Drupal.t('Please enter a valid UK postcode')
      },

      // Data verification and security questions fields
      "getlastloandateverification[month]": {
        required: Drupal.t('Please select the date of your last loan'),
        require_from_group: Drupal.t('Please enter a month and a year')
        //past_date_check: Drupal.t('Please select a date in the past')
      },
      "getlastloandateverification[year]": {
        required: Drupal.t('Please select the year of your last loan'),
        require_from_group: Drupal.t('Please enter a month and a year')
      },

      getmaskedcardnumberverification: {
        required: Drupal.t('Please enter the last 4 digits of your debit card number'),
        maxlength: Drupal.t('Please enter the last 4 digits of your debit card number'),
        minlength: Drupal.t('Please enter the last 4 digits of your debit card number'),
        number: Drupal.t('Please enter the last 4 digits of your debit card number')
      },

      "getbirthdateverification[part1]": {
        required: Drupal.t('Please enter both digits'),
        require_from_group: Drupal.t('Please enter both digits')
      },
      "getbirthdateverification[part2]": {
        required: Drupal.t('Please enter both digits'),
        require_from_group: Drupal.t('Please enter both digits')
      },

      getdependentsverification: {
        required: Drupal.t('Please enter your number of dependents'),
        number: Drupal.t('Please enter a number')
      },

      getmiddlenameverification: {
        required: Drupal.t('Please enter your middle name')
      },

      security_question_1: {
        required: Drupal.t('Please enter your answer')
      },

      security_question_2: {
        required: Drupal.t('Please enter your answer')
      },
      confirm_repay:{
        required: Drupal.t("Please tick the box to confirm you've" +
          " considered how you'll repay your loan. If you haven't" +
          " identified a means of repayment, please think carefully" +
          " before applying.")
      }
    }////end messages
  };

  /**
   * Add benefits received checkboxes to a group in the validate params.
   *
   * @param {Object} DOM Element, Document, or jQuery to use as context
   */
  Drupal.behaviors.wongaAddBenefitsGroup = function(context) {
    // Get all the benefits checkboxes
    var benefits_recieved_checkboxes = $('input.benefits_received');
    if (benefits_recieved_checkboxes.length > 0) {
      // We have some checkboxes
      // Get a string with all the input names
      var benefits_recieved_checkbox_names =
      $.map(benefits_recieved_checkboxes, function(element, counter) {
        return $(element).attr("name");
      }).join(" ");

      validate_params.groups.benefits_received =
        benefits_recieved_checkbox_names;
    }
  };

  /**
   * Add jQuery validation to forms.
   *
   * @param {Object} context DOM Element, Document, or jQuery to use as context
   */
  Drupal.behaviors.wongaValidateAllForms = function(context) {
    $('form', context).each(function () {
      $(this).addClass('jquery-validate').validate(validate_params);
    });
  };

})(jQuery, Drupal);
;
/**
 * @license 
 * jQuery Tools 1.2.5 Tooltip - UI essentials
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/tooltip/
 *
 * Since: November 2008
 * Date:    Wed Sep 22 06:02:10 2010 +0000 
 */
(function($) { 	
	// static constructs
	$.tools = $.tools || {version: '1.2.5'};
	
	$.tools.tooltip = {
		
		conf: { 
			
			// default effect variables
			effect: 'toggle',			
			fadeOutSpeed: "fast",
			predelay: 0,
			delay: 30,
			opacity: 1,			
			tip: 0,
			
			// 'top', 'bottom', 'right', 'left', 'center'
			position: ['top', 'left'], 
			offset: [0, 0],
			relative: false,
			cancelDefault: true,
			
			// type to event mapping 
			events: {
				def: 			"mouseenter,mouseleave",
				input: 		"focus,blur",
				widget:		"focus mouseenter,blur mouseleave",
				tooltip:		"mouseenter,mouseleave"
			},
			
			// 1.2
			layout: '<div/>',
			tipClass: 'tooltip',
			tipInner: ''

		},
		
		addEffect: function(name, loadFn, hideFn) {
			effects[name] = [loadFn, hideFn];	
		} 
	};
	
	
	var effects = { 
		toggle: [ 
			function(done) { 
				var conf = this.getConf(), tip = this.getTip(), o = conf.opacity;
				if (o < 1) { tip.css({opacity: o}); }
				tip.show();
				done.call();
			},
			
			function(done) { 
				this.getTip().hide();
				done.call();
			} 
		],
		
		fade: [
			function(done) { 
				var conf = this.getConf();
				this.getTip().fadeTo(conf.fadeInSpeed, conf.opacity, done); 
			},  
			function(done) { 
				this.getTip().fadeOut(this.getConf().fadeOutSpeed, done); 
			} 
		]		
	};   

		
	/* calculate tip position relative to the trigger */  	
	function getPosition(trigger, tip, conf) {	

		
		// get origin top/left position 
		var top = conf.relative ? trigger.position().top : trigger.offset().top, 
			 left = conf.relative ? trigger.position().left : trigger.offset().left,
			 pos = conf.position[0];

		top  -= tip.outerHeight() - conf.offset[0];
		left += trigger.outerWidth() + conf.offset[1];
		
		// iPad position fix
		if (/iPad/i.test(navigator.userAgent)) {
			top -= $(window).scrollTop();
		}
		
		// adjust Y		
		var height = tip.outerHeight() + trigger.outerHeight();
		if (pos == 'center') 	{ top += height / 2; }
		if (pos == 'bottom') 	{ top += height; }
		
		
		// adjust X
		pos = conf.position[1]; 	
		var width = tip.outerWidth() + trigger.outerWidth();
		if (pos == 'center') 	{ left -= width / 2; }
		if (pos == 'left')   	{ left -= width; }	 
		
		return {top: top, left: left};
	}		

	
	
	function Tooltip(trigger, conf) {

		var self = this, 
			 fire = trigger.add(self),
			 tip,
			 timer = 0,
			 pretimer = 0, 
			 title = trigger.attr("title"),
			 tipAttr = trigger.attr("data-tooltip"),
			 effect = effects[conf.effect],
			 shown,
				 
			 // get show/hide configuration
			 isInput = trigger.is(":input"), 
			 isWidget = isInput && trigger.is(":checkbox, :radio, select, :button, :submit"),			
			 type = trigger.attr("type"),
			 evt = conf.events[type] || conf.events[isInput ? (isWidget ? 'widget' : 'input') : 'def']; 
		
		
		// check that configuration is sane
		if (!effect) { throw "Nonexistent effect \"" + conf.effect + "\""; }					
		
		evt = evt.split(/,\s*/); 
		if (evt.length != 2) { throw "Tooltip: bad events configuration for " + type; } 
		
		
		// trigger --> show  
		trigger.bind(evt[0], function(e) {

			clearTimeout(timer);
			if (conf.predelay) {
				pretimer = setTimeout(function() { self.show(e); }, conf.predelay);	
				
			} else {
				self.show(e);	
			}
			
		// trigger --> hide
		}).bind(evt[1], function(e)  {
			clearTimeout(pretimer);
			if (conf.delay)  {
				timer = setTimeout(function() { self.hide(e); }, conf.delay);	
				
			} else {
				self.hide(e);		
			}
			
		}); 
		
		
		// remove default title
		if (title && conf.cancelDefault) { 
			trigger.removeAttr("title");
			trigger.data("title", title);			
		}		
		
		$.extend(self, {
				
			show: function(e) {  

				// tip not initialized yet
				if (!tip) {
					
					// data-tooltip 
					if (tipAttr) {
						tip = $(tipAttr);

					// single tip element for all
					} else if (conf.tip) { 
						tip = $(conf.tip).eq(0);
						
					// autogenerated tooltip
					} else if (title) { 
	tip = $(conf.layout).addClass(conf.tipClass).appendTo(document.body).hide();
	
	if(conf.tipInner) {
		tip.find('.' + conf.tipInner).html(title);
	} else {
		tip.append(title);
	}


					// manual tooltip
					} else {	
						tip = trigger.next();  
						if (!tip.length) { tip = trigger.parent().next(); } 	 
					}
					
					if (!tip.length) { throw "Cannot find tooltip for " + trigger;	}
				} 
			 	
			 	if (self.isShown()) { return self; }  
				
			 	// stop previous animation
			 	tip.stop(true, true); 			 	
			 	
				// get position
				var pos = getPosition(trigger, tip, conf);			
		
				// restore title for single tooltip element
				if (conf.tip) {
					tip.html(trigger.data("title"));
				}

				// onBeforeShow
				e = $.Event();
				e.type = "onBeforeShow";
				fire.trigger(e, [pos]);				
				if (e.isDefaultPrevented()) { return self; }
		
				
				// onBeforeShow may have altered the configuration
				pos = getPosition(trigger, tip, conf);
				
				// set position
				tip.css({position:'absolute', top: pos.top, left: pos.left});					
				
				shown = true;
				
				// invoke effect 
				effect[0].call(self, function() {
					e.type = "onShow";
					shown = 'full';
					fire.trigger(e);		 
				});					

	 	
				// tooltip events       
				var event = conf.events.tooltip.split(/,\s*/);

				if (!tip.data("__set")) {
					
					tip.bind(event[0], function() { 
						clearTimeout(timer);
						clearTimeout(pretimer);
					});
					
					if (event[1] && !trigger.is("input:not(:checkbox, :radio), textarea")) { 					
						tip.bind(event[1], function(e) {
	
							// being moved to the trigger element
							if (e.relatedTarget != trigger[0]) {
								trigger.trigger(evt[1].split(" ")[0]);
							}
						}); 
					} 
					
					tip.data("__set", true);
				}
				
				return self;
			},
			
			hide: function(e) {

				if (!tip || !self.isShown()) { return self; }
			
				// onBeforeHide
				e = $.Event();
				e.type = "onBeforeHide";
				fire.trigger(e);				
				if (e.isDefaultPrevented()) { return; }
	
				shown = false;
				
				effects[conf.effect][1].call(self, function() {
					e.type = "onHide";
					fire.trigger(e);		 
				});
				
				return self;
			},
			
			isShown: function(fully) {
				return fully ? shown == 'full' : shown;	
			},
				
			getConf: function() {
				return conf;	
			},
				
			getTip: function() {
				return tip;	
			},
			
			getTrigger: function() {
				return trigger;	
			}		

		});		

		// callbacks	
		$.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","), function(i, name) {
				
			// configuration
			if ($.isFunction(conf[name])) { 
				$(self).bind(name, conf[name]); 
			}

			// API
			self[name] = function(fn) {
				if (fn) { $(self).bind(name, fn); }
				return self;
			};
		});
		
	}
		
	
	// jQuery plugin implementation
	$.fn.tooltip = function(conf) {
		
		// return existing instance
		var api = this.data("tooltip");
		if (api) { return api; }

		conf = $.extend(true, {}, $.tools.tooltip.conf, conf);
		
		// position can also be given as string
		if (typeof conf.position == 'string') {
			conf.position = conf.position.split(/,?\s/);	
		}
		
		// install tooltip for each entry in jQuery object
		this.each(function() {
			api = new Tooltip($(this), conf); 
			$(this).data("tooltip", api); 
		});
		
		return conf.api ? api: this;		 
	};
		
}) (jQuery);

		

;
/**
 * @license 
 * jQuery Tools 1.2.5 Scrollable - New wave UI design
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/scrollable.html
 *
 * Since: March 2008
 * Date:    Wed Sep 22 06:02:10 2010 +0000 
 */
(function($) { 

	// static constructs
	$.tools = $.tools || {version: '1.2.5'};
	
	$.tools.scrollable = {
		
		conf: {	
			activeClass: 'active',
			circular: false,
			clonedClass: 'cloned',
			disabledClass: 'disabled',
			easing: 'swing',
			initialIndex: 0,
			item: null,
			items: '.items',
			keyboard: true,
			mousewheel: true,
			next: '.next',   
			prev: '.prev', 
			speed: 400,
			vertical: false,
			touch: true,
			wheelSpeed: 0
		} 
	};
					
	// get hidden element's width or height even though it's hidden
	function dim(el, key) {
		var v = parseInt(el.css(key), 10);
		if (v) { return v; }
		var s = el[0].currentStyle; 
		return s && s.width && parseInt(s.width, 10);	
	}

	function find(root, query) { 
		var el = $(query);
		return el.length < 2 ? el : root.parent().find(query);
	}
	
	var current;		
	
	// constructor
	function Scrollable(root, conf) {   
		
		// current instance
		var self = this, 
			 fire = root.add(self),
			 itemWrap = root.children(),
			 index = 0,
			 vertical = conf.vertical;
				
		if (!current) { current = self; } 
		if (itemWrap.length > 1) { itemWrap = $(conf.items, root); }
		
		// methods
		$.extend(self, {
				
			getConf: function() {
				return conf;	
			},			
			
			getIndex: function() {
				return index;	
			}, 

			getSize: function() {
				return self.getItems().size();	
			},

			getNaviButtons: function() {
				return prev.add(next);	
			},
			
			getRoot: function() {
				return root;	
			},
			
			getItemWrap: function() {
				return itemWrap;	
			},
			
			getItems: function() {
				return itemWrap.children(conf.item).not("." + conf.clonedClass);	
			},
							
			move: function(offset, time) {
				return self.seekTo(index + offset, time);
			},
			
			next: function(time) {
				return self.move(1, time);	
			},
			
			prev: function(time) {
				return self.move(-1, time);	
			},
			
			begin: function(time) {
				return self.seekTo(0, time);	
			},
			
			end: function(time) {
				return self.seekTo(self.getSize() -1, time);	
			},	
			
			focus: function() {
				current = self;
				return self;
			},
			
			addItem: function(item) {
				item = $(item);
				
				if (!conf.circular)  {
					itemWrap.append(item);
				} else {
					itemWrap.children("." + conf.clonedClass + ":last").before(item);
					itemWrap.children("." + conf.clonedClass + ":first").replaceWith(item.clone().addClass(conf.clonedClass)); 						
				}
				
				fire.trigger("onAddItem", [item]);
				return self;
			},
			
			
			/* all seeking functions depend on this */		
			seekTo: function(i, time, fn) {	
				
				// ensure numeric index
				if (!i.jquery) { i *= 1; }
				
				// avoid seeking from end clone to the beginning
				if (conf.circular && i === 0 && index == -1 && time !== 0) { return self; }
				
				// check that index is sane				
				if (!conf.circular && i < 0 || i > self.getSize() || i < -1) { return self; }
				
				var item = i;
			
				if (i.jquery) {
					i = self.getItems().index(i);	
					
				} else {
					item = self.getItems().eq(i);
				}  
				
				// onBeforeSeek
				var e = $.Event("onBeforeSeek"); 
				if (!fn) {
					fire.trigger(e, [i, time]);				
					if (e.isDefaultPrevented() || !item.length) { return self; }			
				}  
	
				var props = vertical ? {top: -item.position().top} : {left: -item.position().left};  
				
				index = i;
				current = self;  
				if (time === undefined) { time = conf.speed; }   
				
				itemWrap.animate(props, time, conf.easing, fn || function() { 
					fire.trigger("onSeek", [i]);		
				});	 
				
				return self; 
			}					
			
		});
				
		// callbacks	
		$.each(['onBeforeSeek', 'onSeek', 'onAddItem'], function(i, name) {
				
			// configuration
			if ($.isFunction(conf[name])) { 
				$(self).bind(name, conf[name]); 
			}
			
			self[name] = function(fn) {
				if (fn) { $(self).bind(name, fn); }
				return self;
			};
		});  
		
		// circular loop
		if (conf.circular) {
			
			var cloned1 = self.getItems().slice(-1).clone().prependTo(itemWrap),
				 cloned2 = self.getItems().eq(1).clone().appendTo(itemWrap);
				
			cloned1.add(cloned2).addClass(conf.clonedClass);
			
			self.onBeforeSeek(function(e, i, time) {

				
				if (e.isDefaultPrevented()) { return; }
				
				/*
					1. animate to the clone without event triggering
					2. seek to correct position with 0 speed
				*/
				if (i == -1) {
					self.seekTo(cloned1, time, function()  {
						self.end(0);		
					});          
					return e.preventDefault();
					
				} else if (i == self.getSize()) {
					self.seekTo(cloned2, time, function()  {
						self.begin(0);		
					});	
				}
				
			});
			
			// seek over the cloned item
			self.seekTo(0, 0, function() {});
		}
		
		// next/prev buttons
		var prev = find(root, conf.prev).click(function() { self.prev(); }),
			 next = find(root, conf.next).click(function() { self.next(); });	
		
		if (!conf.circular && self.getSize() > 1) {
			
			self.onBeforeSeek(function(e, i) {
				setTimeout(function() {
					if (!e.isDefaultPrevented()) {
						prev.toggleClass(conf.disabledClass, i <= 0);
						next.toggleClass(conf.disabledClass, i >= self.getSize() -1);
					}
				}, 1);
			}); 
			
			if (!conf.initialIndex) {
				prev.addClass(conf.disabledClass);	
			}
		}
			
		// mousewheel support
		if (conf.mousewheel && $.fn.mousewheel) {
			root.mousewheel(function(e, delta)  {
				if (conf.mousewheel) {
					self.move(delta < 0 ? 1 : -1, conf.wheelSpeed || 50);
					return false;
				}
			});			
		}
		
		// touch event
		if (conf.touch) {
			var touch = {};
			
			itemWrap[0].ontouchstart = function(e) {
				var t = e.touches[0];
				touch.x = t.clientX;
				touch.y = t.clientY;
			};
			
			itemWrap[0].ontouchmove = function(e) {
				
				// only deal with one finger
				if (e.touches.length == 1 && !itemWrap.is(":animated")) {			
					var t = e.touches[0],
						 deltaX = touch.x - t.clientX,
						 deltaY = touch.y - t.clientY;
	
					self[vertical && deltaY > 0 || !vertical && deltaX > 0 ? 'next' : 'prev']();				
					e.preventDefault();
				}
			};
		}
		
		if (conf.keyboard)  {
			
			$(document).bind("keydown.scrollable", function(evt) {

				// skip certain conditions
				if (!conf.keyboard || evt.altKey || evt.ctrlKey || $(evt.target).is(":input")) { return; }
				
				// does this instance have focus?
				if (conf.keyboard != 'static' && current != self) { return; }
					
				var key = evt.keyCode;
			
				if (vertical && (key == 38 || key == 40)) {
					self.move(key == 38 ? -1 : 1);
					return evt.preventDefault();
				}
				
				if (!vertical && (key == 37 || key == 39)) {					
					self.move(key == 37 ? -1 : 1);
					return evt.preventDefault();
				}	  
				
			});  
		}
		
		// initial index
		if (conf.initialIndex) {
			self.seekTo(conf.initialIndex, 0, function() {});
		}
	} 

		
	// jQuery plugin implementation
	$.fn.scrollable = function(conf) { 
			
		// already constructed --> return API
		var el = this.data("scrollable");
		if (el) { return el; }		 

		conf = $.extend({}, $.tools.scrollable.conf, conf); 
		
		this.each(function() {			
			el = new Scrollable($(this), conf);
			$(this).data("scrollable", el);	
		});
		
		return conf.api ? el: this; 
		
	};
			
	
})(jQuery);
;
/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 *
 * tabs/tabs.js
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/
 *
 */
(function(a){a.tools=a.tools||{version:"v1.2.7"},a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialEffect:!1,initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){var c=this.getConf();this.getPanes().slideUp(c.slideUpSpeed),this.getPanes().eq(a).slideDown(c.slideDownSpeed,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c,d;a.tools.tabs.addEffect("horizontal",function(b,e){if(!c){var f=this.getPanes().eq(b),g=this.getCurrentPane();d||(d=this.getPanes().eq(0).width()),c=!0,f.show(),g.animate({width:0},{step:function(a){f.css("width",d-a)},complete:function(){a(this).hide(),e.call(),c=!1}}),g.length||(e.call(),c=!1)}});function e(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(d,i){var k=h.eq(d),l=!c.data("tabs");typeof d=="string"&&d.replace("#","")&&(k=h.filter("[href*=\""+d.replace("#","")+"\"]"),d=Math.max(h.index(k),0));if(e.rotate){var m=h.length-1;if(d<0)return f.click(m,i);if(d>m)return f.click(0,i)}if(!k.length){if(j>=0)return f;d=e.initialIndex,k=h.eq(d)}if(d===j)return f;i=i||a.Event(),i.type="onBeforeClick",g.trigger(i,[d]);if(!i.isDefaultPrevented()){var n=l?e.initialEffect&&e.effect||"default":e.effect;b[n].call(f,d,function(){j=d,i.type="onClick",g.trigger(i,[d])}),h.removeClass(e.current),k.addClass(e.current);return f}},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){h.off(e.event).removeClass(e.current),i.find("a[href^=\"#\"]").off("click.T");return f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).on(c,e[c]),f[c]=function(b){b&&a(f).on(c,b);return f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).on(e.event,function(a){f.click(b,a);return a.preventDefault()})}),i.find("a[href^=\"#\"]").on("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href=\""+location.hash+"\"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.fn.tabs=function(b,c){var d=this.data("tabs");d&&(d.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){d=new e(a(this),b,c),a(this).data("tabs",d)});return c.api?d:this}})(jQuery);
;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('h.i[\'1a\']=h.i[\'z\'];h.O(h.i,{y:\'D\',z:9(x,t,b,c,d){6 h.i[h.i.y](x,t,b,c,d)},17:9(x,t,b,c,d){6 c*(t/=d)*t+b},D:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},X:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},U:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},R:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},N:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},M:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},L:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},K:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},J:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},I:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},G:9(x,t,b,c,d){6-c*8.C(t/d*(8.g/2))+c+b},15:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},12:9(x,t,b,c,d){6-c/2*(8.C(8.g*t/d)-1)+b},Z:9(x,t,b,c,d){6(t==0)?b:c*8.j(2,10*(t/d-1))+b},Y:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.j(2,-10*t/d)+1)+b},W:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.j(2,10*(t-1))+b;6 c/2*(-8.j(2,-10*--t)+2)+b},V:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},S:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},Q:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},P:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},H:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.j(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},T:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.j(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},F:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},E:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},16:9(x,t,b,c,d,s){e(s==u)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.B))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.B))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.i.v(x,d-t,0,c,d)+b},v:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.14/2.k))*t+.11)+b}m{6 c*(7.q*(t-=(2.18/2.k))*t+.19)+b}},1b:9(x,t,b,c,d){e(t<d/2)6 h.i.A(x,t*2,0,c,d)*.5+b;6 h.i.v(x,t*2-d,0,c,d)*.5+c*.5+b}});',62,74,'||||||return||Math|function|||||if|var|PI|jQuery|easing|pow|75|70158|else|sin|sqrt||5625|asin|||undefined|easeOutBounce|abs||def|swing|easeInBounce|525|cos|easeOutQuad|easeOutBack|easeInBack|easeInSine|easeOutElastic|easeInOutQuint|easeOutQuint|easeInQuint|easeInOutQuart|easeOutQuart|easeInQuart|extend|easeInElastic|easeInOutCirc|easeInOutCubic|easeOutCirc|easeInOutElastic|easeOutCubic|easeInCirc|easeInOutExpo|easeInCubic|easeOutExpo|easeInExpo||9375|easeInOutSine|easeInOutQuad|25|easeOutSine|easeInOutBack|easeInQuad|625|984375|jswing|easeInOutBounce'.split('|'),0,{}))

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;

/**
 * Drupal behavior to initialise the wongaTabs tabs.
 *
 * Triggers a wongaCoreTabs.loaded event.
 *
 * @param {Object} context
 */
Drupal.behaviors.secciTabs = function (context) {
  if ($(".wongaTabs ul", context).length) {
    var tabs = $(".wongaTabs ul", context).tabs(".panes > div").data("tabs");
    $(document).trigger('wongaCoreTabs.loaded', [tabs, context]);
  }
};

/**
 * Drupal behavior to stop disabled links from performing their default action.
 *
 * @param {Object} context
 */
Drupal.behaviors.disabledLinks = function (context) {
  $('.inactive, .disabled-link').on('click', function(event) {
    // Stop default actions like scrolling
    event.preventDefault();
    return false;
  });
};

/**
 * Drupal behavior to set disabled property to elements with a disabled class,
 * when they are not currently disabled.
 *
 * @param {Object} context
 */
Drupal.behaviors.addDisabledAttribute = function (context) {
  $('.form-select.disabled:enabled').each(function() {
    $(this).prop("disabled", true);
  });
};

/**
 * Drupal behavior to clear the value of an input once on focus.
 *
 * @param {Object} context
 */
Drupal.behaviors.bindClearmeInputs = function (context) {
  $('.clearme').one("focus", function() {
    $(this).val("");
  });
};

/**
 * Adds display logic to the start-date and card-issue fields based on which
 * card type has been selected.
 */
Drupal.behaviors.cardConditionals = function() {
  if ($('#edit-card-type').length > 0 ) {
    $('#edit-card-type').change(function() {
      $('#edit-card-start-date-wrapper').hide();
      $('#edit-card-issue-wrapper').hide();
      var cardType = $(this).val();

      if (cardType === 'VisaDebit' ||
        cardType === 'MasterCardDebit' ||
        cardType === 'Maestro') {

        $('#edit-card-start-date-wrapper').show();
      }

      if (cardType === 'Maestro') {
        $('#edit-card-issue-wrapper').show();
      }
    });
  }
};

/**
 * Gets an object with options for creating fancybox options.
 *
 * @returns {Object}
 *   Fancy box options
 */
function fancybox_options() {
  function simple_ajax_links(){ //call a links reponse via ajax, no popup
    $('.aj').click( function() {
      var href = $(this).attr('href');

      //display the ajax loader
      $('.ajax-loader').remove();
      $(this).append('<div class="ajax-loader"></div>');

      if( $(this).next().attr('class') == 'ajax-msg' ) {
        $(this).next().fadeOut('slow'); //TODO: POTENCIAL ISSUE WITH JQUERY.UI/TOOLS SWITCHING OFF.
      }

      $.ajax({
        url: href,
        context: $(this),
        success: function(data) {
          if( $(this).next().attr('class') == 'ajax-msg' ) {
            $(this).next().html(data)
            $(this).next().fadeIn('slow'); //TODO: POTENCIAL ISSUE WITH JQUERY.UI/TOOLS SWITCHING OFF.
          } else {
            $(this).after('<p class="ajax-msg" style="display: none;">'+data+'</p>');
            $(this).next('.ajax-msg').fadeIn('slow'); //TODO: POTENCIAL ISSUE WITH JQUERY.UI/TOOLS SWITCHING OFF.
          }
          $('.ajax-loader').hide();
        }
      });

    return false;
    });
  }

  return {
    'titleShow'       : false,
    'autoScale'       : true,
    'autoDimensions'  : true,
    'margin'          : [110, 50, 50, 50],
    'scrolling'       : 'yes',
    'centerOnScroll'  : true,
    'onComplete'      : function() {
      Drupal.attachBehaviors($('#fancybox-wrap'));

      //TODO I've disabled the line below because we're now calling Drupal.attachBehaviors -
      //need to confirm that commenting this out doesn't break anything - DGS
      //Drupal.Ajax.init();
      //
      //TODO - this should be called by Drupal.attachBehaviors - there's probably a problem with the js here - DGS
      // Function initialzation in validator_config_rules_and_messages.js
      if (typeof(Drupal.behaviors.wongaValidateAllForms) === "function") {
        Drupal.behaviors.wongaValidateAllForms();
      }

      simple_ajax_links();
      $('.fancy-close').click( function() {
        $.fancybox.close();
      });
    },
    'onClosed'        : function() {
      //remove the ajax response marker
      $('.ajax-clicked').removeClass('ajax-clicked');
      $('.ajax-delete').removeClass('ajax-delete');
    }
  };
}
;
(function($, Drupal) {
  /**
   * A Drupal behaviour which adds hardware tracking functionality to the
   * current page.
   */
  Drupal.behaviors.wongaHardwareTracking = function(context) {

    $('body').not('.wonga-hardware-tracking-processed').
      addClass('wonga-hardware-tracking-processed').each(function() {
        var settings = Drupal.settings.wongaHardwareTracking;
        // Trigger the iovation manager to start
        Drupal.iovationManager.start(
          settings.externalJavaScriptURL,
          settings.trackingURL,
          settings.iovationTimeout
        );
      });
  };
})(jQuery, Drupal);
;
var Drupal = Drupal || {};

var io_bb_callback;

/**
 * iovationManager
 *
 * The iovationManager handles all of the processes required to complete the
 * iovation data gathering.
 *
 * @example
 * // Starts the iovation process.
 * yournamespacehere.iovationManager.start(iovationScriptSrc, trackingURL);
 */
(function(namespace) {

  namespace.iovationManager = (function () {
    var encodedBlackBoxData,
        iovationData,
        iovationTimer,
        // Settings are prepped in the start function
        settings = {};

    var _console = namespace.console ? namespace.console : null;

    function debug() {
      if (!_console) {
        return;
      }
      _console.debug(arguments);
    };

    debug('Iovation Manager ready to start');

    return {
      /**
       * Instruct the iovationManager to begin gathering data.
       *
       * @param {string} iovationScriptSrc
       * The source of the Iovation JavaScript file.
       *
       * @param {string} trackingURL
       * The relative path to post Iovation blackbox data once complete.
       *
       * @param {string} iovationTimeout
       * (optional) The maximum time to wait for Iovation to complete.
       */
      start: function (iovationScriptSrc, trackingURL, iovationTimeout) {
        debug('Iovation starting', arguments);
        settings.trackingURL = trackingURL;

        // Defaults to 60 seconds
        settings.iovationTimeout = iovationTimeout ? iovationTimeout : 60000;

        // Set the global io_bb_callback to be the method in this object.
        io_bb_callback = this.io_bb_callback;

        // Load in the iovation javascript file.

        var scriptElement = document.createElement('script');
        scriptElement.src = iovationScriptSrc;
        debug('Loading remote iovation script: start');
        document.body.appendChild(scriptElement);
        debug('Loading remote iovation script: end');

       /**
        * Iovation Timeout function
        *
        * Triggers the iovation_timeout_callback if Iovation does not completed
        * before the specified timeout settings.iovationTimeout.
        */
        iovationTimer = setTimeout(function() {
          debug('Iovation timed out');
          if (typeof iovation_timeout_callback !== 'undefined') {
            debug('Iovation timeout callback being called');
            iovation_timeout_callback();
            iovationData = '';
          }
        }, settings.iovationTimeout);
      },

      /**
       * Iovation black box data callback
       *
       * Iovations external javascript file will poll an "io_bb_callback"
       * function with the current black box data and a complete flag.
       *
       * @param {string} blackBoxData
       * The black box data gathered by Iovation.
       *
       * @param {boolean} complete
       * A status indicator to show if Iovation has completed.
       */
      io_bb_callback: function (blackBoxData, complete) {
        // Replace slashes with hyphens.
        encodedBlackBoxData = blackBoxData.replace(/\//g,'-');
        // Replace plusses with underscores.
        encodedBlackBoxData = encodedBlackBoxData.replace(/\+/g,'_');

        if (complete) {
          debug('Iovation complete');
          // Cancel the timeout if Iovation has completed.
          clearTimeout(iovationTimer);
          // Set the completed iovation data
          iovationData = encodedBlackBoxData;

          var trackingUrl = settings.trackingURL + '/' + iovationData;
          debug('Start iovation hardware tracking');
          $.get(trackingUrl, function() {
            debug('End iovation hardware tracking: success');
          }).always(function() {
            debug('Unblocking the page');
            $('body').trigger("wongaHardwareTrackingComplete");
          });
        }
      }
    };
  }());
})(Drupal);;
/*
 * editprofile.js
 * This code was moved (and edited) from wonga's core.js into the my-account
 * module and made more generic, all references to css were removed
 * (as they need to sit in the themes)
 *
 * What this code does: in the 'personal details' and 'payment details' section of 'my account',
 * when you hover on an editable section, the class of the section changes (to allow for some
 * css customization) and the "Edit [icon]" appears.
 */

$(document).ready( function () {

function editprofile() {


      $('.hover-bar.modal').click( function() {

        //so we know what to delete from page if removing content, and where was clicked
        $(this).addClass('ajax-delete');
        $(this).addClass('ajax-clicked');
        $('.ajax_update').remove();

        if( $('.hover-link',this).length > 0 ) {

        var options = fancybox_options();
        options['href'] = $('a.hover-link',this).attr('href');
        $.fancybox( options );

        }
      });

      $('.hover-bar.not-modal').click( function() {

        if( $('.hover-link',this).length > 0 ) {
          var options = fancybox_options();
          location.href = $('a.hover-link',this).attr('href');
        }

      });

      $('.hover-bar').hover(
          function() {
            if( $(this).find('.hover-link').length > 0 ) {
              $(this).addClass('hover');

              //quick fix to not show set primary when on credit card
              if( $('.card-type-visa-credit',this).length > 0 ) {
                      $('.hover-link-primary',this).css('visibility','hidden');
              }
            }
          },
          function() {
            if( $(this).find('.hover-link').length > 0 ) {
              $(this).removeClass('hover');
            }
          }
      );

    }

    editprofile();

    });

Drupal.behaviors.wonga_my_account_edit_profile = function(context) {
  $editLink = $('#wonga-update-postal-address-form a.edit-address', context);

  var ShowAddressContainer = function() {
    $('#fancybox-loading').hide();
    $('#postcode-container').parent().hide();
    $('#button-edit-submit-lookup').hide();
    $('#address-container').parent().slideDown();
    $('#button-edit-submit').show();
  };

  var enableAddressEdit = function() {
    $("input").removeAttr('readonly').removeClass('readonly');
    $('#edit-flat').parent().parent().show();
    $('#edit-house-name').parent().parent().show();
    $('#edit-house-number').parent().parent().show();
    $('#edit-postcode-uk').parent().parent().show();
    $('#edit-street').parent().parent().show();
    $('#edit-town').parent().parent().show();
  };

  // We only want these events bound if the modal is showing
  if ($('#wonga-update-postal-address-form').length > 0) {
    //click on the not listed options
    $(document).on('address-not-listed', function(e) {
      ShowAddressContainer();
      enableAddressEdit();
      $editLink.hide();
    });

    $editLink.click(function(e) {
      e.preventDefault();
      enableAddressEdit();
      $editLink.slideUp(200);
    });
  }
};
;
$(window).load(function() {
    scriptElement = document.createElement("script");
    scriptElement.src = Drupal.settings.wonga.wongaQubit.qubitTagUrl;
    document.body.appendChild(scriptElement);
});
;

Drupal.tableHeaderDoScroll = function() {
  if (typeof(Drupal.tableHeaderOnScroll)=='function') {
    Drupal.tableHeaderOnScroll();
  }
};

Drupal.behaviors.tableHeader = function (context) {
  // This breaks in anything less than IE 7. Prevent it from running.
  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7) {
    return;
  }

  // Keep track of all cloned table headers.
  var headers = [];

  $('table.sticky-enabled thead:not(.tableHeader-processed)', context).each(function () {
    // Clone thead so it inherits original jQuery properties.
    var headerClone = $(this).clone(true).insertBefore(this.parentNode).wrap('<table class="sticky-header"></table>').parent().css({
      position: 'fixed',
      top: '0px'
    });

    headerClone = $(headerClone)[0];
    headers.push(headerClone);

    // Store parent table.
    var table = $(this).parent('table')[0];
    headerClone.table = table;
    // Finish initialzing header positioning.
    tracker(headerClone);

    $(table).addClass('sticky-table');
    $(this).addClass('tableHeader-processed');
  });

  // Define the anchor holding var.
  var prevAnchor = '';

  // Track positioning and visibility.
  function tracker(e) {
    // Save positioning data.
    var viewHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    if (e.viewHeight != viewHeight) {
      e.viewHeight = viewHeight;
      e.vPosition = $(e.table).offset().top - 4;
      e.hPosition = $(e.table).offset().left;
      e.vLength = e.table.clientHeight - 100;
      // Resize header and its cell widths.
      var parentCell = $('th', e.table);
      $('th', e).each(function(index) {
        var cellWidth = parentCell.eq(index).css('width');
        // Exception for IE7.
        if (cellWidth == 'auto') {
          cellWidth = parentCell.get(index).clientWidth +'px';
        }
        $(this).css('width', cellWidth);
      });
      $(e).css('width', $(e.table).css('width'));
    }

    // Track horizontal positioning relative to the viewport and set visibility.
    var hScroll = document.documentElement.scrollLeft || document.body.scrollLeft;
    var vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - e.vPosition;
    var visState = (vOffset > 0 && vOffset < e.vLength) ? 'visible' : 'hidden';
    $(e).css({left: -hScroll + e.hPosition +'px', visibility: visState});

    // Check the previous anchor to see if we need to scroll to make room for the header.
    // Get the height of the header table and scroll up that amount.
    if (prevAnchor != location.hash) {
      if (location.hash != '') {
        var offset = $(document).find('td' + location.hash).offset();
        if (offset) {
          var top = offset.top;
          var scrollLocation = top - $(e).height();
          $('body, html').scrollTop(scrollLocation);
        }
      }
      prevAnchor = location.hash;
    }
  }

  // Only attach to scrollbars once, even if Drupal.attachBehaviors is called
  //  multiple times.
  if (!$('body').hasClass('tableHeader-processed')) {
    $('body').addClass('tableHeader-processed');
    $(window).scroll(Drupal.tableHeaderDoScroll);
    $(document.documentElement).scroll(Drupal.tableHeaderDoScroll);
  }

  // Track scrolling.
  Drupal.tableHeaderOnScroll = function() {
    $(headers).each(function () {
      tracker(this);
    });
  };

  // Track resizing.
  var time = null;
  var resize = function () {
    // Ensure minimum time between adjustments.
    if (time) {
      return;
    }
    time = setTimeout(function () {
      $('table.sticky-header').each(function () {
        // Force cell width calculation.
        this.viewHeight = 0;
        tracker(this);
      });
      // Reset timer
      time = null;
    }, 250);
  };
  $(window).resize(resize);
};
;

/*
 * jQuery Form Plugin
 * version: 2.25 (08-APR-2009)
 * @requires jQuery v1.2.2 or later
 * @note This has been modified for ajax.module
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(5($){$.B.1s=5(u){2(!4.G){R(\'1b: 2M 9 2N - 2O 2P 1t\');6 4}2(S u==\'5\')u={T:u};3 v=4.14(\'1c\')||1d.2Q.2R;v=(v.2S(/^([^#]+)/)||[])[1];v=v||\'\';u=$.1n({1e:v,H:4.14(\'1u\')||\'1Q\'},u||{});3 w={};4.L(\'C-1R-1S\',[4,u,w]);2(w.1T){R(\'1b: 9 1U 1o C-1R-1S L\');6 4}2(u.1v&&u.1v(4,u)===I){R(\'1b: 9 1f 1o 1v 1V\');6 4}3 a=4.1w(u.2T);2(u.J){u.O=u.J;K(3 n 1x u.J){2(u.J[n]2U 15){K(3 k 1x u.J[n])a.D({7:n,8:u.J[n][k]})}E a.D({7:n,8:u.J[n]})}}2(u.1y&&u.1y(a,4,u)===I){R(\'1b: 9 1f 1o 1y 1V\');6 4}4.L(\'C-9-1W\',[a,4,u,w]);2(w.1T){R(\'1b: 9 1U 1o C-9-1W L\');6 4}3 q=$.1z(a);2(u.H.2V()==\'1Q\'){u.1e+=(u.1e.2W(\'?\')>=0?\'&\':\'?\')+q;u.J=F}E u.J=q;3 x=4,V=[];2(u.2X)V.D(5(){x.1X()});2(u.2Y)V.D(5(){x.1Y()});2(!u.16&&u.17){3 y=u.T||5(){};V.D(5(a){$(u.17).2Z(a).P(y,1Z)})}E 2(u.T)V.D(u.T);u.T=5(a,b){K(3 i=0,M=V.G;i<M;i++)V[i].30(u,[a,b,x])};3 z=$(\'W:31\',4).18();3 A=I;K(3 j=0;j<z.G;j++)2(z[j])A=Q;2(u.20||A){2(u.21)$.32(u.21,1A);E 1A()}E $.33(u);4.L(\'C-9-34\',[4,u]);6 4;5 1A(){3 h=x[0];2($(\':W[7=9]\',h).G){35(\'36: 37 22 38 39 3a 3b "9".\');6}3 i=$.1n({},$.23,u);3 s=$.1n(Q,{},$.1n(Q,{},$.23),i);3 j=\'3c\'+(1B 3d().3e());3 k=$(\'<20 3f="\'+j+\'" 7="\'+j+\'" 24="25:26" />\');3 l=k[0];k.3g({3h:\'3i\',27:\'-28\',29:\'-28\'});3 m={1f:0,19:F,1g:F,3j:0,3k:\'n/a\',3l:5(){},2a:5(){},3m:5(){},3n:5(){4.1f=1;k.14(\'24\',\'25:26\')}};3 g=i.2b;2(g&&!$.1C++)$.1h.L("3o");2(g)$.1h.L("3p",[m,i]);2(s.2c&&s.2c(m,s)===I){s.2b&&$.1C--;6}2(m.1f)6;3 o=0;3 p=0;3 q=h.U;2(q){3 n=q.7;2(n&&!q.1i){u.O=u.O||{};u.O[n]=q.8;2(q.H=="X"){u.O[7+\'.x\']=h.Y;u.O[7+\'.y\']=h.Z}}}1j(5(){3 t=x.14(\'17\'),a=x.14(\'1c\');h.1k(\'17\',j);2(h.2d(\'1u\')!=\'2e\')h.1k(\'1u\',\'2e\');2(h.2d(\'1c\')!=i.1e)h.1k(\'1c\',i.1e);2(!u.3q){x.14({3r:\'2f/C-J\',3s:\'2f/C-J\'})}2(i.1D)1j(5(){p=Q;11()},i.1D);3 b=[];2g{2(u.O)K(3 n 1x u.O)b.D($(\'<W H="3t" 7="\'+n+\'" 8="\'+u.O[n]+\'" />\').2h(h)[0]);k.2h(\'1l\');l.2i?l.2i(\'2j\',11):l.3u(\'2k\',11,I);h.9()}3v{h.1k(\'1c\',a);t?h.1k(\'17\',t):x.3w(\'17\');$(b).2l()}},10);3 r=0;5 11(){2(o++)6;l.2m?l.2m(\'2j\',11):l.3x(\'2k\',11,I);3 c=Q;2g{2(p)3y\'1D\';3 d,N;N=l.2n?l.2n.2o:l.2p?l.2p:l.2o;2((N.1l==F||N.1l.2q==\'\')&&!r){r=1;o--;1j(11,2r);6}m.19=N.1l?N.1l.2q:F;m.1g=N.2s?N.2s:N;m.2a=5(a){3 b={\'3z-H\':i.16};6 b[a]};2(i.16==\'3A\'||i.16==\'3B\'){3 f=N.1E(\'1F\')[0];m.19=f?f.8:m.19}E 2(i.16==\'2t\'&&!m.1g&&m.19!=F){m.1g=2u(m.19)}d=$.3C(m,i.16)}3D(e){c=I;$.3E(i,m,\'2v\',e)}2(c){i.T(d,\'T\');2(g)$.1h.L("3F",[m,i])}2(g)$.1h.L("3G",[m,i]);2(g&&!--$.1C)$.1h.L("3H");2(i.2w)i.2w(m,c?\'T\':\'2v\');1j(5(){k.2l();m.1g=F},2r)};5 2u(s,a){2(1d.2x){a=1B 2x(\'3I.3J\');a.3K=\'I\';a.3L(s)}E a=(1B 3M()).3N(s,\'1G/2t\');6(a&&a.2y&&a.2y.1p!=\'3O\')?a:F}}};$.B.3P=5(c){6 4.2z().2A(\'9.C-1q\',5(){$(4).1s(c);6 I}).P(5(){$(":9,W:X",4).2A(\'2B.C-1q\',5(e){3 a=4.C;a.U=4;2(4.H==\'X\'){2(e.2C!=12){a.Y=e.2C;a.Z=e.3Q}E 2(S $.B.2D==\'5\'){3 b=$(4).2D();a.Y=e.2E-b.29;a.Z=e.2F-b.27}E{a.Y=e.2E-4.3R;a.Z=e.2F-4.3S}}1j(5(){a.U=a.Y=a.Z=F},10)})})};$.B.2z=5(){4.2G(\'9.C-1q\');6 4.P(5(){$(":9,W:X",4).2G(\'2B.C-1q\')})};$.B.1w=5(b){3 a=[];2(4.G==0)6 a;3 c=4[0];3 d=b?c.1E(\'*\'):c.22;2(!d)6 a;K(3 i=0,M=d.G;i<M;i++){3 e=d[i];3 n=e.7;2(!n)1H;2(b&&c.U&&e.H=="X"){2(!e.1i&&c.U==e)a.D({7:n+\'.x\',8:c.Y},{7:n+\'.y\',8:c.Z});1H}3 v=$.18(e,Q);2(v&&v.1r==15){K(3 j=0,2H=v.G;j<2H;j++)a.D({7:n,8:v[j]})}E 2(v!==F&&S v!=\'12\')a.D({7:n,8:v})}2(!b&&c.U){3 f=c.1E("W");K(3 i=0,M=f.G;i<M;i++){3 g=f[i];3 n=g.7;2(n&&!g.1i&&g.H=="X"&&c.U==g)a.D({7:n+\'.x\',8:c.Y},{7:n+\'.y\',8:c.Z})}}6 a};$.B.3T=5(a){6 $.1z(4.1w(a))};$.B.3U=5(b){3 a=[];4.P(5(){3 n=4.7;2(!n)6;3 v=$.18(4,b);2(v&&v.1r==15){K(3 i=0,M=v.G;i<M;i++)a.D({7:n,8:v[i]})}E 2(v!==F&&S v!=\'12\')a.D({7:4.7,8:v})});6 $.1z(a)};$.B.18=5(a){K(3 b=[],i=0,M=4.G;i<M;i++){3 c=4[i];3 v=$.18(c,a);2(v===F||S v==\'12\'||(v.1r==15&&!v.G))1H;v.1r==15?$.3V(b,v):b.D(v)}6 b};$.18=5(b,c){3 n=b.7,t=b.H,1a=b.1p.1I();2(S c==\'12\')c=Q;2(c&&(!n||b.1i||t==\'1m\'||t==\'3W\'||(t==\'1J\'||t==\'1K\')&&!b.1L||(t==\'9\'||t==\'X\')&&b.C&&b.C.U!=b||1a==\'13\'&&b.1M==-1))6 F;2(1a==\'13\'){3 d=b.1M;2(d<0)6 F;3 a=[],1N=b.3X;3 e=(t==\'13-2I\');3 f=(e?d+1:1N.G);K(3 i=(e?d:0);i<f;i++){3 g=1N[i];2(g.1t){3 v=g.8;2(!v)v=(g.1O&&g.1O[\'8\']&&!(g.1O[\'8\'].3Y))?g.1G:g.8;2(e)6 v;a.D(v)}}6 a}6 b.8};$.B.1Y=5(){6 4.P(5(){$(\'W,13,1F\',4).2J()})};$.B.2J=$.B.3Z=5(){6 4.P(5(){3 t=4.H,1a=4.1p.1I();2(t==\'1G\'||t==\'40\'||1a==\'1F\')4.8=\'\';E 2(t==\'1J\'||t==\'1K\')4.1L=I;E 2(1a==\'13\')4.1M=-1})};$.B.1X=5(){6 4.P(5(){2(S 4.1m==\'5\'||(S 4.1m==\'41\'&&!4.1m.42))4.1m()})};$.B.43=5(b){2(b==12)b=Q;6 4.P(5(){4.1i=!b})};$.B.2K=5(b){2(b==12)b=Q;6 4.P(5(){3 t=4.H;2(t==\'1J\'||t==\'1K\')4.1L=b;E 2(4.1p.1I()==\'2L\'){3 a=$(4).44(\'13\');2(b&&a[0]&&a[0].H==\'13-2I\'){a.45(\'2L\').2K(I)}4.1t=b}})};5 R(){2($.B.1s.46&&1d.1P&&1d.1P.R)1d.1P.R(\'[47.C] \'+15.48.49.4a(1Z,\'\'))}})(4b);',62,260,'||if|var|this|function|return|name|value|submit||||||||||||||||||||||||||||fn|form|push|else|null|length|type|false|data|for|trigger|max|doc|extraData|each|true|log|typeof|success|clk|callbacks|input|image|clk_x|clk_y||cb|undefined|select|attr|Array|dataType|target|a_fieldValue|responseText|tag|ajaxSubmit|action|window|url|aborted|responseXML|event|disabled|setTimeout|setAttribute|body|reset|extend|via|tagName|plugin|constructor|a_ajaxSubmit|selected|method|beforeSerialize|a_formToArray|in|beforeSubmit|param|fileUpload|new|active|timeout|getElementsByTagName|textarea|text|continue|toLowerCase|checkbox|radio|checked|selectedIndex|ops|attributes|console|GET|pre|serialize|veto|vetoed|callback|validate|a_resetForm|a_clearForm|arguments|iframe|closeKeepAlive|elements|ajaxSettings|src|about|blank|top|1000px|left|getResponseHeader|global|beforeSend|getAttribute|POST|multipart|try|appendTo|attachEvent|onload|load|remove|detachEvent|contentWindow|document|contentDocument|innerHTML|100|XMLDocument|xml|toXml|error|complete|ActiveXObject|documentElement|a_ajaxFormUnbind|bind|click|offsetX|offset|pageX|pageY|unbind|jmax|one|a_clearFields|a_selected|option|skipping|process|no|element|location|href|match|semantic|instanceof|toUpperCase|indexOf|resetForm|clearForm|html|apply|file|get|ajax|notify|alert|Error|Form|must|not|be|named|jqFormIO|Date|getTime|id|css|position|absolute|status|statusText|getAllResponseHeaders|setRequestHeader|abort|ajaxStart|ajaxSend|skipEncodingOverride|encoding|enctype|hidden|addEventListener|finally|removeAttr|removeEventListener|throw|content|json|script|httpData|catch|handleError|ajaxSuccess|ajaxComplete|ajaxStop|Microsoft|XMLDOM|async|loadXML|DOMParser|parseFromString|parsererror|a_ajaxForm|offsetY|offsetLeft|offsetTop|a_formSerialize|a_fieldSerialize|merge|button|options|specified|a_clearInputs|password|object|nodeType|a_enable|parent|find|debug|jquery|prototype|join|call|jQuery'.split('|'),0,{}));
/**
 * Automatic ajax validation
 *
 * @see http://drupal.org/project/ajax
 * @see irc://freenode.net/#drupy
 * @depends Drupal 6
 * @author brendoncrawford
 * @note This file uses a 79 character width limit.
 * 
 *
 */

Drupal.Ajax = new Object;

Drupal.Ajax.plugins = {};

Drupal.Ajax.firstRun = false;

/**
 * Init function.
 * This is being executed by Drupal behaviours.
 * See bottom of script.
 * 
 * @param {HTMLElement} context
 * @return {Bool}
 */
Drupal.Ajax.init = function(context) {
  
  var f, s;
  if (f = $('.ajax-form', context)) {
    if (!Drupal.Ajax.firstRun) {
      Drupal.Ajax.invoke('init');
      Drupal.Ajax.firstRun = true;
    }
    s = $('input[type="submit"]', f);
    s.click(function(){
      this.form.ajax_activator = $(this);
      return true;
    });
    f.each(function(){
      this.ajax_activator = null;
      $(this).submit(function(){
        if (this.ajax_activator === null) {
          this.ajax_activator = $('#edit-submit', this);
        }
        if (this.ajax_activator.hasClass('ajax-trigger')) {
          Drupal.Ajax.go($(this), this.ajax_activator);
          return false;
        }
        else {
          return true;
        }
      });
      return true;
    });
  }
  return true;
};

/**
 * Invokes plugins
 * 
 * @param {Object} formObj
 * @param {Object} submitter
 */
Drupal.Ajax.invoke = function(hook, args) {
  var plugin, r, ret;
  ret = true;
  for (plugin in Drupal.Ajax.plugins) {
    r = Drupal.Ajax.plugins[plugin](hook, args);
    if (r === false) {
      ret = false;
    }
  }
  return ret;
};

/**
 * Handles submission
 * 
 * @param {Object} submitter_
 * @return {Bool}
 */
Drupal.Ajax.go = function(formObj, submitter) {

	//dont submit if js validation returns false
	if(formObj.valid() == false )
	{
	return;
	}

  var submitterVal, submitterName, extraData;
  Drupal.Ajax.invoke('submit', {submitter:submitter});
  submitterVal = submitter.val();
  submitterName = submitter.attr('name');
  
	//add ajax loader to sumitter
	submitter.before('<div class="ajax-loader"></div>');
	
  extraData = {};
  extraData[submitterName] = submitterVal;
  extraData['drupal_ajax'] = '1';
	
  formObj.a_ajaxSubmit({
    extraData : extraData,
    beforeSubmit : function(data) {
      data[data.length] = {
        name : submitterName,
        value : submitterVal
      };
      data[data.length] = {
        name : 'drupal_ajax',
        value : '1'
      };
			submitter.attr('disabled', 'disabled');
      return true;
    },
    dataType : 'json',
    error: function (XMLHttpRequest, textStatus, errorThrown) {

			//log ajax error to watchdog here
			$.ajax({
					url: window.location.protocol + '//' + window.location.hostname+'/wonga-drupal-error/ajax popup failure/A popup failed to complete while requesting ['+formObj.context.action+']',
					success: function(data) {						
					}
			});

			//show generic error
			$('#fancybox-content').html('<h1>An error occured</h1><p>We have had a problem updating your details.  Please try again.</p>');
			      
      return true;
    },
    success: function(data){
      Drupal.Ajax.response(submitter, formObj, data);
      return true;
    }
  });
  return false;
};

/**
 * Handles scroller
 * 
 * @param {Object} submitter
 * @return {Bool}
 */
Drupal.Ajax.scroller = function(submitter) {
  var scroll_weight, box, found, timer;
  scroll_weight = 100;
  timer = window.setInterval(function() {
    box = submitter;
    found = false;
    // Watch for thickbox
    while (box.parentNode !== null &&
        Drupal.Ajax.invoke('scrollFind', {container:box})) {
      box = box.parentNode;
      // Document
      if (box === document) {
        if (box.documentElement.scrollTop &&
            box.documentElement.scrollTop > 0) {
          box.documentElement.scrollTop -= scroll_weight;
          found = true;
        }
      }
      // Body
      else if (box === document.body) {
        if (box.scrollTop &&
            box.scrollTop > 0) {
          box.scrollTop -= scroll_weight;
          found = true;
        }
      }
      // Window
      else if (box === window) {
        if ((window.pageYOffset && window.pageYOffset > 0) ||
            (window.scrollY && window.scrollY > 0)) {
          window.scrollBy(0, -scroll_weight);
          found = true;
        }
      }
      // Any other element
      else {
        if (box.scrollTop &&
            box.scrollTop > 0) {
          box.scrollTop -= scroll_weight;
          found = true;
        }
      }
    }
    // Check if completed
    if (!found) {
      window.clearInterval(timer);
    }
    return true;
  }, 100);
  return true;
};

/**
 * Handles messaging
 * 
 * @param {Object} formObj
 * @param {Object} submitter
 * @param {Object} data
 * @param {Object} options
 * @return {Bool}
 */
Drupal.Ajax.message = function(formObj, submitter, data, options) {
  var args;
  args = {
    formObj : formObj,
    submitter : submitter,
    data : data,
    options : options
  };
  if (Drupal.Ajax.invoke('message', args)) {
    Drupal.Ajax.writeMessage(args.formObj, args.submitter, args.options);
  }
  return true;
};

/**
 * Writes message
 * 
 * @param {Object} formObj
 * @param {Object} submitter
 * @param {Object} options
 * @return {Bool}
 */
Drupal.Ajax.writeMessage = function(formObj, submitter, options) {
  var i, _i, thisItem, log, errBox, h;
  if (options.action === 'notify') {
    // Cleanups
    $('.messages, .ajax-preview', formObj).remove();
    $('input, textarea').removeClass('error status warning required');
    // Preview
    if (options.type === 'preview') {
      log = $('<div>').addClass('ajax-preview');
      log.html(options.messages);
      formObj.prepend(log);
    }
    // Status, Error, Message
    else {
      log = $('<ul>');
      errBox = $(".messages." + options.type, formObj[0])
      for (i = 0, _i = options.messages.length; i < _i; i++) {
        thisItem = $('#' + options.messages[i].id, formObj[0])
        thisItem.addClass(options.type);
        if (options.messages[i].required) {
          thisItem.addClass('required');
        }
        log.append('<li>' + options.messages[i].value + '</li>');
      }
      if (errBox.length === 0) {
        errBox = $("<div class='messages " + options.type + "'>");
        formObj.prepend(errBox);
      }
      errBox.html(log);
    }
  }
  else if (options.action === 'clear') {
    $('.messages, .ajax-preview', formObj).remove();
  }
  Drupal.Ajax.scroller(submitter[0]);
  return true;
};

/**
 * Updates message containers
 * 
 * @param {Object} updaters
 * @return {Bool}
 */
Drupal.Ajax.updater = function(updaters) {
  var i, _i, elm;
  for (i = 0, _i = updaters.length; i < _i; i++) {
    elm = $(updaters[i].selector);
    // HTML:IN
    if (updaters[i].type === 'html_in') {
      elm.html(updaters[i].value);
    }
    // HTML:OUT
    else if (updaters[i].type === 'html_out') {
      elm.replaceWith(updaters[i].value);
    }
    // FIELD
    else if (updaters[i].type === 'field') {
      elm.val(updaters[i].value);
    }
    // REMOVE
    else if(updaters[i].type === 'remove') {
      elm.remove();
    }
  }
  return true;
};

/**
 * Handles data response
 * 
 * @param {Object} submitter
 * @param {Object} formObj
 * @param {Object} data
 * @return {Bool}
 */
Drupal.Ajax.response = function(submitter, formObj, data){

  var newSubmitter;
  data.local = {
    submitter : submitter,
    form : formObj
  };
  /**
   * Failure
   */
  if (data.status === false) {	  
		
    Drupal.Ajax.updater(data.updaters);
    Drupal.Ajax.message(formObj, submitter, data, {
      action : 'notify',
      messages : data.messages_error,
      type : 'error'
    });
		
		$('.ajax-loader').remove();
		submitter.removeAttr('disabled');
  }
  /**
   * Success
   */
  else {
  
    // Display preview
    if (data.preview !== null) {			
			Drupal.Ajax.updater(data.updaters);
      Drupal.Ajax.message(formObj, submitter, data, {
        action : 'notify',
        messages : decodeURIComponent(data.preview),
        type : 'preview'
      });
						
			$('.ajax-loader').remove();
			submitter.removeAttr('disabled');
    }
    // If no redirect, then simply show messages
    else if (data.redirect === null) {
      
      $.fancybox.close();
      //location.reload();
      $('.ajax-loader').remove(); 
			
      /*
      if (data.messages_status.length > 0) {
        Drupal.Ajax.message(formObj, submitter, data, {
          action : 'notify',
          messages : data.messages_status,
          type : 'status'
        });
      }
      if (data.messages_warning.length > 0) {
        Drupal.Ajax.message(formObj, submitter, data, {
          action : 'notify',
          messages : data.messages_warning,
          type : 'warning'
        });
      }
      if (data.messages_status.length === 0 &&
          data.messages_warning.length === 0) {
        Drupal.Ajax.message(formObj, submitter, data, {action:'clear'});
      }
      */
    }
    // Redirect
    else {    	
			
			var hostname = window.location.hostname;
			var port = window.location.port;
			
			if(port) {
				data.redirect = data.redirect.replace(hostname,hostname + ':' + port);
			}
		
      if (Drupal.Ajax.invoke('complete', data)) {
    	
			
    	//old code that just redirected
        //Drupal.Ajax.redirect( data.redirect );
        
        //get the contents via ajax and add the mod=1 so its simple theme
        //add contents from call back into the form 
				
        
        var redirect = '';
        if( data.redirect.indexOf('?') != -1 ) {
          redirect = data.redirect + '&mod=1';
        } else {
          redirect = data.redirect + '?mod=1';	
        }
        
    	$.ajax({
    	  url: redirect,
    	  context: $('#fancybox-content'),
    	  success: function(data){   		  
	    	$(this).html(data);
	    	
        if ($().account_val) {
          $().account_val(); // call js validation 
        }
				$().wonga('simple_ajax_links');
	    	Drupal.Ajax.init();
        $.fancybox.center();
				
				$("#fancybox-wrap").easydrag();
				$("#fancybox-wrap").setHandler('h1');																														
				
				$('.ajax-loader').remove();
				$().wonga('bind_close_fancybox');
				
    	  }
        }); //ajax call
      }
      else {
			  
        Drupal.Ajax.updater(data.updaters);
        if (data.messages_status.length === 0 &&
            data.messages_warning.length === 0) {        
          Drupal.Ajax.message(formObj, submitter, data, {action:'clear'});
        }
        else {        					
          Drupal.Ajax.message(formObj, submitter, data, {
            action : 'notify',
            messages : data.messages_status,
            type : 'status'
          });
        }
				
				$('.ajax-loader').remove();
				submitter.removeAttr('disabled');
				
      }
    }
  }
  return true;
};


/**
 * Redirects to appropriate page
 * 
 * @todo
 *   Some of this functionality should possibly hapen on
 *   the server instead of client.
 * @param {String} url
 */
Drupal.Ajax.redirect = function(url) {
  window.location.href = url;
};

Drupal.behaviors.Ajax = Drupal.Ajax.init;


;
(function ($, Drupal) {
  /* Changes ctool modal throbber */
  Drupal.theme.prototype.CToolsModalThrobber = function () {
    var html = '';
    html += '  <div id="modal-throbber">';
    html += '    <div class="modal-throbber-wrapper">';
    html += '       <img src="/sites/all/themes/pizaz/images/mint/spinner.gif" alt="Loading" title="loading" />';
    html += '    </div>';
    html += '  </div>';

    return html;
  };

  /**
   * A Drupal behaviour.
   */
  Drupal.behaviors.wongaMyAccountNavigation = function (context) {
    if ($("#block-wonga-6", context).length > 0) {
      $("#block-wonga-6", context).css("margin-top", "250px");
      var offset = $("#block-wonga-6", context).offset();
      var topPadding = 100;
      $(window).scroll(function () {
        if ($(window).scrollTop() > offset.top) {
          var margin = $(window).scrollTop() + topPadding - 250;
          $("#block-wonga-6", context).stop().animate({
            marginTop: margin
          });
        } else {
          $("#block-wonga-6", context).stop().animate({
            marginTop: 250
          });
        }
        ;
      });
    }
  };
  
  /**
   * A Drupal behaviour - how it works menu.
   */
  Drupal.behaviors.wongaHowitworksNavigation = function (context) {
    if ($("#how-sidebar-navigation", context).length > 0) {
      var offset = $("#how-sidebar-navigation", context).offset();
      var topPadding = 40;
      $(window).scroll(function () {
        if ($(window).scrollTop() > offset.top) {
          var margin = $(window).scrollTop() - offset.top + topPadding;
          $("#how-sidebar-navigation", context).stop().animate({
            marginTop: margin
          });
        } else {
          $("#how-sidebar-navigation", context).stop().animate({
            marginTop: 0
          });
        };
      });
    }
  };
  
  /**
   * A Drupal behaviour - how it works trigger popups.
   */
  Drupal.behaviors.wongaHowitworksPopups = function (context) {
    $('a.trigger-popup').click(function () {
      var trigger_id = $(this).attr("id");
      $('div#' + trigger_id).show("fast");
    });
    
    $('.how-popup-box span.close').click(function () {
      var close_id = $(this).parent().attr("id");
      $('div#' + close_id).hide("fast");
    });
  };
})(jQuery, Drupal);;
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {

function homeApr () {
$(".apr-tooltiptrigger").tooltip({
        position: 'top center',
        offset: [-8, -55],
        effect: 'toggle',
        //bodyHandler: function() {
            //return $($(this).attr("href")).html();
          //},
        showURL: false,
        delay: 30,
        relative: true
      });
};

homeApr();

function allTooltips () {
     $("div[title].help-icon").tooltip({
        offset: [6, 27],
        effect: 'fade',
        layout: '<div><div class="tooltipbox"></div><div class="tooltiptail"></div></div>',
        tipInner: 'tooltipbox'
      });

     $("img[title].help-icon").tooltip({
        offset: [6, 27],
        effect: 'fade',
        layout: '<div><div class="tooltipbox"></div><div class="tooltiptail"></div></div>',
        tipInner: 'tooltipbox'
      });


      $("img[title].help-icon-wide").tooltip({
        offset: [6, 40],
        effect: 'fade',
        layout: '<div class="wide"><div class="tooltipbox"></div><div class="tooltiptail"></div></div>',
        tipInner: 'tooltipbox'
      });

      $(".tooltiptrigger").tooltip({
        position: 'top right',
        offset: [50, -150],
        effect: 'fade',
        layout: '<div><div class="tooltipbox"></div><div class="tooltiptail"></div></div>',
        tipInner: 'tooltipbox'
      });

      $(".largetooltiptrigger").tooltip({
        position: 'center right',
        offset: [0, -40],
        effect: 'toggle',
        showURL: false,
        delay: 30,
        relative: true
      });

}

allTooltips();
 /*
 * End of document.ready
 */

});;
(function($, Drupal) {
  
  /* Add class to checkbox and radio labels when their input is checked */
  Drupal.behaviors.inputChecked = function(context) {
    $(document).ready(function() {
  
      /* Add a class to the label of checked checkboxes for styling purposes */
      function checkboxChecked(){
        if ($('input[type=checkbox]', this).is(':checked')) { 
          $(this).addClass('checked');
        } else {
          $(this).removeClass('checked');
        }
      }
  
      $('.form-item-checkbox label.option', context).each(checkboxChecked).on('change', checkboxChecked);

      /* Add a class to the label of checked radio buttons for styling purposes */
      function radioChecked(){
        $('label.option', this).each(function(){
          if ($('input[type=radio]', this).is(':checked')) { 
            $(this).addClass('checked');
          } else {
            $(this).removeClass('checked');
          }
        });
      }
  
      $('.form-element-type-radios', context).each(radioChecked).on('change', radioChecked);
   
    });
  };
})(jQuery, Drupal);


;
(function($, Drupal) {

  var resetControlPanel = function () {
    $('#control-bar li').removeClass('clicked open');
    $('#control-bar li div.control-bar-panel-wrapper').hide();
  };

  $(document).click(resetControlPanel);

  var initControlBarLink = function initControlBarLink() {
    // find the actual dropdown to show (by markup and for unnecessarily
    // complicated reasons it's at the bottom of the body)
    var panel = $('div#' + this.id.split('-trigger')[0] + '-panel');
    var container = $(this).parent();

    // instead of calculating the offset, like we used to, now we just append
    // the panel to its respective parent trigger
    panel.appendTo(container);

    // finally - the hover function
    container.on('mouseenter', function () {
      resetControlPanel();
      if (!container.hasClass('open')) {
        panel.show();
        container.addClass('open');
      }
    });

    // and the mouseleave function
    container.on('mouseleave', function () {
      if (container.hasClass('open') && !container.hasClass('clicked')) {
        panel.hide();
        container.removeClass('open');
      }
    });

    container.click(function (event) {
      container.addClass('clicked');
      event.stopPropagation();
    });
  };

 /**
  * Drupal behavior to initialise the controlBar.
  *
  * @param {Object} context
  *   The DOM context being loaded
  */
  Drupal.behaviors.controlBar = function (context) {
    if ($("#control-bar", context).length === 0) {
      // Remove the control bar panel when there are no items inside
      $('.control-bar-panel', context).remove();
      return;
    }

    // Initialise the control bar items.
    $("#control-bar a.trigger", context).each(initControlBarLink);

    // Start up with the login panel open if the user tried to login and there's
    // an error.
    if ($('#control-bar #edit-email', context).hasClass('error')) {
      $('#login-panel', context).css('display', 'block');
      $('#login-panel', context).parent().addClass('open clicked');
    }

    // Use a functional button for the login panel
    $('#login-panel .button', context)
      .removeClass('button default')
      .addClass('functional-button mini');
  };
})(jQuery, Drupal);

;
(function($, Drupal) {
  /**
   * Creates accordions 
   */
  Drupal.behaviors.wongaAccordion = function(context) {
    var speed = 500; 
    $(".accordion-cont:not(.open)", context).css("display","none");
    var $accordionHeading = $(".accordion-heading", context);
    
    $accordionHeading.click(function() {
      $(this).toggleClass("open");
      $accordionHeading.not(this).removeClass("open");
      $(this).next(".accordion-cont").slideToggle(speed);
      $accordionHeading.not(this).next(".accordion-cont").slideUp(speed);
    });
  };
})(jQuery, Drupal);
;
