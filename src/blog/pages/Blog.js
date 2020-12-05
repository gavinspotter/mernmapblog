import React from "react";
import { useParams } from "react-router-dom";
import BlogList from "../components/BlogList";

const Blog = () => {

  const userId = useParams().userId;
  
  // return <BlogList items={loadedEntrys} />;
};

export default Blog;
