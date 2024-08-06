## 啟用 Apache

```bash
sudo apachectl start
sudo apachectl restart
```

## 啟用 ~user 要做的設定

1. 編輯 /etc/apache2/httpd.conf

   ```html
   # 打開以下兩個模組
   LoadModule userdir_module libexec/apache2/mod_userdir.so
   Include /private/etc/apache2/extra/httpd-userdir.conf

   # 加入權限給各 Users 下的 Sites
   <DirectoryMatch "/Users/.*/Sites">
     Require all granted
   </DirectoryMatch>
   ```
2. 編輯 /etc/apache2/extra/httpd-userdir.conf

   ```
   # 打開下面這行
   Include /private/etc/apache2/users/*.conf
   ```
3. 在 /etc/apache2/users 下加入 userName.conf

   ```html
   # 範例 mrhihi.conf
   # 注意： Options 裡的 FollowSymLinks 是讓這個目錄可以用 Symbolic link 的方式建虛擬目錄
   <Directory "/Users/[User]/Sites">
        Options Indexes MultiViews FollowSymLinks
        AllowOverride None
        Order allow,deny
        Allow from all
   </Directory>
   ```
