'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('../resolvers/index.js')

/** import other schema into rootTypeDefs */
const applicationSchema = require('./application.js')
const appkeySchema = require('./appkey.js')
const indexQuerySchema = require('./indexQuery.js')
const indexMutationSchema = require('./indexMutation.js')

const rootSchema = `
type Query {

}
type Mutation {

}
`

/** TypeDefs means type definition */
const rootTypeDefs = [
  rootSchema,
  applicationSchema,
  appkeySchema,
  indexQuerySchema,
  indexMutationSchema
]

const executableSchema = makeExecutableSchema({
  typeDefs: rootTypeDefs,
  resolvers: resolvers
})


module.exports = executableSchema
