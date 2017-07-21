import people from './people'
import { setPerson } from '../actions'

const initialState = {
  aaa: { name: 'John Doe' },
  bbb: { name: 'Jane Doe' }
}

test('edit person', () => {
  const state = people(
    initialState,
    setPerson({
      id: 'aaa',
      person: { name: 'someone' }
    })
  )
  expect(state.aaa).toEqual({ name: 'someone' })
})
