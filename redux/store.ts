import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import userReducer from "./features/user/userSlice"
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"
// import storage from "./utils";

const persistConfig = {
    key: "root",
    storage
}

const combinedReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

const persistedReducer = persistReducer(persistConfig, combinedReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: true
})

export const persistor = persistStore(store)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
