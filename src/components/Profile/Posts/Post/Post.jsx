import React from "react";

import classes from './Post.module.css'

export const Post = (props) => {


    return (
        <div className={classes.post_wrapper}>
            <div className={classes.post_wrapper_avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            {props.textMessage}
            <div className={classes.post_wrapper__likes}>
                {`${props.likesCount} likes`}
                <button></button>
            </div>
        </div>
    )
}