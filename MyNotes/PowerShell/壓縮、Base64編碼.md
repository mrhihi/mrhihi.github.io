```powershell
@rem 壓縮、編碼
powershell compress-Archive -Path 'TryTry' -DestinationPath 'TryTry.zip'
powershell [System.IO.File]::WriteAllLines('TryTry.txt', [Convert]::ToBase64String([IO.File]::ReadAllBytes('TryTry.zip')))
del TryTry.zip

@rem 反編碼、解壓縮
powershell [IO.File]::WriteAllBytes('TryTry.zip', [Convert]::FromBase64String([char[]][IO.File]::ReadAllBytes('TryTry.txt')))
powershell Expand-Archive -Path 'TryTry.zip' -DestinationPath '.\test'

```

