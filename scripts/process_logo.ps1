Add-Type -AssemblyName System.Drawing

$inputPath = "public/images/tricode-logo.png"
$outputPath = "public/images/tricode-logo-transparent.png"
$faviconPath = "public/favicon.png"

$bmp = [System.Drawing.Bitmap]::new($inputPath)
$width = $bmp.Width
$height = $bmp.Height

$outBmp = [System.Drawing.Bitmap]::new($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Background removal:
# Background is dark near-black / dark blue.
# Foreground neon elements (Cyan, Magenta/Purple, Chrome White) have high saturation or high brightness.
for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $p = $bmp.GetPixel($x, $y)
        $maxC = [Math]::Max($p.R, [Math]::Max($p.G, $p.B))
        $minC = [Math]::Min($p.R, [Math]::Min($p.G, $p.B))
        $diff = $maxC - $minC

        # Black background detection:
        if ($maxC -lt 40) {
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } elseif ($maxC -lt 85) {
            # Check if it has color (neon glow) vs murky dark background
            if ($diff -gt 25) {
                # Colorful neon glow (cyan or purple)
                $alpha = [int](255 * ($maxC - 40) / (85 - 40))
                $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $p.R, $p.G, $p.B))
            } else {
                # Low saturation dark grey/black
                $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            }
        } else {
            $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $p.R, $p.G, $p.B))
        }
    }
}

$outBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

# Bounding box of TC emblem:
# Top starts around y = 110 (top of center magenta node is at 112)
# Bottom point of the electric blue 'T' is at y = 546
# Leftmost ring edge is around x = 85
# Rightmost ring edge is around x = 840
$cropX = 90
$cropY = 100
$cropW = 750
$cropH = 450

$emblemBmp = [System.Drawing.Bitmap]::new($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($emblemBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($outBmp, 0, 0, [System.Drawing.Rectangle]::new($cropX, $cropY, $cropW, $cropH), [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

# Create high-res 512x512 favicon
$favSize = 512
$favBmp = [System.Drawing.Bitmap]::new($favSize, $favSize, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gFav = [System.Drawing.Graphics]::FromImage($favBmp)
$gFav.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gFav.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gFav.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gFav.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$padding = 24
$targetW = $favSize - ($padding * 2)
$targetH = [int]($cropH * $targetW / $cropW)
$posY = [int](($favSize - $targetH) / 2)
$gFav.DrawImage($emblemBmp, $padding, $posY, $targetW, $targetH)
$gFav.Dispose()

$favBmp.Save($faviconPath, [System.Drawing.Imaging.ImageFormat]::Png)

# 64x64 favicon
$fav64 = [System.Drawing.Bitmap]::new(64, 64, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g64 = [System.Drawing.Graphics]::FromImage($fav64)
$g64.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g64.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g64.DrawImage($favBmp, 0, 0, 64, 64)
$g64.Dispose()
$fav64.Save("public/favicon-64x64.png", [System.Drawing.Imaging.ImageFormat]::Png)

# 32x32 favicon
$fav32 = [System.Drawing.Bitmap]::new(32, 32, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g32 = [System.Drawing.Graphics]::FromImage($fav32)
$g32.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g32.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g32.DrawImage($favBmp, 0, 0, 32, 32)
$g32.Dispose()
$fav32.Save("public/favicon-32x32.png", [System.Drawing.Imaging.ImageFormat]::Png)

Copy-Item $faviconPath -Destination "src/assets/favicon.png" -Force
Copy-Item "public/favicon-32x32.png" -Destination "src/assets/favicon-32x32.png" -Force
Copy-Item $outputPath -Destination "src/assets/tricode-logo-transparent.png" -Force

$fav32.Dispose()
$fav64.Dispose()
$favBmp.Dispose()
$emblemBmp.Dispose()
$outBmp.Dispose()
$bmp.Dispose()
Write-Host "Favicons cleanly regenerated!"
