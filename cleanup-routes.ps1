# Cleanup conflicting dynamic routes
Write-Host "Removing conflicting dynamic route folders..." -ForegroundColor Yellow

$folders = @(
    "src\app\[[...slug]]",
    "src\app\[seo-route]",
    "src\app\[service]"
)

foreach ($folder in $folders) {
    if (Test-Path $folder) {
        Remove-Item -Path $folder -Recurse -Force
        Write-Host "✓ Deleted: $folder" -ForegroundColor Green
    } else {
        Write-Host "- Not found: $folder" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "Cleanup complete! You can now run npm run dev" -ForegroundColor Cyan
