import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

const FormHook = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="blgentry" ref={register} />
      <input name="blgimg" ref={register} />
      <Button>submit</Button>
    </form>
  );
};

export default FormHook;
