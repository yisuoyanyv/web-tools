# 🛠️ Web Tools - 在线工具集合

一个精选的 HTML + CSS + JavaScript 静态网页工具集合，包含各类实用工具，分类整理，便捷易用。

## ✨ 项目特点

- ✅ **完全纯静态网页** - 只需 HTML + CSS + JavaScript，无需服务器
- 📱 **响应式设计** - 完美支持桌面、平板和手机设备
- 🎨 **现代化 UI** - 采用当代设计风格，用户体验优秀
- 🔍 **实时搜索** - 快速查找所需工具
- 🏷️ **智能分类** - 转换工具、生成工具、计算工具、实用工具四大类
- 💝 **打赏支持** - 内置打赏二维码支持（可点击关闭）
- 🚀 **零依赖** - 除 QR 码生成器外，完全不依赖外部库
- 💾 **离线可用** - 支持离线使用，无需网络连接

## 🎯 已实现工具列表

### 📊 转换工具 (Converter)

| 工具 | 功能 | 特性 |
|-----|------|------|
| **进制转换** | 二、八、十、十六进制互转 | 支持大数字转换 |
| **单位转换** | 长度、重量、温度、面积、体积 | 5 大类 20+ 单位 |
| **JSON 格式化** | 格式化、压缩、验证 | 实时错误提示 |

### 🎲 生成工具 (Generator)

| 工具 | 功能 | 特性 |
|-----|------|------|
| **密码生成器** | 生成强密码 | 自定义长度和字符类型 |
| **UUID 生成器** | 生成 UUID v4 | 支持批量生成（1-100 个） |
| **QR 码生成** | 文本/URL 转二维码 | 可调整大小，支持下载 |

### 🧮 计算工具 (Calculator)

| 工具 | 功能 | 特性 |
|-----|------|------|
| **房贷计算器** | 计算月供、利息、总还款 | 支持等额本息/本金两种方式 |
| **BMI 计算器** | 计算身体质量指数 | 显示理想体重范围 |
| **百分比计算** | 百分比、折扣、增长率、占比 | 4 种计算模式 |

### 🎯 实用工具 (Utility)

| 工具 | 功能 | 特性 |
|-----|------|------|
| **文本工具** | 大小写、反向、去重、统计 | 8 项文本处理功能 |
| **颜色选择器** | 颜色选择、格式转换 | HEX/RGB/HSL 互转 |
| **计时器** | 秒表、倒计时 | 2 种模式，支持计圈 |

**总计：12 个功能完整的工具** ✨

## 📂 项目结构

```
web-tools/
├── index.html                          # 主页面 - 工具导航首页
├── README.md                           # 项目文档
├── css/
│   └── style.css                       # 全局样式表 (600+ 行)
├── js/
│   └── main.js                         # 主逻辑 (工具数据、搜索、分类)
└── tools/
    ├── converter/                      # 📊 转换工具
    │   ├── bin-converter.html          # 进制转换
    │   ├── unit-converter.html         # 单位转换
    │   └── json-converter.html         # JSON 格式化
    ├── generator/                      # 🎲 生成工具
    │   ├── password-generator.html     # 密码生成器
    │   ├── uuid-generator.html         # UUID 生成器
    │   └── qr-generator.html           # QR 码生成
    ├── calculator/                     # 🧮 计算工具
    │   ├── mortgage-calculator.html    # 房贷计算器
    │   ├── bmi-calculator.html         # BMI 计算器
    │   └── percentage-calculator.html  # 百分比计算
    └── utility/                        # 🎯 实用工具
        ├── text-tools.html             # 文本工具
        ├── color-picker.html           # 颜色选择器
        └── timer.html                  # 计时器
```

## 🚀 快速开始

### 方式 1：本地运行

#### Windows
```bash
# 进入项目目录
cd web-tools

# 启动 Python 服务器
python -m http.server 8000

# 打开浏览器访问
http://localhost:8000
```

#### macOS / Linux
```bash
cd web-tools
python3 -m http.server 8000
# 访问 http://localhost:8000
```

#### 或使用其他服务器
```bash
# Node.js http-server
npx http-server

# PHP 内置服务器
php -S localhost:8000

# Ruby
ruby -run -ehttpd . -p8000
```

### 方式 2：GitHub Pages 部署

1. **上传到 GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/web-tools.git
git push -u origin main
```

2. **启用 GitHub Pages**
   - 进入仓库设置 → Pages
   - Branch 选择 `main`
   - 保存即可

3. **访问**
   - `https://yourusername.github.io/web-tools`

### 方式 3：在线预览

直接使用 GitHub 提供的链接：
- GitHub Pages: `https://yisuoyanyv.github.io/web-tools`

## 💡 主要功能说明

### 主页特性
- 🔍 **实时搜索** - 在搜索框输入关键词快速找到工具
- 🏷️ **分类导航** - 通过分类按钮快速筛选工具
- 💝 **打赏面板** - 右下角支持打赏二维码（可关闭）
- 📱 **响应式布局** - 自动适配不同屏幕尺寸

### 每个工具页面包含
- ⬅️ **返回链接** - 快速回到首页
- 🎨 **一致的风格** - 统一的 UI 设计
- 📖 **使用说明** - 清晰的操作指南
- 💾 **本地处理** - 所有数据在本地处理，无上传

## 🔧 技术栈

- **前端框架**：纯原生 HTML5 + CSS3 + ES6+ JavaScript
- **外部依赖**：仅 QR 码生成使用 `qrcodejs` 库
- **浏览器兼容**：Chrome, Firefox, Safari, Edge 等现代浏览器
- **文件大小**：总大小 < 300KB（含所有工具）

## 📝 使用示例

### 1. 进制转换
```
输入：100
选择：十进制
输出：
  二进制：1100100
  八进制：144
  十六进制：64
```

### 2. 密码生成
```
长度：16 字符
包含：大小写 + 数字 + 特殊符号
结果：K9mP$xL2@qN4wR7j
```

### 3. BMI 计算
```
身高：175 cm
体重：70 kg
结果：BMI = 22.86（正常）
```

### 4. 房贷计算
```
贷款：500,000 元
利率：4.5%
期限：30 年
结果：月供 ≈ 2,533 元
```

## 🎨 自定义和扩展

### 修改配色
编辑 `css/style.css` 中的 `:root` 变量：

```css
:root {
    --primary-color: #6366f1;      /* 主色调 */
    --secondary-color: #8b5cf6;    /* 辅色调 */
    --success-color: #10b981;      /* 成功色 */
    /* ... */
}
```

### 添加新工具
1. 在 `js/main.js` 的 `tools` 数组添加工具信息
2. 在对应分类目录创建 HTML 文件
3. 参考现有工具的结构编写代码

示例：
```javascript
{
    id: 'new-tool',
    name: '新工具名称',
    icon: '🆕',
    category: 'converter',
    description: '工具描述',
    url: 'tools/converter/new-tool.html'
}
```

### 修改打赏二维码
编辑 `index.html` 中的打赏区域，替换二维码占位符为实际二维码图片。

## 🎯 特色亮点

✨ **跨平台兼容性强**
- 无需安装，直接打开即用
- 支持离线使用
- 自动响应式适配

🔐 **用户隐私保护**
- 所有计算都在本地完成
- 不上传任何数据到服务器
- 完全安全可靠

⚡ **性能优异**
- 加载速度快
- 流畅的交互体验
- 优化的代码结构

🎓 **易于学习**
- 代码简洁易懂
- 完整的注释说明
- 非常适合学习前端开发

## 📊 统计信息

| 指标 | 数值 |
|------|------|
| 工具总数 | 12 个 |
| HTML 文件 | 13 个 |
| CSS 代码行数 | 600+ |
| JS 代码行数 | 500+ |
| 总文件大小 | < 300KB |
| 响应式断点 | 3 个 |

## 🤝 贡献指南

欢迎贡献新工具或改进现有功能！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/新工具`)
3. 提交更改 (`git commit -m 'Add: 新工具'`)
4. 推送到分支 (`git push origin feature/新工具`)
5. 开启 Pull Request

## 📄 许可证

MIT License - 自由使用和修改

## 🙏 致谢

感谢所有使用和支持本项目的用户！

## 📧 联系方式

- GitHub: [yisuoyanyv](https://github.com/yisuoyanyv)
- 项目仓库: [web-tools](https://github.com/yisuoyanyv/web-tools)

## 💝 支持项目

如果这些工具对您有帮助，可以：
- ⭐ 给个 Star 支持
- 🔄 分享给身边的朋友
- 💬 提交建议和反馈
- 💰 扫描打赏二维码支持开发

---

**最后更新**: 2025-09-16  
**版本**: 1.0.0  
**状态**: 🟢 稳定版本
