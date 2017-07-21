import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { people as peoplePropType } from '../prop-types'

const PeopleList = ({ people }) => (
  <div>
    List of People
    <Link to={'/people/new'}>New</Link>
    <ul>
      {Object.keys(people).map(id => (
        <li key={id}>
          {people[id].name}{' '}
          <Link to={`/people/${id}`}>Edit</Link>
        </li>
      ))}
    </ul>
  </div>
)

PeopleList.propTypes = { people: peoplePropType.isRequired }

const mapStateToProps = ({ data: { people } }) => ({ people })
export default connect(mapStateToProps)(PeopleList)
