import React from "react";

import { useParams } from "react-router-dom";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";

import JournalList from "../components/JournalList";

const Journal = () => {
  const userId = useParams().userId;

  return <JournalList items={loadedEntrys} />;
};

export default Journal;
