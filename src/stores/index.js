import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import reducers from './reducers'

const persistConfig = {
  key: 'kopertare',
  storage: AsyncStorage,
  blacklist: ['language']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)
