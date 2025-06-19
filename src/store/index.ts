import { configureStore } from '@reduxjs/toolkit';
import sessionSlice from './slices/sessionSlice';
import citySlice from './slices/citySlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      session: sessionSlice,
      cities: citySlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
