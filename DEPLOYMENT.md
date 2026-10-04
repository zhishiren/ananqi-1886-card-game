# 静态页面部署

这是纯静态站点，不需要构建、后端、数据库或环境变量。入口是根目录 `index.html`，角色图鉴入口为 `/#roster`；资源使用相对路径，可部署在域名根目录或子目录。

## Gitee 展示

仓库 README 使用 `previews/roster-desktop.png` 展示效果，并保留完整源代码、角色图片和设计记录。README 截图不是交互网页。

截至本次发布准备（2026-10-04），[Gitee 官方帮助中心](https://gitee.com/help.com/)将 Gitee Pages 与 Pages Pro 标注为“功能已下线”，因此无法通过这些服务托管本项目。

## 其他静态服务器

### GitHub Pages

使用 GitHub 仓库 `zhishiren/ananqi-1886-card-game`。发布源为 `main` 分支的根目录 `/`，根目录已添加 `.nojekyll`，直接发布现有静态文件。

页面地址为 https://zhishiren.github.io/ananqi-1886-card-game/ 。

后续更新推送至 GitHub 的 `main` 分支即可触发重新发布。Gitee 仓库仍作为原有代码存档，两个平台之间不自动同步。

将本仓库根目录作为站点发布目录，构建命令留空，并完整上传 HTML、CSS、JS 和 assets 文件夹。无需 SPA 路由重写，本项目使用 hash 导航。

GitHub Pages 以外的托管服务尚未配置。

## 本地访问

在仓库根目录运行：

```sh
python3 -m http.server 1887 --bind 127.0.0.1
```

浏览器打开 http://127.0.0.1:1887/#roster 。也可以直接双击 `index.html`。
