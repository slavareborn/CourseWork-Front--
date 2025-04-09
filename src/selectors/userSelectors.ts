import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectUserState = (state: RootState) => state.session;

export const animalsSelector = createSelector(
  [selectUserState],
  (userState) => userState.user,
);

export const usersLoadingSelector = createSelector(
  [selectUserState],
  (userState) => userState.loading,
);
