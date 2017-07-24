import { createReducer } from 'redux-act'

import { setList, setStatus, addPeopleToList } from '../actions'

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
    [addPeopleToList]: (state, { id, people }) => ({
      ...state,
      [id]: {
        ...state[id],
        people: [...new Set([...state[id].people, ...people])]
      }
    })
  },
  initialState
)
