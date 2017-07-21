import { createReducer } from 'redux-act'

import { setList } from '../actions'

const initialState = {
  xxx: {
    name: 'Club Meeting',
    people: ['aaa', 'bbb'],
    attendance: { aaa: true, bbb: 'maybe' }
  }
}

export default createReducer({
  [setList]: (state, { id, list = {} }) => ({ ...state, [id]: list })
}, initialState)
