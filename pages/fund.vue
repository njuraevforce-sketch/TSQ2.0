<template>
    <view class="fund-container">
        <view class="fund-header">
            <view class="balance-overview">
                <text class="balance-title">Общий баланс</text>
                <text class="balance-amount">${{ totalBalance }}</text>
                <view class="balance-breakdown">
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

        <view class="quick-actions">
            <view class="action-buttons">
                <view class="action-btn" @click="goToRecharge">
                    <text class="btn-icon">+</text>
                    <text class="btn-text">Пополнить</text>
                </view>
                <view class="action-btn" @click="goToWithdraw">
                    <text class="btn-icon">→</text>
                    <text class="btn-text">Вывести</text>
                </view>
            </view>
        </view>

        <view class="transaction-history">
            <view class="section-header">
                <text class="section-title">История операций</text>
                <text class="section-link" @click="viewAllTransactions">Все операции →</text>
            </view>

            <view class="transactions-list">
                <view 
                    v-for="transaction in recentTransactions" 
                    :key="transaction.id"
                    class="transaction-item"
                    @click="viewTransactionDetail(transaction)"
                >
                    <view class="transaction-info">
                        <text class="transaction-type">{{ transaction.type }}</text>
                        <text class="transaction-date">{{ transaction.date }}</text>
                    </view>
                    <view class="transaction-amount" :class="transaction.amountClass">
                        <text class="amount">{{ transaction.amount }}</text>
                        <text class="status">{{ transaction.status }}</text>
                    </view>
                </view>
            </view>

            <view class="empty-state" v-if="recentTransactions.length === 0">
                <text class="empty-text">Операций пока нет</text>
            </view>
        </view>

        <view class="stats-section">
            <view class="stats-grid">
                <view class="stat-card">
                    <text class="stat-value">${{ totalDeposited }}</text>
                    <text class="stat-label">Всего пополнено</text>
                </view>
                <view class="stat-card">
                    <text class="stat-value">${{ totalWithdrawn }}</text>
                    <text class="stat-label">Всего выведено</text>
                </view>
                <view class="stat-card">
                    <text class="stat-value">${{ totalEarned }}</text>
                    <text class="stat-label">Всего заработано</text>
                </view>
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
            totalDeposited: 2000.00,
            totalWithdrawn: 750.00,
            totalEarned: 3250.75,
            recentTransactions: [
                {
                    id: 1,
                    type: "Ежедневный доход",
                    date: "07.01.2024 14:30",
                    amount: "+$15.80",
                    amountClass: "amount-positive",
                    status: "Завершено"
                },
                {
                    id: 2,
                    type: "Покупка VIP 3",
                    date: "06.01.2024 16:45",
                    amount: "-$300.00",
                    amountClass: "amount-negative",
                    status: "Завершено"
                },
                {
                    id: 3,
                    type: "Реферальный бонус",
                    date: "05.01.2024 09:15",
                    amount: "+$24.50",
                    amountClass: "amount-positive",
                    status: "Завершено"
                },
                {
                    id: 4,
                    type: "Вывод средств",
                    date: "04.01.2024 11:20",
                    amount: "-$100.00",
                    amountClass: "amount-negative",
                    status: "В обработке"
                }
            ]
        }
    },
    methods: {
        goToRecharge() {
            uni.navigateTo({
                url: '/pages/recharge/recharge'
            });
        },
        goToWithdraw() {
            uni.navigateTo({
                url: '/pages/withdraw/withdraw'
            });
        },
        viewAllTransactions() {
            uni.navigateTo({
                url: '/pages/transactions/transactions'
            });
        },
        viewTransactionDetail(transaction) {
            uni.navigateTo({
                url: `/pages/transaction-detail/transaction-detail?id=${transaction.id}`
            });
        }
    }
}
</script>

<style>
.fund-container {
    padding: 20rpx;
    background: linear-gradient(180deg, #4e7771, #4e7771, rgba(185,215,168,0.75));
    min-height: 100vh;
}

.fund-header {
    margin-bottom: 30rpx;
}

.balance-overview {
    background: rgba(0,0,0,0.25);
    border-radius: 15rpx;
    padding: 30rpx;
    color: #e3e3e3;
}

.balance-title {
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

.balance-breakdown {
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

.quick-actions {
    background: rgba(0,0,0,0.25);
    border-radius: 15rpx;
    padding: 25rpx;
    margin-bottom: 30rpx;
}

.action-buttons {
    display: flex;
    justify-content: space-around;
}

.action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20rpx 40rpx;
    background: #4e7771;
    border-radius: 15rpx;
    min-width: 150rpx;
}

.btn-icon {
    font-size: 36rpx;
    color: #fff;
    margin-bottom: 10rpx;
}

.btn-text {
    font-size: 24rpx;
    color: #e3e3e3;
}

.transaction-history {
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

.transactions-list {
    gap: 15rpx;
}

.transaction-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rpx;
    background: rgba(255,255,255,0.05);
    border-radius: 10rpx;
    margin-bottom: 15rpx;
}

.transaction-info {
    flex: 1;
}

.transaction-type {
    font-size: 28rpx;
    color: #fff;
    display: block;
    margin-bottom: 5rpx;
}

.transaction-date {
    font-size: 22rpx;
    color: #b2b2b2;
}

.transaction-amount {
    text-align: right;
}

.amount {
    font-size: 28rpx;
    font-weight: bold;
    display: block;
    margin-bottom: 5rpx;
}

.amount-positive {
    color: #4e7771;
}

.amount-negative {
    color: #e64340;
}

.status {
    font-size: 20rpx;
    color: #b2b2b2;
}

.empty-state {
    text-align: center;
    padding: 40rpx;
}

.empty-text {
    font-size: 28rpx;
    color: #b2b2b2;
}

.stats-section {
    background: rgba(0,0,0,0.25);
    border-radius: 15rpx;
    padding: 25rpx;
}

.stats-grid {
    display: flex;
    justify-content: space-between;
    gap: 15rpx;
}

.stat-card {
    background: rgba(255,255,255,0.05);
    border-radius: 10rpx;
    padding: 20rpx;
    text-align: center;
    flex: 1;
}

.stat-value {
    font-size: 28rpx;
    font-weight: bold;
    color: #fff;
    display: block;
    margin-bottom: 8rpx;
}

.stat-label {
    font-size: 20rpx;
    color: #b2b2b2;
}
</style>
