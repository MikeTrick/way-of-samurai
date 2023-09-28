import React from "react";

import classes from './Post.module.css'

export const Post = (props) => {
    return (
        <div className={classes.post_wrapper}>
            {props.textMessage}
        </div>
    )
}