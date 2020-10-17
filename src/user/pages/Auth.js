import React from "react";

import Card from "../../shared/components/UIElements/Card";

import "./Auth.css";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/components/FormElements/Button";
const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  return (
    <Card className="authentication">
      <h2>login required</h2>
      <hr />
      <form>
        <Input
          element="input"
          id="email"
          type="email"
          label="email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="please enter a valid email address"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="please enter a valid email address"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          login
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
