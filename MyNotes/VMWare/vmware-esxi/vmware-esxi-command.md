

vim-cmd命令的功能是用於控制虛擬機狀態。vim-cmd是esxi命令行，可在命令行下控制虛擬機的註冊，啟動等。vim-cmd是構建在host進程之上的命令空間，允許最終用戶調用幾乎所有的vSphere API。vim-cmd提供了一些ESXi子命令管理不同的虛擬基礎設施，而且和vimsh相比，更容易使用。

**語法格式**：vim-cmd [參數]

**常用參數：**

| vmsvc   | 與虛擬機相關的狀態 |
| ------- | ------------------ |
| hostsvc | 與host相關的狀態   |

**參考實例**

查看當前已有虛擬機列表：

```
[root@linuxcool ~]# vim-cmd vmsvc/getallvms
```

查看當前已有虛擬機狀態：

```
[root@linuxcool ~]# vim-cmd vmsvc/power.getstate vmid
```

打開指定的虛擬機：

```
[root@linuxcool ~]# vim-cmd vmsvc/power.on vmid
```

進入到維護模式：

```
[root@linuxcool ~]# vim-cmd hostsvc/maintenance_mode_enter
```

退出維護模式：

```
[root@linuxcool ~]# vim-cmd hostsvc/maintenance_mode_exit
```


其它：
```
vim-cmd vmsvc/getallvms  列出guest os資料  
vim-cmd vmsvc/power.on 將第X台guest os開機  
esxcli vm process list   列出執行中guest os 資訊  
esxcli vm process list | grep "World ID" | awk '{print $3}'  列出執行中guest os world id 資訊  
esxcli vm process kill --type=[soft,hard,force] --world-id=[WorldID]   關機  
vmd-cmd vmsvc/power.off 將第x台guest關機  
vim-cmd vmsvc/get.summary    - 取得guest OS系統設定  
vim-cmd vmsvc/snapshot.revert 還原至某個snap  
vim-cmd vmsvc/snapshot.create <描述> 製作snap  
vmkfstools -i /vmfs/volumes/datastore1/source/xp.vmdk  -d thin /vmfs/volumes/datastore1/destination/TARGET.vmdk  轉換vmdk格式  
vmkfstools -X /vmfs/volumes/Storage1/source/source.vmdk 20G   修正硬碟大小  #不可有snapshot  
vim-cmd solo/registervm  <完整vmdk path> <名稱>   註冊vm  
vmkfstools -j [來源檔案]   thin -> thick  
ovftool --datastore= ./ vi://:@   佈署  
ovftool vi://root:passwd@ip// ./xp.voa   VM轉成template  
  
ovftool "--datastore=datastore1" "--network=VM-Network" "/VM.ova" "vi://username:password@vCenterIP/DataCenter_Name/host/Cluster_Name/hostIP"  
  
vim-cmd vmsvc/get.summary vmId | grep ipAddress  
/sbin/ restart   服務重啟  
vmkfstools -c 40960M xp.vmdk -d thin   新增硬碟  
vim-cmd vmsvc/unregister    - unregister a VM from a host  
vim-cmd vmsvc/tools.install vmid 指定特定vmid之VM進行Vmware tool的安裝  
vim-cmd hostsvc/net/info   提供Hypervisor網路相關資訊  
esxcfg-nics -l   列出ESX Host網卡資料，以及設定。  
esxcfg-vswitch -l   列出虛擬Swith資訊，以及其設定。  
  
  
  
vmx相關參數  
displayName   顯示的名稱  
ide0:0.present = "TRUE"   硬碟配置  
ide0:0.fileName = "xp.vmdk"  
virtualHW.version = "8"   vm版本  
memsize = "2048"   記憶體  
numvcpus = "4"   總core數  
cpuid.coresPerSocket = "2"   每個socket的core數
```

參考資料： https://www.linuxcool.com/vim-cmd

參考資料： https://kb.vmware.com/s/article/1003738

參考資料： https://kb.vmware.com/s/article/1003490

參考資料： https://xdeath.tw/read.php?6

