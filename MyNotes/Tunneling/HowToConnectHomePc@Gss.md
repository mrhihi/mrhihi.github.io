# 在公司如何連回家

Step 1.
在公司的電腦透過下面指令，將公司電腦 3741 的 Port 轉接到家裡電腦 3389 的 Port 
```shell
ssh -o "ServerAliveInterval 30" -o "ServerAliveCountMax 3" -NfL 3741:localhost:3389 mrhihi@mrhihi.ddns.net -p 443
```
Step 2.
在公司的電腦就可以透過遠端桌面軟體，連 localhost:3741 透過 SSH 通道，轉接到家裡的電腦。


# 在公司如何透過 Proxy 走家裡的網路
```shell
ssh -o "ServerAliveInterval 30" -o "ServerAliveCountMax 3" -NfL 33333:localhost:33333 mrhihi@mrhihi.ddns.net -p 443
```


# 在公司如何透過 Mobile Hihi 走外網
情境：同時連公司網路和 Mobile Hihi，只連 mrhihi.ddns.net 的時候才會走 Mobile Hihi (macos 指令)
先查出 mrhihi.ddns.net 的 IP 然後下這個指令加入 Route
```shell
sudo sudo route add -host <ddns ip> 192.168.1.1
```
其他相關指令
```shell
# 顯示 ipv4 路由
netstat -rn -f inet
# 刪除路由
sudo route delete <ddns ip>
```
參考資料： https://blog.wawajohn.net/12206.html