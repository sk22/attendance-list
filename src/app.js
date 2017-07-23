import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Lists from './views/lists'
import List from './views/list'
import EditList from './views/edit-list'
import People from './views/people'
import AddPerson from './views/add-person'
import Person from './views/person'

export default () =>
  <div>
    <Switch>
      <Route exact path='/' component={Lists} />
      <Route exact path='/people' component={People} />
      <Route path='/people/add' component={AddPerson} />
      <Route path='/people/:id' component={Person} />
      <Route path='/:id/edit' component={EditList} />
      <Route path='/:id' component={List} />
    </Switch>
  </div>
