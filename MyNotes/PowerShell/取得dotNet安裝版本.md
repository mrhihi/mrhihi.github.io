資料來源：

> https://stackoverflow.com/questions/1565434/how-do-i-find-the-net-version
>
> https://docs.microsoft.com/en-us/dotnet/framework/migration-guide/how-to-determine-which-versions-are-installed#net_b
>
> https://support.tibco.com/s/article/How-to-find-what-Microsoft-NET-version-is-installed



```powershell
Get-ChildItem 'HKLM:\SOFTWARE\Microsoft\NET Framework Setup\NDP' -Recurse | Get-ItemProperty -Name version -EA 0 | Where { $_.PSChildName -Match '^(?!S)\p{L}'} | Select PSChildName, version
```

