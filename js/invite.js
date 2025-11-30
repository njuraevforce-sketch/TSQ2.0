// Invite section
export default function renderInvite() {
    const referralLink = "https://quantumfarm.io/ref/QCF123456";
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(referralLink)}`;

    return `
        <div class="card padding">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: white;">Пригласите друзей</h2>
                <p style="color: #ccc;">Получайте бонусы за приглашенных друзей</p>
            </div>

            <!-- QR-код -->
            <div class="qr-code">
                <img src="${qrCodeUrl}" alt="QR Code">
            </div>

            <!-- Реферальная ссылка -->
            <div class="referral-section">
                <div class="referral-content">
                    <div class="referral-info">
                        <div class="referral-text">
                            <h4>Реферальная ссылка</h4>
                            <p id="referral-link">${referralLink}</p>
                        </div>
                    </div>
                    <button class="copy-btn" id="copy-referral-btn">
                        <i class="fas fa-copy"></i> КОПИРОВАТЬ
                    </button>
                </div>
            </div>

            <!-- Статистика приглашений -->
            <div class="card padding margin-top">
                <div class="text-white text-bold text-center">Статистика приглашений</div>
                <div class="referral-stats">
                    <div class="referral-stat">
                        <div class="text-gray">Приглашено</div>
                        <div class="text-white text-bold">15</div>
                    </div>
                    <div class="referral-stat">
                        <div class="text-gray">Активных</div>
                        <div class="text-white text-bold">8</div>
                    </div>
                    <div class="referral-stat">
                        <div class="text-gray">Заработано</div>
                        <div class="text-white text-bold">245.67 USDT</div>
                    </div>
                </div>
            </div>

            <!-- Пригласительный код -->
            <div class="card padding margin-top">
                <div class="text-white text-bold text-center">Ваш пригласительный код</div>
                <div class="referral-section margin-top">
                    <div class="referral-content">
                        <div class="referral-info">
                            <div class="referral-text">
                                <h4>Код приглашения</h4>
                                <p id="invite-code">QCF123456</p>
                            </div>
                        </div>
                        <button class="copy-btn" id="copy-invite-code">
                            <i class="fas fa-copy"></i> КОПИРОВАТЬ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    document.body.classList.add('no-tabbar');

    // Копирование реферальной ссылки
    const copyReferralBtn = document.getElementById('copy-referral-btn');
    if (copyReferralBtn) {
        copyReferralBtn.addEventListener('click', function() {
            const referralLink = document.getElementById('referral-link').textContent;
            QuantumFarm.copyToClipboard(referralLink).then(() => {
                const originalText = copyReferralBtn.innerHTML;
                copyReferralBtn.innerHTML = '<i class="fas fa-check"></i> СКОПИРОВАНО';
                setTimeout(function() {
                    copyReferralBtn.innerHTML = originalText;
                }, 2000);
            });
        });
    }

    // Копирование кода приглашения
    const copyInviteCodeBtn = document.getElementById('copy-invite-code');
    if (copyInviteCodeBtn) {
        copyInviteCodeBtn.addEventListener('click', function() {
            const inviteCode = document.getElementById('invite-code').textContent;
            QuantumFarm.copyToClipboard(inviteCode).then(() => {
                const originalText = copyInviteCodeBtn.innerHTML;
                copyInviteCodeBtn.innerHTML = '<i class="fas fa-check"></i> СКОПИРОВАНО';
                setTimeout(() => {
                    copyInviteCodeBtn.innerHTML = originalText;
                }, 2000);
            });
        });
    }
}
