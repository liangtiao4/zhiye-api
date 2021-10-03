const jwt = require('jsonwebtoken')
// const jwt = require('express-jwt')
const TOKEN_CONF = require('../config/token')

const verify = {
  // 设置token
  setToken(userinfo) {
    // return new Promise(resolve => {
    let token = jwt.sign(
      // 存储数据, 自定义
      { userinfo },
      // 密钥
      TOKEN_CONF.singKey,
      // 设置过期时间
      { expiresIn: TOKEN_CONF.singTime }
    )
    return token
  },
  // 获取token
  getToken(token) {
    return new Promise((resolve, reject) => {
      // 判断token是否存在
      if (!token.split(' ').length) {
        reject({error: 'The token value is empty'})
      } else {
        // 解密token并放回数据
        let data = jwt.verify(token.split(' ')[1], TOKEN_CONF.singKey)
        resolve(data)
      }
    })
  }
}

module.exports = verify
