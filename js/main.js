// 示例工具数据
const tools = [
    // 转换工具
    {
        id: 'bin-converter',
        name: '进制转换',
        icon: '🔢',
        category: 'converter',
        description: '支持二进制、八进制、十进制、十六进制的相互转换',
        url: 'tools/converter/bin-converter.html'
    },
    {
        id: 'unit-converter',
        name: '单位转换',
        icon: '📏',
        category: 'converter',
        description: '长度、重量、温度等常用单位转换工具',
        url: 'tools/converter/unit-converter.html'
    },
    {
        id: 'json-converter',
        name: 'JSON 格式化',
        icon: '{ }',
        category: 'converter',
        description: '验证、格式化和压缩 JSON 数据',
        url: 'tools/converter/json-converter.html'
    },
    // 生成工具
    {
        id: 'password-generator',
        name: '密码生成器',
        icon: '🔐',
        category: 'generator',
        description: '生成强密码，支持自定义长度和字符类型',
        url: 'tools/generator/password-generator.html'
    },
    {
        id: 'qr-generator',
        name: 'QR 码生成',
        icon: '📱',
        category: 'generator',
        description: '将文本或URL转换为二维码',
        url: 'tools/generator/qr-generator.html'
    },
    {
        id: 'uuid-generator',
        name: 'UUID 生成器',
        icon: '🆔',
        category: 'generator',
        description: '快速生成 UUID v4 标识符',
        url: 'tools/generator/uuid-generator.html'
    },
    // 计算工具
    {
        id: 'mortgage-calculator',
        name: '房贷计算器',
        icon: '🏠',
        category: 'calculator',
        description: '计算贷款月供、利息等详细信息',
        url: 'tools/calculator/mortgage-calculator.html'
    },
    {
        id: 'bmi-calculator',
        name: 'BMI 计算器',
        icon: '⚖️',
        category: 'calculator',
        description: '计算身体质量指数，评估健康状况',
        url: 'tools/calculator/bmi-calculator.html'
    },
    {
        id: 'percentage-calculator',
        name: '百分比计算',
        icon: '📊',
        category: 'calculator',
        description: '计算百分比、折扣、增长率等',
        url: 'tools/calculator/percentage-calculator.html'
    },
    // 实用工具
    {
        id: 'text-tools',
        name: '文本工具',
        icon: '✍️',
        category: 'utility',
        description: '大小写转换、字数统计、去重等',
        url: 'tools/utility/text-tools.html'
    },
    {
        id: 'color-picker',
        name: '颜色选择器',
        icon: '🎨',
        category: 'utility',
        description: '颜色选择、HEX/RGB/HSL 转换',
        url: 'tools/utility/color-picker.html'
    },
    {
        id: 'timer',
        name: '计时器',
        icon: '⏱️',
        category: 'utility',
        description: '倒计时、计时、秒表功能',
        url: 'tools/utility/timer.html'
    }
];

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initializeTools();
    setupEventListeners();
});

// 初始化工具网格
function initializeTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    renderTools(tools);
}

// 渲染工具卡片
function renderTools(toolsToRender) {
    const toolsGrid = document.getElementById('toolsGrid');
    const emptyState = document.getElementById('emptyState');

    toolsGrid.innerHTML = '';

    if (toolsToRender.length === 0) {
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';

    toolsToRender.forEach(tool => {
        const card = createToolCard(tool);
        toolsGrid.appendChild(card);
    });
}

// 创建工具卡片
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = `tool-card ${tool.category}`;
    card.innerHTML = `
        <div class="tool-icon">${tool.icon}</div>
        <div class="tool-name">${tool.name}</div>
        <div class="tool-description">${tool.description}</div>
        <span class="tool-category">${getCategoryLabel(tool.category)}</span>
    `;

    card.addEventListener('click', () => {
        navigateToTool(tool.url);
    });

    return card;
}

// 获取分类标签
function getCategoryLabel(category) {
    const labels = {
        converter: '转换工具',
        generator: '生成工具',
        calculator: '计算工具',
        utility: '实用工具'
    };
    return labels[category] || category;
}

// 导航到工具
function navigateToTool(url) {
    // 如果工具文件存在则导航，否则显示提示
    window.location.href = url;
}

// 设置事件监听
function setupEventListeners() {
    // 分类按钮
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;
            if (category === 'all') {
                renderTools(tools);
            } else {
                const filtered = tools.filter(tool => tool.category === category);
                renderTools(filtered);
            }
        });
    });

    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query === '') {
            renderTools(tools);
            return;
        }

        const filtered = tools.filter(tool =>
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query) ||
            tool.category.toLowerCase().includes(query)
        );

        renderTools(filtered);
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // 搜索框聚焦时清空默认分类
    searchInput.addEventListener('focus', () => {
        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-category="all"]').classList.add('active');
    });
}
