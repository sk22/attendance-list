import { createAction } from 'redux-act'

export const setPerson = createAction('set a person')
export const setList = createAction('set a list')
export const addPeopleToList = createAction('add people to list')
export const setStatus = createAction('set attendance status of person in list')
