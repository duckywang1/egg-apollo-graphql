'use strict'

const applicationSchema = `
type Application {
  id: String!
  applicationId: String,
  applicationName: String
}

type Query {
  getApplicationList: [Application]
}

type Mutation {
  createApplication(
    applicationName: String
  ): Application

  updateApplication(
    applicationName: String
  ): Application

  deleteApplication(
    id: String
  ): Application

}
`

module.exports = applicationSchema
