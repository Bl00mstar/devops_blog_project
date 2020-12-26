import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.a`
  color: ${({ theme }) => theme.colors.icon};
  background: ${({ theme }) => theme.colors.primaryDark};
  cursor: pointer;
  display: block;
  border: none;
  font-size: 1.25em;
  padding: 0.25em 1em;
  transition: all 0.9s;
  width: 100%;
  &.active {
    color: ${({ theme }) => theme.colors.active};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.icon};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const Wrapper = styled.span`
  align-items: center;
  display: flex;
  //   justify-content: space-between;
`;

const Header = ({ title, onClick, id, active }) => {
  const handleClick = (e) => {
    e.preventDefault();
    let name = e.target.name;
    onClick(title + id);
    console.log(e);
    console.log(id);
    console.log(name);
    console.log(active);
  };

  return (
    <Item
      onClick={(e) => handleClick(e)}
      name={title + id}
      className={title + id === active && 'active'}
    >
      <Wrapper>{title}</Wrapper>
    </Item>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Header;
