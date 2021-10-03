const TOKEN_CONF = {
  // tonken秘钥
  singKey: 'daimao_item_token_key_$$$$',
  // 过期时间
  singTime: 3600 * 24 * 3,
  // 请求头参数
  header: 'authorization',
  // 不用校验的路由
  unRoute: [
    { url: '/login', methods: ['POST'] },
    { url: '/register', methods: ['POST']}
  ]
}

module.exports = TOKEN_CONF