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

const FAVORITES_KEY = 'web-tools-favorites';
let currentCategory = 'all';
let currentQuery = '';

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initializeTools();
    setupEventListeners();
    setupDonationPanel();
});

function getFavorites() {
    try {
        const raw = localStorage.getItem(FAVORITES_KEY);
        const list = raw ? JSON.parse(raw) : [];
        return Array.isArray(list) ? list.filter(id => typeof id === 'string') : [];
    } catch (e) {
        return [];
    }
}

function saveFavorites(ids) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}

function isFavorite(toolId) {
    return getFavorites().includes(toolId);
}

function toggleFavorite(toolId) {
    const favorites = getFavorites();
    const index = favorites.indexOf(toolId);
    if (index >= 0) {
        favorites.splice(index, 1);
    } else {
        favorites.unshift(toolId);
    }
    saveFavorites(favorites);
    refreshToolsView();
}

function sortWithFavoritesFirst(list) {
    const favorites = getFavorites();
    const favRank = new Map(favorites.map((id, i) => [id, i]));

    return [...list].sort((a, b) => {
        const aFav = favRank.has(a.id);
        const bFav = favRank.has(b.id);
        if (aFav && bFav) return favRank.get(a.id) - favRank.get(b.id);
        if (aFav) return -1;
        if (bFav) return 1;
        return 0;
    });
}

function getFilteredTools() {
    let list = tools;

    if (currentCategory === 'favorites') {
        const favorites = new Set(getFavorites());
        list = tools.filter(tool => favorites.has(tool.id));
    } else if (currentCategory !== 'all') {
        list = tools.filter(tool => tool.category === currentCategory);
    }

    if (currentQuery) {
        list = list.filter(tool =>
            tool.name.toLowerCase().includes(currentQuery) ||
            tool.description.toLowerCase().includes(currentQuery) ||
            tool.category.toLowerCase().includes(currentQuery)
        );
    }

    return sortWithFavoritesFirst(list);
}

function refreshToolsView() {
    renderTools(getFilteredTools());
}

// 初始化工具网格
function initializeTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    if (toolsGrid) {
        refreshToolsView();
    }
}

// 渲染工具卡片
function renderTools(toolsToRender) {
    const toolsGrid = document.getElementById('toolsGrid');
    const emptyState = document.getElementById('emptyState');

    toolsGrid.innerHTML = '';

    if (toolsToRender.length === 0) {
        emptyState.style.display = 'block';
        emptyState.querySelector('p').textContent =
            currentCategory === 'favorites' && !currentQuery
                ? '还没有收藏，点击卡片右上角 ☆ 添加吧'
                : '未找到匹配的工具 😕';
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
    const favorited = isFavorite(tool.id);
    card.className = `tool-card ${tool.category}${favorited ? ' is-favorite' : ''}`;
    card.innerHTML = `
        <button
            class="favorite-btn${favorited ? ' active' : ''}"
            type="button"
            title="${favorited ? '取消收藏' : '收藏'}"
            aria-label="${favorited ? '取消收藏' : '收藏'}"
            aria-pressed="${favorited}"
        >${favorited ? '★' : '☆'}</button>
        <div class="tool-icon">${tool.icon}</div>
        <div class="tool-name">${tool.name}</div>
        <div class="tool-description">${tool.description}</div>
        <span class="tool-category">${getCategoryLabel(tool.category)}</span>
    `;

    const favoriteBtn = card.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(tool.id);
    });

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
    window.location.href = url;
}

// 设置事件监听
function setupEventListeners() {
    const categoryBtns = document.querySelectorAll('.category-btn[data-category]');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentCategory = btn.dataset.category;
            currentQuery = '';
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = '';
            refreshToolsView();
        });
    });

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    if (searchInput && searchBtn) {
        function performSearch() {
            currentQuery = searchInput.value.toLowerCase().trim();
            if (currentQuery) {
                currentCategory = 'all';
                categoryBtns.forEach(btn => btn.classList.remove('active'));
                document.querySelector('[data-category="all"]').classList.add('active');
            }
            refreshToolsView();
        }

        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        searchInput.addEventListener('focus', () => {
            // 保持当前视图；搜索时再切回「全部」
        });
    }
}

// 设置打赏菜单 / 弹层（不持久化关闭状态，刷新后仍可通过菜单打开）
function setupDonationPanel() {
    const overlay = document.getElementById('donationOverlay');
    const menuBtn = document.getElementById('donationMenuBtn');
    const closeBtn = document.getElementById('donationCloseBtn');

    if (!overlay || !menuBtn || !closeBtn) {
        return;
    }

    localStorage.removeItem('donation-panel-closed');

    function openDonation() {
        overlay.classList.remove('hidden');
        overlay.setAttribute('aria-hidden', 'false');
    }

    function closeDonation() {
        overlay.classList.add('hidden');
        overlay.setAttribute('aria-hidden', 'true');
    }

    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openDonation();
    });

    closeBtn.addEventListener('click', closeDonation);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeDonation();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
            closeDonation();
        }
    });
}
