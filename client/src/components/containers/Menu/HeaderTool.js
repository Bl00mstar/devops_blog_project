import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.button`
  color: ${({ theme }) => theme.colors.icon};
  background: ${({ theme }) => theme.colors.primaryDark};
  transition: all 0.9s;
  border: none;
  cursor: pointer;
  font-size: 1.25em;
  width: 100%;
  //   &:active {
  //     background: ${({ theme }) => theme.colors.icon};
  //   }
  &:hover {
    color: ${({ theme }) => theme.colors.error};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.error};
    background: ${({ theme }) => theme.colors.primaryLight};
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
