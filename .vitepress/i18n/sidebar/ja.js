import { defineConfig } from 'vitepress';
export const zhSidebarConfig = defineConfig([
    {
        scanStartPath: '/FinalSuspect',
        resolvePath: '/FinalSuspect/',
        basePath: '/',
        useTitleFromFrontmatter: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
        collapsed: false,
        frontmatterOrderDefaultValue: 999,
    },
]);
