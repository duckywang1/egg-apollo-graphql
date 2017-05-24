import * as React from 'react'
import * as ReactDOM from 'react-dom'

class ReactApp extends React.Component<{}, {}> {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>ReactApp</div>
    )
  }
}

ReactDOM.render(<ReactApp />, document.querySelector('#reactApp'))