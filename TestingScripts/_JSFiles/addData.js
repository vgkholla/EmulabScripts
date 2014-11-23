use testdb
var start = 1;
var end = 50000;
for(var i=start; i<=end; i++){
    key = i;
    value = new Date();
    db.test_collection.save({"key":key, "value":value});
}
