<template>
    <view class="team-container">
        <view class="team-header">
            <view class="ref-link-card">
                <text class="ref-title">Ваша реферальная ссылка</text>
                <view class="ref-link">
                    <text class="link-text">https://app.com/register?ref=ABC123</text>
                    <text class="copy-btn" @click="copyRefLink">Копировать</text>
                </view>
                <text class="ref-description">Приглашайте друзей и получайте до 8% от их депозитов</text>
            </view>
        </view>

        <view class="ref-stats">
            <view class="stat-row">
                <view class="stat-item">
                    <text class="stat-number">{{ totalReferrals }}</text>
                    <text class="stat-label">Всего рефералов</text>
                </view>
                <view class="stat-item">
                    <text class="stat-number">${{ totalRefEarnings }}</text>
                    <text class="stat-label">Заработано</text>
                </view>
            </view>
        </view>

        <view class="ref-levels">
            <view class="level-tabs">
                <text 
                    v-for="level in levels" 
                    :key="level.id"
                    class="level-tab"
                    :class="{ 'level-tab-active': activeLevel === level.id }"
                    @click="activeLevel = level.id"
                >
                    {{ level.name }} ({{ level.count }})
                </text>
            </view>

            <view class="level-content">
                <view class="level-info">
                    <text class="level-percent">{{ activeLevelData.percent }}% от депозитов</text>
                    <text class="level-earnings">Заработано: ${{ activeLevelData.earnings }}</text>
                </view>

                <view class="ref-list">
                    <view 
                        v-for="ref in activeLevelData.referrals" 
                        :key="ref.id"
                        class="ref-item"
                    >
                        <view class="ref-avatar">
                            <text class="avatar-text">{{ ref.name.charAt(0) }}</text>
                        </view>
                        <view class="ref-info">
                            <text class="ref-name">{{ ref.name }}</text>
                            <text class="ref-date">Присоединился: {{ ref.joinDate }}</text>
                        </view>
                        <view class="ref-earnings">
                            <text class="earnings-amount">+${{ ref.earnings }}</text>
                            <text class="earnings-label">Ваш доход</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            activeLevel: 1,
            totalReferrals: 12,
            totalRefEarnings: 325.50,
            levels: [
                { id: 1, name: '1-е поколение', count: 5, percent: 8 },
                { id: 2, name: '2-е поколение', count: 4, percent: 3 },
                { id: 3, name: '3-е поколение', count: 3, percent: 1 }
            ],
            referralsData: {
                1: [
                    { id: 1, name: 'Иван Петров', joinDate: '15.01.2024', earnings: 156.80 },
                    { id: 2, name: 'Мария Сидорова', joinDate: '18.01.2024', earnings: 89.50 },
                    { id: 3, name: 'Алексей Козлов', joinDate: '20.01.2024', earnings: 42.20 }
                ],
                2: [
                    { id: 4, name: 'Сергей Иванов', joinDate: '22.01.2024', earnings: 25.30 },
                    { id: 5, name: 'Ольга Смирнова', joinDate: '25.01.2024', earnings: 18.90 }
                ],
                3: [
                    { id: 6, name: 'Дмитрий Попов', joinDate: '28.01.2024', earnings: 8.50 },
                    { id: 7, name: 'Екатерина Новикова', joinDate: '30.01.2024', earnings: 5.20 }
                ]
            }
        }
    },
    computed: {
        activeLevelData() {
            const level = this.levels.find(l => l.id === this.activeLevel);
            return {
                ...level,
                referrals: this.referralsData[this.activeLevel] || [],
                earnings: this.referralsData[this.activeLevel]?.reduce((sum, ref) => sum + ref.earnings, 0) || 0
            };
        }
    },
    methods: {
        copyRefLink() {
            uni.setClipboardData({
                data: 'https://app.com/register?ref=ABC123',
                success: () => {
                    uni.showToast({
                        title: 'Ссылка скопирована',
                        icon: 'success'
                    });
                }
            });
        }
    }
}
</script>

<style>
.team-container {
    padding: 20rpx;
    background: linear-gradient(180deg, #4e7771, #4e7771, rgba(185,215,168,0.75));
    min-height: 100vh;
}

.team-header {
    margin-bottom: 30rpx;
}

.ref-link-card {
    background: rgba(0,0,0,0.25);
    border-radius: 15rpx;
    padding: 30rpx;
}

.ref-title {
    font-size: 28rpx;
    color: #e3e3e3;
    display: block;
    margin-bottom: 15rpx;
}

.ref-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255,255,255,0.1);
    border-radius: 10rpx;
    padding: 20rpx;
    margin-bottom: 15rpx;
}

.link-text {
    font-size: 24rpx;
    color: #e3e3e3;
    flex: 1;
}

.copy-btn {
    background: #4e7771;
    color: #fff;
    font-size: 22rpx;
    padding: 10rpx 20rpx;
    border-radius: 8rpx;
}

.ref-description {
    font-size: 22rpx;
    color: #b2b2b2;
}

.ref-stats {
    background: rgba(0,0,0,0.25);
    border-radius: 15rpx;
    padding: 25rpx;
    margin-bottom: 30rpx;
}

.stat-row {
    display: flex;
    justify-content: space-around;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 32rpx;
    color: #fff;
    font-weight: bold;
    display: block;
    margin-bottom: 8rpx;
}

.stat-label {
    font-size: 22rpx;
    color: #b2b2b2;
}

.ref-levels {
    background: rgba(0,0,0,0.25);
    border-radius: 15rpx;
    overflow: hidden;
}

.level-tabs {
    display: flex;
    background: rgba(0,0,0,0.3);
}

.level-tab {
    flex: 1;
    text-align: center;
    padding: 25rpx;
    font-size: 24rpx;
    color: #e3e3e3;
    border-bottom: 4rpx solid transparent;
}

.level-tab-active {
    color: #4e7771;
    border-bottom-color: #4e7771;
}

.level-content {
    padding: 25rpx;
}

.level-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
    padding-bottom: 20rpx;
    border-bottom: 1rpx solid rgba(255,255,255,0.1);
}

.level-percent {
    font-size: 26rpx;
    color: #4e7771;
    font-weight: bold;
}

.level-earnings {
    font-size: 24rpx;
    color: #e3e3e3;
}

.ref-list {
    gap: 15rpx;
}

.ref-item {
    display: flex;
    align-items: center;
    padding: 20rpx;
    background: rgba(255,255,255,0.05);
    border-radius: 10rpx;
    margin-bottom: 15rpx;
}

.ref-avatar {
    width: 80rpx;
    height: 80rpx;
    border-radius: 40rpx;
    background: #4e7771;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20rpx;
}

.avatar-text {
    color: #fff;
    font-size: 28rpx;
    font-weight: bold;
}

.ref-info {
    flex: 1;
}

.ref-name {
    font-size: 26rpx;
    color: #fff;
    display: block;
    margin-bottom: 5rpx;
}

.ref-date {
    font-size: 22rpx;
    color: #b2b2b2;
}

.ref-earnings {
    text-align: right;
}

.earnings-amount {
    font-size: 24rpx;
    color: #4e7771;
    font-weight: bold;
    display: block;
    margin-bottom: 5rpx;
}

.earnings-label {
    font-size: 20rpx;
    color: #b2b2b2;
}
</style>
