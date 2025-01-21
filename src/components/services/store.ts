import { configureStore } from "@reduxjs/toolkit";
import AllReducer from "./reducers";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {api} from "./apiSlice"

const persistConfig = {
  key: "Kao_persist",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, AllReducer);

export const store = configureStore({
	reducer: {
    persistedReducer,
    [api.reducerPath]: api.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
	}).concat(api.middleware)
});

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export const UseAppDispach: () => typeof store.dispatch = useDispatch;