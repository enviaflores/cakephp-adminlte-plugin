document.createElement("canvas").getContext||function(){function V(){return this.context_||(this.context_=new C(this))}function W(a,b,c){var f=M.call(arguments,2);return function(){return a.apply(b,f.concat(M.call(arguments)))}}function N(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function O(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");
a.styleSheets.ex_canvas_||(a=a.createStyleSheet(),a.owningElement.id="ex_canvas_",a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")}function X(a){var b=a.srcElement;switch(a.propertyName){case "width":b.getContext().clearRect();b.style.width=b.attributes.width.nodeValue+"px";b.firstChild.style.width=b.clientWidth+"px";break;case "height":b.getContext().clearRect(),b.style.height=b.attributes.height.nodeValue+"px",b.firstChild.style.height=b.clientHeight+
"px"}}function Y(a){a=a.srcElement;a.firstChild&&(a.firstChild.style.width=a.clientWidth+"px",a.firstChild.style.height=a.clientHeight+"px")}function D(){return[[1,0,0],[0,1,0],[0,0,1]]}function t(a,b){for(var c=D(),f=0;3>f;f++)for(var e=0;3>e;e++){for(var m=0,g=0;3>g;g++)m+=a[f][g]*b[g][e];c[f][e]=m}return c}function P(a,b){b.fillStyle=a.fillStyle;b.lineCap=a.lineCap;b.lineJoin=a.lineJoin;b.lineWidth=a.lineWidth;b.miterLimit=a.miterLimit;b.shadowBlur=a.shadowBlur;b.shadowColor=a.shadowColor;b.shadowOffsetX=
a.shadowOffsetX;b.shadowOffsetY=a.shadowOffsetY;b.strokeStyle=a.strokeStyle;b.globalAlpha=a.globalAlpha;b.font=a.font;b.textAlign=a.textAlign;b.textBaseline=a.textBaseline;b.arcScaleX_=a.arcScaleX_;b.arcScaleY_=a.arcScaleY_;b.lineScale_=a.lineScale_}function Q(a){var b=a.indexOf("(",3),c=a.indexOf(")",b+1),b=a.substring(b+1,c).split(",");if(4!=b.length||"a"!=a.charAt(3))b[3]=1;return b}function E(a,b,c){return Math.min(c,Math.max(b,a))}function F(a,b,c){0>c&&c++;1<c&&c--;return 1>6*c?a+6*(b-a)*c:
1>2*c?b:2>3*c?a+(b-a)*(2/3-c)*6:a}function G(a){if(a in H)return H[a];var b,c=1;a=String(a);if("#"==a.charAt(0))b=a;else if(/^rgb/.test(a)){c=Q(a);b="#";for(var f,e=0;3>e;e++)f=-1!=c[e].indexOf("%")?Math.floor(parseFloat(c[e])/100*255):+c[e],b+=w[E(f,0,255)];c=+c[3]}else if(/^hsl/.test(a)){e=c=Q(a);b=parseFloat(e[0])/360%360;0>b&&b++;f=E(parseFloat(e[1])/100,0,1);e=E(parseFloat(e[2])/100,0,1);if(0==f)f=e=b=e;else{var m=0.5>e?e*(1+f):e+f-e*f,g=2*e-m;f=F(g,m,b+1/3);e=F(g,m,b);b=F(g,m,b-1/3)}b="#"+w[Math.floor(255*
f)]+w[Math.floor(255*e)]+w[Math.floor(255*b)];c=c[3]}else b=Z[a]||a;return H[a]={color:b,alpha:c}}function C(a){this.m_=D();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=1*q;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=a;var b="width:"+a.clientWidth+"px;height:"+a.clientHeight+"px;overflow:hidden;position:absolute",
c=a.ownerDocument.createElement("div");c.style.cssText=b;a.appendChild(c);b=c.cloneNode(!1);b.style.backgroundColor="red";b.style.filter="alpha(opacity=0)";a.appendChild(b);this.element_=c;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function R(a,b,c,f){a.currentPath_.push({type:"bezierCurveTo",cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:f.x,y:f.y});a.currentX_=f.x;a.currentY_=f.y}function S(a,b){var c=G(a.strokeStyle),f=c.color,c=c.alpha*a.globalAlpha,e=a.lineScale_*a.lineWidth;1>e&&(c*=e);b.push("<g_vml_:stroke",
' opacity="',c,'"',' joinstyle="',a.lineJoin,'"',' miterlimit="',a.miterLimit,'"',' endcap="',$[a.lineCap]||"square",'"',' weight="',e,'px"',' color="',f,'" />')}function T(a,b,c,f){var e=a.fillStyle,m=a.arcScaleX_,g=a.arcScaleY_,d=f.x-c.x,h=f.y-c.y;if(e instanceof x){var k=0,l=f=0,v=0,n=1;if("gradient"==e.type_){k=e.x1_/m;c=e.y1_/g;var p=s(a,e.x0_/m,e.y0_/g),k=s(a,k,c),k=180*Math.atan2(k.x-p.x,k.y-p.y)/Math.PI;0>k&&(k+=360);1E-6>k&&(k=0)}else p=s(a,e.x0_,e.y0_),f=(p.x-c.x)/d,l=(p.y-c.y)/h,d/=m*q,
h/=g*q,n=y.max(d,h),v=2*e.r0_/n,n=2*e.r1_/n-v;m=e.colors_;m.sort(function(a,b){return a.offset-b.offset});g=m.length;p=m[0].color;c=m[g-1].color;d=m[0].alpha*a.globalAlpha;a=m[g-1].alpha*a.globalAlpha;for(var h=[],r=0;r<g;r++){var t=m[r];h.push(t.offset*n+v+" "+t.color)}b.push('<g_vml_:fill type="',e.type_,'"',' method="none" focus="100%"',' color="',p,'"',' color2="',c,'"',' colors="',h.join(","),'"',' opacity="',a,'"',' g_o_:opacity2="',d,'"',' angle="',k,'"',' focusposition="',f,",",l,'" />')}else e instanceof
I?d&&h&&b.push("<g_vml_:fill",' position="',-c.x/d*m*m,",",-c.y/h*g*g,'"',' type="tile"',' src="',e.src_,'" />'):(e=G(a.fillStyle),b.push('<g_vml_:fill color="',e.color,'" opacity="',e.alpha*a.globalAlpha,'" />'))}function s(a,b,c){a=a.m_;return{x:q*(b*a[0][0]+c*a[1][0]+a[2][0])-r,y:q*(b*a[0][1]+c*a[1][1]+a[2][1])-r}}function z(a,b,c){isFinite(b[0][0])&&isFinite(b[0][1])&&isFinite(b[1][0])&&isFinite(b[1][1])&&isFinite(b[2][0])&&isFinite(b[2][1])&&(a.m_=b,c&&(a.lineScale_=aa(ba(b[0][0]*b[1][1]-b[0][1]*
b[1][0]))))}function x(a){this.type_=a;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function I(a,b){if(!a||1!=a.nodeType||"IMG"!=a.tagName)throw new A("TYPE_MISMATCH_ERR");if("complete"!=a.readyState)throw new A("INVALID_STATE_ERR");switch(b){case "repeat":case null:case "":this.repetition_="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":this.repetition_=b;break;default:throw new A("SYNTAX_ERR");}this.src_=a.src;this.width_=a.width;this.height_=a.height}
function A(a){this.code=this[a];this.message=a+": DOM Exception "+this.code}var y=Math,h=y.round,J=y.sin,K=y.cos,ba=y.abs,aa=y.sqrt,q=10,r=q/2;navigator.userAgent.match(/MSIE ([\d.]+)?/);var M=Array.prototype.slice;O(document);var U={init:function(a){a=a||document;a.createElement("canvas");a.attachEvent("onreadystatechange",W(this.init_,this,a))},init_:function(a){a=a.getElementsByTagName("canvas");for(var b=0;b<a.length;b++)this.initElement(a[b])},initElement:function(a){if(!a.getContext){a.getContext=
V;O(a.ownerDocument);a.innerHTML="";a.attachEvent("onpropertychange",X);a.attachEvent("onresize",Y);var b=a.attributes;b.width&&b.width.specified?a.style.width=b.width.nodeValue+"px":a.width=a.clientWidth;b.height&&b.height.specified?a.style.height=b.height.nodeValue+"px":a.height=a.clientHeight}return a}};U.init();for(var w=[],d=0;16>d;d++)for(var B=0;16>B;B++)w[16*d+B]=d.toString(16)+B.toString(16);var Z={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",
bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",
darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",
ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",
mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",
peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},
H={},L={},$={butt:"flat",round:"round"},d=C.prototype;d.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null);this.element_.innerHTML=""};d.beginPath=function(){this.currentPath_=[]};d.moveTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.lineTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.bezierCurveTo=
function(a,b,c,f,e,d){e=s(this,e,d);a=s(this,a,b);c=s(this,c,f);R(this,a,c,e)};d.quadraticCurveTo=function(a,b,c,f){a=s(this,a,b);c=s(this,c,f);f={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)};R(this,f,{x:f.x+(c.x-this.currentX_)/3,y:f.y+(c.y-this.currentY_)/3},c)};d.arc=function(a,b,c,f,e,d){c*=q;var g=d?"at":"wa",h=a+K(f)*c-r,u=b+J(f)*c-r;f=a+K(e)*c-r;e=b+J(e)*c-r;h!=f||d||(h+=0.125);a=s(this,a,b);h=s(this,h,u);f=s(this,f,e);this.currentPath_.push({type:g,
x:a.x,y:a.y,radius:c,xStart:h.x,yStart:h.y,xEnd:f.x,yEnd:f.y})};d.rect=function(a,b,c,f){this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+f);this.lineTo(a,b+f);this.closePath()};d.strokeRect=function(a,b,c,f){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+f);this.lineTo(a,b+f);this.closePath();this.stroke();this.currentPath_=e};d.fillRect=function(a,b,c,f){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+
c,b+f);this.lineTo(a,b+f);this.closePath();this.fill();this.currentPath_=e};d.createLinearGradient=function(a,b,c,f){var e=new x("gradient");e.x0_=a;e.y0_=b;e.x1_=c;e.y1_=f;return e};d.createRadialGradient=function(a,b,c,f,e,d){var g=new x("gradientradial");g.x0_=a;g.y0_=b;g.r0_=c;g.x1_=f;g.y1_=e;g.r1_=d;return g};d.drawImage=function(a,b){var c,f,e,d,g,r,u,k;e=a.runtimeStyle.width;d=a.runtimeStyle.height;a.runtimeStyle.width="auto";a.runtimeStyle.height="auto";var l=a.width,v=a.height;a.runtimeStyle.width=
e;a.runtimeStyle.height=d;if(3==arguments.length)c=arguments[1],f=arguments[2],g=r=0,u=e=l,k=d=v;else if(5==arguments.length)c=arguments[1],f=arguments[2],e=arguments[3],d=arguments[4],g=r=0,u=l,k=v;else if(9==arguments.length)g=arguments[1],r=arguments[2],u=arguments[3],k=arguments[4],c=arguments[5],f=arguments[6],e=arguments[7],d=arguments[8];else throw Error("Invalid number of arguments");var n=s(this,c,f),p=[];p.push(" <g_vml_:group",' coordsize="',10*q,",",10*q,'"',' coordorigin="0,0"',' style="width:',
10,"px;height:",10,"px;position:absolute;");if(1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var t=[];t.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",h(n.x/q),",","Dy=",h(n.y/q),"");var w=s(this,c+e,f),x=s(this,c,f+d);c=s(this,c+e,f+d);n.x=y.max(n.x,w.x,x.x,c.x);n.y=y.max(n.y,w.y,x.y,c.y);p.push("padding:0 ",h(n.x/q),"px ",h(n.y/q),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",t.join(""),", sizingmethod='clip');")}else p.push("top:",
h(n.y/q),"px;left:",h(n.x/q),"px;");p.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',q*e,"px;"," height:",q*d,'px"',' cropleft="',g/l,'"',' croptop="',r/v,'"',' cropright="',(l-g-u)/l,'"',' cropbottom="',(v-r-k)/v,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",p.join(""))};d.stroke=function(a){for(var b={x:null,y:null},c={x:null,y:null},f=0;f<this.currentPath_.length;f+=5E3){var e=[];e.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',
10,"px;height:",10,'px;"',' coordorigin="0,0"',' coordsize="',10*q,",",10*q,'"',' stroked="',!a,'"',' path="');for(var d=f;d<Math.min(f+5E3,this.currentPath_.length);d++){0==d%5E3&&0<d&&e.push(" m ",h(this.currentPath_[d-1].x),",",h(this.currentPath_[d-1].y));var g=this.currentPath_[d];switch(g.type){case "moveTo":e.push(" m ",h(g.x),",",h(g.y));break;case "lineTo":e.push(" l ",h(g.x),",",h(g.y));break;case "close":e.push(" x ");g=null;break;case "bezierCurveTo":e.push(" c ",h(g.cp1x),",",h(g.cp1y),
",",h(g.cp2x),",",h(g.cp2y),",",h(g.x),",",h(g.y));break;case "at":case "wa":e.push(" ",g.type," ",h(g.x-this.arcScaleX_*g.radius),",",h(g.y-this.arcScaleY_*g.radius)," ",h(g.x+this.arcScaleX_*g.radius),",",h(g.y+this.arcScaleY_*g.radius)," ",h(g.xStart),",",h(g.yStart)," ",h(g.xEnd),",",h(g.yEnd))}if(g){if(null==b.x||g.x<b.x)b.x=g.x;if(null==c.x||g.x>c.x)c.x=g.x;if(null==b.y||g.y<b.y)b.y=g.y;if(null==c.y||g.y>c.y)c.y=g.y}}e.push(' ">');a?T(this,e,b,c):S(this,e);e.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",
e.join(""))}};d.fill=function(){this.stroke(!0)};d.closePath=function(){this.currentPath_.push({type:"close"})};d.save=function(){var a={};P(this,a);this.aStack_.push(a);this.mStack_.push(this.m_);this.m_=t(D(),this.m_)};d.restore=function(){this.aStack_.length&&(P(this.aStack_.pop(),this),this.m_=this.mStack_.pop())};d.translate=function(a,b){z(this,t([[1,0,0],[0,1,0],[a,b,1]],this.m_),!1)};d.rotate=function(a){var b=K(a);a=J(a);z(this,t([[b,a,0],[-a,b,0],[0,0,1]],this.m_),!1)};d.scale=function(a,
b){this.arcScaleX_*=a;this.arcScaleY_*=b;z(this,t([[a,0,0],[0,b,0],[0,0,1]],this.m_),!0)};d.transform=function(a,b,c,f,e,d){z(this,t([[a,b,0],[c,f,0],[e,d,1]],this.m_),!0)};d.setTransform=function(a,b,c,f,e,d){z(this,[[a,b,0],[c,f,0],[e,d,1]],!0)};d.drawText_=function(a,b,c,d,e){var m=this.m_;d=0;var g=1E3,r=0,u=[],k;k=this.font;if(L[k])k=L[k];else{var l=document.createElement("div").style;try{l.font=k}catch(t){}k=L[k]={style:l.fontStyle||"normal",variant:l.fontVariant||"normal",weight:l.fontWeight||
"normal",size:l.fontSize||10,family:l.fontFamily||"sans-serif"}}var l=k,n=this.element_;k={};for(var p in l)k[p]=l[p];p=parseFloat(n.currentStyle.fontSize);n=parseFloat(l.size);"number"==typeof l.size?k.size=l.size:-1!=l.size.indexOf("px")?k.size=n:-1!=l.size.indexOf("em")?k.size=p*n:-1!=l.size.indexOf("%")?k.size=p/100*n:-1!=l.size.indexOf("pt")?k.size=n/0.75:k.size=p;k.size*=0.981;p=k.style+" "+k.variant+" "+k.weight+" "+k.size+"px "+k.family;n=this.element_.currentStyle;l=this.textAlign.toLowerCase();
switch(l){case "left":case "center":case "right":break;case "end":l="ltr"==n.direction?"right":"left";break;case "start":l="rtl"==n.direction?"right":"left";break;default:l="left"}switch(this.textBaseline){case "hanging":case "top":r=k.size/1.75;break;case "middle":break;default:case null:case "alphabetic":case "ideographic":case "bottom":r=-k.size/2.25}switch(l){case "right":d=1E3;g=0.05;break;case "center":d=g=500}b=s(this,b+0,c+r);u.push('<g_vml_:line from="',-d,' 0" to="',g,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',
' filled="',!e,'" stroked="',!!e,'" style="position:absolute;width:1px;height:1px;">');e?S(this,u):T(this,u,{x:-d,y:0},{x:g,y:k.size});e=m[0][0].toFixed(3)+","+m[1][0].toFixed(3)+","+m[0][1].toFixed(3)+","+m[1][1].toFixed(3)+",0,0";b=h(b.x/q)+","+h(b.y/q);u.push('<g_vml_:skew on="t" matrix="',e,'" ',' offset="',b,'" origin="',d,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',N(a),'" style="v-text-align:',l,";font:",N(p),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",
u.join(""))};d.fillText=function(a,b,c,d){this.drawText_(a,b,c,d,!1)};d.strokeText=function(a,b,c,d){this.drawText_(a,b,c,d,!0)};d.measureText=function(a){this.textMeasureEl_||(this.element_.insertAdjacentHTML("beforeEnd",'<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'),this.textMeasureEl_=this.element_.lastChild);var b=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(b.createTextNode(a));
return{width:this.textMeasureEl_.offsetWidth}};d.clip=function(){};d.arcTo=function(){};d.createPattern=function(a,b){return new I(a,b)};x.prototype.addColorStop=function(a,b){b=G(b);this.colors_.push({offset:a,color:b.color,alpha:b.alpha})};d=A.prototype=Error();d.INDEX_SIZE_ERR=1;d.DOMSTRING_SIZE_ERR=2;d.HIERARCHY_REQUEST_ERR=3;d.WRONG_DOCUMENT_ERR=4;d.INVALID_CHARACTER_ERR=5;d.NO_DATA_ALLOWED_ERR=6;d.NO_MODIFICATION_ALLOWED_ERR=7;d.NOT_FOUND_ERR=8;d.NOT_SUPPORTED_ERR=9;d.INUSE_ATTRIBUTE_ERR=10;
d.INVALID_STATE_ERR=11;d.SYNTAX_ERR=12;d.INVALID_MODIFICATION_ERR=13;d.NAMESPACE_ERR=14;d.INVALID_ACCESS_ERR=15;d.VALIDATION_ERR=16;d.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=U;CanvasRenderingContext2D=C;CanvasGradient=x;CanvasPattern=I;DOMException=A}();
