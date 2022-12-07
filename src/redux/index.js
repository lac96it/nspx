import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reduxBatch } from '@manaflair/redux-batch';
import { rootReducer } from './rootReducer';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-community/async-storage';

const middleware = [
    ...getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
        thunk: true
    })
];

const persistConfig = {
    key: 'authType',
    storage: AsyncStorage,
    whitelist: ['auth', 'location', 'settings']
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: pReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [reduxBatch]
});

/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */

export const persistor = persistStore(store);

export default store;