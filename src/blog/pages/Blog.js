import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogList from "../components/BlogList";

import {useHttpClient} from "../../shared/hooks/http-hook"
import ErrorModal from "../../shared/components/UIElements/ErrorModal";

const Blog = () => {

  const [loadedEntrys, setLoadedEntrys] = useState()
  const {isLoading, error, sendRequest, clearError} = useHttpClient()
  const userId = useParams().userId;
  
  useEffect(()=> {
    const fetchEntrys = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/blog/user/${userId}`
        )
        setLoadedEntrys(responseData.blog)
      } catch (err) {
        
      }
      fetchEntrys()
    
    }
  }, [sendRequest, userId])

  return (
  <React.Fragment>
    <ErrorModal error={error} onClear={clearError}/>
  <BlogList items={loadedEntrys} />
  </React.Fragment>)
};

export default Blog;
