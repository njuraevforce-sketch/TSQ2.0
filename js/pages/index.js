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
    template: `
        <div class="page index-page">
            <u-navbar title="首页" bgColor="#4e7771" :autoBack="false">
                <template #left>
                    <img src="./static/img/logo.png" class="logo" />
                </template>
                <template #right>
                    <u-icon name="order" color="#fff" size="20" @click="goToRecord"></u-icon>
                </template>
            </u-navbar>

            <div class="page-content">
                <!-- Баннеры -->
                <div class="banner-section">
                    <u-swiper :autoplay="true" :current="0">
                        <u-swiper-item v-for="(banner, index) in bannerList" :key="index">
                            <img :src="banner.image" class="banner-img" />
                        </u-swiper-item>
                    </u-swiper>
                </div>

                <!-- Уведомления -->
                <div class="notice-section" v-if="notice">
                    <div class="notice-bar">
                        <span class="notice-text">{{ notice }}</span>
                    </div>
                </div>

                <!-- Статистика монет -->
                <div class="coin-section">
                    <div class="coin-grid">
                        <div v-for="coin in coinList" :key="coin.symbol" class="coin-item">
                            <div class="coin-name">{{ coin.symbol }}</div>
                            <div class="coin-price" :class="{ 'price-up': coin.change > 0, 'price-down': coin.change < 0 }">
                                ${{ formatNumber(coin.price) }}
                            </div>
                            <div class="coin-change" :class="{ 'change-up': coin.change > 0, 'change-down': coin.change < 0 }">
                                {{ coin.change > 0 ? '+' : '' }}{{ coin.change }}%
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Баланс пользователя -->
                <div class="balance-section">
                    <div class="balance-card">
                        <div class="balance-title">我的资产</div>
                        <div class="balance-amount">¥{{ userMoney }}</div>
                        <div class="balance-profit">累计收益: ¥{{ userProfitMoney }}</div>
                    </div>
                </div>

                <!-- Быстрые действия -->
                <div class="action-section">
                    <div class="action-grid">
                        <div class="action-item" @click="goToPage('fund')">
                            <div class="action-icon">💰</div>
                            <div class="action-text">资金管理</div>
                        </div>
                        <div class="action-item" @click="goToPage('team')">
                            <div class="action-icon">👥</div>
                            <div class="action-text">我的团队</div>
                        </div>
                        <div class="action-item" @click="goToPage('vip')">
                            <div class="action-icon">⭐</div>
                            <div class="action-text">VIP等级</div>
                        </div>
                        <div class="action-item" @click="goToPage('mine')">
                            <div class="action-icon">👤</div>
                            <div class="action-text">个人中心</div>
                        </div>
                    </div>
                </div>
            </div>

            <tabbar thisPage="t1" @change="onTabChange"></tabbar>
            <pop :obj="pop" @close="showFirst = false"></pop>
        </div>
    `,
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
            router.navigateTo(`/pages/${page}/index`);
        },
        formatNumber(num) {
            return Number(num).toFixed(2);
        },
        getInfo() {
            // API запрос для получения данных
            this.$request({
                url: '/api/index/index',
                method: 'POST'
            }).then(res => {
                if (res.code === 1) {
                    this.bannerList = res.data.banner || [];
                    this.notice = res.data.scroll?.content || '';
                    this.pop = res.data.pop || {};
                    if (this.pop.show) {
                        this.showFirst = true;
                    }
                }
            });
        },
        getCoinList() {
            this.$request({
                url: '/api/index/currency',
                method: 'GET'
            }).then(res => {
                if (res.code === 1) {
                    this.coinList = res.data || [];
                }
            });
        }
    },
    mounted() {
        this.getInfo();
        this.getCoinList();
        
        // Обновление курсов каждые 3 секунды
        setInterval(() => {
            this.getCoinList();
        }, 3000);
    }
};
