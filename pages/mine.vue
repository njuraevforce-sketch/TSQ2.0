<template>
    <view class="mine-container">
        <view class="profile-header">
            <view class="user-info">
                <view class="avatar-section">
                    <view class="user-avatar">
                        <text class="avatar-text">{{ userInitials }}</text>
                    </view>
                    <view class="user-status">
                        <text class="status-dot"></text>
                        <text class="status-text">Online</text>
                    </view>
                </view>
                <view class="user-details">
                    <text class="user-name">{{ userName }}</text>
                    <text class="user-id">ID: {{ userId }}</text>
                    <text class="user-level">VIP {{ userLevel }}</text>
                </view>
            </view>
        </view>

        <view class="profile-stats">
            <view class="stats-grid">
                <view class="stat-item">
                    <text class="stat-number">{{ activeDays }}</text>
                    <text class="stat-label">Дней в игре</text>
                </view>
                <view class="stat-item">
                    <text class="stat-number">{{ totalReferrals }}</text>
                    <text class="stat-label">Рефералов</text>
                </view>
                <view class="stat-item">
                    <text class="stat-number">{{ completedTasks }}</text>
                    <text class="stat-label">Заданий</text>
                </view>
            </view>
        </view>

        <view class="ref-section">
            <view class="ref-card">
                <text class="ref-title">Реферальная программа</text>
                <view class="ref-link">
                    <text class="link-text">{{ refLink }}</text>
                    <text class="copy-btn" @click="copyRefLink">Копировать</text>
                </view>
                <view class="ref-stats">
                    <view class="ref-stat">
                        <text class="stat-value">${{ refEarnings }}</text>
                        <text class="stat-label">Заработано</text>
                    </view>
                    <view class="ref-stat">
                        <text class="stat-value">{{ refCount }}</text>
                        <text class="stat-label">Приглашено</text>
                    </view>
                </view>
            </view>
        </view>

        <view class="settings-section">
            <view class="settings-list">
                <view class="setting-item" @click="goToSecurity">
                    <text class="setting-icon">🔒</text>
                    <text class="setting-text">Безопасность</text>
                    <text class="setting-arrow">›</text>
                </view>
                <view class="setting-item" @click="goToNotifications">
                    <text class="setting-icon">🔔</text>
                    <text class="setting-text">Уведомления</text>
                    <text class="setting-arrow">›</text>
                </view>
                <view class="setting-item" @click="goToLanguage">
                    <text class="setting-icon">🌐</text>
                    <text class="setting-text">Язык</text>
                    <text class="setting-arrow">›</text>
                </view>
                <view class="setting-item" @click="goToSupport">
                    <text class="setting-icon">💬</text>
                    <text class="setting-text">Поддержка</text>
                    <text class="setting-arrow">›</text>
                </view>
                <view class="setting-item" @click="goToAbout">
                    <text class="setting-icon">ℹ️</text>
                    <text class="setting-text">О приложении</text>
                    <text class="setting-arrow">›</text>
                </view>
            </view>
        </view>

        <view class="logout-section">
            <view class="logout-btn" @click="handleLogout">
                <text class="logout-text">Выйти из аккаунта</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            userName: "Иван Иванов",
            userInitials: "ИИ",
            userId: "123456",
            userLevel: 3,
            activeDays: 45,
            totalReferrals: 12,
            completedTasks: 89,
            refLink: "https://app.com/register?ref=ABC123",
            refEarnings: 325.50,
            refCount: 12
        }
    },
    methods: {
        copyRefLink() {
            uni.setClipboardData({
                data: this.refLink,
                success: () => {
                    uni.showToast({
                        title: 'Ссылка скопирована',
                        icon: 'success'
                    });
                }
            });
        },
        goToSecurity() {
            uni.navigateTo({
                url: '/pages/security/security'
            });
        },
        goToNotifications() {
            uni.navigateTo({
                url: '/pages/notifications/notifications'
            });
        },
        goToLanguage() {
            uni.navigateTo({
                url: '/pages/language/language'
            });
        },
        goToSupport() {
            uni.navigateTo({
                url: '/pages/support/support'
            });
        },
        goToAbout() {
            uni.navigateTo({
                url: '/pages/about/about'
            });
        },
        handleLogout() {
            uni.showModal({
                title: 'Выход',
                content: 'Вы уверены, что хотите выйти?',
                success: (res) => {
                    if (res.confirm) {
                        uni.redirectTo({
                            url: '/pages/login/login'
                        });
                    }
                }
            });
        }
    }
}
</script>

<style>
.mine-container {
    padding: 20rpx;
    background: linear-gradient(180deg, #4e7771, #4e7771, rgba(185,215,168,0.75));
    min-height: 100vh;
}

.profile-header {
    background: rgba(0,0,0,0.25);
    border-radius: 15rpx;
    padding: 30rpx;
    margin-bottom: 30rpx;
}

.user-info {
    display: flex;
    align-items: center;
}

.avatar-section {
    margin-right: 25rpx;
    text-align: center;
}

.user-avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 60rpx;
    background: #4e7771;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10rpx;
}

.avatar-text {
    color: #fff;
    font-size: 36rpx;
    font-weight: bold;
}

.user-status {
    display: flex;
    align-items: center;
    justify-content: center;
}

.status-dot {
    width: 12rpx;
    height: 12rpx;
    border-radius: 6rpx;
    background: #4e7771;
    margin-right: 8rpx;
}

.status-text {
    font-size: 20rpx;
    color: #b2b2b2;
}

.user-details {
    flex: 1;
}

.user-name {
    font-size: 32rpx;
    color: #fff;
    font-weight: bold;
    display: block;
    margin-bottom: 5rpx;
}

.user-id {
    font-size: 24rpx;
    color: #b2b2b2;
    display: block;
    margin-bottom: 8rpx;
}

.user-level {
    background: #4e7771;
    color: #fff;
    font-size: 22rpx;
    padding: 6rpx 15rpx;
    border-radius: 20rpx;
    display: inline-block;
}

.profile-stats {
    background: rgba(0,0,0,0.25);
    border-radius: 15rpx;
    padding: 25rpx;
    margin-bottom: 30rpx;
}

.stats-grid {
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

.ref-section {
    margin-bottom: 30rpx;
}

.ref-card {
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
    margin-bottom: 20rpx;
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

.ref-stats {
    display: flex;
    justify-content: space-around;
}

.ref-stat {
    text-align: center;
}

.ref-stat .stat-value {
    font-size: 28rpx;
    color: #fff;
    font-weight: bold;
    display: block;
    margin-bottom: 5rpx;
}

.ref-stat .stat-label {
    font-size: 20rpx;
    color: #b2b2b2;
}

.settings-section {
    background: rgba(0,0,0,0.25);
    border-radius: 15rpx;
    margin-bottom: 30rpx;
}

.settings-list {
    padding: 0 25rpx;
}

.setting-item {
    display: flex;
    align-items: center;
    padding: 25rpx 0;
    border-bottom: 1rpx solid rgba(255,255,255,0.1);
}

.setting-item:last-child {
    border-bottom: none;
}

.setting-icon {
    font-size: 32rpx;
    margin-right: 20rpx;
    width: 40rpx;
    text-align: center;
}

.setting-text {
    font-size: 28rpx;
    color: #e3e3e3;
    flex: 1;
}

.setting-arrow {
    font-size: 32rpx;
    color: #b2b2b2;
}

.logout-section {
    padding: 0 25rpx;
}

.logout-btn {
    background: rgba(230, 67, 64, 0.8);
    border-radius: 25rpx;
    padding: 25rpx;
    text-align: center;
}

.logout-text {
    font-size: 28rpx;
    color: #fff;
    font-weight: bold;
}
</style>
