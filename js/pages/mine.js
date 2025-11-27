const MinePage = {
    data() {
        return {
            userInfo: {
                name: '用户',
                level: 1,
                account: {
                    money: '0.00',
                    profit_money: '0.00'
                }
            },
            menuList: [
                { icon: '👤', text: '个人信息', page: '/pages/mine/info' },
                { icon: '💰', text: '资金明细', page: '/pages/fund/record' },
                { icon: '👥', text: '我的团队', page: '/pages/team/index' },
                { icon: '⭐', text: 'VIP等级', page: '/pages/vip/vip' },
                { icon: '🔒', text: '安全设置', page: '/pages/safe/pwd' },
                { icon: '❓', text: '帮助中心', page: '/pages/mine/help' }
            ]
        }
    },
    template: `
        <div class="page mine-page">
            <u-navbar title="个人中心" bgColor="#4e7771"></u-navbar>
            
            <div class="page-content">
                <!-- Информация пользователя -->
                <div class="user-card">
                    <div class="user-avatar">
                        <img src="./static/img/logo.png" alt="avatar">
                    </div>
                    <div class="user-info">
                        <div class="user-name">{{ userInfo.name }}</div>
                        <div class="user-level">VIP{{ userInfo.level }}</div>
                    </div>
                </div>

                <!-- Баланс -->
                <div class="balance-section">
                    <div class="balance-item">
                        <div class="balance-label">总资产</div>
                        <div class="balance-amount">¥{{ userInfo.account.money }}</div>
                    </div>
                    <div class="balance-item">
                        <div class="balance-label">累计收益</div>
                        <div class="balance-amount">¥{{ userInfo.account.profit_money }}</div>
                    </div>
                </div>

                <!-- Меню -->
                <div class="menu-section">
                    <div v-for="item in menuList" :key="item.text" class="menu-item" @click="goToPage(item.page)">
                        <div class="menu-icon">{{ item.icon }}</div>
                        <div class="menu-text">{{ item.text }}</div>
                        <div class="menu-arrow">></div>
                    </div>
                </div>
            </div>

            <tabbar thisPage="t5" @change="onTabChange"></tabbar>
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
            router.navigateTo(pageMap[page]);
        },
        goToPage(page) {
            router.navigateTo(page);
        }
    }
};
