(function(){function b(a){test.mode(a,g,Array.prototype.slice.call(arguments,1))}function f(a,b,c){b=[b];for(var d=1;d<=c;++d)b[d]=a.join(b[d-1]);return b}var g=CodeMirror.getMode({indentUnit:2},"php");b("simple_test",'[meta <?php] [keyword echo] [string "aaa"]; [meta ?>]');b("variable_interpolation_non_alphanumeric","[meta <?php]",'[keyword echo] [string "aaa$~$!$@$#$$$%$^$&$*$($)$.$<$>$/$\\$}$\\"$:$;$?$|$[[$]]$+$=aaa"]',"[meta ?>]");b("variable_interpolation_digits","[meta <?php]",'[keyword echo] [string "aaa$1$2$3$4$5$6$7$8$9$0aaa"]',
"[meta ?>]");b("variable_interpolation_simple_syntax_1","[meta <?php]",'[keyword echo] [string "aaa][variable-2 $aaa][string .aaa"];',"[meta ?>]");b("variable_interpolation_simple_syntax_2","[meta <?php]",'[keyword echo] [string "][variable-2 $aaaa][[',"[number 2]",']][string aa"];','[keyword echo] [string "][variable-2 $aaaa][[',"[number 2345]",']][string aa"];','[keyword echo] [string "][variable-2 $aaaa][[',"[number 2.3]",']][string aa"];','[keyword echo] [string "][variable-2 $aaaa][[',"[variable aaaaa]",
']][string aa"];','[keyword echo] [string "][variable-2 $aaaa][[',"[variable-2 $aaaaa]",']][string aa"];','[keyword echo] [string "1aaa][variable-2 $aaaa][[',"[number 2]",']][string aa"];','[keyword echo] [string "aaa][variable-2 $aaaa][[',"[number 2345]",']][string aa"];','[keyword echo] [string "aaa][variable-2 $aaaa][[',"[number 2.3]",']][string aa"];','[keyword echo] [string "aaa][variable-2 $aaaa][[',"[variable aaaaa]",']][string aa"];','[keyword echo] [string "aaa][variable-2 $aaaa][[',"[variable-2 $aaaaa]",
']][string aa"];',"[meta ?>]");b("variable_interpolation_simple_syntax_3","[meta <?php]",'[keyword echo] [string "aaa][variable-2 $aaaa]->[variable aaaaa][string .aaaaaa"];','[keyword echo] [string "aaa][variable-2 $aaaa][string ->][variable-2 $aaaaa][string .aaaaaa"];','[keyword echo] [string "aaa][variable-2 $aaaa]->[variable aaaaa][string [[2]].aaaaaa"];','[keyword echo] [string "aaa][variable-2 $aaaa]->[variable aaaaa][string ->aaaa2.aaaaaa"];',"[meta ?>]");b("variable_interpolation_escaping",
"[meta <?php] [comment /* Escaping */]",'[keyword echo] [string "aaa\\$aaaa->aaa.aaa"];','[keyword echo] [string "aaa\\$aaaa[[2]]aaa.aaa"];','[keyword echo] [string "aaa\\$aaaa[[asd]]aaa.aaa"];','[keyword echo] [string "aaa{\\$aaaa->aaa.aaa"];','[keyword echo] [string "aaa{\\$aaaa[[2]]aaa.aaa"];','[keyword echo] [string "aaa{\\aaaaa[[asd]]aaa.aaa"];','[keyword echo] [string "aaa\\${aaaa->aaa.aaa"];','[keyword echo] [string "aaa\\${aaaa[[2]]aaa.aaa"];','[keyword echo] [string "aaa\\${aaaa[[asd]]aaa.aaa"];',
"[meta ?>]");b("variable_interpolation_complex_syntax_1","[meta <?php]",'[keyword echo] [string "aaa][variable-2 $]{[variable aaaa]}[string ->aaa.aaa"];','[keyword echo] [string "aaa][variable-2 $]{[variable-2 $aaaa]}[string ->aaa.aaa"];','[keyword echo] [string "aaa][variable-2 $]{[variable-2 $aaaa][[',"  [number 42]",']]}[string ->aaa.aaa"];','[keyword echo] [string "aaa][variable-2 $]{[variable aaaa][meta ?>]aaaaaa');b("variable_interpolation_complex_syntax_2","[meta <?php] [comment /* Monsters */]",
'[keyword echo] [string "][variable-2 $]{[variable aaa][comment /*}?>} $aaa<?php } */]}[string ->aaa.aaa"];','[keyword echo] [string "][variable-2 $]{[variable aaa][comment /*}?>*/][[','  [string "aaa][variable-2 $aaa][string {}][variable-2 $]{[variable aaa]}[string "]',']]}[string ->aaa.aaa"];','[keyword echo] [string "][variable-2 $]{[variable aaa][comment /*} } $aaa } */]}[string ->aaa.aaa"];');var a=f(['[string "][variable-2 $]{[variable aaa] [operator +] ','}[string "]'],'[comment /* }?>} */] [string "aaa][variable-2 $aaa][string .aaa"]',
10);b("variable_interpolation_complex_syntax_3_1","[meta <?php] [comment /* Recursive monsters */]","[keyword echo] "+a[4]+";","[keyword echo] "+a[7]+";","[keyword echo] "+a[8]+";","[keyword echo] "+a[5]+";","[keyword echo] "+a[1]+";","[keyword echo] "+a[6]+";","[keyword echo] "+a[9]+";","[keyword echo] "+a[0]+";","[keyword echo] "+a[10]+";","[keyword echo] "+a[2]+";","[keyword echo] "+a[3]+";",'[keyword echo] [string "end"];',"[meta ?>]");var c=f(['[string "a][variable-2 $]{[variable aaa] [operator +] ',
" [operator +] ",'}[string .a"]'],'[comment /* }?>{{ */] [string "a?>}{{aa][variable-2 $aaa][string .a}a?>a"]',5);b("variable_interpolation_complex_syntax_3_2","[meta <?php] [comment /* Recursive monsters 2 */]","[keyword echo] "+c[0]+";","[keyword echo] "+c[1]+";","[keyword echo] "+c[5]+";","[keyword echo] "+c[4]+";","[keyword echo] "+c[2]+";","[keyword echo] "+c[3]+";",'[keyword echo] [string "end"];',"[meta ?>]");a=function(a,b,c,d,f){d=[d];for(var e=1;e<=f;++e)d[e]=c[0]+a[e-1]+c[1]+b[e-1]+c[2]+
d[e-1]+c[3];return d}(a,c,['[string "a][variable-2 $]{[variable aaa] [operator +] '," [operator +] "," [operator +] ",'}[string .a"]'],'[comment /* }?>{{ */] [string "a?>}{{aa][variable-2 $aaa][string .a}a?>a"]',4);b("variable_interpolation_complex_syntax_3_3","[meta <?php] [comment /* Recursive monsters 2 */]","[keyword echo] "+a[4]+";","[keyword echo] "+a[0]+";","[keyword echo] "+a[3]+";","[keyword echo] "+a[1]+";","[keyword echo] "+a[2]+";",'[keyword echo] [string "end"];',"[meta ?>]");b("variable_interpolation_heredoc",
"[meta <?php]","[string <<<here]","[string doc ][variable-2 $]{[variable yay]}[string more]","[string here]; [comment // normal]")})();
