import React from "react";

import classes from './Message.module.css'

export const Message = (props) => {
    return (
        <div className={classes.message_wrapper}>
            {props.textMessage}
        </div>
    )
}