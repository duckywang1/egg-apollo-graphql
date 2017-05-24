'use strict'

module.exports = app => {
  app.post('/graphql', app.controller.graphql)
  app.post('/graphql', app.jwt, app.controller.graphql)

  app.get('/graphiql', app.controller.graphiql)
  app.post('/graphiql', app.controller.graphiql)

  app.get('/', app.controller.home.index)
}
