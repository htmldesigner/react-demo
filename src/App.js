import React, {useState, useMemo} from "react";
import PostList from "./components/PostList";
import './styles/App.css'
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Gondon', desc: 'Zef'},
        {id: 2, title: 'Zalupa', desc: 'Chare'},
        {id: 3, title: 'Anton', desc: 'Sex'}
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => {
                return a[selectedSort].localeCompare(b[selectedSort])
            })
        } else {
            return posts
        }
    }, [selectedSort, posts])


    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => {return post.title.toLowerCase().includes(searchQuery.toLowerCase())})
    }, [searchQuery, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px'}}/>

            <MyInput
                placeholder="Поиск..."
                onChange={e => setSearchQuery(e.target.value)}
            />

            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='Сотрировка'
                options={[
                    {value: 'title', name: 'по названию'},
                    {value: 'desc', name: 'по описанию'}
                ]}>
            </MySelect>

            {sortedAndSearchedPosts.length
                ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список'/>
                : <h1 style={{textAlign: 'center'}}>Нет постов</h1>
            }

        </div>
    );
}

export default App;
