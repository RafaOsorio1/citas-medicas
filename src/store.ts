import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { appointmentsSlice } from './features/slices/Appointments';
  


export const store = configureStore({
  reducer:{
    appointmentsPatient: appointmentsSlice.reducer
  }
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
