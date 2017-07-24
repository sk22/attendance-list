import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setList, setPersonInList } from '../actions'
import { list as listPropType, person as personPropType } from '../prop-types'
import PeopleChooser from '../components/people-chooser'

const EditList = ({ list, ticked, people, onNameChange, onPersonChange }) =>
  <div>
    <input type='text' value={list.name} onChange={onNameChange(list)} />
    <PeopleChooser people={people} ticked={ticked} onChange={onPersonChange} />
  </div>

EditList.propTypes = {
  list: listPropType,
  people: PropTypes.objectOf(personPropType),
  ticked: PropTypes.objectOf(PropTypes.bool),
  onNameChange: PropTypes.func.isRequired,
  onPersonChange: PropTypes.func.isRequired
}

const mapStateToProps = ({ lists, people }, { match }) => {
  const list = lists[match.params.id]
  const ticked = Object.keys(people).reduce(
    (obj, key) => ({ ...obj, [key]: list.people.includes(key) }),
    {}
  )
  return { people, list, ticked }
}

const mapDispatchToProps = (dispatch, { match }) => ({
  onNameChange: list => event =>
    dispatch(
      setList({
        id: match.params.id,
        list: { ...list, name: event.target.value }
      })
    ),
  onPersonChange: ({ person, inList }) =>
    dispatch(setPersonInList({ id: match.params.id, person, inList }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditList)
