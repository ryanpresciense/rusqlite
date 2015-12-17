var searchIndex = {};
searchIndex['rusqlite'] = {"items":[[0,"","rusqlite","Rusqlite is an ergonomic wrapper for using SQLite from Rust. It attempts to expose\nan interface similar to [rust-postgres](https://github.com/sfackler/rust-postgres).",null,null],[3,"Transaction","","",null,null],[3,"LoadExtensionGuard","","RAII guard temporarily enabling SQLite extensions to be loaded.",null,null],[3,"Connection","","A connection to a SQLite database.",null,null],[3,"OpenFlags","","Flags for opening SQLite database connections.\nSee [sqlite3_open_v2](http://www.sqlite.org/c3ref/open.html) for details.",null,null],[3,"Statement","","A prepared statement.",null,null],[3,"MappedRows","","An iterator over the mapped resulting rows of a query.",null,null],[3,"AndThenRows","","An iterator over the mapped resulting rows of a query, with an Error type\nunifying with Error.",null,null],[3,"Rows","","An iterator over the resulting rows of a query.",null,null],[3,"Row","","A single result row of a query.",null,null],[4,"TransactionBehavior","","Options for transaction behavior. See [BEGIN\nTRANSACTION](http://www.sqlite.org/lang_transaction.html) for details.",null,null],[13,"Deferred","","",0,null],[13,"Immediate","","",0,null],[13,"Exclusive","","",0,null],[4,"Error","","Enum listing possible errors from rusqlite.",null,null],[13,"SqliteFailure","","An error from an underlying SQLite call.",1,null],[13,"SqliteSingleThreadedMode","","Error reported when attempting to open a connection when SQLite was configured to\nallow single-threaded use only.",1,null],[13,"FromSqlConversionFailure","","An error case available for implementors of the `FromSql` trait.",1,null],[13,"Utf8Error","","Error converting a string to UTF-8.",1,null],[13,"NulError","","Error converting a string to a C-compatible string because it contained an embedded nul.",1,null],[13,"InvalidParameterName","","Error when using SQL named parameters and passing a parameter name not present in the SQL.",1,null],[13,"InvalidPath","","Error converting a file path to a string.",1,null],[13,"ExecuteReturnedResults","","Error returned when an `execute` call returns rowss.",1,null],[13,"QueryReturnedNoRows","","Error when a query that was expected to return at least one row (e.g., for `query_row`)\ndid not return any.",1,null],[13,"GetFromStaleRow","","Error when trying to access a `Row` after stepping past it. See the discussion on\nthe `Rows` type for more details.",1,null],[13,"InvalidColumnIndex","","Error when the value of a particular column is requested, but the index is out of range\nfor the statement.",1,null],[13,"InvalidColumnType","","Error when the value of a particular column is requested, but the type of the result in\nthat column cannot be converted to the requested Rust type.",1,null],[4,"DatabaseName","","Name for a database within a SQLite connection.",null,null],[13,"Main","","The main database.",2,null],[13,"Temp","","The temporary database (e.g., any \"CREATE TEMPORARY TABLE\" tables).",2,null],[13,"Attached","","A database that has been attached via \"ATTACH DATABASE ...\".",2,null],[0,"types","","Traits dealing with SQLite data types.",null,null],[11,"clone","libsqlite3_sys::bindgen","",3,{"inputs":[{"name":"struct_sqlite3_file"}],"output":{"name":"struct_sqlite3_file"}}],[11,"default","","",3,{"inputs":[{"name":"struct_sqlite3_file"}],"output":{"name":"struct_sqlite3_file"}}],[11,"clone","","",4,{"inputs":[{"name":"struct_sqlite3_io_methods"}],"output":{"name":"struct_sqlite3_io_methods"}}],[11,"default","","",4,{"inputs":[{"name":"struct_sqlite3_io_methods"}],"output":{"name":"struct_sqlite3_io_methods"}}],[11,"clone","","",5,{"inputs":[{"name":"struct_sqlite3_vfs"}],"output":{"name":"struct_sqlite3_vfs"}}],[11,"default","","",5,{"inputs":[{"name":"struct_sqlite3_vfs"}],"output":{"name":"struct_sqlite3_vfs"}}],[11,"clone","","",6,{"inputs":[{"name":"struct_sqlite3_mem_methods"}],"output":{"name":"struct_sqlite3_mem_methods"}}],[11,"default","","",6,{"inputs":[{"name":"struct_sqlite3_mem_methods"}],"output":{"name":"struct_sqlite3_mem_methods"}}],[11,"clone","","",7,{"inputs":[{"name":"struct_sqlite3_module"}],"output":{"name":"struct_sqlite3_module"}}],[11,"default","","",7,{"inputs":[{"name":"struct_sqlite3_module"}],"output":{"name":"struct_sqlite3_module"}}],[11,"clone","","",8,{"inputs":[{"name":"struct_sqlite3_index_info"}],"output":{"name":"struct_sqlite3_index_info"}}],[11,"default","","",8,{"inputs":[{"name":"struct_sqlite3_index_info"}],"output":{"name":"struct_sqlite3_index_info"}}],[11,"clone","","",9,{"inputs":[{"name":"struct_sqlite3_index_constraint"}],"output":{"name":"struct_sqlite3_index_constraint"}}],[11,"default","","",9,{"inputs":[{"name":"struct_sqlite3_index_constraint"}],"output":{"name":"struct_sqlite3_index_constraint"}}],[11,"clone","","",10,{"inputs":[{"name":"struct_sqlite3_index_orderby"}],"output":{"name":"struct_sqlite3_index_orderby"}}],[11,"default","","",10,{"inputs":[{"name":"struct_sqlite3_index_orderby"}],"output":{"name":"struct_sqlite3_index_orderby"}}],[11,"clone","","",11,{"inputs":[{"name":"struct_sqlite3_index_constraint_usage"}],"output":{"name":"struct_sqlite3_index_constraint_usage"}}],[11,"default","","",11,{"inputs":[{"name":"struct_sqlite3_index_constraint_usage"}],"output":{"name":"struct_sqlite3_index_constraint_usage"}}],[11,"clone","","",12,{"inputs":[{"name":"struct_sqlite3_vtab"}],"output":{"name":"struct_sqlite3_vtab"}}],[11,"default","","",12,{"inputs":[{"name":"struct_sqlite3_vtab"}],"output":{"name":"struct_sqlite3_vtab"}}],[11,"clone","","",13,{"inputs":[{"name":"struct_sqlite3_vtab_cursor"}],"output":{"name":"struct_sqlite3_vtab_cursor"}}],[11,"default","","",13,{"inputs":[{"name":"struct_sqlite3_vtab_cursor"}],"output":{"name":"struct_sqlite3_vtab_cursor"}}],[11,"clone","","",14,{"inputs":[{"name":"struct_sqlite3_mutex_methods"}],"output":{"name":"struct_sqlite3_mutex_methods"}}],[11,"default","","",14,{"inputs":[{"name":"struct_sqlite3_mutex_methods"}],"output":{"name":"struct_sqlite3_mutex_methods"}}],[11,"clone","","",15,{"inputs":[{"name":"struct_sqlite3_pcache_page"}],"output":{"name":"struct_sqlite3_pcache_page"}}],[11,"default","","",15,{"inputs":[{"name":"struct_sqlite3_pcache_page"}],"output":{"name":"struct_sqlite3_pcache_page"}}],[11,"clone","","",16,{"inputs":[{"name":"struct_sqlite3_pcache_methods2"}],"output":{"name":"struct_sqlite3_pcache_methods2"}}],[11,"default","","",16,{"inputs":[{"name":"struct_sqlite3_pcache_methods2"}],"output":{"name":"struct_sqlite3_pcache_methods2"}}],[11,"clone","","",17,{"inputs":[{"name":"struct_sqlite3_pcache_methods"}],"output":{"name":"struct_sqlite3_pcache_methods"}}],[11,"default","","",17,{"inputs":[{"name":"struct_sqlite3_pcache_methods"}],"output":{"name":"struct_sqlite3_pcache_methods"}}],[11,"clone","","",18,{"inputs":[{"name":"struct_sqlite3_rtree_geometry"}],"output":{"name":"struct_sqlite3_rtree_geometry"}}],[11,"default","","",18,{"inputs":[{"name":"struct_sqlite3_rtree_geometry"}],"output":{"name":"struct_sqlite3_rtree_geometry"}}],[11,"clone","","",19,{"inputs":[{"name":"struct_sqlite3_rtree_query_info"}],"output":{"name":"struct_sqlite3_rtree_query_info"}}],[11,"default","","",19,{"inputs":[{"name":"struct_sqlite3_rtree_query_info"}],"output":{"name":"struct_sqlite3_rtree_query_info"}}],[11,"clone","","",20,{"inputs":[{"name":"struct___va_list_tag"}],"output":{"name":"struct___va_list_tag"}}],[11,"default","","",20,{"inputs":[{"name":"struct___va_list_tag"}],"output":{"name":"struct___va_list_tag"}}],[11,"eq","libsqlite3_sys::error","",21,{"inputs":[{"name":"errorcode"},{"name":"errorcode"}],"output":{"name":"bool"}}],[11,"ne","","",21,{"inputs":[{"name":"errorcode"},{"name":"errorcode"}],"output":{"name":"bool"}}],[11,"fmt","","",21,{"inputs":[{"name":"errorcode"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",21,{"inputs":[{"name":"errorcode"}],"output":{"name":"errorcode"}}],[11,"eq","","",22,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"bool"}}],[11,"ne","","",22,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"bool"}}],[11,"fmt","","",22,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",22,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"new","","",22,{"inputs":[{"name":"error"},{"name":"i32"}],"output":{"name":"error"}}],[11,"fmt","","",22,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",22,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[6,"sqlite3_stmt","rusqlite::types","",null,null],[5,"sqlite3_column_type","","",null,null],[17,"SQLITE_INTEGER","","",null,null],[17,"SQLITE_FLOAT","","",null,null],[17,"SQLITE_TEXT","","",null,null],[17,"SQLITE_BLOB","","",null,null],[17,"SQLITE_NULL","","",null,null],[3,"Null","","Empty struct that can be used to fill in a query parameter as `NULL`.",null,null],[8,"ToSql","","A trait for types that can be converted into SQLite values.",null,null],[10,"bind_parameter","","",23,null],[8,"FromSql","","A trait for types that can be created from a SQLite value.",null,null],[10,"column_result","","",24,null],[11,"column_has_valid_sqlite_type","","FromSql types can implement this method and use sqlite3_column_type to check that\nthe type reported by SQLite matches a type suitable for Self. This method is used\nby `Row::get_checked` to confirm that the column contains a valid type before\nattempting to retrieve the value.",24,null],[11,"bind_parameter","","",25,null],[11,"bind_parameter","","",26,null],[11,"bind_parameter","collections::string","",27,null],[11,"bind_parameter","collections::vec","",28,null],[11,"bind_parameter","time","",29,null],[11,"bind_parameter","core::option","",30,null],[11,"clone","rusqlite::types","",31,{"inputs":[{"name":"null"}],"output":{"name":"null"}}],[11,"bind_parameter","","",31,null],[11,"column_result","","",25,null],[11,"column_has_valid_sqlite_type","","",25,null],[11,"column_result","","",26,null],[11,"column_has_valid_sqlite_type","","",26,null],[11,"column_result","collections::string","",27,null],[11,"column_has_valid_sqlite_type","","",27,null],[11,"column_result","collections::vec","",28,null],[11,"column_has_valid_sqlite_type","","",28,null],[11,"column_result","time","",29,null],[11,"column_has_valid_sqlite_type","","",29,null],[11,"column_result","core::option","",30,null],[11,"column_has_valid_sqlite_type","","",30,null],[11,"clone","rusqlite","",0,{"inputs":[{"name":"transactionbehavior"}],"output":{"name":"transactionbehavior"}}],[11,"new","","Begin a new transaction. Cannot be nested; see `savepoint` for nested transactions.",32,{"inputs":[{"name":"transaction"},{"name":"connection"},{"name":"transactionbehavior"}],"output":{"name":"result"}}],[11,"savepoint","","Starts a new [savepoint](http://www.sqlite.org/lang_savepoint.html), allowing nested\ntransactions.",32,{"inputs":[{"name":"transaction"}],"output":{"name":"result"}}],[11,"will_commit","","Returns whether or not the transaction is currently set to commit.",32,{"inputs":[{"name":"transaction"}],"output":{"name":"bool"}}],[11,"will_rollback","","Returns whether or not the transaction is currently set to rollback.",32,{"inputs":[{"name":"transaction"}],"output":{"name":"bool"}}],[11,"set_commit","","Set the transaction to commit at its completion.",32,{"inputs":[{"name":"transaction"}],"output":null}],[11,"set_rollback","","Set the transaction to rollback at its completion.",32,{"inputs":[{"name":"transaction"}],"output":null}],[11,"commit","","A convenience method which consumes and commits a transaction.",32,{"inputs":[{"name":"transaction"}],"output":{"name":"result"}}],[11,"rollback","","A convenience method which consumes and rolls back a transaction.",32,{"inputs":[{"name":"transaction"}],"output":{"name":"result"}}],[11,"finish","","Consumes the transaction, committing or rolling back according to the current setting\n(see `will_commit`, `will_rollback`).",32,{"inputs":[{"name":"transaction"}],"output":{"name":"result"}}],[11,"drop","","",32,{"inputs":[{"name":"transaction"}],"output":null}],[11,"execute_named","","Convenience method to prepare and execute a single SQL statement with named parameter(s).",33,null],[11,"query_row_named","","Convenience method to execute a query with named parameter(s) that is expected to return\na single row.",33,null],[11,"parameter_index","","Return the index of an SQL parameter given its name.",34,{"inputs":[{"name":"statement"},{"name":"str"}],"output":{"name":"result"}}],[11,"execute_named","","Execute the prepared statement with named parameter(s). If any parameters\nthat were in the prepared statement are not included in `params`, they\nwill continue to use the most-recently bound value from a previous call\nto `execute_named`, or `NULL` if they have never been bound.",34,null],[11,"query_named","","Execute the prepared statement with named parameter(s), returning an iterator over the\nresulting rows. If any parameters that were in the prepared statement are not included in\n`params`, they will continue to use the most-recently bound value from a previous call to\n`query_named`, or `NULL` if they have never been bound.",34,null],[11,"fmt","","",1,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",1,{"inputs":[{"name":"error"},{"name":"utf8error"}],"output":{"name":"error"}}],[11,"from","","",1,{"inputs":[{"name":"error"},{"name":"nulerror"}],"output":{"name":"error"}}],[11,"fmt","","",1,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",1,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"cause","","",1,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[11,"new","","Attempt to enable loading extensions. Loading extensions will be disabled when this\nguard goes out of scope. Cannot be meaningfully nested.",35,{"inputs":[{"name":"loadextensionguard"},{"name":"connection"}],"output":{"name":"result"}}],[11,"drop","","",35,{"inputs":[{"name":"loadextensionguard"}],"output":null}],[0,"trace","","Tracing and profiling functions. Error and warning log.",null,null],[5,"config_log","rusqlite::trace","Set up the process-wide SQLite error logging callback.\nThis function is marked unsafe for two reasons:",null,{"inputs":[{"name":"option"}],"output":{"name":"result"}}],[5,"log","","Write a message into the error log established by `config_log`.",null,{"inputs":[{"name":"c_int"},{"name":"str"}],"output":null}],[11,"trace","rusqlite","Register or clear a callback function that can be used for tracing the execution of SQL statements.",33,{"inputs":[{"name":"connection"},{"name":"option"}],"output":null}],[11,"profile","","Register or clear a callback function that can be used for profiling the execution of SQL statements.",33,{"inputs":[{"name":"connection"},{"name":"option"}],"output":null}],[6,"SqliteTransaction","","Old name for `Transaction`. `SqliteTransaction` is deprecated.",null,null],[6,"SqliteError","","Old name for `Error`. `SqliteError` is deprecated.",null,null],[6,"SqliteLoadExtensionGuard","","Old name for `LoadExtensionGuard`. `SqliteLoadExtensionGuard` is deprecated.",null,null],[6,"SqliteResult","","Old name for `Result`. `SqliteResult` is deprecated.",null,null],[6,"Result","","A typedef of the result returned by many methods.",null,null],[6,"SqliteConnection","","Old name for `Connection`. `SqliteConnection` is deprecated.",null,null],[6,"SqliteOpenFlags","","Old name for `OpenFlags`. `SqliteOpenFlags` is deprecated.",null,null],[6,"SqliteStatement","","Old name for `Statement`. `SqliteStatement` is deprecated.",null,null],[6,"SqliteRows","","Old name for `Rows`. `SqliteRows` is deprecated.",null,null],[6,"SqliteRow","","Old name for `Row`. `SqliteRow` is deprecated.",null,null],[17,"SQLITE_OPEN_READ_ONLY","","",null,null],[17,"SQLITE_OPEN_READ_WRITE","","",null,null],[17,"SQLITE_OPEN_CREATE","","",null,null],[17,"SQLITE_OPEN_URI","","",null,null],[17,"SQLITE_OPEN_MEMORY","","",null,null],[17,"SQLITE_OPEN_NO_MUTEX","","",null,null],[17,"SQLITE_OPEN_FULL_MUTEX","","",null,null],[17,"SQLITE_OPEN_SHARED_CACHE","","",null,null],[17,"SQLITE_OPEN_PRIVATE_CACHE","","",null,null],[11,"open","","Open a new connection to a SQLite database.",33,{"inputs":[{"name":"connection"},{"name":"p"}],"output":{"name":"result"}}],[11,"open_in_memory","","Open a new connection to an in-memory SQLite database.",33,{"inputs":[{"name":"connection"}],"output":{"name":"result"}}],[11,"open_with_flags","","Open a new connection to a SQLite database.",33,{"inputs":[{"name":"connection"},{"name":"p"},{"name":"openflags"}],"output":{"name":"result"}}],[11,"open_in_memory_with_flags","","Open a new connection to an in-memory SQLite database.",33,{"inputs":[{"name":"connection"},{"name":"openflags"}],"output":{"name":"result"}}],[11,"transaction","","Begin a new transaction with the default behavior (DEFERRED).",33,{"inputs":[{"name":"connection"}],"output":{"name":"result"}}],[11,"transaction_with_behavior","","Begin a new transaction with a specified behavior.",33,{"inputs":[{"name":"connection"},{"name":"transactionbehavior"}],"output":{"name":"result"}}],[11,"execute_batch","","Convenience method to run multiple SQL statements (that cannot take any parameters).",33,{"inputs":[{"name":"connection"},{"name":"str"}],"output":{"name":"result"}}],[11,"execute","","Convenience method to prepare and execute a single SQL statement.",33,null],[11,"last_insert_rowid","","Get the SQLite rowid of the most recent successful INSERT.",33,{"inputs":[{"name":"connection"}],"output":{"name":"i64"}}],[11,"query_row","","Convenience method to execute a query that is expected to return a single row.",33,null],[11,"query_row_and_then","","Convenience method to execute a query that is expected to return a single row,\nand execute a mapping via `f` on that returned row with the possibility of failure.\nThe `Result` type of `f` must implement `std::convert::From<Error>`.",33,null],[11,"query_row_safe","","Convenience method to execute a query that is expected to return a single row.",33,null],[11,"prepare","","Prepare a SQL statement for execution.",33,{"inputs":[{"name":"connection"},{"name":"str"}],"output":{"name":"result"}}],[11,"close","","Close the SQLite connection.",33,{"inputs":[{"name":"connection"}],"output":{"name":"result"}}],[11,"load_extension_enable","","Enable loading of SQLite extensions. Strongly consider using `LoadExtensionGuard`\ninstead of this function.",33,{"inputs":[{"name":"connection"}],"output":{"name":"result"}}],[11,"load_extension_disable","","Disable loading of SQLite extensions.",33,{"inputs":[{"name":"connection"}],"output":{"name":"result"}}],[11,"load_extension","","Load the SQLite extension at `dylib_path`. `dylib_path` is passed through to\n`sqlite3_load_extension`, which may attempt OS-specific modifications if the file\ncannot be loaded directly.",33,{"inputs":[{"name":"connection"},{"name":"p"},{"name":"option"}],"output":{"name":"result"}}],[11,"fmt","","",33,{"inputs":[{"name":"connection"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",36,null],[11,"cmp","","",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":{"name":"option"}}],[11,"lt","","",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":{"name":"bool"}}],[11,"le","","",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":{"name":"bool"}}],[11,"gt","","",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":{"name":"bool"}}],[11,"ge","","",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":{"name":"bool"}}],[11,"clone","","",36,{"inputs":[{"name":"openflags"}],"output":{"name":"openflags"}}],[11,"eq","","",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":{"name":"bool"}}],[11,"ne","","",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":{"name":"bool"}}],[11,"empty","","Returns an empty set of flags.",36,{"inputs":[{"name":"openflags"}],"output":{"name":"openflags"}}],[11,"all","","Returns the set containing all flags.",36,{"inputs":[{"name":"openflags"}],"output":{"name":"openflags"}}],[11,"bits","","Returns the raw value of the flags currently stored.",36,{"inputs":[{"name":"openflags"}],"output":{"name":"c_int"}}],[11,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",36,{"inputs":[{"name":"openflags"},{"name":"c_int"}],"output":{"name":"option"}}],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",36,{"inputs":[{"name":"openflags"},{"name":"c_int"}],"output":{"name":"openflags"}}],[11,"is_empty","","Returns `true` if no flags are currently stored.",36,{"inputs":[{"name":"openflags"}],"output":{"name":"bool"}}],[11,"is_all","","Returns `true` if all flags are currently set.",36,{"inputs":[{"name":"openflags"}],"output":{"name":"bool"}}],[11,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":{"name":"bool"}}],[11,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":{"name":"bool"}}],[11,"insert","","Inserts the specified flags in-place.",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":null}],[11,"remove","","Removes the specified flags in-place.",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":null}],[11,"toggle","","Toggles the specified flags in-place.",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":null}],[11,"bitor","","Returns the union of the two sets of flags.",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":{"name":"openflags"}}],[11,"bitxor","","Returns the left flags, but with all the right flags toggled.",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":{"name":"openflags"}}],[11,"bitand","","Returns the intersection between the two sets of flags.",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":{"name":"openflags"}}],[11,"sub","","Returns the set difference of the two sets of flags.",36,{"inputs":[{"name":"openflags"},{"name":"openflags"}],"output":{"name":"openflags"}}],[11,"not","","Returns the complement of this set of flags.",36,{"inputs":[{"name":"openflags"}],"output":{"name":"openflags"}}],[11,"default","","",36,{"inputs":[{"name":"openflags"}],"output":{"name":"openflags"}}],[11,"column_names","","Get all the column names in the result set of the prepared statement.",34,{"inputs":[{"name":"statement"}],"output":{"name":"vec"}}],[11,"execute","","Execute the prepared statement.",34,null],[11,"query","","Execute the prepared statement, returning an iterator over the resulting rows.",34,null],[11,"query_map","","Executes the prepared statement and maps a function over the resulting\nrows.",34,null],[11,"query_and_then","","Executes the prepared statement and maps a function over the resulting\nrows, where the function returns a `Result` with `Error` type implementing\n`std::convert::From<Error>` (so errors can be unified).",34,null],[11,"finalize","","Consumes the statement.",34,{"inputs":[{"name":"statement"}],"output":{"name":"result"}}],[11,"fmt","","",34,{"inputs":[{"name":"statement"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"drop","","",34,{"inputs":[{"name":"statement"}],"output":null}],[11,"next","","",37,{"inputs":[{"name":"mappedrows"}],"output":{"name":"option"}}],[11,"next","","",38,{"inputs":[{"name":"andthenrows"}],"output":{"name":"option"}}],[11,"next","","",39,{"inputs":[{"name":"rows"}],"output":{"name":"option"}}],[11,"get","","Get the value of a particular column of the result row.",40,{"inputs":[{"name":"row"},{"name":"c_int"}],"output":{"name":"t"}}],[11,"get_checked","","Get the value of a particular column of the result row.",40,{"inputs":[{"name":"row"},{"name":"c_int"}],"output":{"name":"result"}}]],"paths":[[4,"TransactionBehavior"],[4,"Error"],[4,"DatabaseName"],[3,"Struct_sqlite3_file"],[3,"Struct_sqlite3_io_methods"],[3,"Struct_sqlite3_vfs"],[3,"Struct_sqlite3_mem_methods"],[3,"Struct_sqlite3_module"],[3,"Struct_sqlite3_index_info"],[3,"Struct_sqlite3_index_constraint"],[3,"Struct_sqlite3_index_orderby"],[3,"Struct_sqlite3_index_constraint_usage"],[3,"Struct_sqlite3_vtab"],[3,"Struct_sqlite3_vtab_cursor"],[3,"Struct_sqlite3_mutex_methods"],[3,"Struct_sqlite3_pcache_page"],[3,"Struct_sqlite3_pcache_methods2"],[3,"Struct_sqlite3_pcache_methods"],[3,"Struct_sqlite3_rtree_geometry"],[3,"Struct_sqlite3_rtree_query_info"],[3,"Struct___va_list_tag"],[4,"ErrorCode"],[3,"Error"],[8,"ToSql"],[8,"FromSql"],[6,"c_int"],[6,"c_double"],[3,"String"],[3,"Vec"],[3,"Timespec"],[4,"Option"],[3,"Null"],[3,"Transaction"],[3,"Connection"],[3,"Statement"],[3,"LoadExtensionGuard"],[3,"OpenFlags"],[3,"MappedRows"],[3,"AndThenRows"],[3,"Rows"],[3,"Row"]]};
initSearch(searchIndex);