import media from '@utils/media';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  font-size: 1rem;
  letter-spacing: 3px;
  line-height: 2.5rem;
  display: block;
  text-align: center;
  border: 1px solid #6a5acd;
  color: #6a5acd;
  background-color: transparent;
  border-radius: 0.2rem;
  width: 10rem;
  height: 2.5rem;
  margin-top: 3rem;
  cursor: pointer;
  transition: all 1s;
  background-size: 200%;
  background-position: 100% 0;
  background-image: linear-gradient(45deg, #6a5acd 50%, transparent 50%);
  :focus {
    outline: none;
  }
  :hover {
    background-position: 0 100%;
    color: ${({ theme }) => theme.ground};
  }
`;

export const MessageInfo = styled.p`
  color: green;
`;

export const MotionSpan = styled(motion.span)`
  display: inline-block;
  font-size: 4rem;
  color: ${({ theme }) => theme.active};
  ${media.tablet`
  font-size: 3rem;
  `}
`;

export const StyledForm = styled.form`
  padding: 4;
  padding: 5rem;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 780px) and (max-width: 1024px) {
    padding: 0;
  }
  ${media.small`
    padding: 4rem;
  `}
`;

export const StyledDiv = styled(motion.div)`
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const StyledSpan = styled(motion.div)`
  justify-content: center;
  font-size: 3rem;
`;

export const StyledInput = styled(motion.input)`
  background-color: ${({ theme }) => theme.form};
  color: ${({ theme }) => theme.icon};
  border: 1px solid ${({ theme }) => theme.form};
  ::placeholder {
    color: ${({ theme }) => theme.icon};
  }
  :focus {
    outline: none;
    color: ${({ theme }) => theme.error};
    ::placeholder {
      color: transparent;
    }
  }
`;

export const ErrorInput = styled(motion.div)`
  height: 2px;
  background-color: ${({ theme }) => theme.error};
`;
