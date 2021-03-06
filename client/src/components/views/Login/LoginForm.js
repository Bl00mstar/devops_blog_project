import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInUser } from '@store/user/user.actions';
import { divideText } from '@utils/textTemplates';
import { loadTitle } from '@store/action/action.actions';
import {
  StyledSpan,
  ErrorInput,
  StyledInput,
  StyledForm,
  MessageInfo,
  StyledDiv,
  Button,
} from './LoginStyling';

const ErrorVariants = {
  initial: { width: '1vw' },
  animate: { width: '80%', transition: { duration: 0.5 } },
  exit: { width: '1vw' },
};

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange' });
  const [isSent, setIsSent] = useState(false);
  const [topic] = useState('Login');
  const [loadingTitle, setLoadingTitle] = useState(true);
  const [renderedText, setRenderedText] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTitle({ title: 'Login', path: 'login', site: 'true' }));
  }, []);

  const onSubmit = (data, e) => {
    e.preventDefault();
    let { nick, password } = data;
    dispatch(logInUser({ nick, password }));
  };

  useEffect(() => {
    setLoadingTitle(false);
  }, [renderedText]);

  useEffect(() => {
    let titleValue = divideText(topic);
    setRenderedText((renderedText) => [...renderedText, titleValue]);
  }, [topic]);

  return (
    <>
      <div className="container">
        <StyledDiv>
          <StyledSpan
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
          >
            SIGN IN
          </StyledSpan>
        </StyledDiv>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {isSent && <MessageInfo>Message Sent!</MessageInfo>}
          <div>
            <StyledInput
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              placeholder="Nickname"
              type="text"
              autoComplete="off"
              name="nick"
              ref={register({
                required: true,
                minLength: 5,
              })}
            />
            {errors.nick && (
              <ErrorInput
                initial="initial"
                animate="animate"
                exit="exit"
                variants={ErrorVariants}
              />
            )}
          </div>
          <div>
            <StyledInput
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              placeholder="Password"
              type="password"
              autoComplete="off"
              name="password"
              ref={register({
                required: true,
                minLength: 5,
              })}
            />
            {errors.password && (
              <ErrorInput
                initial="initial"
                animate="animate"
                exit="exit"
                variants={ErrorVariants}
              />
            )}
          </div>
          <StyledDiv>
            <Button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              type="submit"
            >
              Login
            </Button>
          </StyledDiv>
        </StyledForm>
      </div>
    </>
  );
};

export default LoginForm;
