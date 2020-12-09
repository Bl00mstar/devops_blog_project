import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { logInUser } from "../../store/user/user.actions";
import Error from "../Alert/Error";

import Button from "../Button/Button";
import InputForm from "../Input/InputForm";

import { loadTitle } from "../../store/action/action.actions";

export default function LoginForm() {
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState("disabled");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTitle({ title: "Login", path: "login", site: "true" }));
  }, []);

  useEffect(() => {
    if (nick.length !== 0 && password.length !== 0) {
      setDisabled("");
    } else {
      setDisabled("disabled");
    }
  }, [nick, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser({ nick, password }));
  };

  return (
    <div className='valign'>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m6 offset-m3'>
            <Error />
            <div className='card'>
              <div className='card-content'>
                <form onSubmit={handleSubmit}>
                  <InputForm
                    label={"login-nick"}
                    name={"username"}
                    type={"text"}
                    onChange={(e) => setNick(e.target.value)}
                  />
                  <InputForm
                    label={"login-password"}
                    name={"password"}
                    type={"password"}
                    autocomplete='current-password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className='card-action center'>
                    <Button
                      type={"submit"}
                      value={"login"}
                      disabled={disabled}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
