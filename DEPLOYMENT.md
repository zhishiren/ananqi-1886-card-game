# 静态页面部署

这是纯静态站点，不需要构建、后端、数据库或环境变量。入口是根目录 `index.html`，角色图鉴入口为 `/#roster`；资源使用相对路径，可部署在域名根目录或子目录。

## Gitee 展示

仓库 README 使用 `previews/roster-desktop.png` 展示效果，并保留完整源代码、角色图片和设计记录。README 截图不是交互网页。

截至本次发布准备（2026-10-04），[Gitee 官方帮助中心](https://gitee.com/help.com/)将 Gitee Pages 与 Pages Pro 标注为“功能已下线”，因此无法通过这些服务托管本项目。

## 其他静态服务器

将本仓库根目录作为站点发布目录，构建命令留空，并完整上传 HTML、CSS、JS 和 assets 文件夹。无需 SPA 路由重写，本项目使用 hash 导航。

公开上线前需选择托管服务和对应账号，本仓库未配置或声称已完成其他平台部署。

## 本地访问

在仓库根目录运行：

```sh
python3 -m http.server 1887 --bind 127.0.0.1
```

浏览器打开 http://127.0.0.1:1887/#roster 。也可以直接双击 `index.html`。
