import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  list as listPropType,
  person as personPropType,
  status as statusPropType
} from '../prop-types'
import { setStatus } from '../actions'

const List = ({ list, attendance, onStatusChange }) =>
  <div>
    <h1>
      {list.name}
    </h1>
    <h2>People</h2>
    <ul>
      {attendance.map(attendance =>
        <li key={attendance.id}>
          {attendance.person ? attendance.person.name : 'Deleted'}
          <select onChange={onStatusChange(attendance.id)}>
            <option label='yes' value='yes' />
            <option label='no' value='no' />
            <option label='maybe' value='maybe' />
          </select>
        </li>
      )}
    </ul>
  </div>

List.propTypes = {
  list: listPropType,
  attendance: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      person: personPropType,
      status: statusPropType
    })
  ),
  onStatusChange: PropTypes.func.isRequired
}

const attendanceAggregator = (list, people) =>
  list.people.map(id => ({
    id,
    person: people[id],
    status: list.status[id] || null
  }))

const mapStateToProps = ({ lists, people }, { match }) => ({
  list: lists[match.params.id],
  attendance: attendanceAggregator(lists[match.params.id], people)
})

const mapDispatchToProps = (dispatch, { match }) => ({
  onStatusChange: person => event =>
    dispatch(
      setStatus({ person, status: event.target.value, id: match.params.id })
    )
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))
