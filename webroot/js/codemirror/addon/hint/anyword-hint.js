(function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)})(function(a){var q=/[\w$]+/;a.registerHelper("hint","anyword",function(g,b){for(var l=b&&b.word||q,r=b&&b.range||500,c=g.getCursor(),d=g.getLine(c.line),m=c.ch,e=m;e&&l.test(d.charAt(e-1));)--e;for(var d=e!=m&&d.slice(e,m),n=b&&b.list||[],p={},l=new RegExp(l.source,"g"),h=-1;1>=h;h+=2)for(var k=c.line,t=Math.min(Math.max(k+
h*r,g.firstLine()),g.lastLine())+h;k!=t;k+=h)for(var u=g.getLine(k),f;f=l.exec(u);)k==c.line&&f[0]===d||d&&0!=f[0].lastIndexOf(d,0)||Object.prototype.hasOwnProperty.call(p,f[0])||(p[f[0]]=!0,n.push(f[0]));return{list:n,from:a.Pos(c.line,e),to:a.Pos(c.line,m)}})});
