import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from '@utils/media';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(motion.header)`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  background: ${({ theme }) => theme.colors.primaryDark};
  transform: ${({ open }) => (open ? 'translateX(-100%)' : 'translateX(0)')};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
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
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

export const StyledList = styled(motion.li)`
  padding: 0.6rem 0;
  height: 4rem;
  display: flex;
  flex-direction: column;
  position: relative;
  ${media.tablet`
      padding: 0.6rem 1rem;
      align-items: center;
    `}
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
  transition: color 0.3s linear;
  text-decoration: none;
  font-size: 1.25em;
  margin: 1em;
  padding: 0.35em 2.5em;
  &.active {
    color: ${({ theme }) => theme.colors.active};
    > * {
      color: ${({ theme }) => theme.colors.active};
    }
  }
`;

export const StyleLi = styled(motion.div)`
  font-size: 1.25em;
  margin: 1.25em;
`;

export const MobileList = styled(motion.ul)`
  display: block;
`;

export const BurgerMenu = styled(motion.div)`
  position: absolute;
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
  z-index: 10;
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
