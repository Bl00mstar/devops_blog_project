import React from 'react';

import Login from '@views/Login';
import Home from '@views/Home';
import About from '@views/About';
import Settings from '@views/Settings';

export const routes = [
  { description: 'Home', path: '/', element: <Home /> },
  { description: 'Login', path: '/Login', element: <Login /> },
  { description: 'About', path: '/About', element: <About /> },
  {
    description: 'Settings',
    path: '/settings',
    element: <Settings />,
  },
  { description: '404', path: '*', element: <div>404</div> },
];

export default routes;
