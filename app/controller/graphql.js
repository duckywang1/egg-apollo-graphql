'use strict'

const { graphqlKoa, graphiqlKoa } = require('graphql-server-koa')
const executableSchema = require('../graphqlcomponents/schema/index.js')

const models = require('../graphqlcomponents/models/index.js')
const connectors = require('../graphqlcomponents/connectors/index.js')

module.exports = app => {
  class GraphqlController extends app.Controller {
    * graphql () {
      return graphqlKoa({
        schema: executableSchema,
        context: {
          ctx: this.ctx,
          ApplicationModel: new models.ApplicationModel(this.ctx, connectors.applicationConnectors),
          AppkeyModel: new models.AppkeyModel(this.ctx, null)
        },
        allowUndefinedInResolve: false,
        printErrors: true
      })(this.ctx)
    }

    * graphiql () {
      graphiqlKoa({ endpointURL: '/graphql' })(this.ctx)
    }
  }
  return GraphqlController
}
