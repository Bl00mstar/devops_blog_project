import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Content = styled.div`
  display: none;
  ${(props) =>
    props.isOpen &&
    css`
      display: block;
    `};
`;

const Collapse = ({ children, isOpen }) => {
  return <Content isOpen={isOpen}>{children}</Content>;
};

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
};

Collapse.defaultProps = {
  isOpen: undefined,
};

export default Collapse;
