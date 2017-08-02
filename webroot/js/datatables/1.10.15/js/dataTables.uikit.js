/*
 DataTables UIkit 3 integration
*/
var $jscomp={scope:{},findInternal:function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var l=a[e];if(b.call(c,l,e,a))return{i:e,v:l}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).v}},"es6-impl","es3");
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)}):"object"===typeof exports?module.exports=function(b,c){b||(b=window);c&&c.fn.dataTable||(c=require("datatables.net")(b,c).$);return a(c,b,b.document)}:a(jQuery,window,document)})(function(a,b,c,d){var e=a.fn.dataTable;a.extend(!0,e.defaults,{dom:"<'row uk-grid'<'uk-width-1-2'l><'uk-width-1-2'f>><'row uk-grid dt-merge-grid'<'uk-width-1-1'tr>><'row uk-grid dt-merge-grid'<'uk-width-2-5'i><'uk-width-3-5'p>>",
renderer:"uikit"});a.extend(e.ext.classes,{sWrapper:"dataTables_wrapper uk-form dt-uikit",sFilterInput:"uk-form-small",sLengthSelect:"uk-form-small",sProcessing:"dataTables_processing uk-panel"});e.ext.renderer.pageButton.uikit=function(b,d,v,p,m,q){var l=new e.Api(b),w=b.oClasses,n=b.oLanguage.oPaginate,x=b.oLanguage.oAria.paginate||{},h,f,r=0,u=function(c,e){var d,k,t,g,p=function(b){b.preventDefault();a(b.currentTarget).hasClass("disabled")||l.page()==b.data.action||l.page(b.data.action).draw("page")};
d=0;for(k=e.length;d<k;d++)if(g=e[d],a.isArray(g))u(c,g);else{f=h="";switch(g){case "ellipsis":h='<i class="uk-icon-ellipsis-h"></i>';f="uk-disabled disabled";break;case "first":h='<i class="uk-icon-angle-double-left"></i> '+n.sFirst;f=0<m?"":" uk-disabled disabled";break;case "previous":h='<i class="uk-icon-angle-left"></i> '+n.sPrevious;f=0<m?"":"uk-disabled disabled";break;case "next":h=n.sNext+' <i class="uk-icon-angle-right"></i>';f=m<q-1?"":"uk-disabled disabled";break;case "last":h=n.sLast+
' <i class="uk-icon-angle-double-right"></i>';f=m<q-1?"":" uk-disabled disabled";break;default:h=g+1,f=m===g?"uk-active":""}h&&(t=a("<li>",{"class":w.sPageButton+" "+f,id:0===v&&"string"===typeof g?b.sTableId+"_"+g:null}).append(a(-1!=f.indexOf("disabled")||-1!=f.indexOf("active")?"<span>":"<a>",{href:"#","aria-controls":b.sTableId,"aria-label":x[g],"data-dt-idx":r,tabindex:b.iTabIndex}).html(h)).appendTo(c),b.oApi._fnBindAction(t,{action:g},p),r++)}},k;try{k=a(d).find(c.activeElement).data("dt-idx")}catch(y){}u(a(d).empty().html('<ul class="uk-pagination uk-pagination-right"/>').children("ul"),
p);k&&a(d).find("[data-dt-idx="+k+"]").focus()};return e});