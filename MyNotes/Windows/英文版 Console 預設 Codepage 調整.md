參考： https://superuser.com/questions/269818/change-default-code-page-of-windows-console-to-utf-8

950: big5
65001: utf8

把這裡面的 OEMCP 值改成 950
Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Nls\CodePage
