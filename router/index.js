const express = require('express')
const router = express.Router()

// 用户相关路由
router.use( '/users', require('./user'))

// 文章相关路由
router.use( '/articles', require('./article'))

// 用户资料相关的路由
router.use('/profile', require('./profile'))

module.exports = router