// Admin section - UPDATED with full monitoring and management
export default function renderAdmin() {
    return `
        <div class="admin-container">
            <!-- Admin Header with Quick Stats -->
            <div class="card padding" style="background: linear-gradient(135deg, #4e7771 0%, #2c4b45 100%); margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h2 style="color: white; margin-bottom: 5px;">Admin Dashboard</h2>
                        <p style="color: #ccc; font-size: 12px;">Full control panel v2.0</p>
                    </div>
                    <div class="admin-stats">
                        <div class="admin-stat" id="today-deposits-stat">
                            <div class="admin-stat-value">0</div>
                            <div class="admin-stat-label">Today Deposits</div>
                        </div>
                        <div class="admin-stat" id="pending-withdrawals-stat">
                            <div class="admin-stat-value">0</div>
                            <div class="admin-stat-label">Pending WD</div>
                        </div>
                        <div class="admin-stat" id="total-users-stat">
                            <div class="admin-stat-value">0</div>
                            <div class="admin-stat-label">Total Users</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="card padding margin-bottom">
                <h3 style="color: white; margin-bottom: 15px;">Quick Actions</h3>
                <div class="quick-actions">
                    <button class="admin-btn-quick" id="refresh-all-data">
                        <i class="fas fa-sync-alt"></i> Refresh All
                    </button>
                    <button class="admin-btn-quick" id="export-data">
                        <i class="fas fa-download"></i> Export Data
                    </button>
                    <button class="admin-btn-quick" id="add-manual-deposit">
                        <i class="fas fa-plus-circle"></i> Add Deposit
                    </button>
                    <button class="admin-btn-quick" id="view-system-logs">
                        <i class="fas fa-history"></i> System Logs
                    </button>
                </div>
            </div>

            <!-- Admin Navigation - Vertical Layout -->
            <div class="admin-nav-vertical">
                <div class="admin-nav-item active" data-tab="overview">
                    <i class="fas fa-chart-line"></i>
                    <span>Overview</span>
                </div>
                <div class="admin-nav-item" data-tab="users">
                    <i class="fas fa-users"></i>
                    <span>All Users</span>
                </div>
                <div class="admin-nav-item" data-tab="deposits">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>Deposits Monitor</span>
                </div>
                <div class="admin-nav-item" data-tab="withdrawals">
                    <i class="fas fa-wallet"></i>
                    <span>Withdrawals</span>
                </div>
                <div class="admin-nav-item" data-tab="referral-tree">
                    <i class="fas fa-sitemap"></i>
                    <span>Referral Tree</span>
                </div>
                <div class="admin-nav-item" data-tab="transactions">
                    <i class="fas fa-exchange-alt"></i>
                    <span>Transactions</span>
                </div>
                <div class="admin-nav-item" data-tab="balance-management">
                    <i class="fas fa-balance-scale"></i>
                    <span>Balance Management</span>
                </div>
                <div class="admin-nav-item" data-tab="settings">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </div>
            </div>

            <!-- Tabs Content -->
            <div class="admin-tabs-content">
                <!-- Overview Tab -->
                <div class="admin-tab active" id="overview-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">System Overview</h3>
                            <div class="tab-actions">
                                <button class="admin-btn-small" id="refresh-overview">
                                    <i class="fas fa-sync-alt"></i> Refresh
                                </button>
                            </div>
                        </div>
                        
                        <!-- Stats Grid -->
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="stat-icon" style="background: #4e7771;">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="stat-content">
                                    <div class="stat-value" id="total-users-overview">0</div>
                                    <div class="stat-label">Total Users</div>
                                </div>
                            </div>
                            
                            <div class="stat-card">
                                <div class="stat-icon" style="background: #52c41a;">
                                    <i class="fas fa-money-bill-wave"></i>
                                </div>
                                <div class="stat-content">
                                    <div class="stat-value" id="today-deposits-overview">0</div>
                                    <div class="stat-label">Today Deposits</div>
                                </div>
                            </div>
                            
                            <div class="stat-card">
                                <div class="stat-icon" style="background: #f9ae3d;">
                                    <i class="fas fa-wallet"></i>
                                </div>
                                <div class="stat-content">
                                    <div class="stat-value" id="pending-withdrawals-overview">0</div>
                                    <div class="stat-label">Pending Withdrawals</div>
                                </div>
                            </div>
                            
                            <div class="stat-card">
                                <div class="stat-icon" style="background: #2c4b45;">
                                    <i class="fas fa-chart-bar"></i>
                                </div>
                                <div class="stat-content">
                                    <div class="stat-value" id="total-deposits-overview">0</div>
                                    <div class="stat-label">All Time Deposits</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Recent Activity -->
                        <div class="margin-top">
                            <h4 style="color: white; margin-bottom: 15px;">Recent Activity</h4>
                            <div class="activity-list" id="recent-activity">
                                <div style="color: #ccc; text-align: center; padding: 20px;">
                                    <i class="fas fa-spinner fa-spin"></i> Loading...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Users Tab -->
                <div class="admin-tab" id="users-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">All Users Management</h3>
                            <div class="tab-actions">
                                <input type="text" 
                                       id="search-users" 
                                       placeholder="Search by ID, username or email..."
                                       class="admin-input-small">
                                <button class="admin-btn-small" id="add-new-user">
                                    <i class="fas fa-user-plus"></i> Add User
                                </button>
                                <button class="admin-btn-small" id="refresh-users">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="users-table-container">
                            <table class="admin-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Balance</th>
                                        <th>VIP</th>
                                        <th>Signals</th>
                                        <th>Refs</th>
                                        <th>Joined</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="users-table-body">
                                    <tr>
                                        <td colspan="8" style="text-align: center; color: #ccc;">
                                            <i class="fas fa-spinner fa-spin"></i> Loading...
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="table-footer">
                            <div class="pagination" id="users-pagination">
                                <!-- Pagination will be inserted here -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Deposits Monitor Tab -->
                <div class="admin-tab" id="deposits-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">Deposits Monitor</h3>
                            <div class="tab-actions">
                                <select id="deposit-period-filter" class="admin-select-small">
                                    <option value="today">Today</option>
                                    <option value="yesterday">Yesterday</option>
                                    <option value="week">This Week</option>
                                    <option value="month">This Month</option>
                                    <option value="all">All Time</option>
                                </select>
                                <button class="admin-btn-small" id="refresh-deposits">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                        <!-- Deposit Stats -->
                        <div class="deposit-stats">
                            <div class="deposit-stat">
                                <div class="deposit-stat-value" id="total-deposit-count">0</div>
                                <div class="deposit-stat-label">Total Deposits</div>
                            </div>
                            <div class="deposit-stat">
                                <div class="deposit-stat-value" id="total-deposit-amount">0</div>
                                <div class="deposit-stat-label">Total Amount (USDT)</div>
                            </div>
                            <div class="deposit-stat">
                                <div class="deposit-stat-value" id="average-deposit">0</div>
                                <div class="deposit-stat-label">Average Deposit</div>
                            </div>
                        </div>
                        
                        <div class="deposits-table-container">
                            <table class="admin-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>User</th>
                                        <th>Amount</th>
                                        <th>Network</th>
                                        <th>Status</th>
                                        <th>Transaction ID</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="deposits-table-body">
                                    <tr>
                                        <td colspan="7" style="text-align: center; color: #ccc;">
                                            <i class="fas fa-spinner fa-spin"></i> Loading...
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Withdrawals Tab -->
                <div class="admin-tab" id="withdrawals-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">Withdrawal Requests</h3>
                            <div class="tab-actions">
                                <select id="withdrawal-status-filter" class="admin-select-small">
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                    <option value="cancelled">Cancelled</option>
                                    <option value="all">All</option>
                                </select>
                                <button class="admin-btn-small" id="refresh-withdrawals">
                                    <i class="fas fa-sync-alt"></i> Refresh
                                </button>
                            </div>
                        </div>
                        
                        <div class="withdrawals-table-container">
                            <table class="admin-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>User</th>
                                        <th>Amount</th>
                                        <th>Network</th>
                                        <th>Address</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="withdrawals-table-body">
                                    <tr>
                                        <td colspan="7" style="text-align: center; color: #ccc;">
                                            <i class="fas fa-spinner fa-spin"></i> Loading...
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Referral Tree Tab -->
                <div class="admin-tab" id="referral-tree-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">Referral Tree Explorer</h3>
                            <div class="tab-actions">
                                <input type="text" 
                                       id="search-user-tree" 
                                       placeholder="Enter user ID or username..."
                                       class="admin-input-small">
                                <button class="admin-btn-small" id="load-referral-tree">
                                    <i class="fas fa-search"></i> Load Tree
                                </button>
                            </div>
                        </div>
                        
                        <div class="referral-tree-container" id="referral-tree-container">
                            <div style="color: #ccc; text-align: center; padding: 40px;">
                                <i class="fas fa-sitemap" style="font-size: 48px; margin-bottom: 15px;"></i>
                                <p>Enter a user ID or username to load their referral tree</p>
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
                                </select>
                                <input type="date" id="transaction-date-filter" class="admin-input-small">
                                <button class="admin-btn-small" id="refresh-transactions">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="transactions-table-container">
                            <table class="admin-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>User</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="transactions-table-body">
                                    <tr>
                                        <td colspan="7" style="text-align: center; color: #ccc;">
                                            <i class="fas fa-spinner fa-spin"></i> Loading...
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Balance Management Tab -->
                <div class="admin-tab" id="balance-management-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">Balance Management</h3>
                            <p style="color: #ccc; font-size: 12px;">Direct balance adjustments for users</p>
                        </div>
                        
                        <div class="balance-management-form">
                            <div class="form-row">
                                <div class="form-group">
                                    <label style="color: #fff; font-size: 14px;">Select User</label>
                                    <select id="balance-user-select" class="admin-input" style="width: 100%;">
                                        <option value="">Search user...</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label style="color: #fff; font-size: 14px;">Current Balance</label>
                                    <input type="text" 
                                           id="current-user-balance" 
                                           class="admin-input"
                                           readonly
                                           placeholder="Select user first">
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group">
                                    <label style="color: #fff; font-size: 14px;">Action</label>
                                    <select id="balance-action" class="admin-input">
                                        <option value="add">Add Balance</option>
                                        <option value="subtract">Subtract Balance</option>
                                        <option value="set">Set Balance</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label style="color: #fff; font-size: 14px;">Amount (USDT)</label>
                                    <input type="number" 
                                           id="balance-amount" 
                                           class="admin-input"
                                           step="0.01"
                                           min="0"
                                           placeholder="Enter amount">
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label style="color: #fff; font-size: 14px;">Reason/Description</label>
                                <textarea id="balance-reason" 
                                          class="admin-input"
                                          rows="3"
                                          placeholder="Enter reason for balance adjustment"></textarea>
                            </div>
                            
                            <button class="admin-btn" id="apply-balance-change" style="margin-top: 20px;">
                                <i class="fas fa-check-circle"></i> Apply Balance Change
                            </button>
                            
                            <!-- Recent Balance Changes -->
                            <div class="margin-top">
                                <h4 style="color: white; margin-bottom: 15px;">Recent Balance Adjustments</h4>
                                <div id="recent-balance-changes">
                                    <div style="color: #ccc; text-align: center; padding: 20px;">
                                        No recent adjustments
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Settings Tab -->
                <div class="admin-tab" id="settings-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">Platform Settings</h3>
                        </div>
                        
                        <div class="settings-form">
                            <div class="form-row">
                                <div class="form-group">
                                    <label style="color: #fff; font-size: 14px;">Registration Bonus</label>
                                    <input type="number" 
                                           id="reg-bonus" 
                                           value="3.00" 
                                           class="admin-input"
                                           step="0.01">
                                    <div style="font-size: 12px; color: #ccc;">USDT</div>
                                </div>
                                
                                <div class="form-group">
                                    <label style="color: #fff; font-size: 14px;">Min Deposit</label>
                                    <input type="number" 
                                           id="min-deposit" 
                                           value="17" 
                                           class="admin-input"
                                           step="0.01">
                                    <div style="font-size: 12px; color: #ccc;">USDT</div>
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group">
                                    <label style="color: #fff; font-size: 14px;">Min Withdrawal</label>
                                    <input type="number" 
                                           id="min-withdrawal" 
                                           value="20" 
                                           class="admin-input"
                                           step="0.01">
                                    <div style="font-size: 12px; color: #ccc;">USDT</div>
                                </div>
                                
                                <div class="form-group">
                                    <label style="color: #fff; font-size: 14px;">Daily Signals</label>
                                    <input type="number" 
                                           id="daily-signals" 
                                           value="3" 
                                           class="admin-input">
                                    <div style="font-size: 12px; color: #ccc;">Signals per day</div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label style="color: #fff; font-size: 14px;">Signal Reset Time (UTC)</label>
                                <input type="number" 
                                       id="signal-reset-hour" 
                                       value="18" 
                                       class="admin-input"
                                       min="0"
                                       max="23">
                                <div style="font-size: 12px; color: #ccc;">Hour (0-23) when signals reset</div>
                            </div>
                            
                            <button class="admin-btn" id="save-settings" style="margin-top: 20px;">
                                <i class="fas fa-save"></i> Save Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- User Edit Modal -->
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
                                <input type="text" id="edit-username" class="admin-input">
                            </div>
                            <div class="form-group">
                                <label style="color: #333; font-size: 14px;">Email</label>
                                <input type="email" id="edit-email" class="admin-input">
                            </div>
                            <div class="form-group">
                                <label style="color: #333; font-size: 14px;">Password</label>
                                <input type="text" id="edit-password" class="admin-input" placeholder="Leave empty to keep current">
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
                                <input type="number" id="edit-signals" class="admin-input" min="0" max="10">
                            </div>
                            <div class="form-group">
                                <label style="color: #333; font-size: 14px;">Status</label>
                                <select id="edit-status" class="admin-input">
                                    <option value="active">Active</option>
                                    <option value="suspended">Suspended</option>
                                    <option value="banned">Banned</option>
                                </select>
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
                                <label style="color: #333; font-size: 14px;">Invite Code</label>
                                <input type="text" id="edit-invite-code" class="admin-input">
                            </div>
                        </div>
                    </div>
                    <div class="pop-footer">
                        <button type="submit" id="save-user-changes" style="margin-right: 10px;">Save Changes</button>
                        <button type="button" id="cancel-edit-user">Cancel</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Withdrawal Action Modal -->
        <div class="pop-overlay" id="withdrawal-action-modal" style="display: none;">
            <div class="pop-content">
                <div class="pop-header">Process Withdrawal</div>
                <div class="pop-body">
                    <p style="color: #333; margin-bottom: 15px;" id="withdrawal-info">
                        Loading withdrawal details...
                    </p>
                    <div class="action-buttons">
                        <button class="admin-btn-success" id="approve-withdrawal">
                            <i class="fas fa-check"></i> Approve & Pay
                        </button>
                        <button class="admin-btn-warning" id="cancel-withdrawal">
                            <i class="fas fa-ban"></i> Cancel & Refund
                        </button>
                        <button class="admin-btn-danger" id="reject-withdrawal">
                            <i class="fas fa-times"></i> Reject
                        </button>
                    </div>
                </div>
                <div class="pop-footer">
                    <button id="close-withdrawal-action">Close</button>
                </div>
            </div>
        </div>

        <!-- Add Manual Deposit Modal -->
        <div class="pop-overlay" id="manual-deposit-modal" style="display: none;">
            <div class="pop-content" style="max-width: 500px;">
                <form id="manual-deposit-form" onsubmit="return false;">
                    <div class="pop-header">Add Manual Deposit</div>
                    <div class="pop-body">
                        <div class="form-group">
                            <label style="color: #333; font-size: 14px;">Select User</label>
                            <select id="deposit-user-select" class="admin-input" style="width: 100%;">
                                <option value="">Search user...</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label style="color: #333; font-size: 14px;">Amount (USDT)</label>
                            <input type="number" 
                                   id="manual-deposit-amount" 
                                   class="admin-input"
                                   step="0.01"
                                   min="17"
                                   required>
                        </div>
                        <div class="form-group">
                            <label style="color: #333; font-size: 14px;">Network</label>
                            <select id="manual-deposit-network" class="admin-input">
                                <option value="TRC20">TRC20</option>
                                <option value="BEP20">BEP20</option>
                                <option value="MANUAL">Manual</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label style="color: #333; font-size: 14px;">Transaction ID (Optional)</label>
                            <input type="text" 
                                   id="manual-deposit-txid" 
                                   class="admin-input"
                                   placeholder="External transaction ID">
                        </div>
                        <div class="form-group">
                            <label style="color: #333; font-size: 14px;">Notes</label>
                            <textarea id="manual-deposit-notes" 
                                      class="admin-input"
                                      rows="3"
                                      placeholder="Additional notes"></textarea>
                        </div>
                    </div>
                    <div class="pop-footer">
                        <button type="submit" id="save-manual-deposit" style="margin-right: 10px;">Add Deposit</button>
                        <button type="button" id="close-manual-deposit">Cancel</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Add New User Modal -->
        <div class="pop-overlay" id="add-user-modal" style="display: none;">
            <div class="pop-content" style="max-width: 500px;">
                <form id="add-user-form" onsubmit="return false;">
                    <div class="pop-header">Add New User</div>
                    <div class="pop-body">
                        <div class="form-group">
                            <label style="color: #333; font-size: 14px;">Username *</label>
                            <input type="text" 
                                   id="new-username" 
                                   class="admin-input"
                                   required>
                        </div>
                        <div class="form-group">
                            <label style="color: #333; font-size: 14px;">Email (Optional)</label>
                            <input type="email" 
                                   id="new-email" 
                                   class="admin-input">
                        </div>
                        <div class="form-group">
                            <label style="color: #333; font-size: 14px;">Password *</label>
                            <input type="text" 
                                   id="new-password" 
                                   class="admin-input"
                                   required>
                        </div>
                        <div class="form-group">
                            <label style="color: #333; font-size: 14px;">Initial Balance (USDT)</label>
                            <input type="number" 
                                   id="new-balance" 
                                   class="admin-input"
                                   step="0.01"
                                   value="0">
                        </div>
                        <div class="form-group">
                            <label style="color: #333; font-size: 14px;">VIP Level</label>
                            <select id="new-vip-level" class="admin-input">
                                <option value="1">VIP 1</option>
                                <option value="2">VIP 2</option>
                                <option value="3">VIP 3</option>
                                <option value="4">VIP 4</option>
                                <option value="5">VIP 5</option>
                                <option value="6">VIP 6</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label style="color: #333; font-size: 14px;">Referrer ID (Optional)</label>
                            <input type="text" 
                                   id="new-referrer" 
                                   class="admin-input"
                                   placeholder="Leave empty for no referrer">
                        </div>
                    </div>
                    <div class="pop-footer">
                        <button type="submit" id="save-new-user" style="margin-right: 10px;">Create User</button>
                        <button type="button" id="close-add-user">Cancel</button>
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

        <!-- Deposit Details Modal -->
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
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    document.body.classList.add('no-tabbar');
    
    // Check admin access
    const isAdmin = await checkAdminAccess();
    if (!isAdmin) return;
    
    // Load initial data
    await loadAdminOverview();
    await loadAllUsers();
    await loadAllDeposits('today');
    await loadAllWithdrawals('pending');
    await loadAllTransactions();
    await loadRecentBalanceChanges();
    
    // Setup event listeners
    setupEventListeners();
    
    // Load initial tab
    loadTab('overview');
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
    
    // Quick Actions
    document.getElementById('refresh-all-data').addEventListener('click', refreshAllData);
    document.getElementById('export-data').addEventListener('click', exportData);
    document.getElementById('add-manual-deposit').addEventListener('click', showManualDepositModal);
    document.getElementById('view-system-logs').addEventListener('click', showSystemLogs);
    
    // Refresh buttons for each tab
    document.getElementById('refresh-overview').addEventListener('click', () => loadAdminOverview());
    document.getElementById('refresh-users').addEventListener('click', () => loadAllUsers());
    document.getElementById('refresh-deposits').addEventListener('click', () => loadAllDeposits(document.getElementById('deposit-period-filter').value));
    document.getElementById('refresh-withdrawals').addEventListener('click', () => loadAllWithdrawals(document.getElementById('withdrawal-status-filter').value));
    document.getElementById('refresh-transactions').addEventListener('click', () => loadAllTransactions());
    
    // Filters
    document.getElementById('deposit-period-filter').addEventListener('change', (e) => loadAllDeposits(e.target.value));
    document.getElementById('withdrawal-status-filter').addEventListener('change', (e) => loadAllWithdrawals(e.target.value));
    document.getElementById('transaction-type-filter').addEventListener('change', loadAllTransactions);
    document.getElementById('transaction-date-filter').addEventListener('change', loadAllTransactions);
    
    // User search
    document.getElementById('search-users').addEventListener('input', debounce(() => loadAllUsers(), 500));
    
    // Referral tree search
    document.getElementById('load-referral-tree').addEventListener('click', loadReferralTree);
    document.getElementById('search-user-tree').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') loadReferralTree();
    });
    
    // Add new user
    document.getElementById('add-new-user').addEventListener('click', showAddUserModal);
    
    // Balance management
    document.getElementById('apply-balance-change').addEventListener('click', applyBalanceChange);
    document.getElementById('balance-user-select').addEventListener('change', loadUserBalanceInfo);
    
    // Settings save
    document.getElementById('save-settings').addEventListener('click', saveSettings);
    
    // Modal close buttons
    document.getElementById('cancel-edit-user').addEventListener('click', () => {
        document.getElementById('edit-user-modal').style.display = 'none';
    });
    
    document.getElementById('close-withdrawal-action').addEventListener('click', () => {
        document.getElementById('withdrawal-action-modal').style.display = 'none';
    });
    
    document.getElementById('close-transaction-details').addEventListener('click', () => {
        document.getElementById('transaction-details-modal').style.display = 'none';
    });
    
    document.getElementById('close-deposit-details').addEventListener('click', () => {
        document.getElementById('deposit-details-modal').style.display = 'none';
    });
    
    document.getElementById('close-manual-deposit').addEventListener('click', () => {
        document.getElementById('manual-deposit-modal').style.display = 'none';
    });
    
    document.getElementById('close-add-user').addEventListener('click', () => {
        document.getElementById('add-user-modal').style.display = 'none';
    });
    
    // Withdrawal actions
    document.getElementById('approve-withdrawal').addEventListener('click', approveWithdrawal);
    document.getElementById('cancel-withdrawal').addEventListener('click', cancelWithdrawal);
    document.getElementById('reject-withdrawal').addEventListener('click', rejectWithdrawal);
    
    // Manual deposit
    document.getElementById('save-manual-deposit').addEventListener('click', saveManualDeposit);
    
    // Add new user
    document.getElementById('save-new-user').addEventListener('click', saveNewUser);
    
    // Populate user selects
    populateUserSelects();
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

async function refreshAllData() {
    window.showLoading('Refreshing all data...');
    try {
        await Promise.all([
            loadAdminOverview(),
            loadAllUsers(),
            loadAllDeposits(document.getElementById('deposit-period-filter').value),
            loadAllWithdrawals(document.getElementById('withdrawal-status-filter').value),
            loadAllTransactions()
        ]);
        window.hideLoading();
        window.showCustomAlert('All data refreshed successfully!');
    } catch (error) {
        window.hideLoading();
        window.showCustomAlert('Error refreshing data: ' + error.message);
    }
}

function loadTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

async function loadAdminOverview() {
    try {
        // Get total users
        const { count: totalUsers } = await window.supabase
            .from('users')
            .select('*', { count: 'exact', head: true });
        
        // Get today's deposits
        const today = new Date().toISOString().split('T')[0];
        const { data: todayDeposits } = await window.supabase
            .from('transactions')
            .select('amount')
            .eq('type', 'deposit')
            .gte('created_at', `${today}T00:00:00`)
            .lte('created_at', `${today}T23:59:59`);
        
        const todayDepositCount = todayDeposits?.length || 0;
        const todayDepositAmount = todayDeposits?.reduce((sum, d) => sum + d.amount, 0) || 0;
        
        // Get all time deposits
        const { data: allDeposits } = await window.supabase
            .from('transactions')
            .select('amount')
            .eq('type', 'deposit');
        
        const totalDepositCount = allDeposits?.length || 0;
        const totalDepositAmount = allDeposits?.reduce((sum, d) => sum + d.amount, 0) || 0;
        
        // Get pending withdrawals
        const { count: pendingWithdrawals } = await window.supabase
            .from('transactions')
            .select('*', { count: 'exact', head: true })
            .eq('type', 'withdrawal')
            .eq('status', 'pending');
        
        // Update header stats
        document.getElementById('today-deposits-stat').querySelector('.admin-stat-value').textContent = todayDepositCount;
        document.getElementById('pending-withdrawals-stat').querySelector('.admin-stat-value').textContent = pendingWithdrawals || 0;
        document.getElementById('total-users-stat').querySelector('.admin-stat-value').textContent = totalUsers || 0;
        
        // Update overview stats
        document.getElementById('total-users-overview').textContent = totalUsers || 0;
        document.getElementById('today-deposits-overview').textContent = todayDepositCount;
        document.getElementById('pending-withdrawals-overview').textContent = pendingWithdrawals || 0;
        document.getElementById('total-deposits-overview').textContent = totalDepositCount;
        
        // Load recent activity
        await loadRecentActivity();
        
    } catch (error) {
        console.error('Error loading admin overview:', error);
    }
}

async function loadRecentActivity() {
    try {
        const { data: activities, error } = await window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username)
            `)
            .order('created_at', { ascending: false })
            .limit(20);
        
        if (error) throw error;
        
        const container = document.getElementById('recent-activity');
        let html = '';
        
        if (activities && activities.length > 0) {
            activities.forEach(activity => {
                const date = new Date(activity.created_at);
                const timeStr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const isPositive = activity.amount > 0;
                const amountColor = isPositive ? '#52c41a' : '#ff4d4f';
                const sign = isPositive ? '+' : '';
                const icon = activity.type === 'deposit' ? 'fa-money-bill-wave' :
                           activity.type === 'withdrawal' ? 'fa-wallet' :
                           activity.type === 'quantification' ? 'fa-chart-line' :
                           'fa-exchange-alt';
                
                html += `
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fas ${icon}"></i>
                        </div>
                        <div class="activity-content">
                            <div class="activity-title">
                                <span class="activity-user">${activity.user.username}</span>
                                <span class="activity-amount" style="color: ${amountColor};">${sign}${activity.amount.toFixed(2)} USDT</span>
                            </div>
                            <div class="activity-details">
                                <span class="activity-type">${activity.type}</span>
                                <span class="activity-time">${timeStr}</span>
                            </div>
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
    }
}

async function loadAllUsers(page = 1, limit = 20) {
    try {
        const searchTerm = document.getElementById('search-users').value;
        let query = window.supabase
            .from('users')
            .select('*', { count: 'exact' })
            .order('created_at', { ascending: false });
        
        if (searchTerm) {
            query = query.or(`username.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%,id.ilike.%${searchTerm}%`);
        }
        
        // Calculate offset for pagination
        const offset = (page - 1) * limit;
        query = query.range(offset, offset + limit - 1);
        
        const { data: users, error, count } = await query;
        
        if (error) throw error;
        
        const container = document.getElementById('users-table-body');
        let html = '';
        
        if (users && users.length > 0) {
            for (const user of users) {
                // Get referral count
                const { count: referrals } = await window.supabase
                    .from('referrals')
                    .select('*', { count: 'exact', head: true })
                    .eq('referrer_id', user.id)
                    .eq('level', 1);
                
                const date = new Date(user.created_at).toLocaleDateString();
                const vipBadge = user.vip_level === 6 ? 'vip-badge vip6' : 
                               user.vip_level === 5 ? 'vip-badge vip5' :
                               user.vip_level === 4 ? 'vip-badge vip4' :
                               user.vip_level === 3 ? 'vip-badge vip3' :
                               user.vip_level === 2 ? 'vip-badge vip2' :
                               'vip-badge vip1';
                
                html += `
                    <tr>
                        <td><small>${user.id.substring(0, 8)}...</small></td>
                        <td>
                            <div style="font-weight: bold;">${user.username}</div>
                            <small>${user.email || 'No email'}</small>
                        </td>
                        <td style="color: #f9ae3d; font-weight: bold;">${user.balance.toFixed(2)} USDT</td>
                        <td><span class="${vipBadge}">VIP ${user.vip_level}</span></td>
                        <td>${user.signals_available}</td>
                        <td>${referrals || 0}</td>
                        <td>${date}</td>
                        <td>
                            <button class="admin-btn-small action-btn" data-id="${user.id}" data-action="edit">
                                <i class="fas fa-edit"></i> Edit
                            </button>
                            <button class="admin-btn-small action-btn" data-id="${user.id}" data-action="view">
                                <i class="fas fa-eye"></i> View
                            </button>
                        </td>
                    </tr>
                `;
            }
        } else {
            html = '<tr><td colspan="8" style="text-align: center; color: #ccc; padding: 20px;">No users found</td></tr>';
        }
        
        container.innerHTML = html;
        
        // Add event listeners to action buttons
        container.querySelectorAll('.action-btn[data-action="edit"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const userId = this.getAttribute('data-id');
                showEditUserModal(userId);
            });
        });
        
        container.querySelectorAll('.action-btn[data-action="view"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const userId = this.getAttribute('data-id');
                viewUserDetails(userId);
            });
        });
        
        // Update pagination
        updateUsersPagination(page, limit, count || 0);
        
    } catch (error) {
        console.error('Error loading users:', error);
        document.getElementById('users-table-body').innerHTML = 
            '<tr><td colspan="8" style="text-align: center; color: #ff4d4f; padding: 20px;">Error loading users</td></tr>';
    }
}

function updateUsersPagination(currentPage, limit, totalCount) {
    const totalPages = Math.ceil(totalCount / limit);
    const container = document.getElementById('users-pagination');
    
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // Previous button
    if (currentPage > 1) {
        html += `<button class="pagination-btn" data-page="${currentPage - 1}">Previous</button>`;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            html += `<button class="pagination-btn active" data-page="${i}">${i}</button>`;
        } else if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            html += `<button class="pagination-btn" data-page="${i}">${i}</button>`;
        }
    }
    
    // Next button
    if (currentPage < totalPages) {
        html += `<button class="pagination-btn" data-page="${currentPage + 1}">Next</button>`;
    }
    
    container.innerHTML = html;
    
    // Add event listeners to pagination buttons
    container.querySelectorAll('.pagination-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const page = parseInt(this.getAttribute('data-page'));
            loadAllUsers(page, 20);
        });
    });
}

async function loadAllDeposits(period = 'today') {
    try {
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
        if (period === 'today') {
            const today = now.toISOString().split('T')[0];
            query = query.gte('created_at', `${today}T00:00:00`)
                         .lte('created_at', `${today}T23:59:59`);
        } else if (period === 'yesterday') {
            const yesterday = new Date(now.setDate(now.getDate() - 1)).toISOString().split('T')[0];
            query = query.gte('created_at', `${yesterday}T00:00:00`)
                         .lte('created_at', `${yesterday}T23:59:59`);
        } else if (period === 'week') {
            const weekAgo = new Date(now.setDate(now.getDate() - 7)).toISOString();
            query = query.gte('created_at', weekAgo);
        } else if (period === 'month') {
            const monthAgo = new Date(now.setMonth(now.getMonth() - 1)).toISOString();
            query = query.gte('created_at', monthAgo);
        }
        // 'all' - no filter
        
        const { data: deposits, error } = await query;
        
        if (error) throw error;
        
        // Update stats
        const totalCount = deposits?.length || 0;
        const totalAmount = deposits?.reduce((sum, d) => sum + d.amount, 0) || 0;
        const averageAmount = totalCount > 0 ? totalAmount / totalCount : 0;
        
        document.getElementById('total-deposit-count').textContent = totalCount;
        document.getElementById('total-deposit-amount').textContent = totalAmount.toFixed(2);
        document.getElementById('average-deposit').textContent = averageAmount.toFixed(2);
        
        // Update table
        const container = document.getElementById('deposits-table-body');
        let html = '';
        
        if (deposits && deposits.length > 0) {
            deposits.forEach(deposit => {
                const date = new Date(deposit.created_at);
                const dateStr = date.toLocaleDateString();
                const timeStr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const statusColor = deposit.status === 'completed' ? '#52c41a' : 
                                   deposit.status === 'pending' ? '#f9ae3d' : 
                                   '#ccc';
                const shortTxId = deposit.description ? 
                    deposit.description.substring(0, 20) + '...' : 
                    'N/A';
                
                html += `
                    <tr>
                        <td>${dateStr}<br><small>${timeStr}</small></td>
                        <td>
                            <div style="font-weight: bold;">${deposit.user.username}</div>
                            <small>${deposit.user.email || ''}</small>
                        </td>
                        <td style="color: #52c41a; font-weight: bold;">+${deposit.amount.toFixed(2)} USDT</td>
                        <td>${deposit.network || 'TRC20'}</td>
                        <td><span class="status-badge" style="background: ${statusColor};">${deposit.status}</span></td>
                        <td><small title="${deposit.description || ''}">${shortTxId}</small></td>
                        <td>
                            <button class="admin-btn-small action-btn" data-id="${deposit.id}" data-action="view-deposit">
                                <i class="fas fa-eye"></i> Details
                            </button>
                        </td>
                    </tr>
                `;
            });
        } else {
            html = '<tr><td colspan="7" style="text-align: center; color: #ccc; padding: 20px;">No deposits found</td></tr>';
        }
        
        container.innerHTML = html;
        
        // Add event listeners to action buttons
        container.querySelectorAll('.action-btn[data-action="view-deposit"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const depositId = this.getAttribute('data-id');
                showDepositDetails(depositId);
            });
        });
        
    } catch (error) {
        console.error('Error loading deposits:', error);
        document.getElementById('deposits-table-body').innerHTML = 
            '<tr><td colspan="7" style="text-align: center; color: #ff4d4f; padding: 20px;">Error loading deposits</td></tr>';
    }
}

async function loadAllWithdrawals(statusFilter = 'pending') {
    try {
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
        
        const container = document.getElementById('withdrawals-table-body');
        let html = '';
        
        if (withdrawals && withdrawals.length > 0) {
            withdrawals.forEach(tx => {
                const date = new Date(tx.created_at);
                const dateStr = date.toLocaleDateString();
                const timeStr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const amount = Math.abs(tx.amount);
                const statusColor = tx.status === 'completed' ? '#52c41a' : 
                                   tx.status === 'pending' ? '#f9ae3d' : 
                                   tx.status === 'cancelled' ? '#ff4d4f' : 
                                   '#ccc';
                const shortAddress = tx.withdrawal_address ? 
                    tx.withdrawal_address.substring(0, 15) + '...' : 
                    'N/A';
                
                html += `
                    <tr>
                        <td>${dateStr}<br><small>${timeStr}</small></td>
                        <td>
                            <div style="font-weight: bold;">${tx.user.username}</div>
                            <small>Balance: ${tx.user.balance.toFixed(2)} USDT</small>
                        </td>
                        <td style="color: #ff4d4f; font-weight: bold;">-${amount.toFixed(2)} USDT</td>
                        <td>${tx.network || 'TRC20'}</td>
                        <td title="${tx.withdrawal_address || ''}">${shortAddress}</td>
                        <td><span class="status-badge" style="background: ${statusColor};">${tx.status}</span></td>
                        <td>
                            ${tx.status === 'pending' ? `
                                <button class="admin-btn-small action-btn" data-id="${tx.id}" data-action="process">
                                    <i class="fas fa-cog"></i> Process
                                </button>
                            ` : ''}
                            <button class="admin-btn-small action-btn" data-id="${tx.id}" data-action="view-tx">
                                <i class="fas fa-eye"></i> View
                            </button>
                        </td>
                    </tr>
                `;
            });
        } else {
            html = '<tr><td colspan="7" style="text-align: center; color: #ccc; padding: 20px;">No withdrawals found</td></tr>';
        }
        
        container.innerHTML = html;
        
        // Add event listeners to action buttons
        container.querySelectorAll('.action-btn[data-action="process"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const txId = this.getAttribute('data-id');
                showWithdrawalAction(txId);
            });
        });
        
        container.querySelectorAll('.action-btn[data-action="view-tx"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const txId = this.getAttribute('data-id');
                showTransactionDetails(txId);
            });
        });
        
    } catch (error) {
        console.error('Error loading withdrawals:', error);
        document.getElementById('withdrawals-table-body').innerHTML = 
            '<tr><td colspan="7" style="text-align: center; color: #ff4d4f; padding: 20px;">Error loading withdrawals</td></tr>';
    }
}

async function loadReferralTree() {
    const searchInput = document.getElementById('search-user-tree').value.trim();
    if (!searchInput) {
        window.showCustomAlert('Please enter a user ID or username');
        return;
    }
    
    try {
        // Find user
        const { data: user, error: userError } = await window.supabase
            .from('users')
            .select('*')
            .or(`username.eq.${searchInput},id.eq.${searchInput}`)
            .maybeSingle();
        
        if (userError || !user) {
            window.showCustomAlert('User not found');
            return;
        }
        
        // Get direct referrals (level 1)
        const { data: level1Refs } = await window.supabase
            .from('referrals')
            .select(`
                referred_id,
                referred:users!referred_id(username, balance, vip_level, created_at)
            `)
            .eq('referrer_id', user.id)
            .eq('level', 1);
        
        // Get level 2 referrals
        let level2Refs = [];
        if (level1Refs && level1Refs.length > 0) {
            for (const ref1 of level1Refs) {
                const { data: refs2 } = await window.supabase
                    .from('referrals')
                    .select(`
                        referred_id,
                        referred:users!referred_id(username, balance, vip_level, created_at)
                    `)
                    .eq('referrer_id', ref1.referred_id)
                    .eq('level', 1);
                
                if (refs2) {
                    level2Refs.push(...refs2.map(r => ({ ...r, parent: ref1.referred_id })));
                }
            }
        }
        
        // Get level 3 referrals
        let level3Refs = [];
        if (level2Refs && level2Refs.length > 0) {
            for (const ref2 of level2Refs) {
                const { data: refs3 } = await window.supabase
                    .from('referrals')
                    .select(`
                        referred_id,
                        referred:users!referred_id(username, balance, vip_level, created_at)
                    `)
                    .eq('referrer_id', ref2.referred_id)
                    .eq('level', 1);
                
                if (refs3) {
                    level3Refs.push(...refs3.map(r => ({ ...r, parent: ref2.referred_id })));
                }
            }
        }
        
        // Render tree
        const container = document.getElementById('referral-tree-container');
        let html = `
            <div class="referral-tree">
                <div class="tree-header">
                    <h4 style="color: white;">Referral Tree for ${user.username} (ID: ${user.id})</h4>
                    <div class="tree-stats">
                        <span>Level 1: ${level1Refs?.length || 0}</span>
                        <span>Level 2: ${level2Refs.length}</span>
                        <span>Level 3: ${level3Refs.length}</span>
                    </div>
                </div>
                
                <div class="tree-node root">
                    <div class="node-content">
                        <div class="node-avatar">${user.username.charAt(0).toUpperCase()}</div>
                        <div class="node-details">
                            <div class="node-name">${user.username} (YOU)</div>
                            <div class="node-info">VIP ${user.vip_level} | ${user.balance.toFixed(2)} USDT</div>
                        </div>
                    </div>
                </div>
        `;
        
        // Level 1
        if (level1Refs && level1Refs.length > 0) {
            html += '<div class="tree-level level-1">';
            level1Refs.forEach((ref, index) => {
                const referred = ref.referred;
                html += `
                    <div class="tree-node">
                        <div class="node-content">
                            <div class="node-avatar">${referred.username.charAt(0).toUpperCase()}</div>
                            <div class="node-details">
                                <div class="node-name">${referred.username}</div>
                                <div class="node-info">VIP ${referred.vip_level} | ${referred.balance.toFixed(2)} USDT</div>
                                <div class="node-date">${new Date(referred.created_at).toLocaleDateString()}</div>
                            </div>
                        </div>
                `;
                
                // Level 2 for this user
                const level2ForThisUser = level2Refs.filter(r => r.parent === ref.referred_id);
                if (level2ForThisUser.length > 0) {
                    html += '<div class="tree-level level-2">';
                    level2ForThisUser.forEach(ref2 => {
                        const referred2 = ref2.referred;
                        html += `
                            <div class="tree-node">
                                <div class="node-content">
                                    <div class="node-avatar">${referred2.username.charAt(0).toUpperCase()}</div>
                                    <div class="node-details">
                                        <div class="node-name">${referred2.username}</div>
                                        <div class="node-info">VIP ${referred2.vip_level} | ${referred2.balance.toFixed(2)} USDT</div>
                                        <div class="node-date">${new Date(referred2.created_at).toLocaleDateString()}</div>
                                    </div>
                                </div>
                        `;
                        
                        // Level 3 for this user
                        const level3ForThisUser = level3Refs.filter(r => r.parent === ref2.referred_id);
                        if (level3ForThisUser.length > 0) {
                            html += '<div class="tree-level level-3">';
                            level3ForThisUser.forEach(ref3 => {
                                const referred3 = ref3.referred;
                                html += `
                                    <div class="tree-node">
                                        <div class="node-content">
                                            <div class="node-avatar">${referred3.username.charAt(0).toUpperCase()}</div>
                                            <div class="node-details">
                                                <div class="node-name">${referred3.username}</div>
                                                <div class="node-info">VIP ${referred3.vip_level} | ${referred3.balance.toFixed(2)} USDT</div>
                                                <div class="node-date">${new Date(referred3.created_at).toLocaleDateString()}</div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            });
                            html += '</div>';
                        }
                        
                        html += '</div>';
                    });
                    html += '</div>';
                }
                
                html += '</div>';
            });
            html += '</div>';
        }
        
        html += '</div>';
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading referral tree:', error);
        window.showCustomAlert('Error loading referral tree');
    }
}

async function loadAllTransactions() {
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
            .limit(100);
        
        if (typeFilter) {
            query = query.eq('type', typeFilter);
        }
        
        if (dateFilter) {
            query = query.gte('created_at', `${dateFilter}T00:00:00`)
                         .lte('created_at', `${dateFilter}T23:59:59`);
        }
        
        const { data: transactions, error } = await query;
        
        if (error) throw error;
        
        const container = document.getElementById('transactions-table-body');
        let html = '';
        
        if (transactions && transactions.length > 0) {
            transactions.forEach(tx => {
                const date = new Date(tx.created_at);
                const dateStr = date.toLocaleDateString();
                const timeStr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const isPositive = tx.amount > 0;
                const amountColor = isPositive ? '#52c41a' : '#ff4d4f';
                const statusColor = tx.status === 'completed' ? '#52c41a' : 
                                   tx.status === 'pending' ? '#f9ae3d' : 
                                   '#ff4d4f';
                
                html += `
                    <tr>
                        <td>${dateStr}<br><small>${timeStr}</small></td>
                        <td>${tx.user.username}</td>
                        <td><span class="type-badge">${tx.type}</span></td>
                        <td style="color: ${amountColor}; font-weight: bold;">${isPositive ? '+' : ''}${tx.amount.toFixed(2)} USDT</td>
                        <td><span class="status-badge" style="background: ${statusColor};">${tx.status}</span></td>
                        <td><small>${tx.description || ''}</small></td>
                        <td>
                            <button class="admin-btn-small action-btn" data-id="${tx.id}" data-action="view">
                                <i class="fas fa-eye"></i> View
                            </button>
                        </td>
                    </tr>
                `;
            });
        } else {
            html = '<tr><td colspan="7" style="text-align: center; color: #ccc; padding: 20px;">No transactions found</td></tr>';
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
        document.getElementById('transactions-table-body').innerHTML = 
            '<tr><td colspan="7" style="text-align: center; color: #ff4d4f; padding: 20px;">Error loading transactions</td></tr>';
    }
}

async function loadRecentBalanceChanges() {
    try {
        const { data: changes, error } = await window.supabase
            .from('admin_logs')
            .select(`
                *,
                admin:users!admin_id(username),
                target_user:users!target_user_id(username)
            `)
            .eq('action', 'balance_adjustment')
            .order('created_at', { ascending: false })
            .limit(10);
        
        if (error) throw error;
        
        const container = document.getElementById('recent-balance-changes');
        let html = '';
        
        if (changes && changes.length > 0) {
            changes.forEach(change => {
                const date = new Date(change.created_at).toLocaleDateString();
                const details = JSON.parse(change.details || '{}');
                
                html += `
                    <div class="balance-change-item">
                        <div class="change-header">
                            <span class="change-admin">${change.admin?.username || 'System'}</span>
                            <span class="change-date">${date}</span>
                        </div>
                        <div class="change-details">
                            User: ${change.target_user?.username || 'Unknown'} |
                            Amount: ${details.amount || 0} USDT |
                            Reason: ${details.reason || 'No reason provided'}
                        </div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 20px;">No recent balance adjustments</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading balance changes:', error);
    }
}

async function populateUserSelects() {
    try {
        const { data: users, error } = await window.supabase
            .from('users')
            .select('id, username')
            .order('username')
            .limit(100);
        
        if (error) throw error;
        
        const balanceSelect = document.getElementById('balance-user-select');
        const depositSelect = document.getElementById('deposit-user-select');
        
        let options = '<option value="">Select user...</option>';
        if (users && users.length > 0) {
            users.forEach(user => {
                options += `<option value="${user.id}">${user.username} (${user.id})</option>`;
            });
        }
        
        balanceSelect.innerHTML = options;
        depositSelect.innerHTML = options;
        
    } catch (error) {
        console.error('Error populating user selects:', error);
    }
}

async function loadUserBalanceInfo() {
    const userId = document.getElementById('balance-user-select').value;
    if (!userId) return;
    
    try {
        const { data: user, error } = await window.supabase
            .from('users')
            .select('balance, username')
            .eq('id', userId)
            .single();
        
        if (error) throw error;
        
        document.getElementById('current-user-balance').value = `${user.balance.toFixed(2)} USDT (${user.username})`;
        
    } catch (error) {
        console.error('Error loading user balance:', error);
        document.getElementById('current-user-balance').value = 'Error loading balance';
    }
}

async function applyBalanceChange() {
    const userId = document.getElementById('balance-user-select').value;
    const action = document.getElementById('balance-action').value;
    const amount = parseFloat(document.getElementById('balance-amount').value);
    const reason = document.getElementById('balance-reason').value.trim();
    const adminUser = window.getCurrentUser();
    
    if (!userId || !amount || amount <= 0) {
        window.showCustomAlert('Please select a user and enter a valid amount');
        return;
    }
    
    if (!reason) {
        window.showCustomAlert('Please enter a reason for this balance change');
        return;
    }
    
    try {
        // Get current user balance
        const { data: user, error: userError } = await window.supabase
            .from('users')
            .select('balance, username')
            .eq('id', userId)
            .single();
        
        if (userError) throw userError;
        
        let newBalance = user.balance;
        let transactionAmount = 0;
        
        // Calculate new balance based on action
        if (action === 'add') {
            newBalance += amount;
            transactionAmount = amount;
        } else if (action === 'subtract') {
            if (amount > user.balance) {
                window.showCustomAlert('Cannot subtract more than current balance');
                return;
            }
            newBalance -= amount;
            transactionAmount = -amount;
        } else if (action === 'set') {
            newBalance = amount;
            transactionAmount = amount - user.balance;
        }
        
        // Update user balance
        const { error: updateError } = await window.supabase
            .from('users')
            .update({ balance: newBalance })
            .eq('id', userId);
        
        if (updateError) throw updateError;
        
        // Create transaction record
        const { error: txError } = await window.supabase
            .from('transactions')
            .insert([{
                user_id: userId,
                type: 'admin_adjustment',
                amount: transactionAmount,
                status: 'completed',
                description: `Admin balance adjustment: ${reason}`
            }]);
        
        if (txError) throw txError;
        
        // Log admin action
        const { error: logError } = await window.supabase
            .from('admin_logs')
            .insert([{
                admin_id: adminUser.id,
                action: 'balance_adjustment',
                details: JSON.stringify({
                    userId: userId,
                    username: user.username,
                    oldBalance: user.balance,
                    newBalance: newBalance,
                    amount: amount,
                    action: action,
                    reason: reason
                }),
                target_user_id: userId
            }]);
        
        if (logError) throw logError;
        
        window.showCustomAlert(`Balance updated successfully! New balance: ${newBalance.toFixed(2)} USDT`);
        
        // Reset form
        document.getElementById('balance-amount').value = '';
        document.getElementById('balance-reason').value = '';
        document.getElementById('current-user-balance').value = '';
        document.getElementById('balance-user-select').value = '';
        
        // Refresh data
        await loadRecentBalanceChanges();
        await loadAllUsers();
        await loadAdminOverview();
        
    } catch (error) {
        console.error('Error applying balance change:', error);
        window.showCustomAlert('Error applying balance change: ' + error.message);
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
        
        // Fill form
        document.getElementById('edit-user-id').value = user.id;
        document.getElementById('edit-username').value = user.username;
        document.getElementById('edit-email').value = user.email || '';
        document.getElementById('edit-balance').value = user.balance;
        document.getElementById('edit-vip-level').value = user.vip_level;
        document.getElementById('edit-signals').value = user.signals_available;
        document.getElementById('edit-status').value = user.status || 'active';
        document.getElementById('edit-address-trc20').value = user.withdrawal_address_trc20 || '';
        document.getElementById('edit-address-bep20').value = user.withdrawal_address_bep20 || '';
        document.getElementById('edit-invite-code').value = user.invite_code || '';
        
        // Store user ID
        document.getElementById('edit-user-form').setAttribute('data-user-id', userId);
        
        // Show modal
        document.getElementById('edit-user-modal').style.display = 'flex';
        
    } catch (error) {
        console.error('Error loading user:', error);
        window.showCustomAlert('Error loading user data');
    }
}

async function saveUserChanges() {
    const userId = document.getElementById('edit-user-form').getAttribute('data-user-id');
    const adminUser = window.getCurrentUser();
    
    try {
        const updates = {
            username: document.getElementById('edit-username').value,
            email: document.getElementById('edit-email').value || null,
            balance: parseFloat(document.getElementById('edit-balance').value),
            vip_level: parseInt(document.getElementById('edit-vip-level').value),
            signals_available: parseInt(document.getElementById('edit-signals').value),
            status: document.getElementById('edit-status').value,
            withdrawal_address_trc20: document.getElementById('edit-address-trc20').value || null,
            withdrawal_address_bep20: document.getElementById('edit-address-bep20').value || null,
            invite_code: document.getElementById('edit-invite-code').value
        };
        
        // Update password if provided
        const newPassword = document.getElementById('edit-password').value;
        if (newPassword) {
            updates.password = newPassword;
        }
        
        const { error } = await window.supabase
            .from('users')
            .update(updates)
            .eq('id', userId);
        
        if (error) throw error;
        
        // Log admin action
        await window.supabase
            .from('admin_logs')
            .insert([{
                admin_id: adminUser.id,
                action: 'user_edit',
                details: JSON.stringify(updates),
                target_user_id: userId
            }]);
        
        window.showCustomAlert('User updated successfully!');
        document.getElementById('edit-user-modal').style.display = 'none';
        
        // Reload users tab
        await loadAllUsers();
        await loadAdminOverview();
        
    } catch (error) {
        console.error('Error updating user:', error);
        window.showCustomAlert('Error updating user');
    }
}

async function viewUserDetails(userId) {
    try {
        const { data: user, error } = await window.supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .single();
        
        if (error) throw error;
        
        // Get referral stats
        const { count: totalRefs } = await window.supabase
            .from('referrals')
            .select('*', { count: 'exact', head: true })
            .eq('referrer_id', userId);
        
        // Get transaction stats
        const { data: transactions } = await window.supabase
            .from('transactions')
            .select('type, amount')
            .eq('user_id', userId);
        
        let totalDeposits = 0;
        let totalWithdrawals = 0;
        let totalQuantification = 0;
        
        if (transactions) {
            transactions.forEach(tx => {
                if (tx.type === 'deposit') totalDeposits += tx.amount;
                else if (tx.type === 'withdrawal') totalWithdrawals += Math.abs(tx.amount);
                else if (tx.type === 'quantification') totalQuantification += tx.amount;
            });
        }
        
        const details = `
            <div style="color: #333;">
                <h4 style="margin-bottom: 15px;">User Details: ${user.username}</h4>
                
                <div class="detail-section">
                    <h5>Account Information</h5>
                    <div class="detail-row">
                        <span class="detail-label">User ID:</span>
                        <span class="detail-value">${user.id}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Email:</span>
                        <span class="detail-value">${user.email || 'Not set'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Invite Code:</span>
                        <span class="detail-value">${user.invite_code || 'Not set'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Referred By:</span>
                        <span class="detail-value">${user.referred_by || 'Direct registration'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Joined:</span>
                        <span class="detail-value">${new Date(user.created_at).toLocaleString()}</span>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h5>Financial Information</h5>
                    <div class="detail-row">
                        <span class="detail-label">Balance:</span>
                        <span class="detail-value" style="color: #f9ae3d; font-weight: bold;">${user.balance.toFixed(2)} USDT</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">VIP Level:</span>
                        <span class="detail-value">VIP ${user.vip_level}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Signals Available:</span>
                        <span class="detail-value">${user.signals_available}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Last Signal Update:</span>
                        <span class="detail-value">${user.last_signal_update ? new Date(user.last_signal_update).toLocaleString() : 'Never'}</span>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h5>Statistics</h5>
                    <div class="detail-row">
                        <span class="detail-label">Total Referrals:</span>
                        <span class="detail-value">${totalRefs || 0}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Total Deposits:</span>
                        <span class="detail-value" style="color: #52c41a;">${totalDeposits.toFixed(2)} USDT</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Total Withdrawals:</span>
                        <span class="detail-value" style="color: #ff4d4f;">${totalWithdrawals.toFixed(2)} USDT</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Total Quantification:</span>
                        <span class="detail-value" style="color: #4e7771;">${totalQuantification.toFixed(2)} USDT</span>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h5>Wallet Addresses</h5>
                    <div class="detail-row">
                        <span class="detail-label">TRC20 Address:</span>
                        <span class="detail-value">${user.withdrawal_address_trc20 || 'Not set'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">BEP20 Address:</span>
                        <span class="detail-value">${user.withdrawal_address_bep20 || 'Not set'}</span>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('transaction-details-content').innerHTML = details;
        document.getElementById('transaction-details-modal').style.display = 'flex';
        
    } catch (error) {
        console.error('Error loading user details:', error);
        window.showCustomAlert('Error loading user details');
    }
}

async function showWithdrawalAction(txId) {
    try {
        const { data: transaction, error } = await window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username, balance)
            `)
            .eq('id', txId)
            .single();
        
        if (error) throw error;
        
        const amount = Math.abs(transaction.amount);
        const userBalance = transaction.user.balance;
        
        let info = `
            <div style="color: #333;">
                <div style="margin-bottom: 10px;">
                    <strong>User:</strong> ${transaction.user.username}
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>Amount:</strong> ${amount.toFixed(2)} USDT
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>User Balance:</strong> ${userBalance.toFixed(2)} USDT
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>Network:</strong> ${transaction.network || 'TRC20'}
                </div>
                <div style="margin-bottom: 15px;">
                    <strong>Address:</strong><br>
                    <small style="word-break: break-all;">${transaction.withdrawal_address}</small>
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

async function approveWithdrawal() {
    const txId = document.getElementById('withdrawal-action-modal').getAttribute('data-tx-id');
    const adminUser = window.getCurrentUser();
    
    try {
        // Update transaction status
        const { error: txError } = await window.supabase
            .from('transactions')
            .update({ 
                status: 'completed',
                description: `Withdrawal approved by admin ${adminUser.username}`
            })
            .eq('id', txId);
        
        if (txError) throw txError;
        
        // Log admin action
        await window.supabase
            .from('admin_logs')
            .insert([{
                admin_id: adminUser.id,
                action: 'withdrawal_approve',
                target_transaction_id: txId
            }]);
        
        window.showCustomAlert('Withdrawal approved successfully!');
        document.getElementById('withdrawal-action-modal').style.display = 'none';
        
        // Refresh data
        await loadAllWithdrawals(document.getElementById('withdrawal-status-filter').value);
        await loadAdminOverview();
        
    } catch (error) {
        console.error('Error approving withdrawal:', error);
        window.showCustomAlert('Error approving withdrawal');
    }
}

async function cancelWithdrawal() {
    const txId = document.getElementById('withdrawal-action-modal').getAttribute('data-tx-id');
    const adminUser = window.getCurrentUser();
    
    try {
        // Get transaction details first
        const { data: transaction, error: getError } = await window.supabase
            .from('transactions')
            .select('user_id, amount')
            .eq('id', txId)
            .single();
        
        if (getError) throw getError;
        
        // Return funds to user balance
        const amountToReturn = Math.abs(transaction.amount);
        const { data: user } = await window.supabase
            .from('users')
            .select('balance')
            .eq('id', transaction.user_id)
            .single();
        
        const newBalance = user.balance + amountToReturn;
        
        const { error: balanceError } = await window.supabase
            .from('users')
            .update({ balance: newBalance })
            .eq('id', transaction.user_id);
        
        if (balanceError) throw balanceError;
        
        // Update transaction status
        const { error: txError } = await window.supabase
            .from('transactions')
            .update({ 
                status: 'cancelled',
                description: `Withdrawal cancelled by admin - Funds returned to balance`
            })
            .eq('id', txId);
        
        if (txError) throw txError;
        
        // Log admin action
        await window.supabase
            .from('admin_logs')
            .insert([{
                admin_id: adminUser.id,
                action: 'withdrawal_cancel',
                details: JSON.stringify({
                    amountReturned: amountToReturn,
                    newBalance: newBalance
                }),
                target_user_id: transaction.user_id,
                target_transaction_id: txId
            }]);
        
        window.showCustomAlert('Withdrawal cancelled and funds returned to user!');
        document.getElementById('withdrawal-action-modal').style.display = 'none';
        
        // Refresh data
        await loadAllWithdrawals(document.getElementById('withdrawal-status-filter').value);
        await loadAdminOverview();
        
    } catch (error) {
        console.error('Error cancelling withdrawal:', error);
        window.showCustomAlert('Error cancelling withdrawal');
    }
}

async function rejectWithdrawal() {
    const txId = document.getElementById('withdrawal-action-modal').getAttribute('data-tx-id');
    const adminUser = window.getCurrentUser();
    
    try {
        // Update transaction status to rejected (no refund)
        const { error: txError } = await window.supabase
            .from('transactions')
            .update({ 
                status: 'rejected',
                description: `Withdrawal rejected by admin ${adminUser.username}`
            })
            .eq('id', txId);
        
        if (txError) throw txError;
        
        // Log admin action
        await window.supabase
            .from('admin_logs')
            .insert([{
                admin_id: adminUser.id,
                action: 'withdrawal_reject',
                target_transaction_id: txId
            }]);
        
        window.showCustomAlert('Withdrawal rejected! Funds NOT returned to user.');
        document.getElementById('withdrawal-action-modal').style.display = 'none';
        
        // Refresh data
        await loadAllWithdrawals(document.getElementById('withdrawal-status-filter').value);
        await loadAdminOverview();
        
    } catch (error) {
        console.error('Error rejecting withdrawal:', error);
        window.showCustomAlert('Error rejecting withdrawal');
    }
}

async function showTransactionDetails(txId) {
    try {
        const { data: transaction, error } = await window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username, email)
            `)
            .eq('id', txId)
            .single();
        
        if (error) throw error;
        
        const date = new Date(transaction.created_at).toLocaleString();
        const isPositive = transaction.amount > 0;
        const amountColor = isPositive ? '#52c41a' : '#ff4d4f';
        
        let details = `
            <div style="color: #333;">
                <div class="detail-row">
                    <span class="detail-label">Transaction ID:</span>
                    <span class="detail-value">${transaction.id}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Date:</span>
                    <span class="detail-value">${date}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">User:</span>
                    <span class="detail-value">${transaction.user.username} (${transaction.user.email || 'No email'})</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Type:</span>
                    <span class="detail-value">${transaction.type}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Amount:</span>
                    <span class="detail-value" style="color: ${amountColor}; font-weight: bold;">${transaction.amount.toFixed(2)} USDT</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Status:</span>
                    <span class="detail-value">${transaction.status}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Description:</span>
                    <span class="detail-value">${transaction.description || 'N/A'}</span>
                </div>
        `;
        
        if (transaction.network) {
            details += `
                <div class="detail-row">
                    <span class="detail-label">Network:</span>
                    <span class="detail-value">${transaction.network}</span>
                </div>
            `;
        }
        
        if (transaction.withdrawal_address) {
            details += `
                <div class="detail-row">
                    <span class="detail-label">Withdrawal Address:</span>
                    <span class="detail-value" style="word-break: break-all;">${transaction.withdrawal_address}</span>
                </div>
            `;
        }
        
        details += '</div>';
        
        document.getElementById('transaction-details-content').innerHTML = details;
        document.getElementById('transaction-details-modal').style.display = 'flex';
        
    } catch (error) {
        console.error('Error loading transaction:', error);
        window.showCustomAlert('Error loading transaction details');
    }
}

async function showDepositDetails(depositId) {
    try {
        const { data: deposit, error } = await window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username, email)
            `)
            .eq('id', depositId)
            .single();
        
        if (error) throw error;
        
        const date = new Date(deposit.created_at).toLocaleString();
        
        let details = `
            <div style="color: #333;">
                <div class="detail-row">
                    <span class="detail-label">Deposit ID:</span>
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
                    <span class="detail-label">Status:</span>
                    <span class="detail-value">${deposit.status}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Network:</span>
                    <span class="detail-value">${deposit.network || 'TRC20'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Description:</span>
                    <span class="detail-value">${deposit.description || 'N/A'}</span>
                </div>
            </div>
        `;
        
        document.getElementById('deposit-details-content').innerHTML = details;
        document.getElementById('deposit-details-modal').style.display = 'flex';
        
    } catch (error) {
        console.error('Error loading deposit:', error);
        window.showCustomAlert('Error loading deposit details');
    }
}

function showManualDepositModal() {
    document.getElementById('manual-deposit-modal').style.display = 'flex';
}

async function saveManualDeposit() {
    const userId = document.getElementById('deposit-user-select').value;
    const amount = parseFloat(document.getElementById('manual-deposit-amount').value);
    const network = document.getElementById('manual-deposit-network').value;
    const txid = document.getElementById('manual-deposit-txid').value.trim();
    const notes = document.getElementById('manual-deposit-notes').value.trim();
    const adminUser = window.getCurrentUser();
    
    if (!userId || !amount || amount < 17) {
        window.showCustomAlert('Please select a user and enter a valid amount (min 17 USDT)');
        return;
    }
    
    try {
        // Get user current balance
        const { data: user, error: userError } = await window.supabase
            .from('users')
            .select('balance, username')
            .eq('id', userId)
            .single();
        
        if (userError) throw userError;
        
        const newBalance = user.balance + amount;
        
        // Update user balance
        const { error: balanceError } = await window.supabase
            .from('users')
            .update({ balance: newBalance })
            .eq('id', userId);
        
        if (balanceError) throw balanceError;
        
        // Create transaction record
        const description = notes ? 
            `Manual deposit by admin: ${notes}${txid ? ` | TXID: ${txid}` : ''}` :
            `Manual deposit by admin${txid ? ` | TXID: ${txid}` : ''}`;
        
        const { error: txError } = await window.supabase
            .from('transactions')
            .insert([{
                user_id: userId,
                type: 'deposit',
                amount: amount,
                status: 'completed',
                description: description,
                network: network
            }]);
        
        if (txError) throw txError;
        
        // Log admin action
        await window.supabase
            .from('admin_logs')
            .insert([{
                admin_id: adminUser.id,
                action: 'manual_deposit',
                details: JSON.stringify({
                    userId: userId,
                    username: user.username,
                    amount: amount,
                    network: network,
                    txid: txid,
                    notes: notes
                }),
                target_user_id: userId
            }]);
        
        window.showCustomAlert(`Manual deposit added successfully! New balance: ${newBalance.toFixed(2)} USDT`);
        
        // Reset form and close modal
        document.getElementById('manual-deposit-amount').value = '';
        document.getElementById('manual-deposit-txid').value = '';
        document.getElementById('manual-deposit-notes').value = '';
        document.getElementById('manual-deposit-modal').style.display = 'none';
        
        // Refresh data
        await loadAllDeposits(document.getElementById('deposit-period-filter').value);
        await loadAdminOverview();
        
    } catch (error) {
        console.error('Error adding manual deposit:', error);
        window.showCustomAlert('Error adding manual deposit: ' + error.message);
    }
}

function showAddUserModal() {
    document.getElementById('add-user-modal').style.display = 'flex';
}

async function saveNewUser() {
    const username = document.getElementById('new-username').value.trim();
    const email = document.getElementById('new-email').value.trim();
    const password = document.getElementById('new-password').value;
    const balance = parseFloat(document.getElementById('new-balance').value) || 0;
    const vipLevel = parseInt(document.getElementById('new-vip-level').value);
    const referrer = document.getElementById('new-referrer').value.trim();
    const adminUser = window.getCurrentUser();
    
    if (!username || !password) {
        window.showCustomAlert('Username and password are required');
        return;
    }
    
    if (username === 'admin') {
        window.showCustomAlert('Username "admin" is reserved');
        return;
    }
    
    try {
        // Check if username exists
        const { data: existingUser } = await window.supabase
            .from('users')
            .select('id')
            .eq('username', username)
            .maybeSingle();
        
        if (existingUser) {
            window.showCustomAlert('Username already exists');
            return;
        }
        
        // Generate user data
        const userId = window.GLY.generateUserId();
        const inviteCode = window.GLY.generateInviteCode();
        
        const userData = {
            id: userId,
            username: username,
            email: email || null,
            password: password,
            payment_password: password, // Same as login password for simplicity
            invite_code: inviteCode,
            referred_by: referrer || null,
            balance: balance,
            vip_level: vipLevel,
            signals_available: 3,
            created_at: new Date().toISOString()
        };
        
        // Insert new user
        const { error: userError } = await window.supabase
            .from('users')
            .insert([userData]);
        
        if (userError) throw userError;
        
        // Create referral record if referrer exists
        if (referrer) {
            const { data: referrerUser } = await window.supabase
                .from('users')
                .select('id')
                .eq('id', referrer)
                .or(`username.eq.${referrer}`)
                .maybeSingle();
            
            if (referrerUser) {
                await window.supabase
                    .from('referrals')
                    .insert([{
                        referrer_id: referrerUser.id,
                        referred_id: userId,
                        level: 1
                    }]);
            }
        }
        
        // Create initial transaction if balance > 0
        if (balance > 0) {
            await window.supabase
                .from('transactions')
                .insert([{
                    user_id: userId,
                    type: 'admin_adjustment',
                    amount: balance,
                    status: 'completed',
                    description: 'Initial balance setup by admin'
                }]);
        }
        
        // Log admin action
        await window.supabase
            .from('admin_logs')
            .insert([{
                admin_id: adminUser.id,
                action: 'user_create',
                details: JSON.stringify(userData),
                target_user_id: userId
            }]);
        
        window.showCustomAlert(`User ${username} created successfully! User ID: ${userId}`);
        
        // Reset form and close modal
        document.getElementById('new-username').value = '';
        document.getElementById('new-email').value = '';
        document.getElementById('new-password').value = '';
        document.getElementById('new-balance').value = '0';
        document.getElementById('add-user-modal').style.display = 'none';
        
        // Refresh data
        await loadAllUsers();
        await loadAdminOverview();
        await populateUserSelects();
        
    } catch (error) {
        console.error('Error creating user:', error);
        window.showCustomAlert('Error creating user: ' + error.message);
    }
}

async function saveSettings() {
    const adminUser = window.getCurrentUser();
    
    try {
        const settings = {
            registration_bonus: document.getElementById('reg-bonus').value,
            min_deposit: document.getElementById('min-deposit').value,
            min_withdrawal: document.getElementById('min-withdrawal').value,
            daily_signals: document.getElementById('daily-signals').value,
            signal_reset_hour: document.getElementById('signal-reset-hour').value
        };
        
        // Save settings to database (platform_settings table)
        for (const [key, value] of Object.entries(settings)) {
            const { error } = await window.supabase
                .from('platform_settings')
                .upsert({
                    key: key,
                    value: value,
                    updated_at: new Date().toISOString()
                });
            
            if (error) throw error;
        }
        
        // Log admin action
        await window.supabase
            .from('admin_logs')
            .insert([{
                admin_id: adminUser.id,
                action: 'settings_update',
                details: JSON.stringify(settings)
            }]);
        
        window.showCustomAlert('Settings saved successfully!');
        
    } catch (error) {
        console.error('Error saving settings:', error);
        window.showCustomAlert('Error saving settings');
    }
}

function exportData() {
    window.showCustomAlert('Export feature coming soon!');
}

function showSystemLogs() {
    window.showCustomAlert('System logs feature coming soon!');
}
