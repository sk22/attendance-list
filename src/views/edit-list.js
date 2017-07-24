import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setList, addPeopleToList } from '../actions'
import { list as listPropType, person as personPropType } from '../prop-types'
import PeopleChooser from '../components/people-chooser'

const EditList = ({ list, people, onNameChange, onPeopleChoose }) =>
  <div>
    <input type='text' value={list.name} onChange={onNameChange(list)} />
    <PeopleChooser people={people} onChoose={onPeopleChoose} />
  </div>

EditList.propTypes = {
  list: listPropType,
  people: PropTypes.objectOf(personPropType),
  onNameChange: PropTypes.func.isRequired,
  onPeopleChoose: PropTypes.func.isRequired
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
    ),
  onPeopleChoose: people =>
    dispatch(addPeopleToList({ id: match.params.id, people }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditList)
