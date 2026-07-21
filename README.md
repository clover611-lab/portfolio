# 韩佳玉 - 个人作品集网站

## 📁 文件说明

```
portfolio/
├── index.html      # 网站主页面
├── style.css       # 样式文件
├── script.js       # 交互功能
├── data.js         # 作品数据配置
└── README.md       # 使用说明（本文件）
```

## 🚀 快速开始

### 方法一：本地预览（推荐新手）

1. 将所有文件放在同一个文件夹中
2. 双击打开 `index.html` 即可在浏览器中预览
3. 或者用 VS Code 安装 Live Server 插件，右键选择 "Open with Live Server"

### 方法二：部署到 GitHub Pages（推荐）

1. **创建 GitHub 仓库**
   - 登录 GitHub，点击右上角 "+" → "New repository"
   - 仓库名：`portfolio` 或 `你的用户名.github.io`
   - 设置为 Public

2. **上传文件**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "main" 分支
   - 点击 Save

4. **访问你的网站**
   - 地址：`https://你的用户名.github.io/仓库名/`
   - 如果仓库名是 `你的用户名.github.io`，地址就是 `https://你的用户名.github.io/`

---

## 📝 添加作品内容

### 1. 准备视频

#### 推荐方案：B站托管（免费、稳定）

1. **上传视频到B站**
   - 登录 B站 → 投稿
   - 选择视频文件上传
   - 重要：稿件类型选择 "仅自己可见" 或 "粉丝可见"

2. **获取视频链接**
   - 上传成功后，复制视频链接（格式：`https://www.bilibili.com/video/BV...`）

3. **添加到网站**
   - 打开 `data.js` 文件
   - 找到对应的作品
   - 在 `videoUrl` 字段填入B站链接

示例：
```javascript
{
    id: 'ai-1',
    title: '虞姬自刎舞蹈挑战',
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7mD',  // 填入你的B站链接
    // ... 其他字段
}
```

#### 备选方案：其他视频平台

- **腾讯视频**：直接填入视频链接
- **YouTube**：填入视频链接（需要科学上网）
- **直接嵌入代码**：如果你有视频的 `<iframe>` 嵌入代码，可以直接粘贴到 `videoUrl` 字段

### 2. 更换视频封面图

有两种方式：

#### 方式A：使用视频截图（推荐）

1. 播放视频，截取关键帧
2. 将图片上传到图床（推荐：https://imgbb.com/ 或 https://sm.ms/）
3. 获取图片链接
4. 在 `data.js` 中替换 `thumbnail` 字段

```javascript
thumbnail: 'https://你的图片链接.jpg',
```

#### 方式B：使用本地图片

1. 在网站文件夹中创建 `images` 文件夹
2. 将图片放入 `images` 文件夹，命名如：`video-1.jpg`
3. 在 `data.js` 中引用：

```javascript
thumbnail: 'images/video-1.jpg',
```

### 3. 编辑作品信息

打开 `data.js`，找到对应的作品，修改以下字段：

```javascript
{
    id: 'ai-1',                    // 唯一ID，不要修改
    title: '你的作品标题',          // 修改标题
    category: 'ubisoft',           // 分类：ubisoft/real-person/personal
    thumbnail: '封面图链接',        // 修改封面图
    videoUrl: 'B站视频链接',        // 填入视频链接
    date: '2026-05',               // 修改日期
    company: '育碧上海',            // 修改公司名称
    stats: {                       // 数据统计（可选）
        views: '3,694',            // 播放量
        likes: '14.4%',            // 点赞率
        completion: '42.4%',       // 完播率
        roi: '413.75'              // ROI
    },
    description: `                 // 作品描述（支持HTML）
        <p><strong>创意亮点：</strong></p>
        <ul>
            <li>第一个亮点</li>
            <li>第二个亮点</li>
        </ul>
    `
}
```

### 4. 替换头像

将你的头像照片替换为在线链接或本地路径：

打开 `index.html`，找到第 29 行：

```html
<img src="https://pfst.cf2.poecdn.net/base/image/649b04a8faf979beb9ee9c52055607b71734b72167dad864ed3306f82fe68233?w=1280&h=1280" 
     alt="韩佳玉" class="profile-image">
```

替换为你的头像链接：
```html
<img src="你的头像链接" alt="韩佳玉" class="profile-image">
```

### 5. 上传简历PDF

1. 将你的简历PDF文件重命名为 `resume.pdf`
2. 放在网站文件夹根目录
3. 用户点击"下载简历"按钮时会自动下载

---

## 🎨 自定义样式

### 修改主题色

打开 `style.css`，找到第 9-16 行：

```css
:root {
    --primary-color: #000;          /* 主色调（黑色）*/
    --secondary-color: #666;        /* 次要文字颜色 */
    --bg-color: #fff;               /* 背景色（白色）*/
    --text-color: #000;             /* 文字颜色 */
    --border-color: #e0e0e0;        /* 边框颜色 */
    --hover-color: #f5f5f5;         /* 悬停背景色 */
    --accent-color: #0066ff;        /* 强调色（蓝色）*/
}
```

例如，如果你想要育碧蓝色主题：
```css
--primary-color: #0055ff;
--accent-color: #0055ff;
```

### 修改字体

在 `style.css` 第 19 行修改字体：

```css
font-family: "你喜欢的字体", -apple-system, BlinkMacSystemFont, sans-serif;
```

---

## 🛠 常见问题

### Q1: 视频无法播放？

**原因：**
- 视频链接格式不正确
- B站视频权限设置为"仅自己可见"但未登录

**解决方法：**
- 确保 `videoUrl` 字段填写了正确的B站链接
- B站视频设置为"粉丝可见"而不是"仅自己可见"
- 检查视频是否通过审核

### Q2: 封面图显示不出来？

**原因：**
- 图片链接失效
- 图片格式不支持
- 跨域限制

**解决方法：**
- 使用图床上传图片，获取直链
- 确保图片格式为 JPG/PNG/WebP
- 如果用本地图片，确保路径正确

### Q3: 部署到 GitHub Pages 后样式错乱？

**原因：**
- 文件路径不正确

**解决方法：**
- 确保所有文件都在同一目录
- 检查 `index.html` 中引用的 CSS/JS 文件路径

### Q4: 移动端显示有问题？

**原因：**
- 响应式设计需要调试

**解决方法：**
- 打开浏览器开发者工具（F12）
- 切换到移动设备视图测试
- 如有问题，在 `style.css` 的 `@media` 部分调整

---

## 📱 功能说明

### ✅ 已实现的功能

- [x] 响应式设计（支持手机、平板、电脑）
- [x] 视频播放（B站/腾讯视频嵌入）
- [x] 视频弹窗查看
- [x] 数据展示（播放量、ROI等）
- [x] 分类筛选（AI视频/线下活动/独立项目）
- [x] 标签筛选（育碧AI/真人视频/个人创作）
- [x] 联系方式展示
- [x] 简历下载

### 🔄 可扩展的功能（如需要可以添加）

- [ ] 搜索功能
- [ ] 深色/浅色模式切换
- [ ] 多语言支持
- [ ] 访问统计
- [ ] 留言功能

---

## 💡 使用技巧

### 1. 快速批量修改

如果你有很多视频需要添加，可以：
1. 在 Excel 中整理好所有信息（标题、日期、链接等）
2. 使用文本替换工具批量生成 JSON 格式
3. 复制粘贴到 `data.js`

### 2. 优化加载速度

- 视频封面图建议压缩到 100-200KB
- 使用 WebP 格式图片（体积更小）
- 使用图床而不是本地存储大文件

### 3. SEO优化

如果希望网站被搜索引擎收录，可以：
1. 在 `index.html` 的 `<head>` 部分添加：
```html
<meta name="description" content="韩佳玉的游戏营销作品集">
<meta name="keywords" content="游戏营销,内容运营,AI视频,育碧">
```

2. 使用有意义的文件名和图片 `alt` 属性

---

## 📞 技术支持

如果遇到任何问题：

1. **查看浏览器控制台**：按 F12 打开开发者工具，查看是否有错误信息
2. **检查文件路径**：确保所有文件都在正确的位置
3. **清除缓存**：按 Ctrl+Shift+R 强制刷新页面

---

## 🎉 下一步

1. ✅ 将你的视频上传到B站
2. ✅ 获取视频链接并填入 `data.js`
3. ✅ 替换视频封面图
4. ✅ 修改作品描述和数据
5. ✅ 测试网站功能
6. ✅ 部署到 GitHub Pages
7. ✅ 分享给HR和招聘官！

---

**祝你秋招顺利！🚀**
