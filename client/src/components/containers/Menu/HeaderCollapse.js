import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.a`
  color: ${({ theme }) => theme.font};
  background: ${({ theme }) => theme.menu};
  cursor: pointer;
  display: block;
  border: none;
  font-size: 1.25em;
  padding: 0.25em 1em;
  transition: all 0.9s;
  width: 100%;
  &.active {
    background: ${({ theme }) => theme.ulActive};
  }
  &:hover {
    background: ${({ theme }) => theme.ulActive};
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
