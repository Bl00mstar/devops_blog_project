import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from '@utils/media';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(motion.header)`
  width: 220px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.menu};
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
  }
  > div {
    padding: 2rem 0;
    ${media.tablet`
      padding: 0;
  `}
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0 0;
    text-align: center;
    ${media.tablet`
      display: flex;
    `}
  }
  ${media.tablet`
    flex-direction: row-reverse;
    width: 100vw;
    height: 90px;
     position: fixed;
  `}
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

export const BurgerMenu = styled(motion.div)`
  width: 3rem;
  cursor: pointer;
  height: 2rem;
  text-align: center;
  margin-right: 1rem;
  :hover {
    > * {
      background: ${({ theme }) => theme.colors.active};
    }
  }
  span {
    margin-top: 0.4rem;
    display: block;
    width: 100%;
    border-radius: 2px;
    height: 0.2rem;
    background: #fff;
  }
`;

export const MobileList = styled(motion.ul)`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
`;
