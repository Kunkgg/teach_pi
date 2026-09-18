# Mission: 将 Pi 打造成长期使用的个人代码与学习助理

## Why
从依赖 Claude Code 既有工作流，迁移到一个轻量、透明且可控的 Pi 工作环境；在真实的 Python 全栈开发中逐步定制它，并最终构建一个能识别个人认知边界、提取课程知识、沉淀学习成果的本地学习助理。

## Success looks like
- 能解释 Pi 的 agent loop，以及它与 Claude Code、OpenCode 在产品取舍上的关键差异
- 熟练使用 Pi 的日常开发功能：工具、上下文、会话树、模型切换、压缩与消息队列
- 能区分并选择 context file、prompt template、skill、extension 与 package
- 能审查第三方代码后，安装一套最小、可维护的个人配置
- 通过实际开发完成个人学习助理的第一个可用闭环：认知档案 → 内容提取 → 学习建议 → 学习记录

## Constraints
- 以中文讲解，采用 learning by doing，每课短小且有可验证成果
- 已有 Claude Code、Matt Pocock skills 与 Python 全栈开发经验，不从通用 AI 编程基础讲起
- 优先使用官方文档和一手资料；第三方 extension/package 必须先审查再安装
- 保持 Pi 的轻量与可控，不为复刻 Claude Code 而堆叠功能

## Out of scope
- 深入讲解 Pi 内部 TypeScript 实现细节
- 一开始就安装大量“必备”插件或完整复刻 Claude Code
- 在需求出现前开发复杂 TUI、通用多 agent 编排或大型 MCP 体系
