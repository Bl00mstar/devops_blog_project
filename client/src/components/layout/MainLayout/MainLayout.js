import React from 'react';
import Menu from '../Menu/Menu';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '@utils/media';

const MainLayout = ({ children }) => (
  <MainContaier>
    <Menu />
    <StyledMain>{children}</StyledMain>
  </MainContaier>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

const MainContaier = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledMain = styled.main`
  padding-right: 20px;
  margin-top: 30px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.ground};
  color: ${({ theme }) => theme.light};
  ${media.xmedium`
    width: 80%;
   height:95%;
`}
  ${media.medium`
    width: 80%;
   height:100%;
`}
${media.tablet`
    width: 80%;
   height:100%;
`}
${media.small`
    width: 70%;
   height:100%;
`}
`;

export default MainLayout;
