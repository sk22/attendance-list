import PeopleChooser from './people-chooser'

const getTrue = PeopleChooser.prototype.getTrue

test('getTrue returns true values', () => {
  const state = {
    aaa: true,
    bbb: false,
    ccc: null
  }

  expect(getTrue(state)).toEqual(['aaa'])
  expect(getTrue(state).length).toBe(1)
})
