參考：  https://playwright.dev/dotnet/docs/intro#record-scripts
	        https://playwright.dev/dotnet/docs/api/class-playwright
先用 dotnet new console 建新空的 console 專案

```shell
dotnet new console -n PlaywrightDemo
```

加入 nuget

```shell
cd PlaywrightDemo
dotnet add package Microsoft.Playwright 
```

最後 dotnet build 讓他在 bin 裡面產生 .playwright

```shell
dotnet build
```

把 .playwritht copy 進執行階段會抓的目錄

```shell
# 執行的時候，會抓這個目錄
~/Library/Caches/dotnet-script/Users/[User]/{這邊是相對於 .csx 放置的位置的路徑}/.playwright
# 所以把上個步驟的 .playwright copy 進去
```

以上步驟，如果有更新 Microsoft.Playwright 也要重跑一次，把 bin 裡的 .playwright 更新到上述位置

前面 dotnet build 之後，還會產生 playwright.ps1 ，因為 browser 版本會跟 .playwright 有關系，所以要用 bin 裡面的 playwright.ps1
在 bin 裡面執行

```shell
pwsh playwright.ps1 install 
```

browser 安裝的位置在： /Users/[User]/Library/Caches/ms-playwright

windows 還要執行安裝：
        1. 先裝 powershell 7.2
        2. 參考： https://playwright.dev/dotnet/docs/cli
然後就可以開始用了

要錄操作，可以用：

```shell
npx playwright codegen https://pve.gss.com.tw/
```

Windows 下 Driver 會放在 Temp 目錄，重開機會不見，先備一份在 OneDrive 用 mklink 建連結

```powershell
mklink /j "C:\Users\Administrator\AppData\Local\Temp\2\dotnet-script\D\Dropbox\Code Snippet\HiScript\donteScript\.playwright" D:\OneDrive\.playwright
```
