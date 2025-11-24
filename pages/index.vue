<template>
    <view class="container">
        <!-- Балансы -->
        <view class="balance-section">
            <view class="total-balance">
                <text class="balance-amount">{{ formatCurrency(user.balance) }} USDT</text>
                <text class="balance-label">Total Balance</text>
            </view>
            <view class="balance-cards">
                <view class="balance-card">
                    <text class="card-amount">{{ formatCurrency(referralIncome) }} USDT</text>
                    <text class="card-label">Referral</text>
                </view>
                <view class="balance-card">
                    <text class="card-amount">{{ formatCurrency(bonusIncome) }} USDT</text>
                    <text class="card-label">Bonus</text>
                </view>
                <view class="balance-card">
                    <text class="card-amount">{{ formatCurrency(quantIncome) }} USDT</text>
                    <text class="card-label">Quant</text>
                </view>
            </view>
        </view>

        <!-- Claim Section -->
        <view class="claim-section">
            <view class="claim-info">
                <text class="claim-amount">{{ formatCurrency(dailyIncome) }} USDT</text>
                <text class="claim-label">Available Income</text>
            </view>
            <button class="claim-button" :disabled="!canClaim || dailyIncome === 0" @click="claimDailyIncome">
                <text class="button-text">
                    <i class="fas fa-bolt"></i> {{ claimButtonText }}
                </text>
            </button>
            <text class="claim-timer">{{ claimTimerText }}</text>
        </view>

        <!-- VIP Packages Carousel -->
        <view class="vip-carousel">
            <scroll-view class="carousel-scroll" scroll-x>
                <view v-for="pkg in vipPackages" :key="pkg.id" class="vip-package-item" 
                      :style="{ backgroundImage: `url(${pkg.bgImage})` }" @click="purchaseVIPPackage(pkg)">
                    <view class="package-content">
                        <text class="package-level">VIP {{ pkg.level }}</text>
                        <text class="package-price">{{ formatCurrency(pkg.price) }} USDT</text>
                        <text class="package-income">+{{ formatCurrency(pkg.dailyIncome) }} USDT/day</text>
                        <text class="package-percentage">{{ pkg.percentage }}% daily for 30 days</text>
                    </view>
                    <image class="package-icon" :src="pkg.icon" mode="aspectFit"></image>
                    <view class="package-badge" :class="{ active: isPackageActive(pkg) }">
                        {{ isPackageActive(pkg) ? 'ACTIVE' : 'BUY' }}
                    </view>
                </view>
            </scroll-view>
        </view>

        <!-- Loading Overlay -->
        <view class="loading-overlay" v-if="loading">
            <view class="loading-spinner"></view>
        </view>
    </view>
</template>

<script>
    const SUPABASE_URL = 'https://pjyuagmvrhpepomqfxxc.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqeXVhZ212cmhwZXBvbXFmeHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxNTI0MTMsImV4cCI6MjA3ODcyODQxM30.yJzBls_cn_x5CUVyQyqZjYhrMf_WlN23W48QUHHPc6Y';

    export default {
        data() {
            return {
                user: {
                    balance: 0,
                    last_claim_date: null
                },
                activeVipPackages: [],
                transactions: [],
                referrals: { gen1: [], gen2: [], gen3: [] },
                vipPackages: [
                    { id: 1, level: 1, price: 20, dailyIncome: 0.52, percentage: 2.6, duration: 30, bgImage: '/static/images/vip1.png', icon: '/static/images/vip1-icon.png' },
                    { id: 2, level: 2, price: 100, dailyIncome: 3.10, percentage: 3.1, duration: 30, bgImage: '/static/images/vip2.png', icon: '/static/images/vip2-icon.png' },
                    { id: 3, level: 3, price: 300, dailyIncome: 10.80, percentage: 3.6, duration: 30, bgImage: '/static/images/vip3.png', icon: '/static/images/vip3-icon.png' },
                    { id: 4, level: 4, price: 1000, dailyIncome: 41.00, percentage: 4.1, duration: 30, bgImage: '/static/images/vip4.png', icon: '/static/images/vip4-icon.png' },
                    { id: 5, level: 5, price: 3000, dailyIncome: 138.00, percentage: 4.6, duration: 30, bgImage: '/static/images/vip5.png', icon: '/static/images/vip5-icon.png' },
                    { id: 6, level: 6, price: 5000, dailyIncome: 255.00, percentage: 5.1, duration: 30, bgImage: '/static/images/vip6.png', icon: '/static/images/vip6-icon.png' }
                ],
                loading: false,
                currentUserId: null
            }
        },
        computed: {
            dailyIncome() {
                let dailyIncome = 0;
                const now = new Date();
                
                const activePackages = this.activeVipPackages.filter(purchase => {
                    const purchaseDate = new Date(purchase.purchase_date);
                    const expiryDate = new Date(purchaseDate.getTime() + 30 * 24 * 60 * 60 * 1000);
                    const isActive = purchase.active === true && 
                                    purchase.deposit_returned === false && 
                                    now < expiryDate;
                    
                    return isActive;
                });
                
                activePackages.forEach(purchase => {
                    const vipPackage = this.vipPackages.find(p => p.id === purchase.vip_package_id);
                    if (vipPackage) {
                        dailyIncome += vipPackage.dailyIncome;
                    }
                });
                
                return dailyIncome;
            },
            canClaim() {
                if (!this.user.last_claim_date) {
                    return true;
                }
                
                const lastClaim = new Date(this.user.last_claim_date);
                const now = new Date();
                
                const lastClaimUTC = Date.UTC(
                    lastClaim.getUTCFullYear(),
                    lastClaim.getUTCMonth(), 
                    lastClaim.getUTCDate(),
                    lastClaim.getUTCHours(),
                    lastClaim.getUTCMinutes(),
                    lastClaim.getUTCSeconds()
                );
                
                const nowUTC = Date.UTC(
                    now.getUTCFullYear(),
                    now.getUTCMonth(),
                    now.getUTCDate(), 
                    now.getUTCHours(),
                    now.getUTCMinutes(), 
                    now.getUTCSeconds()
                );
                
                const today22UTC = new Date(Date.UTC(
                    now.getUTCFullYear(),
                    now.getUTCMonth(),
                    now.getUTCDate(),
                    22, 0, 0, 0
                ));
                
                const currentWindowStart = nowUTC >= today22UTC.getTime() ? 
                    today22UTC : 
                    new Date(Date.UTC(
                        now.getUTCFullYear(),
                        now.getUTCMonth(),
                        now.getUTCDate() - 1,
                        22, 0, 0, 0
                    ));
                
                const canClaim = lastClaimUTC < currentWindowStart.getTime();
                
                return canClaim;
            },
            claimButtonText() {
                if (this.dailyIncome === 0) {
                    return 'NO AVAILABLE INCOME';
                }
                return this.canClaim ? 'CLAIM INCOME' : 'ALREADY CLAIMED';
            },
            claimTimerText() {
                if (this.dailyIncome === 0) {
                    return 'Buy a VIP package to earn income';
                }
                
                const nextClaim = this.getNextClaimTime();
                const now = new Date();
                const timeLeft = nextClaim - now;
                const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
                const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                
                return this.canClaim ? 
                    `Available for: ${hoursLeft}h ${minutesLeft}m` : 
                    `Next claim: ${hoursLeft}h ${minutesLeft}m`;
            },
            referralIncome() {
                return this.transactions
                    .filter(t => t.type === 'referral' && t.positive)
                    .reduce((sum, t) => sum + t.amount, 0);
            },
            bonusIncome() {
                return this.transactions
                    .filter(t => t.type === 'bonus' && t.positive)
                    .reduce((sum, t) => sum + t.amount, 0);
            },
            quantIncome() {
                return this.transactions
                    .filter(t => t.type === 'daily_income' && t.positive)
                    .reduce((sum, t) => sum + t.amount, 0);
            }
        },
        onLoad() {
            this.currentUserId = uni.getStorageSync('currentUserId');
            if (!this.currentUserId) {
                uni.redirectTo({
                    url: '/pages/login/login'
                });
                return;
            }
            this.loadAllData();
        },
        onShow() {
            if (this.currentUserId) {
                this.loadAllData();
            }
        },
        methods: {
            formatCurrency(amount) {
                return new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }).format(amount);
            },
            isPackageActive(pkg) {
                return this.activeVipPackages.some(purchase => 
                    purchase.vip_package_id === pkg.id && purchase.active === true
                );
            },
            getNextClaimTime() {
                const now = new Date();
                const nextClaim = new Date(Date.UTC(
                    now.getUTCFullYear(),
                    now.getUTCMonth(), 
                    now.getUTCDate(),
                    22, 0, 0, 0
                ));
                
                if (now.getTime() >= nextClaim.getTime()) {
                    nextClaim.setUTCDate(nextClaim.getUTCDate() + 1);
                }
                
                return nextClaim;
            },
            async loadAllData() {
                this.loading = true;
                try {
                    await Promise.all([
                        this.loadUserData(),
                        this.loadVipPurchases(),
                        this.loadTransactions()
                    ]);
                } catch (error) {
                    console.error('Data load error:', error);
                    this.showCustomAlert('Error loading data. Please refresh the page.');
                } finally {
                    this.loading = false;
                }
            },
            async loadUserData() {
                const response = await uni.request({
                    url: `${SUPABASE_URL}/rest/v1/users?id=eq.${this.currentUserId}`,
                    header: {
                        'apikey': SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                    }
                });
                if (response.data && response.data.length > 0) {
                    this.user = response.data[0];
                }
            },
            async loadVipPurchases() {
                const response = await uni.request({
                    url: `${SUPABASE_URL}/rest/v1/vip_purchases?user_id=eq.${this.currentUserId}`,
                    header: {
                        'apikey': SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                    }
                });
                this.activeVipPackages = response.data || [];
            },
            async loadTransactions() {
                const response = await uni.request({
                    url: `${SUPABASE_URL}/rest/v1/transactions?user_id=eq.${this.currentUserId}`,
                    header: {
                        'apikey': SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                    }
                });
                this.transactions = response.data || [];
            },
            async purchaseVIPPackage(pkg) {
                if (this.isPackageActive(pkg)) {
                    this.showCustomAlert(`VIP ${pkg.level} package is already active!`);
                    return;
                }

                if (this.user.balance < pkg.price) {
                    this.showCustomAlert('Insufficient balance to purchase this VIP package');
                    return;
                }

                this.loading = true;
                try {
                    const purchaseData = {
                        user_id: this.currentUserId,
                        vip_package_id: pkg.id,
                        purchase_date: new Date().toISOString(),
                        expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
                        active: true,
                        deposit_returned: false
                    };

                    await uni.request({
                        url: `${SUPABASE_URL}/rest/v1/vip_purchases`,
                        method: 'POST',
                        header: {
                            'apikey': SUPABASE_ANON_KEY,
                            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                            'Content-Type': 'application/json',
                            'Prefer': 'return=representation'
                        },
                        data: purchaseData
                    });

                    const newBalance = this.user.balance - pkg.price;
                    await uni.request({
                        url: `${SUPABASE_URL}/rest/v1/users?id=eq.${this.currentUserId}`,
                        method: 'PATCH',
                        header: {
                            'apikey': SUPABASE_ANON_KEY,
                            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                            'Content-Type': 'application/json'
                        },
                        data: { 
                            balance: newBalance, 
                            vip_level: Math.max(this.user.vip_level, pkg.level) 
                        }
                    });

                    await this.createTransaction({
                        user_id: this.currentUserId,
                        type: 'vip_purchase',
                        title: `VIP ${pkg.level} Purchase`,
                        amount: pkg.price,
                        positive: false
                    });

                    // Process referral income
                    await this.processReferralIncome(pkg.price, pkg.level, this.currentUserId, this.user.name);

                    await this.loadAllData();
                    this.showCustomAlert(`VIP ${pkg.level} package purchased successfully!`);
                } catch (error) {
                    console.error('VIP purchase error:', error);
                    this.showCustomAlert('Purchase failed. Please try again.');
                } finally {
                    this.loading = false;
                }
            },
            async processReferralIncome(packagePrice, vipLevel, purchaserId, purchaserName) {
                // ... (ваша реализация processReferralIncome)
                // Для краткости опустим, но она должна быть здесь
            },
            async createTransaction(transactionData) {
                const fullTransactionData = {
                    ...transactionData,
                    status: 'completed',
                    created_at: new Date().toISOString()
                };
                
                await uni.request({
                    url: `${SUPABASE_URL}/rest/v1/transactions`,
                    method: 'POST',
                    header: {
                        'apikey': SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'return=representation'
                    },
                    data: fullTransactionData
                });
            },
            async claimDailyIncome() {
                if (!this.canClaim || this.dailyIncome === 0) {
                    this.showCustomAlert('You cannot claim income at this time. Please check the timer.');
                    return;
                }

                this.loading = true;
                try {
                    const newBalance = this.user.balance + this.dailyIncome;
                    await uni.request({
                        url: `${SUPABASE_URL}/rest/v1/users?id=eq.${this.currentUserId}`,
                        method: 'PATCH',
                        header: {
                            'apikey': SUPABASE_ANON_KEY,
                            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                            'Content-Type': 'application/json'
                        },
                        data: { 
                            balance: newBalance, 
                            last_claim_date: new Date().toISOString() 
                        }
                    });

                    await this.createTransaction({
                        user_id: this.currentUserId,
                        type: 'daily_income',
                        title: 'Daily Quantification Income',
                        amount: this.dailyIncome,
                        positive: true
                    });

                    await this.loadAllData();
                    this.showCustomAlert(`Successfully claimed ${this.formatCurrency(this.dailyIncome)} USDT daily income!`);
                } catch (error) {
                    console.error('Claim income error:', error);
                    this.showCustomAlert('Failed to claim income. Please try again.');
                } finally {
                    this.loading = false;
                }
            },
            showCustomAlert(message) {
                uni.showModal({
                    title: 'Info',
                    content: message,
                    showCancel: false
                });
            }
        }
    }
</script>

<style scoped>
    /* Стили уже в uni.scss */
</style>
