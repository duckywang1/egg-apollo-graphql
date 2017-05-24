'use strict'

module.exports = app => {
  app.post('/graphql', app.controller.graphql.graphql)

  app.get('/graphiql', app.controller.graphql.graphiql)
  app.post('/graphiql', app.controller.graphql.graphiql)

  app.get('/', app.controller.home.index)
}
