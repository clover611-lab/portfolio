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
            thumbnail: 'images/虞姬自刎舞（手势）-封面.jpg',
            videoUrl: 'https://www.bilibili.com/video/BV1PXKa6UEve?spm_id_from=333.788.videopod.episodes&vd_source=1c66bc5bcb6ddf083c21bb373ee30c78&p=2', 
            date: '2026-05',
            company: '育碧上海 - 舞力全开派对',
            description: `
                <p><strong>创意亮点：</strong></p>
                <ul>
                    <li>结合热门IP（王者荣耀虞姬）+ 游戏舞蹈挑战</li>
                    <li>情绪共鸣点：虞姬人设悲情色彩，舞蹈动作戏剧化</li>
                    <li>话题标签：#虞姬自刎舞蹈挑战</li>
                </ul>
                <p><strong>工作流程：</strong>AI生图 → AI生视频 → 动作控制 → 后期优化</p>
        },
        {
            id: 'ai-2',
            title: '情绪共鸣 - 我哭了谁知道',
            category: 'ubisoft',
            thumbnail: 'images/我哭了谁知道···封面.jpg',
            videoUrl: 'https://www.bilibili.com/video/BV1PXKa6UEve?spm_id_from=333.788.videopod.episodes&vd_source=1c66bc5bcb6ddf083c21bb373ee30c78&p=2',
            date: '2026-05',
            company: '育碧上海 - 舞力全开派对', 
        },
        {
            id: 'ai-3',
            title: 'vlog ep01',
            category: 'ubisoft',
            thumbnail: '跳舞人的一天-封面.jpg',
            videoUrl: 'https://www.bilibili.com/video/BV1PXKa6UEve?spm_id_from=333.788.videopod.episodes&vd_source=1c66bc5bcb6ddf083c21bb373ee30c78&p=2',
            date: '2026-05',
            company: '育碧上海 - 舞力全开派对',
         },
        {
            id: 'ai-4',
            title: 'vlog ep02',
            category: 'ubisoft',
            thumbnail: 'images/封面.jpg',
            videoUrl: '<https://www.bilibili.com/video/BV1PXKa6UEve?spm_id_from=333.788.videopod.episodes&vd_source=1c66bc5bcb6ddf083c21bb373ee30c78&p=2',
            date: '2026-05',
            company: '育碧上海 - 舞力全开派对',
        },
        {
            id: 'ai-5',
            title: 'vlog ep03',
            category: 'ubisoft',
            thumbnail: 'images/封面.png',
            videoUrl: 'https://www.bilibili.com/video/BV1PXKa6UEve?spm_id_from=333.788.videopod.episodes&vd_source=1c66bc5bcb6ddf083c21bb373ee30c78&p=2',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
        },
        {
            id: 'ai-6',
            title: '短剧 ep01',
            category: 'ubisoft',
            thumbnail: 'images/5月22日（27重置）-封面.jpg',
            videoUrl: 'https://www.bilibili.com/video/BV1PXKa6UEve?spm_id_from=333.788.videopod.episodes&vd_source=1c66bc5bcb6ddf083c21bb373ee30c78&p=2',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
        },
        {
            id: 'ai-7',
            title: '短剧 ep02',
            category: 'ubisoft',
            thumbnail: 'images/q版.png',
            videoUrl: 'https://www.bilibili.com/video/BV1PXKa6UEve?spm_id_from=333.788.videopod.episodes&vd_source=1c66bc5bcb6ddf083c21bb373ee30c78&p=2',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
        },
        {
            id: 'ai-8',
            title: 'hitem',
            category: 'ubisoft',
            thumbnail: 'images/6月3日 hitem-封面.jpg',
            videoUrl: 'https://www.bilibili.com/video/BV1PXKa6UEve?spm_id_from=333.788.videopod.episodes&vd_source=1c66bc5bcb6ddf083c21bb373ee30c78&p=2',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
        },
        {
            id: 'ai-9',
            title: 'shello摇',
            category: 'ubisoft',
            thumbnail: 'images/shello摇-封面.jpg',
            videoUrl: 'https://www.bilibili.com/video/BV1PXKa6UEve?spm_id_from=333.788.videopod.episodes&vd_source=1c66bc5bcb6ddf083c21bb373ee30c78&p=2',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
        },
        {
            id: 'ai-10',
            title: '珠满摇',
            category: 'ubisoft',
            thumbnail: 'images/515珠满摇-封面.jpg',
            videoUrl: 'https://www.bilibili.com/video/BV1PXKa6UEve?spm_id_from=333.788.videopod.episodes&vd_source=1c66bc5bcb6ddf083c21bb373ee30c78&p=2',
            date: '2026-06',
            company: '育碧上海 - 舞力全开派对',
        },
        {
           

        // ========== 个人创作 ==========
        {
            id: 'personal-1',
            title: '燕云十六声 - AI视频创作',
            category: 'personal',
            thumbnail: 'images/video-1.png',
            videoUrl: 'https://www.bilibili.com/video/BV1PXKa6UEve?spm_id_from=333.788.videopod.episodes&vd_source=1c66bc5bcb6ddf083c21bb373ee30c78&p=2',
            date: '2026',
            company: '个人创作',
       
 
