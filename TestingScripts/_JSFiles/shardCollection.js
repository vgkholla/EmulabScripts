use testdb
sh.enableSharding("testdb")
db.test_collection.ensureIndex({key:1})
sh.shardCollection("testdb.test_collection",{key:1})
