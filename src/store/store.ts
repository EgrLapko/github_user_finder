import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer/usersSlice";
import userReducer from "./reducers/userReducer/userSlice";
import userRepos from "./reducers/userReposReducer/userReposSlice";

const rootReducer = combineReducers({ usersReducer, userReducer, userRepos });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
