import React from 'react';
import ComponentWrapper from './Wrappers/ComponentWrapper';

const Content = ({ layoutElement }) => {
  return (
    <>
      <ComponentWrapper>{layoutElement}</ComponentWrapper>
    </>
  );
};

export default Content;
