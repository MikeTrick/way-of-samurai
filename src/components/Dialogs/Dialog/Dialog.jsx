import React from "react";

import classes from './Dialog.module.css'
export const Dialog = (props) => {
    return (
        <div className={classes.dialog_wrapper}>
            {props.name}
        </div>
    )
}