'use strict'

class ApplicationModel {
  constructor ({ connector }) {
    this.connector = connector
  }

  getApplicationList (ctx, args) {
    return ctx.app.mysql.select('Application', {})
  }

  createApplication (ctx, args) {
    return ctx.app.mysql.insert('Application', {
      applicationName: args.applicationName
    })
  }
}

module.exports = ApplicationModel
