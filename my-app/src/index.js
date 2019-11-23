import React from 'react';
import ReactDOM from 'react-dom';
import {persistStore, persistReducer} from 'redux-persist';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import storageSession from 'redux-persist/lib/storage/session';
import {PersistGate} from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {createStore} from 'redux';
import rootReducer from './reducers';
import devToolsEnhancer from 'remote-redux-devtools';
let initialStore = {
};
const storageConfig = {
        key: 'root', 
        storage:storageSession, 
        blacklist: ['username','password', 'email', 'breakfast','lunch','dinner','calendar'
                            ,'monday', 'tuesday', 'wednesday', 'thursday', 'friday']
    }
const myPersistReducer = persistReducer(storageConfig, rootReducer);
const store = createStore(myPersistReducer, devToolsEnhancer());
const persistor = persistStore(store);
ReactDOM.render(
        <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                        <App />
                 </PersistGate>
        </Provider>, 
        document.getElementById('root'));

serviceWorker.unregister();
