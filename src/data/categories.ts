export type Category = {
  name: string;
  slug: string;
  description: string;
};

export const categories: Category[] = [
  { name: 'Windows 必备', slug: 'windows', description: '适合 Windows 电脑日常装机、搜索、压缩、截图与效率提升的软件。' },
  { name: 'Mac 必备', slug: 'mac', description: 'macOS 用户常用的效率工具、系统增强与生产力软件。' },
  { name: '安卓工具', slug: 'android', description: 'Android 手机实用工具、同步、文件管理与移动办公应用。' },
  { name: '图片处理', slug: 'image', description: '图片编辑、压缩、截图、标注、设计辅助和素材处理工具。' },
  { name: '视频剪辑', slug: 'video', description: '视频剪辑、录屏、转码、字幕处理与媒体制作软件。' },
  { name: '办公效率', slug: 'productivity', description: '文档、笔记、项目管理、自动化与日常效率工具。' },
  { name: 'AI 工具', slug: 'ai-tools', description: 'AI 写作、对话、编程、绘图与工作流辅助工具。' },
  { name: '浏览器插件', slug: 'browser-extensions', description: '适合 Chrome、Edge、Firefox 等浏览器的扩展工具。' },
  { name: '开源软件', slug: 'open-source', description: '代码开放、社区维护、可自由使用或自建部署的软件项目。' },
  { name: '免费替代软件', slug: 'free-alternatives', description: '替代商业软件的免费、开源或官方免费方案。' }
];

export const categoryMap = new Map(categories.map((category) => [category.slug, category]));
