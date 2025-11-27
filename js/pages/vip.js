const VipPage = {
    data() {
        return {
            vipList: [],
            current: 0,
            chooseVipInfo: {},
            userInfo: {
                level: 1
            }
        }
    },
    template: `
        <div class="page vip-page">
            <u-navbar title="VIP等级" bgColor="#4e7771"></u-navbar>
            
            <div class="page-content">
                <div class="topNull"></div>
                <div class="conWrap">
                    <!-- Swiper с VIP уровнями -->
                    <u-swiper :current="current" :vertical="true" :autoplay="false" nextMargin="45rpx" @change="onSwiperChange">
                        <u-swiper-item v-for="vip in vipList" :key="vip.level">
                            <div class="vip-card" :style="{ background: 'url(' + vip.image + ') no-repeat', backgroundSize: '100% 100%' }">
                                <div class="vip-title">{{ vip.title }}</div>
                                <div class="vip-status">
                                    <u-icon :name="userInfo.level >= vip.level ? 'lock-opened-fill' : 'lock-fill'"></u-icon>
                                    {{ userInfo.level >= vip.level ? '已解锁' : '未解锁' }}
                                </div>
                                <img :src="vip.icon" class="vip-icon">
                            </div>
                        </u-swiper-item>
                    </u-swiper>

                    <!-- Информация о VIP -->
                    <div class="vip-info">
                        <div class="info-card">
                            <div class="info-header">
                                VIP{{ chooseVipInfo.level }} 特权
                            </div>
                            <div class="info-content">
                                <div class="info-item">
                                    <div>提现额度</div>
                                    <div>{{ numFormatter(chooseVipInfo.withdraw_money) }} / {{ numFormatter(chooseVipInfo.level_money) }}</div>
                                </div>
                                <div class="info-item">
                                    <div>邀请人数</div>
                                    <div>{{ numFormatter(chooseVipInfo.invite_nums, 0, false) }}</div>
                                </div>
                                <div class="info-item">
                                    <div>邀请等级</div>
                                    <div>{{ numFormatter(chooseVipInfo.invite_level, 0, false) }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="info-card">
                            <div class="info-header">
                                VIP{{ chooseVipInfo.level }} 权益
                            </div>
                            <div class="info-content">
                                <div class="info-item">
                                    <div>收益率</div>
                                    <div>{{ numFormatter(chooseVipInfo.min_earn_rate, 2, false) }}% - {{ numFormatter(chooseVipInfo.max_earn_rate, 2, false) }}%</div>
                                </div>
                                <div class="info-item">
                                    <div>最小金额</div>
                                    <div>{{ numFormatter(chooseVipInfo.min_money) }}</div>
                                </div>
                                <div class="info-item">
                                    <div>最大金额</div>
                                    <div>{{ numFormatter(chooseVipInfo.max_money) }}</div>
                                </div>
                                <div class="info-item">
                                    <div>次数</div>
                                    <div>{{ numFormatter(chooseVipInfo.times, 0, false) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <tabbar thisPage="t2" @change="onTabChange"></tabbar>
        </div>
    `,
    methods: {
        numFormatter(num, digits, showZero) {
            if (!num && !showZero) return '0';
            return Number(num).toFixed(digits);
        },
        onSwiperChange(e) {
            this.current = Number(e.target.current);
            this.chooseVipInfo = this.vipList[this.current] || {};
        },
        onTabChange(page) {
            const pageMap = {
                't1': '/pages/index/index',
                't2': '/pages/vip/vip',
                't3': '/pages/get/index',
                't4': '/pages/fund/index',
                't5': '/pages/mine/index'
            };
            router.navigateTo(pageMap[page]);
        },
        getVipList() {
            this.$request({
                url: '/api/user/userLevel',
                method: 'POST'
            }).then(function(res) {
                if (res.code === 1) {
                    this.vipList = res.data;
                    if (this.vipList.length > 0) {
                        this.chooseVipInfo = this.vipList[this.current];
                    }
                }
            }.bind(this));
        }
    },
    mounted() {
        this.getVipList();
    }
};
