(function(b){"object"==typeof exports&&"object"==typeof module?b(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],b):b(CodeMirror)})(function(b){b.defineMode("properties",function(){return{token:function(d,a){var b=d.sol()||a.afterSection,c=d.eol();a.afterSection=!1;b&&(a.nextMultiline?(a.inMultiline=!0,a.nextMultiline=!1):a.position="def");c&&!a.nextMultiline&&(a.inMultiline=!1,a.position="def");if(b)for(;d.eatSpace(););c=d.next();if(!b||"#"!==
c&&"!"!==c&&";"!==c){if(b&&"["===c)return a.afterSection=!0,d.skipTo("]"),d.eat("]"),"header";if("="===c||":"===c)return a.position="quote",null;"\\"===c&&"quote"===a.position&&d.eol()&&(a.nextMultiline=!0)}else return a.position="comment",d.skipToEnd(),"comment";return a.position},startState:function(){return{position:"def",nextMultiline:!1,inMultiline:!1,afterSection:!1}}}});b.defineMIME("text/x-properties","properties");b.defineMIME("text/x-ini","properties")});
