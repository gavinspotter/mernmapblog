import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import {useHttpClient} from "../../shared/hooks/http-hook"
import {AuthContext} from "../../shared/context/auth-context"

import "./NewBlog.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import InputFormHook from "../../shared/components/FormElements/InputFormHook";

const BLOG = [
  {
    id: "be1",
    blgimg: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Ra_Barque.jpg",
    blgentry: "this is my first blog post",
    creator: "ra",
  },
  {
    id: "be1",
    blgimg:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/The_judgement_of_the_dead_in_the_presence_of_Osiris.jpg",
    blgentry: "this is basically my first post",
    creator: "osiris",
  },
  {
    id: "be1",
    blgimg:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Set_speared_Apep.jpg",
    blgentry: "this is me seth's first entry",
    creator: "seth",
  },
];

const UpdateBlog = () => {
  const blogId = useParams().blogId;
  //const indentifiedBlog = BLOG.find((b) => b.id === blogId);
  const {loadedEntry, setLoadedEntry} = useState()
  const { register, handleSubmit } = useForm();
  const {isLoading, error, sendRequest, clearError} = useHttpClient()

  useEffect(()=> {

  }, [])
  
  
  const onSubmit = (data) => {
    
  };

  // if () {
  //   return (
  //     <div>
  //       <Card>
  //         <h2> could not find blog post </h2>
  //       </Card>
  //     </div>
  //   );
  // }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputFormHook
          nam1="duh"
          val1={indentifiedBlog.blgentry}
          element="editInput"
          valRef={register}
        />
      
        <Button> update blog </Button>
      </form>
    </Card>
  );
};

export default UpdateBlog;
