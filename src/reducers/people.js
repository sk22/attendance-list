import { createReducer } from 'redux-act'
import { generate } from 'shortid'

import { setPerson } from '../actions'

const initialState = {
  [generate()]: { name: 'John Doe' },
  [generate()]: { name: 'Jane Doe' }
}

export default createReducer({
  [setPerson]: (state, { id, person = {} }) => ({ ...state, [id]: person })
}, initialState)
