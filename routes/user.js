const express = require('express')
const {
  login,
  getUser,
  validateEmail,
  register
} = require('../controller/user')
const { successData, failData } = require('../model/resData')
const { currentTime } = require('../utils/getCurrentTime')
const verify = require('../utils/verify')

const router = express.Router()

// 用户登录
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const result = await login(email, password).then(sqlData => {
    if (sqlData.length === 1) {
      const token = verify.setToken(sqlData[0])
      return successData('token', token, '登录成功!')
    }
    return failData('账号或者密码错误！')
  }).catch(err => failData(err))
  res.send(result)
})

// 用户信息
router.post('/current', async (req, res) => {
  const { id } = req.body
  const result = await getUser(id).then(sqlData => {
    if (sqlData.length > 0) {
      const { _id, username } = sqlData[0]
      return successData('user', {
        _id,
        username
      })
    }
    return failData('该用户不存在！')
  }).catch(err => failData(err))

  res.status(201).send(result)
})

// 验证邮箱是否存在
router.post('/validate', async (req, res) => {
  const { email } = req.body
  const result = await validateEmail(email).then(sqlData => {
    if (sqlData.length > 0) {
      return failData('该邮箱已注册！')
    }
    return successData('msg', '验证通过！')
  }).catch(err => failData(err))
  res.send(result)
})

// 用户注册
router.post('/register', async (req, res) => {
  const result = await register({ ...req.body }).then(() => {
    return {
      code: 1,
      msg: '注册成功！',
      createTime: currentTime()
    }
  }).catch(err => failData(err))
  res.send(result)
})

module.exports = router
