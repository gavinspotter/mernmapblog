import React from "react";
import { useParams } from "react-router-dom";
import FormHook from "../../shared/components/FormElements/FormHook";
import "./NewBlog.css";
import Card from "../../shared/components/UIElements/Card";
import FormInput from "../../shared/components/FormElements/FormInput";
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
  const indentifiedBlog = BLOG.find((b) => b.id === blogId);

  return (
    <Card>
      <form>
        <InputFormHook />
        <InputFormHook />
        <Button> update blog </Button>
      </form>
    </Card>
  );
};

export default UpdateBlog;
