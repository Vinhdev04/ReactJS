import React, { useEffect, useState } from "react";
function BlogAll(props) {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPost(data.posts);
        // console.log(post.posts);
      });
  });
  console.log(posts);

  return (
    <div>
      <h2>Danh sách các bài post:</h2>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogAll;
