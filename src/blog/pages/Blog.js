import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogList from "../components/BlogList";

import { useHttpClient } from "../../shared/hooks/http-hook"
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";


const Blog = () => {

  const [loadedEntrys, setLoadedEntrys] = useState()
  const { isLoading, error, sendRequest, clearError } = useHttpClient()
  const userId = useParams().userId;

  useEffect(() => {
    const fetchEntrys = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/blog/user/${userId}`
        )
        setLoadedEntrys(responseData.blog)
      } catch (err) { }
    }
    fetchEntrys()
  }, [sendRequest, userId])

  const blogDeleteHandler = (deletedBlogId) => {
    setLoadedEntrys((prevBlogs) => prevBlogs.filter((blog) => blog.id !== deletedBlogId))
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedEntrys && (<BlogList items={loadedEntrys} onDeleteBlog={blogDeleteHandler} />)}

    </React.Fragment>)
};

export default Blog;
