// Минимальная версия основного JS файла
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-index"], {
    "0164": function(t, e, i) {
        // CSS модуль
        var n = i("a5e0");
        n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        var a = i("967d").default;
        a("4f36ae36", n, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "1783": function(t, e, i) {
        "use strict";
        i("6a54"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        i("4085");
        var n = {
            data: function() {
                return {
                    isH5: !1,
                    siteInfo: {},
                    timeDate: (new Date).getTime(),
                    level: 1,
                    modalName: null,
                    nowVs: "1.0.1",
                    downLoadUrl: "#",
                    showFirst: !1,
                    infoList: "",
                    firstTag: 0,
                    bannerList: [],
                    notice: "",
                    playState: "play",
                    pop: {},
                    coinList: [],
                    inviteCode: "",
                    userMoney: "0.00",
                    userProfitMoney: "0.00"
                }
            },
            onLoad: function(t) {
                if (t.isMobile && 1 == t.isMobile && uni.setStorageSync("isMobile", !0),
                t.i)
                    return this.inviteCode = t.i,
                    void uni.navigateTo({
                        url: "../login/register?inviteCode=" + t.i
                    });
                this.getInfo()
            },
            onShow: function() {
                var t = this;
                uni.hideTabBar(),
                this.isH5 = !uni.getStorageSync("isMobile"),
                this.siteInfo = uni.getStorageSync("siteInfo"),
                "ios" == uni.getSystemInfoSync().platform ? this.downLoadUrl = this.siteInfo.ios : this.downLoadUrl = this.siteInfo.android,
                this.getCoinList(),
                globalThis.coinTimer = setInterval((function() {
                    t.getCoinList()
                }), 3000),
                this.playState = "play",
                ("" == this.inviteCode || uni.getStorageSync("token")) && (this.$store.dispatch("actUserInfo"),
                this.userInfo.id && (this.userMoney = this.userInfo.account.money,
                this.userProfitMoney = this.userInfo.account.profit_money))
            },
            onHide: function() {
                clearInterval(globalThis.coinTimer)
            },
            methods: {
                popupClose: function() {
                    this.showFirst = !1
                },
                getInfo: function() {
                    var t = this;
                    this.$request.http({
                        url: "/api/index/index",
                        method: "POST"
                    }).then((function(e) {
                        1 == e.code && (t.bannerList = e.data.banner,
                        e.data.scroll.content && (t.notice = e.data.scroll.content),
                        e.data.pop && (t.pop = e.data.pop,
                        t.showFirst = !0))
                    }))
                },
                downLoadNewVs: function() {
                    console.log(this.downLoadUrl),
                    window.open(this.downLoadUrl, "_blank")
                },
                getCoinList: function() {
                    var t = this;
                    this.$request.http({
                        url: "/api/index/currency",
                        method: "GET"
                    }).then((function(e) {
                        1 == e.code && (t.coinList = e.data)
                    }))
                },
                goPage: function(url) {
                    uni.navigateTo({ url: url });
                },
                numFormatter: function(num, decimals = 2) {
                    return parseFloat(num).toFixed(decimals);
                }
            }
        };
        e.default = n
    },
    "a5e0": function(t, e, i) {
        // CSS контент
        var n = i("c86c");
        e = n(!1),
        e.push([t.i, `
            uni-page-body[data-v-3f911184]{min-height:100vh;background-image:linear-gradient(180deg,#4e7771,#4e7771,rgba(185,215,168,.75))}
            .topWrap[data-v-3f911184]{border-radius:0 0 40px 40px}
            .items[data-v-3f911184]{padding:10px 0 10px 10px;width:100%;display:flex;align-items:center;justify-content:space-between;margin:10px 0}
            .items .items-flex1[data-v-3f911184]{flex:0 0 37%;max-width:37%;display:flex;align-items:center}
            .items .items-flex2[data-v-3f911184]{flex:0 0 43%;max-width:43%;text-align:right;padding-right:10px}
            .items .items-flex3[data-v-3f911184]{flex:0 0 20%;max-width:26%;display:flex;justify-content:end}
            .white[data-v-3f911184]{color:#fff}
            .dark[data-v-3f911184]{font-size:16px;color:#efc99d}
            .navList[data-v-3f911184]{background-color:rgba(0,0,0,.25);border-radius:5px;display:flex;flex-direction:column;padding:36px 12px}
        `, ""]),
        t.exports = e
    },
    "d663": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("ac7b")
          , a = i("754f");
        for (var o in a)
            ["default"].indexOf(o) < 0 && function(t) {
                i.d(e, t, (function() {
                    return a[t]
                }))
            }(o);
        i("7ead");
        var r = i("828b")
          , s = Object(r["a"])(a["default"], n["b"], n["c"], !1, null, "3f911184", null, !1, n["a"], void 0);
        e["default"] = s.exports
    }
}]);
