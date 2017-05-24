'use strict'

exports.keys = 'wonderfulTrip'

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  }
}
// json web token
// 所有的使用和配置信息在这：
// https://github.com/koajs/jwt/blob/master/README.md
// https://github.com/auth0/node-jsonwebtoken
exports.jwt = {
  secret: 'cool-job',
  option: {
    expiresIn: '1d'
  }
}
