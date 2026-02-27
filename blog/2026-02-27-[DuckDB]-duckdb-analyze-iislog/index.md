---
slug: duckdb-analyze-iislog
title: 在 macOS/Linux 上用 SQL 分析日誌：從 Log Parser 到 DuckDB
authors: mrhihi
tags: [macOS, linux, duckdb, sql, log-analysis]
---

# 【實戰筆記】在 macOS/Linux 上用 SQL 分析日誌：從 Log Parser 到 DuckDB 

對於從 Windows 轉到 macOS 或 Linux 的工程師來說，最懷念的工具莫過於 **Microsoft Log Parser**。它能讓我們用熟悉的 SQL 語法去查詢混亂的日誌檔。但在非 Windows 環境下，我們有更強大、更現代的選擇。

---

:::tip
這是一篇用 Gemini 自動產生的實戰筆記，內容涵蓋了從 Log Parser 的替代方案概覽，到為什麼選擇 DuckDB，以及實際匯入 IIS Log 的步驟和常用 SQL 指令。

AI 生成的內容可能不夠精確或有誤，請讀者自行斟酌使用，並歡迎提供反饋以改進未來的內容品質。
:::

---

## 1. 替代方案概覽

在 macOS/Linux 上，針對不同需求有幾種主流替代方案：

* **輕量快速**：`awk` / `sed` / `grep` (Unix 三劍客)。
* **Web 專精**：**GoAccess** (具備精美的終端機互動介面與 HTML 報表)。
* **系統層級**：**osquery** (將作業系統資訊視為資料庫)。
* **大數據量**：**ELK Stack** (Elasticsearch, Logstash, Kibana)。
* **個人首選（最強推薦）**：**DuckDB**。

---

## 2. 為什麼選擇 DuckDB？

**DuckDB** 被稱為「資料庫界的瑞士刀」，對分析日誌檔有以下絕對優勢：
1.  **無需伺服器**：單一執行檔即可運作，資料存於單一 `.db` 檔。
2.  **極速效能**：採用欄位式存儲 (Columnar Storage)，處理 GB 等級日誌速度極快。
3.  **聰明解析**：能直接讀取 CSV/Log，甚至自動偵測欄位型態。
4.  **SQL 支援**：完整的 SQL 語法，支援複雜的聚合運算。

---

## 3. 實戰：匯入 IIS Log 到 DuckDB

IIS Log (W3C 格式) 的 `#Fields` 行開頭有個 `#` 號，常導致解析器錯位。我們可以使用 `columns` 參數來精準定義。

### 步驟一：準備匯入腳本 `import_iis.sql`
針對 IIS 8.0 標準格式（19 個欄位），請建立以下檔案：

```sql
-- 直接執行這條，它會自動讀取所有 log 並產出表
CREATE TABLE iis_logs AS
SELECT * FROM read_csv('*.log',
    delim=' ',
    header=False,
    skip=4,
    nullstr='-',   -- 修正：移除底線
    columns={
        'date': 'DATE',
        'time': 'VARCHAR',
        's-sitename': 'VARCHAR',
        'cs-method': 'VARCHAR',
        'cs-uri-stem': 'VARCHAR',
        'cs-uri-query': 'VARCHAR',
        's-port': 'INTEGER',
        'cs-username': 'VARCHAR',
        'c-ip': 'VARCHAR',
        'cs(User-Agent)': 'VARCHAR',
        'cs(Cookie)': 'VARCHAR',
        'cs(Referer)': 'VARCHAR',
        'cs-host': 'VARCHAR',
        'sc-status': 'INTEGER',
        'sc-substatus': 'INTEGER',
        'sc-win32-status': 'INTEGER',
        'sc-bytes': 'BIGINT',
        'cs-bytes': 'BIGINT',
        'time-taken': 'INTEGER'
    }
);

-- 確認匯入筆數
SELECT count(*) FROM iis_logs;

```

### 步驟二：執行轉換
在終端機執行指令，將所有 `.log` 檔合併轉換：

```bash
duckdb iis_analysis.db < import_iis.sql
```

---

## 4. 常用分析 SQL 指令

> **注意**：若欄位包含連字號或括號（如 `sc-status`），查詢時必須使用**雙引號 `"`** 括起來。

* **找出最慢的 10 個頁面 (效能優化)**
    ```sql
    SELECT "cs-uri-stem", AVG("time-taken") as avg_ms 
    FROM iis_logs 
    GROUP BY 1 
    ORDER BY avg_ms DESC 
    LIMIT 10;
    ```

* **統計各類錯誤碼的次數 (監控健康度)**
    ```sql
    SELECT "sc-status", count(*) 
    FROM iis_logs 
    WHERE "sc-status" >= 400 
    GROUP BY 1 
    ORDER BY 2 DESC;
    ```

* **找出流量消耗最大的來源 IP**
    ```sql
    SELECT "c-ip", SUM("sc-bytes") / 1024 / 1024 as MB_Sent 
    FROM iis_logs 
    GROUP BY 1 
    ORDER BY MB_Sent DESC 
    LIMIT 10;
    ```

---

## 5. 推薦工具組合 (Toolchain)

1.  **Zed Editor / VS Code**：編寫 SQL 腳本。
2.  **DBeaver**：強大的資料庫 UI，連線 `iis_analysis.db` 即可圖形化操作。
3.  **Rill Developer**：能一秒將 DuckDB 轉為互動式 Dashboard 的神器。