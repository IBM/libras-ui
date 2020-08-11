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

export default function product (state = initialState, action) {
  switch (action.type) {
    case CREATE_TEXT_BEGIN:
    case RETRIEVE_TEXT_BEGIN:
    case LIST_TEXTS_BEGIN:
    case SEARCH_TEXT_BEGIN:
    case UPDATE_TEXT_BEGIN:
    case DELETE_TEXT_BEGIN:
      return { ...state, loading: true, error: null }

    case CREATE_TEXT_SUCCESS:
    case RETRIEVE_TEXT_SUCCESS:
    case LIST_TEXTS_SUCCESS:
    case SEARCH_TEXT_SUCCESS:
    case UPDATE_TEXT_SUCCESS:
    case DELETE_TEXT_SUCCESS:
      return { ...state, type: action.type, loading: false, response: action.response }

    case CREATE_TEXT_FAILURE:
    case RETRIEVE_TEXT_FAILURE:
    case LIST_TEXTS_FAILURE:
    case SEARCH_TEXT_FAILURE:
    case UPDATE_TEXT_FAILURE:
    case DELETE_TEXT_FAILURE:
      return { ...state, type: action.type, loading: false, response: null, error: action.error }

    default:
      return state
  }
}
