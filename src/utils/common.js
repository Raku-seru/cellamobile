import {Dimensions, Platform, Image} from 'react-native';
import {getTimeZone} from 'react-native-localize';
import moment from 'moment-timezone';
import Config from 'react-native-config';

const timezone = getTimeZone();
const common = {
  BASE_URL: 'http://devhris.kopertare.com',
  API: 'http://devhris.kopertare.com/rest',
  KEY: '/kqlrorHRPRHQiqUTUQKR',

  MONTH_ITEMS_OPTION: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],

  /**
   *
   * @param {String} uri uri end point to webservice
   * @param {Object} options
   * @param {Function} success callback function
   * @param {Function} error callback function
   */
  fetchie(uri, options, success, error, removeKey = false) {
    const opts = Object.assign(options);

    fetch(common.API + uri + (removeKey ? '' : common.KEY), opts)
      .then((res) =>
        res.json().then((data) => ({data: data, status: res.status})),
      )
      .then((object) => {
        // console.log('---', uri, options, object)
        const {data, status} = object;

        if (status === 200 || status === 201) {
          if (typeof success === 'function') {
            success(data);
          }
        } else {
          if (typeof error === 'function') {
            if (data.error && typeof data.message === 'string') {
              error(data.message);
            } else {
              error(null);
            }
          }
        }
      })
      .catch((ex) => {
        if (typeof error === 'function') {
          error('ERROR');
        }
        console.log('ERROR', uri, ex);
      });
  },

  urls(string, url) {
    if (url) {
      if (string.startsWith('http')) {
        const urla = string.split('/');
        const urls = string.split('/').splice(3, urla.length);
        urls[1] = urls[1] = urls[1] + 's';

        return '/' + urls.toString().replace(/,/g, '/');
      }

      return string;
    }

    const strung = String(string);
    return strung
      .trim()
      .replace(/[^\w\s/]+/gi, '')
      .replace(/[\s]+/g, '-')
      .toLowerCase();
  },

  prices(prefix, price) {
    return (
      !isNaN(price) &&
      (prefix ? prefix + ' ' : '') +
        Math.round(price)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    );
  },

  sanitizer(string) {
    return string && string.replace(/<p>&nbsp;<\/p>/gi, '');
  },

  isObjectExist(obj) {
    return obj && Object.getOwnPropertyNames(obj).length > 0;
  },

  objectToArray(obj) {
    return obj && Object.keys(obj).map((key) => obj[key]);
  },

  isMobile() {
    return navigator.userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i,
    );
  },

  isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    );
  },

  isLetter(letter) {
    return /^[a-zA-Z\s]+$/.test(letter);
  },

  isNumber(number) {
    return /^[0-9\b]+$/.test(number);
  },

  isPhone(number) {
    return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
      number,
    );
  },

  isIphoneX() {
    const w = Dimensions.get('window');
    return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      (w.height === 812 ||
        w.width === 812 ||
        w.height === 896 ||
        w.width === 896)
    );
  },

  caseToTitle(string) {
    return (
      string &&
      string.replace(
        /\w\S*/g,
        (text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase(),
      )
    );
  },

  throttle(fn, wait) {
    let time = Date.now();
    return () => {
      if (time + (wait || 800) - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  },

  debounce(fn, delay, ...arg) {
    let timer = null;
    return function () {
      const context = this;
      const args = arg;

      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay || 200);
    };
  },

  deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = common.isObject(val1) && isObject(val2);
      if (
        (areObjects && !deepEqual(val1, val2)) ||
        (!areObjects && val1 !== val2)
      ) {
        return false;
      }
    }

    return true;
  },

  isObject(object) {
    return object != null && typeof object === 'object';
  },

  /**
   * @param {Date} date
   */
  formatDate(date) {
    if (!date) date = common.getLocalDateTime();

    return moment(date).tz(timezone).format('YYYY-MM-DD');
  },
  
  /**
   * @param {Date} date
   */
  formatTime(date) {
    if (!date) date = common.getLocalDateTime();

    return moment(date).tz(timezone).format('HH:mm');
  },

  /**
   * @param {Date} date
   */
  getDateToStringReadable(date) {
    if (!date) date = common.getLocalDateTime();

    return moment(date).format('DD MMMM YYYY');
  },

  getLocalDateTime() {
    let currentDate = moment().tz(timezone).format();

    return currentDate;
  },

  getFormatDateTime(strDateTime) {
    const parseDate = moment(strDateTime).tz(timezone).format();
    return parseDate;
  },

  /**
   *
   * @param {Object} file object
   */
  resizeImage(file) {
    const ImageResizer = require('react-native-image-resizer').default;
    const fileType =
      String(file.type).split('/')[1].toLowerCase() == 'jpg'
        ? 'JPEG'
        : String(file.type).split('/')[1].toUpperCase();

    return new Promise((resolve) => {
      Image.getSize(file.uri, (width, height) => {
        ImageResizer.createResizedImage(
          file.uri,
          width * 0.5,
          height * 0.5,
          fileType,
          80,
          0,
        ).then((result) => {
          if (parseFloat(result.size / 1000).toFixed(2) > 500) {
            // 500kb
            file.fileName = result.name;
            file.fileSize = result.size;
            file.uri = result.uri;

            resolve(common.resizeImage(file));
          } else {
            const fileUri =
              Platform.OS === 'android'
                ? result.uri
                : result.uri.replace('file://', '/private');

            let fileName = fileUri.split('/');
            fileName = fileName[fileName.length - 1];

            resolve({
              uri: fileUri,
              name: fileName,
              type: file.type,
            });
          }
        });
      });
    });
  },

  clearCaches() {
    const RNFS = require('react-native-fs');

    RNFS.readDir(RNFS.CachesDirectoryPath).then((result) => {
      result.map((item) => {
        if (new RegExp(/camera/i).exec(item.name) && item.isDirectory()) {
          // remove camera cache
          RNFS.unlink(item.path);
        } else if (
          // remove image file cache
          new RegExp(/\.jpg|\.jpeg/i).exec(item.name) &&
          item.isFile()
        ) {
          RNFS.unlink(item.path);
        }
      });
    });
  },
};

module.exports = common;
