<template>
    <view class="container">
        <view class="header">
            <view class="balance-card">
                <text class="balance-label">Общий баланс</text>
                <text class="balance-amount">${{ totalBalance }}</text>
                <view class="balance-details">
                    <view class="balance-item">
                        <text class="label">Доступно</text>
                        <text class="value">${{ availableBalance }}</text>
                    </view>
                    <view class="balance-item">
                        <text class="label">Заморожено</text>
                        <text class="value">${{ frozenBalance }}</text>
                    </view>
                </view>
            </view>
        </view>

        <view class="daily-task">
            <view class="task-header">
                <text class="task-title">Ежедневный доход</text>
                <text class="task-time" v-if="nextCollectionTime">Следующее получение: {{ nextCollectionTime }}</text>
            </view>
            
            <view 
                class="task-button" 
                :class="{ 'task-button-disabled': !canCollect }"
                @click="collectDailyIncome"
            >
                <view class="button-content">
                    <text class="button-text">{{ canCollect ? 'Получить доход' : 'Доход получен' }}</text>
                    <text class="button-amount">+${{ dailyIncome }}</text>
                </view>
            </view>
        </view>

        <view class="vip-preview">
            <view class="section-header">
                <text class="section-title">VIP пакеты</text>
                <text class="section-link" @click="goToVip">Все пакеты →</text>
            </view>
            
            <scroll-view class="vip-scroll" scroll-x="true">
                <view class="vip-packages">
                    <view 
                        v-for="pkg in vipPackages" 
                        :key="pkg.id"
                        class="vip-package-card"
                        :class="{ 'vip-package-active': pkg.owned }"
                    >
                        <text class="vip-name">VIP {{ pkg.level }}</text>
                        <text class="vip-price">${{ pkg.price }}</text>
                        <text class="vip-income">${{ pkg.dailyIncome }}/день</text>
                        <text class="vip-status" v-if="pkg.owned">Активен</text>
                        <text class="vip-status" v-else>Неактивен</text>
                    </view>
                </view>
            </scroll-view>
        </view>

        <view class="quick-stats">
            <view class="stat-card">
                <text class="stat-value">${{ totalEarned }}</text>
                <text class="stat-label">Всего заработано</text>
            </view>
            <view class="stat-card">
                <text class="stat-value">{{ totalReferrals }}</text>
                <text class="stat-label">Рефералов</text>
            </view>
            <view class="stat-card">
                <text class="stat-value">{{ activePackages }}</text>
                <text class="stat-label">Активных пакетов</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            totalBalance: 1250.50,
            availableBalance: 850.50,
            frozenBalance: 400.00,
            dailyIncome: 15.80,
            canCollect: true,
            nextCollectionTime: "22:00",
            totalEarned: 3250.75,
            totalReferrals: 12,
            activePackages: 3,
            vipPackages: [
                { id: 1, level: 1, price: 20, dailyIncome: 0.52, owned: true },
                { id: 2, level: 2, price: 100, dailyIncome: 3.10, owned: true },
                { id: 3, level: 3, price: 300, dailyIncome: 10.80, owned: true },
                { id: 4, level: 4, price: 1000, dailyIncome: 41.00, owned: false },
                { id: 5, level: 5, price: 3000, dailyIncome: 138.00, owned: false },
                { id: 6, level: 6, price: 5000, dailyIncome: 255.00, owned: false }
            ]
        }
    },
    methods: {
        collectDailyIncome() {
            if (!this.canCollect) return;
            
            uni.showToast({
                title: `+$${this.dailyIncome} получено!`,
                icon: 'success'
            });
            
            this.canCollect = false;
            this.totalBalance += this.dailyIncome;
            this.availableBalance += this.dailyIncome;
            
            setTimeout(() => {
                this.canCollect = true;
            }, 5000);
        },
        
        goToVip() {
            uni.navigateTo({
                url: '/pages/vip/vip'
            });
        }
    }
}
</script>

<style>
.container {
    padding: 20rpx;
    background: linear-gradient(180deg, #4e7771, #4e7771, rgba(185,215,168,0.75));
    min-height: 100vh;
}

.header {
    margin-bottom: 30rpx;
}

.balance-card {
    background: rgba(0,0,0,0.25);
    border-radius: 15rpx;
    padding: 30rpx;
    color: #e3e3e3;
}

.balance-label {
    font-size: 28rpx;
    display: block;
    margin-bottom: 15rpx;
}

.balance-amount {
    font-size: 48rpx;
    font-weight: bold;
    display: block;
    margin-bottom: 25rpx;
}

.balance-details {
    display: flex;
    justify-content: space-between;
}

.balance-item {
    text-align: center;
}

.balance-item .label {
    font-size: 24rpx;
    display: block;
    margin-bottom: 8rpx;
}

.balance-item .value {
    font-size: 32rpx;
    font-weight: bold;
}

.daily-task {
    background: rgba(0,0,0,0.25);
    border-radius: 15rpx;
    padding: 30rpx;
    margin-bottom: 30rpx;
}

.task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
}

.task-title {
    font-size: 32rpx;
    color: #e3e3e3;
    font-weight: bold;
}

.task-time {
    font-size: 24rpx;
    color: #b2b2b2;
}

.task-button {
    background: #4e7771;
    border-radius: 25rpx;
    padding: 25rpx;
    text-align: center;
}

.task-button-disabled {
    background: #545c66;
    opacity: 0.7;
}

.button-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button-text {
    font-size: 32rpx;
    color: #fff;
    font-weight: bold;
    margin-bottom: 10rpx;
}

.button-amount {
    font-size: 28rpx;
    color: #e3e3e3;
}

.vip-preview {
    background: rgba(0,0,0,0.25);
    border-radius: 15rpx;
    padding: 30rpx;
    margin-bottom: 30rpx;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
}

.section-title {
    font-size: 32rpx;
    color: #e3e3e3;
    font-weight: bold;
}

.section-link {
    font-size: 24rpx;
    color: #4e7771;
}

.vip-scroll {
    white-space: nowrap;
}

.vip-packages {
    display: inline-flex;
    gap: 20rpx;
}

.vip-package-card {
    background: rgba(255,255,255,0.1);
    border-radius: 15rpx;
    padding: 25rpx;
    min-width: 200rpx;
    text-align: center;
}

.vip-package-active {
    border: 2rpx solid #4e7771;
}

.vip-name {
    font-size: 28rpx;
    color: #e3e3e3;
    display: block;
    margin-bottom: 10rpx;
}

.vip-price {
    font-size: 32rpx;
    font-weight: bold;
    color: #fff;
    display: block;
    margin-bottom: 8rpx;
}

.vip-income {
    font-size: 24rpx;
    color: #4e7771;
    display: block;
    margin-bottom: 10rpx;
}

.vip-status {
    font-size: 22rpx;
    color: #b2b2b2;
}

.quick-stats {
    display: flex;
    justify-content: space-between;
    gap: 15rpx;
}

.stat-card {
    background: rgba(0,0,0,0.25);
    border-radius: 15rpx;
    padding: 25rpx;
    text-align: center;
    flex: 1;
}

.stat-value {
    font-size: 32rpx;
    font-weight: bold;
    color: #fff;
    display: block;
    margin-bottom: 8rpx;
}

.stat-label {
    font-size: 22rpx;
    color: #b2b2b2;
}
</style>
