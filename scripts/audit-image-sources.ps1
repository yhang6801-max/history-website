param([int]$Start=0,[int]$Count=10)
$ErrorActionPreference='Stop'
$inventory=Get-Content -Raw node_modules/.cache/rights-audit/inventory.json | ConvertFrom-Json
$batch=$inventory | Select-Object -Skip $Start -First $Count | Where-Object {$_.attribution}
foreach($person in $batch) {
 $title=[uri]::UnescapeDataString(([uri]$person.attribution.sourceUrl).AbsolutePath.Substring(6))
 $api='https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo%7Crevisions&iiprop=url%7Cextmetadata%7Csha1&rvprop=content&rvslots=main&titles='+[uri]::EscapeDataString($title)
 try {$response=Invoke-RestMethod -Uri $api -TimeoutSec 25} catch {Write-Output ('FAILED '+$person.id+' '+$_.Exception.Message);break}
 $page=$response.query.pages.PSObject.Properties.Value | Select-Object -First 1
 $record=[ordered]@{id=$person.id;retrievedAt=(Get-Date -Format o);sourceUrl=$person.attribution.sourceUrl;api=$api;response=$response}
 $record | ConvertTo-Json -Depth 45 | Set-Content -Encoding utf8 ('docs/image-rights/evidence/'+$person.id+'.json')
 $wiki=$page.revisions[0].slots.main.'*'
 $wiki | Set-Content -Encoding utf8 ('docs/image-rights/evidence/'+$person.id+'.wikitext')
 $m=$page.imageinfo[0].extmetadata
 $summary=[ordered]@{id=$person.id;date=($m.DateTimeOriginal.value -replace '<[^>]+>','');author=($m.Artist.value -replace '<[^>]+>','');license=$m.LicenseShortName.value;licenseUrl=$m.LicenseUrl.value;credit=($m.Credit.value -replace '<[^>]+>','');attribution=($m.Attribution.value -replace '<[^>]+>','');tags=(($wiki -split '\n' | Where-Object {$_ -match '(?i)\{\{(PD-|CC-|self\||FoP-|Permission|Copyright|License|Flickrreview|Licensed)'} ) -join ' ')}
 $summary | ConvertTo-Json -Compress -Depth 4
}
