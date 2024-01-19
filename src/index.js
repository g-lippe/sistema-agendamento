import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './componentes/routes/home';
import LoginPage from './componentes/routes/loginPage';
import Calendar from './componentes/routes/calendar';
import Settings from './componentes/routes/settings'
import ErrorPage from './componentes/routes/errorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/loginPage",
        element: <LoginPage/>
      },
      {
        path: "/calendar",
        element: <Calendar/>
      },
      {
        path: "/settings",
        element: <Settings/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);