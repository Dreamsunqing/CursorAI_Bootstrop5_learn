# 在线学习平台
# AI 生成 静态页面 并无实际作用
一个现代化的在线学习平台，使用 Bootstrap 5 构建，提供响应式设计和丰富的交互体验。

## 功能特点

### 1. 响应式设计
- 完美适配各种设备尺寸
- 流畅的布局转换
- 优化的移动端体验
- **卡片高度和底部元素对齐优化**

### 2. 用户界面
- 现代化导航栏
- 动态搜索功能
- 平滑滚动效果
- 返回顶部按钮
- 优雅的动画过渡
- **美观的课程图片 Banner 效果**

### 3. 学习功能
- 课程展示与分类
- 学习路径时间线
- 教师团队展示
- 常见问题解答
- 课程进度追踪

### 4. 性能优化
- 图片懒加载
- 事件防抖处理
- 平滑动画效果
- 错误处理机制

### 5. 测试功能
- **自动化功能测试脚本**
- **测试结果页面直接显示**

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Bootstrap Icons
- Python (用于图片生成)

## 项目结构

```
├── index.html          # 主页面
├── css/
│   └── style.css      # 自定义样式
├── js/
│   ├── main.js        # 主要脚本
│   └── test.js        # 测试脚本
├── images/            # 图片资源
├── generate_images.py # 图片生成脚本
├── README.md         # 项目说明
├── LICENSE           # 许可证
├── chathistory.md    # 聊天历史
└── filechange.md     # 文件变更记录
```

## 快速开始

1. 克隆仓库
```bash
git clone [仓库地址]
```

2. 安装依赖
```bash
# 安装 Python 依赖（用于图片生成）
pip install -r requirements.txt
```

3. 生成图片资源
```bash
python generate_images.py
```

4. 启动本地服务器
```bash
# 使用 Python 的简单 HTTP 服务器
python -m http.server 8000
```

5. 访问网站
打开浏览器访问 `http://localhost:8000`

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- Opera (最新版)

## 开发指南

### 添加新功能
1. 在 `js/main.js` 中添加新的功能代码
2. 在 `css/style.css` 中添加相应的样式
3. 在 `index.html` 中更新 HTML 结构
4. 更新 `test.js` 添加相应的测试用例，并在页面上查看结果

### 修改样式
1. 优先使用 Bootstrap 的类
2. 在 `css/style.css` 中添加自定义样式
3. 使用 CSS 变量实现主题定制

### 性能优化
1. 使用图片懒加载
2. 实现事件防抖
3. 优化动画性能
4. 添加错误处理

## 测试

运行测试脚本检查功能：
1. **点击页面右侧中间的"运行测试"按钮**
2. **测试结果汇总将显示在页面右下角的提示框中**
3. 详细的通过/失败信息仍可在浏览器开发者工具的控制台查看

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系方式

- 项目维护者：Cursor 工具 由 dream 使用
- 邮箱：dream_demo@outlook.com

## 致谢

- Bootstrap 团队
- 所有贡献者
- 开源社区 