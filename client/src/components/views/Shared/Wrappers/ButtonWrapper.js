import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import media from '@utils/media';
import PropTypes from 'prop-types';
import FloatingButton from '@layout/FloatingButton';

export default function ButtonWrapper() {
  return (
    <Wrapper>
      <FloatingButton />
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  position: fixed;
  right: 23px;
  bottom: 23px;
  margin-bottom: 23px;
  z-index: 3 px;
`;
