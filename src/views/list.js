import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  list as listPropType,
  person as personPropType,
  status as statusPropType
} from '../prop-types'

const List = ({ list, attendance }) =>
  <div>
    <h1>
      {list.name}
    </h1>
    <h2>People</h2>
    <ul>
      {attendance.map(attendance =>
        <li key={attendance.id}>
          {attendance.person ? attendance.person.name : 'Deleted'}
        </li>
      )}
    </ul>
  </div>

List.propTypes = {
  list: listPropType,
  attendance: PropTypes.shape({
    id: PropTypes.number.isRequired,
    person: personPropType,
    status: statusPropType
  })
}

const attendanceAggregator = (list, people) =>
  list.people.map(id => ({
    id,
    person: people[id],
    status: list.attendance[id] || null
  }))

const mapStateToProps = ({ lists, people }, { match }) => ({
  list: lists[match.params.id],
  attendance: attendanceAggregator(lists[match.params.id], people)
})
export default withRouter(connect(mapStateToProps)(List))
