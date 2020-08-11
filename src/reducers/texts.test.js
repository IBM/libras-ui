import faker from 'faker'
import reducers from '.'
import {
  CREATE_TEXT_BEGIN,
  CREATE_TEXT_SUCCESS,
  CREATE_TEXT_FAILURE,
  RETRIEVE_TEXT_BEGIN,
  RETRIEVE_TEXT_SUCCESS,
  RETRIEVE_TEXT_FAILURE,
  LIST_TEXTS_BEGIN,
  LIST_TEXTS_SUCCESS,
  LIST_TEXTS_FAILURE,
  SEARCH_TEXT_BEGIN,
  SEARCH_TEXT_SUCCESS,
  SEARCH_TEXT_FAILURE,
  UPDATE_TEXT_BEGIN,
  UPDATE_TEXT_SUCCESS,
  UPDATE_TEXT_FAILURE,
  DELETE_TEXT_BEGIN,
  DELETE_TEXT_SUCCESS,
  DELETE_TEXT_FAILURE
} from '../actions/texts'

const initialState = { type: null, loading: false, response: null, error: null }

describe('Texts reducer', () => {
  it('should return the initial state', () => {
    expect(reducers(undefined, {}).texts).toEqual(initialState)
  })

  it('should handle CREATE_TEXT_BEGIN', () => {
    const action = { type: CREATE_TEXT_BEGIN }

    expect(reducers({}, action).texts)
      .toEqual({ type: null, loading: true, response: null, error: null })
  })

  it('should handle CREATE_TEXT_SUCCESS', () => {
    const id = faker.random.uuid()
    const response = { id }
    const action = { type: CREATE_TEXT_SUCCESS, response }

    expect(reducers({}, action).texts)
      .toEqual({ type: CREATE_TEXT_SUCCESS, loading: false, response, error: null })
  })

  it('should handle CREATE_TEXT_FAILURE', () => {
    const error = Error()
    const action = { type: CREATE_TEXT_FAILURE, error }

    expect(reducers({}, action).texts)
      .toEqual({ type: CREATE_TEXT_FAILURE, loading: false, response: null, error })
  })

  it('should handle RETRIEVE_TEXT_BEGIN', () => {
    const action = { type: RETRIEVE_TEXT_BEGIN }

    expect(reducers({}, action).texts)
      .toEqual({ type: null, loading: true, response: null, error: null })
  })

  it('should handle RETRIEVE_TEXT_SUCCESS', () => {
    const id = faker.random.uuid()
    const response = { id }
    const action = { type: RETRIEVE_TEXT_SUCCESS, response }

    expect(reducers({}, action).texts)
      .toEqual({ type: RETRIEVE_TEXT_SUCCESS, loading: false, response, error: null })
  })

  it('should handle RETRIEVE_TEXT_FAILURE', () => {
    const error = Error()
    const action = { type: RETRIEVE_TEXT_FAILURE, error }

    expect(reducers({}, action).texts)
      .toEqual({ type: RETRIEVE_TEXT_FAILURE, loading: false, response: null, error })
  })

  it('should handle LIST_TEXTS_BEGIN', () => {
    const action = { type: LIST_TEXTS_BEGIN }

    expect(reducers({}, action).texts)
      .toEqual({ type: null, loading: true, response: null, error: null })
  })

  it('should handle LIST_TEXTS_SUCCESS', () => {
    const id = faker.random.uuid()
    const response = [{ id }]
    const action = { type: LIST_TEXTS_SUCCESS, response }

    expect(reducers({}, action).texts)
      .toEqual({ type: LIST_TEXTS_SUCCESS, loading: false, response, error: null })
  })

  it('should handle LIST_TEXTS_FAILURE', () => {
    const error = Error()
    const action = { type: LIST_TEXTS_FAILURE, error }

    expect(reducers({}, action).texts)
      .toEqual({ type: LIST_TEXTS_FAILURE, loading: false, response: null, error })
  })

  it('should handle SEARCH_TEXT_BEGIN', () => {
    const action = { type: SEARCH_TEXT_BEGIN }

    expect(reducers({}, action).texts)
      .toEqual({ type: null, loading: true, response: null, error: null })
  })

  it('should handle SEARCH_TEXT_SUCCESS', () => {
    const id = faker.random.uuid()
    const response = { id }
    const action = { type: SEARCH_TEXT_SUCCESS, response }

    expect(reducers({}, action).texts)
      .toEqual({ type: SEARCH_TEXT_SUCCESS, loading: false, response, error: null })
  })

  it('should handle SEARCH_TEXT_FAILURE', () => {
    const error = Error()
    const action = { type: SEARCH_TEXT_FAILURE, error }

    expect(reducers({}, action).texts)
      .toEqual({ type: SEARCH_TEXT_FAILURE, loading: false, response: null, error })
  })

  it('should handle UPDATE_TEXT_BEGIN', () => {
    const action = { type: UPDATE_TEXT_BEGIN }

    expect(reducers({}, action).texts)
      .toEqual({ type: null, loading: true, response: null, error: null })
  })

  it('should handle UPDATE_TEXT_SUCCESS', () => {
    const id = faker.random.uuid()
    const response = { id }
    const action = { type: UPDATE_TEXT_SUCCESS, response }

    expect(reducers({}, action).texts)
      .toEqual({ type: UPDATE_TEXT_SUCCESS, loading: false, response, error: null })
  })

  it('should handle UPDATE_TEXT_FAILURE', () => {
    const error = Error()
    const action = { type: UPDATE_TEXT_FAILURE, error }

    expect(reducers({}, action).texts)
      .toEqual({ type: UPDATE_TEXT_FAILURE, loading: false, response: null, error })
  })

  it('should handle DELETE_TEXT_BEGIN', () => {
    const action = { type: DELETE_TEXT_BEGIN }

    expect(reducers({}, action).texts)
      .toEqual({ type: null, loading: true, response: null, error: null })
  })

  it('should handle DELETE_TEXT_SUCCESS', () => {
    const id = faker.random.uuid()
    const response = { id }
    const action = { type: DELETE_TEXT_SUCCESS, response }

    expect(reducers({}, action).texts)
      .toEqual({ type: DELETE_TEXT_SUCCESS, loading: false, response, error: null })
  })

  it('should handle DELETE_TEXT_FAILURE', () => {
    const error = Error()
    const action = { type: DELETE_TEXT_FAILURE, error }

    expect(reducers({}, action).texts)
      .toEqual({ type: DELETE_TEXT_FAILURE, loading: false, response: null, error })
  })
})
