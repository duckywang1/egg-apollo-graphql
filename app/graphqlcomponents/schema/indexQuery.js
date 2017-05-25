'use strict'

const indexQuerySchema = `
type Query {
  
  # 获取应用列表
  getApplicationList: [Application]

  # 获取AppKey列表
  getAppkeyList: [Appkey]
}
`

module.exports = indexQuerySchema
