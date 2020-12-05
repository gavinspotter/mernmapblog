import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import {useHttpClient} from "../../shared/hooks/http-hook"
import {AuthContext} from "../../shared/context/auth-context"

import "./NewBlog.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import InputFormHook from "../../shared/components/FormElements/InputFormHook";



const UpdateBlog = () => {
  const auth = useContext(AuthContext)
  const blogId = useParams().blogId;
  //const indentifiedBlog = BLOG.find((b) => b.id === blogId);
  const [loadedEntry, setLoadedEntry] = useState()
  const { register, handleSubmit } = useForm();
  const {isLoading, error, sendRequest, clearError} = useHttpClient()

  const history = useHistory()

  useEffect(()=> {
    const fetchEntry = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/blog/${blogId}`
        )
        setLoadedEntry(responseData.blog.blgentry)
      } catch (err) {
        
      }
    }
    fetchEntry()
  }, [sendRequest, blogId])
  
  
  const onSubmit = async (data) => {
    try {
      await sendRequest(
        `http://localhost:5000/api/blog/${blogId}`,
        "PATCH",
        JSON.stringify({
          blgentry: data.duh
        }),
        {
          "Content-Type": "application/json",
        }
      )
      history.push("/" + auth.userId + "/blog")
    } catch (err) {
      
    }
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
          val1={loadedEntry}
          element="editInput"
          valRef={register}
        />
      
        <Button> update blog </Button>
      </form>
    </Card>
  );
};

export default UpdateBlog;
