// 第一步
const mongoose = require('mongoose');

// 第二步连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/runoob', (err) => {
    if (err) {
        console.log('连接错误');
        return;
    }
    console.log('mongodb连接成功');
});

module.exports = mongoose;
