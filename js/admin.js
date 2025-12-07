// Admin section - UPDATED with full functionality
export default function renderAdmin() {
    return `
        <div class="admin-container">
            <!-- Admin Header with Statistics -->
            <div class="card padding" style="background: rgba(0,0,0,0.3); margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                    <div>
                        <h2 style="color: white; margin-bottom: 5px;">Admin Panel</h2>
                        <p style="color: #ccc; font-size: 12px;">Full control panel</p>
                    </div>
                    <div class="admin-stats" style="display: flex; gap: 15px;">
                        <div class="admin-stat">
                            <div class="admin-stat-value" id="total-users">0</div>
                            <div class="admin-stat-label">Total Users</div>
                        </div>
                        <div class="admin-stat">
                            <div class="admin-stat-value" id="pending-withdrawals">0</div>
                            <div class="admin-stat-label">Pending WD</div>
                        </div>
                        <div class="admin-stat">
                            <div class="admin-stat-value" id="today-deposits">0</div>
                            <div class="admin-stat-label">Today Deposits</div>
                        </div>
                        <div class="admin-stat">
                            <div class="admin-stat-value" id="total-balance">0</div>
                            <div class="admin-stat-label">Total Balance</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Admin Navigation - UPDATED -->
            <div class="admin-nav">
                <div class="admin-nav-item active" data-tab="withdrawals">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>Withdrawals</span>
                </div>
                <div class="admin-nav-item" data-tab="users">
                    <i class="fas fa-users"></i>
                    <span>Users</span>
                </div>
                <div class="admin-nav-item" data-tab="deposits">
                    <i class="fas fa-credit-card"></i>
                    <span>Deposits</span>
                </div>
                <div class="admin-nav-item" data-tab="referrals">
                    <i class="fas fa-sitemap"></i>
                    <span>Referral Tree</span>
                </div>
                <div class="admin-nav-item" data-tab="transactions">
                    <i class="fas fa-exchange-alt"></i>
                    <span>All Transactions</span>
                </div>
                <div class="admin-nav-item" data-tab="platform">
                    <i class="fas fa-chart-bar"></i>
                    <span>Platform Stats</span>
                </div>
                <div class="admin-nav-item" data-tab="settings">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </div>
            </div>

            <!-- Tabs Content -->
            <div class="admin-tabs">
                <!-- Withdrawals Tab -->
                <div class="admin-tab active" id="withdrawals-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">Pending Withdrawals</h3>
                            <div class="tab-actions">
                                <select id="withdrawal-status-filter" class="admin-select-small">
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                    <option value="cancelled">Cancelled</option>
                                    <option value="all">All Statuses</option>
                                </select>
                                <button class="admin-btn-small" id="refresh-withdrawals">
                                    <i class="fas fa-sync-alt"></i> Refresh
                                </button>
                            </div>
                        </div>
                        
                        <div class="withdrawals-table" id="withdrawals-table">
                            <div style="color: #ccc; text-align: center; padding: 30px;">
                                <i class="fas fa-spinner fa-spin"></i> Loading...
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Users Tab - UPDATED with more columns -->
                <div class="admin-tab" id="users-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">All Users</h3>
                            <div class="tab-actions">
                                <input type="text" 
                                       id="search-users" 
                                       placeholder="Search by ID, username, email..."
                                       class="admin-input-small">
                                <select id="vip-filter" class="admin-select-small">
                                    <option value="">All VIP</option>
                                    <option value="1">VIP 1</option>
                                    <option value="2">VIP 2</option>
                                    <option value="3">VIP 3</option>
                                    <option value="4">VIP 4</option>
                                    <option value="5">VIP 5</option>
                                    <option value="6">VIP 6</option>
                                </select>
                                <button class="admin-btn-small" id="refresh-users">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                                <button class="admin-btn-small admin-btn-success" id="export-users">
                                    <i class="fas fa-download"></i> Export
                                </button>
                            </div>
                        </div>
                        
                        <div class="users-table" id="users-table">
                            <div style="color: #ccc; text-align: center; padding: 30px;">
                                <i class="fas fa-spinner fa-spin"></i> Loading...
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Deposits Tab - NEW -->
                <div class="admin-tab" id="deposits-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">Deposits Monitoring</h3>
                            <div class="tab-actions">
                                <select id="deposit-period-filter" class="admin-select-small">
                                    <option value="today">Today</option>
                                    <option value="yesterday">Yesterday</option>
                                    <option value="week">This Week</option>
                                    <option value="month">This Month</option>
                                    <option value="all">All Time</option>
                                </select>
                                <select id="deposit-status-filter" class="admin-select-small">
                                    <option value="">All Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="processed">Processed</option>
                                </select>
                                <button class="admin-btn-small" id="refresh-deposits">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                        <!-- Deposit Statistics -->
                        <div class="deposit-stats" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin-bottom: 20px;">
                            <div class="stat-card">
                                <div class="stat-value" id="total-deposit-amount">0</div>
                                <div class="stat-label">Total Amount</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-value" id="deposit-count">0</div>
                                <div class="stat-label">Total Deposits</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-value" id="pending-deposit-count">0</div>
                                <div class="stat-label">Pending</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-value" id="avg-deposit">0</div>
                                <div class="stat-label">Average</div>
                            </div>
                        </div>
                        
                        <div class="deposits-table" id="deposits-table">
                            <div style="color: #ccc; text-align: center; padding: 30px;">
                                <i class="fas fa-spinner fa-spin"></i> Loading...
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Referral Tree Tab - NEW -->
                <div class="admin-tab" id="referrals-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">Referral Tree Explorer</h3>
                            <div class="tab-actions">
                                <input type="text" 
                                       id="search-user-referrals" 
                                       placeholder="Enter user ID or username..."
                                       class="admin-input-small">
                                <button class="admin-btn-small" id="search-referrals-btn">
                                    <i class="fas fa-search"></i> Search
                                </button>
                                <button class="admin-btn-small" id="refresh-referrals">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="referral-tree-container" id="referral-tree-container">
                            <div style="color: #ccc; text-align: center; padding: 30px;">
                                Enter user ID or username to view referral tree
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Transactions Tab -->
                <div class="admin-tab" id="transactions-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">All Transactions</h3>
                            <div class="tab-actions">
                                <select id="transaction-type-filter" class="admin-select-small">
                                    <option value="">All Types</option>
                                    <option value="deposit">Deposits</option>
                                    <option value="withdrawal">Withdrawals</option>
                                    <option value="quantification">Quantification</option>
                                    <option value="referral">Referrals</option>
                                    <option value="bonus">Bonus</option>
                                </select>
                                <input type="date" id="transaction-date-filter" class="admin-input-small">
                                <button class="admin-btn-small" id="refresh-transactions">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="transactions-table" id="transactions-table">
                            <div style="color: #ccc; text-align: center; padding: 30px;">
                                <i class="fas fa-spinner fa-spin"></i> Loading...
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Platform Statistics Tab - NEW -->
                <div class="admin-tab" id="platform-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">Platform Statistics</h3>
                            <div class="tab-actions">
                                <select id="stats-period" class="admin-select-small">
                                    <option value="today">Today</option>
                                    <option value="week">This Week</option>
                                    <option value="month">This Month</option>
                                    <option value="all">All Time</option>
                                </select>
                                <button class="admin-btn-small" id="refresh-stats">
                                    <i class="fas fa-sync-alt"></i> Refresh
                                </button>
                            </div>
                        </div>
                        
                        <!-- Platform Stats Grid -->
                        <div class="platform-stats-grid">
                            <div class="stat-card-large">
                                <div class="stat-icon"><i class="fas fa-users"></i></div>
                                <div class="stat-content">
                                    <div class="stat-title">Total Users</div>
                                    <div class="stat-value" id="platform-total-users">0</div>
                                </div>
                            </div>
                            
                            <div class="stat-card-large">
                                <div class="stat-icon"><i class="fas fa-money-bill-wave"></i></div>
                                <div class="stat-content">
                                    <div class="stat-title">Total Deposits</div>
                                    <div class="stat-value" id="platform-total-deposits">0</div>
                                </div>
                            </div>
                            
                            <div class="stat-card-large">
                                <div class="stat-icon"><i class="fas fa-hand-holding-usd"></i></div>
                                <div class="stat-content">
                                    <div class="stat-title">Total Withdrawals</div>
                                    <div class="stat-value" id="platform-total-withdrawals">0</div>
                                </div>
                            </div>
                            
                            <div class="stat-card-large">
                                <div class="stat-icon"><i class="fas fa-chart-line"></i></div>
                                <div class="stat-content">
                                    <div class="stat-title">Total Profit</div>
                                    <div class="stat-value" id="platform-total-profit">0</div>
                                </div>
                            </div>
                            
                            <div class="stat-card-large">
                                <div class="stat-icon"><i class="fas fa-user-plus"></i></div>
                                <div class="stat-content">
                                    <div class="stat-title">New Users Today</div>
                                    <div class="stat-value" id="platform-new-users">0</div>
                                </div>
                            </div>
                            
                            <div class="stat-card-large">
                                <div class="stat-icon"><i class="fas fa-coins"></i></div>
                                <div class="stat-content">
                                    <div class="stat-title">Total Referral Earnings</div>
                                    <div class="stat-value" id="platform-referral-earnings">0</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- VIP Distribution Chart -->
                        <div class="card margin-top">
                            <div class="card-header">
                                <h4 style="color: white;">VIP Level Distribution</h4>
                            </div>
                            <div class="card-body">
                                <canvas id="vip-distribution-chart" width="400" height="200"></canvas>
                            </div>
                        </div>
                        
                        <!-- Recent Activity -->
                        <div class="card margin-top">
                            <div class="card-header">
                                <h4 style="color: white;">Recent Activity</h4>
                            </div>
                            <div class="card-body" id="recent-activity">
                                <div style="color: #ccc; text-align: center; padding: 20px;">
                                    Loading recent activity...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Settings Tab - UPDATED -->
                <div class="admin-tab" id="settings-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">Platform Settings</h3>
                            <div class="tab-actions">
                                <button class="admin-btn-small admin-btn-success" id="load-settings">
                                    <i class="fas fa-download"></i> Load Current
                                </button>
                            </div>
                        </div>
                        
                        <div class="settings-grid">
                            <div class="setting-group">
                                <label style="color: #fff; font-size: 14px;">Registration Bonus</label>
                                <input type="number" 
                                       id="reg-bonus" 
                                       value="3.00" 
                                       class="admin-input"
                                       step="0.01">
                                <div style="font-size: 12px; color: #ccc;">USDT</div>
                            </div>
                            
                            <div class="setting-group">
                                <label style="color: #fff; font-size: 14px;">Min Deposit</label>
                                <input type="number" 
                                       id="min-deposit" 
                                       value="17" 
                                       class="admin-input"
                                       step="0.01">
                                <div style="font-size: 12px; color: #ccc;">USDT</div>
                            </div>
                            
                            <div class="setting-group">
                                <label style="color: #fff; font-size: 14px;">Min Withdrawal</label>
                                <input type="number" 
                                       id="min-withdrawal" 
                                       value="20" 
                                       class="admin-input"
                                       step="0.01">
                                <div style="font-size: 12px; color: #ccc;">USDT</div>
                            </div>
                            
                            <div class="setting-group">
                                <label style="color: #fff; font-size: 14px;">Daily Signals</label>
                                <input type="number" 
                                       id="daily-signals" 
                                       value="3" 
                                       class="admin-input">
                                <div style="font-size: 12px; color: #ccc;">Signals per day</div>
                            </div>
                            
                            <div class="setting-group">
                                <label style="color: #fff; font-size: 14px;">Signal Refresh Hour (UTC)</label>
                                <input type="number" 
                                       id="signal-refresh-hour" 
                                       value="18" 
                                       class="admin-input"
                                       min="0" max="23">
                                <div style="font-size: 12px; color: #ccc;">UTC hour (0-23)</div>
                            </div>
                            
                            <div class="setting-group">
                                <label style="color: #fff; font-size: 14px;">Withdrawal Fee VIP 1</label>
                                <input type="number" 
                                       id="withdrawal-fee-vip1" 
                                       value="7" 
                                       class="admin-input"
                                       step="0.1">
                                <div style="font-size: 12px; color: #ccc;">%</div>
                            </div>
                            
                            <div class="setting-group">
                                <label style="color: #fff; font-size: 14px;">Withdrawal Fee VIP 6</label>
                                <input type="number" 
                                       id="withdrawal-fee-vip6" 
                                       value="0.5" 
                                       class="admin-input"
                                       step="0.1">
                                <div style="font-size: 12px; color: #ccc;">%</div>
                            </div>
                            
                            <div class="setting-group">
                                <label style="color: #fff; font-size: 14px;">Referral Bonus Level 1</label>
                                <input type="number" 
                                       id="referral-bonus-l1" 
                                       value="12" 
                                       class="admin-input"
                                       step="0.1">
                                <div style="font-size: 12px; color: #ccc;">%</div>
                            </div>
                            
                            <div class="setting-group">
                                <label style="color: #fff; font-size: 14px;">Referral Bonus Level 2</label>
                                <input type="number" 
                                       id="referral-bonus-l2" 
                                       value="5" 
                                       class="admin-input"
                                       step="0.1">
                                <div style="font-size: 12px; color: #ccc;">%</div>
                            </div>
                            
                            <div class="setting-group">
                                <label style="color: #fff; font-size: 14px;">Referral Bonus Level 3</label>
                                <input type="number" 
                                       id="referral-bonus-l3" 
                                       value="3" 
                                       class="admin-input"
                                       step="0.1">
                                <div style="font-size: 12px; color: #ccc;">%</div>
                            </div>
                        </div>
                        
                        <div style="margin-top: 20px; display: flex; gap: 10px;">
                            <button class="admin-btn admin-btn-success" id="save-settings">
                                <i class="fas fa-save"></i> Save Settings
                            </button>
                            <button class="admin-btn admin-btn-warning" id="reset-settings">
                                <i class="fas fa-undo"></i> Reset to Default
                            </button>
                            <button class="admin-btn admin-btn-danger" id="clear-cache">
                                <i class="fas fa-trash"></i> Clear Cache
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- User Edit Modal - UPDATED -->
        <div class="pop-overlay" id="edit-user-modal" style="display: none;">
            <div class="pop-content" style="max-width: 600px;">
                <form id="edit-user-form" onsubmit="return false;">
                    <div class="pop-header">Edit User</div>
                    <div class="pop-body">
                        <div class="admin-form-grid">
                            <div class="form-group">
                                <label style="color: #333; font-size: 14px;">User ID</label>
                                <input type="text" id="edit-user-id" class="admin-input" readonly>
                            </div>
                            <div class="form-group">
                                <label style="color: #333; font-size: 14px;">Username</label>
                                <input type="text" id="edit-username" class="admin-input" readonly>
                            </div>
                            <div class="form-group">
                                <label style="color: #333; font-size: 14px;">Balance (USDT)</label>
                                <input type="number" id="edit-balance" class="admin-input" step="0.01">
                            </div>
                            <div class="form-group">
                                <label style="color: #333; font-size: 14px;">VIP Level</label>
                                <select id="edit-vip-level" class="admin-input">
                                    <option value="1">VIP 1</option>
                                    <option value="2">VIP 2</option>
                                    <option value="3">VIP 3</option>
                                    <option value="4">VIP 4</option>
                                    <option value="5">VIP 5</option>
                                    <option value="6">VIP 6</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label style="color: #333; font-size: 14px;">Signals Available</label>
                                <input type="number" id="edit-signals" class="admin-input">
                            </div>
                            <div class="form-group">
                                <label style="color: #333; font-size: 14px;">Registration Bonus Given</label>
                                <select id="edit-bonus-given" class="admin-input">
                                    <option value="false">No</option>
                                    <option value="true">Yes</option>
                                </select>
                            </div>
                            <div class="form-group full-width">
                                <label style="color: #333; font-size: 14px;">Email</label>
                                <input type="email" id="edit-email" class="admin-input">
                            </div>
                            <div class="form-group full-width">
                                <label style="color: #333; font-size: 14px;">TRC20 Address</label>
                                <input type="text" id="edit-address-trc20" class="admin-input">
                            </div>
                            <div class="form-group full-width">
                                <label style="color: #333; font-size: 14px;">BEP20 Address</label>
                                <input type="text" id="edit-address-bep20" class="admin-input">
                            </div>
                            <div class="form-group full-width">
                                <label style="color: #333; font-size: 14px;">Transaction Password</label>
                                <input type="text" id="edit-transaction-password" class="admin-input">
                            </div>
                            <div class="form-group full-width">
                                <label style="color: #333; font-size: 14px;">Registration Date</label>
                                <input type="text" id="edit-created-at" class="admin-input" readonly>
                            </div>
                            <div class="form-group full-width">
                                <label style="color: #333; font-size: 14px;">Referrer ID</label>
                                <input type="text" id="edit-referred-by" class="admin-input" readonly>
                            </div>
                        </div>
                        
                        <!-- User Stats -->
                        <div class="user-stats-section" style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
                            <h4 style="color: #333; margin-bottom: 10px;">User Statistics</h4>
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                                <div>
                                    <div style="font-size: 12px; color: #666;">Total Deposits</div>
                                    <div style="font-size: 16px; font-weight: bold; color: #4e7771;" id="user-total-deposits">0 USDT</div>
                                </div>
                                <div>
                                    <div style="font-size: 12px; color: #666;">Total Withdrawals</div>
                                    <div style="font-size: 16px; font-weight: bold; color: #f9ae3d;" id="user-total-withdrawals">0 USDT</div>
                                </div>
                                <div>
                                    <div style="font-size: 12px; color: #666;">Total Referrals</div>
                                    <div style="font-size: 16px; font-weight: bold; color: #52c41a;" id="user-total-referrals">0</div>
                                </div>
                                <div>
                                    <div style="font-size: 12px; color: #666;">Active Referrals</div>
                                    <div style="font-size: 16px; font-weight: bold; color: #1890ff;" id="user-active-referrals">0</div>
                                </div>
                                <div>
                                    <div style="font-size: 12px; color: #666;">Referral Earnings</div>
                                    <div style="font-size: 16px; font-weight: bold; color: #722ed1;" id="user-referral-earnings">0 USDT</div>
                                </div>
                                <div>
                                    <div style="font-size: 12px; color: #666;">Last Login</div>
                                    <div style="font-size: 16px; font-weight: bold; color: #666;" id="user-last-login">Never</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pop-footer">
                        <div style="display: flex; justify-content: space-between; width: 100%;">
                            <div>
                                <button type="button" class="admin-btn-small admin-btn-info" id="view-user-transactions">
                                    <i class="fas fa-list"></i> Transactions
                                </button>
                                <button type="button" class="admin-btn-small admin-btn-success" id="view-user-referrals">
                                    <i class="fas fa-sitemap"></i> Referrals
                                </button>
                            </div>
                            <div>
                                <button type="submit" id="save-user-changes" style="margin-right: 10px;">Save Changes</button>
                                <button type="button" id="cancel-edit-user">Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Transaction Details Modal -->
        <div class="pop-overlay" id="transaction-details-modal" style="display: none;">
            <div class="pop-content" style="max-width: 500px;">
                <div class="pop-header">Transaction Details</div>
                <div class="pop-body">
                    <div id="transaction-details-content">
                        Loading details...
                    </div>
                </div>
                <div class="pop-footer">
                    <button id="close-transaction-details">Close</button>
                </div>
            </div>
        </div>

        <!-- Withdrawal Action Modal - UPDATED -->
        <div class="pop-overlay" id="withdrawal-action-modal" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Process Withdrawal</div>
                <div class="pop-body">
                    <div id="withdrawal-info">
                        Loading withdrawal details...
                    </div>
                    
                    <div class="action-options" style="margin-top: 20px;">
                        <div class="form-group">
                            <label style="color: #333; font-size: 14px;">Action</label>
                            <select id="withdrawal-action-select" class="admin-input">
                                <option value="approve">Approve - Send funds to user</option>
                                <option value="reject">Reject - Return funds to balance</option>
                            </select>
                        </div>
                        
                        <div class="form-group" id="withdrawal-reject-reason" style="display: none;">
                            <label style="color: #333; font-size: 14px;">Rejection Reason</label>
                            <textarea id="rejection-reason" class="admin-input" 
                                      placeholder="Optional reason for rejection" 
                                      rows="3"></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label style="color: #333; font-size: 14px;">Admin Note (Internal)</label>
                            <textarea id="admin-note" class="admin-input" 
                                      placeholder="Internal note for admin records" 
                                      rows="3"></textarea>
                        </div>
                    </div>
                    
                    <div class="action-buttons" style="margin-top: 20px; display: flex; gap: 10px;">
                        <button class="admin-btn-success" id="process-withdrawal-action">
                            <i class="fas fa-check"></i> Confirm Action
                        </button>
                        <button class="admin-btn-danger" id="cancel-withdrawal-action">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Deposit Details Modal - NEW -->
        <div class="pop-overlay" id="deposit-details-modal" style="display: none;">
            <div class="pop-content" style="max-width: 500px;">
                <div class="pop-header">Deposit Details</div>
                <div class="pop-body">
                    <div id="deposit-details-content">
                        Loading details...
                    </div>
                </div>
                <div class="pop-footer">
                    <button id="close-deposit-details">Close</button>
                    <button class="admin-btn-success" id="confirm-deposit" style="display: none;">
                        <i class="fas fa-check"></i> Confirm Deposit
                    </button>
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    document.body.classList.add('no-tabbar');
    
    // Check admin access
    await checkAdminAccess();
    
    // Load admin data
    await loadAdminData();
    
    // Setup event listeners
    setupEventListeners();
    
    // Load initial tab
    loadTab('withdrawals');
}

async function checkAdminAccess() {
    const user = window.getCurrentUser();
    if (!user || user.username !== 'admin') {
        window.showCustomAlert('Access denied. Admin only.');
        setTimeout(() => {
            window.showSection('home');
        }, 2000);
        return false;
    }
    return true;
}

function setupEventListeners() {
    // Navigation tabs
    document.querySelectorAll('.admin-nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            
            // Update active tab
            document.querySelectorAll('.admin-nav-item').forEach(i => {
                i.classList.remove('active');
            });
            this.classList.add('active');
            
            // Show selected tab
            loadTab(tab);
        });
    });
    
    // Refresh buttons
    document.getElementById('refresh-withdrawals').addEventListener('click', () => loadWithdrawals());
    document.getElementById('refresh-users').addEventListener('click', () => loadUsers());
    document.getElementById('refresh-deposits').addEventListener('click', () => loadDeposits());
    document.getElementById('refresh-transactions').addEventListener('click', () => loadTransactions());
    document.getElementById('refresh-stats').addEventListener('click', () => loadPlatformStats());
    document.getElementById('refresh-referrals').addEventListener('click', () => {
        const searchTerm = document.getElementById('search-user-referrals').value;
        if (searchTerm) {
            loadReferralTree(searchTerm);
        }
    });
    
    // Search buttons
    document.getElementById('search-referrals-btn').addEventListener('click', () => {
        const searchTerm = document.getElementById('search-user-referrals').value;
        if (searchTerm) {
            loadReferralTree(searchTerm);
        }
    });
    
    document.getElementById('search-user-referrals').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = document.getElementById('search-user-referrals').value;
            if (searchTerm) {
                loadReferralTree(searchTerm);
            }
        }
    });
    
    // Filters
    document.getElementById('withdrawal-status-filter').addEventListener('change', loadWithdrawals);
    document.getElementById('deposit-period-filter').addEventListener('change', loadDeposits);
    document.getElementById('deposit-status-filter').addEventListener('change', loadDeposits);
    document.getElementById('transaction-type-filter').addEventListener('change', loadTransactions);
    document.getElementById('transaction-date-filter').addEventListener('change', loadTransactions);
    document.getElementById('vip-filter').addEventListener('change', loadUsers);
    document.getElementById('search-users').addEventListener('input', debounce(loadUsers, 500));
    
    // Settings
    document.getElementById('save-settings').addEventListener('click', saveSettings);
    document.getElementById('load-settings').addEventListener('click', loadCurrentSettings);
    document.getElementById('reset-settings').addEventListener('click', resetSettings);
    document.getElementById('clear-cache').addEventListener('click', clearAdminCache);
    
    // Export
    document.getElementById('export-users').addEventListener('click', exportUsersToCSV);
    
    // Modal close buttons
    document.getElementById('cancel-edit-user').addEventListener('click', () => {
        document.getElementById('edit-user-modal').style.display = 'none';
    });
    
    document.getElementById('close-transaction-details').addEventListener('click', () => {
        document.getElementById('transaction-details-modal').style.display = 'none';
    });
    
    document.getElementById('close-deposit-details').addEventListener('click', () => {
        document.getElementById('deposit-details-modal').style.display = 'none';
    });
    
    document.getElementById('cancel-withdrawal-action').addEventListener('click', () => {
        document.getElementById('withdrawal-action-modal').style.display = 'none';
    });
    
    // Withdrawal action select
    document.getElementById('withdrawal-action-select').addEventListener('change', function() {
        const rejectReasonDiv = document.getElementById('withdrawal-reject-reason');
        rejectReasonDiv.style.display = this.value === 'reject' ? 'block' : 'none';
    });
    
    // Process withdrawal action
    document.getElementById('process-withdrawal-action').addEventListener('click', processWithdrawalAction);
    
    // Confirm deposit
    document.getElementById('confirm-deposit').addEventListener('click', confirmDeposit);
    
    // User modal additional buttons
    document.getElementById('view-user-transactions').addEventListener('click', viewUserTransactions);
    document.getElementById('view-user-referrals').addEventListener('click', viewUserReferrals);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

async function loadAdminData() {
    try {
        // Load total users
        const { count: totalUsers } = await window.supabase
            .from('users')
            .select('*', { count: 'exact', head: true });
        
        // Load pending withdrawals
        const { count: pendingWithdrawals } = await window.supabase
            .from('transactions')
            .select('*', { count: 'exact', head: true })
            .eq('type', 'withdrawal')
            .eq('status', 'pending');
        
        // Load today's deposits
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const todayISO = today.toISOString();
        
        const { data: todayDeposits } = await window.supabase
            .from('transactions')
            .select('amount')
            .eq('type', 'deposit')
            .gte('created_at', todayISO)
            .eq('status', 'completed');
        
        const todayDepositsAmount = todayDeposits?.reduce((sum, t) => sum + t.amount, 0) || 0;
        
        // Load total balance (sum of all user balances)
        const { data: users } = await window.supabase
            .from('users')
            .select('balance');
        
        const totalBalance = users?.reduce((sum, u) => sum + u.balance, 0) || 0;
        
        // Update header stats
        document.getElementById('total-users').textContent = totalUsers || 0;
        document.getElementById('pending-withdrawals').textContent = pendingWithdrawals || 0;
        document.getElementById('today-deposits').textContent = todayDepositsAmount.toFixed(2);
        document.getElementById('total-balance').textContent = totalBalance.toFixed(2);
        
    } catch (error) {
        console.error('Error loading admin data:', error);
    }
}

function loadTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // Load tab data
    switch(tabName) {
        case 'withdrawals':
            loadWithdrawals();
            break;
        case 'users':
            loadUsers();
            break;
        case 'deposits':
            loadDeposits();
            break;
        case 'referrals':
            // Don't load automatically, wait for user input
            break;
        case 'transactions':
            loadTransactions();
            break;
        case 'platform':
            loadPlatformStats();
            break;
        case 'settings':
            loadCurrentSettings();
            break;
    }
}

async function loadWithdrawals() {
    try {
        const statusFilter = document.getElementById('withdrawal-status-filter').value;
        
        let query = window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username, email, balance)
            `)
            .eq('type', 'withdrawal')
            .order('created_at', { ascending: false });
        
        if (statusFilter !== 'all') {
            query = query.eq('status', statusFilter);
        }
        
        const { data: withdrawals, error } = await query;
        
        if (error) throw error;
        
        const container = document.getElementById('withdrawals-table');
        let html = '';
        
        if (withdrawals && withdrawals.length > 0) {
            html = `
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>User</th>
                            <th>Amount</th>
                            <th>Network</th>
                            <th>Status</th>
                            <th>Address</th>
                            <th>User Balance</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            withdrawals.forEach(tx => {
                const date = new Date(tx.created_at).toLocaleDateString();
                const time = new Date(tx.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const amount = Math.abs(tx.amount);
                const shortAddress = tx.withdrawal_address ? 
                    tx.withdrawal_address.substring(0, 10) + '...' + tx.withdrawal_address.substring(tx.withdrawal_address.length - 5) : 
                    'N/A';
                
                const statusColors = {
                    'pending': '#f9ae3d',
                    'completed': '#52c41a',
                    'cancelled': '#ff4d4f'
                };
                
                html += `
                    <tr>
                        <td>${date}<br><small>${time}</small></td>
                        <td>
                            <div style="font-weight: bold;">${tx.user.username}</div>
                            <small>${tx.user.email || 'No email'}</small>
                        </td>
                        <td style="color: #ff4d4f; font-weight: bold;">${amount.toFixed(2)} USDT</td>
                        <td>${tx.network || 'TRC20'}</td>
                        <td><span class="status-badge" style="background: ${statusColors[tx.status] || '#ccc'}">${tx.status}</span></td>
                        <td title="${tx.withdrawal_address || ''}">${shortAddress}</td>
                        <td style="color: #f9ae3d;">${tx.user.balance.toFixed(2)} USDT</td>
                        <td>
                `;
                
                if (tx.status === 'pending') {
                    html += `
                        <button class="admin-btn-small action-btn admin-btn-success" data-id="${tx.id}" data-action="process">
                            <i class="fas fa-cog"></i> Process
                        </button>
                    `;
                } else if (tx.status === 'completed') {
                    html += `
                        <button class="admin-btn-small action-btn admin-btn-info" data-id="${tx.id}" data-action="view">
                            <i class="fas fa-eye"></i> View
                        </button>
                    `;
                }
                
                html += `
                        </td>
                    </tr>
                `;
            });
            
            html += '</tbody></table>';
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 30px;">No withdrawals found</div>';
        }
        
        container.innerHTML = html;
        
        // Add event listeners to action buttons
        container.querySelectorAll('.action-btn[data-action="process"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const txId = this.getAttribute('data-id');
                showWithdrawalActionModal(txId);
            });
        });
        
        container.querySelectorAll('.action-btn[data-action="view"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const txId = this.getAttribute('data-id');
                showTransactionDetails(txId);
            });
        });
        
    } catch (error) {
        console.error('Error loading withdrawals:', error);
        document.getElementById('withdrawals-table').innerHTML = 
            '<div style="color: #ff4d4f; text-align: center; padding: 30px;">Error loading withdrawals</div>';
    }
}

async function loadUsers() {
    try {
        const searchTerm = document.getElementById('search-users').value;
        const vipFilter = document.getElementById('vip-filter').value;
        
        let query = window.supabase
            .from('users')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(100);
        
        if (searchTerm) {
            query = query.or(`username.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%,id.ilike.%${searchTerm}%`);
        }
        
        if (vipFilter) {
            query = query.eq('vip_level', parseInt(vipFilter));
        }
        
        const { data: users, error } = await query;
        
        if (error) throw error;
        
        const container = document.getElementById('users-table');
        let html = '';
        
        if (users && users.length > 0) {
            html = `
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Balance</th>
                            <th>VIP</th>
                            <th>Signals</th>
                            <th>Referrals</th>
                            <th>Joined</th>
                            <th>Last Login</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            for (const user of users) {
                // Get referral count
                const { count: referrals } = await window.supabase
                    .from('referrals')
                    .select('*', { count: 'exact', head: true })
                    .eq('referrer_id', user.id)
                    .eq('level', 1);
                
                const date = new Date(user.created_at).toLocaleDateString();
                const lastLogin = user.last_login ? new Date(user.last_login).toLocaleDateString() : 'Never';
                
                html += `
                    <tr>
                        <td><small title="${user.id}">${user.id.substring(0, 8)}...</small></td>
                        <td style="font-weight: bold;">${user.username}</td>
                        <td><small>${user.email || '-'}</small></td>
                        <td style="color: #f9ae3d; font-weight: bold;">${user.balance.toFixed(2)}</td>
                        <td><span class="vip-badge">VIP ${user.vip_level}</span></td>
                        <td>${user.signals_available}</td>
                        <td>${referrals || 0}</td>
                        <td>${date}</td>
                        <td><small>${lastLogin}</small></td>
                        <td>
                            <div style="display: flex; gap: 5px;">
                                <button class="admin-btn-small action-btn admin-btn-success" data-id="${user.id}" data-action="edit" title="Edit user">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="admin-btn-small action-btn admin-btn-info" data-id="${user.id}" data-action="deposit" title="Add deposit">
                                    <i class="fas fa-plus-circle"></i>
                                </button>
                                <button class="admin-btn-small action-btn admin-btn-warning" data-id="${user.id}" data-action="withdraw" title="Manual withdrawal">
                                    <i class="fas fa-minus-circle"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                `;
            }
            
            html += '</tbody></table>';
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 30px;">No users found</div>';
        }
        
        container.innerHTML = html;
        
        // Add event listeners to action buttons
        container.querySelectorAll('.action-btn[data-action="edit"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const userId = this.getAttribute('data-id');
                showEditUserModal(userId);
            });
        });
        
        container.querySelectorAll('.action-btn[data-action="deposit"]').forEach(btn => {
            btn.addEventListener('click', async function() {
                const userId = this.getAttribute('data-id');
                const amount = prompt('Enter deposit amount (USDT):', '50');
                if (amount && !isNaN(parseFloat(amount)) && parseFloat(amount) > 0) {
                    await manualDeposit(userId, parseFloat(amount));
                }
            });
        });
        
        container.querySelectorAll('.action-btn[data-action="withdraw"]').forEach(btn => {
            btn.addEventListener('click', async function() {
                const userId = this.getAttribute('data-id');
                const amount = prompt('Enter withdrawal amount (USDT):', '20');
                if (amount && !isNaN(parseFloat(amount)) && parseFloat(amount) > 0) {
                    await manualWithdrawal(userId, parseFloat(amount));
                }
            });
        });
        
    } catch (error) {
        console.error('Error loading users:', error);
        document.getElementById('users-table').innerHTML = 
            '<div style="color: #ff4d4f; text-align: center; padding: 30px;">Error loading users</div>';
    }
}

async function loadDeposits() {
    try {
        const periodFilter = document.getElementById('deposit-period-filter').value;
        const statusFilter = document.getElementById('deposit-status-filter').value;
        
        let query = window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username, email)
            `)
            .eq('type', 'deposit')
            .order('created_at', { ascending: false });
        
        // Apply period filter
        const now = new Date();
        let startDate = new Date(0); // Beginning of time
        
        switch(periodFilter) {
            case 'today':
                startDate = new Date();
                startDate.setHours(0, 0, 0, 0);
                break;
            case 'yesterday':
                startDate = new Date();
                startDate.setDate(startDate.getDate() - 1);
                startDate.setHours(0, 0, 0, 0);
                const endDate = new Date(startDate);
                endDate.setDate(endDate.getDate() + 1);
                query = query.gte('created_at', startDate.toISOString()).lt('created_at', endDate.toISOString());
                break;
            case 'week':
                startDate = new Date();
                startDate.setDate(startDate.getDate() - 7);
                break;
            case 'month':
                startDate = new Date();
                startDate.setMonth(startDate.getMonth() - 1);
                break;
        }
        
        if (periodFilter !== 'yesterday') {
            query = query.gte('created_at', startDate.toISOString());
        }
        
        // Apply status filter
        if (statusFilter) {
            query = query.eq('status', statusFilter);
        }
        
        const { data: deposits, error } = await query;
        
        if (error) throw error;
        
        // Calculate statistics
        const totalAmount = deposits?.reduce((sum, d) => sum + d.amount, 0) || 0;
        const depositCount = deposits?.length || 0;
        const pendingCount = deposits?.filter(d => d.status === 'pending').length || 0;
        const avgDeposit = depositCount > 0 ? totalAmount / depositCount : 0;
        
        // Update statistics
        document.getElementById('total-deposit-amount').textContent = totalAmount.toFixed(2) + ' USDT';
        document.getElementById('deposit-count').textContent = depositCount;
        document.getElementById('pending-deposit-count').textContent = pendingCount;
        document.getElementById('avg-deposit').textContent = avgDeposit.toFixed(2) + ' USDT';
        
        const container = document.getElementById('deposits-table');
        let html = '';
        
        if (deposits && deposits.length > 0) {
            html = `
                <div style="max-height: 400px; overflow-y: auto;">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>User</th>
                                <th>Amount</th>
                                <th>Network</th>
                                <th>Status</th>
                                <th>TX Hash</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            
            deposits.forEach(deposit => {
                const date = new Date(deposit.created_at).toLocaleDateString();
                const time = new Date(deposit.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const statusColors = {
                    'pending': '#f9ae3d',
                    'confirmed': '#1890ff',
                    'completed': '#52c41a',
                    'cancelled': '#ff4d4f'
                };
                
                const shortHash = deposit.tx_hash ? 
                    deposit.tx_hash.substring(0, 10) + '...' + deposit.tx_hash.substring(deposit.tx_hash.length - 5) : 
                    'Manual';
                
                html += `
                    <tr>
                        <td>${date}<br><small>${time}</small></td>
                        <td>
                            <div style="font-weight: bold;">${deposit.user.username}</div>
                            <small>${deposit.user.email || 'No email'}</small>
                        </td>
                        <td style="color: #52c41a; font-weight: bold;">+${deposit.amount.toFixed(2)} USDT</td>
                        <td>${deposit.network || 'Manual'}</td>
                        <td><span class="status-badge" style="background: ${statusColors[deposit.status] || '#ccc'}">${deposit.status}</span></td>
                        <td><small title="${deposit.tx_hash || ''}">${shortHash}</small></td>
                        <td>
                `;
                
                if (deposit.status === 'pending' || deposit.status === 'confirmed') {
                    html += `
                        <button class="admin-btn-small action-btn admin-btn-success" data-id="${deposit.id}" data-action="view-deposit">
                            <i class="fas fa-eye"></i> Details
                        </button>
                    `;
                }
                
                html += `
                        </td>
                    </tr>
                `;
            });
            
            html += '</tbody></table></div>';
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 30px;">No deposits found</div>';
        }
        
        container.innerHTML = html;
        
        // Add event listeners to action buttons
        container.querySelectorAll('.action-btn[data-action="view-deposit"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const txId = this.getAttribute('data-id');
                showDepositDetails(txId);
            });
        });
        
    } catch (error) {
        console.error('Error loading deposits:', error);
        document.getElementById('deposits-table').innerHTML = 
            '<div style="color: #ff4d4f; text-align: center; padding: 30px;">Error loading deposits</div>';
    }
}

async function loadReferralTree(userId) {
    try {
        if (!userId) {
            userId = document.getElementById('search-user-referrals').value.trim();
            if (!userId) {
                window.showCustomAlert('Please enter user ID or username');
                return;
            }
        }
        
        // Find user
        const { data: user, error: userError } = await window.supabase
            .from('users')
            .select('*')
            .or(`id.eq.${userId},username.eq.${userId}`)
            .maybeSingle();
        
        if (userError || !user) {
            window.showCustomAlert('User not found');
            return;
        }
        
        // Get level 1 referrals
        const { data: level1, error: level1Error } = await window.supabase
            .from('referrals')
            .select(`
                id,
                referred_id,
                referred:users!referred_id (id, username, balance, vip_level, created_at)
            `)
            .eq('referrer_id', user.id)
            .eq('level', 1)
            .order('created_at', { ascending: true });
        
        if (level1Error) throw level1Error;
        
        // Get level 2 referrals (through level 1 referrals)
        let level2 = [];
        if (level1 && level1.length > 0) {
            for (const ref of level1) {
                const { data: l2 } = await window.supabase
                    .from('referrals')
                    .select(`
                        id,
                        referred_id,
                        referred:users!referred_id (id, username, balance, vip_level, created_at)
                    `)
                    .eq('referrer_id', ref.referred_id)
                    .eq('level', 1);
                
                if (l2) {
                    level2 = level2.concat(l2.map(r => ({ ...r, parent_id: ref.referred_id })));
                }
            }
        }
        
        // Get level 3 referrals (through level 2 referrals)
        let level3 = [];
        if (level2 && level2.length > 0) {
            for (const ref of level2) {
                const { data: l3 } = await window.supabase
                    .from('referrals')
                    .select(`
                        id,
                        referred_id,
                        referred:users!referred_id (id, username, balance, vip_level, created_at)
                    `)
                    .eq('referrer_id', ref.referred_id)
                    .eq('level', 1);
                
                if (l3) {
                    level3 = level3.concat(l3.map(r => ({ ...r, parent_id: ref.referred_id })));
                }
            }
        }
        
        // Calculate referral earnings
        const { data: referralEarnings } = await window.supabase
            .from('transactions')
            .select('amount')
            .eq('user_id', user.id)
            .eq('type', 'referral');
        
        const totalEarnings = referralEarnings?.reduce((sum, t) => sum + t.amount, 0) || 0;
        
        // Build tree HTML
        const container = document.getElementById('referral-tree-container');
        let html = `
            <div class="user-tree-header">
                <div class="user-tree-main">
                    <div class="user-tree-node root">
                        <div class="node-content">
                            <div class="node-title">${user.username} (YOU)</div>
                            <div class="node-details">
                                <div>ID: ${user.id.substring(0, 10)}...</div>
                                <div>Balance: ${user.balance.toFixed(2)} USDT</div>
                                <div>VIP: ${user.vip_level}</div>
                                <div>Referral Earnings: ${totalEarnings.toFixed(2)} USDT</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="tree-stats">
                    <div class="tree-stat">
                        <div class="tree-stat-value">${level1?.length || 0}</div>
                        <div class="tree-stat-label">Level 1</div>
                    </div>
                    <div class="tree-stat">
                        <div class="tree-stat-value">${level2?.length || 0}</div>
                        <div class="tree-stat-label">Level 2</div>
                    </div>
                    <div class="tree-stat">
                        <div class="tree-stat-value">${level3?.length || 0}</div>
                        <div class="tree-stat-label">Level 3</div>
                    </div>
                    <div class="tree-stat">
                        <div class="tree-stat-value">${(level1?.length || 0) + (level2?.length || 0) + (level3?.length || 0)}</div>
                        <div class="tree-stat-label">Total</div>
                    </div>
                </div>
            </div>
        `;
        
        // Level 1
        if (level1 && level1.length > 0) {
            html += `<div class="tree-level">`;
            html += `<div class="tree-level-label">Level 1 Referrals</div>`;
            html += `<div class="tree-level-nodes">`;
            
            level1.forEach(ref => {
                const referred = ref.referred;
                const joinDate = new Date(referred.created_at).toLocaleDateString();
                
                html += `
                    <div class="user-tree-node">
                        <div class="node-content">
                            <div class="node-title">${referred.username}</div>
                            <div class="node-details">
                                <div>Balance: ${referred.balance.toFixed(2)} USDT</div>
                                <div>VIP: ${referred.vip_level}</div>
                                <div>Joined: ${joinDate}</div>
                                <div>Status: ${referred.balance >= 20 ? '<span style="color:#52c41a">Active</span>' : '<span style="color:#ccc">Inactive</span>'}</div>
                            </div>
                            <div class="node-actions">
                                <button class="admin-btn-small tree-node-action" data-user-id="${referred.id}" data-action="view">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button class="admin-btn-small tree-node-action" data-user-id="${referred.id}" data-action="edit">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            html += `</div></div>`;
        }
        
        // Level 2
        if (level2 && level2.length > 0) {
            html += `<div class="tree-level">`;
            html += `<div class="tree-level-label">Level 2 Referrals</div>`;
            html += `<div class="tree-level-nodes">`;
            
            level2.forEach(ref => {
                const referred = ref.referred;
                const joinDate = new Date(referred.created_at).toLocaleDateString();
                
                html += `
                    <div class="user-tree-node level2">
                        <div class="node-content">
                            <div class="node-title">${referred.username}</div>
                            <div class="node-details">
                                <div>Balance: ${referred.balance.toFixed(2)} USDT</div>
                                <div>VIP: ${referred.vip_level}</div>
                                <div>Joined: ${joinDate}</div>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            html += `</div></div>`;
        }
        
        // Level 3
        if (level3 && level3.length > 0) {
            html += `<div class="tree-level">`;
            html += `<div class="tree-level-label">Level 3 Referrals</div>`;
            html += `<div class="tree-level-nodes">`;
            
            level3.forEach(ref => {
                const referred = ref.referred;
                const joinDate = new Date(referred.created_at).toLocaleDateString();
                
                html += `
                    <div class="user-tree-node level3">
                        <div class="node-content">
                            <div class="node-title">${referred.username}</div>
                            <div class="node-details">
                                <div>Balance: ${referred.balance.toFixed(2)} USDT</div>
                                <div>VIP: ${referred.vip_level}</div>
                                <div>Joined: ${joinDate}</div>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            html += `</div></div>`;
        }
        
        container.innerHTML = html;
        
        // Add event listeners to tree node actions
        container.querySelectorAll('.tree-node-action[data-action="view"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const userId = this.getAttribute('data-user-id');
                loadReferralTree(userId);
                document.getElementById('search-user-referrals').value = userId;
            });
        });
        
        container.querySelectorAll('.tree-node-action[data-action="edit"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const userId = this.getAttribute('data-user-id');
                showEditUserModal(userId);
            });
        });
        
    } catch (error) {
        console.error('Error loading referral tree:', error);
        document.getElementById('referral-tree-container').innerHTML = 
            '<div style="color: #ff4d4f; text-align: center; padding: 30px;">Error loading referral tree</div>';
    }
}

async function loadTransactions() {
    try {
        const typeFilter = document.getElementById('transaction-type-filter').value;
        const dateFilter = document.getElementById('transaction-date-filter').value;
        
        let query = window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username)
            `)
            .order('created_at', { ascending: false })
            .limit(200);
        
        if (typeFilter) {
            query = query.eq('type', typeFilter);
        }
        
        if (dateFilter) {
            const startDate = new Date(dateFilter);
            startDate.setHours(0, 0, 0, 0);
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + 1);
            query = query.gte('created_at', startDate.toISOString()).lt('created_at', endDate.toISOString());
        }
        
        const { data: transactions, error } = await query;
        
        if (error) throw error;
        
        const container = document.getElementById('transactions-table');
        let html = '';
        
        if (transactions && transactions.length > 0) {
            html = `
                <div style="max-height: 500px; overflow-y: auto;">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>User</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Description</th>
                                <th>Network</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            
            transactions.forEach(tx => {
                const date = new Date(tx.created_at).toLocaleDateString();
                const time = new Date(tx.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const isPositive = tx.amount > 0;
                const amountColor = isPositive ? '#52c41a' : '#ff4d4f';
                const statusColor = tx.status === 'completed' ? '#52c41a' : 
                                   tx.status === 'pending' ? '#f9ae3d' : 
                                   '#ff4d4f';
                
                html += `
                    <tr>
                        <td>${date}<br><small>${time}</small></td>
                        <td>${tx.user.username}</td>
                        <td><span class="type-badge">${tx.type}</span></td>
                        <td style="color: ${amountColor}; font-weight: bold;">${isPositive ? '+' : ''}${tx.amount.toFixed(2)} USDT</td>
                        <td><span class="status-badge" style="background: ${statusColor};">${tx.status}</span></td>
                        <td><small title="${tx.description || ''}">${(tx.description || '').substring(0, 30)}${(tx.description || '').length > 30 ? '...' : ''}</small></td>
                        <td><small>${tx.network || '-'}</small></td>
                        <td>
                            <button class="admin-btn-small action-btn" data-id="${tx.id}" data-action="view">
                                <i class="fas fa-eye"></i> View
                            </button>
                        </td>
                    </tr>
                `;
            });
            
            html += '</tbody></table></div>';
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 30px;">No transactions found</div>';
        }
        
        container.innerHTML = html;
        
        // Add event listeners to action buttons
        container.querySelectorAll('.action-btn[data-action="view"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const txId = this.getAttribute('data-id');
                showTransactionDetails(txId);
            });
        });
        
    } catch (error) {
        console.error('Error loading transactions:', error);
        document.getElementById('transactions-table').innerHTML = 
            '<div style="color: #ff4d4f; text-align: center; padding: 30px;">Error loading transactions</div>';
    }
}

async function loadPlatformStats() {
    try {
        const periodFilter = document.getElementById('stats-period').value;
        
        // Get date range based on period
        const now = new Date();
        let startDate = new Date(0); // Beginning of time
        
        switch(periodFilter) {
            case 'today':
                startDate = new Date();
                startDate.setHours(0, 0, 0, 0);
                break;
            case 'week':
                startDate = new Date();
                startDate.setDate(startDate.getDate() - 7);
                break;
            case 'month':
                startDate = new Date();
                startDate.setMonth(startDate.getMonth() - 1);
                break;
        }
        
        // Total users
        const { count: totalUsers } = await window.supabase
            .from('users')
            .select('*', { count: 'exact', head: true });
        
        // New users today
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const { count: newUsersToday } = await window.supabase
            .from('users')
            .select('*', { count: 'exact', head: true })
            .gte('created_at', today.toISOString());
        
        // Total deposits
        const { data: allDeposits } = await window.supabase
            .from('transactions')
            .select('amount')
            .eq('type', 'deposit')
            .eq('status', 'completed');
        
        const totalDeposits = allDeposits?.reduce((sum, d) => sum + d.amount, 0) || 0;
        
        // Period deposits
        const { data: periodDeposits } = await window.supabase
            .from('transactions')
            .select('amount')
            .eq('type', 'deposit')
            .eq('status', 'completed')
            .gte('created_at', startDate.toISOString());
        
        const periodDepositAmount = periodDeposits?.reduce((sum, d) => sum + d.amount, 0) || 0;
        
        // Total withdrawals
        const { data: allWithdrawals } = await window.supabase
            .from('transactions')
            .select('amount')
            .eq('type', 'withdrawal')
            .eq('status', 'completed');
        
        const totalWithdrawals = Math.abs(allWithdrawals?.reduce((sum, w) => sum + w.amount, 0) || 0);
        
        // Total referral earnings
        const { data: allReferralEarnings } = await window.supabase
            .from('transactions')
            .select('amount')
            .eq('type', 'referral');
        
        const totalReferralEarnings = allReferralEarnings?.reduce((sum, r) => sum + r.amount, 0) || 0;
        
        // Calculate profit (deposits - withdrawals)
        const totalProfit = totalDeposits - totalWithdrawals;
        
        // VIP distribution
        const { data: vipDistribution } = await window.supabase
            .from('users')
            .select('vip_level')
            .order('vip_level', { ascending: true });
        
        const vipCounts = {1:0,2:0,3:0,4:0,5:0,6:0};
        vipDistribution?.forEach(user => {
            vipCounts[user.vip_level] = (vipCounts[user.vip_level] || 0) + 1;
        });
        
        // Update platform stats
        document.getElementById('platform-total-users').textContent = totalUsers || 0;
        document.getElementById('platform-new-users').textContent = newUsersToday || 0;
        document.getElementById('platform-total-deposits').textContent = periodDepositAmount.toFixed(2) + ' USDT';
        document.getElementById('platform-total-withdrawals').textContent = totalWithdrawals.toFixed(2) + ' USDT';
        document.getElementById('platform-total-profit').textContent = totalProfit.toFixed(2) + ' USDT';
        document.getElementById('platform-referral-earnings').textContent = totalReferralEarnings.toFixed(2) + ' USDT';
        
        // Create VIP distribution chart
        createVIPDistributionChart(vipCounts);
        
        // Load recent activity
        await loadRecentActivity();
        
    } catch (error) {
        console.error('Error loading platform stats:', error);
    }
}

function createVIPDistributionChart(vipCounts) {
    const canvas = document.getElementById('vip-distribution-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const vipColors = {
        1: '#4e7771',
        2: '#5d8c85',
        3: '#6ca09a',
        4: '#7bb5ae',
        5: '#8ac9c3',
        6: '#99ddd7'
    };
    
    const labels = ['VIP 1', 'VIP 2', 'VIP 3', 'VIP 4', 'VIP 5', 'VIP 6'];
    const data = [vipCounts[1] || 0, vipCounts[2] || 0, vipCounts[3] || 0, vipCounts[4] || 0, vipCounts[5] || 0, vipCounts[6] || 0];
    const colors = [vipColors[1], vipColors[2], vipColors[3], vipColors[4], vipColors[5], vipColors[6]];
    
    // Find max value for scaling
    const maxValue = Math.max(...data);
    
    // Draw bars
    const barWidth = 40;
    const spacing = 20;
    const chartHeight = 150;
    const chartBottom = 180;
    const startX = 50;
    
    // Draw bars
    for (let i = 0; i < data.length; i++) {
        const x = startX + i * (barWidth + spacing);
        const barHeight = (data[i] / maxValue) * chartHeight;
        const y = chartBottom - barHeight;
        
        // Draw bar
        ctx.fillStyle = colors[i];
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw value on top
        ctx.fillStyle = '#fff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(data[i].toString(), x + barWidth/2, y - 5);
        
        // Draw label
        ctx.fillStyle = '#ccc';
        ctx.font = '12px Arial';
        ctx.fillText(labels[i], x + barWidth/2, chartBottom + 15);
    }
    
    // Draw title
    ctx.fillStyle = '#fff';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('VIP Level Distribution', canvas.width/2, 20);
}

async function loadRecentActivity() {
    try {
        const { data: recentTransactions, error } = await window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username)
            `)
            .order('created_at', { ascending: false })
            .limit(10);
        
        if (error) throw error;
        
        const container = document.getElementById('recent-activity');
        let html = '';
        
        if (recentTransactions && recentTransactions.length > 0) {
            recentTransactions.forEach(tx => {
                const time = new Date(tx.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const isPositive = tx.amount > 0;
                const amountColor = isPositive ? '#52c41a' : '#ff4d4f';
                const icon = tx.type === 'deposit' ? 'fa-arrow-down' : 
                            tx.type === 'withdrawal' ? 'fa-arrow-up' : 
                            tx.type === 'quantification' ? 'fa-chart-line' : 
                            tx.type === 'referral' ? 'fa-users' : 'fa-exchange-alt';
                
                html += `
                    <div class="activity-item">
                        <div class="activity-icon" style="background: ${isPositive ? 'rgba(82, 196, 26, 0.2)' : 'rgba(255, 77, 79, 0.2)'}">
                            <i class="fas ${icon}" style="color: ${amountColor};"></i>
                        </div>
                        <div class="activity-content">
                            <div class="activity-title">${tx.user.username}</div>
                            <div class="activity-description">${tx.description || tx.type}</div>
                            <div class="activity-time">${time}</div>
                        </div>
                        <div class="activity-amount" style="color: ${amountColor};">
                            ${isPositive ? '+' : ''}${tx.amount.toFixed(2)} USDT
                        </div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 20px;">No recent activity</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading recent activity:', error);
        document.getElementById('recent-activity').innerHTML = 
            '<div style="color: #ff4d4f; text-align: center; padding: 20px;">Error loading activity</div>';
    }
}

async function loadCurrentSettings() {
    try {
        const { data: settings, error } = await window.supabase
            .from('platform_settings')
            .select('*');
        
        if (error) throw error;
        
        if (settings && settings.length > 0) {
            settings.forEach(setting => {
                const input = document.getElementById(setting.key.replace(/_/g, '-'));
                if (input) {
                    input.value = setting.value;
                }
            });
        }
    } catch (error) {
        console.error('Error loading settings:', error);
    }
}

async function showEditUserModal(userId) {
    try {
        const { data: user, error } = await window.supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .single();
        
        if (error) throw error;
        
        // Get user statistics
        const [deposits, withdrawals, referrals, activeReferrals, referralEarnings] = await Promise.all([
            // Total deposits
            window.supabase
                .from('transactions')
                .select('amount')
                .eq('user_id', userId)
                .eq('type', 'deposit')
                .eq('status', 'completed'),
            
            // Total withdrawals
            window.supabase
                .from('transactions')
                .select('amount')
                .eq('user_id', userId)
                .eq('type', 'withdrawal')
                .eq('status', 'completed'),
            
            // Total referrals
            window.supabase
                .from('referrals')
                .select('*', { count: 'exact', head: true })
                .eq('referrer_id', userId)
                .eq('level', 1),
            
            // Active referrals (balance >= 20)
            window.supabase
                .from('referrals')
                .select(`
                    referred_id,
                    referred:users!referred_id(balance)
                `)
                .eq('referrer_id', userId)
                .eq('level', 1),
            
            // Referral earnings
            window.supabase
                .from('transactions')
                .select('amount')
                .eq('user_id', userId)
                .eq('type', 'referral')
        ]);
        
        // Fill form
        document.getElementById('edit-user-id').value = user.id;
        document.getElementById('edit-username').value = user.username;
        document.getElementById('edit-balance').value = user.balance;
        document.getElementById('edit-vip-level').value = user.vip_level;
        document.getElementById('edit-signals').value = user.signals_available;
        document.getElementById('edit-bonus-given').value = user.registration_bonus_given ? 'true' : 'false';
        document.getElementById('edit-email').value = user.email || '';
        document.getElementById('edit-address-trc20').value = user.withdrawal_address_trc20 || '';
        document.getElementById('edit-address-bep20').value = user.withdrawal_address_bep20 || '';
        document.getElementById('edit-transaction-password').value = user.payment_password || '';
        document.getElementById('edit-created-at').value = new Date(user.created_at).toLocaleString();
        document.getElementById('edit-referred-by').value = user.referred_by || 'None';
        
        // Fill statistics
        const totalDeposits = deposits.data?.reduce((sum, d) => sum + d.amount, 0) || 0;
        const totalWithdrawals = Math.abs(withdrawals.data?.reduce((sum, w) => sum + w.amount, 0) || 0);
        const totalReferrals = referrals.count || 0;
        const activeRefs = activeReferrals.data?.filter(ref => ref.referred?.balance >= 20).length || 0;
        const totalReferralEarnings = referralEarnings.data?.reduce((sum, r) => sum + r.amount, 0) || 0;
        
        document.getElementById('user-total-deposits').textContent = totalDeposits.toFixed(2) + ' USDT';
        document.getElementById('user-total-withdrawals').textContent = totalWithdrawals.toFixed(2) + ' USDT';
        document.getElementById('user-total-referrals').textContent = totalReferrals;
        document.getElementById('user-active-referrals').textContent = activeRefs;
        document.getElementById('user-referral-earnings').textContent = totalReferralEarnings.toFixed(2) + ' USDT';
        document.getElementById('user-last-login').textContent = user.last_login ? new Date(user.last_login).toLocaleString() : 'Never';
        
        // Store user ID
        document.getElementById('edit-user-form').setAttribute('data-user-id', userId);
        
        // Show modal
        document.getElementById('edit-user-modal').style.display = 'flex';
        
    } catch (error) {
        console.error('Error loading user:', error);
        window.showCustomAlert('Error loading user data');
    }
}

async function saveUserChanges(userId) {
    try {
        const updates = {
            balance: parseFloat(document.getElementById('edit-balance').value),
            vip_level: parseInt(document.getElementById('edit-vip-level').value),
            signals_available: parseInt(document.getElementById('edit-signals').value),
            registration_bonus_given: document.getElementById('edit-bonus-given').value === 'true',
            email: document.getElementById('edit-email').value || null,
            withdrawal_address_trc20: document.getElementById('edit-address-trc20').value || null,
            withdrawal_address_bep20: document.getElementById('edit-address-bep20').value || null,
            payment_password: document.getElementById('edit-transaction-password').value
        };
        
        const { error } = await window.supabase
            .from('users')
            .update(updates)
            .eq('id', userId);
        
        if (error) throw error;
        
        window.showCustomAlert('User updated successfully!');
        document.getElementById('edit-user-modal').style.display = 'none';
        
        // Reload users tab and admin data
        loadUsers();
        loadAdminData();
        
    } catch (error) {
        console.error('Error updating user:', error);
        window.showCustomAlert('Error updating user');
    }
}

async function manualDeposit(userId, amount) {
    try {
        // Update user balance
        const { data: user } = await window.supabase
            .from('users')
            .select('balance')
            .eq('id', userId)
            .single();
        
        const newBalance = user.balance + amount;
        
        const { error: balanceError } = await window.supabase
            .from('users')
            .update({ balance: newBalance })
            .eq('id', userId);
        
        if (balanceError) throw balanceError;
        
        // Create transaction record
        const { error: txError } = await window.supabase
            .from('transactions')
            .insert([{
                user_id: userId,
                type: 'deposit',
                amount: amount,
                status: 'completed',
                description: `Manual deposit by admin: ${amount} USDT`,
                network: 'Manual'
            }]);
        
        if (txError) throw txError;
        
        window.showCustomAlert(`Manual deposit of ${amount} USDT processed successfully!`);
        
        // Reload data
        loadUsers();
        loadAdminData();
        loadDeposits();
        
    } catch (error) {
        console.error('Error processing manual deposit:', error);
        window.showCustomAlert('Error processing deposit');
    }
}

async function manualWithdrawal(userId, amount) {
    try {
        // Check user balance
        const { data: user } = await window.supabase
            .from('users')
            .select('balance')
            .eq('id', userId)
            .single();
        
        if (user.balance < amount) {
            window.showCustomAlert('Insufficient balance');
            return;
        }
        
        const newBalance = user.balance - amount;
        
        // Update user balance
        const { error: balanceError } = await window.supabase
            .from('users')
            .update({ balance: newBalance })
            .eq('id', userId);
        
        if (balanceError) throw balanceError;
        
        // Create transaction record
        const { error: txError } = await window.supabase
            .from('transactions')
            .insert([{
                user_id: userId,
                type: 'withdrawal',
                amount: -amount,
                status: 'completed',
                description: `Manual withdrawal by admin: ${amount} USDT`,
                network: 'Manual'
            }]);
        
        if (txError) throw txError;
        
        window.showCustomAlert(`Manual withdrawal of ${amount} USDT processed successfully!`);
        
        // Reload data
        loadUsers();
        loadAdminData();
        loadWithdrawals();
        
    } catch (error) {
        console.error('Error processing manual withdrawal:', error);
        window.showCustomAlert('Error processing withdrawal');
    }
}

async function showWithdrawalActionModal(txId) {
    try {
        const { data: transaction, error } = await window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username, balance, email)
            `)
            .eq('id', txId)
            .single();
        
        if (error) throw error;
        
        const amount = Math.abs(transaction.amount);
        const userBalance = transaction.user.balance;
        
        let info = `
            <div style="color: #333;">
                <div class="detail-row">
                    <span class="detail-label">Transaction ID:</span>
                    <span class="detail-value">${transaction.id}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">User:</span>
                    <span class="detail-value">${transaction.user.username} (${transaction.user.email || 'No email'})</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Amount:</span>
                    <span class="detail-value" style="color: #ff4d4f; font-weight: bold;">${amount.toFixed(2)} USDT</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Network:</span>
                    <span class="detail-value">${transaction.network || 'TRC20'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Address:</span>
                    <span class="detail-value">${transaction.withdrawal_address}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">User Balance:</span>
                    <span class="detail-value">${userBalance.toFixed(2)} USDT</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Requested:</span>
                    <span class="detail-value">${new Date(transaction.created_at).toLocaleString()}</span>
                </div>
            </div>
        `;
        
        document.getElementById('withdrawal-info').innerHTML = info;
        document.getElementById('withdrawal-action-modal').setAttribute('data-tx-id', txId);
        document.getElementById('withdrawal-action-modal').style.display = 'flex';
        
    } catch (error) {
        console.error('Error loading withdrawal:', error);
        window.showCustomAlert('Error loading withdrawal details');
    }
}

async function processWithdrawalAction() {
    const txId = document.getElementById('withdrawal-action-modal').getAttribute('data-tx-id');
    const action = document.getElementById('withdrawal-action-select').value;
    const rejectionReason = document.getElementById('rejection-reason').value;
    const adminNote = document.getElementById('admin-note').value;
    
    try {
        // Get transaction details
        const { data: transaction, error: getError } = await window.supabase
            .from('transactions')
            .select('user_id, amount, description')
            .eq('id', txId)
            .single();
        
        if (getError) throw getError;
        
        if (action === 'approve') {
            // Approve withdrawal - just update status
            const { error: txError } = await window.supabase
                .from('transactions')
                .update({ 
                    status: 'completed',
                    description: `${transaction.description} | Approved by admin`
                })
                .eq('id', txId);
            
            if (txError) throw txError;
            
            window.showCustomAlert('Withdrawal approved successfully!');
            
        } else if (action === 'reject') {
            // Reject withdrawal - return funds to balance
            const amountToReturn = Math.abs(transaction.amount);
            
            // Get current balance
            const { data: user } = await window.supabase
                .from('users')
                .select('balance')
                .eq('id', transaction.user_id)
                .single();
            
            const newBalance = user.balance + amountToReturn;
            
            // Update user balance
            const { error: balanceError } = await window.supabase
                .from('users')
                .update({ balance: newBalance })
                .eq('id', transaction.user_id);
            
            if (balanceError) throw balanceError;
            
            // Update transaction status
            const reasonText = rejectionReason ? ` - Reason: ${rejectionReason}` : '';
            const { error: txError } = await window.supabase
                .from('transactions')
                .update({ 
                    status: 'cancelled',
                    description: `Withdrawal rejected${reasonText} | Funds returned to balance`
                })
                .eq('id', txId);
            
            if (txError) throw txError;
            
            window.showCustomAlert('Withdrawal rejected and funds returned to user!');
        }
        
        // Close modal
        document.getElementById('withdrawal-action-modal').style.display = 'none';
        
        // Clear form
        document.getElementById('rejection-reason').value = '';
        document.getElementById('admin-note').value = '';
        
        // Reload data
        loadWithdrawals();
        loadAdminData();
        
    } catch (error) {
        console.error('Error processing withdrawal action:', error);
        window.showCustomAlert('Error processing withdrawal');
    }
}

async function showDepositDetails(txId) {
    try {
        const { data: deposit, error } = await window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username, email)
            `)
            .eq('id', txId)
            .single();
        
        if (error) throw error;
        
        const date = new Date(deposit.created_at).toLocaleString();
        const statusColor = deposit.status === 'completed' ? '#52c41a' : 
                           deposit.status === 'pending' ? '#f9ae3d' : 
                           deposit.status === 'confirmed' ? '#1890ff' : 
                           '#ff4d4f';
        
        let details = `
            <div style="color: #333;">
                <div class="detail-row">
                    <span class="detail-label">Transaction ID:</span>
                    <span class="detail-value">${deposit.id}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Date:</span>
                    <span class="detail-value">${date}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">User:</span>
                    <span class="detail-value">${deposit.user.username} (${deposit.user.email || 'No email'})</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Amount:</span>
                    <span class="detail-value" style="color: #52c41a; font-weight: bold;">+${deposit.amount.toFixed(2)} USDT</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Network:</span>
                    <span class="detail-value">${deposit.network || 'Manual'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Status:</span>
                    <span class="detail-value" style="color: ${statusColor}; font-weight: bold;">${deposit.status}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">TX Hash:</span>
                    <span class="detail-value">${deposit.tx_hash || 'Manual deposit'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Description:</span>
                    <span class="detail-value">${deposit.description || 'N/A'}</span>
                </div>
            </div>
        `;
        
        document.getElementById('deposit-details-content').innerHTML = details;
        
        // Show confirm button for pending deposits
        const confirmBtn = document.getElementById('confirm-deposit');
        if (deposit.status === 'pending' || deposit.status === 'confirmed') {
            confirmBtn.style.display = 'inline-block';
            confirmBtn.setAttribute('data-tx-id', txId);
        } else {
            confirmBtn.style.display = 'none';
        }
        
        document.getElementById('deposit-details-modal').style.display = 'flex';
        
    } catch (error) {
        console.error('Error loading deposit:', error);
        window.showCustomAlert('Error loading deposit details');
    }
}

async function confirmDeposit() {
    const txId = this.getAttribute('data-tx-id');
    
    try {
        // Get deposit details
        const { data: deposit, error: getError } = await window.supabase
            .from('transactions')
            .select('user_id, amount')
            .eq('id', txId)
            .single();
        
        if (getError) throw getError;
        
        // Update user balance
        const { data: user } = await window.supabase
            .from('users')
            .select('balance')
            .eq('id', deposit.user_id)
            .single();
        
        const newBalance = user.balance + deposit.amount;
        
        const { error: balanceError } = await window.supabase
            .from('users')
            .update({ balance: newBalance })
            .eq('id', deposit.user_id);
        
        if (balanceError) throw balanceError;
        
        // Update transaction status
        const { error: txError } = await window.supabase
            .from('transactions')
            .update({ 
                status: 'completed',
                description: `Deposit confirmed by admin: ${deposit.amount} USDT`
            })
            .eq('id', txId);
        
        if (txError) throw txError;
        
        window.showCustomAlert('Deposit confirmed successfully!');
        document.getElementById('deposit-details-modal').style.display = 'none';
        
        // Reload data
        loadDeposits();
        loadAdminData();
        
    } catch (error) {
        console.error('Error confirming deposit:', error);
        window.showCustomAlert('Error confirming deposit');
    }
}

async function saveSettings() {
    try {
        const settings = [
            { key: 'registration_bonus', value: document.getElementById('reg-bonus').value },
            { key: 'min_deposit', value: document.getElementById('min-deposit').value },
            { key: 'min_withdrawal', value: document.getElementById('min-withdrawal').value },
            { key: 'daily_signals', value: document.getElementById('daily-signals').value },
            { key: 'signal_refresh_hour', value: document.getElementById('signal-refresh-hour').value },
            { key: 'withdrawal_fee_vip1', value: document.getElementById('withdrawal-fee-vip1').value },
            { key: 'withdrawal_fee_vip6', value: document.getElementById('withdrawal-fee-vip6').value },
            { key: 'referral_bonus_l1', value: document.getElementById('referral-bonus-l1').value },
            { key: 'referral_bonus_l2', value: document.getElementById('referral-bonus-l2').value },
            { key: 'referral_bonus_l3', value: document.getElementById('referral-bonus-l3').value }
        ];
        
        // Save each setting
        for (const setting of settings) {
            const { error } = await window.supabase
                .from('platform_settings')
                .upsert({
                    key: setting.key,
                    value: setting.value,
                    updated_at: new Date().toISOString()
                });
            
            if (error) throw error;
        }
        
        window.showCustomAlert('Settings saved successfully!');
        
    } catch (error) {
        console.error('Error saving settings:', error);
        window.showCustomAlert('Error saving settings');
    }
}

async function resetSettings() {
    if (confirm('Are you sure you want to reset all settings to default values?')) {
        // Set default values
        document.getElementById('reg-bonus').value = '3.00';
        document.getElementById('min-deposit').value = '17';
        document.getElementById('min-withdrawal').value = '20';
        document.getElementById('daily-signals').value = '3';
        document.getElementById('signal-refresh-hour').value = '18';
        document.getElementById('withdrawal-fee-vip1').value = '7';
        document.getElementById('withdrawal-fee-vip6').value = '0.5';
        document.getElementById('referral-bonus-l1').value = '12';
        document.getElementById('referral-bonus-l2').value = '5';
        document.getElementById('referral-bonus-l3').value = '3';
        
        window.showCustomAlert('Settings reset to default values. Click Save to apply.');
    }
}

async function clearAdminCache() {
    if (confirm('Are you sure you want to clear the admin cache?')) {
        // Clear any cached data
        localStorage.removeItem('admin_cache');
        window.showCustomAlert('Admin cache cleared successfully!');
        loadAdminData();
    }
}

async function exportUsersToCSV() {
    try {
        // Get all users
        const { data: users, error } = await window.supabase
            .from('users')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        // Prepare CSV content
        let csvContent = 'ID,Username,Email,Balance,VIP Level,Signals,Referrals,Created At\n';
        
        for (const user of users) {
            // Get referral count
            const { count: referrals } = await window.supabase
                .from('referrals')
                .select('*', { count: 'exact', head: true })
                .eq('referrer_id', user.id)
                .eq('level', 1);
            
            csvContent += `"${user.id}","${user.username}","${user.email || ''}",${user.balance},${user.vip_level},${user.signals_available},${referrals || 0},"${new Date(user.created_at).toLocaleString()}"\n`;
        }
        
        // Create download link
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `users_export_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        window.showCustomAlert('Users exported to CSV successfully!');
        
    } catch (error) {
        console.error('Error exporting users:', error);
        window.showCustomAlert('Error exporting users');
    }
}

async function viewUserTransactions() {
    const userId = document.getElementById('edit-user-form').getAttribute('data-user-id');
    if (!userId) return;
    
    // Switch to transactions tab and filter by user
    document.querySelectorAll('.admin-nav-item').forEach(i => {
        i.classList.remove('active');
    });
    document.querySelector('.admin-nav-item[data-tab="transactions"]').classList.add('active');
    loadTab('transactions');
    
    // Store user ID for filtering (you'll need to modify loadTransactions to accept user filter)
    setTimeout(() => {
        window.showCustomAlert(`Viewing transactions for user ${userId}. Filter functionality to be implemented.`);
    }, 500);
}

async function viewUserReferrals() {
    const userId = document.getElementById('edit-user-form').getAttribute('data-user-id');
    if (!userId) return;
    
    // Switch to referrals tab and load tree
    document.querySelectorAll('.admin-nav-item').forEach(i => {
        i.classList.remove('active');
    });
    document.querySelector('.admin-nav-item[data-tab="referrals"]').classList.add('active');
    loadTab('referrals');
    
    document.getElementById('search-user-referrals').value = userId;
    setTimeout(() => {
        loadReferralTree(userId);
    }, 500);
    
    // Close user edit modal
    document.getElementById('edit-user-modal').style.display = 'none';
}

// Keep existing functions that are not modified
async function showTransactionDetails(txId) {
    // ... existing code ...
}
