import React from 'react'
import PropTypes from 'prop-types'

import { attendance as attendancePropType } from '../prop-types'

const Attendances = ({ attendances, onStatusChange, onPersonRemove }) =>
  <ul>
    {attendances.map(attendance =>
      <li key={attendance.id}>
        {attendance.person ? attendance.person.name : 'Deleted'}
        <select
          onChange={onStatusChange(attendance.id)}
          value={attendance.status || ''}
        >
          <option label='yes' value='yes' />
          <option label='no' value='no' />
          <option label='maybe' value='maybe' />
          <option label='unknown' value='' />
        </select>
        {onPersonRemove &&
          <button onClick={onPersonRemove(attendance.id)} type='button'>
            Remove
          </button>}
      </li>
    )}
  </ul>

Attendances.propTypes = {
  attendances: attendancePropType.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onPersonRemove: PropTypes.func
}

export default Attendances
