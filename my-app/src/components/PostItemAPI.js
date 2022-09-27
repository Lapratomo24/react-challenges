import React from 'react';
import css from "./css/PostItem.module.css"

function PostItemAPI(props) {
  return (
    props.savedPosts.map(post => {
        const {id, user, type, tags, webformatURL} = post
        return <div className={css.searchItem} key={id}>
            <p>{user}</p>
            <p>{type}</p>
            <img src={webformatURL} alt="random"/>
            <p>{tags}</p>
        </div>
    })
  )
}

export default PostItemAPI