import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './Routes';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import MainLayout from '@layout/MainLayout/MainLayout';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import Content from './components/views/Shared/Content';

import { getUser } from '@store/user/user.actions';
import { getPosts, getTopicsTools } from '@store/blog/blog.actions';
import { loadPath } from '@store/action/action.actions';

import { lightTheme, darkTheme } from '@theme/Theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/GlobalStyle';

const App = ({ themeMode, checkSelectedTheme }) => {
  const dispatch = useDispatch();
  const element = useRoutes(routes);
  const { val } = useRoutes(routes);

  useEffect(() => {
    // checkSelectedTheme();
    dispatch(loadPath());
    dispatch(getUser());
    dispatch(getTopicsTools());
    dispatch(getPosts());
  }, []);
  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <MainLayout>
        <AnimatePresence exitBeforeEnter>
          <Content val={val} layoutElement={element} />
        </AnimatePresence>
      </MainLayout>
    </ThemeProvider>
  );
};

App.propTypes = {
  themeMode: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  themeMode: state.action.menu.darkMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    checkSelectedTheme: () => dispatch({ type: 'LOAD_THEME' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
