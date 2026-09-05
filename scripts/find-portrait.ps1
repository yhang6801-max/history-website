param([string]$Query,[string]$Key,[int]$Limit=4)
$ErrorActionPreference='Stop'
$uri='https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit='+$Limit+'&gsrsearch='+[uri]::EscapeDataString($Query)+'&prop=imageinfo&iiprop=url%7Cextmetadata'
$r=Invoke-RestMethod -Uri $uri -TimeoutSec 25
$r | ConvertTo-Json -Depth 18 | Set-Content -Encoding utf8 ('node_modules/.cache/portrait-review/'+$Key+'.json')
function Plain($v){ [System.Net.WebUtility]::HtmlDecode(($v -replace '<[^>]+>','' -replace '\s+',' ')).Trim() }
$r.query.pages.PSObject.Properties.Value | ForEach-Object {if($_.imageinfo){$i=$_.imageinfo[0];[pscustomobject]@{title=$_.title;author=Plain $i.extmetadata.Artist.value;description=Plain $i.extmetadata.ImageDescription.value;credit=Plain $i.extmetadata.Attribution.value;license=$i.extmetadata.LicenseShortName.value;licenseUrl=$i.extmetadata.LicenseUrl.value}}} | ConvertTo-Json -Depth 3
