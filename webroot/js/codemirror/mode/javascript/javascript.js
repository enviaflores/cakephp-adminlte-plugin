(function(q){"object"==typeof exports&&"object"==typeof module?q(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],q):q(CodeMirror)})(function(q){function ja(q,r,p){return/^(?:operator|sof|keyword c|case|new|export|default|[\[{}\(,;:]|=>)$/.test(r.lastType)||"quasi"==r.lastType&&/\{\s*$/.test(q.string.slice(0,q.pos-(p||0)))}q.defineMode("javascript",function(wa,r){function p(a,c,b){G=a;N=b;return c}function A(a,c){var b=a.next();if('"'==b||"'"==
b)return c.tokenize=xa(b),c.tokenize(a,c);if("."==b&&a.match(/^\d+(?:[eE][+\-]?\d+)?/))return p("number","number");if("."==b&&a.match(".."))return p("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(b))return p(b);if("="==b&&a.eat(">"))return p("=>","operator");if("0"==b&&a.eat(/x/i))return a.eatWhile(/[\da-f]/i),p("number","number");if("0"==b&&a.eat(/o/i))return a.eatWhile(/[0-7]/i),p("number","number");if("0"==b&&a.eat(/b/i))return a.eatWhile(/[01]/i),p("number","number");if(/\d/.test(b))return a.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),
p("number","number");if("/"==b){if(a.eat("*"))return c.tokenize=O,O(a,c);if(a.eat("/"))return a.skipToEnd(),p("comment","comment");if(ja(a,c,1)){a:for(var b=!1,d,e=!1;null!=(d=a.next());){if(!b){if("/"==d&&!e)break a;"["==d?e=!0:e&&"]"==d&&(e=!1)}b=!b&&"\\"==d}a.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/);return p("regexp","string-2")}a.eatWhile(P);return p("operator","operator",a.current())}if("`"==b)return c.tokenize=Y,Y(a,c);if("#"==b)return a.skipToEnd(),p("error","error");if(P.test(b))return">"==
b&&c.lexical&&">"==c.lexical.type||a.eatWhile(P),p("operator","operator",a.current());if(Z.test(b))return a.eatWhile(Z),b=a.current(),(d=ka.propertyIsEnumerable(b)&&ka[b])&&"."!=c.lastType?p(d.type,d.style,b):p("variable","variable",b)}function xa(a){return function(c,b){var d=!1,m;if(Q&&"@"==c.peek()&&c.match(ya))return b.tokenize=A,p("jsonld-keyword","meta");for(;null!=(m=c.next())&&(m!=a||d);)d=!d&&"\\"==m;d||(b.tokenize=A);return p("string","string")}}function O(a,c){for(var b=!1,d;d=a.next();){if("/"==
d&&b){c.tokenize=A;break}b="*"==d}return p("comment","comment")}function Y(a,c){for(var b=!1,d;null!=(d=a.next());){if(!b&&("`"==d||"$"==d&&a.eat("{"))){c.tokenize=A;break}b=!b&&"\\"==d}return p("quasi","string-2",a.current())}function aa(a,b){b.fatArrowAt&&(b.fatArrowAt=null);var c=a.string.indexOf("=>",a.start);if(!(0>c)){if(z){var d=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(a.string.slice(a.start,c));d&&(c=d.index)}for(var d=0,e=!1,c=c-1;0<=c;--c){var g=a.string.charAt(c),f="([{}])".indexOf(g);
if(0<=f&&3>f){if(!d){++c;break}if(0==--d){"("==g&&(e=!0);break}}else if(3<=f&&6>f)++d;else if(Z.test(g))e=!0;else{if(/["'\/]/.test(g))return;if(e&&!d){++c;break}}}e&&!d&&(b.fatArrowAt=c)}}function la(a,c,b,d,e,g){this.indented=a;this.column=c;this.type=b;this.prev=e;this.info=g;null!=d&&(this.align=d)}function k(){for(var a=arguments.length-1;0<=a;a--)e.cc.push(arguments[a])}function b(){k.apply(null,arguments);return!0}function H(a){function c(b){for(;b;b=b.next)if(b.name==a)return!0;return!1}var b=
e.state;e.marked="def";b.context?c(b.localVars)||(b.localVars={name:a,next:b.localVars}):!c(b.globalVars)&&r.globalVars&&(b.globalVars={name:a,next:b.globalVars})}function I(){e.state.context={prev:e.state.context,vars:e.state.localVars};e.state.localVars=za}function J(){e.state.localVars=e.state.context.vars;e.state.context=e.state.context.prev}function h(a,b){var c=function(){var c=e.state,m=c.indented;if("stat"==c.lexical.type)m=c.lexical.indented;else for(var g=c.lexical;g&&")"==g.type&&g.align;g=
g.prev)m=g.indented;c.lexical=new la(m,e.stream.column(),a,null,c.lexical,b)};c.lex=!0;return c}function f(){var a=e.state;a.lexical.prev&&(")"==a.lexical.type&&(a.indented=a.lexical.indented),a.lexical=a.lexical.prev)}function l(a){function c(e){return e==a?b():";"==a?k():b(c)}return c}function t(a,c){return"var"==a?b(h("vardef",c.length),ba,l(";"),f):"keyword a"==a?b(h("form"),ca,t,f):"keyword b"==a?b(h("form"),t,f):"{"==a?b(h("}"),R,f):";"==a?b():"if"==a?("else"==e.state.lexical.info&&e.state.cc[e.state.cc.length-
1]==f&&e.state.cc.pop()(),b(h("form"),ca,t,f,ma)):"function"==a?b(x):"for"==a?b(h("form"),Aa,t,f):"variable"==a?b(h("stat"),Ba):"switch"==a?b(h("form"),ca,h("}","switch"),l("{"),R,f,f):"case"==a?b(n,l(":")):"default"==a?b(l(":")):"catch"==a?b(h("form"),I,l("("),da,l(")"),t,f,J):"class"==a?b(h("form"),na,f):"export"==a?b(h("stat"),Ca,f):"import"==a?b(h("stat"),Da,f):"module"==a?b(h("form"),w,h("}"),l("{"),R,f,f):"type"==a?b(v,l("operator"),v,l(";")):"async"==a?b(t):k(h("stat"),n,l(";"),f)}function n(a){return oa(a,
!1)}function u(a){return oa(a,!0)}function ca(a){return"("!=a?k():b(h(")"),n,l(")"),f)}function oa(a,c){if(e.state.fatArrowAt==e.stream.start){var m=c?pa:qa;if("("==a)return b(I,h(")"),y(w,")"),f,l("=>"),m,J);if("variable"==a)return k(I,w,l("=>"),m,J)}m=c?K:B;return Ea.hasOwnProperty(a)?b(m):"function"==a?b(x,m):"class"==a?b(h("form"),Fa,f):"keyword c"==a||"async"==a?b(c?Ga:ea):"("==a?b(h(")"),ea,l(")"),f,m):"operator"==a||"spread"==a?b(c?u:n):"["==a?b(h("]"),Ha,f,m):"{"==a?L(fa,"}",null,m):"quasi"==
a?k(S,m):"new"==a?b(Ia(c)):b()}function ea(a){return a.match(/[;\}\)\],]/)?k():k(n)}function Ga(a){return a.match(/[;\}\)\],]/)?k():k(u)}function B(a,c){return","==a?b(n):K(a,c,!1)}function K(a,c,e){var d=0==e?B:K,m=0==e?n:u;if("=>"==a)return b(I,e?pa:qa,J);if("operator"==a)return/\+\+|--/.test(c)?b(d):"?"==c?b(n,l(":"),m):b(m);if("quasi"==a)return k(S,d);if(";"!=a){if("("==a)return L(u,")","call",d);if("."==a)return b(Ja,d);if("["==a)return b(h("]"),ea,l("]"),f,d)}}function S(a,c){return"quasi"!=
a?k():"${"!=c.slice(c.length-2)?b(S):b(n,Ka)}function Ka(a){if("}"==a)return e.marked="string-2",e.state.tokenize=Y,b(S)}function qa(a){aa(e.stream,e.state);return k("{"==a?t:n)}function pa(a){aa(e.stream,e.state);return k("{"==a?t:u)}function Ia(a){return function(c){return"."==c?b(a?La:Ma):k(a?u:n)}}function Ma(a,c){if("target"==c)return e.marked="keyword",b(B)}function La(a,c){if("target"==c)return e.marked="keyword",b(K)}function Ba(a){return":"==a?b(f,t):k(B,l(";"),f)}function Ja(a){if("variable"==
a)return e.marked="property",b()}function fa(a,c){if("async"==a)return e.marked="property",b(fa);if("variable"==a||"keyword"==e.style)return e.marked="property","get"==c||"set"==c?b(Na):b(C);if("number"==a||"string"==a)return e.marked=Q?"property":e.style+" property",b(C);if("jsonld-keyword"==a)return b(C);if("modifier"==a)return b(fa);if("["==a)return b(n,l("]"),C);if("spread"==a)return b(n);if(":"==a)return k(C)}function Na(a){if("variable"!=a)return k(C);e.marked="property";return b(x)}function C(a){if(":"==
a)return b(u);if("("==a)return k(x)}function y(a,c,m){function d(f,g){if(m?-1<m.indexOf(f):","==f){var h=e.state.lexical;"call"==h.info&&(h.pos=(h.pos||0)+1);return b(function(b,d){return b==c||d==c?k():k(a)},d)}return f==c||g==c?b():b(l(c))}return function(e,m){return e==c||m==c?b():k(a,d)}}function L(a,c,m){for(var d=3;d<arguments.length;d++)e.cc.push(arguments[d]);return b(h(c,m),y(a,c),f)}function R(a){return"}"==a?b():k(t,R)}function T(a,c){if(z){if(":"==a)return b(v);if("?"==c)return b(T)}}
function v(a){if("variable"==a)return e.marked="variable-3",b(U);if("string"==a||"number"==a||"atom"==a)return b(U);if("{"==a)return b(h("}"),y(ga,"}",",;"),f);if("("==a)return b(y(ra,")"),Oa)}function Oa(a){if("=>"==a)return b(v)}function ga(a,c){if("variable"==a||"keyword"==e.style)return e.marked="property",b(ga);if("?"==c)return b(ga);if(":"==a)return b(v)}function ra(a){if("variable"==a)return b(ra);if(":"==a)return b(v)}function U(a,c){if("<"==c)return b(h(">"),y(v,">"),f,U);if("|"==c||"."==
a)return b(v);if("["==a)return b(l("]"),U)}function ba(){return k(w,T,M,Pa)}function w(a,c){if("modifier"==a)return b(w);if("variable"==a)return H(c),b();if("spread"==a)return b(w);if("["==a)return L(w,"]");if("{"==a)return L(Qa,"}")}function Qa(a,c){if("variable"==a&&!e.stream.match(/^\s*:/,!1))return H(c),b(M);"variable"==a&&(e.marked="property");return"spread"==a?b(w):"}"==a?k():b(l(":"),w,M)}function M(a,c){if("="==c)return b(u)}function Pa(a){if(","==a)return b(ba)}function ma(a,c){if("keyword b"==
a&&"else"==c)return b(h("form","else"),t,f)}function Aa(a){if("("==a)return b(h(")"),Ra,l(")"),f)}function Ra(a){return"var"==a?b(ba,l(";"),V):";"==a?b(V):"variable"==a?b(Sa):k(n,l(";"),V)}function Sa(a,c){return"in"==c||"of"==c?(e.marked="keyword",b(n)):b(B,V)}function V(a,c){return";"==a?b(sa):"in"==c||"of"==c?(e.marked="keyword",b(n)):k(n,l(";"),sa)}function sa(a){")"!=a&&b(n)}function x(a,c){if("*"==c)return e.marked="keyword",b(x);if("variable"==a)return H(c),b(x);if("("==a)return b(I,h(")"),
y(da,")"),f,T,t,J)}function da(a){return"spread"==a?b(da):k(w,T,M)}function Fa(a,b){return"variable"==a?na(a,b):W(a,b)}function na(a,c){if("variable"==a)return H(c),b(W)}function W(a,c){if("<"==c)return b(h(">"),y(v,">"),f,W);if("extends"==c||"implements"==c||z&&","==a)return b(z?v:n,W);if("{"==a)return b(h("}"),D,f)}function D(a,c){if("variable"==a||"keyword"==e.style){if(("async"==c||"static"==c||"get"==c||"set"==c||z&&("public"==c||"private"==c||"protected"==c||"readonly"==c||"abstract"==c))&&
e.stream.match(/^\s+[\w$\xa1-\uffff]/,!1))return e.marked="keyword",b(D);e.marked="property";return b(z?ha:x,D)}if("["==a)return b(n,l("]"),z?ha:x,D);if("*"==c)return e.marked="keyword",b(D);if(";"==a)return b(D);if("}"==a)return b()}function ha(a,c){return"?"==c?b(ha):":"==a?b(v,M):"="==c?b(u):k(x)}function Ca(a,c){return"*"==c?(e.marked="keyword",b(ia,l(";"))):"default"==c?(e.marked="keyword",b(n,l(";"))):"{"==a?b(y(ta,"}"),ia,l(";")):k(t)}function ta(a,c){if("as"==c)return e.marked="keyword",b(l("variable"));
if("variable"==a)return k(u,ta)}function Da(a){return"string"==a?b():k(X,ua,ia)}function X(a,c){if("{"==a)return L(X,"}");"variable"==a&&H(c);"*"==c&&(e.marked="keyword");return b(Ta)}function ua(a){if(","==a)return b(X,ua)}function Ta(a,c){if("as"==c)return e.marked="keyword",b(X)}function ia(a,c){if("from"==c)return e.marked="keyword",b(n)}function Ha(a){return"]"==a?b():k(y(u,"]"))}var E=wa.indentUnit,va=r.statementIndent,Q=r.jsonld,F=r.json||Q,z=r.typescript,Z=r.wordCharacters||/[\w$\xa1-\uffff]/,
ka=function(){function a(a){return{type:a,style:"keyword"}}var b=a("keyword a"),e=a("keyword b"),d=a("keyword c"),f=a("operator"),g={type:"atom",style:"atom"},b={"if":a("if"),"while":b,"with":b,"else":e,"do":e,"try":e,"finally":e,"return":d,"break":d,"continue":d,"new":a("new"),"delete":d,"throw":d,"debugger":d,"var":a("var"),"const":a("var"),let:a("var"),"function":a("function"),"catch":a("catch"),"for":a("for"),"switch":a("switch"),"case":a("case"),"default":a("default"),"in":f,"typeof":f,"instanceof":f,
"true":g,"false":g,"null":g,undefined:g,NaN:g,Infinity:g,"this":a("this"),"class":a("class"),"super":a("atom"),yield:d,"export":a("export"),"import":a("import"),"extends":d,await:d,async:a("async")};if(z){var e={type:"variable",style:"variable-3"},d={"interface":a("class"),"implements":d,namespace:d,module:a("module"),"enum":a("module"),type:a("type"),"public":a("modifier"),"private":a("modifier"),"protected":a("modifier"),"abstract":a("modifier"),as:f,string:e,number:e,"boolean":e,any:e},h;for(h in d)b[h]=
d[h]}return b}(),P=/[+\-*&%=<>!?|~^]/,ya=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,G,N,Ea={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,"this":!0,"jsonld-keyword":!0},e={state:null,column:null,marked:null,cc:null},za={name:"this",next:{name:"arguments"}};f.lex=!0;return{startState:function(a){a={tokenize:A,lastType:"sof",cc:[],lexical:new la((a||0)-E,0,"block",!1),localVars:r.localVars,context:r.localVars&&{vars:r.localVars},indented:a||0};r.globalVars&&
"object"==typeof r.globalVars&&(a.globalVars=r.globalVars);return a},token:function(a,b){a.sol()&&(b.lexical.hasOwnProperty("align")||(b.lexical.align=!1),b.indented=a.indentation(),aa(a,b));if(b.tokenize!=O&&a.eatSpace())return null;var c=b.tokenize(a,b);if("comment"==G)return c;b.lastType="operator"!=G||"++"!=N&&"--"!=N?G:"incdec";a:{var d=G,f=N,g=b.cc;e.state=b;e.stream=a;e.marked=null;e.cc=g;e.style=c;b.lexical.hasOwnProperty("align")||(b.lexical.align=!0);for(;;)if((g.length?g.pop():F?n:t)(d,
f)){for(;g.length&&g[g.length-1].lex;)g.pop()();if(e.marked){c=e.marked;break a}if(d="variable"==d)b:{for(d=b.localVars;d;d=d.next)if(d.name==f){d=!0;break b}for(g=b.context;g;g=g.prev)for(d=g.vars;d;d=d.next)if(d.name==f){d=!0;break b}d=void 0}if(d){c="variable-2";break a}break a}}return c},indent:function(a,b){if(a.tokenize==O)return q.Pass;if(a.tokenize!=A)return 0;var c=b&&b.charAt(0),d=a.lexical,e;if(!/^\s*else\b/.test(b))for(var g=a.cc.length-1;0<=g;--g){var h=a.cc[g];if(h==f)d=d.prev;else if(h!=
ma)break}for(;!("stat"!=d.type&&"form"!=d.type||"}"!=c&&(!(e=a.cc[a.cc.length-1])||e!=B&&e!=K||/^[,\.=+\-*:?[\(]/.test(b)));)d=d.prev;va&&")"==d.type&&"stat"==d.prev.type&&(d=d.prev);e=d.type;g=c==e;return"vardef"==e?d.indented+("operator"==a.lastType||","==a.lastType?d.info+1:0):"form"==e&&"{"==c?d.indented:"form"==e?d.indented+E:"stat"==e?(c=d.indented,d="operator"==a.lastType||","==a.lastType||P.test(b.charAt(0))||/[,.]/.test(b.charAt(0)),c+(d?va||E:0)):"switch"!=d.info||g||0==r.doubleIndentSwitch?
d.align?d.column+(g?0:1):d.indented+(g?0:E):d.indented+(/^(?:case|default)\b/.test(b)?E:2*E)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:F?null:"/*",blockCommentEnd:F?null:"*/",lineComment:F?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:F?"json":"javascript",jsonldMode:Q,jsonMode:F,expressionAllowed:ja,skipExpression:function(a){var b=a.cc[a.cc.length-1];b!=n&&b!=u||a.cc.pop()}}});q.registerHelper("wordChars","javascript",/[\w$]/);q.defineMIME("text/javascript",
"javascript");q.defineMIME("text/ecmascript","javascript");q.defineMIME("application/javascript","javascript");q.defineMIME("application/x-javascript","javascript");q.defineMIME("application/ecmascript","javascript");q.defineMIME("application/json",{name:"javascript",json:!0});q.defineMIME("application/x-json",{name:"javascript",json:!0});q.defineMIME("application/ld+json",{name:"javascript",jsonld:!0});q.defineMIME("text/typescript",{name:"javascript",typescript:!0});q.defineMIME("application/typescript",
{name:"javascript",typescript:!0})});