# 如何刪除 EFI 分區



```
Step 1.
開始 -> 執行 -> diskpart

Step 2.
list disk: 列出所有磁碟
sel disk n: 選取磁碟(n: 數字)
list partition: 列出所有分區
sel partition n: 選取分區(n: 數字)

Step 3.
delete partition override: 刪除分區
```



> 參考資料：
>
> https://www.easeus.com/partition-master/delete-efi-system-partition.html