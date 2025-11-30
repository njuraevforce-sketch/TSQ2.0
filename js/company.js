// Company section
export default function renderCompany() {
    return `
        <div class="card padding">
            <div class="text-center margin-bottom">
                <h2 class="text-white">Quantum Crypto Farm</h2>
                <p class="text-gray">Leading Quantum Investment Platform</p>
            </div>

            <div class="company-content">
                <div class="text-white margin-bottom">
                    <p>Thanks to the continuous development of quantum computing and artificial intelligence technologies, more and more fields are beginning to apply quantum algorithms to improve efficiency and accuracy. As a leading company in quantum technology, QCF is committed to creating an innovative digital financial trading ecosystem through quantum trading algorithms and blockchain technology.</p>
                </div>

                <div class="company-section margin-bottom">
                    <h3 class="text-white margin-bottom">Company Background</h3>
                    <p class="text-gray">Quantum Crypto Farm (QCF) was founded in 2020 by a group of quantum computing scientists and AI engineers who graduated from prestigious universities including Stanford University, MIT, and University of California, Berkeley. The company has received support from renowned investors in the quantum technology field.</p>
                </div>

                <div class="company-section margin-bottom">
                    <h3 class="text-white margin-bottom">Technological Advantages</h3>
                    <p class="text-gray">QCF has extensive experience in quantum algorithms, data processing, and computational acceleration technologies. Since its foundation, QCF has actively promoted research and development in quantum computing and finance, achieving significant success, particularly in the cryptocurrency trading sector. QCF combines quantum analysis with mathematical models, leading to precise and efficient results.</p>
                </div>

                <div class="company-section margin-bottom">
                    <h3 class="text-white margin-bottom">Partnerships</h3>
                    <p class="text-gray">The company's asset management services generate significant returns, and QCF has established extensive data partnerships and strategic alliances with renowned cryptocurrency trading platforms including Coinbase, Binance, Bitfinex, and Gemini. Currently, QCF's quantum trading platform serves over half a million users and has established itself as a leading global cryptocurrency trading platform.</p>
                </div>

                <div class="company-section margin-bottom">
                    <h3 class="text-white margin-bottom">QCF in Cryptocurrency Trading</h3>
                    <p class="text-gray">QCF has extensive technical and practical experience in cryptocurrency trading. Its quantum trading platform uses quantum AI algorithms and mathematical models for precise market analysis and trend prediction, offering efficient trading strategies. Through QCF's quantum trading platform, users can trade cryptocurrencies more easily and access better trading opportunities.</p>
                </div>

                <div class="company-section margin-bottom">
                    <h3 class="text-white margin-bottom">Strategic Partnerships</h3>
                    <p class="text-gray">QCF officially entered into partnerships with leading crypto exchanges in 2022 with the goal of creating a new quantum AI and finance ecosystem. These partnerships represent the perfect combination of quantum computing and financial technologies.</p>
                </div>

                <div class="company-section margin-bottom">
                    <h3 class="text-white margin-bottom">Quantum Trading Platform</h3>
                    <p class="text-gray">QCF's quantum trading platform is one of the company's flagship products. It uses quantum AI algorithms for intelligent analysis and decision-making, assisting users in cryptocurrency trading. The platform provides powerful data analysis and trading features, supporting various trading strategies and types.</p>
                </div>

                <div class="company-section margin-bottom">
                    <h3 class="text-white margin-bottom">Development Prospects</h3>
                    <p class="text-gray">QCF adheres to innovative fintech philosophy and aims to create a digital financial trading ecosystem integrating quantum computing, blockchain technology, and quantitative trading. In the future, QCF will continue to integrate multidimensional resources to build the world's first quantum-powered digital financial trading ecosystem.</p>
                </div>

                <div class="company-section margin-bottom">
                    <h3 class="text-white margin-bottom">Quantum Trading Algorithm Innovations</h3>
                    <p class="text-gray">QCF's quantum trading algorithm is one of the company's core innovative technologies. This algorithm, based on blockchain and quantum AI technologies, integrates data factors from blockchain nodes and cryptocurrency-related data into a trading decision library. Through multi-level and multi-dimensional analysis of trading node data, the algorithm ensures more secure, transparent, decentralized, and efficient asset management.</p>
                </div>

                <!-- Certificate Section -->
                <div class="company-section">
                    <h3 class="text-white margin-bottom">Company Certification</h3>
                    <div class="certificate-container text-center">
                        <img src="assets/doc.png" alt="QCF Certification" class="certificate-image" 
                             style="max-width: 100%; border-radius: 10px; border: 2px solid #4e7771;">
                        <p class="text-gray margin-top">Quantum Crypto Farm Official Certification</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function init() {
    // Добавляем дополнительные стили для страницы компании
    const style = document.createElement('style');
    style.textContent = `
        .company-content {
            line-height: 1.6;
        }
        
        .company-section {
            background: rgba(0, 0, 0, 0.1);
            padding: 15px;
            border-radius: 8px;
            border-left: 3px solid #4e7771;
        }
        
        .company-section h3 {
            font-size: 18px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 8px;
        }
        
        .certificate-container {
            padding: 15px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 10px;
        }
        
        .certificate-image {
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
    `;
    document.head.appendChild(style);
}
