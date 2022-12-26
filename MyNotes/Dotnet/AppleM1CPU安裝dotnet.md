# AppleM1CPU安裝dotnet

到 .NET 網站下載安裝程式
https://dotnet.microsoft.com/en-us/download/dotnet

安裝情況：
只有 .NET 6.0 有 arm64 版本，安裝完預設會裝在 /usr/local/share/dotnet 目錄下
安裝 .NET 5.0 以前的版本，只有 x64 ，安裝完預設會裝在 /usr/local/share/dotnet/x64 目錄下
同時有裝 .NET 6.0 arm64 跟 .NET 5.0 x64 時，

``` shell
# 執行指令 dotnet --list-sdks
dotnet --list-sdks
# 結果只會列出 .NET 6.0
```

``` shell
# 在 /usr/local/share/dotnet/x64 下執行 dotnet --list-sdks
/usr/local/share/dotnet/x64/dotnet --list-sdks
# 結果只會列出 .NET 5.0
```

mrhihi 自行調整，將 /usr/local/share/dotnet 下的檔案搬到 arm64 目錄中，再透過下面的 shell ，
可以切換 dotnet 執行的版本。
為什麼要這樣：
    安裝 ElectronNET.CLI 時( https://www.nuget.org/packages/ElectronNET.CLI )，如果不切成 x64 模式，執行 electronize 會出現需要 .NET 5 (arm64) 的訊息。

``` shell
#!/bin/zsh

if [ $# -eq 0 ]
  then
        echo "No arguments supplied"
  else
        if [[ "$1" = "arm64" || "$1" = "x64" ]]
            then
                sudo rm -f /usr/local/share/dotnet/LICENSE.txt
                sudo rm -f /usr/local/share/dotnet/ThirdPartyNotices.txt
                sudo rm -f /usr/local/share/dotnet/dotnet
                sudo rm -f /usr/local/share/dotnet/host
                sudo rm -f /usr/local/share/dotnet/packs
                sudo rm -f /usr/local/share/dotnet/sdk
                sudo rm -f /usr/local/share/dotnet/sdk-manifests
                sudo rm -f /usr/local/share/dotnet/shared
                sudo rm -f /usr/local/share/dotnet/templates
                sudo ln -s $1/LICENSE.txt LICENSE.txt
                sudo ln -s $1/ThirdPartyNotices.txt ThirdPartyNotices.txt
                sudo ln -s $1/dotnet dotnet
                sudo ln -s $1/host host
                sudo ln -s $1/packs packs
                sudo ln -s $1/sdk sdk
                sudo ln -s $1/sdk-manifests sdk-manifests
                sudo ln -s $1/shared shared
                sudo ln -s $1/templates templates
            else
                echo "Wrong argument"
        fi
        # 
fi
```

