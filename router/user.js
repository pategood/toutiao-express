const express = require('express')
const userCtrl = require('../controller/user.js')
const router = express.Router()


// 获取用户信息
router.get('/user', userCtrl.userInfo )
// 用户登录 
router.post('/login', userCtrl.login)
// 用户注册
router.post('/register', userCtrl.register)
// 更新用户信息
router.put('/updateUser', userCtrl.update)

module.exports = router``