// 互動式複利計算器功能
document.addEventListener('DOMContentLoaded', function() {
    // 檢查是否存在複利計算器元素
    const calculatorContainer = document.getElementById('compound-calculator');
    if (calculatorContainer) {
        setupCompoundCalculator();
    }
    
    // 添加平滑滾動效果
    setupSmoothScrolling();
    
    // 添加圖表動畫效果
    setupChartAnimations();
});

// 設置複利計算器
function setupCompoundCalculator() {
    const calculatorContainer = document.getElementById('compound-calculator');
    
    // 創建計算器HTML
    calculatorContainer.innerHTML = `
        <div class="calculator-form">
            <div class="form-group">
                <label for="monthly-investment">每月投資金額 (元)</label>
                <input type="number" id="monthly-investment" value="10000" min="1000" max="100000" step="1000">
            </div>
            <div class="form-group">
                <label for="annual-return">年化報酬率 (%)</label>
                <input type="number" id="annual-return" value="10" min="1" max="20" step="0.5">
            </div>
            <div class="form-group">
                <label for="investment-years">投資年數</label>
                <input type="number" id="investment-years" value="20" min="5" max="50" step="1">
            </div>
            <button id="calculate-btn" class="btn">計算結果</button>
        </div>
        <div class="calculator-result">
            <h4>計算結果</h4>
            <div id="result-container">
                <p>請輸入參數並點擊計算按鈕</p>
            </div>
        </div>
    `;
    
    // 添加計算按鈕事件監聽器
    document.getElementById('calculate-btn').addEventListener('click', calculateCompoundInterest);
}

// 計算複利結果
function calculateCompoundInterest() {
    const monthlyInvestment = parseFloat(document.getElementById('monthly-investment').value);
    const annualReturn = parseFloat(document.getElementById('annual-return').value) / 100;
    const years = parseInt(document.getElementById('investment-years').value);
    
    // 驗證輸入
    if (isNaN(monthlyInvestment) || isNaN(annualReturn) || isNaN(years)) {
        alert('請輸入有效的數值');
        return;
    }
    
    // 計算複利
    const monthlyRate = annualReturn / 12;
    const totalMonths = years * 12;
    let futureValue = 0;
    
    for (let i = 0; i < totalMonths; i++) {
        futureValue = (futureValue + monthlyInvestment) * (1 + monthlyRate);
    }
    
    // 計算總投入金額
    const totalInvestment = monthlyInvestment * totalMonths;
    
    // 計算總收益
    const totalInterest = futureValue - totalInvestment;
    
    // 顯示結果
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `
        <div class="result-item">
            <span>總投入金額:</span>
            <span>${formatCurrency(totalInvestment)}</span>
        </div>
        <div class="result-item">
            <span>最終累積金額:</span>
            <span>${formatCurrency(futureValue)}</span>
        </div>
        <div class="result-item highlight-result">
            <span>總收益:</span>
            <span>${formatCurrency(totalInterest)}</span>
        </div>
        <div class="result-item">
            <span>收益倍數:</span>
            <span>${(totalInterest / totalInvestment).toFixed(2)}倍</span>
        </div>
    `;
}

// 格式化貨幣顯示
function formatCurrency(value) {
    return new Intl.NumberFormat('zh-TW', {
        style: 'decimal',
        maximumFractionDigits: 0
    }).format(Math.round(value)) + ' 元';
}

// 設置平滑滾動
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 設置圖表動畫效果
function setupChartAnimations() {
    // 使用Intersection Observer API檢測圖表是否進入視窗
    if ('IntersectionObserver' in window) {
        const chartObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        // 觀察所有圖表容器
        document.querySelectorAll('.chart-container').forEach(chart => {
            chartObserver.observe(chart);
        });
    }
}
