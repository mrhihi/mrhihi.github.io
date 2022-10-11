# 升級到 .NET Standard 要做的事

- 轉換 .csprj 檔案

  - 參考： https://stackoverflow.com/a/69541185

    - Install upgrade-assistant:

      `dotnet tool install -g upgrade-assistant`

    - Go to your solution folder

      Run the assistant:

      `upgrade-assistant upgrade your-project-name.csproj`

    - Follow the steps in the assistant, it's really straight-forward.

- msbuild 改成 dotnet build

  - 直接用原來的 msbuild 會出現 NETSDK1004
    - 參考： https://learn.microsoft.com/zh-tw/dotnet/core/tools/sdk-errors/netsdk1004
  - dotnet build
    - 參考： https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-build
    - dotnet build -c release { xxx.sln }
      - 注意：產生出來的 bin 會多一層 netstandard2.0 目錄

- 