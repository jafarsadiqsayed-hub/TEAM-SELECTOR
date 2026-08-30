# ==============================================================================
# College Arts Fest - Native Localhost HTTP Web Server
# Zero external dependencies required - Runs on Windows PowerShell
# ==============================================================================

param(
    [int]$Port = 8000,
    [string]$RootPath = $PSScriptRoot
)

$ErrorActionPreference = "Continue"

# Resolve root directory
if (-not $RootPath) {
    $RootPath = Get-Location
}

# Find local IPv4 address for multi-device network access
$localIps = (Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue | Where-Object { $_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*" }).IPAddress

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "     COLLEGE ARTS FEST - LOCALHOST WEB SERVER RUNNING            " -ForegroundColor Yellow
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  > Local Access (This PC):    http://localhost:$Port" -ForegroundColor Green

if ($localIps) {
    foreach ($ip in $localIps) {
        Write-Host "  > Network Access (Phones/Laptops): http://$($ip):$Port" -ForegroundColor Magenta
    }
} else {
    Write-Host "  > Local IP Access:           http://127.0.0.1:$Port" -ForegroundColor Green
}

Write-Host ""
Write-Host "  Serving files from: $RootPath" -ForegroundColor DarkGray
Write-Host "  Press Ctrl + C in this window to stop the server." -ForegroundColor DarkGray
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host ""

# Create .NET HTTP Listener
$listener = New-Object System.Net.HttpListener

# Try listening on all interfaces or localhost fallback
try {
    $listener.Prefixes.Add("http://localhost:$Port/")
    $listener.Prefixes.Add("http://127.0.0.1:$Port/")
    $listener.Start()
} catch {
    Write-Host "Port $Port busy, trying port 8080..." -ForegroundColor Yellow
    $Port = 8080
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$Port/")
    $listener.Prefixes.Add("http://127.0.0.1:$Port/")
    $listener.Start()
    Write-Host "Now listening on http://localhost:$Port/" -ForegroundColor Green
}

# Open browser automatically
Start-Process "http://localhost:$Port/"

# MIME Types dictionary
$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".mp3"  = "audio/mpeg"
    ".wav"  = "audio/wav"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".ttf"  = "font/ttf"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = [System.Uri]::UnescapeDataString($request.Url.LocalPath)
        if ($urlPath -eq "/" -or $urlPath -eq "") {
            $urlPath = "/index.html"
        }

        # Safe file path resolution
        $relPath = $urlPath.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
        $filePath = [System.IO.Path]::Combine($RootPath, $relPath)

        if ([System.IO.File]::Exists($filePath)) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $contentType = $mimeTypes[$ext]
            }

            # Enable CORS for local network and multi-device development
            $response.Headers.Add("Access-Control-Allow-Origin", "*")
            $response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
            $response.Headers.Add("Access-Control-Allow-Headers", "*")
            $response.ContentType = $contentType

            try {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentLength64 = $bytes.Length
                $response.StatusCode = 200
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
                Write-Host "[$([DateTime]::Now.ToString('HH:mm:ss'))] 200 OK: $urlPath" -ForegroundColor DarkGreen
            } catch {
                $response.StatusCode = 500
            }
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 - File Not Found: $urlPath")
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
            Write-Host "[$([DateTime]::Now.ToString('HH:mm:ss'))] 404 NOT FOUND: $urlPath" -ForegroundColor Red
        }

        $response.OutputStream.Close()
    }
} finally {
    $listener.Stop()
    $listener.Close()
    Write-Host "Server stopped." -ForegroundColor Yellow
}
