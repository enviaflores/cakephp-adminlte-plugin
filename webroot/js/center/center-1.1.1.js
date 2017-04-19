/*
 Copyright 2011, Ben Lin (http://dreamerslab.com/)
 Licensed under the MIT License (LICENSE.txt).

 Version: 1.1.1

 Requires: jQuery 1.2.6+
*/
(function(e,f){e.fn.center=function(l){var h=e(f),g=h.scrollTop();return this.each(function(){var c=e(this),d=e.extend({against:"window",top:!1,topPercentage:.5,resize:!0},l),k=function(){var a=d.against,b;"window"===a?void 0!=f.innerWidth?b=[f.innerWidth,f.innerHeight]:(a=document.body,b=document.documentElement,b=[Math.max(b.clientWidth,a.clientWidth),Math.max(b.clientHeight,a.clientHeight)]):(a="parent"===a?c.parent():c.parents(a),b=[a.width(),a.height()],g=0);a=.5*(b[0]-c.outerWidth());b=(b[1]-
c.outerHeight())*d.topPercentage+g;d.top&&(b=d.top+g);c.css({left:a,top:b})};k();!0===d.resize&&h.resize(k)})}})(jQuery,window);
