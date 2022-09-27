import React, {useState, useEffect} from 'react';
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json"
import PostItem from './PostItem';
import Loader from './Loader';

function ContentHooks() {
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      setFetchedPosts(savedPosts);
    }, 2000)
  })

  const handleChange = (e) => {
    const name = e.target.value.toLowerCase()
    const filteredPosts = savedPosts.filter(post => {
      return post.name.toLowerCase().includes(name)
    })
    setFetchedPosts(filteredPosts)
  }

  return (
    <div className={css.Content}>
      <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <label htmlFor='searchInput'>Search</label>
          <form>
            <input onChange={(e) => handleChange(e)} type="search" id="searchInput" placeholder='By Author' />
          </form>
          <h4>posts found: {fetchedPosts.length}</h4>
      </div>
      <div className={css.SearchResults}>
        {
          isLoaded ? <PostItem savedPosts={fetchedPosts} /> : <Loader />
        }
      </div>
    </div>
  )
}

export default ContentHooks