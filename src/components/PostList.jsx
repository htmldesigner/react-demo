import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => (
  <div>
    <h2 style={{ textAlign: "center" }}>{title}</h2>
    {posts.map((post, index) => (
      <PostItem remove={remove} number={index + 1} key={post.id} post={post} />
    ))}
  </div>
);

export default PostList;
