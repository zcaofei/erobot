# First push to https://github.com/zcaofei/erobot
$ErrorActionPreference = "Stop"
Set-Location "E:\work\eshop\erobot"

if (-not (Test-Path .git)) {
  git init -b main
}

git add -A
if (git diff --cached --name-only | Select-String -Pattern "\.env\.local") {
  throw ".env.local must not be committed. Check .gitignore."
}

if (git status --porcelain) {
  git -c user.name="zcaofei" -c user.email="zhangcaofei@gmail.com" commit -m "Initial commit: RoboCore B2B Next.js site"
} else {
  Write-Host "Already committed."
}

$remote = git remote get-url origin 2>$null
if (-not $remote) {
  git remote add origin https://github.com/zcaofei/erobot.git
} elseif ($remote -notmatch "zcaofei/erobot") {
  Write-Host "Updating origin to zcaofei/erobot ..."
  git remote set-url origin https://github.com/zcaofei/erobot.git
}

git push -u origin main
Write-Host "Done. Open https://github.com/zcaofei/erobot then import on vercel.com/new" -ForegroundColor Green
