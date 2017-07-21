import people from './people'
import { editPerson } from '../actions'

const initialState = {
  aaa: { name: 'John Doe' },
  bbb: { name: 'Jane Doe' }
}

test('edit person', () => {
  const state = people(initialState, editPerson({
    id: 'aaa', person: { name: 'someone' }
  }))
  expect(state.aaa).toEqual({ name: 'someone' })
})

test('add person', () => {
  const state = people(initialState, editPerson({
    id: 'ccc', person: { name: 'someone' }
  }))
  expect(state.ccc).toEqual({ name: 'someone' })
  expect(Object.keys(state).length).toBe(3)
})
