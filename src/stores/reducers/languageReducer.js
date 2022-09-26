import languages from 'assets/languages'

function language(state = { data: { language: 'en', languages: languages } }, action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        data: { language: action.data, languages: languages }
      }
    default:
      return state
  }
}

export default language
