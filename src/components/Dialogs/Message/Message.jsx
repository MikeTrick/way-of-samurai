import React from "react";

import classes from './Message.module.css'

export const Message = (props) => {
    return (
        <div>
            <div className={classes.sent_message_wrapper}>
                {props.textMessage}
            </div>
            <div className={classes.inbox_message_wrapper}>
                {props.textMessage}
            </div>
        </div>


    )
}