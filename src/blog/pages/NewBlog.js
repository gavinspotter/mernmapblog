import React, { useContext } from "react";
import { useHistory } from "react-router-dom"
import "./NewBlog.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "react-hook-form";
import InputFormHook from "../../shared/components/FormElements/InputFormHook";
import { useHttpClient } from "../../shared/hooks/http-hook"
import { AuthContext } from "../../shared/context/auth-context"
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const NewBlog = () => {
  const auth = useContext(AuthContext)
  const { isLoading, error, sendRequest, clearError } = useHttpClient()
  const { register, handleSubmit } = useForm();

  const history = useHistory()

  const onSubmit = async (data) => {

    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/blog",
        "POST",
        JSON.stringify({
          blgentry: data.duh,
          creator: auth.userId
        }),
        { "Content-Type": "application/json" }
      )

      history.push("/")
    } catch (err) {

    }


  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          {isLoading && <LoadingSpinner asOverlay />}
          <InputFormHook
            nam1="duh"
            valRef={register}
            label="description"
          />
          <Button> new blog entry </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default NewBlog;
