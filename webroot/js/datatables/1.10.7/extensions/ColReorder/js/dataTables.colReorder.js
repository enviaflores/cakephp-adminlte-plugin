/*
   Copyright 2010-2014 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 ColReorder 1.1.3
 ?2010-2014 SpryMedia Ltd - datatables.net/license
*/
var $jscomp={scope:{},findInternal:function(c,l,h){c instanceof String&&(c=String(c));for(var q=c.length,m=0;m<q;m++){var t=c[m];if(l.call(h,t,m,c))return{i:m,v:t}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(c,l,h){if(h.get||h.set)throw new TypeError("ES3 does not support getters and setters.");c!=Array.prototype&&c!=Object.prototype&&(c[l]=h.value)};
$jscomp.getGlobal=function(c){return"undefined"!=typeof window&&window===c?c:"undefined"!=typeof global&&null!=global?global:c};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(c,l,h,q){if(l){h=$jscomp.global;c=c.split(".");for(q=0;q<c.length-1;q++){var m=c[q];m in h||(h[m]={});h=h[m]}c=c[c.length-1];q=h[c];l=l(q);l!=q&&null!=l&&$jscomp.defineProperty(h,c,{configurable:!0,writable:!0,value:l})}};
$jscomp.polyfill("Array.prototype.find",function(c){return c?c:function(c,h){return $jscomp.findInternal(this,c,h).v}},"es6-impl","es3");
(function(c,l,h){function q(e){for(var c=[],g=0,a=e.length;g<a;g++)c[e[g]]=g;return c}function m(e,c,g){c=e.splice(c,1)[0];e.splice(g,0,c)}function t(e,c,g){for(var a=[],b=0,f=e.childNodes.length;b<f;b++)1==e.childNodes[b].nodeType&&a.push(e.childNodes[b]);c=a[c];null!==g?e.insertBefore(c,a[g]):e.appendChild(c)}c=function(e,c){e.fn.dataTableExt.oApi.fnColReorder=function(a,b,f){var c=e.fn.dataTable.Api?!0:!1,d,k,g,h,l=a.aoColumns.length,n,p;n=function(a,b,d){if(a[b]){var f=a[b].split("."),e=f.shift();
isNaN(1*e)||(a[b]=d[1*e]+"."+f.join("."))}};if(b!=f)if(0>b||b>=l)this.oApi._fnLog(a,1,"ColReorder 'from' index is out of bounds: "+b);else if(0>f||f>=l)this.oApi._fnLog(a,1,"ColReorder 'to' index is out of bounds: "+f);else{g=[];d=0;for(k=l;d<k;d++)g[d]=d;m(g,b,f);var r=q(g);d=0;for(k=a.aaSorting.length;d<k;d++)a.aaSorting[d][0]=r[a.aaSorting[d][0]];if(null!==a.aaSortingFixed)for(d=0,k=a.aaSortingFixed.length;d<k;d++)a.aaSortingFixed[d][0]=r[a.aaSortingFixed[d][0]];d=0;for(k=l;d<k;d++){p=a.aoColumns[d];
g=0;for(h=p.aDataSort.length;g<h;g++)p.aDataSort[g]=r[p.aDataSort[g]];c&&(p.idx=r[p.idx])}c&&e.each(a.aLastSort,function(b,d){a.aLastSort[b].src=r[d.src]});d=0;for(k=l;d<k;d++)p=a.aoColumns[d],"number"==typeof p.mData?(p.mData=r[p.mData],a.oApi._fnColumnOptions(a,d,{})):e.isPlainObject(p.mData)&&(n(p.mData,"_",r),n(p.mData,"filter",r),n(p.mData,"sort",r),n(p.mData,"type",r),a.oApi._fnColumnOptions(a,d,{}));if(a.aoColumns[b].bVisible){g=this.oApi._fnColumnIndexToVisible(a,b);h=null;for(d=f<b?f:f+1;null===
h&&d<l;)h=this.oApi._fnColumnIndexToVisible(a,d),d++;n=a.nTHead.getElementsByTagName("tr");d=0;for(k=n.length;d<k;d++)t(n[d],g,h);if(null!==a.nTFoot)for(n=a.nTFoot.getElementsByTagName("tr"),d=0,k=n.length;d<k;d++)t(n[d],g,h);d=0;for(k=a.aoData.length;d<k;d++)null!==a.aoData[d].nTr&&t(a.aoData[d].nTr,g,h)}m(a.aoColumns,b,f);m(a.aoPreSearchCols,b,f);d=0;for(k=a.aoData.length;d<k;d++)n=a.aoData[d],c?(n.anCells&&m(n.anCells,b,f),"dom"!==n.src&&e.isArray(n._aData)&&m(n._aData,b,f)):(e.isArray(n._aData)&&
m(n._aData,b,f),m(n._anHidden,b,f));d=0;for(k=a.aoHeader.length;d<k;d++)m(a.aoHeader[d],b,f);if(null!==a.aoFooter)for(d=0,k=a.aoFooter.length;d<k;d++)m(a.aoFooter[d],b,f);c&&(new e.fn.dataTable.Api(a)).rows().invalidate();d=0;for(k=l;d<k;d++)e(a.aoColumns[d].nTh).off("click.DT"),this.oApi._fnSortAttachListener(a,a.aoColumns[d].nTh,d);e(a.oInstance).trigger("column-reorder",[a,{iFrom:b,iTo:f,aiInvertMapping:r}])}};var g=function(a,b){var f;e.fn.dataTable.Api?f=(new e.fn.dataTable.Api(a)).settings()[0]:
a.fnSettings?f=a.fnSettings():"string"===typeof a?e.fn.dataTable.fnIsDataTable(e(a)[0])&&(f=e(a).eq(0).dataTable().fnSettings()):a.nodeName&&"table"===a.nodeName.toLowerCase()?e.fn.dataTable.fnIsDataTable(a.nodeName)&&(f=e(a.nodeName).dataTable().fnSettings()):a instanceof jQuery?e.fn.dataTable.fnIsDataTable(a[0])&&(f=a.eq(0).dataTable().fnSettings()):f=a;if(f._colReorder)throw"ColReorder already initialised on table #"+f.nTable.id;var c=e.fn.dataTable.camelToHungarian;c&&(c(g.defaults,g.defaults,
!0),c(g.defaults,b||{}));this.s={dt:null,init:e.extend(!0,{},g.defaults,b),fixed:0,fixedRight:0,reorderCallback:null,mouse:{startX:-1,startY:-1,offsetX:-1,offsetY:-1,target:-1,targetIndex:-1,fromIndex:-1},aoTargets:[]};this.dom={drag:null,pointer:null};this.s.dt=f;this.s.dt._colReorder=this;this._fnConstruct();f.oApi._fnCallbackReg(f,"aoDestroyCallback",e.proxy(this._fnDestroy,this),"ColReorder");return this};g.prototype={fnReset:function(){for(var a=[],b=0,f=this.s.dt.aoColumns.length;b<f;b++)a.push(this.s.dt.aoColumns[b]._ColReorder_iOrigCol);
this._fnOrderColumns(a);return this},fnGetCurrentOrder:function(){return this.fnOrder()},fnOrder:function(a){if(a===h){a=[];for(var b=0,f=this.s.dt.aoColumns.length;b<f;b++)a.push(this.s.dt.aoColumns[b]._ColReorder_iOrigCol);return a}this._fnOrderColumns(q(a));return this},_fnConstruct:function(){var a=this,b=this.s.dt.aoColumns.length,f;this.s.init.iFixedColumns&&(this.s.fixed=this.s.init.iFixedColumns);this.s.fixedRight=this.s.init.iFixedColumnsRight?this.s.init.iFixedColumnsRight:0;this.s.init.fnReorderCallback&&
(this.s.reorderCallback=this.s.init.fnReorderCallback);for(f=0;f<b;f++)f>this.s.fixed-1&&f<b-this.s.fixedRight&&this._fnMouseListener(f,this.s.dt.aoColumns[f].nTh),this.s.dt.aoColumns[f]._ColReorder_iOrigCol=f;this.s.dt.oApi._fnCallbackReg(this.s.dt,"aoStateSaveParams",function(b,d){a._fnStateSave.call(a,d)},"ColReorder_State");var e=null;this.s.init.aiOrder&&(e=this.s.init.aiOrder.slice());this.s.dt.oLoadedState&&"undefined"!=typeof this.s.dt.oLoadedState.ColReorder&&this.s.dt.oLoadedState.ColReorder.length==
this.s.dt.aoColumns.length&&(e=this.s.dt.oLoadedState.ColReorder);if(e)if(a.s.dt._bInitComplete)b=q(e),a._fnOrderColumns.call(a,b);else{var d=!1;this.s.dt.aoDrawCallback.push({fn:function(){if(!a.s.dt._bInitComplete&&!d){d=!0;var b=q(e);a._fnOrderColumns.call(a,b)}},sName:"ColReorder_Pre"})}else this._fnSetColumnIndexes()},_fnOrderColumns:function(a){if(a.length!=this.s.dt.aoColumns.length)this.s.dt.oInstance.oApi._fnLog(this.s.dt,1,"ColReorder - array reorder does not match known number of columns. Skipping.");
else{for(var b=0,f=a.length;b<f;b++){var c=e.inArray(b,a);b!=c&&(m(a,c,b),this.s.dt.oInstance.fnColReorder(c,b))}""===this.s.dt.oScroll.sX&&""===this.s.dt.oScroll.sY||this.s.dt.oInstance.fnAdjustColumnSizing(!1);this.s.dt.oInstance.oApi._fnSaveState(this.s.dt);this._fnSetColumnIndexes();null!==this.s.reorderCallback&&this.s.reorderCallback.call(this)}},_fnStateSave:function(a){var b,f,c,d=this.s.dt.aoColumns;a.ColReorder=[];if(a.aaSorting){for(b=0;b<a.aaSorting.length;b++)a.aaSorting[b][0]=d[a.aaSorting[b][0]]._ColReorder_iOrigCol;
var g=e.extend(!0,[],a.aoSearchCols);b=0;for(f=d.length;b<f;b++)c=d[b]._ColReorder_iOrigCol,a.aoSearchCols[c]=g[b],a.abVisCols[c]=d[b].bVisible,a.ColReorder.push(c)}else if(a.order){for(b=0;b<a.order.length;b++)a.order[b][0]=d[a.order[b][0]]._ColReorder_iOrigCol;g=e.extend(!0,[],a.columns);b=0;for(f=d.length;b<f;b++)c=d[b]._ColReorder_iOrigCol,a.columns[c]=g[b],a.ColReorder.push(c)}},_fnMouseListener:function(a,b){var f=this;e(b).on("mousedown.ColReorder",function(a){a.preventDefault();f._fnMouseDown.call(f,
a,b)})},_fnMouseDown:function(a,b){var f=this,c=e(a.target).closest("th, td").offset(),d=parseInt(e(b).attr("data-column-index"),10);d!==h&&(this.s.mouse.startX=a.pageX,this.s.mouse.startY=a.pageY,this.s.mouse.offsetX=a.pageX-c.left,this.s.mouse.offsetY=a.pageY-c.top,this.s.mouse.target=this.s.dt.aoColumns[d].nTh,this.s.mouse.targetIndex=d,this.s.mouse.fromIndex=d,this._fnRegions(),e(l).on("mousemove.ColReorder",function(a){f._fnMouseMove.call(f,a)}).on("mouseup.ColReorder",function(a){f._fnMouseUp.call(f,
a)}))},_fnMouseMove:function(a){if(null===this.dom.drag){if(5>Math.pow(Math.pow(a.pageX-this.s.mouse.startX,2)+Math.pow(a.pageY-this.s.mouse.startY,2),.5))return;this._fnCreateDragNode()}this.dom.drag.css({left:a.pageX-this.s.mouse.offsetX,top:a.pageY-this.s.mouse.offsetY});for(var b=!1,e=this.s.mouse.toIndex,c=1,d=this.s.aoTargets.length;c<d;c++)if(a.pageX<this.s.aoTargets[c-1].x+(this.s.aoTargets[c].x-this.s.aoTargets[c-1].x)/2){this.dom.pointer.css("left",this.s.aoTargets[c-1].x);this.s.mouse.toIndex=
this.s.aoTargets[c-1].to;b=!0;break}b||(this.dom.pointer.css("left",this.s.aoTargets[this.s.aoTargets.length-1].x),this.s.mouse.toIndex=this.s.aoTargets[this.s.aoTargets.length-1].to);this.s.init.bRealtime&&e!==this.s.mouse.toIndex&&(this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex,this.s.mouse.toIndex),this.s.mouse.fromIndex=this.s.mouse.toIndex,this._fnRegions())},_fnMouseUp:function(a){e(l).off("mousemove.ColReorder mouseup.ColReorder");null!==this.dom.drag&&(this.dom.drag.remove(),this.dom.pointer.remove(),
this.dom.drag=null,this.dom.pointer=null,this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex,this.s.mouse.toIndex),this._fnSetColumnIndexes(),""===this.s.dt.oScroll.sX&&""===this.s.dt.oScroll.sY||this.s.dt.oInstance.fnAdjustColumnSizing(!1),this.s.dt.oInstance.oApi._fnSaveState(this.s.dt),null!==this.s.reorderCallback&&this.s.reorderCallback.call(this))},_fnRegions:function(){var a=this.s.dt.aoColumns;this.s.aoTargets.splice(0,this.s.aoTargets.length);this.s.aoTargets.push({x:e(this.s.dt.nTable).offset().left,
to:0});for(var b=0,c=0,g=a.length;c<g;c++)c!=this.s.mouse.fromIndex&&b++,a[c].bVisible&&this.s.aoTargets.push({x:e(a[c].nTh).offset().left+e(a[c].nTh).outerWidth(),to:b});0!==this.s.fixedRight&&this.s.aoTargets.splice(this.s.aoTargets.length-this.s.fixedRight);0!==this.s.fixed&&this.s.aoTargets.splice(0,this.s.fixed)},_fnCreateDragNode:function(){var a=""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY,b=this.s.dt.aoColumns[this.s.mouse.targetIndex].nTh,c=b.parentNode,g=c.parentNode,d=g.parentNode,
h=e(b).clone();this.dom.drag=e(d.cloneNode(!1)).addClass("DTCR_clonedTable").append(e(g.cloneNode(!1)).append(e(c.cloneNode(!1)).append(h[0]))).css({position:"absolute",top:0,left:0,width:e(b).outerWidth(),height:e(b).outerHeight()}).appendTo("body");this.dom.pointer=e("<div></div>").addClass("DTCR_pointer").css({position:"absolute",top:a?e("div.dataTables_scroll",this.s.dt.nTableWrapper).offset().top:e(this.s.dt.nTable).offset().top,height:a?e("div.dataTables_scroll",this.s.dt.nTableWrapper).height():
e(this.s.dt.nTable).height()}).appendTo("body")},_fnDestroy:function(){var a,b;a=0;for(b=this.s.dt.aoDrawCallback.length;a<b;a++)if("ColReorder_Pre"===this.s.dt.aoDrawCallback[a].sName){this.s.dt.aoDrawCallback.splice(a,1);break}e(this.s.dt.nTHead).find("*").off(".ColReorder");e.each(this.s.dt.aoColumns,function(a,b){e(b.nTh).removeAttr("data-column-index")});this.s=this.s.dt._colReorder=null},_fnSetColumnIndexes:function(){e.each(this.s.dt.aoColumns,function(a,b){e(b.nTh).attr("data-column-index",
a)})}};g.defaults={aiOrder:null,bRealtime:!1,iFixedColumns:0,iFixedColumnsRight:0,fnReorderCallback:null};g.version="1.1.3";e.fn.dataTable.ColReorder=g;e.fn.DataTable.ColReorder=g;"function"==typeof e.fn.dataTable&&"function"==typeof e.fn.dataTableExt.fnVersionCheck&&e.fn.dataTableExt.fnVersionCheck("1.9.3")?e.fn.dataTableExt.aoFeatures.push({fnInit:function(a){var b=a.oInstance;a._colReorder?b.oApi._fnLog(a,1,"ColReorder attempted to initialise twice. Ignoring second"):(b=a.oInit,new g(a,b.colReorder||
b.oColReorder||{}));return null},cFeature:"R",sFeature:"ColReorder"}):alert("Warning: ColReorder requires DataTables 1.9.3 or greater - www.datatables.net/download");e.fn.dataTable.Api&&(e.fn.dataTable.Api.register("colReorder.reset()",function(){return this.iterator("table",function(a){a._colReorder.fnReset()})}),e.fn.dataTable.Api.register("colReorder.order()",function(a){return a?this.iterator("table",function(b){b._colReorder.fnOrder(a)}):this.context.length?this.context[0]._colReorder.fnOrder():
null}));return g};"function"===typeof define&&define.amd?define(["jquery","datatables"],c):"object"===typeof exports?c(require("jquery"),require("datatables")):jQuery&&!jQuery.fn.dataTable.ColReorder&&c(jQuery,jQuery.fn.dataTable)})(window,document);