import * as textsAPI from '../../api/texts'

export const SEARCH_TEXT_BEGIN = 'SEARCH_TEXT_BEGIN'
export const SEARCH_TEXT_SUCCESS = 'SEARCH_TEXT_SUCCESS'
export const SEARCH_TEXT_FAILURE = 'SEARCH_TEXT_FAILURE'

export const searchTextBegin = () => ({ type: SEARCH_TEXT_BEGIN })
export const searchTextSuccess = response => ({ type: SEARCH_TEXT_SUCCESS, response })
export const searchTextFailure = error => ({ type: SEARCH_TEXT_FAILURE, error })

export function searchText (query) {
  return dispatch => {
    dispatch(searchTextBegin())
    return textsAPI.search(query)
      .then(response => {
        dispatch(searchTextSuccess(response))
        return response
      })
      .catch(error => dispatch(searchTextFailure(error)))
  }
}
