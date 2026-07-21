// 主JavaScript文件

// DOM元素
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');
const modal = document.getElementById('videoModal');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// 导航切换
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const category = item.dataset.category;

        // 更新导航状态
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // 更新内容区域
        contentSections.forEach(section => section.classList.remove('active'));
        document.getElementById(category).classList.add('active');

        // 移动端关闭菜单
        navMenu.classList.remove('active');

        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// 汉堡菜单
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 加载AI视频
function loadAIVideos(filter = 'all') {
    const container = document.getElementById('ai-videos-grid');
    container.innerHTML = '';

    const filteredVideos = filter === 'all'
        ? portfolioData.aiVideos
        : portfolioData.aiVideos.filter(video => video.category === filter);

    filteredVideos.forEach((video, index) => {
        const card = createWorkCard(video, index);
        container.appendChild(card);
    });
}

// 加载线下活动
function loadEvents() {
    const container = document.getElementById('events-grid');
    container.innerHTML = '';

    portfolioData.events.forEach((event, index) => {
        const card = createWorkCard(event, index);
        container.appendChild(card);
    });
}

// 加载独立项目
function loadProjects() {
    const container = document.getElementById('projects-grid');
    container.innerHTML = '';

    portfolioData.projects.forEach((project, index) => {
        const card = createWorkCard(project, index);
        container.appendChild(card);
    });
}

// 创建作品卡片
function createWorkCard(work, index) {
    const card = document.createElement('div');
    card.className = 'work-card';
    card.style.animationDelay = `${index * 0.1}s`;

    // 创建图片容器
    const imageDiv = document.createElement('div');
    imageDiv.className = 'work-card-image';
    imageDiv.style.backgroundImage = `url(${work.thumbnail})`;
    imageDiv.style.backgroundSize = 'cover';
    imageDiv.style.backgroundPosition = 'center';

    // 创建内容容器
    const content = document.createElement('div');
    content.className = 'work-card-content';

    const title = document.createElement('h3');
    title.className = 'work-card-title';
    title.textContent = work.title;

    const meta = document.createElement('div');
    meta.className = 'work-card-meta';
    meta.textContent = `${work.date} · ${work.company}`;

    content.appendChild(title);
    content.appendChild(meta);

    // 如果有统计数据，显示
    if (work.stats && Object.keys(work.stats).length > 0) {
        const stats = document.createElement('div');
        stats.className = 'work-card-stats';

        if (work.stats.views) {
            const viewStat = document.createElement('div');
            viewStat.className = 'stat-item';
            viewStat.innerHTML = `<span>📊</span> ${work.stats.views}`;
            stats.appendChild(viewStat);
        }

        if (work.stats.likes) {
            const likeStat = document.createElement('div');
            likeStat.className = 'stat-item';
            likeStat.innerHTML = `<span>❤️</span> ${work.stats.likes}`;
            stats.appendChild(likeStat);
        }

        if (work.stats.roi) {
            const roiStat = document.createElement('div');
            roiStat.className = 'stat-item';
            roiStat.innerHTML = `<span>💰</span> ROI ${work.stats.roi}`;
            stats.appendChild(roiStat);
        }

        content.appendChild(stats);
    }

    card.appendChild(imageDiv);
    card.appendChild(content);

    // 点击事件
    card.addEventListener('click', () => openModal(work));

    return card;
}

// 打开模态框
function openModal(work) {
    document.getElementById('videoTitle').textContent = work.title;
    document.getElementById('videoDate').textContent = work.date;
    document.getElementById('videoCompany').textContent = work.company;
    document.getElementById('videoDescription').innerHTML = work.description;

    // 显示统计数据
    const statsContainer = document.getElementById('videoStats');
    statsContainer.innerHTML = '';

    if (work.stats && Object.keys(work.stats).length > 0) {
        Object.entries(work.stats).forEach(([key, value]) => {
            const statBox = document.createElement('div');
            statBox.className = 'stat-box';

            const statValue = document.createElement('div');
            statValue.className = 'stat-value';
            statValue.textContent = value;

            const statLabel = document.createElement('div');
            statLabel.className = 'stat-label';
            statLabel.textContent = getLabelText(key);

            statBox.appendChild(statValue);
            statBox.appendChild(statLabel);
            statsContainer.appendChild(statBox);
        });
    }

    // 加载视频
    const videoPlayer = document.getElementById('videoPlayer');
    if (work.videoUrl) {
        // 如果是B站链接
        if (work.videoUrl.includes('bilibili.com')) {
            const bvid = extractBVID(work.videoUrl);
            videoPlayer.innerHTML = `<iframe src="//player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>`;
        }
        // 如果是腾讯视频链接
        else if (work.videoUrl.includes('v.qq.com')) {
            videoPlayer.innerHTML = `<iframe src="${work.videoUrl}" frameborder="0" allowFullScreen="true"></iframe>`;
        }
        // 如果是直接嵌入代码
        else if (work.videoUrl.includes('<iframe') || work.videoUrl.includes('<video')) {
            videoPlayer.innerHTML = work.videoUrl;
        }
        // 其他链接
        else {
            videoPlayer.innerHTML = `<iframe src="${work.videoUrl}" frameborder="0" allowFullScreen="true"></iframe>`;
        }
    } else {
        videoPlayer.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white;">视频链接待添加</div>';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('videoPlayer').innerHTML = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// ESC键关闭
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// 筛选标签
const filterTags = document.querySelectorAll('.filter-tags .tag');
filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        filterTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');

        const filter = tag.dataset.filter;
        loadAIVideos(filter);
    });
});

// 工具函数：获取统计标签文本
function getLabelText(key) {
    const labels = {
        views: '播放量',
        likes: '点赞率',
        completion: '完播率',
        roi: 'ROI'
    };
    return labels[key] || key;
}

// 工具函数：提取B站BVID
function extractBVID(url) {
    const match = url.match(/BV[\w]+/);
    return match ? match[0] : '';
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    loadAIVideos();
    loadEvents();
    loadProjects();
});
