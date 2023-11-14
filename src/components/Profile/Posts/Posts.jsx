import React from "react";
import classes from './Posts.module.css'
import {Post} from "./Post/Post";


export const Posts = (props) => {
    const postElement = props.profilePage.postData.map(post => <Post textMessage={post.textMessage}
                                                                                      likesCount={post.likesCount}
                                                                                      avatar={post.avatar}
    />)

    const newPostElement = React.createRef();

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    const addPost = () => {
        debugger
        props.addPost();
        newPostElement.current.value = '';
    }

    return (
        <div className={classes.myPosts_wrapper}>
            <div className={classes.input_container}>
                <div className={classes.input_container__element}>
                    <input type="text" placeholder='Напиши что нибудь'
                           ref={newPostElement}
                           value={props.profilePage.newPostText}
                           onChange={onPostChange}/>
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