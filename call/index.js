let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://127.0.0.1:27017/runoob";


/*
* // 进入数据库,如果有账号密码用这个：mongo -u admin -p admin --authenticationDatabase=admin
* mongo
*
* // 展示所有数据库
* show tables
*
* // 进入runoob数据库
* use runoob
*
* // 展示runoob/site表
* show tables
*
* // 查找site表内容
* db.site.find({})
*
* */

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    let dbase = db.db("runoob");
    dbase.createCollection('site', function (err, res) {
        if (err) throw err;
        console.log("集合已创建");
        db.close();
    });

    insertData(db, function (result) {
        console.log(result);
        db.close();
    });

    // queryData(db, function (result) {
    //     console.log(result);
    //     db.close
    //
    // });

    // updateData(db, function (result) {
    //     console.log(result);
    //     db.close();
    // });

    // delData(db, function (result) {
    //     console.log(result);
    //     db.close();
    // })
});


// 插入数据
let insertData = function (req, db, callback) {

    // 连接到表
    let collection = db.collection("site");

    // 插入数据
    let data = [{"id": 1, "name": "zzh", "age": 15}];

    collection.insert(data, function (err, result) {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        callback(result)
    });

};

// 查询数据
let queryData = function (req, db, callback) {

    // 连接到表
    let collection = db.collection('site');

    // 查询数据
    let id = req.body.id;

    collection.find(id).toArray(function (err, result) {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        callback(result)
    })
};

// 修改数据
let updateData = function (db, callback) {
    // 连接到表
    let collection = db.collection('site');
    // 更新数据
    let data = {"id": 1};
    let updateData = {$set: {"age": 100}};

    collection.update(data, updateData, function (err, result) {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        callback(result);
    })
};

// 删除数据
let delData = function (db, callback) {
    // 连接到表
    let collection = db.collection('site');
    // 删除数据
    let data = {"id": 1};
    collection.remove(data, function (err, result) {
        if (err) {
            console.log("Error:" + err);
            return;
        }
        callback(result);
    })
};



