## 參考資料
- 這篇有提到 exe 轉成 jar 的方法： http://blog.lfsseo.com/index.php/archives/Jar2Exe_Unpacker.html
	- 有用專門把 Jar2Exe 轉成 Jar 的 exe2jar： [https://github.com/whereisr0da/exe2jar](https://github.com/whereisr0da/exe2jar)
		- 這篇比較麻煩，要自己把 java 編譯成 Jar
	- 另一個是 jwscan ： https://github.com/struppigel/JWScan
		- 這個比較友善，已經編譯好放 github 上了。
		- 使用方式：
			- 先用 java -jar jwscan.jar XXX.exe 算出 offsets
			- 再用 java -jar jwscan.jar -d OFFSET XXX.exe 匯出結果
			- 結果副檔名是 .out ，要自己再轉換。

- 反組譯
	- 這篇有提供幾個反組譯的工具： https://stackoverflow.com/a/647140
		- 先下載： https://github.com/QuiltMC/quiltflower/releases/download/1.8.1/quiltflower-1.8.1.jar
		- 再執行：
		 ```
		   java -jar quiltflower-1.8.1.jar -dgs=1 XXX.jar XXX.class 輸出目錄
		```


