# Resume Theme for hexo

- Live Demo & Documents: https://resume.js.org or https://resume-docs.vercel.app
- Source Codes: https://github.com/xaoxuu/hexo-theme-resume/

## <i class="fas fa-flag"></i> Get started

Since this theme is quite different from the normal Hexo theme, it is recommended to download the source code of this site directly and rewrite it with reference to the source code.

-Source code of this site: https://github.com/xaoxuu/resume-docs
-Theme source code: https://github.com/xaoxuu/hexo-theme-resume

You can also create a brand new blog and install it via the `npm` command:

```bash
npm i hexo-theme-resume
```

Then delete the redundant dependency packages (important), open `package.json`, copy and replace all with the following:

```json
{
  "name": "hexo-site",
  "private": true,
  "hexo": {
    "version": "5.2.0"
  },
  "scripts": {
    "start": "hexo server",
    "build": "node pre-deploy.js && hexo clean && hexo generate",
    "deploy": "npm run build && hexo deploy"
  },
  "engines": {
    "node": ">=8.9.0"
  },
  "dependencies": {
    "hexo": "^5.2.0",
    "hexo-autonofollow": "^1.0.1",
    "hexo-deployer-git": "^2.1.0",
    "hexo-neat": "^1.0.9",
    "hexo-renderer-ejs": "^1.0.0",
    "hexo-renderer-marked": "^3.2.0",
    "hexo-renderer-stylus": "^2.0.1",
    "hexo-server": "^1.0.0"
  }
}
```

Then enter `npm i` to install dependent packages.

# Hexo简历主题

- Demo及文档： https://resume.js.org/zh-cn/ or https://resume-docs.vercel.app/zh-cn/
- 主题源码： https://github.com/xaoxuu/hexo-theme-resume/


> 附：一个适合简历的Typora主题：[vue-pdf](https://cdn.jsdelivr.net/gh/xaoxuu/hexo-theme-resume/source/css/vue-pdf.css)


## <i class="fas fa-flag"></i> 开始使用

由于本主题与普通 Hexo 主题有较大区别，建议请直接下载本站的源码，参考源码进行改写。

- 本站源码：https://github.com/xaoxuu/resume-docs
- 主题源码：https://github.com/xaoxuu/hexo-theme-resume

也可以创建全新的博客，通过 `npm` 命令安装：

```bash
npm i hexo-theme-resume
```

然后删除多余的依赖包（重要），打开 `package.json` 复制并全部替换为以下内容：

```json
{
  "name": "hexo-site",
  "private": true,
  "hexo": {
    "version": "5.2.0"
  },
  "scripts": {
    "start": "hexo server",
    "build": "node pre-deploy.js && hexo clean && hexo generate",
    "deploy": "npm run build && hexo deploy"
  },
  "engines": {
    "node": ">=8.9.0"
  },
  "dependencies": {
    "hexo": "^5.2.0",
    "hexo-autonofollow": "^1.0.1",
    "hexo-deployer-git": "^2.1.0",
    "hexo-neat": "^1.0.9",
    "hexo-renderer-ejs": "^1.0.0",
    "hexo-renderer-marked": "^3.2.0",
    "hexo-renderer-stylus": "^2.0.1",
    "hexo-server": "^1.0.0"
  }
}
```

然后输入 `npm i` 安装依赖包。
