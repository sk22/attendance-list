import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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

const mapStateToProps = ({ lists }) => ({ lists })

export default connect(mapStateToProps)(Lists)
