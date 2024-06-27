// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./authSlice";

// const store = configureStore({
// 	reducer: authSlice,
// });
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

// Configuration for redux-persist
const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

const persistor = persistStore(store);

export { store, persistor };
