(function(){function v(a){for(var e,n=0,m=0,p,f=a.$.rows.length;m<f;m++){p=a.$.rows[m];for(var d=e=0,c,b=p.cells.length;d<b;d++)c=p.cells[d],e+=c.colSpan;e>n&&(n=e)}return n}function r(a){return function(){var e=this.getValue();(e=!!(CKEDITOR.dialog.validate.integer()(e)&&0<e))||(alert(a),this.select());return e}}function q(a,e){var n=function(f){return new CKEDITOR.dom.element(f,a.document)},q=a.editable(),p=a.plugins.dialogadvtab;return{title:a.lang.table.title,minWidth:310,minHeight:CKEDITOR.env.ie?
310:280,onLoad:function(){var f=this,a=f.getContentElement("advanced","advStyles");if(a)a.on("change",function(){var a=this.getStyle("width",""),b=f.getContentElement("info","txtWidth");b&&b.setValue(a,!0);a=this.getStyle("height","");(b=f.getContentElement("info","txtHeight"))&&b.setValue(a,!0)})},onShow:function(){var f=a.getSelection(),d=f.getRanges(),c,b=this.getContentElement("info","txtRows"),h=this.getContentElement("info","txtCols"),t=this.getContentElement("info","txtWidth"),g=this.getContentElement("info",
"txtHeight");"tableProperties"==e&&((f=f.getSelectedElement())&&f.is("table")?c=f:0<d.length&&(CKEDITOR.env.webkit&&d[0].shrink(CKEDITOR.NODE_ELEMENT),c=a.elementPath(d[0].getCommonAncestor(!0)).contains("table",1)),this._.selectedElement=c);c?(this.setupContent(c),b&&b.disable(),h&&h.disable()):(b&&b.enable(),h&&h.enable());t&&t.onChange();g&&g.onChange()},onOk:function(){var f=a.getSelection(),d=this._.selectedElement&&f.createBookmarks(),c=this._.selectedElement||n("table"),b={};this.commitContent(b,
c);if(b.info){b=b.info;if(!this._.selectedElement)for(var h=c.append(n("tbody")),e=parseInt(b.txtRows,10)||0,g=parseInt(b.txtCols,10)||0,k=0;k<e;k++)for(var l=h.append(n("tr")),m=0;m<g;m++)l.append(n("td")).appendBogus();e=b.selHeaders;if(!c.$.tHead&&("row"==e||"both"==e)){l=new CKEDITOR.dom.element(c.$.createTHead());h=c.getElementsByTag("tbody").getItem(0);h=h.getElementsByTag("tr").getItem(0);for(k=0;k<h.getChildCount();k++)g=h.getChild(k),g.type==CKEDITOR.NODE_ELEMENT&&!g.data("cke-bookmark")&&
(g.renameNode("th"),g.setAttribute("scope","col"));l.append(h.remove())}if(null!==c.$.tHead&&"row"!=e&&"both"!=e){l=new CKEDITOR.dom.element(c.$.tHead);h=c.getElementsByTag("tbody").getItem(0);for(m=h.getFirst();0<l.getChildCount();){h=l.getFirst();for(k=0;k<h.getChildCount();k++)g=h.getChild(k),g.type==CKEDITOR.NODE_ELEMENT&&(g.renameNode("td"),g.removeAttribute("scope"));h.insertBefore(m)}l.remove()}if(!this.hasColumnHeaders&&("col"==e||"both"==e))for(l=0;l<c.$.rows.length;l++)g=new CKEDITOR.dom.element(c.$.rows[l].cells[0]),
g.renameNode("th"),g.setAttribute("scope","row");if(this.hasColumnHeaders&&"col"!=e&&"both"!=e)for(k=0;k<c.$.rows.length;k++)l=new CKEDITOR.dom.element(c.$.rows[k]),"tbody"==l.getParent().getName()&&(g=new CKEDITOR.dom.element(l.$.cells[0]),g.renameNode("td"),g.removeAttribute("scope"));b.txtHeight?c.setStyle("height",b.txtHeight):c.removeStyle("height");b.txtWidth?c.setStyle("width",b.txtWidth):c.removeStyle("width");c.getAttribute("style")||c.removeAttribute("style")}if(this._.selectedElement)try{f.selectBookmarks(d)}catch(w){}else a.insertElement(c),
setTimeout(function(){var f=new CKEDITOR.dom.element(c.$.rows[0].cells[0]),b=a.createRange();b.moveToPosition(f,CKEDITOR.POSITION_AFTER_START);b.select()},0)},contents:[{id:"info",label:a.lang.table.title,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"txtRows","default":3,label:a.lang.table.rows,required:!0,controlStyle:"width:5em",validate:r(a.lang.table.invalidRows),setup:function(a){this.setValue(a.$.rows.length)},
commit:m},{type:"text",id:"txtCols","default":2,label:a.lang.table.columns,required:!0,controlStyle:"width:5em",validate:r(a.lang.table.invalidCols),setup:function(a){this.setValue(v(a))},commit:m},{type:"html",html:"&nbsp;"},{type:"select",id:"selHeaders",requiredContent:"th","default":"",label:a.lang.table.headers,items:[[a.lang.table.headersNone,""],[a.lang.table.headersRow,"row"],[a.lang.table.headersColumn,"col"],[a.lang.table.headersBoth,"both"]],setup:function(a){var f=this.getDialog();f.hasColumnHeaders=
!0;for(var c=0;c<a.$.rows.length;c++){var b=a.$.rows[c].cells[0];if(b&&"th"!=b.nodeName.toLowerCase()){f.hasColumnHeaders=!1;break}}null!==a.$.tHead?this.setValue(f.hasColumnHeaders?"both":"row"):this.setValue(f.hasColumnHeaders?"col":"")},commit:m},{type:"text",id:"txtBorder",requiredContent:"table[border]","default":a.filter.check("table[border]")?1:0,label:a.lang.table.border,controlStyle:"width:3em",validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidBorder),setup:function(a){this.setValue(a.getAttribute("border")||
"")},commit:function(a,d){this.getValue()?d.setAttribute("border",this.getValue()):d.removeAttribute("border")}},{id:"cmbAlign",type:"select",requiredContent:"table[align]","default":"",label:a.lang.common.align,items:[[a.lang.common.notSet,""],[a.lang.common.alignLeft,"left"],[a.lang.common.alignCenter,"center"],[a.lang.common.alignRight,"right"]],setup:function(a){this.setValue(a.getAttribute("align")||"")},commit:function(a,d){this.getValue()?d.setAttribute("align",this.getValue()):d.removeAttribute("align")}}]},
{type:"vbox",padding:0,children:[{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtWidth",requiredContent:"table{width}",controlStyle:"width:5em",label:a.lang.common.width,title:a.lang.common.cssLengthTooltip,"default":a.filter.check("table{width}")?500>q.getSize("width")?"100%":500:0,getValue:u,validate:CKEDITOR.dialog.validate.cssLength(a.lang.common.invalidCssLength.replace("%1",a.lang.common.width)),onChange:function(){var a=this.getDialog().getContentElement("advanced","advStyles");a&&
a.updateStyle("width",this.getValue())},setup:function(a){this.setValue(a.getStyle("width"))},commit:m}]},{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtHeight",requiredContent:"table{height}",controlStyle:"width:5em",label:a.lang.common.height,title:a.lang.common.cssLengthTooltip,"default":"",getValue:u,validate:CKEDITOR.dialog.validate.cssLength(a.lang.common.invalidCssLength.replace("%1",a.lang.common.height)),onChange:function(){var a=this.getDialog().getContentElement("advanced","advStyles");
a&&a.updateStyle("height",this.getValue())},setup:function(a){(a=a.getStyle("height"))&&this.setValue(a)},commit:m}]},{type:"html",html:"&nbsp;"},{type:"text",id:"txtCellSpace",requiredContent:"table[cellspacing]",controlStyle:"width:3em",label:a.lang.table.cellSpace,"default":a.filter.check("table[cellspacing]")?1:0,validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidCellSpacing),setup:function(a){this.setValue(a.getAttribute("cellSpacing")||"")},commit:function(a,d){this.getValue()?d.setAttribute("cellSpacing",
this.getValue()):d.removeAttribute("cellSpacing")}},{type:"text",id:"txtCellPad",requiredContent:"table[cellpadding]",controlStyle:"width:3em",label:a.lang.table.cellPad,"default":a.filter.check("table[cellpadding]")?1:0,validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidCellPadding),setup:function(a){this.setValue(a.getAttribute("cellPadding")||"")},commit:function(a,d){this.getValue()?d.setAttribute("cellPadding",this.getValue()):d.removeAttribute("cellPadding")}}]}]},{type:"html",align:"right",
html:""},{type:"vbox",padding:0,children:[{type:"text",id:"txtCaption",requiredContent:"caption",label:a.lang.table.caption,setup:function(a){this.enable();a=a.getElementsByTag("caption");if(0<a.count()){a=a.getItem(0);var d=a.getFirst(CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT));d&&!d.equals(a.getBogus())?(this.disable(),this.setValue(a.getText())):(a=CKEDITOR.tools.trim(a.getText()),this.setValue(a))}},commit:function(f,d){if(this.isEnabled()){var c=this.getValue(),b=d.getElementsByTag("caption");
if(c)0<b.count()?(b=b.getItem(0),b.setHtml("")):(b=new CKEDITOR.dom.element("caption",a.document),d.getChildCount()?b.insertBefore(d.getFirst()):b.appendTo(d)),b.append(new CKEDITOR.dom.text(c,a.document));else if(0<b.count())for(c=b.count()-1;0<=c;c--)b.getItem(c).remove()}}},{type:"text",id:"txtSummary",requiredContent:"table[summary]",label:a.lang.table.summary,setup:function(a){this.setValue(a.getAttribute("summary")||"")},commit:function(a,d){this.getValue()?d.setAttribute("summary",this.getValue()):
d.removeAttribute("summary")}}]}]},p&&p.createAdvancedTab(a,null,"table")]}}var u=CKEDITOR.tools.cssLength,m=function(a){var e=this.id;a.info||(a.info={});a.info[e]=this.getValue()};CKEDITOR.dialog.add("table",function(a){return q(a,"table")});CKEDITOR.dialog.add("tableProperties",function(a){return q(a,"tableProperties")})})();