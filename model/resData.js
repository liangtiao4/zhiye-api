/* 
  res返回数据模板
*/
const { currentTime } = require('../utils/getCurrentTime')

class base {
  constructor (dataName, data) {
    this[dataName] = data
  }
}

/* 成功模板
  {
    code: 1,
    data: {  },
    successTime: 'xxx',
    msg?: ''
  }
*/
class success extends base {
  constructor (dataName, data, msg) {
    super(dataName, data, msg)
    this.code = 1
    this.successTime = currentTime()
    if (msg) {
      this.msg = msg
    }
  }
}

/* 失败模板
  {
    code: 0,
    error: 'xxx',
    failTiem: 'xxx'
  }
*/
class fail extends base {
  constructor (data) {
    super('error', data)
    this.code = 0
    this.failTime = currentTime()
  }
}

const successData = (dataName, data, msg) => {
  return new success(dataName, data, msg)
}
const failData = (err) => {
  return new fail(err)
}

module.exports = {
  successData,
  failData
}
