import React from 'react';
import { routes } from '../../../Routes';
import { connect } from 'react-redux';
import { StyledNavLink, StyleLi } from './MenuStyling';

const MenuAuthenticated = ({ isUserAuthenticated, toogleTopic }) => {
  if (isUserAuthenticated) {
    return routes.map(({ description, path, type }, key) => {
      if (type === 'public' || type === 'private')
        return (
          <StyleLi key={key}>
            <StyledNavLink onClick={toogleTopic(description + key)} to={path}>
              {description}
            </StyledNavLink>
          </StyleLi>
        );
    });
  }

  return routes.map(({ description, path, type }, key) => {
    if (type === 'public')
      return (
        <StyleLi key={key}>
          <StyledNavLink
            onClick={() => toogleTopic(description + key)}
            to={path}
          >
            {description}
          </StyledNavLink>
        </StyleLi>
      );
  });
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(MenuAuthenticated);
