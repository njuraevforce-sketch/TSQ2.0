// Rules section
export default function renderRules() {
    return `
        <div class="card padding">
            <div class="rules-content">
                <h2>Welcome to GLY! Platform Rules</h2>
                
                <div class="rules-section">
                    <h3>Basic Rules</h3>
                    <ul class="rules-list">
                        <li>Registration bonus: $3 (credited automatically)</li>
                        <li>Minimum deposit: $17</li>
                        <li>Minimum withdrawal: $20</li>
                        <li>Funds crediting time: 0-72 hours</li>
                        <li>Withdrawal fee:
                            <ul>
                                <li>VIP1: 7%</li>
                                <li>VIP2: 5%</li>
                                <li>VIP3: 3%</li>
                                <li>VIP4: 2%</li>
                                <li>VIP5: 1%</li>
                                <li>VIP6: 0.5%</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="rules-section">
                    <h3>Referral System (3 levels):</h3>
                    <ul class="rules-list">
                        <li>Level 1: 12% from referral earnings</li>
                        <li>Level 2: 5% from referral earnings</li>
                        <li>Level 3: 3% from referral earnings</li>
                    </ul>
                    <p>Crediting occurs instantly with each referral earning</p>
                </div>

                <div class="rules-section">
                    <h3>VIP Level Overview:</h3>
                    <ul class="rules-list">
                        <li>VIP1 (0-299 USDT): daily income 2.2%, 3 signals per day</li>
                        <li>VIP2 (300-1000 USDT): daily income 2.8%, 3 signals per day, requires 2 active referrals</li>
                        <li>VIP3 (1000-3500 USDT): daily income 3.5%, 3 signals per day, requires 5 active referrals</li>
                        <li>VIP4 (3500-6000 USDT): daily income 4.0%, 3 signals per day, requires 8 active referrals</li>
                        <li>VIP5 (6000-12000 USDT): daily income 5.0%, 3 signals per day, requires 15 active referrals</li>
                        <li>VIP6 (12000-20000 USDT): daily income 6.0%, 3 signals per day, requires 25 active referrals</li>
                    </ul>
                    <p>Active referral - user with balance from $20</p>
                    <p>Signals refresh daily at 18:00 UTC</p>
                </div>

                <div class="rules-section">
                    <h3>Quantification Process:</h3>
                    <ul class="rules-list">
                        <li>Each signal brings 1/3 of daily percentage</li>
                        <li>Income is credited to balance instantly</li>
                        <li>Referral bonuses are credited automatically</li>
                        <li>VIP level is recalculated after each quantification</li>
                    </ul>
                </div>

                <div class="rules-section">
                    <h3>Participation Requirements:</h3>
                    <ul class="rules-list">
                        <li>Registration only by invitation code</li>
                        <li>Minimum age: 18 years</li>
                        <li>One user - one account</li>
                        <li>VPN and proxy usage prohibited</li>
                    </ul>
                </div>

                <div class="rules-section">
                    <h3>Security:</h3>
                    <ul class="rules-list">
                        <li>Two passwords: login and transaction</li>
                        <li>2FA recommended</li>
                        <li>Do not share your passwords with third parties</li>
                        <li>Platform does not request private keys</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    document.body.classList.add('no-tabbar');
}
