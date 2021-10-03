const execSql = require('../mysql/execSql')

// 获取文章列表
const getList = () => {
  const sql = 'select * from table_post'
  return execSql(sql)
}

// 通过id获取对应文章
const getPost = (id) => {
  const sql = `select * from table_post where _id = '${id}'`
  return execSql(sql)
}

// 创建文章
const createPost = ({title, content, imgUrl, editor, createTime, columnId}) => {
  const sql = `insert into table_post(title, content, imgUrl, editor, createtime, columnid) values('${title}', '${content}', '${imgUrl}', '${editor}', '${createTime}', '${columnId}')`

  return execSql(sql)
}

module.exports = {
  getList,
  getPost,
  createPost
}
