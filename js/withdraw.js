// Withdraw section
export default function renderWithdraw() {
    return `
        <div class="card padding">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: white;">Withdraw Funds</h2>
                <p style="color: #ccc;">Withdraw your USDT to your wallet</p>
            </div>

            <!-- Balance info -->
            <div class="balance-info margin-bottom" style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 10px;">
                <div style="display: flex; justify-content: space-between;">
                    <div style="color: #ccc;">Available Balance</div>
                    <div class="text-white text-bold" id="available-balance">0.00 USDT</div>
                </div>
            </div>

            <!-- Network selection -->
            <div class="network-selection margin-bottom">
                <div class="text-white text-bold margin-bottom">Select Network</div>
                <div class="network-options">
                    <div class="network-option active" data-network="TRC20">
                        <div class="network-icon">
                            <img src="assets/trc20.png" alt="TRC20">
                        </div>
                        <div class="network-name">TRC20</div>
                    </div>
                    <div class="network-option" data-network="BEP20">
                        <div class="network-icon">
                            <img src="assets/bep20.png" alt="BEP20">
                        </div>
                        <div class="network-name">BEP20</div>
                    </div>
                </div>
            </div>

            <!-- Amount input -->
            <div class="amount-input margin-bottom">
                <div class="text-white text-bold margin-bottom">Amount (USDT)</div>
                <input type="number" id="withdraw-amount" placeholder="Enter amount" 
                       style="width: 100%; padding: 12px; border: 2px solid #52c41a; border-radius: 8px; background: rgba(0,0,0,0.2); color: white; font-size: 16px;">
                <div class="text-gray margin-top-sm" style="font-size: 12px;">
                    Minimum withdrawal: 20 USDT
                </div>
            </div>

            <!-- Withdrawal address -->
            <div class="withdrawal-address margin-bottom">
                <div class="text-white text-bold margin-bottom">Withdrawal Address</div>
                <
