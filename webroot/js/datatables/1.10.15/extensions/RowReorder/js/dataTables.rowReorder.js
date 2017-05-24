/*
   Copyright 2015-2016 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 RowReorder 1.2.0
 2015-2016 SpryMedia Ltd - datatables.net/license
*/
var $jscomp={scope:{},findInternal:function(a,g,h){a instanceof String&&(a=String(a));for(var k=a.length,e=0;e<k;e++){var l=a[e];if(g.call(h,l,e,a))return{i:e,v:l}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,g,h){if(h.get||h.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[g]=h.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,g,h,k){if(g){h=$jscomp.global;a=a.split(".");for(k=0;k<a.length-1;k++){var e=a[k];e in h||(h[e]={});h=h[e]}a=a[a.length-1];k=h[a];g=g(k);g!=k&&null!=g&&$jscomp.defineProperty(h,a,{configurable:!0,writable:!0,value:g})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,h){return $jscomp.findInternal(this,a,h).v}},"es6-impl","es3");
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(g){return a(g,window,document)}):"object"===typeof exports?module.exports=function(g,h){g||(g=window);h&&h.fn.dataTable||(h=require("datatables.net")(g,h).$);return a(h,g,g.document)}:a(jQuery,window,document)})(function(a,g,h,k){var e=a.fn.dataTable,l=function(d,f){if(!e.versionCheck||!e.versionCheck("1.10.8"))throw"DataTables RowReorder requires DataTables 1.10.8 or newer";this.c=a.extend(!0,{},e.defaults.rowReorder,
l.defaults,f);this.s={bodyTop:null,dt:new e.Api(d),getDataFn:e.ext.oApi._fnGetObjectDataFn(this.c.dataSrc),middles:null,scroll:{},scrollInterval:null,setDataFn:e.ext.oApi._fnSetObjectDataFn(this.c.dataSrc),start:{top:0,left:0,offsetTop:0,offsetLeft:0,nodes:[]},windowHeight:0};this.dom={clone:null,dtScroll:a("div.dataTables_scrollBody",this.s.dt.table().container())};var c=this.s.dt.settings()[0],b=c.rowreorder;if(b)return b;c.rowreorder=this;this._constructor()};a.extend(l.prototype,{_constructor:function(){var d=
this,f=this.s.dt,c=a(f.table().node());"static"===c.css("position")&&c.css("position","relative");a(f.table().container()).on("mousedown.rowReorder touchstart.rowReorder",this.c.selector,function(b){if(d.c.enabled){var c=a(this).closest("tr");if(f.row(c).any())return d._mouseDown(b,c),!1}});f.on("destroy.rowReorder",function(){a(f.table().container()).off(".rowReorder");f.off(".rowReorder")})},_cachePositions:function(){var d=this.s.dt,f=a(d.table().node()).find("thead").outerHeight(),c=a.unique(d.rows({page:"current"}).nodes().toArray()),
b=a.map(c,function(b,d){return a(b).position().top-f}),c=a.map(b,function(c,f){return b.length<f-1?(c+b[f+1])/2:(c+c+a(d.row(":last-child").node()).outerHeight())/2});this.s.middles=c;this.s.bodyTop=a(d.table().body()).offset().top;this.s.windowHeight=a(g).height()},_clone:function(d){var f=a(this.s.dt.table().node().cloneNode(!1)).addClass("dt-rowReorder-float").append("<tbody/>").append(d.clone(!1)),c=d.outerWidth(),b=d.outerHeight(),h=d.children().map(function(){return a(this).width()});f.width(c).height(b).find("tr").children().each(function(a){this.style.width=
h[a]+"px"});f.appendTo("body");this.dom.clone=f},_clonePosition:function(a){var d=this.s.start,c=this._eventToPage(a,"Y")-d.top;a=this._eventToPage(a,"X")-d.left;var b=this.c.snapX;this.dom.clone.css({top:c+d.offsetTop,left:!0===b?d.offsetLeft:"number"===typeof b?d.offsetLeft+b:a+d.offsetLeft})},_emitEvent:function(d,f){this.s.dt.iterator("table",function(c,b){a(c.nTable).triggerHandler(d+".dt",f)})},_eventToPage:function(a,f){return-1!==a.type.indexOf("touch")?a.originalEvent.touches[0]["page"+f]:
a["page"+f]},_mouseDown:function(d,f){var c=this,b=this.s.dt,e=this.s.start,q=f.offset();e.top=this._eventToPage(d,"Y");e.left=this._eventToPage(d,"X");e.offsetTop=q.top;e.offsetLeft=q.left;e.nodes=a.unique(b.rows({page:"current"}).nodes().toArray());this._cachePositions();this._clone(f);this._clonePosition(d);this.dom.target=f;f.addClass("dt-rowReorder-moving");a(h).on("mouseup.rowReorder touchend.rowReorder",function(a){c._mouseUp(a)}).on("mousemove.rowReorder touchmove.rowReorder",function(a){c._mouseMove(a)});
a(g).width()===a(h).width()&&a(h.body).addClass("dt-rowReorder-noOverflow");b=this.dom.dtScroll;this.s.scroll={windowHeight:a(g).height(),windowWidth:a(g).width(),dtTop:b.length?b.offset().top:null,dtLeft:b.length?b.offset().left:null,dtHeight:b.length?b.outerHeight():null,dtWidth:b.length?b.outerWidth():null}},_mouseMove:function(d){this._clonePosition(d);for(var f=this._eventToPage(d,"Y")-this.s.bodyTop,c=this.s.middles,b=null,h=this.s.dt,g=h.table().body(),e=0,k=c.length;e<k;e++)if(f<c[e]){b=e;
break}null===b&&(b=c.length);if(null===this.s.lastInsert||this.s.lastInsert!==b)0===b?this.dom.target.prependTo(g):(f=a.unique(h.rows({page:"current"}).nodes().toArray()),b>this.s.lastInsert?this.dom.target.insertAfter(f[b-1]):this.dom.target.insertBefore(f[b])),this._cachePositions(),this.s.lastInsert=b;this._shiftScroll(d)},_mouseUp:function(d){var f=this,c=this.s.dt,b,e=this.c.dataSrc;this.dom.clone.remove();this.dom.clone=null;this.dom.target.removeClass("dt-rowReorder-moving");a(h).off(".rowReorder");
a(h.body).removeClass("dt-rowReorder-noOverflow");clearInterval(this.s.scrollInterval);this.s.scrollInterval=null;var g=this.s.start.nodes,k=a.unique(c.rows({page:"current"}).nodes().toArray()),l={},n=[],m=[],p=this.s.getDataFn,u=this.s.setDataFn;b=0;for(d=g.length;b<d;b++)if(g[b]!==k[b]){var r=c.row(k[b]).id(),v=c.row(k[b]).data(),t=c.row(g[b]).data();r&&(l[r]=p(t));n.push({node:k[b],oldData:p(v),newData:p(t),newPosition:b,oldPosition:a.inArray(k[b],g)});m.push(k[b])}g=[n,{dataSrc:e,nodes:m,values:l,
triggerRow:c.row(this.dom.target)}];this._emitEvent("row-reorder",g);this.c.editor&&(this.c.enabled=!1,this.c.editor.edit(m,!1,a.extend({submit:"changed"},this.c.formOptions)).multiSet(e,l).one("submitComplete",function(){f.c.enabled=!0}).submit());if(this.c.update){b=0;for(d=n.length;b<d;b++)l=c.row(n[b].node).data(),u(l,n[b].newData),c.columns().every(function(){this.dataSrc()===e&&c.cell(n[b].node,this.index()).invalidate("data")});this._emitEvent("row-reordered",g);c.draw(!1)}},_shiftScroll:function(a){var d=
this,c=this.s.scroll,b=!1,g=a.pageY-h.body.scrollTop,e,k;65>g?e=-5:g>c.windowHeight-65&&(e=5);null!==c.dtTop&&a.pageY<c.dtTop+65?k=-5:null!==c.dtTop&&a.pageY>c.dtTop+c.dtHeight-65&&(k=5);e||k?(c.windowVert=e,c.dtVert=k,b=!0):this.s.scrollInterval&&(clearInterval(this.s.scrollInterval),this.s.scrollInterval=null);!this.s.scrollInterval&&b&&(this.s.scrollInterval=setInterval(function(){c.windowVert&&(h.body.scrollTop+=c.windowVert);if(c.dtVert){var a=d.dom.dtScroll[0];c.dtVert&&(a.scrollTop+=c.dtVert)}},
20))}});l.defaults={dataSrc:0,editor:null,enabled:!0,formOptions:{},selector:"td:first-child",snapX:!1,update:!0};var m=a.fn.dataTable.Api;m.register("rowReorder()",function(){return this});m.register("rowReorder.enable()",function(a){a===k&&(a=!0);return this.iterator("table",function(d){d.rowreorder&&(d.rowreorder.c.enabled=a)})});m.register("rowReorder.disable()",function(){return this.iterator("table",function(a){a.rowreorder&&(a.rowreorder.c.enabled=!1)})});l.version="1.2.0";a.fn.dataTable.RowReorder=
l;a.fn.DataTable.RowReorder=l;a(h).on("init.dt.dtr",function(d,f,c){"dt"===d.namespace&&(d=f.oInit.rowReorder,c=e.defaults.rowReorder,d||c)&&(c=a.extend({},d,c),!1!==d&&new l(f,c))});return l});
