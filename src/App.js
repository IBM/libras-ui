// External imports
import React, { Component } from 'react'

// Import React Components
import { Content } from 'carbon-components-react/lib/components/UIShell'

// Internal imports
import './App.scss'
import PageHeader from './components/Header'
import { Route, Switch } from 'react-router-dom'
import UserPage from './content/UserPage'
import AdminPage from './content/AdminPage'

class App extends Component {
  render () {
    return (
      <>
        <PageHeader />
        <Content>
          <Switch>
            <Route exact path='/' component={UserPage} />
            <Route path='/admin' component={AdminPage} />
          </Switch>
        </Content>
      </>
    )
  }
}

export default App
