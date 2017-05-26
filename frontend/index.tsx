import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router, BrowserRouter, Route, Switch } from 'react-router'

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo'

import { history, routes, RouteWithSubRoutesComponent } from './router/routerConfig'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:12012/graphql'
})

const client = new ApolloClient({
  networkInterface: networkInterface,
});

class ReactApp extends React.Component<{}, {}> {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <ApolloProvider client={client}>
        <Router history={history}>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutesComponent key={i} {...route} />
            ))}
          </Switch>
        </Router>
      </ApolloProvider>
    )
  }
}

ReactDOM.render(<ReactApp />, document.querySelector('#reactApp'))