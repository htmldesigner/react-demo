import React, {useState} from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css'

function App() {

  const [posts, setProps] = useState([
    {id: 1, title: 'Content1', desc: 'description1'},
    {id: 2, title: 'Content2', desc: 'description2'},
    {id: 3, title: 'Content3', desc: 'description3'}

  ])

  return (
    <div className="App">
      <PostList posts={posts} title='Список'/>
    </div>
  );
}

export default App;
