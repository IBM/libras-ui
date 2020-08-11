import * as textsAPI from '../../api/texts'

export const RETRIEVE_TEXT_BEGIN = 'RETRIEVE_TEXT_BEGIN'
export const RETRIEVE_TEXT_SUCCESS = 'RETRIEVE_TEXT_SUCCESS'
export const RETRIEVE_TEXT_FAILURE = 'RETRIEVE_TEXT_FAILURE'

export const retrieveTextBegin = () => ({ type: RETRIEVE_TEXT_BEGIN })
export const retrieveTextSuccess = response => ({ type: RETRIEVE_TEXT_SUCCESS, response })
export const retrieveTextFailure = error => ({ type: RETRIEVE_TEXT_FAILURE, error })

export function retrieveText (id) {
  return dispatch => {
    dispatch(retrieveTextBegin())
    return textsAPI.retrieve(id)
      .then(response => {
        dispatch(retrieveTextSuccess(response))
        return response
      })
      .catch(error => dispatch(retrieveTextFailure(error)))
  }
}
