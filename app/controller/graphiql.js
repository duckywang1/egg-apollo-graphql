'use strict'

const { graphiqlKoa } = require('graphql-server-koa')

module.exports = function * graphiqlController () {
  yield graphiqlKoa({ endpointURL: '/graphql' })
}
