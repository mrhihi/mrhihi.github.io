- 相關 Command
``` DOS

@rem 停用 hypervisor
bcdedit /set hypervisorlaunchtype off

@rem 啟用 hypervisor
bcdedit /set hypervisorlaunchtype auto

@rem 啟用 Hyper-V
dism /Online /Disable-Feature /FeatureName:Microsoft-Hyper-V-All

@rem 停用 Hyper-V
dism /Online /Enable-Feature /FeatureName:Microsoft-Hyper-V-All

```

- VMWare 8 之後有支援 hypervisor
只要啟用 hypervisor 就並且把 vm 處理器裡的 Virtualize Intel VT-x/EPT or AMD-V/R VI 選項拿掉就好。
![](images/VMWare%20和%20Hyper-V%20共存.png)
