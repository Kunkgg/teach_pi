# AGENTS.md

本仓库是 Pi 教学工作区。

1. 开始前先读状态：`MISSION.md`、`NOTES.md`、`RESOURCES.md`，以及 `learning-records/` 中编号最大的记录。
2. 工作区约定（文件角色、顺序编号、assets 复用、learning record 语义）以 `.pi/skills/teach/SKILL.md` 及同目录 `*-FORMAT.md` 为准；不要复制进本文件或单课。
3. 只改动本仓库：不修改 `~/.pi` 全局配置，不安装全局 package。
4. 修改后自检（复制执行，第二条应无输出）：
   ```bash
   git diff --check
   grep -RInoE '(href|src)="[^"]*assets/[^"]*"' lessons/ reference/ | grep -v '\.\./assets/'
   ```
