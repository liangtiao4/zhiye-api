/* 
  数据库配置
*/
const env = process.env.NODE_ENV

let MYSQL_CONF

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',    // 主机
    port: '3306',         // 端口
    database: 'test_db',  // 数据库名
    user: 'root',         // 用户
    password: '123456'    // 密码
  }
}

if (env === 'production') {

}

module.exports = { MYSQL_CONF }
