import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BlogList from "../components/BlogList";

import {useHttpClient} from "../../shared/hooks/http-hook"

const Blog = () => {

  const [loadedEntrys, setLoadedEntrys] = useState()
  const userId = useParams().userId;
  

  // return <BlogList items={loadedEntrys} />;
};

export default Blog;
