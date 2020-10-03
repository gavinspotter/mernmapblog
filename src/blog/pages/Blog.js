import React from "react";
import { useParams } from "react-router-dom";
import BlogList from "../components/BlogList";

const Blog = () => {
  const BLOG = [
    {
      id: "be1",
      blgimg:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Ra_Barque.jpg",
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

  const userId = useParams().userId;
  const loadedEntrys = BLOG.filter((entry) => entry.creator === userId);
  return <BlogList items={loadedEntrys} />;
};

export default Blog;
