import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./JournalForm.css";
const JOURNAL = [
  {
    id: "j1",
    date: "aug 25",
    entry: "my first journal entry",
    creator: "u1",
  },
  {
    id: "j1",
    date: "aug 25",
    entry: "my first journal entry",
    creator: "u2",
  },
  {
    id: "j2",
    date: "aug 25",
    entry: "my second journal entry",
    creator: "u1",
  },
];

const UpdateEntry = () => {
  const journalId = useParams().journalId;
  const identifiedJournal = JOURNAL.find((j) => j.id === journalId);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedJournal.entry,
        isValid: true,
      },
      description: {
        value: identifiedJournal.date,
        isValid: true,
      },
    },
    true
  );

  const journalUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedJournal) {
    return (
      <div>
        <h2> could not find place </h2>
      </div>
    );
  }

  return (
    <form className="journal-form" onSubmit={journalUpdateSubmitHandler}>
      <Input
        element="textarea"
        label="journal entry"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="enter valid journal entry"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        element="input"
        type="text"
        label="date"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="enter valid date"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        update journal{" "}
      </Button>
    </form>
  );
};

export default UpdateEntry;
