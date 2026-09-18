# Pi Code Agent 学习资源

## Knowledge

- [Pi Coding Agent README](https://github.com/earendil-works/pi-mono/tree/main/packages/coding-agent)
  Pi 的官方入口，覆盖默认工具、交互模式、会话、上下文文件与设计哲学。用于建立整体心智模型。
- [Pi Skills 文档](https://github.com/earendil-works/pi-mono/blob/main/packages/coding-agent/docs/skills.md)
  解释 skill 的发现、渐进披露、格式与跨 harness 复用。用于迁移现有 Claude Code skills。
- [Pi Extensions 文档](https://github.com/earendil-works/pi-mono/blob/main/packages/coding-agent/docs/extensions.md)
  Extension API、事件生命周期、自定义工具和 UI 的官方参考。用于构建学习助理能力。
- [Pi Packages 文档](https://github.com/earendil-works/pi-mono/blob/main/packages/coding-agent/docs/packages.md)
  安装、固定版本、作用域、过滤与安全边界。用于评估和管理第三方能力。
- [Pi Extension Examples](https://github.com/earendil-works/pi-mono/tree/main/packages/coding-agent/examples/extensions)
  官方可运行样例。用于从最小实现学习，而非凭空设计 extension。
- [Pi Sessions 文档](https://github.com/earendil-works/pi-mono/blob/main/packages/coding-agent/docs/sessions.md)
  会话命名、恢复、树内分支、fork、clone 与导出的官方说明。用于掌握日常探索工作流。
- [Pi Compaction 文档](https://github.com/earendil-works/pi-mono/blob/main/packages/coding-agent/docs/compaction.md)
  自动压缩与分支摘要的触发条件和信息损失边界。用于区分“完整历史”和“当前模型上下文”。
- [Agent Skills Specification](https://agentskills.io/specification)
  Pi 与其他 agent harness 共享的 skill 标准。用于理解 skills 的可移植边界。
- [Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview)
  Anthropic 官方产品概览。用于做产品能力与工作流层面的对照，不作性能排名。
- [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works)
  Claude Code 官方 agent loop 说明。用于区分共有的 agent loop 与不同的产品取舍。
- [OpenCode Agents](https://opencode.ai/docs/agents)
  OpenCode 官方 agent 配置文档。用于对照其 primary/subagent、权限和工具配置方式。
- [Pi Web Access](https://github.com/nicobailon/pi-web-access)
  当前已安装的第三方 Pi package，提供网页、PDF、GitHub、YouTube 与本地视频内容提取。用于未来学习助理的内容获取阶段；使用前继续审查配置与数据边界。

## Wisdom (Communities)

- [Pi Discord](https://discord.com/invite/3cU7Bz4UPx)
  官方社区。用于验证 package 维护状态、讨论 extension 设计取舍和获取真实使用反馈。
- [Pi package gallery](https://pi.dev/packages)
  发现社区 package 的入口。用于建立候选列表；不是信任背书，安装前仍需源码审查与版本固定。

## Gaps

- 个人学习助理中“认知边界”的可操作数据模型与评估方法尚未选定。
- 浏览器登录态课程、视频转录与本地隐私之间的技术边界仍需原型验证。
