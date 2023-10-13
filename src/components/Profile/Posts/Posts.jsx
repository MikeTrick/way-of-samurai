import React from "react";

import {Post} from "./Post/Post";
import classes from './Posts.module.css'

export const Posts = (props) => {


    const postElement = props.postData.map(post => <Post textMessage={post.textMessage}
                                                         likesCount={post.likesCount} avatar={post.avatar}
    />)
    const newPostElement = React.createRef();
    const addPost = () => {
        const text = newPostElement.current.value;
        alert(text);
        newPostElement.current.value = '';
    }
    return (
        <div className={classes.myPosts_wrapper}>
            <div className={classes.input_container}>
                <div className={classes.input_container__element}>
                    <input type="text" placeholder='Напиши что нибудь' ref={newPostElement}/>
                </div>
                <div className={classes.input_container__element}>
                    <button onClick={addPost}>Отправить</button>
                </div>
            </div>
            <div className={classes.new_posts}>
                {postElement}
            </div>
        </div>
    )
}