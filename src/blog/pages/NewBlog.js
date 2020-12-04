import React, { useContext, useState } from "react";
import "./NewBlog.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "react-hook-form";
import InputFormHook from "../../shared/components/FormElements/InputFormHook";
import {useHttpClient} from "../../shared/hooks/http-hook"
import {AuthContext} from "../../shared/context/auth-context"

const NewBlog = () => {
  const auth = useContext(AuthContext)
  const { isLoading, error, sendRequest, clearError} = useHttpClient()
  const { register, handleSubmit } = useForm();
  const [newEntry, setNewEntry] = useState();
  const onSubmit = async (data) => {
    
    try {
      await sendRequest(
        "http://localhost:5000/api/blog",
        "POST",
        JSON.stringify({
          blgentry: data.duh
        }), 
        {"Content-Type": "application/json"}
      )
      
    } catch (err) {
      
    }
    
    
    console.log();
    setNewEntry("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        
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
