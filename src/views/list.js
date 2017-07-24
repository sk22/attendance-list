import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import {
  list as listPropType,
  attendance as attendancePropType
} from '../prop-types'
import { setStatus, setPersonInList } from '../actions'
import Attendances from '../components/attendances'

const List = ({ list, attendances, match, onStatusChange, onPersonRemove }) =>
  <div>
    <h1>
      {list.name}
    </h1>
    <Link to={`${match.url}/edit`}>Edit</Link>
    <Attendances
      attendances={attendances}
      onStatusChange={onStatusChange}
      onPersonRemove={onPersonRemove}
    />
  </div>

List.propTypes = {
  list: listPropType.isRequired,
  attendances: attendancePropType.isRequired,
  match: PropTypes.shape({ url: PropTypes.string.isRequired }),
  onStatusChange: PropTypes.func.isRequired,
  onPersonRemove: PropTypes.func.isRequired
}

const attendanceAggregator = (list, people) =>
  list.people.map(id => ({
    id,
    person: people[id],
    status: list.status[id] || null
  }))

const mapStateToProps = ({ lists, people }, { match }) => ({
  list: lists[match.params.id],
  attendances: attendanceAggregator(lists[match.params.id], people)
})

const mapDispatchToProps = (dispatch, { match }) => ({
  onStatusChange: person => event =>
    dispatch(
      setStatus({ person, status: event.target.value, id: match.params.id })
    ),
  onPersonRemove: person => event =>
    dispatch(setPersonInList({ id: match.params.id, person, inList: false }))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))
