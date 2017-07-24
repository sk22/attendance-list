import lists from './lists'
import { setStatus, setList, addPeopleToList } from '../actions'

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

test('set list', () => {
  const state = lists(
    initialState,
    setList({ id: 'xxx', list: { ...initialState.xxx, name: 'Meetup' } })
  )
  expect(state.xxx.name).toBe('Meetup')
  expect(state.xxx.people.length).toBe(2)
})

test('add people to list', () => {
  const state = lists(
    initialState,
    addPeopleToList({ id: 'xxx', people: ['bbb', 'ccc'] })
  )
  expect(state.xxx.people.length).toBe(3)
})
