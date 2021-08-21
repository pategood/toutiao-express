const express = require('express')
const articleContent = require('../controller/article.js')
const router = express.Router()

// 获取文章列表
router.get('/allArticles', articleContent.articleList)
// 获取文章信息
router.post('/:articleId', articleContent.articleInfo)
// 收藏文章
router.post('/collections:articleId', articleContent.collections)
// 取消收藏文章
router.post('/undoCollections:articleId', articleContent.undoCollections)


module.exports = router