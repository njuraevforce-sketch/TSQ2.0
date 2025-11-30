// Invite section
export default function renderInvite() {
    return `
        <div class="card padding">
            <div class="text-center margin-bottom">
                <h2 class="text-white">Пригласите друзей</h2>
                <p class="text-gray">Получайте бонусы за приглашенных друзей</p>
            </div>

            <!-- QR код -->
            <div class="qr-section margin-bottom">
                <div class="text-center margin-bottom">
                    <div class="text-white text-bold">QR код для приглашения</div>
                </div>
                <div class="qr-code-container">
                    <canvas id="qr-code"></canvas>
                </div>
            </div>

            <!-- Реферальная ссылка -->
            <div class="referral-section">
                <div class="referral-content">
                    <div class="referral-info">
                        <div class="referral-icon">
                            <i class="fas fa-link"></i>
                        </div>
                        <div class="referral-text">
                            <h4>Реферальная ссылка</h4>
                            <p id="referral-link">https://quantumfarm.io/ref/QCF123456</p>
                        </div>
                    </div>
                    <button class="copy-btn" id="copy-referral-btn">
                        <i class="fas fa-copy"></i> COPY
                    </button>
                </div>
            </div>

            <!-- Пригласительный код -->
            <div class="margin-top">
                <div class="text-white margin-bottom">Пригласительный код</div>
                <input type="text" id="invite-code-input" placeholder="Введите пригласительный код" class="auth-input">
                <button class="auth-btn margin-top-sm" id="apply-invite-btn">
                    Применить код
                </button>
            </div>

            <!-- Статистика -->
            <div class="referral-stats margin-top">
                <div class="referral-stat">
                    <div class="text-gray">Приглашено друзей</div>
                    <div class="text-white text-bold">15</div>
                </div>
                <div class="referral-stat">
                    <div class="text-gray">Заработано бонусов</div>
                    <div class="text-white text-bold">245.67 USDT</div>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    // Генерация QR кода
    generateQRCode();
    
    // Копирование реферальной ссылки
    document.getElementById('copy-referral-btn').addEventListener('click', function() {
        const referralLink = document.getElementById('referral-link').textContent;
        QuantumFarm.copyToClipboard(referralLink).then(() => {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> COPIED';
            setTimeout(() => {
                this.innerHTML = originalText;
            }, 2000);
        });
    });

    // Применение пригласительного кода
    document.getElementById('apply-invite-btn').addEventListener('click', function() {
        const inviteCode = document.getElementById('invite-code-input').value.trim();
        if (!inviteCode) {
            alert('Пожалуйста, введите пригласительный код');
            return;
        }
        
        // Здесь будет логика применения кода
        alert('Пригласительный код успешно применен!');
        document.getElementById('invite-code-input').value = '';
    });
}

function generateQRCode() {
    const canvas = document.getElementById('qr-code');
    const referralLink = 'https://quantumfarm.io/ref/QCF123456';
    
    // Простая реализация QR кода (в реальном приложении используйте библиотеку)
    const ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 200;
    
    // Очистка canvas
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Простая сетка как пример QR кода
    ctx.fillStyle = '#4e7771';
    const size = 8;
    const positions = [
        [2,2], [3,2], [4,2], [5,2], [6,2], [7,2],
        [2,3], [7,3], [2,4], [4,4], [7,4],
        [2,5], [7,5], [2,6], [7,6], [2,7], [3,7], [4,7], [5,7], [6,7], [7,7]
    ];
    
    positions.forEach(([x, y]) => {
        ctx.fillRect(x * size, y * size, size, size);
    });
    
    // Текст под QR кодом
    ctx.fillStyle = '#4e7771';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Scan to join', canvas.width / 2, canvas.height + 20);
}
