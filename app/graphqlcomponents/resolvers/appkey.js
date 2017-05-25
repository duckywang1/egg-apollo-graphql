'use strict'

const appkeyResolvers = {
  Appkey: {

  },
  Query: {
    getAppkeyList (root, args, context) {
      const AppkeyModel = context.AppkeyModel
      return AppkeyModel.getAppkeyList(args)
    }
  },
  Mutation: {
    async createAppkey (root, args, context) {
      const AppkeyModel = context.AppkeyModel
      return AppkeyModel.createAppkey(args)
    },
    async updateAppkey (root, args, context) {
      const AppkeyModel = context.AppkeyModel
      return AppkeyModel.updateAppkey(args)
    },
    async deleteAppkey (root, args, context) {
      const AppkeyModel = context.AppkeyModel
      return AppkeyModel.deleteAppkey(args)
    }
  }
}

module.exports = appkeyResolvers
