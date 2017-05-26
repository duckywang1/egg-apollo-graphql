import { observable, action, toJS } from 'mobx'
import {
  gql,
  graphql,
} from 'react-apollo'

const createApplicationQuery = gql`
mutation createApplication($applicationName: String) {
  createApplication(applicationName: $applicationName) {
    id
    applicationName
  }
}
`

class DemoStore {
  @observable graphqlMutate: any
  @observable applicationName: string = ''

  @action actionSaveGraphqlMutate = (mutate) => {
    console.log('跑进来了？')
    this.graphqlMutate = mutate
  }

  @action actionOnchangeApplicationName = (e) => {
    this.applicationName = (e.target.value).trim()
  }

  @action actionSubmitApplicationName = async () => {
    this.graphqlMutate({
      variables: { applicationName: this.applicationName },
    }).then( (res) => {
      console.log(res)
      console.log('跑通走清空')
      this.applicationName = ''
    })
  }

}

const demoStore = new DemoStore()

export { createApplicationQuery }
export { demoStore }