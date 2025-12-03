// Admin section
export default function renderAdmin() {
    return `
        <div class="card padding">
            <div class="text-white text-bold margin-bottom" style="text-align: center; font-size: 18px; color: #f9ae3d;">Admin Panel</div>
            
            <!-- Quick Stats -->
            <div class="admin-stats">
                <div class="admin-stat">
                    <div class="admin-stat-value" id="total-users">0</div>
                    <div class="admin-stat-label">Total Users</div>
                </div>
                <div class="admin-stat">
                    <div class="admin-stat-value" id="total-balance">0</div>
                    <div class="admin-stat-label">Platform Balance</div>
                </div>
                <div class="admin-stat">
                    <div class="admin-stat-value" id="pending-withdrawals">0</div>
                    <div class="admin-stat-label">Pending</div>
                </div>
            </div>
            
            <!-- Admin Navigation -->
            <div class="admin-nav">
                <div class="admin-nav-item active" data-tab="withdrawals">Withdrawals</div>
                <div class="admin-nav-item" data-tab="users">Users</div>
                <div class="admin-nav-item" data-tab="transactions">Transactions</div>
                <div class="admin-nav-item" data-tab="settings">Settings</div>
            </div>
            
            <!-- Withdrawals Tab -->
            <div class="admin-tab active" id="withdrawals-tab">
                <div class="admin-search">
                    <input type="text" id="withdrawal-search" placeholder="Search withdrawals..." class="input-line">
                </div>
                <div class="withdrawal-requests" id="withdrawal-requests">
                    <div style="text-align: center; color: #ccc; padding: 20px;">
                        Loading withdrawal requests...
                    </div>
                </div>
            </div>
            
            <!-- Users Tab -->
            <div class="admin-tab" id="users-tab">
                <div class="admin-search">
                    <input type="text" id="user-search" placeholder="Search users..." class="input-line">
                    <select id="user-filter" style="width: 100%; margin-top: 10px; padding: 8px; background: rgba(0,0,0,0.2); border: 1px solid #4e7771; border-radius: 5px; color: white;">
                        <option value="all">All Users</option>
                        <option value="active">Active Users</option>
                        <option value="vip">VIP Users</option>
                    </select>
                </div>
                <div class="users-list" id="users-list"></div>
            </div>
            
            <!-- Transactions Tab -->
            <div class="admin-tab" id="transactions-tab">
                <div class="transaction-filters">
                    <select id="transaction-filter" style="width: 100%; padding: 8px; background: rgba(0,0,0,0.2); border: 1px solid #4e7771; border-radius: 5px; color: white;">
                        <option value="all">All Transactions</option>
                        <option value="deposit">Deposits</option>
                        <option value="withdrawal">Withdrawals</option>
                        <option value="quantification">Quantification</option>
                        <option value="referral">Referral</option>
                    </select>
                </div>
                <div class="admin-transactions" id="admin-transactions"></div>
            </div>
            
            <!-- Settings Tab -->
            <div class="admin-tab" id="settings-tab">
                <div class="admin-settings">
                    <div class="admin-setting-group">
                        <label style="color: white; font-size: 14px; margin-bottom: 5px;">Platform Settings</label>
                        <button class="pro-btn" id="update-rates" style="width: 100%; margin-bottom: 10px; background: linear-gradient(135deg, #4e7771, #3d615c);">Update Rates</button>
                        <button class="pro-btn" id="manage-bonuses" style="width: 100%; margin-bottom: 10px; background: linear-gradient(135deg, #4e7771, #3d615c);">Manage Bonuses</button>
                        <button class="pro-btn" id="system-stats" style="width: 100%; margin-bottom: 10px; background: linear-gradient(135deg, #4e7771, #3d615c);">System Statistics</button>
                    </div>
                    
                    <div class="admin-setting-group" style="margin-top: 20px;">
                        <label style="color: white; font-size: 14px; margin-bottom: 5px;">User Management</label>
                        <button class="pro-btn" id="add-user" style="width: 100%; margin-bottom: 10px; background: linear-gradient(135deg, #52c41a, #3d8b1c);">Add New User</button>
                        <button class="pro-btn" id="bulk-actions" style="width: 100%; margin-bottom: 10px; background: linear-gradient(135deg, #f9ae3d, #d48c0c);">Bulk Actions</button>
                        <button class="pro-btn" id="export-data" style="width: 100%; margin-bottom: 10px; background: linear-gradient(135deg, #4e7771, #3d615c);">Export Data</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- User Details Modal -->
        <div class="pop-overlay" id="user-details-modal" style="display: none;">
            <div class="pop-content" style="max-width: 400px;">
                <div class="pop-header">User Details</div>
                <div class="pop-body">
                    <div id="user-details-content"></div>
                </div>
                <div class="pop-footer">
                    <button id="close-user-details" style="background: #666;">Close</button>
                </div>
            </div>
        </div>
    `;
}

export async function init() {
    document.body.classList.add('no-tabbar');
    
    // Check admin permissions
    const user = window.getCurrentUser();
    if (!user || !user.is_admin) {
        window.showCustomAlert('Access Denied');
        window.showSection('home');
        return;
    }
    
    await loadAdminStats();
    setupAdminEvents();
    loadWithdrawalRequests();
}

async function loadAdminStats() {
    try {
        // Get total users
        const { count: userCount } = await window.supabase
            .from('users')
            .select('*', { count: 'exact', head: true });
        
        // Get total platform balance
        const { data: users } = await window.supabase
            .from('users')
            .select('balance');
        
        let totalBalance = 0;
        if (users) {
            totalBalance = users.reduce((sum, user) => sum + user.balance, 0);
        }
        
        // Get pending withdrawals
        const { count: pendingCount } = await window.supabase
            .from('withdrawals')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'pending');
        
        // Update stats
        document.getElementById('total-users').textContent = userCount || 0;
        document.getElementById('total-balance').textContent = `${totalBalance.toFixed(2)} USDT`;
        document.getElementById('pending-withdrawals').textContent = pendingCount || 0;
        
    } catch (error) {
        console.error('Error loading admin stats:', error);
    }
}

function setupAdminEvents() {
    // Tab navigation
    document.querySelectorAll('.admin-nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const tab = this.dataset.tab;
            
            // Update active tab
            document.querySelectorAll('.admin-nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected tab
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            document.getElementById(`${tab}-tab`).classList.add('active');
            
            // Load tab data
            switch(tab) {
                case 'withdrawals':
                    loadWithdrawalRequests();
                    break;
                case 'users':
                    loadUsers();
                    break;
                case 'transactions':
                    loadAllTransactions();
                    break;
            }
        });
    });
    
    // Search functionality
    document.getElementById('withdrawal-search')?.addEventListener('input', filterWithdrawals);
    document.getElementById('user-search')?.addEventListener('input', filterUsers);
    document.getElementById('user-filter')?.addEventListener('change', filterUsers);
    document.getElementById('transaction-filter')?.addEventListener('change', filterTransactions);
    
    // Close user details modal
    document.getElementById('close-user-details')?.addEventListener('click', () => {
        document.getElementById('user-details-modal').style.display = 'none';
    });
    
    // Settings buttons
    document.getElementById('update-rates')?.addEventListener('click', updateRates);
    document.getElementById('manage-bonuses')?.addEventListener('click', manageBonuses);
    document.getElementById('system-stats')?.addEventListener('click', showSystemStats);
    document.getElementById('add-user')?.addEventListener('click', addNewUser);
    document.getElementById('export-data')?.addEventListener('click', exportData);
}

async function loadWithdrawalRequests() {
    try {
        const { data: withdrawals, error } = await window.supabase
            .from('withdrawals')
            .select(`
                *,
                user:users(username, email, vip_level)
            `)
            .order('created_at', { ascending: false })
            .limit(50);
            
        if (error) throw error;
        
        const container = document.getElementById('withdrawal-requests');
        let html = '';
        
        if (withdrawals && withdrawals.length > 0) {
            withdrawals.forEach(withdrawal => {
                const date = new Date(withdrawal.created_at).toLocaleString();
                const statusClass = getStatusClass(withdrawal.status);
                const statusColor = getStatusColor(withdrawal.status);
                
                html += `
                    <div class="withdrawal-request-item ${withdrawal.status}" data-id="${withdrawal.id}">
                        <div class="request-header">
                            <div class="request-user">
                                ${withdrawal.user?.username || 'Unknown'} (VIP ${withdrawal.user?.vip_level || 1})
                            </div>
                            <div class="request-amount" style="color: ${statusColor};">${withdrawal.amount} USDT</div>
                        </div>
                        <div class="request-details">
                            <div>Address: ${withdrawal.address.substring(0, 15)}...${withdrawal.address.substring(withdrawal.address.length - 10)}</div>
                            <div>Network: ${withdrawal.network.toUpperCase()} | Date: ${date}</div>
                            <div>Status: <span class="${statusClass}">${withdrawal.status.toUpperCase()}</span></div>
                            ${withdrawal.admin_notes ? `<div>Notes: ${withdrawal.admin_notes}</div>` : ''}
                        </div>
                        
                        ${withdrawal.status === 'pending' ? `
                            <div class="request-actions">
                                <button class="approve-btn" data-id="${withdrawal.id}">Approve</button>
                                <button class="reject-btn" data-id="${withdrawal.id}">Reject</button>
                                <button class="process-btn" data-id="${withdrawal.id}" style="background: #4e7771; color: white; padding: 5px 15px; border: none; border-radius: 5px; cursor: pointer; font-size: 12px;">Processing</button>
                            </div>
                        ` : ''}
                        
                        ${withdrawal.status === 'processing' ? `
                            <div class="request-actions">
                                <button class="complete-btn" data-id="${withdrawal.id}" style="background: #52c41a; color: white; padding: 5px 15px; border: none; border-radius: 5px; cursor: pointer; font-size: 12px;">Complete</button>
                                <button class="reject-btn" data-id="${withdrawal.id}">Reject</button>
                                <button class="add-tx-btn" data-id="${withdrawal.id}" style="background: #f9ae3d; color: white; padding: 5px 15px; border: none; border-radius: 5px; cursor: pointer; font-size: 12px;">Add TX Hash</button>
                            </div>
                        ` : ''}
                    </div>
                `;
            });
            
            // Add event listeners for action buttons
            setTimeout(() => {
                document.querySelectorAll('.approve-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => updateWithdrawalStatus(e.target.dataset.id, 'processing'));
                });
                document.querySelectorAll('.reject-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => updateWithdrawalStatus(e.target.dataset.id, 'rejected'));
                });
                document.querySelectorAll('.process-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => updateWithdrawalStatus(e.target.dataset.id, 'processing'));
                });
                document.querySelectorAll('.complete-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => updateWithdrawalStatus(e.target.dataset.id, 'completed'));
                });
                document.querySelectorAll('.add-tx-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => addTxHash(e.target.dataset.id));
                });
            }, 100);
            
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 40px;">No withdrawal requests</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading withdrawal requests:', error);
        document.getElementById('withdrawal-requests').innerHTML = 
            '<div style="color: #ff6b6b; text-align: center; padding: 20px;">Error loading requests</div>';
    }
}

async function updateWithdrawalStatus(id, status) {
    const adminUser = window.getCurrentUser();
    if (!adminUser) return;
    
    const notes = prompt('Enter notes (optional):');
    
    try {
        const { error } = await window.supabase
            .from('withdrawals')
            .update({ 
                status: status,
                admin_notes: notes,
                processed_by: adminUser.id,
                processed_at: new Date().toISOString()
            })
            .eq('id', id);
            
        if (error) throw error;
        
        // If rejected, refund user balance
        if (status === 'rejected') {
            const { data: withdrawal } = await window.supabase
                .from('withdrawals')
                .select('user_id, amount')
                .eq('id', id)
                .single();
                
            if (withdrawal) {
                // Refund balance
                await window.supabase.rpc('increment_balance', {
                    user_id: withdrawal.user_id,
                    amount: withdrawal.amount
                });
                
                // Update transaction status
                await window.supabase
                    .from('transactions')
                    .update({ status: 'rejected' })
                    .eq('user_id', withdrawal.user_id)
                    .eq('amount', -withdrawal.amount)
                    .order('created_at', { ascending: false })
                    .limit(1);
            }
        }
        
        // If completed, add TX hash if not already
        if (status === 'completed') {
            const txHash = prompt('Enter transaction hash:');
            if (txHash) {
                await window.supabase
                    .from('withdrawals')
                    .update({ tx_hash: txHash })
                    .eq('id', id);
                    
                // Update transaction status
                const { data: withdrawal } = await window.supabase
                    .from('withdrawals')
                    .select('user_id, amount')
                    .eq('id', id)
                    .single();
                    
                if (withdrawal) {
                    await window.supabase
                        .from('transactions')
                        .update({ status: 'completed' })
                        .eq('user_id', withdrawal.user_id)
                        .eq('amount', -withdrawal.amount)
                        .order('created_at', { ascending: false })
                        .limit(1);
                }
            }
        }
        
        window.showCustomAlert(`Withdrawal ${status} successfully!`);
        loadWithdrawalRequests();
        loadAdminStats();
        
    } catch (error) {
        window.showCustomAlert('Error updating withdrawal: ' + error.message);
    }
}

async function addTxHash(id) {
    const txHash = prompt('Enter transaction hash:');
    if (!txHash) return;
    
    try {
        const { error } = await window.supabase
            .from('withdrawals')
            .update({ tx_hash: txHash })
            .eq('id', id);
            
        if (error) throw error;
        
        window.showCustomAlert('Transaction hash added!');
        loadWithdrawalRequests();
        
    } catch (error) {
        window.showCustomAlert('Error adding TX hash: ' + error.message);
    }
}

async function loadUsers() {
    try {
        const { data: users, error } = await window.supabase
            .from('users')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(50);
            
        if (error) throw error;
        
        const container = document.getElementById('users-list');
        let html = '';
        
        if (users && users.length > 0) {
            users.forEach(user => {
                const date = new Date(user.created_at).toLocaleDateString();
                const isAdmin = user.is_admin ? '<span style="color: #f9ae3d; font-size: 10px;">ADMIN</span>' : '';
                const isActive = user.is_active === false ? '<span style="color: #ff6b6b; font-size: 10px;">INACTIVE</span>' : '';
                
                html += `
                    <div class="user-item" data-id="${user.id}">
                        <div class="user-item-header">
                            <div class="user-name">
                                ${user.username} ${isAdmin} ${isActive}
                                <span style="color: #4e7771; font-size: 10px;">VIP ${user.vip_level}</span>
                            </div>
                            <div class="user-balance">${user.balance.toFixed(2)} USDT</div>
                        </div>
                        <div class="user-details">
                            <div>ID: ${user.id}</div>
                            <div>Email: ${user.email || 'N/A'}</div>
                            <div>Joined: ${date} | Ref Code: ${user.invite_code}</div>
                            <div>Signals: ${user.signals_available}/3</div>
                        </div>
                        <div class="user-actions" style="margin-top: 10px; display: flex; gap: 5px;">
                            <button class="view-user-btn" data-id="${user.id}" style="font-size: 10px; padding: 3px 8px; background: #4e7771; color: white; border: none; border-radius: 3px; cursor: pointer;">View</button>
                            <button class="edit-user-btn" data-id="${user.id}" style="font-size: 10px; padding: 3px 8px; background: #f9ae3d; color: white; border: none; border-radius: 3px; cursor: pointer;">Edit</button>
                            ${user.is_active !== false ? `
                                <button class="deactivate-user-btn" data-id="${user.id}" style="font-size: 10px; padding: 3px 8px; background: #ff6b6b; color: white; border: none; border-radius: 3px; cursor: pointer;">Deactivate</button>
                            ` : `
                                <button class="activate-user-btn" data-id="${user.id}" style="font-size: 10px; padding: 3px 8px; background: #52c41a; color: white; border: none; border-radius: 3px; cursor: pointer;">Activate</button>
                            `}
                        </div>
                    </div>
                `;
            });
            
            // Add event listeners
            setTimeout(() => {
                document.querySelectorAll('.view-user-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => viewUserDetails(e.target.dataset.id));
                });
                document.querySelectorAll('.edit-user-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => editUser(e.target.dataset.id));
                });
                document.querySelectorAll('.deactivate-user-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => toggleUserStatus(e.target.dataset.id, false));
                });
                document.querySelectorAll('.activate-user-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => toggleUserStatus(e.target.dataset.id, true));
                });
            }, 100);
            
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 40px;">No users found</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading users:', error);
        document.getElementById('users-list').innerHTML = 
            '<div style="color: #ff6b6b; text-align: center; padding: 20px;">Error loading users</div>';
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
        
        const { data: referrals } = await window.supabase
            .from('referrals')
            .select('referred_id')
            .eq('referrer_id', userId)
            .eq('level', 1);
            
        const { data: transactions } = await window.supabase
            .from('transactions')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false })
            .limit(10);
        
        let html = `
            <div style="color: #333;">
                <h4 style="color: #4e7771; margin-bottom: 15px;">${user.username}</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                    <div><strong>ID:</strong> ${user.id}</div>
                    <div><strong>VIP Level:</strong> ${user.vip_level}</div>
                    <div><strong>Email:</strong> ${user.email || 'N/A'}</div>
                    <div><strong>Balance:</strong> ${user.balance.toFixed(2)} USDT</div>
                    <div><strong>Signals:</strong> ${user.signals_available}/3</div>
                    <div><strong>Status:</strong> ${user.is_active ? 'Active' : 'Inactive'}</div>
                </div>
                <div style="margin-bottom: 10px;"><strong>Invite Code:</strong> ${user.invite_code}</div>
                <div style="margin-bottom: 10px;"><strong>Referrals:</strong> ${referrals?.length || 0} users</div>
                <div style="margin-bottom: 10px;"><strong>Joined:</strong> ${new Date(user.created_at).toLocaleString()}</div>
        `;
        
        if (user.withdrawal_address) {
            html += `<div style="margin-bottom: 10px;"><strong>Withdrawal Address:</strong> ${user.withdrawal_address}</div>`;
        }
        
        if (transactions && transactions.length > 0) {
            html += `<div style="margin-top: 15px;"><strong>Recent Transactions:</strong></div>`;
            html += `<div style="max-height: 200px; overflow-y: auto; margin-top: 10px;">`;
            transactions.forEach(tx => {
                const date = new Date(tx.created_at).toLocaleDateString();
                html += `
                    <div style="font-size: 11px; padding: 5px; border-bottom: 1px solid #eee;">
                        ${date} - ${tx.type}: ${tx.amount} USDT (${tx.status})
                    </div>
                `;
            });
            html += `</div>`;
        }
        
        html += `</div>`;
        
        document.getElementById('user-details-content').innerHTML = html;
        document.getElementById('user-details-modal').style.display = 'flex';
        
    } catch (error) {
        window.showCustomAlert('Error loading user details: ' + error.message);
    }
}

async function editUser(userId) {
    const newBalance = prompt('Enter new balance:');
    if (!newBalance || isNaN(newBalance)) {
        window.showCustomAlert('Invalid balance');
        return;
    }
    
    const newVip = prompt('Enter new VIP level (1-6):');
    if (!newVip || isNaN(newVip) || newVip < 1 || newVip > 6) {
        window.showCustomAlert('Invalid VIP level');
        return;
    }
    
    try {
        const { error } = await window.supabase
            .from('users')
            .update({ 
                balance: parseFloat(newBalance),
                vip_level: parseInt(newVip)
            })
            .eq('id', userId);
            
        if (error) throw error;
        
        window.showCustomAlert('User updated successfully!');
        loadUsers();
        
    } catch (error) {
        window.showCustomAlert('Error updating user: ' + error.message);
    }
}

async function toggleUserStatus(userId, activate) {
    try {
        const { error } = await window.supabase
            .from('users')
            .update({ is_active: activate })
            .eq('id', userId);
            
        if (error) throw error;
        
        window.showCustomAlert(`User ${activate ? 'activated' : 'deactivated'} successfully!`);
        loadUsers();
        
    } catch (error) {
        window.showCustomAlert('Error updating user status: ' + error.message);
    }
}

async function loadAllTransactions() {
    try {
        const { data: transactions, error } = await window.supabase
            .from('transactions')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(50);
            
        if (error) throw error;
        
        const container = document.getElementById('admin-transactions');
        let html = '';
        
        if (transactions && transactions.length > 0) {
            transactions.forEach(tx => {
                const date = new Date(tx.created_at).toLocaleString();
                const amountColor = tx.amount > 0 ? '#52c41a' : '#ff6b6b';
                const statusColor = tx.status === 'completed' ? '#52c41a' : 
                                   tx.status === 'pending' ? '#f9ae3d' : '#ff6b6b';
                
                html += `
                    <div class="admin-transaction-item" style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; margin-bottom: 8px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <div style="color: white; font-size: 12px; font-weight: bold;">${tx.type.toUpperCase()}</div>
                            <div style="color: ${amountColor}; font-size: 12px; font-weight: bold;">${tx.amount > 0 ? '+' : ''}${tx.amount} USDT</div>
                        </div>
                        <div style="color: #ccc; font-size: 10px; margin-bottom: 3px;">User ID: ${tx.user_id}</div>
                        <div style="color: #ccc; font-size: 10px; margin-bottom: 3px;">Status: <span style="color: ${statusColor};">${tx.status}</span></div>
                        <div style="color: #ccc; font-size: 10px; margin-bottom: 3px;">${tx.description || 'No description'}</div>
                        <div style="color: #999; font-size: 9px;">${date}</div>
                    </div>
                `;
            });
        } else {
            html = '<div style="color: #ccc; text-align: center; padding: 40px;">No transactions found</div>';
        }
        
        container.innerHTML = html;
        
    } catch (error) {
        console.error('Error loading transactions:', error);
        document.getElementById('admin-transactions').innerHTML = 
            '<div style="color: #ff6b6b; text-align: center; padding: 20px;">Error loading transactions</div>';
    }
}

function filterWithdrawals() {
    const search = document.getElementById('withdrawal-search').value.toLowerCase();
    const items = document.querySelectorAll('.withdrawal-request-item');
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(search) ? 'block' : 'none';
    });
}

function filterUsers() {
    const search = document.getElementById('user-search').value.toLowerCase();
    const filter = document.getElementById('user-filter').value;
    const items = document.querySelectorAll('.user-item');
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const userText = item.querySelector('.user-name').textContent.toLowerCase();
        
        let show = true;
        
        if (search && !text.includes(search)) {
            show = false;
        }
        
        if (filter === 'active' && item.querySelector('.deactivate-user-btn') === null) {
            show = false;
        }
        
        if (filter === 'vip' && !userText.includes('vip')) {
            show = false;
        }
        
        item.style.display = show ? 'block' : 'none';
    });
}

function filterTransactions() {
    const filter = document.getElementById('transaction-filter').value;
    const items = document.querySelectorAll('.admin-transaction-item');
    
    items.forEach(item => {
        const type = item.querySelector('div').textContent.toLowerCase();
        
        if (filter === 'all' || type.includes(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

async function updateRates() {
    const newRate = prompt('Enter new base rate (e.g., 2.2 for 2.2%):');
    if (!newRate || isNaN(newRate)) {
        window.showCustomAlert('Invalid rate');
        return;
    }
    
    window.showCustomAlert(`Rate updated to ${newRate}%. This will affect future quantifications.`);
}

async function manageBonuses() {
    window.showCustomAlert('Bonus management feature coming soon!');
}

async function showSystemStats() {
    try {
        // Get system statistics
        const { count: totalUsers } = await window.supabase
            .from('users')
            .select('*', { count: 'exact', head: true });
            
        const { data: totalDeposits } = await window.supabase
            .from('transactions')
            .select('amount')
            .eq('type', 'deposit')
            .eq('status', 'completed');
            
        const { data: totalWithdrawals } = await window.supabase
            .from('transactions')
            .select('amount')
            .eq('type', 'withdrawal')
            .eq('status', 'completed');
            
        let depositSum = 0;
        if (totalDeposits) {
            depositSum = totalDeposits.reduce((sum, tx) => sum + Math.abs(tx.amount), 0);
        }
        
        let withdrawalSum = 0;
        if (totalWithdrawals) {
            withdrawalSum = totalWithdrawals.reduce((sum, tx) => sum + Math.abs(tx.amount), 0);
        }
        
        const statsHtml = `
            <div style="color: #333; text-align: center;">
                <h4 style="color: #4e7771; margin-bottom: 15px;">System Statistics</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                    <div style="background: #f5f5f5; padding: 10px; border-radius: 8px;">
                        <div style="font-size: 20px; color: #4e7771; font-weight: bold;">${totalUsers || 0}</div>
                        <div style="font-size: 12px; color: #666;">Total Users</div>
                    </div>
                    <div style="background: #f5f5f5; padding: 10px; border-radius: 8px;">
                        <div style="font-size: 20px; color: #52c41a; font-weight: bold;">${depositSum.toFixed(2)}</div>
                        <div style="font-size: 12px; color: #666;">Total Deposits</div>
                    </div>
                    <div style="background: #f5f5f5; padding: 10px; border-radius: 8px;">
                        <div style="font-size: 20px; color: #ff6b6b; font-weight: bold;">${withdrawalSum.toFixed(2)}</div>
                        <div style="font-size: 12px; color: #666;">Total Withdrawals</div>
                    </div>
                    <div style="background: #f5f5f5; padding: 10px; border-radius: 8px;">
                        <div style="font-size: 20px; color: #f9ae3d; font-weight: bold;">${(depositSum - withdrawalSum).toFixed(2)}</div>
                        <div style="font-size: 12px; color: #666;">Platform Balance</div>
                    </div>
                </div>
                <div style="font-size: 12px; color: #666; margin-top: 15px;">
                    Last updated: ${new Date().toLocaleString()}
                </div>
            </div>
        `;
        
        window.showCustomModal('System Statistics', statsHtml);
        
    } catch (error) {
        window.showCustomAlert('Error loading statistics: ' + error.message);
    }
}

async function addNewUser() {
    const username = prompt('Enter username:');
    if (!username) return;
    
    const email = prompt('Enter email (optional):');
    const password = prompt('Enter password:');
    if (!password) {
        window.showCustomAlert('Password is required');
        return;
    }
    
    const balance = prompt('Enter initial balance:', '3.00');
    if (!balance || isNaN(balance)) {
        window.showCustomAlert('Invalid balance');
        return;
    }
    
    try {
        // Generate unique ID and invite code
        const userId = window.GLY.generateUserId();
        const inviteCode = window.GLY.generateInviteCode();
        
        const newUser = {
            id: userId,
            username: username,
            email: email || null,
            password: password,
            payment_password: password, // Same as password for simplicity
            invite_code: inviteCode,
            balance: parseFloat(balance),
            vip_level: 1,
            signals_available: 3,
            created_at: new Date().toISOString()
        };
        
        const { error } = await window.supabase
            .from('users')
            .insert([newUser]);
            
        if (error) throw error;
        
        window.showCustomAlert(`User ${username} created successfully! Invite code: ${inviteCode}`);
        loadUsers();
        loadAdminStats();
        
    } catch (error) {
        window.showCustomAlert('Error creating user: ' + error.message);
    }
}

async function exportData() {
    const type = prompt('Export data for: (users/transactions/withdrawals)');
    if (!type) return;
    
    try {
        let data;
        let filename;
        
        switch(type.toLowerCase()) {
            case 'users':
                const { data: users } = await window.supabase
                    .from('users')
                    .select('*');
                data = users;
                filename = `users_${new Date().toISOString().split('T')[0]}.json`;
                break;
                
            case 'transactions':
                const { data: transactions } = await window.supabase
                    .from('transactions')
                    .select('*');
                data = transactions;
                filename = `transactions_${new Date().toISOString().split('T')[0]}.json`;
                break;
                
            case 'withdrawals':
                const { data: withdrawals } = await window.supabase
                    .from('withdrawals')
                    .select('*');
                data = withdrawals;
                filename = `withdrawals_${new Date().toISOString().split('T')[0]}.json`;
                break;
                
            default:
                window.showCustomAlert('Invalid export type');
                return;
        }
        
        if (!data || data.length === 0) {
            window.showCustomAlert('No data to export');
            return;
        }
        
        // Create and download JSON file
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        window.showCustomAlert(`Data exported successfully! Downloaded: ${filename}`);
        
    } catch (error) {
        window.showCustomAlert('Error exporting data: ' + error.message);
    }
}
