(function(c){"object"==typeof exports&&"object"==typeof module?c(require("../../lib/codemirror"),require("../javascript/javascript")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../javascript/javascript"],c):c(CodeMirror)})(function(c){c.defineMode("pegjs",function(h){var f=c.getMode(h,"javascript");return{startState:function(){return{inString:!1,stringType:null,inComment:!1,inCharacterClass:!1,braced:0,lhs:!0,localState:null}},token:function(a,b){!a||b.inString||b.inComment||
'"'!=a.peek()&&"'"!=a.peek()||(b.stringType=a.peek(),a.next(),b.inString=!0);b.inString||b.inComment||!a.match(/^\/\*/)||(b.inComment=!0);if(b.inString){for(;b.inString&&!a.eol();)a.peek()===b.stringType?(a.next(),b.inString=!1):"\\"===a.peek()?(a.next(),a.next()):a.match(/^.[^\\\"\']*/);return b.lhs?"property string":"string"}if(b.inComment){for(;b.inComment&&!a.eol();)a.match(/\*\//)?b.inComment=!1:a.match(/^.[^\*]*/);return"comment"}if(b.inCharacterClass)for(;b.inCharacterClass&&!a.eol();)a.match(/^[^\]\\]+/)||
a.match(/^\\./)||(b.inCharacterClass=!1);else{if("["===a.peek())return a.next(),b.inCharacterClass=!0,"bracket";if(a.match(/^\/\//))return a.skipToEnd(),"comment";if(b.braced||"{"===a.peek()){null===b.localState&&(b.localState=c.startState(f));var g=f.token(a,b.localState),e=a.current();if(!g)for(var d=0;d<e.length;d++)"{"===e[d]?b.braced++:"}"===e[d]&&b.braced--;return g}if(a.match(/^[a-zA-Z_][a-zA-Z0-9_]*/))return":"===a.peek()?"variable":"variable-2";if(-1!=["[","]","(",")"].indexOf(a.peek()))return a.next(),
"bracket";a.eatSpace()||a.next()}return null}}},"javascript")});