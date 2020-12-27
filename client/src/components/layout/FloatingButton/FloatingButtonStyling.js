import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonColor = styled(motion.div)`
  background: ${({ theme }) => theme.font};
  transition: background 0.3s linear;
`;
