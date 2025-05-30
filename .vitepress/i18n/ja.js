import { defineConfig } from 'vitepress';
import { zhNavConfig } from './navbar/zh.js';
import { zhSidebarConfig } from './sidebar/zh.js';
import { generateSidebar } from 'vitepress-sidebar';
export const zhLocaleConfig = defineConfig({
  label: '简体中文',
  lang: 'zh-CN',
  title: 'XtremeWave模组文档',
  titleTemplate: ':title - 极致文档',
  description: 'XtremeWave模组文档,提供了XtremeWave旗下开源模组的详细文档,包括安装、教程、配置等。',
  themeConfig: {
    siteTitle: '极致文档',
    nav: zhNavConfig,
    sidebar: generateSidebar(zhSidebarConfig),
    outline: {
      label: '页面导航',
    },
    editLink: {
      // 目前pattern在`config.mjs`中定义后,若不在语言配置中定义会导致pattern无法生效。
      // 这似乎与VitePress所说的`浅层合并`(也许是我理解错误?)不符。
      pattern: 'https://github.com/QingFengTechnology/XtremeWaveDocs/blob/v2/:path',
      text: '在Github上查看此页',
    },
    docFooter: {
      prev: false,
      next: false,
    },
    notFound: {
      title: '页面未找到',
      quote: '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '前往首页',
    },
    darkModeSwitchLabel: '颜色模式',
    lightModeSwitchTitle: '点击以切换至浅色模式',
    darkModeSwitchTitle: '点击以切换至深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '语言',
  },
});
