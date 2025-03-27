// import React, { ReactElement } from 'react';
// import { render, RenderOptions } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { configureStore } from '@reduxjs/toolkit';
// import type { RootState } from '../../store';

// // Import your reducers here once available
// // import authReducer from '../../store/slices/authSlice';

// // Create a custom renderer that includes providers
// export function renderWithProviders(
//   ui: ReactElement,
//   {
//     preloadedState = {},
//     store = configureStore({
//       reducer: {
//         // Add your reducers here once available
//         // auth: authReducer,
//       },
//       preloadedState,
//     }),
//     ...renderOptions
//   }: {
//     preloadedState?: Partial<RootState>;
//     store?: ReturnType<typeof configureStore>;
//     renderOptions?: Omit<RenderOptions, 'wrapper'>;
//   } = {},
// ) {
//   function Wrapper({ children }: { children: React.ReactNode }) {
//     return (
//       <Provider store={store}>
//         <BrowserRouter>{children}</BrowserRouter>
//       </Provider>
//     );
//   }

//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
// }
