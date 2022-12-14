import { store } from './';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ThunkAction, Action } from '@reduxjs/toolkit';

export type IRootstateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

///  Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootstateType> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootstateType,
  unknown,
  Action<string>
>;
