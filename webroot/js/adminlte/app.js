if ("undefined" === typeof jQuery) throw Error("AdminLTE requires jQuery");

var AdminLTEReloadPage = function(block_message) {
    for (i = 0; i < document.forms.length; i++) {
        document.forms[i].reset();
    }
    blockUI(block_message);
    window.location.reload(true);
}

var blockUI = function(content){
    if(!content)
        content = '<i style="font-size: 30px" class="fa fa-refresh fa-spin"></i>'
	$.msg({
        fadeIn : 0,
        autoUnblock : false,
        content : content
    });
}

var unblockUI = function(){
	$.msg( 'unblock' );
}
var AdminLTENoty = function(type, msg, modal, sticky) {
    if (!msg) {
        msg = 'Empty Message';
    }
    if (!modal) {
        modal = false;
    } else {
        modal = true;
    }
    if (!sticky) {
        timeout = 5000;
    } else {
        timeout = false;
    }

    switch (type) {
        case 'warning':
            noty({
                type : 'warning',
                text : msg,
                layout : 'topRight',
                theme : 'defaultTheme',
                dismissQueue : true,
                modal : modal,
                maxVisible : 5,
                timeout : timeout,
                closeWith : [ 'button' ]
            });
        break;
    case 'error':
            noty({
                type : 'error',
                text : msg,
                layout : 'topRight',
                theme : 'defaultTheme',
                dismissQueue : true,
                modal : modal,
                maxVisible : 5,
                timeout : timeout,
                closeWith : [ 'button' ]
            });
        break;
    case 'alert':
            noty({
                type : 'alert',
                text : msg,
                layout : 'topRight',
                theme : 'defaultTheme',
                dismissQueue : true,
                modal : modal,
                maxVisible : 5,
                timeout : timeout,
                closeWith : [ 'button' ]
            });
        break;
    case 'notify':
            noty({
                type : 'notification',
                text : msg,
                layout : 'topRight',
                theme : 'defaultTheme',
                dismissQueue : true,
                modal : modal,
                maxVisible : 5,
                timeout : timeout,
                closeWith : [ 'button' ]
            });
        break;
    case 'success':
            noty({
                type : 'success',
                text : msg,
                layout : 'topRight',
                theme : 'defaultTheme',
                dismissQueue : true,
                modal : modal,
                maxVisible : 5,
                timeout : timeout,
                closeWith : [ 'button' ]
            });
        break;
    }
};
$.AdminLTE = {};
$.AdminLTE.options = {
    navbarMenuSlimscroll: true,
    navbarMenuSlimscrollWidth: "3px",
    navbarMenuHeight: "200px",
    animationSpeed: 500,
    sidebarToggleSelector: "[data-toggle='offcanvas']",
    sidebarPushMenu: true,
    sidebarSlimScroll: true,
    sidebarExpandOnHover: !1,
    enableBoxRefresh: true,
    enableBSToppltip: true,
    BSTooltipSelector: "[data-toggle='tooltip']",
    enableFastclick: true,
    enableControlSidebar: true,
    controlSidebarOptions: {
        toggleBtnSelector: "[data-toggle='control-sidebar']",
        selector: ".control-sidebar",
        slide: true
    },
    enableBoxWidget: true,
    boxWidgetOptions: {
        boxWidgetIcons: {
            collapse: "fa-minus",
            open: "fa-plus",
            remove: "fa-times"
        },
        boxWidgetSelectors: {
            remove: '[data-widget="remove"]',
            collapse: '[data-widget="collapse"]'
        }
    },
    directChat: {
        enable: true,
        contactToggleSelector: '[data-widget="chat-pane-toggle"]'
    },
    colors: {
        lightBlue: "#3c8dbc",
        red: "#f56954",
        green: "#00a65a",
        aqua: "#00c0ef",
        yellow: "#f39c12",
        blue: "#0073b7",
        navy: "#001F3F",
        teal: "#39CCCC",
        olive: "#3D9970",
        lime: "#01FF70",
        orange: "#FF851B",
        fuchsia: "#F012BE",
        purple: "#8E24AA",
        maroon: "#D81B60",
        black: "#222222",
        gray: "#d2d6de"
    },
    screenSizes: {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1200
    }
};

$(function() {
    $("body").removeClass("hold-transition");
    "undefined" !== typeof AdminLTEOptions && $.extend(!0, $.AdminLTE.options, AdminLTEOptions);
    var a = $.AdminLTE.options;
    _init();
    $.AdminLTE.layout.activate();
    $.AdminLTE.tree(".sidebar");
    a.enableControlSidebar && $.AdminLTE.controlSidebar.activate();
    a.navbarMenuSlimscroll && "undefined" != typeof $.fn.slimscroll && $(".navbar .menu").slimscroll({
        height: a.navbarMenuHeight,
        alwaysVisible: !1,
        size: a.navbarMenuSlimscrollWidth
    }).css("width", "100%");
    a.sidebarPushMenu && $.AdminLTE.pushMenu.activate(a.sidebarToggleSelector);
    a.enableBSToppltip && $("body").tooltip({
        selector: a.BSTooltipSelector,
        trigger: 'click'
    });
    a.enableBoxWidget && $.AdminLTE.boxWidget.activate();
    a.enableFastclick && "undefined" != typeof FastClick && FastClick.attach(document.body);
    if (a.directChat.enable) $(document).on("click", a.directChat.contactToggleSelector, function() {
        $(this).parents(".direct-chat").first().toggleClass("direct-chat-contacts-open")
    });
    $('.btn-group[data-toggle="btn-toggle"]').each(function() {
        var a = $(this);
        $(this).find(".btn").on("click", function(c) {
            a.find(".btn.active").removeClass("active");
            $(this).addClass("active");
            c.preventDefault()
        })
    })
});

function _init() {
    $.AdminLTE.layout = {
        activate: function() {
            var a = this;
            a.fix();
            a.fixSidebar();
            $(window, ".wrapper").resize(function() {
                a.fix();
                a.fixSidebar()
            })
        },
        fix: function() {
            var a = $(".main-header").outerHeight() + $(".main-footer").outerHeight(),
                b = $(window).height(),
                c = $(".sidebar").height();
            $("body").hasClass("fixed") ? $(".content-wrapper, .right-side").css("min-height", b - $(".main-footer").outerHeight()) : (b >= c ? ($(".content-wrapper, .right-side").css("min-height", b - a), a = b - a) : ($(".content-wrapper, .right-side").css("min-height",
                c), a = c), b = $($.AdminLTE.options.controlSidebarOptions.selector), "undefined" !== typeof b && b.height() > a && $(".content-wrapper, .right-side").css("min-height", b.height()))
        },
        fixSidebar: function() {
            $("body").hasClass("fixed") ? ("undefined" == typeof $.fn.slimScroll && window.console && window.console.error("Error: the fixed layout requires the slimscroll plugin!"), $.AdminLTE.options.sidebarSlimScroll && "undefined" != typeof $.fn.slimScroll && ($(".sidebar").slimScroll({
                destroy: !0
            }).height("auto"), $(".sidebar").slimscroll({
                height: $(window).height() -
                    $(".main-header").height() + "px",
                color: "rgba(0,0,0,0.2)",
                size: "3px"
            }))) : "undefined" != typeof $.fn.slimScroll && $(".sidebar").slimScroll({
                destroy: !0
            }).height("auto")
        }
    };
    $.AdminLTE.pushMenu = {
        activate: function(a) {
            var b = $.AdminLTE.options.screenSizes;
            $(document).on("click", a, function(a) {
                a.preventDefault();
                $(window).width() > b.sm - 1 ? $("body").hasClass("sidebar-collapse") ? $("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu") : $("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu") :
                    $("body").hasClass("sidebar-open") ? $("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu") : $("body").addClass("sidebar-open").trigger("expanded.pushMenu")
            });
            $(".content-wrapper").click(function() {
                $(window).width() <= b.sm - 1 && $("body").hasClass("sidebar-open") && $("body").removeClass("sidebar-open")
            });
            ($.AdminLTE.options.sidebarExpandOnHover || $("body").hasClass("fixed") && $("body").hasClass("sidebar-mini")) && this.expandOnHover()
        },
        expandOnHover: function() {
            var a =
                this,
                b = $.AdminLTE.options.screenSizes.sm - 1;
            $(".main-sidebar").hover(function() {
                $("body").hasClass("sidebar-mini") && $("body").hasClass("sidebar-collapse") && $(window).width() > b && a.expand()
            }, function() {
                $("body").hasClass("sidebar-mini") && $("body").hasClass("sidebar-expanded-on-hover") && $(window).width() > b && a.collapse()
            })
        },
        expand: function() {
            $("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover")
        },
        collapse: function() {
            $("body").hasClass("sidebar-expanded-on-hover") && $("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse")
        }
    };
    $.AdminLTE.tree = function(a) {
        var b = this,
            c = $.AdminLTE.options.animationSpeed;
        $(a).on("click", "li a", function(a) {
            var f = $(this),
                d = f.next();
            if (d.is(".treeview-menu") && d.is(":visible") && !$("body").hasClass("sidebar-collapse")) d.slideUp(c, function() {
                d.removeClass("menu-open")
            }), d.parent("li").removeClass("active");
            else if (d.is(".treeview-menu") && !d.is(":visible")) {
                var g = f.parents("ul").first();
                g.find("ul:visible").slideUp(c).removeClass("menu-open");
                var h = f.parent("li");
                d.slideDown(c, function() {
                    d.addClass("menu-open");
                    g.find("li.active").removeClass("active");
                    h.addClass("active");
                    b.layout.fix()
                })
            }
            d.is(".treeview-menu") && a.preventDefault()
        })
    };
    $.AdminLTE.controlSidebar = {
        activate: function() {
            var a = this,
                b = $.AdminLTE.options.controlSidebarOptions,
                c = $(b.selector);
            $(b.toggleBtnSelector).on("click", function(e) {
                e.preventDefault();
                c.hasClass("control-sidebar-open") || $("body").hasClass("control-sidebar-open") ? a.close(c, b.slide) : a.open(c, b.slide)
            });
            var e = $(".control-sidebar-bg");
            a._fix(e);
            $("body").hasClass("fixed") ? a._fixForFixed(c) :
                $(".content-wrapper, .right-side").height() < c.height() && a._fixForContent(c)
        },
        open: function(a, b) {
            b ? a.addClass("control-sidebar-open") : $("body").addClass("control-sidebar-open")
        },
        close: function(a, b) {
            b ? a.removeClass("control-sidebar-open") : $("body").removeClass("control-sidebar-open")
        },
        _fix: function(a) {
            var b = this;
            $("body").hasClass("layout-boxed") ? (a.css("position", "absolute"), a.height($(".wrapper").height()), $(window).resize(function() {
                b._fix(a)
            })) : a.css({
                position: "fixed",
                height: "auto"
            })
        },
        _fixForFixed: function(a) {
            a.css({
                position: "fixed",
                "max-height": "100%",
                overflow: "auto",
                "padding-bottom": "50px"
            })
        },
        _fixForContent: function(a) {
            $(".content-wrapper, .right-side").css("min-height", a.height())
        }
    };
    $.AdminLTE.boxWidget = {
        selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,
        icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,
        animationSpeed: $.AdminLTE.options.animationSpeed,
        activate: function(a) {
            var b = this;
            a || (a = document);
            $(a).on("click", b.selectors.collapse, function(a) {
                a.preventDefault();
                b.collapse($(this))
            });
            $(a).on("click",
                b.selectors.remove,
                function(a) {
                    a.preventDefault();
                    b.remove($(this))
                })
        },
        collapse: function(a) {
            var b = a.parents(".box").first(),
                c = b.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
            b.hasClass("collapsed-box") ? (a.children(":first").removeClass(this.icons.open).addClass(this.icons.collapse), c.slideDown(this.animationSpeed, function() {
                b.removeClass("collapsed-box")
            })) : (a.children(":first").removeClass(this.icons.collapse).addClass(this.icons.open), c.slideUp(this.animationSpeed,
                function() {
                    b.addClass("collapsed-box")
                }))
        },
        remove: function(a) {
            a.parents(".box").first().slideUp(this.animationSpeed)
        }
    }
}
(function(a) {
    a.fn.boxRefresh = function(b) {
        function c(a) {
            a.append(f);
            e.onLoadStart.call(a)
        }
        var e = a.extend({
                trigger: ".refresh-btn",
                source: "",
                onLoadStart: function(a) {
                    return a
                },
                onLoadDone: function(a) {
                    return a
                }
            }, b),
            f = a('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');
        return this.each(function() {
            if ("" === e.source) window.console && window.console.log("Please specify a source first - boxRefresh()");
            else {
                var b = a(this);
                b.find(e.trigger).first().on("click", function(a) {
                    a.preventDefault();
                    c(b);
                    b.find(".box-body").load(e.source, function() {
                        b.find(f).remove();
                        e.onLoadDone.call(b)
                    })
                })
            }
        })
    }
})(jQuery);
(function(a) {
    a.fn.activateBox = function() {
        a.AdminLTE.boxWidget.activate(this)
    };
    a.fn.toggleBox = function() {
        var b = a(a.AdminLTE.boxWidget.selectors.collapse, this);
        a.AdminLTE.boxWidget.collapse(b)
    };
    a.fn.removeBox = function() {
        var b = a(a.AdminLTE.boxWidget.selectors.remove, this);
        a.AdminLTE.boxWidget.remove(b)
    }
})(jQuery);
(function(a) {
    a.fn.todolist = function(b) {
        var c = a.extend({
            onCheck: function(a) {
                return a
            },
            onUncheck: function(a) {
                return a
            }
        }, b);
        return this.each(function() {
            if ("undefined" != typeof a.fn.iCheck) a("input", this).on("ifChecked", function() {
                var b = a(this).parents("li").first();
                b.toggleClass("done");
                c.onCheck.call(b)
            }), a("input", this).on("ifUnchecked", function() {
                var b = a(this).parents("li").first();
                b.toggleClass("done");
                c.onUncheck.call(b)
            });
            else a("input", this).on("change", function() {
                var b = a(this).parents("li").first();
                b.toggleClass("done");
                a("input", b).is(":checked") ? c.onCheck.call(b) : c.onUncheck.call(b)
            })
        })
    }
})(jQuery);

var templateSetup = new Array();

$.fn.addTemplateSetup = function(func, prioritary) {
    if (prioritary) {
        templateSetup.unshift(func);
    } else {
        templateSetup.push(func);
    }
};

$.fn.applyTemplateSetup = function() {
    var max = templateSetup.length;
    for (var i = 0; i < max; ++i) {
        templateSetup[i].apply(this);
    }
    return this;
};

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}