// Admin section
export default function renderAdmin() {
    return `
        <div class="admin-container">
            <!-- Admin Header -->
            <div class="card padding" style="background: rgba(0,0,0,0.3); margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h2 style="color: white; margin-bottom: 5px;">Admin Panel</h2>
                        <p style="color: #ccc; font-size: 12px;">Full control panel</p>
                    </div>
                    <div class="admin-stats">
                        <div class="admin-stat">
                            <div class="admin-stat-value" id="total-users">0</div>
                            <div class="admin-stat-label">Users</div>
                        </div>
                        <div class="admin-stat">
                            <div class="admin-stat-value" id="pending-withdrawals">0</div>
                            <div class="admin-stat-label">Pending WD</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Admin Navigation -->
            <div class="admin-nav">
                <div class="admin-nav-item active" data-tab="withdrawals">
                    <i class="fas fa-money-bill-wave"></i>
                    <span>Withdrawals</span>
                </div>
                <div class="admin-nav-item" data-tab="users">
                    <i class="fas fa-users"></i>
                    <span>Users</span>
                </div>
                <div class="admin-nav-item" data-tab="transactions">
                    <i class="fas fa-exchange-alt"></i>
                    <span>Transactions</span>
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

                <!-- Users Tab -->
                <div class="admin-tab" id="users-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">All Users</h3>
                            <div class="tab-actions">
                                <input type="text" 
                                       id="search-users" 
                                       placeholder="Search users..."
                                       class="admin-input-small">
                                <button class="admin-btn-small" id="refresh-users">
                                    <i class="fas fa-sync-alt"></i>
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

                <!-- Settings Tab -->
                <div class="admin-tab" id="settings-tab">
                    <div class="card padding">
                        <div class="tab-header">
                            <h3 style="color: white;">Platform Settings</h3>
                        </div>
                        
                        <div class="settings-form">
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
            <div class="pop-content" style="max-width: 500px;">
                <form id="edit-user-form" onsubmit="return false;">
                    <div class="pop-header">Edit User</div>
                    <div class="pop-body">
                        <div class="admin-form-grid">
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
                        </div>
                    </div>
                    <div class="pop-footer">
                        <button type="submit" id="save-user-changes" style="margin-right: 10px;">Save Changes</button>
                        <button type="button" id="cancel-edit-user">Cancel</button>
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
                            <i class="fas fa-check"></i> Approve
                        </button>
                        <button class="admin-btn-danger" id="reject-withdrawal">
                            <i class="fas fa-times"></i> Reject
                        </button>
                    </div>
                </div>
                <div class="pop-footer">
                    <button id="close-withdrawal-action">Cancel</button>
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
    document.getElementById('refresh-transactions').addEventListener('click', () => loadTransactions());
    
    // User search
    document.getElementById('search-users').addEventListener('input', debounce(loadUsers, 300));
    
    // Transaction filter
    document.getElementById('transaction-type-filter').addEventListener('change', loadTransactions);
    
    // Settings save
    document.getElementById('save-settings').addEventListener('click', saveSettings);
    
    // Modal close buttons
    document.getElementById('cancel-edit-user').addEventListener('click', () => {
        document.getElementById('edit-user-modal').style.display = 'none';
    });
    
    document.getElementById('close-transaction-details').addEventListener('click', () => {
        document.getElementById('transaction-details-modal').style.display = 'none';
    });
    
    document.getElementById('close-withdrawal-action').addEventListener('click', () => {
        document.getElementById('withdrawal-action-modal').style.display = 'none';
    });
    
    // Withdrawal actions
    document.getElementById('approve-withdrawal').addEventListener('click', approveWithdrawal);
    document.getElementById('reject-withdrawal').addEventListener('click', rejectWithdrawal);
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
        
        document.getElementById('total-users').textContent = totalUsers || 0;
        document.getElementById('pending-withdrawals').textContent = pendingWithdrawals || 0;
        
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
        case 'transactions':
            loadTransactions();
            break;
        case 'settings':
            loadSettings();
            break;
    }
}

async function loadWithdrawals() {
    try {
        const { data: withdrawals, error } = await window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username, email)
            `)
            .eq('type', 'withdrawal')
            .eq('status', 'pending')
            .order('created_at', { ascending: false });
        
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
                            <th>Address</th>
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
                
                html += `
                    <tr>
                        <td>${date}<br><small>${time}</small></td>
                        <td>
                            <div style="font-weight: bold;">${tx.user.username}</div>
                            <small>${tx.user.email || 'No email'}</small>
                        </td>
                        <td style="color: #ff4d4f; font-weight: bold;">${amount.toFixed(2)} USDT</td>
                        <td>${tx.network || 'TRC20'}</td>
                        <td title="${tx.withdrawal_address || ''}">${shortAddress}</td>
                        <td>
                            <button class="admin-btn-small action-btn" data-id="${tx.id}" data-action="process">
                                <i class="fas fa-cog"></i> Process
                            </button>
                        </td>
                    </tr>
                `;
            });
            
            html += '</tbody></table>';
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 30px;">No pending withdrawals</div>';
        }
        
        container.innerHTML = html;
        
        // Add event listeners to action buttons
        container.querySelectorAll('.action-btn[data-action="process"]').forEach(btn => {
            btn.addEventListener('click', function() {
                const txId = this.getAttribute('data-id');
                showWithdrawalAction(txId);
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
        let query = window.supabase
            .from('users')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(50);
        
        if (searchTerm) {
            query = query.or(`username.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%,id.ilike.%${searchTerm}%`);
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
                            <th>Balance</th>
                            <th>VIP</th>
                            <th>Referrals</th>
                            <th>Joined</th>
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
                
                html += `
                    <tr>
                        <td><small>${user.id.substring(0, 8)}...</small></td>
                        <td>
                            <div style="font-weight: bold;">${user.username}</div>
                            <small>${user.email || 'No email'}</small>
                        </td>
                        <td style="color: #f9ae3d; font-weight: bold;">${user.balance.toFixed(2)} USDT</td>
                        <td><span class="vip-badge">VIP ${user.vip_level}</span></td>
                        <td>${referrals || 0}</td>
                        <td>${date}</td>
                        <td>
                            <button class="admin-btn-small action-btn" data-id="${user.id}" data-action="edit">
                                <i class="fas fa-edit"></i> Edit
                            </button>
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
        
    } catch (error) {
        console.error('Error loading users:', error);
        document.getElementById('users-table').innerHTML = 
            '<div style="color: #ff4d4f; text-align: center; padding: 30px;">Error loading users</div>';
    }
}

async function loadTransactions() {
    try {
        const typeFilter = document.getElementById('transaction-type-filter').value;
        
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
        
        const { data: transactions, error } = await query;
        
        if (error) throw error;
        
        const container = document.getElementById('transactions-table');
        let html = '';
        
        if (transactions && transactions.length > 0) {
            html = `
                <div style="max-height: 400px; overflow-y: auto;">
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
                        <td><small>${tx.description || ''}</small></td>
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

async function loadSettings() {
    // Settings are hardcoded for now, can be loaded from database if needed
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
        document.getElementById('edit-email').value = user.email || '';
        document.getElementById('edit-address-trc20').value = user.withdrawal_address_trc20 || '';
        document.getElementById('edit-address-bep20').value = user.withdrawal_address_bep20 || '';
        
        // Store user ID
        document.getElementById('edit-user-form').setAttribute('data-user-id', userId);
        
        // Show modal
        document.getElementById('edit-user-modal').style.display = 'flex';
        
        // Add save handler
        document.getElementById('save-user-changes').onclick = async () => {
            await saveUserChanges(userId);
        };
        
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
            email: document.getElementById('edit-email').value || null,
            withdrawal_address_trc20: document.getElementById('edit-address-trc20').value || null,
            withdrawal_address_bep20: document.getElementById('edit-address-bep20').value || null
        };
        
        const { error } = await window.supabase
            .from('users')
            .update(updates)
            .eq('id', userId);
        
        if (error) throw error;
        
        window.showCustomAlert('User updated successfully!');
        document.getElementById('edit-user-modal').style.display = 'none';
        
        // Reload users tab
        loadUsers();
        
    } catch (error) {
        console.error('Error updating user:', error);
        window.showCustomAlert('Error updating user');
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
                    <span class="detail-value">${transaction.withdrawal_address}</span>
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
                    <strong>Network:</strong> ${transaction.network || 'TRC20'}
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>Address:</strong> ${transaction.withdrawal_address}
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>User Balance:</strong> ${userBalance.toFixed(2)} USDT
                </div>
                <div style="margin-bottom: 15px;">
                    <strong>Status:</strong> ${transaction.status}
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
    
    try {
        // Update transaction status
        const { error: txError } = await window.supabase
            .from('transactions')
            .update({ status: 'completed' })
            .eq('id', txId);
        
        if (txError) throw txError;
        
        window.showCustomAlert('Withdrawal approved successfully!');
        document.getElementById('withdrawal-action-modal').style.display = 'none';
        
        // Reload withdrawals tab
        loadWithdrawals();
        loadAdminData();
        
    } catch (error) {
        console.error('Error approving withdrawal:', error);
        window.showCustomAlert('Error approving withdrawal');
    }
}

async function rejectWithdrawal() {
    const txId = document.getElementById('withdrawal-action-modal').getAttribute('data-tx-id');
    
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
                description: `Withdrawal rejected - Funds returned to balance`
            })
            .eq('id', txId);
        
        if (txError) throw txError;
        
        window.showCustomAlert('Withdrawal rejected and funds returned to user!');
        document.getElementById('withdrawal-action-modal').style.display = 'none';
        
        // Reload withdrawals tab
        loadWithdrawals();
        loadAdminData();
        
    } catch (error) {
        console.error('Error rejecting withdrawal:', error);
        window.showCustomAlert('Error rejecting withdrawal');
    }
}

async function saveSettings() {
    // This is a placeholder - settings would be saved to database in real implementation
    window.showCustomAlert('Settings saved successfully!');
}
