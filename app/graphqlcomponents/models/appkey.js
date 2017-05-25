'use strict'

class AppkeyModel {
  constructor (ctx, connector) {
    this.connector = connector
    this.mysqlConnector = ctx.app.mysql
  }

  async getAppkeyById (args) {
    let appkey = await this.mysqlConnector.get('Appkey', {
      id: args.id
    })
    let applicationObj = await this.mysqlConnector.get('Application', {
      id: parseInt(appkey.applicationId)
    })
    appkey.applicationObj = applicationObj
    return appkey
  }

  getAppkeyList (args) {
    return this.mysqlConnector.select('Appkey', {})
  }

  createAppkey (args) {
    return this.mysqlConnector.insert('Appkey', {
      applicationId: args.applicationId
    })
  }

  async updateAppkey (args) {
    await this.mysqlConnector.update('Appkey', {
      id: args.id,
      applicationId: args.applicationId
    })
    return this.getAppkeyById(args)
  }

  deleteAppkey (args) {
    return this.mysqlConnector.delete('Appkey', {
      id: args.id
    })
  }
}

module.exports = AppkeyModel
