/* 
  数据库配置
*/
const env = process.env.NODE_ENV

let MYSQL_CONF

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    port: '3306',
    database: 'test_db',
    user: 'root',
    password: 'Daimao,0713'
  }
}

if (env === 'production') {

}

module.exports = { MYSQL_CONF }
