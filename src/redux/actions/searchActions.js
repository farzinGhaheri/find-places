export const fetchSearchSuccess = (data) => ({
    type: 'FETCH_SEARCH_SUCCESS',
    payload: data,
  });
  
  export const fetchSearchFailure = (error) => ({
    type: 'FETCH_SEARCH_FAILURE',
    payload: error,
  });
  
  export const fetchSearch = (query) => ({
    type: 'FETCH_SEARCH',
    payload: query,
  });