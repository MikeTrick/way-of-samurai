import React from "react";

import {Post} from "./Post/Post";
import classes from './Posts.module.css'

export const Posts = () => {
    return (
        <div className={classes.myPosts_wrapper}>
            <div className={classes.input_container}>
                <div className={classes.input_container__element}>
                    <input type="text"/>
                </div>
                <div className={classes.input_container__element}>
                    <button>Отправить</button>
                </div>
            </div>
            <div className={classes.new_posts}>
                <Post textMessage='Misha'/>
                <Post textMessage='Tanya'/>
            </div>


        </div>
    )
}