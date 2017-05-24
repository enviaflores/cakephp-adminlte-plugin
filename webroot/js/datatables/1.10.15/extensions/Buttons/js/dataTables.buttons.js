/*
 Buttons for DataTables 1.3.1
 ?2016 SpryMedia Ltd - datatables.net/license
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(q){return d(q,window,document)}):"object"===typeof exports?module.exports=function(q,r){q||(q=window);r&&r.fn.dataTable||(r=require("datatables.net")(q,r).$);return d(r,q,q.document)}:d(jQuery,window,document)})(function(d,q,r,n){var l=d.fn.dataTable,y=0,z=0,m=l.ext.buttons,p=function(a,b){"undefined"===typeof b&&(b={});!0===b&&(b={});d.isArray(b)&&(b={buttons:b});this.c=d.extend(!0,{},p.defaults,b);b.buttons&&
(this.c.buttons=b.buttons);this.s={dt:new l.Api(a),buttons:[],listenKeys:"",namespace:"dtb"+y++};this.dom={container:d("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)};this._constructor()};d.extend(p.prototype,{action:function(a,b){var c=this._nodeToButton(a);if(b===n)return c.conf.action;c.conf.action=b;return this},active:function(a,b){var c=this._nodeToButton(a),e=this.c.dom.button.active,c=d(c.node);if(b===n)return c.hasClass(e);c.toggleClass(e,b===n?!0:b);return this},
add:function(a,b){var c=this.s.buttons;if("string"===typeof b){for(var e=b.split("-"),c=this.s,d=0,k=e.length-1;d<k;d++)c=c.buttons[1*e[d]];c=c.buttons;b=1*e[e.length-1]}this._expandButton(c,a,!1,b);this._draw();return this},container:function(){return this.dom.container},disable:function(a){a=this._nodeToButton(a);d(a.node).addClass(this.c.dom.button.disabled);return this},destroy:function(){d("body").off("keyup."+this.s.namespace);var a=this.s.buttons.slice(),b,c;b=0;for(c=a.length;b<c;b++)this.remove(a[b].node);
this.dom.container.remove();a=this.s.dt.settings()[0];b=0;for(c=a.length;b<c;b++)if(a.inst===this){a.splice(b,1);break}return this},enable:function(a,b){if(!1===b)return this.disable(a);var c=this._nodeToButton(a);d(c.node).removeClass(this.c.dom.button.disabled);return this},name:function(){return this.c.name},node:function(a){a=this._nodeToButton(a);return d(a.node)},processing:function(a,b){var c=this._nodeToButton(a);if(b===n)return d(c.node).hasClass("processing");d(c.node).toggleClass("processing",
b);return this},remove:function(a){var b=this._nodeToButton(a),c=this._nodeToHost(a),e=this.s.dt;if(b.buttons.length)for(var g=b.buttons.length-1;0<=g;g--)this.remove(b.buttons[g].node);b.conf.destroy&&b.conf.destroy.call(e.button(a),e,d(a),b.conf);this._removeKey(b.conf);d(b.node).remove();a=d.inArray(b,c);c.splice(a,1);return this},text:function(a,b){var c=this._nodeToButton(a),e=this.c.dom.collection.buttonLiner,e=c.inCollection&&e&&e.tag?e.tag:this.c.dom.buttonLiner.tag,g=this.s.dt,k=d(c.node),
f=function(a){return"function"===typeof a?a(g,k,c.conf):a};if(b===n)return f(c.conf.text);c.conf.text=b;e?k.children(e).html(f(b)):k.html(f(b));return this},_constructor:function(){var a=this,b=this.s.dt,c=b.settings()[0],e=this.c.buttons;c._buttons||(c._buttons=[]);c._buttons.push({inst:this,name:this.c.name});for(var c=0,g=e.length;c<g;c++)this.add(e[c]);b.on("destroy",function(){a.destroy()});d("body").on("keyup."+this.s.namespace,function(b){if(!r.activeElement||r.activeElement===r.body){var c=
String.fromCharCode(b.keyCode).toLowerCase();-1!==a.s.listenKeys.toLowerCase().indexOf(c)&&a._keypress(c,b)}})},_addKey:function(a){a.key&&(this.s.listenKeys+=d.isPlainObject(a.key)?a.key.key:a.key)},_draw:function(a,b){a||(a=this.dom.container,b=this.s.buttons);a.children().detach();for(var c=0,e=b.length;c<e;c++)a.append(b[c].inserter),b[c].buttons&&b[c].buttons.length&&this._draw(b[c].collection,b[c].buttons)},_expandButton:function(a,b,c,e){var g=this.s.dt,k=0;b=d.isArray(b)?b:[b];for(var f=0,
t=b.length;f<t;f++){var h=this._resolveExtends(b[f]);if(h)if(d.isArray(h))this._expandButton(a,h,c,e);else{var u=this._buildButton(h,c);if(u){e!==n?(a.splice(e,0,u),e++):a.push(u);if(u.conf.buttons){var w=this.c.dom.collection;u.collection=d("<"+w.tag+"/>").addClass(w.className).attr("role","menu");u.conf._collection=u.collection;this._expandButton(u.buttons,u.conf.buttons,!0,e)}h.init&&h.init.call(g.button(u.node),g,d(u.node),h);k++}}}},_buildButton:function(a,b){var c=this.c.dom.button,e=this.c.dom.buttonLiner,
g=this.c.dom.collection,k=this.s.dt,f=function(b){return"function"===typeof b?b(k,h,a):b};b&&g.button&&(c=g.button);b&&g.buttonLiner&&(e=g.buttonLiner);if(a.available&&!a.available(k,a))return!1;var t=function(a,b,c,e){e.action.call(b.button(c),a,b,c,e);d(b.table().node()).triggerHandler("buttons-action.dt",[b.button(c),b,c,e])},h=d("<"+c.tag+"/>").addClass(c.className).attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(b){b.preventDefault();
!h.hasClass(c.disabled)&&a.action&&t(b,k,h,a);h.blur()}).on("keyup.dtb",function(b){13===b.keyCode&&!h.hasClass(c.disabled)&&a.action&&t(b,k,h,a)});"a"===c.tag.toLowerCase()&&h.attr("href","#");e.tag?(g=d("<"+e.tag+"/>").html(f(a.text)).addClass(e.className),"a"===e.tag.toLowerCase()&&g.attr("href","#"),h.append(g)):h.html(f(a.text));!1===a.enabled&&h.addClass(c.disabled);a.className&&h.addClass(a.className);a.titleAttr&&h.attr("title",f(a.titleAttr));a.namespace||(a.namespace=".dt-button-"+z++);
e=(e=this.c.dom.buttonContainer)&&e.tag?d("<"+e.tag+"/>").addClass(e.className).append(h):h;this._addKey(a);return{conf:a,node:h.get(0),inserter:e,buttons:[],inCollection:b,collection:null}},_nodeToButton:function(a,b){b||(b=this.s.buttons);for(var c=0,e=b.length;c<e;c++){if(b[c].node===a)return b[c];if(b[c].buttons.length){var d=this._nodeToButton(a,b[c].buttons);if(d)return d}}},_nodeToHost:function(a,b){b||(b=this.s.buttons);for(var c=0,e=b.length;c<e;c++){if(b[c].node===a)return b;if(b[c].buttons.length){var d=
this._nodeToHost(a,b[c].buttons);if(d)return d}}},_keypress:function(a,b){var c=function(e){for(var g=0,k=e.length;g<k;g++){var f=e[g].conf,t=e[g].node;f.key&&(f.key===a?d(t).click():!d.isPlainObject(f.key)||f.key.key!==a||f.key.shiftKey&&!b.shiftKey||f.key.altKey&&!b.altKey||f.key.ctrlKey&&!b.ctrlKey||f.key.metaKey&&!b.metaKey||d(t).click());e[g].buttons.length&&c(e[g].buttons)}};c(this.s.buttons)},_removeKey:function(a){if(a.key){var b=d.isPlainObject(a.key)?a.key.key:a.key;a=this.s.listenKeys.split("");
b=d.inArray(b,a);a.splice(b,1);this.s.listenKeys=a.join("")}},_resolveExtends:function(a){var b=this.s.dt,c,e,g=function(c){for(var e=0;!d.isPlainObject(c)&&!d.isArray(c);){if(c===n)return;if("function"===typeof c){if(c=c(b,a),!c)return!1}else if("string"===typeof c){if(!m[c])throw"Unknown button type: "+c;c=m[c]}e++;if(30<e)throw"Buttons: Too many iterations";}return d.isArray(c)?c:d.extend({},c)};for(a=g(a);a&&a.extend;){if(!m[a.extend])throw"Cannot extend unknown button type: "+a.extend;var k=
g(m[a.extend]);if(d.isArray(k))return k;if(!k)return!1;c=k.className;a=d.extend({},k,a);c&&a.className!==c&&(a.className=c+" "+a.className);var f=a.postfixButtons;if(f){a.buttons||(a.buttons=[]);c=0;for(e=f.length;c<e;c++)a.buttons.push(f[c]);a.postfixButtons=null}if(f=a.prefixButtons){a.buttons||(a.buttons=[]);c=0;for(e=f.length;c<e;c++)a.buttons.splice(c,0,f[c]);a.prefixButtons=null}a.extend=k.extend}return a}});p.background=function(a,b,c){c===n&&(c=400);a?d("<div/>").addClass(b).css("display",
"none").appendTo("body").fadeIn(c):d("body > div."+b).fadeOut(c,function(){d(this).removeClass(b).remove()})};p.instanceSelector=function(a,b){if(!a)return d.map(b,function(a){return a.inst});var c=[],e=d.map(b,function(a){return a.name}),g=function(a){if(d.isArray(a))for(var f=0,t=a.length;f<t;f++)g(a[f]);else"string"===typeof a?-1!==a.indexOf(",")?g(a.split(",")):(a=d.inArray(d.trim(a),e),-1!==a&&c.push(b[a].inst)):"number"===typeof a&&c.push(b[a].inst)};g(a);return c};p.buttonSelector=function(a,
b){for(var c=[],e=function(a,b,c){for(var d,g,f=0,t=b.length;f<t;f++)if(d=b[f])g=c!==n?c+f:f+"",a.push({node:d.node,name:d.conf.name,idx:g}),d.buttons&&e(a,d.buttons,g+"-")},g=function(a,b){var f,k,h=[];e(h,b.s.buttons);f=d.map(h,function(a){return a.node});if(d.isArray(a)||a instanceof d)for(f=0,k=a.length;f<k;f++)g(a[f],b);else if(null===a||a===n||"*"===a)for(f=0,k=h.length;f<k;f++)c.push({inst:b,node:h[f].node});else if("number"===typeof a)c.push({inst:b,node:b.s.buttons[a].node});else if("string"===
typeof a)if(-1!==a.indexOf(","))for(h=a.split(","),f=0,k=h.length;f<k;f++)g(d.trim(h[f]),b);else if(a.match(/^\d+(\-\d+)*$/))f=d.map(h,function(a){return a.idx}),c.push({inst:b,node:h[d.inArray(a,f)].node});else if(-1!==a.indexOf(":name")){var t=a.replace(":name","");f=0;for(k=h.length;f<k;f++)h[f].name===t&&c.push({inst:b,node:h[f].node})}else d(f).filter(a).each(function(){c.push({inst:b,node:this})});else"object"===typeof a&&a.nodeName&&(h=d.inArray(a,f),-1!==h&&c.push({inst:b,node:f[h]}))},k=
0,f=a.length;k<f;k++)g(b,a[k]);return c};p.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:"dt-button-collection"},button:{tag:"a",className:"dt-button",active:"active",disabled:"disabled"},buttonLiner:{tag:"span",className:""}}};p.version="1.3.1";d.extend(m,{collection:{text:function(a){return a.i18n("buttons.collection","Collection")},className:"buttons-collection",action:function(a,b,
c,e){a=c.offset();var g=d(b.table().container()),k=!1;d("div.dt-button-background").length&&(k=d(".dt-button-collection").offset(),d("body").trigger("click.dtb-collection"));e._collection.addClass(e.collectionLayout).css("display","none").appendTo("body").fadeIn(e.fade);var f=e._collection.css("position");k&&"absolute"===f?e._collection.css({top:k.top,left:k.left}):"absolute"===f?(e._collection.css({top:a.top+c.outerHeight(),left:a.left}),c=a.left+e._collection.outerWidth(),g=g.offset().left+g.width(),
c>g&&e._collection.css("left",a.left-(c-g))):(a=e._collection.height()/2,a>d(q).height()/2&&(a=d(q).height()/2),e._collection.css("marginTop",-1*a));e.background&&p.background(!0,e.backgroundClassName,e.fade);setTimeout(function(){d("div.dt-button-background").on("click.dtb-collection",function(){});d("body").on("click.dtb-collection",function(a){var c=d.fn.addBack?"addBack":"andSelf";d(a.target).parents()[c]().filter(e._collection).length||(e._collection.fadeOut(e.fade,function(){e._collection.detach()}),
d("div.dt-button-background").off("click.dtb-collection"),p.background(!1,e.backgroundClassName,e.fade),d("body").off("click.dtb-collection"),b.off("buttons-action.b-internal"))})},10);if(e.autoClose)b.on("buttons-action.b-internal",function(){d("div.dt-button-background").click()})},background:!0,collectionLayout:"",backgroundClassName:"dt-button-background",autoClose:!1,fade:400},copy:function(a,b){if(m.copyHtml5)return"copyHtml5";if(m.copyFlash&&m.copyFlash.available(a,b))return"copyFlash"},csv:function(a,
b){if(m.csvHtml5&&m.csvHtml5.available(a,b))return"csvHtml5";if(m.csvFlash&&m.csvFlash.available(a,b))return"csvFlash"},excel:function(a,b){if(m.excelHtml5&&m.excelHtml5.available(a,b))return"excelHtml5";if(m.excelFlash&&m.excelFlash.available(a,b))return"excelFlash"},pdf:function(a,b){if(m.pdfHtml5&&m.pdfHtml5.available(a,b))return"pdfHtml5";if(m.pdfFlash&&m.pdfFlash.available(a,b))return"pdfFlash"},pageLength:function(a){a=a.settings()[0].aLengthMenu;var b=d.isArray(a[0])?a[0]:a,c=d.isArray(a[0])?
a[1]:a,e=function(a){return a.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},a.page.len())};return{extend:"collection",text:e,className:"buttons-page-length",autoClose:!0,buttons:d.map(b,function(a,b){return{text:c[b],className:"button-page-length",action:function(b,c){c.page.len(a).draw()},init:function(b,c,d){var e=this;c=function(){e.active(b.page.len()===a)};b.on("length.dt"+d.namespace,c);c()},destroy:function(a,b,c){a.off("length.dt"+c.namespace)}}}),init:function(a,b,c){var d=
this;a.on("length.dt"+c.namespace,function(){d.text(e(a))})},destroy:function(a,b,c){a.off("length.dt"+c.namespace)}}}});l.Api.register("buttons()",function(a,b){b===n&&(b=a,a=n);this.selector.buttonGroup=a;var c=this.iterator(!0,"table",function(c){if(c._buttons)return p.buttonSelector(p.instanceSelector(a,c._buttons),b)},!0);c._groupSelector=a;return c});l.Api.register("button()",function(a,b){var c=this.buttons(a,b);1<c.length&&c.splice(1,c.length);return c});l.Api.registerPlural("buttons().active()",
"button().active()",function(a){return a===n?this.map(function(a){return a.inst.active(a.node)}):this.each(function(b){b.inst.active(b.node,a)})});l.Api.registerPlural("buttons().action()","button().action()",function(a){return a===n?this.map(function(a){return a.inst.action(a.node)}):this.each(function(b){b.inst.action(b.node,a)})});l.Api.register(["buttons().enable()","button().enable()"],function(a){return this.each(function(b){b.inst.enable(b.node,a)})});l.Api.register(["buttons().disable()",
"button().disable()"],function(){return this.each(function(a){a.inst.disable(a.node)})});l.Api.registerPlural("buttons().nodes()","button().node()",function(){var a=d();d(this.each(function(b){a=a.add(b.inst.node(b.node))}));return a});l.Api.registerPlural("buttons().processing()","button().processing()",function(a){return a===n?this.map(function(a){return a.inst.processing(a.node)}):this.each(function(b){b.inst.processing(b.node,a)})});l.Api.registerPlural("buttons().text()","button().text()",function(a){return a===
n?this.map(function(a){return a.inst.text(a.node)}):this.each(function(b){b.inst.text(b.node,a)})});l.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(a){a.inst.node(a.node).trigger("click")})});l.Api.registerPlural("buttons().containers()","buttons().container()",function(){var a=d(),b=this._groupSelector;this.iterator(!0,"table",function(c){if(c._buttons){c=p.instanceSelector(b,c._buttons);for(var d=0,g=c.length;d<g;d++)a=a.add(c[d].container())}});
return a});l.Api.register("button().add()",function(a,b){var c=this.context;c.length&&(c=p.instanceSelector(this._groupSelector,c[0]._buttons),c.length&&c[0].add(b,a));return this.button(this._groupSelector,a)});l.Api.register("buttons().destroy()",function(){this.pluck("inst").unique().each(function(a){a.destroy()});return this});l.Api.registerPlural("buttons().remove()","buttons().remove()",function(){this.each(function(a){a.inst.remove(a.node)});return this});var v;l.Api.register("buttons.info()",
function(a,b,c){var e=this;if(!1===a)return d("#datatables_buttons_info").fadeOut(function(){d(this).remove()}),clearTimeout(v),v=null,this;v&&clearTimeout(v);d("#datatables_buttons_info").length&&d("#datatables_buttons_info").remove();a=a?"<h2>"+a+"</h2>":"";d('<div id="datatables_buttons_info" class="dt-button-info"/>').html(a).append(d("<div/>")["string"===typeof b?"html":"append"](b)).css("display","none").appendTo("body").fadeIn();c!==n&&0!==c&&(v=setTimeout(function(){e.buttons.info(!1)},c));
return this});l.Api.register("buttons.exportData()",function(a){if(this.context.length)return A(new l.Api(this.context[0]),a)});var x=d("<textarea/>")[0],A=function(a,b){for(var c=d.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(a){return e(a)},footer:function(a){return e(a)},body:function(a){return e(a)}}},b),e=function(a){if("string"!==typeof a)return a;a=a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
"");c.stripHtml&&(a=a.replace(/<[^>]*>/g,""));c.trim&&(a=a.replace(/^\s+|\s+$/g,""));c.stripNewlines&&(a=a.replace(/\n/g," "));c.decodeEntities&&(x.innerHTML=a,a=x.value);return a},g=a.columns(c.columns).indexes().map(function(b){var d=a.column(b).header();return c.format.header(d.innerHTML,b,d)}).toArray(),k=a.table().footer()?a.columns(c.columns).indexes().map(function(b){var d=a.column(b).footer();return c.format.footer(d?d.innerHTML:"",b,d)}).toArray():null,f=a.rows(c.rows,c.modifier).indexes().toArray(),
l=a.cells(f,c.columns),f=l.render(c.orthogonal).toArray(),l=l.nodes().toArray(),h=g.length,m=0<h?f.length/h:0,p=Array(m),n=0,q=0;q<m;q++){for(var r=Array(h),v=0;v<h;v++)r[v]=c.format.body(f[n],q,v,l[n]),n++;p[q]=r}return{header:g,footer:k,body:p}};d.fn.dataTable.Buttons=p;d.fn.DataTable.Buttons=p;d(r).on("init.dt plugin-init.dt",function(a,b){if("dt"===a.namespace){var c=b.oInit.buttons||l.defaults.buttons;c&&!b._buttons&&(new p(b,c)).container()}});l.ext.feature.push({fnInit:function(a){a=new l.Api(a);
var b=a.init().buttons||l.defaults.buttons;return(new p(a,b)).container()},cFeature:"B"});return p});
