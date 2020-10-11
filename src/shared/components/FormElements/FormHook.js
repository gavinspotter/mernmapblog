import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "./Button";

const FormHook = (props) => {
  const [value, setValue] = useState();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setValue("");
  };

  const editData = () => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>blog entry</label>
      <br />
      <textarea name={props.nam1} ref={register} value={value || props.val1} />
      <br />
      <label> blog image </label>
      <br />
      <textarea name={props.nam2} ref={register} value={value || props.val2} />
      <br />
      <Button>submit</Button>
    </form>
  );
};

export default FormHook;
