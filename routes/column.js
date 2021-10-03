const express = require('express')
const {
  getList,
  getColumn
} = require('../controller/column')
const { successData, failData } = require('../model/resData')
const getData = require('../utils/getData')

const router = express.Router()

// 专栏列表
router.get('/list', async (req, res) => {
  const result = await getList().then(sqlData => {
    return successData('list', sqlData)
  }).catch(err => failData(err))
  res.send(result)
})

// 专栏详情
router.get('/detail', async (req, res) => {
  const id = getData(req).get('id')
  const result = id
  ? await getColumn(id).then(sqlData => {
    if (sqlData.length > 0) {
      return successData('item', sqlData[0])
    }
    return failData('该专栏不存在！')
  }).catch(err => failData(err))
  : failData('缺少唯一标识id，无法获取专栏!')
  res.send(result)
})

module.exports = router
