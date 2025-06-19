import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// Reducers will be imported here
// import authReducer from './slices/authSlice';
// import ideasReducer from './slices/ideasSlice';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // ideas: ideasReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;