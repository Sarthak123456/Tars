

$(document).find('.mbsc-fr-btn1').on('click', function(){
console.log('jvgh');
});
  


!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.mobiscroll = t(e.jQuery)
}(this, function(e) {
    "use strict";
    e = e && e.hasOwnProperty("default") ? e.default : e;
    var t, a, s, n, i = i || {},
        r = {},
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        l = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        c = function() {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }
            return function(t, a, s) {
                return a && e(t.prototype, a), s && e(t, s), t
            }
        }(),
        d = function(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        },
        m = function e(t, a, s) {
            null === t && (t = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(t, a);
            if (void 0 === n) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, a, s)
            }
            if ("value" in n) return n.value;
            var r = n.get;
            return void 0 !== r ? r.call(s) : void 0
        },
        u = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        },
        h = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        },
        f = e.extend,
        p = {};

    function b(e, t, a) {
        var s = e;
        return "object" === (void 0 === t ? "undefined" : o(t)) ? e.each(function() {
            new t.component(this, t)
        }) : ("string" == typeof t && e.each(function() {
            var e, n = i.instances[this.id];
            if (n && n[t] && void 0 !== (e = n[t].apply(this, Array.prototype.slice.call(a, 1)))) return s = e, !1
        }), s)
    }

    function v(e, t, a) {
        p[e] = function(s) {
            return b(this, f(s, {
                component: t,
                preset: !1 === a ? void 0 : e
            }), arguments)
        }
    }
    i.$ = e, e.mobiscroll = i, e.fn.mobiscroll = function(e) {
        return f(this, p), b(this, e, arguments)
    };
    var g = [],
        x = "undefined" != typeof window,
        T = x ? navigator.userAgent : "",
        y = T.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),
        _ = x && window.requestAnimationFrame || function(e) {
            e()
        },
        w = x && window.cancelAnimationFrame || function() {};

    function M() {}

    function C(e) {
        var t, a = [];
        for (t in e) a.push(e[t]);
        return a
    }

    function k(e) {
        var t, a = {};
        if (e)
            for (t = 0; t < e.length; t++) a[e[t]] = e[t];
        return a
    }

    function S(e) {
        return e - parseFloat(e) >= 0
    }

    function D(e) {
        return "string" == typeof e
    }

    function N(e, t, a) {
        return Math.max(t, Math.min(e, a))
    }

    function V(e, t) {
        for (e += "", t = t || 2; e.length < t;) e = "0" + e;
        return e
    }

    function A(e, t) {
        var a, s;
        return t = t || 100,
            function() {
                var n = this,
                    i = +new Date,
                    r = arguments;
                a && i < a + t ? (clearTimeout(s), s = setTimeout(function() {
                    a = i, e.apply(n, r)
                }, t)) : (a = i, e.apply(n, r))
            }
    }

    function F(e) {
        "vibrate" in navigator && navigator.vibrate(e || 50)
    }

    function I(e, t, a) {
        return 100 * (e - t) / (a - t)
    }

    function P(e, t, a) {
        var s = a.attr(e);
        return void 0 === s || "" === s ? t : "true" === s
    }
    /Android/i.test(y) ? (t = "android", (a = T.match(/Android\s+([\d\.]+)/i)) && (g = a[0].replace("Android ", "").split("."))) : /iPhone|iPad|iPod/i.test(y) ? (t = "ios", (a = T.match(/OS\s+([\d\_]+)/i)) && (g = a[0].replace(/_/g, ".").replace("OS ", "").split("."))) : /Windows Phone/i.test(y) ? t = "wp" : /Windows|MSIE/i.test(y) && (t = "windows"), s = g[0], n = g[1];
    var H = 0;

    function E() {
        H++, setTimeout(function() {
            H--
        }, 500)
    }

    function L(e, t) {
        var a = (e.originalEvent || e).changedTouches[0],
            s = document.createEvent("MouseEvents");
        s.initMouseEvent("click", !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), s.isMbscTap = !0, s.isIonicTap = !0, t.mbscChange = !0, t.dispatchEvent(s), E()
    }

    function O(e, t, a) {
        var s = e.originalEvent || e,
            n = (a ? "page" : "client") + t;
        return s.targetTouches && s.targetTouches[0] ? s.targetTouches[0][n] : s.changedTouches && s.changedTouches[0] ? s.changedTouches[0][n] : e[n]
    }

    function Y(e, t, a, s, n, r) {
        var o, l, c, d, m, u = (0, i.$)(t);
        n = n || 9, e.settings.tap && u.on("touchstart.mbsc", function(e) {
            c || (s && e.preventDefault(), c = this, o = O(e, "X"), l = O(e, "Y"), d = !1, m = new Date)
        }).on("touchcancel.mbsc", function() {
            c = !1
        }).on("touchmove.mbsc", function(e) {
            c && !d && (Math.abs(O(e, "X") - o) > n || Math.abs(O(e, "Y") - l) > n) && (d = !0)
        }).on("touchend.mbsc", function(t) {
            c && ((r && new Date - m < 100 || !d) && (t.preventDefault(), a.call(c, t, e)), c = !1, E())
        }), u.on("click.mbsc", function(t) {
            s && t.preventDefault(), a.call(this, t, e)
        })
    }

    function j(e) {
        if (H && !e.isMbscTap && ("TEXTAREA" != e.target.nodeName || "mousedown" != e.type)) return e.stopPropagation(), e.preventDefault(), !1
    }

    function z(e, t, a, s, n, i, r) {
        var o = new Date(e, t, a, s || 0, n || 0, i || 0, r || 0);
        return 23 == o.getHours() && 0 === (s || 0) && o.setHours(o.getHours() + 2), o
    }

    function $(e, t, a) {
        if (!t) return null;
        var s, n, i = ne({}, Z, a),
            r = function(t) {
                for (var a = 0; s + 1 < e.length && e.charAt(s + 1) == t;) a++, s++;
                return a
            },
            o = function(e, t, a) {
                var s = "" + t;
                if (r(e))
                    for (; s.length < a;) s = "0" + s;
                return s
            },
            l = function(e, t, a, s) {
                return r(e) ? s[t] : a[t]
            },
            c = "",
            d = !1;
        for (s = 0; s < e.length; s++)
            if (d) "'" != e.charAt(s) || r("'") ? c += e.charAt(s) : d = !1;
            else switch (e.charAt(s)) {
                case "d":
                    c += o("d", i.getDay(t), 2);
                    break;
                case "D":
                    c += l("D", t.getDay(), i.dayNamesShort, i.dayNames);
                    break;
                case "o":
                    c += o("o", (t.getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5, 3);
                    break;
                case "m":
                    c += o("m", i.getMonth(t) + 1, 2);
                    break;
                case "M":
                    c += l("M", i.getMonth(t), i.monthNamesShort, i.monthNames);
                    break;
                case "y":
                    n = i.getYear(t), c += r("y") ? n : (n % 100 < 10 ? "0" : "") + n % 100;
                    break;
                case "h":
                    var m = t.getHours();
                    c += o("h", m > 12 ? m - 12 : 0 === m ? 12 : m, 2);
                    break;
                case "H":
                    c += o("H", t.getHours(), 2);
                    break;
                case "i":
                    c += o("i", t.getMinutes(), 2);
                    break;
                case "s":
                    c += o("s", t.getSeconds(), 2);
                    break;
                case "a":
                    c += t.getHours() > 11 ? i.pmText : i.amText;
                    break;
                case "A":
                    c += t.getHours() > 11 ? i.pmText.toUpperCase() : i.amText.toUpperCase();
                    break;
                case "'":
                    r("'") ? c += "'" : d = !0;
                    break;
                default:
                    c += e.charAt(s)
            }
            return c
    }

    function W(e, t, a) {
        var s = ne({}, Z, a),
            n = B(s.defaultValue || new Date);
        if (!e || !t) return n;
        if (t.getTime) return t;
        t = "object" == (void 0 === t ? "undefined" : o(t)) ? t.toString() : t + "";
        var i, r = s.shortYearCutoff,
            l = s.getYear(n),
            c = s.getMonth(n) + 1,
            d = s.getDay(n),
            m = -1,
            u = n.getHours(),
            h = n.getMinutes(),
            f = 0,
            p = -1,
            b = !1,
            v = function(t) {
                var a = i + 1 < e.length && e.charAt(i + 1) == t;
                return a && i++, a
            },
            g = function(e) {
                v(e);
                var a = new RegExp("^\\d{1," + ("@" == e ? 14 : "!" == e ? 20 : "y" == e ? 4 : "o" == e ? 3 : 2) + "}"),
                    s = t.substr(y).match(a);
                return s ? (y += s[0].length, parseInt(s[0], 10)) : 0
            },
            x = function(e, a, s) {
                var n, i = v(e) ? s : a;
                for (n = 0; n < i.length; n++)
                    if (t.substr(y, i[n].length).toLowerCase() == i[n].toLowerCase()) return y += i[n].length, n + 1;
                return 0
            },
            T = function() {
                y++
            },
            y = 0;
        for (i = 0; i < e.length; i++)
            if (b) "'" != e.charAt(i) || v("'") ? T() : b = !1;
            else switch (e.charAt(i)) {
                case "d":
                    d = g("d");
                    break;
                case "D":
                    x("D", s.dayNamesShort, s.dayNames);
                    break;
                case "o":
                    m = g("o");
                    break;
                case "m":
                    c = g("m");
                    break;
                case "M":
                    c = x("M", s.monthNamesShort, s.monthNames);
                    break;
                case "y":
                    l = g("y");
                    break;
                case "H":
                    u = g("H");
                    break;
                case "h":
                    u = g("h");
                    break;
                case "i":
                    h = g("i");
                    break;
                case "s":
                    f = g("s");
                    break;
                case "a":
                    p = x("a", [s.amText, s.pmText], [s.amText, s.pmText]) - 1;
                    break;
                case "A":
                    p = x("A", [s.amText, s.pmText], [s.amText, s.pmText]) - 1;
                    break;
                case "'":
                    v("'") ? T() : b = !0;
                    break;
                default:
                    T()
            }
            if (l < 100 && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l <= ("string" != typeof r ? r : (new Date).getFullYear() % 100 + parseInt(r, 10)) ? 0 : -100)), m > -1) {
                c = 1, d = m;
                do {
                    var _ = 32 - new Date(l, c - 1, 32, 12).getDate();
                    d > _ && (c++, d -= _)
                } while (d > _)
            }
        u = -1 == p ? u : p && u < 12 ? u + 12 : p || 12 != u ? u : 0;
        var w = s.getDate(l, c - 1, d, u, h, f);
        return s.getYear(w) != l || s.getMonth(w) + 1 != c || s.getDay(w) != d ? n : w
    }

    function R(e) {
        return z(e.getFullYear(), e.getMonth(), e.getDate())
    }

    function J(e, t) {
        var a = "",
            s = "";
        return e && (t.h && (s += V(e.getHours()) + ":" + V(e.getMinutes()), t.s && (s += ":" + V(e.getSeconds())), t.u && (s += "." + V(e.getMilliseconds(), 3)), t.tz && (s += t.tz)), t.y ? (a += e.getFullYear(), t.m && (a += "-" + V(e.getMonth() + 1), t.d && (a += "-" + V(e.getDate())), t.h && (a += "T" + s))) : t.h && (a = s)), a
    }

    function q(e, t, a) {
        var s, n, i = {
            y: 1,
            m: 2,
            d: 3,
            h: 4,
            i: 5,
            s: 6,
            u: 7,
            tz: 8
        };
        if (a)
            for (s in i)(n = e[i[s] - t]) && (a[s] = "tz" == s ? n : 1)
    }

    function K(e, t, a) {
        var s = window.moment || t.moment,
            n = t.returnFormat;
        if (e) {
            if ("moment" == n && s) return s(e);
            if ("locale" == n) return $(a, e, t);
            if ("iso8601" == n) return J(e, t.isoParts)
        }
        return e
    }

    function B(e, t, a, s) {
        var n;
        return e ? e.getTime ? e : e.toDate ? e.toDate() : ("string" == typeof e && (e = e.trim()), (n = X.exec(e)) ? (q(n, 2, s), new Date(1970, 0, 1, n[2] ? +n[2] : 0, n[3] ? +n[3] : 0, n[4] ? +n[4] : 0, n[5] ? +n[5] : 0)) : (n || (n = G.exec(e)), n ? (q(n, 0, s), new Date(n[1] ? +n[1] : 1970, n[2] ? n[2] - 1 : 0, n[3] ? +n[3] : 1, n[4] ? +n[4] : 0, n[5] ? +n[5] : 0, n[6] ? +n[6] : 0, n[7] ? +n[7] : 0)) : W(t, e, a))) : null
    }
    x && (["mouseover", "mousedown", "mouseup", "click"].forEach(function(e) {
        document.addEventListener(e, j, !0)
    }), "android" == t && s < 5 && document.addEventListener("change", function(e) {
        H && "checkbox" == e.target.type && !e.target.mbscChange && (e.stopPropagation(), e.preventDefault()), delete e.target.mbscChange
    }, !0));
    var U, G = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?((Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
        X = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
        Z = {
            shortYearCutoff: "+10",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
            amText: "am",
            pmText: "pm",
            getYear: function(e) {
                return e.getFullYear()
            },
            getMonth: function(e) {
                return e.getMonth()
            },
            getDay: function(e) {
                return e.getDate()
            },
            getDate: z,
            getMaxDayOfMonth: function(e, t) {
                return 32 - new Date(e, t, 32, 12).getDate()
            },
            getWeekNumber: function(e) {
                (e = new Date(e)).setHours(0, 0, 0), e.setDate(e.getDate() + 4 - (e.getDay() || 7));
                var t = new Date(e.getFullYear(), 0, 1);
                return Math.ceil(((e - t) / 864e5 + 1) / 7)
            }
        };

    function Q(e, t, a) {
        x && ee(function() {
            ee(e).each(function() {
                new t(this)
            }), ee(document).on("mbsc-enhance", function(a, s) {
                ee(a.target).is(e) ? new t(a.target, s) : ee(e, a.target).each(function() {
                    new t(this, s)
                })
            }), a && ee(document).on("mbsc-refresh", function(t) {
                var a;
                ee(t.target).is(e) ? (a = ae[t.target.id]) && a.refresh() : ee(e, t.target).each(function() {
                    (a = ae[this.id]) && a.refresh()
                })
            })
        })
    }
    r.datetime = {
        formatDate: $,
        parseDate: W
    };
    var ee = i.$,
        te = +new Date,
        ae = {},
        se = {},
        ne = ee.extend;
    ne(r, {
        getCoord: O,
        preventClick: E,
        vibrate: F
    }), U = ne(i, {
        $: ee,
        version: "4.2.3",
        autoTheme: "mobiscroll",
        themes: {
            form: {},
            page: {},
            frame: {},
            scroller: {},
            listview: {},
            navigation: {},
            progress: {},
            card: {}
        },
        platform: {
            name: t,
            majorVersion: s,
            minorVersion: n
        },
        i18n: {},
        instances: ae,
        classes: se,
        util: r,
        settings: {},
        setDefaults: function(e) {
            ne(this.settings, e)
        },
        customTheme: function(e, t) {
            var a, s = i.themes,
                n = ["frame", "scroller", "listview", "navigation", "form", "page", "progress", "card"];
            for (a = 0; a < n.length; a++) s[n[a]][e] = ne({}, s[n[a]][t], {
                baseTheme: t
            })
        }
    });
    var ie, re, oe, le, ce, de = function(e, t) {
        var a, s, n, i, r, l, c, d = this;
        d.settings = {}, d._getText = new Function("mobiscroll, p", function() {
            var e, t = function(e, t) {
                    var a, s = function(e) {
                            var t, a = e[0];
                            for (t = 0; t < 16; ++t)
                                if (a * t % 16 == 1) return [t, e[1]]
                        }(t),
                        n = function(e, t, a, s) {
                            var n, i = "0123456789abcdef",
                                r = "",
                                o = t.length;
                            for (n = 0; n < o; ++n) r += e ? i[(a * i.indexOf(t[n]) + s) % 16] : i[((a * i.indexOf(t[n]) - a * s) % 16 + 16) % 16];
                            return r
                        }(0, e, s[0], s[1]),
                        i = n.length,
                        r = [];
                    for (a = 0; a < i; a += 2) r.push(n[a] + n[a + 1]);
                    return r
                }("7c7a797bedefeae973e37aefe4e4a651eb7157e23d313b7ae57c757ae6a0cde17ce0a67ae1e6ecefeda0a934cde17ce0a6ede170a038a6383ea478a93fa734ece97ea8737c79e4e53daaa7abee75e6e37ce9efe6a0e5a97b7ee17aa87c3de5a6e4e5e6e77ce0a4e6a47a3b77e0e9e4e5a038a13d3d7ca97b7a3dcde17ce0a6eee4efef7aa0cde17ce0a67ae1e6ecefeda0a9a27ca93b7cad3d313be63de55b7c5d3be55b7c5d3de55b7a5d3be55b7a5d3de67d7ae57c757ae6a8e57da05ba7ece97378e4e17932eae4efe3eba1e9ed78ef7a7ce1e67ca7a4a778ef73e97ce9efe632e1ea73efe4757ce5a1e9ed78ef7a7ce1e67ca7a4a772ade9e6ece57032ad31a7a4a77cef783238a1e9ed78ef7a7ce1e67ca7a4a7e4e5ee7c3238a1e9ed78ef7a7ce1e67ca7a4a7eaef7c7cefed3238a1e9ed78ef7a7ce1e67ca7a4a77ae9e7e07c3238a1e9ed78ef7a7ce1e67ca7a4a7ede17ae7e9e63238a1e9ed78ef7a7ce1e67ca7a4a778e1ecece9e6e73238a1e9ed78ef7a7ce1e67ca7a4a7eeefe67cad73e972e532307870a1e9ed78ef7a7ce1e67ca7a4a7e4e9e6e5ade0e5e9e7e07c32313a7870a7a4a77ce5707cade1e4e9e7e632e3e5e67ce57aa7a4a7ef78e1e3e97c7932a7aba0cde17ce0a6eee4efef7aa0cde17ce0a67ae1e6ecefeda0a9a23a38a9af313838ab38a630a9aba7a1e9ed78ef7a7ce1e67ca75da9a6e2efe9e6a0a73ba7a9aba7aa3654753838353c54753838353a547538383c39547538383c31547538383ce334afece97e36a732a7a7a97de3e17ce3e0a0e5a97b7ae57c757ae6a8a7a77dd2", [9, 8]),
                a = "",
                s = t.length;
            for (e = 0; e < s; e++) a += String.fromCharCode(parseInt(t[e], 16));
            return a
        }()), d._init = M, d._destroy = M, d._processSettings = M, d.init = function(o) {
            var m;
            for (m in d.settings) delete d.settings[m];
            n = d.settings, ne(t, o), d._hasDef && (c = U.settings), ne(n, d._defaults, c, t), d._hasTheme && ("auto" != (r = n.theme) && r || (r = U.autoTheme), "default" == r && (r = "mobiscroll"), t.theme = r, i = U.themes[d._class] ? U.themes[d._class][r] : {}), d._hasLang && (a = U.i18n[n.lang]), ne(n, i, a, c, t), d._processSettings();

            function u(e) {
                return "string" == typeof e ? e : J(B(e), {
                    y: 1,
                    m: 1,
                    d: 1,
                    h: 1,
                    i: 1,
                    s: 1,
                    u: 1
                })
            }
            if (!d._class || {
                    form: !0,
                    page: !0,
                    progress: !0,
                    switch: !0,
                    slider: !0,
                    stepper: !0
                }[d._class]) d._init(o), l("onInit");
            else {
                var h, f, p = {
                        className: d._class,
                        buttons: d.buttons,
                        platform: U.platform,
                        userAgent: navigator.userAgent,
                        defSortHandle: ee(e).find(n.listSelector || "ul,ol").length ? "left" : "right",
                        settings: {
                            activeClass: n.activeClass,
                            ampmText: n.ampmText,
                            amText: n.amText,
                            animateIcons: n.animateIcons,
                            backText: n.backText,
                            baseTheme: n.baseTheme,
                            buttons: n.buttons,
                            btnClass: n.btnClass,
                            btnWidth: n.btnWidth,
                            btnReverse: n.btnReverse,
                            closeIcon: n.closeIcon,
                            context: "body" == n.context ? "body" : "",
                            controls: n.controls,
                            cssClass: n.cssClass,
                            dateDisplay: n.dateDisplay,
                            dateFormat: n.dateFormat,
                            dateWheels: n.dateWheels,
                            dayNames: n.dayNames,
                            dayNamesShort: n.dayNamesShort,
                            daySuffix: n.daySuffix,
                            display: n.display,
                            dayText: n.dayText,
                            endYear: n.endYear,
                            fixedHeader: n.fixedHeader,
                            handleClass: n.handleClass,
                            handleMarkup: n.handleMarkup,
                            hideText: n.hideText,
                            hourText: n.hourText,
                            itemNode: n.itemNode,
                            itemWidth: n.itemWidth,
                            lang: n.lang,
                            lapIcon: n.lapIcon,
                            lapText: n.lapText,
                            layout: n.layout,
                            leftArrowClass: n.leftArrowClass,
                            max: u(n.max),
                            min: u(n.min),
                            minuteText: n.minuteText,
                            monthNames: n.monthNames,
                            monthNamesShort: n.monthNamesShort,
                            monthSuffix: n.monthSuffix,
                            monthText: n.monthText,
                            nowIcon: n.nowIcon,
                            nowText: n.nowText,
                            pmText: n.pmText,
                            preset: n.preset,
                            resetIcon: n.resetIcon,
                            resetText: n.resetText,
                            rightArrowClass: n.rightArrowClass,
                            rtl: n.rtl,
                            secText: n.secText,
                            select: n.select,
                            snap: n.snap,
                            sort: n.sort,
                            sortable: n.sortable,
                            sortHandle: n.sortHandle,
                            startIcon: n.startIcon,
                            startText: n.startText,
                            startYear: n.startYear,
                            stepHour: n.stepHour,
                            stepMinute: n.stepMinute,
                            stepSecond: n.stepSecond,
                            steps: n.steps,
                            stopIcon: n.stopIcon,
                            stopText: n.stopText,
                            striped: n.striped,
                            theme: n.theme,
                            timeFormat: n.timeFormat,
                            timeWheels: n.timeWheels,
                            todayText: n.todayText,
                            type: n.type,
                            variant: n.variant,
                            wrapperClass: n.wrapperClass,
                            yearSuffix: n.yearSuffix,
                            yearText: n.yearText
                        }
                    },
                    b = [],
                    v = {},
                    g = ["refresh", "redraw", "navigate", "changeTab", "getDate", "setDate", "addEvent", "removeEvent", "getEvents", "setEvents", "setActiveDate", "start", "stop", "reset", "lap", "resetlap", "getTime", "setTime", "getEllapsedTime", "setEllapsedTime"],
                    x = {
                        jsonp: 1,
                        getInst: 1,
                        init: 1,
                        destroy: 1
                    },
                    T = function(e) {
                        d[e] = function() {
                            b.push({
                                func: e,
                                args: arguments
                            })
                        }
                    };
                for (f in d) "function" != typeof d[f] || x[f] || (v[f] = d[f], T(f));
                for (h = 0; h < g.length; h++) T(g[h]);
                "timer" != n.preset || t.buttons || (p.settings.buttons = ["resetlap", "toggle"], "inline" !== n.display && p.settings.buttons.unshift("hide")), "eventcalendar" != n.preset || t.buttons || "inline" == n.display || (p.settings.buttons = ["close"]), d.jsonp("remote", p, function(a) {
                    d.zone.run(function() {
                        if (d) {
                            for (f in d.remote = a, v) d[f] = v[f];
                            var i = ne({}, t);
                            for (delete i.data, d._presets && (s = d._presets[n.preset]) && (s = s.call(e, d, t), ne(n, s, i)), d._init(o), l("onInit"), h = 0; h < b.length; h++) d[b[h].func].apply(d, b[h].args);
                            b = null, v = null
                        }
                    })
                })
            }
        }, d.destroy = function() {
            d && (d._destroy(), l("onDestroy"), delete ae[e.id], d = null)
        }, d.tap = function(e, t, a, s, n) {
            Y(d, e, t, a, s, n)
        }, d.trigger = function(a, n) {
            var r, o, l, m = [c, i, s, t];
            for (o = 0; o < 4; o++)(l = m[o]) && l[a] && (r = l[a].call(e, n || {}, d));
            return r
        }, d.option = function(e, a) {
            var s = {};
            "object" === (void 0 === e ? "undefined" : o(e)) ? s = e: s[e] = a, ["data", "invalid", "valid", "marked", "labels", "colors", "readonly"].forEach(function(e) {
                t[e] = n[e]
            }), d.init(s)
        }, d.getInst = function() {
            return d
        }, d.jsonp = ue, d.zone = {
            run: function(e) {
                e()
            }
        }, t = t || {}, l = d.trigger, d.__ready || (ee(e).addClass("mbsc-comp"), e.id ? ae[e.id] && ae[e.id].destroy() : e.id = "mobiscroll" + ++te, ae[e.id] = d, d.__ready = !0)
    };

    function me() {
        var e = document.cookie.replace(/(?:(?:^|.*;\s*)ASP.NET_SessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        document.cookie = "mobiscrollClientError=1; expires=" + new Date((new Date).getTime() + 864e5).toUTCString() + "; path=/";
        try {
            window.name = (window.name || "") + ";mobiscrollClientError"
        } catch (e) {}
        ue("error", {
            trialCode: U.apiKey,
            sessionID: e
        }, function() {
            document.cookie = "mobiscrollClientError=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            try {
                window.name = (window.name || "").replace(/;mobiscrollClientError/g, "")
            } catch (e) {}
        })
    }

    function ue(e, t, a, s) {
        var n, i = document.createElement("script"),
            r = "jsonp" + ++te;

        function o() {
            window[r] && window[r](), s < 4 ? ue(e, t, a, s + 1) : U.trialError || (U.trialError = !0, me(), "mbscdemo" != U.apiKey && alert("Mobiscroll trial not loaded. Please check your connection. If the problem persists, contact us at support@mobiscroll.com"))
        }
        s = s || 1, window[r] = function(e) {
            clearTimeout(n), i.parentNode.removeChild(i), delete window[r], e && a(JSON.parse(e, function(e, t) {
                return "string" != typeof t ? t : "function" === t.substring(0, 8) ? window.eval("(" + t + ")") : t.match(G) ? B(t) : t
            }))
        }, n = setTimeout(o, 6e3), i.onerror = o, i.src = U.apiUrl + U.apiKey + "/" + e + "?callback=" + r + "&data=" + encodeURIComponent(JSON.stringify(t)), document.body.appendChild(i)
    }

    function he(e) {
        var t;
        for (t in e)
            if (void 0 !== re[e[t]]) return !0;
        return !1
    }

    function fe(e, t) {
        if ("touchstart" == e.type) ee(t).attr("data-touch", "1");
        else if (ee(t).attr("data-touch")) return ee(t).removeAttr("data-touch"), !1;
        return !0
    }

    function pe(e, t) {
        var a, s = getComputedStyle(e[0]);
        return ee.each(["t", "webkitT", "MozT", "OT", "msT"], function(e, t) {
            if (void 0 !== s[t + "ransform"]) return a = s[t + "ransform"], !1
        }), a = a.split(")")[0].split(", "), t ? a[13] || a[5] : a[12] || a[4]
    }

    function be(e) {
        if (e) {
            if (xe[e]) return xe[e];
            var t = ee('<div style="background-color:red' + e + ';"></div>').appendTo(".screen"),
                a = getComputedStyle(t[0]).backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, "").split(","),
                s = .299 * a[0] + .587 * a[1] + .114 * a[2] < 130 ? "#fff" : "#000";
            return t.remove(), xe[e] = s, s
        }
    }
    x && ee(function() {
        (document.cookie.replace(/(?:(?:^|.*;\s*)mobiscrollClientError\s*\=\s*([^;]*).*$)|^.*$/, "$1") || /mobiscrollClientError/.test(window.name || "")) && me()
    });
    var ve, ge, xe = {};

    function Te(e, t, a, s, n, i) {
        var r, o, l, c, d, m, u, h, f = s || M;

        function p(e) {
            var t;
            r = ee(this), u = +r.attr("data-step"), l = +r.attr("data-index"), o = !0, n && e.stopPropagation(), "mousedown" == e.type && e.preventDefault(), "keydown" != e.type ? (d = O(e, "X"), m = O(e, "Y"), t = fe(e, this)) : t = 32 === e.keyCode, c || !t || r.hasClass("mbsc-disabled") || (x(l, u) && (r.addClass("mbsc-active"), i && i.addRipple(r.find(".mbsc-segmented-content"), e)), "mousedown" == e.type && ee(document).on("mousemove", b).on("mouseup", v))
        }

        function b(e) {
            (Math.abs(d - O(e, "X")) > 7 || Math.abs(m - O(e, "Y")) > 7) && (o = !0, g())
        }

        function v(e) {
            "touchend" == e.type && e.preventDefault(), g(), "mouseup" == e.type && ee(document).off("mousemove", b).off("mouseup", v)
        }

        function g() {
            c = !1, clearInterval(h), r && (r.removeClass("mbsc-active"), i && setTimeout(function() {
                i.removeRipple()
            }, 100))
        }

        function x(e, t) {
            return c || f(e) || (l = e, u = t, c = !0, o = !1, setTimeout(T, 100)), c
        }

        function T() {
            r && r.hasClass("mbsc-disabled") ? g() : (!c && o || (o = !0, t(l, u, T)), c && a && (clearInterval(h), h = setInterval(function() {
                t(l, u)
            }, a)))
        }
        return e.on("touchstart mousedown keydown", p).on("touchmove", b).on("touchend touchcancel keyup", v), {
            start: x,
            stop: g,
            destroy: function() {
                e.off("touchstart mousedown keydown", p).off("touchmove", b).off("touchend touchcancel keyup", v)
            }
        }
    }
    x && (re = document.createElement("modernizr").style, oe = function() {
        var e, t = ["Webkit", "Moz", "O", "ms"];
        for (e in t)
            if (he([t[e] + "Transform"])) return "-" + t[e].toLowerCase() + "-";
        return ""
    }(), ce = oe.replace(/^\-/, "").replace(/\-$/, "").replace("moz", "Moz"), ie = void 0 !== re.animation ? "animationend" : "webkitAnimationEnd", le = void 0 !== re.touchAction);
    var ye = i.themes,
        _e = /(iphone|ipod)/i.test(T) && s >= 7,
        we = "android" == t,
        Me = "ios" == t,
        Ce = Me && 8 == s,
        ke = Me && s > 7,
        Se = function(e) {
            e.preventDefault()
        },
        De = function(e, t, a) {
            var s, n, r, o, l, c, d, m, u, h, f, p, b, v, g, x, T, y, _, w, C, k, S, V, A, F, I, P, H, L, Y, j, z, $, W = this,
                R = ee(e),
                J = [],
                q = new Date;

            function K(e) {
                f && f.removeClass("mbsc-active"), (f = ee(this)).hasClass("mbsc-disabled") || f.hasClass("mbsc-fr-btn-nhl") || f.addClass("mbsc-active"), "mousedown" === e.type ? ee(document).on("mouseup", B) : "pointerdown" === e.type && ee(document).on("pointerup", B)
            }

            function B(e) {
                f && (f.removeClass("mbsc-active"), f = null), "mouseup" === e.type ? ee(document).off("mouseup", B) : "pointerup" === e.type && ee(document).off("pointerup", B)
            }

            function U(e) {
                13 == e.keyCode ? W.select() : 27 == e.keyCode && W.cancel()
            }

            function G(e) {
                e || we || W._activeElm.focus()
            }

            function X(e) {
                var t = ve,
                    a = I.focusOnClose;
                W._markupRemove(), o.remove(), g && (p.mbscModals--, I.scrollLock && p.mbscLock--, p.mbscLock || r.removeClass("mbsc-fr-lock"), p.mbscModals || (r.removeClass("mbsc-fr-lock-ios mbsc-fr-lock-ctx"), C && (s.css({
                    top: "",
                    left: ""
                }), m.scrollLeft(P), m.scrollTop(L)), e || (t || (t = R), setTimeout(function() {
                    void 0 === a || !0 === a ? (ge = !0, t[0].focus()) : a && ee(a)[0].focus()
                }, 200)))), x = !1, j("onHide")
            }

            function Z(e) {
                clearTimeout(V), V = setTimeout(function() {
                    W.position(!0), "orientationchange" == e.type && (S.style.display = "none", S.offsetHeight, S.style.display = "")
                }, 200)
            }

            function Q(e) {
                e.target.nodeType && !k.contains(e.target) && q - new Date > 100 && (k.focus(), q = new Date)
            }

            function te(e, t) {
                if (g) o.appendTo(s);
                else if (R.is("div") && !W._hasContent) R.empty().append(o);
                else if (R.hasClass("mbsc-control")) {
                    var a = R.closest(".mbsc-control-w");
                    o.insertAfter(a), a.hasClass("mbsc-select") && a.addClass("mbsc-select-inline")
                } else o.insertAfter(R);
                x = !0, W._markupInserted(o), j("onMarkupInserted", {
                    target: T
                }), o.on("selectstart mousedown", Se).on("click", ".mbsc-fr-btn-e", Se).on("touchstart mousedown", function(e) {
                    I.stopProp && e.stopPropagation()
                }).on("keydown", ".mbsc-fr-btn-e", function(e) {
                    32 == e.keyCode && (e.preventDefault(), e.stopPropagation(), this.click())
                }).on("keydown", function(e) {
                    if (32 == e.keyCode) e.preventDefault();
                    else if (9 == e.keyCode && g && I.focusTrap) {
                        var t = o.find('[tabindex="0"]').filter(function() {
                                return this.offsetWidth > 0 || this.offsetHeight > 0
                            }),
                            a = t.index(ee(":focus", o)),
                            s = t.length - 1,
                            n = 0;
                        e.shiftKey && (s = 0, n = -1), a === s && (t.eq(n)[0].focus(), e.preventDefault())
                    }
                }).on("touchstart mousedown pointerdown", ".mbsc-fr-btn-e", K).on("touchend", ".mbsc-fr-btn-e", B), ee("input,select,textarea", o).on("selectstart mousedown", function(e) {
                    e.stopPropagation()
                }).on("keydown", function(e) {
                    32 == e.keyCode && e.stopPropagation()
                }), T.addEventListener("touchstart", function() {
                    Y || (Y = !0, s.find(".mbsc-no-touch").removeClass("mbsc-no-touch"))
                }, !0), ee.each(h, function(e, t) {
                    W.tap(ee(".mbsc-fr-btn" + e, o), function(e) {
                        (D((t = D(t) ? W.buttons[t] : t).handler) ? W.handlers[t.handler] : t.handler).call(this, e, W)
                    }, !0)
                }), W._attachEvents(o), W.position(), m.on(A, Z), g && (b && !e ? o.addClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" + b).on(ie, function e() {
                    o.off(ie, e).removeClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" + b).find(".mbsc-fr-popup").removeClass("mbsc-anim-" + b), G(t)
                }).find(".mbsc-fr-popup").addClass("mbsc-anim-" + b) : G(t)), j("onShow", {
                    target: T,
                    valueText: W._tempValue
                })
            }

            function se(e, t) {
                e && e(), !1 !== W.show() && (ve = t)
            }

            function ne() {
                W._fillValue(), j("onSet", {
                    valueText: W._value
                })
            }

            function re() {
                j("onCancel", {
                    valueText: W._value
                })
            }

            function oe() {
                W.setVal(null, !0)
            }
            de.call(this, e, t, !0), W.position = function(e) {
                var t, a, n, i, r, l, h, f, b, M, C, k, D, V, A, P, E, L = {},
                    O = 0,
                    Y = 0,
                    J = 0,
                    q = 0;
                !F && x && (W._position(o), D = T.offsetHeight, V = T.offsetWidth, z === V && $ === D && e || (W._isFullScreen || /top|bottom/.test(I.display) ? d.width(V) : g && u.addClass("mbsc-fr-pos").width(""), ee(".mbsc-comp", o).each(function() {
                    var e = ae[this.id];
                    e && e !== W && e.position && e.position()
                }), !W._isFullScreen && /center|bubble/.test(I.display) && (ee(".mbsc-w-p", o).each(function() {
                    A = this.getBoundingClientRect().width, q += A, J = A > J ? A : J
                }), k = q > V - 16 || !0 === I.tabs, u.removeClass("mbsc-fr-pos").css({
                    width: W._isLiquid ? Math.min(I.maxPopupWidth, V - 16) : Math.ceil(k ? J : q),
                    "white-space": k ? "" : "nowrap"
                })), !1 !== j("onPosition", {
                    target: T,
                    popup: S,
                    hasTabs: k,
                    windowWidth: V,
                    windowHeight: D
                }) && g && (y = S.offsetWidth, _ = S.offsetHeight, H = _ <= D && y <= V, w && (O = m.scrollLeft(), Y = m.scrollTop()), "center" == I.display ? (E = Math.max(0, O + (V - y) / 2), P = Math.max(0, Y + (D - _) / 2)) : "bubble" == I.display ? (t = void 0 === I.anchor ? R : ee(I.anchor), h = ee(".mbsc-fr-arr-i", o)[0], r = (i = t.offset()).top + (v ? Y - s.offset().top : 0), l = i.left + (v ? O - s.offset().left : 0), a = t[0].offsetWidth, n = t[0].offsetHeight, f = h.offsetWidth, b = h.offsetHeight, E = N(l - (y - a) / 2, O + 3, O + V - y - 3), (P = r - _ - b / 2) < Y || r > Y + D ? (d.removeClass("mbsc-fr-bubble-top").addClass("mbsc-fr-bubble-bottom"), P = r + n + b / 2) : d.removeClass("mbsc-fr-bubble-bottom").addClass("mbsc-fr-bubble-top"), ee(".mbsc-fr-arr", o).css({
                    left: N(l + a / 2 - (E + (y - f) / 2), 0, f)
                }), H = P > Y && E > O && P + _ <= Y + D && E + y <= O + V) : (E = O, P = "top" == I.display ? Y : Math.max(0, Y + D - _)), w && (M = Math.max(P + _, v ? p.scrollHeight : ee(document).height()), C = Math.max(E + y, v ? p.scrollWidth : ee(document).width()), c.css({
                    width: C,
                    height: M
                }), I.scroll && "bubble" == I.display && (P + _ + 8 > Y + D || r > Y + D || r + n < Y) && (F = !0, setTimeout(function() {
                    F = !1
                }, 300), m.scrollTop(Math.min(r, P + _ - D + 8, M - D)))), L.top = Math.floor(P), L.left = Math.floor(E), d.css(L), z = V, $ = D)))
            }, W.attachShow = function(e, t) {
                var a, s = ee(e),
                    n = s.prop("readonly");
                if ("inline" !== I.display) {
                    if ((I.showOnFocus || I.showOnTap) && s.is("input,select") && (s.prop("readonly", !0).on("mousedown.mbsc", function(e) {
                            e.preventDefault()
                        }).on("focus.mbsc", function() {
                            W._isVisible && this.blur()
                        }), (a = ee('label[for="' + s.attr("id") + '"]')).length || (a = s.closest("label"))), s.is("select")) return;
                    I.showOnFocus && s.on("focus.mbsc", function() {
                        ge ? ge = !1 : se(t, s)
                    }), I.showOnTap && (s.on("keydown.mbsc", function(e) {
                        32 != e.keyCode && 13 != e.keyCode || (e.preventDefault(), e.stopPropagation(), se(t, s))
                    }), W.tap(s, function(e) {
                        e.isMbscTap && (Y = !0), se(t, s)
                    }), a && a.length && W.tap(a, function() {
                        se(t, s)
                    })), J.push({
                        readOnly: n,
                        el: s,
                        lbl: a
                    })
                }
            }, W.select = function() {
                g ? W.hide(!1, "set", !1, ne) : ne()
            }, W.cancel = function() {
                g ? W.hide(!1, "cancel", !1, re) : re()
            }, W.clear = function() {
                W._clearValue(), j("onClear"), g && W._isVisible && !W.live ? W.hide(!1, "clear", !1, oe) : oe()
            }, W.enable = function() {
                I.disabled = !1, W._isInput && R.prop("disabled", !1)
            }, W.disable = function() {
                I.disabled = !0, W._isInput && R.prop("disabled", !0)
            }, W.show = function(e, t) {
                var a;
                if (!I.disabled && !W._isVisible) {
                    if (W._readValue(), !1 === j("onBeforeShow")) return !1;
                    var f, x, y, _;
                    if (ve = null, b = I.animate, h = I.buttons || [], w = v || "bubble" == I.display, C = _e && !w && I.scrollLock, h.length > 0, !1 !== b && ("top" == I.display ? b = b || "slidedown" : "bottom" == I.display ? b = b || "slideup" : "center" != I.display && "bubble" != I.display || (b = b || "pop")), g && (L = Math.max(0, m.scrollTop()), P = Math.max(0, m.scrollLeft()), z = 0, $ = 0, C && !r.hasClass("mbsc-fr-lock-ios") && s.css({
                            top: -L + "px",
                            left: -P + "px"
                        }), r.addClass((I.scrollLock ? "mbsc-fr-lock" : "") + (C ? " mbsc-fr-lock-ios" : "") + (v ? " mbsc-fr-lock-ctx" : "")), ee(document.activeElement).is("input,textarea") && document.activeElement.blur(), i.activeInstance && i.activeInstance.hide(), i.activeInstance = W, p.mbscModals = p.mbscModals || 0, p.mbscLock = p.mbscLock || 0, p.mbscModals++, I.scrollLock && p.mbscLock++), a = W.remote.html1.replace("mbsc-no-touch", "") + " mbsc-fr-" + I.display + " " + (I.cssClass || "") + " " + (I.compClass || "") + (W._isLiquid ? " mbsc-fr-liq" : "") + (ke ? " mbsc-fr-hb" : "") + (Y ? "" : " mbsc-no-touch") + W.remote.html2 + (I.headerText ? " mbsc-fr-has-hdr" : "") + '">' + ("bubble" === I.display ? '<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>' : "") + W.remote.html3 + (I.headerText ? '<div class="mbsc-fr-hdr">' + (D(I.headerText) ? I.headerText : "") + "</div>" : "") + '<div class="mbsc-fr-c">', a += W._generateContent(), a += W.remote.html4, o = ee(a), c = ee(".mbsc-fr-persp", o), l = ee(".mbsc-fr-scroll", o), u = ee(".mbsc-fr-w", o), d = ee(".mbsc-fr-popup", o), n = ee(".mbsc-fr-hdr", o), T = o[0], k = l[0], S = d[0], W._activeElm = k, W._markup = o, W._isVisible = !0, A = "orientationchange resize", W._markupReady(o), j("onMarkupReady", {
                            target: T
                        }), g)
                        if (ee(window).on("keydown", U), I.scrollLock && o.on("touchmove mousewheel wheel", function(e) {
                                H && e.preventDefault()
                            }), I.focusTrap && m.on("focusin", Q), I.closeOnOverlayTap) l.on("touchstart mousedown", function(e) {
                            x || e.target != k || (x = !0, f = !1, y = O(e, "X"), _ = O(e, "Y"))
                        }).on("touchmove mousemove", function(e) {
                            x && !f && (Math.abs(O(e, "X") - y) > 9 || Math.abs(O(e, "Y") - _) > 9) && (f = !0)
                        }).on("touchcancel", function() {
                            x = !1
                        }).on("touchend click", function(e) {
                            x && !f && (W.cancel(), "touchend" == e.type && E()), x = !1
                        });
                    g && C ? setTimeout(function() {
                        te(e, t)
                    }, 100) : te(e, t)
                }
            }, W.hide = function(e, t, a, s) {
                if (!W._isVisible || !a && !W._isValid && "set" == t || !a && !1 === j("onBeforeClose", {
                        valueText: W._tempValue,
                        button: t
                    })) return !1;
                W._isVisible = !1, g && (ee(document.activeElement).is("input,textarea") && S.contains(document.activeElement) && document.activeElement.blur(), i.activeInstance == W && delete i.activeInstance, ee(window).off("keydown", U)), o && (g && b && !e ? o.addClass("mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-" + b).on(ie, function t() {
                    o.off(ie, t), X(e)
                }).find(".mbsc-fr-popup").addClass("mbsc-anim-" + b) : X(e), W._detachEvents(o), m.off(A, Z).off("focusin", Q)), s && s(), R.trigger("blur"), j("onClose", {
                    valueText: W._value
                })
            }, W.isVisible = function() {
                return W._isVisible
            }, W.setVal = M, W.getVal = M, W._generateContent = M, W._attachEvents = M, W._detachEvents = M, W._readValue = M, W._clearValue = M, W._fillValue = M, W._markupReady = M, W._markupInserted = M, W._markupRemove = M, W._position = M, W.__processSettings = M, W.__init = M, W.__destroy = M, W._destroy = function() {
                W.hide(!0, !1, !0), R.off(".mbsc"), ee.each(J, function(e, t) {
                    t.el.off(".mbsc").prop("readonly", t.readOnly), t.lbl && t.lbl.off(".mbsc")
                }), W.__destroy()
            }, W._updateHeader = function() {
                var t = I.headerText;
                n.html(t ? "function" == typeof t ? t.call(e, W._tempValue) : t.replace(/\{value\}/i, W._tempValue) : "")
            }, W._processSettings = function() {
                var e, t;
                for (W.__processSettings(), I.buttons = I.buttons || ("inline" !== I.display ? ["cancel", "set"] : []), I.headerText = void 0 === I.headerText ? "inline" !== I.display && "{value}" : I.headerText, h = I.buttons || [], g = "inline" !== I.display, v = "body" != I.context, s = ee(I.context), r = v ? s : ee("body,html"), p = s[0], W._$window = m = ee(v ? I.context : window), W.live = !0, t = 0; t < h.length; t++) "ok" != (e = h[t]) && "set" != e && "set" != e.handler || (W.live = !1);
                W.buttons.set = {
                    text: I.setText,
                    icon: I.setIcon,
                    handler: "set"
                }, W.buttons.cancel = {
                    text: I.cancelText,
                    icon: I.cancelIcon,
                    handler: "cancel"
                }, W.buttons.close = {
                    text: I.closeText,
                    icon: I.closeIcon,
                    handler: "cancel"
                }, W.buttons.clear = {
                    text: I.clearText,
                    icon: I.clearIcon,
                    handler: "clear"
                }, W._isInput = R.is("input")
            }, W._init = function() {
                W._isVisible && W.hide(!0, !1, !0), R.off(".mbsc"), W.__init(), W._isLiquid = "liquid" == I.layout, g ? (W._readValue(), W._hasContent || W.attachShow(R)) : W.show(), R.on("change.mbsc", function() {
                    W._preventChange || W.setVal(R.val(), !0, !1), W._preventChange = !1
                }).removeClass("mbsc-cloak")
            }, W.buttons = {}, W.handlers = {
                set: W.select,
                cancel: W.cancel,
                clear: W.clear
            }, W._value = null, W._isValid = !0, W._isVisible = !1, I = W.settings, j = W.trigger, a || W.init(t)
        };
    De.prototype._defaults = {
            lang: "en",
            setText: "Set",
            selectedText: "{count} selected",
            closeText: "Close",
            cancelText: "Cancel",
            clearText: "Clear",
            context: "body",
            maxPopupWidth: 600,
            disabled: !1,
            closeOnOverlayTap: !0,
            showOnFocus: we || Me,
            showOnTap: !0,
            display: "center",
            scroll: !0,
            scrollLock: !0,
            tap: !0,
            btnClass: "mbsc-fr-btn",
            btnWidth: !0,
            focusTrap: !0,
            focusOnClose: !Ce
        }, se.Frame = De, ye.frame.mobiscroll = {
            headerText: !1,
            btnWidth: !1
        }, ye.scroller.mobiscroll = ne({}, ye.frame.mobiscroll, {
            rows: 5,
            showLabel: !1,
            selectedLineBorder: 1,
            weekDays: "min",
            checkIcon: "ion-ios7-checkmark-empty",
            btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
            btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
        }), x && ee(window).on("focus", function() {
            ve && (ge = !0)
        })
        /* eslint-disable no-unused-vars */
    ;
    var Ne = "ios" == t,
        Ve = function(e, t, a) {
            var s, n, r, o, l, c, d, m, u, h, f, p, b, v, g, x, T, y, M, C, k, V, A, F, I, P, H, E, L, Y, j, z, $, W, R, J, q, K = this,
                B = 0,
                U = 1,
                G = t,
                X = ee(e);

            function Z(e) {
                R("onStart", {
                    domEvent: e
                }), G.stopProp && e.stopPropagation(), G.prevDef && e.preventDefault(), G.readonly || G.lock && y || fe(e, this) && !T && i.QkqWj && (s && s.removeClass("mbsc-active"), b = !1, y || (s = ee(e.target).closest(".mbsc-btn-e", this)).length && !s.hasClass("mbsc-disabled") && (b = !0, n = setTimeout(function() {
                    s.addClass("mbsc-active")
                }, 100)), T = !0, V = !1, M = !1, K.scrolled = y, L = O(e, "X"), Y = O(e, "Y"), h = L, o = 0, l = 0, c = 0, E = new Date, H = +pe(z, J) || 0, y && ie(H, Ne ? 0 : 1), "mousedown" === e.type && ee(document).on("mousemove", Q).on("mouseup", ae))
            }

            function Q(e) {
                T && (G.stopProp && e.stopPropagation(), h = O(e, "X"), f = O(e, "Y"), o = h - L, l = f - Y, c = J ? l : o, b && (Math.abs(l) > G.thresholdY || Math.abs(o) > G.thresholdX) && (clearTimeout(n), s.removeClass("mbsc-active"), b = !1), (K.scrolled || !M && Math.abs(c) > W) && (V || R("onGestureStart", p), K.scrolled = V = !0, k || (k = !0, C = _(te))), J || G.scrollLock ? e.preventDefault() : K.scrolled ? e.preventDefault() : Math.abs(l) > 7 && (M = !0, K.scrolled = !0, X.trigger("touchend")))
            }

            function te() {
                g && (c = N(c, -I * g, I * g)), ie(N(H + c, x - u, v + u)), k = !1
            }

            function ae(e) {
                if (T) {
                    var t, a = new Date - E;
                    G.stopProp && e.stopPropagation(), w(C), k = !1, !M && K.scrolled && (G.momentum && a < 300 && (t = c / a, c = Math.max(Math.abs(c), t * t / G.speedUnit) * (c < 0 ? -1 : 1)), ne(c)), b && (clearTimeout(n), s.addClass("mbsc-active"), setTimeout(function() {
                        s.removeClass("mbsc-active")
                    }, 100), M || K.scrolled || R("onBtnTap", {
                        target: s[0],
                        domEvent: e
                    })), "mouseup" == e.type && ee(document).off("mousemove", Q).off("mouseup", ae), T = !1
                }
            }

            function se(e) {
                if (e = e.originalEvent || e, c = J ? e.deltaY || e.wheelDelta || e.detail : e.deltaX, R("onStart", {
                        domEvent: e
                    }), G.stopProp && e.stopPropagation(), c && i.QkqWj) {
                    if (e.preventDefault(), e.deltaMode && 1 == e.deltaMode && (c *= 5), c = N(-c, -20, 20), H = q, G.readonly || H + c < x || H + c > v) return;
                    V || R("onGestureStart", p = {
                        posX: J ? 0 : q,
                        posY: J ? q : 0,
                        originX: J ? 0 : H,
                        originY: J ? H : 0,
                        direction: c > 0 ? J ? 270 : 360 : J ? 90 : 180
                    }), k || (k = !0, C = _(te)), V = !0, clearTimeout(A), A = setTimeout(function() {
                        w(C), k = !1, V = !1, ne(c)
                    }, 200)
                }
            }

            function ne(e) {
                var t, a, s;
                if (g && (e = N(e, -I * g, I * g)), s = N(Math.round((H + e) / I) * I, x, v), B = Math.round(s / I), P) {
                    if (e < 0) {
                        for (t = P.length - 1; t >= 0; t--)
                            if (Math.abs(s) + r >= P[t].breakpoint) {
                                B = t, U = 2, s = P[t].snap2;
                                break
                            }
                    } else if (e >= 0)
                        for (t = 0; t < P.length; t++)
                            if (Math.abs(s) <= P[t].breakpoint) {
                                B = t, U = 1, s = P[t].snap1;
                                break
                            }
                    s = N(s, x, v)
                }
                a = G.time || (q < x || q > v ? 1e3 : Math.max(1e3, Math.abs(s - q) * G.timeUnit)), p.destinationX = J ? 0 : s, p.destinationY = J ? s : 0, p.duration = a, p.transitionTiming = m, R("onGestureEnd", p), ie(s, a)
            }

            function ie(e, t, a, s) {
                var n = e != q,
                    i = t > 1,
                    r = function() {
                        clearInterval(F), clearTimeout($), y = !1, q = e, p.posX = J ? 0 : e, p.posY = J ? e : 0, n && R("onMove", p), i && R("onAnimationEnd", p), s && s()
                    };
                p = {
                    posX: J ? 0 : q,
                    posY: J ? q : 0,
                    originX: J ? 0 : H,
                    originY: J ? H : 0,
                    direction: e - q > 0 ? J ? 270 : 360 : J ? 90 : 180
                }, q = e, i && (p.destinationX = J ? 0 : e, p.destinationY = J ? e : 0, p.duration = t, p.transitionTiming = m, R("onAnimationStart", p)), j[ce + "Transition"] = t ? oe + "transform " + Math.round(t) + "ms " + m : "", j[ce + "Transform"] = "translate3d(" + (J ? "0," + e + "px," : e + "px,0,") + "0)", !n && !y || !t || t <= 1 ? r() : t && (y = !a, clearInterval(F), F = setInterval(function() {
                    var t = +pe(z, J) || 0;
                    p.posX = J ? 0 : t, p.posY = J ? t : 0, R("onMove", p), Math.abs(t - e) < 2 && r()
                }, 100), clearTimeout($), $ = setTimeout(function() {
                    r()
                }, t)), G.sync && G.sync(e, t, m)
            }
            de.call(this, e, t, !0), K.scrolled = !1, K.scroll = function(t, a, s, n) {
                t = N(t = S(t) ? Math.round(t / I) * I : Math.ceil((ee(t, e).length ? Math.round(z.offset()[d] - ee(t, e).offset()[d]) : q) / I) * I, x, v), B = Math.round(t / I), H = q, ie(t, a, s, n)
            }, K.refresh = function(e) {
                var t;
                r = void 0 === G.contSize ? J ? X.height() : X.width() : G.contSize, x = void 0 === G.minScroll ? Math.min(0, J ? r - z.height() : r - z.width()) : G.minScroll, v = void 0 === G.maxScroll ? 0 : G.maxScroll, P = null, !J && G.rtl && (t = v, v = -x, x = -t), D(G.snap) && (P = [], z.find(G.snap).each(function() {
                    var e = J ? this.offsetTop : this.offsetLeft,
                        t = J ? this.offsetHeight : this.offsetWidth;
                    P.push({
                        breakpoint: e + t / 2,
                        snap1: -e,
                        snap2: r - e - t
                    })
                })), I = S(G.snap) ? G.snap : 1, g = G.snap ? G.maxSnapScroll : 0, m = G.easing, u = G.elastic ? S(G.snap) ? I : S(G.elastic) ? G.elastic : 0 : 0, void 0 === q && (q = G.initialPos, B = Math.round(q / I)), e || K.scroll(G.snap ? P ? P[B]["snap" + U] : B * I : q)
            }, K._processSettings = function() {
                J = "Y" == G.axis, d = J ? "top" : "left", z = G.moveElement || X.children().eq(0), j = z[0].style, W = J ? G.thresholdY : G.thresholdX
            }, K._init = function() {
                K.refresh(), X.on("touchstart mousedown", Z).on("touchmove", Q).on("touchend touchcancel", ae), G.mousewheel && X.on("wheel mousewheel", se), e.addEventListener && e.addEventListener("click", function(e) {
                    K.scrolled && (K.scrolled = !1, e.stopPropagation(), e.preventDefault())
                }, !0)
            }, K._destroy = function() {
                clearInterval(F), X.off("touchstart mousedown", Z).off("touchmove", Q).off("touchend touchcancel", ae).off("wheel mousewheel", se)
            }, G = K.settings, R = K.trigger, a || K.init(t)
        };
    Ve.prototype = {
        _defaults: {
            speedUnit: .0022,
            timeUnit: 3,
            initialPos: 0,
            axis: "Y",
            thresholdX: 10,
            thresholdY: 5,
            easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
            stopProp: !0,
            momentum: !0,
            mousewheel: !0,
            elastic: !0
        }
    };
    /* eslint-disable no-unused-vars */
    var Ae = {},
        Fe = x ? window.CSS : null,
        Ie = !(Fe && Fe.supports && Fe.supports("(transform-style: preserve-3d)")) || "wp" == t || "android" == t,
        Pe = function(e, t, a) {
            var s, n, r, o, l, c, d, m, u, h, f, p, b, v, g, x, T = 40,
                y = 1e3,
                _ = this,
                w = ee(e);

            function M(e) {
                var t, a, s = ee(this).attr("data-index");
                38 == e.keyCode ? (t = !0, a = -1) : 40 == e.keyCode ? (t = !0, a = 1) : 32 == e.keyCode && (t = !0, D(s, g[s]._$markup.find('.mbsc-sc-itm[data-val="' + m[s] + '"]'))), t && (e.stopPropagation(), e.preventDefault(), a && d.start(s, a))
            }

            function k() {
                d.stop()
            }

            function D(e, t) {
                var a = g[e],
                    s = +t.attr("data-index"),
                    n = I(a, s),
                    i = _._tempSelected[e],
                    r = S(a.multiple) ? a.multiple : 1 / 0;
                !1 !== b("onItemTap", {
                    target: t[0],
                    index: e,
                    value: n,
                    selected: t.hasClass("mbsc-sc-itm-sel")
                }) && (a.multiple && !a._disabled[n] && (void 0 !== i[n] ? (t.removeClass(l).removeAttr("aria-selected"), delete i[n]) : (1 == r && (_._tempSelected[e] = i = {}, a._$markup.find(".mbsc-sc-itm-sel").removeClass(l).removeAttr("aria-selected")), C(i).length < r && (t.addClass(l).attr("aria-selected", "true"), i[n] = n))), j(a, e, s, y, !0, !0, a.multiple), !_.live || a.multiple || !0 !== p.setOnTap && !p.setOnTap[e] || setTimeout(function() {
                    _.select()
                }, 200))
            }

            function N(e, t) {
                return (e._array ? e._map[t] : e.getIndex(t, _)) || 0
            }

            function V(e, t) {
                var a = e.data;
                if (t >= e.min && t <= e.max) return e._array ? e.circular ? ee(a).get(t % e._length) : a[t] : ee.isFunction(a) ? a(t, _) : ""
            }

            function A(e) {
                return ee.isPlainObject(e) ? void 0 !== e.value ? e.value : e.display : e
            }

            function F(e) {
                var t = ee.isPlainObject(e) ? e.display : e;
                return void 0 === t ? "" : t + _._getText(i, .2)
            }

            function I(e, t) {
                return A(V(e, t))
            }

            function P(e, t) {
                var a = g[e];
                j(a, e, a._current + t, y, 1 == t ? 1 : 2)
            }

            function H(e) {
                return ee.isArray(p.readonly) ? p.readonly[e] : p.readonly
            }

            function E(e, t, a) {
                var s = e._index - e._batch;
                return e.data = e.data || [], e.key = void 0 !== e.key ? e.key : t, e.label = void 0 !== e.label ? e.label : t, e._map = {}, e._array = ee.isArray(e.data), e._array && (e._length = e.data.length, ee.each(e.data, function(t, a) {
                    e._map[A(a)] = t
                })), e.circular = void 0 === p.circular ? void 0 === e.circular ? e._array && e._length > p.rows : e.circular : ee.isArray(p.circular) ? p.circular[t] : p.circular, e.min = e._array ? e.circular ? -1 / 0 : 0 : void 0 === e.min ? -1 / 0 : e.min, e.max = e._array ? e.circular ? 1 / 0 : e._length - 1 : void 0 === e.max ? 1 / 0 : e.max, e._nr = t, e._index = N(e, m[t]), e._disabled = {}, e._batch = 0, e._current = e._index, e._first = e._index - T, e._last = e._index + T, e._offset = e._first, a ? (e._offset -= e._margin / u + (e._index - s), e._margin += (e._index - s) * u) : e._margin = 0, e._refresh = function(t) {
                    var a = -(e.min - e._offset + (e.multiple && !o ? Math.floor(p.rows / 2) : 0)) * u,
                        s = Math.min(a, -(e.max - e._offset - (e.multiple && !o ? Math.floor(p.rows / 2) : 0)) * u);
                    ne(e._scroller.settings, {
                        minScroll: s,
                        maxScroll: a
                    }), e._scroller.refresh(t)
                }, x[e.key] = e, e
            }

            function L(e, t, a, s, n) {
                var i, o, c, d, h, f, b, g, x = "",
                    T = _._tempSelected[t],
                    y = e._disabled || {};
                for (i = a; i <= s; i++) h = F(c = V(e, i)), d = A(c), o = c && void 0 !== c.cssClass ? c.cssClass : "", f = c && void 0 !== c.label ? c.label : "", b = c && c.invalid, g = void 0 !== d && d == m[t] && !e.multiple, x += '<div role="option" aria-selected="' + !!T[d] + '" class="mbsc-sc-itm ' + (n ? "mbsc-sc-itm-3d " : "") + o + " " + (g ? "mbsc-sc-itm-sel " : "") + (T[d] ? l : "") + (void 0 === d ? " mbsc-sc-itm-ph" : " mbsc-btn-e") + (b ? " mbsc-sc-itm-inv-h mbsc-disabled" : "") + (y[d] ? " mbsc-sc-itm-inv mbsc-disabled" : "") + '" data-index="' + i + '" data-val="' + d + '"' + (f ? ' aria-label="' + f + '"' : "") + (g ? ' aria-selected="true"' : "") + ' style="height:' + u + "px;line-height:" + u + "px;" + (n ? oe + "transform:rotateX(" + (e._offset - i) * r % 360 + "deg) translateZ(" + u * p.rows / 2 + "px);" : "") + '">' + (v > 1 ? '<div class="mbsc-sc-itm-ml" style="line-height:' + Math.round(u / v) + "px;font-size:" + Math.round(u / v * .8) + 'px;">' : "") + h + (v > 1 ? "</div>" : "") + "</div>";
                return x
            }

            function O(e, t, a, s) {
                var n, i = g[e],
                    r = s || i._disabled,
                    o = N(i, t),
                    l = t,
                    c = t,
                    d = 0,
                    m = 0;
                if (void 0 === t && (t = I(i, o)), !0 === r[t]) {
                    for (n = 0; o - d >= i.min && r[l] && n < 100;) n++, l = I(i, o - ++d);
                    for (n = 0; o + m < i.max && r[c] && n < 100;) n++, c = I(i, o + ++m);
                    t = (m < d && m && 2 !== a || !d || o - d < 0 || 1 == a) && !r[c] ? c : l
                }
                return t
            }

            function Y(t, a, s, n, i, r) {
                var o, c, d, h, v = _._isVisible;
                f = !0, h = p.validate.call(e, {
                    values: m.slice(0),
                    index: a,
                    direction: s
                }, _) || {}, f = !1, h.valid && (_._tempWheelArray = m = h.valid.slice(0)), r || ee.each(g, function(e, n) {
                    if (v && n._$markup.find(".mbsc-sc-itm-inv").removeClass("mbsc-sc-itm-inv mbsc-disabled"), n._disabled = {}, h.disabled && h.disabled[e] && ee.each(h.disabled[e], function(e, t) {
                            n._disabled[t] = !0, v && n._$markup.find('.mbsc-sc-itm[data-val="' + t + '"]').addClass("mbsc-sc-itm-inv mbsc-disabled")
                        }), m[e] = n.multiple ? m[e] : O(e, m[e], s), v) {
                        if (n.multiple && void 0 !== a || n._$markup.find(".mbsc-sc-itm-sel").removeClass(l).removeAttr("aria-selected"), n.multiple) {
                            if (void 0 === a)
                                for (var r in _._tempSelected[e]) n._$markup.find('.mbsc-sc-itm[data-val="' + r + '"]').addClass(l).attr("aria-selected", "true")
                        } else n._$markup.find('.mbsc-sc-itm[data-val="' + m[e] + '"]').addClass("mbsc-sc-itm-sel").attr("aria-selected", "true");
                        c = N(n, m[e]), o = c - n._index + n._batch, Math.abs(o) > 2 * T + 1 && (d = o + (2 * T + 1) * (o > 0 ? -1 : 1), n._offset += d, n._margin -= d * u, n._refresh()), n._index = c + n._batch, n._scroller.scroll(-(c - n._offset + n._batch) * u, a === e || void 0 === a ? t : y, i)
                    }
                }), b("onValidated", {
                    index: a,
                    time: t
                }), _._tempValue = p.formatValue.call(e, m, _), v && _._updateHeader(), _.live && (_._hasValue = n || _._hasValue, z(n, n, 0, !0), n && b("onSet", {
                    valueText: _._value
                })), n && b("onChange", {
                    index: a,
                    valueText: _._tempValue
                })
            }

            function j(e, t, a, s, n, i, r) {
                var o = I(e, a);
                void 0 !== o && (m[t] = o, e._batch = e._array ? Math.floor(a / e._length) * e._length : 0, e._index = a, setTimeout(function() {
                    Y(s, t, n, !0, i, r)
                }, 10))
            }

            function z(t, a, s, n, i) {
                if (n ? _._tempValue = p.formatValue.call(e, _._tempWheelArray, _) : Y(s), !i) {
                    _._wheelArray = [];
                    for (var r = 0; r < m.length; r++) _._wheelArray[r] = g[r] && g[r].multiple ? Object.keys(_._tempSelected[r])[0] : m[r];
                    _._value = _._hasValue ? _._tempValue : null, _._selected = ne(!0, {}, _._tempSelected)
                }
                t && (_._isInput && w.val(_._hasValue ? _._tempValue : ""), b("onFill", {
                    valueText: _._hasValue ? _._tempValue : "",
                    change: a
                }), a && (_._preventChange = !0, w.trigger("change")))
            }
            De.call(this, e, t, !0), _.setVal = _._setVal = function(t, a, s, n, i) {
                _._hasValue = null !== t && void 0 !== t, _._tempWheelArray = m = ee.isArray(t) ? t.slice(0) : p.parseValue.call(e, t, _) || [], z(a, void 0 === s ? a : s, i, !1, n)
            }, _.getVal = _._getVal = function(e) {
                var t = _._hasValue || e ? _[e ? "_tempValue" : "_value"] : null;
                return S(t) ? +t : t
            }, _.setArrayVal = _.setVal, _.getArrayVal = function(e) {
                return e ? _._tempWheelArray : _._wheelArray
            }, _.changeWheel = function(e, t, a) {
                var s, i;
                ee.each(e, function(e, t) {
                    (i = x[e]) && (s = i._nr, ne(i, t), E(i, s, !0), _._isVisible && (o && i._$3d.html(L(i, s, i._first + T - n + 1, i._last - T + n, !0)), i._$scroller.html(L(i, s, i._first, i._last)).css("margin-top", i._margin + "px"), i._refresh(f)))
                }), !_._isVisible || _._isLiquid || f || _.position(), f || Y(t, void 0, void 0, a)
            }, _.getValidValue = O, _._generateContent = function() {
                var e, t = 0,
                    a = "",
                    s = o ? oe + "transform: translateZ(" + (u * p.rows / 2 + 3) + "px);" : "",
                    i = '<div class="mbsc-sc-whl-l" style="' + s + "height:" + u + "px;margin-top:-" + (u / 2 + (p.selectedLineBorder || 0)) + 'px;"></div>',
                    r = 0;
                return ee.each(p.wheels, function(l, d) {
                    a += '<div class="mbsc-w-p mbsc-sc-whl-gr-c' + (o ? " mbsc-sc-whl-gr-3d-c" : "") + (p.showLabel ? " mbsc-sc-lbl-v" : "") + '">' + i + '<div class="mbsc-sc-whl-gr' + (o ? " mbsc-sc-whl-gr-3d" : "") + (c ? " mbsc-sc-cp" : "") + (p.width || p.maxWidth ? '"' : '" style="max-width:' + p.maxPopupWidth + 'px;"') + ">", ee.each(d, function(l, d) {
                        _._tempSelected[r] = ne({}, _._selected[r]), g[r] = E(d, r), t += p.maxWidth ? p.maxWidth[r] || p.maxWidth : p.width ? p.width[r] || p.width : 0, e = void 0 !== d.label ? d.label : l, a += '<div class="mbsc-sc-whl-w ' + (d.cssClass || "") + (d.multiple ? " mbsc-sc-whl-multi" : "") + '" style="' + (p.width ? "width:" + (p.width[r] || p.width) + "px;" : (p.minWidth ? "min-width:" + (p.minWidth[r] || p.minWidth) + "px;" : "") + (p.maxWidth ? "max-width:" + (p.maxWidth[r] || p.maxWidth) + "px;" : "")) + '"><div class="mbsc-sc-whl-o" style="' + s + '"></div>' + i + '<div tabindex="0" aria-live="off" aria-label="' + e + '"' + (d.multiple ? ' aria-multiselectable="true"' : "") + ' role="listbox" data-index="' + r + '" class="mbsc-sc-whl" style="height:' + p.rows * u * (o ? 1.1 : 1) + 'px;">' + (c ? '<div data-index="' + r + '" data-step="1" class="mbsc-sc-btn mbsc-sc-btn-plus ' + (p.btnPlusClass || "") + '" style="height:' + u + "px;line-height:" + u + 'px;"></div><div data-index="' + r + '" data-step="-1" class="mbsc-sc-btn mbsc-sc-btn-minus ' + (p.btnMinusClass || "") + '" style="height:' + u + "px;line-height:" + u + 'px;"></div>' : "") + '<div class="mbsc-sc-lbl">' + e + '</div><div class="mbsc-sc-whl-c" style="height:' + h + "px;margin-top:-" + (h / 2 + 1) + "px;" + s + '"><div class="mbsc-sc-whl-sc" style="top:' + (h - u) / 2 + 'px;">', a += L(d, r, d._first, d._last) + "</div></div>", o && (a += '<div class="mbsc-sc-whl-3d" style="height:' + u + "px;margin-top:-" + u / 2 + 'px;">', a += L(d, r, d._first + T - n + 1, d._last - T + n, !0), a += "</div>"), a += "</div></div>", r++
                    }), a += "</div></div>"
                }), t && (p.maxPopupWidth = t), a
            }, _._attachEvents = function(e) {
                d = Te(ee(".mbsc-sc-btn", e), P, p.delay, H, !0), ee(".mbsc-sc-whl", e).on("keydown", M).on("keyup", k)
            }, _._detachEvents = function() {
                for (var e = 0; e < g.length; e++) g[e]._scroller.destroy()
            }, _._markupReady = function(e) {
                ee(".mbsc-sc-whl-w", s = e).each(function(e) {
                    var t, a = ee(this),
                        s = g[e],
                        i = -(s.min - s._offset + (s.multiple && !o ? Math.floor(p.rows / 2) : 0)) * u,
                        l = Math.min(i, -(s.max - s._offset - (s.multiple && !o ? Math.floor(p.rows / 2) : 0)) * u);
                    s._$markup = a, s._$scroller = ee(".mbsc-sc-whl-sc", this), s._$3d = ee(".mbsc-sc-whl-3d", this), s._scroller = new Ve(this, {
                        mousewheel: p.mousewheel,
                        moveElement: s._$scroller,
                        initialPos: (s._first - s._index) * u,
                        contSize: 0,
                        snap: u,
                        minScroll: l,
                        maxScroll: i,
                        maxSnapScroll: T,
                        prevDef: !0,
                        stopProp: !0,
                        timeUnit: 3,
                        easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                        sync: function(e, t, a) {
                            o && (s._$3d[0].style[ce + "Transition"] = t ? oe + "transform " + Math.round(t) + "ms " + a : "", s._$3d[0].style[ce + "Transform"] = "rotateX(" + -e / u * r + "deg)")
                        },
                        onStart: function(t, a) {
                            a.settings.readonly = H(e)
                        },
                        onGestureStart: function() {
                            a.addClass("mbsc-sc-whl-a mbsc-sc-whl-anim"), b("onWheelGestureStart", {
                                index: e
                            })
                        },
                        onGestureEnd: function(a) {
                            var n = 90 == a.direction ? 1 : 2,
                                i = a.duration,
                                r = a.destinationY;
                            t = Math.round(-r / u) + s._offset, j(s, e, t, i, n)
                        },
                        onAnimationStart: function() {
                            a.addClass("mbsc-sc-whl-anim")
                        },
                        onAnimationEnd: function() {
                            a.removeClass("mbsc-sc-whl-a mbsc-sc-whl-anim"), b("onWheelAnimationEnd", {
                                index: e
                            }), s._$3d.find(".mbsc-sc-itm-del").remove()
                        },
                        onMove: function(t) {
                            ! function(e, t, a) {
                                var s = Math.round(-a / u) + e._offset,
                                    i = s - e._current,
                                    r = e._first,
                                    l = e._last,
                                    c = r + T - n + 1,
                                    d = l - T + n;
                                i && (e._first += i, e._last += i, e._current = s, i > 0 ? (e._$scroller.append(L(e, t, Math.max(l + 1, r + i), l + i)), ee(".mbsc-sc-itm", e._$scroller).slice(0, Math.min(i, l - r + 1)).remove(), o && (e._$3d.append(L(e, t, Math.max(d + 1, c + i), d + i, !0)), ee(".mbsc-sc-itm", e._$3d).slice(0, Math.min(i, d - c + 1)).attr("class", "mbsc-sc-itm-del"))) : i < 0 && (e._$scroller.prepend(L(e, t, r + i, Math.min(r - 1, l + i))), ee(".mbsc-sc-itm", e._$scroller).slice(Math.max(i, r - l - 1)).remove(), o && (e._$3d.prepend(L(e, t, c + i, Math.min(c - 1, d + i), !0)), ee(".mbsc-sc-itm", e._$3d).slice(Math.max(i, c - d - 1)).attr("class", "mbsc-sc-itm-del"))), e._margin += i * u, e._$scroller.css("margin-top", e._margin + "px"))
                            }(s, e, t.posY)
                        },
                        onBtnTap: function(t) {
                            D(e, ee(t.target))
                        }
                    })
                }), Y()
            }, _._fillValue = function() {
                _._hasValue = !0, z(!0, !0, 0, !0)
            }, _._clearValue = function() {
                ee(".mbsc-sc-whl-multi .mbsc-sc-itm-sel", s).removeClass(l).removeAttr("aria-selected")
            }, _._readValue = function() {
                var t = w.val() || "",
                    a = 0;
                "" !== t && (_._hasValue = !0), _._tempWheelArray = m = _._hasValue && _._wheelArray ? _._wheelArray.slice(0) : p.parseValue.call(e, t, _) || [], _._tempSelected = ne(!0, {}, _._selected), ee.each(p.wheels, function(e, t) {
                    ee.each(t, function(e, t) {
                        g[a] = E(t, a), a++
                    })
                }), z(!1, !1, 0, !0), b("onRead")
            }, _.__processSettings = function() {
                p = _.settings, b = _.trigger, v = p.multiline, l = "mbsc-sc-itm-sel mbsc-ic mbsc-ic-" + p.checkIcon
            }, _.__init = function() {
                g = [], x = {}, c = p.showScrollArrows, o = p.scroll3d && !Ie && !c, u = p.height, h = o ? 2 * Math.round((u - .03 * (u * p.rows / 2 + 3)) / 2) : u, n = Math.round(1.8 * p.rows), r = 360 / (2 * n), c && (p.rows = Math.max(3, p.rows)), p.cssClass = (p.cssClass || "") + " mbsc-sc"
            }, _._getItemValue = A, _._tempSelected = {}, _._selected = {}, a || _.init(t)
        };
    Pe.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "scroller",
        _presets: Ae,
        _defaults: ne({}, De.prototype._defaults, {
            minWidth: 80,
            height: 40,
            rows: 3,
            multiline: 1,
            delay: 300,
            readonly: !1,
            showLabel: !0,
            setOnTap: !1,
            wheels: [],
            preset: "",
            speedUnit: .0012,
            timeUnit: .08,
            checkIcon: "checkmark",
            validate: function() {},
            formatValue: function(e) {
                return e.join(" ")
            },
            parseValue: function(e, t) {
                var a, s, n = [],
                    i = [],
                    r = 0;
                return null !== e && void 0 !== e && (n = (e + "").split(" ")), ee.each(t.settings.wheels, function(e, o) {
                    ee.each(o, function(e, o) {
                        s = o.data, a = t._getItemValue(s[0]), ee.each(s, function(e, s) {
                            if (n[r] == t._getItemValue(s)) return a = t._getItemValue(s), !1
                        }), i.push(a), r++
                    })
                }), i
            }
        })
    }, se.Scroller = Pe;
    var He = {
            separator: " ",
            dateFormat: "mm/dd/yy",
            dateDisplay: "MMddyy",
            timeFormat: "h:ii A",
            dayText: "Day",
            monthText: "Month",
            yearText: "Year",
            hourText: "Hours",
            minuteText: "Minutes",
            ampmText: "&nbsp;",
            secText: "Seconds",
            nowText: "Now",
            todayText: "Today"
        },
        Ee = function(e) {
            function t(e) {
                var t, a, s, n, i = [];
                if (e) {
                    for (t = 0; t < e.length; t++)
                        if ((a = e[t]).start && a.end && !X.test(a.start))
                            for (s = new Date(B(a.start, M, y)), n = new Date(B(a.end, M, y)); s <= n;) i.push(z(s.getFullYear(), s.getMonth(), s.getDate())), s.setDate(s.getDate() + 1);
                        else i.push(a);
                    return i
                }
                return e
            }

            function a(e, t, a, s) {
                return Math.min(s, Math.floor(e / t) * t + a)
            }

            function s(e, t, a) {
                return Math.floor((a - t) / e) * e + t
            }

            function n(e) {
                return e.getFullYear() + "-" + V(e.getMonth() + 1) + "-" + V(e.getDate())
            }

            function i(e, t, a, s) {
                var n;
                return void 0 === b[t] || (n = +e[b[t]], isNaN(n)) ? a ? re[t](a) : void 0 !== v[t] ? v[t] : re[t](s) : n
            }

            function r(e) {
                var t, a = new Date((new Date).setHours(0, 0, 0, 0));
                if (null === e) return e;
                void 0 !== b.dd && (t = e[b.dd].split("-"), t = new Date(t[0], t[1] - 1, t[2])), void 0 !== b.tt && (t = t || a, t = new Date(t.getTime() + e[b.tt] % 86400 * 1e3));
                var s = i(e, "y", t, a),
                    n = i(e, "m", t, a),
                    r = Math.min(i(e, "d", t, a), y.getMaxDayOfMonth(s, n)),
                    o = i(e, "h", t, a);
                return y.getDate(s, n, r, H && i(e, "a", t, a) ? o + 12 : o, i(e, "i", t, a), i(e, "s", t, a), i(e, "u", t, a))
            }

            function o(e, t) {
                var a, s, n = ["y", "m", "d", "a", "h", "i", "s", "u", "dd", "tt"],
                    i = [];
                if (null === e || void 0 === e) return e;
                for (a = 0; a < n.length; a++) void 0 !== b[s = n[a]] && (i[b[s]] = re[s](e)), t && (v[s] = re[s](e));
                return i
            }

            function l(e, t) {
                return !(!t && e < F) && (!(!t && e > I) && (!!c(e, A) || !c(e, N)))
            }

            function c(e, t) {
                var a, s, n;
                if (t)
                    for (s = 0; s < t.length; s++)
                        if (n = (a = t[s]) + "", !a.start)
                            if (/^w\d$/i.test(n)) {
                                if ((n = +n.replace("w", "")) == e.getDay()) return !0
                            } else if (/^\d{1,2}(\/\d{1,2})?$/.test(n)) {
                    if ((n = n.split("/"))[1]) {
                        if (n[0] - 1 == e.getMonth() && n[1] == e.getDate()) return !0
                    } else if (n[0] == e.getDate()) return !0
                } else if (a = B(a, M, y), e.getFullYear() == a.getFullYear() && e.getMonth() == a.getMonth() && e.getDate() == a.getDate()) return !0;
                return !1
            }

            function d(e, t, a, s, n, i, r) {
                var o, l, c, d;
                if (e)
                    for (l = 0; l < e.length; l++)
                        if (d = (o = e[l]) + "", !o.start)
                            if (/^w\d$/i.test(d))
                                for (c = (d = +d.replace("w", "")) - s; c < n; c += 7) c >= 0 && (i[c + 1] = r);
                            else /^\d{1,2}(\/\d{1,2})?$/.test(d) ? (d = d.split("/"))[1] ? d[0] - 1 == a && (i[d[1]] = r) : i[d[0]] = r : (o = B(o, M, y), y.getYear(o) == t && y.getMonth(o) == a && (i[y.getDay(o)] = r))
            }

            function m(e, t, s, n, i, r, o, l) {
                var c, d, m, h, f, p, b, v, x, T, _, w, M, C, k, S, D, N, V, A, F = {},
                    I = y.getDate(n, i, r),
                    P = ["a", "h", "i", "s"];
                if (e) {
                    for (b = 0; b < e.length; b++)(_ = e[b]).start && (_.apply = !1, N = (D = (m = _.d) + "").split("/"), m && (m.getTime && n == y.getYear(m) && i == y.getMonth(m) && r == y.getDay(m) || !/^w\d$/i.test(D) && (N[1] && r == N[1] && i == N[0] - 1 || !N[1] && r == N[0]) || /^w\d$/i.test(D) && I.getDay() == +D.replace("w", "")) && (_.apply = !0, F[I] = !0));
                    for (b = 0; b < e.length; b++)
                        if (_ = e[b], c = 0, S = 0, v = ae[s], x = se[s], C = !0, k = !0, d = !1, _.start && (_.apply || !_.d && !F[I])) {
                            for (w = _.start.split(":"), M = _.end.split(":"), T = 0; T < 3; T++) void 0 === w[T] && (w[T] = 0), void 0 === M[T] && (M[T] = 59), w[T] = +w[T], M[T] = +M[T];
                            if ("tt" == s) v = a(Math.round((new Date(I).setHours(w[0], w[1], w[2]) - new Date(I).setHours(0, 0, 0, 0)) / 1e3), u, 0, 86400), x = a(Math.round((new Date(I).setHours(M[0], M[1], M[2]) - new Date(I).setHours(0, 0, 0, 0)) / 1e3), u, 0, 86400);
                            else {
                                for (w.unshift(w[0] > 11 ? 1 : 0), M.unshift(M[0] > 11 ? 1 : 0), H && (w[1] >= 12 && (w[1] = w[1] - 12), M[1] >= 12 && (M[1] = M[1] - 12)), T = 0; T < t; T++) void 0 !== g[T] && (V = a(w[T], ie[P[T]], ae[P[T]], se[P[T]]), A = a(M[T], ie[P[T]], ae[P[T]], se[P[T]]), h = 0, f = 0, p = 0, H && 1 == T && (h = w[0] ? 12 : 0, f = M[0] ? 12 : 0, p = g[0] ? 12 : 0), C || (V = 0), k || (A = se[P[T]]), (C || k) && V + h < g[T] + p && g[T] + p < A + f && (d = !0), g[T] != V && (C = !1), g[T] != A && (k = !1));
                                if (!l)
                                    for (T = t + 1; T < 4; T++) w[T] > 0 && (c = ie[s]), M[T] < se[P[T]] && (S = ie[s]);
                                d || (V = a(w[t], ie[s], ae[s], se[s]) + c, A = a(M[t], ie[s], ae[s], se[s]) - S, C && (v = V), k && (x = A))
                            }
                            if (C || k || d)
                                for (T = v; T <= x; T += ie[s]) o[T] = !l
                        }
                }
            }
            var u, h, f, p, b = {},
                v = {},
                g = [],
                x = function(e) {
                    var t, a, s, n = {};
                    if (e.is("input")) {
                        switch (e.attr("type")) {
                            case "date":
                                t = "yy-mm-dd";
                                break;
                            case "datetime":
                                t = "yy-mm-ddTHH:ii:ssZ";
                                break;
                            case "datetime-local":
                                t = "yy-mm-ddTHH:ii:ss";
                                break;
                            case "month":
                                t = "yy-mm", n.dateOrder = "mmyy";
                                break;
                            case "time":
                                t = "HH:ii:ss"
                        }
                        n.format = t, a = e.attr("min"), s = e.attr("max"), a && "undefined" != a && (n.min = W(t, a)), s && "undefined" != s && (n.max = W(t, s))
                    }
                    return n
                }(ee(this)),
                T = ne({}, e.settings),
                y = ne(e.settings, Z, He, x, T),
                _ = y.preset,
                w = "datetime" == _ ? y.dateFormat + y.separator + y.timeFormat : "time" == _ ? y.timeFormat : y.dateFormat,
                M = x.format || w,
                C = (y.dateWheels || y.dateFormat, y.timeWheels || y.timeFormat),
                k = y.dateWheels || y.dateDisplay,
                S = C,
                D = y.baseTheme || y.theme,
                N = t(y.invalid),
                A = t(y.valid),
                F = B(y.min, M, y),
                I = B(y.max, M, y),
                P = /time/i.test(_),
                H = /h/.test(S),
                E = /D/.test(k),
                L = y.steps || {},
                O = L.hour || y.stepHour || 1,
                Y = L.minute || y.stepMinute || 1,
                j = L.second || y.stepSecond || 1,
                R = L.zeroBased,
                J = R || !F ? 0 : F.getHours() % O,
                q = R || !F ? 0 : F.getMinutes() % Y,
                U = R || !F ? 0 : F.getSeconds() % j,
                G = s(O, J, H ? 11 : 23),
                Q = s(Y, q, 59),
                te = s(Y, q, 59),
                ae = {
                    y: F ? F.getFullYear() : -1 / 0,
                    m: 0,
                    d: 1,
                    h: J,
                    i: q,
                    s: U,
                    a: 0,
                    tt: 0
                },
                se = {
                    y: I ? I.getFullYear() : 1 / 0,
                    m: 11,
                    d: 31,
                    h: G,
                    i: Q,
                    s: te,
                    a: 1,
                    tt: 86400
                },
                ie = {
                    y: 1,
                    m: 1,
                    d: 1,
                    h: O,
                    i: Y,
                    s: j,
                    a: 1,
                    tt: 1
                },
                re = {
                    y: function(e) {
                        return y.getYear(e)
                    },
                    m: function(e) {
                        return y.getMonth(e)
                    },
                    d: function(e) {
                        return y.getDay(e)
                    },
                    h: function(e) {
                        var t = e.getHours();
                        return a(t = H && t >= 12 ? t - 12 : t, O, J, G)
                    },
                    i: function(e) {
                        return a(e.getMinutes(), Y, q, Q)
                    },
                    s: function(e) {
                        return a(e.getSeconds(), j, U, te)
                    },
                    u: function(e) {
                        return e.getMilliseconds()
                    },
                    a: function(e) {
                        return e.getHours() > 11 ? 1 : 0
                    },
                    dd: n,
                    tt: function(e) {
                        return a(Math.round((e.getTime() - new Date(e).setHours(0, 0, 0, 0)) / 1e3), u, 0, 86400)
                    }
                };
            return e.getVal = function(t) {
                return e._hasValue || t ? K(r(e.getArrayVal(t)), y, M) : null
            }, e.getDate = function(t) {
                return e._hasValue || t ? r(e.getArrayVal(t)) : null
            }, e.setDate = function(t, a, s, n, i) {
                e.setArrayVal(o(t), a, i, n, s)
            }, b = e.remote.datetime.wheelOrder, h = e.remote.datetime.oneDateWheel, u = e.remote.datetime.timeStep, f = e.remote.datetime.wheels, y.isoParts = p = e.remote.datetime.isoParts, y.dateDisplay = k, e.remote.datetime.isValid = l, e.remote.datetime.getFullDate = n, e.remote.datetime.getDateIndex = function(e, t) {
                return t ? Math.floor(new Date(e) / 864e5) : e.getMonth() + 12 * (e.getFullYear() - 1970)
            }, e.remote.datetime.datetime = {
                formatDate: $
            }, e._format = w, e._order = b, e.handlers.now = function() {
                e.setDate(new Date, e.live, 1e3, !0, !0)
            }, e.buttons.now = {
                text: y.nowText,
                icon: y.nowIcon,
                handler: "now"
            }, {
                minWidth: h && P ? {
                    bootstrap: 46,
                    ios: 50,
                    material: 46,
                    mobiscroll: 46,
                    windows: 50
                }[D] : void 0,
                compClass: "mbsc-dt",
                wheels: f,
                headerText: !!y.headerText && function() {
                    return $(w, r(e.getArrayVal(!0)), y)
                },
                formatValue: function(e) {
                    return $(M, r(e), y)
                },
                parseValue: function(e) {
                    return e || (v = {}), o(B(e || y.defaultValue || new Date, M, y, p), !!e)
                },
                validate: function(t) {
                    var a, s, n, i, c = t.values,
                        u = t.index,
                        h = t.direction,
                        f = y.wheels[0][b.d],
                        p = function(e, t) {
                            var a, s, n = !1,
                                i = !1,
                                c = 0,
                                d = 0,
                                m = F ? r(o(F)) : -1 / 0,
                                u = I ? r(o(I)) : 1 / 0;
                            if (l(e)) return e;
                            if (e < m && (e = m), e > u && (e = u), a = e, s = e, 2 !== t)
                                for (n = l(a, !0); !n && a < u;) n = l(a = new Date(a.getTime() + 864e5), !0), c++;
                            if (1 !== t)
                                for (i = l(s, !0); !i && s > m;) i = l(s = new Date(s.getTime() - 864e5), !0), d++;
                            return 1 === t && n ? a : 2 === t && i ? s : d <= c && i ? s : a
                        }(r(c), h),
                        v = o(p),
                        x = [],
                        T = {},
                        _ = re.y(p),
                        w = re.m(p),
                        M = y.getMaxDayOfMonth(_, w),
                        C = !0,
                        S = !0;
                    if (ee.each(["dd", "y", "m", "d", "tt", "a", "h", "i", "s"], function(e, t) {
                            if (void 0 !== b[t]) {
                                var a = ae[t],
                                    n = se[t],
                                    i = re[t](p);
                                if (x[b[t]] = [], C && F && (a = re[t](F)), S && I && (n = re[t](I)), "y" != t && "dd" != t)
                                    for (s = ae[t]; s <= se[t]; s += ie[t])(s < a || s > n) && x[b[t]].push(s);
                                if (i < a && (i = a), i > n && (i = n), C && (C = i == a), S && (S = i == n), "d" == t) {
                                    var r = y.getDate(_, w, 1).getDay(),
                                        o = {};
                                    d(N, _, w, r, M, o, 1), d(A, _, w, r, M, o, 0), ee.each(o, function(e, a) {
                                        a && x[b[t]].push(e)
                                    })
                                }
                            }
                        }), P && ee.each(["a", "h", "i", "s", "tt"], function(t, a) {
                            var s = re[a](p),
                                n = re.d(p),
                                i = {};
                            void 0 !== b[a] && (m(N, t, a, _, w, n, i, 0), m(A, t, a, _, w, n, i, 1), ee.each(i, function(e, t) {
                                t && x[b[a]].push(e)
                            }), g[t] = e.getValidValue(b[a], s, h, i))
                        }), f && (f._length !== M || E && (void 0 === u || u === b.y || u === b.m))) {
                        for (T[b.d] = f, f.data = [], a = 1; a <= M; a++) i = y.getDate(_, w, a).getDay(), n = k.replace(/[my]/gi, "").replace(/dd/, (a < 10 ? "0" + a : a) + (y.daySuffix || "")).replace(/d/, a + (y.daySuffix || "")), f.data.push({
                            value: a,
                            display: /DD/.test(n) ? n.replace(/DD/, '<span class="mbsc-dt-day">' + y.dayNames[i] + "</span>") : n.replace(/D/, '<span class="mbsc-dt-day">' + y.dayNamesShort[i] + "</span>")
                        });
                        e._tempWheelArray[b.d] = v[b.d], e.changeWheel(T)
                    }
                    return {
                        disabled: x,
                        valid: v
                    }
                }
            }
        },
        Le = {
            controls: ["calendar"],
            firstDay: 0,
            weekDays: "short",
            maxMonthWidth: 170,
            breakPointMd: 768,
            months: 1,
            pageBuffer: 1,
            weeks: 6,
            highlight: !0,
            outerMonthChange: !0,
            quickNav: !0,
            yearChange: !0,
            tabs: "auto",
            todayClass: "mbsc-cal-today",
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left6",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right6",
            dateText: "Date",
            timeText: "Time",
            todayText: "Today",
            prevMonthText: "Previous Month",
            nextMonthText: "Next Month",
            prevYearText: "Previous Year",
            nextYearText: "Next Year"
        };
    var Oe = function(e) {
            var t, a, s, n, r, o, l, c, d, m, u, h, f, p, b, v, g, x, T, y, _, w, C, k, S, D, N, V, A, F, I, P, H, L, O, Y, j, $, W, J, q, K, U, G, X, Z, Q, te, ae, se, ie, re, oe, le, ce, de, me, ue, he, fe, pe, ve, ge, xe, ye, _e, we, Me = this;

            function Ce(e) {
                e.hasClass("mbsc-cal-h") || e.addClass("mbsc-cal-h")
            }

            function ke(t) {
                t.hasClass("mbsc-cal-h") ? function(t) {
                    t.hasClass("mbsc-cal-h") && (t.removeClass("mbsc-cal-h"), e._onSelectShow())
                }(t) : Ce(t)
            }

            function Se(e, t, a) {
                e[t] = e[t] || [], e[t].push(a)
            }

            function De(e, t, a) {
                var s, n, i, r, o = le.getYear(t),
                    l = le.getMonth(t),
                    c = {};
                return e && ee.each(e, function(e, d) {
                    if (s = d.d || d.start || d, n = s + "", d.start && d.end)
                        for (r = R(B(d.start, k, le)), i = R(B(d.end, k, le)); r <= i;) Se(c, r, d), r.setDate(r.getDate() + 1);
                    else if (/^w\d$/i.test(n)) {
                        var m = +n.replace("w", ""),
                            u = 0,
                            h = t.getDay();
                        for (le.firstDay - h + 1 > 1 && (u = 7), r = le.getDate(o, l, m - u - h + le.getDay(t)); r <= a;) Se(c, r, d), r.setDate(r.getDate() + 7)
                    } else if (/^\d{1,2}(\/\d{1,2})?$/.test(n))
                        if ((n = n.split("/"))[1])
                            for (r = le.getDate(o, n[0] - 1, n[1]); r <= a;) Se(c, r, d), r = le.getDate(le.getYear(r) + 1, le.getMonth(r), n[0]);
                        else
                            for (r = le.getDate(o, l, n[0]); r <= a;) Se(c, r, d), r = le.getDate(le.getYear(r), le.getMonth(r) + 1, n[0]);
                    else Se(c, R(B(s, k, le)), d)
                }), c
            }

            function Ne(e) {
                return !(e < J) && (!(e > Y) && (void 0 === A[e] || void 0 !== me[e]))
            }

            function Ae(t) {
                var a, s, n, i, r, o, l, c = !!O[t] && O[t],
                    d = c && c[0].background,
                    m = "",
                    u = "";
                if (c) {
                    for (r = '<div class="mbsc-cal-marks">', a = 0; a < c.length; a++) m += ((i = c[a]).cssClass || "") + " ", r += '<div class="mbsc-cal-mark"' + (i.color ? ' style="background:' + i.color + ';"' : "") + "></div>", i.icon && (u += '<span class="mbsc-ic mbsc-ic-' + i.icon + '"' + (i.text ? "" : i.color ? ' style="color:' + i.color + ';"' : "") + "></span>\n");
                    r += "</div>", N && (c[0] && (s = c[0].text, n = c[0].color), s ? o = '<div class="mbsc-cal-txt" title="' + ee("<div>" + s + "</div>").text() + '"' + (n ? ' style="background:' + n + ";color:" + be(n) + ';"' : "") + ">" + u + s + "</div>" : u && (o = '<div class="mbsc-cal-txt mbsc-cal-icons">' + u + "</div>"))
                }
                return ne(l = {
                    marked: c,
                    background: d,
                    cssClass: m,
                    ariaLabel: N ? s : "",
                    markup: N ? o : D ? r : ""
                }, e._getDayProps(t, l))
            }

            function Fe(e) {
                return ' style="' + (L ? "transform: translateY(" + 100 * e + "%)" : "left:" + 100 * e * oe + "%") + '"'
            }

            function Ie(t) {
                var a = Ge(t, -ie - ae),
                    s = Ge(t, -ie + se + ae);
                A = De(le.invalid, a, s), me = De(le.valid, a, s), O = De(le.labels || le.events || le.marked || le.colors, a, s), e._onGenMonth(a, s)
            }

            function Pe(e) {
                var t = le.getYear(e),
                    a = le.getMonth(e);
                _ = e, m = e, Re(e), de("onMonthChange", {
                    year: t,
                    month: a
                }), de("onMonthLoading", {
                    year: t,
                    month: a
                }), de("onPageChange", {
                    firstDay: e
                }), de("onPageLoading", {
                    firstDay: e
                }), Ie(e)
            }

            function He(e) {
                var t = le.getYear(e),
                    a = le.getMonth(e);
                void 0 !== te && je(e, te, !0), ee(".mbsc-cal-slide", C.$scroller).removeClass("mbsc-cal-slide-a"), ee(".mbsc-cal-slide", C.$scroller).slice(ae, ae + se).addClass("mbsc-cal-slide-a"), void 0 === te && (de("onMonthLoaded", {
                    year: t,
                    month: a
                }), de("onPageLoaded", {
                    firstDay: e
                })), ze(m, C.focus), C.focus = !1
            }

            function Oe(e, t) {
                var a, s = le.getYear(e),
                    n = '<div class="mbsc-cal-slide"' + Fe(t) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">';
                for (a = 0; a < 12; a++) a && a % 3 == 0 && (n += '</div><div class="mbsc-cal-row">'), n += '<div role="gridcell" tabindex="-1" aria-label="' + s + '" data-val="' + s + '" class="mbsc-cal-cell mbsc-btn-e ' + (s < U || s > W ? " mbsc-disabled " : "") + (s == le.getYear(_) ? T : "") + '"><div class="mbsc-cal-cell-i mbsc-cal-cell-txt">' + s + xe + "</div></div>", s++;
                return n += "</div></div></div>"
            }

            function Ye(t, a) {
                var s, n, r, o, l, c, d, m, u, f, p, b, v, g, x, y, _ = 1,
                    M = 0,
                    C = le.getYear(t),
                    k = le.getMonth(t),
                    S = le.getDay(t),
                    D = null !== le.defaultValue || e._hasValue ? e.getDate(!0) : null,
                    N = le.getDate(C, k, S).getDay(),
                    V = '<div class="mbsc-cal-slide"' + Fe(a) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">';
                for (le.firstDay - N > 0 && (M = 7), y = 0; y < 7 * h; y++) x = y + le.firstDay - M, r = (s = le.getDate(C, k, x - N + S)).getFullYear(), o = s.getMonth(), l = s.getDate(), c = le.getMonth(s), d = le.getDay(s), g = le.getMaxDayOfMonth(r, o), m = r + "-" + (o + 1) + "-" + l, f = (u = ne({
                    valid: Ne(s),
                    selected: D && D.getFullYear() === r && D.getMonth() === o && D.getDate() === l
                }, Ae(s))).valid, p = u.selected, n = u.cssClass, b = new Date(s).setHours(12, 0, 0, 0) === (new Date).setHours(12, 0, 0, 0), v = c !== k, w[m] = u, y && y % 7 == 0 && (V += '</div><div class="mbsc-cal-row">'), he && y % 7 == 0 && ("month" == he && v && _ > 1 ? _ = 1 == l ? 1 : 2 : "year" == he && (_ = le.getWeekNumber(le.getDate(r, o, l + (7 - le.firstDay + 1) % 7))), V += '<div role="gridcell" class="mbsc-cal-cell mbsc-cal-week-nr">' + _ + "</div>", _++), V += '<div role="gridcell" tabindex="-1" aria-label="' + (b ? le.todayText + ", " : "") + le.dayNames[s.getDay()] + ", " + le.monthNames[c] + " " + d + " " + (u.ariaLabel ? ", " + u.ariaLabel : "") + '"' + (v && !ce ? ' aria-hidden="true"' : ' data-full="' + m + '"') + (p ? ' aria-selected="true"' : "") + (f ? "" : ' aria-disabled="true"') + ' class="mbsc-cal-cell mbsc-cal-day mbsc-cal-day' + x % 7 + " " + (le.dayClass || "") + " " + (p ? T : "") + (b ? " " + le.todayClass : "") + (n ? " " + n : "") + (1 == d ? " mbsc-cal-day-first" : "") + (d == g ? " mbsc-cal-day-last" : "") + (v ? " mbsc-cal-day-diff" : "") + (f ? " mbsc-btn-e" : " mbsc-disabled") + (u.marked ? " mbsc-cal-day-marked" : "") + (u.background ? " mbsc-cal-day-colored" : "") + '"><div class="mbsc-cal-cell-i mbsc-cal-day-i"><div class="mbsc-cal-day-date mbsc-cal-cell-txt"' + (u.background ? ' style="background:' + u.background + ";color:" + be(u.background) + '"' : "") + ">" + d + "</div>" + e._getText(i, .06) + (u.markup || "") + "</div></div>";
                return V += "</div></div></div>"
            }

            function je(e, t, a) {
                var s, n = le.getYear(e),
                    i = le.getMonth(e),
                    r = C ? C.pos : 0,
                    o = "";
                if (h)
                    for (t || (de("onMonthLoading", {
                            year: n,
                            month: i
                        }), de("onPageLoading", {
                            firstDay: e
                        })), Ie(e), s = 0; s < re; s++) o += Ye(Ge(e, s - ie - ae), r + s - ae);
                return te = void 0, a && C && (C.$scroller.html(o), de("onMonthLoaded", {
                    year: n,
                    month: i
                }), de("onPageLoaded", {
                    firstDay: e
                })), o
            }

            function ze(e, t) {
                C.$active && C.$active.attr("tabindex", "-1"), C.$active = ee('.mbsc-cal-slide-a .mbsc-cal-day[data-full="' + e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate() + '"]', C.$scroller).attr("tabindex", "0"), t && C.$active.length && C.$active[0].focus()
            }

            function $e(e, t) {
                ee(".mbsc-selected", t).removeClass(T).removeAttr("aria-selected"), ee('.mbsc-cal-cell[data-val="' + e + '"]', t).addClass(T).attr("aria-selected", "true")
            }

            function We(t, a, s, n) {
                var i, r;
                t < J && (t = J), t > Y && (t = Y), ("calendar" === ue || a) && (S && h && (r = Ue(t), Q && (t < Ge(_, -ie) || t >= Ge(_, se - ie)) && (i = P ? le.getMonth(t) - le.getMonth(_) + 12 * (le.getYear(t) - le.getYear(_)) : Math.trunc(Math.round((r - _) / 864e5) / (7 * h))) && (C.queue = [], C.focus = n && s, e._isSetDate = !0, Ze(C, i, s), e._isSetDate = !1), i && s || ze(t, n), a || function(t) {
                    var a = C && C.$scroller;
                    le.highlight && C && (ee(".mbsc-selected", a).removeClass(T).removeAttr("aria-selected"), (null !== le.defaultValue || e._hasValue) && ee('.mbsc-cal-day[data-full="' + t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + '"]', a).addClass(T).attr("aria-selected", "true"))
                }(t), m = t, Q = !0), e._onSetDate(t, i))
            }

            function Re(e, t) {
                var a, i, r, o = le.getYear(e),
                    l = le.getMonth(e),
                    d = o + xe;
                if (V) {
                    if ($e(l, Z.$scroller), $e(o, ge.$scroller), Ze(ge, Math.floor(o / 12) - Math.floor(le.getYear(ge.first) / 12), !0), ee(".mbsc-cal-cell", Z.$scroller).removeClass("mbsc-disabled"), o === U)
                        for (a = 0; a < K; a++) ee('.mbsc-cal-cell[data-val="' + a + '"]', Z.$scroller).addClass("mbsc-disabled");
                    if (o === W)
                        for (a = $ + 1; a <= 12; a++) ee('.mbsc-cal-cell[data-val="' + a + '"]', Z.$scroller).addClass("mbsc-disabled")
                }
                for (t || (Je(ee(".mbsc-cal-prev-m", s), Ge(e, -ie) <= J), Je(ee(".mbsc-cal-next-m", s), Ge(e, se - ie) > Y), Je(ee(".mbsc-cal-prev-y", s), le.getDate(o - 1, l + 1, 1) <= J), Je(ee(".mbsc-cal-next-y", s), le.getDate(o + 1, l, 1) > Y)), c.attr("aria-label", o).html(d), a = 0; a < se; a++) e = le.getDate(o, l - ie + a, 1), i = le.getYear(e), r = le.getMonth(e), d = i + xe, n.eq(a).attr("aria-label", le.monthNames[r] + (pe ? "" : " " + o)).html((!pe && ve < G ? d + " " : "") + X[r] + (!pe && ve > G ? " " + d : ""))
            }

            function Je(e, t) {
                t ? e.addClass(x).attr("aria-disabled", "true") : e.removeClass(x).removeAttr("aria-disabled")
            }

            function qe(t) {
                var a = e.getDate(!0),
                    s = t.attr("data-full"),
                    n = s ? s.split("-") : [],
                    i = z(n[0], n[1] - 1, n[2]),
                    r = z(i.getFullYear(), i.getMonth(), i.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()),
                    o = t.hasClass("mbsc-selected");
                !ce && t.hasClass("mbsc-cal-day-diff") || !1 === de("onDayChange", ne(w[s], {
                    date: r,
                    target: t[0],
                    selected: o
                })) || le.readonly || t.hasClass("mbsc-disabled") || e._selectDay(t, i, r, o)
            }

            function Ke(e) {
                Ce(r), We(le.getDate(le.getYear(C.first), e.attr("data-val"), 1), !0, !0)
            }

            function Be(e) {
                Ce(d), We(le.getDate(e.attr("data-val"), le.getMonth(C.first), 1), !0, !0)
            }

            function Ue(e) {
                var t = le.getYear(e),
                    a = le.getMonth(e),
                    s = e.getDay(),
                    n = 0;
                return le.firstDay - s > 0 && (n = 7), P ? le.getDate(t, a, 1) : le.getDate(t, a, le.firstDay - n - s + le.getDay(e))
            }

            function Ge(e, t) {
                var a = le.getYear(e),
                    s = le.getMonth(e),
                    n = le.getDay(e);
                return P ? le.getDate(a, s + t, 1) : le.getDate(a, s, n + t * h * 7)
            }

            function Xe(e, t) {
                var a = 12 * Math.floor(le.getYear(e) / 12);
                return le.getDate(a + 12 * t, 0, 1)
            }

            function Ze(t, a, s, n) {
                a && e._isVisible && (t.queue.push(arguments), 1 == t.queue.length && function e(t, a, s, n) {
                    var i, r, o = "",
                        l = t.$scroller,
                        c = t.buffer,
                        d = t.offset,
                        m = t.pages,
                        u = t.total,
                        h = t.first,
                        f = t.genPage,
                        p = t.getFirst,
                        b = a > 0 ? Math.min(a, c) : Math.max(a, -c),
                        v = t.pos * oe + b - a + d,
                        g = Math.abs(a) > c;
                    t.callback && (t.load(), t.callback());
                    t.first = p(h, a);
                    t.pos += b * oe;
                    t.changing = !0;
                    t.load = function() {
                        if (g) {
                            for (i = 0; i < m; i++) o += f(p(h, r = a + i - d), v + r);
                            a > 0 ? (ee(".mbsc-cal-slide", l).slice(-m).remove(), l.append(o)) : a < 0 && (ee(".mbsc-cal-slide", l).slice(0, m).remove(), l.prepend(o))
                        }
                    };
                    t.callback = function() {
                        var s = Math.abs(b),
                            o = "";
                        for (i = 0; i < s; i++) o += f(p(h, r = a + i - d - c + (a > 0 ? u - s : 0)), v + r);
                        if (a > 0 ? (l.append(o), ee(".mbsc-cal-slide", l).slice(0, b).remove()) : a < 0 && (l.prepend(o), ee(".mbsc-cal-slide", l).slice(b).remove()), g) {
                            for (o = "", i = 0; i < s; i++) o += f(p(h, r = a + i - d - c + (a > 0 ? 0 : u - s)), v + r);
                            a > 0 ? (ee(".mbsc-cal-slide", l).slice(0, b).remove(), l.prepend(o)) : a < 0 && (ee(".mbsc-cal-slide", l).slice(b).remove(), l.append(o))
                        }
                        et(t), n && n(), t.callback = null, t.load = null, t.queue.shift(), g = !1, t.queue.length ? e.apply(this, t.queue[0]) : (t.changing = !1, t.onAfterChange(t.first))
                    };
                    t.onBeforeChange(t.first);
                    t.load();
                    t.scroller.scroll(-t.pos * t.size, s ? 200 : 0, !1, t.callback)
                }(t, a, s, n))
            }

            function Qe(t, a, s, n, i, r, o, l, c, d, m, u, h) {
                var f = L ? "Y" : "X",
                    p = {
                        $scroller: ee(".mbsc-cal-scroll", t),
                        queue: [],
                        buffer: n,
                        offset: i,
                        pages: r,
                        first: l,
                        total: o,
                        pos: 0,
                        min: a,
                        max: s,
                        genPage: u,
                        getFirst: h,
                        onBeforeChange: d,
                        onAfterChange: m
                    };
                return p.scroller = new Ve(t, {
                    axis: f,
                    easing: "",
                    contSize: 0,
                    maxSnapScroll: n,
                    mousewheel: le.mousewheel,
                    time: 200,
                    lock: !0,
                    rtl: H,
                    stopProp: !1,
                    minScroll: 0,
                    maxScroll: 0,
                    onBtnTap: function(e) {
                        "touchend" == e.domEvent.type && E(), c(ee(e.target))
                    },
                    onAnimationEnd: function(e) {
                        u && Ze(p, Math.round((-p.pos * p.size - e["pos" + f]) / p.size) * oe)
                    }
                }), e._scrollers.push(p.scroller), p
            }

            function et(e) {
                var t, a = 0,
                    s = 0,
                    n = e.first;
                if (e.getFirst) {
                    for (a = e.buffer, s = e.buffer; s && e.getFirst(n, s + e.pages - e.offset - 1) > e.max;) s--;
                    for (; a && e.getFirst(n, 1 - a - e.offset) <= e.min;) a--
                }
                t = Math.round(f / e.pages), I && e.pages > 1 && e.size != t && e.$scroller.width(t), ne(e.scroller.settings, {
                    snap: t,
                    minScroll: (-e.pos * oe - s) * t,
                    maxScroll: (-e.pos * oe + a) * t
                }), e.size = t, e.scroller.refresh()
            }

            function tt(t) {
                e._isVisible && S && h && (C && C.changing ? te = t : je(_, t, !0)), e._onRefresh(t)
            }
            return v = {}, g = [], de = e.trigger, t = ee(Me), we = ne({}, e.settings), ye = (le = ne(e.settings, Le, we)).controls.join(","), H = le.rtl, ae = le.pageBuffer, he = le.weekCounter, h = le.weeks, P = 6 == h, L = "vertical" == le.calendarScroll, b = "inline" == le.display ? t.is("div") ? t : t.parent() : e._$window, fe = "full" == le.weekDays ? "" : "min" == le.weekDays ? "Min" : "Short", _e = le.layout || (/top|bottom|inline/.test(le.display) ? "liquid" : ""), p = (I = "liquid" == _e) ? null : le.calendarWidth, oe = H && !L ? -1 : 1, x = "mbsc-disabled " + (le.disabledClass || ""), y = "mbsc-selected " + (le.selectedTabClass || ""), T = "mbsc-selected " + (le.selectedClass || ""), ye.match(/calendar/) && (v.calendar = 1, S = !0), ye.match(/date/) && !S && (v.date = 1), ye.match(/time/) && (v.time = 1), le.controls.forEach(function(e) {
                v[e] && g.push(e)
            }), V = le.quickNav && S && P, pe = le.yearChange && P, I && S && "center" == le.display && (e._isFullScreen = !0), le.layout = _e, le.preset = (v.date || S ? "date" : "") + (v.time ? "time" : ""), u = Ee.call(this, e), X = pe ? le.monthNamesShort : le.monthNames, xe = le.yearSuffix || "", G = (le.dateWheels || le.dateFormat).search(/m/i), ve = (le.dateWheels || le.dateFormat).search(/y/i), k = e._format, le.min && (J = R(B(le.min, k, le)), U = le.getYear(J), K = le.getMonth(J), q = le.getDate(12 * Math.floor(U / 12), 0, 1)), le.max && (Y = R(B(le.max, k, le)), W = le.getYear(Y), $ = le.getMonth(Y), j = le.getDate(12 * Math.floor(W / 12), 0, 1)), e.refresh = function() {
                tt(!1)
            }, e.redraw = function() {
                tt(!0)
            }, e.navigate = function(e, t) {
                We(e, !0, t)
            }, e.changeTab = function(t) {
                e._isVisible && v[t] && ue != t && (ue = t, ee(".mbsc-cal-tab", s).removeClass(y).removeAttr("aria-selected"), ee('.mbsc-cal-tab[data-control="' + t + '"]', s).addClass(y).attr("aria-selected", "true"), l.addClass("mbsc-cal-h"), v[ue].removeClass("mbsc-cal-h"), "calendar" == ue && We(e.getDate(!0), !1, !0), e._showDayPicker(), e.trigger("onTabChange", {
                    tab: ue
                }))
            }, e._onGenMonth = M, e._onSelectShow = M, e._onSetDate = M, e._onRefresh = M, e._getDayProps = M, e._prepareObj = De, e._showDayPicker = function() {
                V && (Ce(d), Ce(r))
            }, e._selectDay = e.__selectDay = function(t, a, s) {
                var n = e.live;
                Q = le.outerMonthChange, F = !0, e.setDate(s, n, 1e3, !n, !0), P || Re(a, !0), n && de("onSet", {
                    valueText: e._value
                })
            }, ne(u, {
                labels: null,
                compClass: "mbsc-calendar mbsc-dt",
                onMarkupReady: function(t) {
                    var i, u, x, T = 0;
                    s = ee(t.target), o = ee(".mbsc-fr-c", s), w = {}, m = e.getDate(!0), _ = Ue(m), S && (D = !(!le.marked && !le.data), N = le.showEventCount || !(!le.events && !le.labels), Q = !0, ue = "calendar", se = "auto" == le.months ? Math.max(1, Math.min(3, Math.floor((p || (i = b)[0].innerWidth || i.innerWidth()) / 280))) : +le.months, re = se + 2 * ae, ie = Math.round(se / 2) - 1, L = L && se < 2, ce = void 0 === le.showOuterDays ? se < 2 && !L : le.showOuterDays, f = p || 280 * se, o.append(function() {
                            var e, t, a, s, n = "",
                                i = H ? le.btnCalNextClass : le.btnCalPrevClass,
                                r = H ? le.btnCalPrevClass : le.btnCalNextClass;
                            for (s = '<div class="mbsc-cal-btn-w"><div data-step="-1" role="button" tabindex="0" aria-label="' + le.prevMonthText + '" class="' + i + ' mbsc-cal-prev mbsc-cal-prev-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div>', t = 0; t < (h ? se : 1); t++) s += '<div role="button" class="mbsc-cal-month"></div>';
                            if (s += '<div data-step="1" role="button" tabindex="0" aria-label="' + le.nextMonthText + '" class="' + r + ' mbsc-cal-next mbsc-cal-next-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div></div>', pe && (n = '<div class="mbsc-cal-btn-w"><div data-step="-12" role="button" tabindex="0" aria-label="' + le.prevYearText + '" class="' + i + ' mbsc-cal-prev mbsc-cal-prev-y mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div><div role="button" class="mbsc-cal-year"></div><div data-step="12" role="button" tabindex="0" aria-label="' + le.nextYearText + '" class="' + r + ' mbsc-cal-next mbsc-cal-next-y mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div></div>'), e = '<div class="mbsc-w-p mbsc-cal-c"><div class="mbsc-cal ' + (P ? "" : " mbsc-cal-week-view") + (se > 1 ? " mbsc-cal-multi " : "") + (he ? " mbsc-cal-weeks " : "") + (L ? " mbsc-cal-vertical" : "") + (D ? " mbsc-cal-has-marks" : "") + (N ? " mbsc-cal-has-txt" : "") + (ce ? "" : " mbsc-cal-hide-diff ") + (le.calendarClass || "") + '"' + (I ? "" : ' style="min-width:' + (p || 280 * se) + 'px;"') + '><div class="mbsc-cal-hdr">' + (ve < G || se > 1 ? n + s : s + n) + "</div>", h) {
                                for (e += '<div class="mbsc-cal-body"><div class="mbsc-cal-day-picker"><div class="mbsc-cal-days-c">', a = 0; a < se; a++) {
                                    for (e += '<div class="mbsc-cal-days">', t = 0; t < 7; t++) e += '<div aria-label="' + le.dayNames[(t + le.firstDay) % 7] + '">' + le["dayNames" + fe][(t + le.firstDay) % 7] + "</div>";
                                    e += "</div>"
                                }
                                e += '</div><div class="mbsc-cal-scroll-c mbsc-cal-day-scroll-c ' + (le.calendarClass || "") + '"' + (le.calendarHeight ? ' style="height:' + le.calendarHeight + 'px"' : "") + '><div class="mbsc-cal-scroll" style="width:' + 100 / se + '%">' + je(_) + "</div></div>"
                            }
                            if (e += "</div>", V) {
                                for (e += '<div class="mbsc-cal-month-picker mbsc-cal-picker mbsc-cal-h"><div class="mbsc-cal-scroll-c ' + (le.calendarClass || "") + '"><div class="mbsc-cal-scroll">', t = 0; t < 3; t++) {
                                    for (e += '<div class="mbsc-cal-slide"' + Fe(t - 1) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">', a = 0; a < 12; a++) a && a % 3 == 0 && (e += '</div><div class="mbsc-cal-row">'), e += '<div role="gridcell"' + (1 == t ? ' tabindex="-1" aria-label="' + le.monthNames[a] + '" data-val="' + a + '"' : "") + ' class="mbsc-cal-cell' + (1 == t ? " mbsc-btn-e" : "") + '"><div class="mbsc-cal-cell-i mbsc-cal-cell-txt">' + (1 == t ? le.monthNamesShort[a] : "&nbsp;") + "</div></div>";
                                    e += "</div></div></div>"
                                }
                                for (e += "</div></div></div>", e += '<div class="mbsc-cal-year-picker mbsc-cal-picker mbsc-cal-h"><div class="mbsc-cal-scroll-c ' + (le.calendarClass || "") + '"><div class="mbsc-cal-scroll">', t = -1; t < 2; t++) e += Oe(Xe(_, t), t);
                                e += "</div></div></div>"
                            }
                            return e += "</div></div></div>"
                        }()), n = ee(".mbsc-cal-month", s), c = ee(".mbsc-cal-year", s), a = ee(".mbsc-cal-day-scroll-c", s)), V && (d = ee(".mbsc-cal-year-picker", s), r = ee(".mbsc-cal-month-picker", s)), l = ee(".mbsc-w-p", s), g.length > 1 && o.before((u = '<div class="mbsc-cal-tabs-c"><ul class="mbsc-cal-tabs" role="tablist">', g.forEach(function(e, t) {
                            x = le[("calendar" == e ? "date" : e) + "Text"], u += '<li role="tab" aria-controls="' + Me.id + "-mbsc-pnl-" + t + '" class="mbsc-cal-tab mbsc-fr-btn-e ' + (t ? "" : y) + '" data-control="' + e + '"' + (le.tabLink ? '><a href="#">' + x + "</a>" : ' tabindex="0">' + x) + "</li>"
                        }), u += "</ul></div>")), ["date", "time", "calendar"].forEach(function(e) {
                            v[e] ? (v[e] = l.eq(T).addClass("mbsc-cal-h"), T++) : "date" == e && !v.date && S && (l.eq(T).remove(), T++)
                        }), g.forEach(function(e) {
                            o.append(v[e])
                        }), !S && v.date && v.date.css("position", "relative"), e._scrollers = [],
                        function() {
                            if (S && h) {
                                var t = ee(".mbsc-cal-scroll-c", s);
                                C = Qe(t[0], J, Y, ae, ie, se, re, _, qe, Pe, He, Ye, Ge), V && (Z = Qe(t[1], null, null, 1, 0, 1, 3, _, Ke), ge = Qe(t[2], q, j, 1, 0, 1, 3, _, Be, M, M, Oe, Xe), e.tap(n, function() {
                                    ke(r), Ce(d)
                                }), e.tap(c, function() {
                                    ke(d), Ce(r)
                                })), Te(ee(".mbsc-cal-btn", s), function(e, t, a) {
                                    Ze(C, t, !0, a)
                                }), He(_), null === le.defaultValue && !e._hasValue || e._multiple || (e._activeElm = C.$active[0]), a.on("keydown", function(e) {
                                    var t, a = le.getYear(m),
                                        s = le.getMonth(m),
                                        n = le.getDay(m);
                                    switch (e.keyCode) {
                                        case 32:
                                            qe(C.$active);
                                            break;
                                        case 37:
                                            t = le.getDate(a, s, n - 1);
                                            break;
                                        case 39:
                                            t = le.getDate(a, s, n + 1);
                                            break;
                                        case 38:
                                            t = le.getDate(a, s, n - 7);
                                            break;
                                        case 40:
                                            t = le.getDate(a, s, n + 7);
                                            break;
                                        case 36:
                                            t = le.getDate(a, s, 1);
                                            break;
                                        case 35:
                                            t = le.getDate(a, s + 1, 0);
                                            break;
                                        case 33:
                                            t = e.altKey ? le.getDate(a - 1, s, n) : P ? le.getDate(a, s - 1, n) : le.getDate(a, s, n - 7 * h);
                                            break;
                                        case 34:
                                            t = e.altKey ? le.getDate(a + 1, s, n) : P ? le.getDate(a, s + 1, n) : le.getDate(a, s, n + 7 * h)
                                    }
                                    t && (e.preventDefault(), We(t, !0, !1, !0))
                                })
                            }
                            e.tap(ee(".mbsc-cal-tab", s), function() {
                                e.changeTab(ee(this).attr("data-control"))
                            })
                        }()
                },
                onShow: function() {
                    S && h && Re(_)
                },
                onHide: function() {
                    e._scrollers.forEach(function(e) {
                        e.destroy()
                    }), C = null, Z = null, ge = null, ue = null
                },
                onValidated: function(t) {
                    var a, s, n = t.index,
                        i = e._order;
                    s = e.getDate(!0), F ? a = "calendar" : void 0 !== n && (a = i.dd == n || i.d == n || i.m == n || i.y == n ? "date" : "time"), de("onSetDate", {
                        date: s,
                        control: a
                    }), We(s, !1, !!t.time, F && !e._multiple), F = !1
                },
                onPosition: function(t) {
                    var i, r, o, c, d = t.windowHeight,
                        m = (t.hasTabs || !0 === le.tabs || !1 !== le.tabs && I) && g.length > 1;
                    if (I && (t.windowWidth > le.breakPointMd ? ee(t.target).addClass("mbsc-fr-md") : ee(t.target).removeClass("mbsc-fr-md")), m ? (s.addClass("mbsc-cal-tabbed"), ue = ee(".mbsc-cal-tab.mbsc-selected", s).attr("data-control"), l.addClass("mbsc-cal-h"), v[ue].removeClass("mbsc-cal-h")) : (ue = "calendar", s.removeClass("mbsc-cal-tabbed"), l.removeClass("mbsc-cal-h")), e._isFullScreen && (a.height(""), d >= (c = t.popup.offsetHeight) && a.height(d - c + a[0].offsetHeight)), S && h) {
                        if ((I || L || m) && (f = a[0][L ? "offsetHeight" : "offsetWidth"]), I && pe)
                            for (X = le.maxMonthWidth > (se > 1 ? (f - 80) / se : f / 2 - 80) ? le.monthNamesShort : le.monthNames, r = le.getYear(_), o = le.getMonth(_), i = 0; i < se; i++) n.eq(i).text(X[le.getMonth(le.getDate(r, o - ie + i, 1))]);
                        et(C)
                    }
                    V && (et(Z), et(ge))
                }
            })
        },
        Ye = {};
    Ae.calendar = function(e) {
        function t(e) {
            return z(e.getFullYear(), e.getMonth(), e.getDate())
        }

        function a(e) {
            var a, s, n = null;
            if (p = {}, e && e.length)
                for (s = 0; s < e.length; s++) a = B(e[s], r, d, d.isoParts), n = n || a, p[t(a)] = a;
            return n
        }

        function s() {
            e.redraw()
        }
        var n, i, r, o, l, c = ne({}, e.settings),
            d = ne(e.settings, Ye, c),
            m = "mbsc-selected " + (d.selectedClass || ""),
            u = d.defaultValue,
            h = "multiple" == d.select || d.select > 1 || "week" == d.selectType,
            f = S(d.select) ? d.select : 1 / 0,
            p = {};
        return n = Oe.call(this, e), o = void 0 === d.firstSelectDay ? d.firstDay : d.firstSelectDay, r = e._format, h && a(u), e._multiple = h, e._getDayProps = function(e) {
            return {
                selected: h ? void 0 !== p[e] : void 0
            }
        }, e._selectDay = function(t, a, n, r) {
            if (d.setOnDayTap && "multiple" != d.select && "inline" != d.display) return e.setDate(n), void e.select();
            if (h)
                if ("week" == d.selectType) {
                    var l, c, u = a.getDay() - o;
                    for (u = u < 0 ? 7 + u : u, "multiple" != d.select && (p = {}), l = 0; l < 7; l++) c = z(a.getFullYear(), a.getMonth(), a.getDate() - u + l), r ? delete p[c] : C(p).length / 7 < f && (p[c] = c);
                    s()
                } else {
                    var b = ee('.mbsc-cal-day[data-full="' + t.attr("data-full") + '"]', i);
                    r ? (b.removeClass(m).removeAttr("aria-selected"), delete p[a]) : C(p).length < f && (b.addClass(m).attr("aria-selected", "true"), p[a] = a)
                }
            e.__selectDay(t, a, n)
        }, e.setVal = function(t, n, i, r, o) {
            h && (t = a(t)), e._setVal(t, n, i, r, o), h && s()
        }, e.getVal = function(t) {
            var a, s = [];
            if (h) {
                for (a in p) s.push(K(p[a], d, r));
                return s
            }
            return K(e.getDate(t), d, r)
        }, ne({}, n, {
            highlight: !h,
            outerMonthChange: !h,
            parseValue: function(e) {
                return h && e && "string" == typeof e && (e = a(e.split(","))), h && u && u.length && (d.defaultValue = u[0]), n.parseValue.call(this, e)
            },
            formatValue: function(t) {
                var a, s = [];
                if (h) {
                    for (a in p) s.push($(r, p[a], d));
                    return s.join(", ")
                }
                return n.formatValue.call(this, t, e)
            },
            onClear: function() {
                h && (p = {}, s())
            },
            onBeforeShow: function() {
                void 0 !== d.setOnDayTap || d.buttons && d.buttons.length || (d.setOnDayTap = !0), d.setOnDayTap && "inline" != d.display && (d.outerMonthChange = !1), d.counter && h && (d.headerText = function() {
                    var e = 0,
                        t = "week" == d.selectType ? 7 : 1;
                    return ee.each(p, function() {
                        e++
                    }), ((e = Math.round(e / t)) > 1 && d.selectedPluralText || d.selectedText).replace(/{count}/, e)
                })
            },
            onMarkupReady: function(e) {
                n.onMarkupReady.call(this, e), i = ee(e.target), h && (ee(".mbsc-fr-hdr", i).attr("aria-live", "off"), l = ne({}, p))
            },
            onCancel: function() {
                !e.live && h && (p = ne({}, l))
            }
        })
    }, v("calendar", Pe);
    var je = ["touchstart", "touchmove", "touchend", "touchcancel", "mousedown", "mousemove", "mouseup", "mouseleave"],
        ze = {
            tap: !le
        },
        $e = void 0;

    function We(e) {
        var t = e[0],
            a = e.attr("data-role"),
            s = e.attr("type") || t.nodeName.toLowerCase();
        return /(switch|range|rating|segmented|stepper)/.test(a) && (s = a), s
    }

    function Re(e) {
        var t = i.themes.form[e];
        return t && t.addRipple ? t : null
    }
    var Je = function() {
            function e(t, a) {
                var s = this;
                l(this, e);
                var n = ne({}, ze, i.settings, a),
                    r = ee(t),
                    o = r.parent(),
                    c = o.hasClass("mbsc-input-wrap") ? o.parent() : o,
                    d = r.next().hasClass("mbsc-fr") ? r.next() : null,
                    m = We(r);
                d && d.insertAfter(c), ht(c, m), r.addClass("mbsc-control"), je.forEach(function(e) {
                    t.addEventListener(e, s)
                }), this.settings = n, this._type = m, this._elm = t, this._$elm = r, this._$parent = c, this._$frame = d, this._ripple = Re(n.theme), t.mbscInst = this
            }
            return c(e, [{
                key: "destroy",
                value: function() {
                    var e = this;
                    this._$elm.removeClass("mbsc-control"), je.forEach(function(t) {
                        e._elm.removeEventListener(t, e)
                    }), delete this._elm.mbscInst
                }
            }, {
                key: "option",
                value: function(e) {
                    ne(this.settings, e), this._ripple = Re(this.settings.theme)
                }
            }, {
                key: "handleEvent",
                value: function(e) {
                    switch (e.type) {
                        case "touchstart":
                        case "mousedown":
                            this._onStart(e);
                            break;
                        case "touchmove":
                        case "mousemove":
                            this._onMove(e);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "mouseup":
                        case "mouseleave":
                            this._onEnd(e)
                    }
                }
            }, {
                key: "_addRipple",
                value: function(e) {
                    this._ripple && this._$rippleElm && this._ripple.addRipple(this._$rippleElm, e)
                }
            }, {
                key: "_removeRipple",
                value: function() {
                    this._ripple && this._$rippleElm && this._ripple.removeRipple()
                }
            }, {
                key: "_onStart",
                value: function(e) {
                    var t = this._elm;
                    fe(e, t) && (this._startX = O(e, "X"), this._startY = O(e, "Y"), $e && $e.removeClass("mbsc-active"), t.disabled || (this._isActive = !0, ($e = this._$elm).addClass("mbsc-active"), this._addRipple(e)))
                }
            }, {
                key: "_onMove",
                value: function(e) {
                    (this._isActive && Math.abs(O(e, "X") - this._startX) > 9 || Math.abs(O(e, "Y") - this._startY) > 9) && (this._$elm.removeClass("mbsc-active"), this._removeRipple(), this._isActive = !1)
                }
            }, {
                key: "_onEnd",
                value: function(e) {
                    var t = this,
                        a = this._elm,
                        s = this._type;
                    this._isActive && this.settings.tap && "touchend" == e.type && !a.readOnly && (a.focus(), /(button|submit|checkbox|switch|radio)/.test(s) && e.preventDefault(), /select/.test(s) || L(e, a)), this._isActive && setTimeout(function() {
                        t._$elm.removeClass("mbsc-active"), t._removeRipple()
                    }, 100), this._isActive = !1, $e = null
                }
            }]), e
        }(),
        qe = function(e) {
            function t(e, a) {
                l(this, t);
                var s = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
                return function(e, t, a) {
                    var s = {},
                        n = a[0],
                        i = a.attr("data-password-toggle"),
                        r = a.attr("data-icon-show") || "eye",
                        o = a.attr("data-icon-hide") || "eye-blocked";
                    i && (s.right = "password" == n.type ? r : o);
                    ut(a, s), i && Y(e, t.find(".mbsc-right-ic").addClass("mbsc-input-toggle"), function() {
                        "text" == n.type ? (n.type = "password", ee(this).addClass("mbsc-ic-" + r).removeClass("mbsc-ic-" + o)) : (n.type = "text", ee(this).removeClass("mbsc-ic-" + r).addClass("mbsc-ic-" + o))
                    })
                }(s, s._$parent, s._$elm), s._$parent.addClass("mbsc-input"), s
            }
            return u(t, Je), c(t, [{
                key: "destroy",
                value: function() {
                    m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), this._$parent.removeClass("mbsc-ic-left mbsc-ic-right").find(".mbsc-input-ic").remove()
                }
            }]), t
        }(),
        Ke = function(e) {
            function t(e, a) {
                l(this, t);
                var s = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a)),
                    n = s._$elm,
                    i = n.attr("data-icon");
                return n.addClass("mbsc-btn").find(".mbsc-btn-ic").remove(), i && (n.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + i + '"></span>'), "" === n.text() && n.addClass("mbsc-btn-icon-only")), s._$rippleElm = n, s
            }
            return u(t, Je), t
        }(),
        Be = function(e) {
            function t(e, a) {
                l(this, t);
                var s = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
                return s._$parent.prepend(s._$elm).addClass("mbsc-checkbox mbsc-control-w").find(".mbsc-checkbox-box").remove(), s._$elm.after('<span class="mbsc-checkbox-box"></span>'), s
            }
            return u(t, Je), t
        }(),
        Ue = function(e) {
            function t(e, a) {
                l(this, t);
                var s = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
                return s._$parent.addClass("mbsc-radio mbsc-control-w").find(".mbsc-radio-box").remove(), s._$elm.after('<span class="mbsc-radio-box"><span></span></span>'), s
            }
            return u(t, Je), t
        }(),
        Ge = function(e) {
            function t(e, a) {
                l(this, t);
                var s = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a)),
                    n = s._$elm,
                    i = s._$parent,
                    r = i.find("input.mbsc-control"),
                    o = r.length ? r : ee('<input tabindex="-1" class="mbsc-control" readonly>');
                return s._$input = o, s._setText = s._setText.bind(s), i.addClass("mbsc-select" + (s._$frame ? " mbsc-select-inline" : "")), n.after(o), o.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>'), n.hasClass("mbsc-comp") || (n.on("change", s._setText), s._setText()), s
            }
            return u(t, qe), c(t, [{
                key: "destroy",
                value: function() {
                    m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), this._$parent.find(".mbsc-select-ic").remove(), this._$elm.off("change", this._setText)
                }
            }, {
                key: "_setText",
                value: function() {
                    var e = this._elm;
                    this._$elm.hasClass("mbsc-comp") || this._$input.val(-1 != e.selectedIndex ? e.options[e.selectedIndex].text : "")
                }
            }]), t
        }(),
        Xe = ["keydown", "input", "scroll"],
        Ze = void 0;

    function Qe() {
        clearTimeout(Ze), Ze = setTimeout(function() {
            ee("textarea.mbsc-control").each(function() {
                et(this)
            })
        }, 100)
    }

    function et(e) {
        var t = void 0,
            a = void 0,
            s = void 0,
            n = ee(e).attr("rows") || 6;
        e.offsetHeight && (e.style.height = "", s = e.scrollHeight - e.offsetHeight, t = e.offsetHeight + (s > 0 ? s : 0), (a = Math.round(t / 24)) > n ? (t = 24 * n + (t - 24 * a), ee(e).addClass("mbsc-textarea-scroll")) : ee(e).removeClass("mbsc-textarea-scroll"), t && (e.style.height = t + "px"))
    }
    x && ee(window).on("resize orientationchange", Qe);
    var tt = function(e) {
            function t(e, a) {
                l(this, t);
                var s = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
                return s._$parent.addClass("mbsc-textarea"), Xe.forEach(function(e) {
                    s._elm.addEventListener(e, s)
                }), et(e), s
            }
            return u(t, qe), c(t, [{
                key: "destroy",
                value: function() {
                    var e = this;
                    m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), Xe.forEach(function(t) {
                        e._elm.removeEventListener(t, e)
                    })
                }
            }, {
                key: "handleEvent",
                value: function(e) {
                    switch (m(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "handleEvent", this).call(this, e), e.type) {
                        case "keydown":
                        case "input":
                            this._onInput(e);
                            break;
                        case "scroll":
                            ! function(e) {
                                var t = ee(e);
                                if (!t.hasClass("mbsc-textarea-scroll")) {
                                    var a = e.scrollHeight - e.offsetHeight,
                                        s = e.offsetHeight + a;
                                    Math.round(s / 24) <= (t.attr("rows") || 6) && (e.scrollTop = 0, e.style.height = s + "px")
                                }
                            }(this._elm)
                    }
                }
            }, {
                key: "_onInput",
                value: function() {
                    var e = this;
                    clearTimeout(this._debounce), this._debounce = setTimeout(function() {
                        et(e._elm)
                    }, 100)
                }
            }]), t
        }(),
        at = function(e) {
            function t(e, a) {
                l(this, t);
                var s = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a)),
                    n = void 0,
                    i = void 0,
                    r = s._$elm,
                    o = s._$parent;
                return o.hasClass("mbsc-segmented-item-ready") || (n = ee('<div class="mbsc-segmented"></div>'), o.after(n), o.parent().find('input[name="' + r.attr("name") + '"]').each(function() {
                    var e = ee(this);
                    i = e.parent().addClass("mbsc-segmented-item mbsc-segmented-item-ready"), ee('<span class="mbsc-segmented-content">' + (e.attr("data-icon") ? '<span class="mbsc-ic mbsc-ic-' + e.attr("data-icon") + '"></span>' : "") + "</span>").append(i.contents()).appendTo(i), i.prepend(e), n.append(i)
                })), s._$rippleElm = r.next(), s
            }
            return u(t, Je), t
        }(),
        st = function(e, t) {
            var a, s, n, r, o, l, c, d, m, u, h, f, p, b, v = this,
                g = ee(e),
                x = f;

            function T() {
                var t;
                e.disabled || (t = parseFloat(ee(this).val()), w(isNaN(t) ? f : t))
            }

            function y() {
                return e.disabled
            }

            function _(e, t) {
                w(f + t * d)
            }

            function w(e, t, i) {
                x = f, void 0 === t && (t = !0), void 0 === i && (i = t), f = Math.min(o, Math.max(Math.round(e / d) * d, l)), n.removeClass("mbsc-disabled"), t && g.val(f), f == l ? s.addClass("mbsc-disabled") : f == o && a.addClass("mbsc-disabled"), f !== x && i && g.trigger("change")
            }

            function M(e, t) {
                var a = g.attr(e);
                return void 0 === a || "" === a ? t : +a
            }
            de.call(this, e, t, !0), v.getVal = function() {
                var e = parseFloat(g.val());
                return e = isNaN(e) ? f : e, Math.min(o, Math.max(Math.round(e / d) * d, l))
            }, v.setVal = function(e, t, a) {
                e = parseFloat(e), w(isNaN(e) ? f : e, t, a)
            }, v._init = function(t) {
                p = g.parent().hasClass("mbsc-stepper"), b = p ? g.closest(".mbsc-stepper-cont") : g.parent(), u = v.settings, l = void 0 === t.min ? M("min", u.min) : t.min, o = void 0 === t.max ? M("max", u.max) : t.max, d = void 0 === t.step ? M("step", u.step) : t.step, r = g.attr("data-val") || u.val, f = Math.min(o, Math.max(Math.round(+e.value / d) * d || 0, l)), h = i.themes.form[u.theme], c = h && h.addRipple ? h : null, p || b.addClass("mbsc-stepper-cont mbsc-control-w").append('<span class="mbsc-segmented mbsc-stepper"></span>').find(".mbsc-stepper").append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (f == l ? "mbsc-disabled" : "") + '" data-step="-1" tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' + (f == o ? "mbsc-disabled" : "") + '"  data-step="1" tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span></span></span>').prepend(g), s = ee(".mbsc-stepper-minus", b), a = ee(".mbsc-stepper-plus", b), n = ee(".mbsc-stepper-control", b), p || ("left" == r ? (b.addClass("mbsc-stepper-val-left"), g.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : "right" == r ? (b.addClass("mbsc-stepper-val-right"), a.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : s.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>')), m || (g.on("change", T), m = Te(n, _, 150, y, !1, c)), g.val(f).attr("data-role", "stepper").attr("min", l).attr("max", o).attr("step", d).addClass("mbsc-control"), e.mbscInst = v
            }, v._destroy = function() {
                g.removeClass("mbsc-control").off("change", T), m.destroy(), delete e.mbscInst
            }, v.init(t)
        };
    st.prototype = {
        _class: "stepper",
        _hasDef: !0,
        _hasTheme: !0,
        _defaults: {
            min: 0,
            max: 100,
            step: 1
        }
    }, se.Stepper = st;
    var nt = function(e, t, a) {
            var s, n, i, r, o = this;
            de.call(this, e, t, !0), o.__init = M, o.__destroy = M, o._init = function(t) {
                var a;
                r = o.settings, s = ee(e), a = !!n, n = (n = s.parent()).hasClass("mbsc-input-wrap") ? n.parent() : n, o._$parent = n, i && n.removeClass(i), i = o._css + " mbsc-progress-w mbsc-control-w mbsc-" + r.theme + (r.baseTheme ? " mbsc-" + r.baseTheme : "") + (r.rtl ? " mbsc-rtl" : " mbsc-ltr"), n.addClass(i), s.addClass("mbsc-control"), o.__init(t), a || o._attachChange(), o.refresh(), e.mbscInst = o
            }, o._destroy = function() {
                o.__destroy(), n.removeClass(i), s.removeClass("mbsc-control"), delete e.mbscInst
            }, a || o.init(t)
        },
        it = function(e, t, a) {
            var s, n, i, r, o, l, c, d, m, u, h, f, p, b, v, g, x, T, y, _, w, C, k, S, D, N, V, A, F, P, H, L, Y, j, z = this,
                $ = new Date;

            function W(t) {
                "mousedown" === t.type && t.preventDefault(), !fe(t, this) || d && !x || e.disabled || e.readOnly || (V.stopProp && t.stopPropagation(), d = !0, k = !1, u = !1, F = O(t, "X"), P = O(t, "Y"), b = F, c.removeClass("mbsc-progress-anim"), n = S ? ee(".mbsc-slider-handle", this) : r, i && i.removeClass("mbsc-handle-curr"), i = n.parent().addClass("mbsc-active mbsc-handle-curr"), s.addClass("mbsc-active"), g = +n.attr("data-index"), Y = c[0].offsetWidth, p = c[0].getBoundingClientRect().left, "mousedown" === t.type && (T = !0, ee(document).on("mousemove", R).on("mouseup", J)), "mouseenter" === t.type && (x = !0, ee(document).on("mousemove", R)))
            }

            function R(e) {
                d && (b = O(e, "X"), v = O(e, "Y"), h = b - F, f = v - P, Math.abs(h) > 5 && (k = !0), (k || T || x) && Math.abs($ - new Date) > 50 && ($ = new Date, Q(b, V.round, _ && (!x || T))), k ? e.preventDefault() : Math.abs(f) > 7 && "touchmove" == e.type && Z())
            }

            function J(e) {
                d && (e.preventDefault(), S || c.addClass("mbsc-progress-anim"), x && !T ? te(j[g], g, !1, !1, !0) : Q(b, !0, !0), k || u || ("touchend" == e.type && E(), z._onTap(j[g])), "mouseup" == e.type && (T = !1), "mouseleave" == e.type && (x = !1), x || Z())
            }

            function q() {
                d && Z()
            }

            function K() {
                var e = z._readValue(ee(this)),
                    t = +ee(this).attr("data-index");
                e !== j[t] && (j[t] = e, D[t] = e, te(e, t))
            }

            function B(e) {
                e.stopPropagation()
            }

            function U(e) {
                e.preventDefault()
            }

            function G(t) {
                var a;
                if (!e.disabled) {
                    switch (t.keyCode) {
                        case 38:
                        case 39:
                            a = 1;
                            break;
                        case 40:
                        case 37:
                            a = -1
                    }
                    a && (t.preventDefault(), L || (g = +ee(this).attr("data-index"), te(j[g] + N * a, g, !0), L = setInterval(function() {
                        te(j[g] + N * a, g, !0)
                    }, 200)))
                }
            }

            function X(e) {
                e.preventDefault(), clearInterval(L), L = null
            }

            function Z() {
                d = !1, i.removeClass("mbsc-active"), s.removeClass("mbsc-active"), ee(document).off("mousemove", R).off("mouseup", J)
            }

            function Q(e, t, a) {
                var s = t ? Math.min(Math[z._rounding || "round"](Math.max(100 * (e - p) / Y, 0) / A / N) * N * 100 / (w - C + m), 100) : Math.max(0, Math.min(100 * (e - p) / Y, 100));
                y && (s = 100 - s), te(Math.round((C - m + s / A) * H) / H, g, a, s)
            }

            function te(e, t, a, s, n, i) {
                var o = r.eq(t),
                    l = o.parent();
                e = Math.min(w, Math.max(e, C)), void 0 === i && (i = a), z._update ? e = z._update(e, j, t, s, S, n, l) : l.css({
                    left: y ? "auto" : (s || I(e, C, w)) + "%",
                    right: y ? (s || I(e, C, w)) + "%" : "auto"
                }), e > C ? l.removeClass("mbsc-slider-start") : (j[t] > C || n) && l.addClass("mbsc-slider-start"), a && D[t] != e && (u = !0, D[t] = e, j[t] = e, z._fillValue(e, t, i)), o.attr("aria-valuenow", e)
            }
            nt.call(this, e, t, !0), z._onTap = M, z.___init = M, z.___destroy = M, z._attachChange = function() {
                s.on(V.changeEvent, K)
            }, z.__init = function(e) {
                var t;
                r && (t = !0, r.parent().remove()), z.___init(e), l = z._$parent, c = z._$track, s = l.find("input"), V = z.settings, C = z._min, w = z._max, m = z._base || 0, N = z._step, _ = z._live, H = N % 1 != 0 ? 100 / (100 * +(N % 1).toFixed(2)) : 1, A = 100 / (w - C + m) || 100, S = s.length > 1, y = V.rtl, j = [], D = [], s.each(function(e) {
                    j[e] = z._readValue(ee(this)), ee(this).attr("data-index", e)
                }), r = l.find(".mbsc-slider-handle"), o = l.find(S ? ".mbsc-slider-handle-cont" : ".mbsc-progress-cont"), r.on("keydown", G).on("keyup", X).on("blur", X), o.on("touchstart mousedown" + (V.hover ? " mouseenter" : ""), W).on("touchmove", R).on("touchend touchcancel" + (V.hover ? " mouseleave" : ""), J).on("pointercancel", q), t || (s.on("click", B), l.on("click", U))
            }, z.__destroy = function() {
                l.off("click", U), s.off(V.changeEvent, K).off("click", B), r.off("keydown", G).off("keyup", X).off("blur", X), o.off("touchstart mousedown mouseenter", W).off("touchmove", R).off("touchend touchcancel mouseleave", J).off("pointercancel", q), z.___destroy()
            }, z.refresh = function() {
                s.each(function(e) {
                    te(z._readValue(ee(this)), e, !0, !1, !0, !1)
                })
            }, z.getVal = function() {
                return S ? j.slice(0) : j[0]
            }, z.setVal = z._setVal = function(e, t, a) {
                ee.isArray(e) || (e = [e]), ee.each(e, function(e, t) {
                    j[e] = t
                }), ee.each(e, function(e, t) {
                    te(t, e, !0, !1, !0, a)
                })
            }, a || z.init(t)
        },
        rt = function(e, t) {
            var a, s, n, i, r = this;
            ne(t = t || {}, {
                changeEvent: "click",
                round: !1
            }), it.call(this, e, t, !0), r._readValue = function() {
                return e.checked ? 1 : 0
            }, r._fillValue = function(e, t, s) {
                a.prop("checked", !!e), s && a.trigger("change")
            }, r._onTap = function(e) {
                r._setVal(e ? 0 : 1)
            }, r.___init = function() {
                n = r.settings, a = ee(e), (s = a.parent()).find(".mbsc-switch-track").remove(), s.prepend(a), a.attr("data-role", "switch").after('<span class="mbsc-progress-cont mbsc-switch-track"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-slider-handle-cont"><span class="mbsc-slider-handle mbsc-switch-handle" data-index="0"><span class="mbsc-switch-txt-off">' + n.offText + '</span><span class="mbsc-switch-txt-on">' + n.onText + "</span></span></span></span></span>"), i && i.destroy(), i = new Je(e, n), r._$track = s.find(".mbsc-progress-track"), r._min = 0, r._max = 1, r._step = 1
            }, r.___destroy = function() {
                i.destroy()
            }, r.getVal = function() {
                return e.checked
            }, r.setVal = function(e, t, a) {
                r._setVal(e ? 1 : 0, t, a)
            }, r.init(t)
        };
    rt.prototype = {
        _class: "switch",
        _css: "mbsc-switch",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: {
            stopProp: !0,
            offText: "Off",
            onText: "On"
        }
    }, se.Switch = rt;
    /* eslint-disable no-unused-vars */
    var ot = function(e, t, a) {
        var s, n, i, r, o, l, c, d, m, u, h, f, p = this;

        function b() {
            var e = v("value", c);
            e !== h && g(e)
        }

        function v(e, t) {
            var a = n.attr(e);
            return void 0 === a || "" === a ? t : +a
        }

        function g(e, t, a, s) {
            e = Math.min(d, Math.max(e, c)), r.css("width", 100 * (e - c) / (d - c) + "%"), void 0 === a && (a = !0), void 0 === s && (s = a), (e !== h || t) && p._display(e), e !== h && (h = e, a && n.attr("value", h), s && n.trigger("change"))
        }
        nt.call(this, e, t, !0), p._display = function(e) {
            f = u && m.returnAffix ? u.replace(/\{value\}/, e).replace(/\{max\}/, d) : e, o && o.html(f), s && s.html(f)
        }, p._attachChange = function() {
            n.on("change", b)
        }, p.__init = function(t) {
            var a, f, b, g;
            if (m = p.settings, n = ee(e), g = !!i, i = p._$parent, c = p._min = void 0 === t.min ? v("min", m.min) : t.min, d = p._max = void 0 === t.max ? v("max", m.max) : t.max, h = v("value", c), a = n.attr("data-val") || m.val, b = (b = n.attr("data-step-labels")) ? JSON.parse(b) : m.stepLabels, u = n.attr("data-template") || (100 != d || m.template ? m.template : "{value}%"), g ? (a && (s.remove(), i.removeClass("mbsc-progress-value-" + ("right" == a ? "right" : "left"))), b && ee(".mbsc-progress-step-label", l).remove()) : (ht(i), ut(n), i.find(".mbsc-input-wrap").append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>'), r = p._$progress = i.find(".mbsc-progress-bar"), l = p._$track = i.find(".mbsc-progress-track")), n.attr("min", c).attr("max", d), a && (s = ee('<span class="mbsc-progress-value"></span>'), i.addClass("mbsc-progress-value-" + ("right" == a ? "right" : "left")).find(".mbsc-input-wrap").append(s)), b)
                for (f = 0; f < b.length; ++f) l.append('<span class="mbsc-progress-step-label" style="' + (m.rtl ? "right" : "left") + ": " + 100 * (b[f] - c) / (d - c) + '%" >' + b[f] + "</span>");
            o = ee(n.attr("data-target") || m.target)
        }, p.__destroy = function() {
            i.removeClass("mbsc-ic-left mbsc-ic-right").find(".mbsc-progress-cont").remove(), i.find(".mbsc-input-ic").remove(), n.off("change", b)
        }, p.refresh = function() {
            g(v("value", c), !0, !1)
        }, p.getVal = function() {
            return h
        }, p.setVal = function(e, t, a) {
            g(e, !0, t, a)
        }, a || p.init(t)
    };
    ot.prototype = {
        _class: "progress",
        _css: "mbsc-progress",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: {
            min: 0,
            max: 100,
            returnAffix: !0
        }
    }, se.Progress = ot;
    var lt = function(e, t, a) {
        var s, n, i, r, o, l, c, d, m, u, h, f, p, b = this;
        ot.call(this, e, t, !0);
        var v = b.__init,
            g = b.__destroy;
        it.call(this, e, t, !0);
        var x = b.__init,
            T = b.__destroy;
        b.__init = function(e) {
            v(e), x(e)
        }, b.__destroy = function() {
            g(), T()
        }, b._update = function(e, t, a, s, n, o, f) {
            return d ? 0 === a ? (e = Math.min(e, t[1]), i.css({
                width: I(t[1], h, u) - I(e, h, u) + "%",
                left: m ? "auto" : I(e, h, u) + "%",
                right: m ? I(e, h, u) + "%" : "auto"
            })) : (e = Math.max(e, t[0]), i.css({
                width: I(e, h, u) - I(t[0], h, u) + "%"
            })) : n || !l ? f.css({
                left: m ? "auto" : (s || I(e, h, u)) + "%",
                right: m ? (s || I(e, h, u)) + "%" : "auto"
            }) : i.css("width", (s || I(e, h, u)) + "%"), c && r.eq(a).html(e), n || t[a] == e && !o || b._display(e), e
        }, b._readValue = function(e) {
            return +e.val()
        }, b._fillValue = function(e, t, a) {
            s.eq(t).val(e), a && s.eq(t).trigger("change")
        }, b._markupReady = function() {
            var e, t;
            if (c && n.addClass("mbsc-slider-has-tooltip"), 1 != f)
                for (t = (u - h) / f, e = 0; e <= t; ++e) o.append('<span class="mbsc-slider-step" style="' + (m ? "right" : "left") + ":" + 100 / t * e + '%"></span>');
            s.each(function(e) {
                "range" == this.type && ee(this).attr("min", h).attr("max", u).attr("step", f), (l ? i : o).append('<span class="mbsc-slider-handle-cont' + (d && !e ? " mbsc-slider-handle-left" : "") + '"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + h + '" aria-valuemax="' + u + '" data-index="' + e + '"></span>' + (c ? '<span class="mbsc-slider-tooltip"></span>' : "") + "</span>")
            }), r = n.find(".mbsc-slider-tooltip")
        }, b.___init = function(e) {
            n && (n.removeClass("mbsc-slider-has-tooltip"), 1 != f && ee(".mbsc-slider-step", o).remove()), n = b._$parent, o = b._$track, i = b._$progress, s = n.find("input"), p = b.settings, h = b._min, u = b._max, b._step = f = void 0 === e.step ? +s.attr("step") || p.step : e.step, b._live = P("data-live", p.live, s), c = P("data-tooltip", p.tooltip, s), l = P("data-highlight", p.highlight, s) && s.length < 3, d = l && 2 == s.length, m = p.rtl, b._markupReady()
        }, a || b.init(t)
    };
    lt.prototype = {
        _class: "progress",
        _css: "mbsc-progress mbsc-slider",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: {
            changeEvent: "change",
            stopProp: !0,
            min: 0,
            max: 100,
            step: 1,
            live: !0,
            highlight: !0,
            round: !0,
            returnAffix: !0
        }
    }, se.Slider = lt;
    var ct = function(e, t, a) {
        var s, n, i, r, o, l, c, d = this,
            m = ee(e);
        lt.call(this, e, t, !0), d._update = function(e, t, a, n, r, o) {
            return s.css("width", I(e, 0, i) + "%"), r || t[a] == e && !o || d._display(e), e
        }, d._markupReady = function() {
            var e, t = "",
                a = "";
            for (n = d._$track, s = d._$progress, c = d.settings, r = d._min, i = d._max, d._base = r, d._rounding = c.rtl ? "floor" : "ceil", o = m.attr("data-empty") || c.empty, l = m.attr("data-filled") || c.filled, e = 0; e < i; ++e) t += '<span class="mbsc-ic mbsc-ic-' + o + '"></span>', a += '<span class="mbsc-ic mbsc-ic-' + l + '"></span>';
            n.html(t), n.append(s), s.html(a), n.append('<span class="mbsc-rating-handle-cont"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + r + '" aria-valuemax="' + i + '" data-index="0"></span></span>')
        }, a || d.init(t)
    };
    ct.prototype = {
        _class: "progress",
        _css: "mbsc-progress mbsc-rating",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: {
            changeEvent: "change",
            stopProp: !0,
            min: 1,
            max: 5,
            step: 1,
            live: !0,
            round: !0,
            hover: !0,
            highlight: !0,
            returnAffix: !0,
            empty: "star",
            filled: "star3"
        }
    }, se.Rating = ct;
    var dt = 0,
        mt = "mbsc-input-wrap";

    function ut(e, t) {
        var a = {},
            s = e.parent(),
            n = s.find(".mbsc-err-msg"),
            i = e.attr("data-icon-align") || "left",
            r = e.attr("data-icon");
        s.hasClass(mt) ? s = s.parent() : ee('<span class="' + mt + '"></span>').insertAfter(e).append(e), n && s.find("." + mt).append(n), r && (-1 !== r.indexOf("{") ? a = JSON.parse(r) : a[i] = r), (r || t) && (ne(a, t), s.addClass((a.right ? "mbsc-ic-right " : "") + (a.left ? " mbsc-ic-left" : "")).find("." + mt).append(a.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' + a.left + '"></span>' : "").append(a.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + a.right + '"></span>' : ""))
    }

    function ht(e, t) {
        "button" != t && "submit" != t && "segmented" != t && (e.addClass("mbsc-control-w").find("label").addClass("mbsc-label"), e.contents().filter(function() {
            return 3 == this.nodeType && this.nodeValue && /\S/.test(this.nodeValue)
        }).each(function() {
            ee('<span class="mbsc-label"></span>').insertAfter(this).append(this)
        }))
    }

    function ft(e, t, a, s) {
        ee("input,select,textarea,progress,button", e).each(function() {
            var e = ee(this),
                s = We(e);
            if ("false" != e.attr("data-enhance"))
                if (e.hasClass("mbsc-control")) this.mbscInst && this.mbscInst.option({
                    theme: a.theme,
                    lang: a.lang,
                    rtl: a.rtl,
                    onText: a.onText,
                    offText: a.offText,
                    stopProp: a.stopProp
                });
                else switch (this.id || (this.id = "mbsc-form-control-" + ++dt), s) {
                    case "button":
                    case "submit":
                        t[this.id] = new Ke(this, {
                            theme: a.theme,
                            tap: a.tap
                        });
                        break;
                    case "switch":
                        t[this.id] = new rt(this, {
                            theme: a.theme,
                            lang: a.lang,
                            rtl: a.rtl,
                            tap: a.tap,
                            onText: a.onText,
                            offText: a.offText,
                            stopProp: a.stopProp
                        });
                        break;
                    case "checkbox":
                        t[this.id] = new Be(this, {
                            tap: a.tap
                        });
                        break;
                    case "range":
                        ee(this).parent().hasClass("mbsc-slider") || (t[this.id] = new lt(this, {
                            theme: a.theme,
                            lang: a.lang,
                            rtl: a.rtl,
                            stopProp: a.stopProp
                        }));
                        break;
                    case "rating":
                        t[this.id] = new ct(this, {
                            theme: a.theme,
                            lang: a.lang,
                            rtl: a.rtl,
                            stopProp: a.stopProp
                        });
                        break;
                    case "progress":
                        t[this.id] = new ot(this, {
                            theme: a.theme,
                            lang: a.lang,
                            rtl: a.rtl
                        });
                        break;
                    case "radio":
                        t[this.id] = new Ue(this, {
                            tap: a.tap
                        });
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        t[this.id] = new Ge(this, {
                            tap: a.tap
                        });
                        break;
                    case "textarea":
                        t[this.id] = new tt(this, {
                            tap: a.tap
                        });
                        break;
                    case "segmented":
                        t[this.id] = new at(this, {
                            theme: a.theme,
                            tap: a.tap
                        });
                        break;
                    case "stepper":
                        t[this.id] = new st(this, {
                            theme: a.theme
                        });
                        break;
                    case "hidden":
                        return;
                    default:
                        t[this.id] = new qe(this, {
                            tap: a.tap
                        })
                }
        }), s || Qe()
    }
    /* eslint-disable no-unused-vars */
    var pt = function(e, t) {
        var a, s = "",
            n = ee(e),
            r = {},
            o = this;

        function l() {
            n.removeClass("mbsc-no-touch")
        }
        de.call(this, e, t, !0), o.refresh = function(e) {
            ft(n, r, a, e)
        }, o._init = function() {
            n.hasClass("mbsc-card") || n.on("touchstart", l).show(), s && n.removeClass(s), s = o.remote.cards.cssClass, n.addClass(s).removeClass("mbsc-cloak"), n.append(o._getText(i, .5)), o.refresh()
        }, o._destroy = function() {
            for (var e in n.removeClass(s).off("touchstart", l), r) r[e].destroy()
        }, a = o.settings, o.init(t)
    };

    function bt(e) {
        var t = [Math.round(e.r).toString(16), Math.round(e.g).toString(16), Math.round(e.b).toString(16)];
        return ee.each(t, function(e, a) {
            1 == a.length && (t[e] = "0" + a)
        }), "#" + t.join("")
    }

    function vt(e) {
        return {
            r: (e = parseInt(e.indexOf("#") > -1 ? e.substring(1) : e, 16)) >> 16,
            g: (65280 & e) >> 8,
            b: 255 & e,
            toString: function() {
                return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
            }
        }
    }

    function gt(e) {
        var t, a, s, n = e.h,
            i = 255 * e.s / 100,
            r = 255 * e.v / 100;
        if (0 === i) t = a = s = r;
        else {
            var o = (255 - i) * r / 255,
                l = n % 60 * (r - o) / 60;
            360 == n && (n = 0), n < 60 ? (t = r, s = o, a = o + l) : n < 120 ? (a = r, s = o, t = r - l) : n < 180 ? (a = r, t = o, s = o + l) : n < 240 ? (s = r, t = o, a = r - l) : n < 300 ? (s = r, a = o, t = o + l) : n < 360 ? (t = r, a = o, s = r - l) : t = a = s = 0
        }
        return {
            r: t,
            g: a,
            b: s,
            toString: function() {
                return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
            }
        }
    }

    function xt(e) {
        var t, a, s = 0,
            n = Math.min(e.r, e.g, e.b),
            i = Math.max(e.r, e.g, e.b),
            r = i - n;
        return a = i, s = (t = i ? 255 * r / i : 0) ? e.r == i ? (e.g - e.b) / r : e.g == i ? 2 + (e.b - e.r) / r : 4 + (e.r - e.g) / r : -1, (s *= 60) < 0 && (s += 360), {
            h: s,
            s: t *= 100 / 255,
            v: a *= 100 / 255,
            toString: function() {
                return "hsv(" + Math.round(this.h) + "," + Math.round(this.s) + "%," + Math.round(this.v) + "%)"
            }
        }
    }

    function Tt(e) {
        var t, a, s = e.r / 255,
            n = e.g / 255,
            i = e.b / 255,
            r = Math.max(s, n, i),
            o = Math.min(s, n, i),
            l = (r + o) / 2;
        if (r == o) t = a = 0;
        else {
            var c = r - o;
            switch (a = l > .5 ? c / (2 - r - o) : c / (r + o), r) {
                case s:
                    t = (n - i) / c + (n < i ? 6 : 0);
                    break;
                case n:
                    t = (i - s) / c + 2;
                    break;
                case i:
                    t = (s - n) / c + 4
            }
            t /= 6
        }
        return {
            h: Math.round(360 * t),
            s: Math.round(100 * a),
            l: Math.round(100 * l),
            toString: function() {
                return "hsl(" + this.h + "," + this.s + "%," + this.l + "%)"
            }
        }
    }

    function yt(e) {
        return Tt(vt(e))
    }

    function _t(e) {
        return bt(function(e) {
            var t, a, s, n, i, r, o = e.h,
                l = e.s,
                c = e.l;
            return isFinite(o) || (o = 0), isFinite(l) || (l = 0), isFinite(c) || (c = 0), (o /= 60) < 0 && (o = 6 - -o % 6), o %= 6, l = Math.max(0, Math.min(1, l / 100)), c = Math.max(0, Math.min(1, c / 100)), r = (i = (1 - Math.abs(2 * c - 1)) * l) * (1 - Math.abs(o % 2 - 1)), o < 1 ? (t = i, a = r, s = 0) : o < 2 ? (t = r, a = i, s = 0) : o < 3 ? (t = 0, a = i, s = r) : o < 4 ? (t = 0, a = r, s = i) : o < 5 ? (t = r, a = 0, s = i) : (t = i, a = 0, s = r), n = c - i / 2, {
                r: Math.round(255 * (t + n)),
                g: Math.round(255 * (a + n)),
                b: Math.round(255 * (s + n)),
                toString: function() {
                    return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
                }
            }
        }(e))
    }

    function wt(e) {
        return bt(gt(e))
    }

    function Mt(e) {
        return xt(vt(e))
    }
    pt.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "card",
        _defaults: {
            tap: !0,
            stopProp: !0,
            lang: "en"
        }
    }, se.Card = pt, Q("[mbsc-card]", pt, !0), v("card", pt, !1);
    var Ct = function(e, t, a) {
        var s, n, r, o, l, c, d, m, u, h, f, p, b, v, g, x, T, y, _, w, M, C, k, S, D, N = this,
            V = ee(e),
            F = 0,
            I = {},
            P = {};

        function H(e, t, a) {
            if (!a) {
                N._value = N._hasValue ? N._tempValue.slice(0) : null;
                for (var s = 0; s < r.length; ++s) r[s].tempChangedColor && N._value && -1 != N._value.indexOf(r[s].tempChangedColor) && (r[s].changedColor = r[s].tempChangedColor), delete r[s].tempChangedColor
            }
            e && (N._isInput && V.val(N._hasValue ? N._tempValue : ""), o("onFill", {
                valueText: N._hasValue ? N._tempValue : "",
                change: t
            }), t && (I = ne(!0, {}, P), N._preventChange = !0, V.trigger("change")), z(N._value, !0))
        }

        function E(e, t) {
            return '<div class="mbsc-color-input-item" data-color="' + (void 0 !== (t = void 0 !== t ? t : O(e)) ? t : e) + '" style="background: ' + e + ';">' + (y ? "" : '<div class="mbsc-color-input-item-close mbsc-ic mbsc-ic-material-close"></div>') + "</div>"
        }

        function L(e) {
            p[0].style.background = e ? oe + "linear-gradient(left, " + (s.rtl ? "#000000" : "#FFFFFF") + " 0%, " + e + " 50%, " + (s.rtl ? "#FFFFFF" : "#000000") + " 100%)" : ""
        }

        function O(e) {
            if (Object.keys(P).length && !isNaN(e)) return e;
            for (var t in r)
                if (e == r[t].color || e == r[t].changedColor) return t
        }

        function Y(e, t) {
            var a, n = e.match(/\d+/gim);
            switch (!0) {
                case e.indexOf("rgb") > -1:
                    a = bt({
                        r: n[0],
                        g: n[1],
                        b: n[2]
                    });
                    break;
                case e.indexOf("hsl") > -1:
                    a = _t({
                        h: n[0],
                        s: n[1],
                        l: n[2]
                    });
                    break;
                case e.indexOf("hsv") > -1:
                    a = wt({
                        h: n[0],
                        s: n[1],
                        v: n[2]
                    });
                    break;
                case e.indexOf("#") > -1:
                    a = e
            }
            return function(e, t) {
                switch (t) {
                    case "rgb":
                        return vt(e);
                    case "hsl":
                        return yt(e);
                    case "hsv":
                        return Mt(e);
                    default:
                        return e
                }
            }(a, t || s.format)
        }

        function j(e, t) {
            ee(".mbsc-color-active", t).removeClass("mbsc-color-active"), b && (e.parent().addClass("mbsc-color-active"), f && e && void 0 !== F && k.eq(F).parent().addClass("mbsc-color-active"))
        }

        function z(e, t) {
            var a, n, i = [],
                o = 0,
                d = ee.map(r, function(e) {
                    return e.changedColor || e.color
                });
            if (y) {
                if (e = ee.isArray(e) ? e[0] : e, (n = d.indexOf(e)) > -1 && i.push(n), e && !i.length && b) {
                    var m = +ee(".mbsc-color-input-item", M).attr("data-color");
                    isNaN(m) || i.push(m), x = m
                }
            } else if (e)
                if (f && b)
                    for (var u in I) void 0 !== I[u].colorIndex && i.push(+I[u].colorIndex);
                else
                    for (a = 0; a < e.length; ++a)(n = d.indexOf(e[a])) > -1 && (i.push(n), d[n] = "temp" + a);
            for (a = 0; a < i.length; ++a) r[i[a]] && $(!0, i[a], o++, r[i[a]].changedColor || r[i[a]].color, !0);
            for (a = 0; a < r.length; ++a) - 1 == i.indexOf(a) && $(!1, a, void 0, r[a].changedColor || r[a].color, !1);
            if (f)
                for (a = o; a < s.select; ++a) P[a] = {}, k && k.eq(a).addClass("mbsc-color-preview-item-empty").css({
                    background: "transparent"
                });
            I = ne(!0, {}, P), !1 !== t && function() {
                if (T) {
                    var e, t = "";
                    if (M.empty(), N._hasValue) {
                        if (y) t += E(N._value, x);
                        else
                            for (e = 0; e < N._value.length; ++e) t += E(N._value[e], Object.keys(P).length && P[e].colorIndex ? P[e].colorIndex : O(N._value[e]));
                        M.append(t), N.tap(ee(".mbsc-color-input-item", M), function(e) {
                            if (ee(e.target).hasClass("mbsc-color-input-item-close")) {
                                var t = ee(this).index();
                                e.stopPropagation(), e.preventDefault(), void 0 === x && (x = ee(e.target).parent().attr("data-color")), f && (F = r[x].previewInd, k.eq(F).parent().removeClass("mbsc-color-active"), I[t] = {}, P[t] = {}), N._value.splice(t, 1), N.setVal(N._value, !0, !0)
                            } else b && "inline" !== s.display && (x = ee(e.target).attr("data-color"), isNaN(x) && (x = O(x)), x && r[x] && (r[x].selected = !0, F = r[x].previewInd, setTimeout(function() {
                                l.scroll(C.eq(x), 400), f && c.scroll(k.eq(F), 400)
                            }, 200)))
                        })
                    }
                }
            }()
        }

        function $(e, t, a, s, n, i) {
            if (f && n && (P[a].colorIndex = e ? t : void 0, P[a].color = e ? s : void 0, k)) {
                var o = k.eq(a);
                o.removeClass("mbsc-color-preview-item-empty").css({
                    background: e ? s : "transparent"
                }), e || o.addClass("mbsc-color-preview-item-empty").parent().removeClass("mbsc-color-active")
            }
            i && (e ? N._tempValue.splice(a, 0, s) : N._tempValue.splice(N._tempValue.indexOf(s), 1)), C && (e ? C.eq(t).addClass("mbsc-color-selected") : C.eq(t).removeClass("mbsc-color-selected").parent().removeClass("mbsc-color-active")), r[t].previewInd = e ? a : void 0, r[t].selected = e
        }

        function W(e, t) {
            void 0 !== e && (y || r[e].selected) ? (x = e, r[e] && (m = r[e].changedColor || r[e].color, S = C.eq(e), b && (j(C.eq(e), t || ""), (u = Y(r[e].color, "hsl")).l = Y(m, "hsl").l, L(r[e].color), g.setVal(100 - u.l, !1, !1)))) : b && L()
        }

        function R(e, t) {
            var a = ee(e.target).index();
            x = P[a].colorIndex, S = C.eq(x), F = a, W(x, t), l.scroll(S, 250), o("onPreviewItemTap", {
                target: e.target,
                value: P[a].color,
                index: a
            })
        }

        function J(e, t) {
            var a = !1,
                n = ee(".mbsc-color-selected", t);
            if ((S = ee(e.target)).hasClass("mbsc-color-clear-item")) return m = "", void N.clear();
            (y || _ > +n.length || S.hasClass("mbsc-color-selected")) && i.QkqWj && (x = S.attr("data-index"), f && (F = void 0 !== r[x].previewInd ? r[x].previewInd : function() {
                var e;
                for (e = 0; e < s.select; ++e)
                    if (void 0 === P[e].colorIndex) return e
            }(), a = b && S.hasClass("mbsc-color-selected") && !S.parent().hasClass("mbsc-color-active"), k.length > 6 && c.scroll(k.eq(F))), m = r[x].changedColor || r[x].color, y ? (n.removeClass("mbsc-color-selected"), N._tempValue = m, m && S.toggleClass("mbsc-color-selected"), j(S, t)) : (j(S, t), a || $(!r[x].selected, x, F, m, !0, !0)), W(x, t), N.live && (N._fillValue(), o("onSet", {
                value: N._value
            })), o("onItemTap", {
                target: e.target,
                value: m,
                selected: r[x].selected,
                index: x
            }), N._updateHeader())
        }
        De.call(this, e, t, !0), N.setVal = N._setVal = function(e, t, a, s) {
            N._hasValue = null !== e && void 0 !== e, N._tempValue = y ? ee.isArray(e) ? e[0] : e : ee.isArray(e) ? e : e ? [e] : [], H(t, void 0 === a ? t : a, s)
        }, N.getVal = N._getVal = function(e) {
            return N._hasValue || e ? w ? function() {
                var e, t = [];
                for (e = 0; e < r.length; ++e) r[e].selected && t.push(r[e]);
                return t
            }() : N[e ? "_tempValue" : "_value"] : null
        }, N._readValue = function() {
            var e = V.val() || "";
            N._hasValue = !1, 0 !== e.length && "" !== e && (N._hasValue = !0), N._hasValue ? (N._tempValue = y ? e : "hex" == s.format ? e.split(",") : e.match(/[a-z]{3}\((\d+\.?\d{0,}?),\s*([\d.]+)%{0,},\s*([\d.]+)%{0,}\)/gim), H(!0)) : N._tempValue = [], z(N._tempValue, N._hasValue)
        }, N._fillValue = function() {
            N._hasValue = !0, H(!0, !0)
        }, N._generateContent = function() {
            var e, t, a, n = d ? 1 : 0;
            for (v = h ? Math.ceil((r.length + n) / s.rows) : s.rows, t = '<div class="mbsc-color-scroll-cont mbsc-w-p ' + (h ? "" : "mbsc-color-vertical") + '"><div class="mbsc-color-cont">' + (h ? '<div class="mbsc-color-row">' : ""), e = 0; e < r.length; ++e) a = r[e].changedColor || r[e].color, d && 0 === e && (t += '<div class="mbsc-color-item-c"><div tabindex="0" class="mbsc-color-clear-item mbsc-btn-e mbsc-color-selected"><div class="mbsc-color-clear-cross"></div></div></div>'), 0 !== e && (e + n) % v == 0 && (t += h ? '</div><div class="mbsc-color-row">' : ""), t += '<div class="mbsc-color-item-c"><div tabindex="0" data-index="' + e + '" class="mbsc-color-item mbsc-btn-e mbsc-ic mbsc-ic-material-check mbsc-color-btn-e ' + (r[e].selected ? "mbsc-color-selected" : "") + '"  style="background:' + a + '"></div>' + N._getText(i, .2) + "</div>";
            if (t += "</div></div>" + (h ? "</div>" : ""), b && (t += '<div class="mbsc-color-slider-cont"><input class="mbsc-color-slider" type="range" data-highlight="false" value="50" min="0" max="100"/></div>'), f) {
                for (var o in t += '<div class="mbsc-color-preview-cont"><div class="mbsc-color-refine-preview">', I) t += '<div class="mbsc-color-preview-item-c mbsc-btn-e mbsc-color-btn-e" tabindex="0"><div class="mbsc-color-preview-item ' + (I[o].color ? "" : "mbsc-color-preview-item-empty") + '" style="background: ' + (I[o].color || "initial") + ';"></div></div>';
                t += "</div></div>"
            }
            return t
        }, N._position = function(e) {
            var t, a;
            h || (t = e.find(".mbsc-color-cont"), a = Math.ceil(t.find(".mbsc-color-item-c")[0].offsetWidth), t.width(Math.min(Math.floor(e.find(".mbsc-fr-c").width() / a), Math.round(r.length / s.rows)) * a + 1)), l && l.refresh(), c && c.refresh()
        }, N._markupInserted = function(e) {
            h || e.find(".mbsc-color-scroll-cont").css("max-height", e.find(".mbsc-color-item-c")[0].offsetHeight * s.rows), l = new Ve(e.find(".mbsc-color-scroll-cont")[0], {
                axis: h ? "X" : "Y",
                rtl: s.rtl,
                elastic: 60,
                stopProp: !1,
                mousewheel: s.mousewheel,
                onBtnTap: function(t) {
                    J(t, e)
                }
            })
        }, N._attachEvents = function(e) {
            var t;
            C = ee(".mbsc-color-item", e), e.on("keydown", ".mbsc-color-btn-e", function(t) {
                t.stopPropagation(), 32 == t.keyCode && (t.target.classList.contains("mbsc-color-item") ? J(t, e) : R(t, e))
            }), f && (k = ee(".mbsc-color-preview-item", e)), b && (e.addClass("mbsc-color-refine"), D = ee(".mbsc-color-slider", e), g = new lt(D[0], {
                theme: s.theme,
                rtl: s.rtl
            }), p = e.find(".mbsc-progress-track"), x && N._value && W(x, e), D.on("change", function() {
                void 0 !== x && (y || r[x].selected) && (u.l = 100 - this.value, t = Y(u.toString()).toString(), y ? N._tempValue = t : N._tempValue[void 0 !== F ? F : N._tempValue.length] = t, r[x].tempChangedColor = t, C.eq(x).css("background", t), f && (P[F].color = t, k.eq(F).removeClass("mbsc-color-preview-item-empty").css({
                    background: t
                })), N.live && A(N._fillValue()))
            })), f && (c = new Ve(e.find(".mbsc-color-preview-cont")[0], {
                axis: "X",
                rtl: s.rtl,
                mousewheel: s.mousewheel,
                onBtnTap: function(t) {
                    R(t, e)
                }
            })), N._updateHeader()
        }, N._markupRemove = function() {
            l && l.destroy(), g && g.destroy(), c && c.destroy()
        }, N.__processSettings = function() {
            var t, a;
            if (s = N.settings, o = N.trigger, h = "horizontal" == s.navigation, N._value = [], N._tempValue = [], y = "single" == s.select, d = void 0 !== s.clear ? s.clear : y, !(a = s.data || []).length) switch (s.format) {
                case "rgb":
                    a = ["rgb(255,235,60)", "rgb(255,153,0)", "rgb(244,68,55)", "rgb(234,30,99)", "rgb(156,38,176)", "rgb(104,58,183)", "rgb(63,81,181)", "rgb(33,150,243)", "rgb(0,151,136)", "rgb(75,175,79)", "rgb(126,93,78)", "rgb(158,158,158)"], d && a.splice(10, 0, "rgb(83, 71, 65)");
                    break;
                case "hsl":
                    a = ["hsl(54,100%,62%)", "hsl(36,100%,50%)", "hsl(4,90%,59%)", "hsl(340,83%,52%)", "hsl(291,64%,42%)", "hsl(262,52%,47%)", "hsl(231,48%,48%)", "hsl(207,90%,54%)", "hsl(174,100%,30%)", "hsl(122,40%,49%)", "hsl(19,24%,40%)", "hsl(0,0%,62%)"], d && a.splice(10, 0, "hsl(20, 12%, 29%)");
                    break;
                default:
                    a = ["#ffeb3c", "#ff9900", "#f44437", "#ea1e63", "#9c26b0", "#683ab7", "#3f51b5", "#2196f3", "#009788", "#4baf4f", "#7e5d4e", "#9e9e9e"], d && a.splice(10, 0, "#534741")
            }
            if (b = "refine" == s.mode, f = !isNaN(s.select), _ = isNaN(s.select) ? y ? 2 : a.length : s.select, w = ee.isPlainObject(a[0]), f && !Object.keys(I).length)
                for (t = 0; t < s.select; ++t) I[t] = {}, P[t] = {};
            for (r = a.slice(0), t = 0; t < r.length; ++t) ee.isPlainObject(a[t]) ? r[t].color = a[t].color : (a[t] = a[t].toLowerCase(), r[t] = {
                key: t,
                name: a[t],
                color: a[t]
            });
            n = s.defaultValue || r[0].color, u = Y(m = n, "hsl"), (T = s.enhance && V.is("input")) && (V.hasClass("mbsc-color-input-hdn") ? M = V.prev() : ((M = ee("<div " + (e.placeholder ? 'data-placeholder="' + e.placeholder + '"' : "") + ' class="mbsc-control mbsc-color-input ' + (s.inputClass || "") + '" readonly ></div>')).insertBefore(V), V.addClass("mbsc-color-input-hdn").attr("tabindex", -1)), s.anchor = M, N.attachShow(M))
        }, N.__init = function() {
            s.cssClass = (s.cssClass || "") + " mbsc-color"
        }, N.__destroy = function() {
            T && (V.removeClass("mbsc-color-input-hdn"), M.remove())
        }, a || N.init(t)
    };
    Ct.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "color",
        _defaults: ne({}, De.prototype._defaults, {
            headerText: !1,
            validate: M,
            parseValue: M,
            enhance: !0,
            rows: 2,
            select: "single",
            format: "hex",
            navigation: "horizontal"
        })
    }, se.Color = Ct, i.themes.color = i.themes.frame, r.color = {
        hsv2hex: wt,
        hsv2rgb: gt,
        rgb2hsv: xt,
        rgb2hex: bt,
        rgb2hsl: Tt,
        hex2rgb: vt,
        hex2hsv: Mt,
        hex2hsl: yt
    }, v("color", Ct, !1), Ae.date = Ee, Ae.time = Ee, Ae.datetime = Ee, v("date", Pe), v("time", Pe), v("datetime", Pe);
    /* eslint-disable no-unused-vars */
    var kt = {
            view: {
                calendar: {
                    type: "month",
                    popover: !0
                }
            },
            allDayText: "All-day",
            labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs"],
            eventText: "event",
            eventsText: "events",
            noEventsText: "No events"
        },
        St = {
            yearChange: !1,
            weekDays: "short"
        };
    Ae.eventcalendar = function(e, t) {
        function a(t, a, s) {
            var r, o, l, c, d = 0,
                m = [],
                u = "",
                h = [];
            for (s || (s = e._prepareObj(W, t, a)), r = R(t); r <= a; r.setDate(r.getDate() + 1))(c = s[r]) && c.length && h.push({
                d: new Date(r),
                list: n(c)
            });
            if (h.length > 0)
                for (o = 0; o < h.length; o++)
                    for (u += '<li class="mbsc-lv-gr-title mbsc-event-day">' + $(j.dateFormat, h[o].d, j) + "</li>", l = 0; l < h[o].list.length; l++) {
                        var f = h[o].list[l],
                            p = f.start,
                            b = f.end,
                            v = f.color,
                            x = f.d || p,
                            T = f.allDay || p && b && p.toDateString() !== b.toDateString() || x && !x.getTime;
                        m.push(f), u += '<li class="mbsc-lv-item" data-index="' + d + '"><div class="mbsc-event-time">' + (T ? j.allDayText : x && x.getTime ? $(j.timeFormat, x) : "") + (!T && b && b.getTime ? "<br/>" + $(j.timeFormat, b) : "") + '</div><div class="mbsc-event-color"' + (v ? ' style="background:' + v + ';"' : "") + '></div><div class="mbsc-event-txt">' + f.text + "</div>" + e._getText(i, .3) + "</li>", d++
                    } else u += '<li class="mbsc-lv-gr-title mbsc-event-empty"><div class="mbsc-empty"><h3>' + j.noEventsText + "</h3></div></li>";
            g.html('<ul class="mbsc-lv mbsc-lv-v">' + u + "</ul>"), e.tap(ee(".mbsc-lv-item", g), function(e) {
                J("onEventSelect", {
                    domEvent: e,
                    event: m[ee(this).attr("data-index")],
                    date: r
                })
            })
        }

        function s() {
            if (A) {
                var t = R(A.d);
                ! function(t, a, s) {
                    if (t) {
                        var i, o, l, c, d, m = '<ul class="mbsc-cal-event-list">';
                        _ = s, t = n(t), ee.each(t, function(e, t) {
                            var a, s, n, r, u, h, f;
                            c = t.d || t.start, d = t.start && t.end && t.start.toDateString() !== t.end.toDateString(), l = t.color, i = "", o = "", c.getTime && (i = $((d ? "MM d yy " : "") + j.timeFormat, c)), t.end && (o = $((d ? "MM d yy " : "") + j.timeFormat, t.end)), m += '<li role="button" aria-label="' + t.text + (i ? ", " + j.fromText + " " + i : "") + (o ? ", " + j.toText + " " + o : "") + '" class="mbsc-cal-event"><div class="mbsc-cal-event-color" style="' + (l ? "background:" + l + ";" : "") + '"></div><div class="mbsc-cal-event-text">' + (!c.getTime || d || t.allDay ? "" : '<div class="mbsc-cal-event-time">' + $(j.timeFormat, c) + "</div>") + t.text + "</div>" + (t.start && t.end ? '<div class="mbsc-cal-event-dur">' + (a = t.end - t.start, s = j.labelsShort, n = Math.abs(a) / 1e3, f = (h = (u = (r = n / 60) / 60) / 24) / 365, n < 45 && Math.round(n) + " " + s[5].toLowerCase() || r < 45 && Math.round(r) + " " + s[4].toLowerCase() || u < 24 && Math.round(u) + " " + s[3].toLowerCase() || h < 30 && Math.round(h) + " " + s[2].toLowerCase() || h < 365 && Math.round(h / 30) + " " + s[1].toLowerCase() || Math.round(f) + " " + s[0].toLowerCase()) + "</div>" : "") + "</li>"
                        }), m += "</ul>", v.html(m), J("onEventBubbleShow", {
                            target: _,
                            eventList: p[0]
                        }), r(_), e.tap(ee(".mbsc-cal-event", v), function(e) {
                            M.scrolled || J("onEventSelect", {
                                domEvent: e,
                                event: t[ee(this).index()],
                                date: a
                            })
                        }), C = !0
                    }
                }(A.events || w[t], t, A.cell || ee('.mbsc-cal-slide-a .mbsc-cal-day[data-full="' + t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + '"]', e._markup)[0]), A = null
            }
        }

        function n(e) {
            return e.sort(function(e, t) {
                var a = e.d || e.start,
                    s = t.d || t.start,
                    n = a.getTime ? e.start && e.end && e.start.toDateString() !== e.end.toDateString() ? 1 : e.allDay ? 2 : a.getTime() : 0,
                    i = s.getTime ? t.start && t.end && t.start.toDateString() !== t.end.toDateString() ? 1 : t.allDay ? 2 : s.getTime() : 0;
                return n == i ? e.text > t.text ? 1 : -1 : n - i
            })
        }

        function r(e) {
            var t = h[0].offsetHeight,
                a = h[0].offsetWidth,
                s = h.offset(),
                n = s.left,
                i = ee(e),
                r = e.offsetHeight,
                o = e.offsetWidth,
                l = i.offset(),
                c = l.left,
                m = l.top - s.top,
                u = i.closest(".mbsc-cal-row").index() < 2,
                f = getComputedStyle(p.addClass("mbsc-cal-events-t").css({
                    left: 0,
                    top: u ? m + r : 0,
                    bottom: u ? 0 : t - m
                }).addClass("mbsc-cal-events-v")[0]).height,
                v = p[0].offsetWidth,
                g = N(c - n - (v - o) / 2, 0, a - v);
            p.css(d({
                left: g
            }, u ? "bottom" : "top", "auto")).removeClass("mbsc-cal-events-t"), b.css("max-height", f), M.refresh(), M.scroll(0), u ? p.addClass("mbsc-cal-events-b") : p.removeClass("mbsc-cal-events-b"), ee(".mbsc-cal-events-arr", p).css("left", c - n + o / 2 - g)
        }

        function o() {
            p && p.removeClass("mbsc-cal-events-v"), _ = null, C = !1
        }

        function l() {
            o(), e.redraw()
        }

        function c(e) {
            var t = j.getYear(e),
                a = j.getMonth(e),
                s = j.getDay(e);
            if (T = e, "day" == D) y = j.getDate(t, a, s + V - 1);
            else if ("week" == D) {
                var n, i = T.getDay();
                n = s + j.firstDay - (j.firstDay - i > 0 ? 7 : 0) - i, T = j.getDate(t, a, n), y = j.getDate(t, a, n + 7 * V - 1)
            } else "month" == D ? (T = j.getDate(t, a, 1), y = j.getDate(t, a + V, 0)) : "year" == D && (T = j.getDate(t, 0, 1), y = j.getDate(t + V, 0, 0))
        }

        function m(e, t) {
            e && J("onPageChange", {
                firstDay: T,
                lastDay: y
            }), t || J("onPageLoading", {
                firstDay: T,
                lastDay: y
            }), J("onPageLoaded", {
                firstDay: T,
                lastDay: y
            })
        }
        var u, h, f, p, b, v, g, x, T, y, _, w, M, C, k, S, D, V, A, F, I, P, H, E, L, O, Y = ne({}, e.settings),
            j = ne(e.settings, kt, Y, St, t),
            z = 0,
            W = ne(!0, [], j.data),
            J = e.trigger;
        return j.data = W, ee.each(W, function(e, t) {
            void 0 === t._id && (t._id = z++)
        }), P = j.view, H = P.calendar, E = P.eventList, L = j.months, O = j.weeks, H ? ("week" == H.type ? O = H.size || 1 : H.size && (L = H.size), S = !1) : (O = 0, S = !0), E && (D = E.type, V = E.size || 1), F = P.eventList, I = H && H.popover || j.eventBubble, j.weeks = O, j.months = L, u = Oe.call(this, e), e._onSelectShow = function() {
            o()
        }, e._onGenMonth = function(t, a) {
            w = e._prepareObj(W, t, a)
        }, e._onRefresh = function(e) {
            S && m(!1, e)
        }, e._onSetDate = function(e, t) {
            S ? (c(e), m(!0)) : t || k || (F && "day" == D ? a(e, e, w) : I && s())
        }, e._getDayProps = function(e) {
            var t = w[e],
                a = {
                    events: t
                };
            return j.marked || j.labels || (t ? (a.background = t[0] && t[0].background, a.marked = t, a.markup = j.showEventCount ? '<div class="mbsc-cal-txt">' + t.length + " " + (t.length > 1 ? j.eventsText : j.eventText) + "</div>" : '<div class="mbsc-cal-marks"><div class="mbsc-cal-mark"></div></div>') : a.markup = ""), a
        }, e.addEvent = function(e) {
            var t = [];
            return e = ne(!0, [], ee.isArray(e) ? e : [e]), ee.each(e, function(e, a) {
                void 0 === a._id && (a._id = z++), W.push(a), t.push(a._id)
            }), l(), t
        }, e.removeEvent = function(e) {
            e = ee.isArray(e) ? e : [e], ee.each(e, function(e, t) {
                ee.each(W, function(e, a) {
                    if (a._id === t) return W.splice(e, 1), !1
                })
            }), l()
        }, e.getEvents = function(t) {
            var a;
            return t ? (t.setHours(0, 0, 0, 0), (a = e._prepareObj(W, t, t))[t] ? n(a[t]) : []) : ne(!0, [], W)
        }, e.setEvents = function(e) {
            var t = [];
            return j.data = W = ne(!0, [], e), ee.each(W, function(e, a) {
                void 0 === a._id && (a._id = z++), t.push(a._id)
            }), l(), t
        }, e.navigate = function(t, a, s) {
            s && (A = {
                d: t
            }), e.setVal(t, !0, !0, !1, a ? 200 : 0)
        }, ne({}, u, {
            outerMonthChange: !1,
            headerText: !1,
            buttons: "inline" !== j.display ? ["close"] : j.buttons,
            compClass: "mbsc-ev-cal mbsc-calendar mbsc-dt",
            onMarkupReady: function(e, t) {
                f = ee(e.target), g = ee('<div class="mbsc-lv-cont mbsc-lv-' + j.theme + (j.baseTheme ? " mbsc-lv-" + j.baseTheme : "") + ' mbsc-event-list"></div>').appendTo(ee(".mbsc-fr-w", f)), u.onMarkupReady.call(this, e), h = ee(".mbsc-cal-c", f), p = ee('<div class="mbsc-cal-events ' + (j.eventBubbleClass || "") + '"><div class="mbsc-cal-events-arr"></div><div class="mbsc-cal-events-i"><div class="mbsc-cal-events-sc"></div></div></div>').appendTo(h), b = ee(".mbsc-cal-events-i", p), v = ee(".mbsc-cal-events-sc", p), x = ee(".mbsc-cal-month", f), M = new Ve(b[0]), C = !1, c(t.getDate(!0)), t.tap(b, function() {
                    M.scrolled || o()
                }), F && S && (m(), Te(ee(".mbsc-cal-btn", f), function(e, t) {
                    var a = j.getYear(T),
                        s = j.getMonth(T),
                        n = j.getDay(T);
                    "day" == D ? (T = j.getDate(a, s, n + t * V), y = j.getDate(a, s, n + (t + 1) * V - 1)) : "week" == D ? (T = j.getDate(a, s, n + t * V * 7), y = j.getDate(a, s, n + (t + 1) * V * 7 - 1)) : "month" == D ? (T = j.getDate(a, s + t * V, 1), y = j.getDate(a, s + (t + 1) * V, 0)) : "year" == D && (T = j.getDate(a + t * V, 0, 1), y = j.getDate(a + (t + 1) * V, 0, 0)), m(!0)
                }, 200))
            },
            onDayChange: function(e) {
                var t = e.target !== _;
                o(), t && (A = {
                    d: e.date,
                    cell: e.target,
                    events: e.events
                })
            },
            onPageChange: function(t) {
                o(), k = !0, S || e._isSetDate || e.setVal(t.firstDay)
            },
            onPageLoaded: function(t) {
                var n = t.firstDay,
                    i = t.lastDay;
                F ? S ? (a(n, i), function(e, t) {
                    var a, s = (j.dateWheels || j.dateFormat).search(/m/i),
                        n = (j.dateWheels || j.dateFormat).search(/y/i),
                        i = j.getYear(e),
                        r = j.getMonth(e),
                        o = j.getYear(t),
                        l = j.getMonth(t);
                    "day" == D ? a = $(j.dateFormat, e, j) + (V > 1 ? " - " + $(j.dateFormat, t, j) : "") : "week" == D ? a = $(j.dateFormat, e, j) + " - " + $(j.dateFormat, t, j) : "month" == D ? a = 1 == V ? n < s ? i + " " + j.monthNames[r] : j.monthNames[r] + " " + i : n < s ? i + " " + j.monthNamesShort[r] + " - " + o + " " + j.monthNamesShort[l] : j.monthNamesShort[r] + " " + i + " - " + j.monthNamesShort[l] + " " + o : "year" == D && (a = i + (V > 1 ? " - " + o : "")), x.html(a)
                }(n, i)) : (i = "month" == D ? j.getDate(j.getYear(n), j.getMonth(n) + V, 0) : "week" == D ? j.getDate(j.getYear(n), j.getMonth(n), j.getDay(n) + 7 * V - 1) : n = e.getVal(!0), a(n, i, w)) : I && s(), k = !1
            },
            onPosition: function(e) {
                u.onPosition.call(this, e), C && r(_)
            },
            onHide: function() {
                u.onHide.call(this), M && M.destroy()
            }
        })
    }, v("eventcalendar", Pe);
    var Dt = function(e, t, a) {
        function s(e) {
            ee(".mbsc-fr-c", e).append(c._getText(i, .7)), !ee(".mbsc-fr-c", e).hasClass("mbsc-wdg-c") && i.QkqWj && (ee(".mbsc-fr-c", e).addClass("mbsc-wdg-c").append(l.show()), ee(".mbsc-w-p", e).length || ee(".mbsc-fr-c", e).addClass("mbsc-w-p"))
        }
        var n, r, o, l = ee(e),
            c = this;
        De.call(this, e, t, !0), c._generateContent = function() {
            return ""
        }, c._markupReady = function(e) {
            "inline" != n.display && s(e)
        }, c._markupInserted = function(e) {
            "inline" == n.display && s(e), e.trigger("mbsc-enhance", [{
                theme: n.theme,
                lang: n.lang
            }])
        }, c._markupRemove = function() {
            l.hide(), r ? r.prepend(l) : o.after(l)
        }, c.__processSettings = function() {
            n = c.settings, c.buttons.ok = {
                text: n.okText,
                icon: n.okIcon,
                handler: "set"
            }, n.buttons = n.buttons || ("inline" == n.display ? [] : ["ok"]), r || o || (o = l.prev()).length || (r = l.parent()), l.hide()
        }, c.__init = function() {
            n.cssClass = (n.cssClass || "") + " mbsc-wdg"
        }, a || c.init(t)
    };
    Dt.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasContent: !0,
        _hasLang: !0,
        _class: "widget",
        _defaults: ne({}, De.prototype._defaults, {
            okText: "OK",
            headerText: !1
        })
    }, se.Widget = Dt, i.themes.widget = i.themes.frame;
    var Nt = x && !!window.Promise,
        Vt = [],
        At = [];

    function Ft(e) {
        Vt.length || e.show(), Vt.push(e)
    }

    function It(e, t, a, s) {
        return ne({
            display: t.display || "center",
            cssClass: "mbsc-alert",
            okText: t.okText,
            cancelText: t.cancelText,
            context: t.context,
            theme: t.theme,
            closeOnOverlayTap: !1,
            onBeforeClose: function() {
                e.shift()
            },
            onBeforeShow: function() {
                i.activeInstance = null
            },
            onHide: function(e, s) {
                a && a(s._resolve), t.callback && t.callback(s._resolve), s && s.destroy(), Vt.length ? Vt[0].show() : At.length && At[0].show(!1, !0)
            }
        }, s)
    }

    function Pt(e) {
        return (e.title ? "<h2>" + e.title + "</h2>" : "") + "<p>" + (e.message || "") + "</p>"
    }

    function Ht(e, t, a) {
        Ft(new Dt(e, It(Vt, t, a)))
    }

    function Et(e, t, a) {
        var s = new Dt(e, It(Vt, t, a, {
            buttons: ["cancel", "ok"],
            onSet: function() {
                s._resolve = !0
            }
        }));
        s._resolve = !1, Ft(s)
    }

    function Lt(e, t, a) {
        var s = void 0,
            n = new Dt(e, It(Vt, t, a, {
                buttons: ["cancel", "ok"],
                onMarkupReady: function(e, t) {
                    s = t._markup.find("input")[0], setTimeout(function() {
                        s.focus(), s.setSelectionRange(0, s.value.length)
                    }, 300)
                },
                onSet: function() {
                    n._resolve = s.value
                }
            }));
        n._resolve = null, Ft(n)
    }

    function Ot(e, t, a, s, n) {
        var i, r, o = void 0,
            l = new Dt(e, It(At, t, a, {
                display: t.display || "bottom",
                animate: n,
                cssClass: (s || "mbsc-snackbar") + (t.color ? " mbsc-" + t.color : ""),
                scrollLock: !1,
                focusTrap: !1,
                buttons: [],
                onShow: function(e, a) {
                    !1 !== t.duration && (o = setTimeout(function() {
                        a && a.hide()
                    }, t.duration || 3e3)), t.button && a.tap(ee(".mbsc-snackbar-btn", e.target), function() {
                        a.hide(), t.button.action && t.button.action.call(this)
                    })
                },
                onClose: function() {
                    clearTimeout(o)
                }
            }));
        i = l, r = At.length, At.push(i), Vt.length || (r ? At[0].hide() : i.show(!1, !0))
    }

    function Yt(e, t, a) {
        Ot(e, t, a, "mbsc-toast", "fade")
    }

    function jt(e, t, a) {
        var s = void 0;
        return Nt ? s = new Promise(function(s) {
            e(t, a, s)
        }) : e(t, a), s
    }
    i.alert = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = Pt(e), jt(Ht, t, e)
    }, i.confirm = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = Pt(e), jt(Et, t, e)
    }, i.prompt = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = Pt(e) + '<label class="mbsc-input">' + (e.label ? '<span class="mbsc-label">' + e.label + "</span>" : "") + '<input tabindex="0" type="' + (e.inputType || "text") + '" placeholder="' + (e.placeholder || "") + '" value="' + (e.value || "") + '"></label>', jt(Lt, t, e)
    }, i.snackbar = function(e) {
        var t = document.createElement("div"),
            a = e.button;
        return t.innerHTML = '<div class="mbsc-snackbar-cont"><div class="mbsc-snackbar-msg">' + (e.message || "") + "</div>" + (a ? '<button class="mbsc-snackbar-btn mbsc-btn mbsc-btn-flat">' + (a.icon ? '<span class="mbsc-ic ' + (a.text ? "mbsc-btn-ic " : "") + "mbsc-ic-" + a.icon + '"></span>' : "") + (a.text || "") + "</button>" : "") + "</div>", jt(Ot, t, e)
    }, i.toast = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = '<div class="mbsc-toast-msg">' + (e.message || "") + "</div>", jt(Yt, t, e)
    };
    var zt = "ios" == t && s > 7,
        $t = function(e, t) {
            var a, s = "",
                n = ee(e),
                r = {},
                o = this;

            function l() {
                n.removeClass("mbsc-no-touch")
            }
            de.call(this, e, t, !0), o.refresh = function(e) {
                ft(n, r, a, e)
            }, o._init = function() {
                i.themes.form[a.theme] || (a.theme = "mobiscroll"), n.hasClass("mbsc-form") || n.on("touchstart", l).show(), s && n.removeClass(s), s = "mbsc-form mbsc-no-touch mbsc-" + a.theme + (zt ? " mbsc-form-hb" : "") + (a.baseTheme ? " mbsc-" + a.baseTheme : "") + (a.rtl ? " mbsc-rtl" : " mbsc-ltr"), n.addClass(s).removeClass("mbsc-cloak"), o.refresh()
            }, o._destroy = function() {
                for (var e in n.removeClass(s).off("touchstart", l), r) r[e].destroy()
            }, a = o.settings, o.init(t)
        };
    $t.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "form",
        _defaults: {
            tap: !le,
            stopProp: !0,
            lang: "en"
        }
    }, i.themes.form.mobiscroll = {}, se.Form = $t, Q("[mbsc-enhance],[mbsc-form]", $t, !0);
    var Wt = function(e, t) {
        var a = "",
            s = ee(e),
            n = this.settings;
        de.call(this, e, t, !0), this._init = function() {
            var e = n.context,
                t = ee(e),
                i = t.find(".mbsc-ms-top .mbsc-ms"),
                r = t.find(".mbsc-ms-bottom .mbsc-ms"),
                o = {};
            "body" == e ? ee("body,html").addClass("mbsc-page-ctx") : t.addClass("mbsc-page-ctx"), a && s.removeClass(a), i.length && (o.paddingTop = i[0].offsetHeight), r.length && (o.paddingBottom = r[0].offsetHeight), a = "mbsc-page mbsc-" + n.theme + (n.baseTheme ? " mbsc-" + n.baseTheme : "") + (n.rtl ? " mbsc-rtl" : " mbsc-ltr"), s.addClass(a).removeClass("mbsc-cloak").css(o)
        }, this._destroy = function() {
            s.removeClass(a)
        }, n = this.settings, this.init(t)
    };
    Wt.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "page",
        _defaults: {
            context: "body"
        }
    }, se.Page = Wt, i.themes.page.mobiscroll = {}, Q("[mbsc-page]", Wt), v("page", Wt, !1), v("form", $t, !1), v("progress", ot, !1), v("slider", lt, !1), v("stepper", st, !1), v("switch", rt, !1), v("rating", ct, !1);
    var Rt, Jt = {
            invalid: [],
            showInput: !0,
            inputClass: "",
            itemSelector: "li"
        },
        qt = function(e) {
            var t, a, s, n = ne({}, e.settings),
                i = ne(e.settings, Jt, n),
                r = i.layout || (/top|bottom/.test(i.display) ? "liquid" : ""),
                o = "liquid" == r,
                l = i.readonly,
                c = ee(this),
                d = this.id + "_dummy",
                m = 0,
                u = 0,
                h = [],
                f = i.wheelArray || function t(a) {
                    var s = [];
                    m = m > u++ ? m : u;
                    var n = a.length > 1 ? a : a.children(i.itemSelector);
                    n.each(function(a) {
                        var n = ee(this),
                            r = n.clone();
                        r.children("ul,ol").remove(), r.children(i.itemSelector).remove();
                        var o = e._processMarkup ? e._processMarkup(r) : r.html().replace(/^\s\s*/, "").replace(/\s\s*$/, ""),
                            l = !!n.attr("data-invalid"),
                            c = {
                                key: void 0 === n.attr("data-val") || null === n.attr("data-val") ? a : n.attr("data-val"),
                                value: o,
                                invalid: l,
                                children: null
                            },
                            d = "li" === i.itemSelector ? n.children("ul,ol") : n.children(i.itemSelector);
                        d.length && (c.children = t(d)), s.push(c)
                    });
                    u--;
                    return s
                }(c),
                p = function(e) {
                    var t, a = [];
                    for (t = 0; t < e; t++) a[t] = i.labels && i.labels[t] ? i.labels[t] : t;
                    return a
                }(m),
                b = function(e) {
                    var t, a = [],
                        s = e,
                        n = !0,
                        i = 0;
                    for (; n;) t = T(s), a[i++] = t.key, (n = t.children) && (s = n);
                    return a
                }(f),
                v = x(b, m);

            function g(e, t, a) {
                for (var s, n = 0, i = a, r = []; n < t;) {
                    var o = e[n];
                    for (s in i)
                        if (i[s].key == o) {
                            i = i[s].children;
                            break
                        }
                    n++
                }
                for (n = 0; n < i.length;) i[n].invalid && r.push(i[n].key), n++;
                return r
            }

            function x(e, t, a) {
                var s, n, i, r = 0,
                    l = [
                        []
                    ],
                    c = f;
                if (t)
                    for (s = 0; s < t; s++) o ? l[0][s] = {} : l[s] = [{}];
                for (; r < e.length;) {
                    for (o ? l[0][r] = y(c, p[r]) : l[r] = [y(c, p[r])], s = 0, i = void 0; s < c.length && void 0 === i;) c[s].key == e[r] && (void 0 !== a && r <= a || void 0 === a) && (i = s), s++;
                    if (void 0 !== i && c[i].children) r++, c = c[i].children;
                    else {
                        if (!(n = T(c)) || !n.children) return l;
                        r++, c = n.children
                    }
                }
                return l
            }

            function T(e, t) {
                if (!e) return !1;
                for (var a, s = 0; s < e.length;)
                    if (!(a = e[s++]).invalid) return t ? s - 1 : a;
                return !1
            }

            function y(e, t) {
                for (var a = {
                        data: [],
                        label: t
                    }, s = 0; s < e.length;) a.data.push({
                    value: e[s].key,
                    display: e[s].value
                }), s++;
                return a
            }

            function _(t) {
                e._isVisible && ee(".mbsc-sc-whl-w", e._markup).css("display", "").slice(t).hide()
            }

            function w(e, t) {
                var a, s, n, i = [],
                    r = f,
                    o = 0,
                    l = !1;
                if (void 0 !== e[o] && o <= t)
                    for (a = 0, s = e[o], n = void 0; a < r.length && void 0 === n;) r[a].key != e[o] || r[a].invalid || (n = a), a++;
                else s = r[n = T(r, !0)] && r[n].key;
                for (l = !!r[n] && r[n].children, i[o] = s; l;) {
                    if (r = r[n].children, l = !1, n = void 0, void 0 !== e[++o] && o <= t)
                        for (a = 0, s = e[o], n = void 0; a < r.length && void 0 === n;) r[a].key != e[o] || r[a].invalid || (n = a), a++;
                    else s = r[n = !1 === (n = T(r, !0)) ? void 0 : n].key;
                    l = !(void 0 === n || !T(r[n].children)) && r[n].children, i[o] = s
                }
                return {
                    lvl: o + 1,
                    nVector: i
                }
            }

            function M(t, s, n) {
                var i, r, l = (s || 0) + 1,
                    c = [],
                    d = {};
                for (r = x(t, null, s), i = 0; i < t.length; i++) e._tempWheelArray[i] = t[i] = n.nVector[i] || 0;
                for (; l < n.lvl;) d[l] = o ? r[0][l] : r[l][0], c.push(l++);
                _(n.lvl), h = t.slice(0), c.length && (a = !0, e.changeWheel(d))
            }
            return ee("#" + d).remove(), i.input ? t = ee(i.input) : i.showInput && (t = ee('<input type="text" id="' + d + '" value="" class="' + i.inputClass + '" placeholder="' + (i.placeholder || "") + '" readonly />').insertBefore(c)), t && e.attachShow(t), i.wheelArray || c.hide(), {
                wheels: v,
                anchor: t,
                layout: r,
                headerText: !1,
                setOnTap: 1 == m,
                formatValue: function(e) {
                    return void 0 === s && (s = w(e, e.length).lvl), e.slice(0, s).join(" ")
                },
                parseValue: function(e) {
                    return e ? (e + "").split(" ") : (i.defaultValue || b).slice(0)
                },
                onBeforeShow: function() {
                    var t = e.getArrayVal(!0);
                    h = t.slice(0), i.wheels = x(t, m, m), a = !0
                },
                onWheelGestureStart: function(e) {
                    i.readonly = function(e, t) {
                        for (var a = []; e;) a[--e] = !0;
                        return a[t] = !1, a
                    }(m, e.index)
                },
                onWheelAnimationEnd: function(t) {
                    var a = t.index,
                        n = e.getArrayVal(!0),
                        r = w(n, a);
                    s = r.lvl, i.readonly = l, n[a] != h[a] && M(n, a, r)
                },
                onFill: function(e) {
                    s = void 0, t && t.val(e.valueText)
                },
                validate: function(e) {
                    var t = e.values,
                        n = e.index,
                        i = w(t, t.length);
                    return s = i.lvl, void 0 === n && (_(i.lvl), a || M(t, n, i)), a = !1, {
                        disabled: function(e, t, a) {
                            for (var s = 0, n = []; s < e;) n[s] = g(a, s, t), s++;
                            return n
                        }(s, f, t)
                    }
                },
                onDestroy: function() {
                    t && ee("#" + d).remove(), c.show()
                }
            }
        };
    Ae.image = function(e) {
        return e.settings.enhance && (e._processMarkup = function(e) {
            var t = e.attr("data-icon");
            return e.children().each(function(e, t) {
                (t = ee(t)).is("img") ? ee('<div class="mbsc-img-c"></div>').insertAfter(t).append(t.addClass("mbsc-img")) : t.is("p") && t.addClass("mbsc-img-txt")
            }), t && e.prepend('<div class="mbsc-ic mbsc-ic-' + t + '"></div'), e.html('<div class="mbsc-img-w">' + e.html() + "</div>"), e.html()
        }), qt.call(this, e)
    }, v("image", Pe);
    var Kt = 1,
        Bt = "transparent",
        Ut = function(e, t) {
            var a, s, n, r, l, c, d, m, u, h, f, p, b, v, g, x, T, y, C, k, D, N, V, I, P, H, L, Y, j, z, $, W, R, J, q, K, B, U, G, X, Z, Q, te, se, re, le, me, ue, he, be, ve, ge, xe, Te, ye, _e, we, Me, Ce, ke, Se, De, Ne, Ve, Ae, Fe, Ie, Pe, He, Ee, Le, Oe, Ye, je, ze, $e, We, Re, Je, qe, Ke, Be, Ue, Ge, Xe, Ze, Qe, et, tt, at, st, nt, it, rt, ot, lt, ct, dt = this,
                mt = e,
                ut = ee(mt),
                ht = 0,
                ft = 0,
                pt = 0,
                bt = {},
                vt = {},
                gt = {};

            function xt() {
                Ee = !1, De = !1, r = 0, Je = 0, qe = new Date, re = h.width(), b = Gt(h), ue = b.index(le), me = le[0].offsetHeight, pt = le[0].offsetTop, at = st[le.attr("data-type") || "defaults"], Re = at.stages
            }

            function Tt(e) {
                var t;
                "touchstart" === e.type && (Ne = !0, clearTimeout(Ve)), !fe(e, this) || a || ht || Rt || la || !i.QkqWj || (a = !0, l = !0, Ke = O(e, "X"), Be = O(e, "Y"), y = 0, C = 0, le = ee(this), t = le, xt(), Qe = Ye.onItemTap || at.tap || le.hasClass("mbsc-lv-parent") || le.hasClass("mbsc-lv-back"), ve = le.offset().top, Qe && (n = setTimeout(function() {
                    t.addClass("mbsc-lv-item-active"), L("onItemActivate", {
                        target: t[0],
                        domEvent: e
                    })
                }, 120)), dt.sortable && !le.hasClass("mbsc-lv-back") && (dt.sortable.group || (ke = le.nextUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item"), Ae = le.prevUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item")), ye = (dt.sortable.group ? h.children(be).eq(0) : Ae.length ? Ae.eq(-1) : le)[0].offsetTop - pt, Te = (dt.sortable.group ? h.children(be).eq(-1) : ke.length ? ke.eq(-1) : le)[0].offsetTop - pt, dt.sortable.handle ? ee(e.target).hasClass("mbsc-lv-handle") && (clearTimeout(n), "Moz" === ce ? (e.preventDefault(), kt()) : tt = setTimeout(function() {
                    kt()
                }, 100)) : tt = setTimeout(function() {
                    Y.appendTo(le), Y[0].style[ce + "Animation"] = "mbsc-lv-fill " + (Ye.sortDelay - 100) + "ms linear", clearTimeout(I), clearTimeout(n), l = !1, tt = setTimeout(function() {
                        Y[0].style[ce + "Animation"] = "", kt()
                    }, Ye.sortDelay - 80)
                }, 80)), "mousedown" == e.type && ee(document).on("mousemove", yt).on("mouseup", _t))
            }

            function yt(e) {
                var t = !1,
                    s = !0;
                if (a)
                    if (P = O(e, "X"), H = O(e, "Y"), y = P - Ke, C = H - Be, clearTimeout(I), N || Ge || je || le.hasClass("mbsc-lv-back") || (Math.abs(C) > 10 ? (je = !0, _t(ne({}, e, {
                            type: "mousemove" == e.type ? "mouseup" : "touchend"
                        })), clearTimeout(n)) : Math.abs(y) > 7 && wt()), Ge) e.preventDefault(), r = y / re * 100, Mt();
                    else if (N) {
                    e.preventDefault();
                    var i, o = rt.scrollTop(),
                        l = Math.max(ye, Math.min(C + lt, Te)),
                        c = W ? ve - ct + o - lt : ve;
                    ot + o < c + l + me ? (rt.scrollTop(c + l - ot + me), i = !0) : c + l < o && (rt.scrollTop(c + l), i = !0), i && (lt += rt.scrollTop() - o), Me && (dt.sortable.multiLevel && we.hasClass("mbsc-lv-parent") ? pt + me / 4 + l > Me ? t = !0 : pt + me - me / 4 + l > Me && (k = we.addClass("mbsc-lv-item-hl"), s = !1) : pt + me / 2 + l > Me && (we.hasClass("mbsc-lv-back") ? dt.sortable.multiLevel && (D = we.addClass("mbsc-lv-item-hl"), s = !1) : t = !0), t && (Fe.insertAfter(we), Ie = we, we = Zt(we, "next"), Pe = Me, Me = we.length && we[0].offsetTop, u++)), !t && Pe && (dt.sortable.multiLevel && Ie.hasClass("mbsc-lv-parent") ? pt + me - me / 4 + l < Pe ? t = !0 : pt + me / 4 + l < Pe && (k = Ie.addClass("mbsc-lv-item-hl"), s = !1) : pt + me / 2 + l < Pe && (Ie.hasClass("mbsc-lv-back") ? dt.sortable.multiLevel && (D = Ie.addClass("mbsc-lv-item-hl"), s = !1) : t = !0), t && (Fe.insertBefore(Ie), we = Ie, Ie = Zt(Ie, "prev"), Me = Pe, Pe = Ie.length && Ie[0].offsetTop + Ie[0].offsetHeight, u--)), s && (k && (k.removeClass("mbsc-lv-item-hl"), k = !1), D && (D.removeClass("mbsc-lv-item-hl"), D = !1)), t && L("onSortChange", [le, u]), Ot(le, l), L("onSort", [le, u])
                } else(Math.abs(y) > 5 || Math.abs(C) > 5) && Yt()
            }

            function _t(e) {
                var t, s, i, r = le;
                a && (a = !1, Yt(), "mouseup" == e.type && ee(document).off("mousemove", yt).off("mouseup", _t), je || (Ve = setTimeout(function() {
                    Ne = !1
                }, 300)), (Ge || je || N) && (De = !0), Ge ? Ct() : N ? (i = h, k ? (Wt(le.detach()), s = gt[k.attr("data-ref")], u = Gt(s.child).length, k.removeClass("mbsc-lv-item-hl"), Ye.navigateOnDrop ? na(k, function() {
                    dt.add(null, le, null, null, k, !0), aa(le), St(le, ue, i, !0)
                }) : (dt.add(null, le, null, null, k, !0), St(le, ue, i, !0))) : D ? (Wt(le.detach()), s = gt[D.attr("data-back")], u = Gt(s.parent).index(s.item) + 1, D.removeClass("mbsc-lv-item-hl"), Ye.navigateOnDrop ? na(D, function() {
                    dt.add(null, le, u, null, h, !0), aa(le), St(le, ue, i, !0)
                }) : (dt.add(null, le, u, null, s.parent, !0), St(le, ue, i, !0))) : (t = Fe[0].offsetTop - pt, Ot(le, t, 6 * Math.abs(t - Math.max(ye, Math.min(C + lt, Te))), function() {
                    Wt(le), le.insertBefore(Fe), St(le, ue, i, u !== ue)
                })), N = !1) : !je && Math.abs(y) < 5 && Math.abs(C) < 5 && (at.tap && at.tap.call(mt, {
                    target: le,
                    index: ue,
                    domEvent: e
                }, dt), Qe && ("touchend" === e.type && E(), le.addClass("mbsc-lv-item-active"), L("onItemActivate", {
                    target: le[0],
                    domEvent: e
                })), !1 !== L("onItemTap", {
                    target: le[0],
                    index: ue,
                    domEvent: e
                }) && na(le)), clearTimeout(n), setTimeout(function() {
                    r.removeClass("mbsc-lv-item-active"), L("onItemDeactivate", {
                        target: r[0]
                    })
                }, 100), je = !1, v = null)
            }

            function wt() {
                (Ge = Jt(at.swipe, {
                    target: le[0],
                    index: ue,
                    direction: y > 0 ? "right" : "left"
                })) && (Yt(), clearTimeout(n), at.actions ? (s = ta(at, y), _e.html(at.icons).show().children().css("width", s + "%"), te.hide(), ee(".mbsc-lv-ic-m", se).removeClass("mbsc-lv-ic-disabled"), ee(at.leftMenu).each(Ft), ee(at.rightMenu).each(Ft)) : (te.show(), _e.hide(), g = at.start + (y > 0 ? 0 : 1), He = Re[g - 1], Ce = Re[g]), le.addClass("mbsc-lv-item-swiping").removeClass("mbsc-lv-item-active"), et.css("line-height", me + "px"), se.css({
                    top: pt,
                    height: me,
                    backgroundColor: Qt(y)
                }).addClass("mbsc-lv-stage-c-v").appendTo(h.parent()), Ye.iconSlide && le.append(te), L("onSlideStart", {
                    target: le[0],
                    index: ue
                }))
            }

            function Mt() {
                var e = !1;
                Oe || (at.actions ? se.attr("class", "mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-" + (r < 0 ? "right" : "left")) : (He && r <= He.percent ? (Ce = He, He = Re[--g], e = !0) : Ce && r >= Ce.percent && (He = Ce, Ce = Re[++g], e = !0), e && (v = r > 0 ? He : Ce) && (jt(v, Ye.iconSlide), L("onStageChange", {
                    target: le[0],
                    index: ue,
                    stage: v
                }))), ze || (Oe = !0, Le = _(Ht)))
            }

            function Ct(e) {
                var t, a, n = !1;
                w(Le), Oe = !1, ze || Ht(), at.actions ? Math.abs(r) > 10 && s && (Lt(le, r < 0 ? -s : s, 200), n = !0, Rt = !0, c = le, d = ue, ee(document).on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(t) {
                    t.preventDefault(), Et(le, !0, e)
                })) : r && (Ye.quickSwipe && !ze && (t = (a = new Date - qe) < 300 && y > 50, a < 300 && y < -50 ? (Ee = !0, jt(v = at.left, Ye.iconSlide)) : t && (Ee = !0, jt(v = at.right, Ye.iconSlide))), v && v.action && (Jt(v.disabled, {
                    target: le[0],
                    index: ue
                }) || (n = !0, (Rt = ze || Jt(v.confirm, {
                    target: le[0],
                    index: ue
                })) ? (Lt(le, (r < 0 ? -1 : 1) * te[0].offsetWidth * 100 / re, 200, !0), Pt(v, le, ue, !1, e)) : It(v, le, ue, e)))), n || Et(le, !0, e), Ge = !1
            }

            function kt() {
                N = !0, k = !1, D = !1, lt = 0, u = ue, Ye.vibrate && F(), we = Zt(le, "next"), Me = we.length && we[0].offsetTop, Ie = Zt(le, "prev"), Pe = Ie.length && Ie[0].offsetTop + Ie[0].offsetHeight, Fe.height(me).insertAfter(le), le.css({
                    top: pt
                }).addClass("mbsc-lv-item-dragging").removeClass("mbsc-lv-item-active").appendTo(V), L("onSortStart", {
                    target: le[0],
                    index: u
                })
            }

            function St(e, t, a, s) {
                e.removeClass("mbsc-lv-item-dragging"), Fe.remove(), L("onSortEnd", {
                    target: e[0],
                    index: u
                }), Ye.vibrate && F(), s && (dt.addUndoAction(function(s) {
                    dt.move(e, t, null, s, a, !0)
                }, !0), L("onSortUpdate", {
                    target: e[0],
                    index: u
                }))
            }

            function Dt() {
                Ne || (clearTimeout(G), Rt && ee(document).trigger("touchstart"), K && (dt.close(q, B), K = !1, q = null))
            }

            function Nt() {
                clearTimeout(x), x = setTimeout(function() {
                    ot = rt[0].innerHeight || rt.innerHeight(), ct = W ? rt.offset().top : 0, a && (pt = le[0].offsetTop, me = le[0].offsetHeight, se.css({
                        top: pt,
                        height: me
                    }))
                }, 200)
            }

            function Vt(e) {
                De && (e.stopPropagation(), e.preventDefault(), De = !1)
            }

            function At() {
                if (N || !a) {
                    var e, t = rt.scrollTop(),
                        s = ut.offset().top,
                        n = ut[0].offsetHeight,
                        i = W ? rt.offset().top : t;
                    ee(".mbsc-lv-gr-title", ut).each(function(t, a) {
                        ee(a).offset().top < i && (e = a)
                    }), s < i && s + n > i ? z.show().empty().append(ee(e).clone()) : z.hide()
                }
            }

            function Ft(e, t) {
                Jt(t.disabled, {
                    target: le[0],
                    index: ue
                }) && ee(".mbsc-ic-" + t.icon, se).addClass("mbsc-lv-ic-disabled")
            }

            function It(e, t, a, s) {
                var n, i = {
                    icon: "undo2",
                    text: Ye.undoText,
                    action: function() {
                        dt.undo()
                    }
                };
                e.undo && (dt.startActionTrack(), ee.isFunction(e.undo) && dt.addUndoAction(function() {
                    e.undo.call(mt, {
                        target: t[0],
                        index: a
                    }, dt)
                }), nt = t.attr("data-ref")), n = e.action.call(mt, {
                    target: t[0],
                    index: a
                }, dt), e.undo ? (dt.endActionTrack(), !1 !== n && Lt(t, +t.attr("data-pos") < 0 ? -100 : 100, 200), Fe.height(me).insertAfter(t), t.css("top", pt).addClass("mbsc-lv-item-undo"), _e.hide(), te.show(), se.append(te), jt(i), Pt(i, t, a, !0, s)) : Et(t, n, s)
            }

            function Pt(e, t, a, s, n) {
                var i, r;
                Rt = !0, ee(document).off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(e) {
                    e.preventDefault(), s && $t(t), Et(t, !0, n)
                }), T || te.off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(e) {
                    e.stopPropagation(), i = O(e, "X"), r = O(e, "Y")
                }).on("touchend.mbsc-lv-conf mouseup.mbsc-lv-conf", function(o) {
                    o.preventDefault(), "touchend" === o.type && E(), Math.abs(O(o, "X") - i) < 10 && Math.abs(O(o, "Y") - r) < 10 && (It(e, t, a, n), s && (it = null, $t(t)))
                })
            }

            function Ht() {
                Lt(le, Je + 100 * y / re), Oe = !1
            }

            function Et(e, t, a) {
                ee(document).off(".mbsc-lv-conf"), te.off(".mbsc-lv-conf"), !1 !== t ? Lt(e, 0, "0" !== e.attr("data-pos") ? 200 : 0, !1, function() {
                    zt(e, a), Wt(e)
                }) : zt(e, a), Rt = !1
            }

            function Lt(e, t, a, s, n) {
                t = Math.max("right" == Ge ? 0 : -100, Math.min(t, "left" == Ge ? 0 : 100)), Ue = e[0].style, e.attr("data-pos", t), Ue[ce + "Transform"] = "translate3d(" + (s ? re * t / 100 + "px" : t + "%") + ",0,0)", Ue[ce + "Transition"] = oe + "transform " + (a || 0) + "ms", n && (ht++, setTimeout(function() {
                    n(), ht--
                }, a)), r = t
            }

            function Ot(e, t, a, s) {
                t = Math.max(ye, Math.min(t, Te)), (Ue = e[0].style)[ce + "Transform"] = "translate3d(0," + t + "px,0)", Ue[ce + "Transition"] = oe + "transform " + (a || 0) + "ms ease-out", s && (ht++, setTimeout(function() {
                    s(), ht--
                }, a))
            }

            function Yt() {
                clearTimeout(tt), !l && dt.sortable && (l = !0, Y.remove())
            }

            function jt(e, t) {
                var a = Jt(e.text, {
                    target: le[0],
                    index: ue
                }) || "";
                Jt(e.disabled, {
                    target: le[0],
                    index: ue
                }) ? se.addClass("mbsc-lv-ic-disabled") : se.removeClass("mbsc-lv-ic-disabled"), se.css("background-color", e.color || (0 === e.percent ? Qt(r) : Bt)), te.attr("class", "mbsc-lv-ic-c mbsc-lv-ic-" + (t ? "move-" : "") + (r < 0 ? "right" : "left")), Q.attr("class", " mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-" + (e.icon || "none")), et.attr("class", "mbsc-lv-ic-text" + (e.icon ? "" : " mbsc-lv-ic-text-only") + (a ? "" : " mbsc-lv-ic-only")).html(a || "&nbsp;"), Ye.animateIcons && (Ee ? Q.addClass("mbsc-lv-ic-v") : setTimeout(function() {
                    Q.addClass("mbsc-lv-ic-a")
                }, 10))
            }

            function zt(e, t) {
                a || (Q.attr("class", "mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"), se.attr("style", "").removeClass("mbsc-lv-stage-c-v"), et.html("")), se.removeClass("mbsc-lv-left mbsc-lv-right"), e && (L("onSlideEnd", {
                    target: e[0],
                    index: ue
                }), t && t())
            }

            function $t(e) {
                e.css("top", "").removeClass("mbsc-lv-item-undo"), it ? dt.animate(Fe, "collapse", function() {
                    Fe.remove()
                }) : Fe.remove(), zt(), nt = null, it = null
            }

            function Wt(e) {
                (Ue = e[0].style)[ce + "Transform"] = "", Ue[ce + "Transition"] = "", Ue.top = "", e.removeClass("mbsc-lv-item-swiping")
            }

            function Jt(e, t) {
                return ee.isFunction(e) ? e.call(this, t, dt) : e
            }

            function qt(e) {
                var t, a = e.attr("data-role");
                if (e.attr("data-ref") || (t = Kt++, e.attr("data-ref", t), gt[t] = {
                        item: e,
                        child: e.children(xe),
                        parent: e.parent(),
                        ref: e.parent()[0] === mt ? null : e.parent().parent().attr("data-ref")
                    }), e.addClass("list-divider" == a ? "mbsc-lv-gr-title" : "mbsc-lv-item"), dt.sortable.handle && "list-divider" != a && !e.children(".mbsc-lv-handle-c").length && e.append(R), Ye.enhance && !e.hasClass("mbsc-lv-item-enhanced")) {
                    var s = e.attr("data-icon"),
                        n = e.find("img").eq(0).addClass("mbsc-lv-img");
                    n.is(":first-child") ? e.addClass("mbsc-lv-img-" + (Ye.rtl ? "right" : "left")) : n.length && e.addClass("mbsc-lv-img-" + (Ye.rtl ? "left" : "right")), e.addClass("mbsc-lv-item-enhanced").children().each(function(e, t) {
                        (t = ee(t)).is("p, h1, h2, h3, h4, h5, h6") && t.addClass("mbsc-lv-txt")
                    }), s && e.addClass("mbsc-lv-item-ic-" + (e.attr("data-icon-align") || (Ye.rtl ? "right" : "left"))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + s + '"></div>')
                }
                e.append(dt._getText(i, .2))
            }

            function Ut(e) {
                ee(be, e).not(".mbsc-lv-item").each(function() {
                    qt(ee(this))
                }), ee(xe, e).not(".mbsc-lv").addClass("mbsc-lv").prepend(X).parent().addClass("mbsc-lv-parent").prepend(Z), ee(".mbsc-lv-back", e).each(function() {
                    ee(this).attr("data-back", ee(this).parent().parent().attr("data-ref"))
                })
            }

            function Gt(e) {
                return e.children(be).not(".mbsc-lv-back").not(".mbsc-lv-removed").not(".mbsc-lv-ph")
            }

            function Xt(e) {
                return "object" !== (void 0 === e ? "undefined" : o(e)) && (e = ee(be, m).filter('[data-id="' + e + '"]')), ee(e)
            }

            function Zt(e, t) {
                for (e = e[t](); e.length && (!e.hasClass("mbsc-lv-item") || e.hasClass("mbsc-lv-ph") || e.hasClass("mbsc-lv-item-dragging"));) {
                    if (!dt.sortable.group && e.hasClass("mbsc-lv-gr-title")) return !1;
                    e = e[t]()
                }
                return e
            }

            function Qt(e) {
                return (e > 0 ? at.right : at.left).color || Bt
            }

            function ea(e) {
                return S(e) ? e + "" : 0
            }

            function ta(e, t) {
                return +(t < 0 ? ea((e.actionsWidth || 0).right) || ea(e.actionsWidth) || ea(Ye.actionsWidth.right) || ea(Ye.actionsWidth) : ea((e.actionsWidth || 0).left) || ea(e.actionsWidth) || ea(Ye.actionsWidth.left) || ea(Ye.actionsWidth))
            }

            function aa(e, t) {
                if (e) {
                    var a = rt.scrollTop(),
                        s = e.is(".mbsc-lv-item") ? e[0].offsetHeight : 0,
                        n = e.offset().top + (W ? a - ct : 0);
                    t ? (n < a || n + s > a + ot) && rt.scrollTop(n) : n < a ? rt.scrollTop(n) : n + s > a + ot && rt.scrollTop(Math.min(n, n + s - ot / 2))
                }
            }

            function sa(e, t, a, s, n) {
                var i = t.parent(),
                    r = t.prev();
                s = s || M, r[0] === te[0] && (r = te.prev()), h[0] !== t[0] ? (L("onNavStart", {
                    level: ft,
                    direction: e,
                    list: t[0]
                }), $e.prepend(t.addClass("mbsc-lv-v mbsc-lv-sl-new")), aa(m), ia($e, "mbsc-lv-sl-" + e, function() {
                    h.removeClass("mbsc-lv-sl-curr"), t.removeClass("mbsc-lv-sl-new").addClass("mbsc-lv-sl-curr"), f && f.length ? h.removeClass("mbsc-lv-v").insertAfter(f) : p.append(h.removeClass("mbsc-lv-v")), f = r, p = i, h = t, aa(a, n), s.call(mt, a), L("onNavEnd", {
                        level: ft,
                        direction: e,
                        list: t[0]
                    })
                })) : (aa(a, n), s.call(mt, a))
            }

            function na(e, t) {
                ht || (e.hasClass("mbsc-lv-parent") ? (ft++, sa("r", gt[e.attr("data-ref")].child, null, t)) : e.hasClass("mbsc-lv-back") && (ft--, sa("l", gt[e.attr("data-back")].parent, gt[e.attr("data-back")].item, t)))
            }

            function ia(e, t, a) {
                var s;

                function n() {
                    clearTimeout(s), ht--, e.off(ie, n).removeClass(t), a.call(mt, e)
                }
                a = a || M, Ye.animation && "mbsc-lv-item-none" !== t ? (ht++, e.on(ie, n).addClass(t), s = setTimeout(n, 500)) : a.call(mt, e)
            }

            function ra(e, t) {
                var a, s = e.attr("data-ref");
                a = vt[s] = vt[s] || [], t && a.push(t), e.attr("data-action") || (t = a.shift(), e.attr("data-action", 1), t(function() {
                    e.removeAttr("data-action"), a.length ? ra(e) : delete vt[s]
                }))
            }

            function oa(e, t, a) {
                var s, n;
                e && e.length && (s = 100 / (e.length + 2), ee.each(e, function(i, r) {
                    void 0 === r.key && (r.key = We++), void 0 === r.percent && (r.percent = t * s * (i + 1), a && ((n = ne({}, r)).key = We++, n.percent = -s * (i + 1), e.push(n), bt[n.key] = n)), bt[r.key] = r
                }))
            }
            de.call(this, e, t, !0), dt.animate = function(e, t, a) {
                ia(e, "mbsc-lv-item-" + t, a)
            }, dt.add = function(e, t, a, s, n, i) {
                var r, l, c, d, u, h, f = "",
                    p = void 0 === n ? ut : Xt(n),
                    b = p,
                    v = "object" !== (void 0 === t ? "undefined" : o(t)) ? ee("<" + he + ' data-ref="' + Kt++ + '" data-id="' + e + '">' + t + "</" + he + ">") : ee(t),
                    g = v.attr("data-pos") < 0 ? "left" : "right",
                    x = v.attr("data-ref");
                s = s || M, x || (x = Kt++, v.attr("data-ref", x)), qt(v), i || dt.addUndoAction(function(e) {
                    d ? dt.navigate(p, function() {
                        b.remove(), p.removeClass("mbsc-lv-parent").children(".mbsc-lv-arr").remove(), u.child = p.children(xe), dt.remove(v, null, e, !0)
                    }) : dt.remove(v, null, e, !0)
                }, !0), ra(v, function(e) {
                    Wt(v.css("top", "").removeClass("mbsc-lv-item-undo")), p.is(be) ? (h = p.attr("data-ref"), p.children(xe).length || (d = !0, p.append("<" + ge + "></" + ge + ">"))) : h = p.children(".mbsc-lv-back").attr("data-back"), (u = gt[h]) && (u.child.length ? b = u.child : (p.addClass("mbsc-lv-parent").prepend(Z), b = p.children(xe).prepend(X).addClass("mbsc-lv"), u.child = b, ee(".mbsc-lv-back", p).attr("data-back", h))), gt[x] = {
                        item: v,
                        child: v.children(xe),
                        parent: b,
                        ref: h
                    }, c = Gt(b), l = c.length, void 0 !== a && null !== a || (a = l), i && (f = "mbsc-lv-item-new-" + (i ? g : "")), Ut(v.addClass(f)), !1 !== a && (l ? a < l ? v.insertBefore(c.eq(a)) : v.insertAfter(c.eq(l - 1)) : (r = ee(".mbsc-lv-back", b)).length ? v.insertAfter(r) : b.append(v)), b.hasClass("mbsc-lv-v") ? dt.animate(v.height(v[0].offsetHeight), i && nt === x ? "none" : "expand", function(t) {
                        dt.animate(t.height(""), i ? "add-" + g : "pop-in", function(t) {
                            s.call(mt, t.removeClass(f)), e()
                        })
                    }) : (s.call(mt, v.removeClass(f)), e()), m.trigger("mbsc-refresh"), L("onItemAdd", {
                        target: v[0]
                    })
                })
            }, dt.swipe = function(e, t, s, n, i) {
                e = Xt(e), le = e, T = n, ze = !0, a = !0, s = void 0 === s ? 300 : s, y = t > 0 ? 1 : -1, xt(), wt(), Lt(e, t, s), clearTimeout(Ze), clearInterval(Xe), Xe = setInterval(function() {
                    r = pe(e) / re * 100, Mt()
                }, 10), Ze = setTimeout(function() {
                    clearInterval(Xe), r = t, Mt(), Ct(i), T = !1, ze = !1, a = !1
                }, s)
            }, dt.openStage = function(e, t, a, s) {
                bt[t] && dt.swipe(e, bt[t].percent, a, s)
            }, dt.openActions = function(e, t, a, s) {
                e = Xt(e);
                var n = ta(st[e.attr("data-type") || "defaults"], "left" == t ? -1 : 1);
                dt.swipe(e, "left" == t ? -n : n, a, s)
            }, dt.close = function(e, t) {
                dt.swipe(e, 0, t)
            }, dt.remove = function(e, t, a, s) {
                var n, i, r;
                a = a || M, (e = Xt(e)).length && (i = e.parent(), n = Gt(i).index(e), r = e[0].style, s || (e.attr("data-ref") === nt && (it = !0), dt.addUndoAction(function(t) {
                    dt.add(null, e, n, t, i, !0)
                }, !0)), ra(e, function(n) {
                    t = t || (e.attr("data-pos") < 0 ? "left" : "right"), i.hasClass("mbsc-lv-v") ? dt.animate(e.addClass("mbsc-lv-removed"), s ? "pop-out" : "remove-" + t, function(e) {
                        r.height = e[0].offsetHeight + "px", dt.animate(e, "collapse", function(e) {
                            r.height = "", Wt(e.removeClass("mbsc-lv-removed")), !1 !== a.call(mt, e) && e.remove(), n()
                        })
                    }) : (!1 !== a.call(mt, e) && e.remove(), n()), L("onItemRemove", {
                        target: e[0]
                    })
                }))
            }, dt.move = function(e, t, a, s, n, i) {
                e = Xt(e), i || dt.startActionTrack(), se.append(te), dt.remove(e, a, null, i), dt.add(null, e, t, s, n, i), i || dt.endActionTrack()
            }, dt.navigate = function(e, t) {
                var a, s;
                e = Xt(e), a = gt[e.attr("data-ref")], s = function(e) {
                    for (var t = 0, a = gt[e.attr("data-ref")]; a && a.ref;) t++, a = gt[a.ref];
                    return t
                }(e), a && (sa(s >= ft ? "r" : "l", a.parent, e, t, !0), ft = s)
            }, dt._processSettings = function() {
                ut.is("[mbsc-enhance]") && ($ = !0, ut.removeAttr("mbsc-enhance"))
            }, dt._init = function() {
                var e, t, a, s = 0,
                    n = "",
                    i = "",
                    o = "";
                ge = Ye.listNode, xe = Ye.listSelector, he = Ye.itemNode, be = Ye.itemSelector, a = dt.remote.listview.sortable, dt.remote.listview.handlePos, R = dt.remote.listview.handleDiv, X = dt.remote.listview.htmlLeft, Z = dt.remote.listview.htmlRight, e = dt.remote.listview.contClass, dt.sortable = a || !1, m ? (m.attr("class", e), a.handle && ee(".mbsc-lv-handle-c", m).remove(), ee(be, m).not(".mbsc-lv-back").removeClass("mbsc-lv-item")) : (n += '<div class="mbsc-lv-multi-c"></div>', n += '<div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>', ut.addClass("mbsc-lv mbsc-lv-v mbsc-lv-root").removeClass("mbsc-cloak").show(), se = ee('<div class="mbsc-lv-stage-c">' + n + "</div>"), te = ee(".mbsc-lv-ic-c", se), _e = ee(".mbsc-lv-multi-c", se), Q = ee(".mbsc-lv-ic-s", se), et = ee(".mbsc-lv-ic-text", se), Fe = ee("<" + he + ' class="mbsc-lv-item mbsc-lv-ph"></' + he + ">"), Y = ee('<div class="mbsc-lv-fill-item"></div>'), m = ee('<div class="' + e + '"><' + ge + ' class="mbsc-lv mbsc-lv-dummy"></' + ge + '><div class="mbsc-lv-sl-c"></div></div>'), W = "body" !== Ye.context, rt = ee(W ? Ye.context : window), V = ee(".mbsc-lv-dummy", m), m.insertAfter(ut), rt.on("orientationchange resize", Nt), Nt(), m.on("touchstart mousedown", ".mbsc-lv-item", Tt).on("touchmove", ".mbsc-lv-item", yt).on("touchend touchcancel", ".mbsc-lv-item", _t), mt.addEventListener("click", Vt, !0), m.on("touchstart mousedown", ".mbsc-lv-ic-m", function(e) {
                    T || (e.stopPropagation(), e.preventDefault()), Ke = O(e, "X"), Be = O(e, "Y")
                }).on("touchend mouseup", ".mbsc-lv-ic-m", function(e) {
                    T || ("touchend" === e.type && E(), Rt && !ee(this).hasClass("mbsc-lv-ic-disabled") && Math.abs(O(e, "X") - Ke) < 10 && Math.abs(O(e, "Y") - Be) < 10 && It((r < 0 ? at.rightMenu : at.leftMenu)[ee(this).index()], c, d))
                }), $e = ee(".mbsc-lv-sl-c", m).append(ut.addClass("mbsc-lv-sl-curr")).attr("data-ref", Kt++), h = ut, p = m), Ut(ut), We = 0, (st = Ye.itemGroups || {}).defaults = {
                    swipeleft: Ye.swipeleft,
                    swiperight: Ye.swiperight,
                    stages: Ye.stages,
                    actions: Ye.actions,
                    actionsWidth: Ye.actionsWidth
                }, ee.each(st, function(e, t) {
                    if (t.swipe = void 0 !== t.swipe ? t.swipe : Ye.swipe, t.stages = t.stages || [], oa(t.stages, 1, !0), oa(t.stages.left, 1), oa(t.stages.right, -1), (t.stages.left || t.stages.right) && (t.stages = [].concat(t.stages.left || [], t.stages.right || [])), j = !1, t.stages.length || (t.swipeleft && t.stages.push({
                            percent: -30,
                            action: t.swipeleft
                        }), t.swiperight && t.stages.push({
                            percent: 30,
                            action: t.swiperight
                        })), ee.each(t.stages, function(e, t) {
                            if (0 === t.percent) return j = !0, !1
                        }), j || t.stages.push({
                            percent: 0
                        }), t.stages.sort(function(e, t) {
                            return e.percent - t.percent
                        }), ee.each(t.stages, function(e, a) {
                            if (0 === a.percent) return t.start = e, !1
                        }), j ? t.left = t.right = t.stages[t.start] : (t.left = t.stages[t.start - 1] || {}, t.right = t.stages[t.start + 1] || {}), t.actions) {
                        for (t.leftMenu = t.actions.left || t.actions, t.rightMenu = t.actions.right || t.leftMenu, i = "", o = "", s = 0; s < t.leftMenu.length; s++) i += "<div " + (t.leftMenu[s].color ? 'style="background-color: ' + t.leftMenu[s].color + '"' : "") + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + t.leftMenu[s].icon + '">' + (t.leftMenu[s].text || "") + "</div>";
                        for (s = 0; s < t.rightMenu.length; ++s) o += "<div " + (t.rightMenu[s].color ? 'style="background-color: ' + t.rightMenu[s].color + '"' : "") + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + t.rightMenu[s].icon + '">' + (t.rightMenu[s].text || "") + "</div>";
                        t.actions.left && (t.swipe = t.actions.right ? t.swipe : "right"), t.actions.right && (t.swipe = t.actions.left ? t.swipe : "left"), t.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + i + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + o + "</div>"
                    }
                }), Ye.fixedHeader && (t = "mbsc-lv-fixed-header" + (W ? " mbsc-lv-fixed-header-ctx mbsc-lv-" + Ye.theme + (Ye.baseTheme ? " mbsc-lv-" + Ye.baseTheme : "") : ""), z ? z.attr("class", t) : (z = ee('<div class="' + t + '"></div>'), W ? rt.before(z) : m.prepend(z), Se = A(At, 200), rt.on("scroll touchmove", Se))), Ye.hover && (B || m.on("mouseover.mbsc-lv", ".mbsc-lv-item", function() {
                    q && q[0] == this || (Dt(), q = ee(this), st[q.attr("data-type") || "defaults"].actions && (G = setTimeout(function() {
                        Ne ? q = null : (K = !0, dt.openActions(q, J, B, !1))
                    }, U)))
                }).on("mouseleave.mbsc-lv", Dt), B = Ye.hover.time || 200, U = Ye.hover.timeout || 200, J = Ye.hover.direction || Ye.hover || "right"), $ && m.attr("mbsc-enhance", ""), m.trigger("mbsc-enhance", [{
                    theme: Ye.theme,
                    lang: Ye.lang
                }])
            }, dt._destroy = function() {
                var e;
                p.append(h), W && z && z.remove(), $ && (ut.attr("mbsc-enhance", ""), (e = ae[m[0].id]) && e.destroy()), mt.removeEventListener("click", Vt, !0), m.find(".mbsc-lv-txt,.mbsc-lv-img").removeClass("mbsc-lv-txt mbsc-lv-img"), m.find(xe).removeClass("mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr").find(be).removeClass("mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right").removeAttr("data-ref"), ee(".mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic", m).remove(), ut.insertAfter(m), m.remove(), se.remove(), rt.off("orientationchange resize", Nt), Se && rt.off("scroll touchmove", Se)
            };
            var la, ca = [],
                da = [],
                ma = [],
                ua = 0;
            dt.startActionTrack = function() {
                ua || (ma = []), ua++
            }, dt.endActionTrack = function() {
                --ua || da.push(ma)
            }, dt.addUndoAction = function(e, t) {
                var a = {
                    action: e,
                    async: t
                };
                ua ? ma.push(a) : (da.push([a]), da.length > Ye.undoLimit && da.shift())
            }, dt.undo = function() {
                var e, t, a;

                function s() {
                    t < 0 ? (la = !1, n()) : (e = a[t], t--, e.async ? e.action(s) : (e.action(), s()))
                }

                function n() {
                    (a = ca.shift()) && (la = !0, t = a.length - 1, s())
                }
                da.length && ca.push(da.pop()), la || n()
            }, Ye = dt.settings, L = dt.trigger, dt.init(t)
        };
    Ut.prototype = {
        _class: "listview",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: {
            context: "body",
            actionsWidth: 90,
            sortDelay: 250,
            undoLimit: 10,
            swipe: !0,
            quickSwipe: !0,
            animateIcons: !0,
            animation: !0,
            revert: !0,
            vibrate: !0,
            handleClass: "",
            handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
            listNode: "ul",
            listSelector: "ul,ol",
            itemNode: "li",
            itemSelector: "li",
            leftArrowClass: "mbsc-ic-arrow-left4",
            rightArrowClass: "mbsc-ic-arrow-right4",
            backText: "Back",
            undoText: "Undo",
            stages: []
        }
    }, se.ListView = Ut, i.themes.listview.mobiscroll = {
        leftArrowClass: "mbsc-ic-arrow-left5",
        rightArrowClass: "mbsc-ic-arrow-right5"
    }, v("listview", Ut, !1);
    var Gt = {
        batch: 50,
        min: 0,
        max: 100,
        defaultUnit: "",
        units: null,
        unitNames: null,
        invalid: [],
        sign: !1,
        step: .05,
        scale: 2,
        convert: function(e) {
            return e
        },
        signText: "&nbsp;",
        wholeText: "Whole",
        fractionText: "Fraction",
        unitText: "Unit"
    };
    Ae.measurement = function(e) {
        var t, a, s, n, i, r, o, l, c, d, m, u, h, f, p = ne({}, e.settings),
            b = ne(e.settings, Gt, p),
            v = {},
            g = [
                []
            ],
            x = {},
            T = {},
            y = {},
            _ = [],
            w = b.sign,
            M = b.units && b.units.length,
            C = M ? b.defaultUnit || b.units[0] : "",
            k = [],
            S = b.step < 1,
            D = b.step > 1 ? b.step : 1,
            A = S ? Math.max(b.scale, (b.step + "").split(".")[1].length) : 1,
            F = Math.pow(10, A),
            I = Math.round(S ? b.step * F : b.step),
            P = 0,
            H = 0,
            E = 0;

        function L(e) {
            return Math.max(c, Math.min(d, S ? e < 0 ? Math.ceil(e) : Math.floor(e) : z(Math.round(e - P), I) + P))
        }

        function O(e) {
            return S ? z((Math.abs(e) - Math.abs(L(e))) * F - H, I) + H : 0
        }

        function Y(e) {
            var t = L(e),
                a = O(e);
            return a >= F && (e < 0 ? t-- : t++, a = 0), [e < 0 ? "-" : "+", t, a]
        }

        function j(e) {
            var t = +e[i],
                a = S ? e[n] / F * (t < 0 ? -1 : 1) : 0;
            return (w && "-" == e[0] ? -1 : 1) * (t + a)
        }

        function z(e, t) {
            return Math.round(e / t) * t
        }

        function $(e, t, a) {
            return t !== a && b.convert ? b.convert.call(this, e, t, a) : e
        }

        function W(e) {
            var t, a;
            o = $(b.min, C, e), l = $(b.max, C, e), S ? (c = o < 0 ? Math.ceil(o) : Math.floor(o), d = l < 0 ? Math.ceil(l) : Math.floor(l), m = O(o), u = O(l)) : (c = Math.round(o), d = Math.round(l), d = c + Math.floor((d - c) / I) * I, P = c % I), t = c, a = d, w && (a = Math.abs(t) > Math.abs(a) ? Math.abs(t) : Math.abs(a), t = t < 0 ? 0 : t), T.min = t < 0 ? Math.ceil(t / D) : Math.floor(t / D), T.max = a < 0 ? Math.ceil(a / D) : Math.floor(a / D)
        }

        function R(e) {
            return j(e).toFixed(S ? A : 0) + (M ? " " + k[e[r]] : "")
        }
        if (e.setVal = function(t, a, s, n, i) {
                e._setVal(ee.isArray(t) ? R(t) : t, a, s, n, i)
            }, b.units)
            for (f = 0; f < b.units.length; ++f) h = b.units[f], k.push(b.unitNames && b.unitNames[h] || h);
        if (w)
            if (w = !1, M)
                for (f = 0; f < b.units.length; f++) $(b.min, C, b.units[f]) < 0 && (w = !0);
            else w = b.min < 0;
        if (w && (g[0].push({
                data: ["-", "+"],
                label: b.signText
            }), E++), T = {
                label: b.wholeText,
                data: function(e) {
                    return c % D + e * D
                },
                getIndex: function(e) {
                    return Math.round((e - c % D) / D)
                }
            }, g[0].push(T), i = E++, W(C), S) {
            for (g[0].push(y), y.data = [], y.label = b.fractionText, f = H; f < F; f += I) _.push(f), y.data.push({
                value: f,
                display: "." + V(f, A)
            });
            n = E++, t = Math.ceil(100 / I), b.invalid && b.invalid.length && (ee.each(b.invalid, function(e, t) {
                var a = t > 0 ? Math.floor(t) : Math.ceil(t);
                0 === a && (a = t <= 0 ? -.001 : .001), x[a] = (x[a] || 0) + 1, 0 === t && (x[a = .001] = (x[a] || 0) + 1)
            }), ee.each(x, function(e, a) {
                a < t ? delete x[e] : x[e] = e
            }))
        }
        if (M) {
            for (v = {
                    data: [],
                    label: b.unitText,
                    cssClass: "mbsc-msr-whl-unit",
                    circular: !1
                }, f = 0; f < b.units.length; f++) v.data.push({
                value: f,
                display: k[f]
            });
            g[0].push(v)
        }
        return r = E, {
            wheels: g,
            minWidth: w && S ? 70 : 80,
            showLabel: !1,
            formatValue: R,
            compClass: "mbsc-msr",
            parseValue: function(e) {
                var t, m = ((("number" == typeof e ? e + "" : e) || b.defaultValue) + "").split(" "),
                    u = +m[0],
                    h = [],
                    f = "";
                return M && (f = -1 == (f = -1 == (f = ee.inArray(m[1], k)) ? ee.inArray(C, b.units) : f) ? 0 : f), W(s = M ? b.units[f] : ""), (t = Y(u = N(u = isNaN(u) ? 0 : u, o, l)))[1] = N(t[1], c, d), a = u, w && (h[0] = t[0], t[1] = Math.abs(t[1])), h[i] = t[1], S && (h[n] = t[2]), M && (h[r] = f), h
            },
            onCancel: function() {
                a = void 0
            },
            validate: function(t) {
                var h, f, p, v, g, y = t.values,
                    k = t.index,
                    V = t.direction,
                    A = {},
                    F = [],
                    P = {},
                    H = M ? b.units[y[r]] : "";
                if (w && 0 === k && (a = Math.abs(a) * ("-" == y[0] ? -1 : 1)), (k === i || k === n && S || void 0 === a || void 0 === k) && (a = j(y), s = H), (M && k === r && s !== H || void 0 === k) && (W(H), a = $(a, s, H), s = H, f = Y(a), void 0 !== k && (P[i] = T, e.changeWheel(P)), w && (y[0] = f[0])), F[i] = [], w)
                    for (F[0] = [], o > 0 && (F[0].push("-"), y[0] = "+"), l < 0 && (F[0].push("+"), y[0] = "-"), g = Math.abs("-" == y[0] ? c : d), E = g + D; E < g + 20 * D; E += D) F[i].push(E), A[E] = !0;
                if (a = N(a, o, l), f = Y(a), p = w ? Math.abs(f[1]) : f[1], h = w ? "-" == y[0] : a < 0, y[i] = p, h && (f[0] = "-"), S && (y[n] = f[2]), ee.each(S ? x : b.invalid, function(e, t) {
                        if (w && h) {
                            if (!(t <= 0)) return;
                            t = Math.abs(t)
                        }
                        t = z($(t, C, H), S ? 1 : I), A[t] = !0, F[i].push(t)
                    }), y[i] = e.getValidValue(i, p, V, A), f[1] = y[i] * (w && h ? -1 : 1), S) {
                    F[n] = [];
                    var L = w ? y[0] + y[1] : (a < 0 ? "-" : "+") + Math.abs(f[1]),
                        O = (o < 0 ? "-" : "+") + Math.abs(c),
                        R = (l < 0 ? "-" : "+") + Math.abs(d);
                    L === O && ee(_).each(function(e, t) {
                        (h ? t > m : t < m) && F[n].push(t)
                    }), L === R && ee(_).each(function(e, t) {
                        (h ? t < u : t > u) && F[n].push(t)
                    }), ee.each(b.invalid, function(e, t) {
                        v = Y($(t, C, H)), (f[0] === v[0] || 0 === f[1] && 0 === v[1] && 0 === v[2]) && f[1] === v[1] && F[n].push(v[2])
                    })
                }
                return {
                    disabled: F,
                    valid: y
                }
            }
        }
    };
    var Xt = {
            min: 0,
            max: 100,
            defaultUnit: "km",
            units: ["m", "km", "in", "ft", "yd", "mi"]
        },
        Zt = {
            mm: .001,
            cm: .01,
            dm: .1,
            m: 1,
            dam: 10,
            hm: 100,
            km: 1e3,
            in : .0254,
            ft: .3048,
            yd: .9144,
            ch: 20.1168,
            fur: 201.168,
            mi: 1609.344,
            lea: 4828.032
        };
    Ae.distance = function(e) {
        var t = ne({}, Xt, e.settings);
        return ne(e.settings, t, {
            sign: !1,
            convert: function(e, t, a) {
                return e * Zt[t] / Zt[a]
            }
        }), Ae.measurement.call(this, e)
    };
    var Qt = {
            min: 0,
            max: 100,
            defaultUnit: "N",
            units: ["N", "kp", "lbf", "pdl"]
        },
        ea = {
            N: 1,
            kp: 9.80665,
            lbf: 4.448222,
            pdl: .138255
        };
    Ae.force = function(e) {
        var t = ne({}, Qt, e.settings);
        return ne(e.settings, t, {
            sign: !1,
            convert: function(e, t, a) {
                return e * ea[t] / ea[a]
            }
        }), Ae.measurement.call(this, e)
    };
    var ta = {
            min: 0,
            max: 1e3,
            defaultUnit: "kg",
            units: ["g", "kg", "oz", "lb"],
            unitNames: {
                tlong: "t (long)",
                tshort: "t (short)"
            }
        },
        aa = {
            mg: .001,
            cg: .01,
            dg: .1,
            g: 1,
            dag: 10,
            hg: 100,
            kg: 1e3,
            t: 1e6,
            drc: 1.7718452,
            oz: 28.3495,
            lb: 453.59237,
            st: 6350.29318,
            qtr: 12700.58636,
            cwt: 50802.34544,
            tlong: 1016046.9088,
            tshort: 907184.74
        };
    Ae.mass = function(e) {
        var t = ne({}, ta, e.settings);
        return ne(e.settings, t, {
            sign: !1,
            convert: function(e, t, a) {
                return e * aa[t] / aa[a]
            }
        }), Ae.measurement.call(this, e)
    };
    var sa = {
            min: 0,
            max: 100,
            defaultUnit: "kph",
            units: ["kph", "mph", "mps", "fps", "knot"],
            unitNames: {
                kph: "km/h",
                mph: "mi/h",
                mps: "m/s",
                fps: "ft/s",
                knot: "knot"
            }
        },
        na = {
            kph: 1,
            mph: 1.60934,
            mps: 3.6,
            fps: 1.09728,
            knot: 1.852
        };
    Ae.speed = function(e) {
        var t = ne({}, sa, e.settings);
        return ne(e.settings, t, {
            sign: !1,
            convert: function(e, t, a) {
                return e * na[t] / na[a]
            }
        }), Ae.measurement.call(this, e)
    };
    var ia = {
            min: -20,
            max: 40,
            defaultUnit: "c",
            units: ["c", "k", "f", "r"],
            unitNames: {
                c: "°C",
                k: "K",
                f: "°F",
                r: "°R"
            }
        },
        ra = {
            c2k: function(e) {
                return e + 273.15
            },
            c2f: function(e) {
                return 9 * e / 5 + 32
            },
            c2r: function(e) {
                return 9 * (e + 273.15) / 5
            },
            k2c: function(e) {
                return e - 273.15
            },
            k2f: function(e) {
                return 9 * e / 5 - 459.67
            },
            k2r: function(e) {
                return 9 * e / 5
            },
            f2c: function(e) {
                return 5 * (e - 32) / 9
            },
            f2k: function(e) {
                return 5 * (e + 459.67) / 9
            },
            f2r: function(e) {
                return e + 459.67
            },
            r2c: function(e) {
                return 5 * (e - 491.67) / 9
            },
            r2k: function(e) {
                return 5 * e / 9
            },
            r2f: function(e) {
                return e - 459.67
            }
        };
    Ae.temperature = function(e) {
        var t = ne({}, ia, e.settings);
        return ne(e.settings, t, {
            sign: !0,
            convert: function(e, t, a) {
                return ra[t + "2" + a](e)
            }
        }), Ae.measurement.call(this, e)
    }, v("measurement", Pe), v("distance", Pe), v("force", Pe), v("mass", Pe), v("speed", Pe), v("temperature", Pe);
    /* eslint-disable no-unused-vars */
    var oa = 1,
        la = function(e, t, a) {
            var s, n, r, l, c, d, m, u, h, f, p, b, v, g, x, T = {},
                y = 1e3,
                _ = this,
                w = ee(e);

            function C(e) {
                clearTimeout(u), u = setTimeout(function() {
                    N("load" !== e.type)
                }, 200)
            }

            function k(t, a) {
                if (t.length) {
                    if (a = _._onItemTap(t, a), s = t, t.parent()[0] == e) {
                        var i = t.offset().left,
                            r = t[0].offsetLeft,
                            o = t[0].offsetWidth,
                            l = n.offset().left;
                        h && (r = v - r - o), "a" == b.variant ? i < l ? f.scroll(h ? r + o - c : -r, y, !0) : i + o > l + c && f.scroll(h ? r : c - r - o, y, !0) : f.scroll(c / 2 - r - o / 2, y, !0)
                    }
                    a && x("onItemTap", {
                        target: t[0]
                    })
                }
            }

            function D() {
                var e;
                _._initMarkup(n), w.find(".mbsc-ripple").remove(), _._$items = w.children(), _._$items.each(function(t) {
                    var a, n = ee(this),
                        r = n.attr("data-ref");
                    r || (r = oa++), 0 === t && (e = n), s || (s = _._getActiveItem(n)), a = "mbsc-scv-item mbsc-btn-e " + ((_._getItemProps(n) || {}).cssClass || ""), n.attr("data-ref", r).removeClass(T[r]).addClass(a), T[r] = a, n.append(_._getText(i, .2))
                }), s || (s = e), _._markupReady(n)
            }

            function N(t, a) {
                var s = b.itemWidth,
                    i = b.layout;
                _.contWidth = c = n.width(), t && m === c || !c || (m = c, S(i) && (d = c ? c / i : s) < s && (i = "liquid"), s && ("liquid" == i ? d = c ? c / Math.min(Math.floor(c / s), _._$items.length) : s : "fixed" == i && (d = s)), _._size(c, d), d && w.children().css("width", d + "px"), _.totalWidth = v = e.offsetWidth, ne(f.settings, {
                    contSize: c,
                    maxSnapScroll: !!b.paging && 1,
                    maxScroll: 0,
                    minScroll: v > c ? c - v : 0,
                    snap: b.paging ? c : !!p && (d || ".mbsc-scv-item"),
                    elastic: v > c && (d || c)
                }), f.refresh(a))
            }
            de.call(this, e, t, !0), _.navigate = function(e, t) {
                k(_._getItem(e), t)
            }, _.next = function(e) {
                if (s) {
                    var t = s.next();
                    t.length && k(s = t, e)
                }
            }, _.prev = function(e) {
                if (s) {
                    var t = s.prev();
                    t.length && k(s = t, e)
                }
            }, _.refresh = _.position = function(e) {
                D(), N(!1, e)
            }, _._init = function() {
                var e;
                r = ee(b.context), l = ee("body" == b.context ? window : b.context), _.__init(), h = _.remote.menustrip.rtlSetting, p = _.remote.menustrip.snapSetting, e = _.remote.menustrip.contClass + (_._getContClass() || ""), n ? (n.attr("class", e), w.off(".mbsc-ripple")) : ((n = ee('<div class="' + e + '"><div class="mbsc-scv-sc"></div></div>').insertAfter(w)).find(".mbsc-scv-sc").append(w), f = new Ve(n[0], {
                    axis: "X",
                    contSize: 0,
                    maxScroll: 0,
                    maxSnapScroll: 1,
                    minScroll: 0,
                    snap: 1,
                    elastic: 1,
                    rtl: h,
                    mousewheel: b.mousewheel,
                    thresholdX: b.threshold,
                    stopProp: b.stopProp,
                    onStart: function(e) {
                        g || "touchstart" != e.domEvent.type || (g = !0, r.find(".mbsc-no-touch").removeClass("mbsc-no-touch"))
                    },
                    onBtnTap: function(e) {
                        "touchend" === e.domEvent.type && L(e.domEvent, e.domEvent.target), k(ee(e.target), !0)
                    },
                    onGestureStart: function(e) {
                        x("onGestureStart", e)
                    },
                    onGestureEnd: function(e) {
                        x("onGestureEnd", e)
                    },
                    onMove: function(e) {
                        x("onMove", e)
                    },
                    onAnimationStart: function(e) {
                        x("onAnimationStart", e)
                    },
                    onAnimationEnd: function(e) {
                        x("onAnimationEnd", e)
                    }
                })), w.css("display", "").addClass("mbsc-scv").removeClass("mbsc-cloak"), D(), x("onMarkupReady", {
                    target: n[0]
                }), N(), n.find("img").on("load", C), l.on("orientationchange resize", C)
            }, _._size = M, _._initMarkup = M, _._markupReady = M, _._getContClass = M, _._getItemProps = M, _._getActiveItem = M, _.__init = M, _.__destroy = M, _._destroy = function() {
                _.__destroy(), l.off("orientationchange resize", C), w.removeClass("mbsc-scv").insertAfter(n).find(".mbsc-scv-item").each(function() {
                    var e = ee(this);
                    e.width("").removeClass(T[e.attr("data-ref")])
                }), n.remove(), f.destroy()
            }, _._getItem = function(e) {
                return "object" !== (void 0 === e ? "undefined" : o(e)) && (e = _._$items.filter('[data-id="' + e + '"]')), ee(e)
            }, _._onItemTap = function(e, t) {
                return void 0 === t || t
            }, b = _.settings, x = _.trigger, a || _.init(t)
        };
    la.prototype = {
        _class: "scrollview",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: {
            tap: !0,
            stopProp: !1,
            context: "body",
            layout: "liquid"
        }
    }, se.ScrollView = la;
    var ca = function(e, t, a) {
        var s, n, i, r, o, l, c = ee(e),
            d = this;

        function m() {
            n && "inline" != n && s.find(".mbsc-page").css("padding-" + n, "")
        }

        function u(e) {
            e.addClass(o).attr("data-selected", "true").attr("aria-selected", "true")
        }

        function h(e) {
            e.removeClass(o).removeAttr("data-selected").removeAttr("aria-selected")
        }
        la.call(this, e, t, !0), d.select = function(e) {
            i || h(d._$items.filter(".mbsc-ms-item-sel")), u(d._getItem(e))
        }, d.deselect = function(e) {
            h(d._getItem(e))
        }, d.enable = function(e) {
            d._getItem(e).removeClass("mbsc-disabled").removeAttr("data-disabled").removeAttr("aria-disabled")
        }, d.disable = function(e) {
            d._getItem(e).addClass("mbsc-disabled").attr("data-disabled", "true").attr("aria-disabled", "true")
        }, d.setBadge = function(e, t) {
            var a;
            e = d._getItem(e).attr("data-badge", t), (a = ee(".mbsc-ms-badge", e)).length ? t ? a.html(t) : a.remove() : t && e.append('<span class="mbsc-ms-badge">' + t + "</span>")
        }, d._markupReady = function(e) {
            d._hasIcons ? e.addClass("mbsc-ms-icons") : e.removeClass("mbsc-ms-icons"), d._hasText ? e.addClass("mbsc-ms-txt") : e.removeClass("mbsc-ms-txt"), d.__markupReady(e)
        }, d._size = function(t, a) {
            d.__size(t, a), "inline" != n && s.find(".mbsc-page").css("padding-" + n, e.offsetHeight + "px")
        }, d._onItemTap = function(e, t) {
            return !1 !== d.__onItemTap(e, t) && (void 0 === t && (t = !i), r && t && !e.hasClass("mbsc-disabled") && (i ? "true" == e.attr("data-selected") ? h(e) : u(e) : (h(d._$items.filter(".mbsc-ms-item-sel")), u(e))), t)
        }, d._getActiveItem = function(e) {
            var t = "true" == e.attr("data-selected");
            if (r && !i && t) return e
        }, d._getItemProps = function(e) {
            var t = "true" == e.attr("data-selected"),
                a = "true" == e.attr("data-disabled"),
                s = e.attr("data-icon"),
                n = e.attr("data-badge");
            return e.attr("data-role", "button").attr("aria-selected", t ? "true" : "false").attr("aria-disabled", a ? "true" : "false"), n && e.append('<span class="mbsc-ms-badge">' + n + "</span>"), s && (d._hasIcons = !0), e.text() && (d._hasText = !0), {
                cssClass: "mbsc-ms-item " + (l.itemClass || "") + " " + (t ? o : "") + (a ? " mbsc-disabled " + (l.disabledClass || "") : "") + (s ? " mbsc-ms-ic mbsc-ic mbsc-ic-" + s : "")
            }
        }, d._getContClass = function() {
            return " mbsc-ms-c mbsc-ms-" + l.variant + " mbsc-ms-" + n + (r ? "" : " mbsc-ms-nosel") + (d.__getContClass() || "")
        }, d.__init = function() {
            d.___init(), s = ee(l.context), m(), n = l.display, i = "multiple" == l.select, r = "off" != l.select, o = " mbsc-ms-item-sel " + (l.activeClass || ""), c.addClass("mbsc-ms mbsc-ms-base " + (l.groupClass || ""))
        }, d.__destroy = function() {
            c.removeClass("mbsc-ms mbsc-ms-base " + (l.groupClass || "")), m(), d.___destroy()
        }, d.__onItemTap = M, d.__getContClass = M, d.__markupReady = M, d.__size = M, d.___init = M, d.___destroy = M, l = d.settings, a || d.init(t)
    };
    ca.prototype = {
        _defaults: ne({}, la.prototype._defaults)
    };
    var da = function(e, t) {
        ca.call(this, e, t, !0), this.___init = function() {}, this.init(t)
    };
    da.prototype = {
        _class: "optionlist",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: ne({}, ca.prototype._defaults, {
            select: "multiple",
            variant: "a",
            display: "inline"
        })
    }, se.Optionlist = da, i.themes.optionlist = i.themes.navigation, v("optionlist", da, !1);
    var ma = function(e, t) {
        var a, s, n, i, r, o = ee(e),
            l = o.is("ul,ol"),
            c = this;
        ca.call(this, e, t, !0), c._initMarkup = function() {
            a && a.remove(), s && o.append(s.children())
        }, c.__size = function(e, t) {
            var l, d = t || 72,
                m = c._$items.length,
                u = 0;
            r.hide(), "bottom" == i.type && (o.removeClass("mbsc-scv-liq"), a.remove(), c._$items.remove().each(function(a) {
                var n = ee(this);
                o.append(n), u += t || this.offsetWidth || 0, Math.round(u + (a < m - 1 ? d : 0)) > e && (l = !0, s.append(n.css("width", "").addClass("mbsc-fr-btn-e")))
            }), a.attr("class", n + (i.moreIcon ? " mbsc-menu-item-ic mbsc-ms-ic mbsc-ic mbsc-ic-" + i.moreIcon : "")).html(c._hasIcons && c._hasText ? i.moreText : ""), l && o.append(a)), "liquid" == i.layout && o.addClass("mbsc-scv-liq")
        }, c.__onItemTap = function(e) {
            if (e.hasClass("mbsc-menu-item") && !1 !== c.trigger("onMenuShow", {
                    target: e[0],
                    menu: r
                })) return r.show(!1, !0), !1
        }, c.__getContClass = function() {
            return "hamburger" == i.type ? " mbsc-ms-hamburger" : ""
        }, c.__markupReady = function(e) {
            "hamburger" == i.type && (s.append(c._$items.addClass("mbsc-fr-btn-e")), a.attr("class", n + (i.menuIcon ? " mbsc-menu-item-ic mbsc-ms-ic mbsc-ic mbsc-ic-" + i.menuIcon : "")).html(i.menuText || ""), o.append(a), i.menuText && i.menuIcon || e.removeClass("mbsc-ms-icons"), i.menuText ? e.addClass("mbsc-ms-txt") : e.removeClass("mbsc-ms-txt"))
        }, c.___init = function() {
            var e;
            "tab" == i.type ? (i.display = i.display || "top", i.variant = i.variant || "b") : "bottom" == i.type ? (i.display = i.display || "bottom", i.variant = i.variant || "a") : "hamburger" == i.type && (i.display = i.display || "inline", i.variant = i.variant || "a"), n = "mbsc-scv-item mbsc-ms-item mbsc-btn-e mbsc-menu-item " + (i.itemClass || ""), a || (a = ee(l ? "<li></li>" : "<div></div>"), s = ee(l ? "<ul></ul>" : "<div></div>").addClass("mbsc-scv mbsc-ms")), r = new Dt(s[0], {
                display: "bubble",
                theme: i.theme,
                lang: i.lang,
                context: i.context,
                buttons: [],
                anchor: a,
                onBeforeShow: function(t, a) {
                    e = null, a.settings.cssClass = "mbsc-wdg mbsc-ms-a mbsc-ms-more" + (c._hasText ? "" : " mbsc-ms-more-icons")
                },
                onBeforeClose: function() {
                    return c.trigger("onMenuHide", {
                        target: e && e[0],
                        menu: r
                    })
                },
                onMarkupReady: function(t, a) {
                    c.tap(a._markup.find(".mbsc-fr-c"), function(t) {
                        (e = ee(t.target).closest(".mbsc-ms-item")).length && !e.hasClass("mbsc-disabled") && ("touchend" === t.type && L(t, t.target), c.navigate(e, !0), r.hide())
                    })
                }
            })
        }, c.___destroy = function() {
            r.destroy(), o.append(c._$items), a.remove()
        }, i = c.settings, c.init(t)
    };
    ma.prototype = {
        _class: "navigation",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: ne({}, ca.prototype._defaults, {
            type: "bottom",
            moreText: "More",
            moreIcon: "material-more-horiz",
            menuIcon: "material-menu"
        })
    }, se.Navigation = ma, v("nav", ma, !1), Ae.number = Ae.measurement, v("number", Pe);
    var ua = {},
        ha = function(e, t, a) {
            var s, n, r, o, l, c, d, m, u, h, f, p, b, v, g, x, T, y, _, w = ee(e),
                M = this,
                C = [],
                k = [],
                D = {},
                N = {},
                V = {
                    107: "+",
                    109: "-"
                },
                A = {
                    48: 0,
                    49: 1,
                    50: 2,
                    51: 3,
                    52: 4,
                    53: 5,
                    54: 6,
                    55: 7,
                    56: 8,
                    57: 9,
                    96: 0,
                    97: 1,
                    98: 2,
                    99: 3,
                    100: 4,
                    101: 5,
                    102: 6,
                    103: 7,
                    104: 8,
                    105: 9
                };

            function F(t) {
                var a, d = l.validate.call(e, {
                        values: g.slice(0),
                        variables: D
                    }, M) || [],
                    m = d && d.disabled || [];
                if (M._isValid = !d.invalid, M._tempValue = l.formatValue.call(e, g.slice(0), D, M), o = g.length, x = d.length || y, M._isVisible && i.QkqWj) {
                    if (ee(".mbsc-np-ph", s).each(function(e) {
                            ee(this).html("ltr" == l.fill ? e >= o ? r : c || g[e] : e >= y - x ? e + o < y ? r : c || g[e + o - y] : "")
                        }), ee(".mbsc-np-cph", s).each(function() {
                            ee(this).html(D[ee(this).attr("data-var")] || ee(this).attr("data-ph"))
                        }), o === y)
                        for (a = 0; a <= 9; a++) m.push(a);
                    for (ee(".mbsc-np-btn", s).removeClass(n), a = 0; a < m.length; a++) ee('.mbsc-np-btn[data-val="' + m[a] + '"]', s).addClass(n);
                    M._isValid ? ee(".mbsc-fr-btn-s .mbsc-fr-btn", s).removeClass(n) : ee(".mbsc-fr-btn-s .mbsc-fr-btn", s).addClass(n), M.live && (M._hasValue = t || M._hasValue, I(t, !1, t), t && T("onSet", {
                        valueText: M._value
                    }))
                }
            }

            function I(e, t, a, s) {
                t && F(), s || (_ = g.slice(0), N = ne({}, D), C = k.slice(0), M._value = M._hasValue ? M._tempValue : null), e && (M._isInput && w.val(M._hasValue && M._isValid ? M._value : ""), T("onFill", {
                    valueText: M._hasValue ? M._tempValue : "",
                    change: a
                }), a && (M._preventChange = !0, w.trigger("change")))
            }

            function P(e) {
                var t, a, s = e || [],
                    n = [];
                for (k = [], D = {}, t = 0; t < s.length; t++) /:/.test(s[t]) ? (a = s[t].split(":"), D[a[0]] = a[1], k.push(a[0])) : (n.push(s[t]), k.push("digit"));
                return n
            }

            function H(e, t) {
                !(o || t || l.allowLeadingZero) || e.hasClass("mbsc-disabled") || e.hasClass("mbsc-np-btn-empty") || o < y && i.QkqWj && (k.push("digit"), g.push(t), F(!0))
            }

            function E(e) {
                var t, a, s = e.attr("data-val"),
                    n = "false" !== e.attr("data-track"),
                    i = e.attr("data-var");
                if (!e.hasClass("mbsc-disabled")) {
                    if (i && (a = i.split(":"), n && k.push(a[0]), D[a[0]] = void 0 === a[2] ? a[1] : D[a[0]] == a[1] ? a[2] : a[1]), s.length + o <= x)
                        for (t = 0; t < s.length; ++t) a = S(s[t]) ? +s[t] : s[t], (l.allowLeadingZero || o || a) && (k.push("digit"), g.push(a), o = g.length);
                    F(!0)
                }
            }

            function L() {
                var e, t, a = k.pop();
                if (o || "digit" !== a) {
                    if ("digit" !== a && D[a])
                        for (delete D[a], t = k.slice(0), k = [], e = 0; e < t.length; e++) t[e] !== a && k.push(t[e]);
                    else g.pop();
                    F(!0)
                }
            }

            function Y() {
                clearInterval(v), b = !1
            }

            function j(e) {
                if (fe(e, this)) {
                    if ("keydown" == e.type && 32 != e.keyCode) return;
                    ! function(e) {
                        b = !0, d = O(e, "X"), m = O(e, "Y"), clearInterval(v), clearTimeout(v), L(), v = setInterval(function() {
                            L()
                        }, 150)
                    }(e), "mousedown" == e.type && ee(document).on("mousemove", z).on("mouseup", $)
                }
            }

            function z(e) {
                b && (u = O(e, "X"), h = O(e, "Y"), f = u - d, p = h - m, (Math.abs(f) > 7 || Math.abs(p) > 7) && Y())
            }

            function $(e) {
                b && (e.preventDefault(), Y(), "mouseup" == e.type && ee(document).off("mousemove", z).off("mouseup", $))
            }
            De.call(this, e, t, !0), M.setVal = M._setVal = function(t, a, s, n) {
                M._hasValue = null !== t && void 0 !== t, g = P(ee.isArray(t) ? t.slice(0) : l.parseValue.call(e, t, M)), I(a, !0, void 0 === s ? a : s, n)
            }, M.getVal = M._getVal = function(e) {
                return M._hasValue || e ? M[e ? "_tempValue" : "_value"] : null
            }, M.setArrayVal = M.setVal, M.getArrayVal = function(e) {
                return e ? g.slice(0) : M._hasValue ? _.slice(0) : null
            }, M._readValue = function() {
                var t = w.val() || "";
                "" !== t && (M._hasValue = !0), c ? (D = {}, k = [], g = []) : (D = M._hasValue ? N : {}, k = M._hasValue ? C : [], g = M._hasValue && _ ? _.slice(0) : P(l.parseValue.call(e, t, M)), I(!1, !0))
            }, M._fillValue = function() {
                M._hasValue = !0, I(!0, !1, !0)
            }, M._generateContent = function() {
                var e, t, a, s = 1,
                    n = "";
                for (n += '<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' + l.deleteText + '" class="mbsc-np-del mbsc-fr-btn-e mbsc-ic mbsc-ic-' + l.deleteIcon + '"></div><div class="mbsc-np-dsp">', n += l.template.replace(/d/g, '<span class="mbsc-np-ph">' + r + "</span>").replace(/&#100;/g, "d").replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>'), n += "</div></div>", n += '<div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">', e = 0; e < 4; e++) {
                    for (n += '<div class="mbsc-np-row">', t = 0; t < 3; t++) a = s, 10 == s || 12 == s ? a = "" : 11 == s && (a = 0), "" === a ? 10 == s && l.leftKey ? n += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (l.leftKey.variable ? 'data-var="' + l.leftKey.variable + '"' : "") + ' data-val="' + (l.leftKey.value || "") + '" ' + (void 0 !== l.leftKey.track ? ' data-track="' + l.leftKey.track + '"' : "") + ">" + l.leftKey.text + "</div>" : 12 == s && l.rightKey ? n += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (l.rightKey.variable ? 'data-var="' + l.rightKey.variable + '"' : "") + ' data-val="' + (l.rightKey.value || "") + '" ' + (void 0 !== l.rightKey.track ? ' data-track="' + l.rightKey.track + '"' : "") + " >" + l.rightKey.text + "</div>" : n += '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>' : n += '<div tabindex="0" role="button" class="mbsc-np-btn mbsc-fr-btn-e" data-val="' + a + '">' + a + M._getText(i, .2) + "</div>", s++;
                    n += "</div>"
                }
                return n += "</div></div>"
            }, M._markupReady = function() {
                s = M._markup, F()
            }, M._attachEvents = function(e) {
                e.on("keydown", function(t) {
                    var a;
                    void 0 !== V[t.keyCode] ? (a = ee('.mbsc-np-btn[data-var="sign:-:"]', e)).length && (D.sign = 107 == t.keyCode ? "-" : "", E(a)) : void 0 !== A[t.keyCode] ? H(ee('.mbsc-np-btn[data-val="' + A[t.keyCode] + '"]', e), A[t.keyCode]) : 8 == t.keyCode && (t.preventDefault(), L())
                }), M.tap(ee(".mbsc-np-btn", e), function() {
                    var e = ee(this);
                    e.hasClass("mbsc-np-btn-custom") ? E(e) : H(e, +e.attr("data-val"))
                }, !1, 30, !0), ee(".mbsc-np-del", e).on("touchstart mousedown keydown", j).on("touchmove mousemove", z).on("touchend mouseup keyup", $)
            }, M.__init = function() {
                (l = M.settings).cssClass = (l.cssClass || "") + " mbsc-np", l.template = l.template.replace(/\\d/, "&#100;"), r = l.placeholder, y = (l.template.match(/d/g) || []).length, n = "mbsc-disabled " + (l.disabledClass || ""), c = l.mask, T = M.trigger, c && w.is("input") && w.attr("type", "password")
            }, M._indexOf = function(e, t) {
                var a;
                for (a = 0; a < e.length; ++a)
                    if (e[a].toString() === t.toString()) return a;
                return -1
            }, a || M.init(t)
        };
    ha.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "numpad",
        _presets: ua,
        _defaults: ne({}, De.prototype._defaults, {
            template: "dd.dd",
            placeholder: "0",
            deleteIcon: "backspace",
            allowLeadingZero: !1,
            headerText: !1,
            fill: "rtl",
            deleteText: "Delete",
            decimalSeparator: ".",
            thousandsSeparator: ",",
            validate: M,
            parseValue: M,
            formatValue: function(e, t, a) {
                var s, n = 1,
                    i = a.settings,
                    r = i.placeholder,
                    o = i.template,
                    l = e.length,
                    c = o.length,
                    d = "";
                for (s = 0; s < c; s++) "d" == o[c - s - 1] ? (d = n <= l ? e[l - n] + d : r + d, n++) : d = o[c - s - 1] + d;
                return ee.each(t, function(e, t) {
                    d = d.replace("{" + e + "}", t)
                }), ee("<div>" + d + "</div>").text()
            }
        })
    }, se.Numpad = ha, i.themes.numpad = i.themes.frame;
    var fa = {
        min: 0,
        max: 99.99,
        scale: 2,
        prefix: "",
        suffix: "",
        returnAffix: !1
    };

    function pa(e) {
        for (var t = 0, a = 1, s = 0; e.length;) t > 3 ? a = 3600 : t > 1 && (a = 60), s += e.pop() * a * (t % 2 ? 10 : 1), t++;
        return s
    }
    ua.decimal = function(e) {
        function t(e, t) {
            for (var a, s = e.slice(0), i = 0; s.length;) i = 10 * i + s.shift();
            for (a = 0; a < n.scale; a++) i /= 10;
            return t ? -1 * i : i
        }

        function a(e) {
            return t(e).toFixed(n.scale).replace(".", n.decimalSeparator).replace(/\B(?=(\d{3})+(?!\d))/g, n.thousandsSeparator)
        }
        var s = ne({}, e.settings),
            n = ne(e.settings, fa, s),
            i = n.min < 0;
        return e.getVal = function(t) {
            var a = new RegExp(n.thousandsSeparator, "g"),
                s = e._getVal(t),
                i = (s + "").replace(n.decimalSeparator, ".").replace(a, "");
            return S(i) ? +i : s
        }, {
            template: (i ? "{sign}" : "") + n.prefix.replace(/d/g, "\\d") + Array((Math.floor(Math.max(n.max, Math.abs(n.min))) + "").length + 1).join("d") + (n.scale ? "." + Array(n.scale + 1).join("d") : "") + n.suffix.replace(/d/g, "\\d"),
            leftKey: i ? {
                text: "-/+",
                variable: "sign:-:",
                track: !1
            } : void 0,
            parseValue: function(e) {
                var t, a, s = e || n.defaultValue,
                    i = [];
                if (s && (a = (s = (s + "").replace(n.decimalSeparator, ".").replace(n.thousandsSeparator, "")).match(/\d+\.?\d*/g)))
                    for (a = (+a[0]).toFixed(n.scale), t = 0; t < a.length; t++) "." != a[t] && (+a[t] ? i.push(+a[t]) : i.length && i.push(0));
                return e < 0 && i.push("sign:-"), i
            },
            formatValue: function(e, s) {
                var i = a(e);
                return (t(e, s && "-" == s.sign) < 0 ? "-" : "") + (n.returnAffix ? n.prefix + i + n.suffix : i)
            },
            validate: function(s) {
                var i = s.values,
                    r = a(i),
                    o = t(i, s.variables && "-" == s.variables.sign),
                    l = [];
                return i.length || n.allowLeadingZero || l.push(0), e.isVisible() && ee(".mbsc-np-dsp", e._markup).html((s.variables.sign || "") + n.prefix + r + n.suffix), {
                    disabled: l,
                    invalid: o > n.max || o < n.min || !!n.invalid && -1 != e._indexOf(n.invalid, o)
                }
            }
        }
    };
    var ba = ["h", "m", "s"],
        va = {
            min: 0,
            max: 362439,
            defaultValue: 0,
            hourTextShort: "h",
            minuteTextShort: "m",
            secTextShort: "s"
        };
    ua.timespan = function(e) {
        var t = ne({}, e.settings),
            a = ne(e.settings, va, t),
            s = {
                h: a.hourTextShort.replace(/d/g, "\\d"),
                m: a.minuteTextShort.replace(/d/g, "\\d"),
                s: a.secTextShort.replace(/d/g, "\\d")
            },
            n = 'd<span class="mbsc-np-sup mbsc-np-time">' + s.s + "</span>";

        function i(e) {
            var t, a = "",
                n = 3600;
            return ee(ba).each(function(i, r) {
                t = Math.floor(e / n), e -= t * n, n /= 60, (t > 0 || "s" == r && !a) && (a = a + (a ? " " : "") + t + s[r])
            }), a
        }
        return a.max > 9 && (n = "d" + n), a.max > 99 && (n = '<span class="mbsc-np-ts-m">' + (a.max > 639 ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + s.m + "</span>" + n), a.max > 6039 && (n = '<span class="mbsc-np-ts-h">' + (a.max > 38439 ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + s.h + "</span>" + n), e.setVal = function(t, a, s, n) {
            return S(t) && (t = i(t)), e._setVal(t, a, s, n)
        }, e.getVal = function(t) {
            return e._hasValue || t ? pa(e.getArrayVal(t)) : null
        }, {
            template: n,
            parseValue: function(e) {
                var t, n = e || i(a.defaultValue),
                    r = [];
                return n && ee(ba).each(function(e, a) {
                    (t = new RegExp("(\\d+)" + s[a], "gi").exec(n)) ? (t = +t[1]) > 9 ? (r.push(Math.floor(t / 10)), r.push(t % 10)) : (r.length && r.push(0), (t || r.length) && r.push(t)): r.length && (r.push(0), r.push(0))
                }), r
            },
            formatValue: function(e) {
                return i(pa(e))
            },
            validate: function(t) {
                var s = t.values,
                    n = pa(s.slice(0)),
                    i = [];
                return s.length || i.push(0), {
                    disabled: i,
                    invalid: n > a.max || n < a.min || !!a.invalid && -1 != e._indexOf(a.invalid, +n)
                }
            }
        }
    };
    var ga = {
        timeFormat: "hh:ii A",
        amText: "am",
        pmText: "pm"
    };
    ua.time = function(e) {
        var t = ne({}, e.settings),
            a = ne(e.settings, ga, t),
            s = a.timeFormat.split(":"),
            n = a.timeFormat.match(/a/i),
            i = n ? "a" == n[0] ? a.amText : a.amText.toUpperCase() : "",
            r = n ? "a" == n[0] ? a.pmText : a.pmText.toUpperCase() : "",
            o = 0,
            l = a.min ? "" + a.min.getHours() : "",
            c = a.max ? "" + a.max.getHours() : "",
            d = a.min ? "" + (a.min.getMinutes() < 10 ? "0" + a.min.getMinutes() : a.min.getMinutes()) : "",
            m = a.max ? "" + (a.max.getMinutes() < 10 ? "0" + a.max.getMinutes() : a.max.getMinutes()) : "",
            u = a.min ? "" + (a.min.getSeconds() < 10 ? "0" + a.min.getSeconds() : a.min.getSeconds()) : "",
            h = a.max ? "" + (a.max.getSeconds() < 10 ? "0" + a.max.getSeconds() : a.max.getSeconds()) : "";

        function f(e, t) {
            var a, s = "";
            for (a = 0; a < e.length; ++a) s += e[a] + (a % 2 == (e.length % 2 == 1 ? 0 : 1) && a != e.length - 1 ? ":" : "");
            return ee.each(t, function(e, t) {
                s += " " + t
            }), s
        }
        return a.min && a.min.setFullYear(2014, 7, 20), a.max && a.max.setFullYear(2014, 7, 20), {
            placeholder: "-",
            allowLeadingZero: !0,
            template: (3 == s.length ? "dd:dd:dd" : 2 == s.length ? "dd:dd" : "dd") + (n ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ""),
            leftKey: n ? {
                text: i,
                variable: "ampm:" + i,
                value: "00"
            } : {
                text: ":00",
                value: "00"
            },
            rightKey: n ? {
                text: r,
                variable: "ampm:" + r,
                value: "00"
            } : {
                text: ":30",
                value: "30"
            },
            parseValue: function(e) {
                var t, s, o = e || a.defaultValue,
                    l = [];
                if (o) {
                    if (s = (o += "").match(/\d/g))
                        for (t = 0; t < s.length; t++) l.push(+s[t]);
                    n && l.push("ampm:" + (o.match(new RegExp(a.pmText, "gi")) ? r : i))
                }
                return l
            },
            formatValue: function(e, t) {
                return f(e, t)
            },
            validate: function(t) {
                var i = t.values,
                    r = f(i, t.variables),
                    p = i.length >= 3 ? new Date(2014, 7, 20, "" + i[0] + (i.length % 2 == 0 ? i[1] : ""), "" + i[i.length % 2 == 0 ? 2 : 1] + i[i.length % 2 == 0 ? 3 : 2]) : "";
                return {
                    disabled: function(e) {
                        var t, i, r, f, p, b, v, g, x, T, y = [],
                            _ = 2 * s.length;
                        if (o = _, e.length || (n && (y.push(0), y.push(a.leftKey.value)), y.push(a.rightKey.value)), !n && (_ - e.length < 2 || 1 != e[0] && (e[0] > 2 || e[1] > 3) && _ - e.length <= 2) && (y.push("30"), y.push("00")), (n ? e[0] > 1 || e[1] > 2 : 1 != e[0] && (e[0] > 2 || e[1] > 3)) && e[0] && (e.unshift(0), o = _ - 1), e.length == _)
                            for (t = 0; t <= 9; ++t) y.push(t);
                        else if (1 == e.length && n && 1 == e[0] || e.length && e.length % 2 == 0 || !n && 2 == e[0] && e[1] > 3 && e.length % 2 == 1)
                            for (t = 6; t <= 9; ++t) y.push(t);
                        if (x = void 0 !== e[1] ? "" + e[0] + e[1] : "", T = +m == +(void 0 !== e[3] ? "" + e[2] + e[3] : ""), a.invalid)
                            for (t = 0; t < a.invalid.length; ++t)
                                if (b = a.invalid[t].getHours(), v = a.invalid[t].getMinutes(), g = a.invalid[t].getSeconds(), b == +x) {
                                    if (2 == s.length && (v < 10 ? 0 : +("" + v)[0]) == +e[2]) {
                                        y.push(v < 10 ? v : +("" + v)[1]);
                                        break
                                    }
                                    if ((g < 10 ? 0 : +("" + g)[0]) == +e[4]) {
                                        y.push(g < 10 ? g : +("" + g)[1]);
                                        break
                                    }
                                }
                        if (a.min || a.max) {
                            if (i = +l == +x, p = (r = +c == +x) && T, f = i && T, 0 === e.length) {
                                for (t = n ? 2 : l > 19 ? l[0] : 3; t <= (1 == l[0] ? 9 : l[0] - 1); ++t) y.push(t);
                                if (l >= 10 && (y.push(0), 2 == l[0]))
                                    for (t = 3; t <= 9; ++t) y.push(t);
                                if (c && c < 10 || l && l >= 10)
                                    for (t = c && c < 10 ? +c[0] + 1 : 0; t < (l && l >= 10 ? l[0] : 10); ++t) y.push(t)
                            }
                            if (1 == e.length) {
                                if (0 === e[0])
                                    for (t = 0; t < l[0]; ++t) y.push(t);
                                if (l && 0 !== e[0] && (n ? 1 == e[0] : 2 == e[0]))
                                    for (t = n ? 3 : 4; t <= 9; ++t) y.push(t);
                                if (e[0] == l[0])
                                    for (t = 0; t < l[1]; ++t) y.push(t);
                                if (e[0] == c[0] && !n)
                                    for (t = +c[1] + 1; t <= 9; ++t) y.push(t)
                            }
                            if (2 == e.length && (i || r))
                                for (t = r ? +m[0] + 1 : 0; t < (i ? +d[0] : 10); ++t) y.push(t);
                            if (3 == e.length && (r && e[2] == m[0] || i && e[2] == d[0]))
                                for (t = r && e[2] == m[0] ? +m[1] + 1 : 0; t < (i && e[2] == d[0] ? +d[1] : 10); ++t) y.push(t);
                            if (4 == e.length && (f || p))
                                for (t = p ? +h[0] + 1 : 0; t < (f ? +u[0] : 10); ++t) y.push(t);
                            if (5 == e.length && (f && e[4] == u[0] || p && e[4] == h[0]))
                                for (t = p && e[4] == h[0] ? +h[1] + 1 : 0; t < (f && e[4] == u[0] ? +u[1] : 10); ++t) y.push(t)
                        }
                        return y
                    }(i),
                    length: o,
                    invalid: (n ? !new RegExp("^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9]) (?:" + a.amText + "|" + a.pmText + ")$", "i").test(r) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(r)) || !!a.invalid && -1 != e._indexOf(a.invalid, p) || !((!a.min || a.min <= p) && (!a.max || p <= a.max))
                }
            }
        }
    };
    var xa = {
        dateOrder: "mdy",
        dateFormat: "mm/dd/yy",
        delimiter: "/"
    };
    ua.date = function(e) {
        var t, a, s, n, i = [],
            r = ne({}, e.settings),
            o = ne(e.settings, Z, xa, r),
            l = o.dateOrder,
            c = o.min ? "" + (o.getMonth(o.min) + 1) : 0,
            d = o.max ? "" + (o.getMonth(o.max) + 1) : 0,
            m = o.min ? "" + o.getDay(o.min) : 0,
            u = o.max ? "" + o.getDay(o.max) : 0,
            h = o.min ? "" + o.getYear(o.min) : 0,
            f = o.max ? "" + o.getYear(o.max) : 0;
        for (l = (l = (l = l.replace(/y+/gi, "yyyy")).replace(/m+/gi, "mm")).replace(/d+/gi, "dd"), t = l.toUpperCase().indexOf("Y"), a = l.toUpperCase().indexOf("M"), s = l.toUpperCase().indexOf("D"), l = "", i.push({
                val: t,
                n: "yyyy"
            }, {
                val: a,
                n: "mm"
            }, {
                val: s,
                n: "dd"
            }), i.sort(function(e, t) {
                return e.val - t.val
            }), ee.each(i, function(e, t) {
                l += t.n
            }), t = l.indexOf("y"), a = l.indexOf("m"), s = l.indexOf("d"), l = "", n = 0; n < 8; ++n) l += "d", n + 1 != t && n + 1 != a && n + 1 != s || (l += o.delimiter);

        function p(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }

        function b(e) {
            return new Date(+("" + e[t] + e[t + 1] + e[t + 2] + e[t + 3]), +("" + e[a] + e[a + 1]) - 1, +("" + e[s] + e[s + 1]))
        }
        return e.getVal = function(t) {
            return e._hasValue || t ? b(e.getArrayVal(t)) : null
        }, {
            placeholder: "-",
            fill: "ltr",
            allowLeadingZero: !0,
            template: l,
            parseValue: function(e) {
                var t, a = [],
                    s = e || o.defaultValue,
                    n = W(o.dateFormat, s, o);
                if (s)
                    for (t = 0; t < i.length; ++t) a = /m/i.test(i[t].n) ? a.concat(((o.getMonth(n) < 9 ? "0" : "") + (o.getMonth(n) + 1)).split("")) : /d/i.test(i[t].n) ? a.concat(((o.getDay(n) < 10 ? "0" : "") + o.getDay(n)).split("")) : a.concat((o.getYear(n) + "").split(""));
                return a
            },
            formatValue: function(e) {
                return $(o.dateFormat, b(e), o)
            },
            validate: function(n) {
                var i = n.values,
                    r = b(i);
                return {
                    disabled: function(e) {
                        var n, i, r, l, b, v = [],
                            g = void 0 !== e[t + 3] ? "" + e[t] + e[t + 1] + e[t + 2] + e[t + 3] : "",
                            x = void 0 !== e[a + 1] ? "" + e[a] + e[a + 1] : "",
                            T = void 0 !== e[s + 1] ? "" + e[s] + e[s + 1] : "",
                            y = "" + o.getMaxDayOfMonth(g || 2012, x - 1 || 0),
                            _ = h === g && +c == +x,
                            w = f === g && +d == +x;
                        if (o.invalid)
                            for (n = 0; n < o.invalid.length; ++n) {
                                if (r = o.getYear(o.invalid[n]), l = o.getMonth(o.invalid[n]), b = o.getDay(o.invalid[n]), r == +g && l + 1 == +x && (b < 10 ? 0 : +("" + b)[0]) == +e[s]) {
                                    v.push(b < 10 ? b : +("" + b)[1]);
                                    break
                                }
                                if (l + 1 == +x && b == +T && ("" + r).substring(0, 3) == "" + e[t] + e[t + 1] + e[t + 2]) {
                                    v.push(("" + r)[3]);
                                    break
                                }
                                if (r == +g && b == +T && (l < 10 ? 0 : +("" + (l + 1))[0]) == +e[a]) {
                                    v.push(l < 10 ? l : +("" + (l + 1))[1]);
                                    break
                                }
                            }
                        if ("31" != T || e.length != a && e.length != a + 1 || (1 != e[a] ? v.push(2, 4, 6, 9, 11) : v.push(1)), "30" == T && 0 === e[a] && e.length <= a + 1 && v.push(2), e.length == a) {
                            for (n = f === g && +d < 10 ? 1 : 2; n <= 9; ++n) v.push(n);
                            h === g && +c >= 10 && v.push(0)
                        }
                        if (e.length == a + 1) {
                            if (1 == e[a]) {
                                for (n = f === g ? +d[1] + 1 : 3; n <= 9; ++n) v.push(n);
                                if (h == g)
                                    for (n = 0; n < +c[1]; ++n) v.push(n)
                            }
                            if (0 === e[a] && (v.push(0), f === g || h === g))
                                for (n = f === g ? +T > +u ? +d : +d + 1 : 0; n <= (h === g ? +c - 1 : 9); ++n) v.push(n)
                        }
                        if (e.length == s) {
                            for (n = w ? 1 + (+u > 10 ? +u[0] : 0) : +y[0] + 1; n <= 9; ++n) v.push(n);
                            if (_)
                                for (n = 0; n < (+m < 10 ? 0 : m[0]); ++n) v.push(n)
                        }
                        if (e.length == s + 1) {
                            if (e[s] >= 3 || "02" == x)
                                for (n = +y[1] + 1; n <= 9; ++n) v.push(n);
                            if (w && +u[0] == e[s])
                                for (n = +u[1] + 1; n <= 9; ++n) v.push(n);
                            if (_ && m[0] == e[s])
                                for (n = 0; n < +m[1]; ++n) v.push(n);
                            if (0 === e[s] && (v.push(0), w || _))
                                for (n = w ? +u + 1 : 1; n <= (_ ? +m - 1 : 9); ++n) v.push(n)
                        }
                        if (void 0 !== e[t + 2] && "02" == x && "29" == T)
                            for (i = +("" + e[t] + e[t + 1] + e[t + 2] + 0); i <= +("" + e[t] + e[t + 1] + e[t + 2] + 9); ++i) v.push(p(i) ? "" : i % 10);
                        if (e.length == t) {
                            if (o.min)
                                for (n = 0; n < +h[0]; ++n) v.push(n);
                            if (o.max)
                                for (n = +f[0] + 1; n <= 9; ++n) v.push(n);
                            v.push(0)
                        }
                        if (o.min || o.max)
                            for (i = 1; i < 4; ++i)
                                if (e.length == t + i) {
                                    if (e[t + i - 1] == +h[i - 1] && (3 != i || e[t + i - 2] == +h[i - 2]))
                                        for (n = 0; n < +h[i] + (3 == i && e[a + 1] && +c > +x ? 1 : 0); ++n) v.push(n);
                                    if (e[t + i - 1] == +f[i - 1] && (3 != i || e[t + i - 2] == +f[i - 2]))
                                        for (n = +f[i] + (3 == i && +d < +x ? 0 : 1); n <= 9; ++n) v.push(n)
                                }
                        return v
                    }(i),
                    invalid: !("Invalid Date" != r && (!o.min || o.min <= r) && (!o.max || r <= o.max)) || !!o.invalid && -1 != e._indexOf(o.invalid, r)
                }
            }
        }
    }, v("numpad", ha, !1);
    var Ta = {
        autoCorrect: !0,
        showSelector: !0,
        minRange: 1,
        rangeTap: !0,
        fromText: "Start",
        toText: "End"
    };
    Ae.range = function(e) {
        function t(e, t) {
            e && (e.setFullYear(t.getFullYear()), e.setMonth(t.getMonth()), e.setDate(t.getDate()))
        }

        function a(t, a) {
            var s = e._order,
                n = new Date(t);
            return void 0 === s.h && n.setHours(a ? 23 : 0), void 0 === s.i && n.setMinutes(a ? 59 : 0), void 0 === s.s && n.setSeconds(a ? 59 : 0), n.setMilliseconds(a ? 999 : 0), n
        }

        function s(e, t) {
            return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t)
        }

        function n(e) {
            h ? (_ - T > I.maxRange - 1 && (e ? T = new Date(Math.max(b, _ - I.maxRange + 1)) : _ = new Date(Math.min(p, +T + I.maxRange - 1))), _ - T < I.minRange - 1 && (e ? T = new Date(Math.max(b, _ - I.minRange + 1)) : _ = new Date(Math.min(p, +T + I.minRange - 1)))) : (Math.ceil((_ - T) / E) > O && (e ? T = a(Math.max(b, s(_, 1 - O)), !1) : _ = a(Math.min(p, s(T, O - 1)), !0)), Math.ceil((_ - T) / E) < L && (e ? T = a(Math.max(b, s(_, 1 - L)), !1) : _ = a(Math.min(p, s(T, L - 1)), !0)))
        }

        function i(e, t) {
            var a = !0;
            return e && T && _ && (n(V), n(!V)), T && _ || (a = !1), t && o(), a
        }

        function r() {
            S && d && (ee(".mbsc-range-btn", d).removeClass(j).removeAttr("aria-checked"), ee(".mbsc-range-btn", d).eq(V).addClass(j).attr("aria-checked", "true"))
        }

        function o() {
            var e, t, a, s, n, i = 0,
                r = H || !V ? " mbsc-cal-day-hl mbsc-cal-sel-start" : " mbsc-cal-sel-start",
                o = H || V ? " mbsc-cal-day-hl mbsc-cal-sel-end" : " mbsc-cal-sel-end";
            if (g = T ? $(u, T, I) : "", x = _ ? $(u, _, I) : "", d && (ee(".mbsc-range-btn-v-start", d).html(g || "&nbsp;"), ee(".mbsc-range-btn-v-end", d).html(x || "&nbsp;"), e = T ? new Date(T) : null, a = _ ? new Date(_) : null, !e && a && (e = new Date(a)), !a && e && (a = new Date(e)), n = V ? a : e, ee(".mbsc-cal-day-picker .mbsc-cal-day-hl", d).removeClass(z), ee(".mbsc-cal-day-picker .mbsc-selected", d).removeClass("mbsc-cal-sel-start mbsc-cal-sel-end " + j).removeAttr("aria-selected"), e && a))
                for (t = e.setHours(0, 0, 0, 0), s = a.setHours(0, 0, 0, 0); a >= e && i < 126;) ee('.mbsc-cal-day[data-full="' + n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate() + '"]', d).addClass(j + " " + (n.getTime() === t ? r : "") + (n.getTime() === s ? o : "")).attr("aria-selected", "true"), n.setDate(n.getDate() + (V ? -1 : 1)), i++
        }

        function l(e, t) {
            return {
                h: e ? e.getHours() : t ? 23 : 0,
                i: e ? e.getMinutes() : t ? 59 : 0,
                s: e ? e.getSeconds() : t ? 59 : 0
            }
        }
        var c, d, m, u, h, f, p, b, v, g, x, T, y, _, w, M, C, k, S, D = e._startDate,
            N = e._endDate,
            V = 0,
            A = new Date,
            F = ne({}, e.settings),
            I = ne(e.settings, Ta, F),
            P = I.anchor,
            H = I.rangeTap,
            E = 864e5,
            L = Math.max(1, Math.ceil(I.minRange / E)),
            O = Math.max(1, Math.ceil(I.maxRange / E)),
            Y = "mbsc-disabled " + (I.disabledClass || ""),
            j = "mbsc-selected " + (I.selectedClass || ""),
            z = "mbsc-cal-day-hl",
            R = null === I.defaultValue ? [] : I.defaultValue || [new Date(A.setHours(0, 0, 0, 0)), new Date(A.getFullYear(), A.getMonth(), A.getDate() + 6, 23, 59, 59, 999)];
        return H && (I.tabs = !0), c = Oe.call(this, e), u = e._format, h = /time/i.test(I.controls.join(",")), M = "time" === I.controls.join(""), S = 1 != I.controls.length || "calendar" != I.controls[0] || I.showSelector, p = I.max ? a(B(I.max, u, I), !0) : 1 / 0, b = I.min ? a(B(I.min, u, I), !1) : -1 / 0, R[0] = B(R[0], u, I, I.isoParts), R[1] = B(R[0], u, I, I.isoParts), I.startInput && (C = ee(I.startInput).prop("readonly"), e.attachShow(ee(I.startInput).prop("readonly", !0), function() {
            V = 0, I.anchor = P || ee(I.startInput)
        })), I.endInput && (k = ee(I.endInput).prop("readonly"), e.attachShow(ee(I.endInput).prop("readonly", !0), function() {
            V = 1, I.anchor = P || ee(I.endInput)
        })), e._getDayProps = function(e, t) {
            var a = T ? new Date(T.getFullYear(), T.getMonth(), T.getDate()) : null,
                s = _ ? new Date(_.getFullYear(), _.getMonth(), _.getDate()) : null;
            return {
                selected: a && s && e >= a && e <= _,
                cssClass: t.cssClass + " " + ((H || !V) && a && a.getTime() === e.getTime() || (H || V) && s && s.getTime() === e.getTime() ? z : "") + (a && a.getTime() === e.getTime() ? " mbsc-cal-sel-start" : "") + (s && s.getTime() === e.getTime() ? " mbsc-cal-sel-end" : "")
            }
        }, e.setVal = function(t, a, s, n, i) {
            var r = t || [],
                o = t;
            v = !0, T = B(r[0], u, I, I.isoParts), g = T ? $(u, T, I) : "", V || (o = c.parseValue(T, e)), _ = B(r[1], u, I, I.isoParts), x = _ ? $(u, _, I) : "", V && (o = c.parseValue(_, e)), n || (e._startDate = D = T, e._endDate = N = _), e._setVal(o, a, s, n, i)
        }, e.getVal = function(t) {
            return t ? [K(T, I, u), K(_, I, u)] : e._hasValue ? [K(D, I, u), K(N, I, u)] : null
        }, e.setActiveDate = function(t) {
            var a;
            V = "start" == t ? 0 : 1, a = "start" == t ? T : _, e.isVisible() && (r(), H || (ee(".mbsc-cal-table .mbsc-cal-day-hl", d).removeClass(z), a && ee('.mbsc-cal-day[data-full="' + a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate() + '"]', d).addClass(z)), a && (f = !0, e.setDate(a, !1, 1e3, !0)))
        }, e.getValue = e.getVal, ne({}, c, {
            highlight: !1,
            outerMonthChange: !1,
            formatValue: function() {
                return g + (I.endInput ? "" : x ? " - " + x : "")
            },
            parseValue: function(t) {
                var a = t ? t.split(" - ") : [];
                return I.defaultValue = R[1], N = W(u, I.endInput ? ee(I.endInput).val() : a[1], I), I.defaultValue = R[0], D = W(u, I.startInput ? ee(I.startInput).val() : a[0], I), I.defaultValue = R[V], g = D ? $(u, D, I) : "", x = N ? $(u, N, I) : "", e._startDate = D, e._endDate = N, c.parseValue(V ? N : D, e)
            },
            onFill: function(t) {
                var a;
                a = t.change, e._startDate = D = T, e._endDate = N = _, I.startInput && (ee(I.startInput).val(g), a && ee(I.startInput).trigger("change")), I.endInput && (ee(I.endInput).val(x), a && ee(I.endInput).trigger("change"))
            },
            onBeforeClose: function(t) {
                if ("set" === t.button && !i(!0, !0)) return e.setActiveDate(V ? "start" : "end"), !1
            },
            onHide: function() {
                c.onHide.call(e), V = 0, d = null, I.anchor = P
            },
            onClear: function() {
                H && (V = 0)
            },
            onBeforeShow: function() {
                T = D || R[0], _ = N || R[1], y = l(T, 0), w = l(_, 1), I.counter && (I.headerText = function() {
                    var e = T && _ ? Math.max(1, Math.round((new Date(_).setHours(0, 0, 0, 0) - new Date(T).setHours(0, 0, 0, 0)) / 864e5) + 1) : 0;
                    return (e > 1 && I.selectedPluralText || I.selectedText).replace(/{count}/, e)
                }), v = !0
            },
            onMarkupReady: function(t) {
                var a;
                T && (f = !0, e.setDate(T, !1, 0, !0), T = e.getDate(!0)), _ && (f = !0, e.setDate(_, !1, 0, !0), _ = e.getDate(!0)), (V && _ || !V && T) && (f = !0, e.setDate(V ? _ : T, !1, 0, !0)), o(), c.onMarkupReady.call(this, t), (d = ee(t.target)).addClass("mbsc-range"), S && (a = '<div class="mbsc-range-btn-t" role="radiogroup"><div class="mbsc-range-btn-c mbsc-range-btn-start"><div role="radio" data-select="start" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + I.fromText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-start">' + (g || "&nbsp;") + '</div></div></div><div class="mbsc-range-btn-c mbsc-range-btn-end"><div role="radio" data-select="end" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + I.toText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-end">' + (x || "&nbsp;") + "</div></div></div></div>", I.headerText ? ee(".mbsc-fr-hdr", d).after(a) : ee(".mbsc-fr-w", d).prepend(a), r()), ee(".mbsc-range-btn", d).on("touchstart click", function(t) {
                    fe(t, this) && (e._showDayPicker(), e.setActiveDate(ee(this).attr("data-select")))
                })
            },
            onDayChange: function(e) {
                e.active = V ? "end" : "start", m = !0
            },
            onSetDate: function(s) {
                var n;
                f || (n = a(s.date, V), v && !m || (H && m && (1 == V && n < T && (V = 0), V ? n.setHours(w.h, w.i, w.s, 999) : n.setHours(y.h, y.i, y.s, 0)), V ? (_ = new Date(n), w = l(_)) : (T = new Date(n), y = l(T)), M && I.autoCorrect && (t(T, n), t(_, n)), H && m && !V && (_ = null))), M && !I.autoCorrect && _ < T && (_ = new Date(_.setDate(_.getDate() + 1))), e._isValid = i(v || m || I.autoCorrect, !f), s.active = V ? "end" : "start", !f && H && (m && (V = V ? 0 : 1), r()), e.isVisible() && (e._isValid ? ee(".mbsc-fr-btn-s .mbsc-fr-btn", e._markup).removeClass(Y) : ee(".mbsc-fr-btn-s .mbsc-fr-btn", e._markup).addClass(Y)), m = !1, v = !1, f = !1
            },
            onTabChange: function(t) {
                "calendar" != t.tab && e.setDate(V ? _ : T, !1, 1e3, !0), i(!0, !0)
            },
            onDestroy: function() {
                ee(I.startInput).prop("readonly", C), ee(I.endInput).prop("readonly", k)
            }
        })
    }, v("range", Pe), v("scroller", Pe, !1), v("scrollview", la, !1);
    var ya = 0;

    function _a(e, t, a) {
        "jsonp" == a ? function(e, t) {
            var a = document.createElement("script"),
                s = "mbscjsonp" + ++ya;
            window[s] = function(e) {
                a.parentNode.removeChild(a), delete window[s], e && t(e)
            }, a.src = e + (e.indexOf("?") >= 0 ? "&" : "?") + "callback=" + s, document.body.appendChild(a)
        }(e, t) : function(e, t) {
            var a = new XMLHttpRequest;
            a.open("GET", e, !0), a.onload = function() {
                this.status >= 200 && this.status < 400 && t(JSON.parse(this.response))
            }, a.onerror = function() {}, a.send()
        }(e, t)
    }
    r.getJson = _a;
    var wa = {
        inputClass: "",
        invalid: [],
        rtl: !1,
        showInput: !0,
        groupLabel: "Groups",
        dataHtml: "html",
        dataText: "text",
        dataValue: "value",
        dataGroup: "group",
        dataDisabled: "disabled",
        filterPlaceholderText: "Type to filter",
        filterEmptyText: "No results",
        filterClearIcon: "material-close"
    };
    Ae.select = function(e) {
        var t, a, s, n, i, r, o, l, c, d, m, u, h, f, p = {},
            b = this,
            v = ee(b),
            g = ne({}, e.settings),
            x = ne(e.settings, wa, g),
            T = ee('<div class="mbsc-sel-empty">' + x.filterEmptyText + "</div>"),
            y = x.readonly,
            _ = {},
            w = x.layout || (/top|bottom|inline/.test(x.display) || x.filter ? "liquid" : ""),
            N = "liquid" == w,
            V = S(x.select) ? x.select : "multiple" == x.select || v.prop("multiple"),
            A = V || !!x.filter && 1,
            F = this.id + "_dummy",
            I = ee('label[for="' + this.id + '"]').attr("for", F),
            P = void 0 !== x.label ? x.label : I.length ? I.text() : v.attr("name"),
            H = !!x.data,
            E = H ? !!x.group : ee("optgroup", v).length,
            L = x.group,
            O = E && L && !1 !== L.groupWheel,
            Y = E && L && O && !0 === L.clustered,
            j = E && (!L || !1 !== L.header && !Y),
            z = v.val() || (V ? [] : [""]),
            $ = [];

        function W(e) {
            var t, n, i, r, c, d, m = 0,
                h = 0,
                f = {};
            if (_ = {}, l = {}, u = [], o = [], $.length = 0, H) ee.each(a, function(a, s) {
                c = s[x.dataText], n = s[x.dataHtml], d = s[x.dataValue], i = s[x.dataGroup], r = {
                    value: d,
                    html: n,
                    text: c,
                    index: a
                }, _[d] = r, e && !Z(c, e) || (u.push(r), E && (void 0 === f[i] ? (t = {
                    text: i,
                    value: h,
                    options: [],
                    index: h
                }, l[h] = t, f[i] = h, o.push(t), h++) : t = l[f[i]], Y && (r.index = t.options.length), r.group = f[i], t.options.push(r)), s[x.dataDisabled] && $.push(d))
            });
            else if (E) {
                var p = !0;
                ee("optgroup", v).each(function(t) {
                    l[t] = {
                        text: this.label,
                        value: t,
                        options: [],
                        index: t
                    }, p = !0, ee("option", this).each(function(a) {
                        r = {
                            value: this.value,
                            text: this.text,
                            index: Y ? a : m++,
                            group: t
                        }, _[this.value] = r, e && !Z(this.text, e) || (p && (o.push(l[t]), p = !1), u.push(r), l[t].options.push(r), this.disabled && $.push(this.value))
                    })
                })
            } else ee("option", v).each(function(t) {
                r = {
                    value: this.value,
                    text: this.text,
                    index: t
                }, _[this.value] = r, e && !Z(this.text, e) || (u.push(r), this.disabled && $.push(this.value))
            });
            x.defaultValue ? s = x.defaultValue : u.length && (s = u[0].value), j && (u = [], m = 0, ee.each(l, function(e, t) {
                t.options.length && (d = "__group" + e, r = {
                    text: t.text,
                    value: d,
                    group: e,
                    index: m++,
                    cssClass: "mbsc-sel-gr"
                }, _[d] = r, u.push(r), $.push(r.value), ee.each(t.options, function(e, t) {
                    t.index = m++, u.push(t)
                }))
            })), T && (u.length ? T.removeClass("mbsc-sel-empty-v") : T.addClass("mbsc-sel-empty-v"))
        }

        function R(e, t, a) {
            var s, n = [];
            for (s = 0; s < e.length; s++) n.push({
                value: e[s].value,
                display: e[s].html || e[s].text,
                cssClass: e[s].cssClass
            });
            return {
                circular: !1,
                multiple: t,
                data: n,
                label: a
            }
        }

        function J() {
            return R(o, !1, x.groupLabel)
        }

        function q() {
            return R(Y ? l[r].options : u, A, P)
        }

        function K() {
            var e, t, a = [
                []
            ];
            return O && (e = J(), N ? a[0][c] = e : a[c] = [e]), t = q(), N ? a[0][h] = t : a[h] = [t], a
        }

        function B(e) {
            V && (e && D(e) && (e = e.split(",")), ee.isArray(e) && (e = e[0])), m = void 0 === e || null === e || "" === e ? s : e, O && (r = _[m] ? _[m].group : null)
        }

        function U(e) {
            return p[e] || (_[e] ? _[e].text : "")
        }

        function G() {
            var a, s = "",
                n = e.getVal(),
                i = x.formatValue.call(b, e.getArrayVal(), e);
            if (x.filter && "inline" == x.display || t.val(i), v.is("select") && H) {
                if (V)
                    for (a = 0; a < n.length; a++) s += '<option value="' + n[a] + '">' + U(n[a]) + "</option>";
                else s = '<option value="' + n + '">' + i + "</option>";
                v.html(s)
            }
            b !== t[0] && v.val(n)
        }

        function X() {
            var t = {};
            t[h] = q(), f = !0, e.changeWheel(t)
        }

        function Z(e, t) {
            return t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), e.match(new RegExp(t, "ig"))
        }

        function Q(e) {
            return x.data.dataField ? e[x.data.dataField] : x.data.processResponse ? x.data.processResponse(e) : e
        }

        function te(t) {
            var a = {};
            W(t), x.wheels = K(), B(m), a[h] = q(), e._tempWheelArray[h] = m, O && (a[c] = J(), e._tempWheelArray[c] = r), e._isVisible && e.changeWheel(a, 0, !0)
        }
        return e.setVal = function(t, a, s, n, i) {
            A && (null === t || void 0 === t || V || (t = [t]), t && D(t) && (t = t.split(",")), e._tempSelected[h] = k(t), n || (e._selected[h] = k(t)), t = t ? t[0] : null), e._setVal(t, a, s, n, i)
        }, e.getVal = function(t, a) {
            var s;
            return A ? (s = C(t ? e._tempSelected[h] : e._selected[h]), s = V ? s : s.length ? s[0] : null) : s = (s = t ? e._tempWheelArray : e._hasValue ? e._wheelArray : null) ? s[h] : null, V ? s : void 0 !== s ? E && a ? [_[s] ? _[s].group : null, s] : s : null
        }, e.refresh = function(e, t, s) {
            s = s || M, e ? (a = e, d || (x.data = e)) : ee.isArray(x.data) && (a = x.data), !e && d && void 0 === t ? _a(x.data.url, function(e) {
                a = Q(e), te(), s()
            }, x.data.dataType) : (te(t), s())
        }, x.invalid.length || (x.invalid = $), O ? (c = 0, h = 1) : (c = -1, h = 0), A && (V && v.prop("multiple", !0), z && D(z) && (z = z.split(",")), e._selected[h] = k(z)), e._$input && e._$input.remove(), v.next().is("input.mbsc-control") ? t = v.next().removeAttr("tabindex") : x.input ? t = ee(x.input) : (x.filter && "inline" == x.display ? e._$input = ee('<div class="mbsc-sel-input-wrap"><input type="text" id="' + F + '" class="mbsc-control ' + x.inputClass + '" readonly /></div>') : (t = ee('<input type="text" id="' + F + '" class="mbsc-control ' + x.inputClass + '" readonly />'), e._$input = t), x.showInput && (e._$input.insertBefore(v), t || (t = e._$input.find("#" + F)))), e.attachShow(t.attr("placeholder", x.placeholder || "")), t[0] !== b && v.addClass("mbsc-sel-hdn").attr("tabindex", -1), !A || x.rows % 2 || (x.rows = x.rows - 1), x.filter && (n = x.filter.minLength || 0), (d = x.data && x.data.url) ? e.refresh(void 0, void 0, G) : (H && (a = x.data), W(), B(v.val())), {
            layout: w,
            headerText: !1,
            anchor: t,
            compClass: "mbsc-sel" + (O ? " mbsc-sel-gr-whl" : "") + (A ? " mbsc-sel-multi" : ""),
            setOnTap: !O || [!1, !0],
            formatValue: function(t) {
                var a, s = [];
                if (A) {
                    for (a in e._tempSelected[h]) s.push(U(a));
                    return s.join(", ")
                }
                return U(t[h])
            },
            parseValue: function(e) {
                return B(void 0 === e ? v.val() : e), O ? [r, m] : [m]
            },
            validate: function(e) {
                var t = e.index,
                    a = [];
                return a[h] = x.invalid, Y && !f && void 0 === t && X(), f = !1, {
                    disabled: a
                }
            },
            onRead: G,
            onFill: G,
            onMarkupReady: function(e, a) {
                if (x.filter) {
                    var s, r, o, l = ee(".mbsc-fr-w", e.target),
                        c = ee('<span class="mbsc-sel-filter-clear mbsc-ic mbsc-ic-' + x.filterClearIcon + '"></span>');
                    "inline" == x.display ? (s = t, t.parent().find(".mbsc-sel-filter-clear").remove()) : (l.find(".mbsc-fr-c").before('<div class="mbsc-input mbsc-sel-filter-cont mbsc-control-w"><span class="mbsc-input-wrap"><input tabindex="0" type="text" class="mbsc-sel-filter-input mbsc-control"/></span></div>'), s = l.find(".mbsc-sel-filter-input")), i = null, o = s[0], s.prop("readonly", !1).attr("placeholder", x.filterPlaceholderText).parent().append(c), l.find(".mbsc-fr-c").prepend(T), a._activeElm = o, a.tap(c, function() {
                        o.value = "", a.refresh(), c.removeClass("mbsc-sel-filter-show-clear")
                    }), s.on("keydown", function(e) {
                        13 != e.keyCode && 27 != e.keyCode || (e.stopPropagation(), o.blur())
                    }).on("keyup", function() {
                        clearTimeout(r), o.value.length ? c.addClass("mbsc-sel-filter-show-clear") : c.removeClass("mbsc-sel-filter-show-clear"), r = setTimeout(function() {
                            i !== o.value && !1 !== a.trigger("onFilter", {
                                filterText: o.value
                            }) && ((i = o.value).length >= n || !i.length) && (d && x.data.remoteFilter ? _a(x.data.url + encodeURIComponent(i), function(e) {
                                a.refresh(Q(e))
                            }, x.data.dataType) : a.refresh(void 0, i))
                        }, 500)
                    })
                }
            },
            onBeforeShow: function() {
                V && x.counter && (x.headerText = function() {
                    var t = 0;
                    return ee.each(e._tempSelected[h], function() {
                        t++
                    }), (t > 1 && x.selectedPluralText || x.selectedText).replace(/{count}/, t)
                }), B(v.val()), x.filter && W(void 0), e.settings.wheels = K(), f = !0
            },
            onWheelGestureStart: function(e) {
                e.index == c && (x.readonly = [!1, !0])
            },
            onWheelAnimationEnd: function(t) {
                var a = e.getArrayVal(!0);
                t.index == c ? (x.readonly = y, a[c] != r && (r = a[c], m = l[r].options[0].value, a[h] = m, Y ? X() : e.setArrayVal(a, !1, !1, !0, 1e3))) : t.index == h && a[h] != m && (m = a[h], O && _[m] && _[m].group != r && (r = _[m].group, a[c] = r, e.setArrayVal(a, !1, !1, !0, 1e3)))
            },
            onItemTap: function(e) {
                if (e.index == h && (p[e.value] = _[e.value].text, A && !V && e.selected)) return !1
            },
            onClose: function() {
                d && x.data.remoteFilter && i && e.refresh()
            },
            onDestroy: function() {
                e._$input && e._$input.remove(), v.removeClass("mbsc-sel-hdn").removeAttr("tabindex")
            }
        }
    }, v("select", Pe);
    var Ma = {
        autostart: !1,
        step: 1,
        useShortLabels: !1,
        labels: ["Years", "Months", "Days", "Hours", "Minutes", "Seconds", ""],
        labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Lap",
        hideText: "Hide",
        mode: "countdown"
    };
    Ae.timer = function(e) {
        function t(e) {
            return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds())
        }

        function a(e) {
            var t = 1,
                a = w[e],
                n = a.wheel,
                i = a.prefix,
                r = a.until,
                l = w[_[ee.inArray(e, _) - 1]];
            if (a.index <= w[A].index && (!l || l.limit > V))
                if (M[e] || H[0].push(n), M[e] = 1, n.data = [], n.label = a.label || "", n.cssClass = "mbsc-timer-whl-" + e, V >= a.limit && (t = Math.max(Math.round(V / a.limit), 1), c = t * a.limit), e == A) n.min = 0, n.data = function(e) {
                    return {
                        value: e,
                        display: s(e, i, a.label)
                    }
                }, n.getIndex = function(e) {
                    return e
                };
                else
                    for (o = 0; o <= r; o += t) n.data.push({
                        value: o,
                        display: s(o, i, a.label)
                    })
        }

        function s(e, t, a) {
            return (t || "") + (e < 10 ? "0" : "") + e + '<span class="mbsc-timer-lbl">' + a + "</span>"
        }

        function n(e) {
            var a, s = [],
                n = function(e) {
                    var a = {};
                    if (P && w[A].index > w.days.index) {
                        var s, n, i, r, o = new Date,
                            l = p ? o : I,
                            c = p ? I : o;
                        for (c = t(c), l = t(l), a.years = l.getFullYear() - c.getFullYear(), a.months = l.getMonth() - c.getMonth(), a.days = l.getDate() - c.getDate(), a.hours = l.getHours() - c.getHours(), a.minutes = l.getMinutes() - c.getMinutes(), a.seconds = l.getSeconds() - c.getSeconds(), a.fract = (l.getMilliseconds() - c.getMilliseconds()) / 10, s = _.length; s > 0; s--) n = _[s - 1], i = w[n], r = _[ee.inArray(n, _) - 1], w[r] && a[n] < 0 && (a[r]--, a[n] += "months" == r ? 32 - new Date(l.getFullYear(), l.getMonth(), 32).getDate() : i.until + 1);
                        "months" == A && (a.months += 12 * a.years, delete a.years)
                    } else ee(_).each(function(t, s) {
                        w[s].index <= w[A].index && (a[s] = Math.floor(e / w[s].limit), e -= a[s] * w[s].limit)
                    });
                    return a
                }(e);
            return ee(_).each(function(e, t) {
                M[t] && (a = Math.max(Math.round(V / w[t].limit), 1), s.push(Math.round(n[t] / a) * a))
            }), s
        }

        function i(e) {
            P ? ((h = I - new Date) < 0 ? (h *= -1, p = !0) : p = !1, f = 0, N = !0) : void 0 !== I ? (N = !1, h = 1e3 * I, p = "countdown" != x.mode, e && (f = 0)) : (h = 0, p = "countdown" != x.mode, N = p, e && (f = 0))
        }

        function r() {
            S ? (ee(".mbsc-fr-w", b).addClass("mbsc-timer-running mbsc-timer-locked"), ee(".mbsc-timer-btn-toggle-c > div", b).text(x.stopText), e.buttons.start.icon && ee(".mbsc-timer-btn-toggle-c > div", b).removeClass("mbsc-ic-" + e.buttons.start.icon), e.buttons.stop.icon && ee(".mbsc-timer-btn-toggle-c > div", b).addClass("mbsc-ic-" + e.buttons.stop.icon), "stopwatch" == x.mode && (ee(".mbsc-timer-btn-resetlap-c > div", b).text(x.lapText), e.buttons.reset.icon && ee(".mbsc-timer-btn-resetlap-c > div", b).removeClass("mbsc-ic-" + e.buttons.reset.icon), e.buttons.lap.icon && ee(".mbsc-timer-btn-resetlap-c > div", b).addClass("mbsc-ic-" + e.buttons.lap.icon))) : (ee(".mbsc-fr-w", b).removeClass("mbsc-timer-running"), ee(".mbsc-timer-btn-toggle-c > div", b).text(x.startText), e.buttons.start.icon && ee(".mbsc-timer-btn-toggle-c > div", b).addClass("mbsc-ic-" + e.buttons.start.icon), e.buttons.stop.icon && ee(".mbsc-timer-btn-toggle-c > div", b).removeClass("mbsc-ic-" + e.buttons.stop.icon), "stopwatch" == x.mode && (ee(".mbsc-timer-btn-resetlap-c > div", b).text(x.resetText), e.buttons.reset.icon && ee(".mbsc-timer-btn-resetlap-c > div", b).addClass("mbsc-ic-" + e.buttons.reset.icon), e.buttons.lap.icon && ee(".mbsc-timer-btn-resetlap-c > div", b).removeClass("mbsc-ic-" + e.buttons.lap.icon)))
        }
        var o, l, c, d, m, u, h, f, p, b, v, g = ne({}, e.settings),
            x = ne(e.settings, Ma, g),
            T = x.useShortLabels ? x.labelsShort : x.labels,
            y = ["resetlap", "toggle"],
            _ = ["years", "months", "days", "hours", "minutes", "seconds", "fract"],
            w = {
                years: {
                    index: 6,
                    until: 10,
                    limit: 31536e6,
                    label: T[0],
                    wheel: {}
                },
                months: {
                    index: 5,
                    until: 11,
                    limit: 2592e6,
                    label: T[1],
                    wheel: {}
                },
                days: {
                    index: 4,
                    until: 31,
                    limit: 864e5,
                    label: T[2],
                    wheel: {}
                },
                hours: {
                    index: 3,
                    until: 23,
                    limit: 36e5,
                    label: T[3],
                    wheel: {}
                },
                minutes: {
                    index: 2,
                    until: 59,
                    limit: 6e4,
                    label: T[4],
                    wheel: {}
                },
                seconds: {
                    index: 1,
                    until: 59,
                    limit: 1e3,
                    label: T[5],
                    wheel: {}
                },
                fract: {
                    index: 0,
                    until: 99,
                    limit: 10,
                    label: T[6],
                    prefix: ".",
                    wheel: {}
                }
            },
            M = {},
            C = [],
            k = 0,
            S = !1,
            D = !0,
            N = !1,
            V = Math.max(10, 1e3 * x.step),
            A = x.maxWheel,
            F = "stopwatch" == x.mode || P,
            I = x.targetTime,
            P = I && void 0 !== I.getTime,
            H = [
                []
            ];
        return e.start = function() {
            if (D && e.reset(), !S) {
                if (i(), !N && f >= h) return;
                S = !0, D = !1, m = new Date, d = f, x.readonly = !0, e.setVal(n(p ? f : h - f), !0, !0, !1, 100), l = setInterval(function() {
                    f = new Date - m + d, e.setVal(n(p ? f : h - f), !0, !0, !1, Math.min(100, c - 10)), !N && f + c >= h && (clearInterval(l), setTimeout(function() {
                        e.stop(), f = h, e.setVal(n(p ? f : 0), !0, !0, !1, 100), e.trigger("onFinish", {
                            time: h
                        }), D = !0
                    }, h - f))
                }, c), r(), e.trigger("onStart")
            }
        }, e.stop = function() {
            S && (S = !1, clearInterval(l), f = new Date - m + d, r(), e.trigger("onStop", {
                ellapsed: f
            }))
        }, e.toggle = function() {
            S ? e.stop() : e.start()
        }, e.reset = function() {
            e.stop(), f = 0, C = [], k = 0, e.setVal(n(p ? 0 : h), !0, !0, !1, 1e3), e.settings.readonly = F, D = !0, F || ee(".mbsc-fr-w", b).removeClass("mbsc-timer-locked"), e.trigger("onReset")
        }, e.lap = function() {
            S && (u = new Date - m + d, v = u - k, k = u, C.push(u), e.trigger("onLap", {
                ellapsed: u,
                lap: v,
                laps: C
            }))
        }, e.resetlap = function() {
            S && "stopwatch" == x.mode ? e.lap() : e.reset()
        }, e.getTime = function() {
            return h
        }, e.setTime = function(e) {
            I = e / 1e3, h = e
        }, e.getEllapsedTime = function() {
            return D ? 0 : S ? new Date - m + d : f
        }, e.setEllapsedTime = function(t, a) {
            D || (d = f = t, m = new Date, e.setVal(n(p ? f : h - f), !0, a, !1, 1e3))
        }, i(!0), A || h || (A = "minutes"), "inline" !== x.display && y.unshift("hide"), A || ee(_).each(function(e, t) {
            if (!A && h >= w[t].limit) return A = t, !1
        }), ee(_).each(function(e, t) {
            a(t)
        }), c = Math.max(97, c), x.autostart && setTimeout(function() {
            e.start()
        }, 0), e.handlers.toggle = e.toggle, e.handlers.start = e.start, e.handlers.stop = e.stop, e.handlers.resetlap = e.resetlap, e.handlers.reset = e.reset, e.handlers.lap = e.lap, e.buttons.toggle = {
            parentClass: "mbsc-timer-btn-toggle-c",
            text: x.startText,
            icon: x.startIcon,
            handler: "toggle"
        }, e.buttons.start = {
            text: x.startText,
            icon: x.startIcon,
            handler: "start"
        }, e.buttons.stop = {
            text: x.stopText,
            icon: x.stopIcon,
            handler: "stop"
        }, e.buttons.reset = {
            text: x.resetText,
            icon: x.resetIcon,
            handler: "reset"
        }, e.buttons.lap = {
            text: x.lapText,
            icon: x.lapIcon,
            handler: "lap"
        }, e.buttons.resetlap = {
            parentClass: "mbsc-timer-btn-resetlap-c",
            text: x.resetText,
            icon: x.resetIcon,
            handler: "resetlap"
        }, e.buttons.hide = {
            parentClass: "mbsc-timer-btn-hide-c",
            text: x.hideText,
            icon: x.closeIcon,
            handler: "cancel"
        }, {
            wheels: H,
            headerText: !1,
            readonly: F,
            buttons: y,
            compClass: "mbsc-timer",
            parseValue: function() {
                return n(p ? 0 : h)
            },
            formatValue: function(e) {
                var t = "",
                    a = 0;
                return ee(_).each(function(s, n) {
                    "fract" != n && M[n] && (t += e[a] + ("seconds" == n && M.fract ? "." + e[a + 1] : "") + " " + T[s] + " ", a++)
                }), t
            },
            validate: function(e) {
                var t = e.values,
                    a = e.index,
                    s = 0;
                D && void 0 !== a && (I = 0, ee(_).each(function(e, a) {
                    M[a] && (I += w[a].limit * t[s], s++)
                }), I /= 1e3, i(!0))
            },
            onBeforeShow: function() {
                x.showLabel = !0
            },
            onMarkupReady: function(e) {
                b = ee(e.target), r(), F && ee(".mbsc-fr-w", b).addClass("mbsc-timer-locked")
            },
            onPosition: function(e) {
                ee(".mbsc-fr-w", e.target).css("min-width", 0).css("min-width", ee(".mbsc-fr-btn-cont", e.target)[0].offsetWidth)
            },
            onDestroy: function() {
                clearInterval(l)
            }
        }
    }, v("timer", Pe);
    var Ca = {
        wheelOrder: "hhiiss",
        useShortLabels: !1,
        min: 0,
        max: 1 / 0,
        labels: ["Years", "Months", "Days", "Hours", "Minutes", "Seconds"],
        labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs"]
    };
    Ae.timespan = function(e) {
        function t(e) {
            var t = {};
            return ee(f).each(function(a, s) {
                t[s] = g[s] ? Math.floor(e / p[s].limit) : 0, e -= t[s] * p[s].limit
            }), t
        }

        function a(e) {
            var t = !1,
                a = v[g[e] - 1] || 1,
                n = p[e],
                r = n.label,
                o = n.wheel;
            if (o.data = [], o.label = n.label, u.match(new RegExp(n.re + n.re, "i")) && (t = !0), e == x) o.min = l[e], o.max = c[e], o.data = function(e) {
                return {
                    value: e * a,
                    display: s(e * a, t, r)
                }
            }, o.getIndex = function(e) {
                return Math.round(e / a)
            };
            else
                for (i = 0; i <= n.until; i += a) o.data.push({
                    value: i,
                    display: s(i, t, r)
                })
        }

        function s(e, t, a) {
            return (e < 10 && t ? "0" : "") + e + '<span class="mbsc-ts-lbl">' + a + "</span>"
        }

        function n(e) {
            var t = 0;
            return ee.each(b, function(a, s) {
                isNaN(+e[0]) || (t += p[s.v].limit * e[a])
            }), t
        }
        var i, r, o, l, c, d = ne({}, e.settings),
            m = ne(e.settings, Ca, d),
            u = m.wheelOrder,
            h = m.useShortLabels ? m.labelsShort : m.labels,
            f = ["years", "months", "days", "hours", "minutes", "seconds"],
            p = {
                years: {
                    ord: 0,
                    index: 6,
                    until: 10,
                    limit: 31536e6,
                    label: h[0],
                    re: "y",
                    wheel: {}
                },
                months: {
                    ord: 1,
                    index: 5,
                    until: 11,
                    limit: 2592e6,
                    label: h[1],
                    re: "m",
                    wheel: {}
                },
                days: {
                    ord: 2,
                    index: 4,
                    until: 31,
                    limit: 864e5,
                    label: h[2],
                    re: "d",
                    wheel: {}
                },
                hours: {
                    ord: 3,
                    index: 3,
                    until: 23,
                    limit: 36e5,
                    label: h[3],
                    re: "h",
                    wheel: {}
                },
                minutes: {
                    ord: 4,
                    index: 2,
                    until: 59,
                    limit: 6e4,
                    label: h[4],
                    re: "i",
                    wheel: {}
                },
                seconds: {
                    ord: 5,
                    index: 1,
                    until: 59,
                    limit: 1e3,
                    label: h[5],
                    re: "s",
                    wheel: {}
                }
            },
            b = [],
            v = m.steps || [],
            g = {},
            x = "seconds",
            T = m.defaultValue || Math.max(m.min, Math.min(0, m.max)),
            y = [
                []
            ];
        return ee(f).each(function(e, t) {
            (r = u.search(new RegExp(p[t].re, "i"))) > -1 && (b.push({
                o: r,
                v: t
            }), p[t].index > p[x].index && (x = t))
        }), b.sort(function(e, t) {
            return e.o > t.o ? 1 : -1
        }), ee.each(b, function(e, t) {
            g[t.v] = e + 1, y[0].push(p[t.v].wheel)
        }), l = t(m.min), c = t(m.max), ee.each(b, function(e, t) {
            a(t.v)
        }), e.getVal = function(t, a) {
            return a ? e._getVal(t) : e._hasValue || t ? n(e.getArrayVal(t)) : null
        }, {
            showLabel: !0,
            wheels: y,
            compClass: "mbsc-ts",
            parseValue: function(e) {
                var a, s = [];
                return S(e) || !e ? (o = t(e || T), ee.each(b, function(e, t) {
                    s.push(o[t.v])
                })) : ee.each(b, function(t, n) {
                    a = new RegExp("(\\d+)\\s?(" + m.labels[p[n.v].ord] + "|" + m.labelsShort[p[n.v].ord] + ")", "gi").exec(e), s.push(a ? a[1] : 0)
                }), ee(s).each(function(e, t) {
                    s[e] = function(e, t) {
                        return Math.floor(e / t) * t
                    }(t, v[e] || 1)
                }), s
            },
            formatValue: function(e) {
                var t = "";
                return ee.each(b, function(a, s) {
                    t += +e[a] ? e[a] + " " + p[s.v].label + " " : ""
                }), t ? t.replace(/\s+$/g, "") : 0
            },
            validate: function(a) {
                var s, i, r, o, d = a.values,
                    m = a.direction,
                    u = [],
                    h = !0,
                    b = !0;
                return ee(f).each(function(a, f) {
                    if (void 0 !== g[f]) {
                        if (r = g[f] - 1, u[r] = [], o = {}, f != x) {
                            if (h)
                                for (i = c[f] + 1; i <= p[f].until; i++) o[i] = !0;
                            if (b)
                                for (i = 0; i < l[f]; i++) o[i] = !0
                        }
                        d[r] = e.getValidValue(r, d[r], m, o), s = t(n(d)), h = h && s[f] == c[f], b = b && s[f] == l[f], ee.each(o, function(e) {
                            u[r].push(e)
                        })
                    }
                }), {
                    disabled: u
                }
            }
        }
    }, v("timespan", Pe), Ae.treelist = qt, v("treelist", Pe), v("widget", Dt, !1), i.i18n.ar = {
        rtl: !0,
        setText: "تعيين",
        cancelText: "إلغاء",
        clearText: "مسح",
        selectedText: "{count} المحدد",
        dateFormat: "dd/mm/yy",
        dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
        dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
        dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
        dayText: "يوم",
        hourText: "ساعات",
        minuteText: "الدقائق",
        monthNames: ["كانون الثاني", "شهر فبراير", "مارس", "أبريل", "قد", "يونيو", "يوليو", "أغسطس", "سبتمبر", "شهر اكتوبر", "شهر نوفمبر", "ديسمبر"],
        monthNamesShort: ["كانون الثاني", "شهر فبراير", "مارس", "أبريل", "قد", "يونيو", "يوليو", "أغسطس", "سبتمبر", "شهر اكتوبر", "شهر نوفمبر", "ديسمبر"],
        monthText: "شهر",
        secText: "ثواني",
        amText: "ص",
        pmText: "م",
        timeFormat: "hh:ii A",
        yearText: "عام",
        nowText: "الآن",
        firstDay: 0,
        dateText: "تاريخ",
        timeText: "وقت",
        closeText: "إغلاق",
        todayText: "اليوم",
        prevMonthText: "الشهر السابق",
        nextMonthText: "الشهر القادم",
        prevYearText: "السنه السابقة",
        nextYearText: "العام القادم",
        allDayText: "اليوم كله",
        noEventsText: "لا توجد احداث",
        eventText: "الحدث",
        eventsText: "أحداث",
        fromText: "يبدا",
        toText: "ينتهي",
        wholeText: "كامل",
        fractionText: "جزء",
        unitText: "وحدة",
        delimiter: "/",
        decimalSeparator: ".",
        thousandsSeparator: ",",
        labels: ["سنوات", "أشهر", "أيام", "ساعة", "دقائق", "ثواني", ""],
        labelsShort: ["سنوات", "أشهر", "أيام", "ساعة", "دقائق", "ثواني", ""],
        startText: "بدء",
        stopText: "إيقاف",
        resetText: "إعادة ضبط",
        lapText: "الدورة",
        hideText: "إخفاء",
        offText: "إيقاف",
        onText: "تشغيل",
        backText: "رجوع",
        undoText: "تراجع"
    }, i.i18n.bg = {
        setText: "Задаване",
        cancelText: "Отмяна",
        clearText: "Изчистване",
        selectedText: "{count} подбран",
        dateFormat: "dd.mm.yy",
        dayNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
        dayNamesShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
        dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
        dayText: "ден",
        delimiter: ".",
        hourText: "час",
        minuteText: "минута",
        monthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
        monthNamesShort: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек"],
        monthText: "месец",
        secText: "секунди",
        timeFormat: "H:ii",
        yearText: "година",
        nowText: "Сега",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Дата",
        timeText: "път",
        todayText: "днес",
        prevMonthText: "Предишния месец",
        nextMonthText: "Следващият месец",
        prevYearText: "Предходната година",
        nextYearText: "Следващата година",
        closeText: "затвори",
        eventText: "Събитие",
        eventsText: "Събития",
        allDayText: "Цял ден",
        noEventsText: "Няма събития",
        fromText: "ОТ",
        toText: "ДО",
        wholeText: "цяло",
        fractionText: "фракция",
        unitText: "единица",
        labels: ["Години", "месеца", "дни", "часа", "минути", "секунди", ""],
        labelsShort: ["Години", "месеца", "дни", "часа", "минути", "секунди", ""],
        startText: "Старт",
        stopText: "Стоп",
        resetText: "Нулиране",
        lapText: "Обиколка",
        hideText: "крия",
        backText: "връщане",
        undoText: "ОТМЯНА",
        offText: "ИЗКЛ",
        onText: "ВКЛ",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.ca = {
        setText: "Acceptar",
        cancelText: "Cancel·lar",
        clearText: "Esborrar",
        selectedText: "{count} seleccionat",
        selectedPluralText: "{count} seleccionats",
        dateFormat: "dd/mm/yy",
        dayNames: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
        dayNamesShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
        dayNamesMin: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
        dayText: "Dia",
        hourText: "Hores",
        minuteText: "Minuts",
        monthNames: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
        monthNamesShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
        monthText: "Mes",
        secText: "Segons",
        timeFormat: "HH:ii",
        yearText: "Any",
        nowText: "Ara",
        pmText: "pm",
        amText: "am",
        todayText: "Avui",
        firstDay: 1,
        dateText: "Data",
        timeText: "Temps",
        closeText: "Tancar",
        allDayText: "Tot el dia",
        noEventsText: "Cap esdeveniment",
        fromText: "Iniciar",
        toText: "Final",
        wholeText: "Sencer",
        fractionText: "Fracció",
        unitText: "Unitat",
        labels: ["Anys", "Mesos", "Dies", "Hores", "Minuts", "Segons", ""],
        labelsShort: ["Anys", "Mesos", "Dies", "Hrs", "Mins", "Secs", ""],
        startText: "Iniciar",
        stopText: "Aturar",
        resetText: "Reiniciar",
        lapText: "Volta",
        hideText: "Amagar",
        backText: "Enrere",
        undoText: "Desfés",
        offText: "No",
        onText: "Si"
    }, i.i18n.cs = {
        setText: "Zadej",
        cancelText: "Storno",
        clearText: "Vymazat",
        selectedText: "Označený: {count}",
        dateFormat: "dd.mm.yy",
        dayNames: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
        dayNamesShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
        dayNamesMin: ["N", "P", "Ú", "S", "Č", "P", "S"],
        dayText: "Den",
        hourText: "Hodiny",
        minuteText: "Minuty",
        monthNames: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
        monthNamesShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Spr", "Zář", "Říj", "Lis", "Pro"],
        monthText: "Měsíc",
        secText: "Sekundy",
        timeFormat: "HH:ii",
        yearText: "Rok",
        nowText: "Teď",
        amText: "am",
        pmText: "pm",
        todayText: "Dnes",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Čas",
        closeText: "Zavřít",
        allDayText: "Celý den",
        noEventsText: "Žádné události",
        fromText: "Začátek",
        toText: "Konec",
        wholeText: "Celý",
        fractionText: "Část",
        unitText: "Jednotka",
        labels: ["Roky", "Měsíce", "Dny", "Hodiny", "Minuty", "Sekundy", ""],
        labelsShort: ["Rok", "Měs", "Dny", "Hod", "Min", "Sec", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetovat",
        lapText: "Etapa",
        hideText: "Schovat",
        backText: "Zpět",
        undoText: "Zpět",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.da = {
        setText: "Sæt",
        cancelText: "Annuller",
        clearText: "Ryd",
        selectedText: "{count} valgt",
        selectedPluralText: "{count} valgt",
        dateFormat: "dd/mm/yy",
        dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
        dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
        dayText: "Dag",
        hourText: "Timer",
        minuteText: "Minutter",
        monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        monthText: "Måned",
        secText: "Sekunder",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH.ii",
        yearText: "År",
        nowText: "Nu",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Dato",
        timeText: "Tid",
        closeText: "Luk",
        allDayText: "Hele dagen",
        noEventsText: "Ingen begivenheder",
        fromText: "Start",
        toText: "Slut",
        wholeText: "Hele",
        fractionText: "Dele",
        unitText: "Enhed",
        labels: ["År", "Måneder", "Dage", "Timer", "Minutter", "Sekunder", ""],
        labelsShort: ["År", "Mdr", "Dg", "Timer", "Min", "Sek", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Nulstil",
        lapText: "Omgang",
        hideText: "Skjul",
        offText: "Fra",
        onText: "Til",
        backText: "Tilbage",
        undoText: "Fortryd"
    }, i.i18n.de = {
        setText: "OK",
        cancelText: "Abbrechen",
        clearText: "Löschen",
        selectedText: "{count} ausgewählt",
        dateFormat: "dd.mm.yy",
        dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        dayNamesMin: ["S", "M", "D", "M", "D", "F", "S"],
        dayText: "Tag",
        delimiter: ".",
        hourText: "Stunde",
        minuteText: "Minuten",
        monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        monthText: "Monat",
        secText: "Sekunden",
        timeFormat: "HH:ii",
        yearText: "Jahr",
        nowText: "Jetzt",
        pmText: "pm",
        amText: "am",
        todayText: "Heute",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Zeit",
        closeText: "Schließen",
        allDayText: "Ganztägig",
        noEventsText: "Keine Ereignisse",
        fromText: "Von",
        toText: "Bis",
        wholeText: "Ganze Zahl",
        fractionText: "Bruchzahl",
        unitText: "Maßeinheit",
        labels: ["Jahre", "Monate", "Tage", "Stunden", "Minuten", "Sekunden", ""],
        labelsShort: ["Jahr.", "Mon.", "Tag.", "Std.", "Min.", "Sek.", ""],
        startText: "Starten",
        stopText: "Stoppen",
        resetText: "Zurücksetzen",
        lapText: "Lap",
        hideText: "Ausblenden",
        backText: "Zurück",
        undoText: "Rückgängig machen",
        offText: "Aus",
        onText: "Ein",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.el = {
        setText: "Ορισμος",
        cancelText: "Ακυρωση",
        clearText: "Διαγραφη",
        selectedText: "{count} επιλεγμένα",
        dateFormat: "dd/mm/yy",
        dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
        dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
        dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
        dayText: "ημέρα",
        delimiter: "/",
        hourText: "ώρα",
        minuteText: "λεπτό",
        monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
        monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
        monthText: "Μήνας",
        secText: "δευτερόλεπτα",
        timeFormat: "H:ii",
        yearText: "έτος",
        nowText: "τώρα",
        pmText: "μμ",
        amText: "πμ",
        firstDay: 1,
        dateText: "Ημερομηνία",
        timeText: "φορά",
        todayText: "Σήμερα",
        prevMonthText: "Προηγούμενο μήνα",
        nextMonthText: "Επόμενο μήνα",
        prevYearText: "Προηγούμενο έτος",
        nextYearText: "Επόμενο έτος",
        closeText: "Κλείσιμο",
        eventText: "Γεγονότα",
        eventsText: "Γεγονότα",
        allDayText: "Ολοήμερο",
        noEventsText: "Δεν υπάρχουν γεγονότα",
        fromText: "Αρχή",
        toText: "Τέλος",
        wholeText: "Ολόκληρος",
        fractionText: "κλάσμα",
        unitText: "Μονάδα",
        labels: ["Χρόνια", "Μήνες", "Ημέρες", "Ωρες", "Λεπτά", "δευτερόλεπτα", ""],
        labelsShort: ["Χρόνια", "Μήνες", "Ημέρες", "Ωρες", "Λεπτά", "δευτ", ""],
        startText: "΄Εναρξη",
        stopText: "Διακοπή",
        resetText: "Επαναφορά",
        lapText: "Γύρος",
        hideText: "κρύβω",
        backText: "Πίσω",
        undoText: "Αναιρεση",
        offText: "Ανενεργό",
        onText: "Ενεργό",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n["en-GB"] = i.i18n["en-UK"] = {
        dateFormat: "dd/mm/yy",
        timeFormat: "HH:ii"
    }, i.i18n.es = {
        setText: "Aceptar",
        cancelText: "Cancelar",
        clearText: "Borrar",
        selectedText: "{count} seleccionado",
        selectedPluralText: "{count} seleccionados",
        dateFormat: "dd/mm/yy",
        dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        dayNamesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
        dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
        dayText: "Día",
        hourText: "Horas",
        minuteText: "Minutos",
        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        monthText: "Mes",
        secText: "Segundos",
        timeFormat: "HH:ii",
        yearText: "A&ntilde;o",
        nowText: "Ahora",
        pmText: "pm",
        amText: "am",
        todayText: "Hoy",
        firstDay: 1,
        dateText: "Fecha",
        timeText: "Tiempo",
        closeText: "Cerrar",
        allDayText: "Todo el día",
        noEventsText: "No hay eventos",
        fromText: "Iniciar",
        toText: "Final",
        wholeText: "Entero",
        fractionText: "Fracción",
        unitText: "Unidad",
        labels: ["Años", "Meses", "Días", "Horas", "Minutos", "Segundos", ""],
        labelsShort: ["Año", "Mes", "Día", "Hora", "Min", "Seg", ""],
        startText: "Iniciar",
        stopText: "Deténgase",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "Atrás",
        undoText: "Deshacer",
        offText: "No",
        onText: "Sí",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    var ka = {
        gDaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        jDaysInMonth: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29],
        jalaliToGregorian: function(e, t, a) {
            var s, n = (e = parseInt(e)) - 979,
                i = (t = parseInt(t)) - 1,
                r = (a = parseInt(a)) - 1,
                o = 365 * n + 8 * parseInt(n / 33) + parseInt((n % 33 + 3) / 4);
            for (s = 0; s < i; ++s) o += ka.jDaysInMonth[s];
            var l = (o += r) + 79,
                c = 1600 + 400 * parseInt(l / 146097),
                d = !0;
            for ((l %= 146097) >= 36525 && (l--, c += 100 * parseInt(l / 36524), (l %= 36524) >= 365 ? l++ : d = !1), c += 4 * parseInt(l / 1461), (l %= 1461) >= 366 && (d = !1, l--, c += parseInt(l / 365), l %= 365), s = 0; l >= ka.gDaysInMonth[s] + (1 == s && d); s++) l -= ka.gDaysInMonth[s] + (1 == s && d);
            return [c, s + 1, l + 1]
        },
        checkDate: function(e, t, a) {
            return !(e < 0 || e > 32767 || t < 1 || t > 12 || a < 1 || a > ka.jDaysInMonth[t - 1] + (12 == t && (e - 979) % 33 % 4 == 0))
        },
        gregorianToJalali: function(e, t, a) {
            var s, n = (e = parseInt(e)) - 1600,
                i = (t = parseInt(t)) - 1,
                r = (a = parseInt(a)) - 1,
                o = 365 * n + parseInt((n + 3) / 4) - parseInt((n + 99) / 100) + parseInt((n + 399) / 400);
            for (s = 0; s < i; ++s) o += ka.gDaysInMonth[s];
            i > 1 && (n % 4 == 0 && n % 100 != 0 || n % 400 == 0) && ++o;
            var l = (o += r) - 79,
                c = parseInt(l / 12053);
            l %= 12053;
            var d = 979 + 33 * c + 4 * parseInt(l / 1461);
            for ((l %= 1461) >= 366 && (d += parseInt((l - 1) / 365), l = (l - 1) % 365), s = 0; s < 11 && l >= ka.jDaysInMonth[s]; ++s) l -= ka.jDaysInMonth[s];
            return [d, s + 1, l + 1]
        }
    };
    i.i18n.fa = {
        setText: "تاييد",
        cancelText: "انصراف",
        clearText: "واضح ",
        selectedText: "{count} منتخب",
        dateFormat: "yy/mm/dd",
        dayNames: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"],
        dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
        dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
        dayText: "روز",
        hourText: "ساعت",
        minuteText: "دقيقه",
        monthNames: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        monthNamesShort: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        monthText: "ماه",
        secText: "ثانيه",
        timeFormat: "HH:ii",
        timeWheels: "iiHH",
        yearText: "سال",
        nowText: "اکنون",
        amText: "ب",
        pmText: "ص",
        todayText: "امروز",
        getYear: function(e) {
            return ka.gregorianToJalali(e.getFullYear(), e.getMonth() + 1, e.getDate())[0]
        },
        getMonth: function(e) {
            return --ka.gregorianToJalali(e.getFullYear(), e.getMonth() + 1, e.getDate())[1]
        },
        getDay: function(e) {
            return ka.gregorianToJalali(e.getFullYear(), e.getMonth() + 1, e.getDate())[2]
        },
        getDate: function(e, t, a, s, n, i, r) {
            t < 0 && (e += Math.floor(t / 12), t = 12 + t % 12), t > 11 && (e += Math.floor(t / 12), t %= 12);
            var o = ka.jalaliToGregorian(e, +t + 1, a);
            return new Date(o[0], o[1] - 1, o[2], s || 0, n || 0, i || 0, r || 0)
        },
        getMaxDayOfMonth: function(e, t) {
            for (var a = 31; !1 === ka.checkDate(e, t + 1, a);) a--;
            return a
        },
        firstDay: 6,
        rtl: !0,
        dateText: "تاریخ ",
        timeText: "زمان ",
        closeText: "نزدیک",
        allDayText: "تمام روز",
        noEventsText: "هیچ رویداد",
        fromText: "شروع ",
        toText: "پایان",
        wholeText: "تمام",
        fractionText: "کسر",
        unitText: "واحد",
        labels: ["سال", "ماه", "روز", "ساعت", "دقیقه", "ثانیه", ""],
        labelsShort: ["سال", "ماه", "روز", "ساعت", "دقیقه", "ثانیه", ""],
        startText: "شروع",
        stopText: "پايان",
        resetText: "تنظیم مجدد",
        lapText: "Lap",
        hideText: "پنهان کردن",
        backText: "پشت",
        undoText: "واچیدن"
    }, i.i18n.fi = {
        setText: "Aseta",
        cancelText: "Peruuta",
        clearText: "Tyhjennä",
        selectedText: "{count} valita",
        dateFormat: "d. MM yy",
        dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviiko", "Torstai", "Perjantai", "Lauantai"],
        dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
        dayNamesMin: ["S", "M", "T", "K", "T", "P", "L"],
        dayText: "Päivä",
        delimiter: ".",
        hourText: "Tuntia",
        minuteText: "Minuutti",
        monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
        monthNamesShort: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
        monthText: "Kuukausi",
        secText: "Sekunda",
        timeFormat: "H:ii",
        yearText: "Vuosi",
        nowText: "Nyt",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Päiväys",
        timeText: "Aika",
        todayText: "Tänään",
        prevMonthText: "Edellinen kuukausi",
        nextMonthText: "Ensi kuussa",
        prevYearText: "Edellinen vuosi",
        nextYearText: "Ensi vuosi",
        closeText: "Sulje",
        eventText: "Tapahtumia",
        eventsText: "Tapahtumia",
        allDayText: "Koko päivä",
        noEventsText: "Ei tapahtumia",
        fromText: "Alkaa",
        toText: "Päättyy",
        wholeText: "Kokonainen",
        fractionText: "Murtoluku",
        unitText: "Yksikkö",
        labels: ["Vuosi", "Kuukausi", "Päivä", "Tunnin", "Minuutti", "sekuntia", ""],
        labelsShort: ["Vuo", "Kuu", "Päi", "Tun", "Min", "Sek", ""],
        startText: "Käynnistys",
        stopText: "Seis",
        resetText: "Aseta uudelleen",
        lapText: "Kierros",
        hideText: "Vuota",
        backText: "Edellinen",
        undoText: "Kumoa",
        offText: "Pois",
        onText: "Päällä",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.fr = {
        setText: "Terminer",
        cancelText: "Annuler",
        clearText: "Effacer",
        selectedText: "{count} sélectionné",
        selectedPluralText: "{count} sélectionnés",
        dateFormat: "dd/mm/yy",
        dayNames: ["&#68;imanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        dayNamesShort: ["&#68;im.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
        dayNamesMin: ["&#68;", "L", "M", "M", "J", "V", "S"],
        dayText: "Jour",
        monthText: "Mois",
        monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
        hourText: "Heures",
        minuteText: "Minutes",
        secText: "Secondes",
        timeFormat: "HH:ii",
        yearText: "Année",
        nowText: "Maintenant",
        pmText: "pm",
        amText: "am",
        todayText: "Aujourd'hui",
        firstDay: 1,
        dateText: "Date",
        timeText: "Heure",
        closeText: "Fermer",
        allDayText: "Toute la journée",
        noEventsText: "Aucun événement",
        fromText: "Démarrer",
        toText: "Fin",
        wholeText: "Entier",
        fractionText: "Fraction",
        unitText: "Unité",
        labels: ["Ans", "Mois", "Jours", "Heures", "Minutes", "Secondes", ""],
        labelsShort: ["Ans", "Mois", "Jours", "Hrs", "Min", "Sec", ""],
        startText: "Démarrer",
        stopText: "Arrêter",
        resetText: "Réinitialiser",
        lapText: "Lap",
        hideText: "Cachez",
        backText: "Retour",
        undoText: "Annuler",
        offText: "Non",
        onText: "Oui",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.he = {
        rtl: !0,
        setText: "שמירה",
        cancelText: "ביטול",
        clearText: "נקה",
        selectedText: "{count} נבחר",
        selectedPluralText: "{count} נבחרו",
        dateFormat: "dd/mm/yy",
        dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
        dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
        dayNamesMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
        dayText: "יום",
        hourText: "שעות",
        minuteText: "דקות",
        monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
        monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
        monthText: "חודש",
        secText: "שניות",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH:ii",
        timeWheels: "iiHH",
        yearText: "שנה",
        nowText: "עכשיו",
        firstDay: 0,
        dateText: "תאריך",
        timeText: "זמן",
        closeText: "סגירה",
        todayText: "היום",
        allDayText: "כל היום",
        noEventsText: "אין אירועים",
        eventText: "מִקרֶה",
        eventsText: "מִקרֶה",
        fromText: "התחלה",
        toText: "סיום",
        wholeText: "כֹּל",
        fractionText: "שבריר",
        unitText: "יחידה",
        labels: ["שנים", "חודשים", "ימים", "שעות", "דקות", "שניים", ""],
        labelsShort: ["שנים", "חודשים", "ימים", "שעות", "דקות", "שניים", ""],
        startText: "התחל",
        stopText: "עצור",
        resetText: "אתחול",
        lapText: "הקפה",
        hideText: "הסתר",
        offText: "כיבוי",
        onText: "הפעלה",
        backText: "חזור",
        undoText: "ביטול פעולה"
    }, i.i18n.hi = {
        setText: "सैट करें",
        cancelText: "रद्द करें",
        clearText: "साफ़ को",
        selectedText: "{count} चयनित",
        dateFormat: "dd/mm/yy",
        dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
        dayNamesShort: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        dayText: "दिन",
        delimiter: ".",
        hourText: "घंटा",
        minuteText: "मिनट",
        monthNames: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
        monthNamesShort: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
        monthText: "महीना",
        secText: "सेकंड",
        timeFormat: "H:ii",
        yearText: "साल",
        nowText: "अब",
        pmText: "अपराह्न",
        amText: "पूर्वाह्न",
        firstDay: 1,
        dateText: "तिथि",
        timeText: "समय",
        todayText: "आज",
        prevMonthText: "पिछ्ला महिना",
        nextMonthText: "अगले महीने",
        prevYearText: "पिछला साल",
        nextYearText: "अगले वर्ष",
        closeText: "बंद",
        eventText: "इवेट३",
        eventsText: "इवेट३",
        allDayText: "पूरे दिन",
        noEventsText: "Ei tapahtumia",
        fromText: "से",
        toText: "तक",
        wholeText: "समूचा",
        fractionText: "अंश",
        unitText: "इकाई",
        labels: ["साल", "महीने", "दिन", "घंटे", "मिनट", "सेकंड", ""],
        labelsShort: ["साल", "महीने", "दिन", "घंटे", "मिनट", "सेकंड", ""],
        startText: "प्रारंभ",
        stopText: "रोकें",
        resetText: "रीसेट करें",
        lapText: "लैप",
        hideText: "छिपाना",
        backText: "वापस",
        undoText: "वापस लाएं",
        offText: "बंद",
        onText: "चालू",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.hr = {
        setText: "Postavi",
        cancelText: "Izlaz",
        clearText: "Izbriši",
        selectedText: "{count} odabran",
        dateFormat: "dd.mm.yy",
        dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
        dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
        dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
        dayText: "Dan",
        delimiter: ".",
        hourText: "Sat",
        minuteText: "Minuta",
        monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
        monthNamesShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
        monthText: "Mjesec",
        secText: "Sekunda",
        timeFormat: "H:ii",
        yearText: "Godina",
        nowText: "Sada",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Vrijeme",
        todayText: "Danas",
        prevMonthText: "Prethodni mjesec",
        nextMonthText: "Sljedeći mjesec",
        prevYearText: "Prethodni godina",
        nextYearText: "Slijedeće godine",
        closeText: "Zatvori",
        eventText: "Događaj",
        eventsText: "događaja",
        allDayText: "Cijeli dan",
        noEventsText: "Bez događaja",
        fromText: "Počinje",
        toText: "Završava",
        wholeText: "Cjelina",
        fractionText: "Frakcija",
        unitText: "Jedinica",
        labels: ["godina", "mjesec", "dan", "sat", "minuta", "sekunda", ""],
        labelsShort: ["god", "mje", "dan", "sat", "min", "sec", ""],
        startText: "Početak",
        stopText: "Prekid",
        resetText: "Resetiraj",
        lapText: "Ciklus",
        hideText: "Sakriti",
        backText: "Natrag",
        undoText: "Poništavanje",
        offText: "Uklj.",
        onText: "Isklj.",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.hu = {
        setText: "OK",
        cancelText: "Mégse",
        clearText: "Törlés",
        selectedText: "{count} kiválasztva",
        dateFormat: "yy.mm.dd.",
        dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
        dayNamesShort: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"],
        dayNamesMin: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
        dayText: "Nap",
        delimiter: ".",
        hourText: "Óra",
        minuteText: "Perc",
        monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
        monthText: "Hónap",
        secText: "Másodperc",
        timeFormat: "H:ii",
        yearText: "Év",
        nowText: "Most",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Dátum",
        timeText: "Idő",
        todayText: "Ma",
        prevMonthText: "Előző hónap",
        nextMonthText: "Következő hónap",
        prevYearText: "Előző év",
        nextYearText: "Következő év",
        closeText: "Bezár",
        eventText: "esemény",
        eventsText: "esemény",
        allDayText: "Egész napos",
        noEventsText: "Nincs esemény",
        fromText: "Eleje",
        toText: "Vége",
        wholeText: "Egész",
        fractionText: "Tört",
        unitText: "Egység",
        labels: ["Év", "Hónap", "Nap", "Óra", "Perc", "Másodperc", ""],
        labelsShort: ["Év", "Hó.", "Nap", "Óra", "Perc", "Mp.", ""],
        startText: "Indít",
        stopText: "Megállít",
        resetText: "Visszaállít",
        lapText: "Lap",
        hideText: "Elrejt",
        backText: "Vissza",
        undoText: "Visszavon",
        offText: "Ki",
        onText: "Be",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.it = {
        setText: "OK",
        cancelText: "Annulla",
        clearText: "Chiarire",
        selectedText: "{count} selezionato",
        selectedPluralText: "{count} selezionati",
        dateFormat: "dd/mm/yy",
        dayNames: ["Domenica", "Lunedì", "Mertedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
        dayNamesShort: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
        dayNamesMin: ["D", "L", "M", "M", "G", "V", "S"],
        dayText: "Giorno",
        hourText: "Ore",
        minuteText: "Minuti",
        monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        monthText: "Mese",
        secText: "Secondi",
        timeFormat: "HH:ii",
        yearText: "Anno",
        nowText: "Ora",
        pmText: "pm",
        amText: "am",
        todayText: "Oggi",
        firstDay: 1,
        dateText: "Data",
        timeText: "Volta",
        closeText: "Chiudere",
        allDayText: "Tutto il giorno",
        noEventsText: "Nessun evento",
        fromText: "Inizio",
        toText: "Fine",
        wholeText: "Intero",
        fractionText: "Frazione",
        unitText: "Unità",
        labels: ["Anni", "Mesi", "Giorni", "Ore", "Minuti", "Secondi", ""],
        labelsShort: ["Anni", "Mesi", "Gio", "Ore", "Min", "Sec", ""],
        startText: "Inizio",
        stopText: "Arresto",
        resetText: "Ripristina",
        lapText: "Lap",
        hideText: "Nascondi",
        backText: "Indietro",
        undoText: "Annulla",
        offText: "Via",
        onText: "Su",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.ja = {
        setText: "セット",
        cancelText: "キャンセル",
        clearText: "クリア",
        selectedText: "{count} 選択",
        dateFormat: "yy年mm月dd日",
        dayNames: ["日", "月", "火", "水", "木", "金", "土"],
        dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
        dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
        dayText: "日",
        hourText: "時",
        minuteText: "分",
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthText: "月",
        secText: "秒",
        timeFormat: "HH:ii",
        yearText: "年",
        nowText: "今",
        pmText: "午後",
        amText: "午前",
        yearSuffix: "年",
        monthSuffix: "月",
        daySuffix: "日",
        todayText: "今日",
        dateText: "日付",
        timeText: "時間",
        closeText: "クローズ",
        allDayText: "終日",
        noEventsText: "イベントはありません",
        fromText: "開始",
        toText: "終わり",
        wholeText: "全数",
        fractionText: "分数",
        unitText: "単位",
        labels: ["年間", "月間", "日間", "時間", "分", "秒", ""],
        labelsShort: ["年間", "月間", "日間", "時間", "分", "秒", ""],
        startText: "開始",
        stopText: "停止",
        resetText: "リセット",
        lapText: "ラップ",
        hideText: "隠す",
        backText: "バック",
        undoText: "アンドゥ"
    }, i.i18n.ko = {
        setText: "설정",
        cancelText: "취소",
        clearText: "삭제",
        selectedText: "{count} 선택된",
        dateFormat: "yy-mm-dd",
        dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        dayText: "일",
        delimiter: "-",
        hourText: "시간",
        minuteText: "분",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthText: "달",
        secText: "초",
        timeFormat: "H:ii",
        yearText: "년",
        nowText: "지금",
        pmText: "오후",
        amText: "오전",
        firstDay: 0,
        dateText: "날짜",
        timeText: "시간",
        todayText: "오늘",
        prevMonthText: "이전 달",
        nextMonthText: "다음 달",
        prevYearText: "이전 년",
        nextYearText: "다음 년",
        closeText: "닫기",
        eventText: "이벤트",
        eventsText: "이벤트",
        allDayText: "종일",
        noEventsText: "이벤트 없음",
        fromText: "시작",
        toText: "종료",
        wholeText: "정수",
        fractionText: "분수",
        unitText: "단위",
        labels: ["년", "달", "일", "시간", "분", "초", ""],
        labelsShort: ["년", "달", "일", "시간", "분", "초", ""],
        startText: "시작",
        stopText: "중지 ",
        resetText: "초기화",
        lapText: "기록",
        hideText: "숨는 장소",
        backText: "뒤로",
        undoText: "실행취소",
        offText: "끔",
        onText: "켬",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.lt = {
        setText: "OK",
        cancelText: "Atšaukti",
        clearText: "Išvalyti",
        selectedText: "Pasirinktas {count}",
        selectedPluralText: "Pasirinkti {count}",
        dateFormat: "yy-mm-dd",
        dayNames: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
        dayNamesShort: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
        dayNamesMin: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
        dayText: "Diena",
        hourText: "Valanda",
        minuteText: "Minutes",
        monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
        monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gruo"],
        monthText: "Mėnuo",
        secText: "Sekundes",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH:ii",
        yearText: "Metai",
        nowText: "Dabar",
        todayText: "Šiandien",
        firstDay: 1,
        dateText: "Data",
        timeText: "Laikas",
        closeText: "Uždaryti",
        allDayText: "Visą dieną",
        noEventsText: "Nėra įvykių",
        fromText: "Nuo",
        toText: "Iki",
        wholeText: "Visas",
        fractionText: "Frakcija",
        unitText: "Vienetas",
        labels: ["Metai", "Mėnesiai", "Dienos", "Valandos", "Minutes", "Sekundes", ""],
        labelsShort: ["m", "mėn.", "d", "h", "min", "s", ""],
        startText: "Pradėti",
        stopText: "Sustabdyti",
        resetText: "Išnaujo",
        lapText: "Ratas",
        hideText: "Slėpti",
        backText: "Atgal",
        undoText: "Anuliuoti",
        offText: "Išj.",
        onText: "Įj.",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.nl = {
        setText: "Instellen",
        cancelText: "Annuleren",
        clearText: "Leegmaken",
        selectedText: "{count} gekozen",
        dateFormat: "dd-mm-yy",
        dayNames: ["zondag", "maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
        dayNamesShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        dayNamesMin: ["z", "m", "d", "w", "d", "v", "z"],
        dayText: "Dag",
        hourText: "Uur",
        minuteText: "Minuten",
        monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        monthNamesShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        monthText: "Maand",
        secText: "Seconden",
        timeFormat: "HH:ii",
        yearText: "Jaar",
        nowText: "Nu",
        pmText: "pm",
        amText: "am",
        todayText: "Vandaag",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Tijd",
        closeText: "Sluiten",
        allDayText: "Hele dag",
        noEventsText: "Geen activiteiten",
        fromText: "Start",
        toText: "Einde",
        wholeText: "geheel",
        fractionText: "fractie",
        unitText: "eenheid",
        labels: ["Jaren", "Maanden", "Dagen", "Uren", "Minuten", "Seconden", ""],
        labelsShort: ["j", "m", "d", "u", "min", "sec", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Ronde",
        hideText: "Verbergen",
        backText: "Terug",
        undoText: "Onged. maken",
        offText: "Uit",
        onText: "Aan",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.no = {
        setText: "OK",
        cancelText: "Avbryt",
        clearText: "Tømme",
        selectedText: "{count} valgt",
        dateFormat: "dd.mm.yy",
        dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        dayNamesShort: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
        dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
        dayText: "Dag",
        delimiter: ".",
        hourText: "Time",
        minuteText: "Minutt",
        monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        monthText: "Måned",
        secText: "Sekund",
        timeFormat: "HH:ii",
        yearText: "År",
        nowText: "Nå",
        pmText: "pm",
        amText: "am",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Dato",
        timeText: "Tid",
        closeText: "Lukk",
        allDayText: "Hele dagen",
        noEventsText: "Ingen hendelser",
        fromText: "Start",
        toText: "End",
        wholeText: "Hele",
        fractionText: "Fraksjon",
        unitText: "Enhet",
        labels: ["År", "Måneder", "Dager", "Timer", "Minutter", "Sekunder", ""],
        labelsShort: ["År", "Mån", "Dag", "Time", "Min", "Sek", ""],
        startText: "Start",
        stopText: "Stopp",
        resetText: "Tilbakestille",
        lapText: "Runde",
        hideText: "Skjul",
        backText: "Tilbake",
        undoText: "Angre",
        offText: "Av",
        onText: "På",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.pl = {
        setText: "Zestaw",
        cancelText: "Anuluj",
        clearText: "Oczyścić",
        selectedText: "Wybór: {count}",
        dateFormat: "yy-mm-dd",
        dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
        dayNamesShort: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
        dayNamesMin: ["N", "P", "W", "Ś", "C", "P", "S"],
        dayText: "Dzień",
        hourText: "Godziny",
        minuteText: "Minuty",
        monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
        monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
        monthText: "Miesiąc",
        secText: "Sekundy",
        timeFormat: "HH:ii",
        yearText: "Rok",
        nowText: "Teraz",
        amText: "am",
        pmText: "pm",
        todayText: "Dzisiaj",
        firstDay: 1,
        dateText: "Data",
        timeText: "Czas",
        closeText: "Zakończenie",
        allDayText: "Cały dzień",
        noEventsText: "Brak wydarzeń",
        fromText: "Rozpoczęcie",
        toText: "Koniec",
        wholeText: "Cały",
        fractionText: "Ułamek",
        unitText: "Jednostka",
        labels: ["Lata", "Miesiąc", "Dni", "Godziny", "Minuty", "Sekundy", ""],
        labelsShort: ["R", "M", "Dz", "Godz", "Min", "Sek", ""],
        startText: "Rozpoczęcie",
        stopText: "Zatrzymać",
        resetText: "Zresetować",
        lapText: "Zakładka",
        hideText: "Ukryć",
        backText: "Wróć",
        undoText: "Cofnij",
        offText: "Wył",
        onText: "Wł",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n["pt-BR"] = {
        setText: "Selecionar",
        cancelText: "Cancelar",
        clearText: "Claro",
        selectedText: "{count} selecionado",
        selectedPluralText: "{count} selecionados",
        dateFormat: "dd/mm/yy",
        dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
        dayText: "Dia",
        hourText: "Hora",
        minuteText: "Minutos",
        monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        monthText: "Mês",
        secText: "Segundo",
        timeFormat: "HH:ii",
        yearText: "Ano",
        nowText: "Agora",
        pmText: "pm",
        amText: "am",
        todayText: "Hoje",
        dateText: "Data",
        timeText: "Tempo",
        closeText: "Fechar",
        allDayText: "Dia inteiro",
        noEventsText: "Nenhum evento",
        fromText: "In&iacute;cio",
        toText: "Fim",
        wholeText: "Inteiro",
        fractionText: "Fração",
        unitText: "Unidade",
        labels: ["Anos", "Meses", "Dias", "Horas", "Minutos", "Segundos", ""],
        labelsShort: ["Ano", "M&ecirc;s", "Dia", "Hora", "Min", "Seg", ""],
        startText: "Começar",
        stopText: "Pare",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "Anterior",
        undoText: "Desfazer",
        offText: "Desl",
        onText: "Lig",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n["pt-PT"] = {
        setText: "Seleccionar",
        cancelText: "Cancelar",
        clearText: "Claro",
        selectedText: "{count} selecionado",
        selectedPluralText: "{count} selecionados",
        dateFormat: "dd-mm-yy",
        dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
        dayText: "Dia",
        hourText: "Horas",
        minuteText: "Minutos",
        monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        monthText: "Mês",
        secText: "Segundo",
        timeFormat: "HH:ii",
        yearText: "Ano",
        nowText: "Actualizar",
        pmText: "pm",
        amText: "am",
        todayText: "Hoy",
        firstDay: 1,
        dateText: "Data",
        timeText: "Tempo",
        closeText: "Fechar",
        allDayText: "Todo o dia",
        noEventsText: "Nenhum evento",
        fromText: "Início",
        toText: "Fim",
        wholeText: "Inteiro",
        fractionText: "Fracção",
        unitText: "Unidade",
        labels: ["Anos", "Meses", "Dias", "Horas", "Minutos", "Segundos", ""],
        labelsShort: ["Ano", "Mês", "Dia", "Hora", "Min", "Seg", ""],
        startText: "Começar",
        stopText: "Parar",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "Anterior",
        undoText: "Anular",
        offText: "Desl",
        onText: "Lig",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.ro = {
        setText: "Setare",
        cancelText: "Anulare",
        clearText: "Ştergere",
        selectedText: "{count} selectat",
        selectedPluralText: "{count} selectate",
        dateFormat: "dd.mm.yy",
        dayNames: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
        dayNamesShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
        dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
        dayText: " Ziua",
        delimiter: ".",
        hourText: " Ore ",
        minuteText: "Minute",
        monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
        monthNamesShort: ["Ian.", "Feb.", "Mar.", "Apr.", "Mai", "Iun.", "Iul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
        monthText: "Luna",
        secText: "Secunde",
        timeFormat: "HH:ii",
        yearText: "Anul",
        nowText: "Acum",
        amText: "am",
        pmText: "pm",
        todayText: "Astăzi",
        prevMonthText: "Luna anterioară",
        nextMonthText: "Luna următoare",
        prevYearText: "Anul anterior",
        nextYearText: "Anul următor",
        eventText: "Eveniment",
        eventsText: "Evenimente",
        allDayText: "Toată ziua",
        noEventsText: "Niciun eveniment",
        firstDay: 1,
        dateText: "Data",
        timeText: "Ora",
        closeText: "Închidere",
        fromText: "Start",
        toText: "Final",
        wholeText: "Complet",
        fractionText: "Parţial",
        unitText: "Unitate",
        labels: ["Ani", "Luni", "Zile", "Ore", "Minute", "Secunde", ""],
        labelsShort: ["Ani", "Luni", "Zile", "Ore", "Min.", "Sec.", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetare",
        lapText: "Tură",
        hideText: "Ascundere",
        backText: "Înapoi",
        undoText: "Anulează",
        offText: "Nu",
        onText: "Da",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n["ru-UA"] = {
        setText: "Установить",
        cancelText: "Отменить",
        clearText: "Очиститьr",
        selectedText: "{count} Вібрать",
        dateFormat: "dd.mm.yy",
        dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
        dayText: "День",
        delimiter: ".",
        hourText: "Часы",
        minuteText: "Минуты",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв.", "Февр.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек."],
        monthText: "Месяцы",
        secText: "Сикунды",
        timeFormat: "HH:ii",
        yearText: "Год",
        nowText: "Сейчас",
        amText: "am",
        pmText: "pm",
        todayText: "Cегодня",
        firstDay: 1,
        dateText: "Дата",
        timeText: "Время",
        closeText: "Закрыть",
        allDayText: "Весь день",
        noEventsText: "Нет событий",
        fromText: "Начало",
        toText: "Конец",
        wholeText: "Весь",
        fractionText: "Часть",
        unitText: "Единица",
        labels: ["Годы", " Месяцы ", " Дни ", " Часы ", " Минуты ", " Секунды", ""],
        labelsShort: ["Год", "Мес.", "Дн.", "Ч.", "Мин.", "Сек.", ""],
        startText: "Старт",
        stopText: "Стоп",
        resetText: " Сброс ",
        lapText: " Этап ",
        hideText: " Скрыть ",
        backText: "назад",
        undoText: "ОтменитЬ",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n["ru-RU"] = i.i18n.ru = {
        setText: "Установить",
        cancelText: "Отмена",
        clearText: "Очистить",
        selectedText: "{count} Выбрать",
        dateFormat: "dd.mm.yy",
        dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
        dayText: "День",
        delimiter: ".",
        hourText: "Час",
        minuteText: "Минут",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        monthText: "Месяц",
        secText: "Секунд",
        timeFormat: "HH:ii",
        yearText: "Год",
        nowText: "Сейчас",
        amText: "am",
        pmText: "pm",
        todayText: "Cегодня",
        firstDay: 1,
        dateText: "Дата",
        timeText: "Время",
        closeText: "Закрыть",
        allDayText: "Весь день",
        noEventsText: "Нет событий",
        fromText: "Начало",
        toText: "Конец",
        wholeText: "Целое",
        fractionText: "Дробное",
        unitText: "Единица",
        labels: ["Лет", "Месяцев", "Дней", "Часов", "Минут", "Секунд", ""],
        labelsShort: ["Лет", "Мес", "Дн", "Час", "Мин", "Сек", ""],
        startText: "Старт",
        stopText: "Стоп",
        resetText: "Сбросить",
        lapText: "Круг",
        hideText: "Скрыть",
        backText: "назад",
        undoText: "ОтменитЬ",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.sk = {
        setText: "Zadaj",
        cancelText: "Zrušiť",
        clearText: "Vymazať",
        selectedText: "Označený: {count}",
        dateFormat: "d.m.yy",
        dayNames: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
        dayNamesShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
        dayNamesMin: ["N", "P", "U", "S", "Š", "P", "S"],
        dayText: "Ďeň",
        hourText: "Hodiny",
        minuteText: "Minúty",
        monthNames: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
        monthText: "Mesiac",
        secText: "Sekundy",
        timeFormat: "H:ii",
        yearText: "Rok",
        nowText: "Teraz",
        amText: "am",
        pmText: "pm",
        todayText: "Dnes",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Čas",
        closeText: "Zavrieť",
        allDayText: "Celý deň",
        noEventsText: "Žiadne udalosti",
        fromText: "Začiatok",
        toText: "Koniec",
        wholeText: "Celý",
        fractionText: "Časť",
        unitText: "Jednotka",
        labels: ["Roky", "Mesiace", "Dni", "Hodiny", "Minúty", "Sekundy", ""],
        labelsShort: ["Rok", "Mes", "Dni", "Hod", "Min", "Sec", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetovať",
        lapText: "Etapa",
        hideText: "Schovať",
        backText: "Späť",
        undoText: "Späť",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.sr = {
        setText: "Постави",
        cancelText: "Откажи",
        clearText: "Обриши",
        selectedText: "{count} изабрана",
        dateFormat: "dd.mm.yy",
        dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
        dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
        dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
        dayText: "Дан",
        delimiter: ".",
        hourText: "Час",
        minuteText: "Минут",
        monthNames: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
        monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
        monthText: "месец",
        secText: "Секунд",
        timeFormat: "H:ii",
        yearText: "година",
        nowText: "сада",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Датум",
        timeText: "време",
        todayText: "Данас",
        prevMonthText: "Претходни мјесец",
        nextMonthText: "Следећег месеца",
        prevYearText: "Претходна године",
        nextYearText: "Следеће године",
        closeText: "Затвори",
        eventText: "Догађај",
        eventsText: "Догађаји",
        allDayText: "Цео дан",
        noEventsText: "Нема догађаја",
        fromText: "Од",
        toText: "До",
        wholeText: "цео",
        fractionText: "Фракција",
        unitText: "единица",
        labels: ["Године", "Месеци", "Дана", "Сати", "Минута", "Секунди", ""],
        labelsShort: ["Год", "Мес", "Дана", "Сати", "Мину", "Секу", ""],
        startText: "Започни",
        stopText: "Стоп",
        resetText: "Ресетуј",
        lapText: "Круг",
        hideText: "Сакрити",
        backText: "Повратак",
        undoText: "Опозови",
        offText: "нe",
        onText: "да",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.sv = {
        setText: "OK",
        cancelText: "Avbryt",
        clearText: "Klara",
        selectedText: "{count} vald",
        dateFormat: "yy-mm-dd",
        dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
        dayNamesShort: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
        dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
        dayText: "Dag",
        hourText: "Timme",
        minuteText: "Minut",
        monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        monthText: "Månad",
        secText: "Sekund",
        timeFormat: "HH:ii",
        yearText: "År",
        nowText: "Nu",
        pmText: "pm",
        amText: "am",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Tid",
        closeText: "Stäng",
        allDayText: "Heldag",
        noEventsText: "Inga aktiviteter",
        fromText: "Start",
        toText: "Slut",
        wholeText: "Hela",
        fractionText: "Bråk",
        unitText: "Enhet",
        labels: ["År", "Månader", "Dagar", "Timmar", "Minuter", "Sekunder", ""],
        labelsShort: ["År", "Mån", "Dag", "Tim", "Min", "Sek", ""],
        startText: "Start",
        stopText: "Stopp",
        resetText: "Återställ",
        lapText: "Varv",
        hideText: "Dölj",
        backText: "Tillbaka",
        undoText: "Ångra",
        offText: "Av",
        onText: "På"
    }, i.i18n.tr = {
        setText: "Seç",
        cancelText: "İptal",
        clearText: "Temizleyin",
        selectedText: "{count} seçilmiş",
        dateFormat: "dd.mm.yy",
        dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
        dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
        dayNamesMin: ["P", "P", "S", "Ç", "P", "C", "C"],
        dayText: "Gün",
        delimiter: ".",
        hourText: "Saat",
        minuteText: "Dakika",
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
        monthText: "Ay",
        secText: "Saniye",
        timeFormat: "HH:ii",
        yearText: "Yıl",
        nowText: "Şimdi",
        pmText: "pm",
        amText: "am",
        todayText: "Bugün",
        firstDay: 1,
        dateText: "Tarih",
        timeText: "Zaman",
        closeText: "Kapatmak",
        allDayText: "Tüm gün",
        noEventsText: "Etkinlik Yok",
        fromText: "Başla",
        toText: "Son",
        wholeText: "Tam",
        fractionText: "Kesir",
        unitText: "Birim",
        labels: ["Yıl", "Ay", "Gün", "Saat", "Dakika", "Saniye", ""],
        labelsShort: ["Yıl", "Ay", "Gün", "Sa", "Dak", "Sn", ""],
        startText: "Başla",
        stopText: "Durdur",
        resetText: "Sıfırla",
        lapText: "Tur",
        hideText: "Gizle",
        backText: "Geri",
        undoText: "Geri Al",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: "."
    }, i.i18n.vi = {
        setText: "Đặt",
        cancelText: "Hủy bò",
        clearText: "Xóa",
        selectedText: "{count} chọn",
        dateFormat: "dd/mm/yy",
        dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
        dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        dayText: "",
        delimiter: "/",
        hourText: "Giờ",
        minuteText: "Phút",
        monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
        monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        monthText: "Tháng",
        secText: "Giây",
        timeFormat: "H:ii",
        yearText: "Năm",
        nowText: "Bây giờ",
        pmText: "pm",
        amText: "am",
        firstDay: 0,
        dateText: "Ngày",
        timeText: "Hồi",
        todayText: "Hôm nay",
        prevMonthText: "Tháng trước",
        nextMonthText: "Tháng tới",
        prevYearText: "Măm trước",
        nextYearText: "Năm tới",
        closeText: "Đóng",
        eventText: "Sự kiện",
        eventsText: "Sự kiện",
        allDayText: "Cả ngày",
        noEventsText: "Không có sự kiện",
        fromText: "Từ",
        toText: "Tới",
        wholeText: "Toàn thể",
        fractionText: "Phân số",
        unitText: "đơn vị",
        labels: ["Năm", "Tháng", "Ngày", "Giờ", "Phút", "Giây", ""],
        labelsShort: ["Năm", "Tháng", "Ngày", "Giờ", "Phút", "Giây", ""],
        startText: "Bắt đầu",
        stopText: "Dừng",
        resetText: "Đặt lại",
        lapText: "Vòng",
        hideText: "Giấu",
        backText: "Quay lại",
        undoText: "Hoàn tác",
        offText: "Tất",
        onText: "Bật",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, i.i18n.zh = {
        setText: "确定",
        cancelText: "取消",
        clearText: "明确",
        selectedText: "{count} 选",
        dateFormat: "yy/mm/dd",
        dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        dayText: "日",
        hourText: "时",
        minuteText: "分",
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
        monthText: "月",
        secText: "秒",
        timeFormat: "HH:ii",
        yearText: "年",
        nowText: "当前",
        pmText: "下午",
        amText: "上午",
        todayText: "今天",
        dateText: "日",
        timeText: "时间",
        closeText: "关闭",
        allDayText: "全天",
        noEventsText: "无事件",
        fromText: "开始时间",
        toText: "结束时间",
        wholeText: "合计",
        fractionText: "分数",
        unitText: "单位",
        labels: ["年", "月", "日", "小时", "分钟", "秒", ""],
        labelsShort: ["年", "月", "日", "点", "分", "秒", ""],
        startText: "开始",
        stopText: "停止",
        resetText: "重置",
        lapText: "圈",
        hideText: "隐藏",
        backText: "返回",
        undoText: "复原",
        offText: "关闭",
        onText: "开启",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    var Sa = i.themes;
    Sa.frame.bootstrap = {
        disabledClass: "disabled",
        selectedClass: "btn-primary",
        selectedTabClass: "active",
        tabLink: !0,
        todayClass: "text-primary mbsc-cal-today",
        onMarkupInserted: function(e) {
            var t = ee(e.target),
                a = ee(".mbsc-cal-tabs", t);
            ee(".mbsc-fr-popup", t).addClass("popover"), ee(".mbsc-fr-w", t).addClass("popover-content"), ee(".mbsc-fr-hdr", t).addClass("popover-title popover-header"), ee(".mbsc-fr-arr-i", t).addClass("popover"), ee(".mbsc-fr-arr", t).addClass("arrow"), ee(".mbsc-fr-btn", t).addClass("btn btn-default btn-secondary"), ee(".mbsc-fr-btn-s .mbsc-fr-btn", t).removeClass("btn-default btn-secondary").addClass("btn btn-primary"), a.addClass("nav nav-tabs"), a.find(".mbsc-cal-tab").addClass("nav-item"), a.find("a").addClass("nav-link"), a.find(".mbsc-cal-tab.active .nav-link").addClass("active"), ee(".mbsc-cal-picker", t).addClass("popover"), ee(".mbsc-cal-events", t).addClass("popover"), ee(".mbsc-cal-events-arr", t).addClass("arrow"), ee(".mbsc-range-btn", t).addClass("btn btn-sm btn-small btn-default"), ee(".mbsc-np-btn", t).addClass("btn btn-default"), ee(".mbsc-sel-filter-cont", t).removeClass("mbsc-input"), ee(".mbsc-sel-filter-input", t).addClass("form-control")
        },
        onTabChange: function(e, t) {
            ee(".mbsc-cal-tabs .nav-link", t._markup).removeClass("active"), ee(".mbsc-cal-tab.active .nav-link", t._markup).addClass("active")
        },
        onPosition: function(e) {
            setTimeout(function() {
                ee(".mbsc-fr-bubble-top, .mbsc-fr-bubble-top .mbsc-fr-arr-i", e.target).removeClass("bottom bs-popover-bottom").addClass("top bs-popover-top"), ee(".mbsc-fr-bubble-bottom, .mbsc-fr-bubble-bottom .mbsc-fr-arr-i", e.target).removeClass("top bs-popover-top").addClass("bottom  bs-popover-bottom")
            }, 10)
        }
    }, Sa.scroller.bootstrap = ne({}, Sa.frame.bootstrap, {
        dateDisplay: "Mddyy",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5 btn-light",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5 btn-light",
        selectedLineHeight: !0,
        onEventBubbleShow: function(e) {
            var t = ee(e.eventList);
            ee(".mbsc-cal-event-list", t).addClass("list-group"), ee(".mbsc-cal-event", t).addClass("list-group-item"), setTimeout(function() {
                t.hasClass("mbsc-cal-events-b") ? t.removeClass("top").addClass("bottom") : t.removeClass("bottom").addClass("top")
            }, 10)
        }
    }), Sa.navigation.bootstrap = {
        wrapperClass: "popover panel panel-default",
        groupClass: "btn-group",
        activeClass: "btn-primary",
        disabledClass: "disabled",
        itemClass: "btn btn-default"
    };
    var Da, Na, Va = i.themes;

    function Aa(e, t) {
        var a = O(t, "X", !0),
            s = O(t, "Y", !0),
            n = e.offset(),
            i = a - n.left,
            r = s - n.top,
            o = Math.max(i, e[0].offsetWidth - i),
            l = Math.max(r, e[0].offsetHeight - r),
            c = 2 * Math.sqrt(Math.pow(o, 2) + Math.pow(l, 2));
        Fa(Na), Na = ee('<span class="mbsc-ripple"></span>').css({
            width: c,
            height: c,
            top: s - n.top - c / 2,
            left: a - n.left - c / 2
        }).appendTo(e), setTimeout(function() {
            Na.addClass("mbsc-ripple-scaled mbsc-ripple-visible")
        }, 10)
    }

    function Fa(e) {
        setTimeout(function() {
            e && (e.removeClass("mbsc-ripple-visible"), setTimeout(function() {
                e.remove()
            }, 2e3))
        }, 100)
    }

    function Ia(e, t, a, s) {
        var n, i;
        e.off(".mbsc-ripple").on("touchstart.mbsc-ripple mousedown.mbsc-ripple", t, function(e) {
            fe(e, this) && (n = O(e, "X"), i = O(e, "Y"), (Da = ee(this)).hasClass(a) || Da.hasClass(s) ? Da = null : Aa(Da, e))
        }).on("touchmove.mbsc-ripple mousemove.mbsc-ripple", t, function(e) {
            (Da && Math.abs(O(e, "X") - n) > 9 || Math.abs(O(e, "Y") - i) > 9) && (Fa(Na), Da = null)
        }).on("touchend.mbsc-ripple touchcancel.mbsc-ripple mouseleave.mbsc-ripple mouseup.mbsc-ripple", t, function() {
            Da && (setTimeout(function() {
                Fa(Na)
            }, 100), Da = null)
        })
    }
    Va.frame.ios = {
        display: "bottom",
        headerText: !1,
        btnWidth: !1,
        deleteIcon: "ios-backspace",
        scroll3d: !0
    }, Va.scroller.ios = ne({}, Va.frame.ios, {
        rows: 5,
        height: 34,
        minWidth: 55,
        selectedLineHeight: !0,
        selectedLineBorder: 1,
        showLabel: !1,
        useShortLabels: !0,
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
        checkIcon: "ion-ios7-checkmark-empty",
        filterClearIcon: "ion-close-circled",
        dateDisplay: "MMdyy",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
    }), Va.listview.ios = {
        leftArrowClass: "mbsc-ic-ion-ios7-arrow-back",
        rightArrowClass: "mbsc-ic-ion-ios7-arrow-forward"
    }, Va.form.ios = {};
    var Pa = i.themes;
    Pa.frame.material = {
        headerText: !1,
        btnWidth: !1,
        deleteIcon: "material-backspace",
        onMarkupReady: function(e) {
            Ia(ee(e.target), ".mbsc-fr-btn-e", "mbsc-disabled", "mbsc-fr-btn-nhl")
        }
    }, Pa.scroller.material = ne({}, Pa.frame.material, {
        showLabel: !1,
        selectedLineBorder: 2,
        weekDays: "min",
        icon: {
            filled: "material-star",
            empty: "material-star-outline"
        },
        checkIcon: "material-check",
        btnPlusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-down",
        btnMinusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-up",
        btnCalPrevClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-left",
        btnCalNextClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-right",
        onEventBubbleShow: function(e) {
            var t = ee(e.eventList),
                a = ee(e.target).closest(".mbsc-cal-row").index() < 2,
                s = ee(".mbsc-cal-event-color", t).eq(a ? 0 : -1).css("background-color");
            ee(".mbsc-cal-events-arr", t).css("border-color", a ? "transparent transparent " + s + " transparent" : s + "transparent transparent transparent")
        }
    }), Pa.listview.material = {
        leftArrowClass: "mbsc-ic-material-keyboard-arrow-left",
        rightArrowClass: "mbsc-ic-material-keyboard-arrow-right",
        onItemActivate: function(e) {
            Aa(ee(e.target), e.domEvent)
        },
        onItemDeactivate: function() {
            Fa(Na)
        },
        onSlideStart: function(e) {
            ee(".mbsc-ripple", e.target).remove()
        },
        onSortStart: function(e) {
            ee(".mbsc-ripple", e.target).remove()
        }
    }, Pa.navigation.material = {
        onInit: function() {
            Ia(ee(this), ".mbsc-ms-item.mbsc-btn-e", "mbsc-disabled", "mbsc-btn-nhl")
        },
        onMarkupInit: function() {
            ee(".mbsc-ripple", this).remove()
        },
        onDestroy: function() {
            ee(this).off(".mbsc-ripple")
        }
    }, Pa.form.material = {
        addRipple: function(e, t) {
            Aa(e, t)
        },
        removeRipple: function() {
            Fa(Na)
        }
    };
    var Ha = i.themes;
    Ha.frame.windows = {
        headerText: !1,
        deleteIcon: "backspace4",
        btnReverse: !0
    }, Ha.scroller.windows = ne({}, Ha.frame.windows, {
        rows: 6,
        minWidth: 88,
        height: 44,
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
        checkIcon: "material-check",
        dateDisplay: "MMdyy",
        showLabel: !1,
        showScrollArrows: !0,
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
        dayNamesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        useShortLabels: !0
    }), Ha.form.windows = {}, i.customTheme("ios-dark", "ios"), i.customTheme("material-dark", "material"), i.customTheme("mobiscroll-dark", "mobiscroll"), i.customTheme("windows-dark", "windows");
    var Ea = i.themes,
        La = void 0;
    return "android" == t ? La = "material" : "ios" == t ? La = "ios" : "wp" == t && (La = "windows"), ee.each(Ea.frame, function(e, t) {
        if (La && t.baseTheme == La && "material-dark" != e && "windows-dark" != e && "ios-dark" != e) return i.autoTheme = e, !1;
        e == La && (i.autoTheme = e)
    }), i.apiKey = "c19a4191", i.apiUrl = "https://trial.mobiscroll.com/", i
});