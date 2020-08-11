import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import faker from 'faker'
import axios from 'axios'
import {
  LIST_TEXTS_BEGIN,
  LIST_TEXTS_SUCCESS,
  LIST_TEXTS_FAILURE,
  listTextsBegin,
  listTextsSuccess,
  listTextsFailure,
  listTexts
} from './list'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const id = faker.random.uuid()
const response = { id }
const error = new Error()

describe('Texts list action', () => {
  it('creates an action when texts listing begins', () => {
    const action = { type: LIST_TEXTS_BEGIN }

    expect(listTextsBegin()).toEqual(action)
  })

  it('creates an action when texts listing success', () => {
    const action = { type: LIST_TEXTS_SUCCESS, response }

    expect(listTextsSuccess(response)).toEqual(action)
  })

  it('creates an action when texts listing failure', () => {
    const action = { type: LIST_TEXTS_FAILURE, error }

    expect(listTextsFailure(error)).toEqual(action)
  })

  xit('creates LIST_TEXTS_SUCCESS when texts listing has been done', () => {
    const actions = [
      { type: LIST_TEXTS_BEGIN },
      { type: LIST_TEXTS_SUCCESS, response: { id } }
    ]
    const store = mockStore({ texts: {} })

    axios.get = jest.fn(() => Promise.resolve(response))

    return store
      .dispatch(listTexts(id))
      .then(() => expect(store.getActions()).toEqual(actions))
  })

  xit('creates LIST_TEXTS_FAILURE when texts listing returns error', () => {
    const actions = [
      { type: LIST_TEXTS_BEGIN },
      { type: LIST_TEXTS_FAILURE, error }
    ]
    const store = mockStore({ texts: {} })

    axios.get = jest.fn(new Error())

    return store
      .dispatch(listTexts())
      .then(() => expect(store.getActions()).toEqual(actions))
  })
})
