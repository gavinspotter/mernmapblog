import React from "react";
import FormHook from "../../shared/components/FormElements/FormHook";
import "./NewBlog.css";
import Card from "../../shared/components/UIElements/Card";
import FormInput from "../../shared/components/FormElements/FormInput";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "react-hook-form";
const NewBlog = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="title" element="input" nam1="hi" valRef={register} />
        <FormInput label="description" nam1="hello" valRef={register} />
        <Button> new blog entry </Button>
      </form>
    </Card>
  );
};

export default NewBlog;
