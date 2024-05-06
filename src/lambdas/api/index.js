const express = require('express')
const serverless = require('serverless-http')

const userRouterV1 = require('./routes/v1.user.route')
const exampleRouterV1 = require('./routes/v1.example.route')
const exampleRouterV2 = require('./routes/v2.example.route')

express.application.prefix = express.Router.prefix = function (path, configure) {
  const router = express.Router()
  this.use(path, router)
  configure(router)
  return router
}

const app = express()

app.use(express.json())

app.prefix('/v1', (v1) => {
  v1.use('/user', userRouterV1)
  v1.use('/example', exampleRouterV1)
})

app.prefix('/v2', (v2) => {
  v2.use('/example', exampleRouterV2)
})

app.use((_req, res) => {
  return res.status(404).json({
    error: 'Not Found.'
  })
})

module.exports.handler = serverless(app)
