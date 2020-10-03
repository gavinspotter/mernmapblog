import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "./Button";

const FormHook = () => {
  const [value, setValue] = useState();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>blog entry</label>
      <br />
      <textarea name="blgentry" ref={register} value={value} />
      <br />
      <label> blog image </label>
      <br />
      <textarea name="blgimg" ref={register} value={value} />
      <br />
      <Button>submit</Button>
    </form>
  );
};

export default FormHook;
