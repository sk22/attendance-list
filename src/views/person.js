import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { person as personPropType } from '../prop-types'

const Person = ({ person }) => (
  <div>
    <h1>{person.name}</h1>
  </div>
)

Person.propTypes = { person: personPropType.isRequired }

const mapStateToProps = ({ data }, { match }) => ({
  person: data.people[match.params.id]
})
export default withRouter(connect(mapStateToProps)(Person))
