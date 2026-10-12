#requires -Version 5.1
$ErrorActionPreference = 'Stop'
$Host.UI.RawUI.WindowTitle = 'Scroll Animated Website - Hala setup'
Write-Host ''
Write-Host '====================================================' -ForegroundColor Cyan
Write-Host '  Scroll Animated Website - Local Setup' -ForegroundColor Cyan
Write-Host '====================================================' -ForegroundColor Cyan
Write-Host ''
Set-Location -LiteralPath $PSScriptRoot
if (-not (Get-Command node -ErrorAction SilentlyContinue) -or -not (Get-Command npm -ErrorAction SilentlyContinue)) {
  Write-Host 'Node.js / npm is not installed.' -ForegroundColor Red
  Write-Host 'Install the LTS version from https://nodejs.org/ , then close and reopen PowerShell.' -ForegroundColor Yellow
  Read-Host 'Press Enter to exit'; exit 1
}
Write-Host ('Node: ' + (node --version)) -ForegroundColor Green
Write-Host ('npm:  ' + (npm --version)) -ForegroundColor Green
if (-not (Test-Path (Join-Path $PSScriptRoot 'package.json'))) { throw 'package.json not found. Extract the entire ZIP before running this file.' }
if (-not (Test-Path (Join-Path $PSScriptRoot 'node_modules'))) {
  Write-Host 'Installing project dependencies (requires internet; first run can take several minutes)...' -ForegroundColor Yellow
  npm install
  if ($LASTEXITCODE -ne 0) { throw 'npm install failed. Check your internet connection and try again.' }
}
Write-Host ''
Write-Host 'Starting website. Keep this PowerShell window open.' -ForegroundColor Green
Write-Host 'Open http://localhost:3000 in your browser.' -ForegroundColor Cyan
Write-Host 'Stop the website by pressing Ctrl+C in this window.' -ForegroundColor Gray
Write-Host ''
npm run dev
