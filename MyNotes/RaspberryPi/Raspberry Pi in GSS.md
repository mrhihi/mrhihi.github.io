# Raspberry Pi in GSS
- 一堆 command
	sudo raspi-config
		連 wifi
	sudo apt-get install lynx
		裝文字 browser
	lynx http://xxxx.xxxx.xxxx
	elinks http://xxxx.xxxx.xxxx
	sudo ifconfig wlan0 down
		關 wifi
	sudo ifconfig wlan0 up
		開 wifi
	wget --no-check-certificate https://github.com/downloads/etc
		wget 不檢查憑證
	sudo apt remove <pkgname>
		快速移除安裝的 pkg
	sudo apt purge <pkgname>
		連同安裝的 config 資料檔一併移除
	sudo apt clean
		安裝完清安裝過程產生的東西
	sudo apt autoremove
		移除已經沒有被參考的 pkg
	sudo apt -f install
		修覆毀損的 pkg
	scp FileName mrhihi@remote:/home/mrhihi/
		複製檔案到遠端機器

- 參考
	- [安裝 dotnet](https://blog.behroozbc.ir/install-net-on-a-raspberry-pi)
	- [安裝 lynx](https://vankoo.wordpress.com/2015/05/19/text-mode-web-browser-on-raspberry-pi-linux-terminal/)
	- 安裝 elinks： https://blog.desdelinux.net/zh-TW/elinks-mejor-navegador-web-la-terminal-linux/
	- wifi 開關： https://raspberrytips.com/disable-wifi-raspberry-pi/
	- wifi 連接： https://roboticsbackend.com/enable-ssh-on-raspberry-pi-raspbian/
	- 列安裝 pkg 清單： http://www.futurity.co.uk/raspberry-pi-help/how-to-list-raspbian-installed-packages/
	- Uninstall pkg： https://www.linuxfordevices.com/tutorials/ubuntu/uninstalling-packages-with-apt
	