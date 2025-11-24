<template>
    <view class="vip-container">
        <view class="vip-header">
            <text class="vip-title">VIP пакеты</text>
            <text class="vip-subtitle">Инвестируйте и получайте ежедневный доход</text>
        </view>

        <view class="vip-packages-grid">
            <view 
                v-for="pkg in vipPackages" 
                :key="pkg.id"
                class="vip-package"
                :class="{ 
                    'vip-package-owned': pkg.owned,
                    'vip-package-available': !pkg.owned && availableBalance >= pkg.price
                }"
            >
                <view class="vip-package-header">
                    <text class="vip-level">VIP {{ pkg.level }}</text>
                    <text class="vip-badge" v-if="pkg.owned">АКТИВЕН</text>
                </view>
                
                <view class="vip-price-section">
                    <text class="vip-price">${{ pkg.price }}</text>
                    <text class="vip-duration">на 30 дней</text>
                </view>

                <view class="vip-income-section">
                    <text class="income-label">Ежедневный доход</text>
                    <text class="income-amount">${{ pkg.dailyIncome }}</text>
                    <text class="income-percent">{{ pkg.percentage }}% в день</text>
                </view>

                <view class="vip-features">
                    <text class="feature">✓ Срок: 30 дней</text>
                    <text class="feature">✓ Возврат депозита</text>
                    <text class="feature">✓ Авто-продление</text>
                </view>

                <view 
                    class="vip-action-button"
                    :class="{
                        'vip-action-owned': pkg.owned,
                        'vip-action-buy': !pkg.owned && availableBalance >= pkg.price,
                        'vip-action-disabled': !pkg.owned && availableBalance < pkg.price
                    }"
                    @click="handlePackageAction(pkg)"
                >
                    <text class="action-text">
                        {{ pkg.owned ? 'АКТИВЕН' : 
                           availableBalance >= pkg.price ? 'КУПИТЬ' : 'НЕДОСТАТОЧНО' }}
                    </text>
                </view>
            </view>
        </view>

        <view class="vip-rules">
            <text class="rules-title">Правила VIP пакетов</text>
            <view class="rules-list">
                <text class="rule">• Каждый пакет действует 30 дней</text>
                <text class="rule">• Ежедневный доход начисляется после выполнения задания</text>
                <text class="rule">• По истечении 30 дней депозит возвращается на баланс</text>
                <text class="rule">• Пакет автоматически становится активным для нового цикла</text>
                <text class="rule">• Доход можно получить один раз в день до 22:00 следующего дня</text>
                <text class="rule">• Неполученный доход сгорает после 22:00 следующего дня</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            availableBalance: 850.50,
            vipPackages: [
                { 
                    id: 1, 
                    level: 1, 
                    price: 20, 
                    dailyIncome: 0.52, 
                    percentage: 2.6,
                    owned: true 
                },
                { 
                    id: 2, 
                    level: 2, 
                    price: 100, 
                    dailyIncome: 3.10, 
                    percentage: 3.1,
                    owned: true 
                },
                { 
                    id: 3, 
                    level: 3, 
                    price: 300, 
                    dailyIncome: 10.80, 
                    percentage: 3.6,
                    owned: true 
                },
                { 
                    id: 4, 
                    level: 4, 
                    price: 1000, 
                    dailyIncome: 41.00, 
                    percentage: 4.1,
                    owned: false 
                },
                { 
                    id: 5, 
                    level: 5, 
                    price: 3000, 
                    dailyIncome: 138.00, 
                    percentage: 4.6,
                    owned: false 
                },
                { 
                    id: 6, 
                    level: 6, 
                    price: 5000, 
                    dailyIncome: 255.00, 
                    percentage: 5.1,
                    owned: false 
                }
            ]
        }
    },
    methods: {
        handlePackageAction(pkg) {
            if (pkg.owned) {
                uni.showToast({
                    title: 'Пакет уже активен',
                    icon: 'none'
                });
                return;
            }

            if (this.availableBalance < pkg.price) {
                uni.showToast({
                    title: 'Недостаточно средств',
                    icon: 'none'
                });
                return;
            }

            uni.showModal({
                title: 'Покупка VIP пакета',
                content: `Вы уверены, что хотите купить VIP ${pkg.level} за $${pkg.price}?`,
                success: (res) => {
                    if (res.confirm) {
                        this.buyPackage(pkg);
                    }
                }
            });
        },

        buyPackage(pkg) {
            // Логика покупки пакета
            pkg.owned = true;
            this.availableBalance -= pkg.price;
            
            uni.showToast({
                title: `VIP ${pkg.level} куплен!`,
                icon: 'success'
            });
        }
    }
}
</script>

<style>
.vip-container {
    padding: 20rpx;
    background: linear-gradient(180deg, #4e7771, #4e7771, rgba(185,215,168,0.75));
    min-height: 100vh;
}

.vip-header {
    text-align: center;
    margin-bottom: 40rpx;
}

.vip-title {
    font-size: 36rpx;
    color: #fff;
    font-weight: bold;
    display: block;
    margin-bottom: 10rpx;
}

.vip-subtitle {
    font-size: 28rpx;
    color: #e3e3e3;
}

.vip-packages-grid {
    gap: 20rpx;
    margin-bottom: 40rpx;
}

.vip-package {
    background: rgba(0,0,0,0.25);
    border-radius: 20rpx;
    padding: 30rpx;
    margin-bottom: 20rpx;
    border: 2rpx solid transparent;
}

.vip-package-owned {
    border-color: #4e7771;
}

.vip-package-available {
    border-color: rgba(78, 119, 113, 0.5);
}

.vip-package-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
}

.vip-level {
    font-size: 32rpx;
    color: #fff;
    font-weight: bold;
}

.vip-badge {
    background: #4e7771;
    color: #fff;
    font-size: 22rpx;
    padding: 8rpx 16rpx;
    border-radius: 20rpx;
}

.vip-price-section {
    text-align: center;
    margin-bottom: 25rpx;
    padding-bottom: 25rpx;
    border-bottom: 1rpx solid rgba(255,255,255,0.1);
}

.vip-price {
    font-size: 42rpx;
    color: #fff;
    font-weight: bold;
    display: block;
    margin-bottom: 5rpx;
}

.vip-duration {
    font-size: 24rpx;
    color: #b2b2b2;
}

.vip-income-section {
    text-align: center;
    margin-bottom: 25rpx;
}

.income-label {
    font-size: 24rpx;
    color: #e3e3e3;
    display: block;
    margin-bottom: 8rpx;
}

.income-amount {
    font-size: 36rpx;
    color: #4e7771;
    font-weight: bold;
    display: block;
    margin-bottom: 5rpx;
}

.income-percent {
    font-size: 22rpx;
    color: #b2b2b2;
}

.vip-features {
    margin-bottom: 25rpx;
}

.feature {
    font-size: 24rpx;
    color: #e3e3e3;
    display: block;
    margin-bottom: 8rpx;
}

.vip-action-button {
    border-radius: 25rpx;
    padding: 20rpx;
    text-align: center;
}

.vip-action-owned {
    background: rgba(78, 119, 113, 0.3);
}

.vip-action-buy {
    background: #4e7771;
}

.vip-action-disabled {
    background: #545c66;
    opacity: 0.7;
}

.action-text {
    font-size: 28rpx;
    color: #fff;
    font-weight: bold;
}

.vip-rules {
    background: rgba(0,0,0,0.25);
    border-radius: 15rpx;
    padding: 30rpx;
}

.rules-title {
    font-size: 28rpx;
    color: #fff;
    font-weight: bold;
    display: block;
    margin-bottom: 20rpx;
}

.rules-list {
    gap: 10rpx;
}

.rule {
    font-size: 24rpx;
    color: #e3e3e3;
    display: block;
    margin-bottom: 8rpx;
}
</style>
