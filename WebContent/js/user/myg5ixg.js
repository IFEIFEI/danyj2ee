/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if (!window.Typekit)
    window.Typekit = {};
window.Typekit.config = {
    "a": "342389",
    "c": [".tk-ff-meta-serif-web-pro", "\"ff-meta-serif-web-pro\",serif"],
    "f": "//use.typekit.net/c/7e98c4/1w;ff-meta-serif-web-pro,2,VbR:N:i7/{format}{/extras*}?3bb2a6e53c9684ffdc9a98f4135b2a62d7ad2c805d37e76a8d7c97eb986e51f3547114c15af5baa766e22fb2fe789e1c9a2c40443796406ea40fd64e21e58f9b6824f75e16284c0bbf310ccae3945f2015b28c08185c5cf2c9756a4685d1208a5c8fecb3f87f19c4e84ba35ae35d4bcb13df71e1bd3fe52eda8efa3ad29e64cf834862250751bd47c71532bdf2c6fe659e327e6fe01fd90c280dc8ec404b55e065e38ea3e19e5313a4d3d42f1897450a37c4d9db2c419b32382531dde70e28b8c0f723cc71312f9ecec6fb0e5d1eeada22056587aa239d8463c9eaca76123d794146648500",
    "fi": [5035],
    "fn": ["ff-meta-serif-web-pro", ["i7"]],
    "ht": "tk",
    "js": "1.8.0",
    "k": "//use.typekit.net/{id}.js",
    "kt": "myg5ixg",
    "l": "typekit",
    "p": "//p.typekit.net/p.gif?s=1&k=myg5ixg&ht=tk&h={host}&f=5035&a=342389&_={_}",
    "ps": 1,
    "w": "myg5ixg"
};
/*{"k":"1.8.0","auto_updating":false}*/
/*{"k":"1.8.0","created":"2014-04-23T11:58:04Z"}*/
;
(function(window, document, undefined) {
    var j=!0, k = null, l=!1;
    function m(a) {
        return function() {
            return this[a]
        }
    }
    var aa = this;
    function ba(a, b) {
        var c = a.split("."), d = aa;
        !(c[0]in d) && d.execScript && d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());)
            !c.length && void 0 !== b ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    }
    function ca(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function da(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function n(a, b, c) {
        n = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? ca : da;
        return n.apply(k, arguments)
    }
    var ea = Date.now || function() {
        return + new Date
    };
    function fa(a, b) {
        this.da = a;
        this.V = b || a;
        this.z = this.V.document
    }
    fa.prototype.createElement = function(a, b, c) {
        a = this.z.createElement(a);
        if (b)
            for (var d in b)
                b.hasOwnProperty(d) && ("style" == d ? a.style.cssText = b[d] : a.setAttribute(d, b[d]));
        c && a.appendChild(this.z.createTextNode(c));
        return a
    };
    function q(a, b, c) {
        a = a.z.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a && a.lastChild && a.insertBefore(c, a.lastChild)
    }
    function ga(a, b) {
        function c() {
            a.z.body ? b() : setTimeout(c, 0)
        }
        c()
    }
    function r(a, b, c) {
        b = b || [];
        c = c || [];
        for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
            for (var f = l, g = 0; g < d.length; g += 1)
                if (b[e] === d[g]) {
                    f = j;
                    break
                }
            f || d.push(b[e])
        }
        b = [];
        for (e = 0; e < d.length; e += 1) {
            f = l;
            for (g = 0; g < c.length; g += 1)
                if (d[e] === c[g]) {
                    f = j;
                    break
                }
            f || b.push(d[e])
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }
    function ha(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b)
                return j;
        return l
    }
    function s(a) {
        var b = a.V.location.protocol;
        "about:" == b && (b = a.da.location.protocol);
        return "https:" === ("https:" == b ? "https:" : "http:")
    }
    function ia(a, b, c) {
        var d = a.z.getElementsByTagName("head")[0];
        if (d) {
            var e = a.createElement("script", {
                src: b
            }), f = l;
            e.onload = e.onreadystatechange = function() {
                if (!f && (!this.readyState || "loaded" == this.readyState || "complete" == this.readyState))
                    f = j, c && c(k), e.onload = e.onreadystatechange = k, "HEAD" == e.parentNode.tagName && d.removeChild(e)
            };
            d.appendChild(e);
            window.setTimeout(function() {
                f || (f = j, c && c(Error("Script load timeout")))
            }, 5E3)
        }
    }
    function t(a, b, c) {
        this.Wa = a;
        this.ga = b;
        this.Va = c
    }
    ba("internalWebfont.BrowserInfo", t);
    t.prototype.Ja = m("Wa");
    t.prototype.hasWebFontSupport = t.prototype.Ja;
    t.prototype.Ka = m("ga");
    t.prototype.hasWebKitFallbackBug = t.prototype.Ka;
    t.prototype.La = m("Va");
    t.prototype.hasWebKitMetricsBug = t.prototype.La;
    function u(a, b, c, d) {
        this.g = a != k ? a : k;
        this.n = b != k ? b : k;
        this.J = c != k ? c : k;
        this.h = d != k ? d : k
    }
    var ja = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    function v(a, b) {
        return a.g > b.g || a.g === b.g && a.n > b.n || a.g === b.g && a.n === b.n && a.J > b.J ? 1 : a.g < b.g || a.g === b.g && a.n < b.n || a.g === b.g && a.n === b.n && a.J < b.J?-1 : 0
    }
    function w(a, b) {
        return 0 === v(a, b) || 1 === v(a, b)
    }
    u.prototype.toString = function() {
        return [this.g, this.n || "", this.J || "", this.h || ""].join("")
    };
    function x(a) {
        a = ja.exec(a);
        var b = k, c = k, d = k, e = k;
        a && (a[1] !== k && a[1] && (b = parseInt(a[1], 10)), a[2] !== k && a[2] && (c = parseInt(a[2], 10)), a[3] !== k && a[3] && (d = parseInt(a[3], 10)), a[4] !== k && a[4] && (e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4]));
        return new u(b, c, d, e)
    }
    function y(a, b, c, d, e, f, g, h, p, L, E) {
        this.W = a;
        this.o = b;
        this.Ua = c;
        this.B = d;
        this.F = e;
        this.za = f;
        this.m = g;
        this.l = h;
        this.Qa = p;
        this.S = L;
        this.A = E
    }
    ba("internalWebfont.UserAgent", y);
    y.prototype.getName = m("W");
    y.prototype.getName = y.prototype.getName;
    y.prototype.Ia = m("Ua");
    y.prototype.getVersion = y.prototype.Ia;
    y.prototype.Ea = m("B");
    y.prototype.getEngine = y.prototype.Ea;
    y.prototype.Fa = m("za");
    y.prototype.getEngineVersion = y.prototype.Fa;
    y.prototype.Ga = m("m");
    y.prototype.getPlatform = y.prototype.Ga;
    y.prototype.Ha = m("Qa");
    y.prototype.getPlatformVersion = y.prototype.Ha;
    y.prototype.Da = m("S");
    y.prototype.getDocumentMode = y.prototype.Da;
    y.prototype.Ca = m("A");
    y.prototype.getBrowserInfo = y.prototype.Ca;
    function ka(a, b) {
        this.e = a;
        this.R = b
    }
    var na = new y("Unknown", new u, "Unknown", "Unknown", new u, "Unknown", "Unknown", new u, "Unknown", void 0, new t(l, l, l));
    ka.prototype.parse = function() {
        var a;
        if ( - 1 != this.e.indexOf("MSIE")||-1 != this.e.indexOf("Trident/")) {
            a = z(this);
            var b = A(this), c = x(b), d = k, e = k, f = k, g = k, h = B(this.e, /Trident\/([\d\w\.]+)/, 1), p = C(this.R), d =- 1 != this.e.indexOf("MSIE") ? B(this.e, /MSIE ([\d\w\.]+)/, 1) : B(this.e, /rv:([\d\w\.]+)/, 1), e = x(d);
            "" != h ? (f = "Trident", g = x(h)) : (f = "Unknown", g = new u, h = "Unknown");
            a = new y("MSIE", e, d, f, g, h, a, c, b, p, new t("Windows" == a && 6 <= e.g || "Windows Phone" == a && 8 <= c.g, l, l))
        } else if ( - 1 != this.e.indexOf("Opera"))
            a: if (a = "Unknown", b =
        B(this.e, /Presto\/([\d\w\.]+)/, 1), c = x(b), d = A(this), e = x(d), f = C(this.R), c.g !== k ? a = "Presto" : ( - 1 != this.e.indexOf("Gecko") && (a = "Gecko"), b = B(this.e, /rv:([^\)]+)/, 1), c = x(b)), - 1 != this.e.indexOf("Opera Mini/"))
            g = B(this.e, /Opera Mini\/([\d\.]+)/, 1), h = x(g), a = new y("OperaMini", h, g, a, c, b, z(this), e, d, f, new t(l, l, l));
        else {
            if ( - 1 != this.e.indexOf("Version/") && (g = B(this.e, /Version\/([\d\.]+)/, 1), h = x(g), h.g !== k)) {
                a = new y("Opera", h, g, a, c, b, z(this), e, d, f, new t(10 <= h.g, l, l));
                break a
            }
            g = B(this.e, /Opera[\/ ]([\d\.]+)/, 1);
            h = x(g);
            a = h.g !== k ? new y("Opera", h, g, a, c, b, z(this), e, d, f, new t(10 <= h.g, l, l)) : new y("Opera", new u, "Unknown", a, c, b, z(this), e, d, f, new t(l, l, l))
        } else 
            / OPR\ / [\d.] + /.test(this.e)?a=oa(this):/AppleWeb(K | k)it / .test(this.e) ? a = oa(this) : - 1 != this.e.indexOf("Gecko") ? (a = "Unknown", b = new u, c = "Unknown", d = A(this), e = x(d), f = l, - 1 != this.e.indexOf("Firefox") ? (a = "Firefox", c = B(this.e, /Firefox\/([\d\w\.]+)/, 1), b = x(c), f = 3 <= b.g && 5 <= b.n) : - 1 != this.e.indexOf("Mozilla") && (a = "Mozilla"), g = B(this.e, /rv:([^\)]+)/, 1), h = x(g), f || (f = 1 < h.g ||
        1 == h.g && 9 < h.n || 1 == h.g && 9 == h.n && 2 <= h.J || g.match(/1\.9\.1b[123]/) != k || g.match(/1\.9\.1\.[\d\.]+/) != k), a = new y(a, b, c, "Gecko", h, g, z(this), e, d, C(this.R), new t(f, l, l))) : a = na;
        return a
    };
    function z(a) {
        var b = B(a.e, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        if ("" != b)
            return /BB\d{2}/.test(b) && (b = "BlackBerry"), b;
        a = B(a.e, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1);
        return "" != a ? ("Mac_PowerPC" == a && (a = "Macintosh"), a) : "Unknown"
    }
    function A(a) {
        var b = B(a.e, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
        if (b || (b = B(a.e, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = B(a.e, /(iPhone )?OS ([\d_]+)/, 2)))
            return b;
        if (b = B(a.e, /(?:Linux|CrOS) ([^;)]+)/, 1))
            for (var b = b.split(/\s/), c = 0; c < b.length; c += 1)
                if (/^[\d\._]+$/.test(b[c]))
                    return b[c];
        return (a = B(a.e, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }
    function oa(a) {
        var b = z(a), c = A(a), d = x(c), e = B(a.e, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1), f = x(e), g = "Unknown", h = new u, p = "Unknown", L = l;
        /OPR\/[\d.]+/.test(a.e) ? g = "Opera" : - 1 != a.e.indexOf("Chrome")||-1 != a.e.indexOf("CrMo")||-1 != a.e.indexOf("CriOS") ? g = "Chrome" : /Silk\/\d/.test(a.e) ? g = "Silk" : "BlackBerry" == b || "Android" == b ? g = "BuiltinBrowser" : - 1 != a.e.indexOf("PhantomJS") ? g = "PhantomJS" : - 1 != a.e.indexOf("Safari") ? g = "Safari" : - 1 != a.e.indexOf("AdobeAIR") && (g = "AdobeAIR");
        "BuiltinBrowser" == g ? p = "Unknown" : "Silk" == g ? p = B(a.e,
        /Silk\/([\d\._]+)/, 1) : "Chrome" == g ? p = B(a.e, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : - 1 != a.e.indexOf("Version/") ? p = B(a.e, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == g ? p = B(a.e, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == g ? p = B(a.e, /OPR\/([\d.]+)/, 1) : "PhantomJS" == g && (p = B(a.e, /PhantomJS\/([\d.]+)/, 1));
        h = x(p);
        L = "AdobeAIR" == g ? 2 < h.g || 2 == h.g && 5 <= h.n : "BlackBerry" == b ? 10 <= d.g : "Android" == b ? 2 < d.g || 2 == d.g && 1 < d.n : 526 <= f.g || 525 <= f.g && 13 <= f.n;
        return new y(g, h, p, "AppleWebKit", f, e, b, d, c, C(a.R), new t(L, 536 > f.g || 536 == f.g && 11 > f.n, "iPhone" ==
        b || "iPad" == b || "iPod" == b || "Macintosh" == b))
    }
    function B(a, b, c) {
        return (a = a.match(b)) && a[c] ? a[c] : ""
    }
    function C(a) {
        if (a.documentMode)
            return a.documentMode
    }
    function pa(a) {
        this.Oa = a || "-"
    }
    pa.prototype.h = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++)
            b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.Oa)
    };
    function qa(a, b, c) {
        this.j = a;
        this.v = b;
        this.$ = c;
        this.r = "wf";
        this.q = new pa("-")
    }
    function ra(a) {
        var b = ha(a.v, a.q.h(a.r, "active")), c = [], d = [a.q.h(a.r, "loading")];
        b || c.push(a.q.h(a.r, "inactive"));
        r(a.v, c, d);
        F(a, "inactive")
    }
    function F(a, b, c) {
        if (a.$[b])
            if (c)
                a.$[b](c.getName(), G(c));
            else 
                a.$[b]()
    }
    function H(a, b) {
        this.W = a;
        this.ha = 4;
        this.X = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.X = c[1], this.ha = parseInt(c[2], 10))
    }
    H.prototype.getName = m("W");
    function G(a) {
        return a.X + a.ha
    }
    function J(a, b) {
        this.j = a;
        this.O = b;
        this.D = this.j.createElement("span", {
            "aria-hidden": "true"
        }, this.O)
    }
    function sa(a, b) {
        var c;
        c = [];
        for (var d = b.W.split(/,\s*/), e = 0; e < d.length; e++) {
            var f = d[e].replace(/['"]/g, "");
            - 1 == f.indexOf(" ") ? c.push(f) : c.push("'" + f + "'")
        }
        c = c.join(",");
        d = "normal";
        e = b.ha + "00";
        "o" === b.X ? d = "oblique" : "i" === b.X && (d = "italic");
        a.D.style.cssText = "display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + c + ";" + ("font-style:" + d + ";font-weight:" + e + ";")
    }
    function ta(a) {
        q(a.j, "body", a.D)
    }
    J.prototype.remove = function() {
        var a = this.D;
        a.parentNode && a.parentNode.removeChild(a)
    };
    function ua(a, b, c, d, e, f, g, h) {
        this.ia = a;
        this.Na = b;
        this.j = c;
        this.C = d;
        this.O = h || "BESbswy";
        this.A = e;
        this.P = {};
        this.ea = f || 5E3;
        this.ta = g || k;
        this.N = this.M = k;
        a = new J(this.j, this.O);
        ta(a);
        for (var p in K)
            K.hasOwnProperty(p) && (sa(a, new H(K[p], G(this.C))), this.P[K[p]] = a.D.offsetWidth);
        a.remove()
    }
    var K = {
        bb: "serif",
        ab: "sans-serif",
        Ya: "monospace"
    };
    ua.prototype.start = function() {
        this.M = new J(this.j, this.O);
        ta(this.M);
        this.N = new J(this.j, this.O);
        ta(this.N);
        this.Sa = ea();
        sa(this.M, new H(this.C.getName() + ",serif", G(this.C)));
        sa(this.N, new H(this.C.getName() + ",sans-serif", G(this.C)));
        va(this)
    };
    function wa(a, b, c) {
        for (var d in K)
            if (K.hasOwnProperty(d) && b === a.P[K[d]] && c === a.P[K[d]])
                return j;
        return l
    }
    function va(a) {
        var b = a.M.D.offsetWidth, c = a.N.D.offsetWidth;
        b === a.P.serif && c === a.P["sans-serif"] || a.A.ga && wa(a, b, c) ? ea() - a.Sa >= a.ea ? a.A.ga && wa(a, b, c) && (a.ta === k || a.ta.hasOwnProperty(a.C.getName())) ? xa(a, a.ia) : xa(a, a.Na) : setTimeout(n(function() {
            va(this)
        }, a), 25) : xa(a, a.ia)
    }
    function xa(a, b) {
        a.M.remove();
        a.N.remove();
        b(a.C)
    }
    function M(a, b, c, d) {
        this.j = b;
        this.G = c;
        this.ba = 0;
        this.wa = this.qa = l;
        this.ea = d;
        this.A = a.A
    }
    M.prototype.fa = function(a, b, c, d) {
        if (0 === a.length && d)
            ra(this.G);
        else {
            this.ba += a.length;
            d && (this.qa = d);
            for (d = 0; d < a.length; d++) {
                var e = a[d], f = b[e.getName()], g = this.G, h = e;
                r(g.v, [g.q.h(g.r, h.getName(), G(h).toString(), "loading")]);
                F(g, "fontloading", h);
                (new ua(n(this.Aa, this), n(this.Ba, this), this.j, e, this.A, this.ea, c, f)).start()
            }
        }
    };
    M.prototype.Aa = function(a) {
        var b = this.G;
        r(b.v, [b.q.h(b.r, a.getName(), G(a).toString(), "active")], [b.q.h(b.r, a.getName(), G(a).toString(), "loading"), b.q.h(b.r, a.getName(), G(a).toString(), "inactive")]);
        F(b, "fontactive", a);
        this.wa = j;
        ya(this)
    };
    M.prototype.Ba = function(a) {
        var b = this.G, c = ha(b.v, b.q.h(b.r, a.getName(), G(a).toString(), "active")), d = [], e = [b.q.h(b.r, a.getName(), G(a).toString(), "loading")];
        c || d.push(b.q.h(b.r, a.getName(), G(a).toString(), "inactive"));
        r(b.v, d, e);
        F(b, "fontinactive", a);
        ya(this)
    };
    function ya(a) {
        0==--a.ba && a.qa && (a.wa ? (a = a.G, r(a.v, [a.q.h(a.r, "active")], [a.q.h(a.r, "loading"), a.q.h(a.r, "inactive")]), F(a, "active")) : ra(a.G))
    }
    function za() {
        var a = [{
            name: "font-family",
            value: N.c[i + 1]
        }
        ];
        this.Ra = [N.c[i]];
        this.ma = a
    }
    function Aa(a) {
        for (var b = a.Ra.join(","), c = [], d = 0; d < a.ma.length; d++) {
            var e = a.ma[d];
            c.push(e.name + ":" + e.value + ";")
        }
        return b + "{" + c.join("") + "}"
    }
    function Ba(a) {
        this.j = a
    }
    Ba.prototype.toString = function() {
        return encodeURIComponent(this.j.V.location.hostname || this.j.da.location.hostname)
    };
    function Ca(a, b) {
        this.s = a;
        this.u = b
    }
    Ca.prototype.toString = function() {
        for (var a = [], b = 0; b < this.u.length; b++)
            for (var c = this.u[b], d = c.H(), c = c.H(this.s), e = 0; e < d.length; e++) {
                var f;
                a:
                {
                    for (f = 0; f < c.length; f++)
                        if (d[e] === c[f]) {
                            f = j;
                            break a
                        }
                        f = l
                    }
                    a.push(f ? 1 : 0)
            }
        a = a.join("");
        a = a.replace(/^0+/, "");
        b = [];
        for (d = a.length; 0 < d; d -= 4)
            c = a.slice(0 > d - 4 ? 0 : d - 4, d), b.unshift(parseInt(c, 2).toString(16));
        return b.join("")
    };
    function O(a) {
        this.Ta = a
    }
    O.prototype.h = function(a, b) {
        var c = b || {}, d = this.Ta.replace(/\{\/?([^*}]*)(\*?)\}/g, function(a, b, d) {
            return d && c[b] ? "/" + c[b].join("/") : c[b] || ""
        });
        d.match(/^\/\//) && (d = (a ? "https:" : "http:") + d);
        return d.replace(/\/*\?*($|\?)/, "$1")
    };
    function Da(a, b, c, d) {
        this.L = a;
        this.T = b;
        this.fb = c;
        this.gb = d;
        this.oa = {};
        this.na = {}
    }
    Da.prototype.H = function(a) {
        return a ? (this.oa[a] || this.T).slice(0) : this.T.slice(0)
    };
    Da.prototype.fa = function(a, b, c) {
        var d = [], e = {};
        Ea(this, b, d, e);
        a(d, e, c)
    };
    function Ea(a, b, c, d) {
        c.push(a.L);
        d[a.L] = a.H(b);
        a = a.na[b] || [];
        for (b = 0; b < a.length; b++) {
            for (var e = a[b], f = e.L, g = l, h = 0; h < c.length; h++)
                c[h] == f && (g = j);
            g || (c.push(f), d[f] = e.H())
        }
    }
    function Fa(a, b) {
        this.L = a;
        this.T = b
    }
    Fa.prototype.H = m("T");
    function Ga() {
        this.ka = this.ya = this.K = this.U = this.pa = j
    }
    function P(a) {
        return "Windows" === a.m
    }
    function R(a) {
        return P(a) && 0 === v(a.l, new u(5, 1)) || P(a) && 0 === v(a.l, new u(5, 2)) || P(a) && 0 === v(a.l, new u(6, 0)) || P(a) && w(a.l, new u(6, 1))
    }
    function S(a) {
        return "Macintosh" === a.m && (w(a.l, new u(10, 4)) || a.l.g === k)
    }
    function Ha(a, b) {
        return b.pa && ("iPhone" === a.m || "iPod" === a.m)
    }
    function Ia(a, b) {
        return Ha(a, b) && w(a.l, new u(4, 2))&&-1 === v(a.l, new u(5))
    }
    function Ja(a, b) {
        return b.U && "iPad" === a.m && w(a.l, new u(4, 2))&&-1 === v(a.l, new u(5))
    }
    function T(a, b) {
        return b.K && "Android" === a.m
    }
    function Ka(a, b) {
        return T(a, b) && w(a.l, new u(2, 2))&&-1 === v(a.l, new u(3, 1))
    }
    function La(a, b) {
        return T(a, b) && w(a.l, new u(3, 1))&&-1 === v(a.l, new u(4, 1))
    }
    function U(a) {
        return "Linux" === a.m || "Ubuntu" === a.m
    }
    function Ma(a) {
        return "Gecko" === a.B && 0 === v(a.F, new u(1, 9, 1))&&!/^b[1-3]$/.test(a.F.h || "")
    }
    function Na(a) {
        return "Safari" === a.getName() && "AppleWebKit" === a.B || "Unknown" === a.getName() && "AppleWebKit" === a.B && ("iPhone" === a.m || "iPad" === a.m || "iPod" === a.m)
    }
    function Oa(a) {
        return "Safari" === a.getName() && "AppleWebKit" === a.B && w(a.F, new u(525, 13))&&-1 === v(a.F, new u(534, 50))
    }
    function Pa(a) {
        return "Opera" === a.getName() && w(a.o, new u(10, 54))&&-1 === v(a.o, new u(11, 10))
    }
    function Qa(a) {
        return "BuiltinBrowser" === a.getName()
    }
    function Sa(a) {
        this.va = a
    }
    function Ta(a, b) {
        return b
    }
    var Ua = {
        Za: "a",
        $a: "b",
        eb: "d",
        cb: "f",
        Xa: "i"
    }, Va = {
        a: function(a, b) {
            return Oa(a) && R(a) || Qa(a) && (Ka(a, b) || T(a, b) && w(a.l, new u(4, 1))) || b.K && "Silk" === a.getName()&&-1 === v(a.o, new u(2)) && (Ka(a, b) || S) || b.K && "Silk" === a.getName() && w(a.o, new u(2)) && T(a, b) && w(a.l, new u(4, 1)) || Na(a) && (Ja(a, b) || Ia(a, b)) || Ma(a) && (R(a) || U(a)) || Pa(a) && (R(a) || U(a)) || ("Chrome" === a.getName() && 1 === v(a.o, new u(4, 0, 249))&&-1 === v(a.o, new u(6)) || 0 === v(a.o, new u(4, 0, 249)) && (a.o.h === k || 4 <= a.o.h)) && (R(a) || U(a) || S(a)) || "Chrome" === a.getName() &&
            w(a.o, new u(6)) && (Ja(a, b) || Ia(a, b)) || "AdobeAIR" === a.getName() && w(a.o, new u(2, 5)) && (P(a) && a.l.g === k || U(a))
        },
        b: function(a) {
            return Ma(a) && S(a) || Oa(a) && S(a) || Pa(a) && S(a) || "AdobeAIR" === a.getName() && w(a.o, new u(2, 5)) && S(a)
        },
        d: function(a, b) {
            return "Chrome" === a.getName() && w(a.o, new u(6)) && (R(a) || U(a) || S(a) || T(a, b) || "CrOS" === a.m || b.U && "iPad" === a.m && w(a.l, new u(5)) || Ha(a, b) && w(a.l, new u(5))) || "Gecko" === a.B && 1 === v(a.F, new u(1, 9, 1)) && (R(a) || U(a) || S(a) || T(a, b)) || "Safari" === a.getName() && ("AppleWebKit" === a.B && w(a.F,
            new u(534, 50))) && (R(a) || S(a)) || Na(a) && (b.U && "iPad" === a.m && w(a.l, new u(5)) || Ha(a, b) && w(a.l, new u(5))) || "Opera" === a.getName() && w(a.o, new u(11, 10)) && (R(a) || U(a) || S(a) || T(a, b)) || "MSIE" === a.getName() && 9 <= a.S && (P(a) && w(a.l, new u(6, 1)) || P(a) && 0 === v(a.l, new u(6, 0))) || "MSIE" === a.getName() && b.ya && "Windows Phone" === a.m && w(a.l, new u(8)) || Qa(a) && b.ka && "BlackBerry" === a.m && w(a.l, new u(10))
        },
        f: function(a, b) {
            return Qa(a) && La(a, b) || b.K && "Silk" === a.getName() && w(a.o, new u(2)) && (La(a, b) || U(a))
        },
        i: function(a) {
            return "MSIE" ===
            a.getName() && (w(a.o, new u(6, 0)) && (void 0 === a.S || 9 > a.S)) && R(a)
        }
    };
    function Wa(a, b) {
        var c = b || new Ga, d;
        for (d in Ua) {
            var e = Ua[d];
            if (Va[e](a, c))
                return e
        }
        return k
    }
    var Xa = {};
    Xa.i = new Sa(function(a, b, c) {
        for (var d = 0; d < b.length; d += 1) {
            var e = b[d], f = a.replace(/(-1|-2)$/, "").slice(0, 28) + "-" + e;
            c.push(new Fa(f, [e]))
        }
        a = {};
        for (e = 0; e < b.length; e++)
            c = b[e], d = c.charAt(1), (a[d] || (a[d] = [])).push(c);
        c = [[4, 3, 2, 1, 5, 6, 7, 8, 9], [7, 8, 9, 6, 5, 4, 3, 2, 1]];
        d = [];
        for (e = 0; e < c.length; e++)
            for (var f = c[e], g = 0; g < f.length; g++) {
                var h = f[g];
                if (a[h]) {
                    d = d.concat(a[h]);
                    break
                }
            }
        c = d;
        d = {};
        a = [];
        for (e = 0; e < c.length; e++)
            f = c[e], d[f] || (d[f] = j, a.push(f));
        c = [];
        for (d = 0; d < b.length; d++) {
            e = b[d];
            for (f = 0; f < a.length; f++)
                g = a[f], g == e &&
                c.push(g)
        }
        return c
    });
    var V = {};
    V.a = V.b = V.d = function() {
        return []
    };
    V.f = function(a) {
        return [new Ba(a)]
    };
    V.i = function(a, b, c) {
        return [new Ba(a), new Ca(b, c)]
    };
    function W(a) {
        this.j = a;
        this.Z = this.e = this.s = k;
        this.u = [];
        this.Q = [];
        this.xa = this.aa = k
    }
    W.prototype.supportsConfiguredBrowser = function() {
        return !!this.s
    };
    W.prototype.init = function() {
        if (0 < this.Q.length) {
            for (var a = [], b = 0; b < this.Q.length; b++)
                a.push(Aa(this.Q[b]));
            var b = this.j, a = a.join(""), c = this.j.createElement("style");
            c.setAttribute("type", "text/css");
            c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a));
            q(b, "head", c)
        }
    };
    W.prototype.load = function(a, b, c) {
        if (this.s) {
            for (var d = Xa[this.s] || new Sa(Ta), e = 0; e < this.u.length; e++) {
                for (var f = this.u[e], g = this.s, h = d, p = [], L = f.L.split(",")[0].replace(/"|'/g, ""), E = f.H(), Q = p, D = void 0, I = [], Ra = {}, la = 0; la < E.length; la++)
                    D = E[la], 0 < D.length&&!Ra[D] && (Ra[D] = j, I.push(D));
                E = I;
                h = h.va ? h.va(L, E, Q) : E;
                f.oa[g] = h;
                f.na[g] = p
            }
            if (this.aa) {
                d = V[this.s](this.j, this.s, this.u);
                e = this.s;
                f = [];
                for (g = 0; g < d.length; g++)
                    f.push(d[g].toString());
                d = {
                    format: e,
                    extras: f
                };
                c && (d.contextPath = c);
                d = this.aa.h(s(this.j), d);
                c = this.j;
                var d = c.createElement("link", {
                    rel: "stylesheet",
                    href: d
                }), Z = l;
                d.onload = function() {
                    Z || (Z = j)
                };
                d.onerror = function() {
                    Z || (Z = j)
                };
                q(c, "head", d)
            }
            if (a) {
                var ma = this, nb = this.s;
                ga(this.j, function() {
                    for (var c = 0; c < ma.u.length; c++)
                        ma.u[c].fa(a, nb, b && c == ma.u.length - 1)
                })
            }
        }
    };
    W.prototype.collectFontFamilies = function(a, b) {
        if (this.s)
            for (var c = 0; c < this.u.length; c++)
                Ea(this.u[c], this.s, a, b)
    };
    W.prototype.performOptionalActions = function() {
        if (this.ca) {
            var a = this, b = this.e, c = this.j;
            ga(this.j, function() {
                var d = a.ca;
                if (d.ua) {
                    var e = window.__adobewebfontsappname__, e = e ? e.toString().substr(0, 20): "", d = d.ua.h(s(c), {
                        host: encodeURIComponent(c.V.location.hostname || c.da.location.hostname),
                        app: encodeURIComponent(e),
                        _: ( + new Date).toString()
                    }), f = new Image(1, 1);
                    f.src = d;
                    f.onload = function() {
                        f.onload = k
                    }
                }
                d = a.ca;
                d.ja && (d = d.ja.h(b, c), q(c, "body", d))
            })
        }
    };
    function Ya(a, b, c, d) {
        this.Pa = a;
        this.la = k;
        this.j = b;
        this.e = c;
        this.v = d;
        this.t = []
    }
    Ya.prototype.Y = function(a) {
        this.t.push(a)
    };
    Ya.prototype.load = function(a, b) {
        var c = a, d = b || {};
        if ("string" == typeof c)
            c = [c];
        else if (!c ||!c.length)
            d = c || {}, c = [];
        if (c.length)
            for (var e = this, f = c.length, g = 0; g < c.length; g++) {
                var h = this.Pa.h(s(this.j), {
                    id: encodeURIComponent(c[g])
                });
                ia(this.j, h, function() {
                    0==--f && Za(e, d)
                })
            } else 
                Za(this, d)
    };
    function Za(a, b) {
        if (0 != a.t.length) {
            a.la = b.contextPath || ".";
            for (var c = new qa(a.j, a.v, b), d = l, e = 0; e < a.t.length; e++)
                a.t[e].init(), d = d || a.t[e].supportsConfiguredBrowser();
            if (d) {
                r(c.v, [c.q.h(c.r, "loading")]);
                F(c, "loading");
                for (var f = new M(a.e, a.j, c, b.timeout), c = function(a, b, c) {
                    for (var d = [], e = 0; e < a.length; e += 1) {
                        var Q = a[e];
                        if (b[Q])
                            for (var D = b[Q], I = 0; I < D.length; I += 1)
                                d.push(new H(Q, D[I]));
                        else 
                            d.push(new H(Q))
                    }
                    f.fa(d, {}, k, c)
                }, d = 0; d < a.t.length; d++)
                    e = a.t[d], e.supportsConfiguredBrowser() && (e.load(c, d == a.t.length -
                    1, a.la), e.performOptionalActions(window))
                } else 
                    ra(c);
            a.t = []
        }
    }
    function $a(a) {
        this.I = a;
        this.t = []
    }
    $a.prototype.Y = function(a) {
        this.t.push(a)
    };
    $a.prototype.load = function() {
        var a = this.I.__webfonttypekitmodule__;
        if (a)
            for (var b = 0; b < this.t.length; b++) {
                var c = this.t[b], d = a[c.xa];
                d && d(function(a, b, d) {
                    a = [];
                    b = {};
                    var h = (new ka(navigator.userAgent, document)).parse(), p = c;
                    p.e = h;
                    p.s = Wa(p.e, p.Z);
                    c.supportsConfiguredBrowser() && (c.init(), c.load(k), c.collectFontFamilies(a, b), c.performOptionalActions(window));
                    d(c.supportsConfiguredBrowser(), a, b)
                })
            }
    };
    function ab(a, b, c, d) {
        this.I = a;
        this.z = b;
        this.Ma = c;
        this.ra = d
    }
    ab.prototype.h = function(a, b) {
        var c = this.z.createElement("img");
        c.setAttribute("width", 62);
        c.setAttribute("height", 25);
        c.setAttribute("src", this.Ma.h(s(b)));
        c.setAttribute("class", "typekit-badge");
        c.setAttribute("alt", "Fonts by Typekit");
        c.setAttribute("title", "Information about the fonts used on this site");
        c.style.position = "fixed";
        c.style.zIndex = 2E9;
        c.style.right = 0;
        c.style.bottom = 0;
        c.style.cursor = "pointer";
        c.style.border = 0;
        "Opera" != a.getName() && (c.style.content = "none");
        c.style.display = "inline";
        c.style["float"] =
        "none";
        c.style.height = "25px";
        c.style.left = "auto";
        c.style.margin = 0;
        c.style.maxHeight = "25px";
        c.style.maxWidth = "62px";
        c.style.minHeight = "25px";
        c.style.minWidth = "62px";
        c.style.orphans = 2;
        c.style.outline = "none";
        c.style.overflow = "visible";
        c.style.padding = 0;
        c.style.pageBreakAfter = "auto";
        c.style.pageBreakBefore = "auto";
        c.style.pageBreakInside = "auto";
        c.style.tableLayout = "auto";
        c.style.textIndent = 0;
        c.style.top = "auto";
        c.style.unicodeBidi = "normal";
        c.style.verticalAlign = "baseline";
        c.style.visibility = "visible";
        c.style.widows =
        2;
        c.style.width = "65px";
        if (this.ra) {
            var d = this.z, e = this.ra;
            bb(this, c, "click", function() {
                d.location.href = e
            })
        }
        var f = a.m;
        if ("MSIE" == a.getName() && "Windows Phone" != f) {
            c.style.position = "absolute";
            var g = this, h = function() {
                var a = cb(g, "scrollLeft", "scrollTop"), b = cb(g, "clientWidth", "clientHeight");
                c.style.bottom = "auto";
                c.style.right = "auto";
                c.style.top = a[1] + b[1] - 25 + "px";
                c.style.left = a[0] + b[0] - 3 - 62 + "px"
            };
            bb(this, this.I, "scroll", h);
            bb(this, this.I, "resize", h)
        }
        if ("iPhone" == f || "iPod" == f || "iPad" == f || "Android" == f || "Windows Phone" ==
        f || "BlackBerry" == f)
            c.style.display = "none";
        return c
    };
    function cb(a, b, c) {
        var d = 0, e = 0;
        a = a.z;
        if (a.documentElement && (a.documentElement[b] || a.documentElement[c]))
            d = a.documentElement[b], e = a.documentElement[c];
        else if (a.body && (a.body[b] || a.body[c]))
            d = a.body[b], e = a.body[c];
        return [d, e]
    }
    function bb(a, b, c, d) {
        if (b.attachEvent) {
            var e = a.I;
            b["e" + c + d] = d;
            b[c + d] = function() {
                b["e" + c + d](e.event)
            };
            b.attachEvent("on" + c, b[c + d])
        } else 
            b.addEventListener(c, d, l)
    }
    var db = (new ka(navigator.userAgent, document)).parse();
    window.Typekit || (window.Typekit = {});
    if (!window.Typekit.load) {
        var eb = window.Typekit.config || {}, fb = k;
        eb.k && (fb = new O(eb.k));
        var X = new Ya(fb, new fa(window), db, document.documentElement), gb = new $a(window);
        window.Typekit.load = function() {
            X.load.apply(X, arguments)
        };
        window.Typekit.addKit = function() {
            X.Y.apply(X, arguments)
        }
    }
    var hb, ib = k, jb = k, kb = k, lb, Y, $, N = window.Typekit.config || {};
    N.b && (ib = new O(N.b), jb = new ab(window, document, ib, N.bu));
    N.p && (kb = new O(N.p));
    lb = new function() {
        var a = kb;
        this.ja = jb;
        this.ua = a
    };
    $ = new W(new fa(window));
    $.ca = lb;
    Y = new Ga;
    Y.pa=!N.si;
    Y.U=!N.st;
    Y.K=!N.sa;
    Y.ya=!N.sw;
    Y.ka=!N.sb;
    $.Z = Y;
    N.w && ($.xa = N.w);
    N.f && (hb = new O(N.f), $.aa = hb);
    var i;
    if (N.fn)
        for (i = 0; i < N.fn.length; i += 2)
            $.u.push(new Da(N.fn[i], N.fn[i + 1]));
    if (N.c)
        for (i = 0; i < N.c.length; i += 2)
            $.Q.push(new za);
    var mb;
    if (mb = gb)
        mb=!!gb.I.__webfonttypekitmodule__;
    mb ? (gb.Y($), gb.load()) : ($.e = db, $.s = Wa($.e, $.Z), window.Typekit.addKit($));
})(this, document);


