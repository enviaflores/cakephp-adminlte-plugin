/*
 Copyright 2011, Ben Lin (http://dreamerslab.com/)
 Licensed under the MIT License (LICENSE.txt).

 Version: 1.0.7

 Requires: 
 jQuery 1.3.0+, 
 jQuery Center plugin 1.0.0+ https://github.com/dreamerslab/jquery.center
*/
(function(b,q){var l={},h=0,m,n=[function(){}];b.msg=function(){var c,p,e,k,a,f,g;e=[].shift.call(arguments);k={}.toString.call(e);a=b.extend({afterBlock:function(){},autoUnblock:!0,center:{topPercentage:.4},css:{},clickUnblock:!0,content:"Please wait...",fadeIn:200,fadeOut:300,bgPath:"",klass:"black-on-white",method:"appendTo",target:"body",timeOut:2400,z:1E3},l);"[object Object]"===k&&b.extend(a,e);f={unblock:function(){c=b("#jquery-msg-overlay").fadeOut(a.fadeOut,function(){n[a.msgID](c);c.remove()});
clearTimeout(m)}};g={unblock:function(d,b){a.msgID=void 0===b?h:b;setTimeout(function(){f.unblock()},void 0===d?0:d)},replace:function(d){if("[object String]"!=={}.toString.call(d))throw"$.msg('replace'); error: second argument has to be a string";b("#jquery-msg-content").empty().html(d).center(a.center)},overwriteGlobal:function(a,b){l[a]=b}};h--;a.msgID=void 0===a.msgID?h:a.msgID;n[a.msgID]=void 0===a.beforeUnblock?function(){}:a.beforeUnblock;"[object String]"===k?g[e].apply(g,arguments):(c=b('<div id="jquery-msg-overlay" class="'+
a.klass+'" style="position:absolute; z-index:'+a.z+"; top:0px; right:0px; left:0px; height:"+b(q).height()+'px;"><img src="'+a.bgPath+'blank.gif" id="jquery-msg-bg" style="width: 100%; height: 100%; top: 0px; left: 0px;"/><div id="jquery-msg-content" class="jquery-msg-content" style="position:absolute;">'+a.content+"</div></div>"),c[a.method](a.target),p=b("#jquery-msg-content").center(a.center).css(a.css).hide(),c.hide().fadeIn(a.fadeIn,function(){p.fadeIn("fast").children().andSelf().bind("click",
function(a){a.stopPropagation()});a.afterBlock.call(g,c);a.clickUnblock&&c.bind("click",function(a){a.stopPropagation();f.unblock()});a.autoUnblock&&(m=setTimeout(f.unblock,a.timeOut))}));return this}})(jQuery,document);
