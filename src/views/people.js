import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PeopleList from '../views/people-list'
import AddPerson from '../views/add-person'
import Person from '../views/person'

const People = () => (
  <Switch>
    <Route exact path="/people" component={PeopleList} />
    <Route path="/people/add" component={AddPerson} />
    <Route path="/people/new" component={AddPerson} />
    <Route path="/people/:id" component={Person} />
  </Switch>
)

export default People
