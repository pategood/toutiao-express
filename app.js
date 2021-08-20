const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const handleError = require('./middleware/handleError')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

const port = process.env.port || 9091

// 挂载路由
app.use('/api', router)

// 挂载同意处理服务端错误中间件
app.use(handleError())

app.listen(port, () => {
  console.log('The server is set up successfully.');
  console.log(`app listening at http://localhost:${port}`)
})