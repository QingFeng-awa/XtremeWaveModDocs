---
title: 更新
order: 2
---

# 更新 {#update}

## 自动更新 {#auto-update}

FinalSuspect已于游戏内<mark>内置更新检查</mark>,每次启动将自动检查更新。\
在有更新时会要求您更新,否则您无法继续游玩。

:::tip

Release版本与PublicBeta(也可称作Canary)版本的更新检查逻辑不同。\
Release不会要求您更新到Canary版本,而Canary则不会进行更新检查。

:::

## 手动更新 {#manual-update}

:::warning

如非必要,我们建议您自动更新。

:::

若遇上更新检查失败 / 下载出现问题也可以尝试手动更新。

访问Release页面,下载最新版本的dll文件。

<Links
:items="[
 {
   name: '在GitHub上获取发行版',
   link: 'https://github.com/XtremeWave/FinalSuspect/release',
   icon: 'codicon:github-inverted',
   alt: 'Github'
 }
]"
/>

打开AmongUs根目录,再继续打开`BepInEx\plugins`文件夹。\
将下载的dll文件替换掉原有的dll文件。

至此,更新结束。