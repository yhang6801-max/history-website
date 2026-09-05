param([string]$Title,[string]$Key)
$ErrorActionPreference='Stop'
$uri='https://commons.wikimedia.org/w/api.php?action=parse&format=json&prop=wikitext&page='+[uri]::EscapeDataString($Title)
$r=Invoke-RestMethod -Uri $uri -TimeoutSec 25
New-Item -ItemType Directory -Force docs/image-review/evidence | Out-Null
$r.parse.wikitext.'*' | Set-Content -Encoding utf8 ('docs/image-review/evidence/'+$Key+'.txt')
$r.parse.wikitext.'*' -split '\n' | Where-Object { $_ -match '(?i)author|artist|source|permission|credit|PD-|CC-|cc-by|attribution|copyright|license|licensing|date\s*=|original|description|title\s*=' } | Select-Object -First 22
