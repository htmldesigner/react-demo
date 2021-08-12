import React, {useState} from "react";
import PostList from "./components/PostList";
import './styles/App.css'
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Content1', desc: 'description1'},
    {id: 2, title: 'Content2', desc: 'description2'},
    {id: 3, title: 'Content3', desc: 'description3'}

  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length
      ? <PostList remove={removePost} posts={posts} title='Список'/>
      : <h1 style={{textAlign: 'center'}}>Нет постов</h1>
      }

    </div>
  );
}

export default App;
