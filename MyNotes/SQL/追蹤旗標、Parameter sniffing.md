參考資料： 

https://docs.microsoft.com/en-us/sql/t-sql/database-console-commands/dbcc-traceon-trace-flags-transact-sql?view=sql-server-2017

https://docs.microsoft.com/zh-tw/sql/t-sql/database-console-commands/dbcc-traceon-trace-flags-transact-sql?view=sql-server-ver15

https://support.microsoft.com/en-us/topic/kb974006-sql-server-query-optimizer-hotfix-trace-flag-4199-servicing-model-cd3ebf5c-465c-6dd8-7178-d41fdddccc28

https://www.sqlservercentral.com/articles/sql-server-trace-flags-complete-list-3

https://docs.microsoft.com/zh-tw/sql/t-sql/database-console-commands/dbcc-tracestatus-transact-sql?view=sql-server-ver15

https://logicalread.com/3-sql-ssql-server-trace-flags-troubleshooting-pd01/#.YGQjwmQzb0o



DBCC TRACESTATUS(旗標)

DBCC TRACEON(旗標, -1)  -- -1 表示 global

DBCC TRACEOFF(旗標, -1)  -- -1 表示 global





Parameter sniffing

https://www.mssqltips.com/sqlservertip/3257/different-approaches-to-correct-sql-server-parameter-sniffing/

https://www.mssqltips.com/sqlservertip/3320/enabling-sql-server-trace-flag-for-a-poor-performing-query-using-querytraceon/

https://www.brentozar.com/archive/2013/06/the-elephant-and-the-mouse-or-parameter-sniffing-in-sql-server/

https://logicalread.com/2-options-sql-server-query-optimization-pd01/#.YGQj5WQzb0o

https://www.sqlshack.com/sql-server-2016-parameter-sniffing/

https://dba.stackexchange.com/questions/181944/disable-parameter-sniffing-for-better-performance-good-idea

https://blog.sqlauthority.com/2020/02/12/sql-server-disable-parameter-sniffing-with-disable_parameter_sniffing-query-hint/





相容性層級比較：

https://docs.microsoft.com/zh-tw/sql/t-sql/statements/alter-database-transact-sql-compatibility-level?view=sql-server-ver15

https://sqlperformance.com/2019/01/sql-performance/compatibility-levels-and-cardinality-estimation-primer

