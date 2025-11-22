(function(e) {
    function a(a) {
        for (var i, r, d = a[0], s = a[1], l = a[2], u = 0, g = []; u < d.length; u++)
            r = d[u],
            Object.prototype.hasOwnProperty.call(t, r) && t[r] && g.push(t[r][0]),
            t[r] = 0;
        for (i in s)
            Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
        c && c(a);
        while (g.length)
            g.shift()();
        return o.push.apply(o, l || []),
        n()
    }
    function n() {
        for (var e, a = 0; a < o.length; a++) {
            for (var n = o[a], i = !0, d = 1; d < n.length; d++) {
                var s = n[d];
                0 !== t[s] && (i = !1)
            }
            i && (o.splice(a--, 1),
            e = r(r.s = n[0]))
        }
        return e
    }
    var i = {}
      , t = {
        index: 0
    }
      , o = [];
    function r(a) {
        if (i[a])
            return i[a].exports;
        var n = i[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(n.exports, n, n.exports, r),
        n.l = !0,
        n.exports
    }
    r.e = function(e) {
        var a = []
          , n = t[e];
        if (0 !== n)
            if (n)
                a.push(n[2]);
            else {
                var i = new Promise((function(a, i) {
                    n = t[e] = [a, i]
                }
                ));
                a.push(n[2] = i);
                var o, d = document.createElement("script");
                d.charset = "utf-8",
                d.timeout = 120,
                r.nc && d.setAttribute("nonce", r.nc),
                d.src = function(e) {
                    return r.p + "static/js/" + ({
                        "pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435": "pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435",
                        "pages-article-index": "pages-article-index",
                        "pages-fund-index": "pages-fund-index",
                        "pages-fund-record": "pages-fund-record",
                        "pages-fund-recordDetail": "pages-fund-recordDetail",
                        "pages-fund-task": "pages-fund-task",
                        "pages-fund-tip": "pages-fund-tip",
                        "pages-get-index~pages-index-index~pages-team-index": "pages-get-index~pages-index-index~pages-team-index",
                        "pages-get-index": "pages-get-index",
                        "pages-get-record": "pages-get-record",
                        "pages-index-download": "pages-index-download",
                        "pages-index-index~pages-mine-index~pages-recharge-bank~pages-team-index~pages-withdraw-index": "pages-index-index~pages-mine-index~pages-recharge-bank~pages-team-index~pages-withdraw-index",
                        "pages-index-index": "pages-index-index",
                        "pages-team-index~pages-withdraw-index": "pages-team-index~pages-withdraw-index",
                        "pages-team-index": "pages-team-index",
                        "pages-mine-index~pages-mine-qiandao": "pages-mine-index~pages-mine-qiandao",
                        "pages-mine-index": "pages-mine-index",
                        "pages-recharge-bank": "pages-recharge-bank",
                        "pages-withdraw-index": "pages-withdraw-index",
                        "pages-login-forget~pages-login-login~pages-login-register": "pages-login-forget~pages-login-login~pages-login-register",
                        "pages-login-forget": "pages-login-forget",
                        "pages-mine-bank": "pages-mine-bank",
                        "pages-mine-email": "pages-mine-email",
                        "pages-mine-freeze": "pages-mine-freeze",
                        "pages-mine-google": "pages-mine-google",
                        "pages-mine-help": "pages-mine-help",
                        "pages-mine-helpOne": "pages-mine-helpOne",
                        "pages-mine-qiandao": "pages-mine-qiandao",
                        "pages-mine-invite": "pages-mine-invite",
                        "pages-mine-lang": "pages-mine-lang",
                        "pages-mine-server": "pages-mine-server",
                        "pages-mine-service": "pages-mine-service",
                        "pages-notice-index": "pages-notice-index",
                        "pages-notice-record": "pages-notice-record",
                        "pages-recharge-chain": "pages-recharge-chain",
                        "pages-recharge-index": "pages-recharge-index",
                        "pages-recharge-pay": "pages-recharge-pay",
                        "pages-recharge-record": "pages-recharge-record",
                        "pages-recharge-recordDetail": "pages-recharge-recordDetail",
                        "pages-recharge-usdt": "pages-recharge-usdt",
                        "pages-safe-fundpwd": "pages-safe-fundpwd",
                        "pages-safe-pwd": "pages-safe-pwd",
                        "pages-team-record": "pages-team-record",
                        "pages-vip-vip": "pages-vip-vip",
                        "pages-withdraw-address": "pages-withdraw-address",
                        "pages-withdraw-editAddress": "pages-withdraw-editAddress",
                        "pages-withdraw-record": "pages-withdraw-record",
                        "pages-login-login": "pages-login-login",
                        "pages-login-register": "pages-login-register",
                        "pages-order-index": "pages-order-index",
                        "pages-order-orderDetail": "pages-order-orderDetail"
                    }[e] || e) + "." + {
                        "pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435": "c701d8a4",
                        "pages-article-index": "1a9e00f9",
                        "pages-fund-index": "f8d1a797",
                        "pages-fund-record": "03634fdb",
                        "pages-fund-recordDetail": "f74676a0",
                        "pages-fund-task": "7344bf5c",
                        "pages-fund-tip": "967edb31",
                        "pages-get-index~pages-index-index~pages-team-index": "a164314a",
                        "pages-get-index": "06588cec",
                        "pages-get-record": "c58293c8",
                        "pages-index-download": "d0490f5f",
                        "pages-index-index~pages-mine-index~pages-recharge-bank~pages-team-index~pages-withdraw-index": "eb318d02",
                        "pages-index-index": "b6f9aeea",
                        "pages-team-index~pages-withdraw-index": "58007753",
                        "pages-team-index": "2550f98c",
                        "pages-mine-index~pages-mine-qiandao": "acfd334d",
                        "pages-mine-index": "92771154",
                        "pages-recharge-bank": "bab73b24",
                        "pages-withdraw-index": "f804dfa0",
                        "pages-login-forget~pages-login-login~pages-login-register": "7f576bee",
                        "pages-login-forget": "1c159ad4",
                        "pages-mine-bank": "1528af3d",
                        "pages-mine-email": "9a49ead4",
                        "pages-mine-freeze": "2af545f6",
                        "pages-mine-google": "dfa4844b",
                        "pages-mine-help": "bf886f85",
                        "pages-mine-helpOne": "5046d755",
                        "pages-mine-qiandao": "6cc574a9",
                        "pages-mine-invite": "e67ce2af",
                        "pages-mine-lang": "a005efee",
                        "pages-mine-server": "3428ff15",
                        "pages-mine-service": "6a9c2d44",
                        "pages-notice-index": "7cc7e5b7",
                        "pages-notice-record": "e10c41f2",
                        "pages-recharge-chain": "7060e159",
                        "pages-recharge-index": "855ee56c",
                        "pages-recharge-pay": "d7ecde77",
                        "pages-recharge-record": "a2632682",
                        "pages-recharge-recordDetail": "d4645904",
                        "pages-recharge-usdt": "2a9d9aa4",
                        "pages-safe-fundpwd": "871b34cc",
                        "pages-safe-pwd": "59ef340d",
                        "pages-team-record": "9e4103f6",
                        "pages-vip-vip": "dfdbf23e",
                        "pages-withdraw-address": "583ab6a6",
                        "pages-withdraw-editAddress": "af489182",
                        "pages-withdraw-record": "c7230dac",
                        "pages-login-login": "2d5617d6",
                        "pages-login-register": "5c05844b",
                        "pages-order-index": "aefe99f6",
                        "pages-order-orderDetail": "2a537d36"
                    }[e] + ".js"
                }(e);
                var s = new Error;
                o = function(a) {
                    d.onerror = d.onload = null,
                    clearTimeout(l);
                    var n = t[e];
                    if (0 !== n) {
                        if (n) {
                            var i = a && ("load" === a.type ? "missing" : a.type)
                              , o = a && a.target && a.target.src;
                            s.message = "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")",
                            s.name = "ChunkLoadError",
                            s.type = i,
                            s.request = o,
                            n[1](s)
                        }
                        t[e] = void 0
                    }
                }
                ;
                var l = setTimeout((function() {
                    o({
                        type: "timeout",
                        target: d
                    })
                }
                ), 12e4);
                d.onerror = d.onload = o,
                document.head.appendChild(d)
            }
        return Promise.all(a)
    }
    ,
    r.m = e,
    r.c = i,
    r.d = function(e, a, n) {
        r.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, a) {
        if (1 & a && (e = r(e)),
        8 & a)
            return e;
        if (4 & a && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & a && "string" != typeof e)
            for (var i in e)
                r.d(n, i, function(a) {
                    return e[a]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return r.d(a, "a", a),
        a
    }
    ,
    r.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }
    ,
    r.p = "./",
    r.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var d = window["webpackJsonp"] = window["webpackJsonp"] || []
      , s = d.push.bind(d);
    d.push = a,
    d = d.slice();
    for (var l = 0; l < d.length; l++)
        a(d[l]);
    var c = s;
    o.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, a, n) {
        e.exports = n("cf63")
    },
    "0333": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "فروشگاه",
                balance: "تعادل",
                nodata: "داده های بیشتری وجود ندارد",
                logout: "خروج با موفقیت",
                confirm: "تایید کنید",
                cancel: "لغو کنید",
                submit: "ارسال کنید",
                recharge: "شارژ کردن",
                withdraw: "برداشت نقدی",
                desc: "نشان دادن",
                tip: "راهنمایی های مهربانانه",
                tipEmail: "برای محافظت بیشتر از امنیت حساب خود، لطفا آدرس ایمیل خود را وارد کنید.",
                tipEmail2: "اتصال آدرس ایمیل شما تضمین امنیتی دیگری را برای امنیت حساب شما فراهم می کند."
            },
            tabbar: {
                t1: "صفحه اول",
                t2: "تیم",
                t3: "دریافت کنید",
                t4: "دارایی ها",
                t5: "مال من"
            },
            register: {
                title: "ثبت نام کنید",
                username: "نام کاربری",
                username2: "لطفا نام کاربری را وارد کنید",
                tel: "شماره تلفن",
                tel2: "لطفا شماره تلفن همراه را وارد کنید",
                pwd: "رمز عبور",
                pwd2: "لطفا رمز عبور را وارد کنید",
                repwd: "رمز عبور را تایید کنید",
                repwd2: "لطفا رمز عبور تایید را وارد کنید",
                icode: "کد دعوت",
                icode2: "لطفا کد دعوت نامه را وارد کنید",
                has: "قبلاً یک حساب کاربری دارید",
                has2: "اکنون وارد شوید",
                email: "صندوق پستی",
                email2: "لطفا ایمیل خود را وارد کنید",
                fundPwd: "رمز پرداخت",
                fundPwd2: "لطفا رمز پرداخت را وارد کنید",
                yzm: "کد تایید",
                yzm2: "لطفا کد تایید را وارد کنید",
                send: "انتقال دهد",
                noyizhi: "ورودی رمز عبور متناقض است"
            },
            login: {
                tel: "شماره تلفن",
                tel2: "لطفا شماره تلفن همراه را وارد کنید",
                pwd: "رمز عبور",
                pwd2: "لطفا رمز عبور را وارد کنید",
                login: "وارد شوید",
                noc: "هنوز حسابی وجود ندارد",
                noc2: "همین الان ثبت نام کنید",
                forgetpwd: "رمز عبور را فراموش کنید",
                tip1: "سلام",
                tip2: "خوش آمدید به",
                lang: "ترجیح زبان"
            },
            forget: {
                title: "رمز عبور را فراموش کنید",
                getcode: "کد تایید را دریافت کنید",
                code: "کد تایید",
                code2: "لطفا کد تایید را وارد کنید",
                nav1: "تایید گوگل",
                nav2: "تایید صندوق پستی",
                pwd: "رمز عبور جدید",
                pwd2: "لطفا رمز عبور جدید را وارد کنید",
                repwd: "رمز عبور را تایید کنید",
                repwd2: "لطفا رمز عبور تایید را وارد کنید",
                email: "صندوق پستی ایمیل",
                email2: "لطفا آدرس ایمیل را وارد کنید"
            },
            index: {
                company: "مشخصات شرکت",
                rule: "حکومت کند",
                invite: "دوستان را دعوت کنید",
                hangqing: "نقل قول های زمان واقعی",
                friend: "شرکا",
                message: "پیام من",
                message1: "پیام سیستم",
                message2: "پیام ماموریت",
                message3: "پیام سایت"
            },
            invite: {
                title: "دوستان را دعوت کنید",
                tip1: "دوستان را برای بردن هدایای بزرگ دعوت کنید",
                tip2: "بگذار همه احساس خوشبختی کنند و چیزی به دست آورند",
                link: "لینک دعوت",
                code: "کد دعوت"
            },
            team: {
                title: "تیم من",
                data: "داده های تیم",
                pickerAll: "همه",
                picker1: "امروز",
                picker7: "7 روز گذشته",
                picker30: "30 روز گذشته",
                picker60: "60 روز گذشته",
                addPeopel: "افراد جدید",
                addEarn: "درآمد جدید",
                fenxi: "تجزیه و تحلیل درآمد",
                shouru1: "درآمد وظیفه",
                shouru2: "درآمد را کمی کنید",
                shouru3: "ترویج درآمد کمی",
                guimo: "اندازه تیم",
                youxiao: "تیم کار می کند",
                tdRecharge: "ارزش ذخیره شده تیم",
                tdCash: "کناره گیری تیم",
                lookAll: "همه را ببینید",
                card1: "کل کمیسیون",
                card2: "ارزش ذخیره شده انباشته",
                card3: "برداشت های تجمعی",
                userNum: "تعداد کاربران",
                yj: "درصد کمیسیون",
                ljEarn: "درآمد انباشته",
                level1: "سطح 1",
                level2: "سطح 2",
                level3: "سطح 3",
                list: "لیست تیم",
                taskNums: "زمان های کوانتیزاسیون"
            },
            fund: {
                title: "دارایی ها",
                title2: "معرفی دارایی",
                all: "کل دارایی ها",
                wait: "پاداش هایی که باید مطالبه شوند",
                card1: "وجوه قابل انعطاف",
                card2: "مبلغی که باید آزاد شود",
                card3: "هزینه آزمایشی",
                detail: "جزئیات دارایی",
                lookAll: "همه را ببینید",
                type1: "همه",
                type2: "درآمد",
                type3: "مخارج",
                task: "مرکز ماموریت",
                taskTip1: "کمی سازی ربات",
                taskTip2: "به راحتی ثروت را افزایش دهید",
                detailCard1: "مقدار",
                detailCard2: "نام",
                detailCard3: "نوع",
                detailCard4: "شماره سفارش",
                detailCard5: "زمان",
                back: "بازگشت"
            },
            task: {
                up: "ارتقا به {level}",
                up2: "به {level} ارتقا دهید و {money} دریافت خواهید کرد",
                done: "تکمیل شد",
                ing: "در حال انجام است",
                can: "دریافت کنید",
                inviteNum: "دعوت از {nums} نفر برای واریز {money}",
                inviteAward: "شما {جایزه} را دریافت خواهید کرد"
            },
            mine: {
                icode: "کد دعوت",
                goOut: "ترک کردن",
                jiesuo: "این سطح باز شده است",
                shengji: "اکنون ارتقا دهید",
                zichan: "کل دارایی ها",
                card1: "موجودی کیف پول",
                card2: "بودجه آزاد شود",
                card3: "درآمد انباشته",
                card4: "برداشت های تجمعی",
                card5: "اندازه تیم",
                changyong: "توابع رایج",
                email: "صندوق پستی ایمیل",
                pwd: "رمز ورود",
                fundPwd: "رمز تراکنش",
                other: "توابع دیگر",
                help: "مرکز راهنمایی",
                userTl: "شرایط کاربر",
                lang: "تغییر زبان",
                kefu: "خدمات مشتری",
                onlineServer: "خدمات مشتری آنلاین",
                qiandao: "وارد شوید",
                lx: "اتصال",
                qiandaoTip: "هر بار که وارد سیستم شوید {num} روز، {money} دریافت خواهید کرد",
                bank: "کارت بانکی",
                address: "آدرس برداشت",
                logoutTip: "آیا مطمئن هستید که می خواهید از سیستم خارج شوید؟"
            },
            recharge: {
                amount: "مقدار ارزش ذخیره شده",
                amount2: "لطفا مقدار ذخیره شده را وارد کنید",
                amountO: "سایر مقادیر ارزش ذخیره شده",
                methods: "روش ارزش ذخیره شده",
                btn: "بلافاصله شارژ کنید",
                record: "رکورد ارزش ذخیره شده",
                min: "حداقل مبلغ برداشت",
                desc: "نشان دادن",
                pingzheng: "گواهی ارزش ذخیره شده",
                pingzheng2: "لطفاً کوپن ارزش ذخیره شده را بارگذاری کنید",
                address: "آدرس ارزش ذخیره شده",
                status0: "پرداخت شود",
                status1: "تکمیل شد",
                status2: "شارژ مجدد انجام نشد",
                status3: "لغو شد",
                detailCard1: "روش ارزش ذخیره شده",
                detailCard2: "دولت",
                detailCard3: "شماره سفارش",
                detailCard4: "زمان",
                detailCard5: "مقدار",
                go: "لطفا به صحافی کارت بانکی مراجعه کنید",
                usdtTip1: "1. این آدرس فقط سپرده های پروتکل USDT TRC20 را می پذیرد لطفاً ارزهای دیگر یا پروتکل های دیگر را واریز نکنید.",
                usdtTip2: "2. لطفا آدرس شارژ برای هر شارژ را به دقت بررسی کنید مبلغ هر شارژ بر اساس مبلغ واقعی واریز شده محاسبه می شود.",
                usdtTip3: "3. مقدار ذخیره شده معمولاً در عرض چند دقیقه پس از تکمیل انتقال به دست می آید"
            },
            bank: {
                bank: "بانک",
                bank2: "لطفا بانک را وارد کنید",
                bankAccount: "حساب بانکی",
                bankAccount2: "لطفا حساب بانکی را وارد کنید",
                kaihuren: "دارنده حساب",
                kaihuren2: "لطفا صاحب حساب را وارد کنید",
                tel: "شماره تلفن",
                tel2: "لطفا شماره تلفن همراه را وارد کنید"
            },
            withdraw: {
                record: "سوابق برداشت",
                account: "برداشت حساب",
                account2: "لطفا یک حساب برداشت را انتخاب کنید",
                accountRed: "مدیریت حساب برداشت",
                amount: "برداشت مبلغ",
                amount2: "لطفا مبلغ برداشت را وارد کنید",
                keyong: "موجودی موجود",
                tip: "نکات مربوط به برداشت",
                pwd: "رمز پرداخت",
                pwd2: "لطفا رمز پرداخت را وارد کنید",
                min: "حداقل مبلغ برداشت",
                fee: "هزینه جابجایی",
                status0: "در انتظار بررسی",
                status1: "معامله انجام شد",
                status2: "پایین بیاورند",
                status3: "انتقال",
                status4: "معامله انجام شد"
            },
            account: {
                title: "مدیریت حساب",
                bind: "به صحافی بروید",
                bind2: "مقید شده است",
                address: "آدرس",
                address2: "لطفا آدرس را وارد کنید",
                btn: "اکنون ببندید",
                tip1: "لطفاً مطمئن شوید که حساب شما با نام واقعی شما باشد، برداشت با شکست مواجه می شود و حساب مسدود می شود.",
                tip2: "اگر نیاز به تغییر حساب خود دارید، لطفاً با خدمات مشتری تماس بگیرید"
            },
            get: {
                title: "کمیت کردن",
                card1: "مقدار قابل اندازه گیری امروز",
                card2: "درآمد امروز",
                card3: "زمان های قابل اندازه گیری امروز",
                card4: "کل درآمد",
                btn: "کمی سازی خودکار",
                liucheng: "فرآیند پانل را انجام دهید",
                step1: "1. جمع آوری داده ها در حال انجام است",
                step2: "2. استراتژی توسعه پایدار",
                step3: "3. بک تست در حال انجام است",
                step4: "4. اعدام",
                step5: "5. کمی سازی تکمیل شد",
                record: "سوابق کمی",
                record1: "مبلغ سرمایه گذاری",
                record2: "سود",
                record3: "پلت فرم خرید",
                record4: "پلت فرم فروش",
                record5: "قیمت خرید",
                record6: "قیمت فروش"
            },
            vip: {
                title: "مرکز اعضا",
                now: "سطح فعلی",
                level: "سطح VIP",
                jiesuo: "این سطح باز شده است",
                jiesuo2: "این سطح آنلاک نیست",
                tj: "شرایط ارتقا",
                tj1: "مقدار موثر",
                tj2: "تعداد افراد ارتقا یافته در یک نسل",
                tj3: "ارتقاء سطح کاربر",
                qy: "حقوق و منافع",
                qy1: "درصد درآمد",
                qy2: "حداقل مقدار کمی",
                qy3: "حداکثر مقدار تعیین شده",
                qy4: "تعداد مقادیر در روز"
            },
            safe: {
                title: "مدیریت امنیت",
                login_pwd: "رمز ورود",
                fund_pwd: "رمز پرداخت",
                safe: "ایمنی",
                edit_pwd: "رمز ورود را تغییر دهید",
                edit_fundpwd: "رمز پرداخت را تغییر دهید",
                phone: "شماره تلفن",
                getcode: "کد تایید را دریافت کنید",
                code: "کد تایید",
                icode: "لطفا کد تایید را وارد کنید",
                newpwd: "رمز عبور جدید",
                inewpwd: "رمز عبور جدید",
                renewpwd: "رمز عبور جدید را تایید کنید",
                renewpwd2: "لطفا رمز عبور جدید را وارد کنید",
                oldpwd: "رمز اصلی",
                oldpwd2: "رمز اصلی را وارد کنید",
                error: "لطفا داده ها را وارد کنید",
                hold: "لطفاً تأیید کنید که رمز عبور جدید سازگار است"
            },
            keyboard: {
                ifundPwd: "رمز پرداخت را وارد کنید",
                verifying: "رمز پرداخت را بررسی کنید"
            },
            google: {
                step1: "اولین قدم",
                step2: "مرحله 2",
                step3: "مرحله 3",
                tip1: "لطفاً Google Authenticator را از فروشگاه برنامه تلفن همراه دانلود کنید",
                tip2: "کد QR را اسکن کنید تا از طریق Google Authenticator متصل شود",
                code: "لطفاً کد تأیید Google را وارد کنید",
                tip3: "Binding Google Authenticator لایه دیگری از امنیت را برای امنیت حساب شما فراهم می کند.",
                renzheng: "گواهی شده"
            }
        }
    },
    "039d": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "儲存",
                balance: "餘額",
                nodata: "沒有更多數據",
                logout: "退出成功",
                confirm: "確認",
                cancel: "取消",
                submit: "提交",
                recharge: "儲值",
                withdraw: "提現",
                desc: "說明",
                tip: "溫馨提示",
                tipEmail: "為了進一步保護帳戶安全，請綁定您的電子郵件信箱。",
                tipEmail2: "綁定電子郵箱，為您的帳戶安全提供了另一種安全保證"
            },
            tabbar: {
                t1: "首頁",
                t2: "團隊",
                t3: "獲取",
                t4: "資產",
                t5: "我的"
            },
            register: {
                title: "註冊",
                username: "用戶名",
                username2: "請輸入用戶名",
                tel: "手機號",
                tel2: "請輸入手機號",
                pwd: "密碼",
                pwd2: "請輸入密碼",
                repwd: "確認密碼",
                repwd2: "請輸入確認密碼",
                icode: "邀請碼",
                icode2: "請輸入邀請碼",
                has: "已有帳號",
                has2: "立即登入",
                email: "信箱",
                email2: "請輸入信​​箱",
                fundPwd: "支付密碼",
                fundPwd2: "請輸入支付密碼",
                yzm: "驗證碼",
                yzm2: "請輸入驗證碼",
                send: "傳送",
                noyizhi: "密碼輸入不一致"
            },
            login: {
                tel: "手機號",
                tel2: "請輸入手機號",
                pwd: "密碼",
                pwd2: "請輸入密碼",
                login: "登入",
                noc: "還沒有帳號",
                noc2: "立即註冊",
                forgetpwd: "忘記密碼",
                tip1: "你好",
                tip2: "歡迎來到",
                lang: "語言偏好"
            },
            forget: {
                title: "忘記密碼",
                getcode: "取得驗證碼",
                code: "驗證碼",
                code2: "請輸入驗證碼",
                nav1: "谷歌驗證",
                nav2: "信箱驗證",
                pwd: "新密碼",
                pwd2: "請輸入新密碼",
                repwd: "確認密碼",
                repwd2: "請輸入確認密碼",
                email: "電子郵件信箱",
                email2: "請輸入電子郵件信箱"
            },
            index: {
                company: "公司簡介",
                rule: "規則",
                invite: "邀請朋友",
                hangqing: "即時行情",
                friend: "合作夥伴",
                message: "我的消息",
                message1: "系統訊息",
                message2: "任務訊息",
                message3: "站內信"
            },
            invite: {
                title: "邀請好友",
                tip1: "邀請好友贏大禮",
                tip2: "讓每個人都感到快樂,有收穫",
                link: "邀請連結",
                code: "邀請碼"
            },
            team: {
                title: "我的團隊",
                data: "團隊數據",
                pickerAll: "全部",
                picker1: "今天",
                picker7: "近7天",
                picker30: "近30天",
                picker60: "近60天",
                addPeopel: "新增人數",
                addEarn: "新增收益",
                fenxi: "收入分析",
                shouru1: "任務收入",
                shouru2: "量化收入",
                shouru3: "推廣量化收入",
                guimo: "團隊規模",
                youxiao: "團隊有效",
                tdRecharge: "團隊儲值",
                tdCash: "團隊提現",
                lookAll: "看全部",
                card1: "總佣金",
                card2: "累計儲值",
                card3: "累計提現",
                userNum: "使用者數量",
                yj: "佣金百分比",
                ljEarn: "累計收益",
                level1: "1級",
                level2: "2級",
                level3: "3級",
                list: "團隊列表",
                taskNums: "量化次數"
            },
            fund: {
                title: "資產",
                title2: "資產介紹",
                all: "總資產",
                wait: "待領取獎勵",
                card1: "靈活資金",
                card2: "待釋放金額",
                card3: "體驗金",
                detail: "資產明細",
                lookAll: "看全部",
                type1: "全部",
                type2: "收入",
                type3: "支出",
                task: "任務中心",
                taskTip1: "機器人量化",
                taskTip2: "輕鬆實現財富增值",
                detailCard1: "金額",
                detailCard2: "名稱",
                detailCard3: "類型",
                detailCard4: "訂單編號",
                detailCard5: "時間",
                back: "返回"
            },
            task: {
                up: "升級至{level}",
                up2: "升級至{level}將獲得{money}",
                done: "已完成",
                ing: "進行中",
                can: "領取",
                inviteNum: "邀請 {nums} 人充值 {money}",
                inviteAward: "您將獲得 {award} 獎勵"
            },
            mine: {
                icode: "邀請碼",
                goOut: "退出",
                jiesuo: "已解鎖該等級",
                shengji: "立即升級",
                zichan: "資產總計",
                card1: "錢包餘額",
                card2: "待釋放資金",
                card3: "累計收益",
                card4: "累計提現",
                card5: "團隊人數",
                changyong: "常用功能",
                email: "電子郵件信箱",
                pwd: "登入密碼",
                fundPwd: "交易密碼",
                other: "其他功能",
                help: "幫助中心",
                userTl: "用戶條例",
                lang: "切換語言",
                kefu: "客服",
                onlineServer: "網路客服",
                qiandao: "簽到",
                lx: "聯繫",
                qiandaoTip: "每簽到{num}天,獲得{money}",
                bank: "金融卡",
                address: "提款地址",
                logoutTip: "確定登出登入嗎？"
            },
            recharge: {
                amount: "儲值金額",
                amount2: "請輸入儲值金額",
                amountO: "其他儲值金額",
                methods: "儲值方式",
                btn: "立即儲值",
                record: "儲值記錄",
                min: "最小提現金額",
                desc: "說明",
                pingzheng: "儲值憑證",
                pingzheng2: "請上傳儲值憑證",
                address: "儲值地址",
                status0: "待支付",
                status1: "已完成",
                status2: "儲值失敗",
                status3: "已取消",
                detailCard1: "儲值方式",
                detailCard2: "狀態",
                detailCard3: "訂單編號",
                detailCard4: "時間",
                detailCard5: "金額",
                go: "請前往綁定銀行卡",
                usdtTip1: "1.此位址只接受USDT TRC20協議充值，請勿存入其他貨幣或其他協議",
                usdtTip2: "2.每次儲值請先仔細核對儲值地址，每筆儲值金額依實際匯入金額計算",
                usdtTip3: "3.儲值通常在完成轉移後幾分鐘內達到"
            },
            bank: {
                bank: "銀行",
                bank2: "請輸入銀行",
                bankAccount: "銀行帳戶",
                bankAccount2: "請輸入銀行帳戶",
                kaihuren: "開戶人",
                kaihuren2: "請輸入開戶人",
                tel: "手機號",
                tel2: "請輸入手機號"
            },
            withdraw: {
                record: "提現記錄",
                account: "提現帳戶",
                account2: "請選擇提現帳戶",
                accountRed: "提現帳戶管理",
                amount: "提現金額",
                amount2: "請輸入提現金額",
                keyong: "可用餘額",
                tip: "提現注意事項",
                pwd: "支付密碼",
                pwd2: "請輸入支付密碼",
                min: "最低提現金額",
                fee: "手續費",
                status0: "待審核",
                status1: "交易完成",
                status2: "駁回",
                status3: "轉帳中",
                status4: "交易完成"
            },
            account: {
                title: "帳戶管理",
                bind: "去綁定",
                bind2: "已綁定",
                address: "地址",
                address2: "請輸入地址",
                btn: "立即綁定",
                tip1: "請確保您的帳戶為本人實名帳戶，非本人實名帳戶，會導致提領失敗且帳號被凍結",
                tip2: "若您需要修改您的帳戶，請聯絡客服"
            },
            get: {
                title: "量化",
                card1: "今日可量化金額",
                card2: "今日收益",
                card3: "今日可量化次數",
                card4: "總收益",
                btn: "自動量化",
                liucheng: "進行面板流程",
                step1: "1. 数据收集正在进行中",
                step2: "2. 可持续发展战略",
                step3: "3. 回测进行中",
                step4: "4. 执行",
                step5: "5. 量化完成",
                record: "量化记录",
                record1: "投資金額",
                record2: "利潤",
                record3: "買入平台",
                record4: "賣出平台",
                record5: "買入價格",
                record6: "賣出價格"
            },
            vip: {
                title: "會員中心",
                now: "目前等級",
                level: "VIP等級",
                jiesuo: "已解鎖該等級",
                jiesuo2: "未解鎖該等級",
                tj: "升級條件",
                tj1: "有效金額",
                tj2: "一代推廣人數",
                tj3: "推廣使用者等級",
                qy: "權益",
                qy1: "收益百分比",
                qy2: "最低量化金額",
                qy3: "最高量化金額",
                qy4: "每日量化次數"
            },
            safe: {
                title: "安全管理",
                login_pwd: "登入密碼",
                fund_pwd: "支付密碼",
                safe: "安全",
                edit_pwd: "修改登入密碼",
                edit_fundpwd: "修改支付密碼",
                phone: "電話號碼",
                getcode: "取得驗證碼",
                code: "驗證碼",
                icode: "請輸入驗證碼",
                newpwd: "新密碼",
                inewpwd: "新密碼",
                renewpwd: "確認新密碼",
                renewpwd2: "請輸入新密碼",
                oldpwd: "原始密碼",
                oldpwd2: "輸入原始密碼",
                error: "請輸入數據",
                hold: "請確認新密碼一致"
            },
            keyboard: {
                ifundPwd: "輸入付款密碼",
                verifying: "檢驗支付密碼"
            },
            google: {
                step1: "第一步",
                step2: "第二步",
                step3: "第三步",
                tip1: "請在手機應用程式商店下載 Google Authenticator",
                tip2: "透過Google身份驗證器，掃描二維碼綁定",
                code: "請輸入谷歌驗證碼",
                tip3: "綁定Google Authenticator，為您的帳戶安全提供了另一層安全保證",
                renzheng: "已認證"
            }
        }
    },
    "03e2": function(e, a, n) {
        var i = n("c86c");
        a = i(!1),
        a.push([e.i, '@charset "UTF-8";\n/*\n  ColorUi for uniApp  v2.1.6 | by 文晓港 2019-05-31 10:44:24\n  仅供学习交流，如作它用所承受的法律责任一概与作者无关  \n  \n  *使用ColorUi开发扩展与插件时，请注明基于ColorUi开发 \n  \n  （QQ交流群：240787041）\n*/\n/* ==================\n        初始化\n ==================== */body{background-color:#f1f1f1;font-size:%?28?%;color:#fff;font-family:Helvetica Neue,Helvetica,sans-serif}uni-view,\nuni-scroll-view,\nuni-swiper,\nuni-button,\nuni-input,\nuni-textarea,\nuni-label,\nuni-navigator,\nuni-image{box-sizing:border-box}.round{border-radius:%?5000?%}.radius{border-radius:%?18?%}.radius{border:%?20?%}\n/* ==================\n          图片\n ==================== */uni-image{max-width:100%;display:inline-block;position:relative;z-index:0}uni-image.loading::before{content:"";background-color:#f5f5f5;display:block;position:absolute;width:100%;height:100%;z-index:-2}uni-image.loading::after{content:"\\e7f1";font-family:cuIcon;position:absolute;top:0;left:0;width:%?32?%;height:%?32?%;line-height:%?32?%;right:0;bottom:0;z-index:-1;font-size:%?32?%;margin:auto;color:#ccc;-webkit-animation:cuIcon-spin 2s infinite linear;animation:cuIcon-spin 2s infinite linear;display:block}.response{width:100%}\n/* ==================\n         开关\n ==================== */uni-switch,\nuni-checkbox,\nuni-radio{position:relative}uni-switch::after,\nuni-switch::before{font-family:cuIcon;content:"\\e645";position:absolute;color:#fff!important;top:0;left:%?0?%;font-size:%?26?%;line-height:26px;width:50%;text-align:center;pointer-events:none;-webkit-transform:scale(0);transform:scale(0);transition:all .3s ease-in-out 0s;z-index:9;bottom:0;height:26px;margin:auto}uni-switch::before{content:"\\e646";right:0;-webkit-transform:scale(1);transform:scale(1);left:auto}uni-switch[checked]::after,\nuni-switch.checked::after{-webkit-transform:scale(1);transform:scale(1)}uni-switch[checked]::before,\nuni-switch.checked::before{-webkit-transform:scale(0);transform:scale(0)}\nuni-radio::before,\nuni-checkbox::before{font-family:cuIcon;content:"\\e645";position:absolute;color:#fff!important;top:50%;margin-top:-8px;right:5px;font-size:%?32?%;line-height:16px;pointer-events:none;-webkit-transform:scale(1);transform:scale(1);transition:all .3s ease-in-out 0s;z-index:9}uni-radio .wx-radio-input,\nuni-checkbox .wx-checkbox-input,\nuni-radio .uni-radio-input,\nuni-checkbox .uni-checkbox-input{margin:0;width:24px;height:24px}uni-checkbox.round .wx-checkbox-input,\nuni-checkbox.round .uni-checkbox-input{border-radius:%?100?%}\nuni-switch[checked]::before{-webkit-transform:scale(0);transform:scale(0)}uni-switch .wx-switch-input,\nuni-switch .uni-switch-input{border:none;padding:0 24px;width:48px;height:26px;margin:0;border-radius:%?100?%}uni-switch .wx-switch-input:not([class*="bg-"]),\nuni-switch .uni-switch-input:not([class*="bg-"]){background:#8799a3!important}uni-switch .wx-switch-input::after,\nuni-switch .uni-switch-input::after{margin:auto;width:26px;height:26px;border-radius:%?100?%;left:%?0?%;top:%?0?%;bottom:%?0?%;position:absolute;-webkit-transform:scale(.9);transform:scale(.9);transition:all .1s ease-in-out 0s}uni-switch .wx-switch-input.wx-switch-input-checked::after,\nuni-switch .uni-switch-input.uni-switch-input-checked::after{margin:auto;left:22px;box-shadow:none;-webkit-transform:scale(.9);transform:scale(.9)}uni-radio-group{display:inline-block}uni-switch.radius .wx-switch-input::after,\nuni-switch.radius .wx-switch-input,\nuni-switch.radius .wx-switch-input::before,\nuni-switch.radius .uni-switch-input::after,\nuni-switch.radius .uni-switch-input,\nuni-switch.radius .uni-switch-input::before{border-radius:%?10?%}uni-switch .wx-switch-input::before,\nuni-radio.radio::before,\nuni-checkbox .wx-checkbox-input::before,\nuni-radio .wx-radio-input::before,\nuni-switch .uni-switch-input::before,\nuni-radio.radio::before,\nuni-checkbox .uni-checkbox-input::before,\nuni-radio .uni-radio-input::before{display:none}uni-radio.radio[checked]::after,\nuni-radio.radio .uni-radio-input-checked::after{content:"";background-color:initial;display:block;position:absolute;width:8px;height:8px;z-index:999;top:%?0?%;left:%?0?%;right:0;bottom:0;margin:auto;border-radius:%?200?%;\nborder:7px solid #fff!important;\n}.switch-sex::after{content:"\\e71c"}.switch-sex::before{content:"\\e71a"}.switch-sex .wx-switch-input,\n.switch-sex .uni-switch-input{background:#e54d42!important;border-color:#e54d42!important}.switch-sex[checked] .wx-switch-input,\n.switch-sex.checked .uni-switch-input{background:#0081ff!important;border-color:#0081ff!important}uni-switch.red[checked] .wx-switch-input.wx-switch-input-checked,\nuni-checkbox.red[checked] .wx-checkbox-input,\nuni-radio.red[checked] .wx-radio-input,\nuni-switch.red.checked .uni-switch-input.uni-switch-input-checked,\nuni-checkbox.red.checked .uni-checkbox-input,\nuni-radio.red.checked .uni-radio-input{background-color:#e54d42!important;border-color:#e54d42!important;color:#fff!important}uni-switch.orange[checked] .wx-switch-input,\nuni-checkbox.orange[checked] .wx-checkbox-input,\nuni-radio.orange[checked] .wx-radio-input,\nuni-switch.orange.checked .uni-switch-input,\nuni-checkbox.orange.checked .uni-checkbox-input,\nuni-radio.orange.checked .uni-radio-input{background-color:#f37b1d!important;border-color:#f37b1d!important;color:#fff!important}uni-switch.yellow[checked] .wx-switch-input,\nuni-checkbox.yellow[checked] .wx-checkbox-input,\nuni-radio.yellow[checked] .wx-radio-input,\nuni-switch.yellow.checked .uni-switch-input,\nuni-checkbox.yellow.checked .uni-checkbox-input,\nuni-radio.yellow.checked .uni-radio-input{background-color:#fbbd08!important;border-color:#fbbd08!important;color:#fff!important}uni-switch.olive[checked] .wx-switch-input,\nuni-checkbox.olive[checked] .wx-checkbox-input,\nuni-radio.olive[checked] .wx-radio-input,\nuni-switch.olive.checked .uni-switch-input,\nuni-checkbox.olive.checked .uni-checkbox-input,\nuni-radio.olive.checked .uni-radio-input{background-color:#8dc63f!important;border-color:#8dc63f!important;color:#fff!important}uni-switch.green[checked] .wx-switch-input,\nuni-switch[checked] .wx-switch-input,\nuni-checkbox.green[checked] .wx-checkbox-input,\nuni-checkbox[checked] .wx-checkbox-input,\nuni-radio.green[checked] .wx-radio-input,\nuni-radio[checked] .wx-radio-input,\nuni-switch.green.checked .uni-switch-input,\nuni-switch.checked .uni-switch-input,\nuni-checkbox.green.checked .uni-checkbox-input,\nuni-checkbox.checked .uni-checkbox-input,\nuni-radio.green.checked .uni-radio-input,\nuni-radio.checked .uni-radio-input{background-color:#39b54a!important;border-color:#39b54a!important;color:#fff!important;border-color:#39b54a!important}uni-switch.cyan[checked] .wx-switch-input,\nuni-checkbox.cyan[checked] .wx-checkbox-input,\nuni-radio.cyan[checked] .wx-radio-input,\nuni-switch.cyan.checked .uni-switch-input,\nuni-checkbox.cyan.checked .uni-checkbox-input,\nuni-radio.cyan.checked .uni-radio-input{background-color:#1cbbb4!important;border-color:#1cbbb4!important;color:#fff!important}uni-switch.blue[checked] .wx-switch-input,\nuni-checkbox.blue[checked] .wx-checkbox-input,\nuni-radio.blue[checked] .wx-radio-input,\nuni-switch.blue.checked .uni-switch-input,\nuni-checkbox.blue.checked .uni-checkbox-input,\nuni-radio.blue.checked .uni-radio-input{background-color:#0081ff!important;border-color:#0081ff!important;color:#fff!important}uni-switch.purple[checked] .wx-switch-input,\nuni-checkbox.purple[checked] .wx-checkbox-input,\nuni-radio.purple[checked] .wx-radio-input,\nuni-switch.purple.checked .uni-switch-input,\nuni-checkbox.purple.checked .uni-checkbox-input,\nuni-radio.purple.checked .uni-radio-input{background-color:#6739b6!important;border-color:#6739b6!important;color:#fff!important}uni-switch.mauve[checked] .wx-switch-input,\nuni-checkbox.mauve[checked] .wx-checkbox-input,\nuni-radio.mauve[checked] .wx-radio-input,\nuni-switch.mauve.checked .uni-switch-input,\nuni-checkbox.mauve.checked .uni-checkbox-input,\nuni-radio.mauve.checked .uni-radio-input{background-color:#9c26b0!important;border-color:#9c26b0!important;color:#fff!important}uni-switch.pink[checked] .wx-switch-input,\nuni-checkbox.pink[checked] .wx-checkbox-input,\nuni-radio.pink[checked] .wx-radio-input,\nuni-switch.pink.checked .uni-switch-input,\nuni-checkbox.pink.checked .uni-checkbox-input,\nuni-radio.pink.checked .uni-radio-input{background-color:#e03997!important;border-color:#e03997!important;color:#fff!important}uni-switch.brown[checked] .wx-switch-input,\nuni-checkbox.brown[checked] .wx-checkbox-input,\nuni-radio.brown[checked] .wx-radio-input,\nuni-switch.brown.checked .uni-switch-input,\nuni-checkbox.brown.checked .uni-checkbox-input,\nuni-radio.brown.checked .uni-radio-input{background-color:#a5673f!important;border-color:#a5673f!important;color:#fff!important}uni-switch.grey[checked] .wx-switch-input,\nuni-checkbox.grey[checked] .wx-checkbox-input,\nuni-radio.grey[checked] .wx-radio-input,\nuni-switch.grey.checked .uni-switch-input,\nuni-checkbox.grey.checked .uni-checkbox-input,\nuni-radio.grey.checked .uni-radio-input{background-color:#8799a3!important;border-color:#8799a3!important;color:#fff!important}uni-switch.gray[checked] .wx-switch-input,\nuni-checkbox.gray[checked] .wx-checkbox-input,\nuni-radio.gray[checked] .wx-radio-input,\nuni-switch.gray.checked .uni-switch-input,\nuni-checkbox.gray.checked .uni-checkbox-input,\nuni-radio.gray.checked .uni-radio-input{background-color:#f0f0f0!important;border-color:#f0f0f0!important;color:#fff!important}uni-switch.black[checked] .wx-switch-input,\nuni-checkbox.black[checked] .wx-checkbox-input,\nuni-radio.black[checked] .wx-radio-input,\nuni-switch.black.checked .uni-switch-input,\nuni-checkbox.black.checked .uni-checkbox-input,\nuni-radio.black.checked .uni-radio-input{background-color:#fff!important;border-color:#fff!important;color:#fff!important}uni-switch.white[checked] .wx-switch-input,\nuni-checkbox.white[checked] .wx-checkbox-input,\nuni-radio.white[checked] .wx-radio-input,\nuni-switch.white.checked .uni-switch-input,\nuni-checkbox.white.checked .uni-checkbox-input,\nuni-radio.white.checked .uni-radio-input{background-color:#fff!important;border-color:#fff!important;color:#fff!important}\n/* ==================\n          边框\n ==================== */\n/* -- 实线 -- */.solid,\n.solid-top,\n.solid-right,\n.solid-bottom,\n.solid-left,\n.solids,\n.solids-top,\n.solids-right,\n.solids-bottom,\n.solids-left,\n.dashed,\n.dashed-top,\n.dashed-right,\n.dashed-bottom,\n.dashed-left{position:relative}.solid::after,\n.solid-top::after,\n.solid-right::after,\n.solid-bottom::after,\n.solid-left::after,\n.solids::after,\n.solids-top::after,\n.solids-right::after,\n.solids-bottom::after,\n.solids-left::after,\n.dashed::after,\n.dashed-top::after,\n.dashed-right::after,\n.dashed-bottom::after,\n.dashed-left::after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border-radius:inherit;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box}.solid::after{border:%?1?% solid rgba(0,0,0,.1)}.solid-top::after{border-top:%?1?% solid rgba(0,0,0,.1)}.solid-right::after{border-right:%?1?% solid rgba(0,0,0,.1)}.solid-bottom::after{border-bottom:%?1?% solid rgba(0,0,0,.1)}.solid-left::after{border-left:%?1?% solid rgba(0,0,0,.1)}.solids::after{border:%?8?% solid #eee}.solids-top::after{border-top:%?8?% solid #eee}.solids-right::after{border-right:%?8?% solid #eee}.solids-bottom::after{border-bottom:%?8?% solid #eee}.solids-left::after{border-left:%?8?% solid #eee}\n/* -- 虚线 -- */.dashed::after{border:%?1?% dashed #ddd}.dashed-top::after{border-top:%?1?% dashed #ddd}.dashed-right::after{border-right:%?1?% dashed #ddd}.dashed-bottom::after{border-bottom:%?1?% dashed #ddd}.dashed-left::after{border-left:%?1?% dashed #ddd}\n/* -- 阴影 -- */.shadow[class*="white"]{--ShadowSize:0 %?1?% %?6?%}.shadow-lg{--ShadowSize:%?0?% %?40?% %?100?% %?0?%}.shadow-warp{position:relative;box-shadow:0 0 %?10?% rgba(0,0,0,.1)}.shadow-warp:before,\n.shadow-warp:after{position:absolute;content:"";top:%?20?%;bottom:%?30?%;left:%?20?%;width:50%;box-shadow:0 %?30?% %?20?% rgba(0,0,0,.2);-webkit-transform:rotate(-3deg);transform:rotate(-3deg);z-index:-1}.shadow-warp:after{right:%?20?%;left:auto;-webkit-transform:rotate(3deg);transform:rotate(3deg)}.shadow-blur{position:relative}.shadow-blur::before{content:"";display:block;background:inherit;-webkit-filter:blur(%?10?%);filter:blur(%?10?%);position:absolute;width:100%;height:100%;top:%?10?%;left:%?10?%;z-index:-1;opacity:.4;-webkit-transform-origin:0 0;transform-origin:0 0;border-radius:inherit;-webkit-transform:scale(1);transform:scale(1)}\n/* ==================\n          按钮\n ==================== */.cu-btn{position:relative;border:%?0?%;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;padding:0 %?30?%;font-size:%?28?%;height:%?64?%;line-height:1;text-align:center;text-decoration:none;overflow:visible;margin-left:0;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);margin-right:0}.cu-btn::after{display:none}.cu-btn:not([class*="bg-"]){background-color:#f0f0f0}.cu-btn[class*="line"]{background-color:initial}.cu-btn[class*="line"]::after{content:" ";display:block;width:200%;height:200%;position:absolute;top:0;left:0;border:%?1?% solid currentColor;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:%?12?%;z-index:1;pointer-events:none}.cu-btn.round[class*="line"]::after{border-radius:%?1000?%}.cu-btn[class*="lines"]::after{border:%?6?% solid currentColor}.cu-btn[class*="bg-"]::after{display:none}.cu-btn.sm{padding:0 %?20?%;font-size:%?20?%;height:%?48?%}.cu-btn.lg{padding:0 %?40?%;font-size:%?32?%;height:%?80?%}.cu-btn.cuIcon.sm{width:%?48?%;height:%?48?%}.cu-btn.cuIcon{width:%?64?%;height:%?64?%;border-radius:%?500?%;padding:0}uni-button.cuIcon.lg{width:%?80?%;height:%?80?%}.cu-btn.shadow-blur::before{top:%?4?%;left:%?4?%;-webkit-filter:blur(%?6?%);filter:blur(%?6?%);opacity:.6}.cu-btn.button-hover{-webkit-transform:translate(%?1?%,%?1?%);transform:translate(%?1?%,%?1?%)}.block{display:block}.cu-btn.block{display:flex}.cu-btn[disabled]{opacity:.6;color:#fff}\n/* ==================\n          徽章\n ==================== */.cu-tag{font-size:%?24?%;vertical-align:middle;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;padding:%?0?% %?16?%;height:%?48?%;font-family:Helvetica Neue,Helvetica,sans-serif;white-space:nowrap}.cu-tag:not([class*="bg"]):not([class*="line"]){background-color:#f1f1f1}.cu-tag[class*="line-"]::after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border:%?1?% solid currentColor;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:inherit;z-index:1;pointer-events:none}.cu-tag.radius[class*="line"]::after{border-radius:%?12?%}.cu-tag.round[class*="line"]::after{border-radius:%?1000?%}.cu-tag[class*="line-"]::after{border-radius:0}.cu-tag+.cu-tag{margin-left:%?10?%}.cu-tag.sm{font-size:%?20?%;padding:%?0?% %?12?%;height:%?32?%}.cu-capsule{display:inline-flex;vertical-align:middle}.cu-capsule+.cu-capsule{margin-left:%?10?%}.cu-capsule .cu-tag{margin:0}.cu-capsule .cu-tag[class*="line-"]:last-child::after{border-left:%?0?% solid transparent}.cu-capsule .cu-tag[class*="line-"]:first-child::after{border-right:%?0?% solid transparent}.cu-capsule.radius .cu-tag:first-child{border-top-left-radius:%?6?%;border-bottom-left-radius:%?6?%}.cu-capsule.radius .cu-tag:last-child::after,\n.cu-capsule.radius .cu-tag[class*="line-"]{border-top-right-radius:%?12?%;border-bottom-right-radius:%?12?%}.cu-capsule.round .cu-tag:first-child{border-top-left-radius:%?200?%;border-bottom-left-radius:%?200?%;text-indent:%?4?%}.cu-capsule.round .cu-tag:last-child::after,\n.cu-capsule.round .cu-tag:last-child{border-top-right-radius:%?200?%;border-bottom-right-radius:%?200?%;text-indent:%?-4?%}.cu-tag.badge{border-radius:%?200?%;position:absolute;top:%?-10?%;right:%?-10?%;font-size:%?20?%;padding:%?0?% %?10?%;height:%?28?%;color:#fff}.cu-tag.badge:not([class*="bg-"]){background-color:#dd514c}.cu-tag:empty:not([class*="cuIcon-"]){padding:%?0?%;width:%?16?%;height:%?16?%;top:%?-4?%;right:%?-4?%}.cu-tag[class*="cuIcon-"]{width:%?32?%;height:%?32?%;top:%?-4?%;right:%?-4?%}\n/* ==================\n          头像\n ==================== */.cu-avatar{font-variant:small-caps;margin:0;padding:0;display:inline-flex;text-align:center;justify-content:center;align-items:center;background-color:#ccc;color:#fff;white-space:nowrap;position:relative;width:%?64?%;height:%?64?%;background-size:cover;background-position:50%;vertical-align:middle;font-size:1.5em}.cu-avatar.sm{width:%?48?%;height:%?48?%;font-size:1em}.cu-avatar.lg{width:%?96?%;height:%?96?%;font-size:2em}.cu-avatar.xl{width:%?128?%;height:%?128?%;font-size:2.5em}.cu-avatar .avatar-text{font-size:.4em}.cu-avatar-group{direction:rtl;unicode-bidi:bidi-override;padding:0 %?10?% 0 %?40?%;display:inline-block}.cu-avatar-group .cu-avatar{margin-left:%?-30?%;border:%?4?% solid #f1f1f1;vertical-align:middle}.cu-avatar-group .cu-avatar.sm{margin-left:%?-20?%;border:%?1?% solid #f1f1f1}\n/* ==================\n         进度条\n ==================== */.cu-progress{overflow:hidden;height:%?28?%;background-color:#ebeef5;display:inline-flex;align-items:center;width:100%}.cu-progress+uni-view,\n.cu-progress+uni-text{line-height:1}.cu-progress.xs{height:%?10?%}.cu-progress.sm{height:%?20?%}.cu-progress uni-view{width:0;height:100%;align-items:center;display:flex;justify-items:flex-end;justify-content:space-around;font-size:%?20?%;color:#fff;transition:width .6s ease}.cu-progress uni-text{align-items:center;display:flex;font-size:%?20?%;color:#fff;text-indent:%?10?%}.cu-progress.text-progress{padding-right:%?60?%}.cu-progress.striped uni-view{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:%?72?% %?72?%}.cu-progress.active uni-view{-webkit-animation:progress-stripes 2s linear infinite;animation:progress-stripes 2s linear infinite}@-webkit-keyframes progress-stripes{from{background-position:%?72?% 0}to{background-position:0 0}}@keyframes progress-stripes{from{background-position:%?72?% 0}to{background-position:0 0}}\n/* ==================\n          加载\n ==================== */.cu-load{display:block;line-height:3em;text-align:center}.cu-load::before{font-family:cuIcon;display:inline-block;margin-right:%?6?%}.cu-load.loading::before{content:"\\e67a";-webkit-animation:cuIcon-spin 2s infinite linear;animation:cuIcon-spin 2s infinite linear}.cu-load.loading::after{content:"加载中..."}.cu-load.over::before{content:"\\e64a"}.cu-load.over::after{content:"没有更多了"}.cu-load.erro::before{content:"\\e658"}.cu-load.erro::after{content:"加载失败"}.cu-load.load-cuIcon::before{font-size:%?32?%}.cu-load.load-cuIcon::after{display:none}.cu-load.load-cuIcon.over{display:none}.cu-load.load-modal{position:fixed;top:0;right:0;bottom:%?140?%;left:0;margin:auto;width:%?260?%;\n\t/* height: 260upx; */\n\t/* height: 200upx; */background-color:rgba(0,0,0,.25);border-radius:%?10?%;box-shadow:0 0 %?0?% %?2000?% rgba(0,0,0,.5);display:flex;align-items:center;flex-direction:column;justify-content:center;font-size:%?28?%;z-index:9999;line-height:2.4em}.cu-load.load-modal [class*="cuIcon-"]{font-size:%?60?%}.cu-load.load-modal uni-image{width:%?70?%;height:%?70?%}.cu-load.load-modal::after{content:"";position:absolute;background-color:#fff;border-radius:50%;width:%?200?%;height:%?200?%;font-size:10px;border-top:%?6?% solid rgba(0,0,0,.05);border-right:%?6?% solid rgba(0,0,0,.05);border-bottom:%?6?% solid rgba(0,0,0,.05);border-left:%?6?% solid #f37b1d;-webkit-animation:cuIcon-spin 1s infinite linear;animation:cuIcon-spin 1s infinite linear;z-index:-1}.load-progress{pointer-events:none;top:0;position:fixed;width:100%;left:0;z-index:2000}.load-progress.hide{display:none}.load-progress .load-progress-bar{position:relative;width:100%;height:%?4?%;overflow:hidden;transition:all .2s ease 0s}.load-progress .load-progress-spinner{position:absolute;top:%?10?%;right:%?10?%;z-index:2000;display:block}.load-progress .load-progress-spinner::after{content:"";display:block;width:%?24?%;height:%?24?%;-webkit-box-sizing:border-box;box-sizing:border-box;border:solid %?4?% transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;-webkit-animation:load-progress-spinner .4s linear infinite;animation:load-progress-spinner .4s linear infinite}@-webkit-keyframes load-progress-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes load-progress-spinner{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\n/* ==================\n          列表\n ==================== */.grayscale{-webkit-filter:grayscale(1);filter:grayscale(1)}.cu-list+.cu-list{margin-top:%?30?%}.cu-list>.cu-item{transition:all .6s ease-in-out 0s;-webkit-transform:translateX(%?0?%);transform:translateX(%?0?%)}.cu-list>.cu-item.move-cur{-webkit-transform:translateX(%?-260?%);transform:translateX(%?-260?%)}.cu-list>.cu-item .move{position:absolute;right:0;display:flex;width:%?260?%;height:100%;-webkit-transform:translateX(100%);transform:translateX(100%)}.cu-list>.cu-item .move uni-view{display:flex;flex:1;justify-content:center;align-items:center}.cu-list.menu-avatar{overflow:hidden}.cu-list.menu-avatar>.cu-item{position:relative;display:flex;padding-right:%?10?%;height:%?140?%;background-color:#fff;justify-content:flex-end;align-items:center}.cu-list.menu-avatar>.cu-item>.cu-avatar{position:absolute;left:%?30?%}.cu-list.menu-avatar>.cu-item .flex .text-cut{max-width:%?510?%}.cu-list.menu-avatar>.cu-item .content{position:absolute;left:%?146?%;width:calc(100% - %?96?% - %?60?% - %?120?% - %?20?%);line-height:1.6em}.cu-list.menu-avatar>.cu-item .content.flex-sub{width:calc(100% - %?96?% - %?60?% - %?20?%)}.cu-list.menu-avatar>.cu-item .content>uni-view:first-child{font-size:%?30?%;display:flex;align-items:center}.cu-list.menu-avatar>.cu-item .content .cu-tag.sm{display:inline-block;margin-left:%?10?%;height:%?28?%;font-size:%?16?%;line-height:%?32?%}.cu-list.menu-avatar>.cu-item .action{width:%?100?%;text-align:center}.cu-list.menu-avatar>.cu-item .action uni-view+uni-view{margin-top:%?10?%}.cu-list.menu-avatar.comment>.cu-item .content{position:relative;left:0;width:auto;flex:1}.cu-list.menu-avatar.comment>.cu-item{padding:%?30?% %?30?% %?30?% %?120?%;height:auto}.cu-list.menu-avatar.comment .cu-avatar{align-self:flex-start}.cu-list.menu>.cu-item{position:relative;display:flex;padding:0 %?30?%;min-height:%?100?%;background-color:#fff;justify-content:space-between;align-items:center}.cu-list.menu>.cu-item:last-child:after{border:none}.cu-list.menu-avatar>.cu-item:after,\n.cu-list.menu>.cu-item:after{position:absolute;top:0;left:0;box-sizing:border-box;width:200%;height:200%;border-bottom:%?1?% solid #ddd;border-radius:inherit;content:" ";-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none}.cu-list.menu>.cu-item.grayscale{background-color:#f5f5f5}.cu-list.menu>.cu-item.cur{background-color:#fcf7e9}.cu-list.menu>.cu-item.arrow{padding-right:%?90?%}.cu-list.menu>.cu-item.arrow:before{position:absolute;top:0;right:%?30?%;bottom:0;display:block;margin:auto;width:%?30?%;height:%?30?%;color:#8799a3;content:"\\e6a3";text-align:center;font-size:%?34?%;font-family:cuIcon;line-height:%?30?%}.cu-list.menu>.cu-item uni-button.content{padding:0;background-color:initial;justify-content:flex-start}.cu-list.menu>.cu-item uni-button.content:after{display:none}.cu-list.menu>.cu-item .cu-avatar-group .cu-avatar{border-color:#fff}.cu-list.menu>.cu-item .content>uni-view:first-child{display:flex;align-items:center}.cu-list.menu>.cu-item .content>uni-text[class*=cuIcon]{display:inline-block;margin-right:%?10?%;width:1.6em;text-align:center}.cu-list.menu>.cu-item .content>uni-image{display:inline-block;margin-right:%?10?%;width:1.6em;height:1.6em;vertical-align:middle}.cu-list.menu>.cu-item .content{font-size:%?30?%;line-height:1.6em;flex:1}.cu-list.menu>.cu-item .content .cu-tag.sm{display:inline-block;margin-left:%?10?%;height:%?28?%;font-size:%?16?%;line-height:%?32?%}.cu-list.menu>.cu-item .action .cu-tag:empty{right:%?10?%}.cu-list.menu{display:block;overflow:hidden}.cu-list.menu.sm-border>.cu-item:after{left:%?30?%;width:calc(200% - %?120?%)}.cu-list.grid>.cu-item{position:relative;display:flex;padding:%?20?% 0 %?30?%;transition-duration:0s;flex-direction:column}.cu-list.grid>.cu-item:after{position:absolute;top:0;left:0;box-sizing:border-box;width:200%;height:200%;border-right:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.1);border-radius:inherit;content:" ";-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none}.cu-list.grid>.cu-item uni-text{display:block;margin-top:%?10?%;color:#888;font-size:%?26?%;line-height:%?40?%}.cu-list.grid>.cu-item [class*=cuIcon]{position:relative;display:block;margin-top:%?20?%;width:100%;font-size:%?48?%}.cu-list.grid>.cu-item .cu-tag{right:auto;left:50%;margin-left:%?20?%}.cu-list.grid{background-color:#fff;text-align:center}.cu-list.grid.no-border>.cu-item{padding-top:%?10?%;padding-bottom:%?20?%}.cu-list.grid.no-border>.cu-item:after{border:none}.cu-list.grid.no-border{padding:%?20?% %?10?%}.cu-list.grid.col-3>.cu-item:nth-child(3n):after,\n.cu-list.grid.col-4>.cu-item:nth-child(4n):after,\n.cu-list.grid.col-5>.cu-item:nth-child(5n):after{border-right-width:0}.cu-list.card-menu{overflow:hidden;margin-right:%?30?%;margin-left:%?30?%;border-radius:%?20?%}\n/* ==================\n          操作条\n ==================== */.cu-bar{display:flex;position:relative;align-items:center;min-height:%?100?%;justify-content:space-between}.cu-bar .action{display:flex;align-items:center;height:100%;justify-content:center;max-width:100%}.cu-bar .action.border-title{position:relative;top:%?-10?%}.cu-bar .action.border-title uni-text[class*="bg-"]:last-child{position:absolute;bottom:-.5rem;min-width:2rem;height:%?6?%;left:0}.cu-bar .action.sub-title{position:relative;top:-.2rem}.cu-bar .action.sub-title uni-text{position:relative;z-index:1}.cu-bar .action.sub-title uni-text[class*="bg-"]:last-child{position:absolute;display:inline-block;bottom:-.2rem;border-radius:%?6?%;width:100%;height:.6rem;left:.6rem;opacity:.3;z-index:0}.cu-bar .action.sub-title uni-text[class*="text-"]:last-child{position:absolute;display:inline-block;bottom:-.7rem;left:.5rem;opacity:.2;z-index:0;text-align:right;font-weight:900;font-size:%?36?%}.cu-bar.justify-center .action.border-title uni-text:last-child,\n.cu-bar.justify-center .action.sub-title uni-text:last-child{left:0;right:0;margin:auto;text-align:center}.cu-bar .action:first-child{margin-left:%?30?%;font-size:%?30?%}.cu-bar .action uni-text.text-cut{text-align:left;width:100%}.cu-bar .cu-avatar:first-child{margin-left:%?20?%}.cu-bar .action:first-child>uni-text[class*="cuIcon-"]{margin-left:-.3em;margin-right:.3em}.cu-bar .action:last-child{margin-right:%?30?%}.cu-bar .action>uni-text[class*="cuIcon-"],\n.cu-bar .action>uni-view[class*="cuIcon-"]{font-size:%?36?%}.cu-bar .action>uni-text[class*="cuIcon-"]+uni-text[class*="cuIcon-"]{margin-left:.5em}.cu-bar .content{position:absolute;text-align:center;width:calc(100% - %?340?%);left:0;right:0;bottom:0;top:0;margin:auto;height:%?60?%;font-size:%?32?%;line-height:%?60?%;cursor:none;pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.cu-bar.ios .content{bottom:7px;height:30px;font-size:%?32?%;line-height:30px}.cu-bar.btn-group{justify-content:space-around}.cu-bar.btn-group uni-button{padding:%?20?% %?32?%}.cu-bar.btn-group uni-button{flex:1;margin:0 %?20?%;max-width:50%}.cu-bar .search-form{background-color:#f5f5f5;line-height:%?64?%;height:%?64?%;font-size:%?24?%;color:#fff;flex:1;display:flex;align-items:center;margin:0 %?30?%}.cu-bar .search-form+.action{margin-right:%?30?%}.cu-bar .search-form uni-input{flex:1;padding-right:%?30?%;height:%?64?%;line-height:%?64?%;font-size:%?26?%;background-color:initial}.cu-bar .search-form [class*="cuIcon-"]{margin:0 .5em 0 .8em}.cu-bar .search-form [class*="cuIcon-"]::before{top:%?0?%}.cu-bar.fixed,\n.nav.fixed{position:fixed;width:100%;top:0;z-index:1024;box-shadow:0 %?1?% %?6?% rgba(0,0,0,.1)}.cu-bar.foot{position:fixed;width:100%;bottom:0;z-index:1024;box-shadow:0 %?-1?% %?6?% rgba(0,0,0,.1)}.cu-bar.tabbar{padding:0;height:calc(%?100?% + env(safe-area-inset-bottom) / 2);padding-bottom:calc(env(safe-area-inset-bottom) / 2)}.cu-tabbar-height{min-height:%?100?%;height:calc(%?100?% + env(safe-area-inset-bottom) / 2)}.cu-bar.tabbar.shadow{box-shadow:0 %?-1?% %?6?% rgba(0,0,0,.1)}.cu-bar.tabbar .action{font-size:%?22?%;position:relative;flex:1;text-align:center;padding:0;display:block;height:auto;line-height:1;margin:0;background-color:inherit;overflow:initial}.cu-bar.tabbar.shop .action{width:%?140?%;flex:initial}.cu-bar.tabbar .action.add-action{position:relative;z-index:2;padding-top:%?50?%}.cu-bar.tabbar .action.add-action [class*="cuIcon-"]{position:absolute;width:%?70?%;z-index:2;height:%?70?%;border-radius:50%;line-height:%?70?%;font-size:%?50?%;top:%?-35?%;left:0;right:0;margin:auto;padding:0}.cu-bar.tabbar .action.add-action::after{content:"";position:absolute;width:%?100?%;height:%?100?%;top:%?-50?%;left:0;right:0;margin:auto;box-shadow:0 %?-3?% %?8?% rgba(0,0,0,.08);border-radius:%?50?%;background-color:inherit;z-index:0}.cu-bar.tabbar .action.add-action::before{content:"";position:absolute;width:%?100?%;height:%?30?%;bottom:%?30?%;left:0;right:0;margin:auto;background-color:inherit;z-index:1}.cu-bar.tabbar .btn-group{flex:1;display:flex;justify-content:space-around;align-items:center;padding:0 %?10?%}.cu-bar.tabbar uni-button.action::after{border:0}.cu-bar.tabbar .action [class*="cuIcon-"]{width:%?100?%;position:relative;display:block;height:auto;margin:0 auto %?10?%;text-align:center;font-size:%?40?%}.cu-bar.tabbar .action .cuIcon-cu-image{margin:0 auto}.cu-bar.tabbar .action .cuIcon-cu-image uni-image{width:%?50?%;height:%?50?%;display:inline-block}.cu-bar.tabbar .submit{align-items:center;display:flex;justify-content:center;text-align:center;position:relative;flex:2;align-self:stretch}.cu-bar.tabbar .submit:last-child{flex:2.6}.cu-bar.tabbar .submit+.submit{flex:2}.cu-bar.tabbar.border .action::before{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;border-right:%?1?% solid rgba(0,0,0,.1);z-index:3}.cu-bar.tabbar.border .action:last-child:before{display:none}.cu-bar.input{padding-right:%?20?%;background-color:#fff}.cu-bar.input uni-input{overflow:initial;line-height:%?64?%;height:%?64?%;min-height:%?64?%;flex:1;font-size:%?30?%;margin:0 %?20?%}.cu-bar.input .action{margin-left:%?20?%}.cu-bar.input .action [class*="cuIcon-"]{font-size:%?48?%}.cu-bar.input uni-input+.action{margin-right:%?20?%;margin-left:%?0?%}.cu-bar.input .action:first-child [class*="cuIcon-"]{margin-left:%?0?%}.cu-custom{display:block;position:relative}.cu-custom .cu-bar .content{width:calc(100% - %?440?%)}\n.cu-custom .cu-bar .content uni-image{height:%?60?%;width:%?240?%}.cu-custom .cu-bar{min-height:0;\n\n\n\nbox-shadow:%?0?% %?0?% %?0?%;z-index:9999}.cu-custom .cu-bar .border-custom{position:relative;background:rgba(0,0,0,.15);border-radius:%?1000?%;height:30px}.cu-custom .cu-bar .border-custom::after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border-radius:inherit;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;border:%?1?% solid #fff;opacity:.5}.cu-custom .cu-bar .border-custom::before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.6;background-color:#fff}.cu-custom .cu-bar .border-custom uni-text{display:block;flex:1;margin:auto!important;text-align:center;font-size:%?34?%}\n/* ==================\n         导航栏\n ==================== */.nav{white-space:nowrap}::-webkit-scrollbar{display:none}.nav .cu-item{height:%?90?%;display:inline-block;line-height:%?90?%;margin:0 %?10?%;padding:0 %?20?%}.nav .cu-item.cur{border-bottom:%?4?% solid}\n/* ==================\n         时间轴\n ==================== */.cu-timeline{display:block;background-color:#fff}.cu-timeline .cu-time{width:%?120?%;text-align:center;padding:%?20?% 0;font-size:%?26?%;color:#888;display:block}.cu-timeline>.cu-item{padding:%?30?% %?30?% %?30?% %?120?%;position:relative;display:block;z-index:0}.cu-timeline>.cu-item:not([class*="text-"]){color:#ccc}.cu-timeline>.cu-item::after{content:"";display:block;position:absolute;width:%?1?%;background-color:#ddd;left:%?60?%;height:100%;top:0;z-index:8}.cu-timeline>.cu-item::before{font-family:cuIcon;display:block;position:absolute;top:%?36?%;z-index:9;background-color:#fff;width:%?50?%;height:%?50?%;text-align:center;border:none;line-height:%?50?%;left:%?36?%}.cu-timeline>.cu-item:not([class*="cuIcon-"])::before{content:"\\e763"}.cu-timeline>.cu-item[class*="cuIcon-"]::before{background-color:#fff;width:%?50?%;height:%?50?%;text-align:center;border:none;line-height:%?50?%;left:%?36?%}.cu-timeline>.cu-item>.content{padding:%?30?%;border-radius:%?6?%;display:block;line-height:1.6}.cu-timeline>.cu-item>.content:not([class*="bg-"]){background-color:#f1f1f1;color:#fff}.cu-timeline>.cu-item>.content+.content{margin-top:%?20?%}\n/* ==================\n         聊天\n ==================== */.cu-chat{display:flex;flex-direction:column}.cu-chat .cu-item{display:flex;padding:%?30?% %?30?% %?70?%;position:relative}.cu-chat .cu-item>.cu-avatar{width:%?80?%;height:%?80?%}.cu-chat .cu-item>.main{max-width:calc(100% - %?260?%);margin:0 %?40?%;display:flex;align-items:center}.cu-chat .cu-item>uni-image{height:%?320?%}.cu-chat .cu-item>.main .content{padding:%?20?%;border-radius:%?6?%;display:inline-flex;max-width:100%;align-items:center;font-size:%?30?%;position:relative;min-height:%?80?%;line-height:%?40?%;text-align:left}.cu-chat .cu-item>.main .content:not([class*="bg-"]){background-color:#fff;color:#fff}.cu-chat .cu-item .date{position:absolute;font-size:%?24?%;color:#8799a3;width:calc(100% - %?320?%);bottom:%?20?%;left:%?160?%}.cu-chat .cu-item .action{padding:0 %?30?%;display:flex;align-items:center}.cu-chat .cu-item>.main .content::after{content:"";top:%?27?%;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;z-index:100;display:inline-block;overflow:hidden;width:%?24?%;height:%?24?%;left:%?-12?%;right:auto;background-color:inherit}.cu-chat .cu-item.self>.main .content::after{left:auto;right:%?-12?%}.cu-chat .cu-item>.main .content::before{content:"";top:%?30?%;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;z-index:-1;display:inline-block;overflow:hidden;width:%?24?%;height:%?24?%;left:%?-12?%;right:auto;background-color:inherit;-webkit-filter:blur(%?5?%);filter:blur(%?5?%);opacity:.3}.cu-chat .cu-item>.main .content:not([class*="bg-"])::before{background-color:#fff;opacity:.1}.cu-chat .cu-item.self>.main .content::before{left:auto;right:%?-12?%}.cu-chat .cu-item.self{justify-content:flex-end;text-align:right}.cu-chat .cu-info{display:inline-block;margin:%?20?% auto;font-size:%?24?%;padding:%?8?% %?12?%;background-color:rgba(0,0,0,.2);border-radius:%?6?%;color:#fff;max-width:%?400?%;line-height:1.4}\n/* ==================\n         卡片\n ==================== */.cu-card{display:block;overflow:hidden}.cu-card>.cu-item{display:block;background-color:#fff;overflow:hidden;border-radius:%?10?%;margin:%?30?%}.cu-card>.cu-item.shadow-blur{overflow:initial}.cu-card.no-card>.cu-item{margin:%?0?%;border-radius:%?0?%}.cu-card .grid.grid-square{margin-bottom:%?-20?%}.cu-card.case .image{position:relative}.cu-card.case .image uni-image{width:100%}.cu-card.case .image .cu-tag{position:absolute;right:0;top:0}.cu-card.case .image .cu-bar{position:absolute;bottom:0;width:100%;background-color:initial;padding:%?0?% %?30?%}.cu-card.case.no-card .image{margin:%?30?% %?30?% 0;overflow:hidden;border-radius:%?10?%}.cu-card.dynamic{display:block}.cu-card.dynamic>.cu-item{display:block;background-color:#fff;overflow:hidden}.cu-card.dynamic>.cu-item>.text-content{padding:0 %?30?% 0;max-height:6.4em;overflow:hidden;font-size:%?30?%;margin-bottom:%?20?%}.cu-card.dynamic>.cu-item .square-img{width:100%;height:%?200?%;border-radius:%?6?%}.cu-card.dynamic>.cu-item .only-img{width:100%;height:%?320?%;border-radius:%?6?%}\n/* card.dynamic>.cu-item .comment {\n  padding: 20upx;\n  background-color: #f1f1f1;\n  margin: 0 30upx 30upx;\n  border-radius: 6upx;\n} */.cu-card.article{display:block}.cu-card.article>.cu-item{padding-bottom:%?30?%}.cu-card.article>.cu-item .title{font-size:%?30?%;font-weight:900;color:#fff;line-height:%?100?%;padding:0 %?30?%}.cu-card.article>.cu-item .content{display:flex;padding:0 %?30?%}.cu-card.article>.cu-item .content>uni-image{width:%?240?%;height:6.4em;margin-right:%?20?%;border-radius:%?6?%}.cu-card.article>.cu-item .content .desc{flex:1;display:flex;flex-direction:column;justify-content:space-between}.cu-card.article>.cu-item .content .text-content{font-size:%?28?%;color:#888;height:4.8em;overflow:hidden}\n/* ==================\n         表单\n ==================== */.cu-form-group{background-color:#fff;padding:%?1?% %?30?%;display:flex;align-items:center;min-height:%?100?%;justify-content:space-between}.cu-form-group+.cu-form-group{border-top:%?1?% solid #eee}.cu-form-group .title{text-align:justify;padding-right:%?30?%;font-size:%?30?%;position:relative;height:%?60?%;line-height:%?60?%}.cu-form-group uni-input{flex:1;font-size:%?30?%;color:#555;padding-right:%?20?%}.cu-form-group>uni-text[class*="cuIcon-"]{font-size:%?36?%;padding:0;box-sizing:border-box}.cu-form-group uni-textarea{margin:%?32?% 0 %?30?%;height:4.6em;width:100%;line-height:1.2em;flex:1;font-size:%?28?%;padding:0}.cu-form-group.align-start .title{height:1em;margin-top:%?32?%;line-height:1em}.cu-form-group uni-picker{flex:1;padding-right:%?40?%;overflow:hidden;position:relative}.cu-form-group uni-picker .picker{line-height:%?100?%;font-size:%?28?%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;text-align:right}.cu-form-group uni-picker::after{font-family:cuIcon;display:block;content:"\\e6a3";position:absolute;font-size:%?34?%;color:#8799a3;line-height:%?100?%;width:%?60?%;text-align:center;top:0;bottom:0;right:%?-20?%;margin:auto}.cu-form-group uni-textarea[disabled],\n.cu-form-group uni-textarea[disabled] .placeholder{color:transparent}\n/* ==================\n         模态窗口\n ==================== */.cu-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1110;opacity:0;outline:0;text-align:center;-ms-transform:scale(1.185);-webkit-transform:scale(1.185);transform:scale(1.185);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:%?2000?%;perspective:%?2000?%;background:rgba(0,0,0,.6);transition:all .3s ease-in-out 0s;pointer-events:none}.cu-modal::before{content:"\\200B";display:inline-block;height:100%;vertical-align:middle}.cu-modal.show{opacity:1;transition-duration:.3s;-ms-transform:scale(1);-webkit-transform:scale(1);transform:scale(1);overflow-x:hidden;overflow-y:auto;pointer-events:auto}.cu-dialog{position:relative;display:inline-block;vertical-align:middle;margin-left:auto;margin-right:auto;width:%?680?%;max-width:100%;background-color:#f8f8f8;border-radius:%?10?%;overflow:hidden}.cu-modal.bottom-modal::before{vertical-align:bottom}.cu-modal.bottom-modal .cu-dialog{width:100%;border-radius:0}.cu-modal.bottom-modal{margin-bottom:%?-1000?%}.cu-modal.bottom-modal.show{margin-bottom:0}.cu-modal.drawer-modal{-webkit-transform:scale(1);transform:scale(1);display:flex}.cu-modal.drawer-modal .cu-dialog{height:100%;min-width:%?200?%;border-radius:0;margin:initial;transition-duration:.3s}.cu-modal.drawer-modal.justify-start .cu-dialog{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.cu-modal.drawer-modal.justify-end .cu-dialog{-webkit-transform:translateX(100%);transform:translateX(100%)}.cu-modal.drawer-modal.show .cu-dialog{-webkit-transform:translateX(0);transform:translateX(0)}.cu-modal .cu-dialog>.cu-bar:first-child .action{min-width:%?100?%;margin-right:0;min-height:%?100?%}\n/* ==================\n         轮播\n ==================== */uni-swiper .a-swiper-dot{display:inline-block;width:%?16?%;height:%?16?%;background:rgba(0,0,0,.3);border-radius:50%;vertical-align:middle}uni-swiper[class*="-dot"] .wx-swiper-dots,\nuni-swiper[class*="-dot"] .a-swiper-dots,\nuni-swiper[class*="-dot"] .uni-swiper-dots{display:flex;align-items:center;width:100%;justify-content:center}uni-swiper.square-dot .wx-swiper-dot,\nuni-swiper.square-dot .a-swiper-dot,\nuni-swiper.square-dot .uni-swiper-dot{border:1px solid #000;background-color:#fff;opacity:.4;width:%?10?%;height:%?10?%;border-radius:%?20?%;margin:0 %?8?%!important}uni-swiper.square-dot .wx-swiper-dot.wx-swiper-dot-active,\nuni-swiper.square-dot .a-swiper-dot.a-swiper-dot-active,\nuni-swiper.square-dot .uni-swiper-dot.uni-swiper-dot-active{opacity:1;width:%?30?%}uni-swiper.round-dot .wx-swiper-dot,\nuni-swiper.round-dot .a-swiper-dot,\nuni-swiper.round-dot .uni-swiper-dot{width:%?10?%;height:%?10?%;position:relative;margin:%?4?% %?8?%!important}uni-swiper.round-dot .wx-swiper-dot.wx-swiper-dot-active::after,\nuni-swiper.round-dot .a-swiper-dot.a-swiper-dot-active::after,\nuni-swiper.round-dot .uni-swiper-dot.uni-swiper-dot-active::after{content:"";position:absolute;width:%?10?%;height:%?10?%;top:%?0?%;left:%?0?%;right:0;bottom:0;margin:auto;background-color:#fff;border-radius:%?20?%}uni-swiper.round-dot .wx-swiper-dot.wx-swiper-dot-active,\nuni-swiper.round-dot .a-swiper-dot.a-swiper-dot-active,\nuni-swiper.round-dot .uni-swiper-dot.uni-swiper-dot-active{width:%?18?%;height:%?18?%}.screen-swiper{min-height:%?375?%}.screen-swiper uni-image,\n.screen-swiper uni-video,\n.swiper-item uni-image,\n.swiper-item uni-video{width:100%;display:block;height:100%;margin:0;pointer-events:none}.card-swiper{height:%?420?%!important}.card-swiper uni-swiper-item{width:%?610?%!important;left:%?70?%;box-sizing:border-box;padding:%?40?% %?0?% %?70?%;overflow:initial}.card-swiper uni-swiper-item .swiper-item{width:100%;display:block;height:100%;border-radius:%?10?%;-webkit-transform:scale(.9);transform:scale(.9);transition:all .2s ease-in 0s;overflow:hidden}.card-swiper uni-swiper-item.cur .swiper-item{-webkit-transform:none;transform:none;transition:all .2s ease-in 0s}.tower-swiper{height:%?420?%;position:relative;max-width:%?750?%;overflow:hidden}.tower-swiper .tower-item{position:absolute;width:%?300?%;height:%?380?%;top:0;bottom:0;left:50%;margin:auto;transition:all .2s ease-in 0s;opacity:1}.tower-swiper .tower-item.none{opacity:0}.tower-swiper .tower-item .swiper-item{width:100%;height:100%;border-radius:%?6?%;overflow:hidden}\n/* ==================\n          步骤条\n ==================== */.cu-steps{display:flex}uni-scroll-view.cu-steps{display:block;white-space:nowrap}uni-scroll-view.cu-steps .cu-item{display:inline-block}.cu-steps .cu-item{flex:1;text-align:center;position:relative;min-width:%?100?%}.cu-steps .cu-item:not([class*="text-"]){color:#8799a3}.cu-steps .cu-item [class*="cuIcon-"],\n.cu-steps .cu-item .num{display:block;font-size:%?40?%;line-height:%?80?%}.cu-steps .cu-item::before,\n.cu-steps .cu-item::after,\n.cu-steps.steps-arrow .cu-item::before,\n.cu-steps.steps-arrow .cu-item::after{content:"";display:block;position:absolute;height:0;width:calc(100% - %?80?%);border-bottom:1px solid #ccc;left:calc(0px - (100% - %?80?%) / 2);top:%?40?%;z-index:0}.cu-steps.steps-arrow .cu-item::before,\n.cu-steps.steps-arrow .cu-item::after{content:"\\e6a3";font-family:cuIcon;height:%?30?%;border-bottom-width:0;line-height:%?30?%;top:0;bottom:0;margin:auto;color:#ccc}.cu-steps.steps-bottom .cu-item::before,\n.cu-steps.steps-bottom .cu-item::after{bottom:%?40?%;top:auto}.cu-steps .cu-item::after{border-bottom:1px solid currentColor;width:0;transition:all .3s ease-in-out 0s}.cu-steps .cu-item[class*="text-"]::after{width:calc(100% - %?80?%);color:currentColor}.cu-steps .cu-item:first-child::before,\n.cu-steps .cu-item:first-child::after{display:none}.cu-steps .cu-item .num{width:%?40?%;height:%?40?%;border-radius:50%;line-height:%?40?%;margin:%?20?% auto;font-size:%?24?%;border:1px solid currentColor;position:relative;overflow:hidden}.cu-steps .cu-item[class*="text-"] .num{background-color:currentColor}.cu-steps .cu-item .num::before,\n.cu-steps .cu-item .num::after{content:attr(data-index);position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;transition:all .3s ease-in-out 0s;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%)}.cu-steps .cu-item[class*="text-"] .num::before{-webkit-transform:translateY(%?-40?%);transform:translateY(%?-40?%);color:#fff}.cu-steps .cu-item .num::after{-webkit-transform:translateY(%?40?%);transform:translateY(%?40?%);color:#fff;transition:all .3s ease-in-out 0s}.cu-steps .cu-item[class*="text-"] .num::after{content:"\\e645";font-family:cuIcon;color:#fff;-webkit-transform:translateY(%?0?%);transform:translateY(%?0?%)}.cu-steps .cu-item[class*="text-"] .num.err::after{content:"\\e646"}\n/* ==================\n          布局\n ==================== */\n/*  -- flex弹性布局 -- */.flex{display:flex}.basis-xs{flex-basis:20%}.basis-sm{flex-basis:40%}.basis-df{flex-basis:50%}.basis-lg{flex-basis:60%}.basis-xl{flex-basis:80%}.flex1{flex:1}.flex-sub{flex:1}.flex-twice{flex:2}.flex-treble{flex:3}.flex-direction{flex-direction:column}.flex-wrap{flex-wrap:wrap}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-stretch{align-items:stretch}.self-start{align-self:flex-start}.self-center{align-self:flex-center}.self-end{align-self:flex-end}.self-stretch{align-self:stretch}.align-stretch{align-items:stretch}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}\n/* grid布局 */.grid{display:flex;flex-wrap:wrap}.grid.grid-square{overflow:hidden}.grid.grid-square .cu-tag{position:absolute;right:0;top:0;border-bottom-left-radius:%?6?%;padding:%?6?% %?12?%;height:auto;background-color:rgba(0,0,0,.5)}.grid.grid-square>uni-view>uni-text[class*="cuIcon-"]{font-size:%?52?%;position:absolute;color:#8799a3;margin:auto;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;flex-direction:column}.grid.grid-square>uni-view{margin-right:%?20?%;margin-bottom:%?20?%;border-radius:%?6?%;position:relative;overflow:hidden}.grid.grid-square>uni-view.bg-img uni-image{width:100%;height:100%;position:absolute}.grid.col-1.grid-square>uni-view{padding-bottom:100%;height:0;margin-right:0}.grid.col-2.grid-square>uni-view{padding-bottom:calc((100% - %?20?%)/2);height:0;width:calc((100% - %?20?%)/2)}.grid.col-3.grid-square>uni-view{padding-bottom:calc((100% - %?40?%)/3);height:0;width:calc((100% - %?40?%)/3)}.grid.col-4.grid-square>uni-view{padding-bottom:calc((100% - %?60?%)/4);height:0;width:calc((100% - %?60?%)/4)}.grid.col-5.grid-square>uni-view{padding-bottom:calc((100% - %?80?%)/5);height:0;width:calc((100% - %?80?%)/5)}.grid.col-2.grid-square>uni-view:nth-child(2n),\n.grid.col-3.grid-square>uni-view:nth-child(3n),\n.grid.col-4.grid-square>uni-view:nth-child(4n),\n.grid.col-5.grid-square>uni-view:nth-child(5n){margin-right:0}.grid.col-1>uni-view{width:100%}.grid.col-2>uni-view{width:50%}.grid.col-3>uni-view{width:33.33%}.grid.col-4>uni-view{width:25%}.grid.col-5>uni-view{width:20%}\n/*  -- 内外边距 -- */.margin-0{margin:0}.margin-xs{margin:%?10?%}.margin-sm{margin:%?20?%}.margin{margin:%?30?%}.margin-lg{margin:%?40?%}.margin-xl{margin:%?50?%}.margin-top-xs{margin-top:%?10?%}.margin-top-sm{margin-top:%?20?%}.margin-top{margin-top:%?30?%}.margin-top-lg{margin-top:%?40?%}.margin-top-xl{margin-top:%?50?%}.margin-right-xs{margin-right:%?10?%}.margin-right-sm{margin-right:%?20?%}.margin-right{margin-right:%?30?%}.margin-right-lg{margin-right:%?40?%}.margin-right-xl{margin-right:%?50?%}.margin-bottom-xs{margin-bottom:%?10?%}.margin-bottom-sm{margin-bottom:%?20?%}.margin-bottom{margin-bottom:%?30?%}.margin-bottom-lg{margin-bottom:%?40?%}.margin-bottom-xl{margin-bottom:%?50?%}.margin-left-xs{margin-left:%?10?%}.margin-left-sm{margin-left:%?20?%}.margin-left{margin-left:%?30?%}.margin-left-lg{margin-left:%?40?%}.margin-left-xl{margin-left:%?50?%}.margin-lr-xs{margin-left:%?10?%;margin-right:%?10?%}.margin-lr-sm{margin-left:%?20?%;margin-right:%?20?%}.margin-lr{margin-left:%?30?%;margin-right:%?30?%}.margin-lr-lg{margin-left:%?40?%;margin-right:%?40?%}.margin-lr-xl{margin-left:%?50?%;margin-right:%?50?%}.margin-tb-xs{margin-top:%?10?%;margin-bottom:%?10?%}.margin-tb-sm{margin-top:%?20?%;margin-bottom:%?20?%}.margin-tb{margin-top:%?30?%;margin-bottom:%?30?%}.margin-tb-lg{margin-top:%?40?%;margin-bottom:%?40?%}.margin-tb-xl{margin-top:%?50?%;margin-bottom:%?50?%}.padding-0{padding:0}.padding-xs{padding:%?10?%}.padding-sm{padding:%?20?%}.padding{padding:%?30?%}.padding-lg{padding:%?40?%}.padding-xl{padding:%?50?%}.padding-top-xs{padding-top:%?10?%}.padding-top-sm{padding-top:%?20?%}.padding-top{padding-top:%?30?%}.padding-top-lg{padding-top:%?40?%}.padding-top-xl{padding-top:%?50?%}.padding-right-xs{padding-right:%?10?%}.padding-right-sm{padding-right:%?20?%}.padding-right{padding-right:%?30?%}.padding-right-lg{padding-right:%?40?%}.padding-right-xl{padding-right:%?50?%}.padding-bottom-xs{padding-bottom:%?10?%}.padding-bottom-sm{padding-bottom:%?20?%}.padding-bottom{padding-bottom:%?30?%}.padding-bottom-lg{padding-bottom:%?40?%}.padding-bottom-xl{padding-bottom:%?50?%}.padding-left-xs{padding-left:%?10?%}.padding-left-sm{padding-left:%?20?%}.padding-left{padding-left:%?30?%}.padding-left-lg{padding-left:%?40?%}.padding-left-xl{padding-left:%?50?%}.padding-lr-xs{padding-left:%?10?%;padding-right:%?10?%}.padding-lr-sm{padding-left:%?20?%;padding-right:%?20?%}.padding-lr{padding-left:%?30?%;padding-right:%?30?%}.padding-lr-lg{padding-left:%?40?%;padding-right:%?40?%}.padding-lr-xl{padding-left:%?50?%;padding-right:%?50?%}.padding-tb-xs{padding-top:%?10?%;padding-bottom:%?10?%}.padding-tb-sm{padding-top:%?20?%;padding-bottom:%?20?%}.padding-tb{padding-top:%?30?%;padding-bottom:%?30?%}.padding-tb-lg{padding-top:%?40?%;padding-bottom:%?40?%}.padding-tb-xl{padding-top:%?50?%;padding-bottom:%?50?%}\n/* -- 浮动 --  */.cf::after,\n.cf::before{content:" ";display:table}.cf::after{clear:both}.fl{float:left}.fr{float:right}\n/* ==================\n          背景\n ==================== */.line-red::after,\n.lines-red::after{border-color:#e54d42}.line-orange::after,\n.lines-orange::after{border-color:#f37b1d}.line-yellow::after,\n.lines-yellow::after{border-color:#fbbd08}.line-olive::after,\n.lines-olive::after{border-color:#8dc63f}.line-green::after,\n.lines-green::after{border-color:#39b54a}.line-cyan::after,\n.lines-cyan::after{border-color:#1cbbb4}.line-blue::after,\n.lines-blue::after{border-color:#0081ff}.line-purple::after,\n.lines-purple::after{border-color:#6739b6}.line-mauve::after,\n.lines-mauve::after{border-color:#9c26b0}.line-pink::after,\n.lines-pink::after{border-color:#e03997}.line-brown::after,\n.lines-brown::after{border-color:#a5673f}.line-grey::after,\n.lines-grey::after{border-color:#8799a3}.line-gray::after,\n.lines-gray::after{border-color:#aaa}.line-black::after,\n.lines-black::after{border-color:#fff}.line-white::after,\n.lines-white::after{border-color:#fff}.bg-red{background-color:#e54d42;color:#fff}.bg-orange{background-color:#f37b1d;color:#fff}.bg-yellow{background-color:#fbbd08;color:#fff}.bg-olive{background-color:#8dc63f;color:#fff}.bg-green{background-color:#39b54a;color:#fff}.bg-green1{background-color:#b9d7a8;color:#fff}.bg-cyan{background-color:#1cbbb4;color:#fff}.bg-blue{background-color:#0081ff;color:#fff}.bg-purple{background-color:#6739b6;color:#fff}.bg-mauve{background-color:#9c26b0;color:#fff}.bg-pink{background-color:#e03997;color:#fff}.bg-brown{background-color:#a5673f;color:#fff}.bg-grey{background-color:#8799a3;color:#fff}.bg-gray{background-color:#dfdfdf;color:#fff}.bg-black{background-color:#000;color:#fff}.bg-white{background-color:#fff;color:#666}.box-black{background-color:rgba(0,0,0,.25)!important;color:#f3f3f3}.bg-shadeTop{background-image:linear-gradient(#000,rgba(0,0,0,.01));color:#fff}.bg-shadeBottom{background-image:linear-gradient(rgba(0,0,0,.01),#000);color:#fff}.bg-red.light{color:#e54d42;background-color:#fadbd9}.bg-orange.light{color:#f37b1d;background-color:#fde6d2}.bg-yellow.light{color:#fbbd08;background-color:rgba(254,242,206,.8235294117647058)}.bg-olive.light{color:#8dc63f;background-color:#e8f4d9}.bg-green.light{color:#39b54a;background-color:#d7f0db}.bg-cyan.light{color:#1cbbb4;background-color:#d2f1f0}.bg-blue.light{color:#0081ff;background-color:#cce6ff}.bg-purple.light{color:#6739b6;background-color:#e1d7f0}.bg-mauve.light{color:#9c26b0;background-color:#ebd4ef}.bg-pink.light{color:#e03997;background-color:#f9d7ea}.bg-brown.light{color:#a5673f;background-color:#ede1d9}.bg-grey.light{color:#8799a3;background-color:#e7ebed}.bg-gradual-red{background-image:linear-gradient(45deg,#f43f3b,#ec008c);color:#fff}.bg-gradual-orange{background-image:linear-gradient(45deg,#ff9700,#ed1c24);color:#fff}.bg-gradual-green{background-image:linear-gradient(45deg,#39b54a,#8dc63f);color:#fff}.bg-gradual-purple{background-image:linear-gradient(45deg,#9000ff,#5e00ff);color:#fff}.bg-gradual-pink{background-image:linear-gradient(45deg,#ec008c,#6739b6);color:#fff}.bg-gradual-blue{background-image:linear-gradient(45deg,#0081ff,#1cbbb4);color:#fff}.shadow[class*="-red"]{box-shadow:%?6?% %?6?% %?8?% rgba(204,69,59,.2)}.shadow[class*="-orange"]{box-shadow:%?6?% %?6?% %?8?% rgba(217,109,26,.2)}.shadow[class*="-yellow"]{box-shadow:%?6?% %?6?% %?8?% rgba(224,170,7,.2)}.shadow[class*="-olive"]{box-shadow:%?6?% %?6?% %?8?% rgba(124,173,55,.2)}.shadow[class*="-green"]{box-shadow:%?6?% %?6?% %?8?% rgba(48,156,63,.2)}.shadow[class*="-cyan"]{box-shadow:%?6?% %?6?% %?8?% rgba(28,187,180,.2)}.shadow[class*="-blue"]{box-shadow:%?6?% %?6?% %?8?% rgba(0,102,204,.2)}.shadow[class*="-purple"]{box-shadow:%?6?% %?6?% %?8?% rgba(88,48,156,.2)}.shadow[class*="-mauve"]{box-shadow:%?6?% %?6?% %?8?% rgba(133,33,150,.2)}.shadow[class*="-pink"]{box-shadow:%?6?% %?6?% %?8?% rgba(199,50,134,.2)}.shadow[class*="-brown"]{box-shadow:%?6?% %?6?% %?8?% rgba(140,88,53,.2)}.shadow[class*="-grey"]{box-shadow:%?6?% %?6?% %?8?% rgba(114,130,138,.2)}.shadow[class*="-gray"]{box-shadow:%?6?% %?6?% %?8?% rgba(114,130,138,.2)}.shadow[class*="-black"]{box-shadow:%?6?% %?6?% %?8?% rgba(26,26,26,.2)}.shadow[class*="-white"]{box-shadow:%?6?% %?6?% %?8?% rgba(26,26,26,.2)}.text-shadow[class*="-red"]{text-shadow:%?6?% %?6?% %?8?% rgba(204,69,59,.2)}.text-shadow[class*="-orange"]{text-shadow:%?6?% %?6?% %?8?% rgba(217,109,26,.2)}.text-shadow[class*="-yellow"]{text-shadow:%?6?% %?6?% %?8?% rgba(224,170,7,.2)}.text-shadow[class*="-olive"]{text-shadow:%?6?% %?6?% %?8?% rgba(124,173,55,.2)}.text-shadow[class*="-green"]{text-shadow:%?6?% %?6?% %?8?% rgba(48,156,63,.2)}.text-shadow[class*="-cyan"]{text-shadow:%?6?% %?6?% %?8?% rgba(28,187,180,.2)}.text-shadow[class*="-blue"]{text-shadow:%?6?% %?6?% %?8?% rgba(0,102,204,.2)}.text-shadow[class*="-purple"]{text-shadow:%?6?% %?6?% %?8?% rgba(88,48,156,.2)}.text-shadow[class*="-mauve"]{text-shadow:%?6?% %?6?% %?8?% rgba(133,33,150,.2)}.text-shadow[class*="-pink"]{text-shadow:%?6?% %?6?% %?8?% rgba(199,50,134,.2)}.text-shadow[class*="-brown"]{text-shadow:%?6?% %?6?% %?8?% rgba(140,88,53,.2)}.text-shadow[class*="-grey"]{text-shadow:%?6?% %?6?% %?8?% rgba(114,130,138,.2)}.text-shadow[class*="-gray"]{text-shadow:%?6?% %?6?% %?8?% rgba(114,130,138,.2)}.text-shadow[class*="-black"]{text-shadow:%?6?% %?6?% %?8?% rgba(26,26,26,.2)}.bg-img{background-size:cover;background-position:50%;background-repeat:no-repeat}.bg-mask{background-color:#fff;position:relative}.bg-mask::after{content:"";border-radius:inherit;width:100%;height:100%;display:block;background-color:rgba(0,0,0,.4);position:absolute;left:0;right:0;bottom:0;top:0}.bg-mask uni-view,\n.bg-mask uni-cover-view{z-index:5;position:relative}.bg-video{position:relative}.bg-video uni-video{display:block;height:100%;width:100%;-o-object-fit:cover;object-fit:cover;position:absolute;top:0;z-index:0;pointer-events:none}\n/* ==================\n          文本\n ==================== */.text-xs{font-size:%?20?%}.text-sm{font-size:%?24?%}.text-df{font-size:%?28?%}.text-lg{font-size:%?32?%}.text-xl{font-size:%?36?%}.text-xxl{font-size:%?44?%}.text-sl{font-size:%?80?%}.text-xsl{font-size:%?120?%}.text-Abc{text-transform:Capitalize}.text-ABC{text-transform:Uppercase}.text-abc{text-transform:Lowercase}.text-price::before{content:"¥";font-size:80%;margin-right:%?4?%}.text-cut{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.text-bold{font-weight:700}.text-center{text-align:center}.text-content{line-height:1.6}.text-left{text-align:left}.text-right{text-align:right}.text-red,\n.line-red,\n.lines-red{color:#e54d42}.text-orange,\n.line-orange,\n.lines-orange{color:#f37b1d}.text-yellow,\n.line-yellow,\n.lines-yellow{color:#cb8119}.text-olive,\n.line-olive,\n.lines-olive{color:#8dc63f}.text-green,\n.line-green,\n.lines-green{color:#39b54a}.text-green2,\n.line-green2,\n.lines-green2{color:#2b6447}.text-cyan,\n.line-cyan,\n.lines-cyan{color:#1cbbb4}.text-blue,\n.line-blue,\n.lines-blue{color:#06f}.text-purple,\n.line-purple,\n.lines-purple{color:#6739b6}.text-mauve,\n.line-mauve,\n.lines-mauve{color:#9c26b0}.text-pink,\n.line-pink,\n.lines-pink{color:#e03997}.text-brown,\n.line-brown,\n.lines-brown{color:#a5673f}.text-grey,\n.line-grey,\n.lines-grey{color:#8799a3}.text-gray,\n.line-gray,\n.lines-gray{color:#aaa}.text-e3{color:#e3e3e3}.text-c6{color:#c6c6c6}.text-black,\n.line-black,\n.lines-black{color:#000}.text-white,\n.line-white,\n.lines-white{color:#fff}@-webkit-keyframes cuIcon-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes cuIcon-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.cuIconfont-spin{-webkit-animation:cuIcon-spin 2s infinite linear;animation:cuIcon-spin 2s infinite linear;display:inline-block}.cuIconfont-pulse{-webkit-animation:cuIcon-spin 1s infinite steps(8);animation:cuIcon-spin 1s infinite steps(8);display:inline-block}[class*="cuIcon-"]{font-family:cuIcon;font-size:inherit;font-style:normal}@font-face{font-family:cuIcon;src:url(//at.alicdn.com/t/font_533566_yfq2d9wdij.eot?t=1545239985831);\n\t/* IE9*/src:url(//at.alicdn.com/t/font_533566_yfq2d9wdij.eot?t=1545239985831#iefix) format("embedded-opentype"),url("data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAKQcAAsAAAABNKAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8dkoiY21hcAAAAYAAAAiaAAATkilZPq9nbHlmAAAKHAAAjqoAAQkUOjYlCmhlYWQAAJjIAAAALwAAADYUMoFgaGhlYQAAmPgAAAAfAAAAJAhwBcpobXR4AACZGAAAABkAAAScnSIAAGxvY2EAAJk0AAACUAAAAlAhX2C+bWF4cAAAm4QAAAAfAAAAIAJAAOpuYW1lAACbpAAAAUUAAAJtPlT+fXBvc3QAAJzsAAAHLQAADMYi8KXJeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWScwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeMbzQZ27438AQw9zA0AAUZgTJAQDhHQwVeJzN1/nf1mMaxvHP9ZQiSUKWbCXZ1+w7Q0NqImNJhSSSZSyTlMQYs9hlLGPKMoRBMyU1tlIiIrKUfeycZyOpkCVLc1zPYbz8BzPdr7fb8/yQ2/29zuM6TmA5oIlsIU31460U6r+O1m9L4++b0KLx902bnq6fL+ICmtE0GqJltIl20TE6R5foHj3jmDgtzoohMSyGx4i4MC6KS+LquD5uiFvizhgb42NCTIwpMS1mxOx4IyJLtsiNc8vcN7vnodkr+2a/HJCD8oK8MkfmdTk6b8oxeUeOzUk5M1/IuTk/F+Ti/CqXztt62TIIfvIp9osDo0ccHv3ijBgcQ3/8FBfHVY2fYlTcFvfEuMZPcX9MjenxVLwYb8ZH2SRb5aa5TXbNHnlY9s5js38OzMF5qT7FNTnqh09xV47LyTkr5zR+ioW55L+f4n/+p+ip/PEnr8u4hr8wlid4mtk8/+PrRV5ufL3DPD7i48bXVywtlBZlnbJV6VMGldFlTJlZZpeXy1vlvfJBmVc+bmhoaKFXq4bWP7zaNnRo2LWhS8MBja9uDT0beupDtC+dSseyHpNKB+aVVfWpGnR2muqENaN52ZDlWUEnaUVashKtWJnWrEIbVmU1Vqcta7Ama7E27ViHdVmP9dmA9nRgQzqyEZ3YmE3YlM34ls11JrdkK7ZmG7Zlu7IandmeHdiRndiZXdiV3didPdizbFDashd7sw/78jP2Y3+68HMO4EC6chDd6M4v6MHBHEJPDuWXHMbhHMGR9OIoetOHvhzNMRxLP46jP8czgBM4kYGcxN8YxMmcwqmcxq84nTM4k7P4NYM5myGcw1CGcS7DOY8RnK+J+YbfcCG/1XP6Hb/nD3pGF3MJl+pJXc4VXMlVjORq/qTndi3XcT1/5gY9wVGM5kZu4mZu4a/cym2M4Xbu4E7u4m7u0RP+O/9gHOO5lwncx0T+yf08wIM8xMNMZgqPMJVpPMp0HuNxZuhEPMlMntK5mMUzPKvT8ZzOxQs6GXOYq9Pwkk7HK7zKa7zOG/yLN3mLt3Vexum/8y7v8T4f8KHGLvm3TtB8PmEhi1jMp3zG5yzhC77UifqapXzH9yzTySqloTQpTctypVlpXpYvK+isrVhalpVKq7JyaV1WKW3K6mWNsmZZq2xU1i7tdBLXLeuzQCeq2f96sP4P/rSs/1hpkX8om9TMs9Je78VKJ703WOmo95amaSTaGJP03s40oURHUxYQnU1TS+xnNf1jf6P+3V2s3hZxoNUbI7pavUniINPEE92M5nrvbkoBoocpD4iDTclAHGL1tomeprQgDrf6TcQRpgQhjjRlCdHLlCrEUaZ8IXqbkoboY9Tvo69R/3+PNuUQcYwpkYh+pmwijjOlFNHflFfE8abkIgaYMow4wajf94mmXCMGmhKOOMmoz2iQKfWIk035R5xi1Gd9qlGf3WlG/T7PMOrzPNOUmMRZRj0bg00pSpxt1LM0xJSsxFBTxhLDTGlLDDflLjHCaluIC01ZTFxkSmXiYlM+E5eYkpq4ypTZxEhjO71fbaV+/9cb9TzeYMp2YpQp5YnRprwnbjQlP3GT6Q4gbjbdBsQtpnuBuM10QxBjTHcFcbvp1iDuMPbU+51W6rO4x0o9D2NNtwsxznTPEONNNw4xwXT3EBNNtxBxv1Hn7AGjztmDRp2zh0y3FfGw6d4iJht1/qYYdf6mGnX+phl1/qYbdf4eM915xONGncUZRp3Fp4w6i08bdRZnmW5J4hnTfUk8a7o5idlGndcXjTqvc4w6r3ONOq8vGXVeXzbqvL5i1Hl91ajz+ppR5/V1o87rG6Z7mnjTqLP7llFn922jzu47Rp3dd406u+8ZdXbfN+rsfmDU2f3QqLMbpi5AfGTUOZ5v1Dn+2KhzvMCoc/yJUed4oalHEItMjYJYbNT5/tSo8/2ZUef7c1PzIJYYdda/MOqsf2nUWf/K1FCIr40690uNOvffmPoL8a1RM+A7U6chvjdqHiwz9RzVAlPjIYup+5BNTC2IbGrqQ+RypmZENjN1JLK5qS2Ry5t6E7mCqUGRLUxdimxlalXkyqZ+RbY2NS1yFVPnItuY2he5qqmHkauZGhm5uqmbkW1NLY1cw9TXyDVNzY1cy9ThyLVNbY5sZ+p15Dqmhkeua+p65Hqm1keub+p/5AamJki2N3VCsoOpHZIbmnoi2dHUGMmNTN2R7GRqkeTGpj5JbmpqluRmpo5Jbm5qm+QWpt5JbmlqoOQ2pi5KbmtqpeR2pn5KdjY1VXJ7U2cldzC1SnJHU8ckdzI1WnJnU7cldzG1XHJXU98ldzM1X3J3Uwcm9zC1YXJPUy8m9zI1ZHJvU1cm9zG1ZnJfU38mu5qaNHmQqVOT3Uztmuxu6tlkD1PjJg82dW/yEFMLJ3ua+jh5qKmZk4eZOjp5uKmtk0eYejt5pKnBk71MXZ7sbWr1ZB9Tvyf7mpo+eayp85P9TO2f7G/aA8jjTRsBOcC0G5ADTVsCeZJpXyAHmTYHcrBphyDPNm0T5BDTXkGeY9owyKGmXYMcZto6yHNN+wc53LSJkOeZdhJyhGk7Ic837SnkBaaNhbzUGs/VZdZ43i437TPkFabNhrzStOOQI03bDnmNae8hr7VawPM6q4GXo0xbETnatB+RN5k2JXKMaWci7zBtT+Rdpj2KvNu0UZH3mHYrcqxpyyLHmfYtcrxp8yLvNe1g5ATTNkbeZ9rLyImmDY2cZNrVyMmmrY2cYtrfyEcM5XtOtRrpOc1KzfhHrWhHyOlWat4/ZqXm/eNWat7PsLrd5RNWat4/aaXm/UwrNe9nWal5/4wV7QX5rBXtBTnbivaCfM5KvROet1LvhBes1DthjpV6J8y1Uu+E+VZq9i+wUvN+oZWa94us1LxfbKVm7RIrNfu/sFKz/0srNfu/slKzf6lp12Xe1saC/wB/IDDcAAB4nLy9CZgcxXkw3FXV93T3TE/PTM+xMzvHzsze1+zO7EraS7u67wMJSSBWiFMgzGGDESCtwICQAQMO2A4YLRK2Hx/gA4MdbGBB+CAE25+dL4njfGFt57Jx8j8h32/HCdP66+ienV20Aiff/4G2u7qnu7rqrar3ft/iEMedeRPNoCYuwy3nNnEcyA2DYicoFkTJAH5AjlIuK4bNUKSUKQf7OwHK5MzSMKgMo8owsFPAjoiSGLEjdqk3YosQsId7y/1mXwEdeEH1i0JPMdlvWraiS0pivXah3zT9MLf3ItB/tzM6viE0mdUChqnBsF9PimIOQcD7/P8sWEA8rzqAH06ZJpjN7h/oHPUrSiC0oliK+psL0PQ7o34zCi5oaS87E+A2vq/fqgwv8UHIw1TTppuQbEp+EDSWO78DT7OHTT+Y8Zsc7ib+49Ad8CLOxhe4s7jHWTFkC5FGEOkdAeUKKPehD6txxTnvV2rcUgFAPBI1kUc8eFmBOxSgOkv+QQnF1CoCCCIIEXhTjXG1usfgi1yC4xRcTyErKYBWrwARg6ai4G+U+4qwA6iKFVed3zm/V2MhFUjO71R8DRSg4G8q4AiQFXx2/h2frZjq/Lvz72oM35ed/5e8hz/D4/GbQafRCJfjurll3GqOEzJ4+Ew8QJneSEjMZbzBoyNS7o2ETQOgbKEP9xA/IAGxDeCr8lJAHrczpFyir6J0daalDEC5BcwYwaDhjJIjJMeGICj/vY5bMkza6byiPkifIIevOVOkCMhxFL8Lp3Ad+IWgUaU/QI7WxeG7Z0hfhykEXlHIIw3BGXbiBNqvl9Ao58Mj1M4Ncitxz3DHcL/wlMM9wPMSF/BlJ+lNsTAMIngy9pbxpEwBiXax2D+MO2WHDZCpvwBnXqwKQvVFdjz1U57/6Sl6PDnxoVYZheNyZs+BCzJyPIzk1hv/PJQAINFMDkCbK4/WKnixipZ6NeBj9chgvy8eQGpre0erDwXivvISABPh0VAiERoNJ+ZK7lw58208fqNcmszDYh4Vij2ihAQDNAIkRkbw8lpKetVXRJUyekG0nH/9sGqFlEPOv1qa/moXTJtvvy3JQA8C2PEdHfwmiFoBMgEwHaeFbzL+1PklXnh33sUHDVEA9mvG3DfHMFQ5IdsFJLFQsYqFMp72KSD68Sf9oFJuxEtiBP91EWh2gopVrvREbEtIYbRgRSQRnpGlt98207DrVV0LPqaHecO46LMqLH7fH/heAfqe/LkpXXKJGI0qwu1KyFI/DPxBXf9OJwzIo/xddyq2BZJ/ajTxcWgkwijwBS3w1jWycs1vAr7PZ5H/f/65pmhRDQRpV6qtKG+8hruiiRwHafufR1sx/LrICsOD2wnLlXITxUYGBiNBYDxuNrluqrhzguIyET3qXLr62LLVu+Jt5RvBxY8Nn2chPRFBgTXlO53/cWlXPrJh+E7QdWlvEEXiBgwvqXxiVwbMVKsd7ZVPPPOF1Y/0XtN1dL0eEXV97APNe9umhh/61O1de9unxjcbuhDRL9q4erfOk7GFdA5P4rENcA0Y7PjrEY4O5wgIkmlbN50h9/D3eAtEU4oBDOXgXwP+ew9P7IZw9wQ9olF8/ajzeEz13Qa0ex/+nsN7P+EjQTe1b5H1gscVLL5W+ipl8vkivhuKMHhB91mRw+PKbTkI4cEt7FheA8CaMjtqIWX9rA+dOnToFLpyv4LCMYU2lDTd+aeUCtK117YcBMO198prqvuCcXUj6LwGv4nfH3zhZl/cRCrtCu91jXP78W1Mj4YwPVrHXcdx+bBEBnMYVkq9dqRMpmOh2FeulBjhMUAxQoYXj3jOAGF8M0xIEcUAGCkUaTfx3e6eSq+dxZeYZEVKFBL1/e8E/R6wwHVmeRUEwVxHnG/Odu6JqzJqhCvLfMe4T9d3736kGJjavtGnihm7IQdUURR5aJk9ubFum+dFS0/mYC6BhE/u2aapvqi2amMNwaSSkmjH5EzOQx3LAQAry7GuQghEA4eykopyHeW1CJTb408dvX50Qui+8roHAtEG2JQwQiLAH+IDe1Z1pIACkSADmO/PAvDdnBCNKXyqhoIql3dqMUPQ+m8e9RAUm4svY3w6gudHjs1Fb0ZYIIzXvIjxAIFtXxlTwEq5N4Wn5AvvCMI7L9Bj/AyHKR+mf5gKHiFU7/JfY0oE0LD3AD46DzpVQIghoYa3Y8IAlAO/wdidq83PGXd+di2Oy61C1k9GUwxhQjxHiwuQWwRp96kx9deXY/KpHJmj0JwKFkXQzn8qym8OKACTndshI9wI8ErcXa+sjcX5MEKYHFJEiVcPwYmYjlIoRUJ+MK9lEqFm9xwnHMPx43VlVN+c6rcItT9+D/n92PG68kI4lc5B8yqEr/AztqWRTHcCKpvxFYvB6sbjhL3AH8NE+9g9CsDjeJy0T1kcWHccI7/fcw/hP+45Rtp67F6X96iHV+MCeM2HVMTuiYjzWtU8TcCCK8RNOMEj/F99E5yOx8kPx2hDp3lRsd49h9rPAZvuHjKVGWAIwzWCl/2iQMFT+gTtFxkv5QkJLQ6Mj4n8NHmIAeJxyaK09AVKS0l7cGv6GWLBTenFaKkTfz9Xa2UIM8qhRhTpHQbo+U919gpvfeWrb/H8W1/dvVVTfFF9xfpHvsvz330E48RSl6Ii+Fn8GaCdGrh7LXvuK28JeRGvdiGNcSZ7dsVtvXgBQP6rapAsNEwez7xIYSRzJpfk9nJXcCc5zhqm3F22kCccIClU6hi9Sn9fF+gjuDKHC+REWP9QGPP9figmycASzFoKMwD3zxXIoRNg6BLusRHkQIhwk/QVwnH1Fd51VRgCuAnl/iKGTimTwlxOOJSC4VnQVG7C/8BMU6UJ/0vXcZFfxXQluDKfA5bUkXo61SGGmppWB0EaYPyLGcw0ozNT7JQmHGuu+h9AlZ+WfSDwW/CfQQOzrKR+QDlUt4TvWQkLNCp5C8yYBV+KMLVcgny8qYGdHmPM6DIBzxAe4XFEaDieASAdG+FRS5swjXje150+3dwPIKN00DuD/ubT6W6wAsqyUKr+rW4GjSyuNJElvfJKpn4aN8Jo+FQoDKLmJ5OYhwsa89dVw4J1lXMBGEmCEhm6ebO68SXdwu09gb8xfzkJln6GfPhNwlovWEfNC75Qv6ZyeMyY+EB40L7FkTCaphz+zMIvv/OduuUDbp0ljTjDUQHCk5M+Akc4cjEnJBEsRsWvQ3hmO990vk7lr30QC2Ngrwr7FcV5FqwhCMI5CRUFXIzFLtKnWbwOG+msL2C+Ac/jLBbrCPXHs3wYFAATfsjk77fJ5KcyzpedL5pd/V2m86UASvRl4clsXwI5GTbyacypNycSR+C+VCaTqp5IDXbFYl2D4E0qwtDezCZaEvgf6YpAZWnWhhTXhjFCP5HGsp2EglHhA7cFMxi4VVhezmCmBRQwO+ZJZRg75LxlirZU95KGBMB22jpwHmmdc1+QtDNEWhkKOF8MBCkkg0Y3EUrwv0y8c0mq1tglnXHEgWT18SRmE7JJeHHSyeIllfYaf22ItDxBYIfHYQal8WzIETwGMgwHSOTPxFMBt7Vi4nVeNzesTuBCcNKZxqtwFK+7SSYtQiY1OjfV8ZFvMkhCT6Ast1AJkDyNz9Wfz2ccWW84hs/ctpG5Os5NcBu4C/HoLoL5gSf70sXRBubJvoWci/Pw00QGrkE7Tx8t9PcwKTi8KAcMWqujrNWTBIj0AJlsPE3RFYPALm88nDeDBsVj+DC9GG/sZFwoMCnZ4WpSMpGyKZxgFwPf35GfyB+V+2fRNB66MJ5rRSz741FzR6tkE4pXqo0ZGyf7XQU0Wp1ivfnJDjWu7vgJvaj+I/vWl+ad8ERyh2ynoux0G+wcdfsJFpy5uvb1c8PcKm4zkzQ9xomgE3dEPPRCx8vTXLARknJYXFu8/ZDT1UnCi6xZo+p0MTINAxsbd3bN9fCFs/UrrUwS/mbtWmVOM+FBHroz1O02mF60t0ymnkWzuL+YCuNp53clEjIzAVVLADpB4Wzv7qburqY9vQcfQKA7AYastt42C4wk2wF6AHFN2e6ubB49cHD4ggbnJSsSCYHl2a2jBx9wv/Em/cYAhqZYdJdjr02wSrGQY/IMIMiTCThZytcTPgzTWrpWMOaBXFu78zL93MEty31CIKb1DOGJmUqCZXaTDYbCTQBP0qbxxF2E+7o7v6ubNLWrwTndngatYJw2B3XJsQgv5fCT7ctyzst2FIyGV3bieuLRuwiTeXcm5/Zips3l3X6J13ESz9duPB/obCCcEZG7SpUy0R3iEa8QEY00t48wcMNEAqDtxv2wMR6tsH65uh7SHxEajYXntrGB2vZcPh1sBCD1MVXx8bIWz6WjpsxHYkog0YpXQkLzXegLAbl3NYSre2UQjqn92yHc3u9ryH8Dv0+Q0zfyiUx1NJN4RZRjvmB6xf6xlO2LBXhfOLN9fGxX1tQPmnG1fOfOnXeW1XgQqksevfzyR5f4XF2c18cit5zbtVgvKU9EJ30jNHHXcuD/TLedE3Tm6+qMosyoOnjgvw8G2ECpujKjwCfxwfnsHw4Wws/gCfAE/AVncS1U2+oHjCuv6YkBEWVMj9nAEjoR+/rAesWSZqgUhVekDy7HWOpKUlJEUVenFfi3CEkzZP0er/4zxZqTasAZUpQD0KLoYFoN8FDBooaLj57AdARxMdyKJbgdpXAOzOfYyxUqQIF+RgiSjJ0tCKGajrSf0mowOTUFKw+1dde4m1WHSw/ihlSnGBNE+czJoEGpwhRuMkxPOTc9WDq8qsY0dbc9hHsGbqgpTrdSvEMxGFfXXj+GWhPBn8Dl/byWFUv9OXKv1ixyE1AkW5kvhxCt3gI5xKb4s/btp6emAFdrLGZDdfVzitLZjZ49duxZhI9LK7qtqvryufZ3teP2kz56lYxOObNeB3BVzqzyOTxenTeMsRrwMcyrsagQqwFtxZE+AjSPd/pbSucDXCuWe5dxB1iP5/VOIDSh1jGypjzCL3hEoVawCDkM+zFqDJspRm5GYJkssn4s71DJx7NTYCo5ySgH7fzmrhW+W30rugbWArB2oHNCO6xNdNILZ2OyUBgsFMDeBnzO5+90urMd4DSfSIJgIpj4MY8gDyFQJPAjl4iAUXyadFmAPWCgvX2AVEpq629r62fl7wBS6WABAFLpYAET247sBRfD0GDOeZHyFcsLoSsRhAISkXCtpFhG9Qk63y9qqXCurvw4Gsd8Z45by13OfZBgHoxSpB4CwEqZarlKDJNgDBIScz0FPCOKOfJQkd7Gs8rGT1Z6ykRcp5OM6dfwY0sJPcHsKn6F6NSo1g2fCDJq9CQ6pll/xFBXPCDjpunaU9sVEHpds4Cy40s+HTdWemCluvIygd96Z0cpkuX9qrpn4+Aqng/4+VUDm/aqqp/Phvs67tzKX7ob7jgQa7HD56/S4mLP4JJuMa6tPC9st8QO7OjCtSeCAASbfOMpRIp8fpsaN4Mx37YmnowDSk2op4Bvz/rdr29X1OzlfQhKCl+6sklVtr++Z90eHxjVzu9a9cQEKkqyvr+nd1JTpDyaeGJV1/namaDxEm6t/pIR9Oblf6IZeMbl51dwa+otLETfSDhIItzWW1qGKL9PBF+U8yRu+la/95YB8uFMP2qsHnUZldsJA5ggEmD1MB3bIxiFkBvlZxqDCdPEJdWZSTQB0JQAo/TsfAaM8uTd5ayOveQ9eqjSaXMxPeDfjuIexYPB6/CrU6wGfHppasrjr1/G5NnHJbgsxozdxNLirTzS8hpf6UoBUjjXjwlZvmQWC35AERJGpBksx5TCIYa67Ui50l8yQ6BxmDSBHODKajzdDkBzCr6dagag3Xrzx4LsjJxcpWnjzsuy8PYZ+PuqIZ0xZFUU91/ubwBvgikmhmHZvj1d/XiqCEAxBQ+m29ff8YAsO59s4PkGsEeQH3ACQABf+H5AFVFzs2gFvu/sEBgOfZPilAZuFEsOV1DOjOARIgjgWVsgV27H8ABaeFJnKM8Utqm+o4yRJTW+kBN+ZggU8hk7I+TwMmAv44VALpiYTC7IEGdwCU36TU2qflbSzJQJurNwd7YbmBsPKKHqlBqA23kAtw+1rilaYy0tLWNWaKCpdWg7BFUD7hivdsNPtAaHEX6TXxNoMVfzwaQJe9JFXAVBDSBi+k9LmiadJgbN0/gu/gAug443/EBXfiTK2ubhbRC0R2yM5iNw2/A2Qz05NQsj7eQFPW9BaOVVMjJNSQC6cps3ZLtd/uU0ehEt55q59Zh7uczj2amqEa99WgZUoUc0WSmiAcVlYkMsujJ7F+Zmsp2w0lch6AcQKxYGH5JCRcqHMo2paNdfgKdzsQlFjbQNRXwxdcKOgW/FJ/AdoJBbmITgW86K2GS3GBDBt0QBA6Kh1BwCYXLDmRCA2J3Bd4phkNMt9WuEHXhG3aaTYwwflKHYSlxJeLg9jKtcGVsRBc/Y0VVqTI0MtYOwQm7FnI3RD/eKIvgarrI3FGnubWjO9OKanY3khgVAuLnUUPxfVhzXZ8XUZ5RJzJR8TaUHypf/P/BHKIDxL8G7oGZbVQAhs9OWH4uHWDj0F5KG8woYNpIBeuUHk0ay4HdecV7BP3GyKzMRmt/IdXEj3CbuIu4D3BGyHj0mkuEOVOMgy2Qe58z3+H3h+8UFv/fnPLnZlY3ntD5UTANTruDOTr/y+AZjkdtg5g98frp2k55G5tiKKrfoT86Mq3hgp5eoUo8epoiOwf3FIW/h3xz2pVGK2GVXB7aJ6knjmG42cR2Ybh6llrMsYU/LRQ9zY3pHrvsKkqc2Emq6A8JP9BWYu0SKUMkSpZo5QnYJs+GalnrtyDAxSLlCGn7CjlQoZiFyOmGAi5TGViLEGJgG5a1l/O8Iw3/XZjs6Jjo6spKiGIoC1ox6ytJKKusTU3uafZIe0/JFETz25S+9lYs0QQglKDQ0YB5r12YtqsnahVe8WBWSCVCKxsx4akPbwOEJfCPvXHrF+Zc8EZk4XOoC/E8hFprJh1uYWukhQL460XER+aqhYNpDPgv+pXN9woyIsURUikYlKaSnf/Hlz52QByoIyXJI6by0H3N3RVGJRsVOofri4DW9YMO+WABkGgpFfL38luppUFrz8cj4/eM7Ljn1U65u3vuoBmpu5nOgTkst1bsmLHL/v7tO0BTT6s0pyd6jXH37D5vo0CVp0+x0hpt3CSb/K8vAtY3gwxSYdeczZy2uN5llo/y7eSfgzTmw4Mx4oFlXB9eIefPVRANXPzLI4xbKnm7aAAKFtMu4u/odRKhuvXKO0GKXFHsCFuOo0PQ7tHeILOhramIK4airv5v2VGVEYPkXg6hqpl2hIwjfnjcCRAijkHWmam8Y0wyKtXeIdMbu1j3jKYGmGXx5ald5BdNGAt8Pct+leILBs8jQBWYgMLUUi4w7JvJ8ocgYZuJZUaAUkboiEJKI71UIY47LNmHKCS/tx4w35dUx4+0nZNV2nRZwrRL1spLEPHkEo44yq4TU4ZX6iLsG+ST5oleSRPYyedcrhYh/B6sHXxItV92ivzKgrgmF1oiW2tcpYw7er9+qmkLcD0X5UgAulUXojwumeqvuDwFF7uxTLbH2vCK/9/OC8xdhe6XPamy0fCvtsAWNmKUFb1LlfRjvQWDsk9WbgpoVM6D1Pp8DC7Clk9YvhfDsLVVD6tmb+p4v1MMC7KTN4Pl3N9ef9r+7ve9+UAviB4Pa3IML7ZshrrLALuORHouItYTyDDGprELtHNSqMedMUm+mYYrOFZEsmd6gsyHcSJc2uWI+JKBtvnVaYCYNsCrcGioTWahcHImHCoGWSn8LuZzYBeGeidwSTz5ibeY4hQtzGSwhcfkadbQXs9B2gsWbL7EeQs5To3ctYnU6ZSzSnwTprGveeHRRR61fgEW61jQYZ11nY+LgdZ/mClwvdz4ek75+YiIlwh6eOGGqrOqhhJxRc2L17e+rp0kWpitZqccAzBkFC4uYPcCCeRcWsubkD/QncJ3am63+a6Zb3QyU3ramruYVsdiKTfiwsrm7qa37tMORJlIt9Q1BQ+CDrWZhKNEwvn6iIbGiEMliUkgAkoO7Me6FGCrCt5KZdPJFIZHo3Rq1MqlUOo3/QvbWngbBoz9GEEoSgJZtx8N21FYkFDS+iN8HXVkyvirF/VMuT9qGZ+UAN8Yt59ZhCeG8BZIw02zOM7jU02k7QxCmR6drdujaXJkrzTkeQsbDVT9R8zw0TjAtJ9iHj5udMVp+SbcsZ6KbzdszeNrML6TrDAHE5AHP1JwR8dE5YiWCwYT1EpG2icD9NJs44XknNtepLYqjc51oEc9j/rIuJ7gQFvPF5iJV8lbYJKecIvlHXTTZlBeptxK7AKMejwfXVg/0jAMw3gMfoefqYCQFQCoCH2Hn6sOCoGkI7r4g3hFO9DX6g6q26gLSuUqHoTR3tE40WPkQ6BpRkQk5xsM5CVJfhNVb/XXPOHyJ1PRrt+YIPldfAkJENx9XgIrZTh5ms737eQwoMFDKTyiipooyEPZnfRqzS8ygOzBcCkT+KRRNLNxl7EjYpJYJLDX2m4h4XuGxJ5pIZOLFPakHgfKj6hs/lksqCsZ8w9rvRST7VfiKGpCg9PvgKB7XWU156y1Fc95sUWJhhJ/0gyZgS8GgqgaDkvMrp51QZ0KbH0On0QbXPngRxkAFo6YrzxaYkksi0EdYFsWkMAUo+e1EBiS+y2X6LOPF8dSfm5LukLkWFvwiutEXM6EvmAGg0hptNfjRht6Dwv7rfWLX5snLdg7HRMEvSdGYFBblzMarbrvxsmFFv+82cVcuOSTY44UVeyDoeudf8OhSN4cfmYaf19G9d4XCcjq0+0Lo/wuFOKAGhqOtFRCxpJ3pLhNG7trWMtEd9Heu2NTS2KBFDUkrtFWu3DUYjAzvqRz8cgPQG9M7xFQG7lnRfD6YYoP8YZ+RD2g7LT7dHOH1shSY80mconaqAvGdLEhFYiafp4+nSnCrnsFb4syqOpI0wakSofcHGHX8BgvayepozQQKzgMZFeMc8kgspP6g+mf0p/5/xi+AD7luvQt8D7rfww/MtQi4Pk7UF6xvUR+EkGsduJJoAKaxfD+tLu7Jc0hRrgAlgk+d168irgRPqNROML99vedoH54ZfrDQkkEht2gLrcclS4E88yG6gjY1Flq8jc9PS5hzgMw76XLnhxTVlQ6oxKOOrLkzxO2ci+ALPJULRUDnvAIMagHEoIK/B0DkNeeEv9iA2zrkvGqAZMEP9uI6wdUAGikf2Iil1oLf+Z+49kJKB1shEFxb5quojxtyrTV17rSExLG1AyhDyte53hZJC/A4LSUwwg0ooC9qUT4WGW9/yPn6B3pbotsnBqeWX/yVkYqFjHgEBbr2Ov9wy5JVoVzrXhC/tW04eI0eVVTtpCgCXg3wS3gfnOJ9+oqe7ZnLuj46/vhn7+ttbTlvy5rz9YigG2uHPtS8o+2m++4cxOf0eb1tvBqzxREIgE99QreZTAQvRpwnEwFvXUvvKoCToLylUtlCaMS8M5w+m7Tk+t2TeRKmnMEwoQTE5kKtDjkiERAi2FeQMj1kCnt0AEv6lNdhPh9WXRlNT4Nys/MSJlPTNdHn/uqMblEHfCKdOA/Nc5KH057ug11PYck07fpXYAmVueuDyXr3BGpcgtTW8guUwfjyw1SO8YPyPCtYmcopxHmNyh91liMJT3sDNEI2zL2VElVy5IdpJe74s+4vnTuTtTFE5g0R8/q9M/prOaYN+vnffPWrbwnCW1+tXNklCIkoJlNxnxVGqOWC7oe/z/Pff/iR76NohxCNqcJqnhehIAqIBzz6lI93bqNunJs3UWfT3Uz7w44YHvWXoNfHyy3lwa/+hmcfbEgAFAhhsgJlvw5ALMZ/75FHiC/yI+NDBzXVZ+tPSQLxDIXwoBL7pYI/oG7YoOLPKTuJk1Ua/42TqsfdC8PFHcSXv4dbgmGL1w5hE8lMoB7JiCieMSgRpfPkBxIy0wgsd3JY5QJ1FSBIT/AK6KlYsfpvNGJGV0W84LsDqhPHhLCcFEr5AvmhoAZQsiT25MA/5HrEElSqazHzkM+Xm8A7HhexP0n00AJSZOcrkgaCKrjh09kOYMUsYGiPOffmuwFoSYNtVr76RUY+EuxEeR2GD4jt1MJYsYj5wKXcasz9XIz7aGbM/AILgbDgHrXwnuU5q975yV70Apw6g3HSGc61fbAz+M6Cm/m8I5zluc/gMUqa1gM0jMh6hF3BWfIkJsKJ+qdHznbTAWe9+4TpBxwB/hlOs8CiF5yEYfc36Ak0wmmYYyR2zSFukruaWCI8bxiMf/L1+nCBOfYWspJL98RwikWA1NSPRVDzYMfQpNFXxOxCHyNFYqwDNXEKi1tTrqcMPrzzv3ULnzGNnFThGnJzymq3qBfMPpUKUuoOpgqwQBeuiH8LLxcejAz0yKJPVky1vf+2e4/0daoBVfYJUnWCBQDQI/w0c6chB8g+Rw43k3tHVXUfvbQiGIe2RKw1mOfGDGXa+dvBPzrvKwQFfGXHwwNrtZgsGOPFtvbmcYM4G4CrvNrxsU7eJPDs4gYJD56vny25eVPnrDg5z/iaJMgwnt19ekGMFJxkYPgBO4G3z4Kfqw9hrDqmB50pMO2MehokEi5FWOXy1NnwLynD9HzUzZBUNe2iboLI6QvM0TDTUvZk7ZeonjSGaU4Z45iVLM6DTQMiQhCMQlB3pUSRsjsBMP4WMkzTyYyTmCzl+kuSi4mzmB1GHDp5yy0nEdg4ccGRMNT9SDNR9Es3irecdBA8PDl5GMLb9ip7D8HDZ+jspnO8a2ZmKk2u8AFYkMMV4Gq23pHPP3yZZiNdv/4BHt8gLx+evPCwIBz+pemfIS9gsjYzNUki+1Kmx5eyOMQI8Q6yRKIgwyuCuUwWyWogrpPUBaITikQ/wLzF3LGzS254VylSN4STfp+CVHBzw/IYuFlFoajq3CNHZOcuQYGv/wi3ua2zGQSNP23qBAQ7PAU3Tm6BX5FljCNQO5gGhpqQQRnLlm/IiRCuqIPnnT/joTNq+h8JxkEs9AixumVBN+mS8yM/uLFn6dKeG4FogA52q6mNq6MLhA/p4rjMu7C8hSnFOagCWojPv4SJwn32ogRgHgaHq5PXnh3V1/Q3p9FyroHLc53UV48DfVTWIXyfa68wqMha5irlYE3tWfEKeSa/9tRsGTUHwydQdCDhy8dKHyKhKJlULsNDXbgJrG8/9sPqJ5hV4ypX//zJvoc2J35wQ/+t4/jRnPNz1njU4sNoRxei/nQWs8jDN/T2b4oLPDBBpOtOoDpjro3iTYB5NcyxXbXu8xsbvrk2V8APj97otLrwcn3nvovXTpFKPVnmGbwUUIdJz2Bvhz2bF2Vy0TPO8fh43LlbFeSAmgadTW/g8W7ubMNz5kf5tjQGuwj+GpTwBHlNCFmq8/F8B0b/Hw/G48GP+832IjioKyE6/i/R8ScyxdYFVo06S3u+tpapsahO8vADamCSykSdTIbEXe0M1+N/cIq6VRuAHNedJkVyANcx6QLs2qbF/IJvxTpQkzAELcSLfU0aL/gsLIwLKKjxvKTokpi+Ofet34NZj6ukp0n20vmPDUpCJCZ3T62uufUA6PMZxXBrWvADENQVyV9JKZakIH1Fm/RX9fYDjRvAEvpm7l68wucc2YmLQb2xoM5dl1oIXFWnp1apAxiqK9vUz5oFJPT3lVJMjZhyZXeqAcCfIA+U8YKzieKOVE41L0zbH4Rfq9aCVeFUzaGUOYMy/VG1Muf5Wztc5zMFXZeuHOjtnPngJgQ3dFeukHRDDBvi4bIeAHrLKgiGjg2BYrtu6uUjIg/Sc3YGYsVspnqsMd39sE8kXi5GF+6Sp7IacZXbrqVonxGNIBiRQq137JtBN628/CNNISkMScgigjEemvpYQE18YM/E0NDE+QczSgDXDfgYBLWYYUJDG7kRbh23k3AjVCHJXA8rRTd6h1n6iQuVlCVKT+pH2kOQUyRE9DqSXfEM+otIyTALdFvJKyAUV/JP966mvrZWf7A3CIJfUewfxEKlILCeUWwdP9ZK2IOWZ0rrCHOyzrprESkacAG1zUf48eZnKuuIKL0uaPWHStafKP4brJ5gv/UtNRBQOtQElglanu2mPM4a643F5GwXHtOUp2jg2gkGzNfPzvdQcrKgFrZ05xTzzI7lunEHQa/nau3No51GbZLhKcTfuHrN9Qg/yX/y4slPC0SU82YXsXF7nvUOMVK9OZ+duH3blRDs3307LX/4TgCPX3/7nM2K9GvM7deKP6xfufxcV9wgSUyepPfbqyrmY/jpyzZ8JCfK0aiUuHTpxpvRuzrmvu+Q8xncMfoqifrBC2Ts5jsB2DyhRTVJ6xu+dDdeIy4ufdnFpZXF9TMgizGlWcMPYbPilVM0AGNRJY1TlSQTjLqN/CfizGbsU01JlJ0Ti8fJVU8iJQSWMw/+X7yIz5plSc6bMh4HieqNvw//iUtyLdwYdz53CXeQu5HyboRTp6idaHBoIVzrAbEdMuc9kcjiPdTBoJyCUg/VX/aUC5i1Z24HPXO3ywWhwBIykDIN3SbRzxWvAH+qmrwP+Oz9EzCCfEKg+OTOkRXi337sGz+BcJnzzHXTKn/vtfQI9nbdPGIEJNvfvnPM1AW9ISaEYndHljZquhDS/ckwFsV90TCvas7nBi6P2cXK0mvika5rtWKTYhea1DzvN5BsGDz4GFS0RMlMKQ2Q92f7zNzI9pHDgwcPAeGxnb1LnB8q29asuVanR9jfldNQpAG/GRvf3mzYss8Y/FDWDoqYgdMgUuwGQwtLqtaw9JTe3t1zvmV29pV2fszUApmMZmRaJQFjY/znrYFZNIlpTw5LXgzXdaKiAamQwLTx1Nma0IWIbYYwwPLuLcwCmET5gcjKxuvEyriMJSXcmTraA3/Ysza0riW/Np30KcJFlYFdAoJLWloGQCAN/HCN893yhQIPl7XEW3Wzze5dba1uSQ2F7MFrKT6nngTO10bIVCMHwMGEzwYgbFgmID7MKAlhCkEQhdCGCn520lRR+jBMIgijUBfBBaLCXjEk55SkObjDdA2mGbWgqlc3bn4KJbkEt5xY6fqZE9tZ1DQScQgiUdaYKFfYCpsnZxA1YKZYQJOjmG+meTW8wpfTJLgtbfoxjl++GbhSxeblF0yFeFUwJNgq8pNDpHFD+I1x8uo4LtyRo2F5SatBMqNS8+2bmSix7XYiSvgJ/yW7seGk/UT+Wf6+ZR9wjo6i9AK5R9SCkMg9Nz+xQO4ZfldXQZU1cstHPHlHu+FjAnry5snbyKt7D/PSYefFea/Qgjcvn0evubLcam6y1hvKbZ+rN4UuWMj6IXGto8t8hCplybNdBJ1IYtgudtIQlEoZ3+ktE3/MRoBU1tNNExceCUHdkKiA9yHJ6+htCN12oXrhIfi8ENpWVPD/20KqbyiAZCkQWrOWlwRFlWSoD0nCEVVMY05REtKS4E8WJYMPBMRQ4f3If87vgry+2bI263xeH9qtmoIitrZCYjcw1d1DktmvWoUAvoaBguFPipqUThuCSHnIM5iH5jC88lhK2cJd+v7GH4u+WTJdl9ZiYiTKExKRhqW5EV3jD3ki76owazcwJOGn0YNXkxCYiYEtHwpBTSOQi5+4HF19vzNeC+raejVw/Ljhloa2HIDwyk1GEIGARoK81n5RbktqMVmSVDMpIFMT/brzRUuPGbwWahvWyR3d4M21kLv6QYQ/tvK6XPYjuykALzsK0QMH6sLRNoX8mildt3XLB5SAjr8hbigPbvjr9PIQrl2LSb7OkGag8J26JERjspbe06/ryNYmPuD6F7yEXkVLaCQdyfXTV6AeqzTUryCGkStyEut10SqFKTHCzEBfod5nau5eySL+zWxR0cX0WUu/J3zH+dau28PH/WZSXNkDj/esQLdVD0UyyL6Mxt7mTT+8YoO18TLoXe6PgzRz9yGqATipBcC2KyC8YhsM+Ks/KY0AMNZTSkWhepecMgl2MVPyvZsuw09seEDy7kjHq7+NpuCUq1JgupLr0EbuSu567hT3Ze5bGOOV6Yogk6SfJJKolGmiEKK4Jp4y5EzFAbKw/IBICI3uVQqSRURCKTBXTIolXItdLLA4L7IUiSxGfxnG0rNAjUOViF2hmrwiJsQkbQVdokRDR2ohk2wEv4bnXyOgTDY+ScXFGOl/FEUfQL0BOYyxvN4al8XQcIvu77FE//6LA6LV49dbhkOijCkMwK2QAr0I+LQdItBDvk29vgDiQ2KLKOTzii4M9eNZYssJQbDjPiEshRAK+Ho3+8K66CyJybYW6kjn7lSjaud4Pw/8+kgS9PsEMZPqH9YiQnT58qgQ0Yb7UxlR8PWD5IjuB3z/+MRessz3suP4Lgh3jdPj01jA9JdkpLfs7jQDSrJT93duSim8v9vPNzTQk5La1OnXO5NKwOzc3aIjueT3KfeqYVNEkUENI4fQPVDIZhXgS60RMOZJG7pPtfWlFg+ANhhBYjCsCElF4oU1Qe1iRWnzt43qFlSHJ/Ky7Rscard4n7YsEFim+XirfWjQZ8v5iWEVWvpom39TrdF7D4NDXqvx0fPJIXHFae4Q9xHuY3gOoU5i0R5yw+Qll5h4YTku62Dlil4Yfc4apoJTpX/uGdvTvOFFVKuHCVoIzzWCeEZcR7lG9vgwFDC/MQJKhD+h0UhdoGRH0EwrFuEFC/Q3Z5oHiORqGRndhB1h3oyj9OuqMNh8W8OQpL4eQglTTxdASE8bJujMXkvW27UIT5b+ljR+NRTQ0x1CHGmxbOh4cYlgIVu8zR+BlrCkeF8oG/NV9x/XDAhfw1InXC1p9xk2QK/zYBw8kV+mAr6dKjQ7st26Zendgi9ojC7rQkBImc7pS4p9AK+KS8CoVVQkczRPmZOhVtrgoDnEZIB0MCeL5ljeudBqSvpBX/OMHgYh/0xzH/AnmwIBI5s0wrIcNpJNmsvXvYx6sVRzHrcbc9TUEwOv6Jov7gjN9SJR5ZSfaA1cNwCRsi82db7BuL9mjxgm+oFCnmkKCpTvbgQ5IZyR+ol+ot/MmESltc6wRaMRwg0n2328P+ZDiQ/3KbzUpLe1B4VdAIKG7f5dn+xDMGWItrFVDwHVxugG3lXsB7YKzOpzZnuHlpN4ue9wXgh3HYbhKs/D09VDmglnMPqDzaHOFgQHBnNyzBZkiAUyjOhTfEAFgIfx9b6hYDtELZ2hZmgZ01isd77XtgSApa1gEAT1acMCAHP4SUvXs90NfLBtdBLscziCUJY43/VHGB/o+ZkX6+KGXasMWiQfzFy4sCvtPbRITpi0q7PwHnW+uHhemPq2NL4Pf6KFbaiXOM/t5uOt5Wka516k/nWL5Jqx3qMV8C8XyTkzeY7Wgd+dPe1M9d/eo9nz8kHYi0u8i0q0iwqtbt2v4LqHuQCN/MeMowFDKYgRDqbnOVefMT8Oj7rvoqHRU18/dWRi4gg7PUaM0oyIuwX4rdHx8SMnv37yCDs5fzfvZ1qgY/Ky+/0M8TcQsp2wbxj2pmDIgGiuMZ3QOgcbD7nddW05cmr3xo8eXLLk4EcfvZeeHnpX44brW3ZkHC1bcvD4Hx8nD9OTc/IsbWX5KkbhDMnrBzKuc4pr4XUdQDJMqKB+3Z5GliYWIWLdND0ZC3+st39kuCCJMLO8lCvERRezDUNAoaGqfQXKbmD8hUdGKpYr9AZFaGF8bdJIBDcpkE2TDM609mMU37rtG5msovpN5wvwzwYbm4YG8eRFanc5Eb3QD7IZOabFrHgDEA6ZfqsjcuC4Gg2pcFZuCMJRjIlP40peyGL0I8fNWbDWiVQqt4ztPDmBKWhMXXL/uv79bbv6+ytXdGq8Goo17WhPRW8ALaGEIPmjB+5SQ1G1OoqPNXpK9PCruG3UU4vSU3GOECYBDaD4w4hjvk4YrxfM0ekeAdNH3odh0NzUjEGBJKD6NvOaR/dsSvcS0BfPhqYp3Qvwk5i2hTDlPBXKxn3VP6YGOXKAwVrRJXvATHt0T1AaVSiF/KMtJQBKmJrllfnUzAjNUbPumlzujj+bW0fhFIkhUsgASvWpItFNzgmS/8Q5SXyVwGqwnqBRG+yFiuqcoDkh1znPuTiVxfT9A/w7bj13BeV/b+Bu5bhKNuc5szF9XqFYUxRR37xIzS2xRig9r3xXDeW6KeIhOddinHP/nUto8oYgbt2jGjdvy5eCMm/H5Gysa5cuj3U3rwoj0wfafSaKrG6JNBumT8vEIl12slEN0KDuv+no23rElPRQeLx1+PLGdxouGiBqDcpDeAXwY89fcswrZHxvfOJTz/N8Z1yLBQS1B8BHjh49KaLdm3267tuyi4fthfZrbj7QnMtBvsPAFQ0Kwp98YuK20uAoL1560e5LwOPzvkELo8wsdannHMG7/nSjnMWluCXcQaJLL+Zd92Y3PlQS8kLeixA9l8kZMbZwfmqvc3vTQB4h5zGf33OW9fucJ53nwARYhqkIxl1wkvrSMpvGqGvN+BVxfOtbr+LVu2EN8S5bW1rgOkMeGIVpMApNzVU+T2L+ZPTQkiUryEPvzC40VbtlGprSECS1KmvWkGC5ta6DTK3ytKv/eAEdxfLZGLeBm+Q+hOH2/kUyGnhM40ypPceT6eopI/X8LNKstCwetVzM02hn+jYV4ag0h6bevzhV2NMr6Eo+r/l79xQ8acx5YN1+CPevo8cvF3f3iEKDFBKxQLXXFxJ13TmEUOnC4lZNlyzfha4k1gh+Krx/USjbLgMlm/UhuT1bE6We8r6Jjw82tirggCVoS2wkyRam0Upb9saQJUvIHtQBH76cY3roMy+iz6BULc5qKcbC1y+eK/IPvj8vm0Kpd54Rk5ra8PBBmmGhxJq+9hIIL1nbjUX8ke6uUQBGwUF2i/3cNQLhSBf92elZdwkAl8x/g/wMly0Phd0fdq7gtSAK6O2DgL0XCatIFkS0gSRSe6EOYkQ+6Ga1dI84P1/sl2pjrZH0l9Eur63Oz1bYS9Lsp4l9qj8ehuJwG+1DV6LDlOOqiIRNNCnbnG9Dhut8PxmW839ICuV3/uL9ZUgG8zIgo7p8kDbNPVsfnVHnllicy7ZTlw7y0/PyY83LAlm93KgFyk3WMuQI874XZZBYjJOdIxvzPMTmteCFk3/F8391kh1rgSLMLlXfHFSpPXXyr77A2utM1Efyuf7rL6PlBA4KIAwWzXmHpyu1qBCxiCUloVnJvulMSZblu/a5sd4igHIwJPM/fpakJDEUMKWAh8ApmZcC6s+l6y7bflRULcwVKLcEnL8juUhU8Gkl6uULIt8cpjYsgpj6TcNNtFug9NiLDKBBAnhBA5cX7yNZYFjQNUyLouJ79sdIxksdgmLvyu/eQnr11W80Dn33I0YQ9Dl/RtKlWJYEpmTFmVJGIREjG81bFQnhlolHt19zHX5Cfm1vcSUMGv8C1oJNbaSK29QAllCdSTWqOPvV+TLI6ILZwqL5FogK3plkrel1JUg/CLuhf+F5wsoQoTb7cDsuIp++iB1vVAEmHldfShgd9cZ99JEFWe1qbxDqgv9CNxL78tVX4VWn3uonNxf4c68/R647l54Sx2ZGe4lC7j1cWRcVuWiav303EWlPuewq1oWLSBcuYkdqwSePnCtbHn7If6saD6pXXU1M2DeG3G7O9ZnSURKTAmdr8Tlc/j2k1/nxsnW88p7q2rZBAAbb4HP0XG0MhMMB+Bw5Lq3O1EJwnGDN8yGNnwa/ZW85atsgPBIOOCp5Afw2EHb9lJ2ZOT7Xy1M8wulYippgmdxMNggmwwImGx6SlaXfy7IgUecNL19DvS9fGwmvhtzWqyG8eutZErbh77KExaTwzHHaC5bOfOb4My/ip4H77hmS9I3kZTvDlUlipDLgymucU1QQn7rlSYSevIWV73s14DpjjARerc/zTPpUxj1y431YV/Lvvw91Wn7w1T+o3bPv2Ure1f2nXdvZzvfvOZjFgmXBfTIcKdEIAJpGh7p80/B2ojwpUwfWcEREyTmT2lSImtSYK2GdpenWvcTStDTU5Ncb0h14+gRVAC9XIqptXeY3wbLA/v2SCOwGJaeGZUvJh6G0iHXpyZtr1iXp1tO6rvoBGGiNZzQAJxXV2u9vCrUO3DqJy5I/BARbQhg3h/yy7q2dV+A0F6IZoUaIVxIVkUjuG4zOqBlNEknqinfdBNQjxr1N9GVFG2OU/03y3Sz9xOceXkpWbM/h+470qid0S9n1i/94cxeJnNn02uzrm1XwoKZMKkC2h1eN2DJUL1aWdvfaWDLEGG9oZGgJQWO9pf6Segrf2LX3gp3EI2bj1u2bFec+5Xwl5osnG5NqTDlP/nBHmzHn03MU47lOjANGiQ4BcxFSvtzfV8x7gU1kECO2UEtMV64IYs3dAKWoq1VfuRYlMefHBxJdpvOnfhH0mG0xd3mthkByfhzsjLPrYiMYE8DqCl07AwnirdhU/Znnfj7GbsyEgl+Kpy3zBX+wlgAxYn3bDLlXoWcCQbb4KqvhmPuyc9QNWnvUDZryfGHPoFmEMC/RgSWIa7h7SNQXC9eiCRlYsrQwZTszWcrGUG8lmsyBjKREdOjkNtH6sRRZ7m8sfXiG+UB59bm5w2t10tSEEjMASQakuoilbBkUEKcqKi8lk/mMirDA3tJRaIK6o+lKe09XJxHXs82FJiU4JmhC95LRsWURn6bFLaTawf6BSiloq0iFOhw0gmrRlNvaSt12g4rwXMhGK8tK3XprQL7f32Q1R+Px2PqM34SaNoknOoo0+yej8inclYSa397ZvSePv4XUzuuXDRxoEwS17QM3X9NOZLL8zgt2NmGe+BQPu1d97ptfmLA1EhEdU4P20oemHxiyg2pMFeRQVG0OqoN3rt7wsSUNUTUaQkoyOXFq19ZHlpvtfhX8WtOgmEynG+W4nivmzZsCFgyZN2U2143PELeDu4r7KPcl6n3UBQqVYWRTnXKlzKLeDepaRl0bvcSJWeIIQ0O+vNT9wv/dsQVVjJsmbQADSQbnaLPV5E/K0Q45agGpVUFKQJV0uHalYEh+nyApk2pBlaIhvLDawf//wz8TNG9KtodyMTYASRFqesPmdLeKzIRa0ht8ApCFXbsEWeVJ+240DBXiX7KYs/2/NDk8e/MMGsMUZy1eo0S3CypWjiXEZZuPYH7Q77p0utGhQMyTABk8UXJFiar9/GQjDMJ+49EseeENFRuMKkGJv/ZtzKkiCczSjUh2/CRgCZvAR37CZBD6U3VWhQdvQ1BEvMAjfOSRAOEkr+qCiHnywK22YsmipjyfKo76wj7Q7wtifnmWbkuyMxH4K3AH4aHxveqs0gk4+jYg/9Eqz3C6LUCf2tYZRFJ076ZNHq09Rfvdi+nK8vfd83rmlMRalYkba1/FJrn7/oDugu8MbYFwy9DQVgC2WuKVhpntOCFcphvZjvfsIUh7Lw4Nbbnf9F8pgY6soV8mgI45ueV2LCslKAdBlFUkEtD1pkYiDYHHqwkdxpLGv1egbIVlJy0Siejta3kpqOgqTEsIaorv9z5LRZKTlqygz3kdN0yFjXKwxtNiXoXwsztINjvgatndEI8MEwuZ10HbgkDrfC2sIRSxqJanwDAEFbv9tKU25mDwz8ANE2a6CY+xYfFwWPKerPezrHougXO5ZVmQevUbjOPCh72yHFRFUcs1N+c0URRD6uOGIQR9CC1tGAQBLaaLWlNLc86HfzPxg49qqhrV24JL4Exwsdy/Xo5kNyV19VU+oEXl8MqtK8NyVFMllEaRmA6A1vPB/WC3KNkxKbxy24qIFNNkFY2INl6rwZbOpZfUxm6MxWm/vxn5/mfde04tMqx6nS844URLmFfZwO2mOQuPcvdzj3KfI1xYnf4jU39RWvBLErjmd/LL3MW8X/Ls5Ma//Hcv7Mwc3+66jYOvsfPb7FR1L6/3nGTn375/3ukHZ7u5sS75DcmwOZe5avHy7DkOM3O5gv7ww2hNeGM85go6do1UezjfnxgUSKRVIwupIGuxUpbIcLHk2mZfF8gU650mPS/iTsWqzlhB9RY3tdEtyksC/bRwEXjtzlpjZudch8EPAwBkAt901rrhrl9/PvBlWXGWMylJle930/648uZHqG93D4nSXdBiUUL1TSwi5s1T14WCUP9GrdGX+2LKyxJtmfiiEosg6Ztu878lI4eFDdQ3Gdoy8p3hFNVrpE8GnA8FYr5/d9a5vXjmd774x+YCA7hazonTcIaLcFnM29OYr/w8PWst5K8+4q+4WJREfVT/8/fkW9EDB5nT2YqB4z6/qvhQ1aHubEyevr0G/o01LPfjOrS49etNeysHH0CsGpB+VhOVGPhwnTj+Yy/TCDvPzukCeDeerYkL4H5dyd1CItk7qULUVbdEyhWWNMVPdXJsRROmzVUpk2Bjb5nPKRMjkqe2O7tHJQWe7WWIqPn5oXFBiUYFfdcE0ZKqY7dd3Kq/+rEHX/VZgkyiwwSZybW60oovdefg+isguGzThssh4KGesBFCAB0/cOVH4VDpvBuCri9p+NFrMX9u/b2a8EMtN86c/fwwsBWU9KiqaMQBxQS57wfufR6hFz+mY3btbsM0jQ9qgl9hEq8aQIGrSZvukv3/A162CX8XXrbRCmm2oPu1hHb5vQgePzB2IJuc2qXbyNAu+SAApuE3l0kwkpDj24d1HYWNDVewWF48n6axzMtsACTrXaeb1QVTWYLVWMyykKmPYZ8rzyXHsM9SAlN1SdRhPT2rL1d7PSPdyLsK0MU30/OmC5hmMuB35p1q/iMkPw3NZwEWZo0g8YPEL29BPouYGleIavTXdNu9RkGTTOWMMlyfzuKPVfV12EMp/xtvEdHdeVMQgOGoMWfz3Bwm+61Mo1E0SfVvzVw7t4zoR9/Tj6UWydvdE6647IzH3uQzZgbOOqPe3ntsNwV7TgM068b3zdRtkuI8BEadGZI/DrlMQxWf0RHcfAp4hI/vzDIBejQ9hXvJPMQxeRgFsy5uT2M8Cbkg5u0aMZbp77EWugZ5za6QJnK4jW5INMtL+5+sXZ9xpsBUOo04/EvVDZpG+PzOy+zzMzBN4cbspn6aU86NQ3ov3WVtEOuMpmBejqGz5wWE0+cA51SdBZOwXc5f1sXS9S5CcEfnshO1EAsrfInZW5mO9B3Gz0HGOU7jn4/Mm9bT3gySXDiQ3HoZvBYHuRXML6JeM2u7BuGa4oaGWeY9moRnz7x8va6dgCaYkMRctrazn11PfUdr+Pzvmwi7lum7e0NNg93i3OOhbWb6Jiuil936o2kFEwoZqdO+mIlur/0O3bX6fI5wiZmewZoye+yDH/UeMjxlMMuhyAB/95SkYXI6JaNw7IH59GEONmuozvI9oeLpjPE8cuUAfNslEszrjxAWAyBqjfQY/veCxmu4SR/8tJ4iD6X0T39w/qU8rSJZ9fsUfDZj54KDs1gV7BL86ZQS82nSFEl3RHmXaXQHXiPEVjvAdOVEiUw1kGE3a5RLxDzS5nIqRP6RrGyhGOmt4M4ekq+Q4N5xGt4/vhdKV8iyqIu37zNXXbDKnLwDl529hFFXI6ovbaZ8ySVJX+oh+bmLbzse9ZNwfX/0+G0XPydpDZIwaPcuW9ZrD/JSA9xNxw+AKrACCAWsujYTu/6Od7eZxhEvBZ4PvsSodp+bTyZ8th5lJdfxjOLNs/RIlpAQ0ROpyM5JgNY3dnx274Wf7UyvQzlRjEbltrP19gbVR/vrO1tnTdFSdR9SwK3XbT/VFemDsD/SeWr73mUk9ZJv3QfOBggIGSiqnAsJz9eJ5Asr4XU9QmYvUcey5HG4ryEyG4n+tXI2e0CFzWehFLE7gVCulHCnp/djHiOoVb+jBwFC+zEjfOUOoXjtxNQcipqauLaZ33ElCL7z56t9odYyvD/kWy2V4WQm25DTAwE915DNBI1Lb4ZgyyW+o2yqHvVdsgXAmy/FtGB8qbx87dLxvjEvdspr/zjRKf/XewAKsNhXydgirPyX+wJuuuohBIAD0ENf+sN75fybAOALur/hBcd5kfWQ6ZFfQGN4vrIsPixCrFAsV6jvmWeml5gXms3IIeljxSzUI6NKXbnoFYhQkZ+XJ1VW8RSpNH9Azvl9jaqeFG/AFMQIxwBY1gaeaV2GOzdVM671eoJA8Ad1os9UHdGHY7IQaSA+NzAV0oAeTCLiSJ2IGB0NTkfbMlzpT1qd4WB9ILcrtD49h2fnYLCMW0+jE69dCIOsBwOa6LS81BU1Siztfy7j7RTlQgYxHQ2h5JSpEepUMnZdwIhUHzxSDxw17QGH0tEbwsWA2Rb5gE7y/uvOlBBtG5gD2YgdcDaYEYBxEPhGwHYuqkHw6RoEN9buzYOZTw+mIHBzn4JE0GwAlCgBsKR9DoAoYNsB8BMzYgc+ycA2Og+kC3x0JxZYmb10t8ShGuY8EzibL6brUku2finObU9FoD3PuNxBA8JHRQEKvHDjprRHrahTGklR1eLxLGxTWH5+Ss878VMQQF74mpdSn9YwOT9xJrcwP9vmxe3lFsmrwhY81Z95W8XVjSjJ9dToJgRj18XSOfZhHMKN8DpBOjTt+d2xfm66EfccCiLFDF3n8RO7z2E7/xvcG8rL4e7RkXe8bAZfE3gMCFKCu2vyw/dQhrOI7RYw3OYngQFk10qiG5MybM84M8OGjBoLiP2C7pXMnKFnruADavVpS7lTABJ4Qg34VfC473N1nr6vT6swGPO98ZovFoTqp79PZqL9W0UN/JtsydV/0wDQoOLPO7S1gPT9GElOpTz9tALDMeVYHU/ktTeCuaL2s7e5KBUl28XHpgJMFylX7EVa+vNf/GjlzA8Y7J3Pg08wR+XTP950ljb+7Lnn7M8TDu528GVnJSCM4uefn/Pln0GI4lLOQ52dntqVcPIjoCZO2BG29U89gvz8L40o1LaNVPYEhbBvVtVt/yEvTPyQ39adf65jweFLo8hvDK8EwuU5VcFCmOk7w/ktFHU+5/L6g1Fk+UHaZ1afdFfqXBtX0+ydbhvJBuKuPoDQrTC+XadoLvhBf4XphRfthUf5CGVk3fDtXGYXTS1miL7IQG7dddEv4R6wEPeoceg1XZNs/d09rN5XL2ywLi5dAwI+snewZGAst22i++ekX64WZor0+OVB3o5r5wbBqwzxM5n1FHoCy6xMB0s4tauI3+rcDuBihpq3h2k0kzhPZyYxhEAIvqsk6/cS+dYrmiySiInumOvuHz7irhqCD0Q0aVhAzZCdopSMUu3T8BEGMdutAguwjZCCxrFnET8k2WliJZ4i5uG0LQ3x6NnVNV59mSCoJgosVePq0gCGgI9Pi1l9zRo9K6ZJ7kC8cFIKDMXUpCwnsagP8WUsPOXKHfgQQc8e234ZH9+eG2B254Hc9jh/2fZjz1YHXUSZhZratUxRlnXpPtnWJ01ZW7tWk81J3XZ9Khks41w/ltwmuYPcIe4uTFRzjOutD+ijGUlqrm5ng6B1DphJovX+RsiaL+bVQe5YHUhvJFq7br6xBXi7wrQ08t0IPWCdA6S68LP3Hrje2vhcWA9RVA9rJMAHDy7fBHMHugaYhmCg60AObh47+KDzyUUBjlH36HuOqRf0Xrf/ehPdH7GmMT2r13obddme55I4ydKOoa/fw3oUdHe3mrrn684ptpM5PYJZlqLsvlf8VH2V9gjzKPS/8nHvKXxkufReQS/TvZpINoh+uvp2cZeSvc5BnUM9U2rW50+uj3Hw2IeFrGdpkTgIa7GYISyFT9ZorJsxkmBY5+2aXP90rfTQWUrO12rFry1C2El2faqPJ1/x5H+XDznLhWvn+iXveMTdQcvqo5bmYsY66E73hT663XMX6O5xecylhOrUawWKngqgD9VkzhRAJwCJxEKCKFFtxEc/2XFgWS3bXG/747gdM3XDhyT8ODH/IuKVdXc2X0t9t+JQ10dvpppy3llWNzNquXbGqO00QXaEzRct2rJGsCCHE1n/EmMUqdqmtv6JCwS449JfkERO52/diYIamkvU9O8YRMmjigkC6gWrVEuSNFncpzSpk5eS8MHrW+BnSNqmRwdW+cvJuaxMT5z6qfPUtw3j/o+aSIpqLwSg/+GHNd4f47y94l9Fy7kl3Pb6deNmpaolaq/PSkVSw7wrK1Xe3Q2KOuETCZ84VhLkFUGna4mpfHG/4Fu5brG8VDwM6vXdrX5Kkix11QW0x0clEkty6aSal/eJMniF1bDr0UF6v3tq9d3P8vyzd5MkVUDV9OYQSVIVNGSSokoNSgo0MDD+EiHz3vsNYLzgiwUE38N/5IeBb+vR978XOwiVaPgg2f4oQzj5XMbVTS3MxV+fZ+YITe0bt5QrAFUzOz84QLwvzrkB+YeBIJwgyujLSbJymun4hBR8F99+jrZadXuju/z7e2+RvgSdJQmxOi3x771VupfmmO6WXtunBJ/YHkdEozdvqyFhwfXC30G6Rl1A8GxFOMm02kzDPVOfLInYUudU/G6cFGuLxeVoTOhSjsvkat4FVB1fLJl0n8X3dW+uddeMjoKpxa8WKOCrs/XpIUdB2pn2thYmLR6FU54+9Ek3VnYLySBUIU5NJRKb1UttWDT1TwqQ5WeT8AtiASszBwiS+aKHbSkaFoPUnYbeTtGNzoapbEZOWcYJY36DCP4scp0FjblOEnhCHSGJyoTLhmks78Y74P9SHt1BI1tXHJIMC5odofHssgZekDf//bV77sjLQR9QBeXin6g+/Kt60bWJLT/czZtqNMSH1+1CujaTzaqmgiQfH5z8yUjFArwl5D/Yf+Hp1clBg9caxmKhylEy42HDsBqMqRuzgpDcSlyjx23eTFhvdm5Ot0+oIWl0E1gyoOTTQnMrCjvTr8mRmHLeU+s2X6EDo7C2EQSBEDMQUCxL1gaaQod3b1sLfC0KKOUAGC71JeWMLzZeQKK7P9SsuydRiVuF5YUt3IXczYtLxPYiXilUuTFvt0kmOM/tIVXvsXKuZDVgdpF9qVudmnrDc06hSUo3UkmCuZJQo1aqtjP1RXMLhhrL2btuAabrNqt2XqnbrPqJd7mnEO3BqLurO5XcyZ3NLNDiVZeWT8+rnRbm5aEj+50sozH89VEgtfySuTnPaRYrQwBDQ+siLHNjhYHnfar+IVcHurK7q9WdwP/nj+F2PfbnGGuTnsy7dK4n+sSvGG6Kpq8cnX8JuToQveRaMi86e1XepXN0kcrYZU2n9ApqxHzDKLHHDYNaRKxIFW9SKMK8mjC2Z7IG5nAYJ0FzBbtiR5idoDTagMA1l4iTlwCUWXvhMf7Jz/zoXkF8COwygvxN67SA1tIP0PZeEqKw9wAAS7rXPiSCoP621PvgSmP/QQCuurTymaWitmbp1i0AXbJ0eCWmQ3p4XANBbdyvZm8e3VyBdHfOKy5Yc19HzL9j0DCBp2N8nK6nFN3fdYTbc7Z95jFOIsgmwjZlna9umtv+Zi5O6Bzx6aO13eG8FXHSsBB/8np/7Ox70zcwzRk98u+KMF24c304oV9zR5S3AqBtsf3rnapXHT5+e15ttEDgIrv7/Gbe155/kiswLraX2bzf82ff6+xc78/7Hdwx01whCll3DzOmfKUkadEfwAvz9z0jyUDYG2e/DaZr1bSQSsmuZrXqqtw5fpz6r77I1tWreC5ejKG9nmq6qdsAi5gn7GrITX/B4oD8YG7zCRJp2mv3uK6C7Looki0fMS4nUVloFiSce5Ibk8caGsBNDZuSubgqT6ox9ffJDSllWImrjzc0XIfLjyvKPpXcN5qChYbJhobEQOJWLHQ7L9Ic82BcAR8tJsFNicQx/LRzTyLRlFBj8lZV/X1DgzqsKCeSG5LXNzScwFXuU/Bdw0hsxU/GKw10j0BMmlXnG2rMxbMncX9HueV0dl31fvrc3SMt7Hb/vG7TJ2gSc/x6XqJAoDlDCRgACZ9iCQiKC0CyueFdIIkcOxtMLkoSmFQ/OoHvXKcoxx4H/3Q3AdBxVSVncKPqTNG0/GA54YPBlecEl33Mg1cCf0RRwX/MAcz5l3FVvQ5/5tiJN4/hn24iRUVxjilxcCXmdBUSWh9TuRr/OkN5xijhsxdmTxFqYRQhMSdkC+/e8Cdso3UL9/R50k3VvBSze68ELB6cv6ehKxwvpwxL9ZHdfCDi3K16gLt1zwkvPGIMo9hYIPBptX6nnqBxxM0pMAZn6d4XZ/OM6S3TiMYKBuevMEL6FYVjWtA0TQBpBdykKL+GNDK8+savqUvnLC8IPEircQ+n/wP6YxTnwhirF7luKo17+Jk41rNwIhYxvCBp9Lu3JYTc0/8oCP/4dLKYBaCY3LxvCgn/6JyfLBaXFApXJQuFJcXi9+ZdoTh+HL+En07kE8kCgEf3/fEPnAOA/Lik8Kx7Bu75G+55To9OeI8AF+OyXJvXcjbl5zf6bG3FUg86fWJMTatjJ04joepcfDYPJTSKpaF732jco+t7Gt+4F8tFE97enQvONVpA2kT28W6n8BziVnJr2T6889JBi65MxwIp5jeX+BQJ9RdS/QXkAm6TX/T6EMBSG3rqXl3u6pL1e59CWDi9zXUxAu6unwnP5yjtdoT3OobS6NljNz1lQ9/YmA/aT9107FnnDs+rK50+S8mLA/w57muJm+DO4/a9Z/Ymmj+tLnkTcwcs1Rae6+rrJm0q5NwsTsy4UKEmKjS93m+Legqi9afafELATd0kSDm9vS0ong/RyhY3c5Mu2v6tlD71FeGdzWXCt1XjpSN5IdR9GKFge7uWkwQ45aXp0YnYqaWDXc0IDgw0ybGIIMFIX0Y3rKRA8jYhNFbwLSN5m5q7gmmN5mkK0rxNcLANDAZJHqeDGZquyc3eZDgn2Tbnibr8IKMsfzlVbc3fFYmubpeW1+QMuES8+VOQSd9kPyQqj8MPXSjuupqy7Q+gNHzwBmcbk+YxSaEyPvjizoMQXL3LESkE/uODD9RyitTvfTZE99Oek2EW7u2BL+uduSo1Y+Fc+5DrwtIJiyTWmsV4VEja0bpcJNQ0SnfgYP6Baj0SxGd+4c5l66rP0lFZh8tEThn/2d4BJPj0WDTc1HjhCvxVnUe+IGwtQzOkmJ3FrkbENw7gMfQm+89w7Y6LoQHG0NXfsurB/1fbe8BJVpV5w/ecc3PdWLdy6gpdVZ1TdVVN6OnumelJPREGZ5hIzwzDBMlRkNCAKCC4AyiLCNKElWUBBVSMSCMKKIuifvIu/kTHsLvvuosJdX+Gunwn3FtdPUF593s/6Ln33FD33pOe88T/46Vc+z15bCbiXkIb6IODy91ZtL49bkFeNHF9bjCMMAJGQNohymJAE9WFiba815GA+rxei/sxSfMRnQBWNUIxMODNc+ipNJCSV5Emw1lTDfDh64BYet+m1nhIU5VEYKjmWR/x426u8WI9F7zzSM/jXWLfKToqeJLAy2sLVuswSP1bza3vBA30BYpSWTo4SjArjbVX+3qsGZTigtxi7gDx12ZmDoZSQ4O36oTlL/f5LtCYc/FD48eYXwIxiVCAa8LdioWyWPafUPNx+8JNAYo6E+L23pMIxnULhfSlN4ekWEwR09f/3Ah2KxrT5eok6Y/uqF+/7e++pvUoWtD9bTinRqJbHT2ZFTuS9f1xAC7cH9p/Pmpbsfdq6BjwYiMOLjsKIXSSFpCCWV3WYlollwsa51rICjA1sa0YF5NhdIOl6ke+zPNfuNXkLfUGI3hEtQoRHgDId9WzSFDUSKTjwEUIXXxg+aMjqjlZNUIhozrZ9KN+Ca3jItw53H3c637edoLfXi/7WWbIojEwWKsOLARMXU7+RBP5RCTKFJiUAxyDBAZUpAnO6MRksB34KsW/rNG8T7QAmJ6aZbolXRT18QtobF+0CRxUyJclWijTnqT5Pfxuxb8uDHq8ZJ7hhNCQIg8R208zjwZ19TXCic3mniW07DVF2aj+EpIkTTxCCG59cjmED6jqXszjLZggzMwONaEsqH4QwrbJDtHQQDosYX5RgTxcSS5PYHbGiul9I1AQIMn2BN3/p6dsCoHTc6drWSke7i4dHP6lFS+lVpQ7S6YY2JbbpuWkRLg7uaLclnnTjpVTK3qTQ6EUFqB5CQQkRy1uTIccuFrVdXWDoqxKDAbTho0vur/DF9s3pB2HpKPHlzqV1wi9fTb3LOHVv4+/dKOCOvECRz4FjxqQLyzD1cH88V6FVAfT6B24UL0ZL1AFXlA1mG7HK0mnw/NoJWmV5aqipKNaSQDE1QPw/F++GpSz2um5rZpoLri4uxS3fjV8oJxM21JO25bbHhCNhZf0YPb4l8MHO5LpceA4mQ0lxZFxPRBvG6nQUHINbmL8BaucYGYduYRrgXgLXxpIrFSUDbgmPk/8HOYz09wwRYfAc6ybGinp4k1ccfFU8xOalD27OmKOvHQ0YXpfbHE+R89hAe6LpFN4XjclXrXdUzppimqGlDfOEPKymPp+qtAvqYj/Ryzf/eVtlpmHKsMYoh6ZPlpfxhACJF+ju5fKhGVoBB0TfNwI5ttKRoAJ48E5fAIyl9Zi/r7OHSLWmvkSICgNUgtGc9IsBp5IxKYGriAFXhdodHzdN43gIS2VPAXqWDNlEx37da+A7vw+XqQ3qnhYkPHh3gdOf3L5w4qyFx8umFB0oCt41EwgXpD1UHQkp1oCr4AzpVxgOx6VolnqKq9IlmO0j7vCMdzHW3On4z7u6Kbn7Tcz2dLKZHdox2us48jsUZLw+6BQWPYJ1RtlZEYl1OVyQNbtWDSJQEDRYxcYYmB7/nQ88u10snxg+JdmvNR98QK8Gmyl88RJJzsOVt9U08meS7i5uPqfejqNFRzn2F6cOcuXIAotx4QcH3vstCQEyVX9nOLjTMumq9/EvT3vYCkNGcct9LJu725gXpXyN6RfQTt80T0q11cBsKoOulXd0N2fKLVVEK6qgR7cqkA/7kRjPWhPMk0l2ybbfV//Z9Bn4BOYzhJff+ITuR6P9qFoM85EYimAiRKrzPii4Voza9fcMkzSdGFmvkiNu9Ru2yzBu00z+tjF130KLV3UdnZqOGWYKrqjFgyH25PJrwdTqUI4DG9Af3/2+XdAeMf5sb7oadGBxe7DmuNodjh8lxYMasFQCLwM918D0T2XTZzXvXehqIJc+7m374yUIvjvVLZz/3TmByD8wJn7PwBVcfDU4tSeUDzU/GP6R9yPR/G8LnKDLCsQHuXtZZGnK0NFCoWjg8TwxVP0fBLCPVibZ3c6SqJkV7zNfeQjb3MryGQkqbsBXAHImRWQnnCzLXo3MK1AURA//EkIP3kHJoJyACETIZ6euB3xQAb837do1byxxr5xAc3++g6/sxwaDFNTcD/wswAUT6R8fkd1WDr64+uu+zGJwGJ7d6qlThNegqN3UDUJgGs/CuFd1/E82X/0WuH+lsq6Xp7zOTpF7Moyll6XUd8BLwn9yY3LZED2AykSDhmQeDwNs3XaS+ICfpQolbAMJZ3AzJz/MjEzx4kOoFy1nWLfcF+wVAr2JYqZG8lC2gG+UKqUitUi+IBnbbaqx1ibP0swLDqG0/lEX9FxnPJZHUHHuZHAGXbMq88ibge1BLwjq3OZwAQca3VGFHSbUF0xRPzIR2F1uFz32Jt6bRiJ3oxEs3NGaGL5bTFCi4EWI7TDQ2eeyf3nmEbemCkmWCMM4wrZ1TJthw7l+85wqYQbYvZ/mjAJbFTVGx0n2HFWGbdTsS+RTw93EHano0ONu/87SBt6zt/uOdx0MZqzxsOd8QWxCklOXomMAZrgjdkouwFLqZQmuHqeQYSY52sUY5Q9AFLtbrWr8QbbF3RFNQPXg5+RHG9xx9Gzpo0mhcCDJCTt7osUVeSRpBGY0fqDREF+L/uZu6+8AMyotgCMT4Ojdjpom+6DZLUlHhRLFvEk49p2AU8fwVDPAYNlsKuj7vvMszotouvvyWqFO98L2mwGTkk5qQuIBRPkw1IVC43/V+p9B+LFcd0hcGtk6z6IAA8R7sNNOjznf94kSyDA3Mu99JH7NAfQ6MGLdmkm+Mf/s7YisdS2j51b8OGUhIyfg5zGTwksCWfBofHeRWZKx1w3PWK3SmAWQvenBCMVf3Ge7t2nDRt/ZY5s7yfIegbAvJNtNPQQsnSACDtV7chmYa0DEisLKdBop7fxsG5gZiyL9yQIqtFuJUIgTSKi8GqdAlYSH5HIqZmOGvSxCVkOJhaXuMbzpZsXkxhtKTstNtOi7zOFZbpc9WS4AMj358yVWwO6c60HuImpHfO4wMVXmp7k4F6WmwuzlI3xoM4Sd3W0oD732Yw7hbOeq737SbYHHiCTn7536ZwvuW1SToNaVVsxpBs5qmI4OnNsyjGymVsHnkfLqS+Z53ledmg0TYBC2UUdqYXvoMlCjkdxFCgyS5PEomDttPDq34hSLC7+8GUsDcvCT04Jv2sBw0isvSty8X5n22J61PgwwzykuIjgN6l+yxSbh1mwoPcIeFGLa5Lm7gX3akQCdhf+/cBiwDAeF/a/8Up1GaAgi+5PfUhH8ut4pM0K+kecZ49/zsv7yWI1Jrkt3HmE//I6kFi/HLZjp5ymaowMGF9dVhsuA1/UxQuE0OKxLswfVASCNwPqoBJmWLyAPpWOCqqa69WZgi74OV3dTNZGvMmSZeAMsml8j+VUjTsKfI2oCHWiLfzLU9QBhQCswt6ndNW9k6Cwgr03uP9EINTBGQoWXTx/PLxpzOJ76Q+MIPizupk8DW9C7uVk5TyDLAvgu0T4o7lV/52NKE+emVHce5mBZNv73XvwL1VwjqJ/2gjO6RPhPzHbgEmUKZJnDqrX6tUo3dkl1G9b3wI5y502DDAtByULfItuAXxAVm+5wAmq7p/VvOL+SUCqc+GtZAtVp/n8/yCIDwpZsW3ipELNDYMuZ2UBsCRbhpwJPgYmlGCw8Z6gygtgQs0zvhPOwmna1/Ozu+bmZXedMuZBLEz7EZ0tjoy0zNbKH6IHUBu1VTQzQEbDYoQGswCqZWwyfTe4f8xszrhf6MwAfvLi941s7Qd5wzQbTzJeDkvXXDLpzpZGqkf27QJLhkCnUewsupd6WSh9+8IDmDaTnJ9lQp2LTS18k1UriKV6dS7RaYgqPRzR/7I6hbwBZMCWwHL2ahaqEtz4vosnEWjrBKsym9NAwt9muD/qP32HpbpfaLcB6t78vtJ4fxJIquL+Ea8Z7LuuIYM1GXR/B3bvu7W6uAzGE4m3OaO9q6i7rw8uwWRbcWfz7YVbNw3B3oEE0NQ2FdCYccZn/wzOUl/a02je8GO1l03Fom/vwlzbvEQ8fT5ALFUFZ3xM2JCndCSW52LN5/UoqT9B9P5QDZ5TGQNM+wiWVCd2BT2MOeeKzZuvcFDY0E1o73Y/BbetWEFSeZDt1erIQCKFy2SFxgtzR14zeEOrTqhEYWlajSRv6G1lNNxp2o6+YgtMxvpGVe/B6kRVM0A6fWCM6S7HDqST562hofanEFDaU/ALUdhcc96Pmu+D224bmIzElpZX7YIkwH9hT7kqo4iuWUBd3KdhKTN0uxER5Gq5ZyFZ3cHONeWlscjkAH1q32LVZmPobeqf5mOlcPOGf6X1oH7yWTLNhsxbbPcdtmt4c6bVy4yUiWmelGe8ELOWlHyszNacN9BPUIEzMPUgeRREjrDaEc5zisKyV63d89toAbL2/AznGHE4+ln3qZAkhcCGzz75Js+/+eTl7q/WrgX25XeSxO8FNa4ePkg9JA8S7dch6u94+LCC8lH3sXY5ohTcx6L4V0++2eACf9iz5w8B/qU773wJ/ErBvyBEEf8uHlIOUr/Kw4eUBOflgZ3GcsYklTGYqrEP+LD6tAiJHhwzEyEKlb6YJd8mvjUl4i3HNJZ09DKYCaI9/r2EKSFJcrHyc6bsWApAYk5NWaUzwraMJH4AAXHHOlkGxKEVIahYOTOQlGO8vOoDCKrBkFRdyF8OPy8ixVYzi2IH7lUEoNiK9osLQkUtYgICobP/Eh6dfl8fHzRkUS/ofG82kNJlXuu4ttb7vjVKkHjQVa5Y/cpLnp3h8+ghNMV9gNB3plONYhpfMmA0Inm2tJYQYprwtuRhGmLSH4oQRjtSpz5EGejNa/yb2rzfhjz4eO9yOBQm/6JhPKnDWCJrA0PhSoSJn/A1NSRLEq/wqz4WkCwdC1XvV6JyUIkDlHbsjBx7962CxMu6IAkaunkyJMdNR0W6GjIfUTsPtSPVtkQnBLsnoHpLfPd5ePkwAaplU90izYSFCtFk1do6MIyILhiz6BA4gvDe6wX0D/BpvLZJYbxkfvgAgLxqSdc+XeqSJSjE2le0ty1vv/CpdRDIghaX+A23bmhb2JZK48erFuKNbz4Ynb5c1gResHtjlbvedfOha/+8gQd4kVu2q5xb06uFEAzqbQtSuS0Lt/zuEGHjdQjYNwCI5QTAL//UgX/4d9+f63kazz3QihFBoX5z86AOfGwDAj3pwTOJKNvwnZBaVrkmqLv7Od1RwAPU8WO3Ou7zo9Tx3jNUevwsSWFOeI2PU5s+gfc9Bg+68FdwclujB04KyNyi/pgHDv2Xb7SgMcNEqybnWB/m3r/iw+zl3aL8HPVIIXzeSb2Xw0Rav5FZQXWRZKuZOXkiT/fLKlA+eBP1Zp1R8RjiH1ATrXlq4qTvCEp0gaqBCUXzDJqUsDlEkMhVm9hRnniB6u5PPJQRZw56ZAwzeDSUlMJzBMHvQc7DGAmpLzeorzWsEPAR9/uYG5z2RRAPHIjhit+PaVkIy3+clzRCQiLNVFakvh3MqWeYhBFEQujOPxAHmqoElyBN0REP2lUR/FBxNUxpnyaoyU+rcMVvFcXtlBT3s5YuA7AUieCXasLNqcqjCpbhlMcIGfXe/QB9d3b+uyveu0tNuu+AKLrrv5WkQl49ijRV4xEoKhJ+NXDt9xKe9oLvVMAnv9HycltTwFIo4XfH3XHK7J7XD2zwha/78Qn+WD3pSJ0/Ok82IhsPzxuEIq3XjOf324fljM3cTualfqKgZeCHu3vpqr34Vydn50jKVpbOPRJ2cg4hkoyhQczRsU7M49V6LhpqAZ+Y27hPjbNZnmXLLvEaPJdAvMAsKEeBYVs6TDYmkwBpVtBIFbCs1ZGBX4wXwfLGWigC+BUAp+dF19BgVJ9ykOJRdwqYPSUswdiQN90K+DamyTaWbHryjZ+194PO3ghQJUMzm74pX/V8z7M0j+027hCT0E8iZ3uKGTSHDkRgOhnAUzjkK+zKVBL1PctbFHmYeZxPE0uoYFfgJ92HCBpiXwHspHtbld2HZFWVwU5ZnW36N38qk6IxILn2QkG1FTkgSpkMbMgJzHQliRU/jVcZGa+2+QIABfenLZAvfbOzKItf0DiTvQjeU+hrOOQV8B6ybTzAHEZBoWd7J1UcDpxbHb+iZgpyPNB3CKjUuaRze0/9UF8gLgtm7Yrx6rkfbxVL3HEw7clI04BgMc3LCY+mGsuJvAif0SkAnGedQtT+QHAlI15Em+T7gMwlrxouiShfEHkpyEVrnFNqRyUOsSkBOfjSf9CsVVc383YBgOnRK4Kwzf2OZYHBnTtBzTbcH14w4v7K4l/+0JFvCbb7nzD5X4eJlHodW1bxusaTfAogpU1tc/+Xe5GsgNtA+2l7/vJKAOzF3Oz6RHJ92v2V+3F/zduLx007y7gleUp3JjkQ9VSGGu0R1c3jXgY5u4/C/hjNmFp0imXBBZ2diwAvbKsv2C0qAZDKThY71zmTQ/XVyHCPujNEENftoA7uI9a/v8gKjEIYwytwBsI04rFgNGU7RhjASCAJYRZzE2Am2GCE12hwVI5v5uLB3/xj/M2Lj/GdyJeOyYRbbs2Ni4e044cQ1+rOKEA/ohoNAPpLhcl4bHN/vgOA1dXaKgg685UNTn5jG+a42D3ZRATq8HMvvfg5zH2GEm1wKcs00bFYWbEPXj9tLinXiA2rVl5i3ngxQPtGlMUd7JZsxXCXWYq0hOdHRcUGz5gVL//lUZTBdZjgTuV20Jl6XF2qfXMIaeU+MO/M/LqUmeyaZ7BDRHLrIg7Kgm/l8gDOCXEbcoLkZ+jHgOXu6C/l18Zjpw7kO2nlcd2HNgbzm9pKA+yGbDICdPj5F/2q35fsTOI/94ZCtQDa4khE8Tb3W3jOdSYS8PuJh26//aGEmdnQu2f/wf0dkxk4Tpp4rL9zkTqxD10/bS0pV4k1r9oxYt14MUR7R9TFHeyWbMV0l9uKOIpbSlIs8BVzyEthcVGyUEjG8gjlY4yANF40ypD4JfX1TgCguf8F4KpBP2bhLtSN+YACV6OYKBTpwM9URcKV/DyqwHeuzuGmIZmUPUsmhRkWjj+FrtPlaX56KnjGNJqWdZsf6Yabu0b4xiPw4Prg+oPQnQ4H45qiOZoaiIG7grGAisuKFofdsq5MXYPQNVOKpjT+u4v4Z3fB8oYDJEuq8p8gFgyEhJ1qIKDuFEKBYAwcd4bz8ivPoiU0x+4gW1kJxt7xpqTWSO96K84W4cG2n3YacgKIl1RtLkTxiufJPCOb/hZSi5ZQE8mi4eDSnBKU5DlzUXk+wgb7NpYnMEmRJ3PzGSyp5Ysk6tVeP3ayev5V+Oun3+ZoJhS8dW7NkiLeOK+A9mQF5cvz0lZfE+YDUJfACzx8hiWoNTH9vpelmV1OcM9QzGjmq55zxpJMbw76uep78Ir5rpPztIiBzBM0ajwiGCatWGZw9OxkpHmSpoX3QKvZuZPyvmfqjtrV09NFyPdwrTasnE0Q6hOpVJJoGwulYkE5h4J5hYBDwKsC4Wg0rCzFD3m2wfONZ33u+F8E4V9ImvsbCJz1gQsPdJJlZOiaW68eUpZivjG5auOqJI0GK+4+uKtdPZXgeVl9FsGxku2+4T5b8vn752g89nISvVb04XUIofHzc5bz3okci0OggzBaYRqiSLRcGoXUtyhKaZVE+9sDVZmLB+kDLAkJ23suUJ6dEz3W/b86nVxAEUQUMQpnLorWEoVV7amoaZptT5xFgJxUd+s9r/IK7NtUjlScsSqviKmumCSH9ixs7+Bf7aEKWaaWdZJeYiu6rUzSjFfriLJ13ceDp6nQtIy0IWccI6IOpToWgZBWG9jyGYN4gKoW/AT/6j1dHWC8JzagREU11NsZxXMr0nfh2D2vukTJnCUblo2LrFBZspkkapDJSdKBk9w8uanCXcbdTen8/Oxh0UrY3zPdOHWqJPgsbE9QtvBKNLeSRcmiXC612Fxbu0r0u0qc31VSTiJ0kIxOr78yoE69qSkEGKGE8C4loa4j0QnKGhpnND5XuaWktJRuK2sV4gdb3tI/BHAT3fsqZjtCSQuzH49de+2jPBjsB7mhQEsnLozhTlxZTEVMw27/xkHwI9yJVXcZ2PBYVgJAhHYtnhnLj19QzgadoBYIl6XIA6fAOxWgsiRla5qNzQw6zcZejWWfoGTlK9Mr7v02z3/73lhMN1HIcELXPobw14xf0IN0CyLL0jO63BYEZlitJDsWkUzgw707vyiznr47m5UeWBsi4cyVRG6REbMAhHzeiA9qQBjNvdv3p38W89icZ+GgyOGewYJB488TN4u+KYyQwFZS0kQOrzHkcKQSedL9V8UJWOjPvvw5Pxh243zEcNPK980AnkKGAwqIB9IW0NQ/Ee3Cy43v0p8NvOrZt4wTQYZr+wlkuEzp9o/gn7gRbhN3kJvm7uUe4Z7ivki0hhkquDN9Esv4RgaUn0iB+k6x9Bv9JL6G5nukHgu4alFRIt6g0Vp1TndXpDBVVJtMlFnDXl6A4aIH7uLj+zPaUSt5CQIIsIuXHoC8uhKhLz7GGaSM2zIv1stUHSbCLRIIxaSumNhmzk8P4KdhkICqRmXVkWxhSkEhU9LhqpVCQDKxSPUwyCtWKCilAabLJGNAvujqWALv6+/rEbBwLKhqrlhqV+CiVE5NmkBJxQYqpm1E5ViMX9goVuoLqiUVhWJqLLZofHzRAI+fG1CQGoNB1o2jpwBwyijuOiAckMzlh40gKYNNBPBfGc5uSunz0wZcZgdhyMafIAHFwPLZpXoqxNIHhFK6uHoMES+XsdVjF/XRjJ+du55QlL7zLj+vT8D/qTG1ePqe09vV+L58jCJzRFOLPrS2e2NJS9iVsxdsfajxnyO3zdy+uETROkLxiU98/uGJAR4CQ03KzpHm9y455Uegp2CqZ6HKYYHk1PSwambRz/GcGMGr5zncB7h/5L7MNJonHBh0jvzVUTXqB6c0E6lS5iZaH64V6XA5fhQJzYCW1pEUweODMXEsk4SvFg2TcURVp2QYtei//egpuFKNSaojW8cPjU4pFJM7Y0LWKDrleCIeL4fwsJJiU/iYDCsL/DiW7O0kaZalfPtCGWqqkpUbn8WjBfdLz2DLAIIvCBIfiY7UySCykZqKDlRATnMafdUFC6oO5vuQgns8FhtZioeQrtARFIUfw+duJqu7Oi5ogqHMKECfNyq2b6ejooK/AaqV3KaUpkMxk81mRKhrqU25S+lY0uLVzq0DZMCQBBilXZWdG9SELIKsIH5+kIyVkNpz3nsv6KEDKK62b/+IoAgDB6vbHpzIxfBvkjIdRFvWC4HDi2/bsOn2xaGAhG80kByKrXxk9048gvAYISMIr4fqTZ0kyew4ftaMGpvDDn226U9QP0ZPRPP2hA2SZLbYUhbo1ssvMsQ8zsHbLbzVLqJfAHTjHp0rg4e6Lr3xki4ZReJKdsfhnTk5EUbzs5U9hQWN0Hg4mQyPN0tfrS1aWA0kLIR5tN6uALISx377AJbeDs7/dkA8BUmYxFCEOE1SxgdfjjJUGOrgni+dqCL1ubsosh/zOWRPinpPmldZd7kipfK48xXQEZdkWYoVBQK2Kcl8ISYp4OcnqLRI7lFEhC/Tm9gTdLyclxOiosxvkwdEtZAWVVVM5SC5B+ZjWGpQJT6RBcp/Htc4/zLvuqEU0vT59LdNneQVWEaYpAi6wx7oKEkHU6ZKBSww0H7GU5ldy7DQAf/YBCGKeuDRiyhz1RwlVIXA6I6RQGM8gyMU9g1dCrLdOVzXAGAFTYG0AIAcwMVcdxaTzUSxaDqFcnJiIJMLX7hm88e6M9YX3y8oiA+A6DLMv1ynYLK9TFXA2D33JpLJxHdUFYSJYTaRuGpwbQDP07WHJsmFjZ/YoCqqump6VTQaifzkssPl0TYNgEUd+1eW+traweKJ2nuUZyUgGucE5a8EVP0cj34yfOwgF+bKHtKyhxnXqrcbLkcpujJT24WJgpPYDlscIk6GCI4umxU00cdXppjIsxddNNXwAnyDxkyw8VsWBEx03BtOAqgMt87yQqv7C6efdRGBxSBZ0KnKzAhCbp5U2JJXTvCwMcbxbK9j6WIHzRpC8pP4Iea4t325nAYmOZUW+IA5MIGKY4C5WhO5hNBv8gRK1Ydqx6Q+o4sPCxmsUL0IuhVzfrdKl51ubbtMOoKlLUdc1ge39i0TL288Fkkj5xxi7t2y3BrfCoNp+xwLpd0pJlcSb7IvdxMlBE0kmj8/FNfC2kW6A8bN88/HMyoZUm0hgRfchBSUQkkgwXHdYTZp22y82b8EgCX9vfg28Osp8sQjk3sg3DN5BylPuU4kAbNMcJ1NI5TG93bnz44DVTvfKKT6l9xyzjmyLYXiohRR1YgkYgnP8PVhb6D3IYHEdxYx51kmPJFA5ogYtkuFPFXkURsitR0uAbWyXTzuArqGeNKGdTdrGJj5zZRzSwbtYEDWVwxksz0jAZJWZ6atnB2dOzuy9CoI4BQSdBNugmGD5wX3VDOUj8SrifZu1aznJUXQdfDHFW547nToVEZD38CypsBpXIJmGeGKzSQv9VodVIt21KsIHhjhE9eiCmhUM4tpFuEhWfK/zNTdq8DMuFchXRYz8z6cVQdymtrIErsKPKo6/yDL7PsEEV6prHDbR+ESr2aq+5dXj6/Wv7nvVeAsEbQb43jr5YJ4Cv6cUziHI+hXi6j2ifpGhnPhnAfAWm1FCivUW0IgCwwfjIx3fICebIs2VFxjtPcvHwepMHTD6cb3/0UzTY1u6u5vyA6YAdMMvFIj5VrAsgLw8WgbAG3Rs2vu2nA6HT7fwqJz1DrHjJoAmKTM9s24Rfg18D3cD5hrIwKLp6uGs7zs3iXL4qcFjf+MCF6WLem7PP9dqfmbt6lenMVfRMjEhV9h98oyOIj/dXxXEL4rkXfNx19tO2atZ27PhFdkOQpD5nykI+qEfB9PjLbSDBFwbpoPnvoM8Vye4XmoONLHyb03MnvI79AtSKNx4DmuyC3FK/UO7vDx9hDJV5EW/AI1DxXywzSdVagbSJU65WULJFwGVurRgkDsQxWS/KKK7yrQGBJMoEjONEJlCDwYXrTQhsaZCWK+SMB76H4C91TENE8LkD4wb2lcCm9u/LcQM+PvkVBKhO9GgqkKfeadjuwgdMrB+DnAiI/EgpOID8l8WymkCMPbwhnVDKa1WEBfUsTrtYaf3vqWlayD2R9+geNeaEbL5WBI04CR+PVbaSxua7/5wHnDXdvw4oREzZrhwdnjsfh7CuGEIE7sNoyUH1sAX4NbOY6OjDLxHxki7HYpD+Gdo6NLH1k2OrrsEXDdnV5p6SjXjEmYhbNcCre577lWbm3ypu9aMwYafcqyziNLy1FvaSHov+dT/wHQWOqF3l8pKyu62HV/LSsvE3g1CGadTzeDtFHz/UNcjWJ6l0xIs5SFJXue4Yt6qp7os1C5StxzyQ15ET1hWTMIQeIs0IpbRcrHf+zY1FSjGQiLP3gK0xiBpDTzMK5mm8g8x9Qg6J618I2F5WbajGbM1oyHQjg3aitsiRvyEhqyMTzPV7RVg3l2gwBEg/7Ci4lOdRFvhyx+kdoZf7F9AICBxoOtvqHntWTzhveB/nZ3dXs/SMVuIzro22IpfAZ8vr3fvc7PBd7fkhecOIGKLd+8ENO+5V68x1/9ckQYXurXQhUoUqHFMjmXZ7rYLP31Gpma8mJAWKQNjAxoiwT9RTmgyvB1RfvUJtA70dc30es+Tkq9+O+vVLHxeyUAArelcrnUbQGgyeDzshZQvpQnP+vNsx3XyruZdLT30TqfzN7K6lT24SeaBQKy0zQs+qFIc64kXg6Lf8S82H10DO0xgg+Eif0l+aUQ3YGvuVQnBp7VHSfNzqHsMY7K7hS+mAwG38LiUCrFxCKyd3OA+RyCa1LErpI6zs/jqr/i50HMVLj3ylIGYpkbc+KoH2LBHRJvg0IVz6ayAUmPlqO1yiisV8IF0Q9arRbClWqhRijmGJ6bleoY5uUr9RqT3Yew9H5ypXmA1yUeyWYIybFsWMHcvBlUSCguQHxmwYA9aPMXVYYyC865cJGVqMZ10w4PLUiLQjEjK44sKHBqijcjlpbKicIK09Q1LRA3HRERfyB4cs+TNB5LUG3D0jsinJIQactbbbqsmJkED2G7Isir7aiJeFChYUgVWUEQX+BB19FbJEHA4jx4C7g0IkkiNmhBCRYMz7f+bdzegMbuq5h3yHlSwAnGP8hFaTRFlEEwSX5mLKJGZ9ZaNs9w24uI4YhQDSV81R/47qeaU+AWFy4HX1LUugL63MgiQXtJ1jRJqQbDYKDwEplfgtYf+jPRlmMOiTgo3zFvEoD+cU1xt1WtEJ42A+5VR7QAmSz6UKAYdVcX6NTShF4TPE+U4Y1xsm3lBcokLoZw6Z5Vs8BQQUNU3A8z6a7CsuMOlwSqS8xL1Qg9LldoZoOhepi5oUbRdCYPLz29e236c+n1PadfCvMZeqJnffoz3gl3yCJ3FIvd+MjaY7ccgNKT6XW9uASyqWN/5j/nG+zWKfaQcs+2S6C1ix348Yd+vZgc927usndeP+T74ZLIw5ZyKzZs/a+3QVvrOvAO2uOTnlaZbN1dvoq4eYopja8/aZvNttz7TtoP/K5FES20lBuw5WD05K083nLbXI5h4OmQllKckqjXRMRZlOYpZU0EWuZCkUYVEuoEmhGINPxwiMyaufhEKUrU9MQxVvIjE8uDNbhrVIDbJ6LhJenObvxPZIfuPQTvEB5ViH/fOTTasG9dX9dEnMUkAoFEJFbPGhiaBLf5IYuH9wxNbpy7NcaiFcFHFjvOxHYoLRbKL+N/aXYIo3OTqJPGIO6Z6C3tqvmxisYdj8N4dLANZP1ARtA30EaCFBG9scpiGBl9Z+2W4BbQ6F9cdVJzgsoyPK9VosVjGiMaam0K1Cp+lUgFD++dCUfxxwqfn6s5enauvh+P+Fe9yk5TEcyJUxEMTOE6gP6PSrhBneATpZ3NygXn6nQXuRoKPolrxCOIa+TeNE8M83inn8CjXIjGoGCZGFPMkMgQtOgMGcKdSq1nQ7hW+J9foROFptaHw/VaZDjKGql1gq0JjXRqylmarZ0l6wB0joQi97TD5ZXOtmxHKhYPet15XHwqzU4LSHNtPfWRFse3HzodbXY0cEDXD0iJYFuHE7mo3FeZALGY1t7J6ho8PkaV50lYFACk6bL3z3fZpHPkKI2/ZdzJDhKRUyxhrmewPFyt53G12+sRnirEqarN8/zBK3SE9zIzt9a5bAAWGwGaEUk0pQF1tyZsNl7x21geaAbHj2+CHKk6T91taVgu4FaQFZQG6fiRuauAcLse5k29vXiC2FzBCMtntYHFPV2Zts6exSAYOCiHt9gRoJNE9NFcIKIklWggCz/5YdVEKCBLd5A2+jBuLKhg5kgXWLwuEm6/OwzNZBiKsyeI3HWhrhzIkReAVArg1yVz2iFF/xWI5Iwzz1Q0Bb8RvwqoEdXTu9wNL0FnkRgaP5jNi1XkBpdBuGyQbtF+sGywkRlcBvAe/nRwWTO+h8QOJPH8Y61LNZ1zsWBEOdAHphkHUlhUQLedzTJBpguF9IOvg2nGmJAjdh5v8W38676O+scUtzCF5/i7KHo5lurJgwdx59SJZqXsOUoSv39hkGhfPZ9d2smVKM0PROI0yU+GSbpn8mlYzK0MEk0cdactm9QmPUjkq6jEmA/PYo0FxWt09ZskgtYgUwHvf0K64q5v4YluGMFvkCn79SN60DZ+BKEeBMHGBD36MaBH9BYs2fee6BHE/xccpT8nZ70HpOhDjwaNv6c30Jcn534Ijs4/Zt+SUN8+4WNaZFmTeDsfx9c3ZUkgkrlgACrYEMw2LGmiHY3J7oUALOyGT7N9Y9IKhy34uPvPgYz+ezVhQ/W3ZqncjiXkMJzFN7hd7EbwWvfCxv1hC7xmhd3/jQWQb8skxcgrpmkaII55mLBvi57xMIR8rfE7xBGaSwCTF1vz5c5L94PmQQsZhqjbMP7opeJlDx4DLfQl25whCswZzXl2zm/HNhtUSjZt5yRIQw9d3kQakq7+uknUnvbZdjoYTNvTbNfUG8+gCbzCt3E9mF/cfHK9MaiwAmrNtiAQFllsSdhQr1ECRXwfWjLxoZuBox2Wbt4fOvOD0mGiFuaX9sHT+paJ7pbQmrMkd1o661b6kQ44sl0I8aZ6/rgYjSvCVmhJjnr+ciGmG8oI09/C5VTvy19D9L6/HiTIA4PwVRp65D5gm+OkfcY159xZPBPuuFVT1Jj+jKQgYNx5RJN5FJ2mN5BN095EYm+J19cGYm+isQmYbPjZBvwWmPP7imLhbF5iWc/0xBJl0Xo3FesiOkH7UFuthHobj/cvE3FzaPSbphyUicDNkTSK7CPH07ilIvz4H5n9AHc2yaZ6cF1o3UESVoVuORA6dDOy/8HCjUWgpPityJRCyvnLxVhMEbar5jhY0g8juoM73LUimOYS3ThpQ9pscC8eBfjSdNDwVOVHyHuO7H8/hO/ff0Rz3C+z9gtEW9pPjeqzeAzSsTODptAezB92cTVuGW47DvjCK54pRRJJOVyulWi2tDTwfOkyXlIC1JLAsTWZYytDDqZbkIXBoc0CULSvu8skHaoA7uobBvwLd975Aj/2HBsX7lFPv98Cbwta4Y5fPSKqdxskYZ4gG3fzkvCJvitX4gfgx2x6P/5mXPtnSLs/47W3beLZOIdtS2XJe9BeXOcM5oi7m3G4HKj7PkAnqGsNi/DlakUQpWolTDK0E+iNMjiJ2D/Pif/NzRDkYo0vCJowr8ZwLLs+su9tbtno0diA+9IUlNFmkGWEgGwfupx9M8tEzJK70BaA4hFB4u+OqqDZBAPvXe01wU0/uF7/t1kQ/8Ergjz7ByTAI40B74FkC944GS62xwthev41zAsRH/luikdyPD4omzCkq6lkLbR4T4KTJo7b11hC0ASqXfB5um/U5voJ7mrQjoJkPrvfwXOGThzTBtkWcgmPgnqHy3lP4TrqDzT72hszIMto5Hns0McVm4KNZu7pudoM1Sr1KJMsvaXK/9byScqIcxHTFwkKfPPXgijQb7nZpR8PKDE6SRk2CCzD9fh+dMcdkFbgqq6qy7MPnZ63a/pRse/uob2w6eRfHhKJFFegeUTLTcXgSUyd88yeJ66Pamh/wGVVfEs1CcIDXqCm/8dVbLRrNroTAf5OZGvwKtJju05caWne2Oufy6j7t6IzgJfd3kPIiBAlWrG1ynMG4EqrBfi4IalikrqEjsPnTbsx1aQifVddBdMtA/HvvNFJDlsG7nHjs3E/vUZ/iMkao0j4qc9cNevRuHk77q/bgATiLVQule0aQTIWiKF2nvqPpmbH/UasSVJQwl8KxPm+CsV7iQYQs5bjjioIDyuOPLd2knc63iwh8erzXyQJohOunyyIDszMf60ivc2JkQf3nUQ3OXvMNyD8WeV/3ucuP5la0Y9du5/myF7FLGrHZf+Aw5VaSWIgKa3jw0+6fqyNBQ+AO2fUWEg95L5C+7JySA2m5BmAJEBNz42jtPsYTSFj+6jXtVm8twH+cSimHsbXDpOnPAigHP2Vx5LAOe5knP2oMc32+Jynz3wOXYuGOYsb4VbgVXcrd4C7guPqJKhILLDYc6KxKkpiqRoRJVyF+uBQlXpkUY41UqsTrOoxWKvWSHogUSr6CtB6s+BHPBBnMMzPkTh9ql8rknBnYvUnQn0QP7RQOoqlzz4e7ajVh5bnY6VesD5b7rGDWmnzZAEBE4l4JVu/OBJIy0SShgLmfRZVVqxzd4NUTzrdkzoDRAuxWCF6kxky8Z/7dKk9vkVXohAsaV9XevA1eHnZ/VzU0pJKaoGlVF8LC5qmTilFudjBx1L5CwYcMHxGpR2gylJNxRwS0GNyMNa1AEvEMQJrCKGJQHVs443V9394TwS/MZ2+Jxgl79ytkhfiGbb0koEeB3YsAuATeOn4wdu97oq26KKgaOtp5yxwV49p817bE7lgOeYUN3HbuL3c33F3co80Y6nDIampgxQl6kDBYgb8pvfihYn75SjwYZ0gg3jyAk9oMLLjW8jqTB+QxzwijR3DtzDQAC9XcChSxcdV0csbzDD1amUFX6yWiUaBvZzFNePhgbbLyRAvLUortrJsG+TRwlEsuTla35ZOieR3gpjpGu5wHC0ix2Iw1xjRJMlx+OduCxbjUcHU7e7QY//Gh2OCJfNStxdudgbzRHkFdMqBcpfpXoHHMw9RbqUmqiJCuoPJjSTH13e1LUmUZZi5Gky5f+DhJpRZlcHT35JEAUGx09gGNHiRyptJ9dT3rB6FAG5arEaUOAEZAjAcQQFBMgTHyfYAIPKy1rNnYOUV7rQcU0uTpduf4zGdM+NRAiUk/Ovj/Vt7JQXTFRbgcqXnq3sq7A11xgTHtfBA1JIaFCDs7M+VA/hXvKVi+Vy1hWAWJFLDhxX1bPC8q/IADryZBYagCLGiIkUsLGUOhEcoXXkCPYT2cinuFIYHQZBrpULJQ2kmTjN8PdJe94zg3cBPfnpM3gZ/P99RPwyfyAwCkMseGFsysjubA7A/9e5p3D/ZCy8EOR2870uURDBCgbn4Fj/88W2EvGzaRPwMp+DyzCl91VxGJxXOLRzYlF744kUvbVWUrS9d8vVXsASQxf+Wk6csx0/J4n/OFvLD9euJsX+n3vRjQDPwDUznuSIoFQYG81IAEKRqTCZHwTC6050J5fOhzzyiAhMLaGRZmoHZdNp9033LzJM1Kt+0X99PdYdRGsVCIJiSxHtoYJCCgEiiAnJoqjFO5Bv18U/LKTMfAlMqHvfuFe4MnMUXMLeiA8e005jK5s08PKNx1Fv/Pofp4kHMkV9zov7wkNTKdEZGKzStoIfBQedORCyLhOzVqUu0AcKs9/DCwFB0vIUj7KemOWEWvaq/h0dS/ZD03vjIol249/gNmQBRSnQOAKCg4Jr+5ZXTggIPBnskAfHmrtt5+NBXvvIQXDpCnYxXrtdBjnX09R8jHYF7E68U21p7GffbeMsYgJNp3NH5jA6hmsktXHYgqqBQUiqua4s50BABkKyAEkmvbRctyQzkH7/64n0A7Lt4zY016hg9NnM6GxWXfm0fiUlev5441W51vEHBRog3XPSmHXMar/1Brr3Ja5HIViFSLxJxiISqS0KRJBNt+tkJ72QmEM/NlogVZq01A+BMUQQ7Ayao9Wim+wn3E2bUN+G6R1uiKQiq1LygFODE1DXraVQKIsgAU5oNxyH+s7Wpzpr7AwWNjpKUolkPX+Co+SsPR8hraHYwqcYcmQRMJNQ1jPdx8VrAUbtinsgH9YJPtp08hXGv1yo854QkCpWBpWHIgeYFqu1nF6p94C3fargzX9BN5OhtbXit3CpBYCcdTKsk933uz9oLuiGEjHTmxs9i4cxIhpHIv76JGQvhhxByEjbmQNxHXLcjbDjI1i0nC9LgSvffJRROGFBAn70xndbDgmHkC4Q3YvP6ecq/cSzIJRTxZgP1nEWzgR/cZUUdoz68ZCoR4UE4HQHPffR1DYQzYcBHEmeMVuqGE23Gjd6DnzWOD2oEnFCiXqZ0ZYvmyRysG17YKIldyhOFHqyHIwaM5mp9kHrl0sAHdHo0zq/cgieAdmEObFnJx2PiqJ346EqYAWAJZi/xBvHlaCi5fwyIGSSDc2WUEQFqgys/mrCXwIerUzxf5Q1JMvCOn6pecsUFmxHoKsOwHqxAYciIOIXsojbjEkCSYdDNC+UugDZfcMUlTb0Y4WtjmL/awX2Ee4K1T95D/mDWReplgdfbEMsWJtLQXkxAqEPxKOoHc4s/8cWnfBk5ifueNBAu4CbA1Akxu4AnhhFrCfOqr9WjQ5FKlKSa9xguEn5h0ojEKKVRxeE6w2TxA45IUlUCN42ZfgLvOHLBQPuC0ILFuGikTXFoY9tZl4/19cS3W1p7BC/3hyAvt2miZQdUJYaEkXjnYkFsw6RGnhwYVxUkhC7TM+aDr7v/LUFBtgQ9VXfKuX8VkJyrJlRJ0M2iaSga4mHWCsUyNTwsewuWJFysRNRJOykFwqXeCczg20U7abjfSxv9WS2qGB1GshwNLCtAxdbCGtG2Y+a9LekMxkY/upnkZUC5yOJvXr3y6iG9SxFEskwfkCwYsyVBUMx1WaSX9GhvSh1aJCFpU7Yg2GpIjAsC/3rj19mFIUEW9UQs5gDMqWq1MQHy1r7xEJ5WmBNM6LquZJHqqJZkCZMSr6zX4rKqRWLVAiazfCC0cP2GseouQ0CCtjDWPQhgSLfQ5i4ImO6frDPfRg+gQeo7REYFiQgr4NVDEgkIDGGWK6VatF5rgj55Ys/9gyFo/LDvRuHsJ0Y1GDx85ZrAP4/eLJz36OIAtPe535vYDsD2iQkCnwTTpxZRQLvPfjJ/IMSjR296jw4ftZ/InxlE/BeeIXexe7fPYZnNUiwzlnqRYplVaMgFzcpIRdZs483/IHyB+zPiYpEm8Q1B5RfQMm0HzPyCrC7uURVfPioI+K5fEKmS6RJIzr0sN8xNcKtpRkxviftb6nBPwvK04scFrFYrUoujMeKuJwvMTbGPHmqGnkJTp4j7j14svvcBqhZfd1HUfZx64+yCV+zWdl8Br26RrftnZ6f9cFbgQA7XYO+VsKkaN8KtIPzg9FX4OsXh/xl1PsYb3ZmdnvIFara+3YjG6Pq2EVN3ys/XmiEFfsJBiuw2Opf0hUFe4ymdJ1SO+ORIRMRiDLrvdo2baYZ8pSbfNiFoqi5gjv20T8LPBh7booCAklRW/p2sO3Z/1ckrTmVH58IJACVDRgK/esHmPY6SD1f6rj81jb80feoN1xMGGaWXk/Q0alzdXEB8+2ZcUJTlWQRsQ7cf2/HyaY7lHBwGxNkOiMP784APnvbyjrU7VGZeUHc0/eJ+Rv0LxykO7QljiCMM9qn4/xeiGa8KhgQ5M8BDezfo/78PXmapgow5el1ec578/xWojM2/a+E/cWEP64/kTye6gjGyTFDMvwvdaSsHvoX/gRwFFATTBrgbiGrQueAWvGn8wQkyOEEgKnnf9+1reN71YBl/CbfG0zJTDosNKZoUdNiPUcUNX/GKmLVizkueipUsQHiISk6hRTcvtB6gKXcg2w9eIIo3EDT2IS8mDe5jBcz6oVrjaaq3Eg63qybuZOf8Vg/F/zof79nRwBjKgt789n0Alte4zxhBXhKYI4sg8RYrWbYJ93XU3WtJjw6M6zwUAqa7yX/AMVtPz3QfXY8zeC4u4pZi2QGvtF6eGy/QRZTKc14ozOwE6GKdQf6UreMTIFIX8+UIenobllIPyHD3clA9rQq687sICYRH5VTQJaTDfQNf5SGedddP2at2rrKLK9KNBh43KJ2OTcTSta0AKk/vufqDUaurWu2yjPwWQl0b43gLP0P1dt/b87SCl0hVXRCpjIxUpLAKfhGruX2Az+d53458K1qI1nk+NutxvYZxbeh8G6o5LWWBlWkEc52hjxl0tTcAFaJsEg8/RDwKbC8jEo3eOtdKZVMmAPlKDrQUj5CyRYpLQDYpP75lcjFoz4THNo9F2gqFtgguhDPt/YNbzwCldNua02uClbLwXzyfh//eLNbtpGUlbVyK52rWQ1eGw13ddnjNpoGBTWvCkPNL7jfDRmz97ujG07rMpR425DSmq8PcKm4vReYoz5nLif9qgTirFjCfV6hTI5wHZ4tlYkp+RgGJIyRa937iQs5wIisSiVwJ+8nDfUA3loYYT8MoyZlEsouW0VUVuZLXSQ/pmEL03i0ZQm2mFjDv7kW2xs7nK3JtAN8F3sKlLLzG1fFC1HUzvul5cvfNCWS7g8vpurFEtQUoKl+UQvLzmio6r2xR9GldAV3/kS8DLCsZ2guysGmTCV7QDEJBuvJvam8WO/D+11B2/4gvbzKALGx+RdGhFwmjK5idmeb5aTHk6JcuRJY6O4u/lNGF19HDqIz50kFuBc3JeoggH9N0TzT3JUVPiEZCFNoO5emOIfmxwI5heuuxuSOpDdPDC2BYAnOREtI8hIstG9deks3lspes3fjYhnWsuG7DlrUTS89KptPJs5ZOfGRi2f5UOp3av2zigsVmzFxs4P8exf9++YhmWRrZqM1S0r2EFMEH8bZEH/XYsS9AoVRq/mM/gl+WSn33q7ZlW1/VQhr+OwVYMQv/XY7/AVL+EDtmcsnt6NfoYppvWWTYfcTvhnrelPz/66U6dZclK3lTBIqgXwGeT4ROWdw/tGPn0mV9O3pXD5YsTZTwIgpkKdxxQaU2Nj1eGTpt44JVwaAYANeNjW3dPHJKxJIMiBdbw4gs6F/U2b14cX//+nXLxy/sdmSFx7yklIlsWlCpn8GZTWw1k9rgF3IrPfTnq7hbuXu5x7lnuFe4N3Avnzhj5WIP7rcAWu3yldaDcuuBdNKD+Yb9AjvyzXXO33i7dMz9f+trj70fTM9PkulHzBk+zO2FbGew3Yfm7byT7nd9sODg0EmeNt68A/z2b96SbV6luzHvBhKOd3QOmHgOkrrl5PgcmNnMXBFwQYMlQKWnm9DG4yd9UQsA8vQ7ucnHin6KyvQhPJ56MR+3n7uSeJpT/RrBj68z4pgn0dz1DKL6fBKegaVw76xDrIIS9S8v96FyyUMKKPfBQr6JmukZEmssnryMaBgZvtDyQFgGvyt2SbxjSVrA4PX1qyQzKgbtzq6JPktBQVvU8elAeOnuhZIZkYIW5jGUbFENajImiqWVSwZsKEpLYzkzqqkxJxBJ2WdLfNf2+uWTpcnC0rVCe0rLjfAreEQea40fXh3Tvaeitk8/DH4uj5esFA8k1Vp9sQ2CbSl0tdy/8pROO4lPKtai8/aOa8DOJnn3XFVsV8KENzpt974hSUdJtf2UNSnHETT+jMOJ79+++T3dsQjqlfJt0ZKW64bwDPo8Y9W5Vy21Ugizc9Y/AbPsyYhv0fgomyKVDWVguDU+xlvSMJ/WEmG6GNgsS3MFjVjpiNaTa9zQ3tPdDh6xTNOqgwWWrls/tDTNwr+3DMNCmhZO243353v7C/A9bf2NXWbcggg8a0Ut/OcuFay4SfGLOXQIATweipibXM/t4c7mLuFu4m7GXxaiK8MoHCa0ME8pYygD6QlIDx1yWGNLBz7FqGe05R5YD3nZfGoMI8BAntGCprvyNWLl+XfR/BRhUHKy0fBAT97y9rL0sJkulosp00yVyu1pSdluxHLFrCGqSNRjeVqC4m8C4XRbOhygu5D2z6ocSupxxVEVvI8F1d35/ny+31ZkCcSIZSn2LpIxStR4xd/DD8a687ISzHX3s3049qdQ87WGkXYs981gLq7pWMSQrPZ8TDdIyT7bSkUCeBji15PmXzf3WjUIgBqM3RPL5wfywFLCdwSj0fZY7IzW9/KCZDK+74/87Sjo8X1kZSplJdGibqGQ8HS+55RD1mkClOqXvfP8rt2NvqlKZQq+OjUMGu8HTjoUSoWfSnenAcCb20P4OB2CP6pUTm387tRhUN0MNfcWkjbtdbJxfx9JpyNgCdm6vzcdx3ydbLj/F1knyIsAAHicY2BkYGAAYrv7dnrx/DZfGbhZGEDghsO8jQj6fy/LJOYSIJeDgQkkCgAjQAqrAHicY2BkYGBu+N/AEMOqxAAELJMYGBlQAKM6AFVxA0YAeJxjYWBgYBnFo3gUj+JBhFmVGBgArlwEwAAAAAAAAAAAfACqAOABTAHAAfoCWgKuAuQDSAP0BDQEhgTIBR4FVgWgBegGygb6Bz4HZAemCAIIUAjcCSwJpAnWCjQKpgsyC3QLzAxEDOINkA4ADm4PBg+iD8YQfBFCEeQSEhKUE8YUIBSQFRAVlhYiFmIW+Bc4F4gX3BgKGG4YnBj6GaYaEhqwG1gb1hxEHLIdAB10HbIeMh76H4If7iBYILIhcCH2IlYivCNUI/YkbCWQJlwm+idAJ3Yn0igAKEAolijEKTgpxCnqKqArPCv2LLIs/C00LYItvC4ULnAu4C84L6Iv9DB+MOQxXDIsMy4zqjQYNEo09jU4NhY2cDbQNz43+DhgOKA5BDk8OcA6TjrOOyg7rjwOPIA9Aj2kPgg+gD7YPyY/eD/6QKBBbkG4QlpCsEMKQ45D5EQ4RH5E1kWMRj5Gzkc0R8BIekjySZhJ7koeSnxKxks8S9RMFEy4TOpNSE3iTyJPiFAqUJZRDlFgUdxSRFLeU0hT3lREVOBVVFX8VixWSlZ0VqxXFFfOWBpYeFjsWbZaBFpGWpRa3lscW1pbiFwUXL5c1l0wXYpd7F6YXwZfVF+uYDZg4mHGYjBjUGRsZMplZmXwZmRnEmdsZ9ZoMGhKaGRonGk8aVhpmGn8alZqzms6a/JsamzWbY5uKm6abyBvzm/scBxwvnEMcYByAnKecxhzpnQOdGp05HVmdaB18nZadxh4HniUeLh45nmeeh56gHqmewx8GnxifJB9Dn2IfiJ+TH7Uf0B/uoBYgPKBQoJqgyyDcoQ8hIp4nGNgZGBgVGe4x8DPAAJMQMwFhAwM/8F8BgAjigIsAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nG1WBZTruBWdqxiTzMyH3b/MWNi2u2VmZuZOZVtJtLEtjyQnM1tmZmZmZmZmZmZm5grsyd+ezjkT3SfJ0tN99z1pjaz5v+Ha//3DWSAYIECICDESpBhihDHWsYFN7MN+HMBBHIEjcQhH4Wgcg2NxHI7HCTgRJ+FknIJTcRpOxxk406x1Ni6Ci+JiuDjOwSVwSVwK5+I8XBqXwWVxOVweV8AVcSVcGVfBVXE1XB3XwDVxLVwb18F1cT1cHzfADXEj3Bg3wU1xM9wct8AtcSvcGrfBbXE73B53wB1xJ9wZd8FdcTds4e6gyJCjAMMEU8zAcT7mKFGhhkCDbUgoaLRYYIkd7OIC3AP3xL1wb9wH98X9cH88AA/Eg/BgPAQPxcPwcDwCj8Sj8Gg8Bo/F4/B4PAFPxJPwZDwFT8XT8HQ8A8/Es/BsPAfPxfPwfLwAL8SL8GK8BC/Fy/ByvAKvxKvwarwGr8Xr8Hq8AW/Em/BmvAVvxdvwdrwD78S78G68B+/F+/B+fAAfxIfwYXwEH8XH8HF8Ap/Ep/BpfAafxefweXwBX8SX8GV8BV/F1/B1fAPfxLfwbXwH38X38H38AD/Ej/Bj/AQ/xc/wc/wCv8Sv8Gv8Br/F7/B7/AF/xJ/wZ/wFf8Xf8Hf8A//Ev/Bv/IesERBCBiQgIYlITBKSkiEZkTFZJxtkk+wj+8kBcpAcQY4kh8hR5GhyDDmWHEeOJyeQE8lJ5GRyCjmVnEZOJ2eQM8lZ5Oy1IW0ayXJONQvzGcvnYV4KxQJWcB2ySpzP0wldCDnhZRk6FJeCFryejkuRU81FbYeS3gibmajZhhRtXbj17OhwZXYjdo/DRqzpRySfzvRqxJmRYlTms0DTHZ5oXrkvAwuitp6IskiWVDo3AguGOa2YpNaOPBzloqpY7daNO5yUfO4XsmBfLTSf8NWBxod3hEIWTCaKdltbEBes5AvTyxa0bA19g4buBorVRaBmook0z+dMBxnN50lOVU4LppKCq1yYj8yeSgeVkCwwI3WimNaGUjXebpna47Q3Erug23giZDVoeB4ZSzOZToTQjeS1HmjRJE1bloVY1pEFbRM68mLJJpKp2cjuRg2jghdD4zvT7iyRGTY8BzmVOtqWuSiY6ap4XUR+UtxIYSayYCYqlthpjp7+JM5RO+S4rZhSdMpGtCjMnioTYm6OWpsfkc9NsGwzWPAmXDKeiYTmmi+43l2fSG6IM1/ZVdI9a+zRhFaiVZE3wqkQhUqVcS635MRspynN0YyfzLCvN9V2S42ie+1F3h4d1h06aY3db7dn0hsD83/oQmIQMuNuzqjbqYtEWQRTo4NUsqKhNtbrez45LhSveEnlxirB3EbcrOhWsGBkVjeSdcvHHR5bL6mc+um9ERvWDPlFuBA8Z6n7dU71FJnMDJbG61CZ+SxaulGyZGlpVUBbLUYO+fP4XhdJnyJSaFsCXHecUSeEzUlJ1cx1+Qxd2aJh9dCnpZVyrJhcGI8CJaQOnAYrkRnVDH3jDpyLZnc9NzxrO8FFes8aWsr9iSIPR22jNPUsxB1OMprturUsSDNp9OwKk0Mb+cyyUhvhuQKyMkfGfT1jyue/x+PcpIORn6e5N6IJq2jJkjnbzYShO7BWXLOlnTUwrUsycyCdWuAyLDGbO6kFFgwyWqSeUyOlcCLyVg27IJk563tD7gsjDpU2lPvaFDoUmwR3kekyl0oploYqo72S1SqpqPTbWTDqZN/lcsNoGdIya6thw0TjmY88HHVB6qdSLgOb2UOPXUA0FTuciqY1AuI7vF6nWpvVO02ne5arqB37cYfXbdvWJp+72HZWYLgtTOUobVLLQd7qsKJTno9tbezVnzQl9aFVRlyxibZj3LTh1ORmM6AmovaDrirNhDvywLRBI5QNQsFFJnZSl8lOgm1jr6p0KbnPvdChcT/TM97W+czmzJyZerwwCqYTNu4Lkz+I7OQaOpS6AuRyryt3Dndl0s1T1oWRakSt/M0Zd9gIObM1MF4y16ZL1tYeubvWzt3wyKaaU4FDWevJ0WxHD70DNuPTqlVeLJse7RUrW9CLfVpyWk9L1ifcRt/RuvvkgOPKqtla59gENYWt1qHm2ukiFz46kYfrdlGXF56Y3krsvdTlOK83V7OcO8Ocy7xTooebK1W5GQf/x3a+rfr698fGhbsi56VKed69SIJJ67KCl534bWkaO7a6DE56I61YQUsXLIcS0+djakEnrrjDgW3TBS+Yq9yhQwHb4TpRc+4fHhaMK/P02c28dEeteeEYf3z98jjpJ2zsXRpbLsaqzVQueeNu++4050ZTrmdtFk1LkVEzp3sjuA9sJmz1t7m5l+xta3JwvX+MuGWHLnMc3G/Ta6u7Yfye3fvFGQd8zd3y9G/1b415YErR3FzW9QU8ZmXJG8XibbllL4e4MEqatTTg+crn8waZrtfW/gthnmJTAAAA") format("woff"),url(//at.alicdn.com/t/font_533566_yfq2d9wdij.ttf?t=1545239985831) format("truetype"),url(//at.alicdn.com/t/font_533566_yfq2d9wdij.svg?t=1545239985831#cuIconfont) format("svg")\n\t/* iOS 4.1- */}.cuIcon-appreciate:before{content:"\\e644"}.cuIcon-check:before{content:"\\e645"}.cuIcon-close:before{content:"\\e646"}.cuIcon-edit:before{content:"\\e649"}.cuIcon-emoji:before{content:"\\e64a"}.cuIcon-favorfill:before{content:"\\e64b"}.cuIcon-favor:before{content:"\\e64c"}.cuIcon-loading:before{content:"\\e64f"}.cuIcon-locationfill:before{content:"\\e650"}.cuIcon-location:before{content:"\\e651"}.cuIcon-phone:before{content:"\\e652"}.cuIcon-roundcheckfill:before{content:"\\e656"}.cuIcon-roundcheck:before{content:"\\e657"}.cuIcon-roundclosefill:before{content:"\\e658"}.cuIcon-roundclose:before{content:"\\e659"}.cuIcon-roundrightfill:before{content:"\\e65a"}.cuIcon-roundright:before{content:"\\e65b"}.cuIcon-search:before{content:"\\e65c"}.cuIcon-taxi:before{content:"\\e65d"}.cuIcon-timefill:before{content:"\\e65e"}.cuIcon-time:before{content:"\\e65f"}.cuIcon-unfold:before{content:"\\e661"}.cuIcon-warnfill:before{content:"\\e662"}.cuIcon-warn:before{content:"\\e663"}.cuIcon-camerafill:before{content:"\\e664"}.cuIcon-camera:before{content:"\\e665"}.cuIcon-commentfill:before{content:"\\e666"}.cuIcon-comment:before{content:"\\e667"}.cuIcon-likefill:before{content:"\\e668"}.cuIcon-like:before{content:"\\e669"}.cuIcon-notificationfill:before{content:"\\e66a"}.cuIcon-notification:before{content:"\\e66b"}.cuIcon-order:before{content:"\\e66c"}.cuIcon-samefill:before{content:"\\e66d"}.cuIcon-same:before{content:"\\e66e"}.cuIcon-deliver:before{content:"\\e671"}.cuIcon-evaluate:before{content:"\\e672"}.cuIcon-pay:before{content:"\\e673"}.cuIcon-send:before{content:"\\e675"}.cuIcon-shop:before{content:"\\e676"}.cuIcon-ticket:before{content:"\\e677"}.cuIcon-back:before{content:"\\e679"}.cuIcon-cascades:before{content:"\\e67c"}.cuIcon-discover:before{content:"\\e67e"}.cuIcon-list:before{content:"\\e682"}.cuIcon-more:before{content:"\\e684"}.cuIcon-scan:before{content:"\\e689"}.cuIcon-settings:before{content:"\\e68a"}.cuIcon-questionfill:before{content:"\\e690"}.cuIcon-question:before{content:"\\e691"}.cuIcon-shopfill:before{content:"\\e697"}.cuIcon-form:before{content:"\\e699"}.cuIcon-pic:before{content:"\\e69b"}.cuIcon-filter:before{content:"\\e69c"}.cuIcon-footprint:before{content:"\\e69d"}.cuIcon-top:before{content:"\\e69e"}.cuIcon-pulldown:before{content:"\\e69f"}.cuIcon-pullup:before{content:"\\e6a0"}.cuIcon-right:before{content:"\\e6a3"}.cuIcon-refresh:before{content:"\\e6a4"}.cuIcon-moreandroid:before{content:"\\e6a5"}.cuIcon-deletefill:before{content:"\\e6a6"}.cuIcon-refund:before{content:"\\e6ac"}.cuIcon-cart:before{content:"\\e6af"}.cuIcon-qrcode:before{content:"\\e6b0"}.cuIcon-remind:before{content:"\\e6b2"}.cuIcon-delete:before{content:"\\e6b4"}.cuIcon-profile:before{content:"\\e6b7"}.cuIcon-home:before{content:"\\e6b8"}.cuIcon-cartfill:before{content:"\\e6b9"}.cuIcon-discoverfill:before{content:"\\e6ba"}.cuIcon-homefill:before{content:"\\e6bb"}.cuIcon-message:before{content:"\\e6bc"}.cuIcon-addressbook:before{content:"\\e6bd"}.cuIcon-link:before{content:"\\e6bf"}.cuIcon-lock:before{content:"\\e6c0"}.cuIcon-unlock:before{content:"\\e6c2"}.cuIcon-vip:before{content:"\\e6c3"}.cuIcon-weibo:before{content:"\\e6c4"}.cuIcon-activity:before{content:"\\e6c5"}.cuIcon-friendaddfill:before{content:"\\e6c9"}.cuIcon-friendadd:before{content:"\\e6ca"}.cuIcon-friendfamous:before{content:"\\e6cb"}.cuIcon-friend:before{content:"\\e6cc"}.cuIcon-goods:before{content:"\\e6cd"}.cuIcon-selection:before{content:"\\e6ce"}.cuIcon-explore:before{content:"\\e6d2"}.cuIcon-present:before{content:"\\e6d3"}.cuIcon-squarecheckfill:before{content:"\\e6d4"}.cuIcon-square:before{content:"\\e6d5"}.cuIcon-squarecheck:before{content:"\\e6d6"}.cuIcon-round:before{content:"\\e6d7"}.cuIcon-roundaddfill:before{content:"\\e6d8"}.cuIcon-roundadd:before{content:"\\e6d9"}.cuIcon-add:before{content:"\\e6da"}.cuIcon-notificationforbidfill:before{content:"\\e6db"}.cuIcon-explorefill:before{content:"\\e6dd"}.cuIcon-fold:before{content:"\\e6de"}.cuIcon-game:before{content:"\\e6df"}.cuIcon-redpacket:before{content:"\\e6e0"}.cuIcon-selectionfill:before{content:"\\e6e1"}.cuIcon-similar:before{content:"\\e6e2"}.cuIcon-appreciatefill:before{content:"\\e6e3"}.cuIcon-infofill:before{content:"\\e6e4"}.cuIcon-info:before{content:"\\e6e5"}.cuIcon-forwardfill:before{content:"\\e6ea"}.cuIcon-forward:before{content:"\\e6eb"}.cuIcon-rechargefill:before{content:"\\e6ec"}.cuIcon-recharge:before{content:"\\e6ed"}.cuIcon-vipcard:before{content:"\\e6ee"}.cuIcon-voice:before{content:"\\e6ef"}.cuIcon-voicefill:before{content:"\\e6f0"}.cuIcon-friendfavor:before{content:"\\e6f1"}.cuIcon-wifi:before{content:"\\e6f2"}.cuIcon-share:before{content:"\\e6f3"}.cuIcon-wefill:before{content:"\\e6f4"}.cuIcon-we:before{content:"\\e6f5"}.cuIcon-lightauto:before{content:"\\e6f6"}.cuIcon-lightforbid:before{content:"\\e6f7"}.cuIcon-lightfill:before{content:"\\e6f8"}.cuIcon-camerarotate:before{content:"\\e6f9"}.cuIcon-light:before{content:"\\e6fa"}.cuIcon-barcode:before{content:"\\e6fb"}.cuIcon-flashlightclose:before{content:"\\e6fc"}.cuIcon-flashlightopen:before{content:"\\e6fd"}.cuIcon-searchlist:before{content:"\\e6fe"}.cuIcon-service:before{content:"\\e6ff"}.cuIcon-sort:before{content:"\\e700"}.cuIcon-down:before{content:"\\e703"}.cuIcon-mobile:before{content:"\\e704"}.cuIcon-mobilefill:before{content:"\\e705"}.cuIcon-copy:before{content:"\\e706"}.cuIcon-countdownfill:before{content:"\\e707"}.cuIcon-countdown:before{content:"\\e708"}.cuIcon-noticefill:before{content:"\\e709"}.cuIcon-notice:before{content:"\\e70a"}.cuIcon-upstagefill:before{content:"\\e70e"}.cuIcon-upstage:before{content:"\\e70f"}.cuIcon-babyfill:before{content:"\\e710"}.cuIcon-baby:before{content:"\\e711"}.cuIcon-brandfill:before{content:"\\e712"}.cuIcon-brand:before{content:"\\e713"}.cuIcon-choicenessfill:before{content:"\\e714"}.cuIcon-choiceness:before{content:"\\e715"}.cuIcon-clothesfill:before{content:"\\e716"}.cuIcon-clothes:before{content:"\\e717"}.cuIcon-creativefill:before{content:"\\e718"}.cuIcon-creative:before{content:"\\e719"}.cuIcon-female:before{content:"\\e71a"}.cuIcon-keyboard:before{content:"\\e71b"}.cuIcon-male:before{content:"\\e71c"}.cuIcon-newfill:before{content:"\\e71d"}.cuIcon-new:before{content:"\\e71e"}.cuIcon-pullleft:before{content:"\\e71f"}.cuIcon-pullright:before{content:"\\e720"}.cuIcon-rankfill:before{content:"\\e721"}.cuIcon-rank:before{content:"\\e722"}.cuIcon-bad:before{content:"\\e723"}.cuIcon-cameraadd:before{content:"\\e724"}.cuIcon-focus:before{content:"\\e725"}.cuIcon-friendfill:before{content:"\\e726"}.cuIcon-cameraaddfill:before{content:"\\e727"}.cuIcon-apps:before{content:"\\e729"}.cuIcon-paintfill:before{content:"\\e72a"}.cuIcon-paint:before{content:"\\e72b"}.cuIcon-picfill:before{content:"\\e72c"}.cuIcon-refresharrow:before{content:"\\e72d"}.cuIcon-colorlens:before{content:"\\e6e6"}.cuIcon-markfill:before{content:"\\e730"}.cuIcon-mark:before{content:"\\e731"}.cuIcon-presentfill:before{content:"\\e732"}.cuIcon-repeal:before{content:"\\e733"}.cuIcon-album:before{content:"\\e734"}.cuIcon-peoplefill:before{content:"\\e735"}.cuIcon-people:before{content:"\\e736"}.cuIcon-servicefill:before{content:"\\e737"}.cuIcon-repair:before{content:"\\e738"}.cuIcon-file:before{content:"\\e739"}.cuIcon-repairfill:before{content:"\\e73a"}.cuIcon-taoxiaopu:before{content:"\\e73b"}.cuIcon-weixin:before{content:"\\e612"}.cuIcon-attentionfill:before{content:"\\e73c"}.cuIcon-attention:before{content:"\\e73d"}.cuIcon-commandfill:before{content:"\\e73e"}.cuIcon-command:before{content:"\\e73f"}.cuIcon-communityfill:before{content:"\\e740"}.cuIcon-community:before{content:"\\e741"}.cuIcon-read:before{content:"\\e742"}.cuIcon-calendar:before{content:"\\e74a"}.cuIcon-cut:before{content:"\\e74b"}.cuIcon-magic:before{content:"\\e74c"}.cuIcon-backwardfill:before{content:"\\e74d"}.cuIcon-playfill:before{content:"\\e74f"}.cuIcon-stop:before{content:"\\e750"}.cuIcon-tagfill:before{content:"\\e751"}.cuIcon-tag:before{content:"\\e752"}.cuIcon-group:before{content:"\\e753"}.cuIcon-all:before{content:"\\e755"}.cuIcon-backdelete:before{content:"\\e756"}.cuIcon-hotfill:before{content:"\\e757"}.cuIcon-hot:before{content:"\\e758"}.cuIcon-post:before{content:"\\e759"}.cuIcon-radiobox:before{content:"\\e75b"}.cuIcon-rounddown:before{content:"\\e75c"}.cuIcon-upload:before{content:"\\e75d"}.cuIcon-writefill:before{content:"\\e760"}.cuIcon-write:before{content:"\\e761"}.cuIcon-radioboxfill:before{content:"\\e763"}.cuIcon-punch:before{content:"\\e764"}.cuIcon-shake:before{content:"\\e765"}.cuIcon-move:before{content:"\\e768"}.cuIcon-safe:before{content:"\\e769"}.cuIcon-activityfill:before{content:"\\e775"}.cuIcon-crownfill:before{content:"\\e776"}.cuIcon-crown:before{content:"\\e777"}.cuIcon-goodsfill:before{content:"\\e778"}.cuIcon-messagefill:before{content:"\\e779"}.cuIcon-profilefill:before{content:"\\e77a"}.cuIcon-sound:before{content:"\\e77b"}.cuIcon-sponsorfill:before{content:"\\e77c"}.cuIcon-sponsor:before{content:"\\e77d"}.cuIcon-upblock:before{content:"\\e77e"}.cuIcon-weblock:before{content:"\\e77f"}.cuIcon-weunblock:before{content:"\\e780"}.cuIcon-my:before{content:"\\e78b"}.cuIcon-myfill:before{content:"\\e78c"}.cuIcon-emojifill:before{content:"\\e78d"}.cuIcon-emojiflashfill:before{content:"\\e78e"}.cuIcon-flashbuyfill:before{content:"\\e78f"}.cuIcon-text:before{content:"\\e791"}.cuIcon-goodsfavor:before{content:"\\e794"}.cuIcon-musicfill:before{content:"\\e795"}.cuIcon-musicforbidfill:before{content:"\\e796"}.cuIcon-card:before{content:"\\e624"}.cuIcon-triangledownfill:before{content:"\\e79b"}.cuIcon-triangleupfill:before{content:"\\e79c"}.cuIcon-roundleftfill-copy:before{content:"\\e79e"}.cuIcon-font:before{content:"\\e76a"}.cuIcon-title:before{content:"\\e82f"}.cuIcon-recordfill:before{content:"\\e7a4"}.cuIcon-record:before{content:"\\e7a6"}.cuIcon-cardboardfill:before{content:"\\e7a9"}.cuIcon-cardboard:before{content:"\\e7aa"}.cuIcon-formfill:before{content:"\\e7ab"}.cuIcon-coin:before{content:"\\e7ac"}.cuIcon-cardboardforbid:before{content:"\\e7af"}.cuIcon-circlefill:before{content:"\\e7b0"}.cuIcon-circle:before{content:"\\e7b1"}.cuIcon-attentionforbid:before{content:"\\e7b2"}.cuIcon-attentionforbidfill:before{content:"\\e7b3"}.cuIcon-attentionfavorfill:before{content:"\\e7b4"}.cuIcon-attentionfavor:before{content:"\\e7b5"}.cuIcon-titles:before{content:"\\e701"}.cuIcon-icloading:before{content:"\\e67a"}.cuIcon-full:before{content:"\\e7bc"}.cuIcon-mail:before{content:"\\e7bd"}.cuIcon-peoplelist:before{content:"\\e7be"}.cuIcon-goodsnewfill:before{content:"\\e7bf"}.cuIcon-goodsnew:before{content:"\\e7c0"}.cuIcon-medalfill:before{content:"\\e7c1"}.cuIcon-medal:before{content:"\\e7c2"}.cuIcon-newsfill:before{content:"\\e7c3"}.cuIcon-newshotfill:before{content:"\\e7c4"}.cuIcon-newshot:before{content:"\\e7c5"}.cuIcon-news:before{content:"\\e7c6"}.cuIcon-videofill:before{content:"\\e7c7"}.cuIcon-video:before{content:"\\e7c8"}.cuIcon-exit:before{content:"\\e7cb"}.cuIcon-skinfill:before{content:"\\e7cc"}.cuIcon-skin:before{content:"\\e7cd"}.cuIcon-moneybagfill:before{content:"\\e7ce"}.cuIcon-usefullfill:before{content:"\\e7cf"}.cuIcon-usefull:before{content:"\\e7d0"}.cuIcon-moneybag:before{content:"\\e7d1"}.cuIcon-redpacket_fill:before{content:"\\e7d3"}.cuIcon-subscription:before{content:"\\e7d4"}.cuIcon-loading1:before{content:"\\e633"}.cuIcon-github:before{content:"\\e692"}.cuIcon-global:before{content:"\\e7eb"}.cuIcon-settingsfill:before{content:"\\e6ab"}.cuIcon-back_android:before{content:"\\e7ed"}.cuIcon-expressman:before{content:"\\e7ef"}.cuIcon-evaluate_fill:before{content:"\\e7f0"}.cuIcon-group_fill:before{content:"\\e7f5"}.cuIcon-play_forward_fill:before{content:"\\e7f6"}.cuIcon-deliver_fill:before{content:"\\e7f7"}.cuIcon-notice_forbid_fill:before{content:"\\e7f8"}.cuIcon-fork:before{content:"\\e60c"}.cuIcon-pick:before{content:"\\e7fa"}.cuIcon-wenzi:before{content:"\\e6a7"}.cuIcon-ellipse:before{content:"\\e600"}.cuIcon-qr_code:before{content:"\\e61b"}.cuIcon-dianhua:before{content:"\\e64d"}.cuIcon-cuIcon:before{content:"\\e602"}.cuIcon-loading2:before{content:"\\e7f1"}.cuIcon-btn:before{content:"\\e601"}.mobile_tabbar{height:0;width:100%;background-color:#4e7771}.pro-btn{height:%?96?%;line-height:%?96?%;text-align:center;font-size:%?32?%;margin-top:%?40?%;border-radius:%?8?%}.pro-btn-blue{background:#06f;color:#fff;border:1px solid #06f}.pro-btn-black{background:#000;color:#fff}.pro-btn-yellow{\n\t/* background: rgb(241, 187, 14); */background-image:linear-gradient(90deg,#4e7771,#fed17c);color:#000}.pro-btn-green{background-image:linear-gradient(90deg,#228b22,#6b8e23);\n\t/* background-image: linear-gradient(to right, #1F2F98, #787FF6); */color:#fff}.pro-btn-gray{background:#d2d6dc;color:#fff;border:1px solid #d2d6dc}.pro-btn-blue2{background:linear-gradient(90deg,#6dcab8,#3a78cb);color:#fff;border:none;border-radius:%?10?%;height:%?80?%;line-height:%?84?%}.pro-btn-blue-out{background:linear-gradient(90deg,#6dcab8,#3a78cb);color:#fff;border:none;border-radius:%?10?%;height:%?80?%;line-height:%?84?%;color:#1e7eee;background:none;border:1px solid #1e7eee}.pro-round{border-radius:50rem}.fc{display:flex;align-items:center;justify-content:center}.bg-de{background:#4e7771}.color-de{color:#cb8119}.color-up{color:#17cdaf}.color-down{color:#f85963}.color-light-orange{color:#f2c8a0}.yellowTag{border-radius:%?30?%;padding:%?10?% %?20?%;font-size:%?24?%;background:#4e7771;color:#fff}.yellowTag2{border-radius:%?30?%;padding:%?10?% %?20?%;font-size:%?24?%;background:#4e7771;color:#fff;opacity:.4}.blueTag{border-radius:%?30?%;padding:%?10?% %?20?%;font-size:%?24?%;background:#06f;color:#fff}.blueTag2{border-radius:%?30?%;padding:%?10?% %?20?%;font-size:%?24?%;background:#06f;color:#fff;opacity:.4}.greenTag{border-radius:%?30?%;padding:%?10?% %?20?%;font-size:%?24?%;background:#39b54a;color:#fff}.greenTag2{border-radius:%?30?%;padding:%?10?% %?20?%;font-size:%?24?%;background:#39b54a;color:#fff;opacity:.4}.input-box{margin-top:%?10?%;padding:%?10?% 0;color:#fff;width:100%;position:relative;border-bottom:%?2?% solid #f1bb0e;.uni-input-placeholder{color:#c6c6c6}}\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-line-1{\n\n\ndisplay:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important\n}.u-line-2{\n\n\ndisplay:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important\n}.u-line-3{\n\n\ndisplay:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important\n}.u-line-4{\n\n\ndisplay:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important\n}.u-line-5{\n\n\ndisplay:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important\n}.u-border{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button{padding:0;background-color:initial;\nfont-size:inherit;line-height:inherit;color:inherit;\n}\n.u-reset-button::after{border:none}\n.u-hover-class{opacity:.7}.u-primary-light{color:#ecf5ff}.u-warning-light{color:#fdf6ec}.u-success-light{color:#f5fff0}.u-error-light{color:#fef0f0}.u-info-light{color:#f4f4f5}.u-primary-light-bg{background-color:#ecf5ff}.u-warning-light-bg{background-color:#fdf6ec}.u-success-light-bg{background-color:#f5fff0}.u-error-light-bg{background-color:#fef0f0}.u-info-light-bg{background-color:#f4f4f5}.u-primary-dark{color:#398ade}.u-warning-dark{color:#f1a532}.u-success-dark{color:#53c21d}.u-error-dark{color:#e45656}.u-info-dark{color:#767a82}.u-primary-dark-bg{background-color:#398ade}.u-warning-dark-bg{background-color:#f1a532}.u-success-dark-bg{background-color:#53c21d}.u-error-dark-bg{background-color:#e45656}.u-info-dark-bg{background-color:#767a82}.u-primary-disabled{color:#9acafc}.u-warning-disabled{color:#f9d39b}.u-success-disabled{color:#a9e08f}.u-error-disabled{color:#f7b2b2}.u-info-disabled{color:#c4c6c9}.u-primary{color:#3c9cff}.u-warning{color:#f9ae3d}.u-success{color:#5ac725}.u-error{color:#f56c6c}.u-info{color:#909399}.u-primary-bg{background-color:#3c9cff}.u-warning-bg{background-color:#f9ae3d}.u-success-bg{background-color:#5ac725}.u-error-bg{background-color:#f56c6c}.u-info-bg{background-color:#909399}.u-main-color{color:#303133}.u-content-color{color:#606266}.u-tips-color{color:#909193}.u-light-color{color:#c0c4cc}.u-safe-area-inset-top{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}\nuni-toast{z-index:10090}uni-toast .uni-toast{z-index:10090}\n::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.nav-list{display:flex;flex-wrap:wrap;padding:0 %?40?% 0;justify-content:space-between}.nav-li{padding:%?30?%;border-radius:%?12?%;width:45%;margin:0 2.5% %?40?%;background-image:url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png);background-size:cover;background-position:50%;position:relative;z-index:1}.nav-li::after{content:"";position:absolute;z-index:-1;background-color:inherit;width:100%;height:100%;left:0;bottom:-10%;border-radius:%?10?%;opacity:.2;-webkit-transform:scale(.9);transform:scale(.9)}.nav-li.cur{color:#fff;background:#5eb95e;box-shadow:%?4?% %?4?% %?6?% rgba(94,185,94,.4)}.nav-title{font-size:%?32?%;font-weight:300}.nav-title::first-letter{font-size:%?40?%;margin-right:%?4?%}.nav-name{font-size:%?28?%;text-transform:Capitalize;margin-top:%?20?%;position:relative}.nav-name::before{content:"";position:absolute;display:block;width:%?40?%;height:%?6?%;background:#fff;bottom:0;right:0;opacity:.5}.nav-name::after{content:"";position:absolute;display:block;width:%?100?%;height:1px;background:#fff;bottom:0;right:%?40?%;opacity:.3}.nav-name::first-letter{font-weight:700;font-size:%?36?%;margin-right:1px}.nav-li uni-text{position:absolute;right:%?30?%;top:%?30?%;font-size:%?52?%;width:%?60?%;height:%?60?%;text-align:center;line-height:%?60?%}.text-light{font-weight:300}@keyframes show{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px)}60%{-webkit-transform:translateY(%?40?%);transform:translateY(%?40?%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes show{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px)}60%{-webkit-transform:translateY(%?40?%);transform:translateY(%?40?%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}', ""]),
        e.exports = a
    },
    "0471": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "tallentaa",
                balance: "Saldo",
                nodata: "ei enempää dataa",
                logout: "Poistu onnistuneesti",
                confirm: "vahvistaa",
                cancel: "Peruuttaa",
                submit: "lähetä",
                recharge: "täytä",
                withdraw: "Nosta käteistä",
                desc: "havainnollistaa",
                tip: "Ystävällisiä vinkkejä",
                tipEmail: "Suojaaksesi tilisi turvallisuutta edelleen, sitoa sähköpostiosoitteesi.",
                tipEmail2: "Sähköpostiosoitteesi sitominen tarjoaa toisen turvatakuun tilisi turvallisuudesta."
            },
            tabbar: {
                t1: "Kotiin",
                t2: "Joukkue",
                t3: "Saada",
                t4: "Omaisuutta",
                t5: "Minun"
            },
            register: {
                title: "rekisteröidy",
                username: "käyttäjätunnus",
                username2: "Anna käyttäjänimi",
                tel: "Puhelinnumero",
                tel2: "Anna matkapuhelinnumero",
                pwd: "salasana",
                pwd2: "Anna salasana",
                repwd: "Vahvista salasana",
                repwd2: "Anna vahvistussalasana",
                icode: "Kutsukoodi",
                icode2: "Anna kutsukoodi",
                has: "Sinulla on jo tili",
                has2: "Kirjaudu sisään nyt",
                email: "Mail",
                email2: "Anna sähköpostiosoitteesi",
                fundPwd: "Maksun salasana",
                fundPwd2: "Anna maksun salasana",
                yzm: "Vahvistuskoodi",
                yzm2: "Anna vahvistuskoodi",
                send: "lähetä",
                noyizhi: "Salasanan syöttö on epäjohdonmukainen"
            },
            login: {
                tel: "Puhelinnumero",
                tel2: "Anna matkapuhelinnumero",
                pwd: "salasana",
                pwd2: "Anna salasana",
                login: "Kirjaudu sisään",
                noc: "Ei vielä tiliä",
                noc2: "Rekisteröidy nyt",
                forgetpwd: "unohda salasana",
                tip1: "Hei",
                tip2: "tervetuloa",
                lang: "Kieliasetus"
            },
            forget: {
                title: "unohda salasana",
                getcode: "Hanki vahvistuskoodi",
                code: "Vahvistuskoodi",
                code2: "Anna vahvistuskoodi",
                nav1: "Google-vahvistus",
                nav2: "Sähköpostivahvistus",
                pwd: "Uusi salasana",
                pwd2: "Anna uusi salasana",
                repwd: "Vahvista salasana",
                repwd2: "Anna vahvistussalasana",
                email: "Sähköposti",
                email2: "Anna sähköpostiosoitteesi"
            },
            index: {
                company: "Yrityksen profiili",
                rule: "sääntö",
                invite: "Kutsu ystäviä",
                hangqing: "Reaaliaikaiset lainaukset",
                friend: "Yhteistyökumppanit",
                message: "viestini",
                message1: "Järjestelmäviestit",
                message2: "tehtävän viesti",
                message3: "Sivuston viesti"
            },
            invite: {
                title: "Kutsu ystäviä",
                tip1: "Kutsu ystäviä voittamaan suuria lahjoja",
                tip2: "Anna kaikkien olla onnellinen ja saada jotain",
                link: "Kutsu linkki",
                code: "Kutsukoodi"
            },
            team: {
                title: "minun tiimini",
                data: "Joukkueen tiedot",
                pickerAll: "kaikki",
                picker1: "tänään",
                picker7: "viimeiset 7 päivää",
                picker30: "Viimeiset 30 päivää",
                picker60: "Viimeiset 60 päivää",
                addPeopel: "Uusia ihmisiä",
                addEarn: "Uusi tulo",
                fenxi: "tuloanalyysi",
                shouru1: "Tehtävätulot",
                shouru2: "Laske tulot",
                shouru3: "Edistä määrällisiä tuloja",
                guimo: "Joukkueen koko",
                youxiao: "Tiimi toimii",
                tdRecharge: "Joukkueen lataus",
                tdCash: "Joukkueen vetäytyminen",
                lookAll: "Näytä kaikki",
                card1: "kokonaispalkkio",
                card2: "Kertynyt lataus",
                card3: "Kumulatiiviset nostot",
                userNum: "käyttäjien määrä",
                yj: "provisioprosentti",
                ljEarn: "Kumulatiivinen tulo",
                level1: "Taso 1",
                level2: "Taso 2",
                level3: "Taso 3",
                list: "Joukkueen lista",
                taskNums: "Kvantisointiajat"
            },
            fund: {
                title: "omaisuutta",
                title2: "Omaisuuden esittely",
                all: "varat yhteensä",
                wait: "Kerättämättömät palkinnot",
                card1: "Joustavat varat",
                card2: "Vapautettava määrä",
                card3: "Kokeilumaksu",
                detail: "Omaisuuden tiedot",
                lookAll: "Näytä kaikki",
                type1: "kaikki",
                type2: "tulot",
                type3: "menot",
                task: "lähetyskeskus",
                taskTip1: "Robotin kvantifiointi",
                taskTip2: "Lisää rikkautta helposti",
                detailCard1: "Määrä",
                detailCard2: "nimi",
                detailCard3: "tyyppi",
                detailCard4: "Tilausnumero",
                detailCard5: "aika",
                back: "palata"
            },
            task: {
                up: "Päivitä tasolle {level}",
                up2: "Päivitä tasolle {level}, niin saat {money}",
                done: "Valmis",
                ing: "käynnissä",
                can: "vastaanottaa",
                inviteNum: "Kutsu {nums} henkilöä tallettamaan {money}",
                inviteAward: "Saat {award}"
            },
            mine: {
                icode: "Kutsukoodi",
                goOut: "lopettaa",
                jiesuo: "Tämä taso on avattu",
                shengji: "Päivitä nyt",
                zichan: "Varat yhteensä",
                card1: "lompakon saldo",
                card2: "Vapautettavat varat",
                card3: "Kumulatiivinen tulo",
                card4: "Kumulatiiviset nostot",
                card5: "Joukkueen koko",
                changyong: "Yleisesti käytetyt toiminnot",
                email: "Sähköposti",
                pwd: "Kirjautumissalasana",
                fundPwd: "Tapahtuman salasana",
                other: "Muut toiminnot",
                help: "Ohjekeskus",
                userTl: "Käyttäjäehdot",
                lang: "vaihtaa kieltä",
                kefu: "asiakaspalvelu",
                onlineServer: "Online asiakaspalvelu",
                qiandao: "Kirjaudu sisään",
                lx: "yhdistä",
                qiandaoTip: "Aina kun kirjaudut sisään {num} päivää, saat {money}",
                bank: "pankkikortti",
                address: "Kotiutusosoite",
                logoutTip: "Haluatko varmasti kirjautua ulos?"
            },
            recharge: {
                amount: "Lataa summa",
                amount2: "Anna lataussumma",
                amountO: "Muut latausmäärät",
                methods: "Latausmenetelmä",
                btn: "Lataa nyt",
                record: "Lataa ennätys",
                min: "Minimi nostosumma",
                desc: "havainnollistaa",
                pingzheng: "Lataa kuponki",
                pingzheng2: "Lataa latauskuponki",
                address: "Latausosoite",
                status0: "Maksettava",
                status1: "Valmis",
                status2: "Lataus epäonnistui",
                status3: "Peruutettu",
                detailCard1: "Latausmenetelmä",
                detailCard2: "osavaltio",
                detailCard3: "Tilausnumero",
                detailCard4: "aika",
                detailCard5: "Määrä",
                go: "Ole hyvä ja siirry sitomaan pankkikortti",
                usdtTip1: "1. Tämä osoite hyväksyy vain USDT TRC20 -protokollan latauksen. Älä talleta muita valuuttoja tai muita protokollia.",
                usdtTip2: "2. Tarkista huolellisesti jokaisen latauksen latausosoite. Kunkin latauksen määrä lasketaan todellisen lähetettävän summan perusteella.",
                usdtTip3: "3. Lataus saavutetaan yleensä muutaman minuutin kuluessa siirron suorittamisesta"
            },
            bank: {
                bank: "pankki",
                bank2: "Anna pankki",
                bankAccount: "pankkitili",
                bankAccount2: "Anna pankkitili",
                kaihuren: "Tilin haltija",
                kaihuren2: "Anna tilin haltija",
                tel: "Puhelinnumero",
                tel2: "Anna matkapuhelinnumero"
            },
            withdraw: {
                record: "Kotiutustiedot",
                account: "Nosta tili",
                account2: "Valitse nostotili",
                accountRed: "Kotiutustilin hallinta",
                amount: "Nostosumma",
                amount2: "Syötä nostosumma",
                keyong: "käytettävissä oleva saldo",
                tip: "Huomautuksia nostosta",
                pwd: "Maksun salasana",
                pwd2: "Anna maksun salasana",
                min: "Minimi nostosumma",
                fee: "käsittelymaksu",
                status0: "Odottaa tarkistusta",
                status1: "Kauppa suoritettu",
                status2: "Käännä alas",
                status3: "Siirretään",
                status4: "Kauppa suoritettu"
            },
            account: {
                title: "Tilinhallinta",
                bind: "Siirry sitomiseen",
                bind2: "Sidottu",
                address: "osoite",
                address2: "Anna osoite",
                btn: "Sido nyt",
                tip1: "Varmista, että tilisi on oikean nimen tilisi, jos se ei ole oikean nimen tilisi, nosto epäonnistuu ja tili jäädytetään.",
                tip2: "Jos sinun on muokattava tiliäsi, ota yhteyttä asiakaspalveluun"
            },
            get: {
                title: "Määritä määrä",
                card1: "Mitattavissa oleva määrä tänään",
                card2: "Tämän päivän tulot",
                card3: "Mitattavissa olevat ajat tänään",
                card4: "kokonaistulot",
                btn: "automaattinen kvantifiointi",
                liucheng: "Suorita paneeliprosessi",
                step1: "1. Tiedonkeruu on käynnissä",
                step2: "2. Kestävän kehityksen strategia",
                step3: "3. Jälkitestaus käynnissä",
                step4: "4. Suoritetaan",
                step5: "5. Kvantifiointi suoritettu",
                record: "Määrälliset tietueet",
                record1: "Investoinnin määrä",
                record2: "voittoa",
                record3: "Ostoalusta",
                record4: "myydä alusta",
                record5: "ostohinta",
                record6: "myyntihinta"
            },
            vip: {
                title: "Jäsenkeskus",
                now: "nykyinen taso",
                level: "VIP taso",
                jiesuo: "Tämä taso on avattu",
                jiesuo2: "Tätä tasoa ei ole avattu",
                tj: "Päivitysehdot",
                tj1: "Tehokas määrä",
                tj2: "Ylennettyjen ihmisten määrä yhden sukupolven aikana",
                tj3: "Mainosta käyttäjätasoa",
                qy: "oikeuksia ja etuja",
                qy1: "Tuloprosentti",
                qy2: "vähimmäismäärä",
                qy3: "Suurin määrällinen määrä",
                qy4: "Kvantifiointien lukumäärä päivässä"
            },
            safe: {
                title: "Turvallisuuden hallinta",
                login_pwd: "Kirjautumissalasana",
                fund_pwd: "Maksun salasana",
                safe: "Turvallisuus",
                edit_pwd: "Vaihda kirjautumissalasana",
                edit_fundpwd: "Vaihda maksun salasana",
                phone: "puhelinnumero",
                getcode: "Hanki vahvistuskoodi",
                code: "Vahvistuskoodi",
                icode: "Anna vahvistuskoodi",
                newpwd: "Uusi salasana",
                inewpwd: "Uusi salasana",
                renewpwd: "Vahvista uusi salasana",
                renewpwd2: "Anna uusi salasana",
                oldpwd: "alkuperäinen salasana",
                oldpwd2: "Anna alkuperäinen salasana",
                error: "Anna tiedot",
                hold: "Varmista, että uusi salasana on johdonmukainen"
            },
            keyboard: {
                ifundPwd: "Anna maksun salasana",
                verifying: "Tarkista maksun salasana"
            },
            google: {
                step1: "ensimmäinen askel",
                step2: "Vaihe 2",
                step3: "Vaihe 3",
                tip1: "Lataa Google Authenticator mobiilisovelluskaupasta",
                tip2: "Skannaa QR-koodi ja sitoudu Google Authenticatorin kautta",
                code: "Anna Google-vahvistuskoodi",
                tip3: "Google Authenticatorin sitominen tarjoaa toisen suojakerroksen tilisi suojaukselle.",
                renzheng: "Sertifioitu"
            }
        }
    },
    "0889": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "保存",
                balance: "バランス",
                nodata: "もうデータはありません",
                logout: "正常に終了しました",
                confirm: "確認する",
                cancel: "キャンセル",
                submit: "提出する",
                recharge: "補充する",
                withdraw: "現金を引き出す",
                desc: "説明する",
                tip: "親切なヒント",
                tipEmail: "アカウントのセキュリティをさらに保護するために、電子メール アドレスをバインドしてください。",
                tipEmail2: "電子メール アドレスをバインドすると、アカウントのセキュリティがさらに保証されます。"
            },
            tabbar: {
                t1: "家",
                t2: "チーム",
                t3: "得る",
                t4: "資産",
                t5: "私の"
            },
            register: {
                title: "登録する",
                username: "ユーザー名",
                username2: "ユーザー名を入力してください",
                tel: "電話番号",
                tel2: "携帯電話番号を入力してください",
                pwd: "パスワード",
                pwd2: "パスワードを入力してください",
                repwd: "パスワードを認証する",
                repwd2: "確認用のパスワードを入力してください",
                icode: "招待コード",
                icode2: "招待コードを入力してください",
                has: "すでにアカウントをお持ちです",
                has2: "今すぐログインしてください",
                email: "郵便",
                email2: "メールアドレスを入力してください",
                fundPwd: "支払いパスワード",
                fundPwd2: "支払いパスワードを入力してください",
                yzm: "検証コード",
                yzm2: "確認コードを入力してください",
                send: "送信",
                noyizhi: "パスワードの入力が矛盾しています"
            },
            login: {
                tel: "電話番号",
                tel2: "携帯電話番号を入力してください",
                pwd: "パスワード",
                pwd2: "パスワードを入力してください",
                login: "ログイン",
                noc: "まだアカウントがありません",
                noc2: "今すぐ登録してください",
                forgetpwd: "パスワードを忘れる",
                tip1: "こんにちは",
                tip2: "ようこそ",
                lang: "言語の好み"
            },
            forget: {
                title: "パスワードを忘れる",
                getcode: "確認コードを取得する",
                code: "検証コード",
                code2: "確認コードを入力してください",
                nav1: "Google認証",
                nav2: "メール認証",
                pwd: "新しいパスワード",
                pwd2: "新しいパスワードを入力してください",
                repwd: "パスワードを認証する",
                repwd2: "確認用のパスワードを入力してください",
                email: "電子メール",
                email2: "メールアドレスを入力してください"
            },
            index: {
                company: "会社概要",
                rule: "ルール",
                invite: "友達を招待する",
                hangqing: "リアルタイムの相場",
                friend: "パートナー",
                message: "私のメッセージ",
                message1: "システムメッセージ",
                message2: "ミッションメッセージ",
                message3: "サイトメッセージ"
            },
            invite: {
                title: "友達を招待する",
                tip1: "友達を招待して豪華なプレゼントを獲得しましょう",
                tip2: "みんなが幸せになって何かを得られるように",
                link: "招待リンク",
                code: "招待コード"
            },
            team: {
                title: "私のチーム",
                data: "チームデータ",
                pickerAll: "全て",
                picker1: "今日",
                picker7: "過去7日間",
                picker30: "過去 30 日間",
                picker60: "過去60日間",
                addPeopel: "新しい人",
                addEarn: "新たな収益",
                fenxi: "収益分析",
                shouru1: "タスク収入",
                shouru2: "収益を定量化する",
                shouru3: "定量的な収入を促進する",
                guimo: "チームの規模",
                youxiao: "チームワーク",
                tdRecharge: "チームのリチャージ",
                tdCash: "チーム撤退",
                lookAll: "すべて見る",
                card1: "合計手数料",
                card2: "累積リチャージ",
                card3: "累積引き出し額",
                userNum: "ユーザー数",
                yj: "手数料率",
                ljEarn: "累計収入",
                level1: "レベル1",
                level2: "レベル2",
                level3: "レベル3",
                list: "チーム一覧",
                taskNums: "量子化時間"
            },
            fund: {
                title: "資産",
                title2: "アセット紹介",
                all: "総資産",
                wait: "未回収の報酬",
                card1: "柔軟な資金",
                card2: "放出される金額",
                card3: "トライアル料金",
                detail: "資産の詳細",
                lookAll: "すべて見る",
                type1: "全て",
                type2: "所得",
                type3: "支出",
                task: "ミッションセンター",
                taskTip1: "ロボットの定量化",
                taskTip2: "簡単に資産を増やす",
                detailCard1: "額",
                detailCard2: "名前",
                detailCard3: "タイプ",
                detailCard4: "注文番号",
                detailCard5: "時間",
                back: "戻る"
            },
            task: {
                up: "{level}にアップグレード",
                up2: "{level} にアップグレードすると、{money} を獲得できます",
                done: "完了",
                ing: "進行中",
                can: "受け取る",
                inviteNum: "{nums} 人を {money} の入金に招待します",
                inviteAward: "{award}を獲得します"
            },
            mine: {
                icode: "招待コード",
                goOut: "やめる",
                jiesuo: "このレベルはロック解除されました",
                shengji: "今すぐアップグレードしてください",
                zichan: "総資産",
                card1: "ウォレット残高",
                card2: "解放される資金",
                card3: "累計収入",
                card4: "累積引き出し額",
                card5: "チームの規模",
                changyong: "よく使われる機能",
                email: "電子メール",
                pwd: "ログインパスワード",
                fundPwd: "取引パスワード",
                other: "その他の機能",
                help: "ヘルプセンター",
                userTl: "ユーザー規約",
                lang: "言語を切り替える",
                kefu: "顧客サービス",
                onlineServer: "オンラインカスタマーサービス",
                qiandao: "サインイン",
                lx: "接続する",
                qiandaoTip: "{num} 日間サインインするたびに、{money} を獲得できます",
                bank: "銀行カード",
                address: "出金アドレス",
                logoutTip: "ログアウトしてもよろしいですか?"
            },
            recharge: {
                amount: "チャージ金額",
                amount2: "チャージ金額を入力してください",
                amountO: "その他のチャージ金額",
                methods: "チャージ方法",
                btn: "今すぐ充電してください",
                record: "リチャージ記録",
                min: "最低出金額",
                desc: "説明する",
                pingzheng: "リチャージバウチャー",
                pingzheng2: "リチャージバウチャーをアップロードしてください",
                address: "リチャージアドレス",
                status0: "支払われるべきもの",
                status1: "完了",
                status2: "再充電に失敗しました",
                status3: "キャンセル",
                detailCard1: "チャージ方法",
                detailCard2: "州",
                detailCard3: "注文番号",
                detailCard4: "時間",
                detailCard5: "額",
                go: "銀行カードをバインドしてください",
                usdtTip1: "1. このアドレスは USDT TRC20 プロトコルのリチャージのみを受け入れます。他の通貨または他のプロトコルを入金しないでください。",
                usdtTip2: "2. リチャージごとのリチャージアドレスをよくご確認ください。各リチャージ金額は実際の送金金額に基づいて計算されます。",
                usdtTip3: "3. 通常、送金完了後数分以内にチャージが完了します。"
            },
            bank: {
                bank: "銀行",
                bank2: "銀行を入力してください",
                bankAccount: "銀行口座",
                bankAccount2: "銀行口座を入力してください",
                kaihuren: "口座名義人",
                kaihuren2: "口座名義人を入力してください",
                tel: "電話番号",
                tel2: "携帯電話番号を入力してください"
            },
            withdraw: {
                record: "出金記録",
                account: "引き出し口座",
                account2: "出金口座を選択してください",
                accountRed: "出金口座管理",
                amount: "出金額",
                amount2: "出金額を入力してください",
                keyong: "利用可能残高",
                tip: "退会に関する注意事項",
                pwd: "支払いパスワード",
                pwd2: "支払いパスワードを入力してください",
                min: "最低出金額",
                fee: "手数料",
                status0: "審査待ち",
                status1: "取引が完了しました",
                status2: "断る",
                status3: "転送中",
                status4: "取引が完了しました"
            },
            account: {
                title: "アカウント管理",
                bind: "バインディングに移動",
                bind2: "バウンド",
                address: "住所",
                address2: "住所を入力してください",
                btn: "今すぐバインド",
                tip1: "アカウントが実名アカウントであることを確認してください。実名アカウントでない場合、出金は失敗し、アカウントは凍結されます。",
                tip2: "アカウントを変更する必要がある場合は、カスタマーサービスにお問い合わせください。"
            },
            get: {
                title: "定量化する",
                card1: "今日の定量化可能な金額",
                card2: "今日の収益",
                card3: "今日の定量化可能な時間",
                card4: "総収益",
                btn: "自動定量化",
                liucheng: "パネル工程を実施",
                step1: "1. データ収集中",
                step2: "2. 持続可能な開発戦略",
                step3: "3. バックテスト中",
                step4: "4. 実行中",
                step5: "5. 定量化完了",
                record: "定量的記録",
                record1: "投資金額",
                record2: "利益",
                record3: "購入プラットフォーム",
                record4: "プラットフォームを販売する",
                record5: "購入価格",
                record6: "販売価格"
            },
            vip: {
                title: "メンバーセンター",
                now: "現在のレベル",
                level: "VIPレベル",
                jiesuo: "このレベルはロック解除されました",
                jiesuo2: "このレベルはロックが解除されていません",
                tj: "アップグレード条件",
                tj1: "有効量",
                tj2: "一世代で昇進した人数",
                tj3: "ユーザーレベルの昇格",
                qy: "権利と利益",
                qy1: "収益の割合",
                qy2: "最小定量量",
                qy3: "最大定量量",
                qy4: "1 日あたりの定量化の数"
            },
            safe: {
                title: "セキュリティ管理",
                login_pwd: "ログインパスワード",
                fund_pwd: "支払いパスワード",
                safe: "安全性",
                edit_pwd: "ログインパスワードを変更する",
                edit_fundpwd: "支払いパスワードを変更する",
                phone: "電話番号",
                getcode: "確認コードを取得する",
                code: "検証コード",
                icode: "確認コードを入力してください",
                newpwd: "新しいパスワード",
                inewpwd: "新しいパスワード",
                renewpwd: "新しいパスワードを確認します",
                renewpwd2: "新しいパスワードを入力してください",
                oldpwd: "元のパスワード",
                oldpwd2: "元のパスワードを入力してください",
                error: "データを入力してください",
                hold: "新しいパスワードが一致していることを確認してください"
            },
            keyboard: {
                ifundPwd: "支払いパスワードを入力してください",
                verifying: "支払いパスワードを確認する"
            },
            google: {
                step1: "最初のステップ",
                step2: "ステップ2",
                step3: "ステップ3",
                tip1: "モバイルアプリストアからGoogle Authenticatorをダウンロードしてください",
                tip2: "QR コードをスキャンして Google Authenticator 経由でバインドします",
                code: "Google 確認コードを入力してください",
                tip3: "Google Authenticator をバインドすると、アカウントのセキュリティに別のセキュリティ層が提供されます。",
                renzheng: "認定済み"
            }
        }
    },
    "0e06": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "Save",
                balance: "Balance",
                nodata: "No more data",
                logout: "Successful exit",
                confirm: "Confirm",
                cancel: "Cancel",
                submit: "Submit",
                recharge: "Recharge",
                withdraw: "Withdraw",
                desc: "Instructions",
                tip: "Tips",
                tipEmail: "To further protect the security of your account, please bind your email address.",
                tipEmail2: "Binding an email address provides another security guarantee for your account security"
            },
            tabbar: {
                t1: "Home",
                t2: "Team",
                t3: "Get",
                t4: "Assets",
                t5: "My"
            },
            register: {
                title: "Register",
                username: "Username",
                username2: "Please enter username",
                tel: "Phone number",
                tel2: "Please enter your phone number",
                pwd: "Password",
                pwd2: "Please enter your password",
                repwd: "Confirm password",
                repwd2: "Please enter confirmation password",
                icode: "Invite code",
                icode2: "Please enter invitation code",
                has: "Already have an account",
                has2: "Log in now",
                email: "Email",
                email2: "Please enter your email address",
                fundPwd: "Payment password",
                fundPwd2: "Please enter payment password",
                yzm: "Verification code",
                yzm2: "Please enter verification code",
                send: "Send",
                noyizhi: "Password input is inconsistent"
            },
            login: {
                tel: "Phone number",
                tel2: "Please enter your phone number",
                pwd: "Password",
                pwd2: "Please enter password",
                login: "Log in",
                noc: "No account yet",
                noc2: "Register now",
                forgetpwd: "Forgot password",
                tip1: "Hello",
                tip2: "Welcome to",
                lang: "Language preference"
            },
            forget: {
                title: "Forgot password",
                getcode: "Get verification code",
                code: "Verification code",
                code2: "Please enter verification code",
                nav1: "Google verification",
                nav2: "Email verification",
                pwd: "New password",
                pwd2: "Please enter new password",
                repwd: "Confirm password",
                repwd2: "Please enter confirmation password",
                email: "Email",
                email2: "Please enter email address"
            },
            index: {
                company: "Company profile",
                rule: "Rules",
                invite: "Invite friends",
                hangqing: "Real-time market",
                friend: "Partners",
                message: "My message",
                message1: "System message",
                message2: "Task message",
                message3: "Site message"
            },
            invite: {
                title: "Invite friends",
                tip1: "Invite friends to win gifts",
                tip2: "Make everyone happy and rewarding",
                link: "Invite link",
                code: "Invite code"
            },
            team: {
                title: "My team",
                data: "Team data",
                pickerAll: "All",
                picker1: "Today",
                picker7: "Recent 7 days",
                picker30: "Recent 30 days",
                picker60: "Recent 60 days",
                addPeopel: "New people",
                addEarn: "New income",
                fenxi: "Income analysis",
                shouru1: "Task income",
                shouru2: "Quantitative income",
                shouru3: "Promotion quantitative income",
                guimo: "Team size",
                youxiao: "Team effectiveness",
                tdRecharge: "Team recharge",
                tdCash: "Team withdrawal",
                lookAll: "View all",
                card1: "Total commission",
                card2: "Cumulative top-up",
                card3: "Cumulative withdrawal",
                userNum: "Number of users",
                yj: "Commission percentage",
                ljEarn: "Cumulative income",
                level1: "Level 1",
                level2: "Level 2",
                level3: "Level 3",
                list: "Team list",
                taskNums: "Quantitative times"
            },
            fund: {
                title: "Assets",
                title2: "Asset introduction",
                all: "Total assets",
                wait: "Uncollected rewards",
                card1: "Flexible funds",
                card2: "Amount to be released",
                card3: "Experience money",
                detail: "Asset details",
                lookAll: "View all",
                type1: "All",
                type2: "Income",
                type3: "Expenditures",
                task: "Task center",
                taskTip1: "Robot quantification",
                taskTip2: "Easily realize wealth appreciation",
                detailCard1: "Amount",
                detailCard2: "Name",
                detailCard3: "Type",
                detailCard4: "Order number",
                detailCard5: "Time",
                back: "Return"
            },
            task: {
                up: "Upgrade to {level}",
                up2: "Upgrade to {level} will get {money}",
                done: "Completed",
                ing: "In progress",
                can: "Collect",
                inviteNum: "Invite {nums} people recharged {money}",
                inviteAward: "You will receive {award} reward"
            },
            mine: {
                icode: "Invitation code",
                goOut: "Exit",
                jiesuo: "Unlocked this level",
                shengji: "Upgrade now",
                zichan: "Total assets",
                card1: "Wallet balance",
                card2: "Funds to be released",
                card3: "Accumulated income",
                card4: "Accumulated withdrawals",
                card5: "Team members",
                changyong: "Common functions",
                email: "Email",
                pwd: "Login password",
                fundPwd: "Payment password",
                other: "Other functions",
                help: "Help center",
                userTl: "User regulations",
                lang: "Switch language",
                kefu: "Customer service",
                onlineServer: "Online customer service",
                qiandao: "Sign in",
                lx: "Contact",
                qiandaoTip: "Sign in {num} days and get {money}",
                bank: "Bank card",
                address: "Withdrawal address",
                logoutTip: "Are you sure you want to log out?"
            },
            recharge: {
                amount: "Recharge amount",
                amount2: "Please enter the recharge amount",
                amountO: "Other recharge amounts",
                methods: "Recharge method",
                btn: "Recharge now",
                record: "Recharge record",
                min: "Minimum withdrawal amount",
                desc: "Instructions",
                pingzheng: "Recharge voucher",
                pingzheng2: "Please upload the recharge voucher",
                address: "Recharge address",
                status0: "Waiting for payment",
                status1: "Completed",
                status2: "Recharge failed",
                status3: "Cancelled",
                detailCard1: "Recharge method",
                detailCard2: "Status",
                detailCard3: "Order number",
                detailCard4: "Time",
                detailCard5: "Amount",
                go: "Please go to bind bank card",
                usdtTip1: "1. This address only accepts USDT TRC20 protocol recharge, please do not deposit other currencies or other protocols",
                usdtTip2: "2. Please check the recharge address carefully before each recharge, and the recharge amount of each transaction is calculated according to the actual remittance amount",
                usdtTip3: "3. Recharge usually reaches within a few minutes after the transfer is completed"
            },
            bank: {
                bank: "Bank",
                bank2: "Please enter the bank",
                bankAccount: "Bank account",
                bankAccount2: "Please enter the bank account",
                kaihuren: "Account holder",
                kaihuren2: "Please enter the account holder",
                tel: "Mobile number",
                tel2: "Please enter the mobile number"
            },
            withdraw: {
                record: "Withdrawal record",
                account: "Withdrawal account",
                account2: "Please select the withdrawal account",
                accountRed: "Withdrawal account management",
                amount: "Withdrawal amount",
                amount2: "Please enter the withdrawal amount",
                keyong: "Available balance",
                tip: "Withdrawal precautions",
                pwd: "Payment password",
                pwd2: "Please enter the payment password",
                min: "Minimum withdrawal amount",
                fee: "Handling fee",
                status0: "Pending review",
                status1: "Transaction completed",
                status2: "Rejected",
                status3: "Transferring",
                status4: "Transaction completed"
            },
            account: {
                title: "Account management",
                bind: "Unbind",
                bind2: "Already bound",
                address: "Address",
                address2: "Please enter the address",
                btn: "Bind now",
                tip1: "Please make sure your account is your real-name account. If it is not your real-name account, it will cause the withdrawal to fail and the account to be frozen",
                tip2: "If you need to modify your account, please contact customer service"
            },
            get: {
                title: "Quantification",
                card1: "Today's quantifiable amount",
                card2: "Today's income",
                card3: "Today's quantifiable times",
                card4: "Total income",
                btn: "Automatic quantification",
                liucheng: "Carrying out the panel process",
                step1: "1. Data collection is in progress",
                step2: "2. Sustainable development strategy",
                step3: "3. Backtesting in progress",
                step4: "4. Executing",
                step5: "5. Quantification completed",
                record: "Quantitative Records",
                record1: "Investment amount",
                record2: "Profit",
                record3: "Buy platform",
                record4: "Sell platform",
                record5: "Buy price",
                record6: "Sell price"
            },
            vip: {
                title: "Member center",
                now: "Current level",
                level: "VIP level",
                jiesuo: "Unlocked this level",
                jiesuo2: "Unlocked this level",
                tj: "Upgrade conditions",
                tj1: "Effective amount",
                tj2: "Number of first-generation promoters",
                tj3: "Promotion user level",
                qy: "Equity",
                qy1: "Percentage of income",
                qy2: "Minimum quantification amount",
                qy3: "Maximum quantification amount",
                qy4: "Daily quantification times"
            },
            safe: {
                title: "Security management",
                login_pwd: "Login password",
                fund_pwd: "Payment password",
                safe: "Security",
                edit_pwd: "Change login password",
                edit_fundpwd: "Change payment password",
                phone: "Phone number",
                getcode: "Get verification code",
                code: "Verification code",
                icode: "Please enter verification code",
                newpwd: "New password",
                inewpwd: "New password",
                renewpwd: "Confirm new password",
                renewpwd2: "Please enter new password",
                oldpwd: "Original password",
                oldpwd2: "Enter original password",
                error: "Please enter data",
                hold: "Please confirm that the new password is consistent"
            },
            keyboard: {
                ifundPwd: "Enter payment password",
                verifying: "Verify payment password"
            },
            google: {
                step1: "Step 1",
                step2: "Step 2",
                step3: "Step 3",
                tip1: "Please download Google Authenticator from the mobile app store",
                tip2: "By scanning the QR code to bind through Google Authenticator",
                code: "Please enter the Google verification code",
                tip3: "Binding Google Authenticator provides another layer of security for your account security",
                renzheng: "Certified"
            }
        }
    },
    1104: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "ahorrar",
                balance: "Balance",
                nodata: "no más datos",
                logout: "Salir exitosamente",
                confirm: "confirmar",
                cancel: "Cancelar",
                submit: "entregar",
                recharge: "completar",
                withdraw: "retirar efectivo",
                desc: "ilustrar",
                tip: "Consejos amables",
                tipEmail: "Para proteger aún más la seguridad de su cuenta, vincule su dirección de correo electrónico.",
                tipEmail2: "Vincular su dirección de correo electrónico proporciona otra garantía de seguridad para la seguridad de su cuenta."
            },
            tabbar: {
                t1: "Hogar",
                t2: "equipo",
                t3: "conseguir",
                t4: "activos",
                t5: "mío"
            },
            register: {
                title: "registro",
                username: "nombre de usuario",
                username2: "Por favor ingrese el nombre de usuario",
                tel: "Número de teléfono",
                tel2: "Por favor introduce el número de teléfono móvil",
                pwd: "contraseña",
                pwd2: "Por favor ingrese la contraseña",
                repwd: "confirmar Contraseña",
                repwd2: "Por favor ingrese la contraseña de confirmación",
                icode: "Código de invitación",
                icode2: "Por favor introduce el código de invitación.",
                has: "Ya tienes una cuenta",
                has2: "Inicia sesión ahora",
                email: "Correo",
                email2: "Por favor ingrese su correo electrónico",
                fundPwd: "Contraseña de pago",
                fundPwd2: "Por favor ingrese la contraseña de pago",
                yzm: "Código de verificación",
                yzm2: "Por favor ingresa el código de verificación",
                send: "enviar",
                noyizhi: "La entrada de contraseña es inconsistente"
            },
            login: {
                tel: "Número de teléfono",
                tel2: "Por favor introduce el número de teléfono móvil",
                pwd: "contraseña",
                pwd2: "Por favor ingrese la contraseña",
                login: "Acceso",
                noc: "Aún no hay cuenta",
                noc2: "Regístrate ahora",
                forgetpwd: "olvida la contraseña",
                tip1: "Hola",
                tip2: "bienvenido a",
                lang: "Preferencia de idioma"
            },
            forget: {
                title: "olvida la contraseña",
                getcode: "Obtener código de verificación",
                code: "Código de verificación",
                code2: "Por favor ingresa el código de verificación",
                nav1: "Verificación de Google",
                nav2: "Verificación de correo electrónico",
                pwd: "Nueva contraseña",
                pwd2: "Por favor ingrese una nueva contraseña",
                repwd: "confirmar Contraseña",
                repwd2: "Por favor ingrese la contraseña de confirmación",
                email: "Correo electrónico",
                email2: "Por favor ingrese su dirección de correo electrónico"
            },
            index: {
                company: "Perfil de la empresa",
                rule: "regla",
                invite: "invitar amigos",
                hangqing: "Cotizaciones en tiempo real",
                friend: "Fogonadura",
                message: "mi mensaje",
                message1: "Mensajes del sistema",
                message2: "mensaje de misión",
                message3: "Mensaje del sitio"
            },
            invite: {
                title: "invitar amigos",
                tip1: "Invita a tus amigos a ganar grandes regalos.",
                tip2: "Que todos se sientan felices y ganen algo.",
                link: "Enlace de invitación",
                code: "Código de invitación"
            },
            team: {
                title: "mi equipo",
                data: "Datos del equipo",
                pickerAll: "todo",
                picker1: "hoy",
                picker7: "últimos 7 días",
                picker30: "últimos 30 días",
                picker60: "últimos 60 días",
                addPeopel: "gente nueva",
                addEarn: "Nuevos ingresos",
                fenxi: "análisis de ingresos",
                shouru1: "Ingresos por tareas",
                shouru2: "Cuantificar los ingresos",
                shouru3: "Promover ingresos cuantificados",
                guimo: "Tamaño del equipo",
                youxiao: "Trabajos en equipo",
                tdRecharge: "Recarga de equipo",
                tdCash: "Retiro del equipo",
                lookAll: "Ver todo",
                card1: "comisión total",
                card2: "Recarga acumulada",
                card3: "Retiros acumulados",
                userNum: "número de usuarios",
                yj: "porcentaje de comisión",
                ljEarn: "Ingresos acumulados",
                level1: "Nivel 1",
                level2: "Nivel 2",
                level3: "Nivel 3",
                list: "lista de equipo",
                taskNums: "Tiempos de cuantificación"
            },
            fund: {
                title: "activos",
                title2: "Introducción de activos",
                all: "activos totales",
                wait: "Recompensas a reclamar",
                card1: "Fondos flexibles",
                card2: "Cantidad a liberar",
                card3: "Tarifa de prueba",
                detail: "Detalles del activo",
                lookAll: "Ver todo",
                type1: "todo",
                type2: "ingreso",
                type3: "gasto",
                task: "centro de misión",
                taskTip1: "Cuantificación de robots",
                taskTip2: "Aumentar fácilmente la riqueza",
                detailCard1: "Cantidad",
                detailCard2: "nombre",
                detailCard3: "tipo",
                detailCard4: "Número de orden",
                detailCard5: "tiempo",
                back: "devolver"
            },
            task: {
                up: "Actualizar a {level}",
                up2: "Actualízate a {level} y obtendrás {money}",
                done: "Terminado",
                ing: "en curso",
                can: "recibir",
                inviteNum: "Invitar a {nums} personas a depositar {money}",
                inviteAward: "Recibirás {award}"
            },
            mine: {
                icode: "Código de invitación",
                goOut: "abandonar",
                jiesuo: "Este nivel ha sido desbloqueado.",
                shengji: "Actualiza ahora",
                zichan: "Activos totales",
                card1: "saldo de billetera",
                card2: "Fondos a liberar",
                card3: "Ingresos acumulados",
                card4: "Retiros acumulados",
                card5: "Tamaño del equipo",
                changyong: "Funciones de uso común",
                email: "Correo electrónico",
                pwd: "Contraseña de inicio de sesión",
                fundPwd: "Contraseña de transacción",
                other: "Otras funciones",
                help: "Centro de ayuda",
                userTl: "Términos de usuario",
                lang: "cambiar de idioma",
                kefu: "servicio al cliente",
                onlineServer: "Servicio al cliente en línea",
                qiandao: "Iniciar sesión",
                lx: "conectar",
                qiandaoTip: "Cada vez que inicies sesión en {num} días, recibirás {money}",
                bank: "tarjeta bancaria",
                address: "dirección de retiro",
                logoutTip: "¿Está seguro de que desea cerrar sesión?"
            },
            recharge: {
                amount: "Monto de recarga",
                amount2: "Por favor ingresa el monto de la recarga",
                amountO: "Otros importes de recarga",
                methods: "Método de recarga",
                btn: "Recarga ahora",
                record: "Registro de recarga",
                min: "Monto mínimo de retiro",
                desc: "ilustrar",
                pingzheng: "Bono de recarga",
                pingzheng2: "Por favor sube el bono de recarga",
                address: "Dirección de recarga",
                status0: "a pagar",
                status1: "Terminado",
                status2: "Recarga fallida",
                status3: "Cancelado",
                detailCard1: "Método de recarga",
                detailCard2: "estado",
                detailCard3: "Número de orden",
                detailCard4: "tiempo",
                detailCard5: "Cantidad",
                go: "Por favor vaya a vincular tarjeta bancaria",
                usdtTip1: "1. Esta dirección solo acepta recargas del protocolo USDT TRC20. No deposite otras monedas ni otros protocolos.",
                usdtTip2: "2. Verifique cuidadosamente la dirección de recarga para cada recarga. El monto de cada recarga se calculará en función del monto real remitido.",
                usdtTip3: "3. La recarga suele realizarse unos minutos después de completar la transferencia."
            },
            bank: {
                bank: "banco",
                bank2: "Por favor ingrese el banco",
                bankAccount: "cuenta bancaria",
                bankAccount2: "Por favor ingrese la cuenta bancaria",
                kaihuren: "Titular de la cuenta",
                kaihuren2: "Por favor ingrese el titular de la cuenta",
                tel: "Número de teléfono",
                tel2: "Por favor introduce el número de teléfono móvil"
            },
            withdraw: {
                record: "Registros de retiro",
                account: "Retirar cuenta",
                account2: "Por favor seleccione una cuenta de retiro",
                accountRed: "Gestión de cuenta de retiro",
                amount: "Retirar monto",
                amount2: "Por favor ingrese el monto del retiro",
                keyong: "saldo disponible",
                tip: "Notas sobre el retiro",
                pwd: "Contraseña de pago",
                pwd2: "Por favor ingrese la contraseña de pago",
                min: "Monto mínimo de retiro",
                fee: "tarifa de manejo",
                status0: "Pendiente de revisión",
                status1: "Transacción completada",
                status2: "Rechazar",
                status3: "Transferencia",
                status4: "Transacción completada"
            },
            account: {
                title: "Gestión de cuentas",
                bind: "Ir a encuadernación",
                bind2: "Atado",
                address: "DIRECCIÓN",
                address2: "Por favor ingrese la dirección",
                btn: "Vincular ahora",
                tip1: "Asegúrese de que su cuenta sea su cuenta de nombre real. Si no es su cuenta de nombre real, el retiro fallará y la cuenta se congelará.",
                tip2: "Si necesita modificar su cuenta, comuníquese con el servicio de atención al cliente."
            },
            get: {
                title: "Cuantificar",
                card1: "Cantidad cuantificable hoy",
                card2: "Las ganancias de hoy",
                card3: "Tiempos cuantificables hoy",
                card4: "ingresos totales",
                btn: "cuantificación automática",
                liucheng: "Realizar el proceso del panel",
                step1: "1. Recopilación de datos en curso",
                step2: "2. Estrategia de desarrollo sostenible",
                step3: "3. Pruebas retrospectivas en curso",
                step4: "4. Ejecución",
                step5: "5. Cuantificación completada",
                record: "Registros cuantitativos",
                record1: "Monto de la inversión",
                record2: "ganancia",
                record3: "plataforma de compra",
                record4: "vender plataforma",
                record5: "precio de compra",
                record6: "precio de venta"
            },
            vip: {
                title: "Centro de miembros",
                now: "nivel actual",
                level: "nivel VIP",
                jiesuo: "Este nivel ha sido desbloqueado.",
                jiesuo2: "Este nivel no está desbloqueado.",
                tj: "Condiciones de actualización",
                tj1: "Monto efectivo",
                tj2: "Número de personas ascendidas en una generación.",
                tj3: "Promocionar el nivel de usuario",
                qy: "derechos e intereses",
                qy1: "Porcentaje de ingresos",
                qy2: "cantidad mínima cuantificada",
                qy3: "Importe máximo cuantificado",
                qy4: "Número de cuantificaciones por día"
            },
            safe: {
                title: "Gestión de seguridad",
                login_pwd: "Contraseña de inicio de sesión",
                fund_pwd: "Contraseña de pago",
                safe: "Seguridad",
                edit_pwd: "Cambiar contraseña de inicio de sesión",
                edit_fundpwd: "Cambiar contraseña de pago",
                phone: "número telefónico",
                getcode: "Obtener código de verificación",
                code: "Código de verificación",
                icode: "Por favor ingresa el código de verificación",
                newpwd: "Nueva contraseña",
                inewpwd: "Nueva contraseña",
                renewpwd: "Confirmar nueva contraseña",
                renewpwd2: "Por favor ingrese una nueva contraseña",
                oldpwd: "contraseña original",
                oldpwd2: "Ingrese la contraseña original",
                error: "Por favor ingresa datos",
                hold: "Confirme que la nueva contraseña sea consistente"
            },
            keyboard: {
                ifundPwd: "Ingrese la contraseña de pago",
                verifying: "Verificar contraseña de pago"
            },
            google: {
                step1: "primer paso",
                step2: "Paso 2",
                step3: "Paso 3",
                tip1: "Descargue Google Authenticator desde la tienda de aplicaciones móviles",
                tip2: "Escanee el código QR para vincularse a través de Google Authenticator",
                code: "Por favor ingresa el código de verificación de Google",
                tip3: "La vinculación de Google Authenticator proporciona otra capa de seguridad para la seguridad de su cuenta.",
                renzheng: "Certificado"
            }
        }
    },
    "112b": function(e, a, n) {
        "use strict";
        n.d(a, "b", (function() {
            return i
        }
        )),
        n.d(a, "c", (function() {
            return t
        }
        )),
        n.d(a, "a", (function() {}
        ));
        var i = function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("v-uni-view", [n("v-uni-view", {
                staticClass: "cu-custom ",
                style: [{
                    height: e.CustomBar + "px"
                }]
            }, [n("v-uni-view", {
                staticClass: "cu-bar fixed",
                style: e.style
            }, [e.isBack ? n("v-uni-view", {
                staticClass: "action",
                on: {
                    click: function(a) {
                        arguments[0] = a = e.$handleEvent(a),
                        e.BackPage.apply(void 0, arguments)
                    }
                }
            }, [n("v-uni-text", {
                staticClass: "cuIcon-back text-white"
            }), e._t("backText")], 2) : n("v-uni-view", {
                staticClass: "action",
                staticStyle: {
                    "padding-left": "20rpx"
                }
            }, [e._t("left")], 2), n("v-uni-view", {
                staticClass: "content",
                style: [{
                    top: e.StatusBar + "px"
                }]
            }, [e._t("content", [e.title ? n("v-uni-text", {
                staticClass: "text-white"
            }, [e._v(" " + e._s(e.title) + " ")]) : e._e()])], 2), n("v-uni-view", {
                staticClass: "rigth",
                staticStyle: {
                    "padding-right": "20rpx"
                }
            }, [e._t("right")], 2)], 1)], 1)], 1)
        }
          , t = []
    },
    1566: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "сохранять",
                balance: "Баланс",
                nodata: "больше нет данных",
                logout: "Выйти успешно",
                confirm: "подтверждать",
                cancel: "Отмена",
                submit: "представлять на рассмотрение",
                recharge: "пополнить",
                withdraw: "Снять наличные",
                desc: "иллюстрировать",
                tip: "Добрые советы",
                tipEmail: "Чтобы дополнительно защитить безопасность вашей учетной записи, привяжите свой адрес электронной почты.",
                tipEmail2: "Привязка вашего адреса электронной почты обеспечивает еще одну гарантию безопасности вашей учетной записи."
            },
            tabbar: {
                t1: "Дом",
                t2: "команда",
                t3: "получать",
                t4: "ресурсы",
                t5: "мой"
            },
            register: {
                title: "зарегистрироваться",
                username: "имя пользователя",
                username2: "Пожалуйста, введите имя пользователя",
                tel: "Номер телефона",
                tel2: "Пожалуйста, введите номер мобильного телефона",
                pwd: "пароль",
                pwd2: "Пожалуйста, введите пароль",
                repwd: "Подтвердите пароль",
                repwd2: "Пожалуйста, введите пароль подтверждения",
                icode: "Пригласительный код",
                icode2: "Пожалуйста, введите код приглашения",
                has: "Уже есть аккаунт",
                has2: "Войти сейчас",
                email: "Почта",
                email2: "Пожалуйста, введите свой адрес электронной почты",
                fundPwd: "Пароль платежа",
                fundPwd2: "Пожалуйста, введите платежный пароль",
                yzm: "Проверочный код",
                yzm2: "Пожалуйста, введите проверочный код",
                send: "отправлять",
                noyizhi: "Ввод пароля неверен"
            },
            login: {
                tel: "Номер телефона",
                tel2: "Пожалуйста, введите номер мобильного телефона",
                pwd: "пароль",
                pwd2: "Пожалуйста, введите пароль",
                login: "Авторизоваться",
                noc: "Еще нет аккаунта",
                noc2: "Зарегистрируйтесь сейчас",
                forgetpwd: "забыть пароль",
                tip1: "Привет",
                tip2: "добро пожаловать в",
                lang: "Языковые предпочтения"
            },
            forget: {
                title: "забыть пароль",
                getcode: "Получить код подтверждения",
                code: "Проверочный код",
                code2: "Пожалуйста, введите проверочный код",
                nav1: "Google-верификация",
                nav2: "Проверка электронной почты",
                pwd: "Новый пароль",
                pwd2: "Пожалуйста, введите новый пароль",
                repwd: "Подтвердите пароль",
                repwd2: "Пожалуйста, введите пароль подтверждения",
                email: "Электронная почта",
                email2: "Пожалуйста, введите свой адрес электронной почты"
            },
            index: {
                company: "Профиль компании",
                rule: "правило",
                invite: "Пригласить друзей",
                hangqing: "Котировки в реальном времени",
                friend: "Партнеры",
                message: "мое сообщение",
                message1: "Системные сообщения",
                message2: "сообщение миссии",
                message3: "Сообщение сайта"
            },
            invite: {
                title: "Пригласить друзей",
                tip1: "Приглашайте друзей и выигрывайте большие подарки",
                tip2: "Пусть каждый почувствует себя счастливым и получит что-то",
                link: "Ссылка для приглашения",
                code: "Пригласительный код"
            },
            team: {
                title: "моя команда",
                data: "Данные команды",
                pickerAll: "все",
                picker1: "сегодня",
                picker7: "последние 7 дней",
                picker30: "Последние 30 дней",
                picker60: "Последние 60 дней",
                addPeopel: "Новые люди",
                addEarn: "Новый доход",
                fenxi: "анализ доходов",
                shouru1: "Доход от задачи",
                shouru2: "Количественная оценка дохода",
                shouru3: "Продвигайте количественный доход",
                guimo: "Размер команды",
                youxiao: "Команда работает",
                tdRecharge: "Перезарядка команды",
                tdCash: "Вывод команды",
                lookAll: "Посмотреть все",
                card1: "общая комиссия",
                card2: "Накопленный пополнения",
                card3: "Накопительный вывод средств",
                userNum: "количество пользователей",
                yj: "процент комиссии",
                ljEarn: "Совокупный доход",
                level1: "Уровень 1",
                level2: "Уровень 2",
                level3: "Уровень 3",
                list: "Список команд",
                taskNums: "Время квантования"
            },
            fund: {
                title: "ресурсы",
                title2: "Введение актива",
                all: "общие активы",
                wait: "Несобранные награды",
                card1: "Гибкие фонды",
                card2: "Сумма к выпуску",
                card3: "Пробная плата",
                detail: "Детали актива",
                lookAll: "Посмотреть все",
                type1: "все",
                type2: "доход",
                type3: "расходы",
                task: "миссионерский центр",
                taskTip1: "Количественная оценка роботов",
                taskTip2: "Легко увеличить богатство",
                detailCard1: "Количество",
                detailCard2: "имя",
                detailCard3: "тип",
                detailCard4: "Номер заказа",
                detailCard5: "время",
                back: "возвращаться"
            },
            task: {
                up: "Повысьте уровень до {level}",
                up2: "Повысьте уровень до {level} и вы получите {money}.",
                done: "Завершенный",
                ing: "в ходе выполнения",
                can: "получать",
                inviteNum: "Пригласите {nums} человек внести {money}",
                inviteAward: "Вы получите {award}"
            },
            mine: {
                icode: "Пригласительный код",
                goOut: "покидать",
                jiesuo: "Этот уровень разблокирован",
                shengji: "Обновите сейчас",
                zichan: "Всего активов",
                card1: "баланс кошелька",
                card2: "Средства, подлежащие высвобождению",
                card3: "Совокупный доход",
                card4: "Накопительный вывод средств",
                card5: "Размер команды",
                changyong: "Часто используемые функции",
                email: "Электронная почта",
                pwd: "Пароль для входа",
                fundPwd: "Пароль транзакции",
                other: "Другие функции",
                help: "Справочный центр",
                userTl: "Пользовательские условия",
                lang: "переключить язык",
                kefu: "обслуживание клиентов",
                onlineServer: "Онлайн-обслуживание клиентов",
                qiandao: "Войти",
                lx: "соединять",
                qiandaoTip: "Каждый раз, когда вы входите в систему ({num} дн.), вы получаете {money}.",
                bank: "банковская карта",
                address: "Адрес вывода",
                logoutTip: "Вы уверены, что хотите выйти?"
            },
            recharge: {
                amount: "Сумма пополнения",
                amount2: "Пожалуйста, введите сумму пополнения",
                amountO: "Другие суммы пополнения",
                methods: "Способ пополнения",
                btn: "Пополните счет сейчас",
                record: "Запись пополнения счета",
                min: "Минимальная сумма вывода",
                desc: "иллюстрировать",
                pingzheng: "Ваучер пополнения счета",
                pingzheng2: "Пожалуйста, загрузите ваучер пополнения счета",
                address: "Адрес пополнения счета",
                status0: "Платить",
                status1: "Завершенный",
                status2: "Пополнение не удалось",
                status3: "Отменено",
                detailCard1: "Способ пополнения",
                detailCard2: "состояние",
                detailCard3: "Номер заказа",
                detailCard4: "время",
                detailCard5: "Количество",
                go: "Пожалуйста, перейдите к привязке банковской карты",
                usdtTip1: "1. Этот адрес принимает пополнение только по протоколу USDT TRC20. Не вносите депозиты в других валютах или других протоколах.",
                usdtTip2: "2. Пожалуйста, внимательно проверяйте адрес пополнения для каждого пополнения. Сумма каждого пополнения будет рассчитываться на основе фактической суммы перевода.",
                usdtTip3: "3. Пополнение счета обычно осуществляется в течение нескольких минут после завершения перевода."
            },
            bank: {
                bank: "банк",
                bank2: "Пожалуйста, введите банк",
                bankAccount: "банковский счет",
                bankAccount2: "Пожалуйста, введите банковский счет",
                kaihuren: "Владелец счета",
                kaihuren2: "Пожалуйста, укажите владельца счета",
                tel: "Номер телефона",
                tel2: "Пожалуйста, введите номер мобильного телефона"
            },
            withdraw: {
                record: "Записи о снятии средств",
                account: "Вывести аккаунт",
                account2: "Пожалуйста, выберите счет для вывода средств",
                accountRed: "Управление счетом вывода средств",
                amount: "Сумма вывода",
                amount2: "Пожалуйста, введите сумму вывода",
                keyong: "доступный баланс",
                tip: "Примечания по выводу средств",
                pwd: "Пароль платежа",
                pwd2: "Пожалуйста, введите платежный пароль",
                min: "Минимальная сумма вывода",
                fee: "плата за обработку",
                status0: "Ожидает рассмотрения",
                status1: "транзакция завершена",
                status2: "отказываться",
                status3: "Передача",
                status4: "транзакция завершена"
            },
            account: {
                title: "Управление аккаунтом",
                bind: "Перейти к привязке",
                bind2: "Граница",
                address: "адрес",
                address2: "Пожалуйста, введите адрес",
                btn: "Привязать сейчас",
                tip1: "Пожалуйста, убедитесь, что ваша учетная запись является вашей учетной записью на настоящее имя. Если это не ваша учетная запись на настоящее имя, вывод средств не удастся, и учетная запись будет заморожена.",
                tip2: "Если вам нужно изменить свою учетную запись, обратитесь в службу поддержки клиентов."
            },
            get: {
                title: "Количественная оценка",
                card1: "Измеримая сумма сегодня",
                card2: "Сегодняшний заработок",
                card3: "Измеримое время сегодня",
                card4: "общий доход",
                btn: "автоматическая количественная оценка",
                liucheng: "Провести панельный процесс",
                step1: "1. Сбор данных в процессе",
                step2: "2. Стратегия устойчивого развития",
                step3: "3. Тестирование в процессе",
                step4: "4. Выполнение",
                step5: "5. Количественная оценка завершена",
                record: "Количественные записи",
                record1: "Сумма инвестиции",
                record2: "выгода",
                record3: "Платформа для покупки",
                record4: "продать платформу",
                record5: "цена покупки",
                record6: "цена продажи"
            },
            vip: {
                title: "Центр участников",
                now: "текущий уровень",
                level: "VIP-уровень",
                jiesuo: "Этот уровень разблокирован",
                jiesuo2: "Этот уровень не разблокирован",
                tj: "Условия обновления",
                tj1: "Эффективная сумма",
                tj2: "Количество людей, получивших повышение за одно поколение",
                tj3: "Продвигайте уровень пользователя",
                qy: "права и интересы",
                qy1: "Процент дохода",
                qy2: "минимальная количественная сумма",
                qy3: "Максимальная количественная сумма",
                qy4: "Количество количественных измерений в день"
            },
            safe: {
                title: "Управление безопасностью",
                login_pwd: "Пароль для входа",
                fund_pwd: "Пароль платежа",
                safe: "Безопасность",
                edit_pwd: "Изменить пароль для входа",
                edit_fundpwd: "Изменить платежный пароль",
                phone: "номер телефона",
                getcode: "Получить код подтверждения",
                code: "Проверочный код",
                icode: "Пожалуйста, введите проверочный код",
                newpwd: "Новый пароль",
                inewpwd: "Новый пароль",
                renewpwd: "Подтвердите новый пароль",
                renewpwd2: "Пожалуйста, введите новый пароль",
                oldpwd: "оригинальный пароль",
                oldpwd2: "Введите оригинальный пароль",
                error: "Пожалуйста, введите данные",
                hold: "Пожалуйста, подтвердите, что новый пароль соответствует"
            },
            keyboard: {
                ifundPwd: "Введите платежный пароль",
                verifying: "Проверить платежный пароль"
            },
            google: {
                step1: "первый шаг",
                step2: "Шаг 2",
                step3: "Шаг 3",
                tip1: "Загрузите Google Authenticator из магазина мобильных приложений.",
                tip2: "Отсканируйте QR-код для привязки через Google Authenticator.",
                code: "Пожалуйста, введите код подтверждения Google",
                tip3: "Привязка Google Authenticator обеспечивает еще один уровень безопасности вашей учетной записи.",
                renzheng: "Проверенный"
            }
        }
    },
    1635: function(e, a, n) {
        var i = n("c86c");
        a = i(!1),
        a.push([e.i, '@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cu-custom[data-v-0ff0aa76]{position:relative;background-color:#232f3e}.center-cu[data-v-0ff0aa76]{width:999px!important;height:999px!important}.tabbar[data-v-0ff0aa76]{position:fixed;width:100%;bottom:0;border-radius:%?20?% %?20?% 0 0;min-width:%?750?%;max-width:700px;background-color:#4e7771;z-index:999999}.get[data-v-0ff0aa76]{margin-top:%?-60?%;width:%?140?%!important;height:%?140?%!important;border:%?20?% solid #232f3e;border-radius:50%}.cu-bar[data-v-0ff0aa76]{box-shadow:-1px -2px 4px rgba(0,0,0,.08)}.cu-bar.tabbar .action.add-action[data-v-0ff0aa76]::after{content:"";position:absolute;width:60px;height:60px;top:-30px;left:0;right:0;margin:auto;box-shadow:-1px -2px 4px rgba(0,0,0,.55);border-radius:91px;background-color:inherit;z-index:-2;background-color:#fff}.tabbar-holder[data-v-0ff0aa76]{width:100%;height:%?150?%}.textPo[data-v-0ff0aa76]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:%?30?%}', ""]),
        e.exports = a
    },
    "1eff": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "redden",
                balance: "Evenwicht",
                nodata: "geen gegevens meer",
                logout: "Sluit succesvol af",
                confirm: "bevestigen",
                cancel: "Annuleren",
                submit: "indienen",
                recharge: "bijvullen",
                withdraw: "Geld opnemen",
                desc: "illustreren",
                tip: "Vriendelijke tips",
                tipEmail: "Om de veiligheid van uw account verder te beschermen, verzoeken wij u uw e-mailadres te binden.",
                tipEmail2: "Het binden van uw e-mailadres biedt nog een veiligheidsgarantie voor de veiligheid van uw account."
            },
            tabbar: {
                t1: "Thuis",
                t2: "Team",
                t3: "Krijgen",
                t4: "Activa",
                t5: "De mijne"
            },
            register: {
                title: "register",
                username: "gebruikersnaam",
                username2: "Voer gebruikersnaam in",
                tel: "Telefoonnummer",
                tel2: "Voer uw mobiele telefoonnummer in",
                pwd: "wachtwoord",
                pwd2: "Voer het wachtwoord in",
                repwd: "Bevestig wachtwoord",
                repwd2: "Voer het bevestigingswachtwoord in",
                icode: "Uitnodigingscode",
                icode2: "Voer de uitnodigingscode in",
                has: "Heb al een account",
                has2: "Meld u nu aan",
                email: "Mail",
                email2: "Voer uw e-mailadres in",
                fundPwd: "Betalingswachtwoord",
                fundPwd2: "Voer het betalingswachtwoord in",
                yzm: "Verificatiecode",
                yzm2: "Voer de verificatiecode in",
                send: "versturen",
                noyizhi: "Wachtwoordinvoer is inconsistent"
            },
            login: {
                tel: "Telefoonnummer",
                tel2: "Voer uw mobiele telefoonnummer in",
                pwd: "wachtwoord",
                pwd2: "Voer het wachtwoord in",
                login: "Inloggen",
                noc: "Nog geen account",
                noc2: "Registreer nu",
                forgetpwd: "vergeet het wachtwoord",
                tip1: "Hallo",
                tip2: "welkom bij",
                lang: "Taalvoorkeur"
            },
            forget: {
                title: "vergeet het wachtwoord",
                getcode: "Verificatiecode verkrijgen",
                code: "Verificatiecode",
                code2: "Voer de verificatiecode in",
                nav1: "Google-verificatie",
                nav2: "E-mailverificatie",
                pwd: "Nieuw wachtwoord",
                pwd2: "Voer een nieuw wachtwoord in",
                repwd: "Bevestig wachtwoord",
                repwd2: "Voer het bevestigingswachtwoord in",
                email: "E-mail",
                email2: "Voer uw e-mailadres in"
            },
            index: {
                company: "Bedrijfsprofiel",
                rule: "regel",
                invite: "Nodig vrienden uit",
                hangqing: "Realtime koersen",
                friend: "Partners",
                message: "mijn bericht",
                message1: "Systeemberichten",
                message2: "missie boodschap",
                message3: "Sitebericht"
            },
            invite: {
                title: "Nodig vrienden uit",
                tip1: "Nodig vrienden uit om grote cadeaus te winnen",
                tip2: "Laat iedereen zich gelukkig voelen en iets winnen",
                link: "Uitnodigingslink",
                code: "Uitnodigingscode"
            },
            team: {
                title: "mijn team",
                data: "Teamgegevens",
                pickerAll: "alle",
                picker1: "Vandaag",
                picker7: "laatste 7 dagen",
                picker30: "Laatste 30 dagen",
                picker60: "Laatste 60 dagen",
                addPeopel: "Nieuwe mensen",
                addEarn: "Nieuwe inkomsten",
                fenxi: "analyse van de opbrengsten",
                shouru1: "Taak inkomen",
                shouru2: "Kwantificeer de omzet",
                shouru3: "Promoot gekwantificeerd inkomen",
                guimo: "Teamgrootte",
                youxiao: "Team werkt",
                tdRecharge: "Team opladen",
                tdCash: "Terugtrekking van het team",
                lookAll: "Bekijk alles",
                card1: "totale commissie",
                card2: "Gecumuleerd opladen",
                card3: "Cumulatieve opnames",
                userNum: "aantal gebruikers",
                yj: "commissiepercentage",
                ljEarn: "Cumulatief inkomen",
                level1: "Niveau 1",
                level2: "Niveau 2",
                level3: "Niveau 3",
                list: "Teamlijst",
                taskNums: "Kwantiseringstijden"
            },
            fund: {
                title: "activa",
                title2: "Introductie van activa",
                all: "totale activa",
                wait: "Te claimen beloningen",
                card1: "Flexibele fondsen",
                card2: "Vrij te geven bedrag",
                card3: "Proefkosten",
                detail: "Activagegevens",
                lookAll: "Bekijk alles",
                type1: "alle",
                type2: "inkomen",
                type3: "uitgaven",
                task: "missie centrum",
                taskTip1: "Robotkwantificering",
                taskTip2: "Verhoog eenvoudig uw rijkdom",
                detailCard1: "Hoeveelheid",
                detailCard2: "naam",
                detailCard3: "type",
                detailCard4: "Bestelnummer",
                detailCard5: "tijd",
                back: "opbrengst"
            },
            task: {
                up: "Upgrade naar {level}",
                up2: "Upgrade naar {level} en je krijgt {money}",
                done: "Voltooid",
                ing: "in uitvoering",
                can: "ontvangen",
                inviteNum: "Nodig {nums} mensen uit om {money} te storten",
                inviteAward: "Je ontvangt {award}"
            },
            mine: {
                icode: "Uitnodigingscode",
                goOut: "ontslag nemen",
                jiesuo: "Dit niveau is ontgrendeld",
                shengji: "Upgrade nu",
                zichan: "Totaal activa",
                card1: "portemonnee saldo",
                card2: "Vrij te maken middelen",
                card3: "Cumulatief inkomen",
                card4: "Cumulatieve opnames",
                card5: "Teamgrootte",
                changyong: "Veelgebruikte functies",
                email: "E-mail",
                pwd: "Wachtwoord voor inloggen",
                fundPwd: "Transactiewachtwoord",
                other: "Andere functies",
                help: "Helpcentrum",
                userTl: "Gebruikersvoorwaarden",
                lang: "van taal wisselen",
                kefu: "klantenservice",
                onlineServer: "Online klantenservice",
                qiandao: "Log in",
                lx: "verbinden",
                qiandaoTip: "Elke keer dat u zich aanmeldt voor {num} dagen, ontvangt u {money}",
                bank: "bankkaart",
                address: "Herroepingsadres",
                logoutTip: "Weet u zeker dat u wilt uitloggen?"
            },
            recharge: {
                amount: "Bedrag opwaarderen",
                amount2: "Voer het opwaardeerbedrag in",
                amountO: "Andere oplaadbedragen",
                methods: "Oplaadmethode",
                btn: "Nu opladen",
                record: "Record opladen",
                min: "Minimaal opnamebedrag",
                desc: "illustreren",
                pingzheng: "Voucher opwaarderen",
                pingzheng2: "Upload de opwaardeervoucher",
                address: "Oplaadadres",
                status0: "Te betalen",
                status1: "Voltooid",
                status2: "Opladen mislukt",
                status3: "Geannuleerd",
                detailCard1: "Oplaadmethode",
                detailCard2: "staat",
                detailCard3: "Bestelnummer",
                detailCard4: "tijd",
                detailCard5: "Hoeveelheid",
                go: "Ga naar het binden van de bankkaart",
                usdtTip1: "1. Dit adres accepteert alleen USDT TRC20-protocolopwaarderingen. Stort geen andere valuta of andere protocollen.",
                usdtTip2: "2. Controleer zorgvuldig het opwaardeeradres voor elke opwaardering. Het bedrag van elke opwaardering wordt berekend op basis van het daadwerkelijk overgemaakte bedrag.",
                usdtTip3: "3. Opwaarderen gebeurt doorgaans binnen enkele minuten na het voltooien van de overboeking"
            },
            bank: {
                bank: "bank",
                bank2: "Voer bank in",
                bankAccount: "bankrekening",
                bankAccount2: "Voer uw bankrekening in",
                kaihuren: "Rekeninghouder",
                kaihuren2: "Vul de rekeninghouder in",
                tel: "Telefoonnummer",
                tel2: "Voer uw mobiele telefoonnummer in"
            },
            withdraw: {
                record: "Intrekkingsgegevens",
                account: "Rekening opnemen",
                account2: "Selecteer een opnamerekening",
                accountRed: "Beheer van opnamerekeningen",
                amount: "Bedrag opnemen",
                amount2: "Voer het opnamebedrag in",
                keyong: "beschikbaar saldo",
                tip: "Opmerkingen over intrekking",
                pwd: "Betalingswachtwoord",
                pwd2: "Voer het betalingswachtwoord in",
                min: "Minimaal opnamebedrag",
                fee: "administratiekosten",
                status0: "In afwachting van beoordeling",
                status1: "Transactie voltooid",
                status2: "Afwijzen",
                status3: "Overdragen",
                status4: "Transactie voltooid"
            },
            account: {
                title: "Accountbeheer",
                bind: "Ga naar binden",
                bind2: "Gebonden",
                address: "adres",
                address2: "Voer het adres in",
                btn: "Bind nu",
                tip1: "Zorg ervoor dat uw account uw echte naamaccount is. Als het niet uw echte naamaccount is, mislukt de opname en wordt de account bevroren.",
                tip2: "Als u uw account wilt wijzigen, neem dan contact op met de klantenservice"
            },
            get: {
                title: "Kwantificeer",
                card1: "Kwantificeerbaar bedrag vandaag",
                card2: "De winst van vandaag",
                card3: "Kwantificeerbare tijden vandaag",
                card4: "totale omzet",
                btn: "automatische kwantificering",
                liucheng: "Panelproces uitvoeren",
                step1: "1. Gegevensverzameling is in uitvoering",
                step2: "2. Strategie voor duurzame ontwikkeling",
                step3: "3. Backtesting in uitvoering",
                step4: "4. Uitvoering",
                step5: "5. Kwantificering voltooid",
                record: "Kwantitatieve gegevens",
                record1: "Investeringsbedrag",
                record2: "winst",
                record3: "Koopplatform",
                record4: "platform verkopen",
                record5: "koopprijs",
                record6: "verkoopprijs"
            },
            vip: {
                title: "Ledencentrum",
                now: "huidige niveau",
                level: "VIP-niveau",
                jiesuo: "Dit niveau is ontgrendeld",
                jiesuo2: "Dit niveau is niet ontgrendeld",
                tj: "Upgradevoorwaarden",
                tj1: "Effectief bedrag",
                tj2: "Aantal mensen dat in één generatie is gepromoveerd",
                tj3: "Promoot het gebruikersniveau",
                qy: "rechten en belangen",
                qy1: "Omzetpercentage",
                qy2: "minimaal gekwantificeerd bedrag",
                qy3: "Maximaal gekwantificeerd bedrag",
                qy4: "Aantal kwantificeringen per dag"
            },
            safe: {
                title: "Beveiligingsbeheer",
                login_pwd: "Wachtwoord voor inloggen",
                fund_pwd: "Betalingswachtwoord",
                safe: "Veiligheid",
                edit_pwd: "Wijzig het inlogwachtwoord",
                edit_fundpwd: "Betalingswachtwoord wijzigen",
                phone: "telefoonnummer",
                getcode: "Verificatiecode verkrijgen",
                code: "Verificatiecode",
                icode: "Voer de verificatiecode in",
                newpwd: "Nieuw wachtwoord",
                inewpwd: "Nieuw wachtwoord",
                renewpwd: "Bevestig nieuw wachtwoord",
                renewpwd2: "Voer een nieuw wachtwoord in",
                oldpwd: "origineel wachtwoord",
                oldpwd2: "Voer het originele wachtwoord in",
                error: "Voer gegevens in",
                hold: "Bevestig dat het nieuwe wachtwoord consistent is"
            },
            keyboard: {
                ifundPwd: "Voer het betalingswachtwoord in",
                verifying: "Controleer het betalingswachtwoord"
            },
            google: {
                step1: "eerste stap",
                step2: "Stap 2",
                step3: "Stap 3",
                tip1: "Download Google Authenticator uit de mobiele app store",
                tip2: "Scan de QR-code om te binden via Google Authenticator",
                code: "Voer de Google-verificatiecode in",
                tip3: "Het binden van Google Authenticator biedt een extra beveiligingslaag voor uw accountbeveiliging.",
                renzheng: "Gecertificeerd"
            }
        }
    },
    "1f24": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "يحفظ",
                balance: "توازن",
                nodata: "لا مزيد من البيانات",
                logout: "الخروج بنجاح",
                confirm: "يتأكد",
                cancel: "يلغي",
                submit: "يُقدِّم",
                recharge: "أعلى حتى",
                withdraw: "سحب النقود",
                desc: "يوضح",
                tip: "نصائح لطيفة",
                tipEmail: "من أجل مزيد من الحماية لأمان حسابك، يرجى ربط عنوان بريدك الإلكتروني.",
                tipEmail2: "يوفر ربط عنوان بريدك الإلكتروني ضمانًا أمنيًا آخر لأمان حسابك."
            },
            tabbar: {
                t1: "بيت",
                t2: "فريق",
                t3: "يحصل",
                t4: "أصول",
                t5: "مِلكِي"
            },
            register: {
                title: "يسجل",
                username: "اسم المستخدم",
                tel: "رقم التليفون",
                username2: "الرجاء إدخال اسم المستخدم",
                tel2: "الرجاء إدخال رقم الهاتف المحمول",
                pwd: "كلمة المرور",
                pwd2: "الرجاء إدخال كلمة المرور",
                repwd: "تأكيد كلمة المرور",
                repwd2: "الرجاء إدخال كلمة المرور التأكيدية",
                icode: "رمز الدعوة",
                icode2: "الرجاء إدخال رمز الدعوة",
                has: "لديك حساب بالفعل",
                has2: "قم بتسجيل الدخول الآن",
                email: "بريد",
                email2: "الرجاء إدخال البريد الإلكتروني الخاص بك",
                fundPwd: "كلمة مرور الدفع",
                fundPwd2: "الرجاء إدخال كلمة مرور الدفع",
                yzm: "رمز التحقق",
                yzm2: "الرجاء إدخال رمز التحقق",
                send: "يرسل",
                noyizhi: "إدخال كلمة المرور غير متناسق"
            },
            login: {
                tel: "رقم التليفون",
                tel2: "الرجاء إدخال رقم الهاتف المحمول",
                pwd: "كلمة المرور",
                pwd2: "الرجاء إدخال كلمة المرور",
                login: "تسجيل الدخول",
                noc: "لا يوجد حساب بعد",
                noc2: "سجل الآن",
                forgetpwd: "ننسى كلمة المرور",
                tip1: "مرحبًا",
                tip2: "مرحبا بكم في",
                lang: "تفضيل اللغة"
            },
            forget: {
                title: "ننسى كلمة المرور",
                getcode: "الحصول على رمز التحقق",
                code: "رمز التحقق",
                code2: "الرجاء إدخال رمز التحقق",
                nav1: "التحقق من جوجل",
                nav2: "التحقق من البريد الإلكتروني",
                pwd: "كلمة المرور الجديدة",
                pwd2: "الرجاء إدخال كلمة المرور الجديدة",
                repwd: "تأكيد كلمة المرور",
                repwd2: "الرجاء إدخال كلمة المرور التأكيدية",
                email: "بريد إلكتروني",
                email2: "الرجاء إدخال عنوان البريد الإلكتروني الخاص بك"
            },
            index: {
                company: "ملف الشركة",
                rule: "قاعدة",
                invite: "دعوة الأصدقاء",
                hangqing: "اقتباسات في الوقت الحقيقي",
                friend: "الشركاء",
                message: "رسالتي",
                message1: "رسائل النظام",
                message2: "رسالة المهمة",
                message3: "رسالة الموقع"
            },
            invite: {
                title: "دعوة الأصدقاء",
                tip1: "قم بدعوة الأصدقاء للفوز بهدايا كبيرة",
                tip2: "دع الجميع يشعرون بالسعادة ويكسبون شيئًا ما",
                link: "رابط الدعوة",
                code: "رمز الدعوة"
            },
            team: {
                title: "فريقي",
                data: "بيانات الفريق",
                pickerAll: "الجميع",
                picker1: "اليوم",
                picker7: "آخر 7 أيام",
                picker30: "آخر 30 يومًا",
                picker60: "آخر 60 يومًا",
                addPeopel: "أشخاص جدد",
                addEarn: "إيرادات جديدة",
                fenxi: "تحليل الإيرادات",
                shouru1: "دخل المهمة",
                shouru2: "تحديد الإيرادات",
                shouru3: "تعزيز الدخل الكمي",
                guimo: "حجم الفريق",
                youxiao: "يعمل بروح الفريق",
                tdRecharge: "إعادة شحن الفريق",
                tdCash: "انسحاب الفريق",
                lookAll: "عرض الكل",
                card1: "العمولة الإجمالية",
                card2: "التغذية المتراكمة",
                card3: "عمليات السحب التراكمية",
                userNum: "عدد المستخدمين",
                yj: "نسبة العمولة",
                ljEarn: "الدخل التراكمي",
                level1: "المستوى 1",
                level2: "المستوى 2",
                level3: "المستوى 3",
                list: "قائمة الفريق",
                taskNums: "أوقات التكميم"
            },
            fund: {
                title: "أصول",
                title2: "مقدمة الأصول",
                all: "إجمالي الأصول",
                wait: "المكافآت غير المحصلة",
                card1: "أموال مرنة",
                card2: "المبلغ المراد الافراج عنه",
                card3: "رسوم المحاكمة",
                detail: "تفاصيل الأصول",
                lookAll: "عرض الكل",
                type1: "الجميع",
                type2: "دخل",
                type3: "الإنفاق",
                task: "مركز البعثة",
                taskTip1: "الكمي الروبوت",
                taskTip2: "زيادة الثروة بسهولة",
                detailCard1: "كمية",
                detailCard2: "اسم",
                detailCard3: "يكتب",
                detailCard4: "رقم الطلب",
                detailCard5: "وقت",
                back: "يعود"
            },
            task: {
                up: "الترقية إلى {level}",
                up2: "قم بالترقية إلى {level} وستحصل على {money}",
                done: "مكتمل",
                ing: "في تَقَدم",
                can: "يستلم",
                inviteNum: "قم بدعوة {nums} من الأشخاص لإيداع {money}",
                inviteAward: "سوف تحصل على {الجائزة}"
            },
            mine: {
                icode: "رمز الدعوة",
                goOut: "يترك",
                jiesuo: "لقد تم فتح هذا المستوى",
                shengji: "قم بالترقية الآن",
                zichan: "إجمالي الأصول",
                card1: "رصيد المحفظة",
                card2: "الأموال التي سيتم الافراج عنها",
                card3: "الدخل التراكمي",
                card4: "عمليات السحب التراكمية",
                card5: "حجم الفريق",
                changyong: "الوظائف شائعة الاستخدام",
                email: "بريد إلكتروني",
                pwd: "كلمة مرور تسجيل الدخول",
                fundPwd: "كلمة مرور المعاملة",
                other: "وظائف أخرى",
                help: "مركز المساعدة",
                userTl: "شروط المستخدم",
                lang: "تبديل اللغة",
                kefu: "خدمة العملاء",
                onlineServer: "خدمة العملاء عبر الإنترنت",
                qiandao: "تسجيل الدخول",
                lx: "يتصل",
                qiandaoTip: "في كل مرة تقوم فيها بتسجيل الدخول لمدة {num} من الأيام، ستحصل على {money}",
                bank: "البطاقة المصرفية",
                address: "عنوان السحب",
                logoutTip: "هل أنت متأكد أنك تريد تسجيل الخروج؟"
            },
            recharge: {
                amount: "مبلغ إعادة الشحن",
                amount2: "الرجاء إدخال مبلغ إعادة الشحن",
                amountO: "مبالغ إعادة الشحن الأخرى",
                methods: "طريقة إعادة الشحن",
                btn: "اشحن الآن",
                record: "سجل إعادة الشحن",
                min: "الحد الأدنى لمبلغ السحب",
                desc: "يوضح",
                pingzheng: "قسيمة إعادة الشحن",
                pingzheng2: "يرجى تحميل قسيمة إعادة الشحن",
                address: "عنوان إعادة الشحن",
                status0: "ليتم دفعها",
                status1: "مكتمل",
                status2: "فشلت عملية إعادة الشحن",
                status3: "تم الإلغاء",
                detailCard1: "طريقة إعادة الشحن",
                detailCard2: "ولاية",
                detailCard3: "رقم الطلب",
                detailCard4: "وقت",
                detailCard5: "كمية",
                go: "يرجى الذهاب لربط البطاقة المصرفية",
                usdtTip1: "1. يقبل هذا العنوان فقط إعادة شحن بروتوكول USDT TRC20، يرجى عدم إيداع عملات أخرى أو بروتوكولات أخرى.",
                usdtTip2: "2. يرجى التحقق بعناية من عنوان إعادة الشحن لكل عملية إعادة شحن، وسيتم حساب مبلغ كل عملية إعادة شحن بناءً على المبلغ الفعلي المحول.",
                usdtTip3: "3. يتم الوصول إلى تعبئة الرصيد عادةً في غضون دقائق قليلة بعد إتمام عملية النقل"
            },
            bank: {
                bank: "بنك",
                bank2: "الرجاء إدخال البنك",
                bankAccount: "حساب مصرفي",
                bankAccount2: "الرجاء إدخال الحساب البنكي",
                kaihuren: "صاحب الحساب",
                kaihuren2: "الرجاء إدخال صاحب الحساب",
                tel: "رقم التليفون",
                tel2: "الرجاء إدخال رقم الهاتف المحمول"
            },
            withdraw: {
                record: "سجلات الانسحاب",
                account: "سحب الحساب",
                account2: "الرجاء تحديد حساب السحب",
                accountRed: "إدارة حساب السحب",
                amount: "سحب المبلغ",
                amount2: "الرجاء إدخال مبلغ السحب",
                keyong: "الرصيد المتاح",
                tip: "ملاحظات حول الانسحاب",
                pwd: "كلمة مرور الدفع",
                pwd2: "الرجاء إدخال كلمة مرور الدفع",
                min: "الحد الأدنى لمبلغ السحب",
                fee: "رسوم المناولة",
                status0: "في انتظار المراجعة",
                status1: "اكتملت الصفقة",
                status2: "رفض",
                status3: "نقل",
                status4: "اكتملت الصفقة"
            },
            account: {
                title: "إدارة الحساب",
                bind: "اذهب إلى الربط",
                bind2: "مرتبط ب",
                address: "عنوان",
                address2: "الرجاء إدخال العنوان",
                btn: "ربط الآن",
                tip1: "يرجى التأكد من أن حسابك هو حساب الاسم الحقيقي الخاص بك. إذا لم يكن حساب الاسم الحقيقي الخاص بك، فسوف تفشل عملية السحب وسيتم تجميد الحساب.",
                tip2: "إذا كنت بحاجة إلى تعديل حسابك، يرجى الاتصال بخدمة العملاء"
            },
            get: {
                title: "تحديد كمي",
                card1: "كمية قابلة للقياس اليوم",
                card2: "أرباح اليوم",
                card3: "مرات قابلة للقياس اليوم",
                card4: "إجمالي الإيرادات",
                btn: "الكمي التلقائي",
                liucheng: "إجراء عملية اللوحة",
                step1: "1. جمع البيانات جارٍ",
                step2: "2. استراتيجية التنمية المستدامة",
                step3: "3. الاختبار الخلفي جارٍ",
                step4: "4. التنفيذ",
                step5: "5. اكتمال عملية التحديد الكمي",
                record: "السجلات الكمية",
                record1: "مبلغ الاستثمار",
                record2: "ربح",
                record3: "منصة الشراء",
                record4: "منصة بيع",
                record5: "سعر الشراء",
                record6: "سعر البيع"
            },
            vip: {
                title: "مركز الأعضاء",
                now: "المستوى الحالي",
                level: "مستوى كبار الشخصيات",
                jiesuo: "لقد تم فتح هذا المستوى",
                jiesuo2: "لم يتم فتح هذا المستوى",
                tj: "شروط الترقية",
                tj1: "المبلغ الفعال",
                tj2: "عدد الأشخاص الذين تمت ترقيتهم في الجيل الواحد",
                tj3: "تعزيز مستوى المستخدم",
                qy: "الحقوق والمصالح",
                qy1: "نسبة الإيرادات",
                qy2: "الحد الأدنى للمبلغ الكمي",
                qy3: "الحد الأقصى للكمية",
                qy4: "عدد الكميات يوميا"
            },
            safe: {
                title: "إدارة الأمن",
                login_pwd: "كلمة مرور تسجيل الدخول",
                fund_pwd: "كلمة مرور الدفع",
                safe: "أمان",
                edit_pwd: "تغيير كلمة المرور لتسجيل الدخول",
                edit_fundpwd: "تغيير كلمة مرور الدفع",
                phone: "رقم الهاتف",
                getcode: "الحصول على رمز التحقق",
                code: "رمز التحقق",
                icode: "الرجاء إدخال رمز التحقق",
                newpwd: "كلمة المرور الجديدة",
                inewpwd: "كلمة المرور الجديدة",
                renewpwd: "تأكيد كلمة المرور الجديدة",
                renewpwd2: "الرجاء إدخال كلمة المرور الجديدة",
                oldpwd: "كلمة المرور الأصلية",
                oldpwd2: "أدخل كلمة المرور الأصلية",
                error: "الرجاء إدخال البيانات",
                hold: "الرجاء التأكد من أن كلمة المرور الجديدة متسقة"
            },
            keyboard: {
                ifundPwd: "أدخل كلمة مرور الدفع",
                verifying: "التحقق من كلمة مرور الدفع"
            },
            google: {
                step1: "الخطوة الأولى",
                step2: "الخطوة 2",
                step3: "الخطوة 3",
                tip1: "يرجى تنزيل Google Authenticator من متجر تطبيقات الأجهزة المحمولة",
                tip2: "امسح رمز الاستجابة السريعة ضوئيًا للربط من خلال Google Authenticator",
                code: "الرجاء إدخال رمز التحقق الخاص بجوجل",
                tip3: "يوفر ربط Google Authenticator طبقة أخرى من الأمان لأمان حسابك.",
                renzheng: "معتمد"
            }
        }
    },
    2083: function(e, a, n) {
        "use strict";
        var i = n("d3b8")
          , t = n.n(i);
        t.a
    },
    "23af": function(e, a, n) {
        "use strict";
        n.r(a);
        var i = n("4ea5")
          , t = n("ea85");
        for (var o in t)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(a, e, (function() {
                    return t[e]
                }
                ))
            }(o);
        n("2083");
        var r = n("828b")
          , d = Object(r["a"])(t["default"], i["b"], i["c"], !1, null, "792be84c", null, !1, i["a"], void 0);
        a["default"] = d.exports
    },
    2774: function(e, a, n) {
        e.exports = n.p + "static/img/warning.48f20f7d.svg"
    },
    "2e74": function(e, a, n) {
        "use strict";
        n.d(a, "b", (function() {
            return i
        }
        )),
        n.d(a, "c", (function() {
            return t
        }
        )),
        n.d(a, "a", (function() {}
        ));
        var i = function() {
            var e = this.$createElement
              , a = this._self._c || e;
            return a("App", {
                attrs: {
                    keepAliveInclude: this.keepAliveInclude
                }
            })
        }
          , t = []
    },
    3057: function(e, a, n) {
        "use strict";
        n.d(a, "b", (function() {
            return i
        }
        )),
        n.d(a, "c", (function() {
            return t
        }
        )),
        n.d(a, "a", (function() {}
        ));
        var i = function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("v-uni-view", [e.hold ? n("v-uni-view", {
                staticClass: "tabbar-holder"
            }) : e._e(), n("v-uni-view", {
                staticClass: "cu-bar tabbar text-white"
            }, [n("v-uni-view", {
                staticClass: "action",
                on: {
                    click: function(a) {
                        arguments[0] = a = e.$handleEvent(a),
                        e.go("../index/index")
                    }
                }
            }, [n("v-uni-view", {
                staticClass: "cuIcon-cu-image"
            }, ["t1" == e.thisPage ? n("v-uni-image", {
                attrs: {
                    src: "/static/tabbar/nav01-active.png"
                }
            }) : n("v-uni-image", {
                attrs: {
                    src: "/static/tabbar/nav01.png"
                }
            })], 1), n("v-uni-text", {
                class: (e.thisPage,
                "")
            }, [e._v(" " + e._s(e.$t("tabbar.t1")) + " ")])], 1), n("v-uni-view", {
                staticClass: "action",
                on: {
                    click: function(a) {
                        arguments[0] = a = e.$handleEvent(a),
                        e.go("../get/index")
                    }
                }
            }, [n("v-uni-view", {
                staticClass: "cuIcon-cu-image"
            }, ["t3" == e.thisPage ? n("v-uni-image", {
                attrs: {
                    src: "/static/tabbar/nav06-active.png"
                }
            }) : n("v-uni-image", {
                attrs: {
                    src: "/static/tabbar/nav06.png"
                }
            })], 1), n("v-uni-text", {
                class: (e.thisPage,
                "")
            }, [e._v(" " + e._s(e.$t("tabbar.t3")) + " ")])], 1), n("v-uni-view", {
                staticClass: "action ",
                on: {
                    click: function(a) {
                        arguments[0] = a = e.$handleEvent(a),
                        e.go("../fund/index")
                    }
                }
            }, [n("v-uni-view", {
                staticClass: "cuIcon-cu-image"
            }, ["t4" == e.thisPage ? n("v-uni-image", {
                attrs: {
                    src: "/static/tabbar/nav04-active.png"
                }
            }) : n("v-uni-image", {
                attrs: {
                    src: "/static/tabbar/nav04.png"
                }
            })], 1), n("v-uni-text", {
                class: (e.thisPage,
                "")
            }, [e._v(" " + e._s(e.$t("tabbar.t4")) + " ")])], 1), n("v-uni-view", {
                staticClass: "action ",
                on: {
                    click: function(a) {
                        arguments[0] = a = e.$handleEvent(a),
                        e.go("../mine/index")
                    }
                }
            }, [n("v-uni-view", {
                staticClass: "cuIcon-cu-image"
            }, ["t5" == e.thisPage ? n("v-uni-image", {
                attrs: {
                    src: "/static/tabbar/nav05-active.png"
                }
            }) : n("v-uni-image", {
                attrs: {
                    src: "/static/tabbar/nav05.png"
                }
            })], 1), n("v-uni-text", {
                class: (e.thisPage,
                "")
            }, [e._v(" " + e._s(e.$t("tabbar.t5")) + " ")])], 1)], 1)], 1)
        }
          , t = []
    },
    "310f": function(e, a, n) {
        var i = n("c86c");
        a = i(!1),
        a.push([e.i, ".cu-custom[data-v-ac43c74c]{position:relative;border:none;box-shadow:none!important;min-width:%?750?%!important;max-width:700px!important}.cu-bar[data-v-ac43c74c]{min-width:%?750?%!important;max-width:700px!important}", ""]),
        e.exports = a
    },
    3533: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "ratować",
                balance: "Balansować",
                nodata: "nie ma więcej danych",
                logout: "Wyjdź pomyślnie",
                confirm: "potwierdzać",
                cancel: "Anulować",
                submit: "składać",
                recharge: "uzupełniać",
                withdraw: "Wypłacić gotówkę",
                desc: "zilustrować",
                tip: "Miłe wskazówki",
                tipEmail: "Aby jeszcze bardziej chronić bezpieczeństwo swojego konta, prosimy o powiązanie adresu e-mail.",
                tipEmail2: "Powiązanie adresu e-mail zapewnia kolejną gwarancję bezpieczeństwa Twojego konta."
            },
            tabbar: {
                t1: "Dom",
                t2: "Zespół",
                t3: "Dostawać",
                t4: "Aktywa",
                t5: "Kopalnia"
            },
            register: {
                title: "rejestr",
                username: "nazwa użytkownika",
                username2: "Proszę wprowadzić nazwę użytkownika",
                tel: "Numer telefonu",
                tel2: "Proszę podać numer telefonu komórkowego",
                pwd: "hasło",
                pwd2: "Proszę wprowadzić hasło",
                repwd: "Potwierdź hasło",
                repwd2: "Wprowadź hasło potwierdzające",
                icode: "Kod zaproszenia",
                icode2: "Proszę wpisać kod zaproszenia",
                has: "Masz już konto",
                has2: "Zaloguj się teraz",
                email: "Poczta",
                email2: "Proszę wpisać swój adres e-mail",
                fundPwd: "Hasło płatności",
                fundPwd2: "Proszę podać hasło płatności",
                yzm: "Kod weryfikacyjny",
                yzm2: "Proszę wprowadzić kod weryfikacyjny",
                send: "wysłać",
                noyizhi: "Wprowadzone hasło jest niespójne"
            },
            login: {
                tel: "Numer telefonu",
                tel2: "Proszę podać numer telefonu komórkowego",
                pwd: "hasło",
                pwd2: "Proszę wprowadzić hasło",
                login: "Zaloguj się",
                noc: "Jeszcze nie ma konta",
                noc2: "Zarejestruj się teraz",
                forgetpwd: "zapomnij hasła",
                tip1: "Cześć",
                tip2: "witaj w",
                lang: "Preferencje językowe"
            },
            forget: {
                title: "zapomnij hasła",
                getcode: "Uzyskaj kod weryfikacyjny",
                code: "Kod weryfikacyjny",
                code2: "Proszę wprowadzić kod weryfikacyjny",
                nav1: "Weryfikacja Google",
                nav2: "Weryfikacja e-mailowa",
                pwd: "Nowe hasło",
                pwd2: "Proszę wprowadzić nowe hasło",
                repwd: "Potwierdź hasło",
                repwd2: "Wprowadź hasło potwierdzające",
                email: "E-mail",
                email2: "Proszę podać swój adres e-mail"
            },
            index: {
                company: "Profil firmy",
                rule: "reguła",
                invite: "Zaproś znajomych",
                hangqing: "Cytaty w czasie rzeczywistym",
                friend: "Wzmacniacz",
                message: "moja wiadomość",
                message1: "Komunikaty systemowe",
                message2: "wiadomość o misji",
                message3: "Wiadomość witryny"
            },
            invite: {
                title: "Zaproś znajomych",
                tip1: "Zaproś znajomych, aby wygrać duże prezenty",
                tip2: "Niech wszyscy poczują się szczęśliwi i coś zyskają",
                link: "Link z zaproszeniem",
                code: "Kod zaproszenia"
            },
            team: {
                title: "mój zespół",
                data: "Dane zespołu",
                pickerAll: "Wszystko",
                picker1: "Dzisiaj",
                picker7: "ostatnie 7 dni",
                picker30: "Ostatnie 30 dni",
                picker60: "Ostatnie 60 dni",
                addPeopel: "Nowi ludzie",
                addEarn: "Nowe przychody",
                fenxi: "analiza przychodów",
                shouru1: "Dochód z zadania",
                shouru2: "Oblicz przychody",
                shouru3: "Promuj wymierny dochód",
                guimo: "Rozmiar zespołu",
                youxiao: "Zespół działa",
                tdRecharge: "Doładowanie drużyny",
                tdCash: "Wycofanie się zespołu",
                lookAll: "Zobacz wszystkie",
                card1: "całkowita prowizja",
                card2: "Skumulowane doładowanie",
                card3: "Wypłaty skumulowane",
                userNum: "liczba użytkowników",
                yj: "procent prowizji",
                ljEarn: "Skumulowany dochód",
                level1: "Poziom 1",
                level2: "Poziom 2",
                level3: "Poziom 3",
                list: "Lista drużyn",
                taskNums: "Czasy kwantyzacji"
            },
            fund: {
                title: "aktywa",
                title2: "Wprowadzenie do aktywów",
                all: "suma aktywów",
                wait: "Nagrody do odebrania",
                card1: "Elastyczne fundusze",
                card2: "Kwota do wydania",
                card3: "Opłata próbna",
                detail: "Szczegóły zasobu",
                lookAll: "Zobacz wszystkie",
                type1: "Wszystko",
                type2: "dochód",
                type3: "wydatek",
                task: "centrum misyjne",
                taskTip1: "Kwantyfikacja robota",
                taskTip2: "Łatwo zwiększaj bogactwo",
                detailCard1: "Kwota",
                detailCard2: "nazwa",
                detailCard3: "typ",
                detailCard4: "Numer zamówienia",
                detailCard5: "czas",
                back: "powrót"
            },
            task: {
                up: "Uaktualnij do poziomu {level}",
                up2: "Przejdź na poziom {level}, a otrzymasz {money}",
                done: "Zakończony",
                ing: "w toku",
                can: "odbierać",
                inviteNum: "Zaproś {nums} osób do wpłaty {money}",
                inviteAward: "Otrzymasz {award}"
            },
            mine: {
                icode: "Kod zaproszenia",
                goOut: "zrezygnować",
                jiesuo: "Poziom ten został odblokowany",
                shengji: "Uaktualnij teraz",
                zichan: "Aktywa ogółem",
                card1: "saldo portfela",
                card2: "Fundusze do uwolnienia",
                card3: "Skumulowany dochód",
                card4: "Wypłaty skumulowane",
                card5: "Rozmiar zespołu",
                changyong: "Często używane funkcje",
                email: "E-mail",
                pwd: "Hasło logowania",
                fundPwd: "Hasło transakcji",
                other: "Inne funkcje",
                help: "Centrum pomocy",
                userTl: "Warunki użytkownika",
                lang: "zmień język",
                kefu: "obsługa klienta",
                onlineServer: "Internetowa obsługa klienta",
                qiandao: "Zalogować się",
                lx: "łączyć",
                qiandaoTip: "Za każdym razem, gdy zalogujesz się w ciągu {num} dni, otrzymasz {money}",
                bank: "karta bankowa",
                address: "Adres wypłaty",
                logoutTip: "Czy na pewno chcesz się wylogować?"
            },
            recharge: {
                amount: "Kwota doładowania",
                amount2: "Proszę wpisać kwotę doładowania",
                amountO: "Inne kwoty doładowań",
                methods: "Metoda ładowania",
                btn: "Naładuj teraz",
                record: "Rekord doładowania",
                min: "Minimalna kwota wypłaty",
                desc: "zilustrować",
                pingzheng: "Doładuj kupon",
                pingzheng2: "Prześlij kupon doładowujący",
                address: "Adres doładowania",
                status0: "Do zapłaty",
                status1: "Zakończony",
                status2: "Doładowanie nie powiodło się",
                status3: "Odwołany",
                detailCard1: "Metoda ładowania",
                detailCard2: "państwo",
                detailCard3: "Numer zamówienia",
                detailCard4: "czas",
                detailCard5: "Kwota",
                go: "Przejdź do powiązania karty bankowej",
                usdtTip1: "1. Ten adres akceptuje wyłącznie doładowania za pomocą protokołu USDT TRC20. Prosimy nie wpłacać innych walut ani innych protokołów.",
                usdtTip2: "2. Proszę dokładnie sprawdzić adres doładowania dla każdego doładowania. Kwota każdego doładowania zostanie obliczona na podstawie faktycznie przekazanej kwoty.",
                usdtTip3: "3. Doładowanie następuje zazwyczaj w ciągu kilku minut od zakończenia przelewu"
            },
            bank: {
                bank: "bank",
                bank2: "Proszę wpisać bank",
                bankAccount: "rachunek bankowy",
                bankAccount2: "Proszę podać konto bankowe",
                kaihuren: "Właściciel konta",
                kaihuren2: "Proszę podać właściciela konta",
                tel: "Numer telefonu",
                tel2: "Proszę podać numer telefonu komórkowego"
            },
            withdraw: {
                record: "Zapisy wypłat",
                account: "Wycofaj konto",
                account2: "Wybierz konto do wypłat",
                accountRed: "Zarządzanie kontem wypłat",
                amount: "Wypłać kwotę",
                amount2: "Proszę wpisać kwotę wypłaty",
                keyong: "dostępne saldo",
                tip: "Uwagi dotyczące wypłaty",
                pwd: "Hasło płatności",
                pwd2: "Proszę podać hasło płatności",
                min: "Minimalna kwota wypłaty",
                fee: "opłata manipulacyjna",
                status0: "Oczekuje na recenzję",
                status1: "Transakcja zakończona",
                status2: "Odrzucać",
                status3: "Przenoszenie",
                status4: "Transakcja zakończona"
            },
            account: {
                title: "Zarządzanie kontem",
                bind: "Przejdź do wiązania",
                bind2: "Zobowiązany",
                address: "adres",
                address2: "Proszę wpisać adres",
                btn: "Zwiąż teraz",
                tip1: "Upewnij się, że Twoje konto jest kontem na prawdziwe nazwisko. Jeśli nie jest to konto na prawdziwe nazwisko, wypłata nie powiedzie się i konto zostanie zamrożone.",
                tip2: "Jeśli chcesz zmodyfikować swoje konto, skontaktuj się z obsługą klienta"
            },
            get: {
                title: "Określić ilościowo",
                card1: "Kwota wymierna dzisiaj",
                card2: "Dzisiejsze zarobki",
                card3: "Wymierne razy dzisiaj",
                card4: "całkowity dochód",
                btn: "automatyczna kwantyfikacja",
                liucheng: "Przeprowadź proces panelowy",
                step1: "1. Zbieranie danych w toku",
                step2: "2. Strategia zrównoważonego rozwoju",
                step3: "3. Backtesting w toku",
                step4: "4. Wykonywanie",
                step5: "5. Kwantyfikacja ukończona",
                record: "Zapisy ilościowe",
                record1: "Kwota inwestycji",
                record2: "zysk",
                record3: "Platforma zakupowa",
                record4: "sprzedać platformę",
                record5: "cena zakupu",
                record6: "cena sprzedaży"
            },
            vip: {
                title: "Centrum członkowskie",
                now: "obecny poziom",
                level: "Poziom VIP",
                jiesuo: "Poziom ten został odblokowany",
                jiesuo2: "Poziom ten nie jest odblokowany",
                tj: "Warunki aktualizacji",
                tj1: "Efektywna ilość",
                tj2: "Liczba osób awansowanych w jednym pokoleniu",
                tj3: "Promuj poziom użytkownika",
                qy: "prawa i interesy",
                qy1: "Procent przychodów",
                qy2: "minimalna ilość określona ilościowo",
                qy3: "Maksymalna określona ilościowo kwota",
                qy4: "Liczba oznaczeń ilościowych na dzień"
            },
            safe: {
                title: "Zarządzanie bezpieczeństwem",
                login_pwd: "Hasło logowania",
                fund_pwd: "Hasło płatności",
                safe: "Bezpieczeństwo",
                edit_pwd: "Zmień hasło logowania",
                edit_fundpwd: "Zmień hasło płatności",
                phone: "numer telefonu",
                getcode: "Uzyskaj kod weryfikacyjny",
                code: "Kod weryfikacyjny",
                icode: "Proszę wprowadzić kod weryfikacyjny",
                newpwd: "Nowe hasło",
                inewpwd: "Nowe hasło",
                renewpwd: "Potwierdź nowe hasło",
                renewpwd2: "Proszę wprowadzić nowe hasło",
                oldpwd: "oryginalne hasło",
                oldpwd2: "Wprowadź oryginalne hasło",
                error: "Proszę wprowadzić dane",
                hold: "Proszę potwierdzić, że nowe hasło jest spójne"
            },
            keyboard: {
                ifundPwd: "Wprowadź hasło płatności",
                verifying: "Sprawdź hasło płatności"
            },
            google: {
                step1: "pierwszy krok",
                step2: "Krok 2",
                step3: "Krok 3",
                tip1: "Pobierz aplikację Google Authenticator ze sklepu z aplikacjami mobilnymi",
                tip2: "Zeskanuj kod QR, aby połączyć się z Google Authenticatorem",
                code: "Wprowadź kod weryfikacyjny Google",
                tip3: "Wiązanie Google Authenticator zapewnia kolejną warstwę zabezpieczeń Twojego konta.",
                renzheng: "Atestowany"
            }
        }
    },
    "378c": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "salvar",
                balance: "Equilíbrio",
                nodata: "não há mais dados",
                logout: "Sair com sucesso",
                confirm: "confirmar",
                cancel: "Cancelar",
                submit: "enviar",
                recharge: "recarregar",
                withdraw: "Sacar dinheiro",
                desc: "ilustrar",
                tip: "Dicas gentis",
                tipEmail: "Para proteger ainda mais a segurança da sua conta, vincule o seu endereço de e-mail.",
                tipEmail2: "Vincular seu endereço de e-mail fornece outra garantia de segurança para a segurança de sua conta."
            },
            tabbar: {
                t1: "Lar",
                t2: "Equipe",
                t3: "Pegar",
                t4: "Ativos",
                t5: "Meu"
            },
            register: {
                title: "registrar",
                username: "nome de usuário",
                username2: "Por favor insira o nome de usuário",
                tel: "Número de telefone",
                tel2: "Por favor insira o número do celular",
                pwd: "senha",
                pwd2: "Por favor insira a senha",
                repwd: "Confirme sua senha",
                repwd2: "Por favor insira a senha de confirmação",
                icode: "Código de convite",
                icode2: "Por favor insira o código do convite",
                has: "Já tem uma conta",
                has2: "Faça login agora",
                email: "Correspondência",
                email2: "Por favor insira seu e-mail",
                fundPwd: "Senha de pagamento",
                fundPwd2: "Por favor insira a senha de pagamento",
                yzm: "Código de verificação",
                yzm2: "Por favor insira o código de verificação",
                send: "enviar",
                noyizhi: "A entrada da senha é inconsistente"
            },
            login: {
                tel: "Número de telefone",
                tel2: "Por favor insira o número do celular",
                pwd: "senha",
                pwd2: "Por favor insira a senha",
                login: "Conecte-se",
                noc: "Nenhuma conta ainda",
                noc2: "Registre-se agora",
                forgetpwd: "esqueça a senha",
                tip1: "Olá",
                tip2: "bem-vindo a",
                lang: "Preferência de idioma"
            },
            forget: {
                title: "esqueça a senha",
                getcode: "Obtenha o código de verificação",
                code: "Código de verificação",
                code2: "Por favor insira o código de verificação",
                nav1: "Verificação do Google",
                nav2: "Verificação de e-mail",
                pwd: "Nova Senha",
                pwd2: "Por favor insira a nova senha",
                repwd: "Confirme sua senha",
                repwd2: "Por favor insira a senha de confirmação",
                email: "E-mail",
                email2: "Por favor insira seu endereço de e-mail"
            },
            index: {
                company: "perfil de companhia",
                rule: "regra",
                invite: "Convide amigos",
                hangqing: "Cotações em tempo real",
                friend: "Parceiros",
                message: "minha mensagem",
                message1: "Mensagens do sistema",
                message2: "mensagem missionária",
                message3: "Mensagem do site"
            },
            invite: {
                title: "Convide amigos",
                tip1: "Convide amigos para ganhar grandes presentes",
                tip2: "Deixe todos se sentirem felizes e ganharem algo",
                link: "Link de convite",
                code: "Código de convite"
            },
            team: {
                title: "meu time",
                data: "Dados da equipe",
                pickerAll: "todos",
                picker1: "hoje",
                picker7: "últimos 7 dias",
                picker30: "Últimos 30 dias",
                picker60: "Últimos 60 dias",
                addPeopel: "Novas pessoas",
                addEarn: "Nova receita",
                fenxi: "análise de receita",
                shouru1: "Renda da tarefa",
                shouru2: "Quantificar receita",
                shouru3: "Promova renda quantificada",
                guimo: "Tamanho da equipe",
                youxiao: "Trabalhos em equipe",
                tdRecharge: "Recarga da equipe",
                tdCash: "Retirada da equipe",
                lookAll: "Ver tudo",
                card1: "comissão total",
                card2: "Recarga acumulada",
                card3: "Retiradas cumulativas",
                userNum: "número de usuários",
                yj: "porcentagem de comissão",
                ljEarn: "Renda acumulada",
                level1: "Nível 1",
                level2: "Nível 2",
                level3: "Nível 3",
                list: "Lista de equipes",
                taskNums: "Tempos de quantização"
            },
            fund: {
                title: "ativos",
                title2: "Introdução de ativos",
                all: "ativos totais",
                wait: "Recompensas não coletadas",
                card1: "Fundos flexíveis",
                card2: "Valor a ser liberado",
                card3: "Taxa de teste",
                detail: "Detalhes do recurso",
                lookAll: "Ver tudo",
                type1: "todos",
                type2: "renda",
                type3: "despesas",
                task: "centro missionário",
                taskTip1: "Quantificação do robô",
                taskTip2: "Aumente facilmente a riqueza",
                detailCard1: "Quantia",
                detailCard2: "nome",
                detailCard3: "tipo",
                detailCard4: "Número do pedido",
                detailCard5: "tempo",
                back: "retornar"
            },
            task: {
                up: "Atualizar para {level}",
                up2: "Atualize para {level} e você receberá {money}",
                done: "Concluído",
                ing: "em andamento",
                can: "receber",
                inviteNum: "Convide {nums} pessoas para depositar {money}",
                inviteAward: "Você receberá {award}"
            },
            mine: {
                icode: "Código de convite",
                goOut: "desistir",
                jiesuo: "Este nível foi desbloqueado",
                shengji: "Atualize agora",
                zichan: "Ativos totais",
                card1: "saldo da carteira",
                card2: "Fundos a serem liberados",
                card3: "Renda acumulada",
                card4: "Retiradas cumulativas",
                card5: "Tamanho da equipe",
                changyong: "Funções comumente usadas",
                email: "E-mail",
                pwd: "Senha de login",
                fundPwd: "Senha de transação",
                other: "Outras funções",
                help: "Central de Ajuda",
                userTl: "Termos do usuário",
                lang: "mudar de idioma",
                kefu: "atendimento ao Cliente",
                onlineServer: "Atendimento ao cliente on-line",
                qiandao: "Entrar",
                lx: "conectar",
                qiandaoTip: "Cada vez que você fizer login em {num} dias, você receberá {money}",
                bank: "cartão bancário",
                address: "Endereço de retirada",
                logoutTip: "Tem certeza de que deseja sair?"
            },
            recharge: {
                amount: "Valor de recarga",
                amount2: "Insira o valor da recarga",
                amountO: "Outros valores de recarga",
                methods: "Método de recarga",
                btn: "Recarregue agora",
                record: "Registro de recarga",
                min: "Valor mínimo de retirada",
                desc: "ilustrar",
                pingzheng: "Voucher de recarga",
                pingzheng2: "Por favor carregue o voucher de recarga",
                address: "Endereço de recarga",
                status0: "A ser pago",
                status1: "Concluído",
                status2: "Falha na recarga",
                status3: "Cancelado",
                detailCard1: "Método de recarga",
                detailCard2: "estado",
                detailCard3: "Número do pedido",
                detailCard4: "tempo",
                detailCard5: "Quantia",
                go: "Por favor, vá para vincular o cartão do banco",
                usdtTip1: "1. Este endereço aceita apenas recarga do protocolo USDT TRC20. Por favor, não deposite outras moedas ou outros protocolos.",
                usdtTip2: "2. Verifique cuidadosamente o endereço de recarga de cada recarga. O valor de cada recarga será calculado com base no valor real remetido.",
                usdtTip3: "3. A recarga geralmente é feita alguns minutos após a conclusão da transferência"
            },
            bank: {
                bank: "banco",
                bank2: "Por favor insira o banco",
                bankAccount: "conta bancária",
                bankAccount2: "Por favor insira a conta bancária",
                kaihuren: "Titular da conta",
                kaihuren2: "Por favor insira o titular da conta",
                tel: "Número de telefone",
                tel2: "Por favor insira o número do celular"
            },
            withdraw: {
                record: "Registros de retirada",
                account: "Retirar conta",
                account2: "Selecione uma conta de retirada",
                accountRed: "Gerenciamento de conta de retirada",
                amount: "Retirar valor",
                amount2: "Por favor insira o valor do saque",
                keyong: "saldo disponível",
                tip: "Notas sobre retirada",
                pwd: "Senha de pagamento",
                pwd2: "Por favor insira a senha de pagamento",
                min: "Valor mínimo de retirada",
                fee: "taxa de manuseio",
                status0: "Revisão pendente",
                status1: "Transação concluída",
                status2: "Recusar",
                status3: "Transferindo",
                status4: "Transação concluída"
            },
            account: {
                title: "Gerenciamento de contas",
                bind: "Ir para vinculação",
                bind2: "Vinculado",
                address: "endereço",
                address2: "Por favor insira o endereço",
                btn: "Vincular agora",
                tip1: "Certifique-se de que sua conta seja com seu nome real. Se não for sua conta com nome real, o saque falhará e a conta será congelada.",
                tip2: "Se você precisar modificar sua conta, entre em contato com o atendimento ao cliente"
            },
            get: {
                title: "Quantificar",
                card1: "Valor quantificável hoje",
                card2: "Os ganhos de hoje",
                card3: "Tempos quantificáveis ​​hoje",
                card4: "receita total",
                btn: "quantificação automática",
                liucheng: "Conduzir o processo do painel",
                step1: "1. Coleta de dados em andamento",
                step2: "2. Estratégia de desenvolvimento sustentável",
                step3: "3. Backtesting em andamento",
                step4: "4. Executando",
                step5: "5. Quantificação concluída",
                record: "Registros quantitativos",
                record1: "Valor do investimento",
                record2: "lucro",
                record3: "Plataforma de compra",
                record4: "vender plataforma",
                record5: "preço de compra",
                record6: "preço de venda"
            },
            vip: {
                title: "Centro de membros",
                now: "nível atual",
                level: "Nível VIP",
                jiesuo: "Este nível foi desbloqueado",
                jiesuo2: "Este nível não está desbloqueado",
                tj: "Condições de atualização",
                tj1: "Quantidade efetiva",
                tj2: "Número de pessoas promovidas em uma geração",
                tj3: "Promova o nível do usuário",
                qy: "direitos e interesses",
                qy1: "Porcentagem de receita",
                qy2: "montante mínimo quantificado",
                qy3: "Quantidade máxima quantificada",
                qy4: "Número de quantificações por dia"
            },
            safe: {
                title: "Gerenciamento de segurança",
                login_pwd: "Senha de login",
                fund_pwd: "Senha de pagamento",
                safe: "Segurança",
                edit_pwd: "Alterar senha de login",
                edit_fundpwd: "Alterar senha de pagamento",
                phone: "número de telefone",
                getcode: "Obtenha o código de verificação",
                code: "Código de verificação",
                icode: "Por favor insira o código de verificação",
                newpwd: "Nova Senha",
                inewpwd: "Nova Senha",
                renewpwd: "Confirme a nova senha",
                renewpwd2: "Por favor insira a nova senha",
                oldpwd: "senha original",
                oldpwd2: "Digite a senha original",
                error: "Por favor insira os dados",
                hold: "Por favor, confirme se a nova senha é consistente"
            },
            keyboard: {
                ifundPwd: "Digite a senha de pagamento",
                verifying: "Verifique a senha de pagamento"
            },
            google: {
                step1: "primeiro passo",
                step2: "Etapa 2",
                step3: "Etapa 3",
                tip1: "Faça download do Google Authenticator na loja de aplicativos móveis",
                tip2: "Digitalize o código QR para vincular por meio do Google Authenticator",
                code: "Insira o código de verificação do Google",
                tip3: "A vinculação do Google Authenticator fornece outra camada de segurança para a segurança da sua conta.",
                renzheng: "Certificado"
            }
        }
    },
    "41b5": function(e, a, n) {
        "use strict";
        n.r(a);
        var i = n("3057")
          , t = n("b244");
        for (var o in t)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(a, e, (function() {
                    return t[e]
                }
                ))
            }(o);
        n("f44e");
        var r = n("828b")
          , d = Object(r["a"])(t["default"], i["b"], i["c"], !1, null, "0ff0aa76", null, !1, i["a"], void 0);
        a["default"] = d.exports
    },
    4923: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "εκτός",
                balance: "Ισορροπία",
                nodata: "όχι άλλα δεδομένα",
                logout: "Έξοδος με επιτυχία",
                confirm: "επιβεβαιώνω",
                cancel: "Ματαίωση",
                submit: "υποτάσσομαι",
                recharge: "ξεχειλίζω",
                withdraw: "Ανάληψη μετρητών",
                desc: "εικονογραφώ",
                tip: "Ευγενικές συμβουλές",
                tipEmail: "Για την περαιτέρω προστασία της ασφάλειας του λογαριασμού σας, δεσμεύστε τη διεύθυνση email σας.",
                tipEmail2: "Η δέσμευση της διεύθυνσης email σας παρέχει μια άλλη εγγύηση ασφαλείας για την ασφάλεια του λογαριασμού σας."
            },
            tabbar: {
                t1: "πρωτοσέλιδο",
                t2: "ομάδα",
                t3: "παίρνω",
                t4: "ακίνητη περιουσία",
                t5: "ορυχείο"
            },
            register: {
                title: "μητρώο",
                username: "όνομα χρήστη",
                username2: "Εισαγάγετε όνομα χρήστη",
                tel: "Αριθμός τηλεφώνου",
                tel2: "Εισαγάγετε τον αριθμό κινητού τηλεφώνου",
                pwd: "σύνθημα",
                pwd2: "Εισαγάγετε κωδικό πρόσβασης",
                repwd: "Επιβεβαίωση κωδικού πρόσβασης",
                repwd2: "Εισαγάγετε τον κωδικό επιβεβαίωσης",
                icode: "Κωδικός πρόσκλησης",
                icode2: "Εισαγάγετε τον κωδικό πρόσκλησης",
                has: "Έχετε ήδη λογαριασμό",
                has2: "Συνδεθείτε τώρα",
                email: "Ταχυδρομείο",
                email2: "Παρακαλώ εισάγετε το email σας",
                fundPwd: "Κωδικός πρόσβασης πληρωμής",
                fundPwd2: "Εισαγάγετε τον κωδικό πληρωμής",
                yzm: "Κωδικός επαλήθευσης",
                yzm2: "Εισαγάγετε τον κωδικό επαλήθευσης",
                send: "στέλνω",
                noyizhi: "Η εισαγωγή του κωδικού πρόσβασης είναι ασυνεπής"
            },
            login: {
                tel: "Αριθμός τηλεφώνου",
                tel2: "Εισαγάγετε τον αριθμό κινητού τηλεφώνου",
                pwd: "σύνθημα",
                pwd2: "Εισαγάγετε κωδικό πρόσβασης",
                login: "Συνδεθείτε",
                noc: "Δεν υπάρχει λογαριασμός ακόμα",
                noc2: "Εγγραφείτε τώρα",
                forgetpwd: "ξεχάστε τον κωδικό πρόσβασης",
                tip1: "Γειά σου",
                tip2: "καλώς να",
                lang: "Προτίμηση γλώσσας"
            },
            forget: {
                title: "ξεχάστε τον κωδικό πρόσβασης",
                getcode: "Λάβετε κωδικό επαλήθευσης",
                code: "Κωδικός επαλήθευσης",
                code2: "Εισαγάγετε τον κωδικό επαλήθευσης",
                nav1: "Επαλήθευση Google",
                nav2: "Επαλήθευση μέσω email",
                pwd: "Νέος κωδικός πρόσβασης",
                pwd2: "Εισαγάγετε νέο κωδικό πρόσβασης",
                repwd: "Επιβεβαίωση κωδικού πρόσβασης",
                repwd2: "Εισαγάγετε τον κωδικό επιβεβαίωσης",
                email: "E-mail",
                email2: "Εισαγάγετε τη διεύθυνση email σας"
            },
            index: {
                company: "Εταιρικό Προφίλ",
                rule: "κανόνας",
                invite: "Προσκαλέστε φίλους",
                hangqing: "Αποσπάσματα σε πραγματικό χρόνο",
                friend: "Συνεργάτες",
                message: "το μήνυμά μου",
                message1: "Μηνύματα συστήματος",
                message2: "μήνυμα αποστολής",
                message3: "Μήνυμα ιστότοπου"
            },
            invite: {
                title: "Προσκαλέστε φίλους",
                tip1: "Προσκαλέστε φίλους να κερδίσουν μεγάλα δώρα",
                tip2: "Ας νιώσουν όλοι χαρούμενοι και ας κερδίσουν κάτι",
                link: "Σύνδεσμος πρόσκλησης",
                code: "Κωδικός πρόσκλησης"
            },
            team: {
                title: "η ομάδα μου",
                data: "Δεδομένα ομάδας",
                pickerAll: "όλοι",
                picker1: "σήμερα",
                picker7: "τις τελευταίες 7 ημέρες",
                picker30: "Τελευταίες 30 ημέρες",
                picker60: "Τελευταίες 60 ημέρες",
                addPeopel: "Νέοι άνθρωποι",
                addEarn: "Νέα έσοδα",
                fenxi: "ανάλυση εσόδων",
                shouru1: "Έσοδα από εργασίες",
                shouru2: "Ποσοτικοποιήστε τα έσοδα",
                shouru3: "Προώθηση ποσοτικοποιημένου εισοδήματος",
                guimo: "Μέγεθος ομάδας",
                youxiao: "Ομαδική δουλειά",
                tdRecharge: "Επαναφόρτιση ομάδας",
                tdCash: "Αποχώρηση ομάδας",
                lookAll: "Προβολή όλων",
                card1: "συνολική προμήθεια",
                card2: "Συσσωρευμένη επαναφόρτιση",
                card3: "Σωρευτικές αναλήψεις",
                userNum: "αριθμός χρηστών",
                yj: "ποσοστό προμήθειας",
                ljEarn: "Σωρευτικό εισόδημα",
                level1: "Επίπεδο 1",
                level2: "Επίπεδο 2",
                level3: "Επίπεδο 3",
                list: "Λίστα ομάδας",
                taskNums: "Χρόνοι κβαντισμού"
            },
            fund: {
                title: "ακίνητη περιουσία",
                title2: "Εισαγωγή περιουσιακών στοιχείων",
                all: "συνολικά περιουσιακά στοιχεία",
                wait: "Επιβραβεύσεις προς διεκδίκηση",
                card1: "Ευέλικτα κεφάλαια",
                card2: "Ποσό που θα απελευθερωθεί",
                card3: "Δοκιμαστική αμοιβή",
                detail: "Στοιχεία περιουσιακών στοιχείων",
                lookAll: "Προβολή όλων",
                type1: "όλοι",
                type2: "εισόδημα",
                type3: "δαπάνη",
                task: "κέντρο αποστολής",
                taskTip1: "Ποσοτικοποίηση ρομπότ",
                taskTip2: "Αυξήστε εύκολα τον πλούτο",
                detailCard1: "Ποσό",
                detailCard2: "όνομα",
                detailCard3: "τύπος",
                detailCard4: "Αριθμός παραγγελίας",
                detailCard5: "φορά",
                back: "απόδοση"
            },
            task: {
                up: "Αναβάθμιση σε {level}",
                up2: "Κάντε αναβάθμιση σε {level} και θα λάβετε {money}",
                done: "Ολοκληρώθηκε το",
                ing: "σε εξέλιξη",
                can: "λαμβάνω",
                inviteNum: "Προσκαλέστε {nums} άτομα να καταθέσουν {money}",
                inviteAward: "Θα λάβετε {βραβείο}"
            },
            mine: {
                icode: "Κωδικός πρόσκλησης",
                goOut: "εγκαταλείπω",
                jiesuo: "Αυτό το επίπεδο έχει ξεκλειδωθεί",
                shengji: "Αναβάθμιση τώρα",
                zichan: "Σύνολο ενεργητικού",
                card1: "υπόλοιπο πορτοφολιού",
                card2: "Κεφάλαια προς αποδέσμευση",
                card3: "Σωρευτικό εισόδημα",
                card4: "Σωρευτικές αναλήψεις",
                card5: "Μέγεθος ομάδας",
                changyong: "Λειτουργίες που χρησιμοποιούνται συνήθως",
                email: "E-mail",
                pwd: "Κωδικός πρόσβασης σύνδεσης",
                fundPwd: "Κωδικός συναλλαγής",
                other: "Άλλες λειτουργίες",
                help: "Κέντρο βοήθειας",
                userTl: "Όροι χρήστη",
                lang: "αλλαγή γλώσσας",
                kefu: "εξυπηρέτηση πελατών",
                onlineServer: "Ηλεκτρονική εξυπηρέτηση πελατών",
                qiandao: "Συνδεθείτε",
                lx: "συνδέω",
                qiandaoTip: "Κάθε φορά που συνδέεστε {num} ημέρες, θα λαμβάνετε {money}",
                bank: "τραπεζική κάρτα",
                address: "Διεύθυνση ανάληψης",
                logoutTip: "Είστε βέβαιοι ότι θέλετε να αποσυνδεθείτε;"
            },
            recharge: {
                amount: "Ποσό επαναφόρτισης",
                amount2: "Εισαγάγετε το ποσό επαναφόρτισης",
                amountO: "Άλλα ποσά επαναφόρτισης",
                methods: "Μέθοδος επαναφόρτισης",
                btn: "Επαναφορτίστε τώρα",
                record: "Ρεκόρ επαναφόρτισης",
                min: "Ελάχιστο ποσό ανάληψης",
                desc: "εικονογραφώ",
                pingzheng: "Κουπόνι επαναφόρτισης",
                pingzheng2: "Ανεβάστε το κουπόνι επαναφόρτισης",
                address: "Διεύθυνση επαναφόρτισης",
                status0: "Να πληρωθεί",
                status1: "Ολοκληρώθηκε το",
                status2: "Η επαναφόρτιση απέτυχε",
                status3: "Ακυρώθηκε",
                detailCard1: "Μέθοδος επαναφόρτισης",
                detailCard2: "κατάσταση",
                detailCard3: "Αριθμός παραγγελίας",
                detailCard4: "φορά",
                detailCard5: "Ποσό",
                go: "Μεταβείτε στη δέσμευση τραπεζικής κάρτας",
                usdtTip1: "1. Αυτή η διεύθυνση δέχεται μόνο επαναφόρτιση πρωτοκόλλου USDT TRC20. Μην καταθέτετε άλλα νομίσματα ή άλλα πρωτόκολλα.",
                usdtTip2: "2. Ελέγξτε προσεκτικά τη διεύθυνση επαναφόρτισης για κάθε επαναφόρτιση Το ποσό κάθε επαναφόρτισης θα υπολογιστεί με βάση το πραγματικό ποσό που έχει καταβληθεί.",
                usdtTip3: "3. Η συμπλήρωση επιτυγχάνεται συνήθως μέσα σε λίγα λεπτά μετά την ολοκλήρωση της μεταφοράς"
            },
            bank: {
                bank: "τράπεζα",
                bank2: "Εισαγάγετε την τράπεζα",
                bankAccount: "τραπεζικός λογαριασμός",
                bankAccount2: "Εισαγάγετε τον τραπεζικό λογαριασμό",
                kaihuren: "Κάτοχος λογαριασμού",
                kaihuren2: "Εισαγάγετε τον κάτοχο του λογαριασμού",
                tel: "Αριθμός τηλεφώνου",
                tel2: "Εισαγάγετε τον αριθμό κινητού τηλεφώνου"
            },
            withdraw: {
                record: "Αρχεία αναλήψεων",
                account: "Ανάληψη λογαριασμού",
                account2: "Επιλέξτε έναν λογαριασμό ανάληψης",
                accountRed: "Διαχείριση λογαριασμού ανάληψης",
                amount: "Ποσό ανάληψης",
                amount2: "Εισαγάγετε το ποσό ανάληψης",
                keyong: "διαθέσιμο υπόλοιπο",
                tip: "Σημειώσεις σχετικά με την απόσυρση",
                pwd: "Κωδικός πρόσβασης πληρωμής",
                pwd2: "Εισαγάγετε τον κωδικό πληρωμής",
                min: "Ελάχιστο ποσό ανάληψης",
                fee: "αμοιβή διεκπεραίωσης",
                status0: "Εκκρεμεί έλεγχος",
                status1: "ολοκληρώθηκε η συναλλαγή",
                status2: "απορρίπτω",
                status3: "Μεταφορά",
                status4: "ολοκληρώθηκε η συναλλαγή"
            },
            account: {
                title: "Διαχείριση λογαριασμού",
                bind: "Πηγαίνετε στο δέσιμο",
                bind2: "Οριο",
                address: "διεύθυνση",
                address2: "Εισαγάγετε τη διεύθυνση",
                btn: "Δέστε τώρα",
                tip1: "Βεβαιωθείτε ότι ο λογαριασμός σας είναι ο λογαριασμός σας με πραγματικό όνομα, η ανάληψη θα αποτύχει και ο λογαριασμός θα παγώσει.",
                tip2: "Εάν χρειάζεται να τροποποιήσετε τον λογαριασμό σας, επικοινωνήστε με την εξυπηρέτηση πελατών"
            },
            get: {
                title: "Ποσοτικοποίηση",
                card1: "Ποσό ποσοτικοποιήσιμο σήμερα",
                card2: "Τα σημερινά κέρδη",
                card3: "Ποσοτικοποιήσιμοι χρόνοι σήμερα",
                card4: "συνολικά έσοδα",
                btn: "αυτόματη ποσοτικοποίηση",
                liucheng: "Διεξαγωγή διαδικασίας πάνελ",
                step1: "1. Η συλλογή δεδομένων βρίσκεται σε εξέλιξη",
                step2: "2. Στρατηγική βιώσιμης ανάπτυξης",
                step3: "3. Εκ των υστέρων δοκιμή σε εξέλιξη",
                step4: "4. Εκτέλεση",
                step5: "5. Ο ποσοτικός προσδιορισμός ολοκληρώθηκε",
                record: "Ποσοτικές εγγραφές",
                record1: "Ποσό επένδυσης",
                record2: "κέρδος",
                record3: "Πλατφόρμα αγορών",
                record4: "πλατφόρμα πώλησης",
                record5: "τιμή αγοράς",
                record6: "τιμή πωλήσεως"
            },
            vip: {
                title: "Κέντρο μελών",
                now: "τρέχον επίπεδο",
                level: "επίπεδο VIP",
                jiesuo: "Αυτό το επίπεδο έχει ξεκλειδωθεί",
                jiesuo2: "Αυτό το επίπεδο δεν είναι ξεκλείδωτο",
                tj: "Συνθήκες αναβάθμισης",
                tj1: "Αποτελεσματική ποσότητα",
                tj2: "Αριθμός ατόμων που προωθούνται σε μια γενιά",
                tj3: "Προώθηση επιπέδου χρήστη",
                qy: "δικαιώματα και συμφέροντα",
                qy1: "Ποσοστό εσόδων",
                qy2: "ελάχιστο ποσοτικοποιημένο ποσό",
                qy3: "Μέγιστη ποσοτικοποιημένη ποσότητα",
                qy4: "Αριθμός ποσοτικοποιήσεων ανά ημέρα"
            },
            safe: {
                title: "Διαχείριση ασφάλειας",
                login_pwd: "Κωδικός πρόσβασης σύνδεσης",
                fund_pwd: "Κωδικός πρόσβασης πληρωμής",
                safe: "Ασφάλεια",
                edit_pwd: "Αλλαγή κωδικού πρόσβασης σύνδεσης",
                edit_fundpwd: "Αλλαγή κωδικού πρόσβασης πληρωμής",
                phone: "αριθμός τηλεφώνου",
                getcode: "Λάβετε κωδικό επαλήθευσης",
                code: "Κωδικός επαλήθευσης",
                icode: "Εισαγάγετε τον κωδικό επαλήθευσης",
                newpwd: "Νέος κωδικός πρόσβασης",
                inewpwd: "Νέος κωδικός πρόσβασης",
                renewpwd: "Επιβεβαιώστε τον νέο κωδικό πρόσβασης",
                renewpwd2: "Εισαγάγετε νέο κωδικό πρόσβασης",
                oldpwd: "αρχικός κωδικός πρόσβασης",
                oldpwd2: "Εισαγάγετε τον αρχικό κωδικό πρόσβασης",
                error: "Εισαγάγετε δεδομένα",
                hold: "Επιβεβαιώστε ότι ο νέος κωδικός πρόσβασης είναι συνεπής"
            },
            keyboard: {
                ifundPwd: "Εισαγάγετε τον κωδικό πληρωμής",
                verifying: "Ελέγξτε τον κωδικό πληρωμής"
            },
            google: {
                step1: "πρώτο βήμα",
                step2: "Βήμα 2",
                step3: "Βήμα 3",
                tip1: "Κάντε λήψη του Google Authenticator από το κατάστημα εφαρμογών για κινητά",
                tip2: "Σαρώστε τον κωδικό QR για δέσμευση μέσω του Επαληθευτή Google",
                code: "Εισαγάγετε τον κωδικό επαλήθευσης Google",
                tip3: "Το Binding Google Authenticator παρέχει ένα άλλο επίπεδο ασφάλειας για την ασφάλεια του λογαριασμού σας.",
                renzheng: "Επικυρωμένος"
            }
        }
    },
    "4a29": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "बचाना",
                balance: "संतुलन",
                nodata: "कोई और डेटा नहीं",
                logout: "सफलतापूर्वक बाहर निकलें",
                confirm: "पुष्टि करना",
                cancel: "रद्द करना",
                submit: "जमा करना",
                recharge: "लबालब भरना",
                withdraw: "नकदी वापिस लेना",
                desc: "उदाहरण देकर स्पष्ट करना",
                tip: "दयालु सुझाव",
                tipEmail: "अपने खाते की सुरक्षा को और अधिक सुरक्षित रखने के लिए, कृपया अपना ईमेल पता बाइंड करें।",
                tipEmail2: "आपके ईमेल पते को बाइंड करना आपके खाते की सुरक्षा के लिए एक और सुरक्षा गारंटी प्रदान करता है।"
            },
            tabbar: {
                t1: "घर",
                t2: "टीम",
                t3: "पाना",
                t4: "संपत्ति",
                t5: "मेरा"
            },
            register: {
                title: "पंजीकरण करवाना",
                username: "उपयोक्तानाम",
                username2: "कृपया उपयोक्तानाम दर्ज करें",
                tel: "फ़ोन नंबर",
                tel2: "कृपया मोबाइल फ़ोन नंबर दर्ज करें",
                pwd: "पासवर्ड",
                pwd2: "कृपया पासवर्ड दर्ज करें",
                repwd: "पासवर्ड की पुष्टि कीजिये",
                repwd2: "कृपया पुष्टिकरण पासवर्ड दर्ज करें",
                icode: "आमंत्रण कोड",
                icode2: "कृपया आमंत्रण कोड दर्ज करें",
                has: "क्या आपके पास पहले से एक खाता मौजूद है",
                has2: "अभी लॉगिन करें",
                email: "मेल",
                email2: "कृपया अपना ईमेल दर्ज करें",
                fundPwd: "भुगतान पासवर्ड",
                fundPwd2: "कृपया भुगतान पासवर्ड दर्ज करें",
                yzm: "सत्यापन कोड",
                yzm2: "कृपया सत्यापन कोड दर्ज करें",
                send: "भेजना",
                noyizhi: "पासवर्ड इनपुट असंगत है"
            },
            login: {
                tel: "फ़ोन नंबर",
                tel2: "कृपया मोबाइल फ़ोन नंबर दर्ज करें",
                pwd: "पासवर्ड",
                pwd2: "कृपया पासवर्ड दर्ज करें",
                login: "लॉग इन करें",
                noc: "अभी तक कोई खाता नहीं",
                noc2: "अभी पंजीकरण करें",
                forgetpwd: "पासवर्ड भूल जाओ",
                tip1: "नमस्ते",
                tip2: "आपका स्वागत है",
                lang: "भाषा प्राथमिकता"
            },
            forget: {
                title: "पासवर्ड भूल जाओ",
                getcode: "सत्यापन कोड प्राप्त करें",
                code: "सत्यापन कोड",
                code2: "कृपया सत्यापन कोड दर्ज करें",
                nav1: "गूगल सत्यापन",
                nav2: "ईमेल सत्यापन",
                pwd: "नया पासवर्ड",
                pwd2: "कृपया नया पासवर्ड दर्ज करें",
                repwd: "पासवर्ड की पुष्टि कीजिये",
                repwd2: "कृपया पुष्टिकरण पासवर्ड दर्ज करें",
                email: "ईमेल",
                email2: "कृपया अपना ईमेल एड्रेस इंटर करें"
            },
            index: {
                company: "कंपनी प्रोफाइल",
                rule: "नियम",
                invite: "मित्रों को आमंत्रित करें",
                hangqing: "वास्तविक समय के उद्धरण",
                friend: "भागीदारों",
                message: "मेरा संदेश",
                message1: "सिस्टम संदेश",
                message2: "मिशन संदेश",
                message3: "साइट संदेश"
            },
            invite: {
                title: "मित्रों को आमंत्रित करें",
                tip1: "बड़े उपहार जीतने के लिए दोस्तों को आमंत्रित करें",
                tip2: "हर कोई खुश महसूस करे और कुछ हासिल करे",
                link: "आमंत्रण लिंक",
                code: "आमंत्रण कोड"
            },
            team: {
                title: "मेरी टीम",
                data: "टीम डेटा",
                pickerAll: "सभी",
                picker1: "आज",
                picker7: "पिछले 7 दिन",
                picker30: "पिछले 30 दिन",
                picker60: "पिछले 60 दिन",
                addPeopel: "नए लोग",
                addEarn: "नया राजस्व",
                fenxi: "राजस्व विश्लेषण",
                shouru1: "कार्य आय",
                shouru2: "राजस्व की मात्रा निर्धारित करें",
                shouru3: "मात्रात्मक आय को बढ़ावा देना",
                guimo: "टीम का आकार",
                youxiao: "टीम काम करती है",
                tdRecharge: "टीम रिचार्ज",
                tdCash: "टीम वापसी",
                lookAll: "सभी को देखें",
                card1: "कुल कमीशन",
                card2: "संचित पुनर्भरण",
                card3: "संचयी निकासी",
                userNum: "उपयोगकर्ता की संख्या",
                yj: "कमीशन प्रतिशत",
                ljEarn: "संचयी आय",
                level1: "स्तर 1",
                level2: "लेवल 2",
                level3: "लेवल 3",
                list: "टीम सूची",
                taskNums: "परिमाणीकरण समय"
            },
            fund: {
                title: "संपत्ति",
                title2: "संपत्ति परिचय",
                all: "कुल संपत्ति",
                wait: "असंग्रहित पुरस्कार",
                card1: "लचीले फंड",
                card2: "राशि जारी की जानी है",
                card3: "परीक्षण शुल्क",
                detail: "संपत्ति विवरण",
                lookAll: "सभी को देखें",
                type1: "सभी",
                type2: "आय",
                type3: "व्यय",
                task: "मिशन केंद्र",
                taskTip1: "रोबोट परिमाणीकरण",
                taskTip2: "आसानी से धन वृद्धि",
                detailCard1: "मात्रा",
                detailCard2: "नाम",
                detailCard3: "प्रकार",
                detailCard4: "क्रम संख्या",
                detailCard5: "समय",
                back: "वापस करना"
            },
            task: {
                up: "{level} पर अपग्रेड करें",
                up2: "{level} पर अपग्रेड करें और आपको {money} मिलेगा",
                done: "पुरा होना।",
                ing: "प्रगति पर है",
                can: "प्राप्त करें",
                inviteNum: "{संख्या} लोगों को {money} जमा करने के लिए आमंत्रित करें",
                inviteAward: "तुम्हें {award} मिलेगा"
            },
            mine: {
                icode: "आमंत्रण कोड",
                goOut: "छोड़ना",
                jiesuo: "इस स्तर को अनलॉक कर दिया गया है",
                shengji: "अभी अपग्रेड करें",
                zichan: "कुल संपत्ति",
                card1: "बटुए का संतुलन",
                card2: "धनराशि जारी की जाएगी",
                card3: "संचयी आय",
                card4: "संचयी निकासी",
                card5: "टीम का आकार",
                changyong: "आम तौर पर उपयोग किए जाने वाले फ़ंक्शन",
                email: "ईमेल",
                pwd: "लॉगिन पासवर्ड",
                fundPwd: "लेन-देन पासवर्ड",
                other: "अन्य कार्य",
                help: "सहायता केंद्र",
                userTl: "उपयोगकर्ता शर्तें",
                lang: "भाषा बदलें",
                kefu: "ग्राहक सेवा",
                onlineServer: "ऑनलाइन ग्राहक सेवा",
                qiandao: "दाखिल करना",
                lx: "जोड़ना",
                qiandaoTip: "हर बार जब आप {num} दिनों में साइन इन करेंगे, तो आपको {money} मिलेगा",
                bank: "बैंक कार्ड",
                address: "निकासी का पता",
                logoutTip: "क्या आप लॉग आउट करना चाहते हैं?"
            },
            recharge: {
                amount: "पुनर्भरण राशि",
                amount2: "कृपया रिचार्ज राशि दर्ज करें",
                amountO: "अन्य पुनर्भरण राशियाँ",
                methods: "रिचार्ज विधि",
                btn: "अभी रिचार्ज करें",
                record: "रिचार्ज रिकार्ड",
                min: "न्यूनतम निकासी राशि",
                desc: "उदाहरण देकर स्पष्ट करना",
                pingzheng: "रिचार्ज वाउचर",
                pingzheng2: "कृपया रिचार्ज वाउचर अपलोड करें",
                address: "रिचार्ज पता",
                status0: "भुगतान किया जाना है",
                status1: "पुरा होना।",
                status2: "रिचार्ज विफल रहा",
                status3: "रद्द किया गया",
                detailCard1: "रिचार्ज विधि",
                detailCard2: "राज्य",
                detailCard3: "क्रम संख्या",
                detailCard4: "समय",
                detailCard5: "मात्रा",
                go: "कृपया बैंक कार्ड बाइंड करने के लिए जाएं",
                usdtTip1: "1. यह पता केवल USDT TRC20 प्रोटोकॉल रिचार्ज स्वीकार करता है। कृपया अन्य मुद्राएँ या अन्य प्रोटोकॉल जमा न करें।",
                usdtTip2: "2. कृपया प्रत्येक रिचार्ज के लिए रिचार्ज पते की सावधानीपूर्वक जांच करें। प्रत्येक रिचार्ज की राशि की गणना वास्तविक प्रेषित राशि के आधार पर की जाएगी।",
                usdtTip3: "3. आमतौर पर ट्रांसफर पूरा होने के कुछ ही मिनटों के भीतर टॉप-अप पहुंच जाता है"
            },
            bank: {
                bank: "किनारा",
                bank2: "कृपया बैंक दर्ज करें",
                bankAccount: "बैंक खाता",
                bankAccount2: "कृपया बैंक खाता दर्ज करें",
                kaihuren: "खाताधारक",
                kaihuren2: "कृपया खाताधारक दर्ज करें",
                tel: "फ़ोन नंबर",
                tel2: "कृपया मोबाइल फ़ोन नंबर दर्ज करें"
            },
            withdraw: {
                record: "निकासी रिकार्ड",
                account: "खाता निकालो",
                account2: "कृपया एक निकासी खाता चुनें",
                accountRed: "निकासी खाता प्रबंधन",
                amount: "राशि वापस ले",
                amount2: "कृपया निकासी राशि दर्ज करें",
                keyong: "उपलब्ध शेष राशि",
                tip: "निकासी पर नोट्स",
                pwd: "भुगतान पासवर्ड",
                pwd2: "कृपया भुगतान पासवर्ड दर्ज करें",
                min: "न्यूनतम निकासी राशि",
                fee: "संचालन शुल्क",
                status0: "समीक्षा लंबित है",
                status1: "लेन-देन पूरा हुआ",
                status2: "अस्वीकार करें",
                status3: "स्थानांतरित कर रहा है",
                status4: "लेन-देन पूरा हुआ"
            },
            account: {
                title: "खाता प्रबंधन",
                bind: "बाइंडिंग पर जाएं",
                bind2: "अवश्यंभावी",
                address: "पता",
                address2: "कृपया पता दर्ज करें",
                btn: "अभी बाँधो",
                tip1: "कृपया सुनिश्चित करें कि आपका खाता आपका वास्तविक नाम वाला खाता है। यदि यह आपका वास्तविक नाम वाला खाता नहीं है, तो निकासी विफल हो जाएगी और खाता फ्रीज कर दिया जाएगा।",
                tip2: "यदि आपको अपना खाता संशोधित करने की आवश्यकता है, तो कृपया ग्राहक सेवा से संपर्क करें"
            },
            get: {
                title: "यों",
                card1: "आज मात्रात्मक राशि",
                card2: "आज की कमाई",
                card3: "आज मात्रात्मक समय",
                card4: "कुल मुनाफा",
                btn: "स्वचालित परिमाणीकरण",
                liucheng: "पैनल प्रक्रिया का संचालन करें",
                step1: "1. डेटा संग्रह प्रगति पर है",
                step2: "2. सतत विकास रणनीति",
                step3: "3. बैकटेस्टिंग प्रगति पर है",
                step4: "4. क्रियान्वयन",
                step5: "5. परिमाणीकरण पूरा हो गया",
                record: "मात्रात्मक अभिलेख",
                record1: "निवेश राशि",
                record2: "लाभ",
                record3: "क्रय मंच",
                record4: "बेचने का मंच",
                record5: "खरीद मूल्य",
                record6: "विक्रय मूल्य"
            },
            vip: {
                title: "सदस्य केंद्र",
                now: "वर्तमान स्तर",
                level: "वीआईपी स्तर",
                jiesuo: "इस स्तर को अनलॉक कर दिया गया है",
                jiesuo2: "यह स्तर अनलॉक नहीं है",
                tj: "अपग्रेड की शर्तें",
                tj1: "प्रभावी राशि",
                tj2: "एक पीढ़ी में पदोन्नत लोगों की संख्या",
                tj3: "उपयोगकर्ता स्तर को बढ़ावा दें",
                qy: "हक़ हित",
                qy1: "राजस्व प्रतिशत",
                qy2: "न्यूनतम परिमाणित राशि",
                qy3: "अधिकतम परिमाणित राशि",
                qy4: "प्रति दिन परिमाणीकरण की संख्या"
            },
            safe: {
                title: "सुरक्षा प्रबंधन",
                login_pwd: "लॉगिन पासवर्ड",
                fund_pwd: "भुगतान पासवर्ड",
                safe: "सुरक्षा",
                edit_pwd: "लॉगिन पासवर्ड बदलें",
                edit_fundpwd: "भुगतान पासवर्ड बदलें",
                phone: "टेलीफोन नंबर",
                getcode: "सत्यापन कोड प्राप्त करें",
                code: "सत्यापन कोड",
                icode: "कृपया सत्यापन कोड दर्ज करें",
                newpwd: "नया पासवर्ड",
                inewpwd: "नया पासवर्ड",
                renewpwd: "नए पासवर्ड की पुष्टि करें",
                renewpwd2: "कृपया नया पासवर्ड दर्ज करें",
                oldpwd: "मूल पासवर्ड",
                oldpwd2: "मूल पासवर्ड दर्ज करें",
                error: "कृपया डेटा दर्ज करें",
                hold: "कृपया पुष्टि करें कि नया पासवर्ड सुसंगत है"
            },
            keyboard: {
                ifundPwd: "भुगतान पासवर्ड दर्ज करें",
                verifying: "भुगतान पासवर्ड जांचें"
            },
            google: {
                step1: "पहला कदम",
                step2: "चरण दो",
                step3: "चरण 3",
                tip1: "कृपया मोबाइल ऐप स्टोर से Google प्रमाणक डाउनलोड करें",
                tip2: "Google प्रमाणक के माध्यम से बाइंड करने के लिए QR कोड को स्कैन करें",
                code: "कृपया Google सत्यापन कोड दर्ज करें",
                tip3: "Google प्रमाणक को बाइंड करना आपके खाते की सुरक्षा के लिए सुरक्षा की एक और परत प्रदान करता है।",
                renzheng: "प्रमाणित"
            }
        }
    },
    "4ea5": function(e, a, n) {
        "use strict";
        n.d(a, "b", (function() {
            return i
        }
        )),
        n.d(a, "c", (function() {
            return t
        }
        )),
        n.d(a, "a", (function() {}
        ));
        var i = function() {
            var e = this
              , a = e.$createElement
              , i = e._self._c || a;
            return i("v-uni-view", [e.obj.show ? i("v-uni-view", {
                staticClass: "cu-load load-modal pop"
            }, ["success" == e.obj.icon ? i("v-uni-image", {
                attrs: {
                    src: n("9640"),
                    mode: "aspectFit"
                }
            }) : e._e(), "error" == e.obj.icon ? i("v-uni-image", {
                attrs: {
                    src: n("aacd"),
                    mode: "aspectFit"
                }
            }) : e._e(), "warning" == e.obj.icon ? i("v-uni-image", {
                attrs: {
                    src: n("2774"),
                    mode: "aspectFit"
                }
            }) : e._e(), "loading" == e.obj.icon ? i("v-uni-image", {
                attrs: {
                    src: n("6caa"),
                    mode: "aspectFit"
                }
            }) : e._e(), 0 != e.obj.msg ? i("v-uni-view", {
                staticClass: "msg",
                staticStyle: {
                    "word-break": "break-all"
                }
            }, [e._v(e._s(e.obj.msg))]) : e._e()], 1) : e._e()], 1)
        }
          , t = []
    },
    5717: function(e, a, n) {
        "use strict";
        n.r(a);
        var i = n("91fe")
          , t = n.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(a, e, (function() {
                    return i[e]
                }
                ))
            }(o);
        a["default"] = t.a
    },
    5858: function(e, a, n) {
        var i = n("c86c");
        a = i(!1),
        a.push([e.i, ".pop[data-v-792be84c]{width:%?360?%!important;height:%?280?%!important;background-color:#b9d7a8}.msg[data-v-792be84c]{color:#232f3e;font-size:%?30?%;margin-top:%?28?%}.cu-load.load-modal[data-v-792be84c]::after{display:none!important}", ""]),
        e.exports = a
    },
    5993: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "spara",
                balance: "Balans",
                nodata: "inga mer data",
                logout: "Avsluta framgångsrikt",
                confirm: "bekräfta",
                cancel: "Avboka",
                submit: "överlämna",
                recharge: "fylla på",
                withdraw: "Ta ut kontanter",
                desc: "illustrera",
                tip: "Snälla tips",
                tipEmail: "För att ytterligare skydda säkerheten för ditt konto, vänligen bind din e-postadress.",
                tipEmail2: "Att binda din e-postadress ger ytterligare en säkerhetsgaranti för ditt kontosäkerhet."
            },
            tabbar: {
                t1: "Hem",
                t2: "Team",
                t3: "Få",
                t4: "Tillgångar",
                t5: "Mina"
            },
            register: {
                title: "register",
                username: "användarnamn",
                username2: "Vänligen ange användarnamn",
                tel: "Telefonnummer",
                tel2: "Vänligen ange mobilnummer",
                pwd: "lösenord",
                pwd2: "Vänligen ange lösenord",
                repwd: "Bekräfta lösenord",
                repwd2: "Vänligen ange bekräftelselösenordet",
                icode: "Inbjudningskod",
                icode2: "Vänligen ange inbjudningskoden",
                has: "Har redan ett konto",
                has2: "Logga in nu",
                email: "Post",
                email2: "Vänligen ange din e-postadress",
                fundPwd: "Lösenord för betalning",
                fundPwd2: "Vänligen ange betalningslösenord",
                yzm: "Verifieringskod",
                yzm2: "Vänligen ange verifieringskoden",
                send: "skicka",
                noyizhi: "Lösenordsinmatningen är inkonsekvent"
            },
            login: {
                tel: "Telefonnummer",
                tel2: "Vänligen ange mobilnummer",
                pwd: "lösenord",
                pwd2: "Vänligen ange lösenord",
                login: "Logga in",
                noc: "Inget konto ännu",
                noc2: "Registrera dig nu",
                forgetpwd: "glöm lösenordet",
                tip1: "Hej",
                tip2: "välkommen till",
                lang: "Språkinställning"
            },
            forget: {
                title: "glöm lösenordet",
                getcode: "Få verifieringskod",
                code: "Verifieringskod",
                code2: "Vänligen ange verifieringskoden",
                nav1: "Google-verifiering",
                nav2: "E-postverifiering",
                pwd: "Nytt lösenord",
                pwd2: "Vänligen ange nytt lösenord",
                repwd: "Bekräfta lösenord",
                repwd2: "Vänligen ange bekräftelselösenordet",
                email: "E-post",
                email2: "Vänligen ange din e-postadress"
            },
            index: {
                company: "Företagsprofil",
                rule: "regel",
                invite: "Bjud in vänner",
                hangqing: "Citat i realtid",
                friend: "Partners",
                message: "mitt meddelande",
                message1: "Systemmeddelanden",
                message2: "uppdragsmeddelande",
                message3: "Webbplatsmeddelande"
            },
            invite: {
                title: "Bjud in vänner",
                tip1: "Bjud in vänner att vinna stora presenter",
                tip2: "Låt alla känna sig glada och få något",
                link: "Inbjudningslänk",
                code: "Inbjudningskod"
            },
            team: {
                title: "mitt lag",
                data: "Lagdata",
                pickerAll: "alla",
                picker1: "i dag",
                picker7: "senaste 7 dagarna",
                picker30: "Senaste 30 dagarna",
                picker60: "Senaste 60 dagarna",
                addPeopel: "Nya människor",
                addEarn: "Nya intäkter",
                fenxi: "intäktsanalys",
                shouru1: "Uppgiftsinkomst",
                shouru2: "Kvantifiera intäkter",
                shouru3: "Främja kvantifierade inkomster",
                guimo: "Lagstorlek",
                youxiao: "Team fungerar",
                tdRecharge: "Laguppladdning",
                tdCash: "Laguttag",
                lookAll: "Visa alla",
                card1: "total provision",
                card2: "Ackumulerad laddning",
                card3: "Kumulativa uttag",
                userNum: "antal användare",
                yj: "provisionsprocent",
                ljEarn: "Kumulativ inkomst",
                level1: "Nivå 1",
                level2: "Nivå 2",
                level3: "Nivå 3",
                list: "Laglista",
                taskNums: "Kvantiseringstider"
            },
            fund: {
                title: "tillgångar",
                title2: "Tillgångsintroduktion",
                all: "totala tillgångar",
                wait: "Oinsamlade belöningar",
                card1: "Flexibla fonder",
                card2: "Belopp som ska släppas",
                card3: "Provavgift",
                detail: "Tillgångsinformation",
                lookAll: "Visa alla",
                type1: "alla",
                type2: "inkomst",
                type3: "utgifter",
                task: "missionscentrum",
                taskTip1: "Robotkvantifiering",
                taskTip2: "Öka enkelt välståndet",
                detailCard1: "Belopp",
                detailCard2: "namn",
                detailCard3: "typ",
                detailCard4: "Ordernummer",
                detailCard5: "tid",
                back: "återvända"
            },
            task: {
                up: "Uppgradera till {level}",
                up2: "Uppgradera till {level} så får du {money}",
                done: "Avslutad",
                ing: "pågår",
                can: "få",
                inviteNum: "Bjud in {nums} personer att sätta in {money}",
                inviteAward: "Du kommer att få {award}"
            },
            mine: {
                icode: "Inbjudningskod",
                goOut: "sluta",
                jiesuo: "Den här nivån har låsts upp",
                shengji: "Uppgradera nu",
                zichan: "Totala tillgångar",
                card1: "saldo i plånboken",
                card2: "Medel som ska frigöras",
                card3: "Kumulativ inkomst",
                card4: "Kumulativa uttag",
                card5: "Lagstorlek",
                changyong: "Vanligt använda funktioner",
                email: "E-post",
                pwd: "Inloggningslösenord",
                fundPwd: "Transaktionslösenord",
                other: "Andra funktioner",
                help: "Hjälpcenter",
                userTl: "Användarvillkor",
                lang: "byta språk",
                kefu: "kundservice",
                onlineServer: "Kundtjänst online",
                qiandao: "Logga in",
                lx: "ansluta",
                qiandaoTip: "Varje gång du loggar in {num} dagar får du {money}",
                bank: "bankkort",
                address: "Uttagsadress",
                logoutTip: "Är du säker på att du vill logga ut?"
            },
            recharge: {
                amount: "Ladda belopp",
                amount2: "Ange omladdningsbeloppet",
                amountO: "Andra laddningsbelopp",
                methods: "Uppladdningsmetod",
                btn: "Ladda om nu",
                record: "Ladda rekord",
                min: "Minsta uttagsbelopp",
                desc: "illustrera",
                pingzheng: "Ladda voucher",
                pingzheng2: "Ladda upp laddningskupongen",
                address: "Ladda adress",
                status0: "Ska betalas",
                status1: "Avslutad",
                status2: "Uppladdningen misslyckades",
                status3: "Avbruten",
                detailCard1: "Uppladdningsmetod",
                detailCard2: "ange",
                detailCard3: "Ordernummer",
                detailCard4: "tid",
                detailCard5: "Belopp",
                go: "Vänligen gå till binda bankkort",
                usdtTip1: "1. Denna adress accepterar endast USDT TRC20-protokolluppladdning. Sätt inte in andra valutor eller andra protokoll.",
                usdtTip2: "2. Kontrollera noggrant laddningsadressen för varje laddning. Beloppet för varje laddning kommer att beräknas baserat på det faktiska beloppet.",
                usdtTip3: "3. Påfyllning uppnås vanligtvis inom några minuter efter genomförd överföring"
            },
            bank: {
                bank: "bank",
                bank2: "Vänligen ange bank",
                bankAccount: "bankkonto",
                bankAccount2: "Ange bankkonto",
                kaihuren: "Kontoinnehavare",
                kaihuren2: "Ange kontoinnehavaren",
                tel: "Telefonnummer",
                tel2: "Vänligen ange mobilnummer"
            },
            withdraw: {
                record: "Uttagsregister",
                account: "Ta ut konto",
                account2: "Välj ett uttagskonto",
                accountRed: "Hantering av uttagskonto",
                amount: "Ta ut belopp",
                amount2: "Ange uttagsbeloppet",
                keyong: "tillgängligt saldo",
                tip: "Anmärkningar om uttag",
                pwd: "Lösenord för betalning",
                pwd2: "Vänligen ange betalningslösenord",
                min: "Minsta uttagsbelopp",
                fee: "hanteringsavgift",
                status0: "Väntar på granskning",
                status1: "Transaktionen slutförd",
                status2: "Avvisa",
                status3: "Överför",
                status4: "Transaktionen slutförd"
            },
            account: {
                title: "Kontohantering",
                bind: "Gå till bindning",
                bind2: "Bunden",
                address: "adress",
                address2: "Vänligen ange adress",
                btn: "Bind nu",
                tip1: "Se till att ditt konto är ditt konto med riktiga namn. Om det inte är ditt konto med riktiga namn, kommer uttaget att misslyckas och kontot kommer att frysas.",
                tip2: "Om du behöver ändra ditt konto, kontakta kundtjänst"
            },
            get: {
                title: "Kvantifiera",
                card1: "Kvantifierbart belopp idag",
                card2: "Dagens förtjänst",
                card3: "Kvantifierbara tider idag",
                card4: "totala intäkter",
                btn: "automatisk kvantifiering",
                liucheng: "Genomför panelprocessen",
                step1: "1. Datainsamling pågår",
                step2: "2. Strategi för hållbar utveckling",
                step3: "3. Backtesting pågår",
                step4: "4. Utför",
                step5: "5. Kvantifiering genomförd",
                record: "Kvantitativa register",
                record1: "Investeringsbelopp",
                record2: "vinst",
                record3: "Köpplattform",
                record4: "sälja plattform",
                record5: "inköpspris",
                record6: "försäljningspris"
            },
            vip: {
                title: "Medlemscenter",
                now: "nuvarande nivå",
                level: "VIP nivå",
                jiesuo: "Den här nivån har låsts upp",
                jiesuo2: "Denna nivå är inte upplåst",
                tj: "Uppgraderingsvillkor",
                tj1: "Effektivt belopp",
                tj2: "Antal personer befordrade i en generation",
                tj3: "Främja användarnivå",
                qy: "rättigheter och intressen",
                qy1: "Intäktsprocent",
                qy2: "lägsta kvantifierade mängd",
                qy3: "Maximal kvantifierad mängd",
                qy4: "Antal kvantifieringar per dag"
            },
            safe: {
                title: "Säkerhetshantering",
                login_pwd: "Inloggningslösenord",
                fund_pwd: "Lösenord för betalning",
                safe: "Säkerhet",
                edit_pwd: "Ändra inloggningslösenord",
                edit_fundpwd: "Ändra betalningslösenord",
                phone: "telefonnummer",
                getcode: "Få verifieringskod",
                code: "Verifieringskod",
                icode: "Vänligen ange verifieringskoden",
                newpwd: "Nytt lösenord",
                inewpwd: "Nytt lösenord",
                renewpwd: "Bekräfta nytt lösenord",
                renewpwd2: "Vänligen ange nytt lösenord",
                oldpwd: "ursprungliga lösenordet",
                oldpwd2: "Ange det ursprungliga lösenordet",
                error: "Vänligen ange data",
                hold: "Vänligen bekräfta att det nya lösenordet är konsekvent"
            },
            keyboard: {
                ifundPwd: "Ange betalningslösenord",
                verifying: "Kontrollera betalningslösenordet"
            },
            google: {
                step1: "första steget",
                step2: "Steg 2",
                step3: "Steg 3",
                tip1: "Ladda ner Google Authenticator från mobilappbutiken",
                tip2: "Skanna QR-koden för att binda via Google Authenticator",
                code: "Ange Googles verifieringskod",
                tip3: "Bindande Google Authenticator ger ytterligare ett lager av säkerhet för ditt kontosäkerhet.",
                renzheng: "Auktoriserad"
            }
        }
    },
    "5b11": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "kaydetmek",
                balance: "Denge",
                nodata: "daha fazla veri yok",
                logout: "Başarıyla çık",
                confirm: "onaylamak",
                cancel: "İptal etmek",
                submit: "göndermek",
                recharge: "tamamlamak",
                withdraw: "Nakit çekme",
                desc: "göstermek",
                tip: "Nazik ipuçları",
                tipEmail: "Hesabınızın güvenliğini daha fazla korumak için lütfen e-posta adresinizi bağlayın.",
                tipEmail2: "E-posta adresinizi bağlamak, hesap güvenliğiniz için başka bir güvenlik garantisi sağlar."
            },
            tabbar: {
                t1: "Ev",
                t2: "Takım",
                t3: "Elde etmek",
                t4: "Varlıklar",
                t5: "Bana ait"
            },
            register: {
                title: "kayıt olmak",
                username: "kullanıcı adı",
                username2: "Lütfen kullanıcı adını girin",
                tel: "Telefon numarası",
                tel2: "Lütfen cep telefonu numaranızı giriniz",
                pwd: "şifre",
                pwd2: "Lütfen şifreyi girin",
                repwd: "Şifreyi Onayla",
                repwd2: "Lütfen onay şifresini girin",
                icode: "Davetiye kodu",
                icode2: "Lütfen davet kodunu girin",
                has: "Zaten bir hesabınız var",
                has2: "Şimdi oturum açın",
                email: "Posta",
                email2: "Lütfen e-postanızı girin",
                fundPwd: "Ödeme şifresi",
                fundPwd2: "Lütfen ödeme şifresini girin",
                yzm: "Doğrulama kodu",
                yzm2: "Lütfen doğrulama kodunu girin",
                send: "Göndermek",
                noyizhi: "Şifre girişi tutarsız"
            },
            login: {
                tel: "Telefon numarası",
                tel2: "Lütfen cep telefonu numaranızı giriniz",
                pwd: "şifre",
                pwd2: "Lütfen şifreyi girin",
                login: "Giriş yapmak",
                noc: "Henüz hesap yok",
                noc2: "Şimdi kaydolun",
                forgetpwd: "şifreyi unut",
                tip1: "Merhaba",
                tip2: "hoş geldiniz",
                lang: "Dil tercihi"
            },
            forget: {
                title: "şifreyi unut",
                getcode: "Doğrulama kodunu alın",
                code: "Doğrulama kodu",
                code2: "Lütfen doğrulama kodunu girin",
                nav1: "Google doğrulaması",
                nav2: "E-posta doğrulaması",
                pwd: "Yeni Şifre",
                pwd2: "Lütfen yeni şifreyi girin",
                repwd: "Şifreyi Onayla",
                repwd2: "Lütfen onay şifresini girin",
                email: "E-posta",
                email2: "Lütfen e-posta adresinizi girin"
            },
            index: {
                company: "Şirket Profili",
                rule: "kural",
                invite: "Arkadaşlarınızı davet edin",
                hangqing: "Gerçek zamanlı alıntılar",
                friend: "Ortaklar",
                message: "mesajım",
                message1: "Sistem mesajları",
                message2: "görev mesajı",
                message3: "Site mesajı"
            },
            invite: {
                title: "Arkadaşlarınızı davet edin",
                tip1: "Arkadaşlarınızı büyük hediyeler kazanmaya davet edin",
                tip2: "Herkesin mutlu olmasına ve bir şeyler kazanmasına izin verin",
                link: "Davetiye bağlantısı",
                code: "Davetiye kodu"
            },
            team: {
                title: "benim takımım",
                data: "Takım verileri",
                pickerAll: "Tümü",
                picker1: "Bugün",
                picker7: "son 7 gün",
                picker30: "Son 30 gün",
                picker60: "Son 60 gün",
                addPeopel: "Yeni insanlar",
                addEarn: "Yeni gelir",
                fenxi: "gelir analizi",
                shouru1: "Görev geliri",
                shouru2: "Geliri ölçün",
                shouru3: "Ölçülmüş geliri teşvik edin",
                guimo: "Takım büyüklüğü",
                youxiao: "Ekip çalışmaları",
                tdRecharge: "Takım şarjı",
                tdCash: "Takım şarjı",
                lookAll: "Tümünü görüntüle",
                card1: "toplam komisyon",
                card2: "Birikmiş şarj",
                card3: "Kümülatif para çekme işlemleri",
                userNum: "kullanıcı sayısı",
                yj: "komisyon yüzdesi",
                ljEarn: "Kümülatif gelir",
                level1: "Seviye 1",
                level2: "Seviye 2",
                level3: "Seviye 3",
                list: "Takım listesi",
                taskNums: "Niceleme süreleri"
            },
            fund: {
                title: "varlıklar",
                title2: "Varlık tanıtımı",
                all: "toplam varlıklar",
                wait: "Alınacak ödüller",
                card1: "Esnek fonlar",
                card2: "Serbest bırakılacak tutar",
                card3: "Deneme ücreti",
                detail: "Varlık ayrıntıları",
                lookAll: "Tümünü görüntüle",
                type1: "Tümü",
                type2: "gelir",
                type3: "harcama",
                task: "görev merkezi",
                taskTip1: "Robot ölçümü",
                taskTip2: "Zenginliği kolayca artırın",
                detailCard1: "Miktar",
                detailCard2: "isim",
                detailCard3: "tip",
                detailCard4: "Sipariş numarası",
                detailCard5: "zaman",
                back: "geri dönmek"
            },
            task: {
                up: "{level}'a yükseltin",
                up2: "{level} düzeyine yükselttiğinizde {money} alacaksınız",
                done: "Tamamlanmış",
                ing: "devam etmekte",
                can: "almak",
                inviteNum: "{nums} kişiyi {money} yatırmaya davet edin",
                inviteAward: "{award} alacaksınız"
            },
            mine: {
                icode: "Davetiye kodu",
                goOut: "çıkış yapmak",
                jiesuo: "Bu seviyenin kilidi açıldı",
                shengji: "Şimdi yükseltin",
                zichan: "Toplam varlıklar",
                card1: "cüzdan bakiyesi",
                card2: "Serbest bırakılacak fonlar",
                card3: "Kümülatif gelir",
                card4: "Kümülatif para çekme işlemleri",
                card5: "Takım büyüklüğü",
                changyong: "Yaygın olarak kullanılan işlevler",
                email: "E-posta",
                pwd: "Giriş şifresi",
                fundPwd: "İşlem şifresi",
                other: "Diğer işlevler",
                help: "Yardım Merkezi",
                userTl: "Kullanıcı Koşulları",
                lang: "dili değiştir",
                kefu: "müşteri hizmetleri",
                onlineServer: "Çevrimiçi müşteri hizmetleri",
                qiandao: "Kayıt olmak",
                lx: "bağlamak",
                qiandaoTip: "{num} gün boyunca her oturum açtığınızda, {money} alacaksınız",
                bank: "banka kartı",
                address: "Para çekme adresi",
                logoutTip: "Oturumu kapatmak istediğinizden emin misiniz?"
            },
            recharge: {
                amount: "Yeniden yükleme miktarı",
                amount2: "Lütfen yükleme tutarını girin",
                amountO: "Diğer yükleme miktarları",
                methods: "Şarj yöntemi",
                btn: "Şimdi şarj edin",
                record: "Şarj kaydı",
                min: "Minimum para çekme tutarı",
                desc: "göstermek",
                pingzheng: "Kuponu yeniden doldur",
                pingzheng2: "Lütfen yeniden yükleme kuponunu yükleyin",
                address: "Şarj adresi",
                status0: "Ödenecek",
                status1: "Tamamlanmış",
                status2: "Yeniden şarj başarısız oldu",
                status3: "İptal edildi",
                detailCard1: "Şarj yöntemi",
                detailCard2: "durum",
                detailCard3: "Sipariş numarası",
                detailCard4: "zaman",
                detailCard5: "Miktar",
                go: "Lütfen banka kartını bağlamaya gidin",
                usdtTip1: "1. Bu adres yalnızca USDT TRC20 protokolü yüklemesini kabul etmektedir. Lütfen diğer para birimlerini veya diğer protokolleri yatırmayın.",
                usdtTip2: "2. Lütfen her yükleme için yükleme adresini dikkatlice kontrol edin. Her yüklemenin tutarı, havale edilen gerçek tutara göre hesaplanacaktır.",
                usdtTip3: "3. Yükleme işlemi genellikle transferin tamamlanmasından sonraki birkaç dakika içinde tamamlanır"
            },
            bank: {
                bank: "banka",
                bank2: "Lütfen bankayı girin",
                bankAccount: "banka hesabı",
                bankAccount2: "Lütfen banka hesabını girin",
                kaihuren: "Hesap sahibi",
                kaihuren2: "Lütfen hesap sahibini girin",
                tel: "Telefon numarası",
                tel2: "Lütfen cep telefonu numaranızı giriniz"
            },
            withdraw: {
                record: "Para çekme kayıtları",
                account: "Hesabı çek",
                account2: "Lütfen bir para çekme hesabı seçin",
                accountRed: "Para çekme hesabı yönetimi",
                amount: "Tutarın çekilmesi",
                amount2: "Lütfen çekim tutarını girin",
                keyong: "mevcut bakiye",
                tip: "Para Çekmeye İlişkin Notlar",
                pwd: "Ödeme şifresi",
                pwd2: "Lütfen ödeme şifresini girin",
                min: "Minimum para çekme tutarı",
                fee: "işlem ücreti",
                status0: "İnceleme bekleniyor",
                status1: "Işlem tamamlandı",
                status2: "Geri çevirmek",
                status3: "Aktarılıyor",
                status4: "Işlem tamamlandı"
            },
            account: {
                title: "Hesap yönetimi",
                bind: "Bağlamaya git",
                bind2: "bağlı",
                address: "adres",
                address2: "Lütfen adresi girin",
                btn: "Şimdi bağla",
                tip1: "Lütfen hesabınızın gerçek isimli hesabınız olduğundan emin olun. Eğer gerçek isimli hesabınız değilse, para çekme işlemi başarısız olacak ve hesap dondurulacaktır.",
                tip2: "Hesabınızı değiştirmeniz gerekiyorsa lütfen müşteri hizmetleriyle iletişime geçin"
            },
            get: {
                title: "Ölçün",
                card1: "Bugün ölçülebilir miktar",
                card2: "Bugünkü kazanç",
                card3: "Bugün ölçülebilir zamanlar",
                card4: "toplam gelir",
                btn: "otomatik miktar belirleme",
                liucheng: "Panel sürecini yürütmek",
                step1: "1. Veri toplama devam ediyor",
                step2: "2. Sürdürülebilir kalkınma stratejisi",
                step3: "3. Geriye dönük test devam ediyor",
                step4: "4. Yürütülüyor",
                step5: "5. Miktar belirleme tamamlandı",
                record: "Nicel kayıtlar",
                record1: "Yatırım tutarı",
                record2: "kâr",
                record3: "Satın alma platformu",
                record4: "satış platformu",
                record5: "alış fiyatı",
                record6: "satış fiyatı"
            },
            vip: {
                title: "Üye Merkezi",
                now: "mevcut seviye",
                level: "VIP seviyesi",
                jiesuo: "Bu seviyenin kilidi açıldı",
                jiesuo2: "Bu seviyenin kilidi açık değil",
                tj: "Yükseltme koşulları",
                tj1: "Etkin miktar",
                tj2: "Bir nesilde terfi ettirilen kişi sayısı",
                tj3: "Kullanıcı seviyesini yükselt",
                qy: "haklar ve çıkarlar",
                qy1: "Gelir yüzdesi",
                qy2: "asgari niceliksel miktar",
                qy3: "Maksimum ölçülen miktar",
                qy4: "Günlük ölçüm sayısı"
            },
            safe: {
                title: "Güvenlik yönetimi",
                login_pwd: "Giriş şifresi",
                fund_pwd: "Ödeme şifresi",
                safe: "Emniyet",
                edit_pwd: "Giriş şifresini değiştir",
                edit_fundpwd: "Ödeme şifresini değiştir",
                phone: "telefon numarası",
                getcode: "Doğrulama kodunu alın",
                code: "Doğrulama kodu",
                icode: "Lütfen doğrulama kodunu girin",
                newpwd: "Yeni Şifre",
                inewpwd: "Yeni Şifre",
                renewpwd: "Yeni şifreyi onayla",
                renewpwd2: "Lütfen yeni şifreyi girin",
                oldpwd: "orijinal şifre",
                oldpwd2: "Orijinal şifreyi girin",
                error: "Lütfen verileri girin",
                hold: "Lütfen yeni şifrenin tutarlı olduğunu onaylayın"
            },
            keyboard: {
                ifundPwd: "Ödeme şifresini girin",
                verifying: "Ödeme şifresini kontrol edin"
            },
            google: {
                step1: "ilk adım",
                step2: "2. Adım",
                step3: "3. Adım",
                tip1: "Lütfen Google Authenticator'ı mobil uygulama mağazasından indirin",
                tip2: "Google Authenticator aracılığıyla bağlanmak için QR kodunu tarayın",
                code: "Lütfen Google doğrulama kodunu girin",
                tip3: "Google Authenticator'ı bağlamak, hesap güvenliğiniz için başka bir güvenlik katmanı sağlar.",
                renzheng: "Sertifikalı"
            }
        }
    },
    "5f62": function(e, a, n) {
        "use strict";
        var i = n("fdb7")
          , t = n.n(i);
        t.a
    },
    "6caa": function(e, a, n) {
        e.exports = n.p + "static/img/pop/loading.gif"
    },
    "6f85": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "speichern",
                balance: "Gleichgewicht",
                nodata: "keine Daten mehr",
                logout: "Erfolgreich beenden",
                confirm: "bestätigen",
                cancel: "Stornieren",
                submit: "einreichen",
                recharge: "nachfüllen",
                withdraw: "Bargeld abheben",
                desc: "veranschaulichen",
                tip: "Freundliche Tipps",
                tipEmail: "Um die Sicherheit Ihres Kontos weiter zu schützen, verknüpfen Sie bitte Ihre E-Mail-Adresse.",
                tipEmail2: "Die Bindung Ihrer E-Mail-Adresse bietet eine weitere Sicherheitsgarantie für die Sicherheit Ihres Kontos."
            },
            tabbar: {
                t1: "Home",
                t2: "Team",
                t3: "erhalten",
                t4: "Geldbörse",
                t5: "meins"
            },
            register: {
                title: "registrieren",
                username: "Benutzername",
                username2: "Bitte geben Sie den Benutzernamen ein",
                tel: "Telefonnummer",
                tel2: "Bitte geben Sie die Mobiltelefonnummer ein",
                pwd: "Passwort",
                pwd2: "Bitte geben Sie das Passwort ein",
                repwd: "Passwort bestätigen",
                repwd2: "Bitte geben Sie das Bestätigungspasswort ein",
                icode: "Einladungscode",
                icode2: "Bitte geben Sie den Einladungscode ein",
                has: "Habe bereits ein Konto",
                has2: "Melden Sie sich jetzt an",
                email: "Post",
                email2: "Bitte geben Sie Ihre E-Mail-Adresse ein",
                fundPwd: "Zahlungspasswort",
                fundPwd2: "Bitte geben Sie das Zahlungspasswort ein",
                yzm: "Bestätigungscode",
                yzm2: "Bitte geben Sie den Bestätigungscode ein",
                send: "schicken",
                noyizhi: "Die Passworteingabe ist inkonsistent"
            },
            login: {
                tel: "Telefonnummer",
                tel2: "Bitte geben Sie die Mobiltelefonnummer ein",
                pwd: "Passwort",
                pwd2: "Bitte geben Sie das Passwort ein",
                login: "Einloggen",
                noc: "Noch kein Konto",
                noc2: "Registrieren Sie sich jetzt",
                forgetpwd: "vergessen Sie das Passwort",
                tip1: "Hallo",
                tip2: "Willkommen bei",
                lang: "Sprachpräferenz"
            },
            forget: {
                title: "vergessen Sie das Passwort",
                getcode: "Holen Sie sich den Bestätigungscode",
                code: "Bestätigungscode",
                code2: "Bitte geben Sie den Bestätigungscode ein",
                nav1: "Google-Bestätigung",
                nav2: "E-Mail-Bestätigung",
                pwd: "Neues Passwort",
                pwd2: "Bitte geben Sie ein neues Passwort ein",
                repwd: "Passwort bestätigen",
                repwd2: "Bitte geben Sie das Bestätigungspasswort ein",
                email: "E-Mail",
                email2: "Bitte geben Sie Ihre E-Mail-Adresse ein"
            },
            index: {
                company: "Unternehmensprofil",
                rule: "Regel",
                invite: "Freunde einladen",
                hangqing: "Echtzeit-Kurse",
                friend: "Partner",
                message: "meine Nachricht",
                message1: "Systemmeldungen",
                message2: "Missionsbotschaft",
                message3: "Site-Nachricht"
            },
            invite: {
                title: "Freunde einladen",
                tip1: "Laden Sie Freunde ein, große Geschenke zu gewinnen",
                tip2: "Lassen Sie alle glücklich sein und etwas gewinnen",
                link: "Einladungslink",
                code: "Einladungscode"
            },
            team: {
                title: "mein Team",
                data: "Teamdaten",
                pickerAll: "alle",
                picker1: "Heute",
                picker7: "letzten 7 Tage",
                picker30: "Letzte 30 Tage",
                picker60: "Letzte 60 Tage",
                addPeopel: "Neue Leute",
                addEarn: "Neue Einnahmen",
                fenxi: "Umsatzanalyse",
                shouru1: "Aufgabeneinkommen",
                shouru2: "Umsatz quantifizieren",
                shouru3: "Quantifiziertes Einkommen fördern",
                guimo: "Teamgröße",
                youxiao: "Team funktioniert",
                tdRecharge: "Aufladung des Teams",
                tdCash: "Rückzug der Mannschaft",
                lookAll: "Alle anzeigen",
                card1: "Gesamtprovision",
                card2: "Akkumulierte Aufladung",
                card3: "Kumulierte Abhebungen",
                userNum: "Anzahl der Benutzer",
                yj: "Provisionsprozentsatz",
                ljEarn: "Kumuliertes Einkommen",
                level1: "Stufe 1",
                level2: "Stufe 2",
                level3: "Stufe 3",
                list: "Teamliste",
                taskNums: "Quantisierungszeiten"
            },
            fund: {
                title: "Vermögenswerte",
                title2: "Asset-Einführung",
                all: "Gesamtvermögen",
                wait: "Nicht gesammelte Belohnungen",
                card1: "Flexible Fonds",
                card2: "Betrag, der freigegeben werden soll",
                card3: "Probegebühr",
                detail: "Asset-Details",
                lookAll: "Alle anzeigen",
                type1: "alle",
                type2: "Einkommen",
                type3: "Ausgaben",
                task: "Missionszentrum",
                taskTip1: "Roboterquantifizierung",
                taskTip2: "Vermehren Sie ganz einfach Ihr Vermögen",
                detailCard1: "Menge",
                detailCard2: "Name",
                detailCard3: "Typ",
                detailCard4: "Bestellnummer",
                detailCard5: "Zeit",
                back: "zurückkehren"
            },
            task: {
                up: "Upgrade auf {Level}",
                up2: "Upgrade auf {level} und du erhältst {money}",
                done: "Vollendet",
                ing: "im Gange",
                can: "erhalten",
                inviteNum: "Laden Sie {nums} Personen ein, {Geld} einzuzahlen",
                inviteAward: "Sie erhalten {Auszeichnung}"
            },
            mine: {
                icode: "Einladungscode",
                goOut: "aufhören",
                jiesuo: "Dieses Level wurde freigeschaltet",
                shengji: "Jetzt upgraden",
                zichan: "Gesamtvermögen",
                card1: "Brieftaschenguthaben",
                card2: "Mittel werden freigegeben",
                card3: "Kumuliertes Einkommen",
                card4: "Kumulierte Abhebungen",
                card5: "Teamgröße",
                changyong: "Häufig verwendete Funktionen",
                email: "E-Mail",
                pwd: "Login-Passwort",
                fundPwd: "Transaktionspasswort",
                other: "Andere Funktionen",
                help: "Hilfecenter",
                userTl: "Nutzungsbedingungen",
                lang: "Sprache wechseln",
                kefu: "Kundendienst",
                onlineServer: "Online-Kundenservice",
                qiandao: "anmelden",
                lx: "verbinden",
                qiandaoTip: "Jedes Mal, wenn Sie sich in {num} Tagen anmelden, erhalten Sie {Geld}",
                bank: "Bankkarte",
                address: "Auszahlungsadresse",
                logoutTip: "Möchten Sie sich wirklich abmelden?"
            },
            recharge: {
                amount: "Aufladebetrag",
                amount2: "Bitte geben Sie den Aufladebetrag ein",
                amountO: "Andere Aufladebeträge",
                methods: "Auflademethode",
                btn: "Jetzt aufladen",
                record: "Aufladeaufzeichnung",
                min: "Mindestauszahlungsbetrag",
                desc: "veranschaulichen",
                pingzheng: "Gutschein aufladen",
                pingzheng2: "Bitte laden Sie den Aufladegutschein hoch",
                address: "Aufladeadresse",
                status0: "Zu bezahlen",
                status1: "Vollendet",
                status2: "Das Aufladen ist fehlgeschlagen",
                status3: "Abgesagt",
                detailCard1: "Auflademethode",
                detailCard2: "Zustand",
                detailCard3: "Bestellnummer",
                detailCard4: "Zeit",
                detailCard5: "Menge",
                go: "Bitte gehen Sie zum Binden der Bankkarte",
                usdtTip1: "1. Diese Adresse akzeptiert nur das Aufladen mit dem USDT TRC20-Protokoll. Bitte zahlen Sie keine anderen Währungen oder andere Protokolle ein.",
                usdtTip2: "2. Bitte überprüfen Sie bei jeder Aufladung sorgfältig die Aufladeadresse. Der Betrag jeder Aufladung wird auf der Grundlage des tatsächlich überwiesenen Betrags berechnet.",
                usdtTip3: "3. Die Aufladung erfolgt in der Regel innerhalb weniger Minuten nach Abschluss der Überweisung"
            },
            bank: {
                bank: "Bank",
                bank2: "Bitte geben Sie die Bank ein",
                bankAccount: "Bankkonto",
                bankAccount2: "Bitte geben Sie das Bankkonto ein",
                kaihuren: "Kontoinhaber",
                kaihuren2: "Bitte geben Sie den Kontoinhaber ein",
                tel: "Telefonnummer",
                tel2: "Bitte geben Sie die Mobiltelefonnummer ein"
            },
            withdraw: {
                record: "Auszahlungsunterlagen",
                account: "Konto abheben",
                account2: "Bitte wählen Sie ein Auszahlungskonto aus",
                accountRed: "Verwaltung des Auszahlungskontos",
                amount: "Betrag abheben",
                amount2: "Bitte geben Sie den Auszahlungsbetrag ein",
                keyong: "verfügbares Guthaben",
                tip: "Hinweise zum Widerruf",
                pwd: "Zahlungspasswort",
                pwd2: "Bitte geben Sie das Zahlungspasswort ein",
                min: "Mindestauszahlungsbetrag",
                fee: "Bearbeitungsgebühr",
                status0: "Ausstehende Überprüfung",
                status1: "Transaktion abgeschlossen",
                status2: "ablehnen",
                status3: "Übertragen",
                status4: "Transaktion abgeschlossen"
            },
            account: {
                title: "Kontoverwaltung",
                bind: "Gehen Sie zum Binden",
                bind2: "Gebunden",
                address: "Adresse",
                address2: "Bitte Adresse eingeben",
                btn: "Jetzt binden",
                tip1: "Bitte stellen Sie sicher, dass es sich bei Ihrem Konto um Ihr Echtnamenkonto handelt. Wenn es sich nicht um Ihr Echtnamenkonto handelt, schlägt die Auszahlung fehl und das Konto wird gesperrt.",
                tip2: "Wenn Sie Ihr Konto ändern müssen, wenden Sie sich bitte an den Kundendienst"
            },
            get: {
                title: "Quantifizieren",
                card1: "Heute bezifferbare Menge",
                card2: "Der heutige Verdienst",
                card3: "Quantifizierbare Zeiten heute",
                card4: "Gesamtumsatz",
                btn: "automatische Quantifizierung",
                liucheng: "Führen Sie den Panelprozess durch",
                step1: "1. Datenerfassung läuft",
                step2: "2. Strategie für nachhaltige Entwicklung",
                step3: "3. Backtesting läuft",
                step4: "4. Ausführung",
                step5: "5. Quantifizierung abgeschlossen",
                record: "Quantitative Aufzeichnungen",
                record1: "Investitionsbetrag",
                record2: "profitieren",
                record3: "Kaufplattform",
                record4: "Verkaufsplattform",
                record5: "Kaufpreis",
                record6: "Verkaufspreis"
            },
            vip: {
                title: "Mitgliederzentrum",
                now: "aktuelles Niveau",
                level: "VIP-Level",
                jiesuo: "Dieses Level wurde freigeschaltet",
                jiesuo2: "Dieses Level ist nicht freigeschaltet",
                tj: "Upgrade-Bedingungen",
                tj1: "Effektiver Betrag",
                tj2: "Anzahl der Beförderungen in einer Generation",
                tj3: "Benutzerebene fördern",
                qy: "Rechte und Interessen",
                qy1: "Umsatzprozentsatz",
                qy2: "quantifizierter Mindestbetrag",
                qy3: "Maximaler quantifizierter Betrag",
                qy4: "Anzahl der Quantifizierungen pro Tag"
            },
            safe: {
                title: "Sicherheitsmanagement",
                login_pwd: "Login-Passwort",
                fund_pwd: "Zahlungspasswort",
                safe: "Sicherheit",
                edit_pwd: "Login-Passwort ändern",
                edit_fundpwd: "Zahlungspasswort ändern",
                phone: "Telefonnummer",
                getcode: "Holen Sie sich den Bestätigungscode",
                code: "Bestätigungscode",
                icode: "Bitte geben Sie den Bestätigungscode ein",
                newpwd: "Neues Passwort",
                inewpwd: "Neues Passwort",
                renewpwd: "Bestätigen Sie das neue Passwort",
                renewpwd2: "Bitte geben Sie ein neues Passwort ein",
                oldpwd: "Originalpasswort",
                oldpwd2: "Geben Sie das ursprüngliche Passwort ein",
                error: "Bitte geben Sie Daten ein",
                hold: "Bitte bestätigen Sie, dass das neue Passwort konsistent ist"
            },
            keyboard: {
                ifundPwd: "Geben Sie das Zahlungspasswort ein",
                verifying: "Überprüfen Sie das Zahlungspasswort"
            },
            google: {
                step1: "erster Schritt",
                step2: "Schritt 2",
                step3: "Schritt 3",
                tip1: "Bitte laden Sie Google Authenticator aus dem Mobile App Store herunter",
                tip2: "Scannen Sie den QR-Code, um eine Bindung über Google Authenticator herzustellen",
                code: "Bitte geben Sie den Google-Bestätigungscode ein",
                tip3: "Die Bindung von Google Authenticator bietet eine weitere Sicherheitsebene für die Sicherheit Ihres Kontos.",
                renzheng: "Zertifiziert"
            }
        }
    },
    "72e6": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "구하다",
                balance: "균형",
                nodata: "더 이상 데이터가 없습니다",
                logout: "성공적으로 종료되었습니다",
                confirm: "확인하다",
                cancel: "취소",
                submit: "제출하다",
                recharge: "충전하다",
                withdraw: "현금 인출",
                desc: "설명하다",
                tip: "친절한 팁",
                tipEmail: "귀하의 계정 보안을 더욱 강화하기 위해 귀하의 이메일 주소를 바인딩하십시오.",
                tipEmail2: "이메일 주소를 바인딩하면 계정 보안을 위한 또 다른 보안이 보장됩니다."
            },
            tabbar: {
                t1: "집",
                t2: "팀",
                t3: "얻다",
                t4: "자산",
                t5: "내 거"
            },
            register: {
                title: "등록하다",
                username: "사용자 이름",
                username2: "사용자 이름을 입력하세요",
                tel: "전화 번호",
                tel2: "휴대폰번호를 입력해주세요",
                pwd: "비밀번호",
                pwd2: "비밀번호를 입력해주세요",
                repwd: "비밀번호 확인",
                repwd2: "확인 비밀번호를 입력해주세요",
                icode: "초대코드",
                icode2: "초대코드를 입력해주세요",
                has: "이미 계정이 있습니다",
                has2: "지금 로그인하세요",
                email: "우편",
                email2: "이메일을 입력해주세요",
                fundPwd: "결제 비밀번호",
                fundPwd2: "결제 비밀번호를 입력해주세요",
                yzm: "인증코드",
                yzm2: "인증번호를 입력해주세요",
                send: "보내다",
                noyizhi: "비밀번호 입력이 일치하지 않습니다"
            },
            login: {
                tel: "전화 번호",
                tel2: "휴대폰번호를 입력해주세요",
                pwd: "비밀번호",
                pwd2: "비밀번호를 입력해주세요",
                login: "로그인",
                noc: "아직 계정이 없습니다",
                noc2: "지금 등록하세요",
                forgetpwd: "비밀번호를 잊어버려",
                tip1: "안녕하세요",
                tip2: "에 오신 것을 환영합니다",
                lang: "언어 환경설정"
            },
            forget: {
                title: "비밀번호를 잊어버려",
                getcode: "인증 코드 받기",
                code: "인증코드",
                code2: "인증번호를 입력해주세요",
                nav1: "구글 인증",
                nav2: "이메일 인증",
                pwd: "새 비밀번호",
                pwd2: "새로운 비밀번호를 입력해주세요",
                repwd: "비밀번호 확인",
                repwd2: "확인 비밀번호를 입력해주세요",
                email: "이메일",
                email2: "이메일 주소를 입력해주세요"
            },
            index: {
                company: "회사 프로필",
                rule: "규칙",
                invite: "친구 초대",
                hangqing: "실시간 견적",
                friend: "파트너",
                message: "내 메시지",
                message1: "시스템 메시지",
                message2: "미션 메시지",
                message3: "사이트 메시지"
            },
            invite: {
                title: "친구 초대",
                tip1: "친구를 초대하여 큰 선물을 받으세요",
                tip2: "모두가 행복하고 뭔가를 얻을 수 있도록",
                link: "초대링크",
                code: "초대코드"
            },
            team: {
                title: "내 팀",
                data: "팀 데이터",
                pickerAll: "모두",
                picker1: "오늘",
                picker7: "지난 7일",
                picker30: "지난 30일",
                picker60: "지난 60일",
                addPeopel: "새로운 사람들",
                addEarn: "새로운 수익",
                fenxi: "수익 분석",
                shouru1: "업무수입",
                shouru2: "수익 정량화",
                shouru3: "수량화된 소득을 장려하세요",
                guimo: "팀 규모",
                youxiao: "팀워크",
                tdRecharge: "팀 재충전",
                tdCash: "팀 탈퇴",
                lookAll: "모두 보기",
                card1: "총 커미션",
                card2: "누적 충전",
                card3: "누적 출금",
                userNum: "사용자 수",
                yj: "수수료율",
                ljEarn: "누적 수입",
                level1: "레벨 1",
                level2: "레벨 2",
                level3: "레벨 3",
                list: "팀 목록",
                taskNums: "양자화 시간"
            },
            fund: {
                title: "자산",
                title2: "자산 소개",
                all: "총자산",
                wait: "수집되지 않은 보상",
                card1: "유연한 자금",
                card2: "출시 예정 금액",
                card3: "평가판 비용",
                detail: "자산 세부정보",
                lookAll: "모두 보기",
                type1: "모두",
                type2: "소득",
                type3: "지출",
                task: "선교 센터",
                taskTip1: "로봇 정량화",
                taskTip2: "쉽게 부를 늘리세요",
                detailCard1: "양",
                detailCard2: "이름",
                detailCard3: "유형",
                detailCard4: "주문 번호",
                detailCard5: "시간",
                back: "반품"
            },
            task: {
                up: "{level}로 업그레이드하세요",
                up2: "{level}로 업그레이드하면 {money}을(를) 얻을 수 있습니다",
                done: "완전한",
                ing: "진행 중",
                can: "받다",
                inviteNum: "{nums}명을 초대하여 {money} 입금",
                inviteAward: "당신은 {award}을(를) 받게 됩니다"
            },
            mine: {
                icode: "초대코드",
                goOut: "그만두다",
                jiesuo: "이 레벨은 잠금 해제되었습니다.",
                shengji: "지금 업그레이드",
                zichan: "총 자산",
                card1: "지갑 잔액",
                card2: "공개될 자금",
                card3: "누적 수입",
                card4: "누적 출금",
                card5: "팀 규모",
                changyong: "일반적으로 사용되는 기능",
                email: "이메일",
                pwd: "로그인 비밀번호",
                fundPwd: "거래 비밀번호",
                other: "기타 기능",
                help: "도움말 센터",
                userTl: "사용자 약관",
                lang: "언어 전환",
                kefu: "고객 서비스",
                onlineServer: "온라인 고객 서비스",
                qiandao: "로그인",
                lx: "연결하다",
                qiandaoTip: "{num}일 로그인할 때마다 {money}을(를) 받으실 수 있습니다",
                bank: "은행 카드",
                address: "출금주소",
                logoutTip: "정말로 로그아웃하시겠습니까?"
            },
            recharge: {
                amount: "충전금액",
                amount2: "충전금액을 입력해주세요",
                amountO: "기타 충전금액",
                methods: "재충전 방법",
                btn: "지금 재충전하세요",
                record: "충전기록",
                min: "최소 출금 금액",
                desc: "설명하다",
                pingzheng: "충전 바우처",
                pingzheng2: "충전 바우처를 업로드해주세요.",
                address: "충전 주소",
                status0: "지불 예정",
                status1: "완전한",
                status2: "재충전 실패",
                status3: "취소",
                detailCard1: "재충전 방법",
                detailCard2: "상태",
                detailCard3: "주문 번호",
                detailCard4: "시간",
                detailCard5: "양",
                go: "은행 카드 바인딩으로 이동하세요.",
                usdtTip1: "1. 이 주소는 USDT TRC20 프로토콜 충전만 허용합니다. 다른 통화나 다른 프로토콜을 입금하지 마세요.",
                usdtTip2: "2. 각 충전마다 충전주소를 잘 확인해주세요. 각 충전금액은 실제 송금금액을 기준으로 계산됩니다.",
                usdtTip3: "3. 충전은 일반적으로 이체 완료 후 몇 분 이내에 완료됩니다."
            },
            bank: {
                bank: "은행",
                bank2: "은행을 입력해주세요",
                bankAccount: "은행 계좌",
                bankAccount2: "은행계좌를 입력해주세요",
                kaihuren: "계좌 보유자",
                kaihuren2: "계좌주를 입력해주세요",
                tel: "전화 번호",
                tel2: "휴대폰번호를 입력해주세요"
            },
            withdraw: {
                record: "출금기록",
                account: "계좌 출금",
                account2: "출금계좌를 선택해주세요",
                accountRed: "출금계좌 관리",
                amount: "출금금액",
                amount2: "출금금액을 입력해주세요",
                keyong: "사용 가능한 잔액",
                tip: "출금에 관한 참고사항",
                pwd: "결제 비밀번호",
                pwd2: "결제 비밀번호를 입력해주세요",
                min: "최소 출금 금액",
                fee: "취급 수수료",
                status0: "검토 대기 중",
                status1: "거래 완료",
                status2: "거절하다",
                status3: "전송 중",
                status4: "거래 완료"
            },
            account: {
                title: "계정 관리",
                bind: "바인딩으로 이동",
                bind2: "경계",
                address: "주소",
                address2: "주소를 입력해주세요",
                btn: "지금 바인딩",
                tip1: "반드시 실명계좌인지 확인하시기 바랍니다. 실명계좌가 아닐 경우 출금이 실패되며 계좌가 동결됩니다.",
                tip2: "계정을 수정해야 하는 경우 고객 서비스에 문의하세요."
            },
            get: {
                title: "정량화하다",
                card1: "오늘 정량화 가능한 금액",
                card2: "오늘의 수입",
                card3: "오늘의 수량화 가능한 시간",
                card4: "총 수익",
                btn: "자동 정량화",
                liucheng: "패널 프로세스 실시",
                step1: "1. 데이터 수집 진행 중",
                step2: "2. 지속 가능한 개발 전략",
                step3: "3. 백테스팅 진행 중",
                step4: "4. 실행 중",
                step5: "5. 정량화 완료",
                record: "정량적 기록",
                record1: "투자금액",
                record2: "이익",
                record3: "구매 플랫폼",
                record4: "판매 플랫폼",
                record5: "구매 가격",
                record6: "판매 가격"
            },
            vip: {
                title: "회원센터",
                now: "현재 레벨",
                level: "VIP 레벨",
                jiesuo: "이 레벨은 잠금 해제되었습니다.",
                jiesuo2: "이 레벨은 잠금 해제되지 않았습니다.",
                tj: "업그레이드 조건",
                tj1: "유효량",
                tj2: "한 세대에 승진한 사람 수",
                tj3: "사용자 수준 승격",
                qy: "권리와 이익",
                qy1: "수익 비율",
                qy2: "최소 수량",
                qy3: "최대 수량",
                qy4: "일일 정량 횟수"
            },
            safe: {
                title: "보안 관리",
                login_pwd: "로그인 비밀번호",
                fund_pwd: "결제 비밀번호",
                safe: "안전",
                edit_pwd: "로그인 비밀번호 변경",
                edit_fundpwd: "결제 비밀번호 변경",
                phone: "전화번호",
                getcode: "인증 코드 받기",
                code: "인증코드",
                icode: "인증번호를 입력해주세요",
                newpwd: "새 비밀번호",
                inewpwd: "새 비밀번호",
                renewpwd: "새 비밀번호 확인",
                renewpwd2: "새로운 비밀번호를 입력해주세요",
                oldpwd: "원래 비밀번호",
                oldpwd2: "원래 비밀번호를 입력하세요",
                error: "데이터를 입력해주세요",
                hold: "새 비밀번호가 일치하는지 확인하세요."
            },
            keyboard: {
                ifundPwd: "결제 비밀번호를 입력하세요",
                verifying: "결제 비밀번호 확인"
            },
            google: {
                step1: "첫 번째 단계",
                step2: "2단계",
                step3: "3단계",
                tip1: "모바일 앱 스토어에서 Google OTP를 다운로드하세요.",
                tip2: "Google OTP를 통해 바인딩하려면 QR 코드를 스캔하세요.",
                code: "구글 인증코드를 입력해주세요",
                tip3: "Google OTP를 바인딩하면 계정 보안을 위한 또 다른 보안 계층이 제공됩니다.",
                renzheng: "인증됨"
            }
        }
    },
    "7daf": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "Saqlash",
                balance: "Balans",
                nodata: "Boshqa maʼlumot yoʻq",
                logout: "Chiqish muvaffaqiyatli",
                confirm: "Tasdiqlang",
                cancel: "Bekor qilish",
                submit: "Yuborish",
                recharge: "Depozit",
                withdraw: "Chiqib ketish",
                desc: "Ko'rsatmalar",
                tip: "Issiq eslatma",
                tipEmail: "Hisobingiz xavfsizligini yanada himoya qilish uchun elektron pochta manzilingizni bog'lang.",
                tipEmail2: "Elektron pochta manzilingizni bog'lash hisobingiz uchun boshqa xavfsizlik darajasini ta'minlaydi."
            },
            tabbar: {
                t1: "Uy",
                t2: "Jamoa",
                t3: "Oling",
                t4: "Aktivlar",
                t5: "mening"
            },
            register: {
                title: "Roʻyxatdan oʻtish",
                username: "Foydalanuvchi nomi",
                username2: "Iltimos, foydalanuvchi nomini kiriting",
                tel: "Mobil raqam",
                tel2: "Iltimos, mobil raqamni kiriting",
                pwd: "Parol",
                pwd2: "Iltimos, parolni kiriting",
                repwd: "Parolni tasdiqlang",
                repwd2: "Iltimos, tasdiqlash parolini kiriting",
                icode: "Taklif kodi",
                icode2: "Iltimos, taklif kodini kiriting",
                has: "Hisobingiz bormi?",
                has2: "Hozir tizimga kiring",
                email: "Elektron pochta",
                email2: "Iltimos, elektron pochta manzilini kiriting",
                fundPwd: "To'lov paroli",
                fundPwd2: "Iltimos, to'lov parolini kiriting",
                yzm: "Tasdiq kodi",
                yzm2: "Tasdiqlash kodini kiriting",
                send: "Yuborish",
                noyizhi: "Parol mos emas"
            },
            login: {
                tel: "Mobil raqam",
                tel2: "Iltimos, mobil raqamni kiriting",
                pwd: "Parol",
                pwd2: "Iltimos, parolni kiriting",
                login: "Tizimga kirish",
                noc: "Hali hisobingiz yo'qmi?",
                noc2: "Hozir roʻyxatdan oʻting",
                forgetpwd: "Parolni unutdingiz",
                tip1: "Salom",
                tip2: "Xush kelibsiz",
                lang: "Til afzalligi"
            },
            forget: {
                title: "Parolni unutdingiz",
                getcode: "Tasdiqlash kodini oling",
                code: "Tasdiq kodi",
                code2: "Tasdiqlash kodini kiriting",
                nav1: "Google tekshiruvi",
                nav2: "Elektron pochtani tekshirish",
                pwd: "Yangi parol",
                pwd2: "Iltimos, yangi parolni kiriting",
                repwd: "Parolni tasdiqlang",
                repwd2: "Iltimos, tasdiqlash parolini kiriting",
                email: "E-pochta manzili",
                email2: "Iltimos, elektron pochta manzilini kiriting"
            },
            index: {
                company: "Kompaniya profili",
                rule: "Qoidalar",
                invite: "Do'stlarni taklif qiling",
                hangqing: "Haqiqiy vaqtda bozor ma'lumotlari",
                friend: "Hamkorlar",
                message: "Mening xabarlarim",
                message1: "Tizim xabarlari",
                message2: "Vazifa xabarlari",
                message3: "Ichki xabarlar"
            },
            invite: {
                title: "Do'stlarni taklif qiling",
                tip1: "Do'stlaringizni taklif qiling va katta sovrinlarni yutib oling",
                tip2: "Hammani xursand qiling va mukofotlang",
                link: "Taklif havolasi",
                code: "Taklif kodi"
            },
            team: {
                title: "Mening jamoam",
                data: "Jamoa ma'lumotlari",
                pickerAll: "Hammasi",
                picker1: "Bugun",
                picker7: "Oxirgi 7 kun",
                picker30: "Oxirgi 30 kun",
                picker60: "Oxirgi 60 kun",
                addPeopel: "Yangi a'zolar",
                addEarn: "Yangi daromad",
                fenxi: "Daromad tahlili",
                shouru1: "Vazifa daromadi",
                shouru2: "Miqdoriy daromad",
                shouru3: "Rag'batlantirish miqdoriy daromad",
                guimo: "Jamoa hajmi",
                youxiao: "Samarali jamoa",
                tdRecharge: "Jamoa depoziti",
                tdCash: "Jamoani tark etish",
                lookAll: "Hammasini ko‘rish",
                card1: "Jami komissiya",
                card2: "Kümülatif depozitlar",
                card3: "Kümülatif yechib olish",
                userNum: "Foydalanuvchilar soni",
                yj: "Komissiya ulushi",
                ljEarn: "Kümülatif daromad",
                level1: "1-darajali",
                level2: "2-daraja",
                level3: "3-daraja",
                list: "Jamoa ro'yxati",
                taskNums: "Miqdorni aniqlash vaqtlari"
            },
            fund: {
                title: "Aktivlar",
                title2: "Aktivlar bilan tanishish",
                all: "Jami aktivlar",
                wait: "Talab qilinadigan mukofotlar",
                card1: "Moslashuvchan fondlar",
                card2: "Chiqarilishi kerak bo'lgan miqdor",
                card3: "Sinov fondlari",
                detail: "Aktiv tafsilotlari",
                lookAll: "Hammasini ko‘rish",
                type1: "Hammasi",
                type2: "Daromad",
                type3: "Xarajatlar",
                task: "Vazifalar markazi",
                taskTip1: "Robot miqdorini aniqlash",
                taskTip2: "Osonlik bilan boylik o'sishiga erishing",
                detailCard1: "Miqdori",
                detailCard2: "Ism",
                detailCard3: "Turi",
                detailCard4: "Buyurtma raqami",
                detailCard5: "Vaqt",
                back: "Qaytish"
            },
            task: {
                up: "{level} ga yangilang",
                up2: "{money} olish uchun {level} ga yangilang",
                done: "Bajarildi",
                ing: "Jarayonda",
                can: "Talab",
                inviteNum: "{money} omonat qilgan {nums} kishini taklif qiling",
                inviteAward: "Siz {award} mukofotini olasiz"
            },
            mine: {
                icode: "Taklif kodi",
                goOut: "Chiqish",
                jiesuo: "Bu daraja qulfdan chiqarilgan",
                shengji: "Hozir yangilang",
                zichan: "Jami aktivlar",
                card1: "Hamyon balansi",
                card2: "Kutilayotgan reliz fondlari",
                card3: "Kümülatif daromad",
                card4: "Kümülatif yechib olish",
                card5: "Jamoa a'zolari",
                changyong: "Tez-tez ishlatiladigan funksiyalar",
                email: "E-pochta manzili",
                pwd: "Kirish paroli",
                fundPwd: "Tranzaksiya paroli",
                other: "Boshqa funksiyalar",
                help: "Yordam markazi",
                userTl: "Foydalanuvchi shartnomasi",
                lang: "Tilni almashtirish",
                kefu: "Mijozlarga xizmat ko'rsatish",
                onlineServer: "Onlayn mijozlarga xizmat ko'rsatish",
                qiandao: "Belgilanish",
                lx: "Aloqa",
                qiandaoTip: "Har {num} kun uchun {money} ishlang",
                bank: "Debet karta",
                address: "Pul o'tkazish manzili",
                logoutTip: "Haqiqatan ham tizimdan chiqish/kirishni xohlaysizmi?"
            },
            recharge: {
                amount: "Saqlangan qiymat miqdori",
                amount2: "Iltimos, saqlangan qiymat miqdorini kiriting",
                amountO: "Boshqa saqlangan qiymat miqdori",
                methods: "Saqlash usuli",
                btn: "Darhol saqlangan qiymat",
                record: "Saqlash tarixi",
                min: "Minimal yechib olish miqdori",
                desc: "Ko'rsatmalar",
                pingzheng: "Saqlash vaucheri",
                pingzheng2: "Iltimos, saqlangan qiymat vaucherini yuklang",
                address: "Saqlash manzili",
                status0: "Kutilayotgan toʻlov",
                status1: "Bajarildi",
                status2: "Saqlash amalga oshmadi",
                status3: "Bekor qilingan",
                detailCard1: "Saqlash usuli",
                detailCard2: "Status",
                detailCard3: "Buyurtma raqami",
                detailCard4: "Vaqt",
                detailCard5: "Miqdori",
                go: "Iltimos, bank kartangizni bog'lash uchun o'ting",
                usdtTip1: "1. Bu manzil faqat USDT 1. TRC20 protokolini toʻldirishni qabul qiladi, iltimos, boshqa valyutalarni yoki boshqa protokollarni depozitga qoʻymang.",
                usdtTip2: "2. Iltimos, har bir to'ldirishdan oldin to'ldirish manzilini diqqat bilan tekshiring. To'ldirish miqdori haqiqiy o'tkazilgan summaga qarab hisoblanadi.",
                usdtTip3: "3. To'ldirish odatda o'tkazma tugagandan so'ng bir necha daqiqa ichida keladi."
            },
            bank: {
                bank: "Bank",
                bank2: "Iltimos, bankka kiring",
                bankAccount: "Bank hisobi",
                bankAccount2: "Bank hisobini kiriting",
                kaihuren: "Hisob egasi",
                kaihuren2: "Iltimos, hisob egasini kiriting",
                tel: "Mobil raqam",
                tel2: "Iltimos, mobil raqamni kiriting"
            },
            withdraw: {
                record: "Olib tashlash tarixi",
                account: "Pul olish hisobi",
                account2: "Iltimos, yechib olish hisobini tanlang",
                accountRed: "Hisobni yechib olishni boshqarish",
                amount: "Yechib olish miqdori",
                amount2: "Iltimos, yechib olish miqdorini kiriting",
                keyong: "Mavjud balans",
                tip: "Olib tashlash bo'yicha ehtiyot choralari",
                pwd: "To'lov uchun parol",
                pwd2: "Iltimos, toʻlov parolingizni kiriting",
                min: "Minimal yechib olish miqdori",
                fee: "Tranzaksiya to'lovi",
                status0: "Ko‘rib chiqish kutilmoqda",
                status1: "Tranzaksiya tugallandi",
                status2: "Rad etilgan",
                status3: "O‘tkazilmoqda",
                status4: "Tranzaksiya tugallandi"
            },
            account: {
                title: "Hisobni boshqarish",
                bind: "Hozir bog'lash",
                bind2: "Bog'langan",
                address: "Manzil",
                address2: "Iltimos, manzilni kiriting",
                btn: "Hozir bog'lash",
                tip1: "Iltimos, hisobingiz haqiqiy ismingiz ostida ro'yxatdan o'tganligiga ishonch hosil qiling. Bu bajarilmasa, pul yechib boʻlmaydi va hisob muzlatiladi.",
                tip2: "Agar hisobingizni o'zgartirish kerak bo'lsa, mijozlarga xizmat ko'rsatish bilan bog'laning."
            },
            get: {
                title: "Miqdorni aniqlash",
                card1: "Bugungi hisoblangan miqdor",
                card2: "Bugungi daromad",
                card3: "Bugungi kunning miqdoriy vaqtlari",
                card4: "Jami daromad",
                btn: "Avtomatik miqdorni aniqlash",
                liucheng: "Panel jarayoni",
                step1: "1. Ma'lumotlarni yig'ish davom etmoqda",
                step2: "2. Barqaror rivojlanish strategiyasi",
                step3: "3. Backtesting davom etmoqda",
                step4: "4. Amalga oshirish",
                step5: "5. Miqdori aniqlandi",
                record: "Miqdorni aniqlash yozuvi",
                record1: "Investitsiyalar miqdori",
                record2: "Foyda",
                record3: "Sotib olish platformasi",
                record4: "Sotish platformasi",
                record5: "Sotib olish narxi",
                record6: "Sotish narxi"
            },
            vip: {
                title: "A'zolar markazi",
                now: "Joriy daraja",
                level: "VIP darajasi",
                jiesuo: "Ochilgan daraja",
                jiesuo2: "Ochilgan daraja",
                tj: "Yangilash shartlari",
                tj1: "Yaroqli miqdor",
                tj2: "Birinchi avlod promouterlari soni",
                tj3: "Taqdim etilgan foydalanuvchi darajasi",
                qy: "Foyda",
                qy1: "Daromad ulushi",
                qy2: "Minimal miqdor miqdori",
                qy3: "Maksimal miqdor miqdori",
                qy4: "Kundalik miqdorni aniqlash chastotasi"
            },
            safe: {
                title: "Xavfsizlik boshqaruvi",
                login_pwd: "Kirish paroli",
                fund_pwd: "To'lov paroli",
                safe: "Xavfsizlik",
                edit_pwd: "Kirish parolini o'zgartiring",
                edit_fundpwd: "To'lov parolini o'zgartirish",
                phone: "Telefon raqami",
                getcode: "Tasdiqlash kodini oling",
                code: "Tasdiq kodi",
                icode: "Tasdiqlash kodini kiriting",
                newpwd: "Yangi parol",
                inewpwd: "Yangi parol",
                renewpwd: "Yangi parolni tasdiqlang",
                renewpwd2: "Iltimos, yangi parolni kiriting",
                oldpwd: "Asl parol",
                oldpwd2: "Asl parolni kiriting",
                error: "Iltimos, maʼlumotlarni kiriting",
                hold: "Iltimos, yangi parol mosligini tasdiqlang"
            },
            keyboard: {
                ifundPwd: "To'lov parolini kiriting",
                verifying: "Toʻlov parolini tasdiqlang"
            },
            google: {
                step1: "1-qadam",
                step2: "2-qadam",
                step3: "3-qadam",
                tip1: "Iltimos, Google Play xizmatlarini Authenticator mobil ilovalar doʻkoningizdan yuklab oling",
                tip2: "QR kodini skanerlash orqali hisobingizni Google Authenticator orqali bog'lash",
                code: "Google tasdiqlash kodini kiriting",
                tip3: "Hisobingizni Google Authenticator bilan bog'lash qo'shimcha xavfsizlik darajasini ta'minlaydi.",
                renzheng: "Tasdiqlangan"
            }
        }
    },
    "7e6f": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "บันทึก",
                balance: "สมดุล",
                nodata: "ไม่มีข้อมูลอีกต่อไป",
                logout: "ออกเรียบร้อยแล้ว",
                confirm: "ยืนยัน",
                cancel: "ยกเลิก",
                submit: "ส่ง",
                recharge: "เติมเงิน",
                withdraw: "ถอนเงินสด",
                desc: "แสดงให้เห็น",
                tip: "เคล็ดลับดีๆ",
                tipEmail: "เพื่อปกป้องความปลอดภัยของบัญชีของคุณเพิ่มเติม โปรดผูกที่อยู่อีเมลของคุณ",
                tipEmail2: "การผูกที่อยู่อีเมลของคุณเป็นการรับประกันความปลอดภัยอีกประการหนึ่งสำหรับความปลอดภัยของบัญชีของคุณ"
            },
            tabbar: {
                t1: "บ้าน",
                t2: "ทีม",
                t3: "รับ",
                t4: "สินทรัพย์",
                t5: "ของฉัน"
            },
            register: {
                title: "ลงทะเบียน",
                username: "ชื่อผู้ใช้",
                username2: "กรุณากรอกชื่อผู้ใช้",
                tel: "หมายเลขโทรศัพท์",
                tel2: "กรุณากรอกหมายเลขโทรศัพท์มือถือ",
                pwd: "รหัสผ่าน",
                pwd2: "กรุณากรอกรหัสผ่าน",
                repwd: "ยืนยันรหัสผ่าน",
                repwd2: "กรุณากรอกรหัสผ่านยืนยัน",
                icode: "รหัสคำเชิญ",
                icode2: "กรุณากรอกรหัสเชิญ",
                has: "มีบัญชีอยู่แล้ว",
                has2: "เข้าสู่ระบบตอนนี้",
                email: "จดหมาย",
                email2: "กรุณากรอกอีเมล์ของคุณ",
                fundPwd: "รหัสผ่านการชำระเงิน",
                fundPwd2: "กรุณากรอกรหัสผ่านการชำระเงิน",
                yzm: "รหัสยืนยัน",
                yzm2: "กรุณากรอกรหัสยืนยัน",
                send: "ส่ง",
                noyizhi: "การป้อนรหัสผ่านไม่สอดคล้องกัน"
            },
            login: {
                tel: "หมายเลขโทรศัพท์",
                tel2: "กรุณากรอกหมายเลขโทรศัพท์มือถือ",
                pwd: "รหัสผ่าน",
                pwd2: "กรุณากรอกรหัสผ่าน",
                login: "เข้าสู่ระบบ",
                noc: "ยังไม่มีบัญชี",
                noc2: "ลงทะเบียนตอนนี้",
                forgetpwd: "ลืมรหัสผ่าน",
                tip1: "สวัสดี",
                tip2: "ยินดีต้อนรับสู่",
                lang: "การตั้งค่าภาษา"
            },
            forget: {
                title: "ลืมรหัสผ่าน",
                getcode: "รับรหัสยืนยัน",
                code: "รหัสยืนยัน",
                code2: "กรุณากรอกรหัสยืนยัน",
                nav1: "การยืนยันของ Google",
                nav2: "การยืนยันอีเมล",
                pwd: "รหัสผ่านใหม่",
                pwd2: "กรุณากรอกรหัสผ่านใหม่",
                repwd: "ยืนยันรหัสผ่าน",
                repwd2: "กรุณากรอกรหัสผ่านยืนยัน",
                email: "อีเมล",
                email2: "กรุณากรอกที่อยู่อีเมลของคุณ"
            },
            index: {
                company: "ประวัติบริษัท",
                rule: "กฎ",
                invite: "ชวนเพื่อน",
                hangqing: "ราคาแบบเรียลไทม์",
                friend: "พันธมิตร",
                message: "ข้อความของฉัน",
                message1: "ข้อความของระบบ",
                message2: "ข้อความภารกิจ",
                message3: "ข้อความของไซต์"
            },
            invite: {
                title: "ชวนเพื่อน",
                tip1: "ชวนเพื่อนมาลุ้นของขวัญชิ้นใหญ่",
                tip2: "ให้ทุกคนรู้สึกมีความสุขและได้รับบางสิ่งบางอย่าง",
                link: "ลิงค์คำเชิญ",
                code: "รหัสคำเชิญ"
            },
            team: {
                title: "ทีมของฉัน",
                data: "ข้อมูลทีม",
                pickerAll: "ทั้งหมด",
                picker1: "วันนี้",
                picker7: "7 วันที่ผ่านมา",
                picker30: "30 วันที่ผ่านมา",
                picker60: "60 วันที่ผ่านมา",
                addPeopel: "คนใหม่",
                addEarn: "รายได้ใหม่",
                fenxi: "การวิเคราะห์รายได้",
                shouru1: "รายได้จากงาน",
                shouru2: "หารายได้เป็นจำนวน",
                shouru3: "ส่งเสริมรายได้เชิงปริมาณ",
                guimo: "ขนาดทีม",
                youxiao: "การทำงานเป็นทีม",
                tdRecharge: "เติมเงินทีม",
                tdCash: "การถอนตัวของทีม",
                lookAll: "ดูทั้งหมด",
                card1: "ค่าคอมมิชชั่นทั้งหมด",
                card2: "การเติมเงินสะสม",
                card3: "การถอนเงินสะสม",
                userNum: "จำนวนผู้ใช้",
                yj: "เปอร์เซ็นต์ค่าคอมมิชชัน",
                ljEarn: "รายได้สะสม",
                level1: "ระดับ 1",
                level2: "ระดับ 2",
                level3: "ระดับ 3",
                list: "รายชื่อทีม",
                taskNums: "ครั้งการหาปริมาณ"
            },
            fund: {
                title: "สินทรัพย์",
                title2: "การแนะนำสินทรัพย์",
                all: "สินทรัพย์รวม",
                wait: "ของรางวัลที่จะได้รับ",
                card1: "กองทุนที่มีความยืดหยุ่น",
                card2: "จำนวนเงินที่จะออก",
                card3: "ค่าธรรมเนียมการทดลอง",
                detail: "รายละเอียดสินทรัพย์",
                lookAll: "ดูทั้งหมด",
                type1: "ทั้งหมด",
                type2: "รายได้",
                type3: "ค่าใช้จ่าย",
                task: "ศูนย์ภารกิจ",
                taskTip1: "การหาปริมาณหุ่นยนต์",
                taskTip2: "เพิ่มความมั่งคั่งได้อย่างง่ายดาย",
                detailCard1: "จำนวน",
                detailCard2: "ชื่อ",
                detailCard3: "พิมพ์",
                detailCard4: "หมายเลขคำสั่งซื้อ",
                detailCard5: "เวลา",
                back: "กลับ"
            },
            task: {
                up: "อัปเกรดเป็น {level}",
                up2: "อัปเกรดเป็น {level} แล้วคุณจะได้รับ {money}",
                done: "สมบูรณ์",
                ing: "อยู่ระหว่างดำเนินการ",
                can: "รับ",
                inviteNum: "เชิญผู้คน {nums} คนให้ฝากเงิน {money}",
                inviteAward: "คุณจะได้รับ {award}"
            },
            mine: {
                icode: "รหัสคำเชิญ",
                goOut: "ล้มเลิก",
                jiesuo: "ระดับนี้ถูกปลดล็อคแล้ว",
                shengji: "อัพเกรดตอนนี้",
                zichan: "สินทรัพย์รวม",
                card1: "ยอดคงเหลือในกระเป๋าสตางค์",
                card2: "กองทุนที่จะออก",
                card3: "รายได้สะสม",
                card4: "การถอนเงินสะสม",
                card5: "ขนาดทีม",
                changyong: "ฟังก์ชั่นที่ใช้กันทั่วไป",
                email: "อีเมล",
                pwd: "รหัสผ่านเข้าสู่ระบบ",
                fundPwd: "รหัสผ่านการทำธุรกรรม",
                other: "ฟังก์ชั่นอื่นๆ",
                help: "ศูนย์ช่วยเหลือ",
                userTl: "ข้อกำหนดผู้ใช้",
                lang: "เปลี่ยนภาษา",
                kefu: "การบริการลูกค้า",
                onlineServer: "บริการลูกค้าออนไลน์",
                qiandao: "เข้าสู่ระบบ",
                lx: "เชื่อมต่อ",
                qiandaoTip: "ทุกครั้งที่คุณลงชื่อเข้าใช้ {num} วัน คุณจะได้รับ {money}",
                bank: "บัตรธนาคาร",
                address: "ที่อยู่การถอนเงิน",
                logoutTip: "คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?"
            },
            recharge: {
                amount: "จำนวนการเติมเงิน",
                amount2: "กรุณากรอกจำนวนเงินที่เติม",
                amountO: "ยอดเติมเงินอื่นๆ",
                methods: "วิธีการเติมเงิน",
                btn: "เติมเงินตอนนี้",
                record: "บันทึกการเติมเงิน",
                min: "จำนวนถอนขั้นต่ำ",
                desc: "แสดงให้เห็น",
                pingzheng: "บัตรกำนัลเติมเงิน",
                pingzheng2: "กรุณาอัพโหลดบัตรกำนัลเติมเงิน",
                address: "ที่อยู่เติมเงิน",
                status0: "ที่จะต้องจ่าย",
                status1: "สมบูรณ์",
                status2: "การเติมเงินล้มเหลว",
                status3: "ยกเลิก",
                detailCard1: "วิธีการเติมเงิน",
                detailCard2: "สถานะ",
                detailCard3: "หมายเลขคำสั่งซื้อ",
                detailCard4: "เวลา",
                detailCard5: "จำนวน",
                go: "กรุณาไปผูกบัตรธนาคาร",
                usdtTip1: "1. ที่อยู่นี้ยอมรับเฉพาะการเติมเงินตามโปรโตคอล USDT TRC20 เท่านั้น โปรดอย่าฝากเงินในสกุลเงินอื่นหรือโปรโตคอลอื่น",
                usdtTip2: "2. โปรดตรวจสอบที่อยู่เติมเงินสำหรับการเติมเงินแต่ละครั้งอย่างรอบคอบ จำนวนการเติมเงินแต่ละครั้งจะคำนวณตามจำนวนเงินที่โอนจริง",
                usdtTip3: "3. โดยปกติแล้วจะถึงการเติมเงินภายในไม่กี่นาทีหลังจากเสร็จสิ้นการโอน"
            },
            bank: {
                bank: "ธนาคาร",
                bank2: "กรุณากรอกธนาคาร",
                bankAccount: "บัญชีธนาคาร",
                bankAccount2: "กรุณากรอกบัญชีธนาคาร",
                kaihuren: "เจ้าของบัญชี",
                kaihuren2: "กรุณากรอกชื่อเจ้าของบัญชี",
                tel: "หมายเลขโทรศัพท์",
                tel2: "กรุณากรอกหมายเลขโทรศัพท์มือถือ"
            },
            withdraw: {
                record: "บันทึกการถอนเงิน",
                account: "ถอนบัญชี",
                account2: "กรุณาเลือกบัญชีถอนเงิน",
                accountRed: "การจัดการบัญชีถอนเงิน",
                amount: "ถอนจำนวนเงิน",
                amount2: "กรุณากรอกจำนวนเงินที่ถอน",
                keyong: "ยอดคงเหลือที่มีอยู่",
                tip: "หมายเหตุเกี่ยวกับการถอนเงิน",
                pwd: "รหัสผ่านการชำระเงิน",
                pwd2: "กรุณากรอกรหัสผ่านการชำระเงิน",
                min: "จำนวนถอนขั้นต่ำ",
                fee: "ค่าธรรมเนียมการจัดการ",
                status0: "รอการตรวจสอบ",
                status1: "การทำธุรกรรมเสร็จสมบูรณ์",
                status2: "ปฏิเสธ",
                status3: "กำลังโอน",
                status4: "การทำธุรกรรมเสร็จสมบูรณ์"
            },
            account: {
                title: "การจัดการบัญชี",
                bind: "ไปที่การผูก",
                bind2: "ผูกพัน",
                address: "ที่อยู่",
                address2: "กรุณากรอกที่อยู่",
                btn: "ผูกตอนนี้",
                tip1: "โปรดตรวจสอบให้แน่ใจว่าบัญชีของคุณเป็นบัญชีชื่อจริงของคุณ หากไม่ใช่บัญชีชื่อจริงของคุณ การถอนเงินจะล้มเหลวและบัญชีจะถูกระงับ",
                tip2: "หากคุณต้องการแก้ไขบัญชีของคุณ โปรดติดต่อฝ่ายบริการลูกค้า"
            },
            get: {
                title: "ปริมาณ",
                card1: "ปริมาณที่นับได้ในวันนี้",
                card2: "รายได้วันนี้",
                card3: "เวลาที่นับได้ในวันนี้",
                card4: "รายได้ทั้งหมด",
                btn: "การหาปริมาณอัตโนมัติ",
                liucheng: "ดำเนินกระบวนการแผง",
                step1: "1. อยู่ระหว่างการรวบรวมข้อมูล",
                step2: "2. กลยุทธ์การพัฒนาอย่างยั่งยืน",
                step3: "3. การทดสอบย้อนหลังอยู่ระหว่างดำเนินการ",
                step4: "4. ดำเนินการ",
                step5: "5. การวัดปริมาณเสร็จสมบูรณ์",
                record: "บันทึกเชิงปริมาณ",
                record1: "จำนวนเงินลงทุน",
                record2: "กำไร",
                record3: "แพลตฟอร์มการซื้อ",
                record4: "ขายแพลตฟอร์ม",
                record5: "ราคาซื้อ",
                record6: "ราคาขาย"
            },
            vip: {
                title: "ศูนย์สมาชิก",
                now: "ระดับปัจจุบัน",
                level: "ระดับวีไอพี",
                jiesuo: "ระดับนี้ถูกปลดล็อคแล้ว",
                jiesuo2: "ระดับนี้ไม่ได้ปลดล็อค",
                tj: "เงื่อนไขการอัพเกรด",
                tj1: "ปริมาณที่มีประสิทธิภาพ",
                tj2: "จำนวนผู้ได้รับการเลื่อนตำแหน่งในรุ่นเดียว",
                tj3: "ส่งเสริมระดับผู้ใช้",
                qy: "สิทธิและผลประโยชน์",
                qy1: "เปอร์เซ็นต์รายได้",
                qy2: "ปริมาณขั้นต่ำ",
                qy3: "จำนวนปริมาณสูงสุด",
                qy4: "จำนวนปริมาณต่อวัน"
            },
            safe: {
                title: "การจัดการความปลอดภัย",
                login_pwd: "รหัสผ่านเข้าสู่ระบบ",
                fund_pwd: "รหัสผ่านการชำระเงิน",
                safe: "ความปลอดภัย",
                edit_pwd: "เปลี่ยนรหัสผ่านเข้าสู่ระบบ",
                edit_fundpwd: "เปลี่ยนรหัสผ่านการชำระเงิน",
                phone: "หมายเลขโทรศัพท์",
                getcode: "รับรหัสยืนยัน",
                code: "รหัสยืนยัน",
                icode: "กรุณากรอกรหัสยืนยัน",
                newpwd: "รหัสผ่านใหม่",
                inewpwd: "รหัสผ่านใหม่",
                renewpwd: "ยืนยันรหัสผ่านใหม่",
                renewpwd2: "กรุณากรอกรหัสผ่านใหม่",
                oldpwd: "รหัสผ่านเดิม",
                oldpwd2: "ป้อนรหัสผ่านเดิม",
                error: "กรุณากรอกข้อมูล",
                hold: "โปรดยืนยันว่ารหัสผ่านใหม่สอดคล้องกัน"
            },
            keyboard: {
                ifundPwd: "ป้อนรหัสผ่านการชำระเงิน",
                verifying: "ตรวจสอบรหัสผ่านการชำระเงิน"
            },
            google: {
                step1: "ขั้นตอนแรก",
                step2: "ขั้นตอนที่ 2",
                step3: "ขั้นตอนที่ 3",
                tip1: "โปรดดาวน์โหลด Google Authenticator จาก App Store บนมือถือ",
                tip2: "สแกนโค้ด QR เพื่อผูกผ่าน Google Authenticator",
                code: "กรุณากรอกรหัสยืนยันของ Google",
                tip3: "การผูก Google Authenticator ช่วยเพิ่มความปลอดภัยอีกชั้นหนึ่งสำหรับการรักษาความปลอดภัยบัญชีของคุณ",
                renzheng: "ได้รับการรับรอง"
            }
        }
    },
    8277: function(e, a, n) {
        "use strict";
        n("6a54");
        var i = n("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        var t = i(n("9b8e"))
          , o = i(n("8f59"))
          , r = i(n("ae61"));
        t.default.use(o.default);
        var d = new o.default.Store({
            state: {
                userInfo: uni.getStorageSync("userInfo") ? uni.getStorageSync("userInfo") : {
                    id: "",
                    username: "",
                    account: {
                        money: "0.00",
                        profit_money: "0.00"
                    }
                },
                walletInfo: uni.getStorageSync("walletInfo") ? uni.getStorageSync("walletInfo") : {
                    TeamNums: 0,
                    dayOrderEarn: 0,
                    dayTeamNums: 0,
                    dayTotalEarn: 0,
                    orderEarn: 0,
                    totalEarn: 0,
                    wallet_balance: 0
                }
            },
            mutations: {
                muUserInfo: function(e, a) {
                    e.userInfo = a
                },
                muWalletInfo: function(e, a) {
                    e.walletInfo = a
                }
            },
            actions: {
                actUserInfo: function(e) {
                    var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (null == a)
                        return uni.setStorageSync("userInfo", {}),
                        e.commit("muUserInfo", null);
                    r.default.http({
                        url: "/api/user/index",
                        method: "POST"
                    }).then((function(a) {
                        1 == a.code && (e.commit("muUserInfo", a.data),
                        uni.setStorageSync("userInfo", a.data))
                    }
                    ))
                },
                actWalletInfo: function(e) {
                    r.default.http({
                        url: "/api/member/walletAccount",
                        method: "POST"
                    }).then((function(a) {
                        e.commit("muWalletInfo", a.data),
                        uni.setStorageSync("walletInfo", a.data)
                    }
                    ))
                }
            },
            getters: {
                userInfo: function(e) {
                    return e.userInfo
                }
            }
        })
          , s = d;
        a.default = s
    },
    8879: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "jimat",
                balance: "Baki",
                nodata: "tiada lagi data",
                logout: "Keluar dengan jayanya",
                confirm: "mengesahkan",
                cancel: "Batal",
                submit: "serahkan",
                recharge: "tambah nilai",
                withdraw: "Keluarkan wang tunai",
                desc: "menggambarkan",
                tip: "Petua yang baik",
                tipEmail: "Untuk terus melindungi keselamatan akaun anda, sila ikat alamat e-mel anda.",
                tipEmail2: "Mengikat alamat e-mel anda menyediakan satu lagi jaminan keselamatan untuk keselamatan akaun anda."
            },
            tabbar: {
                t1: "Rumah",
                t2: "Pasukan",
                t3: "Dapatkan",
                t4: "Aset",
                t5: "Saya"
            },
            register: {
                title: "mendaftar",
                username: "nama pengguna",
                username2: "Sila masukkan nama pengguna",
                tel: "Nombor telefon",
                tel2: "Sila masukkan nombor telefon bimbit",
                pwd: "kata laluan",
                pwd2: "Sila masukkan kata laluan",
                repwd: "Sahkan Kata Laluan",
                repwd2: "Sila masukkan kata laluan pengesahan",
                icode: "Kod jemputan",
                icode2: "Sila masukkan kod jemputan",
                has: "Sudah mempunyai akaun",
                has2: "Log masuk sekarang",
                email: "Mel",
                email2: "Sila masukkan e-mel anda",
                fundPwd: "Kata laluan pembayaran",
                fundPwd2: "Sila masukkan kata laluan pembayaran",
                yzm: "Kod pengesahan",
                yzm2: "Sila masukkan kod pengesahan",
                send: "hantar",
                noyizhi: "Input kata laluan tidak konsisten"
            },
            login: {
                tel: "Nombor telefon",
                tel2: "Sila masukkan nombor telefon bimbit",
                pwd: "kata laluan",
                pwd2: "Sila masukkan kata laluan",
                login: "Log masuk",
                noc: "Tiada akaun lagi",
                noc2: "Daftar sekarang",
                forgetpwd: "lupa kata laluan",
                tip1: "Hello",
                tip2: "selamat datang ke",
                lang: "Keutamaan bahasa"
            },
            forget: {
                title: "lupa kata laluan",
                getcode: "Dapatkan kod pengesahan",
                code: "Kod pengesahan",
                code2: "Sila masukkan kod pengesahan",
                nav1: "Pengesahan Google",
                nav2: "Pengesahan e-mel",
                pwd: "Kata Laluan Baharu",
                pwd2: "Sila masukkan kata laluan baharu",
                repwd: "Sahkan Kata Laluan",
                repwd2: "Sila masukkan kata laluan pengesahan",
                email: "E-mel",
                email2: "Sila masukkan alamat e-mel anda"
            },
            index: {
                company: "Profil Syarikat",
                rule: "peraturan",
                invite: "Ajak kawan-kawan",
                hangqing: "Sebut harga masa nyata",
                friend: "rakan kongsi",
                message: "mesej saya",
                message1: "Mesej sistem",
                message2: "mesej misi",
                message3: "Mesej tapak"
            },
            invite: {
                title: "Ajak kawan-kawan",
                tip1: "Ajak kawan-kawan memenangi hadiah besar",
                tip2: "Biarkan semua orang berasa gembira dan memperoleh sesuatu",
                link: "Pautan jemputan",
                code: "Kod jemputan"
            },
            team: {
                title: "pasukan saya",
                data: "Data pasukan",
                pickerAll: "semua",
                picker1: "hari ini",
                picker7: "7 hari lepas",
                picker30: "30 hari lepas",
                picker60: "60 hari lepas",
                addPeopel: "orang baru",
                addEarn: "Hasil baru",
                fenxi: "analisis hasil",
                shouru1: "Pendapatan tugas",
                shouru2: "Kirakan hasil",
                shouru3: "Menggalakkan pendapatan berkuantiti",
                guimo: "Saiz pasukan",
                youxiao: "Kerja pasukan",
                tdRecharge: "Isi semula pasukan",
                tdCash: "Penarikan diri pasukan",
                lookAll: "Lihat semua",
                card1: "jumlah komisen",
                card2: "Caj semula terkumpul",
                card3: "Pengeluaran terkumpul",
                userNum: "bilangan pengguna",
                yj: "peratusan komisen",
                ljEarn: "Pendapatan terkumpul",
                level1: "Tahap 1",
                level2: "Tahap 2",
                level3: "Tahap 3",
                list: "Senarai pasukan",
                taskNums: "Masa kuantisasi"
            },
            fund: {
                title: "aset",
                title2: "Pengenalan aset",
                all: "jumlah aset",
                wait: "Ganjaran untuk dituntut",
                card1: "Dana yang fleksibel",
                card2: "Jumlah yang perlu dikeluarkan",
                card3: "Yuran percubaan",
                detail: "Butiran aset",
                lookAll: "Lihat semua",
                type1: "semua",
                type2: "pendapatan",
                type3: "perbelanjaan",
                task: "pusat misi",
                taskTip1: "Kuantifikasi robot",
                taskTip2: "Mudah menambah kekayaan",
                detailCard1: "Jumlah",
                detailCard2: "nama",
                detailCard3: "menaip",
                detailCard4: "Nombor pesanan",
                detailCard5: "masa",
                back: "kembali"
            },
            task: {
                up: "Tingkatkan ke {level}",
                up2: "Tingkatkan ke {level} dan anda akan mendapat {money}",
                done: "Selesai",
                ing: "sedang berjalan",
                can: "menerima",
                inviteNum: "Jemput {nums} orang untuk mendepositkan {money}",
                inviteAward: "Anda akan menerima {anugerah}"
            },
            mine: {
                icode: "Kod jemputan",
                goOut: "berhenti",
                jiesuo: "Tahap ini telah dibuka kuncinya",
                shengji: "Tingkatkan sekarang",
                zichan: "Jumlah aset",
                card1: "baki dompet",
                card2: "Dana untuk dikeluarkan",
                card3: "Pendapatan terkumpul",
                card4: "Pengeluaran terkumpul",
                card5: "Saiz pasukan",
                changyong: "Fungsi yang biasa digunakan",
                email: "E-mel",
                pwd: "Kata laluan log masuk",
                fundPwd: "Kata laluan transaksi",
                other: "Fungsi lain",
                help: "Pusat Bantuan",
                userTl: "Syarat Pengguna",
                lang: "tukar bahasa",
                kefu: "perkhidmatan pelanggan",
                onlineServer: "Perkhidmatan pelanggan dalam talian",
                qiandao: "Log masuk",
                lx: "menyambung",
                qiandaoTip: "Setiap kali anda log masuk {num} hari, anda akan mendapat {money}",
                bank: "kad bank",
                address: "Alamat pengeluaran",
                logoutTip: "Adakah anda pasti mahu log keluar?"
            },
            recharge: {
                amount: "Jumlah cas semula",
                amount2: "Sila masukkan jumlah caj semula",
                amountO: "Jumlah cas semula yang lain",
                methods: "Kaedah cas semula",
                btn: "Isi semula sekarang",
                record: "Rekod cas semula",
                min: "Jumlah pengeluaran minimum",
                desc: "menggambarkan",
                pingzheng: "Baucar cas semula",
                pingzheng2: "Sila muat naik baucar caj semula",
                address: "Alamat cas semula",
                status0: "Untuk dibayar",
                status1: "Selesai",
                status2: "Caj semula gagal",
                status3: "Dibatalkan",
                detailCard1: "Kaedah cas semula",
                detailCard2: "negeri",
                detailCard3: "Nombor pesanan",
                detailCard4: "masa",
                detailCard5: "Jumlah",
                go: "Sila pergi untuk mengikat kad bank",
                usdtTip1: "1. Alamat ini hanya menerima caj semula protokol USDT TRC20 Sila jangan mendepositkan mata wang lain atau protokol lain.",
                usdtTip2: "2. Sila semak alamat caj semula dengan teliti untuk setiap caj semula. Amaun setiap caj semula akan dikira berdasarkan jumlah sebenar yang dihantar.",
                usdtTip3: "3. Tambah nilai biasanya dicapai dalam masa beberapa minit selepas selesai pemindahan"
            },
            bank: {
                bank: "bank",
                bank2: "Sila masukkan bank",
                bankAccount: "akaun bank",
                bankAccount2: "Sila masukkan akaun bank",
                kaihuren: "Pemegang akaun",
                kaihuren2: "Sila masukkan pemegang akaun",
                tel: "Nombor telefon",
                tel2: "Sila masukkan nombor telefon bimbit"
            },
            withdraw: {
                record: "Rekod pengeluaran",
                account: "Keluarkan akaun",
                account2: "Sila pilih akaun pengeluaran",
                accountRed: "Pengurusan akaun pengeluaran",
                amount: "Keluarkan jumlah",
                amount2: "Sila masukkan jumlah pengeluaran",
                keyong: "baki yang ada",
                tip: "Nota mengenai Pengeluaran",
                pwd: "Kata laluan pembayaran",
                pwd2: "Sila masukkan kata laluan pembayaran",
                min: "Jumlah pengeluaran minimum",
                fee: "yuran pengendalian",
                status0: "Semakan belum selesai",
                status1: "Transaksi selesai",
                status2: "Menolak",
                status3: "Memindahkan",
                status4: "Transaksi selesai"
            },
            account: {
                title: "Pengurusan akaun",
                bind: "Pergi ke mengikat",
                bind2: "Terikat",
                address: "alamat",
                address2: "Sila masukkan alamat",
                btn: "Ikat sekarang",
                tip1: "Sila pastikan bahawa akaun anda adalah akaun nama sebenar anda Jika ia bukan akaun nama sebenar anda, pengeluaran akan gagal dan akaun tersebut akan dibekukan.",
                tip2: "Jika anda perlu mengubah suai akaun anda, sila hubungi perkhidmatan pelanggan"
            },
            get: {
                title: "Kuantiti",
                card1: "Jumlah yang boleh diukur hari ini",
                card2: "Pendapatan hari ini",
                card3: "Masa yang boleh diukur hari ini",
                card4: "jumlah hasil",
                btn: "kuantifikasi automatik",
                liucheng: "Menjalankan proses panel",
                step1: "1. Pengumpulan data sedang dijalankan",
                step2: "2. Strategi pembangunan mampan",
                step3: "3. Ujian belakang sedang dijalankan",
                step4: "4. Melaksanakan",
                step5: "5. Kuantiti selesai",
                record: "Rekod kuantitatif",
                record1: "Jumlah pelaburan",
                record2: "keuntungan",
                record3: "Membeli platform",
                record4: "platform jual",
                record5: "harga belian",
                record6: "harga jualan"
            },
            vip: {
                title: "Pusat Ahli",
                now: "tahap semasa",
                level: "Tahap VIP",
                jiesuo: "Tahap ini telah dibuka kuncinya",
                jiesuo2: "Tahap ini tidak dibuka kuncinya",
                tj: "Syarat naik taraf",
                tj1: "Jumlah yang berkesan",
                tj2: "Bilangan orang yang dinaikkan pangkat dalam satu generasi",
                tj3: "Tingkatkan tahap pengguna",
                qy: "hak dan kepentingan",
                qy1: "Peratusan hasil",
                qy2: "jumlah kuantiti minimum",
                qy3: "Jumlah kuantiti maksimum",
                qy4: "Bilangan kuantiti setiap hari"
            },
            safe: {
                title: "Pengurusan keselamatan",
                login_pwd: "Kata laluan log masuk",
                fund_pwd: "Kata laluan pembayaran",
                safe: "Keselamatan",
                edit_pwd: "Tukar kata laluan log masuk",
                edit_fundpwd: "Tukar kata laluan pembayaran",
                phone: "nombor telefon",
                getcode: "Dapatkan kod pengesahan",
                code: "Kod pengesahan",
                icode: "Sila masukkan kod pengesahan",
                newpwd: "Kata Laluan Baharu",
                inewpwd: "Kata Laluan Baharu",
                renewpwd: "Sahkan kata laluan baharu",
                renewpwd2: "Sila masukkan kata laluan baharu",
                oldpwd: "kata laluan asal",
                oldpwd2: "Masukkan kata laluan asal",
                error: "Sila masukkan data",
                hold: "Sila sahkan bahawa kata laluan baharu adalah konsisten"
            },
            keyboard: {
                ifundPwd: "Masukkan kata laluan pembayaran",
                verifying: "Semak kata laluan pembayaran"
            },
            google: {
                step1: "langkah pertama",
                step2: "Langkah 2",
                step3: "Langkah 3",
                tip1: "Sila muat turun Google Authenticator dari gedung aplikasi mudah alih",
                tip2: "Imbas kod QR untuk mengikat melalui Google Authenticator",
                code: "Sila masukkan kod pengesahan Google",
                tip3: "Binding Google Authenticator menyediakan satu lagi lapisan keselamatan untuk keselamatan akaun anda.",
                renzheng: "Diperakui"
            }
        }
    },
    "8f08": function(e, a, n) {
        "use strict";
        var i = n("e561")
          , t = n.n(i);
        t.a
    },
    "8f9a": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        var i = {
            data: function() {
                return {}
            },
            name: "tabbar",
            props: {
                thisPage: {
                    type: [String],
                    default: ""
                },
                hold: {
                    type: [Boolean],
                    default: !0
                }
            },
            methods: {
                go: function(e) {
                    uni.switchTab({
                        url: e
                    })
                }
            }
        };
        a.default = i
    },
    "91fe": function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0,
        n("c223"),
        n("64aa");
        var i = {
            data: function() {
                return {
                    StatusBar: this.StatusBar,
                    CustomBar: this.CustomBar
                }
            },
            name: "navbar",
            computed: {
                style: function() {
                    var e = this.StatusBar
                      , a = this.CustomBar
                      , n = this.bgImage
                      , i = this.bgColor
                      , t = "height:".concat(a, "px;padding-top:").concat(e, "px;");
                    return this.bgImage && (t = "".concat(t, "background-image:url(").concat(n, ");")),
                    this.bgColor && (t = "".concat(t, "background:").concat(i, ";")),
                    t
                }
            },
            props: {
                isBack: {
                    type: [Boolean, String],
                    default: !1
                },
                bgImage: {
                    type: String,
                    default: ""
                },
                bgColor: {
                    type: String,
                    default: "#000"
                },
                title: {
                    type: [String, Number],
                    default: ""
                }
            },
            methods: {
                BackPage: function() {
                    uni.navigateBack({
                        delta: 1
                    })
                }
            }
        };
        a.default = i
    },
    9640: function(e, a, n) {
        e.exports = n.p + "static/img/success.8b51892b.svg"
    },
    a072: function(e, a, n) {
        "use strict";
        n.r(a);
        var i = n("112b")
          , t = n("5717");
        for (var o in t)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(a, e, (function() {
                    return t[e]
                }
                ))
            }(o);
        n("8f08");
        var r = n("828b")
          , d = Object(r["a"])(t["default"], i["b"], i["c"], !1, null, "ac43c74c", null, !1, i["a"], void 0);
        a["default"] = d.exports
    },
    a3a6: function(e, a, n) {
        "use strict";
        n("6a54");
        var i = n("f5bd").default;
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0,
        n("bf0f");
        var t = i(n("2634"))
          , o = i(n("2fdc"))
          , r = i(n("9b8e"))
          , d = {
            onLaunch: function() {
                var e = this;
                uni.removeStorageSync("selectedIndex"),
                uni.hideTabBar(),
                uni.getSystemInfo({
                    success: function(e) {
                        r.default.prototype.StatusBar = e.statusBarHeight,
                        "android" == e.platform ? r.default.prototype.CustomBar = e.statusBarHeight + 50 : r.default.prototype.CustomBar = e.statusBarHeight + 45
                    }
                }),
                this.$request.http({
                    url: "/api/index/init",
                    method: "POST"
                }).then((function(a) {
                    if (1 == a.code) {
                        !uni.getStorageSync("lang") && a.data.default_lang && (uni.setStorageSync("lang", a.data.default_lang),
                        uni.setLocale(a.data.default_lang)),
                        uni.setStorageSync("siteInfo", a.data);
                        var n = uni.$u.platform;
                        "plus" == n && "android" == uni.getSystemInfoSync().platform && a.data.version != uni.$u.sys().appWgtVersion && e.getIncremental(a.data.wgt)
                    }
                }
                )),
                r.default.prototype.ColorList = [{
                    title: "嫣红",
                    name: "red",
                    color: "#e54d42"
                }, {
                    title: "桔橙",
                    name: "orange",
                    color: "#f37b1d"
                }, {
                    title: "明黄",
                    name: "yellow",
                    color: "#fbbd08"
                }, {
                    title: "橄榄",
                    name: "olive",
                    color: "#8dc63f"
                }, {
                    title: "森绿",
                    name: "green",
                    color: "#39b54a"
                }, {
                    title: "天青",
                    name: "cyan",
                    color: "#1cbbb4"
                }, {
                    title: "海蓝",
                    name: "blue",
                    color: "#0081ff"
                }, {
                    title: "姹紫",
                    name: "purple",
                    color: "#6739b6"
                }, {
                    title: "木槿",
                    name: "mauve",
                    color: "#9c26b0"
                }, {
                    title: "桃粉",
                    name: "pink",
                    color: "#e03997"
                }, {
                    title: "棕褐",
                    name: "brown",
                    color: "#a5673f"
                }, {
                    title: "玄灰",
                    name: "grey",
                    color: "#8799a3"
                }, {
                    title: "草灰",
                    name: "gray",
                    color: "#aaaaaa"
                }, {
                    title: "墨黑",
                    name: "black",
                    color: "#fff"
                }, {
                    title: "雅白",
                    name: "white",
                    color: "#ffffff"
                }]
            },
            onLoad: function() {
                uni.hideTabBar()
            },
            onShow: function() {
                console.log("App Show"),
                uni.hideTabBar()
            },
            onHide: function() {
                console.log("App Hide")
            },
            methods: {
                getIncremental: function(e) {
                    var a = this;
                    return (0,
                    o.default)((0,
                    t.default)().mark((function n() {
                        var i, o;
                        return (0,
                        t.default)().wrap((function(n) {
                            while (1)
                                switch (n.prev = n.next) {
                                case 0:
                                    if (e && "undefined" != e) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return", !1);
                                case 2:
                                    return i = a,
                                    n.prev = 3,
                                    uni.showLoading({
                                        title: "Update ...",
                                        mask: !0
                                    }),
                                    n.next = 7,
                                    i.uniDownLoadFile(e);
                                case 7:
                                    if (o = n.sent,
                                    200 === o.statusCode) {
                                        n.next = 10;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 10:
                                    uni.showLoading({
                                        title: "Instaing ...",
                                        mask: !0
                                    }),
                                    plus.runtime.install(o.tempFilePath, {
                                        force: !0
                                    }, (function() {
                                        uni.hideLoading(),
                                        plus.runtime.restart()
                                    }
                                    ), (function(e) {
                                        uni.hideLoading(),
                                        console.log(e)
                                    }
                                    )),
                                    n.next = 17;
                                    break;
                                case 14:
                                    n.prev = 14,
                                    n.t0 = n["catch"](3),
                                    console.log(n.t0);
                                case 17:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, null, [[3, 14]])
                    }
                    )))()
                },
                uniDownLoadFile: function(e) {
                    return new Promise((function(a, n) {
                        uni.downloadFile({
                            url: e,
                            success: function(e) {
                                a(e)
                            },
                            fail: function(e) {
                                uni.hideLoading(),
                                n(e)
                            }
                        })
                    }
                    ))
                }
            }
        };
        a.default = d
    },
    aacd: function(e, a, n) {
        e.exports = n.p + "static/img/error.901df5b3.svg"
    },
    ae61: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0,
        n("bf0f");
        var i = "https://api.";
        var t = {
            http: function(e) {
                e.closeLoading && uni.showLoading({
                    title: ""
                });
                var a = {}
                  , n = e.method || "POST";
                return e.header = e.header || {},
                e.data = e.data || {},
                e.header.accept && (a["Accept"] = e.header.accept),
                a["member-token"] = uni.getStorageSync("token"),
                a["think-lang"] = uni.getStorageSync("lang"),
                e.header.content ? a["Content-Type"] = e.header.content : a["Content-Type"] = "application/x-www-form-urlencoded",
                new Promise((function(t, o) {
                    uni.request({
                        url: i + e.url,
                        data: e.data,
                        header: a,
                        method: n,
                        success: function(e) {
                            uni.hideLoading(),
                            303 == e.data.code && e.data.data && "need login" == e.data.data.type ? uni.navigateTo({
                                url: "/pages/login/login"
                            }) : t(e.data)
                        },
                        fail: function(e) {
                            o("err")
                        },
                        complete: function() {
                            uni.hideLoading()
                        }
                    })
                }
                ))
            },
            upload: function(e) {
                var a = {
                    "api-type": "android"
                };
                uni.showLoading(),
                uni.uploadFile({
                    url: i + "file/upload",
                    filePath: e.path,
                    name: "file",
                    header: a,
                    formData: e.formData,
                    success: function(a) {
                        uni.hideLoading(),
                        "string" == typeof a.data && (a.data = JSON.parse(a.data)),
                        e.success(a.data)
                    },
                    fail: function(a) {
                        uni.hideLoading(),
                        e.fail(a.data)
                    }
                })
            },
            baseUrl: i
        };
        a.default = t
    },
    b06c: function(e, a, n) {
        "use strict";
        (function(e) {
            var a = n("f5bd").default;
            n("473f"),
            n("bf0f"),
            n("de6c"),
            n("5c47"),
            n("a1c1");
            var i = a(n("9b8e"))
              , t = {
                keys: function() {
                    return []
                }
            };
            e["____9B14E28____"] = !0,
            delete e["____9B14E28____"],
            e.__uniConfig = {
                easycom: {
                    "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue",
                    "^unicloud-db$": "@dcloudio/uni-cli-shared/components/unicloud-db.vue",
                    "^uniad$": "@dcloudio/uni-cli-shared/components/uniad.vue",
                    "^ad-rewarded-video$": "@dcloudio/uni-cli-shared/components/ad-rewarded-video.vue",
                    "^ad-fullscreen-video$": "@dcloudio/uni-cli-shared/components/ad-fullscreen-video.vue",
                    "^ad-interstitial$": "@dcloudio/uni-cli-shared/components/ad-interstitial.vue",
                    "^ad-interactive$": "@dcloudio/uni-cli-shared/components/ad-interactive.vue",
                    "^page-meta$": "@dcloudio/uni-cli-shared/components/page-meta.vue",
                    "^navigation-bar$": "@dcloudio/uni-cli-shared/components/navigation-bar.vue",
                    "^uni-match-media$": "@dcloudio/uni-cli-shared/components/uni-match-media.vue"
                },
                globalStyle: {
                    navigationBarBackgroundColor: "#0081ff",
                    navigationBarTitleText: "TSQ",
                    navigationStyle: "custom",
                    navigationBarTextStyle: "white",
                    scrollIndicator: "none",
                    maxWidth: 700,
                    rpxCalcMaxDeviceWidth: 375,
                    rpxCalcBaseDeviceWidth: 375,
                    rpxCalcIncludeWidth: 9999
                },
                usingComponts: !0,
                condition: {
                    current: 0,
                    list: [{
                        name: "Home",
                        path: "pages/index/index",
                        query: ""
                    }]
                },
                tabBar: {
                    list: [{
                        pagePath: "pages/index/index",
                        text: "首页",
                        iconPath: "",
                        selectedIconPath: "",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/get/index",
                        text: "获取",
                        iconPath: "",
                        selectedIconPath: "",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/fund/index",
                        text: "订单",
                        iconPath: "",
                        selectedIconPath: "",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/mine/index",
                        text: "我的",
                        iconPath: "",
                        selectedIconPath: "",
                        redDot: !1,
                        badge: ""
                    }],
                    color: "#999",
                    selectedColor: "#007aff",
                    backgroundColor: "",
                    borderStyle: "black"
                }
            },
            e.__uniConfig.compilerVersion = "4.85",
            e.__uniConfig.darkmode = !1,
            e.__uniConfig.themeConfig = {},
            e.__uniConfig.uniPlatform = "h5",
            e.__uniConfig.appId = "__UNI__9B14E28",
            e.__uniConfig.appName = "TSQ",
            e.__uniConfig.appVersion = "V2.1.0",
            e.__uniConfig.appVersionCode = "210",
            e.__uniConfig.router = {
                mode: "hash",
                base: "./"
            },
            e.__uniConfig.publicPath = "./",
            e.__uniConfig["async"] = {
                loading: "AsyncLoading",
                error: "AsyncError",
                delay: 200,
                timeout: 6e4
            },
            e.__uniConfig.debug = !1,
            e.__uniConfig.networkTimeout = {
                request: 6e4,
                connectSocket: 6e4,
                uploadFile: 6e4,
                downloadFile: 6e4
            },
            e.__uniConfig.sdkConfigs = {},
            e.__uniConfig.qqMapKey = void 0,
            e.__uniConfig.googleMapKey = void 0,
            e.__uniConfig.aMapKey = void 0,
            e.__uniConfig.aMapSecurityJsCode = void 0,
            e.__uniConfig.aMapServiceHost = void 0,
            e.__uniConfig.locale = "en",
            e.__uniConfig.fallbackLocale = void 0,
            e.__uniConfig.locales = t.keys().reduce((function(e, a) {
                var n = a.replace(/\.\/(uni-app.)?(.*).json/, "$2")
                  , i = t(a);
                return Object.assign(e[n] || (e[n] = {}), i.common || i),
                e
            }
            ), {}),
            e.__uniConfig.nvue = {
                "flex-direction": "column"
            },
            e.__uniConfig.__webpack_chunk_load__ = n.e,
            i.default.component("pages-index-index", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-index-index~pages-mine-index~pages-recharge-bank~pages-team-index~pages-withdraw-index"), n.e("pages-get-index~pages-index-index~pages-team-index"), n.e("pages-index-index")]).then(function() {
                        return e(n("d663"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-index-download", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-index-download")]).then(function() {
                        return e(n("69d9"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-login-register", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-login-forget~pages-login-login~pages-login-register"), n.e("pages-login-register")]).then(function() {
                        return e(n("306a"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-login-login", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-login-forget~pages-login-login~pages-login-register"), n.e("pages-login-login")]).then(function() {
                        return e(n("183e"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-login-forget", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-login-forget~pages-login-login~pages-login-register"), n.e("pages-login-forget")]).then(function() {
                        return e(n("5441"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-recharge-index", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-recharge-index")]).then(function() {
                        return e(n("97e1"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-withdraw-index", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-index-index~pages-mine-index~pages-recharge-bank~pages-team-index~pages-withdraw-index"), n.e("pages-team-index~pages-withdraw-index"), n.e("pages-withdraw-index")]).then(function() {
                        return e(n("6c21"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-order-index", (function(e) {
                var a = {
                    component: n.e("pages-order-index").then(function() {
                        return e(n("5245"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-mine-index", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-index-index~pages-mine-index~pages-recharge-bank~pages-team-index~pages-withdraw-index"), n.e("pages-mine-index~pages-mine-qiandao"), n.e("pages-mine-index")]).then(function() {
                        return e(n("beea"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-mine-lang", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-mine-lang")]).then(function() {
                        return e(n("1a9c"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-article-index", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-article-index")]).then(function() {
                        return e(n("2846"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-get-index", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-get-index~pages-index-index~pages-team-index"), n.e("pages-get-index")]).then(function() {
                        return e(n("d68f"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-safe-pwd", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-safe-pwd")]).then(function() {
                        return e(n("452d"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-safe-fundpwd", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-safe-fundpwd")]).then(function() {
                        return e(n("22c5"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-order-orderDetail", (function(e) {
                var a = {
                    component: n.e("pages-order-orderDetail").then(function() {
                        return e(n("d004"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-recharge-pay", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-recharge-pay")]).then(function() {
                        return e(n("2006"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-withdraw-record", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-withdraw-record")]).then(function() {
                        return e(n("b833"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-vip-vip", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-vip-vip")]).then(function() {
                        return e(n("84a8"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-withdraw-address", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-withdraw-address")]).then(function() {
                        return e(n("d76f"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-team-index", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-index-index~pages-mine-index~pages-recharge-bank~pages-team-index~pages-withdraw-index"), n.e("pages-get-index~pages-index-index~pages-team-index"), n.e("pages-team-index~pages-withdraw-index"), n.e("pages-team-index")]).then(function() {
                        return e(n("cbec"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-withdraw-editAddress", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-withdraw-editAddress")]).then(function() {
                        return e(n("2b0a"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-recharge-record", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-recharge-record")]).then(function() {
                        return e(n("f307"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-mine-invite", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-mine-invite")]).then(function() {
                        return e(n("5be8"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-notice-index", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-notice-index")]).then(function() {
                        return e(n("e5b9"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-notice-record", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-notice-record")]).then(function() {
                        return e(n("9e77"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-get-record", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-get-record")]).then(function() {
                        return e(n("3b0e"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-fund-index", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-fund-index")]).then(function() {
                        return e(n("e177"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-fund-record", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-fund-record")]).then(function() {
                        return e(n("2ba9"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-fund-recordDetail", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-fund-recordDetail")]).then(function() {
                        return e(n("1a87"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-fund-tip", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-fund-tip")]).then(function() {
                        return e(n("09a8"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-fund-task", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-fund-task")]).then(function() {
                        return e(n("1d8a"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-mine-freeze", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-mine-freeze")]).then(function() {
                        return e(n("deee"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-mine-help", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-mine-help")]).then(function() {
                        return e(n("2315"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-mine-email", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-mine-email")]).then(function() {
                        return e(n("bb94"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-mine-google", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-mine-google")]).then(function() {
                        return e(n("5632"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-team-record", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-team-record")]).then(function() {
                        return e(n("16ef"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-mine-qiandao", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-mine-index~pages-mine-qiandao"), n.e("pages-mine-qiandao")]).then(function() {
                        return e(n("5fa4"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-mine-service", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-mine-service")]).then(function() {
                        return e(n("b0af"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-mine-server", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-mine-server")]).then(function() {
                        return e(n("a186"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-recharge-bank", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-index-index~pages-mine-index~pages-recharge-bank~pages-team-index~pages-withdraw-index"), n.e("pages-recharge-bank")]).then(function() {
                        return e(n("9e0b"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-mine-bank", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-mine-bank")]).then(function() {
                        return e(n("e6ae"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-recharge-usdt", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-recharge-usdt")]).then(function() {
                        return e(n("77fd"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-recharge-chain", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-recharge-chain")]).then(function() {
                        return e(n("c619"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-mine-helpOne", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-mine-helpOne")]).then(function() {
                        return e(n("a1b8"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            i.default.component("pages-recharge-recordDetail", (function(e) {
                var a = {
                    component: Promise.all([n.e("pages-article-index~pages-fund-index~pages-fund-record~pages-fund-recordDetail~pages-fund-task~pages~e0892435"), n.e("pages-recharge-recordDetail")]).then(function() {
                        return e(n("c454"))
                    }
                    .bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }),
                __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }),
                a
            }
            )),
            e.__uniRoutes = [{
                path: "/",
                alias: "/pages/index/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isEntry: !0,
                                isTabBar: !0,
                                tabBarIndex: 0
                            }, __uniConfig.globalStyle, {})
                        }, [e("pages-index-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 1,
                    name: "pages-index-index",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/index/index",
                    isQuit: !0,
                    isEntry: !0,
                    isTabBar: !0,
                    tabBarIndex: 0,
                    windowTop: 0
                }
            }, {
                path: "/pages/index/download",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-index-download", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-index-download",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/index/download",
                    windowTop: 0
                }
            }, {
                path: "/pages/login/register",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-login-register", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-login-register",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/login/register",
                    windowTop: 0
                }
            }, {
                path: "/pages/login/login",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-login-login", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-login-login",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/login/login",
                    windowTop: 0
                }
            }, {
                path: "/pages/login/forget",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-login-forget", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-login-forget",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/login/forget",
                    windowTop: 0
                }
            }, {
                path: "/pages/recharge/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-recharge-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-recharge-index",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/recharge/index",
                    windowTop: 0
                }
            }, {
                path: "/pages/withdraw/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-withdraw-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-withdraw-index",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/withdraw/index",
                    windowTop: 0
                }
            }, {
                path: "/pages/order/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-order-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-order-index",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/order/index",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 3
                            }, __uniConfig.globalStyle, {})
                        }, [e("pages-mine-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 2,
                    name: "pages-mine-index",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/mine/index",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 3,
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/lang",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-mine-lang", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-lang",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/mine/lang",
                    windowTop: 0
                }
            }, {
                path: "/pages/article/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-article-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-article-index",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/article/index",
                    windowTop: 0
                }
            }, {
                path: "/pages/get/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 1
                            }, __uniConfig.globalStyle, {})
                        }, [e("pages-get-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 3,
                    name: "pages-get-index",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/get/index",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 1,
                    windowTop: 0
                }
            }, {
                path: "/pages/safe/pwd",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-safe-pwd", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-safe-pwd",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/safe/pwd",
                    windowTop: 0
                }
            }, {
                path: "/pages/safe/fundpwd",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-safe-fundpwd", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-safe-fundpwd",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/safe/fundpwd",
                    windowTop: 0
                }
            }, {
                path: "/pages/order/orderDetail",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-order-orderDetail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-order-orderDetail",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/order/orderDetail",
                    windowTop: 0
                }
            }, {
                path: "/pages/recharge/pay",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-recharge-pay", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-recharge-pay",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/recharge/pay",
                    windowTop: 0
                }
            }, {
                path: "/pages/withdraw/record",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-withdraw-record", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-withdraw-record",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/withdraw/record",
                    windowTop: 0
                }
            }, {
                path: "/pages/vip/vip",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-vip-vip", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-vip-vip",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/vip/vip",
                    windowTop: 0
                }
            }, {
                path: "/pages/withdraw/address",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-withdraw-address", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-withdraw-address",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/withdraw/address",
                    windowTop: 0
                }
            }, {
                path: "/pages/team/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-team-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-team-index",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/team/index",
                    windowTop: 0
                }
            }, {
                path: "/pages/withdraw/editAddress",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-withdraw-editAddress", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-withdraw-editAddress",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/withdraw/editAddress",
                    windowTop: 0
                }
            }, {
                path: "/pages/recharge/record",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-recharge-record", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-recharge-record",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/recharge/record",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/invite",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-mine-invite", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-invite",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/mine/invite",
                    windowTop: 0
                }
            }, {
                path: "/pages/notice/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-notice-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-notice-index",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/notice/index",
                    windowTop: 0
                }
            }, {
                path: "/pages/notice/record",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-notice-record", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-notice-record",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/notice/record",
                    windowTop: 0
                }
            }, {
                path: "/pages/get/record",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-get-record", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-get-record",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/get/record",
                    windowTop: 0
                }
            }, {
                path: "/pages/fund/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 2
                            }, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-fund-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 4,
                    name: "pages-fund-index",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/fund/index",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 2,
                    windowTop: 0
                }
            }, {
                path: "/pages/fund/record",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-fund-record", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-fund-record",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/fund/record",
                    windowTop: 0
                }
            }, {
                path: "/pages/fund/recordDetail",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-fund-recordDetail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-fund-recordDetail",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/fund/recordDetail",
                    windowTop: 0
                }
            }, {
                path: "/pages/fund/tip",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {})
                        }, [e("pages-fund-tip", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-fund-tip",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/fund/tip",
                    windowTop: 0
                }
            }, {
                path: "/pages/fund/task",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-fund-task", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-fund-task",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/fund/task",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/freeze",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-mine-freeze", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-freeze",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/mine/freeze",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/help",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-mine-help", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-help",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/mine/help",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/email",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-mine-email", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-email",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/mine/email",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/google",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-mine-google", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-google",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/mine/google",
                    windowTop: 0
                }
            }, {
                path: "/pages/team/record",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-team-record", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-team-record",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/team/record",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/qiandao",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-mine-qiandao", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-qiandao",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/mine/qiandao",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/service",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-mine-service", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-service",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/mine/service",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/server",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-mine-server", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-server",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/mine/server",
                    windowTop: 0
                }
            }, {
                path: "/pages/recharge/bank",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-recharge-bank", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-recharge-bank",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/recharge/bank",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/bank",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-mine-bank", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-bank",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/mine/bank",
                    windowTop: 0
                }
            }, {
                path: "/pages/recharge/usdt",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-recharge-usdt", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-recharge-usdt",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/recharge/usdt",
                    windowTop: 0
                }
            }, {
                path: "/pages/recharge/chain",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-recharge-chain", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-recharge-chain",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/recharge/chain",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/helpOne",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-mine-helpOne", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-helpOne",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/mine/helpOne",
                    windowTop: 0
                }
            }, {
                path: "/pages/recharge/recordDetail",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pages-recharge-recordDetail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-recharge-recordDetail",
                    isNVue: !1,
                    maxWidth: 700,
                    pagePath: "pages/recharge/recordDetail",
                    windowTop: 0
                }
            }, {
                path: "/choose-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-choose-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "choose-location",
                    pagePath: "/choose-location"
                }
            }, {
                path: "/open-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-open-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "open-location",
                    pagePath: "/open-location"
                }
            }],
            e.UniApp && new e.UniApp
        }
        ).call(this, n("0ee4"))
    },
    b244: function(e, a, n) {
        "use strict";
        n.r(a);
        var i = n("8f9a")
          , t = n.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(a, e, (function() {
                    return i[e]
                }
                ))
            }(o);
        a["default"] = t.a
    },
    b303: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "cứu",
                balance: "Sự cân bằng",
                nodata: "không còn dữ liệu",
                logout: "Thoát thành công",
                confirm: "xác nhận",
                cancel: "Hủy bỏ",
                submit: "nộp",
                recharge: "nạp tiền",
                withdraw: "Rút tiền mặt",
                desc: "minh họa",
                tip: "Lời khuyên tử tế",
                tipEmail: "Để bảo vệ hơn nữa tính bảo mật cho tài khoản của bạn, vui lòng liên kết địa chỉ email của bạn.",
                tipEmail2: "Việc ràng buộc địa chỉ email của bạn cung cấp một đảm bảo an ninh khác cho bảo mật tài khoản của bạn."
            },
            tabbar: {
                t1: "Trang chủ",
                t2: "đội",
                t3: "Lấy",
                t4: "Tài sản",
                t5: "Của tôi"
            },
            register: {
                title: "đăng ký",
                username: "tên người dùng",
                username2: "Vui lòng nhập tên người dùng",
                tel: "Số điện thoại",
                tel2: "Vui lòng nhập số điện thoại di động",
                pwd: "mật khẩu",
                pwd2: "Vui lòng nhập mật khẩu",
                repwd: "Xác nhận mật khẩu",
                repwd2: "Vui lòng nhập mật khẩu xác nhận",
                icode: "Mã mời",
                icode2: "Vui lòng nhập mã mời",
                has: "Đã có tài khoản",
                has2: "Đăng nhập ngay bây giờ",
                email: "Thư",
                email2: "Vui lòng nhập email của bạn",
                fundPwd: "Mật khẩu thanh toán",
                fundPwd2: "Vui lòng nhập mật khẩu thanh toán",
                yzm: "Mã xác minh",
                yzm2: "Vui lòng nhập mã xác minh",
                send: "gửi",
                noyizhi: "Mật khẩu nhập không nhất quán"
            },
            login: {
                tel: "Số điện thoại",
                tel2: "Vui lòng nhập số điện thoại di động",
                pwd: "mật khẩu",
                pwd2: "Vui lòng nhập mật khẩu",
                login: "Đăng nhập",
                noc: "Chưa có tài khoản",
                noc2: "Đăng ký ngay bây giờ",
                forgetpwd: "quên mật khẩu",
                tip1: "Xin chào",
                tip2: "chào mừng đến",
                lang: "Tùy chọn ngôn ngữ"
            },
            forget: {
                title: "quên mật khẩu",
                getcode: "Nhận mã xác minh",
                code: "Mã xác minh",
                code2: "Vui lòng nhập mã xác minh",
                nav1: "Xác minh của Google",
                nav2: "Xác minh email",
                pwd: "Mật khẩu mới",
                pwd2: "Vui lòng nhập mật khẩu mới",
                repwd: "Xác nhận mật khẩu",
                repwd2: "Vui lòng nhập mật khẩu xác nhận",
                email: "E-mail",
                email2: "Vui lòng nhập địa chỉ email của bạn"
            },
            index: {
                company: "Hồ sơ công ty",
                rule: "luật lệ",
                invite: "Mời bạn bè",
                hangqing: "Báo giá thời gian thực",
                friend: "Đối tác",
                message: "tin nhắn của tôi",
                message1: "Thông báo hệ thống",
                message2: "thông điệp sứ mệnh",
                message3: "Thông báo trang web"
            },
            invite: {
                title: "Mời bạn bè",
                tip1: "Mời bạn bè để giành được những món quà lớn",
                tip2: "Hãy để mọi người cảm thấy hạnh phúc và đạt được điều gì đó",
                link: "Liên kết lời mời",
                code: "Mã mời"
            },
            team: {
                title: "đội của tôi",
                data: "Dữ liệu nhóm",
                pickerAll: "tất cả",
                picker1: "Hôm nay",
                picker7: "7 ngày qua",
                picker30: "30 ngày qua",
                picker60: "60 ngày qua",
                addPeopel: "Người mới",
                addEarn: "Doanh thu mới",
                fenxi: "phân tích doanh thu",
                shouru1: "Thu nhập nhiệm vụ",
                shouru2: "Định lượng doanh thu",
                shouru3: "Thúc đẩy thu nhập được định lượng",
                guimo: "Quy mô đội",
                youxiao: "Làm việc theo nhóm",
                tdRecharge: "Nạp tiền cho đội",
                tdCash: "Rút lui đội",
                lookAll: "Xem tất cả",
                card1: "tổng hoa hồng",
                card2: "Nạp tiền tích lũy",
                card3: "Rút tiền tích lũy",
                userNum: "số lượng người dùng",
                yj: "phần trăm hoa hồng",
                ljEarn: "Thu nhập tích lũy",
                level1: "Cấp 1",
                level2: "Cấp 2",
                level3: "Cấp 3",
                list: "Danh sách đội",
                taskNums: "Thời gian lượng tử hóa"
            },
            fund: {
                title: "tài sản",
                title2: "Giới thiệu tài sản",
                all: "tổng tài sản",
                wait: "Giải thưởng nên nhận",
                card1: "Vốn linh hoạt",
                card2: "Số tiền cần phát hành",
                card3: "Phí dùng thử",
                detail: "Chi tiết tài sản",
                lookAll: "Xem tất cả",
                type1: "tất cả",
                type2: "thu nhập",
                type3: "chi tiêu",
                task: "trung tâm truyền giáo",
                taskTip1: "Định lượng robot",
                taskTip2: "Dễ dàng gia tăng sự giàu có",
                detailCard1: "Số lượng",
                detailCard2: "tên",
                detailCard3: "kiểu",
                detailCard4: "Số đơn hàng",
                detailCard5: "thời gian",
                back: "trở lại"
            },
            task: {
                up: "Nâng cấp lên {level}",
                up2: "Nâng cấp lên {level} và bạn sẽ nhận được {money}",
                done: "Hoàn thành",
                ing: "đang tiến hành",
                can: "nhận được",
                inviteNum: "Mời {nums} người gửi {money}",
                inviteAward: "Bạn sẽ nhận được {award}"
            },
            mine: {
                icode: "Mã mời",
                goOut: "từ bỏ",
                jiesuo: "Cấp độ này đã được mở khóa",
                shengji: "Nâng cấp ngay bây giờ",
                zichan: "Tổng tài sản",
                card1: "số dư ví",
                card2: "Vốn sắp được phát hành",
                card3: "Thu nhập tích lũy",
                card4: "Rút tiền tích lũy",
                card5: "Quy mô đội",
                changyong: "Các hàm thường dùng",
                email: "E-mail",
                pwd: "Mật khẩu đăng nhập",
                fundPwd: "Mật khẩu giao dịch",
                other: "Các chức năng khác",
                help: "Trung tâm trợ giúp",
                userTl: "Điều khoản người dùng",
                lang: "chuyển đổi ngôn ngữ",
                kefu: "dịch vụ khách hàng",
                onlineServer: "Dịch vụ khách hàng trực tuyến",
                qiandao: "Đăng nhập",
                lx: "kết nối",
                qiandaoTip: "Mỗi lần bạn đăng nhập {num} ngày, bạn sẽ nhận được {money}",
                bank: "thẻ ngân hàng",
                address: "Địa chỉ rút tiền",
                logoutTip: "Bạn có chắc chắn muốn đăng xuất không?"
            },
            recharge: {
                amount: "Số tiền nạp",
                amount2: "Vui lòng nhập số tiền nạp",
                amountO: "Số tiền nạp khác",
                methods: "Phương thức nạp tiền",
                btn: "Nạp tiền ngay bây giờ",
                record: "Kỷ lục nạp tiền",
                min: "Số tiền rút tối thiểu",
                desc: "minh họa",
                pingzheng: "Phiếu nạp tiền",
                pingzheng2: "Vui lòng tải lên phiếu nạp tiền",
                address: "Địa chỉ nạp tiền",
                status0: "Được trả tiền",
                status1: "Hoàn thành",
                status2: "Nạp tiền không thành công",
                status3: "Đã hủy",
                detailCard1: "Phương thức nạp tiền",
                detailCard2: "tình trạng",
                detailCard3: "Số đơn hàng",
                detailCard4: "thời gian",
                detailCard5: "Số lượng",
                go: "Vui lòng đi liên kết thẻ ngân hàng",
                usdtTip1: "1. Địa chỉ này chỉ chấp nhận nạp tiền vào giao thức USDT TRC20. Vui lòng không gửi các loại tiền tệ khác hoặc các giao thức khác.",
                usdtTip2: "2. Vui lòng kiểm tra cẩn thận địa chỉ nạp tiền cho mỗi lần nạp tiền. Số tiền của mỗi lần nạp tiền sẽ được tính dựa trên số tiền thực tế được chuyển.",
                usdtTip3: "3. Việc nạp tiền thường được thực hiện trong vòng vài phút sau khi hoàn tất chuyển khoản"
            },
            bank: {
                bank: "ngân hàng",
                bank2: "Vui lòng nhập ngân hàng",
                bankAccount: "tài khoản ngân hàng",
                bankAccount2: "Vui lòng nhập tài khoản ngân hàng",
                kaihuren: "Chủ tài khoản",
                kaihuren2: "Vui lòng nhập chủ tài khoản",
                tel: "Số điện thoại",
                tel2: "Vui lòng nhập số điện thoại di động"
            },
            withdraw: {
                record: "Hồ sơ rút tiền",
                account: "Rút tài khoản",
                account2: "Vui lòng chọn tài khoản rút tiền",
                accountRed: "Quản lý tài khoản rút tiền",
                amount: "Số tiền rút",
                amount2: "Vui lòng nhập số tiền rút",
                keyong: "số dư khả dụng",
                tip: "Lưu ý về việc rút tiền",
                pwd: "Mật khẩu thanh toán",
                pwd2: "Vui lòng nhập mật khẩu thanh toán",
                min: "Số tiền rút tối thiểu",
                fee: "phí xử lý",
                status0: "Đang chờ xem xét",
                status1: "Giao dịch đã hoàn tất",
                status2: "Từ chối",
                status3: "Chuyển giao",
                status4: "Giao dịch đã hoàn tất"
            },
            account: {
                title: "Quản lý tài khoản",
                bind: "Đi đến ràng buộc",
                bind2: "ràng buộc",
                address: "Địa chỉ",
                address2: "Vui lòng nhập địa chỉ",
                btn: "Ràng buộc ngay bây giờ",
                tip1: "Hãy đảm bảo rằng tài khoản của bạn là tài khoản tên thật. Nếu đó không phải là tài khoản tên thật của bạn, việc rút tiền sẽ không thành công và tài khoản sẽ bị đóng băng.",
                tip2: "Nếu bạn cần sửa đổi tài khoản của mình, vui lòng liên hệ với bộ phận dịch vụ khách hàng"
            },
            get: {
                title: "Định lượng",
                card1: "Số lượng có thể định lượng ngày hôm nay",
                card2: "Thu nhập ngày hôm nay",
                card3: "Thời gian có thể định lượng ngày hôm nay",
                card4: "tổng doanh thu",
                btn: "định lượng tự động",
                liucheng: "Tiến hành quy trình bảng điều khiển",
                step1: "1. Đang thu thập dữ liệu",
                step2: "2. Chiến lược phát triển bền vững",
                step3: "3. Đang kiểm tra ngược",
                step4: "4. Đang thực hiện",
                step5: "5. Đã hoàn tất định lượng",
                record: "Hồ sơ định lượng",
                record1: "Số tiền đầu tư",
                record2: "lợi nhuận",
                record3: "Nền tảng mua hàng",
                record4: "nền tảng bán",
                record5: "giá mua",
                record6: "giá bán"
            },
            vip: {
                title: "Trung tâm thành viên",
                now: "cấp độ hiện tại",
                level: "Cấp độ VIP",
                jiesuo: "Cấp độ này đã được mở khóa",
                jiesuo2: "Cấp độ này chưa được mở khóa",
                tj: "Điều kiện nâng cấp",
                tj1: "Số tiền hiệu quả",
                tj2: "Số người được thăng chức trong một thế hệ",
                tj3: "Thúc đẩy cấp độ người dùng",
                qy: "quyền và lợi ích",
                qy1: "Phần trăm doanh thu",
                qy2: "lượng định lượng tối thiểu",
                qy3: "Lượng định lượng tối đa",
                qy4: "Số lượng định lượng mỗi ngày"
            },
            safe: {
                title: "Quản lý an ninh",
                login_pwd: "Mật khẩu đăng nhập",
                fund_pwd: "Mật khẩu thanh toán",
                safe: "Sự an toàn",
                edit_pwd: "Thay đổi mật khẩu đăng nhập",
                edit_fundpwd: "Thay đổi mật khẩu thanh toán",
                phone: "số điện thoại",
                getcode: "Nhận mã xác minh",
                code: "Mã xác minh",
                icode: "Vui lòng nhập mã xác minh",
                newpwd: "Mật khẩu mới",
                inewpwd: "Mật khẩu mới",
                renewpwd: "Xác nhận mật khẩu mới",
                renewpwd2: "Vui lòng nhập mật khẩu mới",
                oldpwd: "mật khẩu gốc",
                oldpwd2: "Nhập mật khẩu gốc",
                error: "Vui lòng nhập dữ liệu",
                hold: "Vui lòng xác nhận rằng mật khẩu mới phù hợp"
            },
            keyboard: {
                ifundPwd: "Nhập mật khẩu thanh toán",
                verifying: "Kiểm tra mật khẩu thanh toán"
            },
            google: {
                step1: "bước đầu tiên",
                step2: "Bước 2",
                step3: "Bước 3",
                tip1: "Vui lòng tải xuống Google Authenticator từ cửa hàng ứng dụng di động",
                tip2: "Quét mã QR để liên kết thông qua Google Authenticator",
                code: "Vui lòng nhập mã xác minh Google",
                tip3: "Ràng buộc Google Authenticator cung cấp một lớp bảo mật khác để bảo mật tài khoản của bạn.",
                renzheng: "được chứng nhận"
            }
        }
    },
    b3b2: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "Stocare",
                balance: "Sold",
                nodata: "Nu mai există date",
                logout: "Deconectare reușită",
                confirm: "Confirmare",
                cancel: "Anulare",
                submit: "Trimitere",
                recharge: "Depunere",
                withdraw: "Retragere",
                desc: "Instrucțiuni",
                tip: "Memento",
                tipEmail: "Pentru a vă proteja și mai mult securitatea contului, vă rugăm să vă asociați adresa de e-mail.",
                tipEmail2: "Asocierea adresei de e-mail oferă un alt nivel de securitate pentru contul dvs."
            },
            tabbar: {
                t1: "Acasă",
                t2: "Echipă",
                t3: "Obține",
                t4: "Active",
                t5: "Contul meu"
            },
            register: {
                title: "Înregistrare",
                username: "Nume de utilizator",
                username2: "Vă rugăm să introduceți numele de utilizator",
                tel: "Număr de telefon mobil",
                tel2: "Vă rugăm să introduceți numărul de telefon mobil",
                pwd: "Parolă",
                pwd2: "Vă rugăm să introduceți parola",
                repwd: "Confirmare parolă",
                repwd2: "Vă rugăm să introduceți confirmarea parolei",
                icode: "Cod de invitație",
                icode2: "Vă rugăm să introduceți codul de invitație",
                has: "Aveți deja un cont?",
                has2: "Conectați-vă acum",
                email: "E-mail",
                email2: "Vă rugăm să introduceți adresa de e-mail",
                fundPwd: "Parola de plată",
                fundPwd2: "Vă rugăm să introduceți parola de plată",
                yzm: "Cod de verificare",
                yzm2: "Vă rugăm să introduceți codul de verificare",
                send: "Trimite",
                noyizhi: "Parola nu se potrivește"
            },
            login: {
                tel: "Număr de telefon mobil",
                tel2: "Vă rugăm să introduceți numărul de telefon mobil",
                pwd: "Parolă",
                pwd2: "Vă rugăm să introduceți parola",
                login: "Conectați-vă",
                noc: "Nu aveți încă un cont?",
                noc2: "Înregistrează-te acum",
                forgetpwd: "Am uitat parola",
                tip1: "Salut",
                tip2: "Bun venit",
                lang: "Preferință limbă"
            },
            forget: {
                title: "Am uitat parola",
                getcode: "Obține codul de verificare",
                code: "Cod de verificare",
                code2: "Vă rugăm să introduceți codul de verificare",
                nav1: "Verificare Google",
                nav2: "Verificare e-mail",
                pwd: "Parolă nouă",
                pwd2: "Vă rugăm să introduceți noua parolă",
                repwd: "Confirmați parola",
                repwd2: "Vă rugăm să introduceți confirmați parola",
                email: "Adresă de e-mail",
                email2: "Vă rugăm să introduceți adresa de e-mail"
            },
            index: {
                company: "Profilul companiei",
                rule: "Reguli",
                invite: "Invită prieteni",
                hangqing: "Date de piață în timp real",
                friend: "Parteneri",
                message: "Mesajele mele",
                message1: "Mesaje de sistem",
                message2: "Mesaje despre sarcini",
                message3: "Mesaje interne"
            },
            invite: {
                title: "Invită prieteni",
                tip1: "Invită prieteni și câștigă premii mari",
                tip2: "Fă-i pe toți fericiți și recompensați",
                link: "Link de invitație",
                code: "Cod de invitație"
            },
            team: {
                title: "Echipa mea",
                data: "Date despre echipă",
                pickerAll: "Toate",
                picker1: "Astăzi",
                picker7: "Ultimele 7 zile",
                picker30: "Ultimele 30 de zile",
                picker60: "Ultimele 60 de zile",
                addPeopel: "Membri noi",
                addEarn: "Venituri noi",
                fenxi: "Analiza veniturilor",
                shouru1: "Venituri din sarcini",
                shouru2: "Venituri cantitative",
                shouru3: "Promovare Venituri cantitative",
                guimo: "Dimensiunea echipei",
                youxiao: "Echipa efectivă",
                tdRecharge: "Depozit echipă",
                tdCash: "Retragere echipă",
                lookAll: "Vizualizare Toate",
                card1: "Comision total",
                card2: "Valoare stocată cumulativă",
                card3: "Retrageri cumulative",
                userNum: "Număr de utilizatori",
                yj: "Procentaj de comision",
                ljEarn: "Câștiguri cumulative",
                level1: "Nivelul 1",
                level2: "Nivelul 2",
                level3: "Nivelul 3",
                list: "Lista echipei",
                taskNums: "Timpi de cuantificare"
            },
            fund: {
                title: "Active",
                title2: "Introducere active",
                all: "Total active",
                wait: "Recompense de revendicat",
                card1: "Fonduri flexibile",
                card2: "Suma de eliberat",
                card3: "Fonduri de probă",
                detail: "Detalii active",
                lookAll: "Vezi toate",
                type1: "Toate",
                type2: "Venituri",
                type3: "Cheltuieli",
                task: "Centru de activități",
                taskTip1: "Cuantificare robot",
                taskTip2: "Obțineți cu ușurință creșterea averii",
                detailCard1: "Sumă",
                detailCard2: "Nume",
                detailCard3: "Tip",
                detailCard4: "Număr comandă",
                detailCard5: "Oră",
                back: "Returnare"
            },
            task: {
                up: "Upgrade la {level}",
                up2: "Upgrade la {level} pentru a primi {money}",
                done: "Finalizat",
                ing: "În curs",
                can: "Revendicare",
                inviteNum: "Invitați {nums} persoane care au depus {money}",
                inviteAward: "Veți primi o recompensă de {award}"
            },
            mine: {
                icode: "Cod de invitație",
                goOut: "Deconectare",
                jiesuo: "Acest nivel este deblocat",
                shengji: "Upgrade Acum",
                zichan: "Active totale",
                card1: "Sold portofel",
                card2: "Fonduri în așteptare pentru eliberare",
                card3: "Câștiguri cumulative",
                card4: "Retrageri cumulative",
                card5: "Membri ai echipei",
                changyong: "Funcții utilizate frecvent",
                email: "Adresă de e-mail",
                pwd: "Parolă de conectare",
                fundPwd: "Parolă tranzacție",
                other: "Alte funcții",
                help: "Centru de ajutor",
                userTl: "Acord de utilizare",
                lang: "Schimbare limbă",
                kefu: "Serviciu clienți",
                onlineServer: "Serviciu clienți online",
                qiandao: "Înregistrare",
                lx: "Contact",
                qiandaoTip: "Câștigați {money} pentru fiecare {num} zile în care vă înregistrați",
                bank: "Card de debit",
                address: "Adresă de retragere",
                logoutTip: "Sigur doriți să vă deconectați/conectați?"
            },
            recharge: {
                amount: "Valoare stocată",
                amount2: "Vă rugăm să introduceți suma valorii stocate",
                amountO: "Altă sumă a valorii stocate",
                methods: "Metodă de stocare",
                btn: "Valoare stocată imediată",
                record: "Istoric stocare",
                min: "Sumă minimă de retragere",
                desc: "Instrucțiuni",
                pingzheng: "Voucher de stocare",
                pingzheng2: "Vă rugăm să încărcați voucherul cu valoare stocată",
                address: "Adresă de stocare",
                status0: "Plată în așteptare",
                status1: "Finalizat",
                status2: "Stocare eșuată",
                status3: "Anulat",
                detailCard1: "Metodă de stocare",
                detailCard2: "Stare",
                detailCard3: "Număr comandă",
                detailCard4: "Oră",
                detailCard5: "Sumă",
                go: "Vă rugăm să vă legați cardul bancar",
                usdtTip1: "1. Această adresă acceptă doar USDT 1. Reîncărcări cu protocolul TRC20, vă rugăm să nu depuneți alte valute sau alte protocoale.",
                usdtTip2: "2. Vă rugăm să verificați cu atenție adresa de încărcare înainte de fiecare încărcare. Suma de încărcare este calculată pe baza sumei reale transferate.",
                usdtTip3: "3. Încărcările sosesc de obicei în câteva minute după finalizarea transferului."
            },
            bank: {
                bank: "Bancă",
                bank2: "Vă rugăm să introduceți banca",
                bankAccount: "Cont bancar",
                bankAccount2: "Vă rugăm să introduceți contul bancar",
                kaihuren: "Titularul contului",
                kaihuren2: "Vă rugăm să introduceți titularul contului",
                tel: "Număr de telefon mobil",
                tel2: "Vă rugăm să introduceți numărul de telefon mobil"
            },
            withdraw: {
                record: "Istoricul retragerilor",
                account: "Cont retrageri",
                account2: "Vă rugăm să selectați contul de retragere",
                accountRed: "Administrarea contului de retragere",
                amount: "Suma retrasă",
                amount2: "Vă rugăm să introduceți suma retrasă",
                keyong: "Sold disponibil",
                tip: "Precauții privind retragerea",
                pwd: "Plată Parolă plată",
                pwd2: "Vă rugăm să introduceți parola de plată",
                min: "Suma minimă de retragere",
                fee: "Comision tranzacție",
                status0: "În așteptarea revizuirii",
                status1: "Tranzacție finalizată",
                status2: "Respins",
                status3: "Transfer în curs",
                status4: "Tranzacție finalizată"
            },
            account: {
                title: "Administrarea contului",
                bind: "Legați acum",
                bind2: "Legat",
                address: "Adresă",
                address2: "Vă rugăm să introduceți adresa",
                btn: "Legați acum",
                tip1: "Vă rugăm să vă asigurați că este înregistrat contul sub numele dvs. real. Nerespectarea acestei instrucțiuni va duce la eșecul retragerii și la blocarea contului.",
                tip2: "Dacă trebuie să vă modificați contul, vă rugăm să contactați serviciul clienți."
            },
            get: {
                title: "Cuantificare",
                card1: "Suma cuantificabilă de astăzi",
                card2: "Câștiguri de astăzi",
                card3: "Timp cuantificabil de astăzi",
                card4: "Câștiguri totale",
                btn: "Cuantificare automată",
                liucheng: "Procesul panelului",
                step1: "1. Colectarea datelor în curs",
                step2: "2. Strategia de dezvoltare durabilă",
                step3: "3. Testare retrospectivă în curs",
                step4: "4. Implementare",
                step5: "5. Cuantificare finalizată",
                record: "Înregistrare cuantificare",
                record1: "Suma investiției",
                record2: "Profit",
                record3: "Platformă de cumpărare",
                record4: "Platformă de vânzare",
                record5: "Preț de cumpărare",
                record6: "Preț de vânzare"
            },
            vip: {
                title: "Centru membri",
                now: "Nivel curent",
                level: "Nivel VIP",
                jiesuo: "Nivel deblocat",
                jiesuo2: "Nivel deblocat",
                tj: "Condiții de upgrade",
                tj1: "Sumă validă",
                tj2: "Număr de promotori de primă generație",
                tj3: "Nivel utilizator promovat",
                qy: "Beneficii",
                qy1: "Procent din venituri",
                qy2: "Sumă minimă de cuantificare",
                qy3: "Sumă maximă de cuantificare",
                qy4: "Frecvența zilnică de cuantificare"
            },
            safe: {
                title: "Gestionarea securității",
                login_pwd: "Parolă de conectare",
                fund_pwd: "Parolă de plată",
                safe: "Securitate",
                edit_pwd: "Modificare parolă de conectare",
                edit_fundpwd: "Modificare plată Parolă",
                phone: "Număr de telefon",
                getcode: "Obțineți codul de verificare",
                code: "Cod de verificare",
                icode: "Vă rugăm să introduceți codul de verificare",
                newpwd: "Parolă nouă",
                inewpwd: "Parolă nouă",
                renewpwd: "Confirmați noua parolă",
                renewpwd2: "Vă rugăm să introduceți noua parolă",
                oldpwd: "Parola originală",
                oldpwd2: "Introduceți parola originală",
                error: "Vă rugăm să introduceți datele",
                hold: "Vă rugăm să confirmați potrivirile noii parole"
            },
            keyboard: {
                ifundPwd: "Introduceți parola de plată",
                verifying: "Verificați parola de plată"
            },
            google: {
                step1: "Pasul 1",
                step2: "Pasul 2",
                step3: "Pasul 3",
                tip1: "Vă rugăm să descărcați Serviciile Google Play din magazinul de aplicații mobile Authenticator",
                tip2: "Conectarea contului dvs. prin Google Authenticator prin scanarea codului QR",
                code: "Vă rugăm să introduceți codul de verificare Google",
                tip3: "Conectarea contului dvs. cu Google Authenticator oferă un nivel suplimentar de securitate.",
                renzheng: "Autentificat"
            }
        }
    },
    b891: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "সংরক্ষণ",
                balance: "ভারসাম্য",
                nodata: "আর কোন তথ্য নেই",
                logout: "সফলভাবে প্রস্থান করুন",
                confirm: "নিশ্চিত করুন",
                cancel: "বাতিল করুন",
                submit: "জমা",
                recharge: "টপ আপ",
                withdraw: "নগদ উত্তোলন",
                desc: "ব্যাখ্যা করা",
                tip: "সদয় টিপস",
                tipEmail: "আপনার অ্যাকাউন্টের নিরাপত্তা আরও সুরক্ষিত করার জন্য, অনুগ্রহ করে আপনার ইমেল ঠিকানা আবদ্ধ করুন।",
                tipEmail2: "আপনার ইমেল ঠিকানা বাঁধাই আপনার অ্যাকাউন্ট নিরাপত্তার জন্য আরেকটি নিরাপত্তা গ্যারান্টি প্রদান করে।"
            },
            tabbar: {
                t1: "বাড়ি",
                t2: "দল",
                t3: "পেতে",
                t4: "সম্পদ",
                t5: "আমার"
            },
            register: {
                title: "নিবন্ধন",
                username: "ব্যবহারকারীর নাম",
                username2: "অনুগ্রহ করে ব্যবহারকারীর নাম লিখুন",
                tel: "ফোন নম্বর",
                tel2: "মোবাইল ফোন নম্বর লিখুন",
                pwd: "পাসওয়ার্ড",
                pwd2: "পাসওয়ার্ড লিখুন",
                repwd: "পাসওয়ার্ড নিশ্চিত করুন",
                repwd2: "নিশ্চিতকরণ পাসওয়ার্ড লিখুন",
                icode: "আমন্ত্রণ কোড",
                icode2: "অনুগ্রহ করে আমন্ত্রণ কোড লিখুন",
                has: "ইতিমধ্যে একটি অ্যাকাউন্ট আছে",
                has2: "এখন লগ ইন করুন",
                email: "মেইল",
                email2: "আপনার ইমেল লিখুন",
                fundPwd: "পেমেন্ট পাসওয়ার্ড",
                fundPwd2: "পেমেন্ট পাসওয়ার্ড লিখুন দয়া করে",
                yzm: "যাচাইকরণ কোড",
                yzm2: "যাচাইকরণ কোড লিখুন",
                send: "পাঠান",
                noyizhi: "পাসওয়ার্ড ইনপুট অসামঞ্জস্যপূর্ণ"
            },
            login: {
                tel: "ফোন নম্বর",
                tel2: "মোবাইল ফোন নম্বর লিখুন",
                pwd: "পাসওয়ার্ড",
                pwd2: "পাসওয়ার্ড লিখুন",
                login: "লগ ইন করুন",
                noc: "এখনো কোনো হিসাব নেই",
                noc2: "এখন নিবন্ধন করুন",
                forgetpwd: "পাসওয়ার্ড ভুলে যান",
                tip1: "হ্যালো",
                tip2: "স্বাগত জানাই",
                lang: "ভাষা পছন্দ"
            },
            forget: {
                title: "পাসওয়ার্ড ভুলে যান",
                getcode: "যাচাইকরণ কোড পান",
                code: "যাচাইকরণ কোড",
                code2: "যাচাইকরণ কোড লিখুন",
                nav1: "Google যাচাইকরণ",
                nav2: "ইমেল যাচাইকরণ",
                pwd: "নতুন পাসওয়ার্ড",
                pwd2: "নতুন পাসওয়ার্ড লিখুন",
                repwd: "পাসওয়ার্ড নিশ্চিত করুন",
                repwd2: "নিশ্চিতকরণ পাসওয়ার্ড লিখুন",
                email: "ইমেইল",
                email2: "আপনার ইমেল ঠিকানা লিখুন"
            },
            index: {
                company: "কোম্পানির প্রোফাইল",
                rule: "নিয়ম",
                invite: "বন্ধুদের আমন্ত্রণ জানান",
                hangqing: "রিয়েল-টাইম উদ্ধৃতি",
                friend: "অংশীদার",
                message: "আমার বার্তা",
                message1: "সিস্টেম বার্তা",
                message2: "মিশন বার্তা",
                message3: "সাইট বার্তা"
            },
            invite: {
                title: "বন্ধুদের আমন্ত্রণ জানান",
                tip1: "বড় উপহার জিততে বন্ধুদের আমন্ত্রণ জানান",
                tip2: "সবাই সুখী বোধ করুক এবং কিছু লাভ করুক",
                link: "আমন্ত্রণ লিঙ্ক",
                code: "আমন্ত্রণ কোড"
            },
            team: {
                title: "আমার দল",
                data: "দলের তথ্য",
                pickerAll: "সব",
                picker1: "আজ",
                picker7: "গত 7 দিন",
                picker30: "গত 30 দিন",
                picker60: "গত 60 দিন",
                addPeopel: "নতুন মানুষ",
                addEarn: "নতুন রাজস্ব",
                fenxi: "রাজস্ব বিশ্লেষণ",
                shouru1: "টাস্ক ইনকাম",
                shouru2: "রাজস্ব পরিমাপ করুন",
                shouru3: "পরিমাণকৃত আয় প্রচার করুন",
                guimo: "দলের আকার",
                youxiao: "দল কাজ করে",
                tdRecharge: "দল রিচার্জ",
                tdCash: "দল প্রত্যাহার",
                lookAll: "সব দেখুন",
                card1: "মোট কমিশন",
                card2: "পুঞ্জীভূত রিচার্জ",
                card3: "ক্রমবর্ধমান প্রত্যাহার",
                userNum: "ব্যবহারকারীর সংখ্যা",
                yj: "কমিশন শতাংশ",
                ljEarn: "ক্রমবর্ধমান আয়",
                level1: "লেভেল 1",
                level2: "লেভেল 2",
                level3: "লেভেল 3",
                list: "দলের তালিকা",
                taskNums: "কোয়ান্টাইজেশন বার"
            },
            fund: {
                title: "সম্পদ",
                title2: "সম্পদ পরিচিতি",
                all: "মোট সম্পদ",
                wait: "অসংগৃহীত পুরস্কার",
                card1: "নমনীয় তহবিল",
                card2: "মুক্তির পরিমাণ",
                card3: "ট্রায়াল ফি",
                detail: "সম্পদের বিবরণ",
                lookAll: "সব দেখুন",
                type1: "সব",
                type2: "আয়",
                type3: "ব্যয়",
                task: "মিশন কেন্দ্র",
                taskTip1: "রোবট পরিমাপ",
                taskTip2: "সহজে সম্পদ বৃদ্ধি",
                detailCard1: "পরিমাণ",
                detailCard2: "নাম",
                detailCard3: "প্রকার",
                detailCard4: "অর্ডার নম্বর",
                detailCard5: "সময়",
                back: "ফিরে"
            },
            task: {
                up: "{level} এ আপগ্রেড করুন",
                up2: "{level}-এ আপগ্রেড করুন এবং আপনি {money} পাবেন",
                done: "সম্পন্ন",
                ing: "চলছে",
                can: "গ্রহণ",
                inviteNum: "{nums} জনকে {money} জমা দেওয়ার জন্য আমন্ত্রণ জানান",
                inviteAward: "আপনি {award} পাবেন"
            },
            mine: {
                icode: "আমন্ত্রণ কোড",
                goOut: "প্রস্থান",
                jiesuo: "এই স্তরটি আনলক করা হয়েছে৷",
                shengji: "এখন আপগ্রেড করুন",
                zichan: "মোট সম্পদ",
                card1: "ওয়ালেট ব্যালেন্স",
                card2: "ফান্ড রিলিজ করা হবে",
                card3: "ক্রমবর্ধমান আয়",
                card4: "ক্রমবর্ধমান প্রত্যাহার",
                card5: "দলের আকার",
                changyong: "সাধারণত ব্যবহৃত ফাংশন",
                email: "ইমেইল",
                pwd: "লগইন পাসওয়ার্ড",
                fundPwd: "লেনদেনের পাসওয়ার্ড",
                other: "অন্যান্য ফাংশন",
                help: "সহায়তা কেন্দ্র",
                userTl: "ব্যবহারকারীর শর্তাবলী",
                lang: "ভাষা পরিবর্তন করুন",
                kefu: "গ্রাহক সেবা",
                onlineServer: "অনলাইন গ্রাহক সেবা",
                qiandao: "সাইন ইন করুন",
                lx: "সংযোগ",
                qiandaoTip: "যতবার আপনি {num} দিন সাইন ইন করবেন, আপনি {money} পাবেন",
                bank: "ব্যাংক কার্ড",
                address: "প্রত্যাহারের ঠিকানা",
                logoutTip: "আপনি কি নিশ্চিত আপনি লগ আউট করতে চান?"
            },
            recharge: {
                amount: "রিচার্জ পরিমাণ",
                amount2: "অনুগ্রহ করে রিচার্জের পরিমাণ লিখুন",
                amountO: "অন্যান্য রিচার্জ পরিমাণ",
                methods: "রিচার্জ পদ্ধতি",
                btn: "এখনই রিচার্জ করুন",
                record: "রিচার্জ রেকর্ড",
                min: "ন্যূনতম প্রত্যাহারের পরিমাণ",
                desc: "ব্যাখ্যা করা",
                pingzheng: "রিচার্জ ভাউচার",
                pingzheng2: "অনুগ্রহ করে রিচার্জ ভাউচার আপলোড করুন",
                address: "রিচার্জ ঠিকানা",
                status0: "দিতে হবে",
                status1: "সম্পন্ন",
                status2: "রিচার্জ ব্যর্থ হয়েছে",
                status3: "বাতিল",
                detailCard1: "রিচার্জ পদ্ধতি",
                detailCard2: "রাষ্ট্র",
                detailCard3: "অর্ডার নম্বর",
                detailCard4: "সময়",
                detailCard5: "পরিমাণ",
                go: "অনুগ্রহ করে ব্যাঙ্ক কার্ড বাইন্ড করতে যান",
                usdtTip1: "1. এই ঠিকানাটি শুধুমাত্র USDT TRC20 প্রোটোকল রিচার্জ গ্রহণ করে দয়া করে অন্য মুদ্রা বা অন্যান্য প্রোটোকল জমা করবেন না৷",
                usdtTip2: "2. অনুগ্রহ করে প্রতিটি রিচার্জের জন্য রিচার্জের ঠিকানা সাবধানে চেক করুন।",
                usdtTip3: "3. টপ-আপ সাধারণত স্থানান্তর সম্পূর্ণ করার কয়েক মিনিটের মধ্যে পৌঁছে যায়"
            },
            bank: {
                bank: "ব্যাংক",
                bank2: "ব্যাঙ্ক লিখুন",
                bankAccount: "ব্যাঙ্ক অ্যাকাউন্ট",
                bankAccount2: "ব্যাঙ্ক অ্যাকাউন্ট লিখুন",
                kaihuren: "হিসাবধারী",
                kaihuren2: "অনুগ্রহ করে একাউন্ট হোল্ডার লিখুন",
                tel: "ফোন নম্বর",
                tel2: "মোবাইল ফোন নম্বর লিখুন"
            },
            withdraw: {
                record: "প্রত্যাহারের রেকর্ড",
                account: "অ্যাকাউন্ট প্রত্যাহার করুন",
                account2: "একটি প্রত্যাহার অ্যাকাউন্ট নির্বাচন করুন",
                accountRed: "প্রত্যাহার অ্যাকাউন্ট ব্যবস্থাপনা",
                amount: "পরিমাণ প্রত্যাহার",
                amount2: "প্রত্যাহার পরিমাণ লিখুন দয়া করে",
                keyong: "উপলব্ধ ভারসাম্য",
                tip: "প্রত্যাহারের নোট",
                pwd: "পেমেন্ট পাসওয়ার্ড",
                pwd2: "পেমেন্ট পাসওয়ার্ড লিখুন দয়া করে",
                min: "ন্যূনতম প্রত্যাহারের পরিমাণ",
                fee: "হ্যান্ডলিং ফি",
                status0: "মুলতুবি পর্যালোচনা",
                status1: "লেনদেন সম্পন্ন",
                status2: "নামিয়ে দিন",
                status3: "স্থানান্তর করা হচ্ছে",
                status4: "লেনদেন সম্পন্ন"
            },
            account: {
                title: "অ্যাকাউন্ট ব্যবস্থাপনা",
                bind: "বাঁধাই যান",
                bind2: "আবদ্ধ",
                address: "ঠিকানা",
                address2: "ঠিকানা লিখুন",
                btn: "এখন বাঁধুন",
                tip1: "অনুগ্রহ করে নিশ্চিত করুন যে আপনার অ্যাকাউন্টটি আপনার আসল-নামের অ্যাকাউন্ট না হলে, প্রত্যাহার ব্যর্থ হবে এবং অ্যাকাউন্টটি হিমায়িত হয়ে যাবে।",
                tip2: "আপনি যদি আপনার অ্যাকাউন্ট পরিবর্তন করতে চান, অনুগ্রহ করে গ্রাহক পরিষেবার সাথে যোগাযোগ করুন"
            },
            get: {
                title: "পরিমাপ করুন",
                card1: "আজ পরিমাপযোগ্য পরিমাণ",
                card2: "আজকের আয়",
                card3: "আজ পরিমাপযোগ্য সময়",
                card4: "মোট রাজস্ব",
                btn: "স্বয়ংক্রিয় পরিমাণ নির্ধারণ",
                liucheng: "প্যানেল প্রক্রিয়া পরিচালনা করুন",
                step1: "1. তথ্য সংগ্রহের কাজ চলছে",
                step2: "2. টেকসই উন্নয়ন কৌশল",
                step3: "3. ব্যাকটেস্টিং চলছে",
                step4: "4. নির্বাহ করা",
                step5: "5. পরিমাপ সম্পন্ন হয়েছে",
                record: "পরিমাণগত রেকর্ড",
                record1: "বিনিয়োগের পরিমাণ",
                record2: "লাভ",
                record3: "প্ল্যাটফর্ম কেনার",
                record4: "প্ল্যাটফর্ম বিক্রি",
                record5: "ক্রয় মূল্য",
                record6: "বিক্রয় মূল্য"
            },
            vip: {
                title: "সদস্য কেন্দ্র",
                now: "বর্তমান স্তর",
                level: "ভিআইপি স্তর",
                jiesuo: "এই স্তরটি আনলক করা হয়েছে৷",
                jiesuo2: "এই স্তর আনলক করা হয় না",
                tj: "আপগ্রেড শর্ত",
                tj1: "কার্যকরী পরিমাণ",
                tj2: "এক প্রজন্মে পদোন্নতির সংখ্যা",
                tj3: "ব্যবহারকারীর স্তর প্রচার করুন",
                qy: "অধিকার এবং স্বার্থ",
                qy1: "রাজস্ব শতাংশ",
                qy2: "ন্যূনতম পরিমাপকৃত পরিমাণ",
                qy3: "সর্বোচ্চ পরিমাপকৃত পরিমাণ",
                qy4: "প্রতিদিন পরিমাণের সংখ্যা"
            },
            safe: {
                title: "নিরাপত্তা ব্যবস্থাপনা",
                login_pwd: "লগইন পাসওয়ার্ড",
                fund_pwd: "পেমেন্ট পাসওয়ার্ড",
                safe: "নিরাপত্তা",
                edit_pwd: "লগইন পাসওয়ার্ড পরিবর্তন করুন",
                edit_fundpwd: "পেমেন্ট পাসওয়ার্ড পরিবর্তন করুন",
                phone: "টেলিফোন নম্বর",
                getcode: "যাচাইকরণ কোড পান",
                code: "যাচাইকরণ কোড",
                icode: "যাচাইকরণ কোড লিখুন",
                newpwd: "নতুন পাসওয়ার্ড",
                inewpwd: "নতুন পাসওয়ার্ড",
                renewpwd: "নতুন পাসওয়ার্ড নিশ্চিত করুন",
                renewpwd2: "নতুন পাসওয়ার্ড লিখুন",
                oldpwd: "মূল পাসওয়ার্ড",
                oldpwd2: "আসল পাসওয়ার্ড লিখুন",
                error: "তথ্য লিখুন",
                hold: "অনুগ্রহ করে নিশ্চিত করুন যে নতুন পাসওয়ার্ডটি সামঞ্জস্যপূর্ণ"
            },
            keyboard: {
                ifundPwd: "পেমেন্ট পাসওয়ার্ড লিখুন",
                verifying: "পেমেন্ট পাসওয়ার্ড চেক করুন"
            },
            google: {
                step1: "প্রথম ধাপ",
                step2: "ধাপ 2",
                step3: "ধাপ 3",
                tip1: "অনুগ্রহ করে মোবাইল অ্যাপ স্টোর থেকে Google Authenticator ডাউনলোড করুন",
                tip2: "Google প্রমাণীকরণকারীর মাধ্যমে আবদ্ধ করতে QR কোড স্ক্যান করুন",
                code: "অনুগ্রহ করে Google যাচাইকরণ কোড লিখুন",
                tip3: "Google Authenticator বাইন্ডিং আপনার অ্যাকাউন্টের নিরাপত্তার জন্য নিরাপত্তার আরেকটি স্তর প্রদান করে।",
                renzheng: "প্রত্যয়িত"
            }
        }
    },
    bf15: function(e, a, n) {
        var i = n("1635");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var t = n("967d").default;
        t("52395f0c", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c106: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "menyimpan",
                balance: "Keseimbangan",
                nodata: "tidak ada data lagi",
                logout: "Keluar dengan sukses",
                confirm: "mengonfirmasi",
                cancel: "Membatalkan",
                submit: "kirim",
                recharge: "isi ulang",
                withdraw: "Tarik uang tunai",
                desc: "menjelaskan",
                tip: "Tip yang baik",
                tipEmail: "Untuk lebih melindungi keamanan akun Anda, harap ikat alamat email Anda.",
                tipEmail2: "Mengikat alamat email Anda memberikan jaminan keamanan lain untuk keamanan akun Anda."
            },
            tabbar: {
                t1: "Rumah",
                t2: "Tim",
                t3: "Mendapatkan",
                t4: "Aktiva",
                t5: "Milikku"
            },
            register: {
                title: "daftar",
                username: "nama belakang",
                username2: "Silakan masukkan nama pengguna",
                tel: "Nomor telepon",
                tel2: "Silakan masukkan nomor ponsel",
                pwd: "kata sandi",
                pwd2: "Silakan masukkan kata sandi",
                repwd: "Konfirmasi Kata Sandi",
                repwd2: "Silakan masukkan kata sandi konfirmasi",
                icode: "Kode undangan",
                icode2: "Silakan masukkan kode undangan",
                has: "Sudah punya akun",
                has2: "Masuk sekarang",
                email: "Surat",
                email2: "Silakan masukkan email Anda",
                fundPwd: "Kata sandi pembayaran",
                fundPwd2: "Silakan masukkan kata sandi pembayaran",
                yzm: "Kode verifikasi",
                yzm2: "Silakan masukkan kode verifikasi",
                send: "mengirim",
                noyizhi: "Input kata sandi tidak konsisten"
            },
            login: {
                tel: "Nomor telepon",
                tel2: "Silakan masukkan nomor ponsel",
                pwd: "kata sandi",
                pwd2: "Silakan masukkan kata sandi",
                login: "Masuk",
                noc: "Belum ada akun",
                noc2: "Daftar sekarang",
                forgetpwd: "lupa kata sandinya",
                tip1: "Halo",
                tip2: "Selamat Datang di",
                lang: "Preferensi bahasa"
            },
            forget: {
                title: "lupa kata sandinya",
                getcode: "Dapatkan kode verifikasi",
                code: "Kode verifikasi",
                code2: "Silakan masukkan kode verifikasi",
                nav1: "Verifikasi Google",
                nav2: "Verifikasi email",
                pwd: "Kata Sandi Baru",
                pwd2: "Silakan masukkan kata sandi baru",
                repwd: "Konfirmasi Kata Sandi",
                repwd2: "Silakan masukkan kata sandi konfirmasi",
                email: "E-mail",
                email2: "Silakan masukkan alamat email Anda"
            },
            index: {
                company: "Profil Perusahaan",
                rule: "aturan",
                invite: "Undang teman",
                hangqing: "Kutipan waktu nyata",
                friend: "Mitra",
                message: "pesan saya",
                message1: "Pesan sistem",
                message2: "pesan misi",
                message3: "Pesan situs"
            },
            invite: {
                title: "Undang teman",
                tip1: "Undang teman untuk memenangkan hadiah besar",
                tip2: "Biarkan semua orang merasa bahagia dan mendapatkan sesuatu",
                link: "Tautan undangan",
                code: "Kode undangan"
            },
            team: {
                title: "tim saya",
                data: "Data tim",
                pickerAll: "semua",
                picker1: "Hari ini",
                picker7: "7 hari terakhir",
                picker30: "30 hari terakhir",
                picker60: "60 hari terakhir",
                addPeopel: "Orang baru",
                addEarn: "Pendapatan baru",
                fenxi: "analisis pendapatan",
                shouru1: "Pendapatan tugas",
                shouru2: "Hitung pendapatan",
                shouru3: "Mempromosikan pendapatan terukur",
                guimo: "Ukuran tim",
                youxiao: "Kerja tim",
                tdRecharge: "Pengisian ulang tim",
                tdCash: "Penarikan tim",
                lookAll: "Lihat semuanya",
                card1: "total komisi",
                card2: "Akumulasi isi ulang",
                card3: "Penarikan kumulatif",
                userNum: "jumlah pengguna",
                yj: "persentase komisi",
                ljEarn: "Pendapatan kumulatif",
                level1: "tingkat 1",
                level2: "tingkat 2",
                level3: "tingkat 3",
                list: "Daftar tim",
                taskNums: "Waktu kuantisasi"
            },
            fund: {
                title: "aktiva",
                title2: "Pengenalan aset",
                all: "total aset",
                wait: "Hadiah untuk diklaim",
                card1: "Dana fleksibel",
                card2: "Jumlah yang akan dikeluarkan",
                card3: "Biaya percobaan",
                detail: "Detail aset",
                lookAll: "Lihat semuanya",
                type1: "semua",
                type2: "penghasilan",
                type3: "pengeluaran",
                task: "pusat misi",
                taskTip1: "Kuantifikasi robot",
                taskTip2: "Meningkatkan kekayaan dengan mudah",
                detailCard1: "Jumlah",
                detailCard2: "nama",
                detailCard3: "jenis",
                detailCard4: "Nomor pesanan",
                detailCard5: "waktu",
                back: "kembali"
            },
            task: {
                up: "Tingkatkan ke {level}",
                up2: "Tingkatkan ke {level} dan Anda akan mendapatkan {money}",
                done: "Selesai",
                ing: "sedang berlangsung",
                can: "menerima",
                inviteNum: "Undang {nums} orang untuk menyetor {money}",
                inviteAward: "Anda akan menerima {award}"
            },
            mine: {
                icode: "Kode undangan",
                goOut: "berhenti",
                jiesuo: "Level ini telah dibuka",
                shengji: "Tingkatkan sekarang",
                zichan: "Jumlah aset",
                card1: "saldo dompet",
                card2: "Dana yang akan dikeluarkan",
                card3: "Pendapatan kumulatif",
                card4: "Penarikan kumulatif",
                card5: "Ukuran tim",
                changyong: "Fungsi yang umum digunakan",
                email: "E-mail",
                pwd: "Kata sandi masuk",
                fundPwd: "Kata sandi transaksi",
                other: "Fungsi lainnya",
                help: "Pusat Bantuan",
                userTl: "Ketentuan Pengguna",
                lang: "beralih bahasa",
                kefu: "pelayanan pelanggan",
                onlineServer: "Layanan pelanggan daring",
                qiandao: "Masuk",
                lx: "menghubungkan",
                qiandaoTip: "Setiap kali Anda masuk dalam {num} hari, Anda akan mendapatkan {money}",
                bank: "kartu bank",
                address: "Alamat penarikan",
                logoutTip: "Apakah Anda yakin ingin logout?"
            },
            recharge: {
                amount: "Jumlah isi ulang",
                amount2: "Silakan masukkan jumlah isi ulang",
                amountO: "Jumlah isi ulang lainnya",
                methods: "Metode isi ulang",
                btn: "Isi ulang sekarang",
                record: "Catatan isi ulang",
                min: "Jumlah penarikan minimum",
                desc: "menjelaskan",
                pingzheng: "Isi ulang voucher",
                pingzheng2: "Silakan unggah voucher isi ulang",
                address: "Alamat isi ulang",
                status0: "Harus dibayar",
                status1: "Selesai",
                status2: "Gagal mengisi ulang",
                status3: "Dibatalkan",
                detailCard1: "Metode isi ulang",
                detailCard2: "negara",
                detailCard3: "Nomor pesanan",
                detailCard4: "waktu",
                detailCard5: "Jumlah",
                go: "Silakan pergi untuk mengikat kartu bank",
                usdtTip1: "1. Alamat ini hanya menerima isi ulang protokol USDT TRC20. Harap jangan menyetor mata uang atau protokol lain.",
                usdtTip2: "2. Harap periksa dengan cermat alamat isi ulang untuk setiap isi ulang. Jumlah setiap isi ulang akan dihitung berdasarkan jumlah sebenarnya yang dikirimkan.",
                usdtTip3: "3. Top-up biasanya dicapai dalam beberapa menit setelah transfer selesai"
            },
            bank: {
                bank: "bank",
                bank2: "Silakan masukkan bank",
                bankAccount: "rekening bank",
                bankAccount2: "Silakan masukkan rekening bank",
                kaihuren: "Pemegang akun",
                kaihuren2: "Silakan masukkan pemegang akun",
                tel: "Nomor telepon",
                tel2: "Silakan masukkan nomor ponsel"
            },
            withdraw: {
                record: "Catatan penarikan",
                account: "Tarik akun",
                account2: "Silakan pilih akun penarikan",
                accountRed: "Manajemen akun penarikan",
                amount: "Jumlah penarikan",
                amount2: "Silakan masukkan jumlah penarikan",
                keyong: "saldo yang tersedia",
                tip: "Catatan tentang Penarikan",
                pwd: "Kata sandi pembayaran",
                pwd2: "Silakan masukkan kata sandi pembayaran",
                min: "Jumlah penarikan minimum",
                fee: "biaya penanganan",
                status0: "Peninjauan tertunda",
                status1: "Transaksi selesai",
                status2: "Mengecilkan",
                status3: "Mentransfer",
                status4: "Transaksi selesai"
            },
            account: {
                title: "Manajemen akun",
                bind: "Lanjutkan ke penjilidan",
                bind2: "Melompat",
                address: "alamat",
                address2: "Silakan masukkan alamat",
                btn: "Ikat sekarang",
                tip1: "Harap pastikan bahwa akun Anda adalah akun dengan nama asli Anda. Jika itu bukan akun dengan nama asli Anda, penarikan akan gagal dan akun akan dibekukan.",
                tip2: "Jika Anda perlu mengubah akun Anda, silakan hubungi layanan pelanggan"
            },
            get: {
                title: "Mengukur",
                card1: "Jumlah yang dapat dihitung hari ini",
                card2: "Penghasilan hari ini",
                card3: "Waktu yang dapat diukur hari ini",
                card4: "pendapatan total",
                btn: "kuantifikasi otomatis",
                liucheng: "Melakukan proses panel",
                step1: "1. Pengumpulan data sedang berlangsung",
                step2: "2. Strategi pembangunan berkelanjutan",
                step3: "3. Pengujian ulang sedang berlangsung",
                step4: "4. Pelaksanaan",
                step5: "5. Kuantifikasi selesai",
                record: "Catatan kuantitatif",
                record1: "Jumlah investasi",
                record2: "laba",
                record3: "Platform pembelian",
                record4: "menjual platform",
                record5: "harga pembelian",
                record6: "harga penjualan"
            },
            vip: {
                title: "Pusat Anggota",
                now: "tingkat saat ini",
                level: "tingkat VIP",
                jiesuo: "Level ini telah dibuka",
                jiesuo2: "Level ini belum dibuka",
                tj: "Kondisi peningkatan",
                tj1: "Jumlah efektif",
                tj2: "Jumlah orang yang dipromosikan dalam satu generasi",
                tj3: "Promosikan tingkat pengguna",
                qy: "hak dan kepentingan",
                qy1: "Persentase pendapatan",
                qy2: "jumlah minimum yang terukur",
                qy3: "Jumlah terukur maksimum",
                qy4: "Jumlah kuantifikasi per hari"
            },
            safe: {
                title: "Manajemen keamanan",
                login_pwd: "Kata sandi masuk",
                fund_pwd: "Kata sandi pembayaran",
                safe: "Keamanan",
                edit_pwd: "Ubah kata sandi masuk",
                edit_fundpwd: "Ubah kata sandi pembayaran",
                phone: "nomor telepon",
                getcode: "Dapatkan kode verifikasi",
                code: "Kode verifikasi",
                icode: "Silakan masukkan kode verifikasi",
                newpwd: "Kata Sandi Baru",
                inewpwd: "Kata Sandi Baru",
                renewpwd: "Konfirmasikan kata sandi baru",
                renewpwd2: "Silakan masukkan kata sandi baru",
                oldpwd: "kata sandi asli",
                oldpwd2: "Masukkan kata sandi asli",
                error: "Silakan masukkan data",
                hold: "Harap konfirmasi bahwa kata sandi baru konsisten"
            },
            keyboard: {
                ifundPwd: "Masukkan kata sandi pembayaran",
                verifying: "Periksa kata sandi pembayaran"
            },
            google: {
                step1: "langkah pertama",
                step2: "Langkah 2",
                step3: "Langkah 3",
                tip1: "Silakan unduh Google Authenticator dari toko aplikasi seluler",
                tip2: "Pindai kode QR untuk mengikat melalui Google Authenticator",
                code: "Silakan masukkan kode verifikasi Google",
                tip3: "Mengikat Google Authenticator memberikan lapisan keamanan lain untuk keamanan akun Anda.",
                renzheng: "Bersertifikat"
            }
        }
    },
    cae8: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0,
        n("e966"),
        n("e838");
        var i = {
            data: function() {
                return {
                    pop: {},
                    cloading: !1,
                    throttle_flag: null,
                    throttle_timer: null
                }
            },
            computed: {
                userInfo: function() {
                    return this.$store.state.userInfo
                }
            },
            methods: {
                load: function(e) {
                    this.cloading = e,
                    this.pop = e ? {
                        show: !0,
                        icon: "loading"
                    } : {
                        show: !1,
                        icon: "loading"
                    }
                },
                showPop: function(e, a) {
                    var n = this
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1500;
                    this.pop = {
                        show: !0,
                        icon: e,
                        msg: a
                    },
                    setTimeout((function() {
                        n.pop.show = !1
                    }
                    ), i)
                },
                $getTime: function(e) {
                    var a = new Date(1e3 * parseInt(e))
                      , n = a.getFullYear()
                      , i = a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1
                      , t = a.getDate() < 10 ? "0" + a.getDate() : a.getDate()
                      , o = a.getHours() < 10 ? "0" + a.getHours() : a.getHours()
                      , r = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes()
                      , d = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds()
                      , s = n + "-" + i + "-" + t + "   " + o + ":" + r + ":" + d;
                    return s
                },
                $copy: function(e) {
                    var a = this;
                    uni.setClipboardData({
                        data: e,
                        showToast: !1,
                        success: function() {
                            a.pop = {
                                show: !0,
                                icon: "success"
                            },
                            setTimeout((function() {
                                a.pop.show = !1
                            }
                            ), 1500)
                        }
                    })
                },
                $goBack: function() {
                    uni.navigateBack()
                },
                $goPath: function(e) {
                    window.location.href = e
                },
                goPage: function(e) {
                    var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    a && uni.navigateTo({
                        url: e
                    })
                },
                addDate: function(e, a) {
                    var n = new Date(e);
                    n.setDate(n.getDate() + a);
                    var i = n.getMonth() + 1;
                    return n.getFullYear() + "-" + i + "-" + n.getDate()
                },
                throttle: function(e) {
                    var a = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500
                      , i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    i ? this.throttle_flag || (this.throttle_flag = !0,
                    "function" === typeof e && e(),
                    this.throttle_timer = setTimeout((function() {
                        a.throttle_flag = !1
                    }
                    ), n)) : this.throttle_flag || (this.throttle_flag = !0,
                    this.throttle_timer = setTimeout((function() {
                        a.throttle_flag = !1,
                        "function" === typeof e && e()
                    }
                    ), n))
                },
                numFormatter: function(e) {
                    var a, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (n <= 0 ? a = e ? parseInt(e) : 0 : (e = e ? parseFloat(e) : 0,
                    e = e.toFixed(n + 1),
                    a = e.substring(0, e.length - 1)),
                    1 == i) {
                        var t = uni.getStorageSync("siteInfo");
                        a = "before" == t.currencySymbolPos ? t.currencySymbol + " " + a : a + " " + t.currencySymbol
                    }
                    return a
                }
            }
        };
        a.default = i
    },
    cdb0: function(e, a, n) {
        "use strict";
        n.r(a);
        var i = n("2e74")
          , t = n("f481");
        for (var o in t)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(a, e, (function() {
                    return t[e]
                }
                ))
            }(o);
        n("5f62");
        var r = n("828b")
          , d = Object(r["a"])(t["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], void 0);
        a["default"] = d.exports
    },
    cf63: function(e, a, n) {
        "use strict";
        var i = n("f5bd").default
          , t = i(n("9b1b"));
        n("3dde"),
        n("a8b2"),
        n("1480"),
        n("6e4a"),
        n("b06c"),
        n("9337");
        var o = i(n("9b8e"))
          , r = i(n("cdb0"))
          , d = i(n("a072"))
          , s = i(n("41b5"))
          , l = i(n("23af"))
          , c = i(n("7719"))
          , u = i(n("cae8"))
          , g = i(n("4d79"))
          , p = i(n("039d"))
          , m = i(n("0e06"))
          , f = i(n("1f24"))
          , h = i(n("b891"))
          , b = i(n("6f85"))
          , k = i(n("4923"))
          , w = i(n("1104"))
          , y = i(n("0333"))
          , v = i(n("0471"))
          , x = i(n("e135"))
          , z = i(n("4a29"))
          , C = i(n("c106"))
          , A = i(n("f83e"))
          , j = i(n("0889"))
          , P = i(n("72e6"))
          , T = i(n("8879"))
          , I = i(n("1eff"))
          , S = i(n("3533"))
          , q = i(n("378c"))
          , B = i(n("b3b2"))
          , E = i(n("1566"))
          , V = i(n("5993"))
          , M = i(n("7e6f"))
          , N = i(n("5b11"))
          , G = i(n("f779"))
          , L = i(n("7daf"))
          , D = i(n("b303"))
          , O = i(n("ae61"))
          , R = i(n("8277"));
        o.default.component("navbar", d.default),
        o.default.component("tabbar", s.default),
        o.default.component("pop", l.default),
        o.default.use(c.default),
        uni.$u.config.unit = "rpx",
        o.default.mixin(u.default),
        o.default.use(g.default);
        var K = new g.default({
            locale: uni.getStorageSync("lang"),
            messages: {
                zh: p.default,
                en: m.default,
                ar: f.default,
                bn: h.default,
                de: b.default,
                el: k.default,
                es: w.default,
                fa: y.default,
                fi: v.default,
                fr: x.default,
                hi: z.default,
                id: C.default,
                it: A.default,
                ja: j.default,
                ko: P.default,
                ms: T.default,
                nl: I.default,
                pl: S.default,
                pt: q.default,
                ro: B.default,
                ru: E.default,
                sv: V.default,
                th: M.default,
                tr: N.default,
                uk: G.default,
                uz: L.default,
                vi: D.default
            }
        });
        o.default.prototype._i18n = K,
        o.default.prototype.$request = O.default,
        o.default.prototype.$store = R.default,
        o.default.config.productionTip = !1,
        r.default.mpType = "app";
        var U = new o.default((0,
        t.default)((0,
        t.default)({}, r.default), {}, {
            store: R.default
        }));
        U.$mount()
    },
    d3b8: function(e, a, n) {
        var i = n("5858");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var t = n("967d").default;
        t("281dedae", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    e135: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "sauvegarder",
                balance: "Équilibre",
                nodata: "plus de données",
                logout: "Quitter avec succès",
                confirm: "confirmer",
                cancel: "Annuler",
                submit: "soumettre",
                recharge: "recharger",
                withdraw: "Retirer de l'argent",
                desc: "illustrer",
                tip: "Conseils aimables",
                tipEmail: "Afin de protéger davantage la sécurité de votre compte, veuillez lier votre adresse e-mail.",
                tipEmail2: "La liaison de votre adresse e-mail offre une autre garantie de sécurité pour la sécurité de votre compte."
            },
            tabbar: {
                t1: "Maison",
                t2: "équipe",
                t3: "Obtenir",
                t4: "Actifs",
                t5: "Le mien"
            },
            register: {
                title: "registre",
                username: "nom d'utilisateur",
                username2: "Veuillez saisir votre nom d'utilisateur",
                tel: "Numéro de téléphone",
                tel2: "Veuillez entrer le numéro de téléphone portable",
                pwd: "mot de passe",
                pwd2: "Veuillez entrer le mot de passe",
                repwd: "Confirmez le mot de passe",
                repwd2: "Veuillez saisir le mot de passe de confirmation",
                icode: "Code d'invitation",
                icode2: "Veuillez entrer le code d'invitation",
                has: "Vous avez déjà un compte",
                has2: "Connectez-vous maintenant",
                email: "Mail",
                email2: "Veuillez entrer votre email",
                fundPwd: "Mot de passe de paiement",
                fundPwd2: "Veuillez saisir le mot de passe de paiement",
                yzm: "Le code de vérification",
                yzm2: "Veuillez entrer le code de vérification",
                send: "envoyer",
                noyizhi: "La saisie du mot de passe est incohérente"
            },
            login: {
                tel: "Numéro de téléphone",
                tel2: "Veuillez entrer le numéro de téléphone portable",
                pwd: "mot de passe",
                pwd2: "Veuillez entrer le mot de passe",
                login: "Se connecter",
                noc: "Pas encore de compte",
                noc2: "Inscrivez-vous maintenant",
                forgetpwd: "oublier le mot de passe",
                tip1: "Bonjour",
                tip2: "bienvenue à",
                lang: "Préférence linguistique"
            },
            forget: {
                title: "oublier le mot de passe",
                getcode: "Obtenir le code de vérification",
                code: "Le code de vérification",
                code2: "Veuillez entrer le code de vérification",
                nav1: "Vérification Google",
                nav2: "Vérification des e-mails",
                pwd: "Nouveau mot de passe",
                pwd2: "Veuillez entrer un nouveau mot de passe",
                repwd: "Confirmez le mot de passe",
                repwd2: "Veuillez saisir le mot de passe de confirmation",
                email: "E-mail",
                email2: "Veuillez entrer votre adresse e-mail"
            },
            index: {
                company: "Profil de l'entreprise",
                rule: "règle",
                invite: "Inviter des amis",
                hangqing: "Cotations en temps réel",
                friend: "Partenaires",
                message: "mon message",
                message1: "Messages système",
                message2: "message de mission",
                message3: "Message du site"
            },
            invite: {
                title: "Inviter des amis",
                tip1: "Invitez des amis à gagner de gros cadeaux",
                tip2: "Que tout le monde se sente heureux et gagne quelque chose",
                link: "Lien d'invitation",
                code: "Code d'invitation"
            },
            team: {
                title: "mon équipe",
                data: "Données de l'équipe",
                pickerAll: "tous",
                picker1: "aujourd'hui",
                picker7: "les 7 derniers jours",
                picker30: "30 derniers jours",
                picker60: "60 derniers jours",
                addPeopel: "De nouvelles personnes",
                addEarn: "Nouveaux revenus",
                fenxi: "analyse des revenus",
                shouru1: "Revenu de tâche",
                shouru2: "Quantifier les revenus",
                shouru3: "Favoriser des revenus quantifiés",
                guimo: "Taille de l'équipe",
                youxiao: "Travail d'équipe",
                tdRecharge: "Recharge d'équipe",
                tdCash: "Retrait de l'équipe",
                lookAll: "Voir tout",
                card1: "commission totale",
                card2: "Recharge accumulée",
                card3: "Retraits cumulés",
                userNum: "nombre d'utilisateurs",
                yj: "pourcentage de commission",
                ljEarn: "Revenu cumulé",
                level1: "Niveau 1",
                level2: "Niveau 2",
                level3: "Niveau 3",
                list: "Liste des équipes",
                taskNums: "Temps de quantification"
            },
            fund: {
                title: "actifs",
                title2: "Présentation des actifs",
                all: "actif total",
                wait: "Récompenses à réclamer",
                card1: "Fonds flexibles",
                card2: "Montant à débloquer",
                card3: "Frais d'essai",
                detail: "Détails de l'actif",
                lookAll: "Voir tout",
                type1: "tous",
                type2: "revenu",
                type3: "dépense",
                task: "centre de mission",
                taskTip1: "Quantification des robots",
                taskTip2: "Augmentez facilement votre richesse",
                detailCard1: "Montant",
                detailCard2: "nom",
                detailCard3: "taper",
                detailCard4: "Numéro de commande",
                detailCard5: "temps",
                back: "retour"
            },
            task: {
                up: "Passer au niveau {level}",
                up2: "Passez au niveau {level} et vous obtiendrez {money}",
                done: "Complété",
                ing: "en cours",
                can: "recevoir",
                inviteNum: "Invitez {nums} personnes à déposer {money}",
                inviteAward: "Vous recevrez {award}"
            },
            mine: {
                icode: "Code d'invitation",
                goOut: "quitter",
                jiesuo: "Ce niveau a été débloqué",
                shengji: "Mettre à niveau maintenant",
                zichan: "Actif total",
                card1: "solde du portefeuille",
                card2: "Fonds à débloquer",
                card3: "Revenu cumulé",
                card4: "Retraits cumulés",
                card5: "Taille de l'équipe",
                changyong: "Fonctions couramment utilisées",
                email: "E-mail",
                pwd: "Mot de passe de connexion",
                fundPwd: "Mot de passe de transaction",
                other: "Autres fonctions",
                help: "Centre d'aide",
                userTl: "Conditions d'utilisation",
                lang: "changer de langue",
                kefu: "service client",
                onlineServer: "Service client en ligne",
                qiandao: "Se connecter",
                lx: "connecter",
                qiandaoTip: "Chaque fois que vous vous connectez dans {num} jours, vous recevrez {money}",
                bank: "carte bancaire",
                address: "Adresse de retrait",
                logoutTip: "Êtes-vous sûr de vouloir vous déconnecter ?"
            },
            recharge: {
                amount: "Montant de la recharge",
                amount2: "Veuillez saisir le montant de la recharge",
                amountO: "Autres montants de recharge",
                methods: "Méthode de recharge",
                btn: "Rechargez maintenant",
                record: "Recharger l'enregistrement",
                min: "Montant minimum de retrait",
                desc: "illustrer",
                pingzheng: "Bon de recharge",
                pingzheng2: "Veuillez télécharger le bon de recharge",
                address: "Adresse de recharge",
                status0: "Être payé",
                status1: "Complété",
                status2: "La recharge a échoué",
                status3: "Annulé",
                detailCard1: "Méthode de recharge",
                detailCard2: "État",
                detailCard3: "Numéro de commande",
                detailCard4: "temps",
                detailCard5: "Montant",
                go: "Veuillez aller lier la carte bancaire",
                usdtTip1: "1. Cette adresse n'accepte que la recharge du protocole USDT TRC20. Veuillez ne pas déposer d'autres devises ou d'autres protocoles.",
                usdtTip2: "2. Veuillez vérifier attentivement l'adresse de recharge pour chaque recharge. Le montant de chaque recharge sera calculé en fonction du montant réel versé.",
                usdtTip3: "3. La recharge est généralement atteinte quelques minutes après la fin du transfert."
            },
            bank: {
                bank: "banque",
                bank2: "Veuillez entrer la banque",
                bankAccount: "compte bancaire",
                bankAccount2: "Veuillez saisir le compte bancaire",
                kaihuren: "Titulaire du compte",
                kaihuren2: "Veuillez entrer le titulaire du compte",
                tel: "Numéro de téléphone",
                tel2: "Veuillez entrer le numéro de téléphone portable"
            },
            withdraw: {
                record: "Dossiers de retrait",
                account: "Retirer le compte",
                account2: "Veuillez sélectionner un compte de retrait",
                accountRed: "Gestion du compte de retrait",
                amount: "Montant du retrait",
                amount2: "Veuillez saisir le montant du retrait",
                keyong: "solde disponible",
                tip: "Notes sur le retrait",
                pwd: "Mot de passe de paiement",
                pwd2: "Veuillez saisir le mot de passe de paiement",
                min: "Montant minimum de retrait",
                fee: "frais de traitement",
                status0: "En attente d'examen",
                status1: "Transaction terminée",
                status2: "Refuser",
                status3: "Transfert",
                status4: "Transaction terminée"
            },
            account: {
                title: "Gestion des comptes",
                bind: "Aller à la liaison",
                bind2: "Lié",
                address: "adresse",
                address2: "Veuillez entrer l'adresse",
                btn: "Lier maintenant",
                tip1: "Veuillez vous assurer que votre compte est votre compte réel. S'il ne s'agit pas de votre compte réel, le retrait échouera et le compte sera gelé.",
                tip2: "Si vous devez modifier votre compte, veuillez contacter le service client"
            },
            get: {
                title: "Quantifier",
                card1: "Montant quantifiable aujourd’hui",
                card2: "Les gains d'aujourd'hui",
                card3: "Des temps quantifiables aujourd’hui",
                card4: "revenu total",
                btn: "quantification automatique",
                liucheng: "Mener le processus du panel",
                step1: "1. Collecte de données en cours",
                step2: "2. Stratégie de développement durable",
                step3: "3. Backtesting en cours",
                step4: "4. Exécution",
                step5: "5. Quantification terminée",
                record: "Enregistrements quantitatifs",
                record1: "Montant de l'investissement",
                record2: "profit",
                record3: "Plateforme d'achat",
                record4: "plateforme de vente",
                record5: "prix d'achat",
                record6: "prix de vente"
            },
            vip: {
                title: "Centre des membres",
                now: "niveau actuel",
                level: "Niveau VIP",
                jiesuo: "Ce niveau a été débloqué",
                jiesuo2: "Ce niveau n'est pas débloqué",
                tj: "Conditions de mise à niveau",
                tj1: "Montant effectif",
                tj2: "Nombre de personnes promues en une génération",
                tj3: "Promouvoir le niveau utilisateur",
                qy: "droits et intérêts",
                qy1: "Pourcentage de revenus",
                qy2: "montant minimum quantifié",
                qy3: "Montant maximum quantifié",
                qy4: "Nombre de quantifications par jour"
            },
            safe: {
                title: "Gestion de la sécurité",
                login_pwd: "Mot de passe de connexion",
                fund_pwd: "Mot de passe de paiement",
                safe: "Sécurité",
                edit_pwd: "Changer le mot de passe de connexion",
                edit_fundpwd: "Changer le mot de passe de paiement",
                phone: "numéro de téléphone",
                getcode: "Obtenir le code de vérification",
                code: "Le code de vérification",
                icode: "Veuillez entrer le code de vérification",
                newpwd: "Nouveau mot de passe",
                inewpwd: "Nouveau mot de passe",
                renewpwd: "Confirmer le nouveau mot de passe",
                renewpwd2: "Veuillez entrer un nouveau mot de passe",
                oldpwd: "mot de passe d'origine",
                oldpwd2: "Entrez le mot de passe d'origine",
                error: "Veuillez entrer des données",
                hold: "Veuillez confirmer que le nouveau mot de passe est cohérent"
            },
            keyboard: {
                ifundPwd: "Entrez le mot de passe de paiement",
                verifying: "Vérifier le mot de passe de paiement"
            },
            google: {
                step1: "premier pas",
                step2: "Étape 2",
                step3: "Étape 3",
                tip1: "Veuillez télécharger Google Authenticator depuis la boutique d'applications mobiles",
                tip2: "Scannez le code QR pour établir une liaison via Google Authenticator",
                code: "Veuillez saisir le code de vérification Google",
                tip3: "La liaison à Google Authenticator fournit une autre couche de sécurité pour la sécurité de votre compte.",
                renzheng: "Agréé"
            }
        }
    },
    e561: function(e, a, n) {
        var i = n("310f");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var t = n("967d").default;
        t("56089238", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    ea85: function(e, a, n) {
        "use strict";
        n.r(a);
        var i = n("eae7")
          , t = n.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(a, e, (function() {
                    return i[e]
                }
                ))
            }(o);
        a["default"] = t.a
    },
    eae7: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        var i = {
            data: function() {
                return {}
            },
            name: "pop",
            props: {
                obj: {
                    type: [Object],
                    default: {
                        icon: !1,
                        msg: !1
                    }
                }
            },
            methods: {
                BackPage: function() {
                    uni.navigateBack({
                        delta: 1
                    })
                }
            }
        };
        a.default = i
    },
    f44e: function(e, a, n) {
        "use strict";
        var i = n("bf15")
          , t = n.n(i);
        t.a
    },
    f481: function(e, a, n) {
        "use strict";
        n.r(a);
        var i = n("a3a6")
          , t = n.n(i);
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(e) {
                n.d(a, e, (function() {
                    return i[e]
                }
                ))
            }(o);
        a["default"] = t.a
    },
    f779: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "зберегти",
                balance: "Баланс",
                nodata: "більше немає даних",
                logout: "Вийти успішно",
                confirm: "підтвердити",
                cancel: "Скасувати",
                submit: "подати",
                recharge: "поповнити",
                withdraw: "Зняти готівку",
                desc: "ілюструвати",
                tip: "Добрі поради",
                tipEmail: "Для додаткового захисту безпеки вашого облікового запису прив’яжіть свою електронну адресу.",
                tipEmail2: "Прив’язка вашої адреси електронної пошти забезпечує ще одну гарантію безпеки вашого облікового запису."
            },
            tabbar: {
                t1: "додому",
                t2: "команда",
                t3: "отримати",
                t4: "активів",
                t5: "мій"
            },
            register: {
                title: "зареєструватися",
                username: "ім'я користувача",
                username2: "Будь ласка, введіть ім'я користувача",
                tel: "Номер телефону",
                tel2: "Будь ласка, введіть номер мобільного телефону",
                pwd: "пароль",
                pwd2: "Будь ласка, введіть пароль",
                repwd: "Підтвердьте пароль",
                repwd2: "Будь ласка, введіть пароль підтвердження",
                icode: "Код запрошення",
                icode2: "Будь ласка, введіть код запрошення",
                has: "Вже є акаунт",
                has2: "Увійдіть зараз",
                email: "Пошта",
                email2: "Будь ласка, введіть свою електронну адресу",
                fundPwd: "Платіжний пароль",
                fundPwd2: "Будь ласка, введіть платіжний пароль",
                yzm: "Код підтвердження",
                yzm2: "Будь ласка, введіть код підтвердження",
                send: "надіслати",
                noyizhi: "Введений пароль непослідовний"
            },
            login: {
                tel: "Номер телефону",
                tel2: "Будь ласка, введіть номер мобільного телефону",
                pwd: "пароль",
                pwd2: "Будь ласка, введіть пароль",
                login: "авторизуватися",
                noc: "Ще немає облікового запису",
                noc2: "Зареєструватися зараз",
                forgetpwd: "забути пароль",
                tip1: "Привіт",
                tip2: "ласкаво просимо до",
                lang: "Налаштування мови"
            },
            forget: {
                title: "забути пароль",
                getcode: "Отримати код підтвердження",
                code: "Код підтвердження",
                code2: "Будь ласка, введіть код підтвердження",
                nav1: "Підтвердження Google",
                nav2: "Підтвердження електронної пошти",
                pwd: "Новий пароль",
                pwd2: "Будь ласка, введіть новий пароль",
                repwd: "Підтвердьте пароль",
                repwd2: "Будь ласка, введіть пароль підтвердження",
                email: "Електронна пошта",
                email2: "Будь ласка, введіть адресу електронної пошти"
            },
            index: {
                company: "Профіль компанії",
                rule: "правило",
                invite: "Запрошуйте друзів",
                hangqing: "Котирування в реальному часі",
                friend: "Партнери",
                message: "моє повідомлення",
                message1: "Системні повідомлення",
                message2: "повідомлення місії",
                message3: "Повідомлення сайту"
            },
            invite: {
                title: "Запрошуйте друзів",
                tip1: "Запросіть друзів, щоб виграти великі подарунки",
                tip2: "Нехай кожен почувається щасливим і щось отримує",
                link: "Посилання на запрошення",
                code: "Код запрошення"
            },
            team: {
                title: "моя команда",
                data: "Дані команди",
                pickerAll: "все",
                picker1: "сьогодні",
                picker7: "останні 7 днів",
                picker30: "Останні 30 днів",
                picker60: "Останні 60 днів",
                addPeopel: "Нові люди",
                addEarn: "Новий дохід",
                fenxi: "аналіз доходів",
                shouru1: "Завдання доходу",
                shouru2: "Визначте дохід",
                shouru3: "Сприяти кількісному доходу",
                guimo: "Розмір команди",
                youxiao: "Командна робота",
                tdRecharge: "Поповнення команди",
                tdCash: "Відкликання команди",
                lookAll: "Переглянути всі",
                card1: "загальна комісія",
                card2: "Накопичене поповнення",
                card3: "Кумулятивне зняття коштів",
                userNum: "кількість користувачів",
                yj: "відсоток комісії",
                ljEarn: "Сукупний дохід",
                level1: "Рівень 1",
                level2: "Рівень 2",
                level3: "Рівень 3",
                list: "Список команд",
                taskNums: "Час квантування"
            },
            fund: {
                title: "активів",
                title2: "Введення активу",
                all: "сукупні активи",
                wait: "Неотримані нагороди",
                card1: "Гнучкі фонди",
                card2: "Сума до вивільнення",
                card3: "Пробна плата",
                detail: "Деталі активу",
                lookAll: "Переглянути всі",
                type1: "все",
                type2: "дохід",
                type3: "витрати",
                task: "центр місії",
                taskTip1: "Кількісна оцінка робота",
                taskTip2: "Легко збільшити багатство",
                detailCard1: "Сума",
                detailCard2: "назва",
                detailCard3: "типу",
                detailCard4: "Номер замовлення",
                detailCard5: "час",
                back: "повернення"
            },
            task: {
                up: "Оновіть до {level}",
                up2: "Перейдіть до {level} і ви отримаєте {money}",
                done: "Виконано",
                ing: "в процесі",
                can: "отримати",
                inviteNum: "Запросіть {nums} людей внести {money}",
                inviteAward: "Ви отримаєте {award}"
            },
            mine: {
                icode: "Код запрошення",
                goOut: "кинути",
                jiesuo: "Цей рівень розблоковано",
                shengji: "Оновіть зараз",
                zichan: "Загальні активи",
                card1: "баланс гаманця",
                card2: "Кошти, які будуть вивільнені",
                card3: "Сукупний дохід",
                card4: "Кумулятивне зняття коштів",
                card5: "Розмір команди",
                changyong: "Часто використовувані функції",
                email: "Електронна пошта",
                pwd: "Пароль для входу",
                fundPwd: "Пароль транзакції",
                other: "Інші функції",
                help: "Довідковий центр",
                userTl: "Умови використання",
                lang: "змінити мову",
                kefu: "обслуговування клієнтів",
                onlineServer: "Онлайн обслуговування клієнтів",
                qiandao: "Увійдіть",
                lx: "підключити",
                qiandaoTip: "Щоразу, коли ви входите в обліковий запис {num} днів, ви отримуватимете {money}",
                bank: "банківська картка",
                address: "Адреса вилучення",
                logoutTip: "Ви впевнені, що бажаєте вийти?"
            },
            recharge: {
                amount: "Сума поповнення",
                amount2: "Будь ласка, введіть суму поповнення",
                amountO: "Інші суми поповнення",
                methods: "Спосіб поповнення",
                btn: "Поповни зараз",
                record: "Запис поповнення",
                min: "Мінімальна сума для зняття",
                desc: "ілюструвати",
                pingzheng: "Ваучер поповнення",
                pingzheng2: "Будь ласка, завантажте ваучер поповнення",
                address: "Адреса поповнення",
                status0: "Підлягає оплаті",
                status1: "Виконано",
                status2: "Помилка поповнення",
                status3: "Скасовано",
                detailCard1: "Спосіб поповнення",
                detailCard2: "стан",
                detailCard3: "Номер замовлення",
                detailCard4: "час",
                detailCard5: "Сума",
                go: "Будь ласка, перейдіть до прив'язки банківської картки",
                usdtTip1: "1. Ця адреса приймає лише поповнення рахунку за протоколом USDT TRC20.",
                usdtTip2: "2. Будь ласка, уважно перевіряйте адресу поповнення рахунку для кожного поповнення рахунку.",
                usdtTip3: "3. Поповнення зазвичай відбувається протягом кількох хвилин після завершення переказу"
            },
            bank: {
                bank: "банку",
                bank2: "Будь ласка, введіть банк",
                bankAccount: "банківський рахунок",
                bankAccount2: "Введіть банківський рахунок",
                kaihuren: "Власник рахунку",
                kaihuren2: "Будь ласка, введіть власника рахунку",
                tel: "Номер телефону",
                tel2: "Будь ласка, введіть номер мобільного телефону"
            },
            withdraw: {
                record: "Записи про вилучення",
                account: "Зняти рахунок",
                account2: "Виберіть рахунок для зняття коштів",
                accountRed: "Управління рахунком для зняття коштів",
                amount: "Зняти суму",
                amount2: "Будь ласка, введіть суму зняття",
                keyong: "наявний залишок",
                tip: "Примітки щодо вилучення",
                pwd: "Платіжний пароль",
                pwd2: "Будь ласка, введіть платіжний пароль",
                min: "Мінімальна сума для зняття",
                fee: "плата за обробку",
                status0: "Очікує на розгляд",
                status1: "транзакція завершена",
                status2: "зменшити",
                status3: "Перенесення",
                status4: "транзакція завершена"
            },
            account: {
                title: "Управління обліковим записом",
                bind: "Перейти до прив'язки",
                bind2: "Переплетений",
                address: "адресу",
                address2: "Будь ласка, введіть адресу",
                btn: "Зв'яжіть зараз",
                tip1: "Будь ласка, переконайтеся, що ваш обліковий запис є вашим справжнім іменем. Якщо це не ваш справжній обліковий запис, зняття не вдасться, і обліковий запис буде заморожено.",
                tip2: "Якщо вам потрібно змінити обліковий запис, зверніться до служби підтримки клієнтів"
            },
            get: {
                title: "Визначте кількісно",
                card1: "Обчислювана сума сьогодні",
                card2: "Сьогоднішній заробіток",
                card3: "Часи, які можна виміряти сьогодні",
                card4: "загальний дохід",
                btn: "автоматичне кількісне визначення",
                liucheng: "Проведіть панельний процес",
                step1: "1. Триває збір даних",
                step2: "2. Стратегія сталого розвитку",
                step3: "3. Виконується тестування",
                step4: "4. Виконання",
                step5: "5. Кількісне визначення завершено",
                record: "Кількісні записи",
                record1: "Сума інвестицій",
                record2: "прибуток",
                record3: "Купівля платформи",
                record4: "продати платформу",
                record5: "ціна покупки",
                record6: "ціна продажу"
            },
            vip: {
                title: "Центр для користувачів",
                now: "поточний рівень",
                level: "VIP рівень",
                jiesuo: "Цей рівень розблоковано",
                jiesuo2: "Цей рівень не розблоковано",
                tj: "Умови оновлення",
                tj1: "Ефективна кількість",
                tj2: "Кількість людей, які підвищуються в одному поколінні",
                tj3: "Підвищення рівня користувача",
                qy: "прав та інтересів",
                qy1: "Відсоток виручки",
                qy2: "мінімальна кількісна сума",
                qy3: "Максимальна кількісна сума",
                qy4: "Кількість кількісних вимірювань на день"
            },
            safe: {
                title: "Управління безпекою",
                login_pwd: "Пароль для входу",
                fund_pwd: "Платіжний пароль",
                safe: "Безпека",
                edit_pwd: "Змінити пароль для входу",
                edit_fundpwd: "Змінити платіжний пароль",
                phone: "номер телефону",
                getcode: "Отримати код підтвердження",
                code: "Код підтвердження",
                icode: "Будь ласка, введіть код підтвердження",
                newpwd: "Новий пароль",
                inewpwd: "Новий пароль",
                renewpwd: "Підтвердьте новий пароль",
                renewpwd2: "Будь ласка, введіть новий пароль",
                oldpwd: "оригінальний пароль",
                oldpwd2: "Введіть оригінальний пароль",
                error: "Будь ласка, введіть дані",
                hold: "Підтвердьте, що новий пароль правильний"
            },
            keyboard: {
                ifundPwd: "Введіть платіжний пароль",
                verifying: "Перевірте платіжний пароль"
            },
            google: {
                step1: "перший крок",
                step2: "Крок 2",
                step3: "Крок 3",
                tip1: "Завантажте Google Authenticator із магазину програм для мобільних пристроїв",
                tip2: "Відскануйте QR-код для прив’язки через Google Authenticator",
                code: "Будь ласка, введіть код підтвердження Google",
                tip3: "Прив’язка Google Authenticator надає ще один рівень захисту вашого облікового запису.",
                renzheng: "Сертифікований"
            }
        }
    },
    f83e: function(e, a, n) {
        "use strict";
        n("6a54"),
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = void 0;
        a.default = {
            common: {
                save: "salva",
                balance: "Bilancia",
                nodata: "niente più dati",
                logout: "Esci con successo",
                confirm: "confermare",
                cancel: "Cancellare",
                submit: "invia",
                recharge: "ricaricare",
                withdraw: "Prelevare contanti",
                desc: "illustrare",
                tip: "Consigli gentili",
                tipEmail: "Per proteggere ulteriormente la sicurezza del tuo account, ti preghiamo di associare il tuo indirizzo email.",
                tipEmail2: "Associare il tuo indirizzo email fornisce un'altra garanzia di sicurezza per la sicurezza del tuo account."
            },
            tabbar: {
                t1: "prima pagina",
                t2: "squadra",
                t3: "Ottenere",
                t4: "attività",
                t5: "mio"
            },
            register: {
                title: "registro",
                username: "nome utente",
                username2: "Inserisci il nome utente",
                tel: "Numero di telefono",
                tel2: "Inserisci il numero di cellulare",
                pwd: "password",
                pwd2: "Inserisci la password",
                repwd: "Conferma password",
                repwd2: "Inserisci la password di conferma",
                icode: "Codice invito",
                icode2: "Inserisci il codice di invito",
                has: "Hai già un account",
                has2: "Accedi ora",
                email: "Posta",
                email2: "Per favore inserisci la tua email",
                fundPwd: "Password di pagamento",
                fundPwd2: "Inserisci la password di pagamento",
                yzm: "Codice di verifica",
                yzm2: "Inserisci il codice di verifica",
                send: "Inviare",
                noyizhi: "L'immissione della password non è coerente"
            },
            login: {
                tel: "Numero di telefono",
                tel2: "Inserisci il numero di cellulare",
                pwd: "password",
                pwd2: "Inserisci la password",
                login: "Login",
                noc: "Nessun account ancora",
                noc2: "Registrati ora",
                forgetpwd: "dimenticare la password",
                tip1: "Ciao",
                tip2: "benvenuto a",
                lang: "Preferenza della lingua"
            },
            forget: {
                title: "dimenticare la password",
                getcode: "Ottieni il codice di verifica",
                code: "Codice di verifica",
                code2: "Inserisci il codice di verifica",
                nav1: "Verifica di Google",
                nav2: "Verifica e-mail",
                pwd: "Nuova parola d'ordine",
                pwd2: "Inserisci la nuova password",
                repwd: "Conferma password",
                repwd2: "Inserisci la password di conferma",
                email: "E-mail",
                email2: "Inserisci il tuo indirizzo email"
            },
            index: {
                company: "Profilo Aziendale",
                rule: "regola",
                invite: "Invita amici",
                hangqing: "Preventivi in ​​tempo reale",
                friend: "Partner",
                message: "il mio messaggio",
                message1: "Messaggi di sistema",
                message2: "messaggio di missione",
                message3: "Messaggio del sito"
            },
            invite: {
                title: "Invita amici",
                tip1: "Invita gli amici a vincere grandi regali",
                tip2: "Lascia che tutti si sentano felici e guadagnino qualcosa",
                link: "Collegamento dell'invito",
                code: "Codice invito"
            },
            team: {
                title: "la mia squadra",
                data: "Dati della squadra",
                pickerAll: "Tutto",
                picker1: "Oggi",
                picker7: "ultimi 7 giorni",
                picker30: "Ultimi 30 giorni",
                picker60: "Ultimi 60 giorni",
                addPeopel: "Nuove persone",
                addEarn: "Nuove entrate",
                fenxi: "analisi dei ricavi",
                shouru1: "Reddito da attività",
                shouru2: "Quantificare le entrate",
                shouru3: "Promuovere un reddito quantificato",
                guimo: "Dimensione della squadra",
                youxiao: "Il lavoro di squadra",
                tdRecharge: "Ricarica della squadra",
                tdCash: "Ritiro della squadra",
                lookAll: "Visualizza tutto",
                card1: "commissione totale",
                card2: "Ricarica accumulata",
                card3: "Prelievi cumulativi",
                userNum: "numero di utenti",
                yj: "percentuale di commissione",
                ljEarn: "Reddito cumulativo",
                level1: "Livello 1",
                level2: "Livello 2",
                level3: "Livello 3",
                list: "Elenco squadre",
                taskNums: "Tempi di quantizzazione"
            },
            fund: {
                title: "attività",
                title2: "Introduzione alle risorse",
                all: "totale attivo",
                wait: "Premi da richiedere",
                card1: "Fondi flessibili",
                card2: "Importo da sbloccare",
                card3: "Tassa di prova",
                detail: "Dettagli della risorsa",
                lookAll: "Visualizza tutto",
                type1: "Tutto",
                type2: "reddito",
                type3: "spesa",
                task: "centro missionario",
                taskTip1: "Quantificazione robotica",
                taskTip2: "Aumenta facilmente la ricchezza",
                detailCard1: "Quantità",
                detailCard2: "nome",
                detailCard3: "tipo",
                detailCard4: "Numero dell'ordine",
                detailCard5: "tempo",
                back: "ritorno"
            },
            task: {
                up: "Passa a {level}",
                up2: "Passa a {level} e otterrai {money}",
                done: "Completato",
                ing: "in corso",
                can: "ricevere",
                inviteNum: "Invita {nums} persone a depositare {money}",
                inviteAward: "Riceverai {award}"
            },
            mine: {
                icode: "Codice invito",
                goOut: "esentato",
                jiesuo: "Questo livello è stato sbloccato",
                shengji: "Aggiorna ora",
                zichan: "Patrimonio totale",
                card1: "saldo del portafoglio",
                card2: "Fondi da sbloccare",
                card3: "Reddito cumulativo",
                card4: "Prelievi cumulativi",
                card5: "Dimensione della squadra",
                changyong: "Funzioni di uso comune",
                email: "E-mail",
                pwd: "Password di accesso",
                fundPwd: "Password della transazione",
                other: "Altre funzioni",
                help: "Centro assistenza",
                userTl: "Termini per l'utente",
                lang: "cambiare lingua",
                kefu: "assistenza clienti",
                onlineServer: "Servizio clienti in linea",
                qiandao: "Registrazione",
                lx: "collegare",
                qiandaoTip: "Ogni volta che accedi tra {num} giorni, riceverai {money}",
                bank: "carta bancaria",
                address: "Indirizzo di ritiro",
                logoutTip: "Sei sicuro di voler uscire?"
            },
            recharge: {
                amount: "Importo della ricarica",
                amount2: "Inserisci l'importo della ricarica",
                amountO: "Altri importi di ricarica",
                methods: "Metodo di ricarica",
                btn: "Ricarica ora",
                record: "Ricaricare il registro",
                min: "Importo minimo di prelievo",
                desc: "illustrare",
                pingzheng: "Voucher di ricarica",
                pingzheng2: "Si prega di caricare il voucher di ricarica",
                address: "Indirizzo di ricarica",
                status0: "Da pagare",
                status1: "Completato",
                status2: "Ricarica non riuscita",
                status3: "Annullato",
                detailCard1: "Metodo di ricarica",
                detailCard2: "stato",
                detailCard3: "Numero dell'ordine",
                detailCard4: "tempo",
                detailCard5: "Quantità",
                go: "Per favore vai a vincolare la carta bancaria",
                usdtTip1: "1. Questo indirizzo accetta solo ricariche con protocollo USDT TRC20. Si prega di non depositare altre valute o altri protocolli.",
                usdtTip2: "2. Si prega di controllare attentamente l'indirizzo di ricarica per ciascuna ricarica. L'importo di ciascuna ricarica verrà calcolato in base all'importo effettivamente rimesso.",
                usdtTip3: "3. La ricarica viene solitamente raggiunta entro pochi minuti dal completamento del trasferimento"
            },
            bank: {
                bank: "banca",
                bank2: "Inserisci la banca",
                bankAccount: "conto bancario",
                bankAccount2: "Inserisci il conto bancario",
                kaihuren: "Titolare del conto",
                kaihuren2: "Inserisci il titolare del conto",
                tel: "Numero di telefono",
                tel2: "Inserisci il numero di cellulare"
            },
            withdraw: {
                record: "Registri di prelievo",
                account: "Prelevare il conto",
                account2: "Seleziona un conto di prelievo",
                accountRed: "Gestione del conto di prelievo",
                amount: "Prelevare l'importo",
                amount2: "Inserisci l'importo del prelievo",
                keyong: "saldo disponibile",
                tip: "Note sul ritiro",
                pwd: "Password di pagamento",
                pwd2: "Inserisci la password di pagamento",
                min: "Importo minimo di prelievo",
                fee: "commissione di gestione",
                status0: "In attesa di revisione",
                status1: "Transazione completata",
                status2: "Rifiutare",
                status3: "Trasferimento",
                status4: "Transazione completata"
            },
            account: {
                title: "Gestione del conto",
                bind: "Vai alla rilegatura",
                bind2: "Limite",
                address: "indirizzo",
                address2: "Inserisci l'indirizzo",
                btn: "Lega ora",
                tip1: "Assicurati che il tuo account sia il tuo account con nome reale. Se non è il tuo account con nome reale, il prelievo fallirà e l'account verrà congelato.",
                tip2: "Se hai bisogno di modificare il tuo account, contatta il servizio clienti"
            },
            get: {
                title: "Quantificare",
                card1: "Importo quantificabile oggi",
                card2: "I guadagni di oggi",
                card3: "Tempi quantificabili oggi",
                card4: "entrate totali",
                btn: "quantificazione automatica",
                liucheng: "Condurre il processo del panel",
                step1: "1. Raccolta dati in corso",
                step2: "2. Strategia di sviluppo sostenibile",
                step3: "3. Backtesting in corso",
                step4: "4. Esecuzione",
                step5: "5. Quantificazione completata",
                record: "Record quantitativi",
                record1: "Importo dell'investimento",
                record2: "profitto",
                record3: "Piattaforma di acquisto",
                record4: "vendere piattaforma",
                record5: "prezzo di acquisto",
                record6: "prezzo di vendita"
            },
            vip: {
                title: "Centro membri",
                now: "livello attuale",
                level: "Livello VIP",
                jiesuo: "Questo livello è stato sbloccato",
                jiesuo2: "Questo livello non è sbloccato",
                tj: "Condizioni di aggiornamento",
                tj1: "Importo effettivo",
                tj2: "Numero di persone promosse in una generazione",
                tj3: "Promuovere il livello utente",
                qy: "diritti e interessi",
                qy1: "Percentuale di entrate",
                qy2: "importo minimo quantificato",
                qy3: "Importo massimo quantificato",
                qy4: "Numero di quantificazioni al giorno"
            },
            safe: {
                title: "Gestione della sicurezza",
                login_pwd: "Password di accesso",
                fund_pwd: "Password di pagamento",
                safe: "Sicurezza",
                edit_pwd: "Cambia password di accesso",
                edit_fundpwd: "Cambia password di pagamento",
                phone: "numero di telefono",
                getcode: "Ottieni il codice di verifica",
                code: "Codice di verifica",
                icode: "Inserisci il codice di verifica",
                newpwd: "Nuova parola d'ordine",
                inewpwd: "Nuova parola d'ordine",
                renewpwd: "Conferma la nuova password",
                renewpwd2: "Inserisci la nuova password",
                oldpwd: "password originale",
                oldpwd2: "Inserisci la password originale",
                error: "Per favore inserisci i dati",
                hold: "Conferma che la nuova password sia coerente"
            },
            keyboard: {
                ifundPwd: "Inserisci la password di pagamento",
                verifying: "Controlla la password di pagamento"
            },
            google: {
                step1: "primo passo",
                step2: "Passaggio 2",
                step3: "Passaggio 3",
                tip1: "Scarica Google Authenticator dall'app store mobile",
                tip2: "Scansiona il codice QR per associarlo tramite Google Authenticator",
                code: "Inserisci il codice di verifica di Google",
                tip3: "Il collegamento di Google Authenticator fornisce un ulteriore livello di sicurezza per la sicurezza del tuo account.",
                renzheng: "Certificato"
            }
        }
    },
    fdb7: function(e, a, n) {
        var i = n("03e2");
        i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var t = n("967d").default;
        t("a5bf6b0a", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }
});
