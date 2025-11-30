// Rules section
export default function renderRules() {
    return `
        <div class="card padding">
            <div class="text-center margin-bottom">
                <h2 class="text-white">Правила платформы QCF</h2>
            </div>

            <div class="rules-content">
                <div class="rule-section">
                    <h3 class="text-cyan">Основные правила</h3>
                    <div class="rule-item">
                        <span class="rule-label">Бонус за регистрацию:</span>
                        <span class="rule-value">$3</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Минимальный депозит:</span>
                        <span class="rule-value">$17</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Минимальный вывод:</span>
                        <span class="rule-value">$20</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Срок зачисления средств:</span>
                        <span class="rule-value">0-72 часа</span>
                    </div>
                </div>

                <div class="rule-section">
                    <h3 class="text-cyan">Комиссия за вывод</h3>
                    <div class="rule-item">
                        <span class="rule-label">VIP1:</span>
                        <span class="rule-value">7%</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">VIP2:</span>
                        <span class="rule-value">5%</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">VIP3:</span>
                        <span class="rule-value">3%</span>
                    </div>
                </div>

                <div class="rule-section">
                    <h3 class="text-cyan">Бонус на первый депозит</h3>
                    <div class="rule-item">
                        <span class="rule-label">Первый депозит $50:</span>
                        <span class="rule-value">$2 USDT</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Первый депозит $100:</span>
                        <span class="rule-value">$5 USDT</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Первый депозит $300:</span>
                        <span class="rule-value">$10 USDT</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Первый депозит $500:</span>
                        <span class="rule-value">$20 USDT</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Первый депозит $800:</span>
                        <span class="rule-value">$30 USDT</span>
                    </div>
                </div>

                <div class="rule-section">
                    <h3 class="text-cyan">Реферальный бонус</h3>
                    <div class="rule-item">
                        <span class="rule-label">Реферальный бонус $50:</span>
                        <span class="rule-value">$5 USDT</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Реферальный бонус $100:</span>
                        <span class="rule-value">$10 USDT</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Реферальный бонус $300:</span>
                        <span class="rule-value">$15 USDT</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Реферальный бонус $300:</span>
                        <span class="rule-value">30 USDT</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Реферальный бонус $800:</span>
                        <span class="rule-value">50 USDT</span>
                    </div>
                </div>

                <div class="rule-section">
                    <h3 class="text-cyan">Командная комиссия</h3>
                    <div class="rule-item">
                        <span class="rule-label">Уровень 1:</span>
                        <span class="rule-value">13%</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Уровень 2:</span>
                        <span class="rule-value">7%</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Уровень 3:</span>
                        <span class="rule-value">3%</span>
                    </div>
                </div>

                <div class="rule-section">
                    <h3 class="text-cyan">Задача повышения уровня</h3>
                    <div class="rule-item">
                        <span class="rule-label">Повышение до VIP2:</span>
                        <span class="rule-value">$10</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Повышение до VIP3:</span>
                        <span class="rule-value">30 USDT</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Повышение до VIP4:</span>
                        <span class="rule-value">80 USDT</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Повышение до VIP5:</span>
                        <span class="rule-value">150 USDT</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-label">Повышение до VIP6:</span>
                        <span class="rule-value">300 USDT</span>
                    </div>
                </div>

                <div class="rule-section">
                    <h3 class="text-cyan">Обзор уровня VIP</h3>
                    <div class="vip-levels">
                        <div class="vip-level">
                            <strong>VIP1 0-299</strong><br>
                            Ежедневный доход 1,4%, 3 заказа в день
                        </div>
                        <div class="vip-level">
                            <strong>VIP2 300-1000</strong><br>
                            Ежедневный доход 1,8%, 3 заказа в день, требуется 2 активных прямых реферала
                        </div>
                        <div class="vip-level">
                            <strong>VIP3 1000-3500</strong><br>
                            Ежедневный доход 2,2%, 3 заказа в день, требуется 5 активных прямых рефералов
                        </div>
                        <div class="vip-level">
                            <strong>VIP4 3500-6000</strong><br>
                            Ежедневный доход 2,6%, 6 заказов в день, требуется 8 активных прямых рефералов
                        </div>
                        <div class="vip-level">
                            <strong>VIP5 6000–12000</strong><br>
                            Ежедневный доход 3,0%, 6 заказов в день, требуется 15 действующих прямых рефералов
                        </div>
                        <div class="vip-level">
                            <strong>VIP6 12000–20000</strong><br>
                            Ежедневный доход 3,4%, 6 заказов в день, требуется 25 действующих прямых рефералов
                        </div>
                    </div>
                </div>

                <div class="rule-note">
                    <p><strong>Примечание:</strong> Сумма пополнения баланса действующего участника должна быть не менее 100 долларов США.</p>
                    <p>Новые пользователи вносят депозит в течение 72 часов после разморозки средств.</p>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    // Инициализация страницы правил
    console.log('Rules page initialized');
}
