import React from "react";
import FormHook from "../../shared/components/FormElements/FormHook";
import "./NewBlog.css";
import Card from "../../shared/components/UIElements/Card";
import FormInput from "../../shared/components/FormElements/FormInput";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "react-hook-form";
const NewBlog = () => {
  const { register, handleSubmit } = useForm();
  return (
    <Card>
      <form>
        <FormInput element="input" element="input" nam1="hi" />
        <FormInput />
        <Button type="submit"></Button>
      </form>
    </Card>
  );
};

export default NewBlog;
