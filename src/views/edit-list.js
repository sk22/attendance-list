import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setList } from '../actions'
import { list as listPropType, person as personPropType } from '../prop-types'
import PeopleChooser from '../components/people-chooser'

const EditList = ({ list, people, onNameChange, onPersonChoose }) => {
  return (
    <div>
      <input type='text' value={list.name} onChange={onNameChange(list)} />
      <PeopleChooser people={people} onChoose={onPersonChoose} />
    </div>
  )
}

EditList.propTypes = {
  list: listPropType,
  people: PropTypes.objectOf(personPropType),
  onNameChange: PropTypes.func.isRequired,
  onPersonChoose: PropTypes.func.isRequired
}

const mapStateToProps = ({ lists, people }, { match }) => ({
  list: lists[match.params.id],
  people
})

const mapDispatchToProps = (dispatch, { match }) => ({
  onNameChange: list => event =>
    dispatch(
      setList({
        id: match.params.id,
        list: { ...list, name: event.target.value }
      })
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(EditList)
