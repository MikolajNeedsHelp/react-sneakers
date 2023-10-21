import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'macro-css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FavoritesPage from './Favorites';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/favorites',
    element: <FavoritesPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

reportWebVitals();
