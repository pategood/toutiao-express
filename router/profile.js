const express = require('express')
// const userCtrl = require('../controller/user.js')
const router = express.Router()

// 获取指定 用户资料
router.post('/:username', async (req, res, next) => {
  try {
    // 处理请求
    res.send('post /:username')
  } catch (e) {
    next(e)
  }
})

// 关注用户
router.post('/:username/follow', async (req, res, next) => {
  try {
    // 处理请求
    res.send('post 关注用户')
  } catch (e) {
    next(e)
  }
})

// 取消关注用户
router.post('/:username/follow', async (req, res, next) => {
  try {
    // 处理请求
    res.send('post 关注用户')
  } catch (e) {
    next(e)
  }
})




module.exports = router