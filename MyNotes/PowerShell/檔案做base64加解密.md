資料來源： https://gist.github.com/t2psyto/f5453707d2658173715f49293d096fe5



```powershell
# encode from binary file to base64txt
powershell -C "& {$outpath = (Join-Path (pwd) 'out_base64.txt'); $inpath = (Join-Path (pwd) 'data.jpg'); [IO.File]::WriteAllText($outpath, ([convert]::ToBase64String(([IO.File]::ReadAllBytes($inpath)))))}"

# decode from base64txt to binary file
powershell -C "& {$outpath = (Join-Path (pwd) 'outdata2.jpg'); $inpath = (Join-Path (pwd) 'out_base64.txt'); [IO.File]::WriteAllBytes($outpath, ([convert]::FromBase64String(([IO.File]::ReadAllText($inpath)))))}"
```

