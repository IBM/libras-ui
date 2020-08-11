import * as textsAPI from '../../api/texts'

export const DELETE_TEXT_BEGIN = 'DELETE_TEXT_BEGIN'
export const DELETE_TEXT_SUCCESS = 'DELETE_TEXT_SUCCESS'
export const DELETE_TEXT_FAILURE = 'DELETE_TEXT_FAILURE'

export const deleteTextBegin = () => ({ type: DELETE_TEXT_BEGIN })
export const deleteTextSuccess = response => ({ type: DELETE_TEXT_SUCCESS, response })
export const deleteTextFailure = error => ({ type: DELETE_TEXT_FAILURE, error })

export function deleteText (id) {
  return dispatch => {
    dispatch(deleteTextBegin())
    return textsAPI.remove(id)
      .then(response => {
        dispatch(deleteTextSuccess(response))
        return response
      })
      .catch(error => dispatch(deleteTextFailure(error)))
  }
}
