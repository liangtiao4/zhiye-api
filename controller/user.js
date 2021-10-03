const execSql = require('../mysql/execSql')

// 用户登录
const login = (email, password) => {
  let sql = `select * from table_user`
  sql += ` where email = '${email}' and password = '${password}'`

  return execSql(sql)
}

// 邮箱验证
const validateEmail = (email) => {
  const sql = `select * from table_user where email = '${email}'`
  return execSql(sql)
}

// 用户注册
const register = ({email, password, username}) => {
  const sql = `insert into table_user(email, password, username) values('${email}', '${password}', '${username}')`
  return execSql(sql)
}

module.exports = {
  login,
  validateEmail,
  register
}
