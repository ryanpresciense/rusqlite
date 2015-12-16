var searchIndex = {};
searchIndex['rusqlite'] = {"items":[[0,"","rusqlite","Rusqlite is an ergonomic wrapper for using SQLite from Rust. It attempts to expose\nan interface similar to [rust-postgres](https://github.com/sfackler/rust-postgres).",null,null],[3,"SqliteTransaction","","Represents a transaction on a database connection.",null,null],[3,"SqliteLoadExtensionGuard","","RAII guard temporarily enabling SQLite extensions to be loaded.",null,null],[3,"SqliteError","","Encompasses an error result from a call to the SQLite C API.",null,null],[12,"code","","The error code returned by a SQLite C API call. See [SQLite Result\nCodes](http://www.sqlite.org/rescode.html) for details.",0,null],[12,"message","","The error message provided by [sqlite3_errmsg](http://www.sqlite.org/c3ref/errcode.html),\nif possible, or a generic error message based on `code` otherwise.",0,null],[3,"SqliteConnection","","A connection to a SQLite database.",null,null],[3,"SqliteOpenFlags","","Flags for opening SQLite database connections.\nSee [sqlite3_open_v2](http://www.sqlite.org/c3ref/open.html) for details.",null,null],[3,"SqliteStatement","","A prepared statement.",null,null],[3,"MappedRows","","An iterator over the mapped resulting rows of a query.",null,null],[3,"AndThenRows","","An iterator over the mapped resulting rows of a query, with an Error type\nunifying with SqliteError.",null,null],[3,"SqliteRows","","An iterator over the resulting rows of a query.",null,null],[3,"SqliteRow","","A single result row of a query.",null,null],[4,"SqliteTransactionBehavior","","Options for transaction behavior. See [BEGIN\nTRANSACTION](http://www.sqlite.org/lang_transaction.html) for details.",null,null],[13,"SqliteTransactionDeferred","","",1,null],[13,"SqliteTransactionImmediate","","",1,null],[13,"SqliteTransactionExclusive","","",1,null],[0,"types","","Traits dealing with SQLite data types.",null,null],[11,"clone","libsqlite3_sys::bindgen","",2,{"inputs":[{"name":"struct_sqlite3_file"}],"output":{"name":"struct_sqlite3_file"}}],[11,"default","","",2,{"inputs":[{"name":"struct_sqlite3_file"}],"output":{"name":"struct_sqlite3_file"}}],[11,"clone","","",3,{"inputs":[{"name":"struct_sqlite3_io_methods"}],"output":{"name":"struct_sqlite3_io_methods"}}],[11,"default","","",3,{"inputs":[{"name":"struct_sqlite3_io_methods"}],"output":{"name":"struct_sqlite3_io_methods"}}],[11,"clone","","",4,{"inputs":[{"name":"struct_sqlite3_vfs"}],"output":{"name":"struct_sqlite3_vfs"}}],[11,"default","","",4,{"inputs":[{"name":"struct_sqlite3_vfs"}],"output":{"name":"struct_sqlite3_vfs"}}],[11,"clone","","",5,{"inputs":[{"name":"struct_sqlite3_mem_methods"}],"output":{"name":"struct_sqlite3_mem_methods"}}],[11,"default","","",5,{"inputs":[{"name":"struct_sqlite3_mem_methods"}],"output":{"name":"struct_sqlite3_mem_methods"}}],[11,"clone","","",6,{"inputs":[{"name":"struct_sqlite3_module"}],"output":{"name":"struct_sqlite3_module"}}],[11,"default","","",6,{"inputs":[{"name":"struct_sqlite3_module"}],"output":{"name":"struct_sqlite3_module"}}],[11,"clone","","",7,{"inputs":[{"name":"struct_sqlite3_index_info"}],"output":{"name":"struct_sqlite3_index_info"}}],[11,"default","","",7,{"inputs":[{"name":"struct_sqlite3_index_info"}],"output":{"name":"struct_sqlite3_index_info"}}],[11,"clone","","",8,{"inputs":[{"name":"struct_sqlite3_index_constraint"}],"output":{"name":"struct_sqlite3_index_constraint"}}],[11,"default","","",8,{"inputs":[{"name":"struct_sqlite3_index_constraint"}],"output":{"name":"struct_sqlite3_index_constraint"}}],[11,"clone","","",9,{"inputs":[{"name":"struct_sqlite3_index_orderby"}],"output":{"name":"struct_sqlite3_index_orderby"}}],[11,"default","","",9,{"inputs":[{"name":"struct_sqlite3_index_orderby"}],"output":{"name":"struct_sqlite3_index_orderby"}}],[11,"clone","","",10,{"inputs":[{"name":"struct_sqlite3_index_constraint_usage"}],"output":{"name":"struct_sqlite3_index_constraint_usage"}}],[11,"default","","",10,{"inputs":[{"name":"struct_sqlite3_index_constraint_usage"}],"output":{"name":"struct_sqlite3_index_constraint_usage"}}],[11,"clone","","",11,{"inputs":[{"name":"struct_sqlite3_vtab"}],"output":{"name":"struct_sqlite3_vtab"}}],[11,"default","","",11,{"inputs":[{"name":"struct_sqlite3_vtab"}],"output":{"name":"struct_sqlite3_vtab"}}],[11,"clone","","",12,{"inputs":[{"name":"struct_sqlite3_vtab_cursor"}],"output":{"name":"struct_sqlite3_vtab_cursor"}}],[11,"default","","",12,{"inputs":[{"name":"struct_sqlite3_vtab_cursor"}],"output":{"name":"struct_sqlite3_vtab_cursor"}}],[11,"clone","","",13,{"inputs":[{"name":"struct_sqlite3_mutex_methods"}],"output":{"name":"struct_sqlite3_mutex_methods"}}],[11,"default","","",13,{"inputs":[{"name":"struct_sqlite3_mutex_methods"}],"output":{"name":"struct_sqlite3_mutex_methods"}}],[11,"clone","","",14,{"inputs":[{"name":"struct_sqlite3_pcache_page"}],"output":{"name":"struct_sqlite3_pcache_page"}}],[11,"default","","",14,{"inputs":[{"name":"struct_sqlite3_pcache_page"}],"output":{"name":"struct_sqlite3_pcache_page"}}],[11,"clone","","",15,{"inputs":[{"name":"struct_sqlite3_pcache_methods2"}],"output":{"name":"struct_sqlite3_pcache_methods2"}}],[11,"default","","",15,{"inputs":[{"name":"struct_sqlite3_pcache_methods2"}],"output":{"name":"struct_sqlite3_pcache_methods2"}}],[11,"clone","","",16,{"inputs":[{"name":"struct_sqlite3_pcache_methods"}],"output":{"name":"struct_sqlite3_pcache_methods"}}],[11,"default","","",16,{"inputs":[{"name":"struct_sqlite3_pcache_methods"}],"output":{"name":"struct_sqlite3_pcache_methods"}}],[11,"clone","","",17,{"inputs":[{"name":"struct_sqlite3_rtree_geometry"}],"output":{"name":"struct_sqlite3_rtree_geometry"}}],[11,"default","","",17,{"inputs":[{"name":"struct_sqlite3_rtree_geometry"}],"output":{"name":"struct_sqlite3_rtree_geometry"}}],[11,"clone","","",18,{"inputs":[{"name":"struct_sqlite3_rtree_query_info"}],"output":{"name":"struct_sqlite3_rtree_query_info"}}],[11,"default","","",18,{"inputs":[{"name":"struct_sqlite3_rtree_query_info"}],"output":{"name":"struct_sqlite3_rtree_query_info"}}],[11,"clone","","",19,{"inputs":[{"name":"struct___va_list_tag"}],"output":{"name":"struct___va_list_tag"}}],[11,"default","","",19,{"inputs":[{"name":"struct___va_list_tag"}],"output":{"name":"struct___va_list_tag"}}],[6,"sqlite3_stmt","rusqlite::types","",null,null],[5,"sqlite3_column_type","","",null,null],[17,"SQLITE_INTEGER","","",null,null],[17,"SQLITE_FLOAT","","",null,null],[17,"SQLITE_TEXT","","",null,null],[17,"SQLITE_BLOB","","",null,null],[17,"SQLITE_NULL","","",null,null],[3,"Null","","Empty struct that can be used to fill in a query parameter as `NULL`.",null,null],[8,"ToSql","","A trait for types that can be converted into SQLite values.",null,null],[10,"bind_parameter","","",20,null],[8,"FromSql","","A trait for types that can be created from a SQLite value.",null,null],[10,"column_result","","",21,null],[11,"column_has_valid_sqlite_type","","FromSql types can implement this method and use sqlite3_column_type to check that\nthe type reported by SQLite matches a type suitable for Self. This method is used\nby `SqliteRow::get_checked` to confirm that the column contains a valid type before\nattempting to retrieve the value.",21,null],[11,"bind_parameter","","",22,null],[11,"bind_parameter","","",23,null],[11,"bind_parameter","collections::string","",24,null],[11,"bind_parameter","collections::vec","",25,null],[11,"bind_parameter","time","",26,null],[11,"bind_parameter","core::option","",27,null],[11,"clone","rusqlite::types","",28,{"inputs":[{"name":"null"}],"output":{"name":"null"}}],[11,"bind_parameter","","",28,null],[11,"column_result","","",22,null],[11,"column_has_valid_sqlite_type","","",22,null],[11,"column_result","","",23,null],[11,"column_has_valid_sqlite_type","","",23,null],[11,"column_result","collections::string","",24,null],[11,"column_has_valid_sqlite_type","","",24,null],[11,"column_result","collections::vec","",25,null],[11,"column_has_valid_sqlite_type","","",25,null],[11,"column_result","time","",26,null],[11,"column_has_valid_sqlite_type","","",26,null],[11,"column_result","core::option","",27,null],[11,"column_has_valid_sqlite_type","","",27,null],[11,"clone","rusqlite","",1,{"inputs":[{"name":"sqlitetransactionbehavior"}],"output":{"name":"sqlitetransactionbehavior"}}],[11,"new","","Begin a new transaction. Cannot be nested; see `savepoint` for nested transactions.",29,{"inputs":[{"name":"sqlitetransaction"},{"name":"sqliteconnection"},{"name":"sqlitetransactionbehavior"}],"output":{"name":"sqliteresult"}}],[11,"savepoint","","Starts a new [savepoint](http://www.sqlite.org/lang_savepoint.html), allowing nested\ntransactions.",29,{"inputs":[{"name":"sqlitetransaction"}],"output":{"name":"sqliteresult"}}],[11,"will_commit","","Returns whether or not the transaction is currently set to commit.",29,{"inputs":[{"name":"sqlitetransaction"}],"output":{"name":"bool"}}],[11,"will_rollback","","Returns whether or not the transaction is currently set to rollback.",29,{"inputs":[{"name":"sqlitetransaction"}],"output":{"name":"bool"}}],[11,"set_commit","","Set the transaction to commit at its completion.",29,{"inputs":[{"name":"sqlitetransaction"}],"output":null}],[11,"set_rollback","","Set the transaction to rollback at its completion.",29,{"inputs":[{"name":"sqlitetransaction"}],"output":null}],[11,"commit","","A convenience method which consumes and commits a transaction.",29,{"inputs":[{"name":"sqlitetransaction"}],"output":{"name":"sqliteresult"}}],[11,"rollback","","A convenience method which consumes and rolls back a transaction.",29,{"inputs":[{"name":"sqlitetransaction"}],"output":{"name":"sqliteresult"}}],[11,"finish","","Consumes the transaction, committing or rolling back according to the current setting\n(see `will_commit`, `will_rollback`).",29,{"inputs":[{"name":"sqlitetransaction"}],"output":{"name":"sqliteresult"}}],[11,"drop","","",29,{"inputs":[{"name":"sqlitetransaction"}],"output":null}],[11,"new","","Attempt to enable loading extensions. Loading extensions will be disabled when this\nguard goes out of scope. Cannot be meaningfully nested.",30,{"inputs":[{"name":"sqliteloadextensionguard"},{"name":"sqliteconnection"}],"output":{"name":"sqliteresult"}}],[11,"drop","","",30,{"inputs":[{"name":"sqliteloadextensionguard"}],"output":null}],[0,"trace","","Tracing and profiling functions. Error and warning log.",null,null],[5,"config_log","rusqlite::trace","Set up the process-wide SQLite error logging callback.\nThis function is marked unsafe for two reasons:",null,{"inputs":[{"name":"option"}],"output":{"name":"sqliteresult"}}],[5,"log","","Write a message into the error log established by `config_log`.",null,{"inputs":[{"name":"c_int"},{"name":"str"}],"output":null}],[11,"trace","rusqlite","Register or clear a callback function that can be used for tracing the execution of SQL statements.",31,{"inputs":[{"name":"sqliteconnection"},{"name":"option"}],"output":null}],[11,"profile","","Register or clear a callback function that can be used for profiling the execution of SQL statements.",31,{"inputs":[{"name":"sqliteconnection"},{"name":"option"}],"output":null}],[6,"SqliteResult","","A typedef of the result returned by many methods.",null,null],[17,"SQLITE_OPEN_READ_ONLY","","",null,null],[17,"SQLITE_OPEN_READ_WRITE","","",null,null],[17,"SQLITE_OPEN_CREATE","","",null,null],[17,"SQLITE_OPEN_URI","","",null,null],[17,"SQLITE_OPEN_MEMORY","","",null,null],[17,"SQLITE_OPEN_NO_MUTEX","","",null,null],[17,"SQLITE_OPEN_FULL_MUTEX","","",null,null],[17,"SQLITE_OPEN_SHARED_CACHE","","",null,null],[17,"SQLITE_OPEN_PRIVATE_CACHE","","",null,null],[11,"eq","","",0,{"inputs":[{"name":"sqliteerror"},{"name":"sqliteerror"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"sqliteerror"},{"name":"sqliteerror"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"sqliteerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"sqliteerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",0,{"inputs":[{"name":"sqliteerror"}],"output":{"name":"str"}}],[11,"open","","Open a new connection to a SQLite database.",31,{"inputs":[{"name":"sqliteconnection"},{"name":"p"}],"output":{"name":"sqliteresult"}}],[11,"open_in_memory","","Open a new connection to an in-memory SQLite database.",31,{"inputs":[{"name":"sqliteconnection"}],"output":{"name":"sqliteresult"}}],[11,"open_with_flags","","Open a new connection to a SQLite database.",31,{"inputs":[{"name":"sqliteconnection"},{"name":"p"},{"name":"sqliteopenflags"}],"output":{"name":"sqliteresult"}}],[11,"open_in_memory_with_flags","","Open a new connection to an in-memory SQLite database.",31,{"inputs":[{"name":"sqliteconnection"},{"name":"sqliteopenflags"}],"output":{"name":"sqliteresult"}}],[11,"transaction","","Begin a new transaction with the default behavior (DEFERRED).",31,{"inputs":[{"name":"sqliteconnection"}],"output":{"name":"sqliteresult"}}],[11,"transaction_with_behavior","","Begin a new transaction with a specified behavior.",31,{"inputs":[{"name":"sqliteconnection"},{"name":"sqlitetransactionbehavior"}],"output":{"name":"sqliteresult"}}],[11,"execute_batch","","Convenience method to run multiple SQL statements (that cannot take any parameters).",31,{"inputs":[{"name":"sqliteconnection"},{"name":"str"}],"output":{"name":"sqliteresult"}}],[11,"execute","","Convenience method to prepare and execute a single SQL statement.",31,null],[11,"last_insert_rowid","","Get the SQLite rowid of the most recent successful INSERT.",31,{"inputs":[{"name":"sqliteconnection"}],"output":{"name":"i64"}}],[11,"query_row","","Convenience method to execute a query that is expected to return a single row.",31,null],[11,"query_row_and_then","","Convenience method to execute a query that is expected to return a single row,\nand execute a mapping via `f` on that returned row with the possibility of failure.\nThe `Result` type of `f` must implement `std::convert::From<SqliteError>`.",31,null],[11,"query_row_safe","","Convenience method to execute a query that is expected to return a single row.",31,null],[11,"prepare","","Prepare a SQL statement for execution.",31,{"inputs":[{"name":"sqliteconnection"},{"name":"str"}],"output":{"name":"sqliteresult"}}],[11,"close","","Close the SQLite connection.",31,{"inputs":[{"name":"sqliteconnection"}],"output":{"name":"sqliteresult"}}],[11,"load_extension_enable","","Enable loading of SQLite extensions. Strongly consider using `SqliteLoadExtensionGuard`\ninstead of this function.",31,{"inputs":[{"name":"sqliteconnection"}],"output":{"name":"sqliteresult"}}],[11,"load_extension_disable","","Disable loading of SQLite extensions.",31,{"inputs":[{"name":"sqliteconnection"}],"output":{"name":"sqliteresult"}}],[11,"load_extension","","Load the SQLite extension at `dylib_path`. `dylib_path` is passed through to\n`sqlite3_load_extension`, which may attempt OS-specific modifications if the file\ncannot be loaded directly.",31,{"inputs":[{"name":"sqliteconnection"},{"name":"p"},{"name":"option"}],"output":{"name":"sqliteresult"}}],[11,"fmt","","",31,{"inputs":[{"name":"sqliteconnection"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",32,null],[11,"cmp","","",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":{"name":"option"}}],[11,"lt","","",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":{"name":"bool"}}],[11,"le","","",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":{"name":"bool"}}],[11,"gt","","",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":{"name":"bool"}}],[11,"ge","","",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":{"name":"bool"}}],[11,"clone","","",32,{"inputs":[{"name":"sqliteopenflags"}],"output":{"name":"sqliteopenflags"}}],[11,"eq","","",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":{"name":"bool"}}],[11,"ne","","",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":{"name":"bool"}}],[11,"empty","","Returns an empty set of flags.",32,{"inputs":[{"name":"sqliteopenflags"}],"output":{"name":"sqliteopenflags"}}],[11,"all","","Returns the set containing all flags.",32,{"inputs":[{"name":"sqliteopenflags"}],"output":{"name":"sqliteopenflags"}}],[11,"bits","","Returns the raw value of the flags currently stored.",32,{"inputs":[{"name":"sqliteopenflags"}],"output":{"name":"c_int"}}],[11,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"c_int"}],"output":{"name":"option"}}],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"c_int"}],"output":{"name":"sqliteopenflags"}}],[11,"is_empty","","Returns `true` if no flags are currently stored.",32,{"inputs":[{"name":"sqliteopenflags"}],"output":{"name":"bool"}}],[11,"is_all","","Returns `true` if all flags are currently set.",32,{"inputs":[{"name":"sqliteopenflags"}],"output":{"name":"bool"}}],[11,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":{"name":"bool"}}],[11,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":{"name":"bool"}}],[11,"insert","","Inserts the specified flags in-place.",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":null}],[11,"remove","","Removes the specified flags in-place.",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":null}],[11,"toggle","","Toggles the specified flags in-place.",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":null}],[11,"bitor","","Returns the union of the two sets of flags.",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":{"name":"sqliteopenflags"}}],[11,"bitxor","","Returns the left flags, but with all the right flags toggled.",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":{"name":"sqliteopenflags"}}],[11,"bitand","","Returns the intersection between the two sets of flags.",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":{"name":"sqliteopenflags"}}],[11,"sub","","Returns the set difference of the two sets of flags.",32,{"inputs":[{"name":"sqliteopenflags"},{"name":"sqliteopenflags"}],"output":{"name":"sqliteopenflags"}}],[11,"not","","Returns the complement of this set of flags.",32,{"inputs":[{"name":"sqliteopenflags"}],"output":{"name":"sqliteopenflags"}}],[11,"default","","",32,{"inputs":[{"name":"sqliteopenflags"}],"output":{"name":"sqliteopenflags"}}],[11,"column_names","","Get all the column names in the result set of the prepared statement.",33,{"inputs":[{"name":"sqlitestatement"}],"output":{"name":"vec"}}],[11,"execute","","Execute the prepared statement.",33,null],[11,"query","","Execute the prepared statement, returning an iterator over the resulting rows.",33,null],[11,"query_map","","Executes the prepared statement and maps a function over the resulting\nrows.",33,null],[11,"query_and_then","","Executes the prepared statement and maps a function over the resulting\nrows, where the function returns a `Result` with `Error` type implementing\n`std::convert::From<SqliteError>` (so errors can be unified).",33,null],[11,"finalize","","Consumes the statement.",33,{"inputs":[{"name":"sqlitestatement"}],"output":{"name":"sqliteresult"}}],[11,"fmt","","",33,{"inputs":[{"name":"sqlitestatement"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"drop","","",33,{"inputs":[{"name":"sqlitestatement"}],"output":null}],[11,"next","","",34,{"inputs":[{"name":"mappedrows"}],"output":{"name":"option"}}],[11,"next","","",35,{"inputs":[{"name":"andthenrows"}],"output":{"name":"option"}}],[11,"next","","",36,{"inputs":[{"name":"sqliterows"}],"output":{"name":"option"}}],[11,"get","","Get the value of a particular column of the result row.",37,{"inputs":[{"name":"sqliterow"},{"name":"c_int"}],"output":{"name":"t"}}],[11,"get_checked","","Get the value of a particular column of the result row.",37,{"inputs":[{"name":"sqliterow"},{"name":"c_int"}],"output":{"name":"sqliteresult"}}]],"paths":[[3,"SqliteError"],[4,"SqliteTransactionBehavior"],[3,"Struct_sqlite3_file"],[3,"Struct_sqlite3_io_methods"],[3,"Struct_sqlite3_vfs"],[3,"Struct_sqlite3_mem_methods"],[3,"Struct_sqlite3_module"],[3,"Struct_sqlite3_index_info"],[3,"Struct_sqlite3_index_constraint"],[3,"Struct_sqlite3_index_orderby"],[3,"Struct_sqlite3_index_constraint_usage"],[3,"Struct_sqlite3_vtab"],[3,"Struct_sqlite3_vtab_cursor"],[3,"Struct_sqlite3_mutex_methods"],[3,"Struct_sqlite3_pcache_page"],[3,"Struct_sqlite3_pcache_methods2"],[3,"Struct_sqlite3_pcache_methods"],[3,"Struct_sqlite3_rtree_geometry"],[3,"Struct_sqlite3_rtree_query_info"],[3,"Struct___va_list_tag"],[8,"ToSql"],[8,"FromSql"],[6,"c_int"],[6,"c_double"],[3,"String"],[3,"Vec"],[3,"Timespec"],[4,"Option"],[3,"Null"],[3,"SqliteTransaction"],[3,"SqliteLoadExtensionGuard"],[3,"SqliteConnection"],[3,"SqliteOpenFlags"],[3,"SqliteStatement"],[3,"MappedRows"],[3,"AndThenRows"],[3,"SqliteRows"],[3,"SqliteRow"]]};
initSearch(searchIndex);
