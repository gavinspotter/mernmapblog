import React, { useContext } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

const NewEntry = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      date: {
        value: "",
        isValid: false,
      },
      entry: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const journalSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        "http://localhost:500/api/journal",
        "POST",
        JSON.stringify({
          date: formState.inputs.date.value,
          entry: formState.inputs.entry.value,
        }),
        { "Content-Type": "application/json" }
      );
    } catch (err) {}
  };

  return (
    <form className="place-form" onSubmit={journalSubmitHandler}>
      <Input
        id="date"
        element="input"
        type="text"
        label="date"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid title"
        onInput={inputHandler}
      />
      <Input
        id="entry"
        element="textarea"
        label="entry"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a valid description (5 characters)"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        add entry
      </Button>
    </form>
  );
};

export default NewEntry;
