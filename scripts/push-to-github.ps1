# Run from project root: powershell -ExecutionPolicy Bypass -File scripts/push-to-github.ps1
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

if (Test-Path .env.local) {
  Write-Host "OK: .env.local exists locally (gitignored, will NOT be pushed)." -ForegroundColor Green
}

if (-not (Test-Path .git)) {
  git init -b main
}

git add -A
$staged = git diff --cached --name-only
if ($staged -match "\.env\.local") {
  Write-Error "Refusing to commit: .env.local is staged. Check .gitignore."
}

$status = git status --porcelain
if (-not $status) {
  Write-Host "Nothing to commit."
} else {
  git commit -m "RoboCore B2B site: Next.js, i18n, Resend inquiry"
}

Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Create a PRIVATE repo on https://github.com/new (name e.g. erobot)"
Write-Host "2. git remote add origin https://github.com/YOUR_USER/erobot.git"
Write-Host "3. git push -u origin main"
Write-Host "4. Import repo on https://vercel.com/new — add env vars from .env.example"
Write-Host "See DEPLOY.md for details."
