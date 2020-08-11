import * as textsAPI from '../../api/texts'

export const CREATE_TEXT_BEGIN = 'CREATE_TEXT_BEGIN'
export const CREATE_TEXT_SUCCESS = 'CREATE_TEXT_SUCCESS'
export const CREATE_TEXT_FAILURE = 'CREATE_TEXT_FAILURE'

export const createTextBegin = () => ({ type: CREATE_TEXT_BEGIN })
export const createTextSuccess = response => ({ type: CREATE_TEXT_SUCCESS, response })
export const createTextFailure = error => ({ type: CREATE_TEXT_FAILURE, error })

export function createText (text) {
  return dispatch => {
    dispatch(createTextBegin())
    return textsAPI.create(text)
      .then(response => {
        dispatch(createTextSuccess(response))
        return response
      })
      .catch(error => dispatch(createTextFailure(error)))
  }
}
