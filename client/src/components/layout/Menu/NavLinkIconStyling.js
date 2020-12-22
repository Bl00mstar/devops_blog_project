import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import media from '@utils/media';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion.custom(NavLink);

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

export const StyledNavLink = styled(MotionLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.icon};
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.colors.active};
    > * {
      color: ${({ theme }) => theme.colors.active};
    }
  }
  &.active {
    color: ${({ theme }) => theme.colors.active};
    > * {
      color: ${({ theme }) => theme.colors.active};
    }
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.icon};
`;
