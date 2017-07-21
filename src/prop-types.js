import PropTypes from 'prop-types'

export const person = PropTypes.shape({ name: PropTypes.string.isRequired })
export const people = PropTypes.arrayOf(person)
export const status = PropTypes.oneOf([true, false, 'maybe'])
export const list = PropTypes.shape({
  name: PropTypes.string.isRequired,
  people: PropTypes.arrayOf(PropTypes.number).isRequired,
  attendance: PropTypes.objectOf(status)
})
