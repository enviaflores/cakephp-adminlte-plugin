var $jscomp={scope:{},findInternal:function(e,c,f){e instanceof String&&(e=String(e));for(var h=e.length,l=0;l<h;l++){var n=e[l];if(c.call(f,n,l,e))return{i:l,v:n}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,c,f){if(f.get||f.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[c]=f.value)};
$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(e,c,f,h){if(c){f=$jscomp.global;e=e.split(".");for(h=0;h<e.length-1;h++){var l=e[h];l in f||(f[l]={});f=f[l]}e=e[e.length-1];h=f[e];c=c(h);c!=h&&null!=c&&$jscomp.defineProperty(f,e,{configurable:!0,writable:!0,value:c})}};
$jscomp.polyfill("Array.prototype.find",function(e){return e?e:function(c,e){return $jscomp.findInternal(this,c,e).v}},"es6-impl","es3");
(function(e,c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?module.exports=c(require("jquery")):e.bootbox=c(e.jQuery)})(this,function init(c,f){function h(a,b,k){a.stopPropagation();a.preventDefault();c.isFunction(k)&&!1===k.call(b,a)||b.modal("hide")}function l(a){var b,c=0;for(b in a)c++;return c}function n(a,b){var k=0;c.each(a,function(a,c){b(a,c,k++)})}function x(a){var b,k;if("object"!==typeof a)throw Error("Please supply an object of options");if(!a.message)throw Error("Please specify a message");
a=c.extend({},q,a);a.buttons||(a.buttons={});b=a.buttons;k=l(b);n(b,function(a,g,f){c.isFunction(g)&&(g=b[a]={callback:g});if("object"!==c.type(g))throw Error("button with key "+a+" must be an object");g.label||(g.label=a);g.className||(g.className=2>=k&&f===k-1?"btn-primary":"btn-default")});return a}function y(a,b){var c=a.length,d={};if(1>c||2<c)throw Error("Invalid argument length");2===c||"string"===typeof a[0]?(d[b[0]]=a[0],d[b[1]]=a[1]):d=a[0];return d}function t(a,b,k){return c.extend(!0,
{},a,y(b,k))}function u(a,b,c,d){a={className:"bootbox-"+a,buttons:v.apply(null,b)};return w(t(a,d,c),b)}function v(){for(var a={},b=0,c=arguments.length;b<c;b++){var d=arguments[b],g=d.toLowerCase(),d=d.toUpperCase(),f=p[q.locale];a[g]={label:f?f[d]:p.en[d]}}return a}function w(a,b){var c={};n(b,function(a,b){c[b]=!0});n(a.buttons,function(a){if(c[a]===f)throw Error("button key "+a+" is not allowed (options are "+b.join("\n")+")");});return a}var r={text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
textarea:"<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",date:"<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
time:"<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",number:"<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",password:"<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"},q={locale:"en",backdrop:"static",animate:!0,className:null,closeButton:!0,show:!0,container:"body"},m={alert:function(){var a;a=u("alert",["ok"],["message","callback"],arguments);if(a.callback&&
!c.isFunction(a.callback))throw Error("alert requires callback property to be a function when provided");a.buttons.ok.callback=a.onEscape=function(){return c.isFunction(a.callback)?a.callback.call(this):!0};return m.dialog(a)},confirm:function(){var a;a=u("confirm",["cancel","confirm"],["message","callback"],arguments);a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,!1)};a.buttons.confirm.callback=function(){return a.callback.call(this,!0)};if(!c.isFunction(a.callback))throw Error("confirm requires a callback");
return m.dialog(a)},prompt:function(){var a,b,k,d,g,h;d=c("<form class='bootbox-form'></form>");b={className:"bootbox-prompt",buttons:v("cancel","confirm"),value:"",inputType:"text"};a=w(t(b,arguments,["title","callback"]),["cancel","confirm"]);b=a.show===f?!0:a.show;a.message=d;a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,null)};a.buttons.confirm.callback=function(){var b;switch(a.inputType){case "text":case "textarea":case "email":case "select":case "date":case "time":case "number":case "password":b=
g.val();break;case "checkbox":var d=g.find("input:checked");b=[];n(d,function(a,d){b.push(c(d).val())})}return a.callback.call(this,b)};a.show=!1;if(!a.title)throw Error("prompt requires a title");if(!c.isFunction(a.callback))throw Error("prompt requires a callback");if(!r[a.inputType])throw Error("invalid prompt type");g=c(r[a.inputType]);switch(a.inputType){case "text":case "textarea":case "email":case "date":case "time":case "number":case "password":g.val(a.value);break;case "select":var l={};
h=a.inputOptions||[];if(!c.isArray(h))throw Error("Please pass an array of input options");if(!h.length)throw Error("prompt with select requires options");n(h,function(a,b){var d=g;if(b.value===f||b.text===f)throw Error("given options in wrong format");b.group&&(l[b.group]||(l[b.group]=c("<optgroup/>").attr("label",b.group)),d=l[b.group]);d.append("<option value='"+b.value+"'>"+b.text+"</option>")});n(l,function(a,b){g.append(b)});g.val(a.value);break;case "checkbox":var z=c.isArray(a.value)?a.value:
[a.value];h=a.inputOptions||[];if(!h.length)throw Error("prompt with checkbox requires options");if(!h[0].value||!h[0].text)throw Error("given options in wrong format");g=c("<div/>");n(h,function(b,d){var f=c(r[a.inputType]);f.find("input").attr("value",d.value);f.find("label").append(d.text);n(z,function(a,b){b===d.value&&f.find("input").prop("checked",!0)});g.append(f)})}a.placeholder&&g.attr("placeholder",a.placeholder);a.pattern&&g.attr("pattern",a.pattern);a.maxlength&&g.attr("maxlength",a.maxlength);
d.append(g);d.on("submit",function(a){a.preventDefault();a.stopPropagation();k.find(".btn-primary").click()});k=m.dialog(a);k.off("shown.bs.modal");k.on("shown.bs.modal",function(){g.focus()});!0===b&&k.modal("show");return k},dialog:function(a){a=x(a);var b=c("<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>"),k=b.find(".modal-dialog"),d=b.find(".modal-body"),
g=a.buttons,l="",m={onEscape:a.onEscape};if(c.fn.modal===f)throw Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");n(g,function(a,b){l+="<button data-bb-handler='"+a+"' type='button' class='btn "+b.className+"'>"+b.label+"</button>";m[a]=b.callback});d.find(".bootbox-body").html(a.message);!0===a.animate&&b.addClass("fade");a.className&&b.addClass(a.className);"large"===a.size?k.addClass("modal-lg"):
"small"===a.size&&k.addClass("modal-sm");a.title&&d.before("<div class='modal-header'><h4 class='modal-title'></h4></div>");a.closeButton&&(k=c("<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>"),a.title?b.find(".modal-header").prepend(k):k.css("margin-top","-10px").prependTo(d));a.title&&b.find(".modal-title").html(a.title);l.length&&(d.after("<div class='modal-footer'></div>"),b.find(".modal-footer").html(l));b.on("hidden.bs.modal",
function(a){a.target===this&&b.remove()});b.on("shown.bs.modal",function(){b.find(".btn-primary:first").focus()});if("static"!==a.backdrop)b.on("click.dismiss.bs.modal",function(a){b.children(".modal-backdrop").length&&(a.currentTarget=b.children(".modal-backdrop").get(0));a.target===a.currentTarget&&b.trigger("escape.close.bb")});b.on("escape.close.bb",function(a){m.onEscape&&h(a,b,m.onEscape)});b.on("click",".modal-footer button",function(a){var d=c(this).data("bb-handler");h(a,b,m[d])});b.on("click",
".bootbox-close-button",function(a){h(a,b,m.onEscape)});b.on("keyup",function(a){27===a.which&&b.trigger("escape.close.bb")});c(a.container).append(b);b.modal({backdrop:a.backdrop?"static":!1,keyboard:!1,show:!1});a.show&&b.modal("show");return b},setDefaults:function(){var a={};2===arguments.length?a[arguments[0]]=arguments[1]:a=arguments[0];c.extend(q,a)},hideAll:function(){c(".bootbox").modal("hide");return m}},p={bg_BG:{OK:"\u041e\u043a",CANCEL:"\u041e\u0442\u043a\u0430\u0437",CONFIRM:"\u041f\u043e\u0442\u0432\u044a\u0440\u0436\u0434\u0430\u0432\u0430\u043c"},
br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},cs:{OK:"OK",CANCEL:"Zru\u0161it",CONFIRM:"Potvrdit"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},el:{OK:"\u0395\u03bd\u03c4\u03ac\u03be\u03b5\u03b9",CANCEL:"\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",CONFIRM:"\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},et:{OK:"OK",CANCEL:"Katkesta",
CONFIRM:"OK"},fa:{OK:"\u0642\u0628\u0648\u0644",CANCEL:"\u0644\u063a\u0648",CONFIRM:"\u062a\u0627\u06cc\u06cc\u062f"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},he:{OK:"\u05d0\u05d9\u05e9\u05d5\u05e8",CANCEL:"\u05d1\u05d9\u05d8\u05d5\u05dc",CONFIRM:"\u05d0\u05d9\u05e9\u05d5\u05e8"},hu:{OK:"OK",CANCEL:"M\u00e9gsem",CONFIRM:"Meger\u0151s\u00edt"},hr:{OK:"OK",CANCEL:"Odustani",CONFIRM:"Potvrdi"},id:{OK:"OK",CANCEL:"Batal",CONFIRM:"OK"},it:{OK:"OK",CANCEL:"Annulla",
CONFIRM:"Conferma"},ja:{OK:"OK",CANCEL:"\u30ad\u30e3\u30f3\u30bb\u30eb",CONFIRM:"\u78ba\u8a8d"},lt:{OK:"Gerai",CANCEL:"At\u0161aukti",CONFIRM:"Patvirtinti"},lv:{OK:"Labi",CANCEL:"Atcelt",CONFIRM:"Apstiprin\u0101t"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierd\u017a"},pt:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Confirmar"},ru:{OK:"OK",CANCEL:"\u041e\u0442\u043c\u0435\u043d\u0430",CONFIRM:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"},
sq:{OK:"OK",CANCEL:"Anulo",CONFIRM:"Prano"},sv:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},th:{OK:"\u0e15\u0e01\u0e25\u0e07",CANCEL:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",CONFIRM:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"},tr:{OK:"Tamam",CANCEL:"\u0130ptal",CONFIRM:"Onayla"},zh_CN:{OK:"OK",CANCEL:"\u53d6\u6d88",CONFIRM:"\u786e\u8ba4"},zh_TW:{OK:"OK",CANCEL:"\u53d6\u6d88",CONFIRM:"\u78ba\u8a8d"}};m.addLocale=function(a,b){c.each(["OK","CANCEL","CONFIRM"],function(a,c){if(!b[c])throw Error("Please supply a translation for '"+
c+"'");});p[a]={OK:b.OK,CANCEL:b.CANCEL,CONFIRM:b.CONFIRM};return m};m.removeLocale=function(a){delete p[a];return m};m.setLocale=function(a){return m.setDefaults("locale",a)};m.init=function(a){return init(a||c)};return m});
