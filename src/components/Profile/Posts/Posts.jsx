import React from "react";

import {Post} from "./Post/Post";
import classes from './Posts.module.css'

export const Posts = () => {
    const postData = [
        {
            textMessage: 'Misha',
            likesCount: '6',
            avatar: 'https://sun3-8.userapi.com/impg/c857636/v857636993/216ea8/nD9pHb4qoH8.jpg?size=1280x853&quality=96&sign=5ea556478a65bb57fbd39c2c6ac60b2a&type=album'
        },
        {
            textMessage: 'Tanya',
            likesCount: '55',
            avatar: 'https://sun3-3.userapi.com/impf/c848620/v848620116/4b6/B9RDTgs5nqA.jpg?size=1280x853&quality=96&sign=6fdcab7b8374f358ee59abab5ef64256&type=album'
        }
    ]
    const postElement = postData.map(post => <Post textMessage={post.textMessage}
                                                   likesCount={post.likesCount} avatar={post.avatar}/>)
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
                {postElement}
            </div>
        </div>
    )
}