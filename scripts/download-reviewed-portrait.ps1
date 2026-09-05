param([string]$Title,[string]$Id,[int]$Width=960)
$ErrorActionPreference='Stop'
$uri='https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url%7Cextmetadata&iiurlwidth='+$Width+'&titles='+[uri]::EscapeDataString($Title)
$r=Invoke-RestMethod -Uri $uri -TimeoutSec 25
$info=($r.query.pages.PSObject.Properties.Value | Select-Object -First 1).imageinfo[0]
if (!$info.thumburl) { throw 'Commons returned no thumbnail URL' }
$r | ConvertTo-Json -Depth 30 | Set-Content -Encoding utf8 ('docs/image-review/evidence/'+$Id+'-download.json')
$part='node_modules/.cache/portrait-review/'+$Id+'.part.jpg'
$dest='node_modules/.cache/portrait-review/'+$Id+'.jpg'
$response=Invoke-WebRequest -Uri $info.thumburl -OutFile $part -PassThru -TimeoutSec 25
if ($response.StatusCode -ne 200 -or $response.Headers.'Content-Type' -notmatch '^image/') { throw 'Download is not a successful image response' }
node scripts/validate-portrait-download.mjs $part
if ($LASTEXITCODE -ne 0) { throw 'Downloaded image failed full decode; not connected' }
Move-Item -LiteralPath $part -Destination $dest -Force
Write-Output ('VALID DOWNLOAD '+$Id+' HTTP '+$response.StatusCode+' '+$response.Headers.'Content-Type')

