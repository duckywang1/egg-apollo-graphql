'use strict'

const { graphqlKoa, graphiqlKoa } = require('graphql-server-koa')

module.exports = app => {
  class GraphqlController extends app.Controller {
    * graphql () {
      return yield graphqlKoa({
        schema: {},
        context: {
          ctx: this.ctx
        },
        allowUndefinedInResolve: false,
        printErrors: true
      })(this.ctx)
    }

    * graphiql () {
      console.log('controller')
      console.log(this.ctx.request)
      yield graphiqlKoa({ endpointURL: '/graphql' })(this.ctx)
    }
  }
  return GraphqlController
}
