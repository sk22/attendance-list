import React from 'react'
import PropTypes from 'prop-types'

import { attendance as attendancePropType } from '../prop-types'

const Attendances = ({ attendances, onStatusChange }) =>
  <ul>
    {attendances.map(attendance =>
      <li key={attendance.id}>
        {attendance.person ? attendance.person.name : 'Deleted'}
        <select
          onChange={onStatusChange(attendance.id)}
          value={attendance.status}
        >
          <option label='yes' value='yes' />
          <option label='no' value='no' />
          <option label='maybe' value='maybe' />
        </select>
      </li>
    )}
  </ul>

Attendances.propTypes = {
  attendances: attendancePropType.isRequired,
  onStatusChange: PropTypes.func.isRequired
}

export default Attendances
