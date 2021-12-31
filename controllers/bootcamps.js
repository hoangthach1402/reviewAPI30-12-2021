exports.getBootcamps = (req, res, next) => {
  res.send('get all bootcamps')
}
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `show bootcapms ${req.params.id}`,
  })
}

exports.updateBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `show bootcapms ${req.params.id}`,
  })
}

exports.createBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `post bootcapms`,
  })
}

exports.deleteBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `delete bootcapms ${req.params.id}`,
  })
}
