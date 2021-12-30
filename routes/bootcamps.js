const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('get all bootcamps')
})
router.get('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `show bootcapms ${req.params.id}`,
  })
})
router.post('/', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `post bootcapms`,
  })
})
router.put('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `show bootcapms ${req.params.id}`,
  })
})
router.delete('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `delete bootcapms ${req.params.id}`,
  })
})
module.exports = router
