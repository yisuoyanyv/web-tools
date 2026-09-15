# 🛠️ Web Tools - 在线工具集合

一个精选的 HTML + CSS + JavaScript 静态网页工具集合，包含各类实用工具，分类整理，便捷易用。

## 🌟 特性

- ✨ 完全纯静态网页（HTML + CSS + JavaScript）
- 📱 响应式设计，支持桌面端和移动端
- 🎨 现代化UI设计
- 🔍 实时搜索和分类筛选
- 💝 打赏二维码支持（可自定义）
- 🚀 零依赖，无需构建工具

## 📂 项目结构

```
web-tools/
├── index.html                    # 主页
├── css/
│   └── style.css                # 全局样式
├── js/
│   └── main.js                  # 主要逻辑
├── tools/                        # 工具目录
│   ├── converter/               # 转换工具
│   │   ├── bin-converter.html   # 进制转换
│   │   ├── unit-converter.html  # 单位转换
│   │   └── json-converter.html  # JSON格式化
│   ├── generator/               # 生成工具
│   │   ├── password-generator.html  # 密码生成器
│   │   ├── qr-generator.html        # QR码生成
│   │   └── uuid-generator.html      # UUID生成器
│   ├── calculator/              # 计算工具
│   │   ├── mortgage-calculator.html # 房贷计算器
│   │   ├── bmi-calculator.html      # BMI计算器
│   │   └── percentage-calculator.html # 百分比计算
│   └── utility/                 # 实用工具
│       ├── text-tools.html      # 文本工具
│       ├── color-picker.html    # 颜色选择器
│       └── timer.html           # 计时器
└── README.md                    # 项目说明文档
```

## 🛠️ 工具分类

### 📊 转换工具
- **进制转换** - 二进制、八进制、十进制、十六进制转换
- **单位转换** - 长度、重量、温度等单位转换
- **JSON格式化** - 验证、格式化和压缩JSON数据

### 🎲 生成工具
- **密码生成器** - 生成强密码，支持自定义
- **QR码生成** - 文本/URL转二维码
- **UUID生成器** - 快速生成UUID标识符

### 🧮 计算工具
- **房贷计算器** - 计算月供、利息等
- **BMI计算器** - 身体质量指数评估
- **百分比计算** - 折扣、增长率等计算

### 🎯 实用工具
- **文本工具** - 大小写转换、字数统计、去重
- **颜色选择器** - 颜色选择和格式转换
- **计时器** - 倒计时、秒表等功能

## 💝 打赏支持

项目主页右下角设有打赏二维码，用户可通过扫描二维码进行打赏和支持。二维码图片位置：

- **位置**: `donation-panel` 区域内的 `.qr-code-placeholder`
- **替换方式**: 将二维码图片放入该区域，或通过修改HTML直接替换占位符

## 🚀 快速开始

1. **克隆仓库**
   ```bash
   git clone https://github.com/yisuoyanyv/web-tools.git
   ```

2. **启动本地服务**
   ```bash
   # 使用Python（Python 3）
   python -m http.server 8000
   
   # 使用Python 2
   python -m SimpleHTTPServer 8000
   
   # 或使用其他本地服务工具
   ```

3. **打开浏览器**
   - 访问 `http://localhost:8000`

## 📝 开发说明

### 添加新工具

1. **在 `js/main.js` 中的 `tools` 数组添加工具信息**
   ```javascript
   {
       id: 'unique-id',
       name: '工具名称',
       icon: '🎨',  // emoji图标
       category: 'converter',  // converter/generator/calculator/utility
       description: '工具描述',
       url: 'tools/category/tool-name.html'
   }
   ```

2. **在对应分类目录创建 HTML 文件**
   - 参照现有工具的结构
   - 建议使用相同的头尾样式以保持一致性

3. **提交变更**
   ```bash
   git add .
   git commit -m "Add new tool: 工具名称"
   git push
   ```

### 工具页面模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>工具名称 - Web Tools</title>
    <link rel="stylesheet" href="../../css/style.css">
    <style>
        /* 工具特定样式 */
    </style>
</head>
<body>
    <div class="container">
        <a href="../../index.html" class="back-link">← 返回首页</a>
        <!-- 工具内容 -->
    </div>
</body>
</html>
```

## 🌐 在线访问

项目可以通过 GitHub Pages 直接访问：
- https://yisuoyanyv.github.io/web-tools

## 📄 许可证

MIT License - 自由使用和修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进项目！

## 📧 反馈

如有建议或问题，欢迎在 Issues 中提出。

---

**⭐ 如果项目对您有帮助，请给个 Star 支持一下！**

**💝 也欢迎通过打赏二维码支持项目开发！**
