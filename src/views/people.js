import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { person as personPropType } from '../prop-types'

const People = ({ people }) =>
  <div>
    List of People
    <Link to={'/people/add'}>Add</Link>
    <ul>
      {Object.keys(people).map(id =>
        <li key={id}>
          {people[id].name} <Link to={`/people/${id}`}>Edit</Link>
        </li>
      )}
    </ul>
  </div>

People.propTypes = { people: PropTypes.objectOf(personPropType).isRequired }

const mapStateToProps = ({ people }) => ({ people })
export default connect(mapStateToProps)(People)
