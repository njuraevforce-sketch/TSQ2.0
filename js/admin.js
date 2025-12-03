// Admin section
export default function renderAdmin() {
    return `
        <div class="card padding">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: white;">Admin Panel</h2>
                <p style="color: #ccc;">Administrator Control Panel</p>
            </div>

            <!-- Admin tabs -->
            <div class="admin-tabs">
                <div class="admin-tab active" data-tab="withdrawals">Withdrawals</div>
                <div class="admin-tab" data-tab="users">Users</div>
                <div class="admin-tab" data-tab="transactions">Transactions</div>
                <div class="admin-tab" data-tab="settings">Settings</div>
            </div>

            <!-- Withdrawals tab -->
            <div class="admin-tab-content active" id="withdrawals-tab">
                <div class="text-white text-bold margin-bottom">Pending Withdrawal Requests</div>
                <div id="pending-withdrawals-list">
                    <div style="color: #ccc; text-align: center; padding: 20px;">Loading...</div>
                </div>

                <div class="text-white text-bold margin-top margin-bottom">Withdrawal History</div>
                <div id="withdrawal-history-admin">
                    <div style="color: #ccc; text-align: center; padding: 20px;">Loading...</div>
                </div>
            </div>

            <!-- Users tab -->
            <div class="admin-tab-content" id="users-tab">
                <div class="text-white text-bold margin-bottom">All Users</div>
                <div id="users-list">
                    <div style="color: #ccc; text-align: center; padding: 20px;">Loading...</div>
                </div>
            </div>

            <!-- Transactions tab -->
            <div class="admin-tab-content" id="transactions-tab">
                <div class="text-white text-bold margin-bottom">All Transactions</div>
                <div id="all-transactions-list">
                    <div style="color: #ccc; text-align: center; padding: 20px;">Loading...</div>
                </div>
            </div>

            <!-- Settings tab -->
            <div class="admin-tab-content" id="settings-tab">
                <div class="text-white text-bold margin-bottom">Admin Settings</div>
                
                <div class="admin-settings-grid">
                    <div class="admin-setting-item" id="edit-user">
                        <div class="admin-setting-icon">👤</div>
                        <div class="admin-setting-name">Edit User</div>
                    </div>
                    <div class="admin-setting-item" id="add-balance">
                        <div class="admin-setting-icon">💰</div>
                        <div class="admin-setting-name">Add Balance</div>
                    </div>
                    <div class="admin-setting-item" id="subtract-balance">
                        <div class="admin-setting-icon">➖</div>
                        <div class="admin-setting-name">Subtract Balance</div>
                    </div>
                    <div class="admin-setting-item" id="change-vip">
                        <div class="admin-setting-icon">⭐</div>
                        <div class="admin-setting-name">Change VIP Level</div>
                    </div>
                    <div class="admin-setting-item" id="reset-signals">
                        <div class="admin-setting-icon">🔄</div>
                        <div class="admin-setting-name">Reset Signals</div>
                    </div>
                    <div class="admin-setting-item" id="system-stats">
                        <div class="admin-setting-icon">📊</div>
                        <div class="admin-setting-name">System Statistics</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Admin modals -->
        <div class="pop-overlay" id="admin-modal" style="display: none;">
            <div class="pop-content" style="max-width: 400px;">
                <div class="pop-header" id="admin-modal-title">Admin Action</div>
                <div class="pop-body" id="admin-modal-body">
                    <!-- Modal content loaded dynamically -->
                </div>
                <div class="pop-footer">
                    <button id="admin-modal-confirm" style="margin-right: 10px; background: #4e7771;">Confirm</button>
                    <button id="admin-modal-cancel" style="background: #666;">Cancel</button>
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    document.body.classList.add('no-tabbar');

    // Check admin access
    const user = window.getCurrentUser();
    if (!user || user.username !== 'admin') {
        window.showSection('home');
        return;
    }

    // Setup tab switching
    setupAdminTabs();
    
    // Load initial data
    await loadPendingWithdrawals();
    await loadAllWithdrawals();
    await loadAllUsers();
    await loadAllTransactions();
    
    // Setup admin actions
    setupAdminActions();
}

function setupAdminTabs() {
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Update active tab
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding tab content
            document.querySelectorAll('.admin-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tabName}-tab`).classList.add('active');
            
            // Load data for tab if needed
            if (tabName === 'withdrawals') {
                loadPendingWithdrawals();
                loadAllWithdrawals();
            } else if (tabName === 'users') {
                loadAllUsers();
            } else if (tabName === 'transactions') {
                loadAllTransactions();
            }
        });
    });
}

async function loadPendingWithdrawals() {
    try {
        const { data: withdrawals, error } = await window.supabase
            .from('withdrawal_requests')
            .select(`
                *,
                user:users(username, email)
            `)
            .eq('status', 'pending')
            .order('created_at', { ascending: true });
            
        if (error) throw error;
        
        const container = document.getElementById('pending-withdrawals-list');
        let html = '';
        
        if (withdrawals && withdrawals.length > 0) {
            withdrawals.forEach(withdrawal => {
                const date = new Date(withdrawal.created_at).toLocaleString();
                
                html += `
                    <div class="withdrawal-request-item" data-id="${withdrawal.id}" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 10px; margin-bottom: 10px;">
                        <div style="margin-bottom: 10px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <div style="color: white; font-weight: bold;">${withdrawal.user.username}</div>
                                <div style="color: #f9ae3d; font-weight: bold;">${withdrawal.amount} USDT</div>
                            </div>
                            <div style="color: #ccc; font-size: 12px; margin-bottom: 5px;">
                                ${withdrawal.user.email}
                            </div>
                            <div style="color: #ccc; font-size: 12px; margin-bottom: 5px;">
                                Address: ${withdrawal.address} (${withdrawal.network})
                            </div>
                            <div style="color: #ccc; font-size: 12px;">
                                Date: ${date} | Fee: ${withdrawal.fee} USDT | Net: ${withdrawal.net_amount} USDT
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px;">
                            <button class="admin-action-btn approve-btn" data-id="${withdrawal.id}" style="flex: 1; background: #52c41a; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer;">Approve</button>
                            <button class="admin-action-btn reject-btn" data-id="${withdrawal.id}" style="flex: 1; background: #ff4d4f; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer;">Reject</button>
                        </div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 20px;">No pending withdrawal requests</div>';
        }
        
        container.innerHTML = html;
        
        // Add event listeners to buttons
        document.querySelectorAll('.approve-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const withdrawalId = this.getAttribute('data-id');
                approveWithdrawal(withdrawalId);
            });
        });
        
        document.querySelectorAll('.reject-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const withdrawalId = this.getAttribute('data-id');
                rejectWithdrawal(withdrawalId);
            });
        });
        
    } catch (error) {
        console.error('Error loading pending withdrawals:', error);
    }
}

async function loadAllWithdrawals() {
    try {
        const { data: withdrawals, error } = await window.supabase
            .from('withdrawal_requests')
            .select(`
                *,
                user:users(username)
            `)
            .order('created_at', { ascending: false })
            .limit(20);
            
        if (error) throw error;
        
        const container = document.getElementById('withdrawal-history-admin');
        let html = '';
        
        if (withdrawals && withdrawals.length > 0) {
            withdrawals.forEach(withdrawal => {
                const date = new Date(withdrawal.created_at).toLocaleString();
                const statusColor = withdrawal.status === 'approved' ? '#52c41a' : 
                                  withdrawal.status === 'rejected' ? '#ff4d4f' : '#f9ae3d';
                
                html += `
                    <div class="withdrawal-history-item" style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; margin-bottom: 8px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <div style="color: white;">${withdrawal.user.username}</div>
                            <div style="color: ${statusColor}; font-weight: bold;">${withdrawal.status.toUpperCase()}</div>
                        </div>
                        <div style="color: #ccc; font-size: 12px;">
                            ${date} | ${withdrawal.amount} USDT (${withdrawal.network}) | Fee: ${withdrawal.fee} USDT
                        </div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 20px;">No withdrawal history</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading all withdrawals:', error);
    }
}

async function loadAllUsers() {
    try {
        const { data: users, error } = await window.supabase
            .from('users')
            .select('*')
            .order('created_at', { ascending: false });
            
        if (error) throw error;
        
        const container = document.getElementById('users-list');
        let html = '';
        
        if (users && users.length > 0) {
            users.forEach(user => {
                const date = new Date(user.created_at).toLocaleDateString();
                const balanceColor = user.balance >= 20 ? '#52c41a' : '#ff4d4f';
                
                html += `
                    <div class="user-item" data-user-id="${user.id}" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 10px; margin-bottom: 10px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <div style="color: white; font-weight: bold;">${user.username}</div>
                            <div style="color: ${balanceColor}; font-weight: bold;">${user.balance.toFixed(2)} USDT</div>
                        </div>
                        <div style="color: #ccc; font-size: 12px; margin-bottom: 5px;">
                            ID: ${user.id} | VIP: ${user.vip_level} | Signals: ${user.signals_available}
                        </div>
                        <div style="color: #ccc; font-size: 12px; margin-bottom: 10px;">
                            ${user.email || 'No email'} | Joined: ${date}
                        </div>
                        <div style="display: flex; gap: 5px; flex-wrap: wrap;">
                            <button class="user-action-btn edit-user" data-user-id="${user.id}" style="background: #4e7771; color: white; border: none; padding: 5px 10px; border-radius: 5px; font-size: 12px; cursor: pointer;">Edit</button>
                            <button class="user-action-btn add-balance" data-user-id="${user.id}" style="background: #52c41a; color: white; border: none; padding: 5px 10px; border-radius: 5px; font-size: 12px; cursor: pointer;">Add Balance</button>
                            <button class="user-action-btn subtract-balance" data-user-id="${user.id}" style="background: #ff4d4f; color: white; border: none; padding: 5px 10px; border-radius: 5px; font-size: 12px; cursor: pointer;">Subtract Balance</button>
                            <button class="user-action-btn change-vip" data-user-id="${user.id}" style="background: #f9ae3d; color: white; border: none; padding: 5px 10px; border-radius: 5px; font-size: 12px; cursor: pointer;">Change VIP</button>
                        </div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 20px;">No users found</div>';
        }
        
        container.innerHTML = html;
        
        // Add event listeners to user action buttons
        setupUserActionButtons();
        
    } catch (error) {
        console.error('Error loading users:', error);
    }
}

async function loadAllTransactions() {
    try {
        const { data: transactions, error } = await window.supabase
            .from('transactions')
            .select(`
                *,
                user:users(username)
            `)
            .order('created_at', { ascending: false })
            .limit(50);
            
        if (error) throw error;
        
        const container = document.getElementById('all-transactions-list');
        let html = '';
        
        if (transactions && transactions.length > 0) {
            html = '<table style="width: 100%; color: white; font-size: 12px; border-collapse: collapse;">';
            html += `
                <thead>
                    <tr style="background: rgba(78, 119, 113, 0.5);">
                        <th style="padding: 10px; text-align: left;">User</th>
                        <th style="padding: 10px; text-align: left;">Type</th>
                        <th style="padding: 10px; text-align: left;">Amount</th>
                        <th style="padding: 10px; text-align: left;">Status</th>
                        <th style="padding: 10px; text-align: left;">Date</th>
                    </tr>
                </thead>
                <tbody>
            `;
            
            transactions.forEach(transaction => {
                const date = new Date(transaction.created_at).toLocaleDateString();
                const amountColor = transaction.amount > 0 ? '#52c41a' : '#ff4d4f';
                const amountSign = transaction.amount > 0 ? '+' : '';
                
                html += `
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <td style="padding: 10px;">${transaction.user.username}</td>
                        <td style="padding: 10px;">${transaction.type}</td>
                        <td style="padding: 10px; color: ${amountColor}; font-weight: bold;">${amountSign}${transaction.amount} USDT</td>
                        <td style="padding: 10px;">${transaction.status}</td>
                        <td style="padding: 10px;">${date}</td>
                    </tr>
                `;
            });
            
            html += '</tbody></table>';
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 20px;">No transactions found</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading transactions:', error);
    }
}

function setupUserActionButtons() {
    document.querySelectorAll('.edit-user').forEach(btn => {
        btn.addEventListener('click', function() {
            const userId = this.getAttribute('data-user-id');
            showEditUserModal(userId);
        });
    });
    
    document.querySelectorAll('.add-balance').forEach(btn => {
        btn.addEventListener('click', function() {
            const userId = this.getAttribute('data-user-id');
            showAddBalanceModal(userId);
        });
    });
    
    document.querySelectorAll('.subtract-balance').forEach(btn => {
        btn.addEventListener('click', function() {
            const userId = this.getAttribute('data-user-id');
            showSubtractBalanceModal(userId);
        });
    });
    
    document.querySelectorAll('.change-vip').forEach(btn => {
        btn.addEventListener('click', function() {
            const userId = this.getAttribute('data-user-id');
            showChangeVIPModal(userId);
        });
    });
}

function setupAdminActions() {
    document.getElementById('edit-user').addEventListener('click', () => showEditUserModal());
    document.getElementById('add-balance').addEventListener('click', () => showAddBalanceModal());
    document.getElementById('subtract-balance').addEventListener('click', () => showSubtractBalanceModal());
    document.getElementById('change-vip').addEventListener('click', () => showChangeVIPModal());
    document.getElementById('reset-signals').addEventListener('click', resetAllSignals);
    document.getElementById('system-stats').addEventListener('click', showSystemStats);
    
    // Admin modal buttons
    document.getElementById('admin-modal-cancel').addEventListener('click', hideAdminModal);
    document.getElementById('admin-modal-confirm').addEventListener('click', processAdminAction);
}

let currentAdminAction = null;
let currentActionData = null;

function showAdminModal(title, content) {
    document.getElementById('admin-modal-title').textContent = title;
    document.getElementById('admin-modal-body').innerHTML = content;
    document.getElementById('admin-modal').style.display = 'flex';
}

function hideAdminModal() {
    document.getElementById('admin-modal').style.display = 'none';
    currentAdminAction = null;
    currentActionData = null;
}

async function approveWithdrawal(withdrawalId) {
    try {
        const { data: withdrawal, error: fetchError } = await window.supabase
            .from('withdrawal_requests')
            .select('*, user:users(balance)')
            .eq('id', withdrawalId)
            .single();
            
        if (fetchError) throw fetchError;
        
        // Check if user has enough balance
        if (withdrawal.user.balance < withdrawal.amount) {
            window.showCustomAlert('User has insufficient balance for this withdrawal');
            return;
        }
        
        // Deduct balance from user
        const newBalance = withdrawal.user.balance - withdrawal.amount;
        const { error: updateError } = await window.supabase
            .from('users')
            .update({ balance: newBalance })
            .eq('id', withdrawal.user_id);
            
        if (updateError) throw updateError;
        
        // Update withdrawal status
        const { error: statusError } = await window.supabase
            .from('withdrawal_requests')
            .update({ status: 'approved' })
            .eq('id', withdrawalId);
            
        if (statusError) throw statusError;
        
        // Create transaction record
        await window.supabase
            .from('transactions')
            .insert([{
                user_id: withdrawal.user_id,
                type: 'withdrawal',
                amount: -withdrawal.amount,
                status: 'completed',
                description: `Withdrawal approved: ${withdrawal.amount} USDT (Fee: ${withdrawal.fee} USDT)`
            }]);
        
        window.showCustomAlert('Withdrawal approved successfully!');
        loadPendingWithdrawals();
        loadAllWithdrawals();
        
    } catch (error) {
        console.error('Error approving withdrawal:', error);
        window.showCustomAlert('Error approving withdrawal: ' + error.message);
    }
}

async function rejectWithdrawal(withdrawalId) {
    const confirmMessage = 'Are you sure you want to reject this withdrawal request?';
    window.showCustomModal('Confirm Rejection', confirmMessage, async () => {
        try {
            const { error } = await window.supabase
                .from('withdrawal_requests')
                .update({ status: 'rejected' })
                .eq('id', withdrawalId);
                
            if (error) throw error;
            
            window.showCustomAlert('Withdrawal rejected successfully!');
            loadPendingWithdrawals();
            loadAllWithdrawals();
            
        } catch (error) {
            console.error('Error rejecting withdrawal:', error);
            window.showCustomAlert('Error rejecting withdrawal: ' + error.message);
        }
    });
}

function showEditUserModal(userId = null) {
    currentAdminAction = 'edit_user';
    currentActionData = { userId };
    
    const content = `
        <div style="color: #333;">
            <div class="margin-bottom">
                <label style="display: block; margin-bottom: 5px;">User ID</label>
                <input type="text" id="edit-user-id" placeholder="Enter user ID" 
                       style="width: 100%; padding: 10px; border: 2px solid #52c41a; border-radius: 5px; background: transparent;" 
                       ${userId ? `value="${userId}" readonly` : ''}>
            </div>
            <div class="margin-bottom">
                <label style="display: block; margin-bottom: 5px;">New Username (optional)</label>
                <input type="text" id="edit-username" placeholder="Enter new username" 
                       style="width: 100%; padding: 10px; border: 2px solid #52c41a; border-radius: 5px; background: transparent;">
            </div>
            <div class="margin-bottom">
                <label style="display: block; margin-bottom: 5px;">New Email (optional)</label>
                <input type="email" id="edit-email" placeholder="Enter new email" 
                       style="width: 100%; padding: 10px; border: 2px solid #52c41a; border-radius: 5px; background: transparent;">
            </div>
        </div>
    `;
    
    showAdminModal('Edit User', content);
}

function showAddBalanceModal(userId = null) {
    currentAdminAction = 'add_balance';
    currentActionData = { userId };
    
    const content = `
        <div style="color: #333;">
            <div class="margin-bottom">
                <label style="display: block; margin-bottom: 5px;">User ID</label>
                <input type="text" id="add-balance-user-id" placeholder="Enter user ID" 
                       style="width: 100%; padding: 10px; border: 2px solid #52c41a; border-radius: 5px; background: transparent;" 
                       ${userId ? `value="${userId}" readonly` : ''}>
            </div>
            <div class="margin-bottom">
                <label style="display: block; margin-bottom: 5px;">Amount (USDT)</label>
                <input type="number" id="add-balance-amount" placeholder="Enter amount" 
                       style="width: 100%; padding: 10px; border: 2px solid #52c41a; border-radius: 5px; background: transparent;">
            </div>
            <div class="margin-bottom">
                <label style="display: block; margin-bottom: 5px;">Description (optional)</label>
                <input type="text" id="add-balance-description" placeholder="Enter description" 
                       style="width: 100%; padding: 10px; border: 2px solid #52c41a; border-radius: 5px; background: transparent;">
            </div>
        </div>
    `;
    
    showAdminModal('Add Balance', content);
}

function showSubtractBalanceModal(userId = null) {
    currentAdminAction = 'subtract_balance';
    currentActionData = { userId };
    
    const content = `
        <div style="color: #333;">
            <div class="margin-bottom">
                <label style="display: block; margin-bottom: 5px;">User ID</label>
                <input type="text" id="subtract-balance-user-id" placeholder="Enter user ID" 
                       style="width: 100%; padding: 10px; border: 2px solid #52c41a; border-radius: 5px; background: transparent;" 
                       ${userId ? `value="${userId}" readonly` : ''}>
            </div>
            <div class="margin-bottom">
                <label style="display: block; margin-bottom: 5px;">Amount (USDT)</label>
                <input type="number" id="subtract-balance-amount" placeholder="Enter amount" 
                       style="width: 100%; padding: 10px; border: 2px solid #52c41a; border-radius: 5px; background: transparent;">
            </div>
            <div class="margin-bottom">
                <label style="display: block; margin-bottom: 5px;">Description (optional)</label>
                <input type="text" id="subtract-balance-description" placeholder="Enter description" 
                       style="width: 100%; padding: 10px; border: 2px solid #52c41a; border-radius: 5px; background: transparent;">
            </div>
        </div>
    `;
    
    showAdminModal('Subtract Balance', content);
}

function showChangeVIPModal(userId = null) {
    currentAdminAction = 'change_vip';
    currentActionData = { userId };
    
    const content = `
        <div style="color: #333;">
            <div class="margin-bottom">
                <label style="display: block; margin-bottom: 5px;">User ID</label>
                <input type="text" id="change-vip-user-id" placeholder="Enter user ID" 
                       style="width: 100%; padding: 10px; border: 2px solid #52c41a; border-radius: 5px; background: transparent;" 
                       ${userId ? `value="${userId}" readonly` : ''}>
            </div>
            <div class="margin-bottom">
                <label style="display: block; margin-bottom: 5px;">New VIP Level (1-6)</label>
                <input type="number" id="change-vip-level" placeholder="Enter VIP level (1-6)" min="1" max="6"
                       style="width: 100%; padding: 10px; border: 2px solid #52c41a; border-radius: 5px; background: transparent;">
            </div>
        </div>
    `;
    
    showAdminModal('Change VIP Level', content);
}

async function processAdminAction() {
    try {
        if (currentAdminAction === 'add_balance') {
            const userId = document.getElementById('add-balance-user-id').value;
            const amount = parseFloat(document.getElementById('add-balance-amount').value);
            const description = document.getElementById('add-balance-description').value || 'Admin balance addition';
            
            if (!userId || !amount || amount <= 0) {
                window.showCustomAlert('Please enter valid user ID and amount');
                return;
            }
            
            // Get current balance
            const { data: user, error: fetchError } = await window.supabase
                .from('users')
                .select('balance')
                .eq('id', userId)
                .single();
                
            if (fetchError) throw fetchError;
            
            // Update balance
            const newBalance = user.balance + amount;
            const { error: updateError } = await window.supabase
                .from('users')
                .update({ balance: newBalance })
                .eq('id', userId);
                
            if (updateError) throw updateError;
            
            // Create transaction
            await window.supabase
                .from('transactions')
                .insert([{
                    user_id: userId,
                    type: 'admin_addition',
                    amount: amount,
                    status: 'completed',
                    description: description
                }]);
                
            window.showCustomAlert(`Added ${amount} USDT to user ${userId}. New balance: ${newBalance} USDT`);
            hideAdminModal();
            loadAllUsers();
            
        } else if (currentAdminAction === 'subtract_balance') {
            const userId = document.getElementById('subtract-balance-user-id').value;
            const amount = parseFloat(document.getElementById('subtract-balance-amount').value);
            const description = document.getElementById('subtract-balance-description').value || 'Admin balance subtraction';
            
            if (!userId || !amount || amount <= 0) {
                window.showCustomAlert('Please enter valid user ID and amount');
                return;
            }
            
            // Get current balance
            const { data: user, error: fetchError } = await window.supabase
                .from('users')
                .select('balance')
                .eq('id', userId)
                .single();
                
            if (fetchError) throw fetchError;
            
            if (user.balance < amount) {
                window.showCustomAlert('User has insufficient balance');
                return;
            }
            
            // Update balance
            const newBalance = user.balance - amount;
            const { error: updateError } = await window.supabase
                .from('users')
                .update({ balance: newBalance })
                .eq('id', userId);
                
            if (updateError) throw updateError;
            
            // Create transaction
            await window.supabase
                .from('transactions')
                .insert([{
                    user_id: userId,
                    type: 'admin_subtraction',
                    amount: -amount,
                    status: 'completed',
                    description: description
                }]);
                
            window.showCustomAlert(`Subtracted ${amount} USDT from user ${userId}. New balance: ${newBalance} USDT`);
            hideAdminModal();
            loadAllUsers();
            
        } else if (currentAdminAction === 'change_vip') {
            const userId = document.getElementById('change-vip-user-id').value;
            const vipLevel = parseInt(document.getElementById('change-vip-level').value);
            
            if (!userId || vipLevel < 1 || vipLevel > 6) {
                window.showCustomAlert('Please enter valid user ID and VIP level (1-6)');
                return;
            }
            
            const { error } = await window.supabase
                .from('users')
                .update({ vip_level: vipLevel })
                .eq('id', userId);
                
            if (error) throw error;
            
            window.showCustomAlert(`Changed VIP level to ${vipLevel} for user ${userId}`);
            hideAdminModal();
            loadAllUsers();
            
        } else if (currentAdminAction === 'edit_user') {
            const userId = document.getElementById('edit-user-id').value;
            const newUsername = document.getElementById('edit-username').value.trim();
            const newEmail = document.getElementById('edit-email').value.trim();
            
            if (!userId) {
                window.showCustomAlert('Please enter user ID');
                return;
            }
            
            const updates = {};
            if (newUsername) updates.username = newUsername;
            if (newEmail) updates.email = newEmail;
            
            if (Object.keys(updates).length === 0) {
                window.showCustomAlert('No changes specified');
                return;
            }
            
            const { error } = await window.supabase
                .from('users')
                .update(updates)
                .eq('id', userId);
                
            if (error) throw error;
            
            window.showCustomAlert('User information updated successfully');
            hideAdminModal();
            loadAllUsers();
        }
        
    } catch (error) {
        console.error('Error processing admin action:', error);
        window.showCustomAlert('Error: ' + error.message);
    }
}

async function resetAllSignals() {
    const confirmMessage = 'Are you sure you want to reset all users\' signals to 3?';
    window.showCustomModal('Reset All Signals', confirmMessage, async () => {
        try {
            const { error } = await window.supabase
                .from('users')
                .update({ 
                    signals_available: 3,
                    last_signal_update: new Date().toISOString()
                })
                .neq('username', 'admin');
                
            if (error) throw error;
            
            window.showCustomAlert('All user signals have been reset to 3');
            loadAllUsers();
            
        } catch (error) {
            console.error('Error resetting signals:', error);
            window.showCustomAlert('Error resetting signals: ' + error.message);
        }
    });
}

async function showSystemStats() {
    try {
        const { data: users } = await window.supabase
            .from('users')
            .select('balance, vip_level, signals_available');
            
        const { data: transactions } = await window.supabase
            .from('transactions')
            .select('amount, type');
            
        const { data: withdrawals } = await window.supabase
            .from('withdrawal_requests')
            .select('amount, status');
            
        let totalBalance = 0;
        let totalDeposits = 0;
        let totalWithdrawals = 0;
        let activeUsers = 0;
        
        if (users) {
            users.forEach(user => {
                totalBalance += user.balance;
                if (user.balance > 0) activeUsers++;
            });
        }
        
        if (transactions) {
            transactions.forEach(tx => {
                if (tx.type === 'deposit') totalDeposits += tx.amount;
                else if (tx.type === 'withdrawal') totalWithdrawals += Math.abs(tx.amount);
            });
        }
        
        let pendingWithdrawals = 0;
        if (withdrawals) {
            withdrawals.forEach(w => {
                if (w.status === 'pending') pendingWithdrawals += w.amount;
            });
        }
        
        const statsContent = `
            <div style="color: #333;">
                <h3 style="color: #4e7771; margin-bottom: 15px;">System Statistics</h3>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                    <p><strong>Total Users:</strong> ${users?.length || 0}</p>
                    <p><strong>Active Users (balance > 0):</strong> ${activeUsers}</p>
                    <p><strong>Total System Balance:</strong> ${totalBalance.toFixed(2)} USDT</p>
                    <p><strong>Total Deposits:</strong> ${totalDeposits.toFixed(2)} USDT</p>
                    <p><strong>Total Withdrawals:</strong> ${totalWithdrawals.toFixed(2)} USDT</p>
                    <p><strong>Pending Withdrawals:</strong> ${pendingWithdrawals.toFixed(2)} USDT</p>
                </div>
                <p style="color: #666; font-size: 12px;">Last updated: ${new Date().toLocaleString()}</p>
            </div>
        `;
        
        showAdminModal('System Statistics', statsContent);
        currentAdminAction = null;
        
    } catch (error) {
        console.error('Error loading system stats:', error);
        window.showCustomAlert('Error loading system statistics');
    }
}
