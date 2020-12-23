import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { routes } from '../../../Routes';
import { faOldRepublic } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import {
  Wrapper,
  StyledNavLinkTool,
  MainIcon,
  BurgerMenu,
  StyledNavLink,
  MobileList,
  StyleLi,
  StyledNavLinkDatabase,
  StyleContent,
} from './MenuStyling';

import MenuLinks from './MenuLinks';

const Menu = ({ isUserAuthenticated, currentPath, toolPath }) => {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useMediaQuery({
    query: '(max-width: 780px)',
  });

  useEffect(() => {
    setIsOpen(true);
  }, [isMobile]);
  const toggle = () => setIsOpen(!isOpen);

  let possibleRoutes;

  if (isUserAuthenticated) {
    possibleRoutes = routes.map(({ description, path, type }, key) => {
      if (type === 'public' || type === 'private')
        return (
          <StyleLi key={key}>
            <StyledNavLink to={path}>{description}</StyledNavLink>
          </StyleLi>
        );
      return <></>;
    });
  } else {
    possibleRoutes = routes.map(({ description, path, type }, key) => {
      if (type === 'public' || type === 'auth')
        return (
          <StyleLi key={key}>
            <StyledNavLink to={path}>{description}</StyledNavLink>
          </StyleLi>
        );
      return <></>;
    });
  }

  const handleNavLinkDB = (e, key, value) => {
    e.preventDefault();
    console.log(key);
    console.log(value);
  };

  let topicstools = {
    CICD: ['gsdfgsdf', 'gsdfgsdfg', 'sdfg'],
    tester: ['sadfasdf', 'asdfasd', 'fasdf', 'asdf'],
  };

  const toolstopics = Object.entries(topicstools).map(([key, value]) => (
    <MenuLinks topic={key} tools={value} />
  ));

  return (
    <div>
      {isMobile && (
        <>
          <BurgerMenu onClick={toggle} open={isOpen}>
            <span />
            <span />
            <span />
          </BurgerMenu>
          <Wrapper open={isOpen}>
            <AnimatePresence>
              {isOpen && (
                <>
                  <MobileList>{possibleRoutes}</MobileList>
                </>
              )}
            </AnimatePresence>
          </Wrapper>
        </>
      )}
      {!isMobile && (
        <Wrapper
          initial={{ x: '-50vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <ul>
              <StyleLi>
                <StyledNavLink to="/">
                  <MainIcon icon={faOldRepublic} />
                </StyledNavLink>
              </StyleLi>
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <ul>
              {possibleRoutes}
              {toolstopics}
            </ul>
          </motion.div>
        </Wrapper>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  toolPath: state.action.path.selectedPath,
  currentPath: state.action.route.path,
  topicstools: state.blog.topics.tools,
  isUserLoading: state.user.isLoading,
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Menu);
