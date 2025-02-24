import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackToPage from "../../components/BackToPage";
function BlogDetails(props) {
  //TODO khai báo hook[useParams] -> lấy ra các tham số
  const params = useParams();
  console.log(params);
  const [post, setPost] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPost(data);
      });
  }, []);
  console.log(post);

  return (
    <div>
      <BackToPage />
      <h1>Blog Details</h1>
      {post && (
        <>
          <p>{post.title}</p>
          <div>{post.body}</div>
        </>
      )}
    </div>
  );
}
export default BlogDetails;
