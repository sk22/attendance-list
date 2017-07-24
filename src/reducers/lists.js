import { createReducer } from 'redux-act'

import { setList, setStatus, setPeople, setPersonInList } from '../actions'

const initialState = {
  xxx: {
    name: 'Club Meeting',
    people: ['aaa', 'bbb'],
    status: { aaa: 'yes', bbb: 'maybe' }
  }
}

const defaultList = {
  name: 'New List',
  people: [],
  status: {}
}

export default createReducer(
  {
    [setList]: (state, { id, list = defaultList }) => ({
      ...state,
      [id]: list
    }),
    [setStatus]: (state, { person, status, id }) => ({
      ...state,
      [id]: { ...state[id], status: { ...state[id].status, [person]: status } }
    }),
    [setPeople]: (state, { id, people }) => ({
      ...state,
      [id]: { ...state[id], people }
    }),
    [setPersonInList]: (state, { id, person, inList }) => {
      const people = state[id].people
      const applyChange = (person, inList) =>
        inList
          ? [...new Set([...people, person])]
          : people.filter(p => p !== person)
      return {
        ...state,
        [id]: { ...state[id], people: applyChange(person, inList) }
      }
    }
  },
  initialState
)
