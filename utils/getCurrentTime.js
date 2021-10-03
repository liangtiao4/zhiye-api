/* 
  获取当前时间
*/
const getTime = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return { year, month, day, hours, minutes, seconds }
}

const currentTime = () => {
  const { year, month, day, hours, minutes, seconds } = getTime()
  const yy = year
  const MM = dealMun(month + 1)
  const dd = dealMun(day)
  const hh = dealMun(hours)
  const mm = dealMun(minutes)
  const ss = dealMun(seconds)
  // 'yy-mm-dd'
  const data = `${yy}-${MM}-${dd}`
  // 'yy-mm-dd hh:mm:ss'
  const datetime = `${yy}-${MM}-${dd} ${hh}:${mm}:${ss}`

  return datetime
}

const currentTimeUTC = () => {
  const { year, month, day, hours, minutes, seconds } = getTime()
  // utc格式的当前时间
  const datetimeutc = Date.UTC(year, month, day, hours, minutes, seconds)

  return datetimeutc
}
currentTimeUTC()

function dealMun(n) {
  const num = n < 10 ? '0' + n : n
  return num
}

module.exports = {
  currentTime,
  currentTimeUTC
}