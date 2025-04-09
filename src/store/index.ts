import { configureStore } from '@reduxjs/toolkit';
import sessionSlice from './slices/sessionSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      session: sessionSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
