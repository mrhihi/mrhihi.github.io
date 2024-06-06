參考： https://support.apple.com/zh-tw/guide/mac-help/mchl40376151/mac

查看目前排程
```
pmset -g sched
```

取消目前排程
```
sudo pmset repeat cancel
```

設定排程(一星期中的某幾天的特定時間執行)
```
sudo pmset repeat [type] [weekdays] [time]
> type - one of sleep, wake, poweron, shutdown, wakeorpoweron
> weekdays - a subset of MTWRFSU ("M" and "MTWRF" are valid strings)
> time - HH:mm:ss

ex.(每天的早上 3 點關機)
sudo pmset repeat shutdown MTWRFSU 3:00:00
```

