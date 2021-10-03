const execSql = require('../mysql/execSql')

// 获取专栏列表
const getList = () => {
  const sql = 'select * from table_column'
  return execSql(sql)
}

// 通过id获取对应专栏
const getColumn = (id) => {
  const sql = `select * from table_column where _id = '${id}'`
  return execSql(sql)
}

module.exports = {
  getList,
  getColumn
}
