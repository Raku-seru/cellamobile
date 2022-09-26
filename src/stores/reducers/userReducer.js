function user(state = {data: {}}, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        data: action.data,
      };
    case 'SET_USER_SESSION':
      return {
        ...state,
        session: action.data,
      };
    case 'SET_USER_GEO':
      return {
        ...state,
        geo: action.data,
      };
    case 'SET_USER_SHIFT':
      return {
        ...state,
        shift: action.data,
      };
    default:
      return state;
  }
}

export default user;
