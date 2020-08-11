import * as textsAPI from '../../api/texts'

export const LIST_TEXTS_BEGIN = 'LIST_TEXTS_BEGIN'
export const LIST_TEXTS_SUCCESS = 'LIST_TEXTS_SUCCESS'
export const LIST_TEXTS_FAILURE = 'LIST_TEXTS_FAILURE'

export const listTextsBegin = () => ({ type: LIST_TEXTS_BEGIN })
export const listTextsSuccess = response => ({ type: LIST_TEXTS_SUCCESS, response })
export const listTextsFailure = error => ({ type: LIST_TEXTS_FAILURE, error })

export function listTexts () {
  return dispatch => {
    dispatch(listTextsBegin())
    return textsAPI.list()
      .then(response => {
        dispatch(listTextsSuccess(response))
        return response
      })
      .catch(error => dispatch(listTextsFailure(error)))
  }
}
