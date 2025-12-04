// Rules section
import { t } from './translate.js';

export default function renderRules() {
    const lang = localStorage.getItem('gly_language') || 'en';
    
    return `
        <div class="card padding">
            <div class="rules-content">
                <h2 style="color: white;" data-translate="platform_rules">Welcome to GLY! Platform Rules</h2>
                
                <div class="rules-section">
                    <h3 data-translate="basic_rules">Basic Rules</h3>
                    <ul class="rules-list">
                        <li data-translate="registration_bonus_rule">Registration bonus: $3 (credited automatically)</li>
                        <li data-translate="minimum_deposit_rule">Minimum deposit: $17</li>
                        <li data-translate="minimum_withdrawal_rule">Minimum withdrawal: $20</li>
                        <li data-translate="funds_crediting">Funds crediting time: 0-72 hours</li>
                        <li data-translate="withdrawal_fee">Withdrawal fee:</li>
                        <li data-translate="withdrawal_fee_details">
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
                    <h3 data-translate="referral_system">Referral System (3 levels):</h3>
                    <ul class="rules-list">
                        <li data-translate="level_1_percent">Level 1: 12% of referral's earnings</li>
                        <li data-translate="level_2_percent">Level 2: 5% of referral's earnings</li>
                        <li data-translate="level_3_percent">Level 3: 3% of referral's earnings</li>
                    </ul>
                    <p style="color: #ccc; margin-top: 10px;" data-translate="bonuses_credited">Bonuses are credited immediately for each referral's earnings</p>
                </div>

                <div class="rules-section">
                    <h3 data-translate="vip_overview">VIP Level Overview:</h3>
                    <ul class="rules-list">
                        <li data-translate="vip1_details">VIP1 (0-299 USDT): daily income 2.2%, 3 signals per day</li>
                        <li data-translate="vip2_details">VIP2 (300-1000 USDT): daily income 2.8%, 3 signals per day, requires 2 active referrals</li>
                        <li data-translate="vip3_details">VIP3 (1000-3500 USDT): daily income 3.5%, 3 signals per day, requires 5 active referrals</li>
                        <li data-translate="vip4_details">VIP4 (3500-6000 USDT): daily income 4.0%, 3 signals per day, requires 8 active referrals</li>
                        <li data-translate="vip5_details">VIP5 (6000-12000 USDT): daily income 5.0%, 3 signals per day, requires 15 active referrals</li>
                        <li data-translate="vip6_details">VIP6 (12000-20000 USDT): daily income 6.0%, 3 signals per day, requires 25 active referrals</li>
                    </ul>
                    <p style="color: #ccc; margin-top: 10px;" data-translate="active_referral">Active referral - user with balance from $20</p>
                    <p style="color: #ccc;" data-translate="signals_refresh">Signals refresh daily at 18:00 UTC</p>
                </div>

                <div class="rules-section">
                    <h3 data-translate="quantification_process">Quantification Process:</h3>
                    <ul class="rules-list">
                        <li data-translate="quantification_step1">Each signal brings 1/3 of daily percentage</li>
                        <li data-translate="quantification_step2">Income is credited to balance immediately</li>
                        <li data-translate="quantification_step3">Referral bonuses are credited automatically</li>
                        <li data-translate="quantification_step4">VIP level is recalculated after each quantification</li>
                    </ul>
                </div>

                <div class="rules-section">
                    <h3 data-translate="participation_requirements">Participation Requirements:</h3>
                    <ul class="rules-list">
                        <li data-translate="requirement1">Registration only by invitation code</li>
                        <li data-translate="requirement2">Minimum age: 18 years</li>
                        <li data-translate="requirement3">One user - one account</li>
                        <li data-translate="requirement4">Use of VPN and proxy is prohibited</li>
                    </ul>
                </div>

                <div class="rules-section">
                    <h3 data-translate="security">Security:</h3>
                    <ul class="rules-list">
                        <li data-translate="security1">Two passwords: login and transaction</li>
                        <li data-translate="security2">2FA recommended</li>
                        <li data-translate="security3">Do not share your passwords with third parties</li>
                        <li data-translate="security4">Platform does not request private keys</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    document.body.classList.add('no-tabbar');
    // Update translations on load
    import('./translate.js').then(module => {
        if (module.updatePageLanguage) {
            setTimeout(() => module.updatePageLanguage(), 100);
        }
    }).catch(error => {
        console.error('Error loading translate module:', error);
    });
}
