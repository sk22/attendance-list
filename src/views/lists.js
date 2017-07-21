import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { list } from '../prop-types'

const Lists = ({ lists }) =>
  <div>
    <h1>List of Attandance Lists</h1>
    <ul>
      {Object.keys(lists).map(id =>
        <li key={id}>
          {lists[id].name} <Link to={`/${id}`}>Edit</Link>
        </li>
      )}
    </ul>
  </div>

Lists.propTypes = {
  lists: PropTypes.objectOf(list)
}

const mapStateToProps = ({ lists }) => ({ lists })

export default connect(mapStateToProps)(Lists)
