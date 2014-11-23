use amazondb
sh.enableSharding("amazondb")
db.review_collection.ensureIndex({product_id:1})
db.review_collection.ensureIndex({user_id:1}) 
sh.shardCollection("amazondb.review_collection",{product_id:1})