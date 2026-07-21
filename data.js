// 作品数据配置文件
// 请在这里添加你的作品信息

const portfolioData = {
    // AI视频创作
    aiVideos: [
        // ========== 育碧AI二创视频 ==========
        {
            id: 'ai-1',
            title: '虞姬自刎舞蹈挑战',
            category: 'ubisoft',
            thumbnail: 'https://via.placeholder.com/640x360/667eea/ffffff?text=虞姬自刎舞蹈挑战',
            videoUrl: '', // 填入B站视频链接或嵌入代码
            date: '2026-05',
            company: '育碧上海 - 舞力全开派对',
            stats: {
                views: '1,489',
                likes: '14.4%',
                completion: '33.7%',
                roi: '17.22'
            },
            description: `
                <p><strong>创意亮点：</strong></p>
                <ul>
                    <li>结合热门IP（王者荣耀虞姬）+ 游戏舞蹈挑战</li>
                    <li>情绪共鸣点：虞姬人设悲情色彩，舞蹈动作戏剧化</li>
                    <li>话题标签：#虞姬自刎舞蹈挑战</li>
                </ul>
                <p><strong>工作流程：</strong>AI生图 → AI生视频 → 动作控制 → 后期优化</p>
            `
        },
        {
            id: 'ai-2',
            title: '情绪共鸣 - 我哭了谁知道',
            category: 'ubisoft',
            thumbnail: 'https://via.placeholder.com/640x360/764ba2/ffffff?text=情绪共鸣',
            videoUrl: '',
            date: '2026-05',
            company: '育碧上海 - 舞力全开派对',
            stats: {
                views: '3,694',
                likes: '3.1%',
                completion: '42.4%',
                roi: '413.75'
            },
            description: `
                <p><strong>创意亮点：</strong></p>
                <ul>
                    <li>emo情绪共鸣，契合年轻人表达方式</li>
                    <li>有机流量为主，ROI极高（413.75）</li>
                    <li>完播率42.4%，内容质量优秀</li>
                </ul>
            `
        },
        {
            id: 'ai-3',
            title: 'AI二创视频 - 案例3',
            category: 'ubisoft',
            thumbnail: 'https://via.placeholder.com/640x360/f093fb/ffffff?text=AI案例3',
            videoUrl: '',
            date: '2026-05',
            company: '育碧上海 - 舞力全开派对',
            stats: {
                views: '待填入',
                likes: '待填入',
                completion: '待填入',
                roi: '待填入'
            },
            description: '<p>作品描述待补充</p>'
        },
        // 继续添加其他8条育碧AI视频...
        {
            id: 'ai-4',
            title: 'AI二创视频 - 案例4',
            category: 'ubisoft',
            thumbnail: 'https://via.placeholder.com/640x360/4facfe/ffffff?text=AI案例4',
            videoUrl: '',
            date: '2026-05',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },
        {
            id: 'ai-5',
            title: 'AI二创视频 - 案例5',
            category: 'ubisoft',
            thumbnail: 'https://via.placeholder.com/640x360/00f2fe/ffffff?text=AI案例5',
            videoUrl: '',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },
        {
            id: 'ai-6',
            title: 'AI二创视频 - 案例6',
            category: 'ubisoft',
            thumbnail: 'https://via.placeholder.com/640x360/43e97b/ffffff?text=AI案例6',
            videoUrl: '',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },
        {
            id: 'ai-7',
            title: 'AI二创视频 - 案例7',
            category: 'ubisoft',
            thumbnail: 'https://via.placeholder.com/640x360/38f9d7/ffffff?text=AI案例7',
            videoUrl: '',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },
        {
            id: 'ai-8',
            title: 'AI二创视频 - 案例8',
            category: 'ubisoft',
            thumbnail: 'https://via.placeholder.com/640x360/fa709a/ffffff?text=AI案例8',
            videoUrl: '',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },
        {
            id: 'ai-9',
            title: 'AI二创视频 - 案例9',
            category: 'ubisoft',
            thumbnail: 'https://via.placeholder.com/640x360/fee140/ffffff?text=AI案例9',
            videoUrl: '',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },
        {
            id: 'ai-10',
            title: 'AI二创视频 - 案例10',
            category: 'ubisoft',
            thumbnail: 'https://via.placeholder.com/640x360/30cfd0/ffffff?text=AI案例10',
            videoUrl: '',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },
        {
            id: 'ai-11',
            title: 'AI二创视频 - 案例11',
            category: 'ubisoft',
            thumbnail: 'https://via.placeholder.com/640x360/330867/ffffff?text=AI案例11',
            videoUrl: '',
            date: '2026-07',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },

        // ========== 真人视频 ==========
        {
            id: 'real-1',
            title: '真人访谈 - 案例1',
            category: 'real-person',
            thumbnail: 'https://via.placeholder.com/640x360/667eea/ffffff?text=真人访谈1',
            videoUrl: '',
            date: '2026-05',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: `
                <p><strong>内容特色：</strong></p>
                <ul>
                    <li>韩综剪辑风格（快节奏、字幕丰富、音效活泼）</li>
                    <li>办公室真人访谈/Vlog</li>
                    <li>每周更新1条</li>
                </ul>
            `
        },
        {
            id: 'real-2',
            title: '真人视频 - 案例2',
            category: 'real-person',
            thumbnail: 'https://via.placeholder.com/640x360/764ba2/ffffff?text=真人视频2',
            videoUrl: '',
            date: '2026-05',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },
        {
            id: 'real-3',
            title: '真人视频 - 案例3',
            category: 'real-person',
            thumbnail: 'https://via.placeholder.com/640x360/f093fb/ffffff?text=真人视频3',
            videoUrl: '',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },
        {
            id: 'real-4',
            title: '真人视频 - 案例4',
            category: 'real-person',
            thumbnail: 'https://via.placeholder.com/640x360/4facfe/ffffff?text=真人视频4',
            videoUrl: '',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },
        {
            id: 'real-5',
            title: '真人视频 - 案例5',
            category: 'real-person',
            thumbnail: 'https://via.placeholder.com/640x360/00f2fe/ffffff?text=真人视频5',
            videoUrl: '',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },
        {
            id: 'real-6',
            title: '真人视频 - 案例6',
            category: 'real-person',
            thumbnail: 'https://via.placeholder.com/640x360/43e97b/ffffff?text=真人视频6',
            videoUrl: '',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },
        {
            id: 'real-7',
            title: '真人视频 - 案例7',
            category: 'real-person',
            thumbnail: 'https://via.placeholder.com/640x360/38f9d7/ffffff?text=真人视频7',
            videoUrl: '',
            date: '2026-07',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },
        {
            id: 'real-8',
            title: '真人视频 - 案例8',
            category: 'real-person',
            thumbnail: 'https://via.placeholder.com/640x360/fa709a/ffffff?text=真人视频8',
            videoUrl: '',
            date: '2026-07',
            company: '育碧上海 - 舞力全开派对',
            stats: {},
            description: '<p>作品描述待补充</p>'
        },

        // ========== 个人创作 ==========
        {
            id: 'personal-1',
            title: '燕云十六声 - AI视频创作',
            category: 'personal',
            thumbnail: 'https://via.placeholder.com/640x360/667eea/ffffff?text=燕云十六声',
            videoUrl: '',
            date: '2026',
            company: '个人创作',
            stats: {},
            description: `
                <p><strong>创作说明：</strong></p>
                <p>基于游戏《燕云十六声》的AI视频创作，展示AI生成技术在游戏营销中的应用潜力。</p>
            `
        }
    ],

    // 线下活动
    events: [
        {
            id: 'event-1',
            title: '舞力全开派对 - BW展会',
            thumbnail: 'https://via.placeholder.com/640x360/667eea/ffffff?text=BW展会',
            videoUrl: '', // 可以放活动花絮视频
            date: '2026-07-10',
            company: '育碧上海 × 腾讯',
            stats: {},
            description: `
                <p><strong>项目职责：</strong></p>
                <ul>
                    <li>参与展会筹备与现场执行</li>
                    <li>审核KOL/KOC合作名单（评估视频调性与游戏匹配度、数据合规性）</li>
                    <li>现场担任机动岗位协调执行</li>
                </ul>
                <p><strong>展会内容：</strong></p>
                <ul>
                    <li>Y2K风格舞台区（Just Party PK对战）</li>
                    <li>拍照打卡区（Just Shine含定制贴纸）</li>
                    <li>试玩体验区（Just Dance）</li>
                    <li>策划"IP大乱斗"与"JDM社死挑战"互动玩法</li>
                </ul>
            `
        },
        {
            id: 'event-2',
            title: '暗黑不朽 - ChinaJoy',
            thumbnail: 'https://via.placeholder.com/640x360/764ba2/ffffff?text=ChinaJoy',
            videoUrl: '',
            date: '2026',
            company: '暴雪娱乐',
            stats: {},
            description: `
                <p><strong>项目职责：</strong></p>
                <p>作品描述待补充</p>
            `
        },
        {
            id: 'event-3',
            title: '暗黑不朽 × 炉石传说 - 青岛啤酒节',
            thumbnail: 'https://via.placeholder.com/640x360/f093fb/ffffff?text=青岛啤酒节',
            videoUrl: '',
            date: '2026',
            company: '暴雪娱乐',
            stats: {},
            description: `
                <p><strong>项目职责：</strong></p>
                <p>作品描述待补充</p>
            `
        }
    ],

    // 独立项目
    projects: [
        {
            id: 'project-1',
            title: '黄浦区政府合作项目',
            thumbnail: 'https://via.placeholder.com/640x360/667eea/ffffff?text=政府合作项目',
            videoUrl: '',
            date: '2026',
            company: '黄浦区政府',
            stats: {},
            description: `
                <p><strong>项目背景：</strong></p>
                <p>作品描述待补充</p>
            `
        }
    ]
};
