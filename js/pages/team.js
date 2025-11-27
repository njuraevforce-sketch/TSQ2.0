const TeamPage = {
    data() {
        return {
            teamInfo: {
                total: 0,
                today: 0,
                active: 0
            },
            teamList: []
        }
    },
    template: `
        <div class="page team-page">
            <u-navbar title="我的团队" bgColor="#4e7771"></u-navbar>
            
            <div class="page-content">
                <!-- Статистика команды -->
                <div class="team-stats">
                    <div class="stat-item">
                        <div class="stat-number">{{ teamInfo.total }}</div>
                        <div class="stat-label">总团队</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">{{ teamInfo.today }}</div>
                        <div class="stat-label">今日新增</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">{{ teamInfo.active }}</div>
                        <div class="stat-label">活跃人数</div>
                    </div>
                </div>

                <!-- Список команды -->
                <div class="team-list">
                    <div v-for="member in teamList" :key="member.id" class="team-member">
                        <div class="member-avatar">
                            <img :src="member.avatar" alt="avatar">
                        </div>
                        <div class="member-info">
                            <div class="member-name">{{ member.name }}</div>
                            <div class="member-level">VIP{{ member.level }}</div>
                        </div>
                        <div class="member-profit">
                            <div class="profit-amount">¥{{ member.profit }}</div>
                            <div class="profit-time">{{ member.time }}</div>
                        </div>
                    </div>
                    
                    <div v-if="teamList.length === 0" class="no-data">
                        暂无团队成员
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
        }
    },
    mounted() {
        // Загрузка данных команды
        this.$request({
            url: '/api/team/index',
            method: 'POST'
        }).then(function(res) {
            if (res.code === 1) {
                this.teamInfo = res.data.teamInfo || {};
                this.teamList = res.data.teamList || [];
            }
        }.bind(this));
    }
};
