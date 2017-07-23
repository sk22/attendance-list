import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { generate } from 'shortid'

import { list } from '../prop-types'
import { setList } from '../actions'

const Lists = ({ lists, onAdd }) =>
  <div>
    <h1>Attandance Lists</h1>
    <button onClick={onAdd} type='button'>
      Add
    </button>
    <ul>
      {Object.keys(lists).map(id =>
        <li key={id}>
          <Link to={`/${id}`}>
            {lists[id].name}
          </Link>
        </li>
      )}
    </ul>
  </div>

Lists.propTypes = {
  lists: PropTypes.objectOf(list)
}

const mapStateToProps = ({ lists }) => ({ lists })

export default connect(mapStateToProps, {
  onAdd: () => setList({ id: generate() })
})(Lists)
