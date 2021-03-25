const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email : {
        type: String,
        trim: true, //스페이스를 없애주는 역할
        unique: 1 //같은 이메일은 사용 불가
    },
    password: {
        type: String,
        minlength: 50
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //관리자, 일반사용자 구분시 용이
        type: Number,
        default: 0
    },
    image: String,
    token: { //token으로 유효성 검사 가능
        type: String
    },
    tokenExp:{
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.export = {User} //다른 곳에서도 쓸 수 있게 추출