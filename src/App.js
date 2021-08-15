import React, {useState} from "react";
import PostList from "./components/PostList";
import './styles/App.css'
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'aa', desc: 'rr'},
    {id: 2, title: 'dd', desc: 'ss'},
    {id: 3, title: 'zz', desc: 'vv'}

  ])

    const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
      setSelectedSort(sort)
      console.log(selectedSort)
      setPosts([...posts].sort((a, b) => {return a[sort].localeCompare(b[sort])}))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px'}}/>
      <div>
        <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue='Сотрировка'
            options={[
                {value: 'title', name: 'по названию'},
                {value: 'desc', name: 'по описанию'}
            ]}>
        </MySelect>
      </div>
      {posts.length
      ? <PostList remove={removePost} posts={posts} title='Список'/>
      : <h1 style={{textAlign: 'center'}}>Нет постов</h1>
      }

    </div>
  );
}

export default App;
