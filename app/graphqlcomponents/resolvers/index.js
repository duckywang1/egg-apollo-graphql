'use strict'

const _ = require('lodash')

// import other detailed resolvers into _.merge()
const applicationResolvers = require('./application')


const rootResolvers = {
  Query: {},
  Mutation: {}
}

const resolvers = _.merge(
  rootResolvers,
  applicationResolvers
)


module.exports = resolvers
