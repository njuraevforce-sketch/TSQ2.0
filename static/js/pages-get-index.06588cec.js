(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-get-index"], {
    "2ec5": function(t, e, i) {
        "use strict";
        t.exports = function(t, e) {
            return e || (e = {}),
            t = t && t.__esModule ? t.default : t,
            "string" !== typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
            e.hash && (t += e.hash),
            /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t)
        }
    },
    3920: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("f598")
          , a = i.n(n);
        for (var s in n)
            ["default"].indexOf(s) < 0 && function(t) {
                i.d(e, t, (function() {
                    return n[t]
                }
                ))
            }(s);
        e["default"] = a.a
    },
    7491: function(t, e, i) {
        "use strict";
        i.d(e, "b", (function() {
            return a
        }
        )),
        i.d(e, "c", (function() {
            return s
        }
        )),
        i.d(e, "a", (function() {
            return n
        }
        ));
        var n = {
            uNavbar: i("94e1").default,
            uIcon: i("2c1a").default,
            uLoadingIcon: i("2f6a").default
        }
          , a = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("v-uni-view", [n("u-navbar", {
                attrs: {
                    autoBack: !1,
                    bgColor: "#4e7771",
                    leftIconColor: "#fff",
                    leftIcon: "",
                    titleStyle: {
                        color: "#FFF",
                        fontSize: "32rpx"
                    },
                    placeholder: !0,
                    title: t.$t("get.title")
                }
            }, [n("v-uni-view", {
                staticClass: "u-nav-slot padding-top-sm",
                attrs: {
                    slot: "left"
                },
                slot: "left"
            }, [n("v-uni-image", {
                staticStyle: {
                    width: "80rpx",
                    height: "80rpx",
                    "border-radius": "80rpx"
                },
                attrs: {
                    src: i("fc80"),
                    mode: ""
                }
            })], 1), n("v-uni-view", {
                staticClass: "u-nav-slot padding-top-sm",
                attrs: {
                    slot: "right"
                },
                slot: "right"
            }, [n("u-icon", {
                attrs: {
                    name: "order",
                    color: "#fff",
                    size: "50"
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.goPage("./record")
                    }
                }
            })], 1)], 1), n("v-uni-view", {
                staticClass: "topNull"
            }), n("v-uni-view", {
                staticClass: "conWrap"
            }, [n("v-uni-view", {
                staticClass: "card radius padding box-black"
            }, [n("v-uni-view", {
                staticClass: "flex align-center",
                staticStyle: {
                    "border-bottom": "1px solid #545c66",
                    "padding-bottom": "20rpx"
                }
            }, [n("u-icon", {
                attrs: {
                    name: "clock-fill",
                    color: "#fff"
                }
            }), n("v-uni-text", {
                staticClass: "clock-date-time"
            }, [t._v(t._s(t.nowTime))])], 1), n("v-uni-view", {
                staticClass: " padding-lr margin-top radius grid col-2 "
            }, [n("v-uni-view", {
                staticClass: "text-center pd",
                staticStyle: {
                    "border-right": "1px solid #545c66",
                    "border-bottom": "1px solid #545c66"
                }
            }, [n("v-uni-view", {
                staticClass: "text-bold text-xl text-white"
            }, [t._v(" " + t._s(t.numFormatter(t.info.taskInfo.money)) + " ")]), n("v-uni-view", {}, [t._v(" " + t._s(t.$t("get.card1")) + " ")])], 1), n("v-uni-view", {
                staticClass: "text-center pd",
                staticStyle: {
                    "border-bottom": "1px solid #545c66"
                }
            }, [n("v-uni-view", {
                staticClass: "text-bold text-xl text-white"
            }, [t._v(" " + t._s(t.numFormatter(t.info.taskInfo.task_earn)) + " ")]), n("v-uni-view", {}, [t._v(" " + t._s(t.$t("get.card2")) + " ")])], 1), n("v-uni-view", {
                staticClass: "text-center pd",
                staticStyle: {
                    "border-right": "1px solid #545c66"
                }
            }, [n("v-uni-view", {
                staticClass: "text-bold text-xl text-white"
            }, [t._v(" " + t._s(t.info.taskInfo.used_nums) + " / " + t._s(t.info.taskInfo.task_nums) + " ")]), n("v-uni-view", {}, [t._v(" " + t._s(t.$t("get.card3")) + " ")])], 1), n("v-uni-view", {
                staticClass: "text-center pd"
            }, [n("v-uni-view", {
                staticClass: "text-bold text-xl text-white"
            }, [t._v(" " + t._s(t.numFormatter(t.info.taskInfo.profit_money)) + " ")]), n("v-uni-view", {}, [t._v(" " + t._s(t.$t("get.card4")) + " ")])], 1)], 1)], 1), n("v-uni-view", {
                staticClass: "pro-btn box-black",
                class: 0 != t.step || 0 == t.info.task_status ? "pro-btn-none" : "",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.toBtnBefore.apply(void 0, arguments)
                    }
                }
            }, [n("v-uni-view", {
                staticClass: "fc"
            }, [0 != t.step ? n("u-loading-icon", {
                attrs: {
                    textSize: "24",
                    color: "#fff"
                }
            }) : t._e(), n("v-uni-view", {
                staticClass: "margin-left-xs"
            }, [t._v(" " + t._s(t.$t("get.btn")) + " ")])], 1)], 1), n("v-uni-view", {
                staticClass: "margin-top text-white text-bold"
            }, [t._v(" " + t._s(t.$t("get.liucheng")) + " ")]), n("v-uni-view", {
                staticClass: "margin-top text-gray"
            }, t._l(5, (function(e) {
                return t.step >= e ? n("v-uni-view", [t._v(" " + t._s(t.$t("get.step" + e)) + " ")]) : t._e()
            }
            )), 1), n("v-uni-view", {
                staticClass: "margin-top-xl text-white"
            }, [t._v(" " + t._s(t.$t("vip.level")) + " ")]), n("v-uni-swiper", {
                staticClass: "swiper margin-top-sm",
                attrs: {
                    vertical: !0,
                    autoplay: !1,
                    current: t.current,
                    "next-margin": "45rpx"
                },
                on: {
                    change: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.SwiperTab.apply(void 0, arguments)
                    }
                }
            }, t._l(t.vipList, (function(e) {
                return n("v-uni-swiper-item", [n("v-uni-view", {
                    staticClass: "swiper-itemWrap flex flex-direction justify-between padding  ",
                    style: {
                        background: "url(" + e.image + ") no-repeat",
                        backgroundSize: "100% 100%"
                    }
                }, [n("v-uni-view", {
                    staticClass: "text-bold text-xxl "
                }, [t._v(" " + t._s(e.title) + " ")]), n("v-uni-view", {
                    staticClass: "flex align-center"
                }, [t.userInfo.level >= e.level ? n("u-icon", {
                    attrs: {
                        name: "lock-opened-fill"
                    }
                }) : n("u-icon", {
                    attrs: {
                        name: "lock-fill"
                    }
                }), t._v(" " + t._s(t.userInfo.level >= e.level ? t.$t("vip.jiesuo") : t.$t("vip.jiesuo2")) + " ")], 1), n("v-uni-image", {
                    staticClass: "swiperPo",
                    attrs: {
                        src: e.icon,
                        mode: ""
                    }
                })], 1)], 1)
            }
            )), 1), n("v-uni-view", {
                staticClass: "vipInfoWrap"
            }, [n("v-uni-view", {
                staticClass: "radius  box-black vipInfo margin-top"
            }, [n("v-uni-view", {
                staticClass: "padding",
                staticStyle: {
                    "border-bottom": "1px solid #545c66"
                }
            }, [t._v(" VIP" + t._s(t.chooseVipInfo.level) + " " + t._s(t.$t("vip.tj")) + " ")]), n("v-uni-view", {
                staticClass: "padding radius"
            }, [n("v-uni-view", {
                staticClass: "flex align-center justify-between margin-bottom-xs"
            }, [n("v-uni-view", [t._v(" " + t._s(t.$t("vip.tj1")) + " ")]), n("v-uni-view", [t._v(" " + t._s(t.numFormatter(t.chooseVipInfo.withdraw_money)) + " / " + t._s(t.numFormatter(t.chooseVipInfo.level_money)) + " ")])], 1), n("v-uni-view", {
                staticClass: "flex align-center justify-between margin-bottom-xs"
            }, [n("v-uni-view", [t._v(" " + t._s(t.$t("vip.tj2")) + " ")]), n("v-uni-view", [t._v(" " + t._s(t.numFormatter(t.chooseVipInfo.invite_nums, 0, !1)) + " ")])], 1), n("v-uni-view", {
                staticClass: "flex align-center justify-between "
            }, [n("v-uni-view", [t._v(" " + t._s(t.$t("vip.tj3")) + " ")]), n("v-uni-view", [t._v(" " + t._s(t.numFormatter(t.chooseVipInfo.invite_level, 0, !1)) + " ")])], 1)], 1)], 1), n("v-uni-view", {
                staticClass: "radius vipInfo margin-top box-black"
            }, [n("v-uni-view", {
                staticClass: "padding",
                staticStyle: {
                    "border-bottom": "1px solid #545c66"
                }
            }, [t._v(" VIP" + t._s(t.chooseVipInfo.level) + " " + t._s(t.$t("vip.qy")) + " ")]), n("v-uni-view", {
                staticClass: "padding  radius"
            }, [n("v-uni-view", {
                staticClass: "flex align-center justify-between margin-bottom-xs"
            }, [n("v-uni-view", [t._v(" " + t._s(t.$t("vip.qy1")) + " ")]), n("v-uni-view", [t._v(" " + t._s(t.numFormatter(t.chooseVipInfo.min_earn_rate, 2, !1)) + "% - " + t._s(t.numFormatter(t.chooseVipInfo.max_earn_rate, 2, !1)) + "% ")])], 1), n("v-uni-view", {
                staticClass: "flex align-center justify-between margin-bottom-xs"
            }, [n("v-uni-view", [t._v(" " + t._s(t.$t("vip.qy2")) + " ")]), n("v-uni-view", [t._v(" " + t._s(t.numFormatter(t.chooseVipInfo.min_money)) + " ")])], 1), n("v-uni-view", {
                staticClass: "flex align-center justify-between margin-bottom-xs"
            }, [n("v-uni-view", [t._v(" " + t._s(t.$t("vip.qy3")) + " ")]), n("v-uni-view", [t._v(" " + t._s(t.numFormatter(t.chooseVipInfo.max_money)) + " ")])], 1), n("v-uni-view", {
                staticClass: "flex align-center justify-between "
            }, [n("v-uni-view", [t._v(" " + t._s(t.$t("vip.qy4")) + " ")]), n("v-uni-view", [t._v(" " + t._s(t.numFormatter(t.chooseVipInfo.times, 0, !1)) + " ")])], 1)], 1)], 1)], 1)], 1), n("pop", {
                attrs: {
                    obj: t.pop
                }
            }), n("tabbar", {
                attrs: {
                    thisPage: "t3"
                }
            })], 1)
        }
          , s = []
    },
    8412: function(t, e, i) {
        "use strict";
        var n = i("8cd5")
          , a = i.n(n);
        a.a
    },
    "8cd5": function(t, e, i) {
        var n = i("cdcd");
        n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        var a = i("967d").default;
        a("1d96b4ac", n, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    cdcd: function(t, e, i) {
        var n = i("c86c")
          , a = i("2ec5")
          , s = i("de1a")
          , o = i("fc80");
        e = n(!1);
        var r = a(s)
          , c = a(o);
        e.push([t.i, '@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-62fd4ce3]{min-height:100vh;background-image:linear-gradient(180deg,#4e7771,#4e7771,rgba(185,215,168,.7529411764705882))}body.?%PAGE?%[data-v-62fd4ce3]{background-image:linear-gradient(180deg,#4e7771,#4e7771,rgba(185,215,168,.7529411764705882))}.topNull[data-v-62fd4ce3]{height:%?300?%;background:#4e7771;border-radius:0 0 %?80?% %?80?%}.conWrap[data-v-62fd4ce3]{width:%?690?%;margin:%?-250?% auto 0}.conWrap .card .clock-date-time[data-v-62fd4ce3]{margin-left:%?10?%;font-size:%?32?%;color:#fff}.vipCard[data-v-62fd4ce3]{margin-top:%?30?%;padding:0 %?30?%;height:68px;background:url(' + r + ") no-repeat;background-size:100% 100%}.vipCard uni-image[data-v-62fd4ce3]{width:100px;height:100px;margin-bottom:%?30?%}.vipNav[data-v-62fd4ce3]{height:125px;background:url(" + c + ") no-repeat;background-size:100% 100%}.swiper-itemWrap[data-v-62fd4ce3]{height:%?251?%;position:relative}.swiper-itemWrap .swiperPo[data-v-62fd4ce3]{width:%?200?%;height:%?200?%;position:absolute;right:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pro-btn-none[data-v-62fd4ce3]{opacity:.5}.pd[data-v-62fd4ce3]{padding:%?30?%;box-sizing:border-box}", ""]),
        t.exports = e
    },
    d68f: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("7491")
          , a = i("3920");
        for (var s in a)
            ["default"].indexOf(s) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }
                ))
            }(s);
        i("8412");
        var o = i("828b")
          , r = Object(o["a"])(a["default"], n["b"], n["c"], !1, null, "62fd4ce3", null, !1, n["a"], void 0);
        e["default"] = r.exports
    },
    de1a: function(t, e, i) {
        t.exports = i.p + "static/img/vipbg.png"
    },
    f598: function(t, e, i) {
        "use strict";
        i("6a54"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        i("4085"),
        i("64aa"),
        i("fd3c");
        var n = {
            data: function() {
                return {
                    vipList: [],
                    current: 0,
                    nowVipInfo: {},
                    chooseVipInfo: {},
                    info: {
                        taskInfo: {
                            money: "0.00"
                        }
                    },
                    nowTime: "",
                    step: 0,
                    currentTime: 0
                }
            },
            onLoad: function() {
                globalThis.timer1 && clearInterval(globalThis.timer1)
            },
            onUnload: function() {
                globalThis.timer1 && (clearInterval(globalThis.timer1),
                globalThis.timer1 = null)
            },
            onShow: function() {
                this.$store.dispatch("actUserInfo"),
                this.getInfo(),
                this.getVipList()
            },
            methods: {
                getTime1: function() {
                    this.currentTime += 1e3;
                    var t = new Date(this.currentTime)
                      , e = t.getFullYear()
                      , i = t.getMonth() + 1
                      , n = t.getDate()
                      , a = t.getHours()
                      , s = t.getMinutes()
                      , o = t.getSeconds();
                    this.nowTime = this.dealDateNum(i) + "/" + this.dealDateNum(n) + "/" + this.dealDateNum(e) + " " + this.dealDateNum(a) + ":" + this.dealDateNum(s) + ":" + this.dealDateNum(o)
                },
                dealDateNum: function(t) {
                    return t >= 10 ? t : "0" + t
                },
                SwiperTab: function(t) {
                    this.current = Number(t.target.current),
                    this.chooseVipInfo = this.vipList[this.current]
                },
                getVipList: function() {
                    var t = this
                      , e = this;
                    e.load(!0),
                    e.$request.http({
                        url: "/api/user/userLevel",
                        method: "POST"
                    }).then((function(i) {
                        1 == i.code && (t.vipList = i.data,
                        i.data.map((function(e, i) {
                            t.userInfo.level == e.level && (t.nowVipInfo = e,
                            t.current = i,
                            t.chooseVipInfo = t.nowVipInfo)
                        }
                        ))),
                        e.load(!1)
                    }
                    ))
                },
                toBtnBefore: function() {
                    var t = this;
                    0 == this.step && 0 != this.info.task_status && (globalThis.getTimer && clearInterval(globalThis.getTimer),
                    this.step++,
                    globalThis.getTimer = setInterval((function() {
                        if (t.step++,
                        t.step >= 6)
                            return clearInterval(globalThis.getTimer),
                            void t.toBtn()
                    }
                    ), 1500))
                },
                toBtn: function() {
                    var t = this
                      , e = this;
                    if (e.cloading)
                        return 0;
                    e.load(!0),
                    this.$request.http({
                        url: "/api/task/startTask",
                        method: "POST"
                    }).then((function(i) {
                        e.load(!1),
                        t.step = 0,
                        1 == i.code ? (t.getInfo(),
                        e.showPop("success")) : e.showPop("error", i.msg)
                    }
                    ))
                },
                getInfo: function() {
                    var t = this
                      , e = this;
                    e.$request.http({
                        url: "/api/task/index",
                        method: "POST"
                    }).then((function(i) {
                        e.info = i.data;
                        var n = new Date(i.data.nowdate)
                          , a = n.getTime()
                          , s = new Date
                          , o = s.getTime();
                        t.currentTime = o - (o - a),
                        e.getTime1(),
                        globalThis.timer1 = setInterval(e.getTime1, 1e3)
                    }
                    ))
                },
                toPay: function() {
                    var t = this
                      , e = this;
                    if (e.cloading)
                        return 0;
                    e.load(!0),
                    this.$request.http({
                        url: "/api/order/payOrder",
                        method: "POST",
                        data: {
                            order_id: this.order_id,
                            comment: "",
                            star: ""
                        }
                    }).then((function(i) {
                        e.load(!1),
                        1 == i.code ? (e.showPop("success"),
                        e.isShow = !0,
                        t.$store.dispatch("actWalletInfo"),
                        t.getInfo(),
                        setTimeout((function() {
                            t.isShow = !1
                        }
                        ), 3e3)) : e.showPop("error", i.msg)
                    }
                    ))
                }
            }
        };
        e.default = n
    },
    fc80: function(t, e, i) {
        t.exports = i.p + "static/logo.png"
    }
}]);
