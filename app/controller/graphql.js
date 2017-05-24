'use strict'

const { graphqlKoa } = require('graphql-server-koa')


module.exports = function * graphqlController () {
  yield graphqlKoa({
    schema: {},
    context: {
      ctx: this
    },
    allowUndefinedInResolve: false,
    printErrors: true
  })(this)
}
