export function setAttendance(data) {
  return {
    type: 'SET_ATTENDANCE',
    data: data,
  };
}

export function setAttendanceLoading(bool) {
  return {
    type: 'SET_ATTENDANCE_LOADING',
    bool,
  };
}

export function setAttendanceShift(data) {
  return {
    type: 'SET_ATTENDANCE_SHIFT',
    data,
  };
}

export function setAttendanceType(data) {
  return {
    type: 'SET_ATTENDANCE_TYPE',
    data,
  };
}
