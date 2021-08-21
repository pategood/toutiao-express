// 获取文章列表
exports.articleList = async (req, res, next) => {
  try {
    // 处理请求
    res.send('get 请求 文章列表 ')
  } catch (e) {
    next(e)
  }
}
// 获取文章信息
exports.articleInfo = async (req, res, next) => {
  try {
    // 处理请求
    res.send('post 请求 文章相关  必传id')
  } catch (e) {
    next(e)
  }
}
// 收藏文章
exports.collections = async (req, res, next) => {
  try {
    // 处理请求
    res.send('post 请求 收藏文章  必传id')
  } catch (e) {
    next(e)
  }
}
// 收藏文章
exports.undoCollections = async (req, res, next) => {
  try {
    // 处理请求
    res.send('post 请求 收藏文章  必传id')
  } catch (e) {
    next(e)
  }
}