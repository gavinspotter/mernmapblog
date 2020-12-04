import React, { useContext, useState } from "react";
import "./NewBlog.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "react-hook-form";
import InputFormHook from "../../shared/components/FormElements/InputFormHook";
import {AuthContext} from "../../shared/context/auth-context"

const NewBlog = () => {
  const auth = useContext(AuthContext)
  const { register, handleSubmit } = useForm();
  const [newEntry, setNewEntry] = useState();
  const onSubmit = (data) => {
    console.log(data);
    setNewEntry("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputFormHook
          valRef={register}
          valu1={newEntry}
          label="title"
          nam1="sup"
        />
        <InputFormHook
          nam1="duh"
          valRef={register}
          valu1={newEntry}
          label="description"
        />
        <Button> new blog entry </Button>
      </form>
    </Card>
  );
};

export default NewBlog;
