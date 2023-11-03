import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";

const PostsContainer = (props) => {

    const onPostChange = (text) => {
        const action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    }

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    return <Posts onPostChange={onPostChange} onAddPost={addPost()} posts={props.posts}/>
    }