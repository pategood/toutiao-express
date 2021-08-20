const express = require('express')
const articleContent = require('../controller/article.js')
const router = express.Router()

// 获取文章列表
router.get('/', articleContent.articleList)
// 获取文章信息
router.post('/article:articleId', articleContent.articleInfo)
// 收藏文章
router.post('/article/collections:articleId', articleContent.articleCollections)


module.exports = router