const mongoose = require('../db');

const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    status: { // 默认参数
        type: Number,
        default: 1,
    }
});

module.exports=mongoose.model('User',UserSchema,'user');
