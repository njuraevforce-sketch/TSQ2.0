// Admin section - COMPLETELY REDESIGNED for PC usability
export default function renderAdmin() {
    return `
        <div class="admin-container">
            <!-- Admin Header -->
            <div class="admin-header">
                <div class="admin-title">
                    <h1><i class="fas fa-crown"></i> GLY Admin Panel</h1>
                    <p>Full control panel with inline editing</p>
                </div>
                <div class="admin-actions">
                    <button class="admin-btn" id="refresh-all">
                        <i class="fas fa-sync-alt"></i> Refresh All
                    </button>
                    <button class="admin-btn btn-success" id="export-data">
                        <i class="fas fa-download"></i> Export
                    </button>
                </div>
            </div>

            <!-- Quick Stats Dashboard -->
            <div class="stats-dashboard">
                <div class="stat-card">
                    <div class="stat-icon" style="background: #4e7771;">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="stat-info">
                        <div class="stat-value" id="total-users-count">0</div>
                        <div class="stat-label">Total Users</div>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon" style="background: #52c41a;">
                        <i class="fas fa-money-bill-wave"></i>
                    </div>
                    <div class="stat-info">
                        <div class="stat-value" id="today-deposits-count">0</div>
                        <div class="stat-label">Today's Deposits</div>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon" style="background: #f9ae3d;">
                        <i class="fas fa-wallet"></i>
                    </div>
                    <div class="stat-info">
                        <div class="stat-value" id="pending-withdrawals-count">0</div>
                        <div class="stat-label">Pending Withdrawals</div>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon" style="background: #ff4d4f;">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <div class="stat-info">
                        <div class="stat-value" id="active-deposits-count">0</div>
                        <div class="stat-label">Active Deposits</div>
                    </div>
                </div>
            </div>

            <!-- Main Content Tabs -->
            <div class="admin-tabs">
                <div class="tab-nav">
                    <button class="tab-btn active" data-tab="users"><i class="fas fa-users"></i> Users</button>
                    <button class="tab-btn" data-tab="withdrawals"><i class="fas fa-money-check-alt"></i> Withdrawals</button>
                    <button class="tab-btn" data-tab="deposits"><i class="fas fa-piggy-bank"></i> Deposits</button>
                    <button class="tab-btn" data-tab="referrals"><i class="fas fa-sitemap"></i> Referral Tree</button>
                    <button class="tab-btn" data-tab="transactions"><i class="fas fa-exchange-alt"></i> Transactions</button>
                    <button class="tab-btn" data-tab="quick-actions"><i class="fas fa-bolt"></i> Quick Actions</button>
                </div>
                
                <div class="tab-content">
                    <!-- Users Tab -->
                    <div class="tab-pane active" id="users-tab">
                        <div class="tab-header">
                            <h3><i class="fas fa-users"></i> All Users Management</h3>
                            <div class="tab-actions">
                                <div class="search-box">
                                    <input type="text" id="user-search" placeholder="Search users...">
                                    <i class="fas fa-search"></i>
                                </div>
                                <button class="btn-small" id="add-user-btn">
                                    <i class="fas fa-user-plus"></i> Add User
                                </button>
                                <button class="btn-small" id="refresh-users">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="table-container">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Balance</th>
                                        <th>VIP</th>
                                        <th>Signals</th>
                                        <th>Refs</th>
                                        <th>Status</th>
                                        <th>Joined</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="users-table">
                                    <tr>
                                        <td colspan="10" class="loading-cell">
                                            <i class="fas fa-spinner fa-spin"></i> Loading users...
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

                    <!-- Withdrawals Tab -->
                    <div class="tab-pane" id="withdrawals-tab">
                        <div class="tab-header">
                            <h3><i class="fas fa-money-check-alt"></i> Withdrawal Requests Processing</h3>
                            <div class="tab-actions">
                                <div class="filter-group">
                                    <select id="withdrawal-filter" class="filter-select">
                                        <option value="pending">Pending</option>
                                        <option value="all">All Requests</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </div>
                                <button class="btn-small" id="refresh-withdrawals">
                                    <i class="fas fa-sync-alt"></i> Refresh
                                </button>
                            </div>
                        </div>
                        
                        <div class="table-container">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>User</th>
                                        <th>Amount</th>
                                        <th>Network</th>
                                        <th>Address</th>
                                        <th>Requested</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="withdrawals-table">
                                    <tr>
                                        <td colspan="8" class="loading-cell">
                                            <i class="fas fa-spinner fa-spin"></i> Loading withdrawal requests...
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Deposits Tab -->
                    <div class="tab-pane" id="deposits-tab">
                        <div class="tab-header">
                            <h3><i class="fas fa-piggy-bank"></i> Deposits Monitoring</h3>
                            <div class="tab-actions">
                                <div class="filter-group">
                                    <select id="deposit-period-filter" class="filter-select">
                                        <option value="today">Today</option>
                                        <option value="yesterday">Yesterday</option>
                                        <option value="week">This Week</option>
                                        <option value="month">This Month</option>
                                        <option value="all">All Time</option>
                                    </select>
                                </div>
                                <button class="btn-small" id="refresh-deposits">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="table-container">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>User</th>
                                        <th>Amount</th>
                                        <th>Network</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th>Transaction</th>
                                    </tr>
                                </thead>
                                <tbody id="deposits-table">
                                    <tr>
                                        <td colspan="7" class="loading-cell">
                                            <i class="fas fa-spinner fa-spin"></i> Loading deposits...
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Referrals Tab -->
                    <div class="tab-pane" id="referrals-tab">
                        <div class="tab-header">
                            <h3><i class="fas fa-sitemap"></i> Referral Tree Explorer</h3>
                            <div class="tab-actions">
                                <div class="search-box">
                                    <input type="text" id="referral-search" placeholder="Enter user ID or username...">
                                    <i class="fas fa-search"></i>
                                </div>
                                <button class="btn-small" id="load-referral-tree">
                                    <i class="fas fa-search"></i> Load Tree
                                </button>
                            </div>
                        </div>
                        
                        <div class="referral-tree-view" id="referral-tree-view">
                            <div class="empty-state">
                                <i class="fas fa-sitemap"></i>
                                <p>Enter a user ID or username to load their referral tree</p>
                            </div>
                        </div>
                    </div>

                    <!-- Transactions Tab -->
                    <div class="tab-pane" id="transactions-tab">
                        <div class="tab-header">
                            <h3><i class="fas fa-exchange-alt"></i> All Transactions</h3>
                            <div class="tab-actions">
                                <div class="filter-group">
                                    <select id="transaction-type-filter" class="filter-select">
                                        <option value="">All Types</option>
                                        <option value="deposit">Deposits</option>
                                        <option value="withdrawal">Withdrawals</option>
                                        <option value="quantification">Quantification</option>
                                        <option value="referral">Referrals</option>
                                        <option value="admin_adjustment">Admin Adjustments</option>
                                    </select>
                                    <input type="date" id="transaction-date-filter" class="filter-input">
                                </div>
                                <button class="btn-small" id="refresh-transactions">
                                    <i class="fas fa-sync-alt"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="table-container">
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>User</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Description</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody id="transactions-table">
                                    <tr>
                                        <td colspan="7" class="loading-cell">
                                            <i class="fas fa-spinner fa-spin"></i> Loading transactions...
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Quick Actions Tab -->
                    <div class="tab-pane" id="quick-actions-tab">
                        <div class="tab-header">
                            <h3><i class="fas fa-bolt"></i> Quick Actions</h3>
                        </div>
                        
                        <div class="quick-actions-grid">
                            <!-- Balance Management -->
                            <div class="action-card">
                                <h4><i class="fas fa-balance-scale"></i> Balance Management</h4>
                                <div class="action-form">
                                    <div class="form-group">
                                        <label>Select User</label>
                                        <select id="quick-user-select" class="form-input">
                                            <option value="">Select user...</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Current Balance</label>
                                        <input type="text" id="quick-current-balance" class="form-input" readonly>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label>Action</label>
                                            <select id="quick-action" class="form-input">
                                                <option value="add">Add Balance</option>
                                                <option value="subtract">Subtract Balance</option>
                                                <option value="set">Set Balance</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Amount (USDT)</label>
                                            <input type="number" id="quick-amount" class="form-input" step="0.01">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Reason</label>
                                        <textarea id="quick-reason" class="form-input" rows="2"></textarea>
                                    </div>
                                    <button class="btn btn-primary" id="apply-quick-change">
                                        <i class="fas fa-check"></i> Apply Change
                                    </button>
                                </div>
                            </div>

                            <!-- Manual Deposit -->
                            <div class="action-card">
                                <h4><i class="fas fa-plus-circle"></i> Manual Deposit</h4>
                                <div class="action-form">
                                    <div class="form-group">
                                        <label>Select User</label>
                                        <select id="deposit-user-select" class="form-input">
                                            <option value="">Select user...</option>
                                        </select>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label>Amount (USDT)</label>
                                            <input type="number" id="manual-deposit-amount" class="form-input" step="0.01" min="17">
                                        </div>
                                        <div class="form-group">
                                            <label>Network</label>
                                            <select id="manual-deposit-network" class="form-input">
                                                <option value="TRC20">TRC20</option>
                                                <option value="BEP20">BEP20</option>
                                                <option value="MANUAL">Manual</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Transaction ID (Optional)</label>
                                        <input type="text" id="manual-deposit-txid" class="form-input">
                                    </div>
                                    <button class="btn btn-success" id="add-manual-deposit">
                                        <i class="fas fa-plus"></i> Add Deposit
                                    </button>
                                </div>
                            </div>

                            <!-- User Management -->
                            <div class="action-card">
                                <h4><i class="fas fa-user-cog"></i> User Management</h4>
                                <div class="action-form">
                                    <div class="form-group">
                                        <label>Search User</label>
                                        <input type="text" id="search-user-manage" class="form-input" placeholder="Enter user ID or username">
                                    </div>
                                    <div class="form-group">
                                        <label>Action</label>
                                        <select id="user-action" class="form-input">
                                            <option value="edit">Edit User</option>
                                            <option value="suspend">Suspend User</option>
                                            <option value="activate">Activate User</option>
                                            <option value="reset_password">Reset Password</option>
                                        </select>
                                    </div>
                                    <button class="btn btn-warning" id="execute-user-action">
                                        <i class="fas fa-play"></i> Execute Action
                                    </button>
                                </div>
                            </div>

                            <!-- System Actions -->
                            <div class="action-card">
                                <h4><i class="fas fa-cog"></i> System Actions</h4>
                                <div class="action-buttons-vertical">
                                    <button class="btn btn-info" id="reset-signals">
                                        <i class="fas fa-redo"></i> Reset All Signals
                                    </button>
                                    <button class="btn btn-warning" id="recalculate-vip">
                                        <i class="fas fa-calculator"></i> Recalculate VIP Levels
                                    </button>
                                    <button class="btn btn-danger" id="cleanup-old-data">
                                        <i class="fas fa-trash"></i> Cleanup Old Data
                                    </button>
                                    <button class="btn btn-primary" id="backup-database">
                                        <i class="fas fa-save"></i> Backup Database
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- User Edit Modal -->
        <div class="modal-overlay" id="user-edit-modal" style="display: none;">
            <div class="modal">
                <div class="modal-header">
                    <h3>Edit User</h3>
                    <button class="modal-close" id="close-user-edit">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="user-edit-form">
                        <div class="form-grid">
                            <div class="form-group">
                                <label>User ID</label>
                                <input type="text" id="edit-user-id" class="form-input" readonly>
                            </div>
                            <div class="form-group">
                                <label>Username</label>
                                <input type="text" id="edit-username" class="form-input">
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" id="edit-email" class="form-input">
                            </div>
                            <div class="form-group">
                                <label>Balance (USDT)</label>
                                <input type="number" id="edit-balance" class="form-input" step="0.01">
                            </div>
                            <div class="form-group">
                                <label>VIP Level</label>
                                <select id="edit-vip-level" class="form-input">
                                    <option value="1">VIP 1</option>
                                    <option value="2">VIP 2</option>
                                    <option value="3">VIP 3</option>
                                    <option value="4">VIP 4</option>
                                    <option value="5">VIP 5</option>
                                    <option value="6">VIP 6</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Signals Available</label>
                                <input type="number" id="edit-signals" class="form-input" min="0" max="10">
                            </div>
                            <div class="form-group full-width">
                                <label>Password (Leave empty to keep current)</label>
                                <input type="text" id="edit-password" class="form-input" placeholder="New password">
                            </div>
                            <div class="form-group full-width">
                                <label>TRC20 Address</label>
                                <input type="text" id="edit-address-trc20" class="form-input">
                            </div>
                            <div class="form-group full-width">
                                <label>BEP20 Address</label>
                                <input type="text" id="edit-address-bep20" class="form-input">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" id="cancel-user-edit">Cancel</button>
                    <button class="btn btn-primary" id="save-user-changes">Save Changes</button>
                </div>
            </div>
        </div>

        <!-- Withdrawal Processing Modal -->
        <div class="modal-overlay" id="withdrawal-process-modal" style="display: none;">
            <div class="modal">
                <div class="modal-header">
                    <h3>Process Withdrawal Request</h3>
                    <button class="modal-close" id="close-withdrawal-process">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="withdrawal-details" id="withdrawal-details">
                        <!-- Details will be loaded here -->
                    </div>
                    
                    <div class="action-buttons">
                        <button class="btn btn-success btn-large" id="approve-withdrawal-btn">
                            <i class="fas fa-check-circle"></i> Approve & Pay
                        </button>
                        <button class="btn btn-warning btn-large" id="cancel-withdrawal-btn">
                            <i class="fas fa-ban"></i> Cancel & Refund
                        </button>
                        <button class="btn btn-danger btn-large" id="reject-withdrawal-btn">
                            <i class="fas fa-times-circle"></i> Reject (No Refund)
                        </button>
                    </div>
                    
                    <div class="process-notes">
                        <label>Admin Notes (Optional)</label>
                        <textarea id="withdrawal-notes" class="form-input" rows="3" placeholder="Add notes about this transaction..."></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" id="close-withdrawal-modal">Close</button>
                </div>
            </div>
        </div>

        <!-- Add User Modal -->
        <div class="modal-overlay" id="add-user-modal" style="display: none;">
            <div class="modal">
                <div class="modal-header">
                    <h3>Add New User</h3>
                    <button class="modal-close" id="close-add-user">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="add-user-form">
                        <div class="form-group">
                            <label>Username *</label>
                            <input type="text" id="new-username" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label>Email (Optional)</label>
                            <input type="email" id="new-email" class="form-input">
                        </div>
                        <div class="form-group">
                            <label>Password *</label>
                            <input type="text" id="new-password" class="form-input" required>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Initial Balance (USDT)</label>
                                <input type="number" id="new-balance" class="form-input" step="0.01" value="0">
                            </div>
                            <div class="form-group">
                                <label>VIP Level</label>
                                <select id="new-vip-level" class="form-input">
                                    <option value="1">VIP 1</option>
                                    <option value="2">VIP 2</option>
                                    <option value="3">VIP 3</option>
                                    <option value="4">VIP 4</option>
                                    <option value="5">VIP 5</option>
                                    <option value="6">VIP 6</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Referrer ID (Optional)</label>
                            <input type="text" id="new-referrer" class="form-input" placeholder="User ID of referrer">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" id="cancel-add-user">Cancel</button>
                    <button class="btn btn-primary" id="save-new-user">Create User</button>
                </div>
            </div>
        </div>

        <!-- Confirmation Modal -->
        <div class="modal-overlay" id="confirmation-modal" style="display: none;">
            <div class="modal small">
                <div class="modal-header">
                    <h3 id="confirmation-title">Confirm Action</h3>
                    <button class="modal-close" id="close-confirmation">&times;</button>
                </div>
                <div class="modal-body">
                    <p id="confirmation-message">Are you sure you want to perform this action?</p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" id="cancel-confirmation">Cancel</button>
                    <button class="btn btn-primary" id="confirm-action">Confirm</button>
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
    await loadStats();
    await loadAllUsers();
    await populateUserSelects();
    
    // Setup event listeners
    setupEventListeners();
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
    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // Refresh buttons
    document.getElementById('refresh-all').addEventListener('click', refreshAllData);
    document.getElementById('refresh-users').addEventListener('click', () => loadAllUsers());
    document.getElementById('refresh-withdrawals').addEventListener('click', () => loadWithdrawalRequests());
    document.getElementById('refresh-deposits').addEventListener('click', () => loadDeposits());
    document.getElementById('refresh-transactions').addEventListener('click', () => loadAllTransactions());
    
    // Search and filters
    document.getElementById('user-search').addEventListener('input', debounce(() => loadAllUsers(), 500));
    document.getElementById('withdrawal-filter').addEventListener('change', () => loadWithdrawalRequests());
    document.getElementById('deposit-period-filter').addEventListener('change', () => loadDeposits());
    document.getElementById('transaction-type-filter').addEventListener('change', () => loadAllTransactions());
    document.getElementById('transaction-date-filter').addEventListener('change', () => loadAllTransactions());
    
    // Add user
    document.getElementById('add-user-btn').addEventListener('click', showAddUserModal);
    document.getElementById('save-new-user').addEventListener('click', saveNewUser);
    document.getElementById('close-add-user').addEventListener('click', hideAddUserModal);
    document.getElementById('cancel-add-user').addEventListener('click', hideAddUserModal);
    
    // User edit modal
    document.getElementById('close-user-edit').addEventListener('click', hideUserEditModal);
    document.getElementById('cancel-user-edit').addEventListener('click', hideUserEditModal);
    document.getElementById('save-user-changes').addEventListener('click', saveUserChanges);
    
    // Withdrawal processing
    document.getElementById('close-withdrawal-process').addEventListener('click', hideWithdrawalProcessModal);
    document.getElementById('close-withdrawal-modal').addEventListener('click', hideWithdrawalProcessModal);
    document.getElementById('approve-withdrawal-btn').addEventListener('click', approveWithdrawal);
    document.getElementById('cancel-withdrawal-btn').addEventListener('click', cancelWithdrawal);
    document.getElementById('reject-withdrawal-btn').addEventListener('click', rejectWithdrawal);
    
    // Quick actions
    document.getElementById('apply-quick-change').addEventListener('click', applyQuickBalanceChange);
    document.getElementById('add-manual-deposit').addEventListener('click', addManualDeposit);
    document.getElementById('quick-user-select').addEventListener('change', loadQuickUserBalance);
    document.getElementById('deposit-user-select').addEventListener('change', loadDepositUserInfo);
    
    // Referral tree
    document.getElementById('load-referral-tree').addEventListener('click', loadReferralTree);
    document.getElementById('referral-search').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') loadReferralTree();
    });
    
    // Export data
    document.getElementById('export-data').addEventListener('click', exportData);
    
    // System actions
    document.getElementById('reset-signals').addEventListener('click', () => resetAllSignals());
    document.getElementById('recalculate-vip').addEventListener('click', () => recalculateAllVipLevels());
    
    // Confirmation modal
    document.getElementById('close-confirmation').addEventListener('click', hideConfirmationModal);
    document.getElementById('cancel-confirmation').addEventListener('click', hideConfirmationModal);
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

function switchTab(tabId) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        }
    });
    
    // Update tab content
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    document.getElementById(`${tabId}-tab`).classList.add('active');
    
    // Load tab data
    switch(tabId) {
        case 'users':
            loadAllUsers();
            break;
        case 'withdrawals':
            loadWithdrawalRequests();
            break;
        case 'deposits':
            loadDeposits();
            break;
        case 'referrals':
            // Tree will load when user searches
            break;
        case 'transactions':
            loadAllTransactions();
            break;
        case 'quick-actions':
            // Already loaded
            break;
    }
}

async function refreshAllData() {
    window.showLoading('Refreshing all data...');
    try {
        await Promise.all([
            loadStats(),
            loadAllUsers(),
            loadWithdrawalRequests(),
            loadDeposits(),
            loadAllTransactions()
        ]);
        window.hideLoading();
        showToast('All data refreshed successfully!', 'success');
    } catch (error) {
        window.hideLoading();
        showToast('Error refreshing data: ' + error.message, 'error');
    }
}

async function loadStats() {
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
        
        // Get pending withdrawals
        const { count: pendingWithdrawals } = await window.supabase
            .from('transactions')
            .select('*', { count: 'exact', head: true })
            .eq('type', 'withdrawal')
            .eq('status', 'pending');
        
        // Get active deposits (last 24 hours)
        const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
        const { data: recentDeposits } = await window.supabase
            .from('transactions')
            .select('amount')
            .eq('type', 'deposit')
            .gte('created_at', yesterday);
        
        const activeDeposits = recentDeposits?.length || 0;
        
        // Update stats
        document.getElementById('total-users-count').textContent = totalUsers || 0;
        document.getElementById('today-deposits-count').textContent = todayDepositCount;
        document.getElementById('pending-withdrawals-count').textContent = pendingWithdrawals || 0;
        document.getElementById('active-deposits-count').textContent = activeDeposits;
        
    } catch (error) {
        console.error('Error loading stats:', error);
    }
}

async function loadAllUsers(page = 1, limit = 20) {
    try {
        const searchTerm = document.getElementById('user-search').value;
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
        
        const container = document.getElementById('users-table');
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
                const vipClass = `vip-${user.vip_level}`;
                const statusClass = user.status === 'active' ? 'status-active' : 
                                   user.status === 'suspended' ? 'status-suspended' : 'status-banned';
                
                html += `
                    <tr>
                        <td><code>${user.id.substring(0, 8)}...</code></td>
                        <td>
                            <strong>${user.username}</strong>
                            ${user.referred_by ? `<br><small>Ref: ${user.referred_by.substring(0, 8)}...</small>` : ''}
                        </td>
                        <td>${user.email || '—'}</td>
                        <td class="balance-cell">
                            <span class="balance-value">${user.balance.toFixed(2)}</span>
                            <div class="balance-actions">
                                <button class="btn-icon" onclick="editUserBalance('${user.id}', ${user.balance})" title="Edit balance">
                                    <i class="fas fa-edit"></i>
                                </button>
                            </div>
                        </td>
                        <td>
                            <span class="vip-badge ${vipClass}">VIP ${user.vip_level}</span>
                        </td>
                        <td>
                            <span class="signal-count">${user.signals_available}</span>
                            <button class="btn-icon" onclick="resetUserSignals('${user.id}')" title="Reset signals">
                                <i class="fas fa-redo"></i>
                            </button>
                        </td>
                        <td>${referrals || 0}</td>
                        <td>
                            <span class="status-badge ${statusClass}">${user.status || 'active'}</span>
                        </td>
                        <td>${date}</td>
                        <td class="actions-cell">
                            <button class="btn-icon btn-edit" onclick="showEditUserModal('${user.id}')" title="Edit user">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn-icon btn-view" onclick="viewUserDetails('${user.id}')" title="View details">
                                <i class="fas fa-eye"></i>
                            </button>
                            ${user.status === 'active' ? `
                                <button class="btn-icon btn-suspend" onclick="toggleUserStatus('${user.id}', 'suspended')" title="Suspend user">
                                    <i class="fas fa-ban"></i>
                                </button>
                            ` : `
                                <button class="btn-icon btn-activate" onclick="toggleUserStatus('${user.id}', 'active')" title="Activate user">
                                    <i class="fas fa-check"></i>
                                </button>
                            `}
                        </td>
                    </tr>
                `;
            }
        } else {
            html = '<tr><td colspan="10" class="empty-cell">No users found</td></tr>';
        }
        
        container.innerHTML = html;
        
        // Update pagination
        updatePagination('users-pagination', page, limit, count || 0, loadAllUsers);
        
    } catch (error) {
        console.error('Error loading users:', error);
        document.getElementById('users-table').innerHTML = 
            '<tr><td colspan="10" class="error-cell">Error loading users</td></tr>';
    }
}

function updatePagination(containerId, currentPage, limit, totalCount, loadFunction) {
    const totalPages = Math.ceil(totalCount / limit);
    const container = document.getElementById(containerId);
    
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = '';
    
    // Previous button
    if (currentPage > 1) {
        html += `<button class="pagination-btn" onclick="${loadFunction.name}(${currentPage - 1}, ${limit})">Previous</button>`;
    }
    
    // Page numbers
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    
    if (endPage - startPage + 1 < maxVisible) {
        startPage = Math.max(1, endPage - maxVisible + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        if (i === currentPage) {
            html += `<button class="pagination-btn active">${i}</button>`;
        } else {
            html += `<button class="pagination-btn" onclick="${loadFunction.name}(${i}, ${limit})">${i}</button>`;
        }
    }
    
    // Next button
    if (currentPage < totalPages) {
        html += `<button class="pagination-btn" onclick="${loadFunction.name}(${currentPage + 1}, ${limit})">Next</button>`;
    }
    
    container.innerHTML = html;
}

// Глобальные функции для inline редактирования
window.editUserBalance = async function(userId, currentBalance) {
    const newBalance = prompt(`Edit balance for user ${userId}\nCurrent: ${currentBalance.toFixed(2)} USDT\nEnter new balance:`, currentBalance.toFixed(2));
    
    if (newBalance === null) return;
    
    const amount = parseFloat(newBalance);
    if (isNaN(amount) || amount < 0) {
        showToast('Invalid amount entered', 'error');
        return;
    }
    
    try {
        const { error } = await window.supabase
            .from('users')
            .update({ balance: amount })
            .eq('id', userId);
        
        if (error) throw error;
        
        // Create transaction record
        await window.supabase
            .from('transactions')
            .insert([{
                user_id: userId,
                type: 'admin_adjustment',
                amount: amount - currentBalance,
                status: 'completed',
                description: 'Balance adjusted by admin'
            }]);
        
        showToast(`Balance updated to ${amount.toFixed(2)} USDT`, 'success');
        loadAllUsers();
        loadStats();
        
    } catch (error) {
        console.error('Error updating balance:', error);
        showToast('Error updating balance', 'error');
    }
};

window.resetUserSignals = async function(userId) {
    if (!confirm('Reset this user\'s signals to 3?')) return;
    
    try {
        const { error } = await window.supabase
            .from('users')
            .update({ signals_available: 3 })
            .eq('id', userId);
        
        if (error) throw error;
        
        showToast('Signals reset successfully', 'success');
        loadAllUsers();
        
    } catch (error) {
        console.error('Error resetting signals:', error);
        showToast('Error resetting signals', 'error');
    }
};

window.toggleUserStatus = async function(userId, newStatus) {
    const action = newStatus === 'suspended' ? 'suspend' : 'activate';
    if (!confirm(`Are you sure you want to ${action} this user?`)) return;
    
    try {
        const { error } = await window.supabase
            .from('users')
            .update({ status: newStatus })
            .eq('id', userId);
        
        if (error) throw error;
        
        showToast(`User ${action}ed successfully`, 'success');
        loadAllUsers();
        
    } catch (error) {
        console.error('Error updating user status:', error);
        showToast('Error updating user status', 'error');
    }
};

async function loadWithdrawalRequests() {
    try {
        const filter = document.getElementById('withdrawal-filter').value;
        
        let query = window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username, email, balance)
            `)
            .eq('type', 'withdrawal')
            .order('created_at', { ascending: false });
        
        if (filter !== 'all') {
            query = query.eq('status', filter);
        }
        
        const { data: withdrawals, error } = await query;
        
        if (error) throw error;
        
        const container = document.getElementById('withdrawals-table');
        let html = '';
        
        if (withdrawals && withdrawals.length > 0) {
            withdrawals.forEach(tx => {
                const date = new Date(tx.created_at);
                const dateStr = date.toLocaleDateString();
                const timeStr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const amount = Math.abs(tx.amount);
                const statusClass = tx.status === 'completed' ? 'status-success' : 
                                   tx.status === 'pending' ? 'status-pending' : 
                                   tx.status === 'cancelled' ? 'status-cancelled' : 'status-error';
                
                html += `
                    <tr>
                        <td><code>${tx.id.substring(0, 8)}...</code></td>
                        <td>
                            <strong>${tx.user.username}</strong><br>
                            <small>${tx.user.email || 'No email'}</small>
                        </td>
                        <td class="amount-cell">
                            <strong style="color: #ff4d4f;">${amount.toFixed(2)} USDT</strong>
                        </td>
                        <td>${tx.network || 'TRC20'}</td>
                        <td>
                            <code title="${tx.withdrawal_address}">${tx.withdrawal_address?.substring(0, 20)}...</code>
                            <button class="btn-icon" onclick="copyToClipboard('${tx.withdrawal_address}')" title="Copy address">
                                <i class="fas fa-copy"></i>
                            </button>
                        </td>
                        <td>${dateStr}<br><small>${timeStr}</small></td>
                        <td>
                            <span class="status-badge ${statusClass}">${tx.status}</span>
                        </td>
                        <td class="actions-cell">
                            ${tx.status === 'pending' ? `
                                <button class="btn-action btn-approve" onclick="processWithdrawal('${tx.id}', 'approve')" title="Approve & Pay">
                                    <i class="fas fa-check"></i>
                                </button>
                                <button class="btn-action btn-cancel" onclick="processWithdrawal('${tx.id}', 'cancel')" title="Cancel & Refund">
                                    <i class="fas fa-ban"></i>
                                </button>
                                <button class="btn-action btn-reject" onclick="processWithdrawal('${tx.id}', 'reject')" title="Reject (No Refund)">
                                    <i class="fas fa-times"></i>
                                </button>
                            ` : ''}
                            <button class="btn-action btn-view" onclick="viewWithdrawalDetails('${tx.id}')" title="View details">
                                <i class="fas fa-eye"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });
        } else {
            html = '<tr><td colspan="8" class="empty-cell">No withdrawal requests found</td></tr>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading withdrawals:', error);
        document.getElementById('withdrawals-table').innerHTML = 
            '<tr><td colspan="8" class="error-cell">Error loading withdrawals</td></tr>';
    }
}

window.processWithdrawal = async function(txId, action) {
    try {
        // Get transaction details
        const { data: transaction, error: getError } = await window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username, balance)
            `)
            .eq('id', txId)
            .single();
        
        if (getError) throw getError;
        
        const amount = Math.abs(transaction.amount);
        const adminUser = window.getCurrentUser();
        
        switch(action) {
            case 'approve':
                if (!confirm(`Approve withdrawal of ${amount.toFixed(2)} USDT to ${transaction.withdrawal_address}?`)) return;
                
                // Update transaction status
                const { error: approveError } = await window.supabase
                    .from('transactions')
                    .update({ 
                        status: 'completed',
                        description: `Withdrawal approved by admin ${adminUser.username}`
                    })
                    .eq('id', txId);
                
                if (approveError) throw approveError;
                
                showToast('Withdrawal approved successfully!', 'success');
                break;
                
            case 'cancel':
                if (!confirm(`Cancel withdrawal and refund ${amount.toFixed(2)} USDT to user's balance?`)) return;
                
                // Return funds to user balance
                const newBalance = transaction.user.balance + amount;
                const { error: balanceError } = await window.supabase
                    .from('users')
                    .update({ balance: newBalance })
                    .eq('id', transaction.user_id);
                
                if (balanceError) throw balanceError;
                
                // Update transaction status
                const { error: cancelError } = await window.supabase
                    .from('transactions')
                    .update({ 
                        status: 'cancelled',
                        description: `Withdrawal cancelled - Funds returned to balance`
                    })
                    .eq('id', txId);
                
                if (cancelError) throw cancelError;
                
                showToast('Withdrawal cancelled and funds returned!', 'success');
                break;
                
            case 'reject':
                if (!confirm(`Reject withdrawal WITHOUT refund? User will NOT receive ${amount.toFixed(2)} USDT.`)) return;
                
                // Update transaction status
                const { error: rejectError } = await window.supabase
                    .from('transactions')
                    .update({ 
                        status: 'rejected',
                        description: `Withdrawal rejected by admin`
                    })
                    .eq('id', txId);
                
                if (rejectError) throw rejectError;
                
                showToast('Withdrawal rejected!', 'warning');
                break;
        }
        
        // Refresh data
        loadWithdrawalRequests();
        loadStats();
        
    } catch (error) {
        console.error('Error processing withdrawal:', error);
        showToast('Error processing withdrawal', 'error');
    }
};

async function loadDeposits() {
    try {
        const period = document.getElementById('deposit-period-filter').value;
        
        let query = window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username)
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
        
        const container = document.getElementById('deposits-table');
        let html = '';
        
        if (deposits && deposits.length > 0) {
            deposits.forEach(deposit => {
                const date = new Date(deposit.created_at);
                const dateStr = date.toLocaleDateString();
                const timeStr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const statusClass = deposit.status === 'completed' ? 'status-success' : 
                                   deposit.status === 'pending' ? 'status-pending' : 'status-error';
                
                html += `
                    <tr>
                        <td><code>${deposit.id.substring(0, 8)}...</code></td>
                        <td>
                            <strong>${deposit.user.username}</strong>
                        </td>
                        <td class="amount-cell">
                            <strong style="color: #52c41a;">+${deposit.amount.toFixed(2)} USDT</strong>
                        </td>
                        <td>${deposit.network || 'TRC20'}</td>
                        <td>${dateStr}<br><small>${timeStr}</small></td>
                        <td>
                            <span class="status-badge ${statusClass}">${deposit.status}</span>
                        </td>
                        <td>
                            <code title="${deposit.description}">${deposit.description?.substring(0, 30)}...</code>
                        </td>
                    </tr>
                `;
            });
        } else {
            html = '<tr><td colspan="7" class="empty-cell">No deposits found</td></tr>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading deposits:', error);
        document.getElementById('deposits-table').innerHTML = 
            '<tr><td colspan="7" class="error-cell">Error loading deposits</td></tr>';
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
        
        const container = document.getElementById('transactions-table');
        let html = '';
        
        if (transactions && transactions.length > 0) {
            transactions.forEach(tx => {
                const date = new Date(tx.created_at);
                const dateStr = date.toLocaleDateString();
                const timeStr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const isPositive = tx.amount > 0;
                const amountColor = isPositive ? '#52c41a' : '#ff4d4f';
                const statusClass = tx.status === 'completed' ? 'status-success' : 
                                   tx.status === 'pending' ? 'status-pending' : 'status-error';
                
                html += `
                    <tr>
                        <td><code>${tx.id.substring(0, 8)}...</code></td>
                        <td>${tx.user.username}</td>
                        <td>
                            <span class="type-badge type-${tx.type}">${tx.type}</span>
                        </td>
                        <td style="color: ${amountColor}; font-weight: bold;">
                            ${isPositive ? '+' : ''}${tx.amount.toFixed(2)} USDT
                        </td>
                        <td>
                            <span class="status-badge ${statusClass}">${tx.status}</span>
                        </td>
                        <td title="${tx.description || ''}">
                            ${tx.description?.substring(0, 50) || '—'}${tx.description && tx.description.length > 50 ? '...' : ''}
                        </td>
                        <td>${dateStr}<br><small>${timeStr}</small></td>
                    </tr>
                `;
            });
        } else {
            html = '<tr><td colspan="7" class="empty-cell">No transactions found</td></tr>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading transactions:', error);
        document.getElementById('transactions-table').innerHTML = 
            '<tr><td colspan="7" class="error-cell">Error loading transactions</td></tr>';
    }
}

async function loadReferralTree() {
    const searchInput = document.getElementById('referral-search').value.trim();
    if (!searchInput) {
        showToast('Please enter a user ID or username', 'warning');
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
            showToast('User not found', 'error');
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
        const container = document.getElementById('referral-tree-view');
        let html = `
            <div class="tree-container">
                <div class="tree-header">
                    <h4>Referral Tree for ${user.username} (ID: ${user.id.substring(0, 10)}...)</h4>
                    <div class="tree-stats">
                        <span class="stat">Level 1: ${level1Refs?.length || 0}</span>
                        <span class="stat">Level 2: ${level2Refs.length}</span>
                        <span class="stat">Level 3: ${level3Refs.length}</span>
                        <span class="stat">Total: ${(level1Refs?.length || 0) + level2Refs.length + level3Refs.length}</span>
                    </div>
                </div>
                
                <div class="tree-level level-0">
                    <div class="tree-node root">
                        <div class="node-header">
                            <span class="node-badge">ROOT</span>
                            <span class="node-name">${user.username}</span>
                        </div>
                        <div class="node-details">
                            <span>VIP ${user.vip_level}</span>
                            <span>${user.balance.toFixed(2)} USDT</span>
                            <span>${new Date(user.created_at).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
        `;
        
        // Level 1
        if (level1Refs && level1Refs.length > 0) {
            html += '<div class="tree-level level-1">';
            html += '<div class="level-label">Level 1 Referrals</div>';
            html += '<div class="nodes-grid">';
            
            level1Refs.forEach((ref, index) => {
                const referred = ref.referred;
                const activeRefs = level2Refs.filter(r => r.parent === ref.referred_id).length;
                
                html += `
                    <div class="tree-node">
                        <div class="node-header">
                            <span class="node-badge">L1</span>
                            <span class="node-name">${referred.username}</span>
                            <button class="btn-icon" onclick="editUserFromTree('${referred.id}')" title="Edit user">
                                <i class="fas fa-edit"></i>
                            </button>
                        </div>
                        <div class="node-details">
                            <span>VIP ${referred.vip_level}</span>
                            <span>${referred.balance.toFixed(2)} USDT</span>
                            <span>Refs: ${activeRefs}</span>
                        </div>
                    </div>
                `;
            });
            
            html += '</div></div>';
        }
        
        // Level 2
        if (level2Refs.length > 0) {
            html += '<div class="tree-level level-2">';
            html += '<div class="level-label">Level 2 Referrals</div>';
            html += '<div class="nodes-grid">';
            
            level2Refs.forEach(ref => {
                const referred = ref.referred;
                const activeRefs = level3Refs.filter(r => r.parent === ref.referred_id).length;
                
                html += `
                    <div class="tree-node">
                        <div class="node-header">
                            <span class="node-badge">L2</span>
                            <span class="node-name">${referred.username}</span>
                            <button class="btn-icon" onclick="editUserFromTree('${referred.id}')" title="Edit user">
                                <i class="fas fa-edit"></i>
                            </button>
                        </div>
                        <div class="node-details">
                            <span>VIP ${referred.vip_level}</span>
                            <span>${referred.balance.toFixed(2)} USDT</span>
                            <span>Refs: ${activeRefs}</span>
                        </div>
                    </div>
                `;
            });
            
            html += '</div></div>';
        }
        
        // Level 3
        if (level3Refs.length > 0) {
            html += '<div class="tree-level level-3">';
            html += '<div class="level-label">Level 3 Referrals</div>';
            html += '<div class="nodes-grid">';
            
            level3Refs.forEach(ref => {
                const referred = ref.referred;
                
                html += `
                    <div class="tree-node">
                        <div class="node-header">
                            <span class="node-badge">L3</span>
                            <span class="node-name">${referred.username}</span>
                            <button class="btn-icon" onclick="editUserFromTree('${referred.id}')" title="Edit user">
                                <i class="fas fa-edit"></i>
                            </button>
                        </div>
                        <div class="node-details">
                            <span>VIP ${referred.vip_level}</span>
                            <span>${referred.balance.toFixed(2)} USDT</span>
                            <span>No refs</span>
                        </div>
                    </div>
                `;
            });
            
            html += '</div></div>';
        }
        
        html += '</div>';
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading referral tree:', error);
        showToast('Error loading referral tree', 'error');
    }
}

window.editUserFromTree = function(userId) {
    showEditUserModal(userId);
};

async function populateUserSelects() {
    try {
        const { data: users, error } = await window.supabase
            .from('users')
            .select('id, username')
            .order('username')
            .limit(100);
        
        if (error) throw error;
        
        const quickSelect = document.getElementById('quick-user-select');
        const depositSelect = document.getElementById('deposit-user-select');
        
        let options = '<option value="">Select user...</option>';
        if (users && users.length > 0) {
            users.forEach(user => {
                options += `<option value="${user.id}">${user.username} (${user.id.substring(0, 8)}...)</option>`;
            });
        }
        
        quickSelect.innerHTML = options;
        depositSelect.innerHTML = options;
        
    } catch (error) {
        console.error('Error populating user selects:', error);
    }
}

async function loadQuickUserBalance() {
    const userId = document.getElementById('quick-user-select').value;
    if (!userId) return;
    
    try {
        const { data: user, error } = await window.supabase
            .from('users')
            .select('balance, username')
            .eq('id', userId)
            .single();
        
        if (error) throw error;
        
        document.getElementById('quick-current-balance').value = `${user.balance.toFixed(2)} USDT (${user.username})`;
        
    } catch (error) {
        console.error('Error loading user balance:', error);
        document.getElementById('quick-current-balance').value = 'Error loading balance';
    }
}

async function applyQuickBalanceChange() {
    const userId = document.getElementById('quick-user-select').value;
    const action = document.getElementById('quick-action').value;
    const amount = parseFloat(document.getElementById('quick-amount').value);
    const reason = document.getElementById('quick-reason').value.trim();
    const adminUser = window.getCurrentUser();
    
    if (!userId || !amount || amount <= 0) {
        showToast('Please select a user and enter a valid amount', 'warning');
        return;
    }
    
    if (!reason) {
        showToast('Please enter a reason for this balance change', 'warning');
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
                showToast('Cannot subtract more than current balance', 'error');
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
        await window.supabase
            .from('transactions')
            .insert([{
                user_id: userId,
                type: 'admin_adjustment',
                amount: transactionAmount,
                status: 'completed',
                description: `Admin balance adjustment: ${reason}`
            }]);
        
        // Log admin action
        await window.supabase
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
        
        showToast(`Balance updated to ${newBalance.toFixed(2)} USDT`, 'success');
        
        // Reset form
        document.getElementById('quick-amount').value = '';
        document.getElementById('quick-reason').value = '';
        document.getElementById('quick-current-balance').value = '';
        document.getElementById('quick-user-select').value = '';
        
        // Refresh data
        loadAllUsers();
        loadStats();
        
    } catch (error) {
        console.error('Error applying balance change:', error);
        showToast('Error applying balance change: ' + error.message, 'error');
    }
}

async function addManualDeposit() {
    const userId = document.getElementById('deposit-user-select').value;
    const amount = parseFloat(document.getElementById('manual-deposit-amount').value);
    const network = document.getElementById('manual-deposit-network').value;
    const txid = document.getElementById('manual-deposit-txid').value.trim();
    const adminUser = window.getCurrentUser();
    
    if (!userId || !amount || amount < 17) {
        showToast('Please select a user and enter a valid amount (min 17 USDT)', 'warning');
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
        const description = `Manual deposit by admin${txid ? ` | TXID: ${txid}` : ''}`;
        
        await window.supabase
            .from('transactions')
            .insert([{
                user_id: userId,
                type: 'deposit',
                amount: amount,
                status: 'completed',
                description: description,
                network: network
            }]);
        
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
                    txid: txid
                }),
                target_user_id: userId
            }]);
        
        showToast(`Manual deposit of ${amount} USDT added successfully!`, 'success');
        
        // Reset form
        document.getElementById('manual-deposit-amount').value = '';
        document.getElementById('manual-deposit-txid').value = '';
        document.getElementById('deposit-user-select').value = '';
        
        // Refresh data
        loadAllUsers();
        loadStats();
        loadDeposits();
        
    } catch (error) {
        console.error('Error adding manual deposit:', error);
        showToast('Error adding manual deposit: ' + error.message, 'error');
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
        document.getElementById('edit-address-trc20').value = user.withdrawal_address_trc20 || '';
        document.getElementById('edit-address-bep20').value = user.withdrawal_address_bep20 || '';
        
        // Store user ID
        document.getElementById('user-edit-form').setAttribute('data-user-id', userId);
        
        // Show modal
        document.getElementById('user-edit-modal').style.display = 'flex';
        
    } catch (error) {
        console.error('Error loading user:', error);
        showToast('Error loading user data', 'error');
    }
}

function hideUserEditModal() {
    document.getElementById('user-edit-modal').style.display = 'none';
}

async function saveUserChanges() {
    const userId = document.getElementById('user-edit-form').getAttribute('data-user-id');
    const adminUser = window.getCurrentUser();
    
    try {
        const updates = {
            username: document.getElementById('edit-username').value,
            email: document.getElementById('edit-email').value || null,
            balance: parseFloat(document.getElementById('edit-balance').value),
            vip_level: parseInt(document.getElementById('edit-vip-level').value),
            signals_available: parseInt(document.getElementById('edit-signals').value),
            withdrawal_address_trc20: document.getElementById('edit-address-trc20').value || null,
            withdrawal_address_bep20: document.getElementById('edit-address-bep20').value || null
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
        
        showToast('User updated successfully!', 'success');
        hideUserEditModal();
        
        // Refresh data
        loadAllUsers();
        loadStats();
        
    } catch (error) {
        console.error('Error updating user:', error);
        showToast('Error updating user', 'error');
    }
}

function showAddUserModal() {
    document.getElementById('add-user-modal').style.display = 'flex';
}

function hideAddUserModal() {
    document.getElementById('add-user-modal').style.display = 'none';
    document.getElementById('add-user-form').reset();
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
        showToast('Username and password are required', 'warning');
        return;
    }
    
    if (username === 'admin') {
        showToast('Username "admin" is reserved', 'error');
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
            showToast('Username already exists', 'error');
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
            payment_password: password,
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
        
        showToast(`User ${username} created successfully!`, 'success');
        hideAddUserModal();
        
        // Refresh data
        loadAllUsers();
        loadStats();
        populateUserSelects();
        
    } catch (error) {
        console.error('Error creating user:', error);
        showToast('Error creating user: ' + error.message, 'error');
    }
}

function hideWithdrawalProcessModal() {
    document.getElementById('withdrawal-process-modal').style.display = 'none';
}

function hideConfirmationModal() {
    document.getElementById('confirmation-modal').style.display = 'none';
}

async function resetAllSignals() {
    if (!confirm('Reset signals for ALL users? This will set all users to 3 signals.')) return;
    
    try {
        const { error } = await window.supabase
            .from('users')
            .update({ 
                signals_available: 3,
                last_signal_update: new Date().toISOString()
            })
            .neq('username', 'admin');
        
        if (error) throw error;
        
        showToast('All user signals reset to 3', 'success');
        loadAllUsers();
        
    } catch (error) {
        console.error('Error resetting signals:', error);
        showToast('Error resetting signals', 'error');
    }
}

async function recalculateAllVipLevels() {
    if (!confirm('Recalculate VIP levels for ALL users? This may take a moment.')) return;
    
    window.showLoading('Recalculating VIP levels...');
    
    try {
        // Get all users
        const { data: users, error: usersError } = await window.supabase
            .from('users')
            .select('id, balance, vip_level')
            .neq('username', 'admin');
        
        if (usersError) throw usersError;
        
        let updated = 0;
        
        // Process each user
        for (const user of users) {
            await window.glyApp.updateVipLevelForUser(user.id);
            updated++;
        }
        
        window.hideLoading();
        showToast(`VIP levels recalculated for ${updated} users`, 'success');
        loadAllUsers();
        
    } catch (error) {
        window.hideLoading();
        console.error('Error recalculating VIP levels:', error);
        showToast('Error recalculating VIP levels', 'error');
    }
}

function exportData() {
    showToast('Export feature coming soon!', 'info');
}

window.copyToClipboard = async function(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('Copied to clipboard', 'success');
    } catch (error) {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Copied to clipboard', 'success');
    }
};

window.viewUserDetails = async function(userId) {
    showToast('Viewing user details for: ' + userId, 'info');
    // Implement detailed view if needed
};

window.viewWithdrawalDetails = async function(txId) {
    showToast('Viewing withdrawal details for: ' + txId, 'info');
    // Implement detailed view if needed
};

// Toast notification system
function showToast(message, type = 'info') {
    // Remove existing toasts
    document.querySelectorAll('.toast').forEach(toast => toast.remove());
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="toast-close">&times;</button>
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Auto remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
    
    // Close button
    toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    });
}
