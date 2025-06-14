import { defineConfig } from 'vitepress';

export const zhNavConfig = defineConfig([
  { text: '首页', link: '/' },
  { text: '关于', link: '/about' },
  {
    text: '文档',
    items: [
      { text: 'FinalSuspect', link: '/FinalSuspect/Introduction', activeMatch: '/FinalSuspect/' },
      { text: '极致服务器', link: '/Server/GettingStarted', activeMatch: '/Server/' }
    ]
  }
]);