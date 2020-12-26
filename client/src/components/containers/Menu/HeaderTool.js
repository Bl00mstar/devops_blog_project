import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.a`
  color: ${({ theme }) => theme.font};
  background: ${({ theme }) => theme.menu};
  transition: all 0.9s;
  display: block;
  border: none;
  cursor: pointer;
  font-size: 1.25em;
  padding: 0.25em 2em;
  margin: 1px;
  width: 100%;
  &.active {
    background: ${({ theme }) => theme.menu};
    color: ${({ theme }) => theme.active};
  }
  &:hover {
    background: ${({ theme }) => theme.ulActive};
  }
`;

const Header = ({ title, onClick, id, active }) => {
  const handleClick = (event) => {
    onClick(id);
  };

  return (
    <Item onClick={handleClick} className={id === active && 'active'}>
      {title}
    </Item>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Header;
