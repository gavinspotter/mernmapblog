import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
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

  if (!identifiedJournal) {
    return (
      <div>
        <h2> could not find place </h2>
      </div>
    );
  }

  return (
    <form className="journal-form">
      <Input
        id="entry"
        element="textarea"
        label="journal entry"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="enter valid journal entry"
        onInput={() => {}}
        value={identifiedJournal.entry}
        valid={true}
      />
      <Input
        id="date"
        element="input"
        type="text"
        label="date"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="enter valid date"
        onInput={() => {}}
        value={identifiedJournal.date}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        update journal{" "}
      </Button>
    </form>
  );
};

export default UpdateEntry;
