---
title: 导出日志
order: 3
---

# 导出日志 {#outputlog}

## 自动导出 {#auto-output}

你可以在Final Suspect功能中选择输出日志,随后FinalSuspect将打开输出日志所在的文件夹。

有关自动导出日志的功能介绍,请查阅[此篇文档](../Features/DumpLog)。

:::tip

FinalSuspect的输出目录位于下方路径:

```[文件资源管理器]
%APPDATA%\..\LocalLow\Innersloth\Among Us\FinalSuspect\Logs\Final Suspect-logs
```

您可以按下`Win` + `R`,并粘贴这串路径来手动打开。

:::

## 手动查看 {#manual-view}

如果你无法打开设置页面,你也可以选择手动查看日志。

启动Steam,在库页面中选择<mark>Among Us</mark>,点击右侧的<mark>设置图标</mark>,选择<mark>管理</mark>,随后选择<mark>浏览本地文件</mark>。\
Steam将打开Among Us根目录。

打开`BepInEx`文件夹,其中的`LogOutput.log`便是日志文件。\
该文件将随着你重新启动FinalSuspect自动清除。