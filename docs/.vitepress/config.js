/*
 * @Author: zxf
 * @Date: 2022-04-16 17:26:46
 * @Description: 配置
 */
const baseConfig = {
  title: " ", // 网站标题
  description: "js-feng 学习博客", // 网站描述
  base: '/js-feng/docs', // 部署时的路径(默认)
  // 使用插件
  plugins: [
    '@vuepress/plugin-back-to-top',
  ],
  // 主题配置
  themeConfig: {
    logo: 'http://e100.3dnest.cn/zhanguan/static/img/avatar/zq.logo.png',
    // 启动页面丝滑滚动
    smoothScroll: true,
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name'
    },

    // 头部导航
    nav: [
      // { text: '首页', link: '/' },
      { text: '小白', link: '/three-air/introduction', activeMatch: '^/three-air/' },
      { text: '基础', link: '/api/core', activeMatch: '^/api/'},
      { text: '进阶', link: '/advanced/typescript', activeMatch: '^/advanced/'},
      { text: '高级', link: '/log/' },
      { text: '工具', link: '/log/' },
      { text: '常见问题', link: '/log/' },
      { text: 'Git', link: 'http://e100.3dnest.cn/zhanguan/#/login' },
    ],

    // 侧边导航
    sidebar: {
      '/three-air/': getThreeAirSidebar(),
      '/api/': getApiSidebar(),
      '/advanced/': getAdvancedSidebar()
    },
    
    // 页脚
    editLinkText: '©2022 众趣（北京）科技有限公司 版权所有 all right reserved，powered by vitepress',
  }
}

function getThreeAirSidebar(){
  return [
    {
      text: '小白',
      children: [
        { text: 'HTML', link: '/three-air/introduction' },
        { text: 'CSS', link: '/three-air/course' },
        { text: 'JavaScript', link: '/three-air/examples' },
        { text: 'Canvas', link: '/three-air/examples' },
      ]
    },
  ]
}

function getApiSidebar() {
  return [
    {
      text: '基础',
      children: [
        { text: 'Ajax', link: '/api/core' },
        { text: 'HTTP', link: '/api/action' },
        { text: 'ES6', link: '/api/boot' },
        { text: 'Vue', activeMatch: '^/api/ext/', children: [
          { text: '安装', link: '/api/ext/' },
          { text: '标签', link: '/api/ext/tag' },
          { text: '导览', link: '/api/ext/navigator' },
          { text: '点位', link: '/api/ext/point' },
        ]},
        { text: 'React', activeMatch: '^/api/ext/', children: [
          { text: '安装', link: '/api/ext/' },
          { text: '标签', link: '/api/ext/tag' },
          { text: '导览', link: '/api/ext/navigator' },
          { text: '点位', link: '/api/ext/point' },
        ]},
      ]
    },
  ]
}

function getAdvancedSidebar() {
  return [
    {
      text: '',
      children: [
        { text: 'TypeScript', link: '/advanced/typescript' },
        { text: 'Vue 3', link: '/advanced/vue3' },
        { text: '模块化', link: '/advanced/module' },
      ]
    }
  ]
}

module.exports = baseConfig