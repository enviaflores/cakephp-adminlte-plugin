/*
 Noty Helpers Javascript From JQuery Javascript Library

 Ported by Maksim Pecherskiy.  Original Licensing:

 http://jquery.com/

 Copyright 2011, John Resig
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 Includes Sizzle.js
 http://sizzlejs.com/
 Copyright 2011, The Dojo Foundation
 Released under the MIT, BSD, and GPL Licenses.

 Date: Mon Nov 21 21:11:03 2011 -0500
*/
(function(){function r(a){var b=t[a]={},c,d;a=a.split(/\s+/);c=0;for(d=a.length;c<d;c++)b[a[c]]=!0;return b}function p(a,b,c){var d=b+"defer",f=b+"queue",e=b+"mark",h=jQuery._data(a,d);!h||"queue"!==c&&jQuery._data(a,f)||"mark"!==c&&jQuery._data(a,e)||setTimeout(function(){jQuery._data(a,f)||jQuery._data(a,e)||(jQuery.removeData(a,d,!0),h.fire())},0)}var t={};jQuery.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",jQuery.data(a,b,(jQuery.data(a,b,void 0,!0)||0)+1,!0))},_unmark:function(a,b,c){!0!==
a&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark";(a=a?0:(jQuery.data(b,d,void 0,!0)||1)-1)?jQuery.data(b,d,a,!0):(jQuery.removeData(b,d,!0),p(b,c,"mark"))}},queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var d=jQuery.data(a,b,void 0,!0);c&&(!d||jQuery.isArray(c)?d=jQuery.data(a,b,jQuery.makeArray(c),!0):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=jQuery.queue(a,b),d=c.shift();"inprogress"===d&&(d=c.shift());d&&("fx"===b&&c.unshift("inprogress"),d.call(a,function(){jQuery.dequeue(a,
b)}));c.length||(jQuery.removeData(a,b+"queue",!0),p(a,b,"queue"))}});jQuery.fn.extend({queue:function(a,b){"string"!==typeof a&&(b=a,a="fx");return void 0===b?jQuery.queue(this[0],a):this.each(function(){var c=jQuery.queue(this,a,b);"fx"===a&&"inprogress"!==c[0]&&jQuery.dequeue(this,a)})},dequeue:function(a){return this.each(function(){jQuery.dequeue(this,a)})},delay:function(a,b){a=jQuery.fx?jQuery.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){jQuery.dequeue(c,
b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){function c(){--h||d.resolveWith(f,[f])}"string"!==typeof a&&(a=void 0);a=a||"fx";for(var d=jQuery.Deferred(),f=this,e=f.length,h=1,k=a+"defer",l=a+"queue",m=a+"mark",g;e--;)if(g=jQuery.data(f[e],k,void 0,!0)||(jQuery.data(f[e],l,void 0,!0)||jQuery.data(f[e],m,void 0,!0))&&jQuery.data(f[e],k,jQuery._Deferred(),!0))h++,g.done(c);c();return d.promise()}});jQuery.Callbacks=function(a){a=a?r(a):{};var b=[],c=[],d,f,e,
h,k,l=function(c){var d,f,e,h;d=0;for(f=c.length;d<f;d++)e=c[d],h=jQuery.type(e),"array"===h?l(e):"function"===h&&(a.unique&&g.has(e)||b.push(e))},m=function(q,n){n=n||[];d=!a.memory||[q,n];f=!0;k=e||0;e=0;for(h=b.length;b&&k<h;k++)if(!1===b[k].apply(q,n)&&a.stopOnFalse){d=!0;break}f=!1;b&&(a.once?!0===d?g.disable():b=[]:c&&c.length&&(d=c.shift(),g.fireWith(d[0],d[1])))},g={add:function(){if(b){var a=b.length;l(arguments);f?h=b.length:d&&!0!==d&&(e=a,m(d[0],d[1]))}return this},remove:function(){if(b)for(var d=
arguments,c=0,e=d.length;c<e;c++)for(var g=0;g<b.length&&(d[c]!==b[g]||(f&&g<=h&&(h--,g<=k&&k--),b.splice(g--,1),!a.unique));g++);return this},has:function(a){if(b)for(var c=0,d=b.length;c<d;c++)if(a===b[c])return!0;return!1},empty:function(){b=[];return this},disable:function(){b=c=d=void 0;return this},disabled:function(){return!b},lock:function(){c=void 0;d&&!0!==d||g.disable();return this},locked:function(){return!c},fireWith:function(b,e){c&&(f?a.once||c.push([b,e]):a.once&&d||m(b,e));return this},
fire:function(){g.fireWith(this,arguments);return this},fired:function(){return!!d}};return g};jQuery.fn.extend({promise:function(a,b){function c(){--h||d.resolveWith(f,[f])}"string"!==typeof a&&(a=void 0);a=a||"fx";for(var d=jQuery.Deferred(),f=this,e=f.length,h=1,k=a+"defer",l=a+"queue",m=a+"mark",g;e--;)if(g=jQuery.data(f[e],k,void 0,!0)||(jQuery.data(f[e],l,void 0,!0)||jQuery.data(f[e],m,void 0,!0))&&jQuery.data(f[e],k,jQuery.Callbacks("once memory"),!0))h++,g.add(c);c();return d.promise()}})})();
