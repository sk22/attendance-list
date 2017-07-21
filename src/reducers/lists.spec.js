import lists from './lists'
import { setStatus } from '../actions'

const initialState = {
  xxx: {
    name: 'Club Meeting',
    people: ['aaa', 'bbb'],
    status: { aaa: 'yes', bbb: 'maybe' }
  }
}

test('set status', () => {
  const state = lists(
    initialState,
    setStatus({
      id: 'xxx',
      person: 'bbb',
      status: 'yes'
    })
  )
  expect(state.xxx.status.bbb).toBe('yes')
})
