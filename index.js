/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import {name as appName} from './app.json';
import { store, persistor } from './src/stores/';

const Root = () => {
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
}

AppRegistry.registerComponent(appName, () => App);
