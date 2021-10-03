const express = require('express')
const column = require('./routes/column')
const post = require('./routes/post')
const user = require('./routes/user')

const PORT = 8081
const ROOT_PATH = '/zhiye/api'
const app = express()

// 设置允许跨域访问该服务
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
// 解析post请求的数据
app.use(express.json())

app.use(`${ROOT_PATH}/column`, column)
app.use(`${ROOT_PATH}/post`, post)
app.use(`${ROOT_PATH}/user`, user)

app.listen(PORT, () => {
  console.log('服务已启动:127.0.0.1:' + PORT)
})
