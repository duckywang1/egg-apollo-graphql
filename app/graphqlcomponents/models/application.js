'use strict'

class ApplicationModel {
  constructor (ctx, connector) {
    this.connector = connector
    this.mysqlConnector = ctx.app.mysql
  }

  getApplicationById (args) {
    return this.mysqlConnector.get('Application', {
      id: args.id
    })
  }

  getApplicationList (args) {
    return this.mysqlConnector.select('Application', {})
  }

  createApplication (args) {
    return this.mysqlConnector.insert('Application', {
      applicationName: args.applicationName
    })
  }

  async updateApplication (args) {
    await this.mysqlConnector.update('Application', {
      id: args.id,
      applicationName: args.applicationName
    })
    return this.getApplicationById(args)
  }

  deleteApplication (args) {
    return this.mysqlConnector.delete('Application', {
      id: args.id
    })
  }
}

module.exports = ApplicationModel
