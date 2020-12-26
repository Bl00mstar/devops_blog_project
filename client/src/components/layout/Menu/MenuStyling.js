import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from '@utils/media';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(motion.header)`
  background: ${({ theme }) => theme.colors.primaryDark};
  transform: ${({ open }) => (open ? 'translateX(-100%)' : 'translateX(0)')};
  height: 100vh;
  width: 20vh;
  top: 0;
  border: 1px solid;
  text-align: left;
  transition: transform 0.3s ease-in-out;

  @media (min-width: ${({ theme }) => theme.colors.mobile}) {
    position: sticky;
    height: 100vh;
  }

  @media (max-width: 780px) {
    background: ${({ theme }) => theme.colors.primaryDark};
    position: fixed;
    display: block;
    z-index: 1;
  }
  a {
    font-weight: bold;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryLight};
    }
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.icon};
`;

export const MainIcon = styled(StyledFontAwesomeIcon)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.active};
`;

export const RefLinks = styled(StyledFontAwesomeIcon)`
  :hover {
    color: ${({ theme }) => theme.colors.active};
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.icon};
  transition: all 0.9s linear;
  text-decoration: none;
  font-size: 1.25em;
  display: block;
  width: 100%;
  padding: 0.25em 1em;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }
  &.active {
    color: ${({ theme }) => theme.colors.active};
  }
`;

export const StyleLi = styled(motion.li)`
  // padding: 15px;
  // marginbottom: 0;
`;

export const StyleContent = styled.div`
  opacity: ${({ open }) => (open ? '1' : '0')};
  max-height: ${({ open }) => (open ? '100%' : '0')};
  overflow: hidden;
  padding: ${({ open }) => (open ? '15px' : '0 15px')};
  border-top: none;
  transition: all 0.2s;
`;

export const MobileList = styled(motion.ul)`
  display: block;
`;

export const Body = styled.div`
  ${(props) =>
    props.isOpen &&
    css`
      padding: 0px;
    `}
`;

export const TopicContainer = styled.div``;

export const ToolContainer = styled.div``;

export const BurgerMenu = styled(motion.div)`
  position: fixed;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.colors.active : theme.colors.active};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(0)' : 'rotate(45deg)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '1' : '0')};
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(20px)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(0)' : 'rotate(-45deg)')};
    }
  }
`;
