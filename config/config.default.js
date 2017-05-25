'use strict'

exports.keys = 'wonderfulTrip'

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  }
}

// Example MySQL Config
exports.mysql = {
  // database configuration
  client: {
    // host
    host: '127.0.0.1',
    // port
    port: '3306',
    // username
    user: 'root',
    // password
    password: '',
    // database
    database: 'eggTest'
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false
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

exports.security = {
  xframe: {
    enable: true
  },
  csrf: {
    enable: true,
    ignore: ['/api', '/graphql', '/graphiql']
  }
}
