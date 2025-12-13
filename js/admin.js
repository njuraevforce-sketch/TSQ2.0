// Admin section - COMPACT & FULLY FUNCTIONAL - UPDATED DEPOSIT STATS & WITHDRAWAL VIEW
// Теперь проверяет администраторскую сессию через backend

export default function renderAdmin() {
    return `
        <div class="admin-container">
            <!-- Admin Header with Statistics -->
            <div class="card padding" style="background: rgba(0,0,0,0.3); margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                    <div>
                        <h2 style="color: white; margin-bottom: 5px; font-size: 18px;">Administrator Panel</h2>
                        <p style="color: #ccc; font-size: 11px;">Secure administrative interface</p>
                    </div>
                    <div class="admin-stats" style="display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap;">
                        <div class="admin-stat" style="min-width: 70px; padding: 8px;">
                            <div class="admin-stat-value" id="total-users" style="font-size: 18px;">0</div>
                            <div class="admin-stat-label" style="font-size: 10px;">Total Users</div>
                        </div>
                        <div class="admin-stat" style="min-width: 70px; padding: 8px;">
                            <div class="admin-stat-value" id="today-users" style="font-size: 18px;">0</div>
                            <div class="admin-stat-label" style="font-size: 10px;">Today Users</div>
                        </div>
                        <div class="admin-stat" style="min-width: 70px; padding: 8px;">
                            <div class="admin-stat-value" id="pending-withdrawals" style="font-size: 18px;">0</div>
                            <div class="admin-stat-label" style="font-size: 10px;">Pending WD</div>
                        </div>
                        <div class="admin-stat" style="min-width: 70px; padding: 8px;">
                            <div class="admin-stat-value" id="today-deposits" style="font-size: 18px;">0</div>
                            <div class="admin-stat-label" style="font-size: 10px;">Today $</div>
                        </div>
                        <div class="admin-stat" style="min-width: 70px; padding: 8px;">
                            <div class="admin-stat-value" id="total-deposits" style="font-size: 18px;">0</div>
                            <div class="admin-stat-label" style="font-size: 10px;">Total $</div>
                        </div>
                        <!-- NEW: Total Withdrawals Stat -->
                        <div class="admin-stat" style="min-width: 70px; padding: 8px;">
                            <div class="admin-stat-value" id="total-withdrawals" style="font-size: 18px;">0</div>
                            <div class="admin-stat-label" style="font-size: 10px;">Total WD</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Admin Navigation - Horizontal Scroll -->
            <div class="admin-nav" style="overflow-x: auto; padding-bottom: 5px; margin-bottom: 10px;">
                <div class="admin-nav-item active" data-tab="withdrawals" style="padding: 8px 12px; font-size: 12px;">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>Withdrawals</span>
                </div>
                <div class="admin-nav-item" data-tab="users" style="padding: 8px 12px; font-size: 12px;">
                    <i class="fas fa-users"></i>
                    <span>Users</span>
                </div>
                <div class="admin-nav-item" data-tab="deposits" style="padding: 8px 12px; font-size: 12px;">
                    <i class="fas fa-credit-card"></i>
                    <span>Deposits</span>
                </div>
                <div class="admin-nav-item" data-tab="referrals" style="padding: 8px 12px; font-size: 12px;">
                    <i class="fas fa-sitemap"></i>
                    <span>Referrals</span>
                </div>
                <div class="admin-nav-item" data-tab="transactions" style="padding: 8px 12px; font-size: 12px;">
                    <i class="fas fa-exchange-alt"></i>
                    <span>Transactions</span>
                </div>
                <div class="admin-nav-item" data-tab="settings" style="padding: 8px 12px; font-size: 12px;">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </div>
            </div>

            <!-- Tabs Content -->
            <div class="admin-tabs">
                <!-- Withdrawals Tab - UPDATED: No filtering, show all withdrawals -->
                <div class="admin-tab active" id="withdrawals-tab">
                    <div class="card padding" style="padding: 10px;">
                        <div class="tab-header" style="margin-bottom: 10px;">
                            <h3 style="color: white; font-size: 16px; margin: 0;">All Withdrawals</h3>
                            <div class="tab-actions" style="gap: 5px;">
                                <input type="text" 
                                       id="search-withdrawals" 
                                       placeholder="Search user/invite code..."
                                       class="admin-input-small"
                                       style="padding: 6px 8px; font-size: 12px; width: 120px;">
                                <button class="admin-btn-small" id="refresh-withdrawals" style="padding: 6px 8px; font-size: 12px;">
                                    <i class="fas fa-sync-alt"></i> Refresh
                                </button>
                            </div>
                        </div>
                        
                        <div class="withdrawals-table" id="withdrawals-table" style="max-height: 500px; overflow-y: auto;">
                            <div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">
                                <i class="fas fa-spinner fa-spin"></i> Loading...
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Users Tab - COMPACT -->
                <div class="admin-tab" id="users-tab">
                    <div class="card padding" style="padding: 10px;">
                        <div class="tab-header" style="margin-bottom: 10px;">
                            <h3 style="color: white; font-size: 16px; margin: 0;">All Users</h3>
                            <div class="tab-actions" style="gap: 5px;">
                                <input type="text" 
                                       id="search-users" 
                                       placeholder="Search user/email/invite..."
                                       class="admin-input-small"
                                       style="padding: 6px 8px; font-size: 12px; width: 140px;">
                                <button class="admin-btn-small" id="refresh-users" style="padding: 6px 8px; font-size: 12px;">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="users-table" id="users-table" style="max-height: 500px; overflow-y: auto;">
                            <div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">
                                <i class="fas fa-spinner fa-spin"></i> Loading...
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Deposits Tab - COMPACT -->
                <div class="admin-tab" id="deposits-tab">
                    <div class="card padding" style="padding: 10px;">
                        <div class="tab-header" style="margin-bottom: 10px;">
                            <h3 style="color: white; font-size: 16px; margin: 0;">Deposits (from deposit_transactions)</h3>
                            <div class="tab-actions" style="gap: 5px;">
                                <input type="text" 
                                       id="search-deposits" 
                                       placeholder="Search user/invite..."
                                       class="admin-input-small"
                                       style="padding: 6px 8px; font-size: 12px; width: 120px;">
                                <select id="deposit-period-filter" class="admin-select-small" style="padding: 6px 8px; font-size: 12px;">
                                    <option value="today">Today</option>
                                    <option value="week">Week</option>
                                    <option value="month">Month</option>
                                    <option value="all">All</option>
                                </select>
                                <button class="admin-btn-small" id="refresh-deposits" style="padding: 6px 8px; font-size: 12px;">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="deposits-table" id="deposits-table" style="max-height: 500px; overflow-y: auto;">
                            <div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">
                                <i class="fas fa-spinner fa-spin"></i> Loading...
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Referral Tree Tab -->
                <div class="admin-tab" id="referrals-tab">
                    <div class="card padding" style="padding: 10px;">
                        <div class="tab-header" style="margin-bottom: 10px;">
                            <h3 style="color: white; font-size: 16px; margin: 0;">Referral Tree</h3>
                            <div class="tab-actions" style="gap: 5px;">
                                <input type="text" 
                                       id="search-user-referrals" 
                                       placeholder="User ID/Username/Invite"
                                       class="admin-input-small"
                                       style="padding: 6px 8px; font-size: 12px; width: 140px;">
                                <button class="admin-btn-small" id="search-referrals-btn" style="padding: 6px 8px; font-size: 12px;">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="referral-tree-container" id="referral-tree-container" style="max-height: 500px; overflow-y: auto;">
                            <div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">
                                Enter user ID, username or invite code to view referral tree
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Transactions Tab - COMPACT -->
                <div class="admin-tab" id="transactions-tab">
                    <div class="card padding" style="padding: 10px;">
                        <div class="tab-header" style="margin-bottom: 10px;">
                            <h3 style="color: white; font-size: 16px; margin: 0;">Transactions (All types)</h3>
                            <div class="tab-actions" style="gap: 5px;">
                                <input type="text" 
                                       id="search-transactions" 
                                       placeholder="Search user/invite..."
                                       class="admin-input-small"
                                       style="padding: 6px 8px; font-size: 12px; width: 120px;">
                                <select id="transaction-type-filter" class="admin-select-small" style="padding: 6px 8px; font-size: 12px; min-width: 100px;">
                                    <option value="">All</option>
                                    <option value="deposit">Deposits</option>
                                    <option value="withdrawal">Withdrawals</option>
                                    <option value="quantification">Quantification</option>
                                    <option value="referral">Referral</option>
                                </select>
                                <button class="admin-btn-small" id="refresh-transactions" style="padding: 6px 8px; font-size: 12px;">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="transactions-table" id="transactions-table" style="max-height: 500px; overflow-y: auto;">
                            <div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">
                                <i class="fas fa-spinner fa-spin"></i> Loading...
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Settings Tab - COMPACT -->
                <div class="admin-tab" id="settings-tab">
                    <div class="card padding" style="padding: 10px;">
                        <div class="tab-header" style="margin-bottom: 10px;">
                            <h3 style="color: white; font-size: 16px; margin: 0;">Settings</h3>
                            <div class="tab-actions">
                                <button class="admin-btn-small" id="load-settings" style="padding: 6px 8px; font-size: 12px;">
                                    <i class="fas fa-download"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="settings-grid" style="display: grid; grid-template-columns: 1fr; gap: 10px;">
                            <div class="setting-group" style="padding: 10px;">
                                <label style="color: #fff; font-size: 12px;">Min Withdrawal</label>
                                <input type="number" 
                                       id="min-withdrawal" 
                                       value="20" 
                                       class="admin-input"
                                       style="padding: 6px; font-size: 12px;"
                                       step="0.01">
                                <div style="font-size: 10px; color: #ccc;">USDT</div>
                            </div>
                            
                            <div class="setting-group" style="padding: 10px;">
                                <label style="color: #fff; font-size: 12px;">Min Deposit</label>
                                <input type="number" 
                                       id="min-deposit" 
                                       value="17" 
                                       class="admin-input"
                                       style="padding: 6px; font-size: 12px;"
                                       step="0.01">
                                <div style="font-size: 10px; color: #ccc;">USDT</div>
                            </div>
                            
                            <div class="setting-group" style="padding: 10px;">
                                <label style="color: #fff; font-size: 12px;">Daily Signals</label>
                                <input type="number" 
                                       id="daily-signals" 
                                       value="3" 
                                       class="admin-input"
                                       style="padding: 6px; font-size: 12px;">
                                <div style="font-size: 10px; color: #ccc;">per day</div>
                            </div>
                        </div>
                        
                        <div style="margin-top: 15px; display: flex; gap: 8px;">
                            <button class="admin-btn" id="save-settings" style="padding: 8px 12px; font-size: 12px;">
                                <i class="fas fa-save"></i> Save
                            </button>
                            <button class="admin-btn" id="reset-settings" style="padding: 8px 12px; font-size: 12px; background: #f9ae3d;">
                                <i class="fas fa-undo"></i> Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Кнопка выхода администратора -->
            <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                <button id="admin-logout-btn" 
                        style="background: #ff6b6b; color: white; border: none; padding: 10px 20px; 
                               border-radius: 8px; font-size: 14px; cursor: pointer; width: 100%; max-width: 300px;">
                    <i class="fas fa-sign-out-alt"></i> Logout Administrator
                </button>
                <div style="color: #ccc; font-size: 11px; margin-top: 10px;">
                    Secure administrator session
                </div>
            </div>
        </div>

        <!-- User Edit Modal - COMPACT with FIXED COLORS -->
        <div class="pop-overlay" id="edit-user-modal" style="display: none;">
            <div class="pop-content" style="max-width: 95%; margin: 10px; max-height: 90vh; overflow-y: auto; background: white; border: 1px solid #ddd;">
                <form id="edit-user-form" onsubmit="return false;">
                    <div class="pop-header" style="padding: 10px 15px; font-size: 14px; background: #36454f; color: white;">Edit User</div>
                    <div class="pop-body" style="padding: 10px; background: white; color: #333;">
                        <div class="admin-form-grid" style="display: grid; grid-template-columns: 1fr; gap: 8px;">
                            <div class="form-group">
                                <label style="color: #333; font-size: 12px; font-weight: bold;">Username</label>
                                <input type="text" id="edit-username" class="admin-input" readonly 
                                       style="padding: 8px; font-size: 12px; background: #f5f5f5; color: #333; border: 1px solid #ccc; border-radius: 4px; width: 100%;">
                            </div>
                            <div class="form-group">
                                <label style="color: #333; font-size: 12px; font-weight: bold;">Balance (USDT)</label>
                                <input type="number" id="edit-balance" class="admin-input" step="0.01" 
                                       style="padding: 8px; font-size: 12px; background: #f5f5f5; color: #333; border: 1px solid #ccc; border-radius: 4px; width: 100%;">
                            </div>
                            <div class="form-group">
                                <label style="color: #333; font-size: 12px; font-weight: bold;">VIP Level</label>
                                <select id="edit-vip-level" class="admin-input" 
                                       style="padding: 8px; font-size: 12px; background: #f5f5f5; color: #333; border: 1px solid #ccc; border-radius: 4px; width: 100%;">
                                    <option value="1">VIP 1</option>
                                    <option value="2">VIP 2</option>
                                    <option value="3">VIP 3</option>
                                    <option value="4">VIP 4</option>
                                    <option value="5">VIP 5</option>
                                    <option value="6">VIP 6</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label style="color: #333; font-size: 12px; font-weight: bold;">Signals</label>
                                <input type="number" id="edit-signals" class="admin-input" 
                                       style="padding: 8px; font-size: 12px; background: #f5f5f5; color: #333; border: 1px solid #ccc; border-radius: 4px; width: 100%;">
                            </div>
                        </div>
                        
                        <div style="margin-top: 15px; display: flex; gap: 8px; flex-wrap: wrap;">
                            <button type="button" class="admin-btn-small" id="add-balance-btn" style="padding: 8px 12px; font-size: 11px; background: #52c41a; color: white; border: none; border-radius: 4px; cursor: pointer;">
                                <i class="fas fa-plus"></i> Add Balance
                            </button>
                            <button type="button" class="admin-btn-small" id="subtract-balance-btn" style="padding: 8px 12px; font-size: 11px; background: #ff4d4f; color: white; border: none; border-radius: 4px; cursor: pointer;">
                                <i class="fas fa-minus"></i> Subtract
                            </button>
                            <button type="button" class="admin-btn-small" id="view-user-details" style="padding: 8px 12px; font-size: 11px; background: #1890ff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                                <i class="fas fa-eye"></i> Details
                            </button>
                        </div>
                    </div>
                    <div class="pop-footer" style="padding: 10px; display: flex; justify-content: space-between; background: #f5f5f5; border-top: 1px solid #ddd;">
                        <button type="submit" id="save-user-changes" style="padding: 8px 15px; font-size: 12px; background: #4e7771; color: white; border: none; border-radius: 4px; cursor: pointer;">Save</button>
                        <button type="button" id="cancel-edit-user" style="padding: 8px 15px; font-size: 12px; background: #666; color: white; border: none; border-radius: 4px; cursor: pointer;">Cancel</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Quick Action Modal -->
        <div class="pop-overlay" id="quick-action-modal" style="display: none;">
            <div class="pop-content" style="max-width: 95%; margin: 10px;">
                <div class="pop-header" style="padding: 10px 15px; font-size: 14px;" id="quick-action-title">Quick Action</div>
                <div class="pop-body" style="padding: 10px;">
                    <div id="quick-action-content">
                        Loading...
                    </div>
                </div>
                <div class="pop-footer" style="padding: 10px; display: flex; gap: 8px;">
                    <button id="confirm-quick-action" style="padding: 8px 15px; font-size: 12px; background: #4e7771;">Confirm</button>
                    <button id="cancel-quick-action" style="padding: 8px 15px; font-size: 12px; background: #666;">Cancel</button>
                </div>
            </div>
        </div>

        <!-- Add/Subtract Balance Modal -->
        <div class="pop-overlay" id="balance-modal" style="display: none;">
            <div class="pop-content" style="max-width: 95%; margin: 10px;">
                <div class="pop-header" style="padding: 10px 15px; font-size: 14px;" id="balance-modal-title">Adjust Balance</div>
                <div class="pop-body" style="padding: 10px;">
                    <div style="margin-bottom: 15px;">
                        <label style="color: #333; font-size: 12px; display: block; margin-bottom: 5px;">Amount (USDT)</label>
                        <input type="number" id="adjust-amount" class="admin-input" 
                               style="padding: 8px; font-size: 14px; width: 100%;"
                               placeholder="Enter amount" step="0.01" min="0.01">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label style="color: #333; font-size: 12px; display: block; margin-bottom: 5px;">Description</label>
                        <textarea id="adjust-description" class="admin-input" 
                                  style="padding: 8px; font-size: 12px; width: 100%; height: 60px;"
                                  placeholder="Reason for adjustment"></textarea>
                    </div>
                </div>
                <div class="pop-footer" style="padding: 10px; display: flex; gap: 8px;">
                    <button id="confirm-balance-adjust" style="padding: 8px 15px; font-size: 12px; background: #4e7771;">Confirm</button>
                    <button id="cancel-balance-adjust" style="padding: 8px 15px; font-size: 12px; background: #666;">Cancel</button>
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    document.body.classList.add('no-tabbar');
    
    // Новая проверка через сессию администратора
    const adminUser = window.checkAdminSession ? window.checkAdminSession() : null;
    if (!adminUser) {
        window.showCustomAlert('Administrator access required. Please login through backend.');
        setTimeout(() => {
            window.showSection('backend');
        }, 2000);
        return false;
    }
    
    console.log('Admin session verified:', adminUser.username);
    
    // Load admin data
    await loadAdminData();
    
    // Setup event listeners
    setupEventListeners();
    
    // Load initial tab
    loadTab('withdrawals');
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
    
    // Search
    document.getElementById('search-users').addEventListener('input', debounce(loadUsers, 500));
    document.getElementById('search-withdrawals').addEventListener('input', debounce(loadWithdrawals, 500));
    document.getElementById('search-deposits').addEventListener('input', debounce(loadDeposits, 500));
    document.getElementById('search-transactions').addEventListener('input', debounce(loadTransactions, 500));
    
    document.getElementById('search-referrals-btn').addEventListener('click', () => {
        const searchTerm = document.getElementById('search-user-referrals').value;
        if (searchTerm) {
            loadReferralTree(searchTerm);
        }
    });
    
    // Enter key for referrals search
    document.getElementById('search-user-referrals').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = document.getElementById('search-user-referrals').value;
            if (searchTerm) {
                loadReferralTree(searchTerm);
            }
        }
    });
    
    // Filters
    document.getElementById('deposit-period-filter').addEventListener('change', loadDeposits);
    document.getElementById('transaction-type-filter').addEventListener('change', loadTransactions);
    
    // Settings
    document.getElementById('save-settings').addEventListener('click', saveSettings);
    document.getElementById('reset-settings').addEventListener('click', resetSettings);
    document.getElementById('load-settings').addEventListener('click', loadCurrentSettings);
    
    // Logout button
    document.getElementById('admin-logout-btn').addEventListener('click', () => {
        if (confirm('Logout from administrator session?')) {
            if (window.adminLogout) {
                window.adminLogout();
            } else {
                window.showCustomAlert('Logging out...');
                setTimeout(() => {
                    window.showSection('login');
                }, 1000);
            }
        }
    });
    
    // Modal close buttons
    document.getElementById('cancel-edit-user').addEventListener('click', () => {
        document.getElementById('edit-user-modal').style.display = 'none';
    });
    
    document.getElementById('cancel-quick-action').addEventListener('click', () => {
        document.getElementById('quick-action-modal').style.display = 'none';
    });
    
    document.getElementById('cancel-balance-adjust').addEventListener('click', () => {
        document.getElementById('balance-modal').style.display = 'none';
    });
    
    // Balance adjustment buttons
    document.getElementById('add-balance-btn').addEventListener('click', () => {
        const userId = document.getElementById('edit-user-form').getAttribute('data-user-id');
        if (userId) {
            showBalanceModal('add', userId);
        }
    });
    
    document.getElementById('subtract-balance-btn').addEventListener('click', () => {
        const userId = document.getElementById('edit-user-form').getAttribute('data-user-id');
        if (userId) {
            showBalanceModal('subtract', userId);
        }
    });
    
    document.getElementById('view-user-details').addEventListener('click', () => {
        const userId = document.getElementById('edit-user-form').getAttribute('data-user-id');
        if (userId) {
            showUserDetails(userId);
        }
    });
    
    // Confirm balance adjustment
    document.getElementById('confirm-balance-adjust').addEventListener('click', processBalanceAdjustment);
    
    // Save user changes
    document.getElementById('save-user-changes').addEventListener('click', async (e) => {
        e.preventDefault();
        const userId = document.getElementById('edit-user-form').getAttribute('data-user-id');
        if (userId) {
            await saveUserChanges(userId);
        }
    });
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
        
        // Load today's registered users
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const todayISO = today.toISOString();
        
        const { count: todayUsers } = await window.supabase
            .from('users')
            .select('*', { count: 'exact', head: true })
            .gte('created_at', todayISO);
        
        // Load pending withdrawals from transactions table
        const { count: pendingWithdrawals } = await window.supabase
            .from('transactions')
            .select('*', { count: 'exact', head: true })
            .eq('type', 'withdrawal')
            .eq('status', 'pending');
        
        // Load total withdrawals amount (all statuses)
        const { data: allWithdrawals, error: withdrawalsError } = await window.supabase
            .from('transactions')
            .select('amount')
            .eq('type', 'withdrawal');
        
        let totalWithdrawalsAmount = 0;
        if (!withdrawalsError && allWithdrawals) {
            totalWithdrawalsAmount = allWithdrawals.reduce((sum, w) => sum + Math.abs(w.amount || 0), 0);
        }
        
        // Load today's deposits from deposit_transactions table
        const startOfToday = new Date();
        startOfToday.setUTCHours(0, 0, 0, 0);
        
        const startOfTomorrow = new Date(startOfToday);
        startOfTomorrow.setUTCDate(startOfTomorrow.getUTCDate() + 1);
        
        const { data: todayDeposits, error: todayError } = await window.supabase
            .from('deposit_transactions')
            .select('amount')
            .eq('status', 'processed')
            .gte('created_at', startOfToday.toISOString())
            .lt('created_at', startOfTomorrow.toISOString());
        
        if (todayError) {
            console.error('Error loading today deposits:', todayError);
        }
        
        const todayDepositsAmount = todayDeposits?.reduce((sum, d) => sum + (d.amount || 0), 0) || 0;
        
        // Load total deposits from deposit_transactions table
        const { data: allDeposits, error: allError } = await window.supabase
            .from('deposit_transactions')
            .select('amount')
            .eq('status', 'processed');
        
        if (allError) {
            console.error('Error loading all deposits:', allError);
        }
        
        const totalDepositsAmount = allDeposits?.reduce((sum, d) => sum + (d.amount || 0), 0) || 0;
        
        // Update header stats
        document.getElementById('total-users').textContent = totalUsers || 0;
        document.getElementById('today-users').textContent = todayUsers || 0;
        document.getElementById('pending-withdrawals').textContent = pendingWithdrawals || 0;
        document.getElementById('today-deposits').textContent = todayDepositsAmount.toFixed(2);
        document.getElementById('total-deposits').textContent = totalDepositsAmount.toFixed(2);
        document.getElementById('total-withdrawals').textContent = totalWithdrawalsAmount.toFixed(2);
        
    } catch (error) {
        console.error('Error loading admin data:', error);
        // Установить дефолтные значения при ошибке
        document.getElementById('total-users').textContent = '0';
        document.getElementById('today-users').textContent = '0';
        document.getElementById('pending-withdrawals').textContent = '0';
        document.getElementById('today-deposits').textContent = '0.00';
        document.getElementById('total-deposits').textContent = '0.00';
        document.getElementById('total-withdrawals').textContent = '0.00';
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
            // Wait for user input
            break;
        case 'transactions':
            loadTransactions();
            break;
        case 'settings':
            loadCurrentSettings();
            break;
    }
}

async function loadWithdrawals() {
    try {
        const searchTerm = document.getElementById('search-withdrawals').value;
        
        let query = window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username, email, balance, invite_code)
            `)
            .eq('type', 'withdrawal')
            .order('created_at', { ascending: false });
        
        if (searchTerm) {
            // Search by user username, email, or invite code
            const { data: users } = await window.supabase
                .from('users')
                .select('id')
                .or(`username.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%,invite_code.ilike.%${searchTerm}%`);
            
            if (users && users.length > 0) {
                const userIds = users.map(u => u.id);
                query = query.in('user_id', userIds);
            } else {
                // If no users found with search term, return empty
                document.getElementById('withdrawals-table').innerHTML = 
                    '<div style="color: #ccc; text-align: center; padding: 30px; font-size: 12px;">No withdrawals found for this search</div>';
                return;
            }
        }
        
        const { data: withdrawals, error } = await query;
        
        if (error) throw error;
        
        const container = document.getElementById('withdrawals-table');
        let html = '';
        
        if (withdrawals && withdrawals.length > 0) {
            // Card view for mobile
            withdrawals.forEach(tx => {
                const date = new Date(tx.created_at);
                const timeStr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const dateStr = date.toLocaleDateString();
                const amount = Math.abs(tx.amount);
                
                const statusColors = {
                    'pending': '#f9ae3d',
                    'completed': '#52c41a',
                    'cancelled': '#ff4d4f'
                };
                
                html += `
                    <div class="withdrawal-card" style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 10px; margin-bottom: 8px; border-left: 3px solid ${statusColors[tx.status] || '#ccc'};">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                            <div>
                                <div style="font-weight: bold; color: white; font-size: 13px;">${tx.user.username}</div>
                                <div style="color: #ccc; font-size: 10px;">${dateStr} ${timeStr}</div>
                                <div style="color: #999; font-size: 9px;">Invite: ${tx.user.invite_code || 'N/A'}</div>
                            </div>
                            <div style="text-align: right;">
                                <div style="color: #ff4d4f; font-weight: bold; font-size: 14px;">${amount.toFixed(2)} USDT</div>
                                <div style="color: ${statusColors[tx.status] || '#ccc'}; font-size: 10px; font-weight: bold;">${tx.status.toUpperCase()}</div>
                            </div>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px; font-size: 11px;">
                            <div>
                                <div style="color: #999;">Network:</div>
                                <div style="color: white;">${tx.network || 'TRC20'}</div>
                            </div>
                            <div>
                                <div style="color: #999;">User Balance:</div>
                                <div style="color: #f9ae3d;">${tx.user.balance.toFixed(2)} USDT</div>
                            </div>
                        </div>
                        
                        <!-- UPDATED: Full address with copy button -->
                        <div style="font-size: 10px; color: #ccc; margin-bottom: 10px; padding: 8px; background: rgba(0,0,0,0.2); border-radius: 5px; word-break: break-all;">
                            <div style="color: #999; font-size: 9px; margin-bottom: 3px;">Withdrawal Address:</div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span id="address-${tx.id}">${tx.withdrawal_address || 'N/A'}</span>
                                ${tx.withdrawal_address ? `
                                    <button class="copy-full-address-btn" data-address="${tx.withdrawal_address}" 
                                            style="background: #4e7771; color: white; border: none; border-radius: 3px; padding: 3px 8px; font-size: 9px; cursor: pointer; margin-left: 8px; flex-shrink: 0;">
                                        <i class="fas fa-copy"></i> Copy
                                    </button>
                                ` : ''}
                            </div>
                        </div>
                        
                        <div style="color: #ccc; font-size: 10px; margin-bottom: 8px; word-break: break-all;">
                            <div style="color: #999; font-size: 9px;">TX Hash:</div>
                            ${tx.tx_hash || 'N/A'}
                        </div>
                `;
                
                if (tx.status === 'pending') {
                    html += `
                        <div style="display: flex; gap: 5px;">
                            <button class="approve-btn" data-id="${tx.id}" data-user-id="${tx.user_id}" data-amount="${amount}" 
                                    style="flex: 1; background: #52c41a; color: white; border: none; padding: 6px; border-radius: 4px; font-size: 11px; cursor: pointer;">
                                <i class="fas fa-check"></i> Approve
                            </button>
                            <button class="reject-btn" data-id="${tx.id}" data-user-id="${tx.user_id}" data-amount="${amount}" 
                                    style="flex: 1; background: #ff4d4f; color: white; border: none; padding: 6px; border-radius: 4px; font-size: 11px; cursor: pointer;">
                                <i class="fas fa-times"></i> Reject
                            </button>
                        </div>
                    `;
                } else {
                    html += `
                        <div style="color: #ccc; font-size: 10px; text-align: center; padding: 5px; background: rgba(0,0,0,0.1); border-radius: 4px;">
                            ${tx.description || 'No description'}
                        </div>
                    `;
                }
                
                html += `</div>`;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 30px; font-size: 12px;">No withdrawals found</div>';
        }
        
        container.innerHTML = html;
        
        // Add event listeners for approve/reject buttons
        container.querySelectorAll('.approve-btn').forEach(btn => {
            btn.addEventListener('click', async function() {
                const txId = this.getAttribute('data-id');
                const userId = this.getAttribute('data-user-id');
                const amount = parseFloat(this.getAttribute('data-amount'));
                
                if (confirm(`Approve withdrawal of ${amount} USDT?`)) {
                    await approveWithdrawal(txId, userId, amount);
                }
            });
        });
        
        container.querySelectorAll('.reject-btn').forEach(btn => {
            btn.addEventListener('click', async function() {
                const txId = this.getAttribute('data-id');
                const userId = this.getAttribute('data-user-id');
                const amount = parseFloat(this.getAttribute('data-amount'));
                const reason = prompt('Reason for rejection (optional):', '');
                
                if (confirm(`Reject withdrawal of ${amount} USDT? Funds will be returned to user balance.`)) {
                    await rejectWithdrawal(txId, userId, amount, reason);
                }
            });
        });
        
        // Add event listeners for copy address buttons
        container.querySelectorAll('.copy-full-address-btn').forEach(btn => {
            btn.addEventListener('click', async function() {
                const address = this.getAttribute('data-address');
                if (address) {
                    try {
                        await navigator.clipboard.writeText(address);
                        window.showCustomAlert('✅ Address copied to clipboard!');
                        // Visual feedback
                        const originalText = this.innerHTML;
                        this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                        this.style.background = '#52c41a';
                        setTimeout(() => {
                            this.innerHTML = originalText;
                            this.style.background = '#4e7771';
                        }, 2000);
                    } catch (err) {
                        console.error('Failed to copy address:', err);
                        window.showCustomAlert('❌ Failed to copy address');
                    }
                }
            });
        });
        
    } catch (error) {
        console.error('Error loading withdrawals:', error);
        document.getElementById('withdrawals-table').innerHTML = 
            '<div style="color: #ff4d4f; text-align: center; padding: 30px; font-size: 12px;">Error loading withdrawals</div>';
    }
}

async function approveWithdrawal(txId, userId, amount) {
    try {
        // Update transaction status
        const { error: txError } = await window.supabase
            .from('transactions')
            .update({ 
                status: 'completed',
                description: `Withdrawal approved by admin - ${amount} USDT sent`
            })
            .eq('id', txId);
        
        if (txError) throw txError;
        
        window.showCustomAlert(`✅ Withdrawal of ${amount} USDT approved!`);
        
        // Reload data
        loadWithdrawals();
        loadAdminData();
        
    } catch (error) {
        console.error('Error approving withdrawal:', error);
        window.showCustomAlert('❌ Error approving withdrawal');
    }
}

async function rejectWithdrawal(txId, userId, amount, reason = '') {
    try {
        // Return funds to user balance
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
        
        // Update transaction status
        const reasonText = reason ? ` - Reason: ${reason}` : '';
        const { error: txError } = await window.supabase
            .from('transactions')
            .update({ 
                status: 'cancelled',
                description: `Withdrawal rejected by admin${reasonText} - Funds returned`
            })
            .eq('id', txId);
        
        if (txError) throw txError;
        
        window.showCustomAlert(`❌ Withdrawal rejected! ${amount} USDT returned to user balance.`);
        
        // Reload data
        loadWithdrawals();
        loadAdminData();
        
    } catch (error) {
        console.error('Error rejecting withdrawal:', error);
        window.showCustomAlert('❌ Error rejecting withdrawal');
    }
}

async function loadUsers() {
    try {
        const searchTerm = document.getElementById('search-users').value;
        
        let query = window.supabase
            .from('users')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(50);
        
        if (searchTerm) {
            // Search by username, email, id, or invite_code
            query = query.or(`username.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%,id.ilike.%${searchTerm}%,invite_code.ilike.%${searchTerm}%`);
        }
        
        const { data: users, error } = await query;
        
        if (error) throw error;
        
        const container = document.getElementById('users-table');
        let html = '';
        
        if (users && users.length > 0) {
            // Card view for mobile
            users.forEach(user => {
                const date = new Date(user.created_at).toLocaleDateString();
                const vipColors = {
                    1: '#4e7771',
                    2: '#5d8c85', 
                    3: '#6ca09a',
                    4: '#7bb5ae',
                    5: '#8ac9c3',
                    6: '#99ddd7'
                };
                
                html += `
                    <div class="user-card" style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 10px; margin-bottom: 8px; border-left: 3px solid ${vipColors[user.vip_level] || '#4e7771'};">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                            <div style="flex: 1;">
                                <div style="font-weight: bold; color: white; font-size: 13px;">${user.username}</div>
                                <div style="color: #ccc; font-size: 10px; margin-top: 2px;">${user.email || 'No email'}</div>
                                <div style="color: #999; font-size: 9px; margin-top: 2px;">ID: ${user.id.substring(0, 8)}...</div>
                                <div style="color: #666; font-size: 9px; margin-top: 2px;">Invite: ${user.invite_code || 'N/A'}</div>
                            </div>
                            <div style="text-align: right;">
                                <div style="color: #f9ae3d; font-weight: bold; font-size: 14px;">${user.balance.toFixed(2)} USDT</div>
                                <div style="color: ${vipColors[user.vip_level] || '#4e7771'}; font-size: 10px; font-weight: bold;">VIP ${user.vip_level}</div>
                            </div>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 10px; font-size: 11px;">
                            <div>
                                <div style="color: #999;">Signals:</div>
                                <div style="color: white;">${user.signals_available}</div>
                            </div>
                            <div>
                                <div style="color: #999;">Joined:</div>
                                <div style="color: white;">${date}</div>
                            </div>
                            <div>
                                <div style="color: #999;">Status:</div>
                                <div style="color: ${user.balance >= 20 ? '#52c41a' : '#ccc'};">${user.balance >= 20 ? 'Active' : 'Inactive'}</div>
                            </div>
                        </div>
                        
                        <div style="display: flex; gap: 5px;">
                            <button class="edit-user-btn" data-id="${user.id}" 
                                    style="flex: 1; background: #4e7771; color: white; border: none; padding: 6px; border-radius: 4px; font-size: 11px; cursor: pointer;">
                                <i class="fas fa-edit"></i> Edit
                            </button>
                            <button class="deposit-user-btn" data-id="${user.id}" 
                                    style="flex: 1; background: #52c41a; color: white; border: none; padding: 6px; border-radius: 4px; font-size: 11px; cursor: pointer;">
                                <i class="fas fa-plus"></i> Add $
                            </button>
                            <button class="withdraw-user-btn" data-id="${user.id}" 
                                    style="flex: 1; background: #ff4d4f; color: white; border: none; padding: 6px; border-radius: 4px; font-size: 11px; cursor: pointer;">
                                <i class="fas fa-minus"></i> Subtract
                            </button>
                        </div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 30px; font-size: 12px;">No users found</div>';
        }
        
        container.innerHTML = html;
        
        // Add event listeners
        container.querySelectorAll('.edit-user-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const userId = this.getAttribute('data-id');
                showEditUserModal(userId);
            });
        });
        
        container.querySelectorAll('.deposit-user-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const userId = this.getAttribute('data-id');
                showQuickDepositModal(userId);
            });
        });
        
        container.querySelectorAll('.withdraw-user-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const userId = this.getAttribute('data-id');
                showQuickWithdrawModal(userId);
            });
        });
        
    } catch (error) {
        console.error('Error loading users:', error);
        document.getElementById('users-table').innerHTML = 
            '<div style="color: #ff4d4f; text-align: center; padding: 30px; font-size: 12px;">Error loading users</div>';
    }
}

async function loadDeposits() {
    try {
        const periodFilter = document.getElementById('deposit-period-filter').value;
        const searchTerm = document.getElementById('search-deposits').value;
        
        let query = window.supabase
            .from('deposit_transactions')
            .select(`
                *,
                user:users(username, email, invite_code)
            `)
            .order('created_at', { ascending: false })
            .limit(50);
        
        // Apply period filter
        const now = new Date();
        let startDate = new Date(0);
        
        switch(periodFilter) {
            case 'today':
                startDate = new Date();
                startDate.setUTCHours(0, 0, 0, 0);
                break;
            case 'week':
                startDate = new Date();
                startDate.setUTCDate(startDate.getUTCDate() - 7);
                break;
            case 'month':
                startDate = new Date();
                startDate.setUTCMonth(startDate.getUTCMonth() - 1);
                break;
            case 'all':
                // No date filter
                break;
        }
        
        if (periodFilter !== 'all') {
            query = query.gte('created_at', startDate.toISOString());
        }
        
        if (searchTerm) {
            // Search by user username, email, or invite code
            const { data: users } = await window.supabase
                .from('users')
                .select('id')
                .or(`username.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%,invite_code.ilike.%${searchTerm}%`);
            
            if (users && users.length > 0) {
                const userIds = users.map(u => u.id);
                query = query.in('user_id', userIds);
            } else {
                // If no users found with search term, return empty
                document.getElementById('deposits-table').innerHTML = 
                    '<div style="color: #ccc; text-align: center; padding: 30px; font-size: 12px;">No deposits found for this search</div>';
                return;
            }
        }
        
        const { data: deposits, error } = await query;
        
        if (error) throw error;
        
        const container = document.getElementById('deposits-table');
        let html = '';
        
        if (deposits && deposits.length > 0) {
            // Card view for mobile
            deposits.forEach(deposit => {
                const date = new Date(deposit.created_at);
                const timeStr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const dateStr = date.toLocaleDateString();
                
                const statusColors = {
                    'pending': '#f9ae3d',
                    'confirmed': '#1890ff',
                    'processed': '#52c41a',
                    'cancelled': '#ff4d4f'
                };
                
                html += `
                    <div class="deposit-card" style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 10px; margin-bottom: 8px; border-left: 3px solid ${statusColors[deposit.status] || '#ccc'};">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                            <div>
                                <div style="font-weight: bold; color: white; font-size: 13px;">${deposit.user.username}</div>
                                <div style="color: #ccc; font-size: 10px;">${dateStr} ${timeStr}</div>
                                <div style="color: #999; font-size: 9px;">Invite: ${deposit.user.invite_code || 'N/A'}</div>
                            </div>
                            <div style="text-align: right;">
                                <div style="color: #52c41a; font-weight: bold; font-size: 14px;">+${deposit.amount.toFixed(2)} USDT</div>
                                <div style="color: ${statusColors[deposit.status] || '#ccc'}; font-size: 10px; font-weight: bold;">${deposit.status.toUpperCase()}</div>
                            </div>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px; font-size: 11px;">
                            <div>
                                <div style="color: #999;">Network:</div>
                                <div style="color: white;">${deposit.network || 'TRC20'}</div>
                            </div>
                            <div>
                                <div style="color: #999;">TX Hash:</div>
                                <div style="color: #ccc; font-size: 9px;">${deposit.tx_hash.substring(0, 12)}...</div>
                            </div>
                        </div>
                        
                        <div style="font-size: 10px; color: #ccc; word-break: break-all;">
                            Status: ${deposit.status}
                        </div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 30px; font-size: 12px;">No deposits found</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading deposits:', error);
        document.getElementById('deposits-table').innerHTML = 
            '<div style="color: #ff4d4f; text-align: center; padding: 30px; font-size: 12px;">Error loading deposits</div>';
    }
}

async function loadTransactions() {
    try {
        const typeFilter = document.getElementById('transaction-type-filter').value;
        const searchTerm = document.getElementById('search-transactions').value;
        
        let query = window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username, invite_code)
            `)
            .order('created_at', { ascending: false })
            .limit(50);
        
        if (typeFilter) {
            query = query.eq('type', typeFilter);
        }
        
        if (searchTerm) {
            // Search by user username or invite code
            const { data: users } = await window.supabase
                .from('users')
                .select('id')
                .or(`username.ilike.%${searchTerm}%,invite_code.ilike.%${searchTerm}%`);
            
            if (users && users.length > 0) {
                const userIds = users.map(u => u.id);
                query = query.in('user_id', userIds);
            } else {
                // If no users found with search term, return empty
                document.getElementById('transactions-table').innerHTML = 
                    '<div style="color: #ccc; text-align: center; padding: 30px; font-size: 12px;">No transactions found for this search</div>';
                return;
            }
        }
        
        const { data: transactions, error } = await query;
        
        if (error) throw error;
        
        const container = document.getElementById('transactions-table');
        let html = '';
        
        if (transactions && transactions.length > 0) {
            // Card view for mobile
            transactions.forEach(tx => {
                const date = new Date(tx.created_at);
                const timeStr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const dateStr = date.toLocaleDateString();
                
                const isPositive = tx.amount > 0;
                const amountColor = isPositive ? '#52c41a' : '#ff4d4f';
                
                const statusColors = {
                    'pending': '#f9ae3d',
                    'completed': '#52c41a',
                    'confirmed': '#1890ff',
                    'cancelled': '#ff4d4f'
                };
                
                const typeColors = {
                    'deposit': '#1890ff',
                    'withdrawal': '#ff4d4f',
                    'quantification': '#722ed1',
                    'referral': '#fa8c16',
                    'bonus': '#52c41a'
                };
                
                html += `
                    <div class="transaction-card" style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 10px; margin-bottom: 8px; border-left: 3px solid ${typeColors[tx.type] || '#ccc'};">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                            <div>
                                <div style="font-weight: bold; color: white; font-size: 13px;">${tx.user.username}</div>
                                <div style="color: #ccc; font-size: 10px;">${dateStr} ${timeStr}</div>
                                <div style="color: #999; font-size: 9px;">Invite: ${tx.user.invite_code || 'N/A'}</div>
                            </div>
                            <div style="text-align: right;">
                                <div style="color: ${amountColor}; font-weight: bold; font-size: 14px;">${isPositive ? '+' : ''}${tx.amount.toFixed(2)} USDT</div>
                                <div style="color: ${statusColors[tx.status] || '#ccc'}; font-size: 10px; font-weight: bold;">${tx.status.toUpperCase()}</div>
                            </div>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px; font-size: 11px;">
                            <div>
                                <div style="color: #999;">Type:</div>
                                <div style="color: ${typeColors[tx.type] || '#ccc'}; font-weight: bold;">${tx.type.toUpperCase()}</div>
                            </div>
                            <div>
                                <div style="color: #999;">Network:</div>
                                <div style="color: white;">${tx.network || 'N/A'}</div>
                            </div>
                        </div>
                        
                        <div style="font-size: 10px; color: #ccc;">
                            ${tx.description || ''}
                        </div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 30px; font-size: 12px;">No transactions found</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading transactions:', error);
        document.getElementById('transactions-table').innerHTML = 
            '<div style="color: #ff4d4f; text-align: center; padding: 30px; font-size: 12px;">Error loading transactions</div>';
    }
}

async function loadReferralTree(userId) {
    try {
        if (!userId) {
            userId = document.getElementById('search-user-referrals').value.trim();
            if (!userId) {
                window.showCustomAlert('Please enter user ID, username or invite code');
                return;
            }
        }
        
        // Find user by ID, username, or invite code
        const { data: user, error: userError } = await window.supabase
            .from('users')
            .select('*')
            .or(`id.ilike.%${userId}%,username.ilike.%${userId}%,invite_code.ilike.%${userId}%`)
            .maybeSingle();
        
        if (userError || !user) {
            window.showCustomAlert('User not found');
            return;
        }
        
        // Get level 1 referrals
        const { data: level1, error: level1Error } = await window.supabase
            .from('referrals')
            .select(`
                referred_id,
                referred:users!referred_id (id, username, balance, vip_level, created_at, invite_code)
            `)
            .eq('referrer_id', user.id)
            .eq('level', 1)
            .order('created_at', { ascending: true });
        
        if (level1Error) throw level1Error;
        
        const container = document.getElementById('referral-tree-container');
        let html = `
            <div style="background: rgba(78, 119, 113, 0.3); border-radius: 8px; padding: 15px; margin-bottom: 15px;">
                <div style="text-align: center; margin-bottom: 10px;">
                    <div style="color: white; font-weight: bold; font-size: 16px;">${user.username}</div>
                    <div style="color: #ccc; font-size: 12px;">ID: ${user.id.substring(0, 10)}...</div>
                    <div style="color: #999; font-size: 11px; margin-top: 5px;">Invite Code: ${user.invite_code || 'N/A'}</div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 12px;">
                    <div>
                        <div style="color: #999;">Balance:</div>
                        <div style="color: #f9ae3d; font-weight: bold;">${user.balance.toFixed(2)} USDT</div>
                    </div>
                    <div>
                        <div style="color: #999;">VIP Level:</div>
                        <div style="color: #4e7771; font-weight: bold;">VIP ${user.vip_level}</div>
                    </div>
                    <div>
                        <div style="color: #999;">Signals:</div>
                        <div style="color: white;">${user.signals_available}</div>
                    </div>
                    <div>
                        <div style="color: #999;">Joined:</div>
                        <div style="color: white;">${new Date(user.created_at).toLocaleDateString()}</div>
                    </div>
                </div>
            </div>
        `;
        
        if (level1 && level1.length > 0) {
            html += `
                <div style="margin-bottom: 10px;">
                    <div style="color: #ccc; font-size: 14px; font-weight: bold; margin-bottom: 10px;">
                        Level 1 Referrals (${level1.length})
                    </div>
            `;
            
            level1.forEach((ref, index) => {
                const referred = ref.referred;
                const joinDate = new Date(referred.created_at).toLocaleDateString();
                
                html += `
                    <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 10px; margin-bottom: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px;">
                            <div>
                                <div style="font-weight: bold; color: white; font-size: 13px;">${referred.username}</div>
                                <div style="color: #ccc; font-size: 10px;">Joined: ${joinDate}</div>
                                <div style="color: #999; font-size: 9px;">Invite: ${referred.invite_code || 'N/A'}</div>
                            </div>
                            <div style="text-align: right;">
                                <div style="color: #f9ae3d; font-weight: bold; font-size: 12px;">${referred.balance.toFixed(2)} USDT</div>
                                <div style="color: ${referred.balance >= 20 ? '#52c41a' : '#ccc'}; font-size: 10px;">
                                    ${referred.balance >= 20 ? 'Active' : 'Inactive'}
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; gap: 5px;">
                            <button class="view-ref-btn" data-user-id="${referred.id}" 
                                    style="flex: 1; background: #1890ff; color: white; border: none; padding: 5px; border-radius: 4px; font-size: 10px; cursor: pointer;">
                                <i class="fas fa-eye"></i> View
                            </button>
                            <button class="edit-ref-btn" data-user-id="${referred.id}" 
                                    style="flex: 1; background: #4e7771; color: white; border: none; padding: 5px; border-radius: 4px; font-size: 10px; cursor: pointer;">
                                <i class="fas fa-edit"></i> Edit
                            </button>
                        </div>
                    </div>
                `;
            });
            
            html += `</div>`;
        } else {
            html += `
                <div style="color: #ccc; text-align: center; padding: 20px; font-size: 12px;">
                    No referrals found
                </div>
            `;
        }
        
        container.innerHTML = html;
        
        // Add event listeners
        container.querySelectorAll('.view-ref-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const userId = this.getAttribute('data-user-id');
                // Get user info to prefill search
                window.supabase
                    .from('users')
                    .select('username, invite_code')
                    .eq('id', userId)
                    .single()
                    .then(({ data: user }) => {
                        if (user) {
                            // Try username first, then invite code
                            const searchValue = user.username || user.invite_code || userId;
                            document.getElementById('search-user-referrals').value = searchValue;
                            loadReferralTree(searchValue);
                        } else {
                            document.getElementById('search-user-referrals').value = userId;
                            loadReferralTree(userId);
                        }
                    });
            });
        });
        
        container.querySelectorAll('.edit-ref-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const userId = this.getAttribute('data-user-id');
                showEditUserModal(userId);
            });
        });
        
    } catch (error) {
        console.error('Error loading referral tree:', error);
        document.getElementById('referral-tree-container').innerHTML = 
            '<div style="color: #ff4d4f; text-align: center; padding: 30px; font-size: 12px;">Error loading referral tree</div>';
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
        document.getElementById('edit-username').value = user.username;
        document.getElementById('edit-balance').value = user.balance;
        document.getElementById('edit-vip-level').value = user.vip_level;
        document.getElementById('edit-signals').value = user.signals_available;
        
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
            signals_available: parseInt(document.getElementById('edit-signals').value)
        };
        
        const { error } = await window.supabase
            .from('users')
            .update(updates)
            .eq('id', userId);
        
        if (error) throw error;
        
        window.showCustomAlert('User updated successfully!');
        document.getElementById('edit-user-modal').style.display = 'none';
        
        // Reload data
        loadUsers();
        loadAdminData();
        
    } catch (error) {
        console.error('Error updating user:', error);
        window.showCustomAlert('Error updating user');
    }
}

function showBalanceModal(action, userId) {
    const title = action === 'add' ? 'Add Balance' : 'Subtract Balance';
    document.getElementById('balance-modal-title').textContent = title;
    document.getElementById('balance-modal').setAttribute('data-action', action);
    document.getElementById('balance-modal').setAttribute('data-user-id', userId);
    document.getElementById('adjust-amount').value = '';
    document.getElementById('adjust-description').value = '';
    document.getElementById('balance-modal').style.display = 'flex';
}

async function processBalanceAdjustment() {
    const action = document.getElementById('balance-modal').getAttribute('data-action');
    const userId = document.getElementById('balance-modal').getAttribute('data-user-id');
    const amount = parseFloat(document.getElementById('adjust-amount').value);
    const description = document.getElementById('adjust-description').value.trim();
    
    if (!amount || isNaN(amount) || amount <= 0) {
        window.showCustomAlert('Please enter a valid amount');
        return;
    }
    
    try {
        // Get current user balance
        const { data: user } = await window.supabase
            .from('users')
            .select('balance')
            .eq('id', userId)
            .single();
        
        let newBalance;
        if (action === 'add') {
            newBalance = user.balance + amount;
        } else {
            if (user.balance < amount) {
                window.showCustomAlert('Insufficient balance');
                return;
            }
            newBalance = user.balance - amount;
        }
        
        // Update user balance
        const { error: balanceError } = await window.supabase
            .from('users')
            .update({ balance: newBalance })
            .eq('id', userId);
        
        if (balanceError) throw balanceError;
        
        // Create transaction record
        const txType = action === 'add' ? 'deposit' : 'withdrawal';
        const txAmount = action === 'add' ? amount : -amount;
        const txDescription = description || `Manual ${action} by admin`;
        
        const { error: txError } = await window.supabase
            .from('transactions')
            .insert([{
                user_id: userId,
                type: txType,
                amount: txAmount,
                status: 'completed',
                description: txDescription,
                network: 'Manual'
            }]);
        
        if (txError) throw txError;
        
        window.showCustomAlert(`✅ Balance ${action === 'add' ? 'added' : 'subtracted'} successfully!`);
        document.getElementById('balance-modal').style.display = 'none';
        
        // Update modal if open
        if (document.getElementById('edit-user-modal').style.display === 'flex') {
            document.getElementById('edit-balance').value = newBalance;
        }
        
        // Reload data
        loadUsers();
        loadAdminData();
        
    } catch (error) {
        console.error('Error adjusting balance:', error);
        window.showCustomAlert('❌ Error adjusting balance');
    }
}

async function showQuickDepositModal(userId) {
    showQuickActionModal('deposit', userId, 'Add Deposit');
}

async function showQuickWithdrawModal(userId) {
    showQuickActionModal('withdraw', userId, 'Subtract Funds');
}

function showQuickActionModal(action, userId, title) {
    document.getElementById('quick-action-title').textContent = title;
    document.getElementById('quick-action-modal').setAttribute('data-action', action);
    document.getElementById('quick-action-modal').setAttribute('data-user-id', userId);
    
    const content = `
        <div style="margin-bottom: 15px;">
            <label style="color: #333; font-size: 12px; display: block; margin-bottom: 5px;">Amount (USDT)</label>
            <input type="number" id="quick-amount" class="admin-input" 
                   style="padding: 8px; font-size: 14px; width: 100%;"
                   placeholder="Enter amount" step="0.01" min="0.01">
        </div>
        <div style="margin-bottom: 10px;">
            <label style="color: #333; font-size: 12px; display: block; margin-bottom: 5px;">Description (optional)</label>
            <input type="text" id="quick-description" class="admin-input" 
                   style="padding: 8px; font-size: 12px; width: 100%;"
                   placeholder="Brief description">
        </div>
    `;
    
    document.getElementById('quick-action-content').innerHTML = content;
    document.getElementById('quick-action-modal').style.display = 'flex';
    
    // Set up confirm button
    document.getElementById('confirm-quick-action').onclick = async () => {
        await processQuickAction();
    };
}

async function processQuickAction() {
    const action = document.getElementById('quick-action-modal').getAttribute('data-action');
    const userId = document.getElementById('quick-action-modal').getAttribute('data-user-id');
    const amount = parseFloat(document.getElementById('quick-amount').value);
    const description = document.getElementById('quick-description').value.trim();
    
    if (!amount || isNaN(amount) || amount <= 0) {
        window.showCustomAlert('Please enter a valid amount');
        return;
    }
    
    try {
        // Get current user balance
        const { data: user } = await window.supabase
            .from('users')
            .select('balance')
            .eq('id', userId)
            .single();
        
        let newBalance;
        if (action === 'deposit') {
            newBalance = user.balance + amount;
        } else {
            if (user.balance < amount) {
                window.showCustomAlert('Insufficient balance');
                return;
            }
            newBalance = user.balance - amount;
        }
        
        // Update user balance
        const { error: balanceError } = await window.supabase
            .from('users')
            .update({ balance: newBalance })
            .eq('id', userId);
        
        if (balanceError) throw balanceError;
        
        // Create transaction record
        const txType = action === 'deposit' ? 'deposit' : 'withdrawal';
        const txAmount = action === 'deposit' ? amount : -amount;
        const txDescription = description || `Quick ${action} by admin`;
        
        const { error: txError } = await window.supabase
            .from('transactions')
            .insert([{
                user_id: userId,
                type: txType,
                amount: txAmount,
                status: 'completed',
                description: txDescription,
                network: 'Manual'
            }]);
        
        if (txError) throw txError;
        
        window.showCustomAlert(`✅ ${action === 'deposit' ? 'Deposit' : 'Withdrawal'} processed!`);
        document.getElementById('quick-action-modal').style.display = 'none';
        
        // Reload data
        loadUsers();
        loadAdminData();
        
    } catch (error) {
        console.error('Error processing quick action:', error);
        window.showCustomAlert('❌ Error processing action');
    }
}

async function showUserDetails(userId) {
    try {
        const { data: user } = await window.supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .single();
        
        // Get user statistics from deposit_transactions (real deposits only)
        const { data: deposits } = await window.supabase
            .from('deposit_transactions')
            .select('amount')
            .eq('user_id', userId)
            .eq('status', 'processed');
        
        // Get withdrawals from transactions
        const { data: withdrawals } = await window.supabase
            .from('transactions')
            .select('amount')
            .eq('user_id', userId)
            .eq('type', 'withdrawal')
            .eq('status', 'completed');
        
        // Get referrals count
        const { count: referrals } = await window.supabase
            .from('referrals')
            .select('*', { count: 'exact', head: true })
            .eq('referrer_id', userId)
            .eq('level', 1);
        
        const totalDeposits = deposits?.reduce((sum, d) => sum + d.amount, 0) || 0;
        const totalWithdrawals = Math.abs(withdrawals?.reduce((sum, w) => sum + w.amount, 0) || 0);
        const totalReferrals = referrals || 0;
        
        const details = `
            <div style="color: #333;">
                <div style="margin-bottom: 15px;">
                    <div style="font-weight: bold; font-size: 16px; color: #4e7771;">${user.username}</div>
                    <div style="color: #666; font-size: 12px;">ID: ${user.id}</div>
                    <div style="color: #666; font-size: 12px;">Invite Code: ${user.invite_code || 'Not set'}</div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                    <div style="background: #f5f5f5; padding: 10px; border-radius: 5px;">
                        <div style="color: #999; font-size: 11px;">Real Deposits</div>
                        <div style="color: #52c41a; font-weight: bold; font-size: 14px;">${totalDeposits.toFixed(2)} USDT</div>
                    </div>
                    <div style="background: #f5f5f5; padding: 10px; border-radius: 5px;">
                        <div style="color: #999; font-size: 11px;">Withdrawals</div>
                        <div style="color: #ff4d4f; font-weight: bold; font-size: 14px;">${totalWithdrawals.toFixed(2)} USDT</div>
                    </div>
                    <div style="background: #f5f5f5; padding: 10px; border-radius: 5px;">
                        <div style="color: #999; font-size: 11px;">Referrals</div>
                        <div style="color: #1890ff; font-weight: bold; font-size: 14px;">${totalReferrals}</div>
                    </div>
                    <div style="background: #f5f5f5; padding: 10px; border-radius: 5px;">
                        <div style="color: #999; font-size: 11px;">Current Balance</div>
                        <div style="color: #f9ae3d; font-weight: bold; font-size: 14px;">${user.balance.toFixed(2)} USDT</div>
                    </div>
                </div>
                
                <div style="font-size: 12px; color: #666;">
                    <div style="margin-bottom: 5px;"><strong>Email:</strong> ${user.email || 'Not set'}</div>
                    <div style="margin-bottom: 5px;"><strong>TRC20 Address:</strong> ${user.withdrawal_address_trc20 || 'Not set'}</div>
                    <div style="margin-bottom: 5px;"><strong>BEP20 Address:</strong> ${user.withdrawal_address_bep20 || 'Not set'}</div>
                    <div><strong>Last Signal Update:</strong> ${user.last_signal_update ? new Date(user.last_signal_update).toLocaleString() : 'Never'}</div>
                </div>
            </div>
        `;
        
        showQuickActionModal('details', userId, 'User Details');
        document.getElementById('quick-action-title').textContent = 'User Details';
        document.getElementById('quick-action-content').innerHTML = details;
        document.getElementById('confirm-quick-action').style.display = 'none';
        document.getElementById('cancel-quick-action').textContent = 'Close';
        
    } catch (error) {
        console.error('Error loading user details:', error);
        window.showCustomAlert('Error loading user details');
    }
}

async function loadCurrentSettings() {
    // For now, just show default values
    // In production, load from database
    document.getElementById('min-withdrawal').value = '20';
    document.getElementById('min-deposit').value = '17';
    document.getElementById('daily-signals').value = '3';
}

async function saveSettings() {
    try {
        // In production, save to database
        const settings = {
            min_withdrawal: document.getElementById('min-withdrawal').value,
            min_deposit: document.getElementById('min-deposit').value,
            daily_signals: document.getElementById('daily-signals').value
        };
        
        // Здесь вы бы сохранили в Supabase
        // const { error } = await window.supabase
        //     .from('platform_settings')
        //     .upsert(settings);
        
        window.showCustomAlert('Settings saved successfully!');
        
    } catch (error) {
        console.error('Error saving settings:', error);
        window.showCustomAlert('Error saving settings');
    }
}

async function resetSettings() {
    if (confirm('Reset all settings to default values?')) {
        document.getElementById('min-withdrawal').value = '20';
        document.getElementById('min-deposit').value = '17';
        document.getElementById('daily-signals').value = '3';
        window.showCustomAlert('Settings reset to defaults');
    }
}
