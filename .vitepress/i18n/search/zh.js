import { defineConfig } from 'vitepress';

export const zhSearchConfig = defineConfig({
  translations: {
    button: {
      buttonText: '搜索文档',
      buttonAriaLabel: '搜索文档'
    },
    modal: {
      noResultsText: '无法找到相关结果',
      resetButtonTitle: '清除查询条件',
      footer: {
        selectText: '选择',
        navigateText: '切换',
        closeText: '退出'
      }
    }
  }
})