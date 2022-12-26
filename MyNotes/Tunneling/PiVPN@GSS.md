## 安裝 PiVPN

## 接通方式
### Step1. 建立 SSH 通道
  - 從 Pi 到 mrhihi.homeip.net
  ```shell
ssh -o "ServerAliveInterval 180" -o "ServerAliveCountMax 3" -NfR 22222:localhost:22 mrhihi@mrhihi.ddns.net -p 443
  ```

### Step2. 建立 VPN Port Forwarding
  - 從 Mac Mini 經過 hihihome-pc 到 Pi
```shell
ssh -o "ServerAliveInterval 30" -o "ServerAliveCountMax 3" -NfL 10443:localhost:443 mrhihi@192.168.31.196 -p 22222
```

### Step3. OpenVPN 撥接 localhost

## 待處理問題
  - SSH 通道斷線自動重連
    - 因為 GSS 每 12 ~ 24 小時會斷線一次，直到重新輸入帳號密碼網路才會恢復，目前設定排程在 6:55 會重連網路，所以從斷線到恢復網路中間還有一段時間是無網的情況， SSH 要在接通網路後自動重連才行。


## 其他紀錄
  - mrhihi@gss2.ovpn 在 onedriver 上
    - 可以在 Pi 上透過 pivpn 指令新增
    - 新增出來的 .ovpn 要用文字編輯器把 remote 改掉
