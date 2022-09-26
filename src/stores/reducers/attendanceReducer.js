function attendance(state = {data: {}}, action) {
  switch (action.type) {
    case 'SET_ATTENDANCE':
      return {
        ...state,
        data: action.data,
      };
    case 'SET_ATTENDANCE_LOADING':
      return {
        ...state,
        attendanceLoading: action.bool
      };
    case 'SET_ATTENDANCE_SHIFT':
      return {
        ...state,
        shifts: action.data
      };
    case 'SET_ATTENDANCE_TYPE':
      return {
        ...state,
        types: action.data
      };
    default:
      return state;
  }
}

export default attendance;
