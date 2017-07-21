import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Lists from './views/lists'
import List from './views/list'
import People from './views/people'

export default () =>
  <div>
    <Switch>
      <Route exact path='/' component={Lists} />
      <Route path='/people' component={People} />
      <Route path='/:id' component={List} />
    </Switch>
  </div>
