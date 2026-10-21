# 免费部署到 Vercel（HTTPS + 公网域名）

## 1. 代码推到 GitHub

在项目根目录 `E:\work\eshop\erobot`：

在 [github.com/new](https://github.com/new) 创建 **Private** 仓库（例如 `erobot`），**不要**勾选 README。

然后在项目目录 **按顺序** 执行（缺一不可；先 commit 再 push）：

```powershell
cd E:\work\eshop\erobot
git init -b main
git add -A
git status
# 确认列表里没有 .env.local
git commit -m "Initial commit: RoboCore B2B Next.js site"
git remote add origin https://github.com/zcaofei/erobot.git
git push -u origin main
```

若已执行过 `git remote add` 但 push 报 `src refspec main does not match any`，说明还缺 **commit**，补跑 `git add -A` 和 `git commit` 后再 push。

一键脚本（仓库 `zcaofei/erobot`）：

```powershell
powershell -ExecutionPolicy Bypass -File E:\work\eshop\erobot\scripts\first-push-zcaofei.ps1
```

或用 GitHub CLI（已登录时）：

```powershell
gh repo create erobot --private --source=. --remote=origin --push
```

## 2. 导入 Vercel

1. 打开 [vercel.com](https://vercel.com) → **Sign Up / Log in with GitHub**
2. **Add New… → Project** → 选择刚推送的 `erobot` 仓库
3. **Framework Preset** 应自动识别为 **Next.js**，Root Directory 留空（仓库根即项目根）
4. **Environment Variables**（与本地 `.env.local` 相同，不要提交到 Git）：

| Name | Value |
|------|--------|
| `RESEND_API_KEY` | `re_...` |
| `ADMIN_EMAIL` | `zhangcaofei@gmail.com` |
| `INQUIRY_FROM_EMAIL` | `RoboCore Supply <onboarding@resend.dev>` |
| `NEXT_PUBLIC_SITE_URL` | 部署完成后填 Vercel 给的 URL，如 `https://erobot-xxx.vercel.app` |

5. 点击 **Deploy**，约 1–3 分钟完成。

## 3. 部署后

- 访问 `https://你的项目.vercel.app`
- **Settings → Domains** 可绑定自有域名（可选）
- 每次 `git push` 到 `main`，Vercel 会自动重新部署

## 4. 询盘邮件

生产环境与本地相同：表单 → `/api/inquiry` → Resend → `ADMIN_EMAIL`。

未验证 Resend 域名时，发件人仍为 `onboarding@resend.dev`，收件人须为 Resend 账号邮箱。

## 5. 安全

- **切勿**把 `.env.local` 或 API Key 提交到 GitHub
- 若 Key 曾泄露，在 Resend 后台轮换密钥，并更新 Vercel 环境变量
