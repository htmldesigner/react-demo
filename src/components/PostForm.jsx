import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    if (post.title.length && post.body.length) {
      create(newPost);
      setPost({ title: "", body: "" });
    }
  };

  return (
    <form>
      <MyInput
        type="text"
        value={post.title}
        onChange={(ev) => {
          setPost({ ...post, title: ev.target.value });
        }}
        placeholder="title"
      />
      <MyInput
        value={post.body}
        type="text"
        onChange={(ev) => {
          setPost({ ...post, body: ev.target.value });
        }}
        placeholder="description"
      />
      <MyButton onClick={addNewPost}>Отправить</MyButton>
    </form>
  );
};

export default PostForm;
