const initialState = {
    results: [],
    error: null,
  };
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SEARCH_SUCCESS':
        return {
          ...state,
          results: [...state.results, action.payload],
        };
      case 'FETCH_SEARCH_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;