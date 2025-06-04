// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function() {
    try {
        // 初始化工具提示
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // 导航栏滚动效果
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) {
                window.cancelAnimationFrame(scrollTimeout);
            }
            scrollTimeout = window.requestAnimationFrame(function() {
                const nav = document.querySelector('#nav');
                if (window.scrollY > 50) {
                    nav.classList.add('navbar-scrolled');
                } else {
                    nav.classList.remove('navbar-scrolled');
                }
            });
        });

        // 时间线动画
        const timelineItems = document.querySelectorAll('.timeline-item');
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        timelineItems.forEach(item => {
            observer.observe(item);
        });

        // 搜索功能
        const searchInput = document.querySelector('#search input');
        const searchButton = document.querySelector('#search button');
        
        if (searchInput && searchButton) {
            let searchTimeout;
            searchInput.addEventListener('input', function() {
                if (searchTimeout) {
                    clearTimeout(searchTimeout);
                }
                searchTimeout = setTimeout(() => {
                    const searchTerm = this.value.trim();
                    if (searchTerm) {
                        console.log('搜索:', searchTerm);
                    }
                }, 300);
            });

            searchButton.addEventListener('click', function() {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    console.log('搜索:', searchTerm);
                }
            });

            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchButton.click();
                }
            });
        }

        // 图片懒加载
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });

        // 添加返回顶部按钮
        const backToTop = document.createElement('button');
        backToTop.className = 'btn btn-primary back-to-top';
        backToTop.innerHTML = '<i class="bi bi-arrow-up"></i>';
        document.body.appendChild(backToTop);

        let scrollTimeout2;
        window.addEventListener('scroll', () => {
            if (scrollTimeout2) {
                window.cancelAnimationFrame(scrollTimeout2);
            }
            scrollTimeout2 = window.requestAnimationFrame(() => {
                if (window.scrollY > 300) {
                    backToTop.classList.add('show');
                } else {
                    backToTop.classList.remove('show');
                }
            });
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // 错误处理
        window.addEventListener('error', function(e) {
            console.error('发生错误:', e.message);
            // 可以在这里添加错误报告逻辑
        });

    } catch (error) {
        console.error('初始化过程中发生错误:', error);
    }
}); 