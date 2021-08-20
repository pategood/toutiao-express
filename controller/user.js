// 获取用户信息
exports.userInfo = async (req, res, next) => {
  try {
    // 处理请求
    res.send('get 注册')
  } catch (e) {
    next(e)
  }
}
// 用户登录
exports.login = async (req, res, next) => {
  try {
    // 处理请求
    res.send('post /login')
  } catch (e) {
    next(e)
  }
}
// 用户注册
exports.register = async (req, res, next) => {
  try {
    // 处理请求
    res.send('get 注册')
  } catch (e) {
    next(e)
  }
}
// 更新用户
exports.update = async (req, res, next) => {
  try {
    // 处理请求
    res.send('put /updateUser')
  } catch (e) {
    next(e)
  }
}