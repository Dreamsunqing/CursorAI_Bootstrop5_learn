// 测试工具函数
const test = {
    // 测试结果记录
    results: {
        passed: 0,
        failed: 0,
        total: 0
    },

    // 断言函数
    assert: function(condition, message) {
        this.results.total++;
        if (condition) {
            this.results.passed++;
            console.log(`✅ 通过: ${message}`);
        } else {
            this.results.failed++;
            console.error(`❌ 失败: ${message}`);
        }
    },

    // 运行所有测试
    runAll: function() {
        console.log('开始运行测试...\n');
        
        // 测试导航链接
        this.testNavigationLinks();
        
        // 测试响应式布局
        this.testResponsiveLayout();
        
        // 测试动画效果
        this.testAnimations();
        
        // 测试交互功能
        this.testInteractiveFeatures();
        
        // 输出测试结果
        this.printResults();
    },

    // 测试导航链接
    testNavigationLinks: function() {
        console.log('\n测试导航链接...');
        
        // 测试主导航链接
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        this.assert(navLinks.length > 0, '主导航链接存在');
        
        // 测试每个链接的href属性
        navLinks.forEach(link => {
            this.assert(link.getAttribute('href'), `链接 ${link.textContent} 有href属性`);
        });
        
        // 测试logo链接
        const logoLink = document.querySelector('.navbar-brand');
        this.assert(logoLink, 'Logo链接存在');
    },

    // 测试响应式布局
    testResponsiveLayout: function() {
        console.log('\n测试响应式布局...');
        
        // 测试断点
        const breakpoints = [
            { width: 576, name: 'sm' },
            { width: 768, name: 'md' },
            { width: 992, name: 'lg' },
            { width: 1200, name: 'xl' },
            { width: 1400, name: 'xxl' }
        ];
        
        breakpoints.forEach(bp => {
            // 模拟窗口大小
            window.innerWidth = bp.width;
            // 触发resize事件
            window.dispatchEvent(new Event('resize'));
            
            // 检查响应式类
            const container = document.querySelector('.container');
            this.assert(container, `在 ${bp.name} 断点下容器存在`);
        });
    },

    // 测试动画效果
    testAnimations: function() {
        console.log('\n测试动画效果...');
        
        // 测试时间线动画
        const timelineItems = document.querySelectorAll('.timeline-item');
        this.assert(timelineItems.length > 0, '时间线项目存在');
        
        // 测试卡片悬停效果
        const cards = document.querySelectorAll('.card');
        this.assert(cards.length > 0, '卡片元素存在');
        
        // 测试返回顶部按钮动画
        const backToTop = document.querySelector('.back-to-top');
        this.assert(backToTop, '返回顶部按钮存在');
    },

    // 测试交互功能
    testInteractiveFeatures: function() {
        console.log('\n测试交互功能...');
        
        // 测试搜索功能
        const searchInput = document.querySelector('.search-input');
        this.assert(searchInput, '搜索输入框存在');
        
        // 测试手风琴效果
        const accordionItems = document.querySelectorAll('.accordion-item');
        this.assert(accordionItems.length > 0, '手风琴项目存在');
        
        // 测试平滑滚动
        const scrollLinks = document.querySelectorAll('a[href^="#"]');
        this.assert(scrollLinks.length > 0, '平滑滚动链接存在');
    },

    // 打印测试结果
    printResults: function() {
        console.log('\n测试结果汇总:');
        console.log(`总测试数: ${this.results.total}`);
        console.log(`通过: ${this.results.passed}`);
        console.log(`失败: ${this.results.failed}`);
        console.log(`通过率: ${((this.results.passed / this.results.total) * 100).toFixed(2)}%`);

        // 在页面上显示测试结果
        const resultsDiv = document.getElementById('test-results');
        if (resultsDiv) {
            resultsDiv.innerHTML = `
                <h4>测试结果汇总:</h4>
                <p>总测试数: ${this.results.total}</p>
                <p>通过: ${this.results.passed}</p>
                <p>失败: ${this.results.failed}</p>
                <p>通过率: ${((this.results.passed / this.results.total) * 100).toFixed(2)}%</p>
            `;
            resultsDiv.style.display = 'block'; // 显示结果区域

            // 添加关闭按钮
            const closeButton = document.createElement('button');
            closeButton.classList.add('btn-close');
            closeButton.setAttribute('aria-label', 'Close');
            closeButton.style.position = 'absolute';
            closeButton.style.top = '10px';
            closeButton.style.right = '10px';
            closeButton.onclick = () => { resultsDiv.style.display = 'none'; };
            resultsDiv.appendChild(closeButton);
        }
    }
};

// 创建测试按钮
function createTestButton() {
    const button = document.createElement('button');
    button.textContent = '运行测试';
    button.className = 'btn btn-primary position-fixed';
    button.style.top = '50%';
    button.style.right = '20px';
    button.style.transform = 'translateY(-50%)';
    button.style.zIndex = '1000';
    button.style.padding = '10px 15px';
    button.style.borderRadius = '5px';
    button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    button.onclick = () => test.runAll();
    document.body.appendChild(button);
}

// 页面加载完成后创建测试按钮
document.addEventListener('DOMContentLoaded', createTestButton); 