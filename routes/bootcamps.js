const express = require('express')
const router = express.Router()
const {
  getBootcamp,
  getBootcamps,
  createBootcamps,
  deleteBootcamps,
  updateBootcamps,
} = require('../controllers/bootcamps')
router.route('/').get(getBootcamps).get(createBootcamps)
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamps)
  .delete(deleteBootcamps)

module.exports = router
