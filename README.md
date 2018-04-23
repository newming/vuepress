# 玩转 vurPress

之前一直用 hexo 搭建静态网站，前几天发现了 [vuepress](https://vuepress.vuejs.org/)，遂动手实操，非常不错。

[demo](https://www.newming.cn/vuepress/)

## 启动步骤

```bash
# 安装 vuepress，这里我选择本地安装，如果你已经在全局安装了的话，可跳过
npm i

# 开发模式，打开 localhost:8080 即可
npm start

# 打包静态文件
npm run build
```

## 文章编写

接下来就是写文章了，写到 docs/blog 文件夹下即可，如果需要在侧边栏显示，请添加链接到 docs/.vuepress/config.js 的 sidebar 配置项，我这里只为 blog 配置了 sidebar

## 主题修改

我已经将默认主题导出了。在 docs/theme，这个操作不可逆，so，接下来张什么样看你了少年，细心的你应该能发现，这个主题改起来很简单，而且你可以随意增加各种配置，不论是 md 中的 YAML 配置还是 config 中的配置，都会被当作变量注入到主题的 vue 文件中

## 静态资源

vuepress 支持相对路径，所以引用静态资源很简单。同时还可以增加 webpack 的配置，这个就很吊了，所以我做了一个别名配置。这里要注意一下下边的路径，`.`这个位置指的是 docs 文件夹，所以我的静态文件可以直接都放到 docs/assets 下，通过 `![aaa](@alias/me.jpg)` 别名来引入了

```js
configureWebpack: {
  resolve: {
    alias: {
      '@alias': './assets/'
    }
  }
},
```

另外，还可以将静态文件放到 docs/.vuepress/public ，打包的时候会将这里的文件拷贝到项目根目录下。

还有一个下问题就是 vuepress 默认是将 README.md 当作当前路径的 index 页面，例如 /about/ 会去找 docs/about/README.md 文件

还有就是 vuepress 对 markdown 做了拓展，具体可以看[这里](https://vuepress.vuejs.org/guide/markdown.html)，你还可以自己做一些拓展，不错。