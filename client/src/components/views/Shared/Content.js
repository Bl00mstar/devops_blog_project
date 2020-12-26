import React from 'react';
import ComponentWrapper from './Wrappers/ComponentWrapper';
import ButtonWrapper from './Wrappers/ButtonWrapper';

const Content = ({ layoutElement }) => {
  return (
    <>
      <ComponentWrapper>
        {layoutElement}
        <ButtonWrapper />
      </ComponentWrapper>
    </>
  );
};

export default Content;
