const kanbanReducer = (state, action) => {
    switch (action.type) {
      case 'LOAD_STATE':
        return { ...state, ...action.payload };
  
      case 'CHANGE_GROUPING':
        return { ...state, groupingOption: action.payload };
  
      case 'CHANGE_SORTING':
        return { ...state, sortingOption: action.payload };

      default:
        return state;
    }
  };
  
  export { kanbanReducer };
  