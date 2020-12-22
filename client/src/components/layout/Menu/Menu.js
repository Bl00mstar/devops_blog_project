import React, { useEffect, useState } from 'react';
import { routes } from '../../../Routes';
import { faGgCircle } from '@fortawesome/free-brands-svg-icons';
import NavLinkIcon from './NavLinkIcon';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import {
  Wrapper,
  StyledList,
  StyledFontAwesomeIcon,
  MainIcon,
  RefLinks,
  BurgerMenu,
  StyledNavLink,
  MobileList,
  StyleLi,
} from './MenuStyling';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useMediaQuery({
    query: '(max-width: 780px)',
  });

  useEffect(() => {
    setIsOpen(true);
  }, [isMobile]);

  const elementsMobile = routes.map(({ description, path }, key) => {
    return (
      <StyleLi>
        <StyledNavLink
          to={path}
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {description}
        </StyledNavLink>
      </StyleLi>
    );
  });

  const elementsLargeScreen = routes.map(
    ({ icon, description, path, type }, key) => {
      return (
        <StyleLi>
          <StyledNavLink to={path}>{description}</StyledNavLink>
        </StyleLi>
      );
    }
  );
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
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
                  <MobileList>{elementsMobile}</MobileList>
                </>
              )}
            </AnimatePresence>
          </Wrapper>
        </>
      )}
      {!isMobile && (
        <Wrapper
          initial={{ x: '-1vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <StyleLi>
            <StyledNavLink
              to="/"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              asd
            </StyledNavLink>
          </StyleLi>

          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ul>{elementsLargeScreen}</ul>
          </motion.div>
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <ul>
              <StyledList>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Bl00mstar"
                >
                  {/* <RefLinks icon={faGithub} /> */}
                </a>
              </StyledList>
            </ul>
          </motion.div>
        </Wrapper>
      )}
    </>
  );
};

export default Menu;
