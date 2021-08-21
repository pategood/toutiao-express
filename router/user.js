const express = require('express')
const userCtrl = require('../controller/user.js')
const router = express.Router()


// 获取用户信息
router.get('/', userCtrl.userInfo )
// 用户登录 
router.post('/login', userCtrl.login)
// 用户注册
router.post('/register', userCtrl.register)
// 更新用户信息
router.put('/updateUser', userCtrl.update)
// 关注用户
router.post('/follow:userId', userCtrl.follow)
// 取消关注
router.post('/undoFollow:userId', userCtrl.undoFollow)

module.exports = router