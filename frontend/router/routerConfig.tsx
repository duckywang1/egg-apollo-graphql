import * as React from 'react'
import { Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { DemoIndex, DemoIndexWithGraphql } from '../views/demo/index'

const history = createBrowserHistory()

const routes: any = [
  {
    exact: true,
    path: '/',
    component: DemoIndexWithGraphql,
  },
  {
    exact: true,
    path: '/demo',
    component: DemoIndexWithGraphql,
  },
]

const RouteWithSubRoutesComponent = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes} />
  )} />
)

export { history }
export { routes }
export { RouteWithSubRoutesComponent }