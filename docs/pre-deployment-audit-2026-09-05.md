# 上线前审计报告（2026-09-05）

## 结论

当前不具备部署条件。本轮没有部署、没有启用 GitHub Pages、没有创建部署流程，也没有 push。

部署阻塞项有两张图片：Erwin Schrödinger 与 Albert Einstein。现有记录没有为当前美国托管场景建立足够明确的公有领域或许可依据。其余 38 张图片在本仓库保存的证据和网站当前使用方式下具有合理、可追溯的依据；该结论不是对所有司法辖区和所有用途的绝对保证。

## Git 与 GitHub

- 审计基准：`d2f179fd1cabbc70cd7f1e0cee640c8e7ed5a39c`，`feat: add bilingual content and expand historical figures`。
- 审计开始时本地 `main`、`origin/main` 和 GitHub commits API 的 `main` tip 均为上述提交，本地领先/落后为 `0/0`。
- 远端：`https://github.com/yhang6801-max/history-website.git`。GitHub API 显示仓库公开、默认分支 `main`、非 fork、未归档、未禁用、`has_pages=false`。
- `git ls-remote` 在本轮后续复核时发生连接重置；因此远端实时 tip 使用 GitHub commits API 交叉确认，没有仅凭本地 remote-tracking ref 下结论。
- 仓库没有跟踪 `.github/`、Actions workflow、CNAME、Pages、Netlify、Vercel、Firebase 或 Wrangler 部署配置，不存在本轮意外触发部署的文件。
- 可达历史共 15 个提交。当前树和全部可达提交均未发现私钥头、AWS/GitHub/OpenAI/Slack 形态令牌或带账号密码的 URL。
- 没有跟踪 `node_modules`、`dist`、缓存、日志、临时下载、环境文件或密钥文件。`.gitignore` 覆盖当前实际产生的 `node_modules/`、`dist/`、日志、`*.local` 和编辑器文件。
- 421 个基准跟踪文件中没有仅大小写不同的路径。92 个源码/测试/脚本文件的实际相对导入没有大小写不匹配；生成器字符串中的动态目标不作为静态导入误报。
- Markdown 的 105 个仓库相对链接均能解析。未发现 `C:/`、`D:/` 或 `file://` 链接；`127.0.0.1:5174` 只出现在测试默认值和历史开发验收记录中。
- 生产包中的 `http://localhost` 是 React Router 在没有 `window.location` 时使用的内部 URL 回退常量；生产浏览器请求记录没有访问它，也没有 localhost、本机盘符或开发服务器依赖。
- 48 个跟踪 PNG/WebP 共 4,916,643 字节，无 SHA-256 重复。最大文件为已退休且不进入构建的 `archimedes.webp`（334,626 字节），没有异常巨型 Git blob。
- 当前 40 张生产人物图共 3,743,760 字节，最大为 `dmitri-mendeleev.webp`（264,160 字节）。
- 不进入当前生产构建的旧/模板资产包括 Alexander、Archimedes、Euclid、Zu Chongzhi 人物图，以及 `hero.png`、React/Vite 模板 SVG 和占位图。它们保留了历史审计/生成器上下文；本轮没有未经确认删除。
- `package.json`、`package-lock.json` 和脚本可由 `npm ci` 重现。锁文件的下载地址使用 npmmirror；安装成功，但该镜像不实现 npm advisory API，安全审计仅对本次命令临时指定官方 registry，未修改配置。
- README 已补充当前项目、Node 24、实际脚本、生产预览与“不部署”说明，并移除已退休 Alexander 的裁切示例。

## 40 张图片逐图权利复核

完整机器可读记录位于 [image-audit.json](four-person-replacement/image-audit.json)，逐图说明位于 [image-audit.md](four-person-replacement/image-audit.md)，保存的 Commons/机构证据位于 [image-rights/evidence](image-rights/evidence)、[image-review/evidence](image-review/evidence) 和 [four-person-replacement/evidence](four-person-replacement/evidence)。

分类：

- A：依据完整，当前详情页已满足署名、来源、许可/状态和修改说明要求。
- B：依据完整，但页面仍需补充条件。
- C：依据不足，阻塞部署。

所有本地图都已记录 SHA-256；证据文件也有对应哈希。独立校验确认 40/40 人物 ID、顺序、本地路径、本地哈希、证据路径、证据哈希、作者、许可/公有领域依据、修改和页面实现字段一致。所有当前图片均为静态 900×1200 WebP。网站所作的一般处理是自动方向校正、3:4 裁切、缩放和 WebP 重编码；每张图的个别裁切/修复说明见机器记录的 `siteImplementation` 与 `changes` 字段。

| # | 人物与本地文件 | 原作/摄影/复制层及年代 | 当前依据 | 分类 |
|---:|---|---|---|:---:|
| 1 | James Clerk Maxwell — `james-clerk-maxwell.webp` | 摄影者和拍摄年未详；B. Crowell 扫描；至少 1920 年刊载 | PD-old / Public Domain Mark；保留未知作者和地域限制 | A |
| 2 | Michael Faraday — `michael-faraday.webp` | John Watkins 摄影；年份未注明；Wellcome 数字文件 | CC BY 4.0，馆藏号 V0026346 | A |
| 3 | Max Planck — `max-planck.webp` | 摄影者未详；档案标 1901 且注明存疑 | Bundesarchiv Bild 183-R0116-504，CC BY-SA 3.0 DE | A |
| 4 | Niels Bohr — `niels-bohr.webp` | AB Lagrelius & Westphal，约 1922 | PD-Sweden-photo 与 PD-US-expired | A |
| 5 | Werner Heisenberg — `werner-heisenberg.webp` | 摄影者未详，1933 | Bundesarchiv Bild 183-R57262，CC BY-SA 3.0 DE | A |
| 6 | Erwin Schrödinger — `erwin-schrodinger.webp` | Nobel Foundation 署名；摄影者未详，1933 | 仅保存 PD-Sweden-photo；没有充分记录美国期限、URAA 状态或另行许可 | C |
| 7 | Antoine Lavoisier — `antoine-lavoisier.webp` | Jacques-Louis David 油画，1788；Met 数字复制 | PD-Art / PD-old-100-expired | A |
| 8 | Dmitri Mendeleev — `dmitri-mendeleev.webp` | 摄影者和年代未详；Wellcome M0002600 | CC BY 4.0 | A |
| 9 | John Dalton — `john-dalton.webp` | Thomas Phillips 油画，1835；NPG 数字复制 | PD-Art / PD-old-auto-expired | A |
| 10 | Robert Boyle — `robert-boyle.webp` | Johann Kerseboom 油画，1689；Science History Institute 数字复制 | 画作公有领域；数字复制 CC BY 3.0，Courtesy 署名已显示 | A |
| 11 | Dorothy Hodgkin — `dorothy-hodgkin.webp` | Willy Pragher 摄影，1983 | Landesarchiv W 134 Nr. 120813b，CC BY 3.0 DE | A |
| 12 | Stephen Hawking — `stephen-hawking.webp` | Tanya Hart 摄影，2008-09-20 | CC BY-SA 2.0；FlickreviewR 记录通过；裁切版同许可 | A |
| 13 | Mahatma Gandhi — `mahatma-gandhi.webp` | 摄影者未详；Bundesarchiv，1932 | Bild 102-13884，CC BY-SA 3.0 DE | A |
| 14 | Pierre de Fermat — `pierre-de-fermat.webp` | Rolland Lefebvre 画作，1640–1675；Klaus Barner 摄影，2005 | 画作公有领域；照片 CC BY-SA 3.0 | A |
| 15 | Winston Churchill — `winston-churchill.webp` | 美国政府档案照片；摄影者未详，1944-09 | FDR Library/NARA 197182，PD-USGov | A |
| 16 | Leonhard Euler — `leonhard-euler.webp` | Jakob Emanuel Handmann 油画，1753 | PD-Art / PD-old-100-expired | A |
| 17 | Carl Friedrich Gauss — `carl-friedrich-gauss.webp` | Christian Albrecht Jensen 油画，1840 | PD-Art / PD-old-auto-expired | A |
| 18 | Srinivasa Ramanujan — `srinivasa-ramanujan.webp` | 摄影者未详，1920 年以前；OPC 扫描和 Jacek Halicki 修正 | 公开 PermissionTicket 记录、PD-UK-unknown、PD-US-expired | A |
| 19 | Nicolaus Copernicus — `nicolaus-copernicus.webp` | 作者未详，约 1580；Toruń 馆藏数字复制 | PD-Art / PD-art-100 | A |
| 20 | Galileo Galilei — `galileo-galilei.webp` | Justus Sustermans 油画，1635；Uffizi 数字复制 | PD-old-100 | A |
| 21 | Napoleon Bonaparte — `napoleon-bonaparte.webp` | Jacques-Louis David 画作，1797–1798 | PD-Art / PD-old-auto-expired；PDM 作为状态标识 | A |
| 22 | Julius Caesar — `julius-caesar.webp` | Nicolas Coustou 雕塑，1696–1722；Marie-Lan Nguyen/Jastrow 摄影，2006 | 雕塑公有领域；照片 PD-self | A |
| 23 | Joseph Stalin — `joseph-stalin.webp` | 美国政府照片；摄影者未详，1943-11-28 | FDR Library 来源链，PD-USGov | A |
| 24 | Albert Einstein — `albert-einstein.webp` | Ferdinand Schmutzer 摄影，1921；Adam Cuerden 修复；原习作 2001 年才发现 | 仅有 PD-Austria/PDM；记录明确不能证明 1931 年前发表，未建立美国期限或许可 | C |
| 25 | Confucius — `confucius.webp` | 明代作者未详画作；Gary Todd 摄影，2014-03-09 | 摄影 CC0 1.0；古代原作与现代照片分开记录 | A |
| 26 | Qin Shi Huang — `qin-shi-huang.webp` | 作者未详，约 1850；见 2010 年书籍复制 | PD-Art-100-1923；书籍年份不当作创作年份 | A |
| 27 | Emperor Taizong — `emperor-taizong-of-tang.webp` | 作者和具体年代未详；父文件说明明代 | NPM Open Data 来源链，PD-Art-old-100；保留年代字段冲突 | A |
| 28 | Emperor Wu of Han — `emperor-wu-of-han.webp` | 《三才图会》明代版画；王圻编；刻工和具体日期未详 | PD-old-70-1923；不把现代文件日期当作版画年代 | A |
| 29 | Hongwu Emperor — `hongwu-emperor.webp` | 明代宫廷画家未详 | 故宫来源链，PD-Art-100 | A |
| 30 | Yongle Emperor — `yongle-emperor.webp` | 明代作者未详 | National Palace Museum 来源链，PD-Art / PD-old-70 | A |
| 31 | Sun Yat-sen — `sun-yat-sen.webp` | 上海波尔照相馆，1922-11-15；具体摄影者未详 | PD-China 与美国期限已届满记录 | A |
| 32 | Li Bai — `li-bai.webp` | 梁楷，13 世纪；东京国立博物馆复制 | PD-Art / PD-old-100-expired | A |
| 33 | Du Fu — `du-fu.webp` | 作者和具体创作年代未详；清宫旧藏不等于清代创作 | PD-Art / PD-old-100；未知项已明确标注 | A |
| 34 | Lu Xun — `lu-xun.webp` | 沙飞摄影，1936-10-08 | PD-China / PD-1996 | A |
| 35 | Qian Xuesen — `qian-xuesen.webp` | Los Angeles Times/UCLA，1950-11-16；摄影者未详 | UCLA 合作来源链，CC BY 4.0 | A |
| 36 | Chen Ning Yang — `yang-chen-ning.webp` | U.S. Department of Energy；摄影者和日期未详 | 美国政府作品，PD-USGov-DOE | A |
| 37 | George Washington — `george-washington.webp` | Gilbert Stuart，1803 | Clark Art Institute，PD-Art / PD-old-100-expired | A |
| 38 | Abraham Lincoln — `abraham-lincoln.webp` | Alexander Gardner 摄影，1863-11-08；Scewing 数字调整 | Library of Congress，PD-US | A |
| 39 | Isaac Newton — `isaac-newton.webp` | Godfrey Kneller 油画，1689 | Cambridge 来源链，PD-Art / PD-old-auto-expired | A |
| 40 | Marie Curie — `marie-curie.webp` | Henri Manuel 摄影，约 1920；FMSky/Bammesk 修复 | 可追溯父文件，PD-old-auto-1923 | A |

汇总：A=38，B=0，C=2。10 张 CC BY/CC BY-SA、1 张 CC0、29 张以具体公有领域/政府作品状态为依据；Schrödinger 和 Einstein 包含在 29 张状态记录中，但因适用范围不足被降为 C。

详情页对 40/40 图片显示原题、作者/机构、原始文件页、具体许可或状态链接、个别署名和中英文修改说明。CC BY/CC BY-SA 图片还显示裁切与转换仍受所链接许可约束的适配提示。首页不逐卡显示署名，但所有卡片均链接到包含完整署名的详情页；键盘访问和详情页署名锚点已验证。

本轮人工查看了四张 10 人联系表：40 张图均可识别、无空白/损坏，3:4 裁切没有明显错人或异常放大。Fermat 的画框和 Churchill 的群像属于源构图。既有记录中的 `visualReview:false` 是早前自动化快照，本报告记录的是之后完成的人工复核。

Commons API 的源图实时对照请求在 443 建连阶段超时。有限外链检查中 40 个图片原页只有 Robert Boyle 返回 200，其余 39 个本轮超时；30/40 许可链接返回 200。未用搜索摘要代替。由于仓库保存了具体文件页原始文本、证据哈希、来源支持说明和本地文件哈希，38 张 A 类仍有可追溯证据副本；但实时源图二进制对照属于本轮受阻项。

## 编码与双语

- 扫描 373 个跟踪文本文件：全部为无 BOM 的有效 UTF-8；没有 Unicode 替换字符、非法控制字符或常见 UTF-8/GBK 错解。
- 运行时代码没有疑似误显示的 `\\uXXXX`、`\\n` 或 HTML 实体源码。
- 40 人的中英文姓名、简介、正文、时间线、图片说明与修改说明结构完整；语言测试确认数字/日期结构一致、无意外 fallback 或空白。`Schrödinger` 等重音字符正常。
- 首页、设置、版权、关于、404/错误状态均有中英文文本。
- `html lang`、页面标题与 description 随语言切换；首次访问默认英文，语言记忆、跨页、新标签页和存储受限提示均验证。
- 生产预览中的 40 人中英文详情、图片、署名、桌面与 320px 窄屏均已由有界浏览器批次覆盖。

## 构建、测试、浏览器与依赖

- `npm ci`：成功，按锁文件安装 36 个包。
- `npm run lint`：通过。
- `npm run build`：通过，Vite 8.2.2，178 modules。
- 生产输出：JS 614.25 kB，gzip 220.36 kB；CSS 8.72 kB，gzip 2.24 kB。
- `npm run test:language`：10/10 通过。
- `npm run test:prepare-person-image`：31 通过、0 失败；符号链接和 POSIX 不可读权限 2 项按 Windows 条件跳过。
- `test/image-rights-data.mjs` 与 `scripts/check-expansion.mjs`：通过，40 个唯一 ID、顺序、四项替换、36 人未变、双语字段和旧地址不映射均通过。
- 双语生产浏览器主套件：90 个路由/语言/屏宽组合、40 人链接、刷新、前进/后退、阅读位置、语言记忆、404 和控制台错误检查全部通过。
- 图片权利浏览器测试原先对所有懒加载图片无期限调用 `decode()`，在首次首页等待，属于测试脚本问题。修复后使用可见滚动、`complete`/`naturalWidth`、6 秒单图、15 秒页面、60 秒批次上限，并在 `node_modules/.cache/image-rights-browser/` 每项保存中间结果。
- 修复后的 4 人样本（Hawking、Gandhi、Churchill、Stalin）覆盖 16 个详情组合和 4 个首页组合，零错误；其余 36 人分成 4 个 9 人批次，各 36 个详情组合和 4 个首页组合，全部零错误、零超时。合计覆盖全部 160 个详情组合。
- 冷启动修复前：首页立即加载 40 图，44 个资源约 3.98 MB。人物卡原生懒加载后：初始加载 12 图，16 个资源约 1.34 MB；滚动后的其余图片均在有界测试中加载成功。
- 修复后的生产浏览器没有 console warning/error、未处理 page error、请求失败或资源 4xx/5xx；1440px 与 320px 无横向溢出。
- npm 官方 advisory API（仅命令级临时 registry）报告生产依赖和完整依赖均为 0 个已知漏洞：6 个生产依赖、98 个开发依赖、103 个总依赖口径。未升级依赖。

主包 500 kB 警告没有通过提高阈值隐藏。`src/data` 的 48 个文件原始体积约 455.7 kB，40 人双语正文与 React/Router 共同进入单一入口，是警告的主要构成。gzip 220.36 kB 对当前静态站点可接受，不是部署阻塞；但首屏必须解析完整双语数据，后续可考虑按详情路由拆分数据。该优化涉及数据结构和路由加载重构，本轮未扩大范围。

## 外部链接

- 当前页面共 231 个引用、206 个唯一 HTTPS URL；没有格式无效或非 HTTPS URL。
- 单次并发受限 HEAD 检查原始结果：113×200、1×202、1×307、23×403、2×429、1×500、55 个连接超时、7 个操作超时、1 个证书链无法验证、2 个证书域名不匹配。
- 按用途：人物资料 105/146 返回 2xx/3xx；图片原页 1/40 返回 200；许可链接 30/40 返回 200；作者页 1/5 返回 200。
- Royal Mint 的 Isaac Newton 页面 HEAD 返回 500，但随后一次普通 GET 返回 200，属于方法兼容问题。
- 钱学森页面的两条 `www.qianxslib.sjtu.edu.cn` 链接证书域名不匹配；去掉 `www` 后 DNS 不存在，未草率替换。应在上线前寻找同机构可验证的新 URL 或替代可靠来源。
- 香港立法会一条 PDF 返回证书链无法验证；23 个 403 和 2 个 429 多为反自动化/限流，不能据此判定永久失效；超时也未被报告为通过。
- 40 人详情没有引用不存在的本地文件。9 个旧人物地址均进入 404，没有错误显示为后来的替换人物。

## 严重程度

### 阻塞部署

1. Schrödinger 图片只有瑞典照片公有领域记录，缺少当前美国托管场景下足够明确的依据。
2. Einstein 图片的记录明确不能证明 1931 年前发表；PD-Austria/PDM 不能自动解决美国期限。需要可靠补充证据、明确许可，或在得到确认后更换图片。

### 应在上线前修复

1. 替换或移除钱学森详情中的两条证书域名不匹配资料链接。
2. 决定是否删除不进入生产构建的四张退休人物图和 Vite 模板资源；它们不影响部署，但增加仓库噪音和约 1.2 MB 历史资产。
3. 如面向更广泛协作者，考虑将 lockfile 的下载主机恢复到 npm 官方 registry，避免依赖不支持 advisory API 的镜像；应作为独立、审阅后的锁文件变更。

### 可以接受的已知限制

1. 主 JS 614.25 kB / gzip 220.36 kB；当前可接受，但后续可按人物详情拆包。
2. 首页冷启动仍约 1.34 MB、12 张图；相比 3.98 MB 已明显降低，实际移动网络仍应在部署后的真实 CDN 上复测。
3. 39/40 图片原页和若干资料页本轮网络超时，实时可达性未验证；仓库证据副本仍可追溯。
4. Windows 环境无法执行两个 POSIX/符号链接专用测试。
5. 历史验收文档中的 `127.0.0.1` 是开发记录，不是生产链接。

### 已验证通过

Git/GitHub 基准、无部署配置、敏感信息扫描、UTF-8 与双语结构、40 人顺序和旧路由、生产构建、lint、数据/图片处理测试、160 个有界详情组合、90 个双语路由组合、图片加载与详情署名、桌面/窄屏、控制台/404、依赖 advisory、文件大小和重复检查均完成并通过，受阻项和条件性结果如上明确列出。

## 部署前需要确认

1. 为 Schrödinger 和 Einstein 图片补足权利依据，或授权更换为证据明确的图片；更换后重新核对来源、作者、许可、修改、双语署名和 4 个浏览器组合。
2. 决定钱学森两条资料链接的替代来源。
3. 决定是否清理退休/模板资产及是否调整 lockfile registry。
4. 审阅本轮本地审计修复提交。确认所有阻塞项关闭后，再单独决定是否部署；本报告本身不授权部署或 push。
