import React from 'react';

import Login from '@views/Login';
import Home from '@views/Home';
import About from '@views/About';
import Settings from '@views/Settings';

export const routes = [
  { description: 'Home', path: '/', element: <Home /> },
  {
    description: 'Login',
    path: '/login',
    element: <Login />,
    type: 'none',
  },
  {
    description: 'About',
    path: '/About',
    element: <About />,
    type: 'public',
  },
  {
    description: 'Settings',
    path: '/settings',
    element: <Settings />,
    type: 'private',
  },
  //   {
  //     name: 'Logout',
  //     path: '/logout',
  //     element: <div>Logout</div>,
  //     type: 'private',
  //   },
  {
    description: '404',
    path: '*',
    element: <div>404</div>,
    type: 'none',
  },
];

export default routes;
