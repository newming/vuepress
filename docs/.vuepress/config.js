module.exports = {
  title: 'Newming',
  description: '这是钮旭明的测试项目啊哈哈',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': './assets/'
      }
    }
  },
  dest: './dist',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about/' },
      { text: 'Github', link: 'https://github.com/newming' },
    ],
    sidebar: [
      {
        title: 'Blog',
        collapsable: false,
        children: [
          '/blog/',
          '/blog/first'
        ]
      }
    ],
    sidebarDepth: 3
  }
}