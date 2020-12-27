import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { routes } from '../../../Routes';
import { faOldRepublic } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import { setMenuActiveTopic } from '@store/action/action.actions';
import MenuAuthenticated from './MenuAuthenticated';
import styled, { css } from 'styled-components';
import {
  Wrapper,
  StyledNavLinkTool,
  StyledList,
  MainIcon,
  BurgerMenu,
  StyledNavLink,
  MobileList,
  StyleLi,
  TopicContainer,
  ToolContainer,
  Body,
} from './MenuStyling';

import Collapse from '@containers/Menu/Collapse';
import HeaderCollapse from '@containers/Menu/HeaderCollapse';
import HeaderTool from '@containers/Menu/HeaderTool';

const Menu = ({ currentPath, toolPath, isMenuTopicActive }) => {
  useEffect(() => {}, [isMenuTopicActive]);

  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useMediaQuery({
    query: '(max-width: 780px)',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setIsOpen(true);
  }, [isMobile]);
  const toggle = () => setIsOpen(!isOpen);

  const handleNavLinkDB = (e, key, value) => {
    e.preventDefault();
    console.log(key);
    console.log(value);
  };

  let topicstools = {
    CICD: ['gsdfgsdf', 'gsdfgsdfg', 'sdfg'],
    tester: ['sadfasdf', 'asdfasd', 'fasdf', 'asdf'],
  };

  ///////////////////////////////////////////////////////
  ////////////APPEND ITEMS FROM DB TO MENU=SIDENAV///////
  ///////////////////////////////////////////////////////

  const [isActiveToolIndex, setActiveToolIndex] = useState(null);
  const [isActiveTopicName, setIsActiveTopicName] = useState('');

  const toogleTopic = (name) => {
    dispatch(setMenuActiveTopic(name));
    setIsActiveTopicName(isMenuTopicActive === name ? null : name);
  };

  const [activeTool, setActiveTool] = useState('');
  const toggleTool = (index) => {
    setActiveToolIndex(isActiveToolIndex === index ? null : index);
    setActiveTool(index);
  };

  const toolstopics = Object.entries(topicstools).map(([key, value], index) => {
    const checkTopicClicked = isActiveTopicName === key + index;
    return (
      <TopicContainer key={index}>
        <HeaderCollapse
          title={key}
          id={index}
          name={key + index}
          onClick={toogleTopic}
          active={isActiveTopicName}
        />
        <Body isOpen={checkTopicClicked}>
          {value.map((item, idx) => {
            const checkToolClicked = isActiveToolIndex === idx;
            return (
              <Collapse id={idx} isOpen={checkTopicClicked}>
                <ToolContainer key={idx}>
                  <HeaderTool
                    title={item}
                    id={idx}
                    onClick={toggleTool}
                    active={activeTool}
                  />
                </ToolContainer>
              </Collapse>
            );
          })}
        </Body>
      </TopicContainer>
    );
  });

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
                  <MobileList>
                    <MenuAuthenticated toogleTopic={toogleTopic} />
                  </MobileList>
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
              <a
                onClick={() => window.location.replace('/')}
                id="logo-container"
                className="brand-logo transparent center"
                style={{ padding: '2rem', cursor: 'pointer' }}
              >
                <object
                  style={{
                    width: '120px',
                    alignItems: 'center',
                    dispaly: 'flex',
                  }}
                  id="front-page-logo"
                  type="image/png"
                  data="./devopslogo.png"
                ></object>
              </a>
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <ul>
              <MenuAuthenticated toogleTopic={toogleTopic} />
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
  isMenuTopicActive: state.action.menu.active,
});

export default connect(mapStateToProps)(Menu);
