// Company section
import { t } from './translate.js';

export default function renderCompany() {
    const lang = localStorage.getItem('gly_language') || 'en';
    
    return `
        <div class="card padding">
            <div class="company-content">
                <div class="company-logo">
                    <img src="assets/logo.png" alt="GLY Logo" data-translate-alt="about_gly">
                </div>
                
                <h2 style="color: white;" data-translate="about_gly">About GLY (Global Ledger Yield)</h2>
                <p style="color: #ccc;" data-translate="about_gly_desc">
                    With the continuous development of artificial intelligence (AI) technologies, more and more areas are beginning to apply AI algorithms to improve efficiency and accuracy. As a leading company in AI technology, GLY strives to create an innovative digital financial trading ecosystem through quantitative trading algorithms and blockchain technology.
                </p>
                
                <h2 style="color: white;" data-translate="foundation_history">Foundation and History</h2>
                <p style="color: #ccc;" data-translate="foundation_history_desc">
                    GLY (Global Ledger Yield) was founded in 2020 by a group of scientists and engineers in machine learning and AI, graduates of prestigious universities such as Stanford University, Massachusetts Institute of Technology, and University of California, Berkeley. The company received support from well-known investors. GLY has extensive technical experience in image processing, facial recognition, autonomous driving, augmented reality, deep neural networks, and deep machine learning, and holds patents for AI-based cloud computing analytics technology. The company aims to create a cryptocurrency trading system suitable for various trading scenarios and meeting the needs of individual and institutional investors.
                </p>
                
                <h2 style="color: white;" data-translate="gly_advantages">GLY Technological Advantages</h2>
                <p style="color: #ccc;" data-translate="gly_advantages_desc">
                    GLY has extensive experience in algorithms, data processing, and computing acceleration technologies. Since its foundation, GLY actively promotes research and development in artificial intelligence and finance, achieving significant success, especially in the cryptocurrency trading sector. GLY combines AI analysis with mathematical models, leading to accurate and efficient results. The company's financial and asset management services bring significant income, and the company has established extensive data partnerships and strategic partnerships with well-known cryptocurrency trading platforms. Currently, GLY's quantitative trading platform has over half a million users and has established itself as a leading global cryptocurrency trading platform.
                </p>
                
                <h2 style="color: white;" data-translate="gly_application">GLY Application in Cryptocurrency Trading</h2>
                <p style="color: #ccc;" data-translate="gly_application_desc">
                    GLY has extensive technical and practical experience in cryptocurrency trading. Its quantitative trading platform uses artificial intelligence algorithms and mathematical models for accurate analysis and prediction of market trends, offering effective trading strategies. Thanks to GLY's quantitative trading platform, users can trade cryptocurrencies more easily and get better trading opportunities. The platform offers many features including instant exchange, credit derivatives, futures trading, peer-to-peer trading, mining, liquidity pools.
                </p>
                
                <h2 style="color: white;" data-translate="gly_partnership">GLY Partnership</h2>
                <p style="color: #ccc;" data-translate="gly_partnership_desc">
                    GLY has officially partnered with leading crypto exchanges to create a new artificial intelligence and finance ecosystem. This partnership will further promote GLY's innovations in cryptocurrency trading.
                </p>
                
                <h2 style="color: white;" data-translate="gly_platform">GLY Quantitative Trading Platform</h2>
                <p style="color: #ccc;" data-translate="gly_platform_desc">
                    GLY Quantitative Trading Platform is one of GLY's main products. It uses artificial intelligence algorithms for intelligent analysis and decision-making, helping users in cryptocurrency trading. The platform provides powerful data analysis and trading functions, supporting various trading strategies and types. Users can choose different modes and trading tools according to their needs for a personalized trading experience.
                </p>
                
                <h2 style="color: white;" data-translate="gly_prospects">GLY Development Prospects</h2>
                <p style="color: #ccc;" data-translate="gly_prospects_desc">
                    GLY adheres to the fintech innovation philosophy and strives to create a digital financial trading ecosystem that integrates artificial intelligence, blockchain technology, and quantitative trading. In the future, GLY will continue to integrate multidimensional resources to create the world's first digital financial trading ecosystem and promote the wide application of AI-based quantitative trading in the digital economy and even in traditional asset management.
                </p>
                
                <h2 style="color: white;" data-translate="gly_innovations">Innovations in GLY Quantitative Trading Algorithms</h2>
                <p style="color: #ccc;" data-translate="gly_innovations_desc">
                    GLY Quantitative Trading Algorithm is one of GLY's main innovative technologies. This algorithm, based on blockchain and artificial intelligence technologies, combines data factors provided by each blockchain node, as well as data related to cryptocurrencies, into a trading decision factor library. Through multi-level and multi-aspect analysis of trading node data, the algorithm ensures more secure, transparent, decentralized, and efficient asset management.
                </p>

                <div style="text-align: center; margin-top: 30px;">
                    <img src="assets/doc.png" alt="Certificate" style="max-width: 100%; border-radius: 10px;" data-translate-alt="certificate">
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
