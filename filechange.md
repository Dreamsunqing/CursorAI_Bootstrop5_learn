# 文件变更记录

## 2024-03-21
1. 新增文件
   - README.md：创建项目说明文档
   - chathistory.md：创建聊天历史记录文件
   - filechange.md：创建文件变更记录文件
   - index.html：创建主页面文件
   - css/style.css：创建自定义样式文件
   - js/main.js：创建主要 JavaScript 文件
   - images/：创建图片资源目录
   - LICENSE：创建 MIT 许可证文件
   - generate_images.py：创建图片生成脚本
   - test.js：创建测试脚本

2. 修改文件
   - index.html：
     - 添加 Bootstrap Icons 引用
     - 完善课程展示部分，添加三个课程卡片
     - 完善教学团队部分，添加三个教师信息卡片
     - 完善问答模块，添加常见问题列表
     - 添加学习路径时间线
     - 添加测试脚本引用
     - 优化课程和教学团队卡片高度，使用 d-flex 和 h-100 类
     - 优化课程和教学团队卡片底部元素对齐，使用 flex-column 和 flex-grow-1 类
     - 添加测试结果显示区域
     - 将"开始学习"按钮链接到 Bootstrap 介绍页面
   - css/style.css：
     - 添加时间线样式
     - 优化响应式布局
     - 添加动画效果
     - 添加返回顶部按钮样式
   - js/main.js：
     - 添加时间线动画效果
     - 添加滚动监听功能
     - 添加返回顶部按钮功能
     - 添加性能优化（防抖和节流）
     - 添加图片懒加载
     - 添加错误处理
   - README.md：
     - 移除 AI 生成注释
     - 添加卡片高度和底部元素对齐优化说明
     - 添加课程图片 Banner 效果说明
     - 新增测试功能模块说明
     - 更新测试说明，指明结果在页面上显示
     - 更新开发指南中的测试步骤
     - 优化文档结构和内容
   - generate_images.py：
     - 添加中文字体支持
     - 优化图片生成质量
     - 添加字体回退机制
     - 支持 Windows 和 Linux 系统
     - 添加渐变背景效果
     - 优化课程图片布局
     - 增加装饰元素
     - 调整字体大小和颜色
   - test.js：
     - 创建测试工具函数
     - 添加导航链接测试
     - 添加响应式布局测试
     - 添加动画效果测试
     - 添加交互功能测试
     - 添加测试结果汇总
     - 添加测试按钮
     - 优化测试按钮样式和位置
     - 将测试结果输出到页面上的指定 div
     - 添加测试结果显示区域的关闭按钮

3. 删除文件
   - 无

4. 生成资源
   - 生成课程图片（course1.jpg, course2.jpg, course3.jpg）
   - 生成教师图片（teacher1.jpg, teacher2.jpg, teacher3.jpg）

5. 性能优化
   - 添加滚动事件防抖
   - 添加搜索输入防抖
   - 添加图片懒加载
   - 添加错误处理机制
   - 优化动画性能

6. 更新了所有"查看详情"按钮的链接，指向 Bootstrap 5 入门教程页面 (https://www.w3school.com.cn/bootstrap5/bootstrap_get_started.asp) 