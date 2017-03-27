"use strict";
function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++)
            r[t] = e[t];
        return r
    }
    return Array.from(e)
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++)
            r[t] = e[t];
        return r
    }
    return Array.from(e)
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function commonError(e) {
    swal({
        title: "出错啦",
        text: e.data.message || "服务端未知错误",
        confirmButtonText: "知道啦"
    })
}
angular.$ = function(e) {
    return e = angular.isString(e) ? document.querySelectorAll(e) : e,
    angular.element(e)
}
,
angular.element.prototype.param = function(e) {
    if (e) {
        var t = "";
        for (var r in e)
            /^\$/.test(r) || (t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]) + "&");
        return t.slice(0, -1)
    }
}
,
angular.element.prototype.find = function(e) {
    if (!e)
        return angular.$();
    var t = [].slice.call(document.querySelectorAll(e))
      , r = [].slice.call(this[0].getElementsByTagName("*"))
      , n = [];
    return t.forEach(function(e) {
        -1 !== r.indexOf(e) && n.push(e)
    }),
    angular.$(n)
}
,
angular.module("meleme", ["ngRoute", "ngResource", "ngAnimate", "infinite-scroll", "angular-carousel"]).config(["$interpolateProvider", "$compileProvider", "$resourceProvider", "$provide", function(e, t, r, n) {
    r.defaults.actions.put = {
        method: "PUT"
    },
    r.defaults.actions.post = {
        method: "POST"
    },
    t.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|eleme|file|tel|weixin):/),
    e.startSymbol("[[").endSymbol("]]"),
    n.decorator("ngClickDirective", ["$delegate", function(e) {
        return e.shift(),
        e
    }
    ])
}
]),
angular.module("meleme.test", ["meleme"]),
angular.module("meleme.main", ["meleme", "batchrequest", "UBT"]).config(["$routeProvider", "$locationProvider", function(e, t) {
    t.html5Mode({
        enabled: !0,
        requireBase: !1
    }),
    e.when("/wechat", {
        templateUrl: "/html/service/wechat.html",
        controller: "wechatCtrl"
    }),
    e.when("/wechatpublic", {
        template: "<div></div>",
        controller: "wechatpublicCtrl"
    }),
    e.when("/pay", {
        templateUrl: "/html/pay/base.html",
        controller: "payCtrl"
    }),
    e.when("/", {
        redirectTo: "/home"
    }),
    e.when("/home", {
        templateUrl: "/html/home/city.html",
        controller: "homeCtrl"
    }),
    e.when("/city/:id", {
        templateUrl: "/html/home/search.html",
        controller: "homeSearchCtrl"
    }),
    e.when("/search/:geohash", {
        templateUrl: "/html/geoplace/search.html",
        controller: "geoSearchCtrl",
        controllerAs: "search"
    }),
    e.when("/login", {
        templateUrl: "/html/account/login.html",
        controller: "loginCtrl"
    }),
    e.when("/register", {
        templateUrl: "/html/account/register.html",
        controller: "registerCtrl"
    }),
    e.when("/loginmsg", {
        templateUrl: "/html/account/loginmsg.html",
        controller: "loginmsgCtrl"
    }),
    e.when("/forget", {
        templateUrl: "/html/account/findPassword.html",
        controller: "forgetCtrl"
    }),
    e.when("/findpw", {
        redirectTo: "/forget"
    }),
    e.when("/forget/reset", {
        templateUrl: "/html/account/setpassword.html",
        controller: "resetCtrl"
    }),
    e.when("/forget/success", {
        templateUrl: "/html/account/resetsuccess.html",
        controller: "resetCtrl"
    }),
    e.when("/agreement", {
        template: "<div></div>",
        controller: ["$rootScope", function(e) {
            location.href = "//h5." + e.ROOTHOST + "/service/agreement/"
        }
        ]
    }),
    e.when("/404", {
        templateUrl: "/html/base/404.html",
        controller: "nofoundCtrl"
    }),
    e.when("/cart", {
        templateUrl: "/html/order/cart.html",
        controller: "cartCtrl"
    }),
    e.when("/cart/fetch", {
        templateUrl: "/html/order/cartfetch.html",
        controller: "cartFetchCtrl"
    }),
    e.when("/order/:id/success", {
        templateUrl: "/html/order/success.html",
        controller: "orderSuccessCtrl"
    }),
    e.when("/trade", {
        templateUrl: "/html/trade/list.html",
        controller: "tradeCtrl"
    }),
    e.when("/trade/:id", {
        templateUrl: "/html/trade/order.html",
        controller: "tradeOrderCtrl"
    }),
    e.when("/rating/:id", {
        templateUrl: "/html/trade/rating.html",
        controller: "tradeRatingCtrl"
    }),
    e.when("/cancelreason/:id", {
        templateUrl: "/html/trade/cancelReason.html",
        controller: "tradeCancelOrderCtrl"
    }),
    e.when("/cancelorder/:id", {
        templateUrl: "/html/trade/cancelOrder.html",
        controller: "tradeCancelOrderCtrl"
    }),
    e.when("/refundorder/:id", {
        templateUrl: "/html/trade/refundOrder.html",
        controller: "tradeRefundOrderCtrl"
    }),
    e.when("/refundapply/:id", {
        templateUrl: "/html/trade/refundApply.html",
        controller: "tradeRefundOrderCtrl"
    }),
    e.when("/trade/timeline/:id", {
        templateUrl: "/html/trade/timeline.html",
        controller: "tradeTimelineCtrl"
    }),
    e.when("/debug/:action", {
        template: '<pre ng-bind="json"></pre>',
        controller: ["$routeParams", "$scope", function(e, t) {
            "enable" === e.action ? $localStorage.setItem("DEBUG_WECHAT", "true") : $localStorage.removeItem("DEBUG_WECHAT"),
            t.json = JSON.stringify(localStorage, 0, 2)
        }
        ]
    }),
    e.when("/spell", {
        template: "<div></div>",
        controller: ["$rootScope", function(e) {
            location.href = "//h5." + e.ROOTHOST + "/spell/" + (location.search.replace(/^\?/, "#") + location.hash)
        }
        ]
    }),
    e.when("/hongbao", {
        template: "<div></div>",
        controller: function() {
            location.href = "/activities/hongbao" + location.search
        }
    }),
    e.when("/hongbaobaida", {
        template: "<div></div>",
        controller: ["$rootScope", function(e) {
            location.href = "//h." + e.ROOTHOST + "/baida" + location.search
        }
        ]
    }),
    e.when("/orderactivity/:id", {
        template: "<div></div>",
        controller: ["$routeParams", function(e) {
            location.href = "/activities/tradebanner?id=" + e.id
        }
        ]
    }),
    e.when("/profile", {
        templateUrl: "/html/profile/base.html",
        controller: "profileCtrl"
    }),
    e.when("/profile/bind", {
        templateUrl: "/html/profile/bindMobile.html",
        controller: "bindMobileCtrl"
    }),
    e.when("/profile/unbind", {
        templateUrl: "/html/profile/unbindMobile.html",
        controller: "unbindMobileCtrl"
    }),
    e.when("/profile/service", {
        templateUrl: "/html/profile/service.html",
        controller: "profileServiceCtrl"
    }),
    e.when("/profile/info", {
        templateUrl: "/html/profile/info.html",
        controller: "profileInfoCtrl"
    }),
    e.when("/profile/setusername", {
        templateUrl: "/html/profile/setUsername.html",
        controller: "profileSetUsernameCtrl"
    }),
    e.when("/profile/setpw", {
        templateUrl: "/html/profile/setPassword.html",
        controller: "profileSetPasswordCtrl"
    }),
    e.when("/profile/changepw", {
        templateUrl: "/html/profile/changePasswordByMobile.html",
        controller: "profileChangePasswordByMobileCtrl"
    }),
    e.when("/profile/changepw/mobile", {
        templateUrl: "/html/profile/changePasswordByMobile.html",
        controller: "profileChangePasswordByMobileCtrl"
    }),
    e.when("/profile/changepw/old", {
        templateUrl: "/html/profile/changePasswordByOld.html",
        controller: "profileChangePasswordByOldCtrl"
    }),
    e.when("/profile/info/address", {
        templateUrl: "/html/profile/address.html",
        controller: "profileAddressCtrl"
    }),
    e.when("/profile/info/address/add", {
        templateUrl: "/html/profile/addAddress.html",
        controller: "profileAddressCtrl"
    }),
    e.when("/profile/hongbao", {
        templateUrl: "/html/profile/hongbao.html",
        controller: "profileHongbaoCtrl"
    }),
    e.when("/profile/hongbao/exchange", {
        templateUrl: "/html/profile/hongbaoExchange.html",
        controller: "profileHongbaoExchangeCtrl"
    }),
    e.when("/profile/balance", {
        templateUrl: "/html/profile/balance.html",
        controller: "profileBalanceCtrl"
    }),
    e.when("/profile/recharge", {
        templateUrl: "/html/profile/recharge.html",
        controller: "profileRechargeCtrl"
    }),
    e.when("/profile/withdraw", {
        templateUrl: "/html/profile/withdraw.html",
        controller: "profileWithdrawCtrl"
    }),
    e.when("/profile/points", {
        template: "<div></div>",
        controller: ["$rootScope", function(e) {
            location.href = "//h5." + e.ROOTHOST + "/profile/points/"
        }
        ]
    }),
    e.when("/profile/member", {
        template: "<div></div>",
        controller: ["$rootScope", function(e) {
            location.href = "//h5." + e.ROOTHOST + "/vipcard/"
        }
        ]
    }),
    e.when("/profile/member/query", {
        template: "<div></div>",
        controller: ["$rootScope", function(e) {
            location.href = "//h5." + e.ROOTHOST + "/vipcard/"
        }
        ]
    }),
    e.when("/profile/member/charge", {
        template: "<div></div>",
        controller: ["$rootScope", function(e) {
            location.href = "//h5." + e.ROOTHOST + "/vipcard/binding.html"
        }
        ]
    }),
    e.when("/profile/explain/:page", {
        templateUrl: "/html/profile/explain.html",
        controller: "profileExplainCtrl"
    }),
    e.when("/profile/gift", {
        templateUrl: "/html/profile/gift.html",
        controller: "profileGiftCtrl"
    }),
    e.when("/profile/gift/:user_gift_id", {
        templateUrl: "/html/profile/profileGiftDetail.html",
        controller: "profileGiftDetailCtrl"
    }),
    e.when("/commend", {
        templateUrl: "/html/commend/base.html",
        controller: "commendCtrl"
    }),
    e.when("/commend/detail", {
        templateUrl: "/html/commend/detail.html",
        controller: "commendDetailCtrl"
    }),
    e.when("/gift", {
        templateUrl: "/html/gift/list.html",
        controller: "giftCtrl"
    }),
    e.when("/gift/detail/:id", {
        templateUrl: "/html/gift/detail.html",
        controller: "giftDetailCtrl"
    }),
    e.when("/gift/banner/:id", {
        templateUrl: "/html/gift/bannerDetail.html",
        controller: "BannerDetailCtrl"
    }),
    e.when("/gift/category/:id", {
        templateUrl: "/html/gift/categoryTemplate.html",
        controller: "categoryCtrl"
    }),
    e.when("/gift/activities/:id", {
        templateUrl: "/html/gift/detail.html",
        controller: "activityDetailCtrl"
    }),
    e.when("/gift/confirm/:id", {
        templateUrl: "/html/gift/giftConfirm.html",
        controller: "giftConfirmCtrl"
    }),
    e.when("/place", {
        redirectTo: "/home"
    }),
    e.when("/place/:geohash", {
        templateUrl: "/html/geoplace/geo.html",
        controller: "geoNormalCtrl"
    }),
    e.when("/:restaurantid", {
        redirectTo: "/shop/:restaurantid"
    }),
    e.when("/:restaurantid/info/auth", {
        redirectTo: "/shop/:restaurantid/info/auth"
    }),
    e.when("/shop/:restaurantid", {
        templateUrl: "/html/restaurant/menu.html",
        controller: "restaurantCtrl"
    }),
    e.when("/shop/:restaurantid/ratings", {
        templateUrl: "/html/restaurant/ratings.html",
        controller: "restaurantRatingsCtrl"
    }),
    e.when("/shop/:restaurantid/info", {
        templateUrl: "/html/restaurant/info.html",
        controller: "restaurantInfoCtrl"
    }),
    e.when("/shop/:restaurantid/info/auth", {
        templateUrl: "/html/restaurant/auth.html",
        controller: "restaurantAuthCtrl"
    }),
    e.when("/shop/:restaurantid/info/license/:type", {
        templateUrl: "/html/restaurant/license.html",
        controller: "restaurantLicenseCtrl"
    }),
    e.when("/shop/:restaurantid/:foodid", {
        templateUrl: "/html/restaurant/food.html",
        controller: "restaurantFoodCtrl"
    }),
    e.when("/shop/:restaurantid/:id/photos", {
        templateUrl: "/html/restaurant/foodphoto.html",
        controller: "restaurantFoodPhotosCtrl"
    }),
    e.otherwise({
        redirectTo: "/404"
    })
}
]).constant("RESTAURANT_SECTIONS_HEIGHT", {
    header: {
        className: "eleme-header",
        height: 44
    },
    tab: {
        className: "restaurant-tabs",
        height: 38
    },
    cart: {
        className: "menu-cart",
        height: 32
    }
}).run(["$q", "$rootScope", "UBT", function(e, t, r) {
    r.params.city_id = function() {
        return localStorage.getItem("CITY_ID") || 0
    }
    ;
    var n = function() {
        return e(function(e) {
            var t = new Image;
            t.onload = function() {
                e(!0)
            }
            ,
            t.onerror = function() {
                e(!1)
            }
            ,
            t.src = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA=="
        })
    }
    ;
    t.checkedWebp = n()
}
]),
angular.module("meleme.main").filter("split", [function() {
    return function(e, t) {
        return t = t || "-",
        e.split("").join(t)
    }
}
]).filter("abs", [function() {
    return function(e) {
        return Math.abs(+e)
    }
}
]).filter("smallerimg", [function() {
    return function(e) {
        return e.replace(/\/0$/, "/64")
    }
}
]).filter("truncate", [function() {
    return function(e, t, r) {
        return t = isNaN(t) ? t : 10,
        r = String(r) || "…",
        e.length > t || e.length - r.length > t ? String(e).substring(0, t - r.length) + r : e
    }
}
]).filter("hideMobileNumber", [function() {
    return function(e) {
        return e = e.slice(0, 3) + "****" + e.slice(-4)
    }
}
]).filter("flatten", [function() {
    return function(e) {
        var t = [];
        return t = t.concat.apply(t, e)
    }
}
]).filter("to_trusted", ["$sce", function(e) {
    return function(t) {
        return e.trustAsHtml(t)
    }
}
]).filter("mobileMasker", function() {
    return function(e) {
        return String(e).replace(/^(\w{3})(\w{4})/, "$1****")
    }
}).filter("deliverTime", function() {
    return function(e) {
        if (e) {
            var t, r, n = new Date(Date.now() + 288e6).toISOString().match(/(..):(..)/)[0];
            return e.some(function(e) {
                return t = e.match(/..:../g)[0],
                t > n ? (r = t,
                !0) : void 0
            }),
            r || "明天" + e[0].match(/..:../)[0]
        }
    }
}).filter("maxDigitsNumber", [function() {
    return function(e, t) {
        t = 0 | t,
        e = parseFloat(e).toFixed(t);
        var r = ("" + e).split(".")[1]
          , n = 0;
        if (void 0 !== r) {
            r = r.split("").reverse(),
            n = r.length;
            for (var o = 0; n > o && "0" === r[o]; ++o)
                ;
            n -= o,
            (t > n || isNaN(t) || 0 > t) && (t = n)
        } else
            t = 0;
        return e = parseFloat(e).toFixed(t)
    }
}
]).filter("distanceFormat", function() {
    return function(e) {
        return !e || isNaN(Number(e)) ? null : Number(e) >= 1e3 ? Number(e) / 1e3 + "千米" : Number(e) + "米"
    }
}).filter("appUrlFormat", ["$rootScope", "UserAgent", function(e, t) {
    return function(r) {
        return t.isFromApp && "#" !== r[0] ? "/" === r[0] ? "eleme://web?url=" + encodeURIComponent(e.MOBILEORIGIN + r) + "&animation_type=1" : /^https?:/.test(r) ? "eleme://web?url=" + encodeURIComponent(r) + "&animation_type=1" : r : r
    }
}
]).filter("hashToPath", function() {
    return function(e) {
        return "string" == typeof e ? e.replace(/^(\w)(\w\w)(\w{29}(\w*))$/, "/$1/$2/$3.$4") : e
    }
}).filter("timeDiff", [function() {
    return function(e) {
        var t = (new Date).getTime()
          , r = e.split("-");
        r = (t - new Date(r[0],r[1] - 1,r[2]).getTime()) / 864e5 - 1;
        var n = r > 0 ? " 天前" : " 天后";
        return r = Math.abs(r.toFixed()),
        r ? r + n : "今天后"
    }
}
]),
void function() {
    var e = document.cookie.match(/(?:^|; )track_fingerprint_1=(.*?)(?:; |$)|$/)[1];
    if (!e) {
        var t = new Fingerprint
          , r = t.get()
          , n = document.cookie.match(/(?:^|; )track_id=(.*?)(?:; |$)|$/)[1]
          , o = new XMLHttpRequest;
        o.open("POST", "/restapi/v1/browser_fingerprints", !0);
        var i = {
            track_id: n,
            json_string: JSON.stringify(r)
        };
        o.send(JSON.stringify(i)),
        e = t.murmurhash3_32_gc(JSON.stringify(i), 31);
        var a = document.domain.match(/[\w-]+\.?[\w-]+$/)[0];
        document.cookie = "track_fingerprint_1=" + e + "; Expires=Wed, 31 Dec 2098 16:00:00 GMT; Domain=" + a + "; Path=/"
    }
}();
var localStorage, $localStorage;
void function() {
    for (var e = ""; e.length < 32; )
        e += Math.floor(Math.pow(36, 10) * Math.random()).toString(36);
    try {
        localStorage.setItem(e, e),
        e === localStorage.getItem(e) && localStorage.removeItem(e),
        $localStorage = localStorage
    } catch (t) {
        $localStorage = {};
        var r = {}
          , n = e;
        $localStorage.setItem = function(e, t) {
            r[n + e] = t + ""
        }
        ,
        $localStorage.getItem = function(e) {
            return n + e in r ? r[n + e] : null
        }
        ,
        $localStorage.removeItem = function(e) {
            delete r[n + e]
        }
        ,
        $localStorage.clear = function() {
            r = {}
        }
    }
}();
var _slicedToArray = function() {
    function e(e, t) {
        var r = []
          , n = !0
          , o = !1
          , i = void 0;
        try {
            for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value),
            !t || r.length !== t); n = !0)
                ;
        } catch (l) {
            o = !0,
            i = l
        } finally {
            try {
                !n && s["return"] && s["return"]()
            } finally {
                if (o)
                    throw i
            }
        }
        return r
    }
    return function(t, r) {
        if (Array.isArray(t))
            return t;
        if (Symbol.iterator in Object(t))
            return e(t, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}()
  , _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r),
        n && e(t, n),
        t
    }
}();
angular.module("meleme").factory("Account", ["$resource", "$location", "$rootScope", function(e, t, r) {
    return e(r.RESTBASE + "/v1/:action/:param", {
        action: "@action",
        param: "@param"
    })
}
]).factory("Mobile", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/user/mobile/:way", {
        way: "@way"
    }, {
        bindMobile: {
            method: "PUT"
        }
    })
}
]),
angular.module("meleme").factory("Address", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/users/:user_id/addresses/:address_id", {
        user_id: "@user_id",
        address_id: "@address_id"
    })
}
]).factory("Poi", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/pois/:way", {
        way: "@way"
    })
}
]),
angular.module("batchrequest", ["httphook"]).run(["httphook", "batchrequest.BatchHandler", function(e, t) {
    var r = new t("/restapi/batch",function(e) {
        e.url = e.url.replace(/^\/restapi/, "")
    }
    );
    e.post(/^\/restapi\/v1\/csrf_token/, r),
    e.get(/^\/restapi\/v1\//, r)
}
]).factory("batchrequest.BatchHandler", ["$http", "$q", function(e, t) {
    return function(r, n) {
        var o, i = [], a = function() {
            var t = i.splice(0);
            if (o = null ,
            1 === t.length)
                return t[0].promise.resolve();
            var a = {
                timeout: 1e4,
                requests: []
            };
            angular.forEach(t, function(e) {
                var t = {
                    method: e.req.method,
                    url: e.req.url
                };
                "function" == typeof n && n(t),
                a.requests.push(t)
            }),
            e.post(r, a).then(function(e) {
                angular.forEach(e.data, function(e, r) {
                    var n = t[r];
                    n.res.status = e.code,
                    n.res.data = e.body,
                    n.promise.resolve(!1)
                })
            }, function() {
                angular.forEach(t, function(e, r) {
                    t[r].promise.resolve()
                });
                var e = location.host.replace(/^.*?(?=[^.\d]+\.[^.\d]+$)/, "");
                document.cookie = "BATCH=false; Domain=" + e + "; Path=/; Expires=" + new Date(Date.now() + 864e5).toGMTString()
            })
        }
        , s = function(e) {
            i.push(e),
            o || (o = setTimeout(a))
        }
        ;
        return function(e, r) {
            if ("false" !== document.cookie.match(/(?:; |^)BATCH=([^;]*)|$/)[1]) {
                var n = t.defer();
                return s({
                    req: e,
                    res: r,
                    promise: n
                }),
                n.promise
            }
        }
    }
}
]),
angular.module("meleme").controller("cartCtrl", ["$scope", "$rootScope", "$routeParams", "$location", "Spell", "SpellStatus", "Restaurant", "Cart", "I18N", function(e, t, r, n, o, i, a, s, l) {
    var c = n.search();
    ("sale" === r.source || "sales" === r.eleme_redirect) && (e.isFromSales = !0,
    t.Page.title = "限时抢购");
    var u = function() {
        n.url("/spell?cartId=" + c.cartId + "&sig=" + c.sig)
    }
    ;
    if (s.init(),
    e.spell = {
        enable: !1,
        finish: !1
    },
    e.spell.enable = !!c.spell,
    t.bodyWhite = 0,
    e.coupon = {
        show: !1,
        errorMsg: null
    },
    e.list = s.list,
    e.totalAmount = s.totalAmount,
    e.totalPrice = s.totalPrice,
    e.getRestaurant = s.getRestaurant,
    e.removeFood = s.remove,
    e.checkStatus = function() {
        e.spell.enable ? n.url("/cart" + e.spell.url) : a.get({
            id: s.getRestaurant().id
        }).$promise.then(function(e) {
            var t = [2, 4, 8].indexOf(e.status);
            -1 !== t ? swal({
                title: "温馨提示",
                text: l.restaurantNotes[t],
                confirmButtonText: "确定"
            }, function() {
                s.clear(),
                n.url("/place/" + $localStorage.getItem("geohash"))
            }) : n.url("/cart")
        })
    }
    ,
    "/cart" === n.path() && wechat("hideOptionMenu"),
    e.spell.enable) {
        e.cartTitle = "已选择美食",
        e.spell.url = "?cartId=" + c.cartId + "&sig=" + c.sig + "&spell=1";
        var d, m = function() {
            return "/spell" === n.path() && d ? clearTimeout(d) : void o.get({
                cartId: c.cartId,
                sig: c.sig
            }).$promise.then(function(t) {
                t.error && swal({
                    title: "出错啦",
                    text: "拼单状态出问题了，请返回查看状态！",
                    type: "warning"
                }, function() {
                    location.href = "/spell?spell=1&cartId=" + c.cartId + "&sig=" + c.sig
                }),
                i(t) > 0 && !e.spell.finish && (1 === i(t) ? swal({
                    title: "商品已提交",
                    text: "您可点击左上角「关闭」返回微信，或点击「确认」查看拼单状态。",
                    confirmButtonText: "确定"
                }, function(e) {
                    e && (location.href = "/spell?spell=1&cartId=" + c.cartId + "&sig=" + c.sig)
                }) : swal({
                    title: "出错啦",
                    text: "拼单已经停止，请返回查看状态！",
                    type: "warning"
                }, function(e) {
                    e && (location.href = "/spell?spell=1&cartId=" + c.cartId + "&sig=" + c.sig)
                }))
            })
        }
        ;
        m(),
        d = setTimeout(m, 1e4)
    } else
        e.cartTitle = "美食篮子",
        e.spell.enable = !1;
    e.checkCart = function() {
        if (e.spell.enable || n.url("/delivery?total=" + e.totalPrice() + "&name=" + s.getRestaurant().name_for_url + "&restaurantid=" + s.getRestaurant().id),
        !e.spellName)
            return e.spellForm.$setDirty();
        var t = [];
        for (var r in s.list)
            t.push({
                id: Number(r),
                quantity: s.list[r].quantity,
                garnish: []
            });
        o.save({
            cartId: c.cartId,
            sig: c.sig
        }, {
            name: e.spellName,
            group: t,
            avatar: ""
        }, function(t) {
            "ok" === t.status && ($localStorage.setItem("spellCartName", JSON.stringify(e.spellName)),
            $localStorage.setItem("spellCartId", JSON.stringify(c.cartId)),
            s.clear(),
            e.spell.finish = !0,
            u())
        })
    }
}
]).controller("cartFetchCtrl", ["Cart", "$location", function(e, t) {
    var r = e.getInfo()
      , n = r.id
      , o = r.sig;
    e.fetch(n, o).$promise.then(function() {
        if (0 === Object.keys(e.list).length)
            return void t.url("/home");
        var r = t.url().match(/(\?.*)/);
        r = r && r[1] || "",
        t.url("/cart" + r)
    })
}
]).directive("cartControl", ["Cart", function(e) {
    return {
        restrict: "E",
        templateUrl: "/html/restaurant/cartcontrol.html",
        scope: {
            restaurant: "=",
            food: "="
        },
        link: function(t) {
            t.cart = {},
            t.cart.list = e.list
        }
    }
}
]).directive("cartAdd", ["Cart", function(e) {
    return {
        restrict: "E",
        link: function(t) {
            var r = t.food
              , n = t.restaurant || t.getRestaurant();
            (5 === n.status || 1 === n.status) && (e.isEmpty() && e.setRestaurant(n),
            t.add = function() {
                if (n.id === e.getRestaurant().id || e.isEmpty())
                    e.add(r);
                else {
                    var t = confirm("你的美食篮子里有其它商家的美食，清空美食篮子吗？");
                    if (!t)
                        return;
                    e.clear(),
                    e.setRestaurant(n),
                    e.add(r)
                }
            }
            )
        }
    }
}
]).directive("cartDecrease", ["Cart", function(e) {
    return {
        restrict: "E",
        link: function(t) {
            var r = t.restaurant || t.getRestaurant();
            (5 === r.status || 1 === r.status) && (t.decrease = function() {
                e.find(t.food) && e.decrease(t.food)
            }
            )
        }
    }
}
]).directive("menuAmount", ["Cart", function(e) {
    return {
        restrict: "EA",
        link: function(t) {
            t.list = e.list,
            t.$watch("list", function() {
                t.amount = e.menuAmount(t.menu)
            }, !0)
        }
    }
}
]).factory("cartVendor", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/carts/:cart_id/:action/:method", {
        cart_id: "@cart_id",
        action: "@action",
        method: "@method"
    }, {
        post: {
            method: "POST"
        },
        change: {
            method: "PATCH"
        },
        clear: {
            method: "POST",
            params: {
                _method: "DELETE"
            }
        },
        repeat: {
            method: "POST",
            params: {
                action: "restore"
            }
        }
    })
}
]).factory("Cart", ["cartVendor", "$q", "$rootScope", "$location", function(e, t, r, n) {
    var o = sessionStorage.getItem("isFromWechatpublic") || null
      , i = {
        list: {},
        getRemote: function() {
            return a.get(a.id, a.sig)
        },
        fetch: function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? a.id : arguments[0]
              , t = arguments.length <= 1 || void 0 === arguments[1] ? a.sig : arguments[1];
            return a.fetch(e, t)
        },
        getRestaurant: function() {
            return angular.copy(a.restaurant)
        },
        setRestaurant: function(e) {
            var t = ["id", "name", "name_for_url", "minimum_order_amount", "delivery_fee", "minimum_free_delivery_amount", "status", "is_coupon_enabled"];
            for (var r in e)
                -1 !== t.indexOf(r) && (a.restaurant[r] = e[r]);
            $localStorage.setItem("cartRestaurant", JSON.stringify(a.restaurant))
        },
        add: function(e) {
            var t = {
                id: e.id,
                name: e.name,
                category_id: e.category_id,
                price: e.price,
                stock: e.stock,
                must_pay_online: e.must_pay_online,
                quantity: 1
            };
            return this.list[e.id] ? this.list[e.id].quantity++ : this.list[e.id] = t,
            $localStorage.setItem("cartList", JSON.stringify(this.list)),
            this.list
        },
        decrease: function(e) {
            return this.list[e.id] && this.list[e.id].quantity > 1 ? --this.list[e.id].quantity : 1 === this.list[e.id].quantity && this.list[e.id] && delete this.list[e.id],
            $localStorage.setItem("cartList", JSON.stringify(this.list)),
            this.list
        },
        setList: function(e) {
            for (var t in this.list)
                delete this.list[t];
            for (var r in e) {
                var n = e[r]
                  , o = {
                    id: n.id,
                    name: n.name,
                    category_id: n.category_id,
                    price: n.price,
                    stock: n.stock,
                    must_pay_online: n.must_pay_online,
                    quantity: n.quantity
                };
                this.list[r] = o
            }
            $localStorage.setItem("cartList", JSON.stringify(this.list))
        },
        change: function(t, o) {
            return e.change(angular.extend({
                cart_id: a.id,
                sig: a.sig,
                type: t
            }, o)).$promise.then(function(e) {
                return e
            }, function() {
                a.create().then(function() {
                    swal({
                        title: "出错啦",
                        text: "购物车状态异常，请尝试重新下单",
                        confirmButtonText: "确认"
                    }, function() {
                        n.url("/trade"),
                        r.$digest()
                    })
                })
            })
        },
        save: function() {
            return a.save()
        },
        repeat: function(e) {
            var t = a.repeat(e);
            return t.$promise.then(function(e) {
                if (e.group[0] && e.group[0].length) {
                    e.group[0].forEach(function(e) {
                        var t = {
                            id: e.id,
                            name: e.name,
                            category_id: e.category_id,
                            price: e.price,
                            stock: e.stock || 0,
                            must_pay_online: e.must_pay_online,
                            quantity: e.quantity
                        };
                        i.list[e.id] = t
                    });
                    var t = {
                        id: e.restaurant_id,
                        minimum_order_amount: e.restaurant_minimum_order_amount,
                        name_for_url: e.restaurant_name_for_url
                    };
                    i.setRestaurant(t),
                    $localStorage.setItem("cartList", JSON.stringify(i.list)),
                    $localStorage.setItem("cartRestaurant", JSON.stringify(a.restaurant))
                }
            }),
            t
        },
        totalAmount: function() {
            var e = 0;
            for (var t in this.list)
                e += this.list[t].quantity;
            return e
        },
        totalPrice: function() {
            var e = 0;
            for (var t in this.list)
                e += this.list[t].quantity * this.list[t].price;
            return e
        },
        menuAmount: function(e) {
            if (!e.id)
                return 0;
            var t = 0;
            for (var r in this.list) {
                var n = this.list[r]
                  , o = n.category_id
                  , i = n.quantity;
                +o === +e.id && (t += i)
            }
            return t
        },
        find: function(e) {
            return this.list[e.id]
        },
        isEmpty: function() {
            return !Object.keys(this.list).length
        },
        remove: function(e) {
            delete this.list[e.id],
            $localStorage.setItem("cartList", JSON.stringify(this.list))
        },
        clear: function() {
            for (var e in this.list)
                delete this.list[e];
            for (var t in a.restaurant)
                delete a.restaurant[t];
            $localStorage.setItem("cartList", "{}"),
            $localStorage.setItem("cartRestaurant", "{}")
        },
        clearAndCreate: function() {
            return this.clear(),
            a.create()
        },
        clearRemote: function() {
            return a.clear({
                type: "group",
                group_index: 0
            }).$promise["catch"](function(e) {
                return "CART_HAD_BEEN_MADE_ORDER" === e.data.name ? a.create() : t.reject(e)
            })
        },
        setCoupon: function() {
            a.change({
                cart_id: a.id,
                sig: a.sig,
                type: "coupon"
            })
        }
    }
      , a = {
        restaurant: {}
    };
    return a.create = function() {
        return e.post({
            come_from: o ? "wechat_public" : "web"
        }).$promise.then(function(e) {
            return a.id = e.cart.id,
            a.sig = e.sig,
            $localStorage.setItem("cartList", "{}"),
            $localStorage.setItem("cartRestaurant", "{}"),
            JSON.stringify({
                id: a.id,
                sig: a.sig
            })
        })
    }
    ,
    a.get = function(t, r) {
        return e.get({
            cart_id: t,
            sig: r
        })
    }
    ,
    a.fetch = function(e, t) {
        var r = a.get(e, t);
        return r.$promise.then(function(e) {
            var t = {
                id: e.restaurant_id,
                minimum_order_amount: e.restaurant_minimum_order_amount,
                name_for_url: e.restaurant_name_for_url,
                status: e.restaurant_status
            }
              , r = {};
            e.group[0].forEach(function(e) {
                r[e.id] = e
            }),
            i.setList(r),
            i.setRestaurant(t)
        }),
        r
    }
    ,
    a.clear = function(t) {
        return e.clear(angular.extend({
            cart_id: a.id,
            sig: a.sig
        }, t))
    }
    ,
    a.save = function() {
        var e = [];
        for (var t in i.list)
            e.push({
                id: t,
                quantity: i.list[t].quantity
            });
        return i.change("entities_set", {
            group_index: 0,
            entities: e,
            remove_type: "group"
        })
    }
    ,
    a.repeat = function(t) {
        return e.repeat(angular.extend({
            cart_id: a.id,
            sig: a.sig,
            come_from: o ? "wechat_public" : "web"
        }, t))
    }
    ,
    i.getInfo = function() {
        var e = n.search();
        if (e.spell)
            return {
                id: e.cartId,
                sig: e.sig
            };
        var t = decodeURIComponent(document.cookie.match(/(?:^| )cart=([^;]+)|$/)[1] || "").split(":")
          , r = _slicedToArray(t, 2)
          , o = r[0]
          , i = r[1];
        return {
            id: o,
            sig: i
        }
    }
    ,
    i.init = function() {
        var e, r, n = t.defer();
        try {
            e = JSON.parse($localStorage.getItem("cartList")),
            r = JSON.parse($localStorage.getItem("cartRestaurant"))
        } catch (o) {
            $localStorage.setItem("cartList", "{}"),
            $localStorage.setItem("cartRestaurant", "{}")
        }
        null === e && $localStorage.setItem("cartList", "{}"),
        null === r && $localStorage.setItem("cartRestaurant", "{}");
        var s = i.getInfo();
        return s.id && s.sig ? (a.id = s.id,
        a.sig = s.sig,
        i.setList(e),
        i.setRestaurant(r),
        setTimeout(function() {
            n.resolve({
                id: a.id,
                sig: a.sig
            })
        }, 0)) : a.create().then(function(t) {
            i.setList(e),
            i.setRestaurant(r),
            t = JSON.parse(t),
            n.resolve({
                id: t.id,
                sig: t.sig
            })
        }, function() {
            n.reject()
        }),
        n.$promise = n.promise,
        n
    }
    ,
    i
}
]),
angular.module("meleme").factory("City", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/cities/:city_id/:action", {
        city_id: "@city_id",
        action: "@action"
    })
}
]),
angular.module("meleme").factory("UserRefer", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/marketing/users/:user_id/new_refer", {
        user_id: "@user_id"
    })
}
]).factory("UserReferDetail", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/marketing/users/:user_id/new_refer/detail", {
        user_id: "@user_id"
    })
}
]).factory("NotifyUser", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/marketing/users/:user_id/new_refer/notifications", {
        user_id: "@user_id"
    }, {
        send: {
            method: "POST"
        }
    })
}
]),
angular.module("meleme").service("crayfish", function() {
    function e(t) {
        _classCallCheck(this, e),
        this.$http = t,
        this.cache = Object.create(null )
    }
    return e.$inject = ["$http"],
    _createClass(e, [{
        key: "$injector",
        get: function() {
            return ["$http"]
        }
    }]),
    _createClass(e, [{
        key: "load",
        value: function(e) {
            return e in this.cache ? this.cache[e] : this.cache[e] = this.$http.get("//crayfish.elemecdn.com/m.ele.me" + e).then(function(e) {
                var t = e.data;
                return JSON.parse(t.match(/\{.*\}/)[0])
            })
        }
    }]),
    e
}()),
angular.module("meleme").provider("Doreamon", function() {
    var e = function() {
        this.state = null ,
        this.mode = null ,
        this.oldState = null ,
        this.oldMode = null
    }
    ;
    e.prototype.init = function(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
        this.state = e,
        this.mode = t
    }
    ,
    e.prototype.setState = function() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0]
          , t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
        (this.state !== e || this.mode !== t) && this.update(e, t)
    }
    ,
    e.prototype.update = function(e, t) {
        this.oldState = this.state,
        this.oldMode = this.mode,
        this.state = e,
        this.mode = t
    }
    ,
    e.prototype.getState = function() {
        return {
            state: this.state,
            mode: this.mode
        }
    }
    ,
    e.prototype.back = function() {
        this.update(this.oldState, this.oldMode)
    }
    ,
    this.$get = function() {
        return e
    }
}),
angular.module("meleme").factory("Food", ["$resource", "$rootScope", "$q", function(e, t, r) {
    var n = e(t.RESTBASE + "/v1/foods/:id/:action/:way", {
        id: "@id",
        action: "@action",
        way: "@way"
    }, {
        getPhotos: {
            method: "GET",
            params: {
                action: "photos",
                id: "@id",
                limit: "@limit",
                offset: "@offset"
            },
            isArray: !0
        },
        getRating: {
            method: "GET",
            params: {
                action: "ratings",
                id: "@id",
                has_text: "@has_text",
                limit: "@limit",
                offset: "@offset"
            },
            isArray: !0
        }
    })
      , o = n.get;
    return n.get = function() {
        var e = r.defer();
        return o.apply(this, arguments).$promise.then(function(t) {
            for (var r in t.ratings)
                t.ratings.hasOwnProperty(r) && (t.rating_count = t.rating_count || 0,
                t.rating_count += t.ratings[r]);
            e.resolve(t)
        }),
        e.$promise = e.promise,
        e
    }
    ,
    n
}
]),
angular.module("meleme").factory("GiftDrawRecords", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/member/v1/bingo/gifts", {})
}
]).factory("GiftSglDrawRecords", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/member/v1/bingo/gifts/:gift_id", {
        gift_id: "@gift_id"
    })
}
]).factory("GiftUnityDrawNumber", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/member/v1/lottery/:gift_id/participate", {
        gift_id: "@gift_id"
    })
}
]).factory("GiftUnityDrawRanking", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/member/v1/users/:user_id/lottery/:gift_id", {
        user_id: "@user_id",
        gift_id: "@gift_id"
    })
}
]).factory("Gift", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/member/v1/gifts/:gift_id/:action", {
        gift_id: "@gift_id",
        action: "@action"
    })
}
]).factory("Giftbanner", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/member/v1/gift_banners/:giftbanner_id", {
        giftbanner_id: "@giftbanner_id"
    })
}
]).factory("UsersGift", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/member/v1/users/:user_id/gifts/:gift_id/:way", {
        user_id: "@user_id",
        gift_id: "@gift_id",
        way: "@way"
    }, {
        update: {
            method: "post",
            isArray: !0
        }
    })
}
]).factory("GiftBingo", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/member/v1/users/:user_id/aggregated_gifts/:activity_id", {
        user_id: "@user_id",
        activity_id: "@activity_id"
    }, {
        update: {
            method: "get",
            isArray: !0
        }
    })
}
]).factory("Giftcategory", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/member/v1/navigations", {})
}
]).factory("GiftcategoryTitle", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/member/v1/categories/:category_id", {
        category_id: "@category_id"
    })
}
]).factory("GiftcategoryList", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/member/v1/categories/gifts", {})
}
]).factory("GiftactivityDetail", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/member/v1/gifts/:gift_id", {
        gift_id: "@gift_id"
    })
}
]),
angular.module("meleme").factory("ProfileHongbao", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/users/:userid/hongbao/:way", {
        userid: "@userid",
        way: "@way"
    }, {
        exchange: {
            withCredentials: !0,
            params: {
                way: "exchange"
            },
            method: "POST"
        },
        get: {
            withCredentials: !0,
            isArray: !0,
            method: "GET"
        },
        getcount: {
            withCredentials: !0,
            method: "GET"
        }
    })
}
]).service("ProfileHongbaoFormatter", ["UserAgent", "$rootScope", function(e, t) {
    var r = new Date;
    return {
        preTemplate: function(n) {
            return n.forEach(function(n) {
                n.begin_date = new Date(Date.parse(n.begin_date)),
                n.end_date = new Date(Date.parse(n.end_date)),
                n.used_at = n.used_at.length ? new Date(Date.parse(n.used_at)) : "",
                n.timeout = r > n.end_date,
                n.future = r < n.begin_date,
                n.history = 0 !== n.status || n.timeout,
                n.available = !(n.history || n.future),
                n.will_timeout = n.available && n.end_date - r < 6048e5,
                n.amount = "" + n.amount;
                var o = n.amount.split(".");
                n.integer = o[0],
                n.decimal = "." + (o[1] || "0").substr(0, 1),
                n.varietylist = [],
                "EXCLUSIVE" === n.hongbao_type && (n.variety = n.variety || {},
                n.variety.exclusive = !0),
                n.variety && !function() {
                    var r = "";
                    if (n.variety.time_periods && n.variety.time_periods.forEach(function(e) {
                        r += (r.length ? "," : "") + e[0].substr(0, 5) + "-" + e[1].substr(0, 5)
                    }),
                    n.variety.eleme_deliver_only && t.compareAppVersion("5.6", e.appVersion) && n.varietylist.push("使用此红包需升级到最新版本APP"),
                    n.variety.new_user_only && n.varietylist.push("限新用户使用"),
                    n.variety.online_paid_only === !1 && n.varietylist.push("支持货到付款使用"),
                    n.variety.restaurant_flavors && n.variety.restaurant_flavors.length)
                        if (n.variety.restaurant_flavors.sort().toString() === ["快餐类", "正餐类", "小吃零食", "甜品饮品", "果蔬生鲜"].sort().toString())
                            n.varietylist.push("限餐饮品类商家使用");
                        else {
                            var o = "限";
                            n.variety.restaurant_flavors.forEach(function(e, t, r) {
                                o += e,
                                t !== r.length - 1 && (o += "，")
                            }),
                            o += "品类商家使用",
                            n.varietylist.push(o)
                        }
                    if (n.variety.restaurants) {
                        var o = "限";
                        n.variety.restaurants.forEach(function(e, t, r) {
                            o += e,
                            t !== r.length - 1 && (o += "，")
                        }),
                        o += "使用",
                        n.varietylist.push(o)
                    }
                    if (n.variety.premium_only && n.varietylist.push("限品牌馆使用"),
                    n.variety.exclusive && n.varietylist.push("限活动标签[专]的商家使用"),
                    n.variety.exclusive_with_activity && n.varietylist.push("此红包不与其他优惠活动叠加使用"),
                    n.variety.eleme_deliver_only && n.varietylist.push("限在支持蜂鸟专送的商家使用"),
                    n.variety.weekdays ? n.variety.weekdays.sort().toString() === [1, 2, 3, 4, 5].sort().toString() ? n.varietylist.push("限工作日" + r + "使用") : n.variety.weekdays.sort().toString() === [6, 7].sort().toString() ? n.varietylist.push("限周末" + r + "使用") : 7 === n.variety.weekdays.length ? n.varietylist.push("限每天" + r + "使用") : !function() {
                        var e = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                          , t = "限每";
                        n.variety.weekdays.forEach(function(r, n, o) {
                            t += e[r - 1],
                            n !== o.length - 1 && (t += "，")
                        }),
                        t += r + "使用",
                        n.varietylist.push(t)
                    }() : n.variety.time_periods && n.varietylist.push("限每天" + r + "使用"),
                    n.variety.cities) {
                        var o = "限";
                        n.variety.cities.forEach(function(e, t, r) {
                            o += e,
                            t !== r.length - 1 && (o += "，")
                        }),
                        o += "地区使用",
                        n.varietylist.push(o)
                    }
                }()
            }),
            n
        }
    }
}
]),
angular.module("meleme").run(["$rootScope", function(e) {
    var t = document.domain.replace(/^(.+?\.)??(?=(test\.|alpha\.|beta\.)?[^.]+\.\w+$)/, "")
      , r = location.protocol;
    e.ROOTHOST = t,
    e.MOBILEORIGIN = r + "//" + location.hostname,
    e.SALEHOST = "sales." + t,
    e.RESTBASE = "/restapi",
    e.PAYMENTBASE = "//p." + t,
    e.ACCOUNTBASE = "//account." + t,
    e.STATICBASE = "//static11.elemecdn.com",
    ~t.indexOf("test") && (e.STATICBASE = ""),
    e.MAINBASE = "//v5." + t,
    void function() {
        var r = ["//fuss10.elemecdn.com", "//fuss2." + t]
          , n = 0;
        void function o() {
            var t = r[n++];
            if (t) {
                var i = new Image;
                i.onerror = function() {
                    e.$apply(o)
                }
                ,
                i.src = e.FUSSBASE = t
            }
        }()
    }()
}
]),
angular.module("meleme").service("I18N", function() {
    this.balancetext = ["饿了么账户充值", "余额消费", "订单收入", "订单退款", "申请提现", "提现失败", "废弃", "用户提现", "支付失败退款", "第三方支付消费", "合同付费", "订单取消扣款", "匿名用户提现", "匿名用户退款", "废弃", "合同退款"],
    this.ordertext = ["成功下单", "有效订单", "无效订单", "评价订单", "评价商品", "兑换礼品", "系统处理", "管理员处理", "上传商品图片", "评价商家服务", "拒绝兑换礼品", "订单积分", "评价早餐", "客服赔付积分", "活动奖励"],
    this.spell = {
        status: {
            1: "等待发起人提交订单",
            2: "等待商家确认",
            3: "商家已确认，等待开饭吧",
            4: "无效订单",
            5: "拼单被发起人取消了",
            "-1": "拼单已完成",
            6: "正在提交，拼单停止",
            7: "订单等待支付中",
            8: "订单支付失败",
            9: "正在退款中"
        }
    },
    this.notes = ["没零钱", "不要葱姜蒜", "不吃辣", "辣一点", "不要一次性筷子", "多加米"],
    this.cartRepeatStatus = {
        SERVER_UNKNOWN_ERROR: {
            title: "出错啦",
            text: "服务器未知错误"
        },
        CART_IS_NOT_EMPTY: {
            title: "清空篮子",
            text: "您的篮子中已经有了 %r 的美食，要再来一份需要先清空美食篮子"
        },
        ORDER_NOT_FOUND: {
            title: "出错啦",
            text: "未找到订单"
        },
        RESTAURANT_IS_OFF_SHELF: {
            title: "出错啦",
            text: "餐馆已经下架"
        },
        CART_NUMBER_UNVALID: {
            title: "多篮子订单",
            text: "此订单是通过网页版多篮子下的单，移动端暂不支持多篮子，建议您是用网页版的再来一份"
        },
        SHARE_ORDER_UNVALID: {
            title: "拼单订单",
            text: "此订单是拼单订单，移动端暂不支持拼单的再来一份，建议您使用网页版的再来一份"
        }
    },
    this.orderStatus = {
        MAKE_ORDER_HAD_BEEN_REJECTED: {
            title: "出错啦",
            text: "系统拒绝下单"
        },
        EMPTY_CART: {
            title: "出错啦",
            text: "您的美食篮子是空的，无法下单"
        },
        RESTAURANT_UNAVAILABLE: {
            title: "出错啦",
            text: "对不起，该餐厅已打烊，请您选择其他餐厅继续订餐"
        },
        LESS_THAN_DELIVER_AMOUNT: {
            title: "出错啦",
            text: "您购买的美食未满该餐厅起送价，请您继续选购美食"
        },
        INVALID_CART: {
            title: "出错啦",
            text: "无效的篮子"
        },
        INVALID_VALIDATE_TOKEN: {
            title: "出错啦",
            text: "无效的验证令牌"
        },
        INVALID_VALIDATE_CODE: {
            title: "出错啦",
            text: "无效的验证码"
        },
        RESTAURANT_NOT_SUPPORT_COUPON: {
            title: "出错啦",
            text: "餐厅不接受优惠券"
        },
        COUPON_CONFLICT_WITH_ACTIVITY: {
            title: "出错啦",
            text: "优惠券不能与其他活动同享"
        },
        COUPON_NOT_FOUND: {
            title: "出错啦",
            text: "优惠券不存在"
        },
        ONLY_ONLINE_PAY_CAN_USE_HONGBAO: {
            title: "出错啦",
            text: "红包仅限在线支付使用"
        },
        NOT_SATISFY_HONGBAO_SUM_CONDITION: {
            title: "出错啦",
            text: "订单总价没有达到红包使用条件"
        },
        HONGBAO_NOT_FOUND: {
            title: "出错啦",
            text: "找不到对应的红包"
        }
    },
    this.restaurantNotes = ["商家繁忙，暂不接单", "商家已关闭，不支持点餐", "商家休息中，暂不接单"]
}),
angular.module("meleme").factory("Invoice", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/users/:user_id/invoices/:invoice_id", {
        user_id: "@user_id",
        invoice_id: "@invoice_id"
    })
}
]),
angular.module("meleme").factory("Mcb", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/carts/:cart_id/verify_code", {
        cart_id: "@cart_id"
    })
}
]),
angular.module("meleme").factory("Order", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/users/:user_id/carts/:cart_id/orders", {
        user_id: "@user_id",
        cart_id: "@cart_id"
    })
}
]),
angular.module("meleme").factory("OrderTrades", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/:version/users/:user_id/orders/:order_id/:action/:param", {
        version: "v1",
        user_id: "@user_id",
        order_id: "@order_id",
        action: "@action",
        param: "@param"
    })
}
]).factory("RatingStatistic", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/bos/users/:user_id/rating_statistic", {
        user_id: "@user_id"
    })
}
]),
angular.module("meleme").factory("ProfileUser", ["$resource", "$rootScope", "$q", function(e, t, r) {
    var n = e(t.RESTBASE + "/v1/csrf_token").save().$promise
      , o = e(t.RESTBASE + "/v1/user/:param", {
        param: "@param"
    }, {
        update: {
            method: "PUT"
        },
        get: {
            params: {
                "extras[]": "premium_vip"
            }
        }
    })
      , i = o.get;
    return o.get = function() {
        var e = i.apply(o, arguments);
        return e.$promise = e.$promise.then(function() {
            return n.then(function(t) {
                return e.csrf_token = t.csrf_token,
                e
            })
        }, function(t) {
            return n.then(function(n) {
                return e.csrf_token = n.csrf_token,
                r.reject(t)
            })
        }),
        e
    }
    ,
    o
}
]).factory("Password", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/users/password/:action", {
        action: "@action"
    }, {
        reset: {
            method: "POST",
            params: {
                action: "reset"
            }
        }
    })
}
]).factory("UserExists", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/users/exists")
}
]).factory("UsersRecord", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/users/:user_id/:way", {
        user_id: "@user_id",
        way: "@way"
    }, {
        getBalance: {
            method: "GET",
            isArray: !0,
            params: {
                way: "balance_records"
            }
        },
        getPoint: {
            method: "GET",
            isArray: !0,
            params: {
                way: "point_change_records"
            }
        }
    })
}
]).factory("Balance", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/user/balance/:way/:operation", {
        action: "@action",
        way: "@way",
        operation: "@operation"
    }, {
        charge: {
            withCredentials: !0,
            method: "POST",
            params: {
                way: "charge"
            }
        },
        checkWithdraw: {
            withCredentials: !0,
            method: "GET",
            params: {
                way: "withdraw",
                operation: "check"
            }
        },
        widthdraw: {
            withCredentials: !0,
            method: "POST",
            params: {
                way: "withdraw"
            }
        }
    })
}
]),
angular.module("meleme").factory("Restaurant", ["$resource", "$rootScope", function(e, t) {
    var r = e(t.RESTBASE + "/:version/restaurants/:id/:action", {
        version: "v4",
        id: "@id",
        action: "@action"
    }, {
        getAuth: {
            method: "GET",
            params: {
                "extras[]": ["license", "identification"]
            }
        },
        getMenu: {
            method: "GET",
            params: {
                action: "menu"
            },
            isArray: !0
        }
    });
    return r
}
]).factory("RestaurantLazyLoader", ["$q", "Restaurant", function(e, t) {
    return function(r) {
        return angular.extend([], {
            limit: 30,
            offset: 0,
            state: "LAZING",
            load: function() {
                var n = this;
                return "LAZING" !== this.state ? e.reject() : (this.state = "LOADING",
                t.query(angular.extend({
                    limit: this.limit,
                    offset: this.offset++ * this.limit
                }, r)).$promise.then(function(e) {
                    n.push.apply(n, _toConsumableArray(e)),
                    n.state = e.length < n.limit ? "COMPLETE" : "LAZING"
                }, this.errorHandler))
            },
            errorHandler: function(e) {
                setTimeout(function() {
                    throw e
                })
            }
        })
    }
}
]).factory("RestaurantRatingsLoader", ["$q", "Ratings", function(e, t) {
    return function(r) {
        return angular.extend([], {
            limit: 10,
            allCommentsOffset: 0,
            allCommentsState: "LAZING",
            hasTextCommentsOffset: 0,
            hasTextCommentsState: "LAZING",
            loadComments: function(n) {
                var o = this;
                return "LAZING" !== this[n + "State"] ? e.reject() : (this[n + "State"] = "LOADING",
                t.get(angular.extend({
                    limit: this.limit,
                    offset: this[n + "Offset"]++ * this.limit,
                    has_text: "allComments" === n ? 0 : 1,
                    "extras[]": "time_spent"
                }, r)).$promise.then(function(e) {
                    o.push.apply(o, _toConsumableArray(e)),
                    o[n + "State"] = e.length < o.limit ? "COMPLETE" : "LAZING",
                    o[n + "State"] = 0 === o.length ? "NONE" : "LAZING"
                }, this.errorHandler))
            },
            errorHandler: function(e) {
                setTimeout(function() {
                    throw e
                })
            }
        })
    }
}
]).factory("Ratings", ["$resource", "$rootScope", function(e, t) {
    var r = e(t.RESTBASE + "/v5/restaurants/:id/ratings", {
        id: "@id"
    }, {
        get: {
            method: "GET",
            isArray: !0
        }
    });
    return r
}
]).factory("RstCategory", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v2/restaurants_category")
}
]).factory("Favor", ["$rootScope", "$resource", function(e, t) {
    return t(e.RESTBASE + "/v1/users/:id/favor/:action/:restaurant_id", {
        id: "@id",
        action: "@action",
        restaurant_id: "@restaurant_id"
    })
}
]),
angular.module("meleme").factory("PayOnline", ["$resource", function(e) {
    return e("/v1/order/:orderId/pay/:method", {
        orderId: "@orderId",
        method: "@method"
    }, {
        save: {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    })
}
]).factory("Pay", ["$resource", "$rootScope", function(e, t) {
    var r = {};
    return r.make = function(r) {
        var n = r.orderId
          , o = r.userId;
        return e(t.RESTBASE + "/v2/users/:userId/orders/:orderId/payments/msite", {
            userId: "@userId",
            orderId: "@orderId"
        }).get({
            orderId: n,
            userId: o
        }).$promise.then(function(e) {
            var t = e.pay_url;
            return location.href = decodeURIComponent(t)
        })
    }
    ,
    r
}
]).factory("Page", ["UserAgent", function(e) {
    return {
        title: e.isBrowser ? "叫外卖上饿了么 - 饿了么" : "",
        description: "饿了么是中国专业的网上订餐平台，目前已覆盖北京、上海、杭州、广州等300多个城市，提供各类中式、日式、韩式、西式、下午茶、夜宵等优质美食，并提供送餐上门服务，让订餐更加轻松，叫外卖就上饿了么！",
        keywords: "外卖，饿了么，美食，网上商家",
        city: {}
    }
}
]).factory("MarPosition", [function() {
    var e = function() {}
    ;
    return e.prototype.a = 6378245,
    e.prototype.ee = .006693421622965943,
    e.prototype.transform = function(e, t) {
        if (this.outOfChina(e, t))
            return [e, t];
        var r = this.transformLat(t - 105, e - 35)
          , n = this.transformLon(t - 105, e - 35)
          , o = e / 180 * Math.PI
          , i = 1 - this.ee * Math.pow(Math.sin(o), 2)
          , a = Math.sqrt(i);
        return r = 180 * r / (this.a * (1 - this.ee) / (i * a) * Math.PI),
        n = 180 * n / (this.a / a * Math.cos(o) * Math.PI),
        [e + r, t + n]
    }
    ,
    e.prototype.outOfChina = function(e, t) {
        return 72.004 > t || t > 137.8347 ? !0 : .8293 > e || e > 55.8271 ? !0 : !1
    }
    ,
    e.prototype.transformLat = function(e, t) {
        var r = -100 + 2 * e + 3 * t + .2 * t * t + .1 * e * t + .2 * Math.sqrt(Math.abs(e));
        return r += 2 * (20 * Math.sin(6 * e * Math.PI) + 20 * Math.sin(2 * e * Math.PI)) / 3,
        r += 2 * (20 * Math.sin(t * Math.PI) + 40 * Math.sin(t / 3 * Math.PI)) / 3,
        r += 2 * (160 * Math.sin(t / 12 * Math.PI) + 320 * Math.sin(t * Math.PI / 30)) / 3
    }
    ,
    e.prototype.transformLon = function(e, t) {
        var r = 300 + e + 2 * t + .1 * e * e + .1 * e * t + .1 * Math.sqrt(Math.abs(e));
        return r += 2 * (20 * Math.sin(6 * e * Math.PI) + 20 * Math.sin(2 * e * Math.PI)) / 3,
        r += 2 * (20 * Math.sin(e * Math.PI) + 40 * Math.sin(e / 3 * Math.PI)) / 3,
        r += 2 * (150 * Math.sin(e / 12 * Math.PI) + 300 * Math.sin(e / 30 * Math.PI)) / 3
    }
    ,
    new e
}
]).factory("formDataObject", function() {
    return function(e) {
        var t = new FormData;
        return angular.forEach(e, function(e, r) {
            t.append(r, e)
        }),
        t
    }
}).factory("Avatar", ["$resource", "$rootScope", "formDataObject", function(e, t, r) {
    return e(t.RESTBASE + "/v1/user/avatar", {
        x: 0,
        y: 0,
        h: "@h",
        w: "@w"
    }, {
        save: {
            method: "POST",
            withCredentials: !0,
            headers: {
                "Content-Type": void 0,
                "X-Requested-With": "XMLHttpRequest"
            },
            transformRequest: r
        }
    })
}
]).factory("SweetAlert", ["$timeout", "$window", function(e, t) {
    var r = t.swal
      , n = {
        swal: function(e) {
            function t() {
                return e.apply(this, arguments)
            }
            return t.toString = function() {
                return e.toString()
            }
            ,
            t
        }(function(t, n, o) {
            e(function() {
                "function" == typeof n ? r(t, function(t) {
                    e(function() {
                        n(t)
                    })
                }, o) : r(t, n, o)
            }, 200)
        }),
        adv: function(t) {
            e(function() {
                r(t)
            }, 200)
        },
        timed: function(t, n, o, i) {
            e(function() {
                r({
                    title: t,
                    text: n,
                    type: o,
                    timer: i
                })
            }, 200)
        },
        success: function(t, n) {
            e(function() {
                r(t, n, "success")
            }, 200)
        },
        error: function(t, n) {
            e(function() {
                r(t, n, "error")
            }, 200)
        },
        warning: function(t, n) {
            e(function() {
                r(t, n, "warning")
            }, 200)
        },
        info: function(t, n) {
            e(function() {
                r(t, n, "info")
            }, 200)
        }
    };
    return n
}
]).factory("UserAgent", function() {
    var e = window.navigator.userAgent
      , t = {
        isFromApp: !1,
        isWechat: !1,
        app: null ,
        appVersion: null ,
        isBrowser: !0
    };
    if (/rajax/i.test(e) && (t.isFromApp = !0,
    t.app = e.toLowerCase().match(/(iphone|android)/i)[1],
    t.isBrowser = !1),
    t.app) {
        var r = e.match(/Eleme\/(\d+).(\d+)/);
        t.appVersion = r ? r[1] + "." + r[2] : null
    }
    return /micromessenger/i.test(e) && (t.isWechat = !0),
    t
}).factory("ParamRoute", ["$location", function(e) {
    var t = null
      , r = function(r, n) {
        t = n || null ,
        e.path(r)
    }
      , n = function() {
        return t
    }
    ;
    return {
        path: r,
        getParams: n
    }
}
]).factory("fuckNgResource", function() {
    return function(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1];
        return e.replace(/@/g, "%40").replace(/:/g, "%3A").replace(/\$/g, "%24").replace(/,/g, "%2C").replace(/\+/g, t ? "%20" : "+")
    }
}),
angular.module("meleme").factory("Spell", ["$resource", "$location", "SpellStatus", "$rootScope", function(e, t, r, n) {
    function o(e) {
        if (e.error)
            return e;
        var t = angular.copy(e.data)
          , r = e.data.pindanMap;
        return t.restaurant = {},
        t.restaurant.id = e.data.restaurantId,
        t.restaurant.name = e.data.restaurantName,
        t.restaurant.name_for_url = e.data.restaurantNameForUrl,
        t.restaurant.minimum_order_amount = e.data.restaurantDeliverAmount,
        t.restaurant.extras = e.data.extras,
        t.totalFoodNums = 0,
        e.data.groups.forEach(function(e, n) {
            t.groups[n].name = r[n].name,
            t.groups[n].avatar = r[n].avatar,
            e.forEach(function(e) {
                t.totalFoodNums += e.quantity
            })
        }),
        t
    }
    var i = n.MAINBASE + "/groupcart/:cartId/:sig/:action"
      , a = e(i, {
        cartId: "@cartId",
        sig: "@sig",
        action: "@action"
    }, {
        save: {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest"
            }
        }
    })
      , s = a.get
      , l = a.save;
    return a.get = function() {
        var e = s.apply(a, arguments);
        return e.$promise = e.$promise.then(function(e) {
            return o(e)
        }),
        e
    }
    ,
    a.save = function() {
        var e = l.apply(a, arguments);
        return e.$promise = e.$promise.then(function(e) {
            return o(e)
        }),
        e
    }
    ,
    a
}
]).factory("SpellStatus", ["$location", function(e) {
    return function(t) {
        if (!t)
            return 0;
        if (!t.pindan)
            return 5;
        var r = t.pindanLock ? 6 : 0;
        if (t.pindanOrder && (r = t.pindanOrder.status_code,
        r = -5 === r || -3 === r ? 7 : -2 === r || 0 === r ? 2 : -4 === r ? 8 : 2 === r ? 3 : 3 === r ? 9 : 0),
        r)
            return r;
        var n, o, i = e.search().cartId;
        try {
            n = JSON.parse($localStorage.getItem("spellCartId"))
        } catch (a) {
            n = $localStorage.getItem("spellCartId")
        }
        try {
            o = JSON.parse($localStorage.getItem("spellCartName"))
        } catch (a) {
            o = $localStorage.getItem("spellCartName")
        }
        return n === i && o ? 1 : ($localStorage.setItem("spellCartId", JSON.stringify(i)),
        $localStorage.removeItem("spellCartName"),
        0)
    }
}
]),
angular.module("meleme").factory("Captcha", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/captchas/:param/:action", {
        param: "@param",
        action: "@action"
    })
}
]).factory("VerifyCode", ["$resource", "$rootScope", "$q", "Captcha", function(e, t, r, n) {
    var o = e(t.RESTBASE + "/v1/:way/verify_code/:action", {
        way: "@way",
        action: "@action"
    })
      , i = function(e, i) {
        var a = r.defer();
        return "CAPTCHA_NONE_ERROR" === i.data.name ? n.post(function(r) {
            swal({
                title: "<div>请输入验证码</div>",
                text: '<img onclick="src+=\'?\';" src="' + t.RESTBASE + "/v1/captchas/" + r.code + '">',
                type: "input",
                html: !0,
                showCancelButton: !0,
                closeOnConfirm: !1,
                closeOnCancel: !1,
                cancelButtonText: "取消",
                confirmButtonText: "确定",
                customClass: "verifycode-dialog"
            }, function(t) {
                if (t === !1)
                    a.reject({
                        data: {
                            name: "USER_CANCEL"
                        }
                    }),
                    swal.close();
                else {
                    if (!t)
                        return swal.showInputError("请输入图形验证码");
                    n.post({
                        param: r.code,
                        action: "check",
                        captcha_code: t
                    }).$promise.then(function() {
                        swal.close(),
                        a.resolve(o.save(angular.extend({
                            captcha_code: t
                        }, e)).$promise)
                    }, function() {
                        swal.showInputError("图形验证码错误")
                    })
                }
            })
        }) : a.reject(i),
        a.promise
    }
    ;
    return o.carry = function(e) {
        var t = o.post(e);
        return "send" === e.action && (t.$promise = t.$promise.then(function() {
            return swal.close(),
            t
        }, i.bind(null , e))),
        t
    }
    ,
    o
}
]),
angular.module("meleme").factory("VIP", ["$resource", "$rootScope", function(e, t) {
    return e(t.RESTBASE + "/v1/premium_vips/:mobile/:action", {
        way: "@way",
        sn: "@sn"
    }, {
        charge: {
            method: "POST",
            params: {
                action: "charge"
            }
        }
    })
}
]),
angular.module("meleme").service("WechatAPI", ["$q", "$http", function(e, t) {
    this.sudo = function(r) {
        if (!window.wx)
            return e.reject({
                name: "REQUIRE_WX",
                message: "请在微信浏览器中打开"
            });
        var n = window.location.href.replace(/#.*/, "")
          , o = e.defer();
        return t.get("/v1/weixin/jssign?url=" + encodeURIComponent(n.replace(/\|/g, "%7C"))).then(function(e) {
            if (e = e.data,
            "ok" === e.status) {
                var t = e.data;
                wx.config({
                    appId: t.appid,
                    timestamp: t.timestamp,
                    nonceStr: t.nonceStr,
                    signature: t.signature,
                    jsApiList: r.slice(0)
                });
                var n = {};
                r.forEach(function(e) {
                    return n[e] = wx[e].bind(wx)
                }),
                wx.ready(function() {
                    return o.resolve(n)
                }),
                wx.error(function(e) {
                    return o.reject(e)
                })
            }
        }),
        o.promise
    }
}
]),
angular.module("meleme").factory("Weixin", ["$resource", function(e) {
    return e("/v1/weixin/userinfo", {}, {
        get: {
            method: "GET",
            cache: !0
        }
    })
}
]).factory("WechatInfo", ["$location", "$q", "Weixin", "$rootScope", function(e, t, r, n) {
    var o = function(e) {
        try {
            var t = Object(JSON.parse(e));
            return a.prototype.isValid.call(t) ? t : null
        } catch (r) {
            return null
        }
    }
      , i = function(e) {
        return e = e.replace(/(\?)(code=[^&]*&)+|&code=[^&]*(?=&|$)/g, "$1"),
        e = e.replace(/(\?)(nocache=[^&]*&)+|&nocache=[^&]*(?=&|$)/g, "$1")
    }
      , a = function() {
        this.init.apply(this, arguments)
    }
    ;
    return a.prototype = {
        init: function(e, t, r, n) {
            -1 === ["abandoned"].indexOf(r) && (this.name = e,
            this.avatar = t,
            this.openid = r,
            this.key = n)
        },
        save: function() {
            var e = JSON.stringify(this)
              , t = "; Domain=" + n.ROOTHOST + "; Path=/; Expires=Wed, 31 Dec 2098 16:00:00 GMT";
            document.cookie = "wechatInfo=" + encodeURIComponent(e) + t,
            $localStorage.setItem("wechatInfo", e)
        },
        load: function() {
            var t = this;
            return this.loadFromServer()["catch"](function() {
                return e.search().nocache ? t.authorize() : t.loadFromLocal()
            })["catch"](function() {
                return t.authorize()
            })
        },
        loadFromLocal: function() {
            var e = t.defer()
              , r = $localStorage.getItem("wechatInfo")
              , n = decodeURIComponent(document.cookie.match(/(?:^|; )wechatInfo=([^;]*)|$/)[1])
              , i = o(r) || o(n);
            return i ? (this.update(i),
            this.save(),
            e.resolve()) : e.reject(),
            e.promise
        },
        loadFromServer: function() {
            var n = this
              , o = t.defer()
              , a = e.search().code || "";
            return 32 !== a.length ? o.reject() : r.get({
                code: a
            }, function(t) {
                return n.update(t.data),
                n.isValid() ? (n.save(),
                e.url(i(e.url())),
                void o.resolve()) : o.reject()
            }, function() {
                o.reject()
            }),
            o.promise
        },
        authorize: function() {
            $localStorage.removeItem("wechatInfo"),
            document.cookie = "wechatInfo=; Domain=" + n.ROOTHOST + "; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
            var r = encodeURIComponent(i(e.absUrl()));
            return location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2a416286e96100ed&redirect_uri=" + r + "&response_type=code&scope=snsapi_userinfo",
            t.defer().promise
        },
        update: function(e) {
            try {
                e = JSON.parse(e)
            } catch (t) {
                e = Object(e)
            }
            this.init(e.name || e.nickname, e.avatar || e.headimgurl, e.openid, e.key || e.eleme_key)
        },
        isValid: function() {
            return !!this.name && !!this.openid && !!this.key
        }
    },
    a
}
]);
var _slicedToArray = function() {
    function e(e, t) {
        var r = []
          , n = !0
          , o = !1
          , i = void 0;
        try {
            for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value),
            !t || r.length !== t); n = !0)
                ;
        } catch (l) {
            o = !0,
            i = l
        } finally {
            try {
                !n && s["return"] && s["return"]()
            } finally {
                if (o)
                    throw i
            }
        }
        return r
    }
    return function(t, r) {
        if (Array.isArray(t))
            return t;
        if (Symbol.iterator in Object(t))
            return e(t, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}();
angular.module("meleme").directive("activityOffline", function() {
    var e = sessionStorage.getItem("isFromWechatpublic") || null ;
    return {
        restrict: "E",
        replace: !0,
        template: e ? "" : '<span class="activity-offline"> (手机客户端专享)</span>'
    }
}),
angular.module("meleme").directive("autoAddress", ["Poi", "MarPosition", function(e, t) {
    return {
        require: "ngModel",
        link: function(r, n, o, i) {
            if ("undefined" != typeof navigator.geolocation) {
                var a = 3e3
                  , s = r.formCreate.address;
                r.$on("$destroy", function() {
                    n.off("focus")
                }),
                n.on("focus", function() {
                    r.$apply(function() {
                        s.loading = !0
                    }),
                    setTimeout(function() {
                        s.loading && (swal("出错啦", "不好意思，找不到地址!", "warning"),
                        n.off("focus"),
                        r.$apply(function() {
                            s.loading = !1
                        }))
                    }, a),
                    navigator.geolocation.getCurrentPosition(function(r) {
                        var o = t.transform(r.coords.latitude, r.coords.longitude);
                        e.query({
                            type: "geohash",
                            geohash: Geohash.encode(o[0], o[1]).substr(0, 12)
                        }, function(e) {
                            if (0 !== e.length) {
                                if (!e[0].address && !e[0].name)
                                    return s.loading = -1,
                                    swal("出错啦", "不好意思，找不到地址!", "warning");
                                var t = n.val() + e[0].address + e[0].name;
                                n.val(t),
                                i.$setViewValue(t),
                                s.loading = !1
                            }
                        })
                    }, function(e) {
                        setTimeout(function() {
                            throw r.$apply(function() {
                                r.loading = -1
                            }),
                            JSON.stringify(e)
                        })
                    })
                })
            }
        }
    }
}
]),
angular.module("meleme").directive("appLink", function() {
    return {
        restrict: "E",
        replace: !0,
        templateUrl: "/html/base/applink.html",
        link: function(e, t) {
            var r = document.body;
            r.classList.add("applinkbody"),
            e.close = function() {
                t.remove(),
                r.classList.remove("applinkbody")
            }
            ,
            e.$on("$destroy", function() {
                r.classList.remove("applinkbody")
            })
        }
    }
}),
angular.module("meleme").directive("autoFillSync", ["$timeout", function(e) {
    return {
        require: "ngModel",
        link: function(t, r, n, o) {
            var i = r.val();
            e(function() {
                var e = r.val();
                o.$pristine && i !== e && o.$setViewValue(e)
            }, 500)
        }
    }
}
]),
angular.module("meleme").directive("contactService", ["UserAgent", "SweetAlert", function(e, t) {
    return function(r, n) {
        var o = encodeURIComponent("https://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=402791&configID=123801&jid=1820947377&enterurl=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2Fpreview%2Ejsp&skillId=6632&pagetitle=%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88&pagereferrer=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2FgetNewEmbedScriptEmbedScriptAction%2Eaction%3Ficon%3Dselected7&firstEnterUrl=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2Fpreview%2Ejsp&lan=zh&s=1");
        "iphone" === e.app ? (r.urlOnline = "eleme://web?url=" + o + "&animation_type=1",
        r.urlPhone = "eleme://make_call?phone_number=10105757",
        r.urlFeedback = "eleme://feedback?&animation_type=1") : "android" === e.app ? (r.urlOnline = "eleme://web?url=" + o,
        r.urlPhone = "eleme://make_call?phone_number=10105757",
        r.urlFeedback = "eleme://feedback?") : e.isBrowser && (r.urlOnline = "https://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=402791&configID=123801&jid=1820947377&enterurl=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2Fpreview%2Ejsp&skillId=6632&pagetitle=%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88&pagereferrer=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2FgetNewEmbedScriptEmbedScriptAction%2Eaction%3Ficon%3Dselected7&firstEnterUrl=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2Fpreview%2Ejsp&lan=zh&s=1",
        r.urlPhone = "tel:10105757"),
        n.on("click", function() {
            t.swal({
                title: "联系客服",
                text: '<a href="' + r.urlOnline + '">在线客服</a><a href="' + r.urlPhone + '">客服电话：10105757</a>',
                customClass: "complaint-service-box",
                confirmButtonText: "取消",
                confirmButtonColor: "#3190E8",
                html: !0
            })
        })
    }
}
]),
angular.module("meleme").directive("countdown", function() {
    var e, t = function(t, r, n) {
        return n ? (n = +n,
        r.text(n),
        void (e = setInterval(function() {
            return 0 !== n ? r.text(--n) : void t.$apply(function() {
                t.countdown = !1
            })
        }, 1e3))) : e && clearInterval(e)
    }
    ;
    return {
        restrict: "E",
        link: function(e, r, n) {
            e.$watch("countdown", function(o) {
                return "stop" == o ? function() {
                    t(e, r),
                    e.countdown = !1
                }() : o ? t(e, r, n.time) : t(e, r)
            })
        }
    }
}).directive("countdown", ["$timeout", function(e) {
    return {
        restrict: "A",
        scope: {
            time: "=",
            env: "@"
        },
        link: function(t, r) {
            var n = {
                valueOf: function() {
                    return Math.round(t.time - Date.now() / 1e3)
                },
                toString: function() {
                    var e = +this;
                    return [e / 3600 | 0, e % 3600 / 60 | 0, e % 60 | 0].join(":").replace(/^0:/, "").replace(/\b\d\b/g, "0$&")
                }
            };
            void function o() {
                0 > n || t.$$destroyed ? t.$emit(t.env) : (+n && r.text(n),
                e(o, 1e3))
            }()
        }
    }
}
]),
angular.module("meleme").directive("drawer", function() {
    return function(e, t) {
        t.on("click", function() {
            angular.$("body").addClass("ui_fix"),
            angular.$("#eleme_drawer_wrapper").addClass("ui_show")
        }),
        angular.$("#eleme_drawer_wrapper").on("click", function() {
            angular.$("#eleme_drawer_wrapper").removeClass("ui_show"),
            setTimeout(function() {
                angular.$("body").removeClass("ui_fix")
            }, 300)
        })
    }
}),
angular.module("meleme").directive("simpleUpload", ["Avatar", function(e) {
    var t = function(e) {
        for (var t = atob(e.split(",")[1]), r = [], n = 0; n < t.length; n++)
            r.push(t.charCodeAt(n));
        return new Blob([new Uint8Array(r)],{
            type: e.slice(5, e.indexOf(";"))
        })
    }
    ;
    return function(r, n, o) {
        n.on("change", function() {
            var i = n[0].files[0]
              , a = o.simpleUpload;
            if (i) {
                if (!/^image\//.test(i.type))
                    return swal("仅支持图片文件！");
                var s = document.createElement("img")
                  , l = 210;
                s.style.position = "absolute",
                s.style.top = "100%",
                s.style.left = "100%",
                s.onload = function() {
                    var n = document.createElement("canvas")
                      , o = n.getContext("2d");
                    n.height = l,
                    n.width = l;
                    var c = Math.min(s.height, s.width);
                    o.drawImage(s, 0, 0, c, c, 0, 0, l, l),
                    i = n.toBlob ? n.toBlob() : t(n.toDataURL()),
                    a = a ? r[a] : angular.noop,
                    e.save({
                        avatar: i,
                        h: l,
                        w: l
                    }, a, function() {
                        return swal("上传失败")
                    })
                }
                ,
                s.src = window.URL.createObjectURL(i)
            }
        })
    }
}
]),
angular.module("meleme").directive("fontSizeAdapter", [function() {
    return {
        scope: {
            text: "="
        },
        link: function(e, t) {
            var r = angular.element("<div></div>")
              , n = angular.element("<span></span>");
            r.css({
                width: "100%",
                height: "100%",
                padding: "0px",
                margin: "0px",
                border: "0px"
            }),
            r.append(n),
            n.css("display:inline-block"),
            t.append(r),
            e.$watch("text", function(e) {
                n.text(e);
                var t = n[0].offsetWidth
                  , o = r[0].offsetWidth
                  , i = parseInt(getComputedStyle(n[0])["font-size"]);
                t > o && (i /= t / o),
                n.css("font-size", parseInt(i) + "px")
            })
        }
    }
}
]),
angular.module("meleme").directive("ggSrcset", ["$window", "$q", "$rootScope", function(e, t, r) {
    var n, o = e.devicePixelRatio >= 1 ? 2 : 1, i = "srcset"in new Image, a = e.innerWidth, s = [], l = 0, c = function() {
        if (!(l > 4 || s.length <= 0)) {
            l++;
            var e = s.shift();
            e[0].attr(e[1], e[2])
        }
    }
    ;
    return {
        compile: function(e, u) {
            return u.width && u.width.match(/(\d+)%/) && u.$set("width", a * Number(u.width.replace("%", "")) / 100 | 0),
            u.height && u.height.match(/(\d+)%/) && u.$set("height", a * Number(u.height.replace("%", "")) / 100 | 0),
            e.css({
                opacity: "0",
                transition: "opacity .5s"
            }),
            function(e, a, u) {
                r.checkedWebp.then(function(e) {
                    n = e;
                    var r, l = n ? "/format/webp/quality/" + (u.quality ? parseInt(u.quality) : "75") : "";
                    return u.width && i ? (r = u.link + "?imageMogr/thumbnail/" + u.width + "x" + u.height + l,
                    2 === o && (r += " 1x, " + u.link + "?imageMogr/thumbnail/" + 2 * u.width + "x" + 2 * u.height + l + " 2x")) : r = u.link + "?imageMogr" + l,
                    s.push(i ? [a, "srcset", r] : [a, "src", r]),
                    c(),
                    t(function(e) {
                        a[0].onload = function() {
                            e()
                        }
                    })
                }).then(function() {
                    a.css({
                        opacity: "1"
                    }),
                    c(),
                    l--
                })
            }
        }
    }
}
]),
angular.module("meleme").directive("goback", ["$location", function(e) {
    return function(t, r, n) {
        r.on("click", function() {
            if (/force=1/.test(n.goback))
                return $localStorage.removeItem("goback"),
                t.$apply(function() {
                    e.url(n.goback)
                });
            var r = n.goback;
            return /^https?:/.test(n.goback) ? void (location.href = n.goback) : (r = r || -1,
            void t.$apply(function() {
                return -1 === r ? history.back(-1) : void e.url(r)
            }))
        })
    }
}
]),
angular.module("meleme").directive("loadmoreHongbao", function() {
    var e = document
      , t = e.documentElement
      , r = e.querySelector("[ng-view]");
    return {
        restrict: "E",
        scope: {
            items: "=",
            limit: "="
        },
        link: function(e, n) {
            var o = n[0].scrollHeight;
            e.limit = 10;
            var i = function() {
                e.limit > e.items || r.scrollHeight - Math.abs(t.getBoundingClientRect().top) - window.screen.height - o <= 0 && e.$apply(function() {
                    e.limit += 10
                })
            }
            ;
            r.scrollHeight - Math.abs(t.getBoundingClientRect().top) - window.screen.height - o <= 0 && (e.limit += 10),
            window.addEventListener("scroll", i, !1),
            e.$on("$destroy", function() {
                window.removeEventListener("scroll", i)
            })
        }
    }
}),
angular.module("meleme").directive("loadmore", function() {
    var e = document
      , t = e.documentElement
      , r = e.querySelector("[ng-view]");
    return {
        restrict: "E",
        link: function(e, n) {
            var o = n[0].scrollHeight
              , i = e.items().length
              , a = function s() {
                return e.limit >= i ? window.removeEventListener("scroll", s) : void (r.scrollHeight - Math.abs(t.getBoundingClientRect().top) - window.screen.height - o <= 0 && e.$apply(function() {
                    e.limit += 10
                }))
            }
            ;
            r.scrollHeight - Math.abs(t.getBoundingClientRect().top) - window.screen.height - o <= 0 && (e.limit += 10),
            window.addEventListener("scroll", a, !1)
        }
    }
}),
angular.module("meleme").directive("lunbo", ["$routeParams", "GiftDrawRecords", "GiftSglDrawRecords", function(e, t, r) {
    return {
        restrict: "AE",
        templateUrl: "/html/gift/lunbo.html",
        scope: {},
        link: function(n, o) {
            var i, a = 0, s = o.find("ul"), l = function() {
                n.lunboData.length || clearInterval(i),
                s.css({
                    "-webkit-transform": "translateY(-" + 36 * a + "px)",
                    "-webkit-transition": 0 === a ? "" : "-webkit-transform 1000ms ease"
                }),
                a++,
                a === n.lunboData.length && (a = 0)
            }
            , c = e.id ? {
                gift_id: e.id
            } : {}, u = e.id ? r : t;
            n.singleGift = !!e.id,
            u.query(c).$promise.then(function(e) {
                return n.lunboData = e.concat(e[0])
            }).then(function() {
                i = setInterval(l, 4e3)
            })
        }
    }
}
]),
angular.module("meleme").directive("melemeMap", ["$location", "Poi", "MarPosition", function(e, t, r) {
    return function(n, o) {
        if ("undefined" != typeof navigator.geolocation) {
            var i = e.search().force
              , a = $localStorage.getItem("geohash")
              , s = e.path()
              , l = location.host.replace(/m\./, "h5.");
            if (i || !a || s.match(/city\/[0-9]+$/))
                try {
                    navigator.geolocation.getCurrentPosition(function(e) {
                        var n = r.transform(e.coords.latitude, e.coords.longitude);
                        t.query({
                            type: "geohash",
                            geohash: Geohash.encode(n[0], n[1]).substr(0, 12)
                        }, function(e) {
                            if (0 !== e.length) {
                                var t = _slicedToArray(e, 1)
                                  , r = t[0];
                                o.find(".guessed_addr").attr("href", "//" + l + "/msite/#geohash=" + r.geohash).text(r.address || r.name),
                                o.removeClass("ui_invisible")
                            }
                        })
                    })
                } catch (c) {
                    setTimeout(function() {
                        throw JSON.stringify(c)
                    })
                }
        }
    }
}
]),
angular.module("meleme").directive("marked", function() {
    return {
        scope: {
            marked: "="
        },
        link: function(e, t) {
            e.$watch("marked", function(e) {
                e && t.html(window.marked(e))
            })
        }
    }
}),
angular.module("meleme.main").directive("maxByte", function() {
    return {
        require: "?ngModel",
        link: function(e, t, r, n) {
            if (!n)
                return setTimeout(function() {
                    throw new Error("ngModel not found")
                });
            var o, i, a = (r.maxByte,
            t[0]), s = function() {
                i = a.value,
                o = i.replace(/[\u0100-\uFFFF]/g, "00").length
            }
            ;
            n.$render = function() {
                a.value = n.$viewValue || ""
            }
            ,
            t.on("blur keyup change", function() {
                e.$evalAsync(s)
            }),
            s()
        }
    }
}),
angular.module("meleme").directive("menuList", ["$rootScope", "$location", function(e, t) {
    return {
        restrict: "E",
        scope: {
            foods: "=",
            restaurant: "=",
            menu: "="
        },
        templateUrl: "/html/restaurant/menuListItem.html",
        link: function(r) {
            r.FUSSBASE = e.FUSSBASE,
            r.selectFood = function(e) {
                t.url("/shop/" + r.restaurant.id + "/" + e)
            }
        }
    }
}
]),
angular.module("meleme").directive("ngClick", ["$parse", function(e) {
    return {
        restrict: "A",
        compile: function(t, r) {
            var n = e(r.ngClick, null , !0);
            return function(e, t) {
                t.on("click", function(t) {
                    e.$apply(function() {
                        n(e, {
                            $event: t
                        })
                    })
                })
            }
        }
    }
}
]),
angular.module("meleme").directive("notwig", ["$http", "$templateCache", "$compile", "$parse", function(e, t, r, n) {
    return {
        restrict: "E",
        scope: !1,
        link: function(o, i, a) {
            var s = i[0]
              , l = a.src
              , c = n(a.ngLoad);
            e.get(l, {
                cache: t
            }).then(function(e) {
                if (!o.$$destroyed) {
                    var t = []
                      , n = document.createComment(' <notwig src="' + l + '"></notwig> ');
                    t.push(n),
                    s.parentNode.insertBefore(n, s);
                    var i = r(e.data)(o)
                      , a = s.parentNode
                      , u = [];
                    angular.forEach(i, function(e) {
                        u.push(e),
                        t.push(e),
                        a.insertBefore(e, s)
                    }),
                    o.$on("$destroy", function() {
                        angular.forEach(t, function(e) {
                            e.parentNode === a && a.removeChild(e)
                        })
                    }),
                    a.removeChild(s),
                    c(o, {
                        $result: u
                    })
                }
            }, function() {
                setTimeout(function() {
                    throw new Error('notwig: 模板资源加载错误, src="' + l + '"')
                })
            })
        }
    }
}
]),
angular.module("meleme").directive("xyRating", [function() {
    return {
        restrict: "E",
        replace: !0,
        scope: {
            valuenow: "=",
            ratingstates: "="
        },
        templateUrl: "/html/trade/xyrating.html",
        link: function(e, t, r) {
            e.$watch("ratingstates", function(t) {
                e.range = t ? t : [{}, {}, {}, {}, {}]
            }),
            e.$watch("valuenow", function(t) {
                e.valuenow = t || 0,
                e.nowindex = e.valuenow - 1 < 0 ? 0 : e.valuenow > e.range.length ? e.range.length - 1 : e.valuenow - 1
            }),
            e.xyrate = function(t) {
                "true" !== r.readonly && (e.valuenow = t)
            }
        }
    }
}
]),
angular.module("meleme").directive("rating", function() {
    return {
        restrict: "E",
        scope: {
            point: "="
        },
        template: '<notwig src="/msite/svg-inline/svg-rating-star.svg" ng-load="onload($result)"></notwig>',
        link: function(e) {
            e.onload = function(t) {
                var r = angular.element(t[0]);
                e.$watch("point", function(e) {
                    var t = Number(e) || 0
                      , n = Math.round(2 * t)
                      , o = 10 * Math.floor(5 - n / 2)
                      , i = n % 2 === 0 ? 0 : 10;
                    r.attr("viewBox", [o, i, 50, 10].join(" "))
                })
            }
        }
    }
}),
angular.module("meleme").directive("restaurantTab", ["$location", "$routeParams", function(e, t) {
    return {
        restrict: "E",
        scope: {
            state: "=",
            restaurant: "="
        },
        templateUrl: "/html/restaurant/tabs.html",
        link: function(r) {
            r.tabs = [{
                name: "菜单",
                state: "menu"
            }, {
                name: "评价",
                state: "ratings"
            }, {
                name: "商家",
                state: "info"
            }],
            r.changeState = function(r) {
                e.url("/shop/" + t.restaurantid + "/" + ("menu" === r ? "" : r))
            }
        }
    }
}
]),
angular.module("meleme").directive("restaurantViewport", ["$timeout", "RESTAURANT_SECTIONS_HEIGHT", function(e, t) {
    return {
        restrict: "A",
        link: function(e, r) {
            var n = window.document.documentElement.clientHeight;
            for (var o in t)
                n -= t[o].height;
            r.css("height", n + "px")
        }
    }
}
]),
angular.module("meleme").directive("searchBtn", function() {
    return {
        restrict: "A",
        scope: {
            search: "&"
        },
        link: function(e, t) {
            t.on("keyup", function(t) {
                13 === t.which && e.search()
            })
        }
    }
}),
angular.module("meleme").directive("sendcode", ["$timeout", "VerifyCode", "SweetAlert", function(e, t, r) {
    return {
        restrict: "E",
        replace: !0,
        template: '\n      <div>\n        <p ng-if="audio" class="msgcode-audio">收不到短信？使用<a class="msgcode-contact-num" ng-click="sendCode(\'audio\')">语音验证码</a></p>\n        <p ng-if="audio && audioclicked" class="msgcode-dial">电话拨打中...请留意来自<span class="msgcode-dial-num">021-315754XX</span>的电话</p>\n        <button ng-if="sms" class="ui-btn" ng-disabled="ngdisabled || countdown" ng-click="sendCode(\'sms\')"><span ng-bind="countdown ? \'重发验证码\' : \'发送验证码\'"></span><countdown class="ui-parenthese countdown_number" time="30" ng-show="countdown"></countdown></button>\n      </div>\n    ',
        scope: {
            ngModel: "=",
            audio: "=",
            sms: "=",
            mobile: "=",
            ngdisabled: "="
        },
        require: "ngModel",
        link: function(n) {
            n.sendCode = function(o) {
                /^1[3-9]\d{9}$/.test(n.mobile) ? t.carry({
                    way: "mobile",
                    action: "send",
                    mobile: n.mobile,
                    type: o
                }).$promise.then(function(t) {
                    n.ngModel = t.validate_token,
                    "sms" === o ? (n.countdown = !0,
                    e(function() {
                        n.countdown = null
                    }, 3e4)) : n.audioclicked = !0
                }, function(e) {
                    "USER_CANCEL" !== e.data.name && r.swal({
                        title: e.data.message || "服务器君饿晕了",
                        type: "warning",
                        confirmButtonText: "确定"
                    })
                }) : r.swal({
                    title: "温馨提示",
                    text: "请检查手机号码",
                    customClass: "complaint-service-box",
                    confirmButtonText: "确定"
                })
            }
        }
    }
}
]),
angular.module("meleme").directive("skateShoes", ["$timeout", function(e) {
    return {
        restrict: "A",
        link: function(t, r, n) {
            var o, i = {
                click: !0,
                mouseWheel: !0
            };
            t.$watch(n.skateShoes, function(t) {
                t && e(function() {
                    o && o.destroy(),
                    o = new IScroll(r[0],i)
                })
            }),
            t.$on("$destroy", function() {
                o && o.destroy()
            })
        }
    }
}
]),
angular.module("meleme").directive("snsshare", ["$rootScope", "UserAgent", function(e, t) {
    return {
        restrict: "E",
        replace: !0,
        scope: {
            links: "="
        },
        template: '\n        <div class="invite-mask">\n          <div class="invite-body">\n            <div class="invite-icons">\n              <span class="icon-invite-weixin"><a data-share="wechat" href="JavaScript:" ubt-click="1499" ubt-data-platform="weixin"><img data-share="wechat" ng-src="[[$root.STATICBASE]]/eleme/msite/img/commend/weixin.png"></a>微信</span>\n              <!--<span class="icon-invite-circle"><a data-share="circle" href="JavaScript:" ubt-click="1499" ubt-data-platform="circle"><img data-share="circle" ng-src="[[$root.STATICBASE]]/eleme/msite/img/commend/circle.png"></a>朋友圈</span>-->\n              <span class="icon-invite-weibo"><a data-share="weibo" href="JavaScript:" ubt-click="1499" ubt-data-platform="weibo"><img data-share="weibo" ng-src="[[$root.STATICBASE]]/eleme/msite/img/commend/weibo.png"></a>微博</span>\n              ' + (e.compareAppVersion(t.appVersion, "5.6") ? '<span class="icon-invite-qq"><a data-share="qq" href="JavaScript:" ubt-click="1499" ubt-data-platform="qq"><img data-share="qq" ng-src="[[$root.STATICBASE]]/eleme/msite/img/commend/qq.png"></a>QQ</span>' : "") + "\n              " + (e.compareAppVersion(t.appVersion, "5.6") ? '<span class="icon-invite-qqzone"><a data-share="qqzone" href="JavaScript:" ubt-click="1499" ubt-data-platform="qzone"><img data-share="qqzone" ng-src="[[$root.STATICBASE]]/eleme/msite/img/commend/qqzone.png"></a>QQ空间</span>' : "") + '\n            </div>\n            <a class="invite-cancel" href="javascript:;">取消</a>\n          </div>\n        </div>\n      ',
        link: function(e, t) {
            t.on("click", function(t) {
                var r = document.querySelector(".invite-body");
                (!r.contains(t.target) || t.target.classList.contains("invite-cancel")) && angular.$(".invite-mask").removeClass("mask-toggle");
                var n = e.links[t.target.getAttribute("data-share")];
                n && (location.href = n)
            })
        }
    }
}
]),
angular.module("meleme").directive("standalone", [function() {
    return function() {
        "standalone"in window.navigator && window.navigator.standalone && document.body.classList.add("standalone")
    }
}
]),
angular.module("meleme").directive("toast", ["$timeout", function(e) {
    return {
        restrict: "E",
        replace: !0,
        template: '\n      <div class="toast" ng-bind="message" ng-show="message"></div>\n    ',
        scope: {
            message: "="
        },
        link: function(t) {
            t.$watch("message", function(r) {
                if (r) {
                    var n = 150 * r.length + 500;
                    e(function() {
                        t.message = null
                    }, n)
                }
            })
        }
    }
}
]),
angular.module("meleme").directive("tracker", [function() {
    return function(e, t, r) {
        var n = r.tracker;
        n && (n = n.split(":"))
    }
}
]);
var _slicedToArray = function() {
    function e(e, t) {
        var r = []
          , n = !0
          , o = !1
          , i = void 0;
        try {
            for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value),
            !t || r.length !== t); n = !0)
                ;
        } catch (l) {
            o = !0,
            i = l
        } finally {
            try {
                !n && s["return"] && s["return"]()
            } finally {
                if (o)
                    throw i
            }
        }
        return r
    }
    return function(t, r) {
        if (Array.isArray(t))
            return t;
        if (Symbol.iterator in Object(t))
            return e(t, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}()
  , _createClass = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r),
        n && e(t, n),
        t
    }
}();
angular.module("meleme").controller("agreementCtrl", ["$rootScope", function(e) {
    e.isFromApp && (e.Page.title = "使用条款和协议")
}
]),
angular.module("meleme").controller("bindMobileCtrl", ["$scope", "Page", "Mobile", "$rootScope", "VerifyCode", "$location", function(e, t, r, n, o, i) {
    e.isFromApp && (t.title = "绑定手机"),
    n.profile.$promise.then(function() {
        return i.search().mobile_token || 1 !== n.profile.is_mobile_valid ? void 0 : location.href = "/profile/unbind"
    }),
    e.user = {
        mobile: "",
        code: "",
        serverError: !1
    },
    e.user.user_mobile_token = i.search().mobile_token,
    e.bind = function() {
        return 1 === n.profile.is_mobile_valid && Number(n.profile.mobile) === Number(e.user.mobile) ? swal({
            title: "无法绑定",
            text: "新手机号同当前绑定手机号一样",
            confirmButtonText: "确定"
        }) : void r.bindMobile({
            mobile_token: e.user.mobile_token,
            user_mobile_token: i.search().mobile_token
        }, function() {
            n.profile.mobile = e.user.mobile;
            var t = i.search().redirectPath;
            t ? i.path(t) : e.bindSuccess = !0
        }, function(t) {
            switch (e.user.serverError = !0,
            t.data.name) {
            case "MOBILE_OCCUPIED_WITHOUT_BALANCE":
                swal({
                    title: "无法绑定",
                    text: "该手机号已被其他账号绑定。如果继续，原账号将自动解绑，确认绑定吗？",
                    confirmButtonText: "确定",
                    showCancelButton: "true",
                    cancelButtonText: "取消"
                }, function(t) {
                    t && r.bindMobile({
                        mobile_token: e.user.mobile_token,
                        user_mobile_token: i.search().mobile_token,
                        force: !0
                    }, function() {
                        e.bindSuccess = !0
                    })
                });
                break;
            case "MOBILE_OCCUPIED_WITH_BALANCE":
                swal({
                    title: "无法绑定",
                    text: "该手机号已被其他账号绑定，且原账号内有余额或红包，建议直接使用原账号登录",
                    confirmButtonText: "知道了"
                });
                break;
            case "INVALID_MOBILE_TOKEN":
                e.user.errorMsg = "无效的手机令牌";
                break;
            case "INVALID_USER_MOBILE_TOKEN":
                e.user.errorMsg = "无效的用户手机令牌";
                break;
            default:
                e.user.errorMsg = "未知的服务器错误"
            }
        })
    }
    ,
    e.changeMobile = function() {
        e.mobileorigin = e.user.mobile === n.profile.mobile ? !0 : !1
    }
    ,
    e.formSubmit = function(t) {
        o.carry({
            way: "mobile",
            action: "validate",
            validate_token: e.user.validate_token,
            validate_code: t.code
        }).$promise.then(function(t) {
            e.user.mobile_token = t.mobile_token,
            e.countdown = !1,
            e.user.serverError = !t.validate,
            t.validate ? e.bind() : (e.user.serverError = !0,
            e.user.errorMsg = "验证码错误",
            e.countdown = !1)
        })
    }
}
]),
angular.module("meleme").controller("commendDetailCtrl", ["$rootScope", "$scope", "UserReferDetail", "SweetAlert", "NotifyUser", "Page", "crayfish", "$q", function(e, t, r, n, o, i, a, s) {
    e.bodyWhite = 1,
    e.loading = !0,
    i.title = "成就详情";
    var l = function() {
        function e(t) {
            _classCallCheck(this, e),
            angular.extend(this, t)
        }
        return _createClass(e, [{
            key: "remind",
            value: function() {
                d([this.id])
            }
        }, {
            key: "update",
            value: function() {
                this.notified = !0
            }
        }]),
        e
    }();
    t.commendDetail = {},
    t.links = {},
    t.refer_users = [],
    t.hasRecord = !0,
    t.isrecordLoading = !1,
    t.hasMoreData = !0;
    var c = 0
      , u = 10;
    t.recordLoadMore = function() {
        !t.isrecordLoading && t.hasMoreData && (t.isrecordLoading = !0,
        s.all([e.profile.$promise, a.load("/commend")]).then(function(n) {
            var o = _slicedToArray(n, 2)
              , i = o[0]
              , a = o[1];
            t.userName = i.username,
            t.user_id = i.user_id,
            r.get({
                user_id: t.user_id,
                limit: u,
                offset: c
            }, function(e) {
                t.commendDetail = e;
                var r = t.commendDetail.refer_code
                  , n = t.commendDetail.bonus_amount
                  , o = encodeURIComponent("http://static11.elemecdn.com/eleme/msite/img/sharehongbao.png")
                  , i = encodeURIComponent("http://" + window.location.host + "/activities/invitehongbao?refer_code=" + r + "&sns_type=3")
                  , s = encodeURIComponent(a.text)
                  , d = encodeURIComponent(a.weibotext + "http://" + window.location.host + "/activities/invitehongbao?refer_code=" + r + "&sns_type=1（分享自@饿了么网上订餐）");
                if (t.links = {
                    wechat: "eleme://share?type=0&title=" + encodeURIComponent(n ? a.title : "推荐一款订餐应用「饿了么」，王祖蓝代言，叫外卖既方便又时尚，快来试试吧！") + "&text=" + (n ? s : "") + "&url=" + encodeURIComponent(n ? i + "&sns_type=3" : i) + "&image_url=" + o,
                    weibo: "eleme://share?type=2&text=" + d,
                    qq: "eleme://share?type=4&title=" + encodeURIComponent(n ? a.title : "推荐一款订餐应用「饿了么」，王祖蓝代言，叫外卖既方便又时尚，快来试试吧！") + "&text=" + (n ? s : "") + "&url=" + encodeURIComponent(n ? i + "&sns_type=4" : i) + "&image_url=" + o,
                    qqzone: "eleme://share?type=5&title=" + encodeURIComponent(n ? a.title : "推荐一款订餐应用「饿了么」，王祖蓝代言，叫外卖既方便又时尚，快来试试吧！") + "&text=" + (n ? s : "") + "&url=" + encodeURIComponent(n ? i + "&sns_type=5" : i) + "&image_url=" + o
                },
                e.refer_users.length > 0) {
                    var m;
                    (m = t.refer_users).push.apply(m, _toConsumableArray(e.refer_users.map(function(e) {
                        return new l(e)
                    })))
                }
                t.hasRecord = !!t.refer_users.length,
                t.isrecordLoading = !1,
                e.refer_users.length < u && (t.hasMoreData = !1),
                c += u
            }, function() {
                swal({
                    title: "出错啦",
                    text: "服务端未知错误",
                    confirmButtonText: "知道啦"
                })
            }).$promise["finally"](function() {
                e.loading = !1
            })
        }))
    }
    ;
    var d = function(e) {
        n.swal({
            title: '<input class="commend-name" type="text" placeholder="' + t.userName + '（点击修改昵称）" />',
            text: '<span class="comment-message">一段时间没有你的消息了，我是<b class="commend-name-bind">' + t.userName + "</b>，我一直在用饿了么叫外卖，送了你" + t.commendDetail.bonus_amount + "元的新用户红包，忙碌生活的同时，也要照顾好自己的身体，现在就去饿了么叫份外卖吧~APP下载链接：m.ele.me/dapp\n</span>",
            html: !0,
            customClass: "sa-remind-all",
            confirmButtonText: "发送",
            showCancelButton: !0,
            cancelButtonText: "取消"
        }, function(r) {
            r && o.send({
                user_id: t.user_id
            }, {
                refer_ids: e,
                refer_code: t.commendDetail.refer_code,
                sms_content: angular.$(".comment-message").text()
            }, function() {
                t.toasttip = "发送成功";
                for (var r = 0, n = t.refer_users.length; n > r; r++)
                    (t.refer_users[r].id === e[0] || 0 === e.length) && t.refer_users[r].update()
            }, function() {
                swal({
                    title: "出错啦",
                    text: "服务端未知错误",
                    confirmButtonText: "知道啦"
                })
            })
        }),
        setTimeout(function() {
            var e = angular.$(".commend-name");
            e.on("keyup", function() {
                angular.$(".commend-name-bind").text(e.val() || t.userName)
            })
        }, 400)
    }
    ;
    t.remindAll = function() {
        d([])
    }
    ,
    t.showInvitePanel = function() {
        angular.$(".invite-mask").addClass("mask-toggle")
    }
}
]),
angular.module("meleme").controller("commendCtrl", ["$rootScope", "$scope", "$q", "UserRefer", "Page", "crayfish", function(e, t, r, n, o, i) {
    e.bodyWhite = 0,
    e.loading = !0,
    o.title = "推荐有奖",
    t.links = {},
    t.commendInfo = {},
    r.all([e.profile.$promise, i.load("/commend")]).then(function(r) {
        var o = _slicedToArray(r, 2)
          , i = o[0]
          , a = o[1];
        n.get({
            user_id: i.user_id
        }, function(r) {
            t.commendInfo = r;
            var n = t.commendInfo.refer_code
              , o = t.commendInfo.bonus_amount
              , i = "https://static11.elemecdn.com/eleme/msite/img/" + (o ? "sharehongbao.png" : "e-logo.png")
              , s = o ? e.MOBILEORIGIN + "/activities/invitehongbao?refer_code=" + n : e.MOBILEORIGIN + "/activities/download?from=yaoqinghongbao"
              , l = o ? a.text : "推荐一款订餐应用「饿了么」，王祖蓝代言，叫外卖既方便又时尚，快来试试吧！"
              , c = encodeURIComponent("" + a.weibotext + (o ? s + "&sns_type=1" : s) + "（分享自@饿了么网上订餐）");
            t.links = {
                wechat: "eleme://share?type=0&title=" + encodeURIComponent(o ? a.title : "推荐一款订餐应用「饿了么」，王祖蓝代言，叫外卖既方便又时尚，快来试试吧！") + "&text=" + (o ? l : "") + "&url=" + encodeURIComponent(o ? s + "&sns_type=3" : s) + "&image_url=" + i,
                weibo: "eleme://share?type=2&text=" + c,
                qq: "eleme://share?type=4&title=" + encodeURIComponent(o ? a.title : "推荐一款订餐应用「饿了么」，王祖蓝代言，叫外卖既方便又时尚，快来试试吧！") + "&text=" + (o ? l : "") + "&url=" + encodeURIComponent(o ? s + "&sns_type=4" : s) + "&image_url=" + i,
                qqzone: "eleme://share?type=5&title=" + encodeURIComponent(o ? a.title : "推荐一款订餐应用「饿了么」，王祖蓝代言，叫外卖既方便又时尚，快来试试吧！") + "&text=" + (o ? l : "") + "&url=" + encodeURIComponent(o ? s + "&sns_type=5" : s) + "&image_url=" + i
            }
        }, function() {
            swal({
                title: "出错啦",
                text: "服务端未知错误",
                confirmButtonText: "知道啦"
            })
        }).$promise["finally"](function() {
            e.loading = !1
        })
    }),
    t.showInvitePanel = function() {
        angular.$(".invite-mask").addClass("mask-toggle")
    }
}
]),
angular.module("meleme").config(["$routeProvider", function(e) {
    e.when("/delivery", {
        templateUrl: "/html/order/base.html",
        controller: "deliveryCtrl",
        controllerAs: "deliveryCtrl"
    })
}
]).controller("deliveryCtrl", ["$rootScope", "Restaurant", "Cart", "Order", "$scope", "Doreamon", "$location", "ProfileHongbao", "SweetAlert", "I18N", "Pay", function(e, t, r, n, o, i, a, s, l, c, u) {
    var d = {}
      , m = this;
    i = new i,
    m.promiseQuene = {},
    m.discount = {},
    m.cancoupon = sessionStorage.getItem("isFromWechatpublic") || null ,
    m.invoice = {
        enable: !1
    },
    d.order = {
        address: null ,
        payment: null ,
        time: null ,
        note: null
    },
    d.cart = {},
    d.submitted = !1,
    d.init = function() {
        d.cartDeferred = r.init().$promise.then(function() {
            return r.save().$promise
        }),
        d.getHongbaoCount = function() {
            var t = (new Date).toISOString();
            e.profile.$promise.then(function(e) {
                s.getcount({
                    userid: e.user_id,
                    way: "count",
                    "status[]": 0,
                    begin_date: "," + t,
                    end_date: t + ","
                }, function(e) {
                    m.hongbaoCount = e.count
                })
            })
        }
        ,
        d.cartDeferred = d.cartDeferred.then(function() {
            return t.get({
                id: r.getRestaurant().id
            }).$promise.then(function(e) {
                var t = void 0;
                m.restaurant = e,
                5 === e.status && (m.order.time = e.book_times && e.book_times[0]),
                e.is_support_invoice && r.totalPrice() - e.minimum_invoice_amount >= 0 && (m.invoice.enable = !0),
                t = e.is_online_payment ? "online" : "offline",
                d.setPayment(t)
            })
        }),
        d.inject(),
        d.bindEvents(),
        d.getHongbaoCount()
    }
    ,
    d.inject = function() {
        m.promiseQuene.cart = d.cartDeferred,
        m.doreamon = i,
        m.canPay = d.canPay,
        m.setPayment = d.setPayment,
        m.checkout = d.checkout,
        m.makeOrder = d.makeOrder,
        m.cart = d.cart,
        m.order = d.order
    }
    ,
    d.bindEvents = function() {
        e.$on("cart:update", function(e, t) {
            o.$broadcast("cart:update", t)
        })
    }
    ,
    d.canPay = function() {
        return m.order.address ? m.order.payment ? !0 : (swal({
            title: "出错啦",
            text: "请选择支付方式"
        }),
        !1) : (swal({
            title: "出错啦",
            text: "地址不能为空"
        }),
        !1)
    }
    ,
    d.setPayment = function(e) {
        switch (e.toLowerCase()) {
        case "online":
            if (!m.restaurant.is_online_payment)
                return;
            d.payment = "online",
            d.order.payment = "online",
            m.payment = "online";
            break;
        case "offline":
            d.payment = "offline",
            d.order.payment = "offline",
            m.payment = "offline";
            break;
        default:
            throw Error("不支持的支付类型：" + e)
        }
        o.$broadcast("payment", d.payment)
    }
    ,
    d.checkout = function() {
        t.get({
            id: r.getRestaurant().id
        }).$promise.then(function(e) {
            var t = [2, 4, 8].indexOf(e.status);
            if (-1 !== t)
                l.swal({
                    title: "温馨提示",
                    text: c.restaurantNotes[t],
                    confirmButtonText: "确定"
                }, function() {
                    r.clear(),
                    a.url("/place/" + $localStorage.getItem("geohash"))
                });
            else {
                if (!d.canPay())
                    return;
                m.makeOrder()
            }
        })
    }
    ,
    d.makeOrder = function() {
        d.cartDeferred.then(function() {
            var t = m.order
              , i = t.address
              , s = t.invoice
              , l = t.note
              , c = t.payment
              , f = t.time
              , p = t.cart
              , g = t.validation
              , h = e.profile.user_id;
            r.change("phone", {
                phone: i.phone
            }).then(function(e) {
                m.order.cart.phone = e.phone
            }),
            n.save({
                user_id: h || "anonymous",
                cart_id: p.id,
                come_from: "mobile_web",
                sig: p.sig,
                total: p.total,
                address_id: i.id || 0,
                paymethod_id: "online" === c ? 1 : 0,
                description: l || "",
                deliver_time: f || "",
                invoice: s && s.name || null ,
                validation_token: g && g.validation_token,
                validation_code: g && g.validation_code
            }, function(e) {
                e.need_validation ? (m.order.validation = e,
                o.$broadcast("mcb:send")) : (m.doreamon.setState("normal"),
                r.clearAndCreate()["finally"](function() {
                    switch (d.payment) {
                    case "online":
                        u.make({
                            orderId: e.unique_id,
                            userId: h || e.user_profile && e.user_profile.user_id
                        })["catch"](commonError);
                        break;
                    case "offline":
                        a.url("/order/" + e.unique_id + "/success")
                    }
                }))
            }, function(e) {
                switch (e.data.name) {
                case "INVALID_VALIDATE_CODE":
                    m.errorMsg = "验证码错误";
                    break;
                case "ADDRESS_NOT_FOUND":
                    $localStorage.removeItem("anonymousAddr"),
                    swal({
                        title: "出错啦",
                        text: e.data.message || "服务端未知错误",
                        confirmButtonText: "知道啦"
                    }, function() {
                        location.reload()
                    });
                    break;
                default:
                    swal({
                        title: "出错啦",
                        text: e.data.message || "服务端未知错误",
                        confirmButtonText: "知道啦"
                    })
                }
            })
        })
    }
    ,
    d.init()
}
]).controller("deliveryAddressCtrl", ["$rootScope", "$scope", "Address", "Doreamon", "Poi", "Cart", function(e, t, r, n, o, i) {
    var a = {}
      , s = this
      , l = t.deliveryCtrl;
    s.poi = {
        errorMsg: null ,
        geohash: null ,
        poi_type: null
    },
    s.newAddress = {},
    n = new n,
    a.init = function() {
        function t(e) {
            s.addressList = [],
            401 === +e.status ? l.promiseQuene.cart.then(function() {
                var e = void 0;
                try {
                    e = JSON.parse($localStorage.getItem("anonymousAddr"))
                } catch (t) {
                    e = $localStorage.getItem("anonymousAddr")
                }
                if (e) {
                    if (l.restaurant.only_use_poi && 1 === e.poi_type || !e.st_geohash)
                        return;
                    s.currentAddress = e,
                    l.order.address = e,
                    s.addressList.push(e)
                }
            }) : swal({
                title: "出错啦",
                text: e.message || "服务端未知错误",
                confirmButtonText: "知道啦"
            })
        }
        n.init("normal"),
        a.promise = l.promiseQuene.cart.then(function() {
            return e.profile.$promise
        }).then(function(e) {
            var t = e.user_id;
            return r.query({
                user_id: t
            }).$promise
        }).then(function(e) {
            s.addressList = e,
            e.some(function(e) {
                return e.is_user_default ? l.restaurant.only_use_poi && 1 === e.poi_type || !e.st_geohash ? !0 : (s.currentAddress = e,
                l.order.address = e,
                !0) : void 0
            })
        })["catch"](t),
        a.inject()
    }
    ,
    a.inject = function() {
        s.doreamon = n;
        var e = a.select
          , t = a.remove
          , r = a.create
          , o = a.queryPoi
          , i = a.addPoi;
        s.select = e,
        s.remove = t,
        s.create = r,
        s.queryPoi = o,
        s.addPoi = i
    }
    ,
    a.select = function(e) {
        e.id !== (s.currentAddress || {}).id && a.promise.then(function() {
            return l.restaurant.only_use_poi && 1 === e.poi_type || !e.st_geohash ? void swal({
                title: "请重新选择地址",
                text: "很抱歉，为了满足商家对位置信息的要求，请您重新添加地址",
                showCancelButton: !0,
                confirmButtonText: "去添加",
                cancelButtonText: "取消",
                closeOnConfirm: !0
            }, function(e) {
                e && t.$apply(function() {
                    return n.setState("create")
                })
            }) : (s.currentAddress = e,
            l.order.address = e,
            void i.change("address_set", {
                address_id: s.currentAddress.id,
                come_from: "mobile_web"
            }).then(function(e) {
                t.$emit("cart:update", e),
                n.setState("normal")
            }))
        })
    }
    ,
    a.remove = function(t) {
        var n;
        a.promise.then(function() {
            e.profile.$promise.then(function(e) {
                n = e.user_id
            }, function() {
                n = "anonymous"
            }).then(function() {
                angular.equals(s.currentAddress, t) && (s.currentAddress = null ,
                l.order.address = null );
                var e = void 0;
                s.addressList.some(function(r, n) {
                    return r.id === t.id ? (e = n,
                    !0) : void 0
                }),
                e >= 0 && (s.addressList.splice(e, 1),
                s.doreamon.setState("select", "normal"),
                a.promise.then(function() {
                    return "anonymous" === n ? $localStorage.removeItem("anonymousAddr") : void r["delete"]({
                        address_id: t.id,
                        user_id: n
                    }, angular.noop, function(e) {
                        throw Error(JSON.stringify(e))
                    })
                })["catch"](function(e) {
                    throw Error(JSON.stringify(e))
                }))
            })
        })
    }
    ,
    a.create = function(o) {
        s.poi.geohash && (o.geohash = s.poi.geohash),
        angular.extend(o, {
            poi_type: s.poi.poi_type
        });
        var i;
        a.promise.then(function() {
            e.profile.$promise.then(function(e) {
                i = e.user_id
            }, function() {
                i = "anonymous"
            }).then(function() {
                r.save({
                    user_id: i
                }, o, function(e) {
                    angular.extend(o, {
                        id: e.address_id || e.id
                    }),
                    s.addressList.push(o),
                    s.formCreate.$setPristine(),
                    s.doreamon.setState("normal"),
                    l.promiseQuene.cart.then(function() {
                        if (l.restaurant.only_use_poi && 1 === o.poi_type)
                            return void swal({
                                title: "请重新选择地址",
                                text: "很抱歉，为了满足商家对位置信息的要求，请您重新添加地址",
                                showCancelButton: !0,
                                confirmButtonText: "去添加",
                                cancelButtonText: "取消",
                                closeOnConfirm: !0
                            }, function(e) {
                                e && t.$apply(function() {
                                    return n.setState("create")
                                })
                            });
                        var e = angular.copy(o);
                        s.currentAddress = e,
                        l.order.address = e,
                        $localStorage.setItem("anonymousAddr", JSON.stringify(e)),
                        s.newAddress = {},
                        n.setState("normal")
                    })
                }, function(e) {
                    throw Error(JSON.stringify(e))
                })
            })
        })
    }
    ,
    a.queryPoi = function(e) {
        return 13 === e.which ? void a.addPoi() : void (s.poi.keyword && (s.poi.timer && clearTimeout(s.poi.timer),
        s.poi.searched = !0,
        s.poi.timer = setTimeout(function() {
            o.query({
                type: "nearby",
                geohash: $localStorage.getItem("geohash"),
                keyword: s.poi.keyword
            }).$promise.then(function(e) {
                s.poi.list = e
            })
        }, 300)))
    }
    ,
    a.addPoi = function(e) {
        return e || s.poi.keyword ? (s.poi.errorMsg = null ,
        s.poi.geohash = e ? e.geohash : null ,
        s.poi.poi_type = e ? 0 : 1,
        s.newAddress.address = e && e.address || s.poi.keyword,
        void n.setState("create")) : void (s.poi.errorMsg = "地址不能为空")
    }
    ,
    a.init()
}
]).controller("deliveryCartCtrl", ["$scope", "Cart", function(e, t) {
    var r = {}
      , n = this
      , o = e.deliveryCtrl;
    r.checkPaymentDiscount = function(e) {
        o.promiseQuene.cart.then(function() {
            t.change("is_online_paid", {
                is_online_paid: "online" === e || 0
            }).then(function(e) {
                r.updateCart(e),
                o.order.cart = e,
                o.order.cart.sig = t.getInfo().sig
            })
        })
    }
    ,
    r.updateCart = function(e) {
        n.originPrice = e.deliver_amount,
        n.foods = e.group[0],
        n.totalPrice = e.total,
        n.extras = e.extra,
        n.abandoned_extras = e.abandoned_extra,
        n.restaurant_id = e.restaurant_id
    }
    ,
    r.init = function() {
        r.bindEvents()
    }
    ,
    r.bindEvents = function() {
        var t = "payment"
          , n = "cart:update";
        e.$on(t, function(e, t) {
            r.checkPaymentDiscount(t)
        }),
        e.$on(n, function(e, t) {
            r.updateCart(t)
        })
    }
    ,
    r.init()
}
]).controller("deliveryNoteCtrl", ["$scope", "Doreamon", "I18N", function(e, t, r) {
    var n = {}
      , o = this
      , i = e.deliveryCtrl;
    t = new t,
    n.options = r.notes,
    n.init = function() {
        t.init("normal"),
        n.inject()
    }
    ,
    n.inject = function() {
        o.doreamon = t,
        o.options = n.options,
        o.toggleNote = n.toggleNote,
        o.isSelected = n.isSelected
    }
    ,
    n.isSelected = function(e) {
        var t = new RegExp(e,"g");
        return t.test(i.order.note)
    }
    ,
    n.toggleNote = function(e) {
        i.order.note = n.isSelected(e) ? i.order.note.replace(new RegExp(e), "") : i.order.note && i.order.note.trim() ? i.order.note + (" " + e) : e
    }
    ,
    n.init()
}
]).controller("deliveryInvoiceCtrl", ["$rootScope", "$scope", "Invoice", "Doreamon", function(e, t, r, n) {
    var o, i = {}, a = this, s = t.deliveryCtrl;
    n = new n,
    i.init = function() {
        n.init("normal"),
        o = e.profile.$promise.then(function(e) {
            return r.query({
                user_id: e.user_id
            }).$promise
        }, function(e) {
            return e
        }),
        i.deferred = o.then(function(e) {
            return 401 === Number(e.status) ? a.invoice = [] : (a.invoice = e,
            void (s.order.invoice = a.current = e[0]))
        }),
        i.inject()
    }
    ,
    i.inject = function() {
        a.doreamon = n,
        a.toggleState = i.toggleState,
        a.select = i.select,
        a.remove = i.remove,
        a.create = i.create
    }
    ,
    i.toggleState = function() {
        o.then(function() {
            a.invoice ? n.setState("select", "normal") : n.setState("create")
        })
    }
    ,
    i.select = function(e) {
        e !== a.current && (s.order.invoice = a.current = e || null ,
        n.setState("normal"))
    }
    ,
    i.remove = function(t) {
        i.deferred.then(function() {
            t === a.current && (s.order.invoice = a.current = null );
            var n = a.invoice.indexOf(t);
            a.invoice.splice(n, 1),
            e.profile.$promise.then(function(e) {
                r["delete"]({
                    user_id: e.user_id,
                    invoice_id: t.id
                }, angular.noop)
            })
        })
    }
    ,
    i.create = function(t) {
        i.deferred.then(function() {
            s.order.invoice = a.current = t,
            a.invoice.unshift(t),
            n.setState("normal"),
            e.profile.$promise.then(function(e) {
                r.save({
                    user_id: e.user_id
                }, t, angular.noop)
            })
        })
    }
    ,
    s.promiseQuene.cart.then(function() {
        s.invoice.enable && i.init()
    })
}
]).controller("deliveryCouponCtrl", ["$rootScope", "Doreamon", "$scope", "Cart", function(e, t, r, n) {
    var o = {}
      , i = this
      , a = r.deliveryCtrl;
    t = new t,
    i.coupon = "",
    o.init = function() {
        t.init("normal"),
        o.inject()
    }
    ,
    o.inject = function() {
        i.doreamon = t,
        i.gotoUse = o.gotoUse,
        i.use = o.use
    }
    ,
    o.gotoUse = function(e) {
        void (e && t.setState("use"))
    }
    ,
    o.use = function(o) {
        e.profile.$promise.then(function() {
            n.change(angular.extend({
                coupon: o.coupon
            })).then(function(e) {
                e.error ? i.errorMsg = e.error && e.error.msg : a.promiseQuene.cart.then(function() {
                    n.getRemote().$promise.then(function(e) {
                        r.$emit("cart:update", e)
                    }, angular.noop).then(function() {
                        t.setState("normal")
                    })
                })
            }, angular.noop)
        })
    }
    ,
    o.init()
}
]).controller("deliveryMcbCtrl", ["$rootScope", "$scope", "$q", "$timeout", "Mcb", "Doreamon", function(e, t, r, n, o, i) {
    var a = {}
      , s = this
      , l = t.deliveryCtrl;
    i = new i,
    a.init = function() {
        a.inject(),
        a.bindEvents()
    }
    ,
    a.inject = function() {
        s.doreamon = i,
        s.send = a.send,
        s.validate = a.validate
    }
    ,
    a.bindEvents = function() {
        var e = "mcb:send";
        t.$on(e, function() {
            switch (l.doreamon.setState("mcb"),
            l.order.validation.validation_type) {
            case "mobile_sms_review":
            case "mobile_login":
                s.doreamon.setState("text"),
                t.countdown = !0,
                n(function() {
                    t.countdown = null
                }, 6e4);
                break;
            case "mobile_voice_first":
            case "mobile_voice_review":
            case "mobile_register":
                s.doreamon.setState("change");
                break;
            default:
                s.doreamon.setState("text"),
                a.send()
            }
        })
    }
    ,
    a.send = function() {
        t.countdown = !0,
        n(function() {
            t.countdown = null
        }, 6e4);
        var i = l.order.cart;
        return e.profile.$promise["finally"](function() {
            var e = void 0;
            switch (s.doreamon.state) {
            case "text":
                e = "sms";
                break;
            case "voice":
                e = "voice"
            }
            return o.save({
                cart_id: i.id,
                sig: i.sig,
                type: e
            }).$promise.then(function(e) {
                l.order.validation.validation_token = e.validate_token
            }, function(e) {
                return swal({
                    title: "出错啦",
                    text: e.data.message || "服务端未知错误",
                    confirmButtonText: "知道啦"
                }),
                l.doreamon.setState("normal"),
                r.reject()
            })
        })
    }
    ,
    a.validate = function() {
        s.code && 6 === s.code.length ? (l.order.validation.validation_code = s.code,
        l.makeOrder(),
        s.errorMsg = null ) : s.errorMsg = "请填写正确格式的验证码"
    }
    ,
    a.init()
}
]),
angular.module("meleme").controller("forgetCtrl", ["$scope", "$rootScope", "VerifyCode", "Captcha", "UserExists", "$location", function(e, t, r, n, o, i) {
    t.isFromApp && (t.Page.title = "重置密码");
    var a = {};
    a.init = function() {
        a.inject(),
        a.getCaptcha()
    }
    ,
    a.inject = function() {
        e.server = {
            captcha: null ,
            error: {
                status: null ,
                msg: null
            }
        },
        e.refresh = a.getCaptcha,
        e.formSubmit = a.formSubmit
    }
    ,
    a.getCaptcha = function() {
        n.save(function(r) {
            e.server.captcha = t.RESTBASE + "/v1/captchas/" + r.code
        })
    }
    ,
    a.formSubmit = function(e) {
        var t = /[^\d]/g.test(e.userid)
          , n = t ? "email" : "mobile"
          , s = {
            way: n,
            action: "send",
            captcha_code: e.captcha
        }
          , l = {
            type: n
        };
        l[n] = e.userid,
        s[n] = e.userid,
        t || (s.type = "sms"),
        o.get(l).$promise.then(function(n) {
            return n.is_exists ? void r.carry(s).$promise.then(function(r) {
                i.url("/forget/reset?token=" + r.validate_token + "&from=" + (t ? "email" : "mobile") + "&userid=" + e.userid)
            }, function(e) {
                e.data && "USER_CANCEL" === e.data.name || a.reset(e.message || e.data && e.data.message)
            }) : void a.reset(t ? "您输入的邮箱地址不存在或者尚未绑定" : "您输入的手机号码尚未绑定")
        })
    }
    ,
    a.reset = function(t) {
        e.server.error.msg = t,
        e.findForm.$setPristine(),
        e.refresh()
    }
    ,
    a.init()
}
]),
angular.module("meleme").controller("geoSearchCtrl", ["$rootScope", "$routeParams", "$scope", "Restaurant", "Food", "$q", "$timeout", "$location", function(e, t, r, n, o, i, a, s) {
    var l = this
      , c = 5;
    l.histories = $localStorage.getItem("searchHistory") && JSON.parse($localStorage.getItem("searchHistory")) || [],
    this.restaurantInfo = function(e) {
        s.url(e)
    }
    ,
    this.query = function(e, a) {
        if (e && "" === l.keyword && (delete l.foods,
        delete l.restaurants,
        l.searched = !1),
        !e || 13 === e.which) {
            if (a) {
                var s = l.histories.indexOf(a);
                l.histories.splice(s, 1),
                l.keyword = a
            }
            if (l.keyword) {
                var u = n.query({
                    type: "search",
                    geohash: t.geohash,
                    keyword: this.keyword,
                    "extras[]": "restaurant_activity"
                })
                  , d = o.query({
                    type: "search",
                    geohash: t.geohash,
                    keyword: this.keyword,
                    "extras[]": "restaurant"
                });
                l.histories || $localStorage.setItem("searchHistory", "[]"),
                -1 === l.histories.indexOf(l.keyword) && (l.histories.length === c && l.histories.pop(),
                l.histories.unshift(l.keyword),
                $localStorage.setItem("searchHistory", JSON.stringify(l.histories))),
                i.all([u, d]).then(function(e) {
                    l.restaurants = e[0],
                    l.foods = e[1],
                    r.$$postDigest(function() {
                        l.searched = !0
                    })
                })["catch"](function(e) {
                    setTimeout(function() {
                        throw e
                    })
                })
            }
        }
    }
    ,
    this.remove = function(e, t) {
        t.stopPropagation();
        var r = l.histories.indexOf(e);
        l.histories.splice(r, 1),
        $localStorage.setItem("searchHistory", JSON.stringify(l.histories))
    }
    ,
    this.removeAll = function() {
        l.histories = [],
        $localStorage.removeItem("searchHistory")
    }
}
]),
angular.module("meleme").controller("geoNormalCtrl", ["$scope", "$rootScope", "$routeParams", "$location", "Restaurant", "Page", "Poi", "$q", "WechatAPI", "RestaurantLazyLoader", function(e, t, r, n, o, i, a, s, l, c) {
    t.Page = i,
    t.loading = !0;
    var u = r.geohash;
    if ($localStorage.setItem("geohash", u),
    u) {
        var d = location.host.replace(/m\./, "h5.");
        location.href = "//" + d + "/msite/#geohash=" + u
    }
    e.restaurants = new c({
        geohash: u,
        type: "geohash",
        "extras[]": ["restaurant_activity", "food_activity"]
    }),
    e.restaurants.load(),
    e.flavorFilter = angular.extend(function p(e) {
        return ~e.flavors.indexOf(p.value)
    }, {
        active: !1,
        value: "",
        select: function(e) {
            this.value = e,
            this.active = !1
        },
        toggle: function() {
            this.active = !this.active
        }
    });
    var m = a.query({
        type: "geohash",
        geohash: u
    }).$promise
      , f = o.query({
        geohash: u,
        type: "geohash",
        is_premium: 1,
        limit: 5
    }).$promise;
    m.then(function(t) {
        return e.poi = t[0]
    }),
    s.all([m, f]).then(function(e) {
        var r = _slicedToArray(e, 2)
          , n = r[0]
          , o = r[1]
          , a = n[0];
        if (!a)
            return location.href = "/home?force=1";
        var s = [].concat(o.slice(0, 5)).map(function(e) {
            return e.name
        }).join("、");
        i.title = a.name + "附近美食_外卖商家_" + a.address + "-饿了么网上订餐",
        i.keywords = a.name + "美食," + a.name + "商家," + a.name + "外卖",
        i.description = a.name + "附近的商家美食有" + s + "等，更多美食外卖，尽在饿了么。",
        l.sudo(["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]).then(function(e) {
            angular.forEach(e, function(e) {
                return e({
                    link: window.location,
                    title: i.title,
                    imgUrl: t.STATICBASE + "/eleme/msite/img/hongbao/elogo.png",
                    desc: i.description
                })
            })
        })
    })["finally"](function() {
        return t.loading = 0
    }),
    e.toSearch = function() {
        n.url("/search/" + u)
    }
}
]),
angular.module("meleme").controller("BannerDetailCtrl", ["$scope", "$rootScope", "$location", "$q", "$timeout", "$routeParams", "Giftbanner", function(e, t, r, n, o, i, a) {
    t.isFromApp && (t.Page.title = "活动详情");
    var s = i.id;
    a.get({
        giftbanner_id: s
    }, function(t) {
        t.begin_datetime && t.end_datetime && (t.begin_datetime = new Date(1e3 * t.begin_datetime),
        t.end_datetime = new Date(1e3 * t.end_datetime)),
        e.banner = t,
        e.take = function(t) {
            1 === t ? r.url("/gift/detail/" + e.banner.link) : 2 === t ? r.url("/gift/category/" + e.banner.link) : window.location.href = e.banner.link
        }
    })
}
]),
angular.module("meleme").controller("categoryCtrl", ["$scope", "$rootScope", "$http", "$routeParams", "GiftcategoryList", function(e, t, r, n, o) {
    t.isFromApp && (t.Page.title = n.name),
    e.title = n.name,
    t.loading = !0,
    e.gifts = [],
    e.loadingState = "GREED";
    var i = 0
      , a = 20;
    e.recordLoadMore = function() {
        "GREED" === e.loadingState && (e.loadingState = "LOADING",
        o.query({
            limit: a,
            offset: i,
            category_id: n.id
        }, function(r) {
            var n;
            e.loadingState = r.length < a ? "COMPLETE" : "GREED",
            t.loading = !1,
            (n = e.gifts).push.apply(n, _toConsumableArray(r)),
            i += a
        }))
    }
}
]),
angular.module("meleme").controller("giftConfirmCtrl", ["$scope", "$rootScope", "$location", "$routeParams", "$q", "$timeout", "Address", "Gift", "UsersGift", "SweetAlert", "Poi", function(e, t, r, n, o, i, a, s, l, c, u) {
    t.isFromApp && (t.Page.title = "确认兑换"),
    t.loading = !0,
    e.user = {};
    var d = {
        id: n.id
    }
      , m = function p() {
        UBT.send("EVENT", {
            id: "816",
            params: {
                id: d.id,
                type: "2"
            }
        }),
        c.swal({
            title: '<img class="swing" src="' + t.STATICBASE + '/eleme/msite/img/choujiang.png">',
            text: "不要走开，正在抽奖哦...",
            html: !0,
            customClass: "sweetalert-pointshake",
            showConfirmButton: !1
        }),
        l.post({
            way: "exchange",
            user_id: e.user.user_id,
            gift_id: d.id
        }, {
            type: "real",
            delivery_name: e.user.gift_name,
            delivery_address: e.user.gift_area + e.user.gift_address,
            delivery_phone: "" + e.user.gift_phone,
            delivery_note: e.user.gift_remark
        }, function(n) {
            i(function() {
                l.get({
                    user_id: e.user.user_id,
                    gift_id: d.id,
                    way: "exchange_status"
                }, function(o) {
                    e.exchange = o,
                    c.swal({
                        title: n.bingo ? '<div class="bingoparent"><img class="successbg" src="' + t.STATICBASE + '/eleme/msite/img/successbg.png"><img class="successboy" src="' + t.STATICBASE + '/eleme/msite/img/successboy.png"><img class="successstar one" src="' + t.STATICBASE + '/eleme/msite/img/star1.png" alt=""/><img class="successstar two" src="' + t.STATICBASE + '/eleme/msite/img/star2.png" alt=""/><img class="successstar three" src="' + t.STATICBASE + '/eleme/msite/img/star3.png" alt=""/></div>' : '<img class="faildboy" src="' + t.STATICBASE + '/eleme/msite/img/sadboy.png">',
                        text: n.bingo ? '<span class="choujiangbingo">太幸运了，你中奖了！</span>' : "很遗憾，没有中奖",
                        html: !0,
                        customClass: "sweetalert-pointshake",
                        confirmButtonText: n.bingo ? "领取奖品" : "知道了",
                        confirmButtonColor: !n.bingo && o.status_code ? "#c1c1c1" : "#ff8901",
                        showCancelButton: !n.bingo && o.status_code,
                        cancelButtonText: "再抽一次"
                    }, function(e) {
                        return e ? n.bingo ? (UBT.send("EVENT", {
                            id: "817",
                            params: {
                                id: d.id,
                                type: "2"
                            }
                        }),
                        void r.url("/profile/gift/" + n.id)) : r.url("/gift/detail/" + d.id) : p()
                    })
                }, function(e) {
                    i(function() {
                        throw JSON.stringify(e)
                    })
                })
            }, 2500)
        }, function(e) {
            c.swal({
                title: "出错了",
                text: e.data.message,
                confirmButtonText: "知道了"
            }, function() {
                r.url("/gift/detail/" + d.id)
            })
        })
    }
      , f = function() {
        UBT.send("EVENT", {
            id: "816",
            params: {
                id: d.id,
                type: "4"
            }
        }),
        c.swal({
            title: "温馨提示",
            text: "此次兑换将使用 " + d.price + " 积分，确定兑换吗？",
            customClass: "complaint-service-box",
            confirmButtonText: "确定",
            showCancelButton: !0,
            cancelButtonText: "取消"
        }, function(t) {
            t && (UBT.send("EVENT", {
                id: "820",
                params: {
                    id: d.id,
                    type: "4"
                }
            }),
            l.post({
                way: "exchange",
                user_id: e.user.user_id,
                gift_id: d.id
            }, {
                type: "real",
                delivery_name: e.user.gift_name,
                delivery_phone: "" + e.user.gift_phone,
                delivery_address: e.user.gift_area + e.user.gift_address,
                delivery_note: e.user.gift_remark
            }, function(e) {
                c.swal({
                    title: "温馨提示",
                    text: e.bingo ? '<p ubt-visit="821" ubt-data-id="' + d.id + '" ubt-data-type="4">恭喜，兑换成功</p>' : e.status,
                    html: !0,
                    customClass: "complaint-service-box",
                    confirmButtonText: "确认"
                }, function() {
                    r.url("/profile/gift/" + e.id)
                })
            }, function(e) {
                c.swal({
                    title: "温馨提示",
                    text: e.data.message,
                    customClass: "complaint-service-box",
                    confirmButtonText: "确认"
                }, function() {
                    r.url("/gift/detail/" + d.id)
                })
            }))
        })
    }
    ;
    e.exchangeGift = function() {
        if (e.giftConfirm.$valid)
            1 === d.exchange_type ? m() : f();
        else {
            if (!e.user.gift_phone)
                return void (e.toasttip = "请填写手机号码");
            if (!e.user.gift_name)
                return void (e.toasttip = "请填写收货人姓名");
            if (!e.user.gift_address)
                return void (e.toasttip = "请填写详细地址");
            if (!e.user.gift_area)
                return void (e.toasttip = "请填写所在地区")
        }
    }
    ,
    e.getAddress = function() {
        e.showAddr = !0,
        e.address || a.query({
            user_id: e.user.user_id
        }, function(t) {
            t.error || (e.address = t)
        })
    }
    ,
    e.selectAddr = function(t) {
        var r = e.address[t];
        e.user.gift_address = r.address + r.address_detail,
        e.user.gift_phone = "" + r.phone,
        e.user.gift_name = r.name,
        e.showAddr = !1,
        u.get({
            way: r.st_geohash
        }, function(t) {
            e.user.gift_area = t.ad_info
        }, function(e) {
            setTimeout(function() {
                throw JSON.stringify(e)
            })
        })
    }
    ,
    t.profile.$promise.then(function(t) {
        e.user = {
            user_id: t.user_id,
            gift_phone: Number(t.mobile) || "",
            gift_name: t.username,
            point: t.point
        },
        s.get({
            gift_id: d.id
        }, function(t) {
            e.gift = d = t
        }),
        l.get({
            user_id: e.user.user_id,
            gift_id: d.id,
            way: "exchange_status"
        }, function(t) {
            e.exchange = t
        })
    }, function(r) {
        var n = t.isFromApp ? "eleme://login" : e.MOBILEORIGIN + "/login?redirect=" + encodeURIComponent(location.href);
        location.href = n,
        o.reject(r.data)
    })["catch"](function(e) {
        setTimeout(function() {
            throw e
        })
    })["finally"](function() {
        t.loading = !1
    })
}
]),
angular.module("meleme").controller("giftDetailCtrl", ["$interval", "$scope", "$rootScope", "$location", "$q", "$timeout", "$routeParams", "$filter", "GiftUnityDrawRanking", "GiftUnityDrawNumber", "Gift", "UsersGift", "RatingStatistic", "UserAgent", "SweetAlert", "ProfileUser", "I18N", "GiftSglDrawRecords", "crayfish", function(e, t, r, n, o, i, a, s, l, c, u, d, m, f, p, g, h, v, y) {
    r.isFromApp && (r.Page.title = "商品详情"),
    r.loading = !0,
    t.ratings = 0,
    t.state = !0,
    t.giftActiveHasEnd = !1,
    t.tabSelected = !0,
    y.load("/gift").then(function(e) {
        t.giftRuleContent = e.rule
    }),
    t.giftTabs = [{
        name: "活动介绍",
        state: "introduce"
    }, {
        name: "抽奖规则",
        state: "rule"
    }],
    t.state = "introduce",
    t.hardJump = function(e) {
        location.href = r.isFromApp ? "eleme://web?url=" + encodeURIComponent(location.protocol + e) + "&animation_type=1" : e
    }
    ,
    t.changeToActive = function() {
        t.state = !0
    }
    ,
    t.changeToRule = function() {
        t.state = !1
    }
    ,
    t.changGiftTab = function(e) {
        t.state = e
    }
    ;
    var _, w = {
        mutualData: function(e) {
            var t = this
              , r = e.method
              , n = e.way
              , i = e.data
              , a = e.error;
            a = a || {};
            var s = o.defer();
            return d[r](angular.extend({
                way: n,
                user_id: _.user_id,
                gift_id: $
            }), i).$promise.then(function(e) {
                return s.resolve(e)
            })["catch"](function(e) {
                p.swal({
                    title: a.title || "出错了",
                    text: e.data.message,
                    customClass: a.customClass || "",
                    confirmButtonText: a.confirmButtonText || " 知道了 "
                }, function() {
                    return t.resetStatus()
                })
            }),
            s.promise
        },
        sendUBT: function(e) {
            var r = e.id
              , n = e.type;
            UBT.send("EVENT", {
                id: r,
                params: {
                    id: t.gift.id,
                    type: n
                }
            })
        },
        resetStatus: function() {
            o.all([this.mutualData({
                method: "get",
                way: "exchange_status"
            }), g.get().$promise]).then(function(e) {
                t.exchange = e[0],
                e[1].point < t.gift.price && (t.exchange = {
                    status_code: 2,
                    status_text: "用户积分不足"
                })
            })
        },
        lottery: function() {
            var e = this;
            this.sendUBT({
                id: 812,
                type: 1
            }),
            p.swal({
                title: '<img class="swing" src="' + r.STATICBASE + '/eleme/msite/img/choujiang.png">',
                text: "不要走开，正在抽奖哦...",
                html: !0,
                customClass: "sweetalert-pointshake",
                showConfirmButton: !1
            }),
            this.mutualData({
                method: "post",
                way: "exchange",
                data: {
                    type: "virtual",
                    delivery_phone: _.mobile
                }
            }).then(function(t) {
                e.resetStatus(),
                i(function() {
                    p.swal({
                        title: t.bingo ? '<div class="bingoparent"><img class="successbg" src="' + r.STATICBASE + '/eleme/msite/img/successbg.png"><img class="successboy" src="' + r.STATICBASE + '/eleme/msite/img/successboy.png"><img class="successstar one" src="' + r.STATICBASE + '/eleme/msite/img/star1.png" alt=""/><img class="successstar two" src="' + r.STATICBASE + '/eleme/msite/img/star2.png" alt=""/><img class="successstar three" src="' + r.STATICBASE + '/eleme/msite/img/star3.png" alt=""/></div>' : '<img class="faildboy" src="' + r.STATICBASE + '/eleme/msite/img/sadboy.png">',
                        text: t.bingo ? '<span class="choujiangbingo">太幸运了，你中奖了！</span>' : "很遗憾，没有中奖",
                        html: !0,
                        customClass: "sweetalert-pointshake",
                        confirmButtonText: t.bingo ? "领取奖品" : "知道了",
                        confirmButtonColor: t.bingo ? "#ff8901" : "#c1c1c1",
                        showCancelButton: !t.bingo,
                        cancelButtonText: "再抽一次"
                    }, function(r) {
                        return e.sendUBT({
                            id: 815,
                            type: 1
                        }),
                        r ? void (t.bingo && n.url("/profile/gift/" + t.id)) : e.lottery()
                    })
                }, 2500)
            })
        },
        exchange: function() {
            var e = this;
            this.sendUBT({
                id: 812,
                type: 3
            });
            var r = function() {
                return e.mutualData({
                    method: "post",
                    way: "exchange",
                    data: {
                        type: "virtual",
                        delivery_phone: _.mobile
                    },
                    error: {
                        title: "温馨提示",
                        customClass: "complaint-service-box",
                        confirmButtonText: "确认"
                    }
                }).then(function(r) {
                    p.swal({
                        title: "温馨提示",
                        text: r.bingo ? '<p ubt-visit="814" ubt-data-id="' + t.gift.id + '" ubt-data-type="3">恭喜，兑换成功</p>' : r.status,
                        html: !0,
                        customClass: "complaint-service-box",
                        confirmButtonText: "确认"
                    }, function() {
                        n.url("/profile/gift/" + r.id)
                    }),
                    e.sendUBT({
                        id: 813,
                        type: 3
                    })
                })
            }
            ;
            p.swal({
                title: "温馨提示",
                text: "此次兑换将使用" + t.gift.price + '积分，确定兑换吗？<br>查看礼品兑换<b onclick="seeTip()">「重要提示」</b>',
                html: !0,
                customClass: "complaint-service-box",
                confirmButtonText: "确定",
                showCancelButton: !0,
                cancelButtonText: "取消"
            }, function(e) {
                e && r()
            })
        },
        multiLottery: function(e) {
            var t = this;
            this.sendUBT({
                id: 812,
                type: 1
            });
            var r = "batch_exchange_v2"
              , n = "update"
              , o = 1;
            e ? p.swal({
                title: '<div class="title">兑换几张奖券?</div><div class="title-sub">你可以一次兑换5张奖券咯</div>',
                html: !0,
                text: '<span class="unifyclose" onclick="swal.close()">X</span>',
                customClass: "sweetalert-unify",
                showCancelButton: !0,
                confirmButtonText: "兑换5张奖券",
                cancelButtonText: "兑换1张奖券"
            }, function(e) {
                o = e ? 5 : 1,
                t.getInfo({
                    method: n,
                    page: o,
                    way: r,
                    amount: o
                })
            }) : this.getInfo({
                method: n,
                page: o,
                way: r,
                amount: o
            })
        },
        getInfo: function(e) {
            var t = this
              , r = e.method
              , o = e.page
              , s = e.way
              , l = e.amount;
            this.mutualData({
                method: r,
                way: s,
                data: {
                    page: o,
                    type: "virtual",
                    delivery_phone: _.mobile,
                    amount: l
                }
            }).then(function(e) {
                var r = e[0] ? e[0].id : e.id;
                t.resetStatus(),
                i(function() {
                    p.swal({
                        title: '<div class="title">恭喜，成功兑换' + o + "个抽奖号</div>",
                        html: !0,
                        customClass: "sweetalert-go",
                        confirmButtonText: " 知道了 ",
                        showCancelButton: !0,
                        cancelButtonText: "查看抽奖号"
                    }, function(e) {
                        e || n.url("/profile/gift/" + r + "?activityId=" + a.id)
                    })
                }, 500)
            })
        }
    }, S = function(e) {
        hybridAPI.share({
            title: "我在饿了么积分商城发现【" + e.name + "】",
            text: "上饿了么叫外卖，点评订单即可赚积分免费换好礼",
            weibo: "我在饿了么积分商城发现【" + e.name + "】。上饿了么叫外卖，点评订单即可赚积分免费换好礼。" + location.href + "（分享自@饿了么网上订餐）",
            url: location.href,
            image_url: "https:" + r.FUSSBASE + s("hashToPath")(e.image_hash)
        })
    }
    , b = function(r, n) {
        var o = void 0
          , i = void 0
          , a = void 0
          , s = void 0
          , l = void 0;
        o = r.split(":"),
        i = o[0] - 0,
        a = o[1] - 0,
        s = o[2] - 0,
        o = 36e5 * i + 6e4 * a + 1e3 * s + n,
        o = new Date(o),
        l = o - new Date,
        l > 0 ? (t.giftDiffDate = parseInt(l / 1e3 / 60 / 60 / 24),
        l -= 1e3 * t.giftDiffDate * 24 * 60 * 60,
        i = parseInt(l / 1e3 / 60 / 60),
        l -= 1e3 * i * 60 * 60,
        a = parseInt(l / 1e3 / 60),
        l -= 1e3 * a * 60,
        s = parseInt(l / 1e3),
        t.giftCountdownHours = i > 9 ? i : "0" + i.toString(),
        t.giftCountdownMinutes = a > 9 ? a : "0" + a.toString(),
        t.giftCountdownSecond = s > 9 ? s : "0" + s.toString()) : (t.giftActiveHasEnd = !0,
        t.giftDiffDate = 0),
        e(function() {
            0 === s ? 0 === a ? 0 === i ? (t.giftDiffDate--,
            i = 24,
            i--,
            a = 60,
            a--,
            s = 60,
            s--,
            t.giftCountdownHours = i,
            t.giftCountdownMinutes = a,
            t.giftCountdownSecond = s,
            t.giftDiffDate < 0 && (t.giftActiveHasEnd = !0)) : (--i,
            a = 60,
            a--,
            s = 60,
            s--,
            t.giftCountdownHours = i > 9 ? i : "0" + i.toString(),
            t.giftCountdownMinutes = a > 9 ? a : "0" + a.toString(),
            t.giftCountdownSecond = s > 9 ? s : "0" + s.toString()) : (a--,
            s = 60,
            s--,
            t.giftCountdownSecond = s > 9 ? s : "0" + s.toString(),
            t.giftCountdownMinutes = a > 9 ? a : "0" + a.toString()) : (s--,
            t.giftCountdownSecond = s > 9 ? s : "0" + s.toString())
        }, 1e3)
    }
    , $ = a.id;
    v.query({
        gift_id: a.id
    }).$promise.then(function(e) {
        return t.giftSglDrawRecords = e
    }),
    u.get({
        gift_id: $
    }).$promise.then(function(e) {
        return t.gift = e,
        b(t.gift.end_time, 1e3 * t.gift.end_datetime),
        S(e),
        0 === t.giftDiffDate && "00:00:00" === t.gift.end_time && (t.giftActiveHasEnd = !0),
        r.profile.$promise.then(function(t) {
            return {
                user: t,
                gift: e
            }
        })
    }).then(function(e) {
        var t = e.user
          , r = e.gift
          , n = t.point > 5 * r.price ? 1 : 0;
        return o.all({
            user: t,
            multiCoupons: n,
            userGift: d.get({
                user_id: t.user_id,
                gift_id: $,
                way: "exchange_status"
            }).$promise
        })
    }).then(function(e) {
        var o = e.user
          , i = e.multiCoupons
          , a = e.userGift;
        return _ = o,
        t.exchange = a,
        0 === t.gift.gift_type ? void (t.gotoExchange = function() {
            return n.url("/gift/confirm/" + $)
        }
        ) : (t.gotoExchange = function() {
            var e = t.gift.exchange_type;
            0 === e && w.exchange(),
            1 === e && w.lottery(),
            2 === e && w.multiLottery(i)
        }
        ,
        void (r.isFromApp && r.compareAppVersion(f.appVersion, "5.6") && m.get({
            user_id: _.user_id
        }).$promise.then(function(e) {
            return t.ratings = +e || e.total_point
        })))
    })["catch"](function(e) {
        "HTTP_UNAUTHORIZED" === e.data.name && (t.exchange = {
            status_code: 1,
            status_text: "登录后" + ["兑换", "抽奖", "抽奖"][t.gift.exchange_type]
        },
        t.gotoExchange = function() {
            location.href = r.isFromApp ? "eleme://login" : "/login?redirect=" + encodeURIComponent(location.href)
        }
        )
    })["finally"](function() {
        return r.loading = !1
    }),
    c.get({
        gift_id: $
    }).$promise.then(function(e) {
        t.giftUnityDrawNumber = angular.fromJson(e)
    }),
    r.profile.$promise.then(function(e) {
        t.userId = e.user_id
    }).then(function() {
        l.get({
            user_id: t.userId,
            gift_id: $
        }).$promise.then(function(e) {
            t.giftUnityDrawRanking = angular.fromJson(e)
        })
    }),
    window.seeTip = function() {
        swal.close(),
        window.scrollTo(0, document.querySelector(".gift-detail-warn").offsetTop)
    }
}
]),
angular.module("meleme").controller("giftCtrl", ["$scope", "$rootScope", "$filter", "UsersGift", "GiftDrawRecords", "Gift", "RatingStatistic", "UserAgent", "Giftbanner", "GiftcategoryTitle", "Giftcategory", function(e, t, r, n, o, i, a, s, l, c, u) {
    t.isFromApp && (t.Page.title = "积分商城"),
    hybridAPI.share({
        title: "饿了么积分商城，任性兑换不花钱",
        text: "叫外卖，上饿了么，免费好礼等你来拿",
        weibo: "饿了么积分商城，任性兑换不花钱。叫外卖，上饿了么，免费好礼等你来拿。" + location.href + "（分享自@饿了么网上订餐）",
        url: location.href,
        image_url: "https://fuss10.elemecdn.com/3/ca/80d890e2515fea76e46490a2c9455png.png"
    }),
    e.isLogin = !1,
    e.ratings = 0,
    t.profile.$promise.then(function() {
        e.point = t.profile.point,
        e.isLogin = !0,
        t.isFromApp && t.compareAppVersion("5.7", s.appVersion) || a.get({
            user_id: t.profile.user_id
        }, function(t) {
            e.ratings = +t || t.total_point
        })
    });
    try {
        e.gifts = JSON.parse($localStorage.getItem("gift/list")) || [],
        e.banners = JSON.parse($localStorage.getItem("gift/banners")) || [],
        e.categoriesArray = JSON.parse($localStorage.getItem("gift/categories")) || [],
        t.loading = !1
    } catch (d) {
        throw e.gifts = e.banners = e.categoriesArray = [],
        t.loading = !0,
        Error(JSON.stringify(d))
    }
    o.query().$promise.then(function(t) {
        return e.showHehe = t.length > 0
    }),
    e.loadingState = "GREED";
    var m = 0
      , f = 20;
    e.recordLoadMore = function() {
        "GREED" === e.loadingState && (e.loadingState = "LOADING",
        i.query({
            limit: f,
            offset: m
        }, function(t) {
            var r;
            e.loadingState = t.length < f ? "COMPLETE" : "GREED",
            0 === m && (e.gifts = [],
            $localStorage.setItem("gift/list", JSON.stringify(t))),
            (r = e.gifts).push.apply(r, _toConsumableArray(t)),
            m += f,
            UBT.send("EVENT", {
                id: "1203",
                params: {
                    offset: m
                }
            })
        }).$promise["finally"](function() {
            t.loading = !1
        }))
    }
    ,
    e.recordLoadMore(),
    l.query({
        limit: 6
    }, function(t) {
        t.forEach(function(e) {
            var t = e.banner_type.toString() + e.detail_type.toString();
            switch (t) {
            case "00":
                e.link = "#";
                break;
            case "10":
                e.link = "/gift/detail/" + e.link;
                break;
            case "20":
                c.get({
                    category_id: +e.link
                }, function(t) {
                    e.link = "/gift/category/" + e.link + "?name=" + encodeURI(t.name)
                });
                break;
            case "11":
            case "01":
            case "21":
            case "31":
                e.link = "/gift/banner/" + e.id;
                break;
            case "30":
                /^https?:\/\//.test(e.link) || (e.link = "http://" + encodeURI(e.link));
                break;
            default:
                e.link = "/gift/detail/" + e.link
            }
        }),
        e.banners = t,
        $localStorage.setItem("gift/banners", JSON.stringify(t))
    }),
    u.query({}, function(t) {
        t.forEach(function(e) {
            switch (e.navigation_type) {
            case 0:
                e.navigation_link = "/gift/detail/" + e.navigation_link;
                break;
            case 1:
                e.navigation_link = "/gift/category/" + e.navigation_link + "?name=" + encodeURI(e.navigation_name);
                break;
            case 2:
                /^https?:/.test(e.navigation_link) || (e.navigation_link = "http://" + encodeURI(e.navigation_link));
                break;
            default:
                e.navigation_link = "#"
            }
        });
        for (var r = [], n = 0; n < t.length; n += 8)
            r.push(t.slice(n, n + 8));
        e.categoriesArray = r,
        $localStorage.setItem("gift/categories", JSON.stringify(r))
    }),
    o.query().$promise.then(function(t) {
        return e.giftDrawRecords = t
    }),
    e["goto"] = function(t) {
        e.isLogin ? location.href = r("appUrlFormat")("/profile/" + t) : e.login()
    }
    ,
    e.login = function() {
        var e = t.isFromApp ? "eleme://login" : t.MOBILEORIGIN + "/login?redirect=" + encodeURIComponent(location.href);
        location.href = e
    }
}
]),
angular.module("meleme").controller("homeSearchCtrl", ["$scope", "$rootScope", "$routeParams", "Poi", "Address", "City", "Page", function(e, t, r, n, o, i, a) {
    var s, l = r.id;
    e.loginStatus = !1,
    e.searchaddrlen = -1;
    var c = location.host.replace(/m\./, "h5.");
    e.h5url = "//" + c + "/msite/#geohash=",
    t.profile.$promise.then(function(t) {
        e.loginStatus = !0,
        o.query({
            user_id: t.user_id
        }, function(t) {
            e.places = t,
            e.myaddrlen = t.length
        })
    }, function() {
        e.places = s = JSON.parse($localStorage.getItem("placeHistory")) || [],
        e.historyaddrlen = e.places.length
    })["catch"](function(e) {
        setTimeout(function() {
            throw Error(JSON.stringify(e))
        }, 0)
    }),
    e.getPlace = function() {
        e.searchpoint ? n.query({
            type: "search",
            city_id: l,
            keyword: e.searchpoint
        }, function(t) {
            e.places = t,
            e.searchaddrlen = t.length
        }) : e.toasttip = "请输入关键字"
    }
    ,
    e.setLocalSpace = function(e) {
        if (!(s.length > 10)) {
            var t = s.indexOf(e);
            t >= 0 && s.splice(t, 1),
            s.unshift(e),
            $localStorage.setItem("placeHistory", JSON.stringify(s))
        }
    }
    ,
    i.get({
        city_id: l
    }, function(e) {
        a.city.name = e.name
    }),
    e.child = function(e) {
        if (e) {
            for (var t = [], r = 0, n = e.length; n > r; r++)
                e[r].entries && (t = t.concat(e[r].entries));
            return t
        }
    }
}
]),
angular.module("meleme").controller("homeCtrl", ["$scope", "$location", "Page", "City", function(e, t, r, n) {
    var o = t.search()
      , i = $localStorage.getItem("geohash");
    (o.force || /\bpsn=|\bpguid=/.test(i)) && ($localStorage.removeItem("geohash"),
    i = !1);
    var a = location.host.replace(/m\./, "h5.");
    return i ? location.href = "//" + a + "/msite/#geohash=" + i : (e.currentCity = n.get({
        type: "guess"
    }),
    e.hotCities = n.query({
        type: "hot"
    }),
    e.cities = n.get({
        type: "group"
    }),
    r.title = "叫外卖上饿了么",
    void (e.setCity = function(e, t) {
        r.city.name = e,
        r.city.id = t,
        localStorage.setItem("CITY_ID", t)
    }
    ))
}
]),
angular.module("meleme").controller("loginCtrl", ["$rootScope", "$scope", "$location", "Account", "ProfileUser", "Captcha", function(e, t, r, n, o, i) {
    e.isFromApp && (e.Page.title = "登录"),
    t.user = {},
    t.user.username = $localStorage.getItem("lastname"),
    t.goback = function() {
        var e = "//" + location.hostname + "/home"
          , t = r.search().redirect || e;
        t = decodeURIComponent(t),
        location.href = t
    }
    ,
    t.refreshCode = function() {
        i.save(function(r) {
            t.captcha = e.RESTBASE + "/v1/captchas/" + r.code
        })
    }
    ,
    t.refreshCode();
    var a = angular.copy(e.wechatData, {});
    a.title = "登录" + a.title,
    wechat("timeline", a).on("friend", a),
    e.loading = !0,
    t.profile.$promise.then(function() {
        t.goback()
    }, function() {
        e.loading = !1
    }),
    t.login = function() {
        t.error = null ,
        n.save({
            action: "login"
        }, t.user, function() {
            $localStorage.setItem("lastname", t.user.username),
            e.profile = o.get(function() {
                t.goback(),
                $localStorage.removeItem("goback")
            })
        }, function(e) {
            t.refreshCode(),
            t.error = e.data
        })
    }
    ,
    t.goRedirect = function(e) {
        var t = r.search().redirect;
        t = t ? "?redirect=" + encodeURIComponent(t) : "",
        window.location = "//" + location.hostname + "/" + e + t
    }
    ,
    t.message = function(e) {
        t["invalid" + e] = t.loginform[e].$invalid
    }
}
]),
angular.module("meleme").controller("loginmsgCtrl", ["$rootScope", "$scope", "$location", "VerifyCode", "Account", "ProfileUser", function(e, t, r, n, o, i) {
    var a = r.search().redirect
      , s = a ? decodeURIComponent(a) : "//" + location.hostname + "/home";
    /zaocan-dp/i.test(a) && (t.isFromDianping = !0),
    t.user = {
        mobile: "",
        code: "",
        validate_token: ""
    },
    t.loginPrepare = function() {
        var e = r.search().redirect;
        e = e ? "?redirect=" + encodeURIComponent(e) : "",
        window.location = "//" + location.hostname + "/login" + e
    }
    ,
    t.login = function() {
        t.error = null ,
        o.save({
            action: "login",
            param: "mobile"
        }, t.user, function() {
            e.profile = i.get(function() {
                return t.isFromDianping ? void (window.location = a) : (window.location = s,
                void $localStorage.removeItem("goback"))
            })
        }, function(e) {
            t.error = e.data
        })
    }
    ,
    t.message = function(e) {
        t["invalid" + e] = t.loginmsgform[e].$invalid
    }
}
]),
angular.module("meleme").controller("nofoundCtrl", ["$rootScope", function(e) {
    $localStorage.removeItem("geo"),
    $localStorage.removeItem("goback"),
    e.bodyWhite = 1
}
]),
angular.module("meleme").controller("orderSuccessCtrl", ["$scope", "$routeParams", function(e, t) {
    e.orderId = t.id
}
]),
angular.module("meleme").controller("payCtrl", ["$scope", "$routeParams", "$location", "$http", "PayOnline", "ProfileHongbao", "$rootScope", "WechatInfo", "$q", "UserAgent", "fuckNgResource", function(e, t, r, n, o, i, a, s, l, c, u) {
    var d = "wxjspay"
      , m = "wxwappay";
    e.orderId = t.id,
    e.nameMap = {
        1: "支付宝",
        13: "微信",
        14: "微信"
    },
    e.backhref = "/trade";
    var f = "eleme";
    /zaocan/i.test(t.eleme_redirect) && (e.isFromZaocan = !0,
    e.backhref = t.eleme_redirect,
    f = "breakfast"),
    /zaocan-dp/i.test(t.eleme_redirect) && (f = "breakfast_dianping"),
    e.payMethod = {
        method: {},
        index: null
    },
    e.hongBao = {
        method: {},
        index: null ,
        now: 0
    },
    e.methodsToggle = function(t, r) {
        return e.payMethod.index === t ? (e.payMethod.index = null ,
        void (e.payMethod.method = {})) : (e.payMethod.index = t,
        void (e.payMethod.method = r))
    }
    ;
    var p = function(e) {
        return e ? void (location.href = "breakfast" === f ? "//zaocan." + a.ROOTHOST + "/pay/" + t.id : "//zaocan-dp." + a.ROOTHOST + "/pay/" + t.id) : void (window.location.href = decodeURIComponent(t.eleme_redirect))
    }
      , g = function() {
        try {
            void 0 !== e.payInfo.payMethods.wxjspay ? e.methodsToggle(1, e.payInfo.payMethods.wxjspay) : e.methodsToggle(1, e.payInfo.payMethods.wxwappay)
        } catch (t) {
            throw JSON.stringify(t)
        }
    }
      , h = function() {
        !t.id && !t.orderId || e.isFromZaocan || a.profile.$promise.then(function(r) {
            i.get({
                userid: r.user_id,
                type: "valid",
                order_id: t.id || t.orderId
            }, function(t) {
                e.payInfo.hongbaos = t,
                e.payInfo.hongbaos.length
            })
        })
    }
    ;
    e.hongBaoItem = function() {
        e.showSelectHongbao = !0,
        e.hongBao.indexTemp = e.hongBao.index
    }
    ,
    e.back = function() {
        e.showSelectHongbao = !1
    }
    ,
    e.hongBaoToggle = function(t) {
        e.hongBao.indexTemp = e.payInfo.hongbaos[t].is_valid ? t : null
    }
    ,
    e.saveHongbao = function() {
        e.hongBao.index = e.hongBao.indexTemp,
        null !== e.hongBao.index && (e.hongBao.method = e.payInfo.hongbaos[e.hongBao.index],
        e.hongBao.now = e.hongBao.method.amount > e.payInfo.total ? e.payInfo.total : e.hongBao.method.amount,
        e.back())
    }
    ,
    e.continuePay = function(r) {
        switch (r.company || r.pay_company_id) {
        case 1:
            window.location.href = "//" + location.hostname + "/pay/" + e.payInfo.payRecordInfo.id + "?orderId=" + t.id;
            break;
        case 13:
            y(e.payInfo, d);
            break;
        case 14:
            y(e.payInfo, m)
        }
    }
    ;
    var v = function() {
        o.get({
            orderId: t.id,
            method: "paying"
        }, {}, function(n) {
            if ("error" !== n.status) {
                var o = {
                    1: "alipay",
                    13: d,
                    14: m
                };
                if (n.data.payRecordInfo) {
                    var i = String(n.data.payRecordInfo.pay_company_id);
                    n.data.payRecordInfo.name = e.nameMap[i] || n.data.payRecordInfo.name,
                    n.data.payRecordInfo.payCompanyName = o[i]
                }
                e.payInfo = n.data,
                c.isWechat ? (delete e.payInfo.payMethods.wxwappay,
                e.payInfo.payMethods.wxjspay.name = "微信支付") : (delete e.payInfo.payMethods.wxjspay,
                e.payInfo.payMethods.wxwappay.name = "微信支付"),
                g(),
                h()
            } else
                switch (Number(n.error.code)) {
                case 84:
                    r.url("/pay?id=" + t.id + "&status=start");
                    break;
                default:
                    swal({
                        title: "出错啦",
                        text: n.error.msg,
                        type: "error"
                    }, function() {
                        void (e.isFromZaocan ? p() : r.url("/trade/" + t.id))
                    })
                }
        }, function(e) {
            var t = JSON.stringify(e);
            swal({
                title: "出错啦",
                text: t,
                type: "error"
            }, function() {
                throw new Error(t)
            })
        })
    }
    ;
    "paying" === t.status ? v() : (e.payStart = !0,
    o.get({
        orderId: t.id,
        method: "online"
    }, {}, function(n) {
        if ("error" !== n.status) {
            e.payInfo = n.data,
            c.isWechat ? (delete e.payInfo.payMethods.wxwappay,
            e.payInfo.payMethods.wxjspay.name = "微信支付") : (delete e.payInfo.payMethods.wxjspay,
            e.payInfo.payMethods.wxwappay.name = "微信支付"),
            g(),
            h();
            var o = e.payInfo.balancePaid
              , i = e.payInfo.total
              , a = e.payInfo.bankPaid;
            e.btnConfirm = function() {
                var t = "number" == typeof e.payMethod.index
                  , r = "number" == typeof e.hongBao.index
                  , n = !r && i === o && e.balancePW && null === e.payMethod.index
                  , s = r && i === e.hongBao.now
                  , l = !r && t && i > o && e.balancePW
                  , c = t && r && 0 === o && (i <= e.hongBao.now + a || i === e.hongBao.now)
                  , u = !t && r && i <= o + e.hongBao.now && e.balancePW
                  , d = t && r && i > o + e.hongBao.now && e.balancePW
                  , m = !r && t && a === i;
                return e.payInfo.bankPaid <= e.hongBao.now && (e.payMethod.index = null ),
                !(n || s || l || c || u || d || m)
            }
        } else {
            if (e.isFromZaocan && 84 === +n.error.code)
                return p(!0);
            switch (Number(n.error.code)) {
            case 81:
                void (e.isFromZaocan ? p() : r.url("/trade"));
                break;
            case 82:
                void r.url(e.isFromZaocan ? "/pay?id=" + t.id + "&status=paying&eleme_redirect=" + t.eleme_redirect : "/pay?id=" + t.id + "&status=paying");
                break;
            default:
                swal({
                    title: "出错啦",
                    text: n.error.msg,
                    type: "error"
                }, function() {
                    void (e.isFromZaocan ? p() : r.url("/trade/" + t.id))
                })
            }
        }
    }));
    var y = function(i, c) {
        function f() {
            var e = location.href.replace(/#.*/, "")
              , t = u(e.match(/\?(.*)/)[1]);
            return e.replace(/\?(.*)|$/, "?" + t),
            n.get("/v1/weixin/jssign?url=" + encodeURIComponent(e))
        }
        function g(s) {
            var c = l.defer();
            if (i.redirectURL && "wxjsapipay" === s)
                n.get("" + i.redirectURL).success(function(e) {
                    c.resolve(e.data.redirectURL)
                });
            else {
                var u = void 0;
                u = e.payInfo.payRecordInfo ? e.payInfo.payRecordInfo.id : i.redirectURL.match(/\/pay\/(\d+)/)[1],
                c.resolve(a.PAYMENTBASE + "/" + s + "/" + u)
            }
            c.promise.then(function(a) {
                "wxjsapipay" === s ? a = a + "?open_id=" + e.wechatInfo.openid + "&callback=JSON_CALLBACK" : s === m && (a += "?callback=JSON_CALLBACK"),
                a = a.replace(/http:/, "https:"),
                n.jsonp(a).success(function(n) {
                    return "ok" !== n.status ? void swal({
                        title: "出错啦",
                        text: i.error.msg,
                        type: "warning"
                    }, function() {
                        return e.isFromZaocan ? p() : (r.url("/trade/" + t.id),
                        void e.$root.$apply())
                    }) : void ("wxjsapipay" === s ? f().success(function(o) {
                        if ("ok" !== o.status)
                            return void swal({
                                title: "出错啦",
                                text: String(o.error.msg),
                                confirmButtonText: "知道啦"
                            });
                        var i = {
                            debug: !!$localStorage.getItem("DEBUG_WECHAT"),
                            appId: o.data.appid,
                            timestamp: o.data.timestamp,
                            nonceStr: o.data.nonceStr,
                            signature: o.data.signature,
                            jsApiList: ["chooseWXPay"]
                        };
                        wx.config(i),
                        wx.error(function(n) {
                            swal({
                                title: "出错啦",
                                text: JSON.stringify(n),
                                type: "warning"
                            }, function() {
                                return e.isFromZaocan ? p() : (r.url("/trade/" + t.id),
                                void e.$root.$apply())
                            })
                        });
                        var a = {
                            timestamp: n.data.timeStamp,
                            nonceStr: n.data.nonceStr,
                            signType: n.data.signType,
                            paySign: n.data.paySign,
                            success: function() {
                                return e.isFromZaocan ? p(!0) : void (window.location.href = "/order/" + t.id + "/success")
                            },
                            cancel: function() {
                                window.location.href = "/pay?id=" + t.id + "&status=paying"
                            },
                            fail: function(n) {
                                swal({
                                    title: "出错啦",
                                    text: JSON.stringify(n),
                                    type: "warning"
                                }, function() {
                                    return e.isFromZaocan ? p() : (r.url("/trade/" + t.id),
                                    void e.$root.$apply())
                                })
                            }
                        };
                        a["package"] = n.data["package"],
                        wx.chooseWXPay(a)
                    }) : s === m && (swal({
                        title: "请在微信中完成支付",
                        confirmButtonText: "已完成",
                        showCancelButton: !0,
                        cancelButtonText: "遇到问题"
                    }, function() {
                        o.get({
                            orderId: t.id,
                            method: "online"
                        }, {}, function(n) {
                            if ("error" !== n.status)
                                ;
                            else {
                                if (e.isFromZaocan && 84 === +n.error.code)
                                    return p(!0);
                                switch (Number(n.error.code)) {
                                case 81:
                                    void (e.isFromZaocan ? p() : r.url("/trade"));
                                    break;
                                case 82:
                                    void r.url(e.isFromZaocan ? "/pay?id=" + t.id + "&status=paying&eleme_redirect=" + t.eleme_redirect : "/pay?id=" + t.id + "&status=paying");
                                    break;
                                case 84:
                                    r.url("/order/" + t.id + "/success");
                                    break;
                                default:
                                    swal({
                                        title: "出错啦",
                                        text: n.error.msg,
                                        type: "error"
                                    }, function() {
                                        void (e.isFromZaocan ? p() : r.url("/trade/" + t.id))
                                    })
                                }
                            }
                        })
                    }),
                    window.location.href = decodeURIComponent(n.data.deeplink)))
                })
            })
        }
        c === d ? (e.wechatInfo = new s,
        e.wechatInfo.isValid() ? g("wxjsapipay") : e.wechatInfo.load().then(function() {
            g("wxjsapipay")
        })) : g(c)
    }
    ;
    e.payOnlineCheck = function() {
        var n = angular.copy(e.payMethod);
        e.payWayClosed = !0;
        var i = o.save({
            orderId: t.id
        }, angular.$().param({
            pay_bank: n.method.bank || "",
            pay_company_id: n.method.company || "",
            hongbao_sn: e.hongBao.method.sn || "",
            password: e.balancePW || "",
            order_type: f
        })).$promise;
        i.then(function(o) {
            if ("error" === o.status)
                return void swal({
                    title: "出错啦",
                    text: o.error.msg,
                    type: "warning"
                }, function() {
                    return e.isFromZaocan ? p() : (r.url("/trade/" + t.id),
                    void e.$root.$apply())
                });
            if (null === e.payMethod.index)
                return r.url("/trade/" + t.id);
            switch (Number(n.method.company)) {
            case 1:
                window.location = o.data.redirectURL;
                break;
            case 13:
                y(o.data, d);
                break;
            case 14:
                y(o.data, m);
                break;
            default:
                throw Error("不支持的支付类型" + JSON.stringify(n))
            }
        })
    }
}
]),
angular.module("meleme.main").controller("profileAddressCtrl", ["$rootScope", "$scope", "$location", "Address", "ProfileUser", "Poi", function(e, t, r, n, o, i) {
    var a = function(e) {
        n.query({
            user_id: e.user_id
        }, function(e) {
            e.error || (t.address = e)
        })
    }
    ;
    e.profile.$promise.then(function(e) {
        e.error || (t.user = e,
        a(e))
    }),
    t.poi = {
        show: !1,
        keyword: "",
        list: [],
        timer: null ,
        info: null ,
        toggle: function() {
            t.poi.show = !t.poi.show
        },
        query: function(e) {
            var r = t.poi;
            return 13 === e.which ? void r.confirm() : void (r.keyword && r.keyword.trim() && (r.timer && clearTimeout(r.timer),
            r.error.msg = "",
            r.timer = setTimeout(function() {
                i.query({
                    type: "nearby",
                    geohash: $localStorage.getItem("geohash"),
                    keyword: r.keyword
                }).$promise.then(function(e) {
                    r.list = e
                })
            }, 300)))
        },
        confirm: function(e) {
            var r = t.poi;
            r.info = e || null ,
            e = e && e.name || r.keyword,
            t.addrform.poi.$setViewValue(e),
            t.addrform.poi.$render(),
            r.toggle()
        },
        error: {
            msg: ""
        }
    },
    t.addAddr = function(e) {
        e.phone_bk = e.phone_bk || "",
        e.address_detail = e.poi,
        e.poi_type = 1,
        t.poi.info && (e.poi_type = 0,
        e.geohash = t.poi.info.geohash),
        t.addrform.submitted = !0,
        n.save({
            user_id: t.user.user_id
        }, e, function(e) {
            e.error || r.url("/profile/info")
        })
    }
    ,
    t.removeAddr = function(e) {
        t.editing = !1,
        n["delete"]({
            address_id: e,
            user_id: t.user.user_id
        }, function(e) {
            e.error || a(t.user)
        })
    }
    ,
    t.selectAddr = function(e) {
        t.user.current_address_id !== t.address[e].id && o.update({
            param: "address"
        }, {
            address_id: t.address[e].id
        }, function(e) {
            e.error || r.url("/profile/info")
        })
    }
}
]),
angular.module("meleme").controller("profileBalanceCtrl", ["$scope", "$rootScope", "$location", "UsersRecord", "I18N", "SweetAlert", "Page", function(e, t, r, n, o, i, a) {
    a.title = "我的余额",
    e.isMobileValid = function() {
        return !angular.isUndefined(t.profile.is_mobile_valid)
    }
    ,
    e.widthdraw = function() {
        t.profile.is_mobile_valid ? location.href = "/profile/withdraw" : i.swal({
            title: "绑定手机",
            text: "余额提现需绑定手机",
            confirmButtonText: "立即绑定",
            showCancelButton: !0,
            cancelButtonText: "取消"
        }, function() {
            location.href = "/profile/bind"
        })
    }
    ,
    e.recharge = function() {
        t.profile.is_mobile_valid ? location.href = "/profile/recharge" : i.swal({
            title: "绑定手机",
            text: "充值需绑定手机",
            confirmButtonText: "立即绑定",
            showCancelButton: !0,
            cancelButtonText: "取消"
        }, function() {
            location.href = "/profile/bind"
        })
    }
    ,
    e.isOnlyDraw = !1,
    e.balanceRecords = [];
    var s = function(t) {
        var r = e.balanceRecords.length;
        if (r) {
            e.hasRecord = !0;
            for (var n = t; r > n; n++) {
                var i = parseFloat(e.balanceRecords[n].trade_type)
                  , a = parseFloat(e.balanceRecords[n].balance_change);
                e.balanceRecords[n].trade_type = o.balancetext[i],
                e.balanceRecords[n].isAdd = a >= 0,
                e.balanceRecords[n].balance_change = Math.abs(a)
            }
        } else
            e.hasRecord = !1
    }
    ;
    e.hasRecord = !0,
    e.isrecordLoading = !1,
    e.hasMoreData = !0;
    var l = 0;
    e.recordLoadMore = function() {
        !e.isrecordLoading && e.hasMoreData && (e.isrecordLoading = !0,
        t.profile.$promise.then(function(t) {
            n.getBalance({
                user_id: t.user_id,
                limit: 10,
                offset: l
            }, function(t) {
                e.balanceRecords.push.apply(e.balanceRecords, t),
                s(l),
                e.isrecordLoading = !1,
                t.length < 10 && (e.hasMoreData = !1),
                l += 10
            })
        }))
    }
}
]),
angular.module("meleme").controller("profileChangePasswordByMobileCtrl", ["$rootScope", "$scope", "$location", "ProfileUser", function(e, t, r, n) {
    t.user = {
        type: "mobile",
        new_password: "",
        validate_token: "",
        code: ""
    },
    e.profile.$promise.then(function(e) {
        t.mobile = e.mobile
    }, function() {
        r.url("/home")
    }),
    t.savepw = function() {
        t.error = null ,
        n.update({
            param: "password"
        }, t.user, function() {
            t.showSuccesssend = !0
        }, function(e) {
            t.error = e.data
        })
    }
    ,
    t.message = function(e) {
        t["invalid" + e] = t.changepwform[e].$invalid
    }
    ,
    t.passwordCheck = function() {
        if (t.user.new_password && t.user.repeat) {
            var e = t.user.new_password === t.user.repeat;
            t.invalidrepeat = !e,
            t.pwnotmatch = !e
        }
    }
}
]),
angular.module("meleme").controller("profileChangePasswordByOldCtrl", ["$rootScope", "$scope", "ProfileUser", function(e, t, r) {
    t.user = {
        type: "old_password"
    },
    t.savepw = function() {
        t.error = null ,
        r.update({
            param: "password"
        }, t.user, function() {
            t.showSuccesssend = !0
        }, function(e) {
            t.error = e.data
        })
    }
    ,
    t.message = function(e) {
        t["invalid" + e] = t.changepwform[e].$invalid
    }
    ,
    t.passwordCheck = function() {
        if (t.user.new_password && t.user.repeat) {
            var e = t.user.new_password === t.user.repeat;
            t.invalidrepeat = !e,
            t.pwnotmatch = !e
        }
    }
}
]),
angular.module("meleme").controller("profileExplainCtrl", ["$scope", "$routeParams", "Page", "$location", "crayfish", function(e, t, r, n, o) {
    var i = t.page.toLowerCase();
    e.caption = "Loading",
    o.load("/profile/explain").then(function(t) {
        var o = t[i + "Caption"];
        o || n.url("/404"),
        e.caption = r.title = o.replace(/问题$/, "说明"),
        e.content = t[i + "Content"]
    })
}
]),
angular.module("meleme").controller("profileGiftDetailCtrl", ["$scope", "$q", "$rootScope", "$routeParams", "$location", "UsersGift", "GiftBingo", function(e, t, r, n, o, i, a) {
    r.isFromApp && (r.Page.title = "兑换详情"),
    e.displayType = !1,
    e.listCache = [];
    var s = function p(t) {
        _classCallCheck(this, p),
        1 === t.bingo ? (t.bingostatus = "已中奖",
        t.bingoClass = "bingo",
        t.seriesNumber = "bingo") : (t.seriesNumber = "pending",
        1 === d && (t.bingoClass = "fail",
        t.bingostatus = "未中奖"),
        0 === d && (t.bingoClass = "pending",
        t.bingostatus = "待开奖")),
        e.listCache.push(t),
        angular.extend(this, t)
    }
      , l = r.$on("$routeChangeStart", function(e, t, r) {
        "giftConfirmCtrl" === t.$$route.controller && "profileGiftDetailCtrl" === r.$$route.controller && o.url("/gift"),
        l()
    })
      , c = 0
      , u = function() {
        r.profile.$promise.then(function(e) {
            return a.update({
                user_id: e.user_id,
                activity_id: n.activityId,
                offset: c,
                limit: 10
            }).$promise
        }).then(function(t) {
            e.showBtn = !0,
            t.length < 10 && (e.showBtn = !1),
            e.listShow = !0,
            c += 10,
            e.list = t.map(function(e) {
                return new s(e)
            })
        })["catch"](function() {
            e.listShow = !1
        })
    }
    ;
    e.getList = u,
    e.exChangeInfo = {
        gift_type: 0
    },
    e.gift = {};
    var d, m = function(r, n) {
        return new t(function(t, o) {
            i.get({
                user_id: r,
                gift_id: n,
                "extras[]": "gift"
            }, function(r) {
                e.exChangeInfo = r,
                e.displayType = r.secret_code && "" !== r.secret_code,
                e.gift = r.gift,
                d = e.gift.is_drawn,
                e.point = r.point,
                t(r),
                2 === r.exchange_type && u()
            }, function(e) {
                o(e)
            })
        }
        )
    }
    , f = function(e, t) {
        m(e, t)["catch"](function(e) {
            setTimeout(function() {
                throw JSON.stringify(e)
            })
        })
    }
    ;
    r.profile.$promise.then(function(t) {
        if (e.hasLogin = t.user_id ? !0 : !1,
        e.hasLogin)
            f(t.user_id, n.user_gift_id);
        else {
            var o = r.isFromApp ? "eleme://login" : e.MOBILEORIGIN + "/login?redirect=" + encodeURIComponent(location.href);
            location.href = o
        }
    })
}
]),
angular.module("meleme").controller("profileGiftCtrl", ["$scope", "$rootScope", "$location", "UsersGift", "$timeout", function(e, t, r, n, o) {
    t.isFromApp && (t.Page.title = "兑换记录"),
    e.tabSelected = !0,
    e.giftRecords = [],
    e.hasRecord = !0,
    e.hasMoreData = !0,
    e.isrecordLoading = !1;
    var i = 0;
    e.tabSelect = function(t) {
        e.tabSelected = "duihuan" === t
    }
    ,
    e.recordLoadMore = function() {
        !e.isrecordLoading && e.hasMoreData && (e.isrecordLoading = !0,
        t.profile.$promise.then(function(r) {
            n.query({
                user_id: r.user_id,
                limit: 20,
                offset: i,
                "extras[]": "gift"
            }, function(r) {
                t.loading = !1,
                0 === e.giftRecords.length && o(function() {
                    t.current_exchange_gift = null
                }, 1e3),
                e.giftRecords.push.apply(e.giftRecords, r),
                e.hasRecord = e.giftRecords.length ? !0 : !1,
                e.isrecordLoading = !1,
                r.length < 20 && (e.hasMoreData = !1),
                i += 20
            })
        }, function() {
            var r = t.isFromApp ? "eleme://login" : e.MOBILEORIGIN + "/login?redirect=" + encodeURIComponent(location.href);
            location.href = r
        }))
    }
}
]),
angular.module("meleme").controller("profileHongbaoCtrl", ["$scope", "$rootScope", "$location", "$routeParams", "ProfileHongbao", "ProfileHongbaoFormatter", "Page", "UserRefer", "UserAgent", function(e, t, r, n, o, i, a, s, l) {
    t.isFromApp && (a.title = "我的红包"),
    e.history = "undefined" != typeof n.history,
    e.showHongbao = "available",
    e.noexchange = l.app && t.compareAppVersion("5.5", l.appVersion);
    var c = {
        activities: [{
            filter_key: "activity_types",
            filter_value: 5
        }]
    }
      , u = JSON.stringify(c);
    e.exclusiveHref = "eleme://restaurants?filter_key=" + encodeURIComponent(u) + "&target_name=" + encodeURIComponent("专享红包可用商家"),
    e.limit = 10;
    try {
        e.hongbaolist = JSON.parse($localStorage.getItem("profile/hongbao")) || [],
        t.loading = !1
    } catch (d) {
        throw e.hongbaolist = [],
        Error(JSON.stringify(d))
    }
    sessionStorage.getItem("newhongbaosn") && (sessionStorage.removeItem("newhongbaosn"),
    location.reload()),
    e.showGroup = function(t) {
        e.showHongbao = t,
        e.limit = 10
    }
    ,
    e.isAbleInvite = !1,
    t.profile.$promise.then(function(r) {
        o.get({
            userid: r.user_id,
            limit: 200,
            order_by: "created_at"
        }, function(t) {
            e.hongbaolist = new i.preTemplate(t),
            $localStorage.setItem("profile/hongbao", JSON.stringify(e.hongbaolist)),
            e.hongbaoCount = e.hongbaolist.reduce(function(e, t) {
                return t.will_timeout ? e + 1 : e
            }, 0)
        }).$promise["finally"](function() {
            t.loading = !1
        }),
        s.get({
            user_id: r.user_id
        }, function(t) {
            e.isAbleInvite = t.enabled
        }, function() {
            e.isAbleInvite = !1
        })
    })
}
]),
angular.module("meleme").controller("profileHongbaoExchangeCtrl", ["$scope", "$rootScope", "$location", "Page", "ProfileHongbao", "$q", "Captcha", "SweetAlert", function(e, t, r, n, o, i, a, s) {
    e.isFromApp && (n.title = "兑换红包"),
    e.reset = function() {
        return e.error = !1
    }
    ,
    e.clear = function() {
        e.exchange_code = "",
        e.error = !1
    }
    ,
    e.exchange = function() {
        a.post(function(r) {
            swal({
                title: "请输入验证码",
                text: '<img onclick="src+=\'?\';" src="' + t.RESTBASE + "/v1/captchas/" + r.code + '">',
                type: "input",
                html: !0,
                showCancelButton: !0,
                closeOnConfirm: !1,
                closeOnCancel: !1,
                cancelButtonText: "取消",
                confirmButtonText: "确定",
                customClass: "verifycode-dialog-exchange",
                confirmButtonColor: "#f8f8f8"
            }, function(r) {
                if (r === !1)
                    swal.close();
                else {
                    var n = '<img class="erroricon" src="' + e.STATICBASE + '/eleme/msite/img/error_icon.png"/>';
                    if (!r)
                        return swal.showInputError(n + "请输入图形验证码");
                    if (!/^\w{4}$/.test(r))
                        return swal.showInputError(n + "验证码错误，请重新输入");
                    o.exchange({
                        userid: t.profile.user_id
                    }, {
                        exchange_code: e.exchange_code,
                        captcha_code: r
                    }, function(e) {
                        e.amount = e.amount.toFixed(1),
                        sessionStorage.setItem("newhongbaosn", e.sn),
                        swal.close(),
                        s.swal({
                            title: null ,
                            text: '<span class="icon-profile-hongbao"></span><div class="info">您已成功兑换了一个<span class="amount">' + e.amount + "</span>元红包!</div>",
                            html: !0,
                            confirmButtonText: "确定",
                            customClass: "success-dialog",
                            confirmButtonColor: "#ffffff"
                        }, function() {
                            history.back(-1)
                        })
                    }, function(t) {
                        switch (t.data.name) {
                        case "INVALID_HONGBAO_EXCHANGER":
                            swal.close(),
                            e.error = {
                                msg: "红包兑换码无效，兑换失败"
                            };
                            break;
                        case "CAPTCHA_CODE_ERROR":
                            swal.showInputError("验证码错误，请重新输入");
                            break;
                        default:
                            swal.close(),
                            e.error = {
                                msg: t.data.message
                            }
                        }
                    })
                }
            })
        })
    }
}
]),
angular.module("meleme").controller("profileInfoCtrl", ["$rootScope", "$scope", "$location", "ProfileUser", function(e, t, r, n) {
    t.user = n.get({
        "extras[]": "is_auto_generated"
    }, function() {
        t.url = t.user.is_auto_generated.username ? "/profile/setusername" : "#"
    }),
    t.uploadResp = function(t) {
        e.profile.avatar = t.avatar_path
    }
    ,
    t.selectModifyType = function() {
        return t.user.is_auto_generated.password ? r.url("/profile/setpw") : 1 === t.user.is_mobile_valid ? r.url("/profile/changepw/mobile") : void r.url("/profile/changepw/old")
    }
}
]),
angular.module("meleme").controller("profileMemberChargeCtrl", ["$scope", "$rootScope", "Page", "SweetAlert", "VIP", "Captcha", function(e, t, r, n, o, i) {
    t.isFromApp && (r.title = "绑定"),
    e.user = {},
    e.refreshCode = function() {
        i.save(function(r) {
            e.captcha = t.RESTBASE + "/v1/captchas/" + r.code
        })
    }
    ,
    e.refreshCode(),
    e.charge = function() {
        n.swal({
            title: "确认充值？",
            text: "确认为手机号" + e.user.mobile,
            showCancelButton: !0,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            closeOnConfirm: !0,
            closeOnCancel: !0
        }, function(t) {
            t && o.charge({}, {
                mobile: e.user.mobile,
                card_id: e.user.code,
                card_exchange_code: e.user.password,
                captcha_code: e.user.captcha
            }, function() {
                e.user.serverError = !1,
                e.refreshCode(),
                e.showSuccesssend = !0
            }, function(t) {
                e.refreshCode(),
                e.user.serverError = !0,
                e.user.errorMsg = t.data.message
            })
        })
    }
}
]),
angular.module("meleme").controller("profileMemberQueryCtrl", ["$scope", "$rootScope", "Page", "VIP", "VerifyCode", function(e, t, r, n, o) {
    t.isFromApp && (r.title = "查询会员有效期");
    var i = function(e) {
        return e = new Date(e),
        e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
    }
    ;
    e.queryMember = function() {
        o.carry({
            way: "mobile",
            action: "validate",
            validate_token: e.user.validate_token,
            validate_code: e.user.code
        }).$promise.then(function(t) {
            e.user.mobile_token = t.mobile_token,
            e.countdown = !1,
            e.user.serverError = !t.validate,
            t.validate ? n.get({
                mobile: e.user.mobile,
                mobile_token: e.user.mobile_token
            }, function(t) {
                e.user.errorMsg = !1,
                e.showSuccesssend = !0;
                var r = Date.parse(t.valid_end)
                  , n = Date.now();
                e.queryResultDate = {
                    start: i(Date.parse(t.valid_start)),
                    end: i(Date.parse(t.valid_end))
                },
                e.queryResult = r.valueOf() < n ? "outOfDate" : "isVIP"
            }, function(t) {
                404 === t.status ? (e.user.errorMsg = !1,
                e.showSuccesssend = !0,
                e.queryResult = "notVIP") : e.user.errorMsg = "服务器好像有问题啦"
            }) : (e.user.serverError = !0,
            e.user.errorMsg = "验证码错误",
            e.countdown = !1)
        })
    }
}
]),
angular.module("meleme").controller("profileMemberCtrl", ["$scope", "$rootScope", "$location", "$route", "Page", function(e, t, r, n, o) {
    o.title = "饿配送会员卡",
    e.showVIPInfo = !1;
    var i = function(e) {
        return e = new Date(e),
        e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
    }
    ;
    t.profile.$promise.then(function(t) {
        t.premium_vip.is_valid && (e.validEnd = i(Date.parse(t.premium_vip.valid_end)))
    }, angular.noop).then(function() {
        e.showVIPInfo = !0
    }),
    e.query = function() {
        r.path("/profile/member/query")
    }
    ,
    e.charge = function() {
        r.path("/profile/member/charge")
    }
    ,
    e.isValidMember = function() {
        return t.profile.premium_vip && t.profile.premium_vip.is_valid && Date.parse(t.profile.premium_vip.valid_end).valueOf() > Date.now()
    }
    ,
    e.images = ["/msite/img/memberExplain1.png", "/msite/img/memberExplain2.png"],
    e.bindMobile = function() {
        if (e.profile.user_id)
            return void r.url("/profile/bind?redirectPath=" + encodeURIComponent(r.path()));
        if (e.isFromApp)
            return void (window.location = "eleme://login");
        var t = "?redirect=" + encodeURIComponent("//" + location.hostname + r.path());
        window.location = e.MOBILEORIGIN + "/login" + t
    }
}
]),
angular.module("meleme").controller("profilePointsCtrl", ["$scope", "$rootScope", "UsersRecord", "I18N", function(e, t, r, n) {
    t.isFromApp && (t.Page.title = "我的积分"),
    t.profile.$promise.then(function() {
        return e.point = t.profile.point
    }),
    e.pointRecords = [];
    var o = function(t) {
        var r = e.pointRecords.length;
        if (r) {
            e.hasRecord = !0;
            for (var o = t; r > o; o++) {
                var i = parseFloat(e.pointRecords[o].change_type)
                  , a = parseFloat(e.pointRecords[o].delta);
                e.pointRecords[o].change_type = n.ordertext[i],
                e.pointRecords[o].isAdd = a >= 0,
                e.pointRecords[o].delta = Math.abs(a)
            }
        } else
            e.hasRecord = !1
    }
    ;
    e.hasRecord = !0,
    e.isrecordLoading = !1,
    e.hasMoreData = !0;
    var i = 0;
    e.recordLoadMore = function() {
        !e.isrecordLoading && e.hasMoreData && (e.isrecordLoading = !0,
        t.profile.$promise.then(function(t) {
            r.getPoint({
                user_id: t.user_id,
                limit: 20,
                offset: i
            }, function(t) {
                e.pointRecords.push.apply(e.pointRecords, t),
                o(i),
                e.isrecordLoading = !1,
                t.length < 20 && (e.hasMoreData = !1),
                i += 20
            })
        }))
    }
}
]),
angular.module("meleme").controller("profileRechargeCtrl", ["$scope", "$location", "Balance", "Page", function(e, t, r, n) {
    e.moneys = [{
        val: 50,
        text: "50.00元"
    }, {
        val: 100,
        text: "100.00元"
    }, {
        val: 200,
        text: "200.00元"
    }, {
        val: 300,
        text: "300.00元"
    }, {
        val: 500,
        text: "500.00元"
    }],
    e.money = 50;
    var o = 2
      , i = {
        3: 10,
        0: 4,
        1: 2,
        directPay: 1
    };
    if (e.selectPayWay = function(t) {
        e.payway = t,
        o = i[t]
    }
    ,
    e.isFromApp) {
        n.title = "充值",
        e.payway = 1,
        e.hasmore = !0,
        e.selectMore = function() {
            e.hasmore = !e.hasmore
        }
        ;
        var a = angular.element();
        e.confirm = function() {
            var t = e.MOBILEORIGIN + "/profile/recharge?isSuccess=1&amount=" + encodeURIComponent(e.money)
              , r = "eleme://recharge_successed?url=" + encodeURIComponent(t);
            location.href = "eleme://recharge?" + a.param({
                type: e.payway,
                amount: e.money,
                company_id: o,
                callback: r
            })
        }
    } else
        e.payway = "directPay",
        o = 1,
        e.confirm = function() {
            r.charge({
                come_from: "web_mobile",
                total_fee: e.money,
                company_id: o,
                pay_bank: e.payway
            }, function(t) {
                location.href = e.PAYMENTBASE + t.charge_url
            })
        }
        ;
    1 === parseFloat(t.search().isSuccess) && (e.showSuccesssend = !0,
    e.money = t.search().amount)
}
]),
angular.module("meleme").controller("profileServiceCtrl", ["$scope", "$location", "UserAgent", "Page", "crayfish", function(e, t, r, n, o) {
    n.title = "服务中心";
    var i;
    o.load("/profile/service").then(function(t) {
        i = parseInt(document.cookie.match("ubt_ssid=(..)")[1], 36) / 1296 > t.fNewurl ? "https://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=402791&configID=123801&jid=1820947377&enterurl=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2Fpreview%2Ejsp&skillId=6632&pagetitle=%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88&pagereferrer=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2FgetNewEmbedScriptEmbedScriptAction%2Eaction%3Ficon%3Dselected7&firstEnterUrl=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2Fpreview%2Ejsp&lan=zh&s=1" : t.newurl,
        r.isBrowser ? (e.urlOnline = i,
        e.urlPhone = "tel:10105757") : (e.urlOnline = "eleme://web?url=" + encodeURIComponent(i) + "&animation_type=1",
        e.urlPhone = "eleme://make_call?phone_number=10105757")
    });
    var a = "/profile/explain";
    o.load(a).then(function(t) {
        e.explains = String(t.index).match(/\w+/g).map(function(e) {
            var r = t[e + "Caption"]
              , n = a + "/" + e;
            return {
                title: r,
                href: n
            }
        })
    })
}
]),
angular.module("meleme").controller("profileSetPasswordCtrl", ["$rootScope", "$scope", "ProfileUser", function(e, t, r) {
    t.user = {
        type: "user_id"
    },
    t.setPassword = function() {
        t.error = null ,
        r.update({
            param: "password"
        }, t.user, function() {
            t.showSuccesssend = !0
        }, function(e) {
            t.error = e.data
        })
    }
    ,
    t.message = function(e) {
        t["invalid" + e] = t.setpwform[e].$invalid
    }
}
]),
angular.module("meleme").controller("profileSetUsernameCtrl", ["$rootScope", "$scope", "ProfileUser", function(e, t, r) {
    t.user = {},
    t.setUsername = function() {
        t.error = null ,
        r.update({
            param: "username"
        }, t.user, function() {
            t.showSuccesssend = !0,
            e.profile = r.get()
        }, function(e) {
            t.error = e.data
        })
    }
    ,
    t.verifyusername = function() {
        t.invalidusername = {};
        var e = t.user.username || ""
          , r = e.replace(/[\u0100-\uFFFF]/g, "00").length;
        r > 24 || 5 > r ? t.invalidusername.errorlen = !0 : (t.invalidusername.allnum = !/[^0-9]/.test(e),
        t.invalidusername.errorcode = /[^\-\.\w\u4e00-\u9fa5]/.test(e))
    }
}
]),
angular.module("meleme").controller("profileWithdrawCtrl", ["$scope", "$rootScope", "Balance", "ProfileUser", "$location", "SweetAlert", "Page", "crayfish", function(e, t, r, n, o, i, a, s) {
    e.infoErrorMsg = "输入金额错误",
    s.load("/withdraw").then(function(t) {
        return e.crayfish = t
    }),
    e.isFromApp && (a.title = "余额提现"),
    r.checkWithdraw({}, function(t) {
        e.is_withdraw_valid = t.is_withdraw_valid,
        e.is_withdraw_valid || i.swal({
            title: "无法提现",
            text: "每日只提现一次",
            confirmButtonText: "知道了"
        }, function() {
            o.url("/profile/balance")
        })
    }),
    e.maxbalance = function() {
        return t.profile.balance
    }
    ,
    e.is_money_disabled = function() {
        return angular.isUndefined(t.profile.balance) ? !1 : !0
    }
    ,
    e.invalidMoney = function() {
        return angular.isUndefined(e.money) ? void 0 : isNaN(e.money) || 0 === parseFloat(e.money) || parseFloat(e.money) > parseFloat(t.profile.balance) ? !0 : !1
    }
    ,
    e.confirm = function() {
        r.widthdraw({
            total_fee: e.money
        }, function() {
            e.showSuccesssend = !0,
            t.profile = n.get()
        }, function(e) {
            i.swal({
                title: "温馨提示",
                text: e.data.message,
                confirmButtonText: "知道了"
            })
        })
    }
}
]),
angular.module("meleme").controller("profileCtrl", ["$scope", "$rootScope", "ProfileUser", "ProfileHongbao", "$location", function(e, t, r, n, o) {
    t.bodyWhite = 0,
    e.userInfo = angular.copy(t.profile),
    e.loginUrl = e.MOBILEORIGIN + "/login?redirect=" + encodeURIComponent(location.href),
    e.loginPrepare = function() {
        t.profile.user_id ? o.url("/profile/info") : location.href = e.loginUrl
    }
    ;
    var i = (new Date).toISOString();
    e.hongbaoCount = "?",
    t.profile.$promise.then(function() {
        n.getcount({
            userid: t.profile.user_id,
            begin_date: "," + i,
            end_date: i + ",",
            "status[]": 0,
            way: "count"
        }, function(t) {
            e.hongbaoCount = t.count
        })
    })
}
]),
angular.module("meleme").controller("registerCtrl", ["$rootScope", "$scope", "$location", "Account", "ProfileUser", "UserExists", function(e, t, r, n, o, i) {
    var a = r.search().redirect
      , s = a ? decodeURIComponent(a) : "//" + location.hostname + "/home";
    t.loginPrepare = function() {
        var e = r.search().redirect;
        e = e ? "?redirect=" + encodeURIComponent(e) : "",
        window.location = "//" + location.hostname + "/login" + e
    }
    ;
    var l = angular.copy(e.wechatData, {});
    l.title = "注册" + l.title,
    wechat("timeline", l).on("friend", l),
    t.user = {
        mobile: "",
        password: "",
        code: ""
    },
    t.register = function() {
        t.error = null ,
        n.save({
            action: "register",
            param: "mobile"
        }, t.user, function() {
            e.profile = o.get(function() {
                window.location = s,
                $localStorage.removeItem("goback")
            })
        }, function(e) {
            t.error = e.data
        })
    }
    ,
    t.ifExists = function() {
        t.error = null ,
        t.message("mobile"),
        t.invalidmobile || i.get({
            param: "exists",
            type: "mobile",
            mobile: t.user.mobile
        }, function(e) {
            e.is_exists && (t.error = {},
            t.error.message = "用户已存在, 可以直接登录")
        })
    }
    ,
    t.message = function(e) {
        t["invalid" + e] = t.regform[e].$invalid
    }
}
]),
angular.module("meleme").controller("restaurantAuthCtrl", ["$rootScope", "$scope", "$routeParams", "$location", "SweetAlert", "Restaurant", "Page", function(e, t, r, n, o, i, a) {
    e.isFromApp && (a.title = "企业认证详情"),
    e.loading = !0,
    t.identifyResult = {
        1: "良好",
        2: "一般",
        3: "较差"
    },
    t.identifyResultClassName = {
        1: "well",
        2: "ordinary",
        3: "bad"
    },
    t.showLicense = function(e) {
        n.url(n.path().replace("/auth", "/license/" + e))
    }
    ,
    i.getAuth({
        id: r.restaurantid
    }, function(r) {
        e.loading = !1,
        t.identification = r.identification,
        t.license = r.license
    }, function(t) {
        e.loading = !1,
        o.swal({
            type: "error",
            title: "出错啦",
            text: t.data.message
        })
    })
}
]),
angular.module("meleme").controller("restaurantFoodCtrl", ["$rootScope", "$scope", "Restaurant", "Food", "$routeParams", "$location", function(e, t, r, n, o, i) {
    function a(e, r) {
        n.getRating({
            id: o.foodid,
            offset: Number(e),
            limit: Number(r)
        }, function(e) {
            e.error || (t.comments ? Array.prototype.push.apply(t.comments, e) : t.comments = e)
        })
    }
    var s = $localStorage.getItem("geohash")
      , l = 0
      , c = 10;
    t.commentFilter = 0,
    e.loading = !0,
    r.get({
        id: o.restaurantid,
        geohash: s
    }, function(e) {
        e.error || (t.restaurant = e)
    }),
    n.get({
        id: o.foodid
    }, function(e) {
        t.food = e,
        e.image_path && (t.photo = e.image_path)
    }).$promise.then(function(e) {
        n.get({
            id: o.foodid,
            action: "photos",
            way: "count"
        }, function(r) {
            t.hasUserImg = 0 !== r.count,
            e.image_path || 0 === r.count || n.getPhotos({
                id: o.foodid,
                limit: 1
            }, function(e) {
                t.photo = e[0].image_path
            })
        })
    })["finally"](function() {
        e.loading = !1
    }),
    n.get({
        id: o.foodid,
        action: "ratings",
        way: "count"
    }, function(e) {
        t.totalCommentNum = e.count
    }).$promise["finally"](function() {
        t.loadComment = function() {
            (!t.totalCommentNum || !t.comments || (l + 1) * c < t.totalCommentNum) && (a(l * c, c),
            l++),
            t.commentNomore = !0
        }
        ,
        t.loadComment()
    }),
    n.get({
        id: o.foodid,
        action: "ratings",
        way: "count",
        has_text: 1
    }, function(e) {
        t.fulfillCommentNum = e.count
    }),
    t.foodPhoto = function() {
        i.path(i.path() + "/photos")
    }
}
]),
angular.module("meleme").controller("restaurantFoodPhotosCtrl", ["$rootScope", "$scope", "Restaurant", "Food", "$routeParams", function(e, t, r, n, o) {
    function i(e) {
        n.getPhotos({
            id: o.foodid,
            limit: l,
            offset: e
        }, function(e) {
            void (t.imgs ? t.imgs.concat(e) : t.imgs = e)
        })
    }
    var a = $localStorage.getItem("geohash")
      , s = 0
      , l = 3
      , c = null ;
    r.get({
        id: o.restaurantid,
        geohash: a
    }).$promise.then(function(e) {
        t.restaurant = e
    }),
    n.get({
        id: o.id
    }).$promise.then(function(e) {
        t.food = e
    }),
    n.get({
        id: o.id,
        action: "photos",
        way: "count"
    }).$promise.then(function(e) {
        c = e.count
    })["finally"](function() {
        t.loadImg = function() {
            (!c || !t.imgs || c > s * l) && (i(s * l),
            s++)
        }
        ,
        t.loadImg(s)
    })
}
]),
angular.module("meleme").controller("restaurantInfoCtrl", ["$scope", "$rootScope", "$routeParams", "$location", "Restaurant", "Favor", function(e, t, r, n, o, i) {
    t.loading = !0,
    e.currentState = "info";
    var a = n.search()
      , s = $localStorage.getItem("geohash");
    a.cartId && a.sig && (e.spell = 1,
    e.cartId = a.cartId,
    e.sig = a.sig),
    o.get({
        geohash: s,
        type: "geohash",
        id: r.restaurantid,
        "extras[]": ["restaurant_activity", "license"]
    }).$promise.then(function(r) {
        e.restaurant = r,
        t.profile.$promise.then(function() {
            i.get({
                id: t.profile.user_id,
                action: "restaurants",
                restaurant_id: e.restaurant.id
            }, function() {
                e.rstfavor_status = !0
            }, function() {
                e.rstfavor_status = !1
            })
        })
    })["finally"](function() {
        t.loading = !1
    }),
    e.rstfavor = function(r) {
        if (r)
            i["delete"]({
                id: t.profile.user_id,
                action: "restaurants",
                restaurant_id: e.restaurant.id
            }, function() {
                e.rstfavor_status = !1
            });
        else {
            if (!t.profile.user_id)
                return void swal({
                    title: "请先登录您的账号",
                    type: "warning",
                    showCancelButton: !0,
                    confirmButtonText: "登录",
                    cancelButtonText: "取消"
                }, function(e) {
                    var t = encodeURIComponent(n.url());
                    e && n.url("/login?redirect=" + t)
                });
            i.save({
                id: t.profile.user_id,
                action: "restaurants",
                restaurant_id: e.restaurant.id
            }, function() {
                e.rstfavor_status = !0
            })
        }
    }
    ,
    e.showLicense = function(t) {
        t && e.restaurant.license[t] && n.url(n.path() + "/license/" + t)
    }
}
]),
angular.module("meleme").controller("restaurantLicenseCtrl", ["$routeParams", "Restaurant", "$scope", "Page", function(e, t, r, n) {
    var o = e.restaurantid
      , i = e.type
      , a = {};
    a.business_license_image = "商家营业执照",
    a.catering_service_license_image = "餐饮许可证",
    r.title = a[i],
    r.isFromApp && (n.title = r.title),
    t.get({
        id: o,
        type: "geohash",
        "extras[]": "license"
    }).$promise.then(function(e) {
        r.image = e.license[i]
    })
}
]),
angular.module("meleme").controller("restaurantRatingsCtrl", ["$scope", "$routeParams", "RestaurantRatingsLoader", function(e, t, r) {
    e.currentState = "ratings",
    e.restaurant = {
        name: $localStorage.getItem("restaurantname")
    };
    var n = t.restaurantid
      , o = new r({
        id: n
    })
      , i = new r({
        id: n
    });
    e.ratingtabs = [{
        name: "有内容评价",
        state: "hasTextComments"
    }, {
        name: "所有评价",
        state: "allComments"
    }],
    e.state = "allComments",
    e.ratings = o,
    o.loadComments("allComments"),
    i.loadComments("hasTextComments"),
    e.loadComments = function() {
        "allComments" === e.state ? o.loadComments("allComments") : i.loadComments("hasTextComments")
    }
    ,
    e.changeState = function(t) {
        e.state = t,
        e.ratings = "allComments" === e.state ? o : i
    }
    ,
    e.formatTimeSpent = function(e, t) {
        return t ? 0 > e ? t : "" : Math.abs(e)
    }
}
]),
angular.module("meleme").controller("restaurantCtrl", ["$scope", "$rootScope", "$routeParams", "$location", "$timeout", "Restaurant", "Page", "UBT", function(e, t, r, n, o, i, a, s) {
    s.send("EVENT", {
        id: "1001"
    });
    var l = r.restaurantid
      , c = n.search()
      , u = $localStorage.getItem("geohash");
    c.share && (location.href = "eleme://restaurant?restaurant_id=" + encodeURI(l) + "&animation_type=1"),
    e.currentState = "menu",
    t.loading = !0,
    e.Page = a,
    c.cartId && c.sig && (e.spell = 1,
    e.cartId = c.cartId,
    e.sig = c.sig),
    i.get({
        id: l,
        geohash: u,
        type: "geohash"
    }).$promise.then(function(t) {
        return e.restaurant = t,
        $localStorage.setItem("restaurantname", t.name),
        t.id
    }).then(function(r) {
        i.getMenu({
            id: r
        }).$promise.then(function(t) {
            if (!t.length)
                return !1;
            t.forEach(function(e) {
                return e.foods.forEach(function(e, t) {
                    return e.index = t
                })
            });
            var r = e.restaurant.name
              , n = e.restaurant.address
              , o = t[0].foods.slice(0, 5).map(function(e) {
                return e.name
            });
            e.Page.title = r + "外卖_" + r + "菜单|电话_" + r + "网上订餐_饿了么官网",
            e.Page.keywords = r + "外卖," + r + "菜单," + r + "外卖电话",
            e.Page.description = r + "位于" + n + "，主要美食有" + o.join("、") + "等，了解更多美食外卖，上饿了么。",
            t.some(function(t, r) {
                return t.id ? (e.currentIndex = r,
                !0) : void 0
            }),
            e.menus = t
        })["finally"](function() {
            t.loading = !1
        })
    })["catch"](function(e) {
        return "HTTP_NOT_FOUND" !== e.data.name ? !1 : void i.get({
            version: "v3",
            id: l,
            geohash: u,
            type: "geohash"
        }, function(e) {
            n.path("/shop/" + e.id)
        }, function() {
            n.path("/404")
        })
    }),
    e.selectMenu = function(t) {
        e.currentIndex !== t && (e.currentIndex = t)
    }
    ,
    e.toggleBroadcast = function() {
        e.broadcastShow = !e.broadcastShow
    }
}
]),
angular.module("meleme").controller("rootCtrl", ["$rootScope", "$scope", "$route", "$location", "Page", "ProfileUser", "UserAgent", "Account", "SweetAlert", function(e, t, r, n, o, i, a, s, l) {
    var c = /^\/profile(?!\/(service|member|explain))\/.+/i;
    if (e.profile = /^\/hongbao\w*/i.test(n.url()) ? {
        $promise: {
            then: function() {
                e.profile = i.get();
                var t = e.profile.$promise;
                return t.then.apply(t, arguments)
            }
        }
    } : i.get(),
    e.isVIPUser = function() {
        return e.profile.premium_vip && e.profile.premium_vip.is_valid && new Date(e.profile.premium_vip.valid_end).valueOf() > Date.now()
    }
    ,
    e.Page = o,
    e.UserAgent = a,
    e.isFromApp = a.isFromApp,
    e.isFromIOS = "ios" === a.app,
    e.$on("$routeChangeStart", function(t, r, n) {
        if (e.isFromApp || a.isWechat) {
            if (void 0 === n || r === n)
                return;
            t.preventDefault();
            var o = r.$$route.originalPath;
            for (var i in r.pathParams) {
                var s = new RegExp("(:" + i + ")","gi");
                o = o.replace(s, r.pathParams[i])
            }
            if (r.params) {
                o += "?";
                for (var l in r.params)
                    o += encodeURIComponent(l) + "=" + encodeURIComponent(r.params[l]) + "&"
            }
            location.href = o
        } else
            e.loading = 1
    }),
    e.$on("$routeChangeSuccess", function() {
        var o = !1;
        e.loading = 0;
        var i = "/html/restaurant/menu.html" === r.current.templateUrl;
        i && setTimeout(function() {
            e.bodyWhite = 1
        }, 0),
        c.test(n.url()) && (o = !0),
        o && e.profile.$promise["finally"](function() {
            e.profile.user_id || l.swal({
                title: "请先登录您的账号",
                type: "warning",
                showCancelButton: !0,
                confirmButtonText: "登录",
                cancelButtonText: "取消"
            }, function(r) {
                if (e.isFromApp && !r)
                    return history.back(-1);
                var n = e.isFromApp ? "eleme://login" : t.MOBILEORIGIN + "/login?redirect=" + encodeURIComponent(location.href);
                location.href = r ? n : "/home"
            })
        })
    }),
    e.trackId = document.cookie.match(/(?:^|; )track_id=(.*?)(?:; |$)|$/)[1],
    e.logout = function() {
        l.swal({
            title: "是否退出登录",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "退出登录",
            cancelButtonText: "再等等"
        }, function(t) {
            t && s.save({
                action: "logout"
            }, angular.$().param(e.profile), function(t) {
                return t.error ? swal("出错啦", "退出登录失败 :(", "warning") : (e.profile = i.get(),
                void n.url("/profile"))
            }, function() {
                swal("出错啦", "退出登录失败,请重新尝试", "warning")
            })
        })
    }
    ,
    e.wechatData = {
        img: "http://static11.elemecdn.com/forward/img/restaurant/rst-default-logo.jpg",
        app: "wx2a416286e96100ed",
        link: function() {
            return n.absUrl()
        },
        title: "饿了么",
        desc: "饿了么是中国专业的网上订餐平台，目前已覆盖北京、上海、杭州、广州等300多个城市，提供各类中式、日式、韩式、西式、下午茶、夜宵等优质美食，并提供送餐上门服务，让订餐更加轻松，叫外卖就上饿了么！"
    },
    wechat("timeline", e.wechatData).on("friend", e.wechatData),
    $localStorage.getItem("geo")) {
        var u = $localStorage.getItem("geo")
          , d = u.replace(/(\/place\/|&premium=\d)/g, "");
        $localStorage.setItem("geo", d),
        $localStorage.setItem("geohash", d)
    }
    e.maxPriceDigitsNumber = 2,
    e.compareAppVersion = function(e, t) {
        e = e || "",
        t = t || "";
        for (var r = e.split("."), n = t.split("."), o = Math.min(r.length, n.length), i = 0; o > i; ++i)
            if (+r[i] !== +n[i])
                return r[i] > +n[i];
        return r.length > n.length
    }
}
]),
angular.module("meleme").controller("resetCtrl", ["$scope", "$rootScope", "VerifyCode", "Password", "$location", function(e, t, r, n, o) {
    t.isFromApp && (t.Page.title = "重置密码");
    var i = {};
    i.init = function() {
        i.inject()
    }
    ,
    i.inject = function() {
        e.countdown = !0,
        e.server = {
            token: o.search().token,
            error: {
                status: null ,
                msg: null
            }
        },
        e.local = {
            from: o.search().from,
            userid: o.search().userid,
            isCalling: !1
        },
        e.resend = i.resend,
        e.formSubmit = i.formSubmit
    }
    ,
    i.resend = function(t) {
        var n = {
            way: e.local.from,
            action: "send"
        };
        n[e.local.from] = e.local.userid,
        "mobile" === e.local.from && (n.type = t),
        r.carry(n).$promise.then(function(r) {
            e.server.token = r.validate_token,
            void ("sms" === t ? e.countdown = !0 : e.local.isCalling = !0)
        }, function(e) {
            i.reset(e.message || e.data && e.data.message)
        })
    }
    ,
    i.formSubmit = function(t) {
        var a = {
            way: e.local.from,
            action: "validate",
            validate_token: e.server.token,
            validate_code: t.captcha
        };
        r.carry(a).$promise.then(function(r) {
            if (!r.validate)
                return void i.reset("验证码错误");
            var a = {
                new_password: t.newPassword
            };
            a.type = "mobile" === e.local.from ? "mobile_token" : "email_token",
            a[a.type] = r[a.type],
            n.reset(a).$promise.then(function() {
                o.url("/forget/success")
            }, function(e) {
                i.reset(e.message || e.data && e.data.message)
            })
        }, function(e) {
            i.reset(e.message || e.data && e.data.message)
        })
    }
    ,
    i.reset = function(t) {
        e.server.error.msg = t,
        e.resetForm.$setPristine(),
        e.local.isCalling = !1
    }
    ,
    i.init()
}
]),
angular.module("meleme").controller("spellCtrl", ["$scope", "$rootScope", "$location", "Page", "Spell", "SpellStatus", "Cart", "I18N", "$http", "WechatAPI", function(e, t, r, n, o, i, a, s, l, c) {
    var u = {};
    u.themes = ["spell-red", "spell-orange", "spell-yellow", "spell-green", "spell-cyan", "spell-blue", "spell-purple"],
    u.spellParams = r.search(),
    u.timeGap = 1e4,
    u.init = function() {
        u.inject(),
        u.getRemote()
    }
    ,
    u.inject = function() {
        t.bodyWhite = 1,
        e.spell = {},
        e.spell.status = 0,
        e.I18N = s.spell,
        e.spell.params = u.spellParams,
        e.quit = u.quit,
        e.repeat = u.repeat,
        e.$watch("status", function(e) {
            -1 === e && (t.bodyWhite = 0)
        }),
        e.$on("$destroy", function() {
            t.bodyWhite = 0
        })
    }
    ,
    u.getRemote = function() {
        function e() {
            o.get({
                cartId: u.spellParams.cartId,
                sig: u.spellParams.sig
            }).$promise.then(function(e) {
                u.saveToLocal(e),
                t && (t = !1,
                u.setWechat(e))
            })
        }
        var t = !0;
        e(),
        setTimeout(e, u.timeGap)
    }
    ,
    u.saveToLocal = function(t) {
        return t.error ? void (e.spell.status = -1) : (u.setList(t),
        n.title = t.restaurantName,
        e.spell.status = i(t),
        e.spell.restaurant = t.restaurant,
        e.spell.totalPrice = t.total,
        void (t.pindanOrder && (e.spell.predictTime = 1e3 * (t.pindanOrder.restaurant_deliver_time + t.pindanOrder.created_at),
        e.spell.waitTime = parseInt((Date.now() / 1e3 - t.pindanOrder.created_at) / 60) + "  ")))
    }
    ,
    u.setWechat = function(e) {
        /MicroMessenger/i.test(window.navigator.userAgent) && u.wechatShare(e)
    }
    ,
    u.wechatShare = function(t) {
        if (window.wx) {
            var r = window.location.href.replace(/#.*/, "")
              , n = {
                title: "饿了么微信拼单",
                link: r.replace(/code=[^&]+&?/, ""),
                desc: "我正在「" + t.restaurant.name + "」参与拼单。",
                imgUrl: t.restaurant.image_path ? e.FUSSBASE + t.restaurant.image_path + "?w=100&h=100" : location.protocol + e.STATICBASE + "/msite/img/svg/rst-logo.svg"
            };
            c.sudo(["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]).then(function(e) {
                for (var t in e)
                    e[t](n)
            })
        }
    }
    ,
    u.setList = function(t) {
        var r;
        try {
            r = JSON.parse($localStorage.getItem("spellCartName"))
        } catch (n) {
            r = $localStorage.getItem("spellCartName")
        }
        if (t.groups.forEach(function(n, o) {
            r && r === n.name && (e.spell.me = n.name),
            0 !== o && "发起人" === n.name && (t.groups.unshift(n),
            t.groups.splice(o + 1, 1)),
            n.theme = u.themes[o % 7]
        }),
        e.spell.list = t.groups,
        e.spell.totalFoodNums = t.totalFoodNums,
        e.spell.totalPersonNums = t.groups.length,
        t.pindanOrder) {
            var o = t.pindanOrder;
            e.spell.predictTime = 1e3 * (o.restaurant_deliver_time + o.created_at),
            e.spell.waitTime = parseInt((Date.now() / 1e3 - o.created_at) / 60) + " "
        }
    }
    ,
    u.repeat = function(t) {
        a.clear(),
        a.setRestaurant(e.spell.restaurant),
        e.spell.list[t].forEach(function(e) {
            a.add(e)
        }),
        5 === e.spell.status ? a.init().$promise.then(function() {
            r.url("/cart")
        }) : r.url("/cart?spell=1&cartId=" + u.spellParams.cartId + "&sig=" + u.spellParams.sig)
    }
    ,
    u.quit = function() {
        var t;
        try {
            t = JSON.parse($localStorage.getItem("spellCartName"))
        } catch (r) {
            t = $localStorage.getItem("spellCartName")
        }
        confirm("确认退出拼单吗？") && o.save({
            cartId: u.spellParams.cartId,
            sig: u.spellParams.sig,
            action: "delete",
            name: t
        }).$promise.then(function(t) {
            return t.error ? swal("出错啦", "退出错误！", "warning") : (u.saveToLocal(t),
            e.spell.status = 0,
            $localStorage.removeItem("spellCartId"),
            void $localStorage.removeItem("spellCartName"))
        })
    }
    ,
    u.init()
}
]),
angular.module("meleme").controller("tradeCancelOrderCtrl", ["$rootScope", "$scope", "$routeParams", "$location", "$q", "OrderTrades", "SweetAlert", function(e, t, r, n, o, i, a) {
    t.orderId = r.id,
    t.setSection = function(e) {
        t.sectionIndex = e
    }
    ,
    t.reasons = ["临时有事，无法接收外卖", "点错了，重新点", "不想买了", "其他"];
    var s;
    t.sectionIndex = 0,
    e.profile.$promise.then(function(e) {
        s = e.user_id
    }, function(e) {
        return "HTTP_UNAUTHORIZED" !== e.data.name ? o.reject(e.data) : void (s = "anonymous")
    }).then(function() {
        -1 !== n.url().indexOf("cancelorder") && (t.sectionIndex = 1,
        i.get({
            user_id: s,
            order_id: t.orderId,
            action: "refund_intentions"
        }, function(e) {
            t.refunddata = e
        }),
        t.submitOrderType = function() {
            i.post({
                user_id: s,
                order_id: t.orderId,
                refund_intention: t.sectionIndex,
                action: "cancel"
            }, function() {
                n.url("/cancelreason/" + t.orderId)
            }, function(e) {
                a.swal({
                    title: "出错啦",
                    text: e.data.message,
                    customClass: "complaint-service-box",
                    confirmButtonText: "确定"
                }, function() {
                    n.url("/trade/" + t.orderId)
                })
            })
        }
        )
    }),
    t.submitOrderReason = function() {
        var e;
        e = 3 === t.sectionIndex ? t.otherReason || t.reasons[t.sectionIndex] : t.reasons[t.sectionIndex],
        e && i.post({
            user_id: s,
            order_id: t.orderId,
            action: "cancel",
            param: "reason",
            content: e
        }, function() {
            n.url("/trade")
        }, function(e) {
            a.swal({
                title: "出错啦",
                text: e.data.message,
                customClass: "complaint-service-box",
                confirmButtonText: "确定"
            }, function() {
                n.url("/trade/" + t.orderId)
            })
        })
    }
}
]),
angular.module("meleme").controller("tradeOrderCtrl", ["$rootScope", "$scope", "$route", "$routeParams", "$location", "$q", "UserAgent", "OrderTrades", "SweetAlert", "Cart", "I18N", "Pay", function(e, t, r, n, o, i, a, s, l, c, u, d) {
    t.order = {},
    t.tradeStatusList = [],
    t.displayimeline = !1;
    var m, f = c.init().$promise, p = n.id, g = {
        failed_pay: "order-timeline-fail-pay",
        cancel_order: "order-timeline-cancel-order",
        order: "order-timeline-order",
        payment: "order-timeline-payment",
        restaurant: "order-timeline-restaurant",
        distribution: "order-timeline-distribution",
        arrive: "order-timeline-arrive",
        customer_service: "order-timeline-customer-service",
        completion_order: "order-timeline-completion-order"
    };
    e.loading = !0;
    var h = function(e) {
        s.get(e, function(e) {
            for (var r = e.timeline, n = "icon-", o = 0; o < r.length; o++)
                r[o].src = g[r[o].type],
                r[o].src = n + r[o].src,
                r[o].src += "closed" === r[o].status ? "-blue" : "-grey";
            t.tradeStatusList = r,
            t.displayimeline = e.timeline_detail_enabled
        }, function(e) {
            setTimeout(function() {
                throw JSON.stringify(e)
            })
        })
    }
    ;
    t.goToTimeLine = function() {
        t.displayimeline && o.url("/trade/timeline/" + t.order.unique_id)
    }
    ,
    e.profile.$promise.then(function(e) {
        m = e.user_id
    }, function(e) {
        return "HTTP_UNAUTHORIZED" !== e.data.name ? i.reject(e.data) : void (m = "anonymous")
    }).then(function() {
        s.get({
            user_id: m,
            order_id: p,
            "extras[]": ["basket", "order_rate", "restaurant", "order_status"]
        }, function(e) {
            t.order = e,
            t.status = e.order_status,
            t.foodQuantity = function() {
                var t = 0;
                return e.basket.group[0].forEach(function(e) {
                    t += e.quantity
                }),
                t
            }
            ,
            h({
                user_id: m,
                order_id: p,
                action: "status"
            })
        }, function() {
            o.url("/404")
        })
    })["finally"](function() {
        e.loading = !1
    }),
    t.payRepeatCheck = function() {
        d.make({
            orderId: p,
            userId: e.profile.user_id
        })["catch"](function(e) {
            swal({
                title: "出错啦",
                text: e.data.message || "服务端未知错误",
                confirmButtonText: "返回"
            })
        })
    }
    ,
    t.options = ["商家已确认，但没有送外卖", "商家参加了活动，但没有优惠", "吐槽其他"],
    t.itemToggle = function(e) {
        t.errorStatus = !1,
        t.itemIndex = e
    }
    ,
    t.cancelOrder = function() {
        t.status.is_direct_cancelable ? l.swal({
            title: "是否取消订单",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "取消订单",
            cancelButtonText: "再等等"
        }, function(e) {
            e && s.post({
                user_id: m,
                order_id: p,
                action: "cancel"
            }, function() {
                o.url("/cancelreason/" + t.order.unique_id)
            }, function(e) {
                l.swal({
                    title: "出错啦",
                    text: e.data.message,
                    customClass: "complaint-service-box",
                    confirmButtonText: "确定"
                })
            })
        }) : o.url("/cancelorder/" + t.order.unique_id)
    }
    ,
    t.submitCheck = function() {
        t.errorStatus = 2 === t.itemIndex && !t.mockText,
        t.errorStatus || s.save({
            user_id: e.profile.user_id,
            order_id: p,
            action: "complaint",
            complaint_type: t.itemIndex,
            content: 2 === t.itemIndex ? t.mockText : ""
        }, function() {
            l.swal({
                title: "反馈成功",
                text: "感谢您对我们的支持和帮助，我们会尽快核实，核实无误后，会对商家进行惩罚",
                customClass: "complaint-service-box",
                confirmButtonText: "知道了"
            }),
            t.order.complaint_status = 1,
            t.showReport = !1
        }, function(e) {
            l.swal({
                title: "出错啦",
                text: e.data.message,
                customClass: "complaint-service-box",
                confirmButtonText: "知道了"
            }),
            t.showReport = !1
        })
    }
    ;
    var v = function() {
        c.repeat({
            user_id: m,
            order_id: p
        }).$promise.then(function() {
            o.url("/shop/" + t.order.restaurant.id)
        }, function(e) {
            var t = u.cartRepeatStatus[e && e.data.name] || u.cartRepeatStatus.SERVER_UNKNOWN_ERROR;
            l.swal(angular.extend({
                confirmButtonText: "知道啦"
            }, t))
        })
    }
    ;
    t.foodRepeat = function() {
        t.order.order_status.is_rebuyable ? f.then(function() {
            c.isEmpty() ? c.clearRemote().then(v) : l.swal({
                title: u.cartRepeatStatus.CART_IS_NOT_EMPTY.title,
                text: u.cartRepeatStatus.CART_IS_NOT_EMPTY.text.replace(/%r/, c.getRestaurant().name),
                showCancelButton: !0,
                confirmButtonColor: "#3199e8",
                confirmButtonText: "清空",
                cancelButtonText: "取消"
            }, function(e) {
                e && (c.clear(),
                c.setRestaurant(t.order.restaurant),
                c.clearRemote().then(v))
            })
        }) : l.swal({
            title: "温馨提示",
            text: t.order.order_status.rebuy_not_supported_reason,
            customClass: "complaint-service-box",
            confirmButtonText: "确定"
        })
    }
    ,
    t.cancelRefund = function() {
        l.swal({
            title: "取消退单",
            text: "取消退单后无法再次申请退单，确定要取消退单吗？",
            customClass: "complaint-service-box",
            confirmButtonText: "确定取消退单",
            showCancelButton: !0,
            cancelButtonText: "再等等"
        }, function(e) {
            e && s.post({
                user_id: m,
                order_id: p,
                action: "refunding",
                refunding_action: "cancel",
                password: t.password
            }, function() {
                o.reload()
            }, function(e) {
                l.swal({
                    title: "出错啦",
                    text: e.data.message,
                    customClass: "complaint-service-box",
                    confirmButtonText: "确定"
                })
            })
        })
    }
    ,
    t.applyService = function() {
        s.post({
            user_id: m,
            order_id: p,
            action: "refunding",
            refunding_action: "arbitrate",
            reason: t.applyServiceReason
        }, function() {
            l.swal({
                title: "申请客服介入成功",
                type: "success",
                confirmButtonText: "确定"
            }, function() {
                r.reload()
            })
        }, function(e) {
            l.swal({
                title: "出错啦",
                text: e.data.message,
                customClass: "complaint-service-box",
                confirmButtonText: "确定"
            })
        })
    }
    ,
    t.errorLen = !1,
    t.verifylength = function() {
        t.applyServiceReason && (t.errorLen = t.applyServiceReason.replace(/[\u0100-\uFFFF]/g, "00").length > 200)
    }
    ,
    t.reverBool = function(e) {
        t[e] = !t[e]
    }
}
]),
angular.module("meleme").controller("tradeRatingCtrl", ["$rootScope", "$scope", "$routeParams", "OrderTrades", "Favor", "SweetAlert", function(e, t, r, n, o, i) {
    e.loading = !0;
    var a, s = r.id, l = {};
    e.profile.$promise.then(function(e) {
        a = e.user_id
    }, function(e) {
        "HTTP_UNAUTHORIZED" === e.data.name && (a = "anonymous")
    }).then(function() {
        n.get({
            version: "v2",
            user_id: a,
            order_id: s,
            "extras[]": ["rate_info", "restaurant"]
        }, function(e) {
            c(e)
        })
    })["finally"](function() {
        e.loading = !1
    }),
    t.ratingStatesStar = [{
        test: "极差",
        stateOn: "icon-ratingOn grey",
        stateOff: "icon-ratingOn"
    }, {
        test: "失望",
        stateOn: "icon-ratingOn yellow",
        stateOff: "icon-ratingOn"
    }, {
        test: "一般",
        stateOn: "icon-ratingOn yellow",
        stateOff: "icon-ratingOn"
    }, {
        test: "满意",
        stateOn: "icon-ratingOn red",
        stateOff: "icon-ratingOn"
    }, {
        test: "惊喜",
        stateOn: "icon-ratingOn red",
        stateOff: "icon-ratingOn"
    }],
    t.ratingStates = [{
        test: "极差",
        stateOn: "icon-ratingfaceOn0",
        stateOff: "icon-ratingfaceOff"
    }, {
        test: "失望",
        stateOn: "icon-ratingfaceOn",
        stateOff: "icon-ratingfaceOff"
    }, {
        test: "一般",
        stateOn: "icon-ratingfaceOn",
        stateOff: "icon-ratingfaceOff"
    }, {
        test: "满意",
        stateOn: "icon-ratingfaceOn1",
        stateOff: "icon-ratingfaceOff"
    }, {
        test: "惊喜",
        stateOn: "icon-ratingfaceOn1",
        stateOff: "icon-ratingfaceOff"
    }],
    t.textareanote = [[{
        val: "服务态度差"
    }, {
        val: "送餐太慢"
    }, {
        val: "菜品少送或错送"
    }], [{
        val: "送餐速度一般"
    }, {
        val: "味道一般"
    }, {
        val: "服务态度一般"
    }], [{
        val: "送餐速度一般"
    }, {
        val: "味道一般"
    }, {
        val: "服务态度一般"
    }], [{
        val: "送餐快"
    }, {
        val: "味道棒"
    }, {
        val: "服务好"
    }, {
        val: "干净卫生"
    }], [{
        val: "送餐快"
    }, {
        val: "味道棒"
    }, {
        val: "服务好"
    }, {
        val: "干净卫生"
    }]];
    var c = function(e) {
        l = {
            service: {
                value: e.rate_info.service_rating || 0,
                text: e.rate_info.service_rating_text || ""
            },
            time: e.rate_info.time_spent || 0,
            orderItems: e.rate_info.rateable_order_items
        },
        t.basketRated = l.orderItems.filter(function(e) {
            return !!e.rating
        }),
        t.basketNotRate = l.orderItems.filter(function(e) {
            return !e.rating
        }),
        l.foodScope = {},
        l.orderItems.forEach(function(e) {
            l.foodScope[e.id] = angular.copy(e),
            l.foodScope[e.id].rated = !!e.rating
        }),
        n.query({
            action: "deliver_rating_times",
            user_id: a,
            order_id: s
        }, function(e) {
            t.speeds = e,
            t.speeds.unshift({
                name: "请选择",
                deliver_spent: 0
            })
        }),
        o.get({
            id: a,
            action: "restaurants",
            restaurant_id: e.restaurant_id
        }, function() {
            t.rstfavor_status = !0
        }, function() {
            t.rstfavor_status = !1
        }),
        t.order = e,
        t.restaurant = e.restaurant,
        t.rating = l
    }
      , u = function() {
        var e = {};
        return t.order.rate_info.is_mandatory_fields_rated || (e.service = {
            value: l.service.value,
            text: t.note || ""
        },
        e.time = l.time),
        e.order_items = Object.keys(l.foodScope).map(function(e) {
            return l.foodScope[e]
        }).filter(function(e) {
            return e.rating.rating > 0 && !e.rated
        }).map(function(e) {
            return {
                id: e.id,
                value: e.rating.rating,
                text: e.rating.rating_text || ""
            }
        }),
        e
    }
      , d = function(e) {
        n.save({
            version: "v2",
            user_id: a,
            order_id: s,
            action: "ratings"
        }, e, function(e) {
            i.swal({
                title: "",
                text: "评价成功，获得" + e.points + "积分",
                type: "success"
            }, function() {
                history.back(-1)
            })
        }, function(e) {
            i.error("", e.data.message)
        })
    }
    ;
    t.checkout = function() {
        var e = u();
        if (e.service) {
            var t = e.service.value
              , r = e.time;
            if (!t || !r) {
                var n = "请评价" + (t ? "" : "服务态度") + (r || t ? "" : "和") + (r ? "" : "送餐速度");
                return i.warning("", n),
                !1
            }
            d(e)
        } else
            e.order_items.length ? d(e) : i.swal({
                title: "",
                text: "评价成功，获得0积分",
                type: "success"
            })
    }
    ,
    t.outtip = function() {
        var e = u()
          , t = e.service && e.service.value || e.order_items.length;
        t ? i.swal({
            title: "温馨提示",
            text: "目前尚未完成评价哦，确定要离开吗？",
            customClass: "complaint-service-box",
            confirmButtonText: "确定",
            showCancelButton: !0,
            cancelButtonText: "取消"
        }, function(e) {
            e && history.back(-1)
        }) : history.back(-1)
    }
    ,
    t.rstfavor = function(e) {
        var r = e ? "delete" : "save";
        o[r]({
            id: a,
            action: "restaurants",
            restaurant_id: t.order.restaurant_id
        }, function() {
            t.rstfavor_status = !e
        })
    }
}
]),
angular.module("meleme").controller("tradeRefundOrderCtrl", ["$rootScope", "$scope", "$routeParams", "$location", "$q", "UserAgent", "OrderTrades", "SweetAlert", function(e, t, r, n, o, i, a, s) {
    t.orderId = r.id,
    t.refund = {
        type: "slow",
        intention: 1
    },
    t.setSection = function(e) {
        "string" == typeof e ? (t.refund.type = e,
        t.showReason = !1) : t.refund.intention = e
    }
    ,
    t.reasons = [{
        type: "slow",
        discrib: "送餐速度过慢"
    }, {
        type: "timeout",
        discrib: "超时未赔付"
    }, {
        type: "quality_problem",
        discrib: "外卖质量问题"
    }, {
        type: "other",
        discrib: "其它"
    }];
    var l;
    e.profile.$promise.then(function(e) {
        l = e.user_id
    }, function(e) {
        return "HTTP_UNAUTHORIZED" !== e.data.name ? o.reject(e.data) : void (l = "anonymous")
    }).then(function() {
        return a.get({
            user_id: l,
            order_id: t.orderId,
            "extras[]": ["order_status", "restaurant"]
        }, function(e) {
            t.resphone = e.restaurant.phone.split(" ")[0],
            t.status = e.order_status,
            t.status.is_premium = e.restaurant.is_premium
        }),
        o.promise
    }).then(function() {
        -1 !== n.url().indexOf("refundapply") && a.get({
            user_id: l,
            order_id: t.orderId,
            action: "refund_intentions"
        }, function(e) {
            t.refunddata = e
        })
    }),
    t.submitRefundIntention = function() {
        t.refund.reason ? a.post({
            user_id: l,
            order_id: t.orderId,
            action: "refunding",
            refunding_action: "apply",
            refund_intention: t.refund.intention,
            type: t.refund.type,
            reason: t.refund.reason
        }, function() {
            s.swal({
                title: "申请退单成功",
                type: "success",
                confirmButtonText: "确定"
            }, function() {
                n.url("/trade/" + t.orderId)
            })
        }, function(e) {
            s.swal({
                title: "出错啦",
                text: e.data.message,
                customClass: "complaint-service-box",
                confirmButtonText: "确定"
            })
        }) : s.swal({
            title: "出错啦",
            text: "请输入退单原因",
            customClass: "complaint-service-box",
            confirmButtonText: "确定"
        })
    }
    ,
    t.reverBool = function(e) {
        t[e] = !t[e]
    }
}
]),
angular.module("meleme").controller("tradeTimelineCtrl", ["$rootScope", "$scope", "$routeParams", "OrderTrades", function(e, t, r, n) {
    e.bodyWhite = 1,
    t.orderId = r.id,
    t.timelines = [];
    var o = function(e) {
        n.query(e).$promise.then(function(e) {
            t.timelines = e
        }, function(e) {
            setTimeout(function() {
                throw JSON.stringify(e)
            })
        })
    }
    ;
    e.profile.$promise.then(function(e) {
        var r = e.user_id
          , n = t.orderId;
        o({
            user_id: r,
            order_id: n,
            action: "timeline"
        })
    }),
    t.$on("$destroy", function() {
        e.bodyWhite = 0
    })
}
]),
angular.module("meleme").controller("tradeCtrl", ["$rootScope", "$scope", "$q", "OrderTrades", function(e, t, r, n) {
    t.orders = [],
    t.hasRecord = !0,
    t.isrecordLoading = !1,
    e.loading = !0,
    t.hasMoreData = !0;
    var o = 0;
    t.recordLoadMore = function() {
        !t.isrecordLoading && t.hasMoreData && (t.orders.length > 0 && (t.isrecordLoading = !0),
        e.profile.$promise.then(function(e) {
            t.user_id = e.user_id
        }, function(e) {
            return "HTTP_UNAUTHORIZED" !== e.data.name ? r.reject(e.data) : void (t.user_id = "anonymous")
        }).then(function() {
            n.query({
                user_id: t.user_id,
                limit: 10,
                offset: o,
                "extras[]": ["basket", "restaurant", "order_status"]
            }, function(e) {
                t.orders.push.apply(t.orders, e),
                t.hasRecord = t.orders.length ? !0 : !1,
                t.isrecordLoading = !1,
                e.length < 10 && (t.hasMoreData = !1),
                o += 10
            })
        })["finally"](function() {
            e.loading = !1
        }))
    }
    ,
    t.foodQuantity = function(e) {
        var t = 0;
        return e.basket.group[0].forEach(function(e) {
            t += e.quantity
        }),
        t
    }
}
]),
angular.module("meleme").controller("unbindMobileCtrl", ["$scope", "Page", "Mobile", "$rootScope", "VerifyCode", "$location", function(e, t, r, n, o, i) {
    e.isFromApp && (t.title = "换绑手机"),
    e.user = {
        origin: "***********",
        code: ""
    },
    n.profile.$promise.then(function() {
        return n.profile.is_mobile_valid ? void (e.user.origin = n.profile.mobile) : i.url("/profile/bind")
    }),
    e.formSubmit = function(t) {
        o.carry({
            way: "mobile",
            action: "validate",
            validate_token: e.user.validate_token,
            validate_code: t.code
        }).$promise.then(function(t) {
            e.user.mobile_token = t.mobile_token,
            e.countdown = !1,
            t.validate ? i.url("/profile/bind?mobile_token=" + t.mobile_token) : e.errorMsg = "验证码错误"
        }, function() {
            e.errorMsg = "验证码错误"
        })
    }
}
]),
angular.module("meleme").controller("wechatCtrl", ["WechatInfo", "$routeParams", "Page", function(e, t, r) {
    var n = new e;
    r.title = "饿了么微信授权";
    var o = function() {
        window.location.href = decodeURIComponent(t.eleme_redirect)
    }
    ;
    return n.isValid() ? o() : void n.load().then(o)
}
]),
angular.module("meleme").controller("wechatpublicCtrl", ["UserAgent", function(e) {
    location.href = e.isWechat ? "/home" : "/404",
    sessionStorage.setItem("isFromWechatpublic", e.isWechat)
}
]);
