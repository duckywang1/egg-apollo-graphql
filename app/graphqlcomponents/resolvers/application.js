'use strict'

const _ = require('lodash')

const applicationResolvers = {
  Application: {
    applicationId: _.property('id')
  },
  Query: {
    getApplicationList (root, args, context) {
      const ctx = context.ctx
      const ApplicationModel = context.ApplicationModel
      return ApplicationModel.getApplicationList(ctx, args)
    }
  },
  Mutation: {
    createApplication (root, args, context) {
      const ctx = context.ctx
      const ApplicationModel = context.ApplicationModel
      return ApplicationModel.createApplication(ctx, args)
    },
    updateApplication (root, args, context) {

    },
    deleteApplication (root, args, context) {
      
    }
  }
}

module.exports = applicationResolvers
