import lists from './lists'
import { setStatus, setList, setPeople, setPersonInList } from '../actions'

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

test('removes a person', () => {
  const state = lists(
    initialState,
    setPersonInList({ id: 'xxx', person: 'bbb', inList: false })
  )
  expect(state.xxx.people).toEqual(['aaa'])
})

test('adds a person', () => {
  const state = lists(
    initialState,
    setPersonInList({ id: 'xxx', person: 'ccc', inList: true })
  )
  expect(state.xxx.people).toEqual(['aaa', 'bbb', 'ccc'])
})
