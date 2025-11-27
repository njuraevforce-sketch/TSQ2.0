const FundPage = {
    data() {
        return {
            info: {
                money: "0.00",
                balance: "0.00", 
                freeze_money: "0.00"
            },
            moneyLog: []
        }
    },
    template: `
        <div class="page fund-page">
            <u-navbar title="资金管理" bgColor="#4e7771" :autoBack="false">
                <template #left>
                    <img src="./static/img/logo.png" class="logo" />
                </template>
                <template #right>
                    <u-icon name="order" color="#fff" size="20" @click="goToRecord"></u-icon>
                </template>
            </u-navbar>

            <div class="page-content">
                <div class="topNull"></div>
                <div class="conWrap">
                    <!-- Карта баланса -->
                    <div class="card box-black radius margin-top">
                        <div class="padding">
                            <div class="flex align-center justify-between">
                                <div>总资产</div>
                            </div>
                            <div class="balance-amount color-de text-bold text-xxl margin-top">
                                ¥{{ numFormatter(info.money) }}
                            </div>
                            <div class="margin-top flex justify-between">
                                <div class="flex1 fc flex-direction">
                                    <div class="text-center">可用余额</div>
                                    <div class="text-white text-bold margin-top-xs">
                                        ¥{{ numFormatter(info.balance) }}
                                    </div>
                                </div>
                                <div class="flex1 fc flex-direction">
                                    <div class="text-center">冻结金额</div>
                                    <div class="text-white text-bold margin-top-xs">
                                        ¥{{ numFormatter(info.freeze_money) }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Кнопки действий -->
                        <div class="margin-top flex navWrap btn">
                            <div class="flex1 fc" @click="goToRecharge">
                                <div class="margin-left-xs">充值</div>
                            </div>
                            <div class="flex1 fc" @click="goToWithdraw">
                                <div class="margin-left-xs">提现</div>
                            </div>
                        </div>
                    </div>

                    <!-- История операций -->
                    <div class="padding-tb flex align-center justify-between text-bold">
                        <div class="text-white">资金明细</div>
                        <div class="color-de" @click="goToRecord">查看全部</div>
                    </div>

                    <div v-for="log in moneyLog" :key="log.id" class="card box-black radius margin-bottom" @click="goDetail(log)">
                        <div class="flex align-center justify-between padding-bottom border-bottom">
                            <div>{{ log.kind_name }}</div>
                            <div>{{ log.create_time }}</div>
                        </div>
                        <div class="flex align-center justify-between padding-top">
                            <div>金额</div>
                            <div class="color-up">¥{{ numFormatter(log.money) }}</div>
                        </div>
                    </div>

                    <div v-if="moneyLog.length === 0" class="fc margin-top text-white">
                        暂无数据...
                    </div>
                </div>
            </div>

            <tabbar thisPage="t4" @change="onTabChange"></tabbar>
        </div>
    `,
    methods: {
        numFormatter(num, digits = 2) {
            return Number(num).toFixed(digits);
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
        goToRecord() {
            router.navigateTo('/pages/fund/record');
        },
        goToRecharge() {
            router.navigateTo('/pages/recharge/index');
        },
        goToWithdraw() {
            router.navigateTo('/pages/withdraw/index');
        },
        goDetail(log) {
            router.navigateTo('/pages/fund/recordDetail?info=' + JSON.stringify(log));
        },
        getInfo() {
            this.$request({
                url: '/api/account/index',
                method: 'POST',
                data: { type: 'today' }
            }).then(res => {
                if (res.code === 1) {
                    this.info = res.data;
                    this.moneyLog = res.data.moneyLog || [];
                }
            });
        }
    },
    mounted() {
        this.getInfo();
    }
};
