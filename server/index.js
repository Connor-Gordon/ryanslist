const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', require('./routes'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  console.log(err)

  res.json({
    message: err.message,
    error: err
  })
})

// send message to confirm port 3001 is running
app.listen(3001, () => {
  console.log('app listening on port 3001')
})