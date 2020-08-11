import * as textsAPI from '../../api/texts'

export const UPDATE_TEXT_BEGIN = 'UPDATE_TEXT_BEGIN'
export const UPDATE_TEXT_SUCCESS = 'UPDATE_TEXT_SUCCESS'
export const UPDATE_TEXT_FAILURE = 'UPDATE_TEXT_FAILURE'

export const updateTextBegin = () => ({ type: UPDATE_TEXT_BEGIN })
export const updateTextSuccess = response => ({ type: UPDATE_TEXT_SUCCESS, response })
export const updateTextFailure = error => ({ type: UPDATE_TEXT_FAILURE, error })

export function updateText (id) {
  return dispatch => {
    dispatch(updateTextBegin())
    return textsAPI.update(id)
      .then(response => {
        dispatch(updateTextSuccess(response))
        return response
      })
      .catch(error => dispatch(updateTextFailure(error)))
  }
}
