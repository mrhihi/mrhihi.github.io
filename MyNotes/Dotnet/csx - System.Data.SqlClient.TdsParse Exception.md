csx 中，執行 sql 出現「The type initializer for 'System.Data.SqlClient.TdsParser' threw an exception.」

有可能是因為 using System.Runtime.CompilerServices; 造成的，在 csx 裡面把他拿掉再試試。