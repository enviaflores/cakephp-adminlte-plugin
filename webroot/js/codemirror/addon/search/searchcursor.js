var $jscomp={scope:{},findInternal:function(a,g,c){a instanceof String&&(a=String(a));for(var h=a.length,b=0;b<h;b++){var d=a[b];if(g.call(c,d,b,a))return{i:b,v:d}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,g,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[g]=c.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,g,c,h){if(g){c=$jscomp.global;a=a.split(".");for(h=0;h<a.length-1;h++){var b=a[h];b in c||(c[b]={});c=c[b]}a=a[a.length-1];h=c[a];g=g(h);g!=h&&null!=g&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:g})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).v}},"es6-impl","es3");
(function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)})(function(a){function g(b,a,e,m){this.atOccurrence=!1;this.doc=b;null==m&&"string"==typeof a&&(m=!1);e=e?b.clipPos(e):h(0,0);this.pos={from:e,to:e};if("string"!=typeof a)a.global||(a=new RegExp(a.source,a.ignoreCase?"ig":"g")),this.matches=function(e,k){if(e){a.lastIndex=0;for(var d=b.getLine(k.line).slice(0,k.ch),
l=0,f,g;;){a.lastIndex=l;l=a.exec(d);if(!l)break;f=l;g=f.index;l=f.index+(f[0].length||1);if(l==d.length)break}(l=f&&f[0].length||0)||(0==g&&0==d.length?f=void 0:g!=b.getLine(k.line).length&&l++)}else a.lastIndex=k.ch,d=b.getLine(k.line),l=(f=a.exec(d))&&f[0].length||0,g=f&&f.index,g+l==d.length||l||(l=1);if(f&&l)return{from:h(k.line,g),to:h(k.line,g+l),match:f}};else{var d=a;m&&(a=a.toLowerCase());var g=m?function(a){return a.toLowerCase()}:function(a){return a},n=a.split("\n");if(1==n.length)this.matches=
a.length?function(e,k){if(e){var m=b.getLine(k.line).slice(0,k.ch),l=g(m),f=l.lastIndexOf(a);if(-1<f)return f=c(m,l,f),{from:h(k.line,f),to:h(k.line,f+d.length)}}else if(m=b.getLine(k.line).slice(k.ch),l=g(m),f=l.indexOf(a),-1<f)return f=c(m,l,f)+k.ch,{from:h(k.line,f),to:h(k.line,f+d.length)}}:function(){};else{var p=d.split("\n");this.matches=function(a,d){var e=n.length-1;if(a){if(!(d.line-(n.length-1)<b.firstLine()||g(b.getLine(d.line).slice(0,p[e].length))!=n[n.length-1])){for(var m=h(d.line,
p[e].length),f=d.line-1,c=e-1;1<=c;--c,--f)if(n[c]!=g(b.getLine(f)))return;var c=b.getLine(f),k=c.length-p[0].length;return g(c.slice(k))!=n[0]?void 0:{from:h(f,k),to:m}}}else if(!(d.line+(n.length-1)>b.lastLine())&&(c=b.getLine(d.line),k=c.length-p[0].length,g(c.slice(k))==n[0])){m=h(d.line,k);f=d.line+1;for(c=1;c<e;++c,++f)if(n[c]!=g(b.getLine(f)))return;return g(b.getLine(f).slice(0,p[e].length))!=n[e]?void 0:{from:m,to:h(f,p[e].length)}}}}}}function c(a,d,e){if(a.length==d.length)return e;for(d=
Math.min(e,a.length);;){var b=a.slice(0,d).toLowerCase().length;if(b<e)++d;else if(b>e)--d;else return d}}var h=a.Pos;g.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(a){function d(a){a=h(a,0);e.pos={from:a,to:a};return e.atOccurrence=!1}for(var e=this,b=this.doc.clipPos(a?this.pos.from:this.pos.to);;){if(this.pos=this.matches(a,b))return this.atOccurrence=!0,this.pos.match||!0;if(a){if(!b.line)return d(0);b=h(b.line-1,this.doc.getLine(b.line-
1).length)}else{var c=this.doc.lineCount();if(b.line==c-1)return d(c);b=h(b.line+1,0)}}},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(b,d){if(this.atOccurrence){var e=a.splitLines(b);this.doc.replaceRange(e,this.pos.from,this.pos.to,d);this.pos.to=h(this.pos.from.line+e.length-1,e[e.length-1].length+(1==e.length?this.pos.from.ch:0))}}};a.defineExtension("getSearchCursor",function(a,d,e){return new g(this.doc,a,d,
e)});a.defineDocExtension("getSearchCursor",function(a,d,e){return new g(this,a,d,e)});a.defineExtension("selectMatches",function(b,d){for(var e=[],c=this.getSearchCursor(b,this.getCursor("from"),d);c.findNext()&&!(0<a.cmpPos(c.to(),this.getCursor("to")));)e.push({anchor:c.from(),head:c.to()});e.length&&this.setSelections(e,0)})});
