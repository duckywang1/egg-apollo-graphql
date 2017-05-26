import * as React from 'react'
import { observable, action, toJS } from 'mobx'
import { observer } from 'mobx-react'
import {
  gql,
  graphql,
} from 'react-apollo'
import { createApplicationQuery, demoStore } from '../../stores/demo.store'

@observer
class DemoIndex extends React.Component<{ mutate: any }, {}> {
  constructor(props) {
    super(props)
    demoStore.actionSaveGraphqlMutate(this.props.mutate)
  }

  render() {
    return (
      <div>
        <header>
          <p>React-Apollo Demo</p>
          <p>with react-router and mobx</p>
        </header>
        <div>
          <input type="text" value={demoStore.applicationName} onChange={(e) => demoStore.actionOnchangeApplicationName(e)} />
          <button type="button" onClick={(e) => demoStore.actionSubmitApplicationName()}>Add Application</button>
        </div>
      </div>
    )
  }
}

const DemoIndexWithGraphql = graphql(createApplicationQuery)(DemoIndex)

export { DemoIndex }
export { DemoIndexWithGraphql }