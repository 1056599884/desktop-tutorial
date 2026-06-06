# 免费软件导航

一个基于 Astro + TypeScript + Tailwind CSS 的中文静态软件资源导航站，适合部署到 Cloudflare Pages、GitHub Pages 或其他静态托管平台。

本站定位为正版免费软件、开源软件、官方软件下载入口和软件使用教程索引，不提供破解、激活码、补丁或盗版软件内容。

## 技术栈

- Astro
- TypeScript
- Tailwind CSS
- Fuse.js 本地搜索
- JSON 数据管理
- 静态生成，无数据库、无登录、无后台

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开终端显示的本地地址，通常是 `http://localhost:4321`。

## 构建

```bash
npm run build
npm run preview
```

构建产物会生成到 `dist/` 目录。

## 添加软件

软件数据位于 `src/data/software.json`。新增软件时复制一个对象并修改字段：

```json
{
  "name": "软件名称",
  "slug": "software-slug",
  "logo": "/logos/software.svg",
  "category": "windows",
  "tags": ["标签1", "标签2"],
  "platform": ["Windows", "macOS"],
  "license": "免费",
  "description": "一句话介绍软件用途。",
  "features": ["特点一", "特点二"],
  "officialUrl": "https://example.com/",
  "downloadUrl": "https://example.com/download",
  "githubUrl": "",
  "alternatives": ["other-software-slug"],
  "tutorial": ["第一步", "第二步"],
  "updatedAt": "2026-06-06",
  "isRecommended": true,
  "isHot": false
}
```

字段说明：

- `slug` 会生成详情页地址，例如 `/software/everything`
- `category` 对应 `src/data/categories.ts` 中的分类 slug，例如 `windows`、`ai-tools`
- `logo` 建议放到 `public/logos/`，路径写成 `/logos/xxx.svg`
- `githubUrl` 没有时可以留空字符串
- `alternatives` 填类似软件的 `slug`
- `isRecommended` 控制首页推荐软件
- `isHot` 控制首页热门软件

## 修改分类

分类数据位于 `src/data/categories.ts`。新增分类后会自动生成 `/category/分类slug` 页面。

## SEO

- 每个页面都有独立 `title` 和 `description`
- 软件详情页会生成独立 SEO 标题
- `@astrojs/sitemap` 会在构建时生成 sitemap
- `public/robots.txt` 已提供 robots 文件

上线前请修改：

- `astro.config.mjs` 里的 `site`
- `public/robots.txt` 里的 Sitemap 域名

## 部署到 Cloudflare Pages

1. 将项目推送到 GitHub。
2. 在 Cloudflare Pages 中连接该仓库。
3. 构建设置：
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. 保存并部署。

如果部署在自定义域名，请同步修改 `astro.config.mjs` 的 `site` 字段。

## 部署到 GitHub Pages

如果部署到用户或组织主页，例如 `https://username.github.io/`，保持默认路径即可。

如果部署到项目子路径，例如 `https://username.github.io/repo-name/`，需要根据 Astro 官方说明配置 `base`，并确认站内链接适配子路径部署。
