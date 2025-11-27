const IndexPage = {
    data() {
        return {
            bannerList: [],
            notice: "",
            coinList: [],
            userMoney: "0.00",
            userProfitMoney: "0.00",
            inviteCode: "",
            isH5: true,
            siteInfo: {},
            downLoadUrl: "#",
            pop: {},
            showFirst: false
        }
    },
    methods: {
        onTabChange(page) {
            const pageMap = {
                't1': '/pages/index/index',
                't2': '/pages/vip/vip', 
                't3': '/pages/get/index',
                't4': '/pages/fund/index',
                't5': '/pages/mine/index'
            };
            if (pageMap[page]) {
                router.navigateTo(pageMap[page]);
            }
        },
        goToRecord() {
            router.navigateTo('/pages/get/record');
        },
        goToPage(page) {
            router.navigateTo('/pages/' + page + '/index');
        },
        formatNumber(num) {
            return Number(num).toFixed(2);
        },
        getInfo() {
            // API запрос для получения данных
            this.$request({
                url: '/api/index/index',
                method: 'POST'
            }).then(function(res) {
                if (res.code === 1) {
                    this.bannerList = res.data.banner || [];
                    this.notice = res.data.scroll && res.data.scroll.content || '';
                    this.pop = res.data.pop || {};
                    if (this.pop.show) {
                        this.showFirst = true;
                    }
                }
            }.bind(this));
        },
        getCoinList() {
            this.$request({
                url: '/api/index/currency',
                method: 'GET'
            }).then(function(res) {
                if (res.code === 1) {
                    this.coinList = res.data || [];
                }
            }.bind(this));
        }
    },
    mounted() {
        this.getInfo();
        this.getCoinList();
        
        // Обновление курсов каждые 3 секунды
        var self = this;
        setInterval(function() {
            self.getCoinList();
        }, 3000);
    }
};
