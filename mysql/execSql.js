/*
  连接数据库
*/
const mysql = require('mysql')
const { MYSQL_CONF } = require('../config/db')

const execSql = (sql) => {
  let con = mysql.createConnection(MYSQL_CONF)
  con.connect()
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, data) => {
      if (err) {
        reject(err.message)
        return
      }
      resolve(data)
      con.end()
    })
  })
  return promise
}

module.exports = execSql
