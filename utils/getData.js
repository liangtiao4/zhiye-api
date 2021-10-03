/* 
  获取get参数
*/
const getData = (req) => {
  // 解析req
  const getStr = req.url.split('?')[1]
  const result = new URLSearchParams(getStr)

  return result
}

module.exports = getData
