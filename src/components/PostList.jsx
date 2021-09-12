import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Нет посто1в</h1>;
  }
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem
              remove={remove}
              number={index + 1}
              key={post.id}
              post={post}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default PostList;
