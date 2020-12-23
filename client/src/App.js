import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './Routes';
import { useDispatch } from 'react-redux';

import MainLayout from '@layout/MainLayout/MainLayout';

import { AnimatePresence } from 'framer-motion';
import Content from './components/views/Shared/Content';

import { getUser } from '@store/user/user.actions';
import { getPosts, getTopicsTools } from '@store/blog/blog.actions';
import { loadPath } from '@store/action/action.actions';

const App = () => {
  const dispatch = useDispatch();
  const element = useRoutes(routes);
  console.log(routes);
  const { val } = useRoutes(routes);

  useEffect(() => {
    dispatch(loadPath());
    dispatch(getUser());
    dispatch(getTopicsTools());
    dispatch(getPosts());
  }, []);

  return (
    <MainLayout>
      <AnimatePresence exitBeforeEnter>
        <Content val={val} layoutElement={element} />
      </AnimatePresence>
    </MainLayout>
  );
};

export default App;
