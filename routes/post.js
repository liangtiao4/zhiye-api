const express = require('express')
const { getList, getPost, createPost } = require('../controller/post')
const { successData, failData } = require('../model/resData')
const getData = require('../utils/getData')
const { currentTime } = require('../utils/getCurrentTime')

const router = express.Router()

// 文章列表
router.get('/list', async (req, res) => {
  const result = await getList().then(sqlData => {
    return successData('list', sqlData)
  }).catch(err => failData(err))
  res.send(result)
})

// 文章详情
router.get('/detail', async (req, res) => {
  const id = getData(req).get('id')
  const result = await getPost(id).then(sqlData => {
    if (sqlData.length > 0) {
      return successData('item', sqlData[0])
    }
    return failData('该文章不存在!')
  }).catch(err => failData(err))
  res.send(result)
})

// 新建文章
router.post('/create', async (req, res) => {
  // console.log('data', req.body)
  const postData = req.body
  const imgUrl = postData.imgUrl || ''
  const editor = postData.editor || ''
  const createTime = currentTime()
  const result = await createPost({
    ...postData,
    imgUrl, 
    editor,
    createTime
  }).then(() => successData('msg', '文章创建成功！')
  ).catch(err => failData(err))

  res.status(201).send(result)
})

module.exports = router
