(function(d){"object"==typeof exports&&"object"==typeof module?d(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],d):d(CodeMirror)})(function(d){function e(d){var b=[];d.split(" ").forEach(function(a){b.push({name:a})});return b}var f=e("INVERT AND OR XOR 2* 2/ LSHIFT RSHIFT 0= = 0< < > U< MIN MAX 2DROP 2DUP 2OVER 2SWAP ?DUP DEPTH DROP DUP OVER ROT SWAP >R R> R@ + - 1+ 1- ABS NEGATE S>D * M* UM* FM/MOD SM/REM UM/MOD */ */MOD / /MOD MOD HERE , @ ! CELL+ CELLS C, C@ C! CHARS 2@ 2! ALIGN ALIGNED +! ALLOT CHAR [CHAR] [ ] BL FIND EXECUTE IMMEDIATE COUNT LITERAL STATE ; DOES> >BODY EVALUATE SOURCE >IN <# # #S #> HOLD SIGN BASE >NUMBER HEX DECIMAL FILL MOVE . CR EMIT SPACE SPACES TYPE U. .R U.R ACCEPT TRUE FALSE <> U> 0<> 0> NIP TUCK ROLL PICK 2>R 2R@ 2R> WITHIN UNUSED MARKER I J TO COMPILE, [COMPILE] SAVE-INPUT RESTORE-INPUT PAD ERASE 2LITERAL DNEGATE D- D+ D0< D0= D2* D2/ D< D= DMAX DMIN D>S DABS M+ M*/ D. D.R 2ROT DU< CATCH THROW FREE RESIZE ALLOCATE CS-PICK CS-ROLL GET-CURRENT SET-CURRENT FORTH-WORDLIST GET-ORDER SET-ORDER PREVIOUS SEARCH-WORDLIST WORDLIST FIND ALSO ONLY FORTH DEFINITIONS ORDER -TRAILING /STRING SEARCH COMPARE CMOVE CMOVE> BLANK SLITERAL"),
g=e("IF ELSE THEN BEGIN WHILE REPEAT UNTIL RECURSE [IF] [ELSE] [THEN] ?DO DO LOOP +LOOP UNLOOP LEAVE EXIT AGAIN CASE OF ENDOF ENDCASE");d.defineMode("forth",function(){function d(b,a){var c;for(c=b.length-1;0<=c;c--)if(b[c].name===a.toUpperCase())return b[c]}return{startState:function(){return{state:"",base:10,coreWordList:f,immediateWordList:g,wordList:[]}},token:function(b,a){var c;if(b.eatSpace())return null;if(""===a.state){if(b.match(/^(\]|:NONAME)(\s|$)/i))return a.state=" compilation","builtin compilation";
if(c=b.match(/^(\:)\s+(\S+)(\s|$)+/))return a.wordList.push({name:c[2].toUpperCase()}),a.state=" compilation","def"+a.state;if(c=b.match(/^(VARIABLE|2VARIABLE|CONSTANT|2CONSTANT|CREATE|POSTPONE|VALUE|WORD)\s+(\S+)(\s|$)+/i))return a.wordList.push({name:c[2].toUpperCase()}),"def"+a.state;if(c=b.match(/^(\'|\[\'\])\s+(\S+)(\s|$)+/))return"builtin"+a.state}else{if(b.match(/^(\;|\[)(\s)/))return a.state="",b.backUp(1),"builtin compilation";if(b.match(/^(\;|\[)($)/))return a.state="","builtin compilation";
if(b.match(/^(POSTPONE)\s+\S+(\s|$)+/))return"builtin"}if(c=b.match(/^(\S+)(\s+|$)/))return void 0!==d(a.wordList,c[1])?"variable"+a.state:"\\"===c[1]?(b.skipToEnd(),"comment"+a.state):void 0!==d(a.coreWordList,c[1])?"builtin"+a.state:void 0!==d(a.immediateWordList,c[1])?"keyword"+a.state:"("===c[1]?(b.eatWhile(function(a){return")"!==a}),b.eat(")"),"comment"+a.state):".("===c[1]?(b.eatWhile(function(a){return")"!==a}),b.eat(")"),"string"+a.state):'S"'===c[1]||'."'===c[1]||'C"'===c[1]?(b.eatWhile(function(a){return'"'!==
a}),b.eat('"'),"string"+a.state):c[1]-68719476735?"number"+a.state:"atom"+a.state}}});d.defineMIME("text/x-forth","forth")});
