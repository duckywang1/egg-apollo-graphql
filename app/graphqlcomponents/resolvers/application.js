'use strict'

const _ = require('lodash')

const applicationResolvers = {
  Application: {
    applicationId: _.property('id')
  },
  Query: {
    getApplicationList (root, args, context) {
      const ApplicationModel = context.ApplicationModel
      return ApplicationModel.getApplicationList(args)
    }
  },
  Mutation: {
    async createApplication (root, args, context) {
      const ApplicationModel = context.ApplicationModel
      return ApplicationModel.createApplication(args)
    },
    async updateApplication (root, args, context) {
      const ApplicationModel = context.ApplicationModel
      return ApplicationModel.updateApplication(args)
    },
    async deleteApplication (root, args, context) {
      const ApplicationModel = context.ApplicationModel
      return ApplicationModel.deleteApplication(args)
    }
  }
}

module.exports = applicationResolvers
