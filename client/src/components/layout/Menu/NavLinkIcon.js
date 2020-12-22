import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import {
  StyledList,
  StyledNavLink,
  StyledFontAwesomeIcon,
} from './NavLinkIconStyling';

const NavLinkIcon = ({ icon, description, to }) => {
  const [isHover, setHover] = useState(false);

  const changeHoverStatus = () => setHover(!isHover);

  return (
    <StyledList
      onMouseEnter={changeHoverStatus}
      onMouseLeave={changeHoverStatus}
    >
      <AnimatePresence exitBeforeEnter>
        {!isHover ? (
          <StyledNavLink
            key="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            to={to}
            exit={{ opacity: 0, duration: 0.2 }}
          >
            <StyledFontAwesomeIcon icon={icon} />
          </StyledNavLink>
        ) : (
          <StyledNavLink
            key="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            to={to}
            exit={{ opacity: 0, duration: 0.2 }}
          >
            <p>{description}</p>
          </StyledNavLink>
        )}
      </AnimatePresence>
    </StyledList>
  );
};

NavLinkIcon.propTypes = {
  icon: PropTypes.object,
  description: PropTypes.node,
  path: PropTypes.node,
};

export default NavLinkIcon;
