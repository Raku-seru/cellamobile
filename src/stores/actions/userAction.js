export function setUser(data) {
  return {
    type: 'SET_USER',
    data: data,
  };
}

export function setUserSession(data) {
  return {
    type: 'SET_USER_SESSION',
    data,
  };
}

export function setUserGeo(data) {
  return {
    type: 'SET_USER_GEO',
    data,
  };
}

export function setUserShift(data) {
  return {
    type: 'SET_USER_SHIFT',
    data,
  };
}
