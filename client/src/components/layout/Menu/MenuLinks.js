import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  Wrapper,
  StyledNavLinkTool,
  MainIcon,
  BurgerMenu,
  StyledNavLink,
  MobileList,
  StyleLi,
} from './MenuStyling';

export default function MenuLinks({ topic, tools, num }) {
  const [changeBackground, setChangeBackground] = useState(false);

  return (
    <StyleLi>
      <StyledNavLinkDatabase
        className={changeBackground && 'hover'}
        onMouseOver={() => setChangeBackground(true)}
        onMouseOut={() => setChangeBackground(false)}
        onClick={() => {}}
      >
        {topic}
      </StyledNavLinkDatabase>
      <StyleContent></StyleContent>
    </StyleLi>
  );
}

const StyledNavLinkDatabase = styled(motion.a)`
  color: ${({ theme }) => theme.colors.icon};
  background: ${({ theme }) => theme.colors.primaryDark};
  transition: all 0.9s;
  display: block;
  text-decoration: none;
  font-size: 1.25em;
  padding: 0em 1em;
  cursor: pointer;
  padding: 15px;
  marginbottom: 0;
  &.hover {
    background: ${({ theme }) => theme.colors.backgroundIcon};
  }
  &.active {
    background: ${({ theme }) => theme.colors.backgroundIcon};
  }

  a {
    margin: 0;
  }
`;

const StyleContent = styled.div`
  opacity: ${({ open }) => (open ? '1' : '0')};
  max-height: ${({ open }) => (open ? '100%' : '0')};
  overflow: hidden;
  padding: ${({ open }) => (open ? '15px' : '0 15px')};
  border-top: none;
  transition: all 0.2s;
`;
