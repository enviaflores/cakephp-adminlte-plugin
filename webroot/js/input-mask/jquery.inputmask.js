/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 0.0.0
*/
var $jscomp={scope:{},checkStringArgs:function(c,v,m){if(null==c)throw new TypeError("The 'this' value for String.prototype."+m+" must not be null or undefined");if(v instanceof RegExp)throw new TypeError("First argument to String.prototype."+m+" must not be a regular expression");return c+""}};
$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(c,v,m){if(m.get||m.set)throw new TypeError("ES3 does not support getters and setters.");c!=Array.prototype&&c!=Object.prototype&&(c[v]=m.value)};$jscomp.getGlobal=function(c){return"undefined"!=typeof window&&window===c?c:"undefined"!=typeof global&&null!=global?global:c};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(c,v,m,y){if(v){m=$jscomp.global;c=c.split(".");for(y=0;y<c.length-1;y++){var C=c[y];C in m||(m[C]={});m=m[C]}c=c[c.length-1];y=m[c];v=v(y);v!=y&&null!=v&&$jscomp.defineProperty(m,c,{configurable:!0,writable:!0,value:v})}};
$jscomp.polyfill("String.prototype.repeat",function(c){return c?c:function(c){var m=$jscomp.checkStringArgs(this,null,"repeat");if(0>c||1342177279<c)throw new RangeError("Invalid count value");c|=0;for(var v="";c;)if(c&1&&(v+=m),c>>>=1)m+=m;return v}},"es6-impl","es3");
(function(c){if(void 0===c.fn.inputmask){var v=function(e,w,a,p){function g(){return e[w]}function m(){return g().tests}function r(){return g()._buffer}function h(){return g().buffer}function n(b,k,d){function f(b,k,d,q){for(var f=E(b),c=d?1:0,x="",g=k.buffer,e=k.tests[f].cardinality;e>c;e--)x+=G(g,f-(e-1));d&&(x+=d);return null!=k.tests[f].fn?k.tests[f].fn.test(x,g,b,q,a):d==G(k._buffer,b,!0)||d==a.skipOptionalPartCharacter?{refresh:!0,c:G(k._buffer,b,!0),pos:b}:!1}if(d=!0===d){var q=f(b,g(),k,d);
!0===q&&(q={pos:b});return q}var x=[],q=!1,n=w,r=h().slice(),p=g().lastValidPosition;H(b);var m=[];c.each(e,function(a,c){if("object"==typeof c){w=a;var e=b,B=g().lastValidPosition,F;if(B==p){if(1<e-p)for(B=-1==B?0:B;B<e&&(F=f(B,g(),r[B],!0),!1!==F);B++)v(h(),B,r[B],!0),!0===F&&(F={pos:B}),F=F.pos||B,g().lastValidPosition<F&&(g().lastValidPosition=F);if(!l(e)&&!f(e,g(),k,d)){B=t(e)-e;for(F=0;F<B&&!1===f(++e,g(),k,d);F++);m.push(w)}}(g().lastValidPosition>=p||w==n)&&0<=e&&e<u()&&(q=f(e,g(),k,d),!1!==
q&&(!0===q&&(q={pos:e}),F=q.pos||e,g().lastValidPosition<F&&(g().lastValidPosition=F)),x.push({activeMasksetIndex:a,result:q}))}});w=n;return function(a,d){var q=!1;c.each(d,function(b,d){if(q=-1==c.inArray(d.activeMasksetIndex,a)&&!1!==d.result)return!1});if(q)d=c.map(d,function(b,d){if(-1==c.inArray(b.activeMasksetIndex,a))return b;e[b.activeMasksetIndex].lastValidPosition=p});else{var x=-1,g=-1,h;c.each(d,function(b,d){-1!=c.inArray(d.activeMasksetIndex,a)&&!1!==d.result&(-1==x||x>d.result.pos)&&
(x=d.result.pos,g=d.activeMasksetIndex)});d=c.map(d,function(d,q){if(-1!=c.inArray(d.activeMasksetIndex,a)){if(d.result.pos==x)return d;if(!1!==d.result){for(var B=b;B<x;B++)if(h=f(B,e[d.activeMasksetIndex],e[g].buffer[B],!0),!1===h){e[d.activeMasksetIndex].lastValidPosition=x-1;break}else v(e[d.activeMasksetIndex].buffer,B,e[g].buffer[B],!0),e[d.activeMasksetIndex].lastValidPosition=B;h=f(x,e[d.activeMasksetIndex],k,!0);!1!==h&&(v(e[d.activeMasksetIndex].buffer,x,k,!0),e[d.activeMasksetIndex].lastValidPosition=
x);return d}}})}return d}(m,x)}function U(){var b=w,a={activeMasksetIndex:0,lastValidPosition:-1,next:-1};c.each(e,function(b,k){"object"==typeof k&&(w=b,g().lastValidPosition>a.lastValidPosition?(a.activeMasksetIndex=b,a.lastValidPosition=g().lastValidPosition,a.next=t(g().lastValidPosition)):g().lastValidPosition==a.lastValidPosition&&(-1==a.next||a.next>t(g().lastValidPosition))&&(a.activeMasksetIndex=b,a.lastValidPosition=g().lastValidPosition,a.next=t(g().lastValidPosition)))});w=-1!=a.lastValidPosition&&
e[b].lastValidPosition==a.lastValidPosition?b:a.activeMasksetIndex;b!=w&&(P(h(),t(a.lastValidPosition),u()),g().writeOutBuffer=!0);z.data("_inputmask").activeMasksetIndex=w}function l(b){b=E(b);b=m()[b];return void 0!=b?b.fn:!1}function E(b){return b%m().length}function u(){return a.getMaskLength(r(),g().greedy,g().repeat,h(),a)}function t(b){var a=u();if(b>=a)return a;for(;++b<a&&!l(b););return b}function H(b){if(0>=b)return 0;for(;0<--b&&!l(b););return b}function v(b,a,d,c){c&&(a=y(b,a));c=m()[E(a)];
var q=d;if(void 0!=q&&void 0!=c)switch(c.casing){case "upper":q=d.toUpperCase();break;case "lower":q=d.toLowerCase()}b[a]=q}function G(b,a,d){d&&(a=y(b,a));return b[a]}function y(b,a){for(var d;void 0==b[a]&&b.length<u();)for(d=0;void 0!==r()[d];)b.push(r()[d++]);return a}function I(b,a,d){b._valueSet(a.join(""));void 0!=d&&D(b,d)}function P(b,a,d,c){for(var q=u();a<d&&a<q;a++)!0===c?l(a)||v(b,a,""):v(b,a,G(r().slice(),a,!0))}function C(a,c){var b=E(c);v(a,c,G(r(),b))}function L(b){return a.placeholder.charAt(b%
a.placeholder.length)}function M(a,k,d,f,q){f=void 0!=f?f.slice():Q(a._valueGet()).split("");c.each(e,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1,b.p=-1)});!0!==d&&(w=0);k&&a._valueSet("");u();c.each(f,function(b,f){if(!0===q){var x=g().p,x=-1==x?x:H(x),e=-1==x?b:t(x);-1==c.inArray(f,r().slice(x+1,e))&&R.call(a,void 0,!0,f.charCodeAt(0),k,d,b)}else R.call(a,void 0,!0,f.charCodeAt(0),k,d,b)});!0===d&&-1!=g().p&&(g().lastValidPosition=H(g().p))}function ea(a){return c.inputmask.escapeRegex.call(this,
a)}function Q(a){return a.replace(new RegExp("("+ea(r().join(""))+")*$"),"")}function S(a){var b=h(),d=b.slice(),c,q;for(q=d.length-1;0<=q;q--)if(c=E(q),m()[c].optionality)if(l(q)&&n(q,b[q],!0))break;else d.pop();else break;I(a,d)}function fa(b,k){if(!m()||!0!==k&&b.hasClass("hasDatepicker"))return b[0]._valueGet();var d=c.map(h(),function(a,b){return l(b)&&n(b,a,!0)?a:null}),d=(A?d.reverse():d).join("");return void 0!=a.onUnMask?a.onUnMask.call(this,h().join(""),d):d}function J(b){!A||"number"!=
typeof b||a.greedy&&""==a.placeholder||(b=h().length-b);return b}function D(b,k,d){var f=b.jquery&&0<b.length?b[0]:b;if("number"==typeof k)k=J(k),d=J(d),c(b).is(":visible")&&(d="number"==typeof d?d:k,f.scrollLeft=f.scrollWidth,0==a.insertMode&&k==d&&d++,f.setSelectionRange?(f.selectionStart=k,f.selectionEnd=ga?k:d):f.createTextRange&&(b=f.createTextRange(),b.collapse(!0),b.moveEnd("character",d),b.moveStart("character",k),b.select()));else{if(!c(b).is(":visible"))return{begin:0,end:0};f.setSelectionRange?
(k=f.selectionStart,d=f.selectionEnd):document.selection&&document.selection.createRange&&(b=document.selection.createRange(),k=0-b.duplicate().moveStart("character",-1E5),d=k+b.text.length);k=J(k);d=J(d);return{begin:k,end:d}}}function N(b){if("*"!=a.repeat){var k=!1,d=0,f=w;c.each(e,function(a,c){if("object"==typeof c){w=a;var q=H(u());if(c.lastValidPosition>=d&&c.lastValidPosition==q){for(var f=!0,x=0;x<=q;x++){var e=l(x),g=E(x);if(e&&(void 0==b[x]||b[x]==L(x))||!e&&b[x]!=r()[g]){f=!1;break}}if(k=
k||f)return!1}d=c.lastValidPosition}});w=f;return k}}function ha(b,c){return A?1<b-c||1==b-c&&a.insertMode:1<c-b||1==c-b&&a.insertMode}function ia(a){a=c._data(a).events;c.each(a,function(a,b){c.each(b,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type){var d=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return d.apply(this,arguments)}}})})}function ja(a){var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,"value"));if(b&&
b.get){if(!a._valueGet){var d=b.get,f=b.set;a._valueGet=function(){return A?d.call(this).split("").reverse().join(""):d.call(this)};a._valueSet=function(a){f.call(this,A?a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=c(this),b=c(this).data("_inputmask"),f=b.masksets,e=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=f[e]._buffer.join("")?d.call(this):""},set:function(a){f.call(this,a);c(this).triggerHandler("setvalue.inputmask")}})}}else if(document.__lookupGetter__&&
a.__lookupGetter__("value"))a._valueGet||(d=a.__lookupGetter__("value"),f=a.__lookupSetter__("value"),a._valueGet=function(){return A?d.call(this).split("").reverse().join(""):d.call(this)},a._valueSet=function(a){f.call(this,A?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=c(this),b=c(this).data("_inputmask"),f=b.masksets,e=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=f[e]._buffer.join("")?d.call(this):""}),a.__defineSetter__("value",
function(a){f.call(this,a);c(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return A?this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=A?a.split("").reverse().join(""):a}),void 0==c.valHooks.text||1!=c.valHooks.text.inputmaskpatch)d=c.valHooks.text&&c.valHooks.text.get?c.valHooks.text.get:function(a){return a.value},f=c.valHooks.text&&c.valHooks.text.set?c.valHooks.text.set:function(a,b){a.value=b;return a},jQuery.extend(c.valHooks,
{text:{get:function(a){var b=c(a);if(b.data("_inputmask")){if(b.data("_inputmask").opts.autoUnmask)return b.inputmask("unmaskedvalue");a=d(a);b=b.data("_inputmask");return a!=b.masksets[b.activeMasksetIndex]._buffer.join("")?a:""}return d(a)},set:function(a,b){var d=c(a),e=f(a,b);d.data("_inputmask")&&d.triggerHandler("setvalue.inputmask");return e},inputmaskpatch:!0}})}function V(a,c,d,f){var b=h();if(!1!==f)for(;!l(a)&&0<=a-1;)a--;for(f=a;f<c&&f<u();f++)if(l(f)){C(b,f);var e=t(f),k=G(b,e);if(k!=
L(e))if(e<u()&&!1!==n(f,k,!0)&&m()[E(f)].def==m()[E(e)].def)v(b,f,k,!0);else if(l(f))break}else C(b,f);void 0!=d&&v(b,H(c),d);if(0==g().greedy){c=Q(b.join("")).split("");b.length=c.length;f=0;for(d=b.length;f<d;f++)b[f]=c[f];0==b.length&&(g().buffer=r().slice())}return a}function W(a,c,d){var b=h();if(G(b,a,!0)!=L(a))for(var e=H(c);e>a&&0<=e;e--)if(l(e)){var k=H(e),t=G(b,k);t!=L(k)&&!1!==n(k,t,!0)&&m()[E(e)].def==m()[E(k)].def&&(v(b,e,t,!0),C(b,k))}else C(b,e);void 0!=d&&G(b,a)==L(a)&&v(b,a,d);a=
b.length;if(0==g().greedy){d=Q(b.join("")).split("");b.length=d.length;e=0;for(k=b.length;e<k;e++)b[e]=d[e];0==b.length&&(g().buffer=r().slice())}return c-(a-b.length)}function X(b,c,d){if(a.numericInput||A){switch(c){case a.keyCode.BACKSPACE:c=a.keyCode.DELETE;break;case a.keyCode.DELETE:c=a.keyCode.BACKSPACE}if(A){var f=d.end;d.end=d.begin;d.begin=f}}f=!0;d.begin==d.end?(f=c==a.keyCode.BACKSPACE?d.begin-1:d.begin,a.isNumeric&&""!=a.radixPoint&&h()[f]==a.radixPoint&&(d.begin=h().length-1==f?d.begin:
c==a.keyCode.BACKSPACE?f:t(f),d.end=d.begin),f=!1,c==a.keyCode.BACKSPACE?d.begin--:c==a.keyCode.DELETE&&d.end++):1!=d.end-d.begin||a.insertMode||(f=!1,c==a.keyCode.BACKSPACE&&d.begin--);P(h(),d.begin,d.end);var k=u();if(0==a.greedy)V(d.begin,k,void 0,!A&&c==a.keyCode.BACKSPACE&&!f);else{for(var x=d.begin,n=d.begin;n<d.end;n++)if(l(n)||!f)x=V(d.begin,k,void 0,!A&&c==a.keyCode.BACKSPACE&&!f);f||(d.begin=x)}c=t(-1);P(h(),d.begin,d.end,!0);M(b,!1,void 0==e[1]||c>=d.end,h());g().lastValidPosition<c?(g().lastValidPosition=
-1,g().p=c):g().p=d.begin}function Y(b){T=!1;var e=this,d=c(e),f=b.keyCode,q=D(e);f==a.keyCode.BACKSPACE||f==a.keyCode.DELETE||ka&&127==f||b.ctrlKey&&88==f?(b.preventDefault(),88==f&&(K=h().join("")),X(e,f,q),U(),I(e,h(),g().p),e._valueGet()==r().join("")&&d.trigger("cleared"),a.showTooltip&&d.prop("title",g().mask)):f==a.keyCode.END||f==a.keyCode.PAGE_DOWN?setTimeout(function(){var d=t(g().lastValidPosition);a.insertMode||d!=u()||b.shiftKey||d--;D(e,b.shiftKey?q.begin:d,d)},0):f==a.keyCode.HOME&&
!b.shiftKey||f==a.keyCode.PAGE_UP?D(e,0,b.shiftKey?q.begin:0):f==a.keyCode.ESCAPE||90==f&&b.ctrlKey?(M(e,!0,!1,K.split("")),d.click()):f!=a.keyCode.INSERT||b.shiftKey||b.ctrlKey?0!=a.insertMode||b.shiftKey||(f==a.keyCode.RIGHT?setTimeout(function(){var a=D(e);D(e,a.begin)},0):f==a.keyCode.LEFT&&setTimeout(function(){var a=D(e);D(e,a.begin-1)},0)):(a.insertMode=!a.insertMode,D(e,a.insertMode||q.begin!=u()?q.begin:q.begin-1));d=D(e);!0===a.onKeyDown.call(this,b,h(),a)&&D(e,d.begin,d.end);Z=-1!=c.inArray(f,
a.ignorables)}function R(b,k,d,f,q,x){if(void 0==d&&T)return!1;T=!0;var r=c(this);b=b||window.event;d=k?d:b.which||b.charCode||b.keyCode;if(!(!0===k||b.ctrlKey&&b.altKey)&&(b.ctrlKey||b.metaKey||Z))return!0;if(d){!0!==k&&46==d&&0==b.shiftKey&&","==a.radixPoint&&(d=44);var l,p,m=String.fromCharCode(d);k?(d=q?x:g().lastValidPosition+1,l={begin:d,end:d}):l=D(this);x=ha(l.begin,l.end);var E=w;x&&(w=E,c.each(e,function(a,b){"object"==typeof b&&(w=a,g().undoBuffer=h().join(""))}),X(this,a.keyCode.DELETE,
l),a.insertMode||c.each(e,function(a,b){"object"==typeof b&&(w=a,W(l.begin,u()),g().lastValidPosition=t(g().lastValidPosition))}),w=E);var z=h().join("").indexOf(a.radixPoint);a.isNumeric&&!0!==k&&-1!=z&&(a.greedy&&l.begin<=z?(l.begin=H(l.begin),l.end=l.begin):m==a.radixPoint&&(l.begin=z,l.end=l.begin));var y=l.begin;d=n(y,m,q);!0===q&&(d=[{activeMasksetIndex:w,result:d}]);var A=-1;c.each(d,function(b,d){w=d.activeMasksetIndex;g().writeOutBuffer=!0;var c=d.result;if(!1!==c){var e=!1,f=h();!0!==c&&
(e=c.refresh,y=void 0!=c.pos?c.pos:y,m=void 0!=c.c?c.c:m);if(!0!==e){if(1==a.insertMode){c=u();for(f=f.slice();G(f,c,!0)!=L(c)&&c>=y;)c=0==c?-1:H(c);c>=y?(W(y,u(),m),f=g().lastValidPosition,c=t(f),c!=u()&&f>=y&&G(h(),c,!0)!=L(c)&&(g().lastValidPosition=c)):g().writeOutBuffer=!1}else v(f,y,m,!0);if(-1==A||A>t(y))A=t(y)}else!q&&(f=y<u()?y+1:y,-1==A||A>f)&&(A=f);A>g().p&&(g().p=A)}});!0!==q&&(w=E,U());if(!1!==f&&(c.each(d,function(a,b){if(b.activeMasksetIndex==w)return p=b,!1}),void 0!=p)){var da=this;
setTimeout(function(){a.onKeyValidation.call(da,p.result,a)},0);if(g().writeOutBuffer&&!1!==p.result){var C=h();f=k?void 0:a.numericInput?y>z?H(A):m==a.radixPoint?A-1:H(A-1):A;I(this,C,f);!0!==k&&setTimeout(function(){!0===N(C)&&r.trigger("complete");O=!0;r.trigger("input")},0)}else x&&(g().buffer=g().undoBuffer.split(""))}a.showTooltip&&r.prop("title",g().mask);b&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}}function la(b){var e=c(this),d=b.keyCode,f=h();aa&&d==a.keyCode.BACKSPACE&&ba==
this._valueGet()&&Y.call(this,b);a.onKeyUp.call(this,b,f,a);d==a.keyCode.TAB&&a.showMaskOnFocus&&(e.hasClass("focus.inputmask")&&0==this._valueGet().length?(f=r().slice(),I(this,f),D(this,0),K=h().join("")):(I(this,f),f.join("")==r().join("")&&-1!=c.inArray(a.radixPoint,f)?(D(this,J(0)),e.click()):D(this,J(0),J(u()))))}function ca(a){if(!0===O)return O=!1,!0;a=c(this);ba=h().join("");M(this,!1,!1);I(this,h());!0===N(h())&&a.trigger("complete");a.click()}function ma(b){z=c(b);if(z.is(":input")){z.data("_inputmask",
{masksets:e,activeMasksetIndex:w,opts:a,isRTL:!1});a.showTooltip&&z.prop("title",g().mask);g().greedy=g().greedy?g().greedy:0==g().repeat;if(null!=z.attr("maxLength")){var k=z.prop("maxLength");-1<k&&c.each(e,function(a,b){"object"==typeof b&&"*"==b.repeat&&(b.repeat=k)});u()>=k&&-1<k&&(k<r().length&&(r().length=k),0==g().greedy&&(g().repeat=Math.round(k/r().length)),z.prop("maxLength",2*u()))}ja(b);a.numericInput&&(a.isNumeric=a.numericInput);("rtl"==b.dir||a.numericInput&&a.rightAlignNumerics||
a.isNumeric&&a.rightAlignNumerics)&&z.css("text-align","right");if("rtl"==b.dir||a.numericInput){b.dir="ltr";z.removeAttr("dir");var d=z.data("_inputmask");d.isRTL=!0;z.data("_inputmask",d);A=!0}z.unbind(".inputmask");z.removeClass("focus.inputmask");z.closest("form").bind("submit",function(){K!=h().join("")&&z.change()}).bind("reset",function(){setTimeout(function(){z.trigger("setvalue")},0)});z.bind("mouseenter.inputmask",function(){!c(this).hasClass("focus.inputmask")&&a.showMaskOnHover&&this._valueGet()!=
h().join("")&&I(this,h())}).bind("blur.inputmask",function(){var b=c(this),d=this._valueGet(),f=h();b.removeClass("focus.inputmask");K!=h().join("")&&b.change();a.clearMaskOnLostFocus&&""!=d&&(d==r().join("")?this._valueSet(""):S(this));!1===N(f)&&(b.trigger("incomplete"),a.clearIncomplete&&(c.each(e,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1)}),w=0,a.clearMaskOnLostFocus?this._valueSet(""):(f=r().slice(),I(this,f))))}).bind("focus.inputmask",function(){var b=
c(this),d=this._valueGet();a.showMaskOnFocus&&!b.hasClass("focus.inputmask")&&(!a.showMaskOnHover||a.showMaskOnHover&&""==d)&&this._valueGet()!=h().join("")&&I(this,h(),t(g().lastValidPosition));b.addClass("focus.inputmask");K=h().join("")}).bind("mouseleave.inputmask",function(){var b=c(this);a.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||this._valueGet()==b.attr("placeholder")||(this._valueGet()==r().join("")||""==this._valueGet()?this._valueSet(""):S(this)))}).bind("click.inputmask",function(){var b=
this;setTimeout(function(){var d=D(b),e=h();if(d.begin==d.end){var d=A?J(d.begin):d.begin,f=g().lastValidPosition,e=a.isNumeric?!1===a.skipRadixDance&&""!=a.radixPoint&&-1!=c.inArray(a.radixPoint,e)?a.numericInput?t(c.inArray(a.radixPoint,e)):c.inArray(a.radixPoint,e):t(f):t(f);d<e?l(d)?D(b,d):D(b,t(d)):D(b,e)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){D(a,0,t(g().lastValidPosition))},0)}).bind(na+".inputmask dragdrop.inputmask drop.inputmask",function(b){if(!0===
O)return O=!1,!0;var d=this,e=c(d);if("propertychange"==b.type&&d._valueGet().length<=u())return!0;setTimeout(function(){var b=void 0!=a.onBeforePaste?a.onBeforePaste.call(this,d._valueGet()):d._valueGet();M(d,!0,!1,b.split(""),!0);!0===N(h())&&e.trigger("complete");e.click()},0)}).bind("setvalue.inputmask",function(){M(this,!0);K=h().join("");this._valueGet()==r().join("")&&this._valueSet("")}).bind("complete.inputmask",a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",
a.oncleared).bind("keyup.inputmask",la);aa?z.bind("input.inputmask",ca):z.bind("keydown.inputmask",Y).bind("keypress.inputmask",R);oa&&z.bind("input.inputmask",ca);M(b,!0,!1);K=h().join("");var f;try{f=document.activeElement}catch(q){}f===b?(z.addClass("focus.inputmask"),D(b,t(g().lastValidPosition))):a.clearMaskOnLostFocus?h().join("")==r().join("")?b._valueSet(""):S(b):I(b,h());ia(b)}}var A=!1,K=h().join(""),z,ba,T=!1,O=!1,Z=!1;if(void 0!=p)switch(p.action){case "isComplete":return N(p.buffer);
case "unmaskedvalue":return A=p.$input.data("_inputmask").isRTL,fa(p.$input,p.skipDatepickerCheck);case "mask":ma(p.el);break;case "format":return z=c({}),z.data("_inputmask",{masksets:e,activeMasksetIndex:w,opts:a,isRTL:a.numericInput}),a.numericInput&&(a.isNumeric=a.numericInput,A=!0),M(z,!1,!1,p.value.split(""),!0),h().join("")}},m=function(e){function w(a){e.numericInput&&(a=a.split("").reverse().join(""));var g=!1,h=0,l=e.greedy,r=e.repeat;"*"==r&&(l=!1);1==a.length&&0==l&&0!=r&&(e.placeholder=
"");a=c.map(a.split(""),function(a,c){var l=[];if(a==e.escapeChar)g=!0;else if(a!=e.optionalmarker.start&&a!=e.optionalmarker.end||g){var n=e.definitions[a];if(n&&!g)for(var r=0;r<n.cardinality;r++)l.push(e.placeholder.charAt((h+r)%e.placeholder.length));else l.push(a),g=!1;h+=l.length;return l}});for(var m=a.slice(),t=1;t<r&&l;t++)m=m.concat(a.slice());return{mask:m,repeat:r,greedy:l}}function a(a){e.numericInput&&(a=a.split("").reverse().join(""));var g=!1,h=!1,l=!1;return c.map(a.split(""),function(a,
c){var r=[];if(a==e.escapeChar)h=!0;else{if(a!=e.optionalmarker.start||h){if(a!=e.optionalmarker.end||h){var n=e.definitions[a];if(n&&!h){for(var m=n.prevalidator,w=m?m.length:0,p=1;p<n.cardinality;p++){var u=w>=p?m[p-1]:[],v=u.validator,u=u.cardinality;r.push({fn:v?"string"==typeof v?new RegExp(v):new function(){this.test=v}:/./,cardinality:u?u:1,optionality:g,newBlockMarker:1==g?l:!1,offset:0,casing:n.casing,def:n.definitionSymbol||a});1==g&&(l=!1)}r.push({fn:n.validator?"string"==typeof n.validator?
new RegExp(n.validator):new function(){this.test=n.validator}:/./,cardinality:n.cardinality,optionality:g,newBlockMarker:l,offset:0,casing:n.casing,def:n.definitionSymbol||a})}else r.push({fn:null,cardinality:0,optionality:g,newBlockMarker:l,offset:0,casing:null,def:a}),h=!1;l=!1;return r}g=!1}else g=!0;l=!0}})}function m(a){for(var c=a.length,g=0;g<c&&a.charAt(g)!=e.optionalmarker.start;g++);var h=[a.substring(0,g)];g<c&&h.push(a.substring(g+1,c));return h}function g(h,n,p){for(var l=0,y=0,u=n.length,
t=0;t<u&&!(n.charAt(t)==e.optionalmarker.start&&l++,n.charAt(t)==e.optionalmarker.end&&y++,0<l&&l==y);t++);l=[n.substring(0,t)];t<u&&l.push(n.substring(t+1,u));t=m(l[0]);1<t.length?(n=h+t[0]+(e.optionalmarker.start+t[1]+e.optionalmarker.end)+(1<l.length?l[1]:""),-1==c.inArray(n,r)&&""!=n&&(r.push(n),u=w(n),v.push({mask:n,_buffer:u.mask,buffer:u.mask.slice(),tests:a(n),lastValidPosition:-1,greedy:u.greedy,repeat:u.repeat,metadata:p})),n=h+t[0]+(1<l.length?l[1]:""),-1==c.inArray(n,r)&&""!=n&&(r.push(n),
u=w(n),v.push({mask:n,_buffer:u.mask,buffer:u.mask.slice(),tests:a(n),lastValidPosition:-1,greedy:u.greedy,repeat:u.repeat,metadata:p})),1<m(t[1]).length&&g(h+t[0],t[1]+l[1],p),1<l.length&&1<m(l[1]).length&&(g(h+t[0]+(e.optionalmarker.start+t[1]+e.optionalmarker.end),l[1],p),g(h+t[0],l[1],p))):(n=h+l,-1==c.inArray(n,r)&&""!=n&&(r.push(n),u=w(n),v.push({mask:n,_buffer:u.mask,buffer:u.mask.slice(),tests:a(n),lastValidPosition:-1,greedy:u.greedy,repeat:u.repeat,metadata:p})))}var v=[],r=[];c.isFunction(e.mask)&&
(e.mask=e.mask.call(this,e));c.isArray(e.mask)?c.each(e.mask,function(a,c){void 0!=c.mask?g("",c.mask.toString(),c):g("",c.toString())}):g("",e.mask.toString());return e.greedy?v:v.sort(function(a,c){return a.mask.length-c.mask.length})},y=function(e,m,a){return(e=a.aliases[e])?(e.alias&&y(e.alias,void 0,a),c.extend(!0,a,e),c.extend(!0,a,m),!0):!1},C=function(c){var e=document.createElement("input");c="on"+c;var a=c in e;a||(e.setAttribute(c,"return;"),a="function"==typeof e[c]);return a},oa=null!==
navigator.userAgent.match(/msie 10/i),ka=null!==navigator.userAgent.match(/iphone/i),ga=null!==navigator.userAgent.match(/android.*safari.*/i),aa=null!==navigator.userAgent.match(/android.*chrome.*/i),na=C("paste")?"paste":C("input")?"input":"propertychange";c.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},escapeChar:"\\",mask:null,oncomplete:c.noop,onincomplete:c.noop,oncleared:c.noop,repeat:0,greedy:!0,
autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:c.noop,onKeyDown:c.noop,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:c.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,isNumeric:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",
cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],
getMaskLength:function(c,m,a,p,g){g=c.length;m||("*"==a?g=p.length+1:1<a&&(g+=c.length*(a-1)));return g}},escapeRegex:function(c){return c.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")},format:function(e,w){var a=c.extend(!0,{},c.inputmask.defaults,w);y(a.alias,w,a);return v(m(a),0,a,{action:"format",value:e})}};c.fn.inputmask=function(e,w){var a=c.extend(!0,{},c.inputmask.defaults,w),p,g=0;if("string"===typeof e)switch(e){case "mask":return y(a.alias,w,a),
p=m(a),0==p.length?this:this.each(function(){v(c.extend(!0,{},p),0,a,{action:"mask",el:this})});case "unmaskedvalue":var C=c(this);return C.data("_inputmask")?(p=C.data("_inputmask").masksets,g=C.data("_inputmask").activeMasksetIndex,a=C.data("_inputmask").opts,v(p,g,a,{action:"unmaskedvalue",$input:C})):C.val();case "remove":return this.each(function(){var e=c(this);if(e.data("_inputmask")){p=e.data("_inputmask").masksets;g=e.data("_inputmask").activeMasksetIndex;a=e.data("_inputmask").opts;this._valueSet(v(p,
g,a,{action:"unmaskedvalue",$input:e,skipDatepickerCheck:!0}));e.removeData("_inputmask");e.unbind(".inputmask");e.removeClass("focus.inputmask");var h;Object.getOwnPropertyDescriptor&&(h=Object.getOwnPropertyDescriptor(this,"value"));h&&h.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet&&(this.__defineGetter__("value",this._valueGet),this.__defineSetter__("value",this._valueSet));
try{delete this._valueGet,delete this._valueSet}catch(n){this._valueSet=this._valueGet=void 0}}});case "getemptymask":return this.data("_inputmask")?(p=this.data("_inputmask").masksets,g=this.data("_inputmask").activeMasksetIndex,p[g]._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return p=this.data("_inputmask").masksets,g=this.data("_inputmask").activeMasksetIndex,a=this.data("_inputmask").opts,v(p,g,a,{action:"isComplete",
buffer:this[0]._valueGet().split("")});case "getmetadata":if(this.data("_inputmask"))return p=this.data("_inputmask").masksets,g=this.data("_inputmask").activeMasksetIndex,p[g].metadata;break;default:return y(e,w,a)||(a.mask=e),p=m(a),0==p.length?this:this.each(function(){v(c.extend(!0,{},p),g,a,{action:"mask",el:this})})}else{if("object"==typeof e)return a=c.extend(!0,{},c.inputmask.defaults,e),y(a.alias,e,a),p=m(a),0==p.length?this:this.each(function(){v(c.extend(!0,{},p),g,a,{action:"mask",el:this})});
if(void 0==e)return this.each(function(){var e=c(this).attr("data-inputmask");if(e&&""!=e)try{var e=e.replace(RegExp("'","g"),'"'),g=c.parseJSON("{"+e+"}");c.extend(!0,g,w);a=c.extend(!0,{},c.inputmask.defaults,g);y(a.alias,g,a);a.alias=void 0;c(this).inputmask(a)}catch(n){}})}}}})(jQuery);
