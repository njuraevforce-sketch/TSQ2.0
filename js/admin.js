[file name]: admin (1).js
[file content begin]
// Admin panel section
export default function renderAdmin() {
    return `
        <!-- Admin Panel -->
        <div class="admin-panel">
            <!-- Admin Header -->
            <div class="card padding" style="background: linear-gradient(135deg, #4e7771 0%, #3a5a55 100%);">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h2 style="color: white; margin-bottom: 5px;">Admin Panel</h2>
                        <p style="color: rgba(255,255,255,0.8); font-size: 14px;">Welcome, <span id="admin-username">Admin</span></p>
                    </div>
                    <div class="admin-status">
                        <span class="status-badge online">● ONLINE</span>
                    </div>
                </div>
                
                <!-- Quick Stats -->
                <div class="admin-quick-stats" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 20px;">
                    <div class="stat-box">
                        <div class="stat-value" id="total-users">0</div>
                        <div class="stat-label">Total Users</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-value" id="pending-withdrawals">0</div>
                        <div class="stat-label">Pending Withdrawals</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-value" id="today-deposits">0 USDT</div>
                        <div class="stat-label">Today Deposits</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-value" id="today-withdrawals">0 USDT</div>
                        <div class="stat-label">Today Withdrawals</div>
                    </div>
                </div>
            </div>

            <!-- Admin Navigation -->
            <div class="admin-nav">
                <div class="nav-line" data-section="withdrawals">
                    <div class="nav-icon"><i class="fas fa-money-bill-transfer"></i></div>
                    <div class="nav-text">Withdrawal Requests</div>
                    <div class="nav-badge" id="withdrawal-badge">0</div>
                </div>
                
                <div class="nav-line" data-section="users">
                    <div class="nav-icon"><i class="fas fa-users"></i></div>
                    <div class="nav-text">User Management</div>
                </div>
                
                <div class="nav-line" data-section="transactions">
                    <div class="nav-icon"><i class="fas fa-exchange-alt"></i></div>
                    <div class="nav-text">All Transactions</div>
                </div>
                
                <div class="nav-line" data-section="referrals">
                    <div class="nav-icon"><i class="fas fa-network-wired"></i></div>
                    <div class="nav-text">Referral System</div>
                </div>
                
                <div class="nav-line" data-section="settings">
                    <div class="nav-icon"><i class="fas fa-cog"></i></div>
                    <div class="nav-text">System Settings</div>
                </div>
            </div>

            <!-- Content Sections -->
            <div class="admin-content">
                <!-- Withdrawal Requests Section -->
                <div class="content-section active" id="withdrawals-section">
                    <div class="section-header">
                        <h3 style="color: white;">Withdrawal Requests</h3>
                        <div class="section-actions">
                            <button class="admin-btn small" id="refresh-withdrawals">
                                <i class="fas fa-sync-alt"></i> Refresh
                            </button>
                        </div>
                    </div>
                    
                    <div class="filters" style="margin-bottom: 15px;">
                        <select id="withdrawal-filter" class="admin-select">
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                            <option value="all">All</option>
                        </select>
                        <input type="text" id="withdrawal-search" placeholder="Search by ID or address" class="admin-input">
                    </div>
                    
                    <div class="withdrawal-list" id="withdrawal-list">
                        <div class="empty-state">
                            <i class="fas fa-inbox"></i>
                            <p>No withdrawal requests found</p>
                        </div>
                    </div>
                </div>

                <!-- User Management Section -->
                <div class="content-section" id="users-section">
                    <div class="section-header">
                        <h3 style="color: white;">User Management</h3>
                        <div class="section-actions">
                            <button class="admin-btn small" id="add-user">
                                <i class="fas fa-plus"></i> Add User
                            </button>
                            <button class="admin-btn small" id="refresh-users">
                                <i class="fas fa-sync-alt"></i> Refresh
                            </button>
                        </div>
                    </div>
                    
                    <div class="filters" style="margin-bottom: 15px;">
                        <select id="user-filter" class="admin-select">
                            <option value="all">All Users</option>
                            <option value="vip1">VIP 1</option>
                            <option value="vip2">VIP 2</option>
                            <option value="vip3">VIP 3</option>
                            <option value="vip4">VIP 4</option>
                            <option value="vip5">VIP 5</option>
                            <option value="vip6">VIP 6</option>
                        </select>
                        <input type="text" id="user-search" placeholder="Search by username or ID" class="admin-input">
                    </div>
                    
                    <div class="user-list" id="user-list">
                        <div class="empty-state">
                            <i class="fas fa-users"></i>
                            <p>No users found</p>
                        </div>
                    </div>
                </div>

                <!-- Transactions Section -->
                <div class="content-section" id="transactions-section">
                    <div class="section-header">
                        <h3 style="color: white;">All Transactions</h3>
                        <div class="section-actions">
                            <button class="admin-btn small" id="refresh-transactions">
                                <i class="fas fa-sync-alt"></i> Refresh
                            </button>
                            <button class="admin-btn small" id="export-transactions">
                                <i class="fas fa-download"></i> Export
                            </button>
                        </div>
                    </div>
                    
                    <div class="filters" style="margin-bottom: 15px;">
                        <select id="transaction-filter" class="admin-select">
                            <option value="all">All Transactions</option>
                            <option value="deposit">Deposits</option>
                            <option value="withdrawal">Withdrawals</option>
                            <option value="quantification">Quantification</option>
                            <option value="referral">Referral</option>
                        </select>
                        <input type="date" id="transaction-date" class="admin-input">
                    </div>
                    
                    <div class="transactions-list" id="transactions-list">
                        <div class="empty-state">
                            <i class="fas fa-exchange-alt"></i>
                            <p>No transactions found</p>
                        </div>
                    </div>
                </div>

                <!-- Referral System Section -->
                <div class="content-section" id="referrals-section">
                    <div class="section-header">
                        <h3 style="color: white;">Referral System</h3>
                        <div class="section-actions">
                            <button class="admin-btn small" id="refresh-referrals">
                                <i class="fas fa-sync-alt"></i> Refresh
                            </button>
                        </div>
                    </div>
                    
                    <div class="referral-stats-admin">
                        <div class="stat-card">
                            <div class="stat-value">0</div>
                            <div class="stat-label">Total Referrals</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">0 USDT</div>
                            <div class="stat-label">Total Referral Income</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">0</div>
                            <div class="stat-label">Active Referrers</div>
                        </div>
                    </div>
                    
                    <div class="top-referrers" id="top-referrers">
                        <h4 style="color: white; margin-bottom: 15px;">Top Referrers</h4>
                        <div class="empty-state">
                            <i class="fas fa-trophy"></i>
                            <p>No referrers data available</p>
                        </div>
                    </div>
                </div>

                <!-- Settings Section -->
                <div class="content-section" id="settings-section">
                    <div class="section-header">
                        <h3 style="color: white;">System Settings</h3>
                    </div>
                    
                    <div class="settings-form">
                        <div class="setting-group">
                            <label class="setting-label">Minimum Deposit</label>
                            <input type="number" class="setting-input" id="min-deposit" value="17" step="1">
                        </div>
                        
                        <div class="setting-group">
                            <label class="setting-label">Minimum Withdrawal</label>
                            <input type="number" class="setting-input" id="min-withdrawal" value="20" step="1">
                        </div>
                        
                        <div class="setting-group">
                            <label class="setting-label">Registration Bonus</label>
                            <input type="number" class="setting-input" id="reg-bonus" value="3" step="0.1">
                        </div>
                        
                        <div class="setting-group">
                            <label class="setting-label">VIP 1 Fee (%)</label>
                            <input type="number" class="setting-input" id="vip1-fee" value="7" step="0.1">
                        </div>
                        
                        <div class="setting-group">
                            <label class="setting-label">VIP 2 Fee (%)</label>
                            <input type="number" class="setting-input" id="vip2-fee" value="5" step="0.1">
                        </div>
                        
                        <div class="setting-group">
                            <label class="setting-label">VIP 3 Fee (%)</label>
                            <input type="number" class="setting-input" id="vip3-fee" value="3" step="0.1">
                        </div>
                        
                        <div class="setting-group">
                            <label class="setting-label">VIP 4 Fee (%)</label>
                            <input type="number" class="setting-input" id="vip4-fee" value="2" step="0.1">
                        </div>
                        
                        <div class="setting-group">
                            <label class="setting-label">VIP 5 Fee (%)</label>
                            <input type="number" class="setting-input" id="vip5-fee" value="1" step="0.1">
                        </div>
                        
                        <div class="setting-group">
                            <label class="setting-label">VIP 6 Fee (%)</label>
                            <input type="number" class="setting-input" id="vip6-fee" value="0.5" step="0.1">
                        </div>
                        
                        <div class="setting-group">
                            <label class="setting-label">Signals Refresh Time (UTC)</label>
                            <input type="time" class="setting-input" id="signals-time" value="18:00">
                        </div>
                        
                        <button class="admin-btn" id="save-settings" style="width: 100%; margin-top: 20px;">
                            <i class="fas fa-save"></i> Save Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Withdrawal Action Modal -->
        <div class="pop-overlay" id="withdrawal-action-modal" style="display: none;">
            <div class="pop-content" style="max-width: 500px;">
                <div class="pop-header">Process Withdrawal</div>
                <div class="pop-body">
                    <div class="request-details" id="request-details">
                        <!-- Details loaded dynamically -->
                    </div>
                    
                    <div class="action-section" id="approve-section" style="display: none;">
                        <h4 style="color: #333; margin-bottom: 10px;">Approve Withdrawal</h4>
                        <div class="form-group">
                            <label>Transaction Hash</label>
                            <input type="text" id="tx-hash" placeholder="Enter transaction hash" class="admin-input">
                        </div>
                        <div class="form-group">
                            <label>Notes (optional)</label>
                            <textarea id="approve-notes" placeholder="Enter notes" rows="3" class="admin-input"></textarea>
                        </div>
                        <button class="admin-btn success" id="confirm-approve">
                            <i class="fas fa-check"></i> Confirm Approval
                        </button>
                    </div>
                    
                    <div class="action-section" id="reject-section" style="display: none;">
                        <h4 style="color: #333; margin-bottom: 10px;">Reject Withdrawal</h4>
                        <div class="form-group">
                            <label>Reason for rejection</label>
                            <textarea id="reject-reason" placeholder="Enter reason" rows="3" class="admin-input" required></textarea>
                        </div>
                        <button class="admin-btn danger" id="confirm-reject">
                            <i class="fas fa-times"></i> Confirm Rejection
                        </button>
                    </div>
                </div>
                <div class="pop-footer">
                    <button type="button" id="close-action-modal">Cancel</button>
                </div>
            </div>
        </div>

        <!-- User Edit Modal -->
        <div class="pop-overlay" id="user-edit-modal" style="display: none;">
            <div class="pop-content" style="max-width: 500px;">
                <div class="pop-header">Edit User</div>
                <div class="pop-body">
                    <div id="user-edit-form">
                        <!-- Form loaded dynamically -->
                    </div>
                </div>
                <div class="pop-footer">
                    <button type="button" id="save-user-changes" style="margin-right: 10px;">Save Changes</button>
                    <button type="button" id="close-user-modal">Cancel</button>
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    document.body.classList.add('no-tabbar');
    document.title = 'GLY - Admin Panel';

    // Check admin access
    if (!await checkAdminAccess()) {
        window.showSection('login');
        return;
    }

    // Set navbar title
    window.setNavbarTitle('Admin Panel', true);

    // Load admin data
    await loadAdminData();
    
    // Setup event listeners
    setupEventListeners();
    
    // Load initial section
    await loadSection('withdrawals');
}

async function checkAdminAccess() {
    const user = window.getCurrentUser();
    if (!user) return false;
    
    // Check if user is admin
    return user.role === 'admin';
}

async function loadAdminData() {
    try {
        // Load quick stats
        await loadQuickStats();
        
        // Update admin username
        const user = window.getCurrentUser();
        if (user) {
            document.getElementById('admin-username').textContent = user.username;
        }
        
    } catch (error) {
        console.error('Error loading admin data:', error);
    }
}

async function loadQuickStats() {
    try {
        // Total users
        const { count: totalUsers } = await supabase
            .from('users')
            .select('*', { count: 'exact', head: true });
        
        // Pending withdrawals
        const { count: pendingWithdrawals } = await supabase
            .from('withdrawal_requests')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'pending');
        
        // Today's date
        const today = new Date();
        const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const todayEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        
        // Today deposits
        const { data: todayDepositsData } = await supabase
            .from('transactions')
            .select('amount')
            .eq('type', 'deposit')
            .eq('status', 'completed')
            .gte('created_at', todayStart.toISOString())
            .lt('created_at', todayEnd.toISOString());
        
        const todayDeposits = todayDepositsData?.reduce((sum, t) => sum + t.amount, 0) || 0;
        
        // Today withdrawals
        const { data: todayWithdrawalsData } = await supabase
            .from('transactions')
            .select('amount')
            .eq('type', 'withdrawal')
            .eq('status', 'completed')
            .gte('created_at', todayStart.toISOString())
            .lt('created_at', todayEnd.toISOString());
        
        const todayWithdrawals = Math.abs(todayWithdrawalsData?.reduce((sum, t) => sum + t.amount, 0) || 0);
        
        // Update UI
        document.getElementById('total-users').textContent = totalUsers || 0;
        document.getElementById('pending-withdrawals').textContent = pendingWithdrawals || 0;
        document.getElementById('withdrawal-badge').textContent = pendingWithdrawals || 0;
        document.getElementById('today-deposits').textContent = `${todayDeposits.toFixed(2)} USDT`;
        document.getElementById('today-withdrawals').textContent = `${todayWithdrawals.toFixed(2)} USDT`;
        
    } catch (error) {
        console.error('Error loading quick stats:', error);
    }
}

function setupEventListeners() {
    try {
        // Navigation
        document.querySelectorAll('.nav-line').forEach(nav => {
            nav.addEventListener('click', async () => {
                const section = nav.getAttribute('data-section');
                await loadSection(section);
                
                // Update active nav
                document.querySelectorAll('.nav-line').forEach(n => n.classList.remove('active'));
                nav.classList.add('active');
            });
        });

        // Withdrawal actions
        document.getElementById('refresh-withdrawals').addEventListener('click', () => loadSection('withdrawals'));
        document.getElementById('withdrawal-filter').addEventListener('change', () => loadSection('withdrawals'));
        document.getElementById('withdrawal-search').addEventListener('input', () => loadSection('withdrawals'));

        // User management
        document.getElementById('refresh-users').addEventListener('click', () => loadSection('users'));
        document.getElementById('user-filter').addEventListener('change', () => loadSection('users'));
        document.getElementById('user-search').addEventListener('input', () => loadSection('users'));
        document.getElementById('add-user').addEventListener('click', showAddUserModal);

        // Transactions
        document.getElementById('refresh-transactions').addEventListener('click', () => loadSection('transactions'));
        document.getElementById('transaction-filter').addEventListener('change', () => loadSection('transactions'));
        document.getElementById('transaction-date').addEventListener('change', () => loadSection('transactions'));
        document.getElementById('export-transactions').addEventListener('click', exportTransactions);

        // Referrals
        document.getElementById('refresh-referrals').addEventListener('click', () => loadSection('referrals'));

        // Settings
        document.getElementById('save-settings').addEventListener('click', saveSettings);

        // Modal buttons
        document.getElementById('close-action-modal').addEventListener('click', hideActionModal);
        document.getElementById('close-user-modal').addEventListener('click', hideUserModal);
        document.getElementById('save-user-changes').addEventListener('click', saveUserChanges);
        document.getElementById('confirm-approve').addEventListener('click', approveWithdrawal);
        document.getElementById('confirm-reject').addEventListener('click', rejectWithdrawal);
        
    } catch (error) {
        console.error('Error setting up admin event listeners:', error);
        setTimeout(setupEventListeners, 500);
    }
}

async function loadSection(section) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    
    // Show selected section
    document.getElementById(`${section}-section`).classList.add('active');
    
    // Load section data
    switch(section) {
        case 'withdrawals':
            await loadWithdrawalRequests();
            break;
        case 'users':
            await loadUsers();
            break;
        case 'transactions':
            await loadAllTransactions();
            break;
        case 'referrals':
            await loadReferralData();
            break;
        case 'settings':
            loadSettings();
            break;
    }
}

async function loadWithdrawalRequests() {
    try {
        const filter = document.getElementById('withdrawal-filter').value;
        const search = document.getElementById('withdrawal-search').value.toLowerCase();
        
        let query = supabase
            .from('withdrawal_requests')
            .select(`
                *,
                user:users(id, username, balance, vip_level)
            `)
            .order('created_at', { ascending: false });
        
        if (filter !== 'all') {
            query = query.eq('status', filter);
        }
        
        const { data: requests, error } = await query;
        
        if (error) throw error;
        
        const container = document.getElementById('withdrawal-list');
        
        if (!requests || requests.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-inbox"></i>
                    <p>No withdrawal requests found</p>
                </div>
            `;
            return;
        }
        
        let html = '';
        
        requests.forEach(request => {
            // Apply search filter
            if (search && !request.id.toString().includes(search) && 
                !request.address.toLowerCase().includes(search) &&
                !request.user?.username?.toLowerCase().includes(search)) {
                return;
            }
            
            const statusColor = {
                'pending': '#f9ae3d',
                'approved': '#52c41a',
                'rejected': '#ff6b6b',
                'processing': '#4e7771'
            }[request.status] || '#ccc';
            
            const statusIcon = {
                'pending': 'fa-clock',
                'approved': 'fa-check-circle',
                'rejected': 'fa-times-circle',
                'processing': 'fa-spinner'
            }[request.status] || 'fa-question-circle';
            
            html += `
                <div class="withdrawal-item" data-id="${request.id}">
                    <div class="withdrawal-header">
                        <div class="withdrawal-id">#${request.id}</div>
                        <div class="withdrawal-status" style="color: ${statusColor};">
                            <i class="fas ${statusIcon}"></i> ${request.status.toUpperCase()}
                        </div>
                    </div>
                    
                    <div class="withdrawal-details">
                        <div class="detail-row">
                            <span class="detail-label">User:</span>
                            <span class="detail-value">${request.user?.username || 'Unknown'} (VIP ${request.user?.vip_level || 1})</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Amount:</span>
                            <span class="detail-value" style="color: #f9ae3d; font-weight: bold;">${request.amount} USDT</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Network:</span>
                            <span class="detail-value">${request.network}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Address:</span>
                            <span class="detail-value" style="font-family: monospace; font-size: 12px;">${request.address}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Date:</span>
                            <span class="detail-value">${new Date(request.created_at).toLocaleString()}</span>
                        </div>
                    </div>
                    
                    ${request.status === 'pending' ? `
                        <div class="withdrawal-actions">
                            <button class="action-btn approve" data-id="${request.id}">
                                <i class="fas fa-check"></i> Approve
                            </button>
                            <button class="action-btn reject" data-id="${request.id}">
                                <i class="fas fa-times"></i> Reject
                            </button>
                        </div>
                    ` : ''}
                    
                    ${request.admin_notes ? `
                        <div class="admin-notes">
                            <strong>Admin Notes:</strong> ${request.admin_notes}
                        </div>
                    ` : ''}
                </div>
            `;
        });
        
        container.innerHTML = html;
        
        // Add event listeners to action buttons
        container.querySelectorAll('.action-btn.approve').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const requestId = parseInt(btn.getAttribute('data-id'));
                showActionModal(requestId, 'approve');
            });
        });
        
        container.querySelectorAll('.action-btn.reject').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const requestId = parseInt(btn.getAttribute('data-id'));
                showActionModal(requestId, 'reject');
            });
        });
        
    } catch (error) {
        console.error('Error loading withdrawal requests:', error);
        document.getElementById('withdrawal-list').innerHTML = `
            <div class="empty-state error">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Error loading withdrawal requests</p>
            </div>
        `;
    }
}

async function showActionModal(requestId, action) {
    try {
        // Load request details
        const { data: request, error } = await supabase
            .from('withdrawal_requests')
            .select(`
                *,
                user:users(username, email, balance)
            `)
            .eq('id', requestId)
            .single();
            
        if (error) throw error;
        
        // Populate details
        document.getElementById('request-details').innerHTML = `
            <div class="request-info">
                <div class="info-row">
                    <span>Request ID:</span>
                    <span>#${request.id}</span>
                </div>
                <div class="info-row">
                    <span>User:</span>
                    <span>${request.user?.username} (${request.user?.email || 'No email'})</span>
                </div>
                <div class="info-row">
                    <span>Amount:</span>
                    <span style="color: #f9ae3d; font-weight: bold;">${request.amount} USDT</span>
                </div>
                <div class="info-row">
                    <span>Network:</span>
                    <span>${request.network}</span>
                </div>
                <div class="info-row">
                    <span>Address:</span>
                    <span style="font-family: monospace; font-size: 12px;">${request.address}</span>
                </div>
                <div class="info-row">
                    <span>User Balance:</span>
                    <span>${request.user?.balance?.toFixed(2) || '0.00'} USDT</span>
                </div>
                <div class="info-row">
                    <span>Date:</span>
                    <span>${new Date(request.created_at).toLocaleString()}</span>
                </div>
            </div>
        `;
        
        // Show appropriate action section
        if (action === 'approve') {
            document.getElementById('approve-section').style.display = 'block';
            document.getElementById('reject-section').style.display = 'none';
        } else {
            document.getElementById('approve-section').style.display = 'none';
            document.getElementById('reject-section').style.display = 'block';
        }
        
        // Store current request id
        document.getElementById('withdrawal-action-modal').dataset.requestId = requestId;
        document.getElementById('withdrawal-action-modal').dataset.action = action;
        
        // Show modal
        document.getElementById('withdrawal-action-modal').style.display = 'flex';
        
    } catch (error) {
        console.error('Error showing action modal:', error);
        window.showCustomAlert('Error loading request details');
    }
}

async function approveWithdrawal() {
    const modal = document.getElementById('withdrawal-action-modal');
    const requestId = parseInt(modal.dataset.requestId);
    const txHash = document.getElementById('tx-hash').value.trim();
    const notes = document.getElementById('approve-notes').value.trim();
    const admin = window.getCurrentUser();
    
    if (!txHash) {
        window.showCustomAlert('Please enter transaction hash');
        return;
    }
    
    try {
        // Call Supabase function to approve withdrawal
        const { data, error } = await supabase.rpc('approve_withdrawal', {
            p_request_id: requestId,
            p_admin_id: admin.id,
            p_transaction_hash: txHash,
            p_notes: notes
        });
        
        if (error) throw error;
        
        window.showCustomAlert('Withdrawal approved successfully!');
        hideActionModal();
        
        // Refresh withdrawal list
        await loadSection('withdrawals');
        await loadQuickStats();
        
    } catch (error) {
        console.error('Error approving withdrawal:', error);
        window.showCustomAlert('Error approving withdrawal: ' + error.message);
    }
}

async function rejectWithdrawal() {
    const modal = document.getElementById('withdrawal-action-modal');
    const requestId = parseInt(modal.dataset.requestId);
    const reason = document.getElementById('reject-reason').value.trim();
    const admin = window.getCurrentUser();
    
    if (!reason) {
        window.showCustomAlert('Please enter rejection reason');
        return;
    }
    
    try {
        // Call Supabase function to reject withdrawal
        const { data, error } = await supabase.rpc('reject_withdrawal', {
            p_request_id: requestId,
            p_admin_id: admin.id,
            p_reason: reason
        });
        
        if (error) throw error;
        
        window.showCustomAlert('Withdrawal rejected and funds returned to user');
        hideActionModal();
        
        // Refresh withdrawal list
        await loadSection('withdrawals');
        await loadQuickStats();
        
    } catch (error) {
        console.error('Error rejecting withdrawal:', error);
        window.showCustomAlert('Error rejecting withdrawal: ' + error.message);
    }
}

function hideActionModal() {
    document.getElementById('withdrawal-action-modal').style.display = 'none';
    document.getElementById('tx-hash').value = '';
    document.getElementById('approve-notes').value = '';
    document.getElementById('reject-reason').value = '';
}

async function loadUsers() {
    try {
        const filter = document.getElementById('user-filter').value;
        const search = document.getElementById('user-search').value.toLowerCase();
        
        let query = supabase
            .from('users')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (filter.startsWith('vip')) {
            const vipLevel = parseInt(filter.replace('vip', ''));
            query = query.eq('vip_level', vipLevel);
        }
        
        const { data: users, error } = await query;
        
        if (error) throw error;
        
        const container = document.getElementById('user-list');
        
        if (!users || users.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-users"></i>
                    <p>No users found</p>
                </div>
            `;
            return;
        }
        
        let html = '';
        
        users.forEach(user => {
            // Apply search filter
            if (search && !user.id.toLowerCase().includes(search) && 
                !user.username.toLowerCase().includes(search) &&
                !user.email?.toLowerCase().includes(search)) {
                return;
            }
            
            html += `
                <div class="user-item" data-id="${user.id}">
                    <div class="user-header">
                        <div class="user-info">
                            <div class="user-name">${user.username}</div>
                            <div class="user-id">${user.id}</div>
                        </div>
                        <div class="user-status">
                            <span class="vip-badge">VIP ${user.vip_level}</span>
                            <span class="role-badge">${user.role}</span>
                        </div>
                    </div>
                    
                    <div class="user-details">
                        <div class="detail-row">
                            <span class="detail-label">Balance:</span>
                            <span class="detail-value" style="color: #f9ae3d;">${user.balance.toFixed(2)} USDT</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Signals:</span>
                            <span class="detail-value">${user.signals_available}/3</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Email:</span>
                            <span class="detail-value">${user.email || 'No email'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Invite Code:</span>
                            <span class="detail-value">${user.invite_code}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Joined:</span>
                            <span class="detail-value">${new Date(user.created_at).toLocaleDateString()}</span>
                        </div>
                    </div>
                    
                    <div class="user-actions">
                        <button class="action-btn edit" data-id="${user.id}">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="action-btn transactions" data-id="${user.id}">
                            <i class="fas fa-history"></i> Transactions
                        </button>
                        ${user.role !== 'admin' ? `
                            <button class="action-btn delete" data-id="${user.id}">
                                <i class="fas fa-trash"></i> Delete
                            </button>
                        ` : ''}
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
        
        // Add event listeners
        container.querySelectorAll('.action-btn.edit').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const userId = btn.getAttribute('data-id');
                showUserEditModal(userId);
            });
        });
        
        container.querySelectorAll('.action-btn.delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const userId = btn.getAttribute('data-id');
                deleteUser(userId);
            });
        });
        
    } catch (error) {
        console.error('Error loading users:', error);
    }
}

async function showUserEditModal(userId) {
    try {
        const { data: user, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .single();
            
        if (error) throw error;
        
        document.getElementById('user-edit-form').innerHTML = `
            <input type="hidden" id="edit-user-id" value="${user.id}">
            
            <div class="form-group">
                <label>Username</label>
                <input type="text" id="edit-username" value="${user.username}" class="admin-input">
            </div>
            
            <div class="form-group">
                <label>Email</label>
                <input type="email" id="edit-email" value="${user.email || ''}" class="admin-input">
            </div>
            
            <div class="form-group">
                <label>Balance (USDT)</label>
                <input type="number" id="edit-balance" value="${user.balance}" step="0.01" class="admin-input">
            </div>
            
            <div class="form-group">
                <label>VIP Level</label>
                <select id="edit-vip-level" class="admin-select">
                    ${[1,2,3,4,5,6].map(level => `
                        <option value="${level}" ${user.vip_level === level ? 'selected' : ''}>VIP ${level}</option>
                    `).join('')}
                </select>
            </div>
            
            <div class="form-group">
                <label>Signals Available</label>
                <input type="number" id="edit-signals" value="${user.signals_available}" min="0" max="3" class="admin-input">
            </div>
            
            <div class="form-group">
                <label>Role</label>
                <select id="edit-role" class="admin-select">
                    <option value="user" ${user.role === 'user' ? 'selected' : ''}>User</option>
                    <option value="admin" ${user.role === 'admin' ? 'selected' : ''}>Admin</option>
                </select>
            </div>
            
            <div class="form-group">
                <label>TRC20 Address</label>
                <input type="text" id="edit-trc20" value="${user.trc20_address || ''}" class="admin-input">
            </div>
            
            <div class="form-group">
                <label>BEP20 Address</label>
                <input type="text" id="edit-bep20" value="${user.bep20_address || ''}" class="admin-input">
            </div>
        `;
        
        document.getElementById('user-edit-modal').style.display = 'flex';
        
    } catch (error) {
        console.error('Error showing user edit modal:', error);
        window.showCustomAlert('Error loading user data');
    }
}

async function saveUserChanges() {
    const userId = document.getElementById('edit-user-id').value;
    const updates = {
        username: document.getElementById('edit-username').value.trim(),
        email: document.getElementById('edit-email').value.trim(),
        balance: parseFloat(document.getElementById('edit-balance').value),
        vip_level: parseInt(document.getElementById('edit-vip-level').value),
        signals_available: parseInt(document.getElementById('edit-signals').value),
        role: document.getElementById('edit-role').value,
        trc20_address: document.getElementById('edit-trc20').value.trim(),
        bep20_address: document.getElementById('edit-bep20').value.trim()
    };
    
    try {
        const { error } = await supabase
            .from('users')
            .update(updates)
            .eq('id', userId);
            
        if (error) throw error;
        
        window.showCustomAlert('User updated successfully!');
        hideUserModal();
        
        // Refresh user list
        await loadSection('users');
        
    } catch (error) {
        console.error('Error updating user:', error);
        window.showCustomAlert('Error updating user: ' + error.message);
    }
}

async function deleteUser(userId) {
    const confirm = await window.showCustomModal('Confirm Delete', 
        `Are you sure you want to delete this user? This action cannot be undone.`,
        () => true
    );
    
    if (!confirm) return;
    
    try {
        const { error } = await supabase
            .from('users')
            .delete()
            .eq('id', userId);
            
        if (error) throw error;
        
        window.showCustomAlert('User deleted successfully!');
        
        // Refresh user list
        await loadSection('users');
        await loadQuickStats();
        
    } catch (error) {
        console.error('Error deleting user:', error);
        window.showCustomAlert('Error deleting user: ' + error.message);
    }
}

function hideUserModal() {
    document.getElementById('user-edit-modal').style.display = 'none';
}

async function loadAllTransactions() {
    // Similar implementation for loading all transactions
    // ... (code would be similar to loadWithdrawalRequests)
}

async function loadReferralData() {
    // Implementation for referral data
    // ... (code would load referral statistics)
}

function loadSettings() {
    // Load current settings into form
    // This could be from a settings table or hardcoded
}

async function saveSettings() {
    // Save settings to database
    // This would update a settings table
}

function showAddUserModal() {
    // Show modal for adding new user
}

async function exportTransactions() {
    // Export transactions to CSV
}

function showAddUserModal() {
    document.getElementById('user-edit-form').innerHTML = `
        <div class="form-group">
            <label>Username</label>
            <input type="text" id="new-username" placeholder="Enter username" class="admin-input">
        </div>
        
        <div class="form-group">
            <label>Email</label>
            <input type="email" id="new-email" placeholder="Enter email" class="admin-input">
        </div>
        
        <div class="form-group">
            <label>Password</label>
            <input type="password" id="new-password" placeholder="Enter password" class="admin-input">
        </div>
        
        <div class="form-group">
            <label>Payment Password</label>
            <input type="password" id="new-payment-password" placeholder="Enter payment password" class="admin-input">
        </div>
        
        <div class="form-group">
            <label>Initial Balance (USDT)</label>
            <input type="number" id="new-balance" value="0" step="0.01" class="admin-input">
        </div>
        
        <div class="form-group">
            <label>VIP Level</label>
            <select id="new-vip-level" class="admin-select">
                ${[1,2,3,4,5,6].map(level => `
                    <option value="${level}">VIP ${level}</option>
                `).join('')}
            </select>
        </div>
        
        <div class="form-group">
            <label>Role</label>
            <select id="new-role" class="admin-select">
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
        </div>
    `;
    
    // Change modal title and button
    document.querySelector('#user-edit-modal .pop-header').textContent = 'Add New User';
    document.getElementById('save-user-changes').textContent = 'Add User';
    document.getElementById('save-user-changes').onclick = addNewUser;
    
    document.getElementById('user-edit-modal').style.display = 'flex';
}

async function addNewUser() {
    const newUser = {
        id: window.GLY.generateUserId(),
        username: document.getElementById('new-username').value.trim(),
        email: document.getElementById('new-email').value.trim(),
        password: document.getElementById('new-password').value,
        payment_password: document.getElementById('new-payment-password').value,
        invite_code: window.GLY.generateInviteCode(),
        balance: parseFloat(document.getElementById('new-balance').value) || 0,
        vip_level: parseInt(document.getElementById('new-vip-level').value),
        role: document.getElementById('new-role').value,
        signals_available: 3,
        last_signal_update: new Date().toISOString(),
        created_at: new Date().toISOString()
    };
    
    if (!newUser.username || !newUser.password || !newUser.payment_password) {
        window.showCustomAlert('Please fill in all required fields');
        return;
    }
    
    try {
        const { error } = await supabase
            .from('users')
            .insert([newUser]);
            
        if (error) throw error;
        
        window.showCustomAlert('User added successfully!');
        hideUserModal();
        
        // Refresh user list
        await loadSection('users');
        await loadQuickStats();
        
    } catch (error) {
        console.error('Error adding user:', error);
        window.showCustomAlert('Error adding user: ' + error.message);
    }
}
[file content end]
