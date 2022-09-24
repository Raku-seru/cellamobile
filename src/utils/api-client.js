import {store} from '../stores';
import {setUser, setUserGeo, setUserShift} from '../stores/actions/userAction';
import {fetchie, KEY} from './common';
import Snackbar from 'react-native-snackbar';
import {
  setAttendance,
  setAttendanceLoading,
  setAttendanceShift,
  setAttendanceType,
} from '../stores/actions/attendanceAction';

export function checkUserSession() {
  const state = store.getState();
  const data = new FormData();
  data.append('session_id', state.user.session);

  const opts = {
    method: 'post',
    body: data,
  };
  fetchie('/mlogincheck', opts, onSuccess);

  /**
   * @param {object} data
   */
  function onSuccess(data) {
    if (data.isvalid !== 'valid') {
      Snackbar.show({
        text: 'Your session has expired!',
      });
      store.dispatch(setUser({}));
    }
  }
}

export function getUserShift() {
  const state = store.getState();

  const data = new FormData();
  data.append('username', state.user.data.user_nik);

  const opts = {
    method: 'post',
    body: data,
  };

  return new Promise((resolve, reject) => {
    fetchie('/mlogininfo', opts, onSuccess, reject);

    function onSuccess(data) {
      if (data.isvalid == 'valid') {
        const response = data.data[0];
        const shiftData = response.employee_shift;
        const currentShiftAttendance = response.employee_absence;

        let userShift = {
          name: shiftData.shift_name,
          startLimit: shiftData.shift_start_time_limit,
          start: shiftData.shift_start_time,
          end: shiftData.shift_finish_time,
          endLimit: shiftData.shift_finish_time_limit,
          breakHour: shiftData.shift_middle_time,
          shiftActive: shiftData.shift_active_day,
        };

        // Dummy
        // let userShift = {
        //   name: 'Dummy Shift',
        //   startLimit: '00:01',
        //   start: '09:30',
        //   end: '12:00',
        //   endLimit: '23:59',
        // };

        /* const breakHour = getShiftBreakHour({
          timeStart: userShift.start,
          timeEnd: userShift.end,
          isCrossingDay: shiftData.shift_cross_day,
        }); */

        /* const limitHour = getLimitHour({
          timeStart: userShift.startLimit,
          timeEnd: userShift.endLimit,
          isCrossingDay: shiftData.shift_cross_day,
        }); */

        // userShift = {...userShift, breakHour: breakHour, limitHour: limitHour};

        const userOfficeGeo = getArrayGeo(shiftData?.user_office_geo);
        if (userOfficeGeo.length > 0) store.dispatch(setUserGeo(userOfficeGeo));
        store.dispatch(setUserShift(userShift));
        resolve(getCurrentShiftAttendance(currentShiftAttendance));
      }
    }
  });

  // function setupShift(userShift) {
  //   const currentDate = getLocalDateTime();
  //   const currentDateInString = formatDate(currentDate);

  //   const shiftStartLimit = new Date(
  //     `${currentDateInString} ${userShift.startLimit}:00`,
  //   );
  //   const shiftStart = new Date(`${currentDateInString} ${userShift.start}`);

  //   const _shiftStart = new Date(shiftStart.getTime());

  //   const shiftBreakHour = new Date(
  //     _shiftStart.setHours(_shiftStart.getHours() + userShift.breakHour),
  //   );

  //   const isNotRoundHour = new RegExp(/\./, 'ig').test(userShift.breakHour);
  //   if (isNotRoundHour) {
  //     const decimalHour = userShift.breakHour.toString().split('.').pop();
  //     shiftBreakHour.setMinutes(shiftBreakHour.getMinutes() + decimalHour * 6);
  //   }

  //   const actualBreakHour = new Date(
  //     `${currentDateInString} ${shiftBreakHour.getUTCHours()}:${shiftBreakHour.getUTCMinutes()}:00`,
  //   );

  //   const shiftEnd = new Date(
  //     _shiftStart.setHours(_shiftStart.getHours() + userShift.breakHour),
  //   );

  //   const shiftEndLimit = new Date(
  //     `${currentDateInString} ${userShift.endLimit}:00`,
  //   );

  //   return {
  //     name: userShift.name,
  //     startLimit: shiftStartLimit,
  //     start: shiftStart,
  //     end: shiftEnd,
  //     endLimit: shiftEndLimit,
  //     breakHour: shiftBreakHour,
  //     actualBreakHour: actualBreakHour,
  //   };
  // }

  // function getShiftBreakHour({timeStart, timeEnd, isCrossingDay}) {
  //   let diffInMilliSeconds =
  //     Math.abs(
  //       new Date(`2020-01-01 ${timeStart}`) -
  //         new Date(`2020-01-${isCrossingDay == '1' ? '02' : '01'} ${timeEnd}`),
  //     ) / 1000;

  //   const workHour = Math.floor(diffInMilliSeconds / 3600) % 24;
  //   const breakHour = workHour / 2;

  //   return breakHour;
  // }

  // function getLimitHour({timeStart, timeEnd, isCrossingDay}) {
  //   let diffInMilliSeconds =
  //     Math.abs(
  //       new Date(`2020-01-01 ${timeStart}`) -
  //         new Date(`2020-01-${isCrossingDay == '1' ? '02' : '01'} ${timeEnd}`),
  //     ) / 1000;

  //   const hourLimit = Math.floor(diffInMilliSeconds / 3600) % 24;

  //   return hourLimit;
  // }

  function getCurrentShiftAttendance(data) {
    return {
      in: data ? data.absence_in ?? '-' : '-',
      out: data ? data.absence_out ?? '-' : '-',
    };
  }

  /**
   * Return the array list of lat long goe fence
   *
   * @param {String} json json string geo fence
   */
  function getArrayGeo(json) {
    const result = [];

    if (!json) return result;
    const arrayJson = JSON.parse(json);
    if (!arrayJson.coordinates) return result;

    const arrCoordinates = arrayJson.coordinates;
    for (var coord of arrCoordinates) {
      coord.forEach((coor) => {
        result.push({latitude: coor[0], longitude: coor[1]});
      });
      break;
    }

    return result;
  }
}

/**
 * @param {Number} month
 * @param {Number} year
 */
export function getAttendaceReportArray(month = null, year = null) {
  const state = store.getState();
  let dateStart, dateEnd;

  if (month == null) {
    dateStart = '2020-06-01';
    dateEnd = '2020-06-30';
  } else {
    month = month < 10 ? '0' + month : month;
    dateStart = `${year}-${month}-01`;
    dateEnd = `${year}-${month}-31`;
  }

  const data = new FormData();
  data.append('username', state.user.data.user_nik);
  data.append('date_start', dateStart);
  data.append('date_end', dateEnd);

  const opts = {
    method: 'post',
    body: data,
  };
  fetchie('/mloginreport', opts, onSuccess, onError);

  function onSuccess(data) {
    if (data.isvalid == 'valid') {
      let attendanceReportArray = [];

      const result = data.data[0];
      const resultDates = Object.keys(result);

      resultDates.forEach((date) => {
        const reportObj = {
          ...result[date],
          date: date,
        };
        attendanceReportArray.push(reportObj);
      });

      store.dispatch(setAttendance(attendanceReportArray));
      store.dispatch(setAttendanceLoading(false));
    }
  }

  function onError() {
    store.dispatch(setAttendanceLoading(false));
  }
}

/**
 * @param {String} type
 * @param {Number} month
 * @param {Number} year
 */
export function getDashbordDetail(type, month = null, year = null) {
  const state = store.getState();
  let dateStart, dateEnd;

  if (month == null) {
    dateStart = '2020-06-01';
    dateEnd = '2020-06-30';
  } else {
    month = month < 10 ? '0' + month : month;
    dateStart = `${year}-${month}-01`;
    dateEnd = `${year}-${month}-31`;
  }

  const data = new FormData();
  data.append('username', state.user.data.user_nik);
  data.append('date_start', dateStart);
  data.append('date_end', dateEnd);
  data.append('method', type);

  const opts = {
    method: 'post',
    body: data,
  };

  return new Promise((resolve, reject) => {
    fetchie('/mlogindashboarddetail', opts, onSuccess, onError);

    function onSuccess(data) {
      if (data.isvalid == 'valid') {
        const result = data.data[0];
        const resultsKeys = Object.keys(result);
        let dashboardDetailsArray = [];

        resultsKeys.forEach((keys) => {
          if (keys == type) {
            let peoples = Object.keys(result[keys]);

            var arrayDataLabel = [];
            peoples.forEach((ppl) => {
              let dateData = [];

              let dates = Object.keys(result[keys][ppl]);
              dates.forEach((date) => {
                if (result[keys][ppl][date] != null) {
                  if (type == 'not_yet_absent') {
                    result[keys][ppl][date] = {
                      ...result[keys][ppl][date],
                      absence_date: date,
                    };
                  }
                  dateData.push(result[keys][ppl][date]);
                }
              });

              arrayDataLabel.push({nip: ppl, data: dateData});
            });

            dashboardDetailsArray = arrayDataLabel;
          }
        });

        resolve(dashboardDetailsArray);
      } else {
        reject(data.message);
      }
    }

    function onError(err) {
      resolve(err);
    }
  });
}

export function refreshUserData() {
  const state = store.getState();

  const data = new FormData();
  data.append('username', state.user.data.user_nik);

  const opts = {
    method: 'post',
    body: data,
  };

  fetchie('/mlogininfo', opts, onSuccess, onError);

  function onSuccess(data) {
    if (data.isvalid == 'valid') {
      const userData = data.data[0];
      store.dispatch(setUser(userData.employee_data));
    }
  }

  function onError() {}
}

export function getVaccineList() {
  const state = store.getState();
  const data = new FormData();
  data.append('username', state.user.data.user_nik);
  data.append('user_code', state.user.data.user_code);

  const opts = {
    method: 'post',
    body: data,
  };

  return new Promise((resolve, reject) => {
    fetchie('/mlistvaccination', opts, onSuccess, reject);

    /**
     * @param {object} data
     */
    function onSuccess(data) {
      if (data.isvalid == 'valid') {
        resolve(data.data[0]);
      }
    }
  });
}

export function getPaySlipList() {
  const state = store.getState();
  const data = new FormData();
  data.append('username', state.user.data.user_nik);
  data.append('user_code', state.user.data.user_code);

  const opts = {
    method: 'post',
    body: data,
  };

  return new Promise((resolve, reject) => {
    fetchie('/mlistslipgaji', opts, onSuccess, reject);

    /**
     * @param {object} data
     */
    function onSuccess(data) {
      if (data.isvalid == 'valid') {
        // check if empty
        if (Array.isArray(data.data[0])) {
          resolve([]);
        } else {
          const slipDataObj = data.data[0];
          const resultSlipInArray = [];

          Object.keys(slipDataObj).map((key) => {
            resultSlipInArray.push(slipDataObj[key]);
          });

          resolve(resultSlipInArray);
        }
      }
    }
  });
}

function getShiftReference() {
  const opts = {
    method: 'post',
    cache: 'force-cache',
  };

  return new Promise((resolve, reject) => {
    fetchie('/mlistshift', opts, onSuccess, reject);

    /**
     * @param {object} data
     */
    function onSuccess(data) {
      if (data.isvalid == 'valid') {
        store.dispatch(setAttendanceShift(data.data[0]));
        resolve(data.data[0]);
      }
    }
  });
}

export async function getShiftRequestList() {
  const state = store.getState();
  const data = new FormData();
  data.append('username', state.user.data.user_nik);
  data.append('user_code', state.user.data.user_code);

  const opts = {
    method: 'post',
    body: data,
  };

  let shiftReference = await getShiftReference();

  return new Promise((resolve, reject) => {
    fetchie('/mlistrequestshift', opts, onSuccess, reject);

    /**
     * @param {object} data
     */
    function onSuccess(data) {
      if (data.isvalid == 'valid') {
        var results = data.data[0];

        results.map((res) => {
          res.request_shift_name = shiftReference[res.request_shift_id];
        });

        resolve(results);
      }
    }
  });
}

export async function getManualAbsenceList() {
  const state = store.getState();
  const data = new FormData();
  data.append('username', state.user.data.user_nik);
  data.append('user_code', state.user.data.user_code);

  const opts = {
    method: 'post',
    body: data,
  };

  let absenceTypeReference = await getReferensi('listAbsenceType');
  store.dispatch(setAttendanceType(absenceTypeReference));

  return new Promise((resolve, reject) => {
    fetchie('/mlistmanualabsence', opts, onSuccess, reject);

    /**
     * @param {object} data
     */
    function onSuccess(data) {
      if (data.isvalid == 'valid') {
        var results = data.data[0];

        results.map((res) => {
          absenceTypeReference.map((absenceRef) => {
            if (absenceRef.key == res.absence_manual_type) {
              res.absence_manual_name = absenceRef.value;
            }
          });

          res.time = '';

          if (res?.absence_manual_in) {
            res.time = res?.absence_manual_in?.substr(0, 5);
          }

          if (res?.absence_manual_out && res?.absence_manual_in) {
            res.time += ' & ';
          }

          if (res?.absence_manual_out) {
            res.time += res?.absence_manual_out?.substr(0, 5);
          }
        });

        resolve(results);
      }
    }
  });
}

export function getNewsList() {
  const state = store.getState();
  const data = new FormData();
  data.append('username', state.user.data.user_nik);
  data.append('user_code', state.user.data.user_code);

  const opts = {
    method: 'post',
    body: data,
  };

  return new Promise((resolve, reject) => {
    fetchie('/mlistnews', opts, onSuccess, reject);

    /**
     * @param {object} data
     */
    function onSuccess(data) {
      if (data.isvalid == 'valid') {
        resolve(data.data);
      }
    }
  });
}

/**
 *
 * @param {string} refName Referensi Name
 * @returns
 */
export function getReferensi(refName) {
  const opts = {
    method: 'post',
  };

  return new Promise((resolve, reject) => {
    fetchie(
      `/mreferensi${KEY}?referensi=${refName}`,
      opts,
      onSuccess,
      reject,
      true,
    );

    /**
     * @param {object} data
     */
    function onSuccess(data) {
      if (data.isvalid == 'valid') {
        const newArrData = [];
        const responseData = data.data[0];

        Object.keys(responseData).forEach((key) => {
          newArrData.push({
            key: key,
            value: responseData[key],
          });
        });

        resolve(newArrData);
      }
    }
  });
}
