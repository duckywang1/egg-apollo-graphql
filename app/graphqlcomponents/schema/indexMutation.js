'use strict'

const indexMutationSchema = `
type Mutation {

  createApplication(
    applicationName: String
  ): Application

  updateApplication(
    id: Int,
    applicationName: String
  ): Application

  deleteApplication(
    id: String
  ): Application

  createAppkey(
    applicationId: String
  ): Appkey

  updateAppkey(
    id: Int
    applicationId: String
  ): Appkey

  deleteAppkey(
    id: String
  ): Appkey
}
`

module.exports = indexMutationSchema
