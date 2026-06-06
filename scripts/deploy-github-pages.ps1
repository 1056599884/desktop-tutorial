$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$deployDir = Join-Path (Split-Path -Parent $root) "software-resource-nav-gh-pages"
$currentBranch = git -C $root branch --show-current

if ((git -C $root status --short) -match '\S') {
  throw "Working tree must be clean before deploying. Commit or stash changes first."
}

if (Test-Path $deployDir) {
  git -C $root worktree remove $deployDir --force 2>$null
  Remove-Item -LiteralPath $deployDir -Recurse -Force -ErrorAction SilentlyContinue
}

git -C $root fetch origin gh-pages
git -C $root worktree add $deployDir gh-pages

Get-ChildItem -LiteralPath $deployDir -Force |
  Where-Object { $_.Name -ne ".git" } |
  Remove-Item -Recurse -Force

Copy-Item -Path (Join-Path $root "dist\*") -Destination $deployDir -Recurse -Force

git -C $deployDir add -A
if (git -C $deployDir diff --cached --quiet) {
  Write-Host "No changes to deploy."
} else {
  git -C $deployDir commit -m "deploy static site"
  git -C $deployDir push origin gh-pages
}

git -C $root worktree remove $deployDir --force
git -C $root checkout $currentBranch
