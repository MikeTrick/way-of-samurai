import React from "react";

import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom";
export const Dialog = (props) => {
    const path = props.id;
    const avatarMini = props.image

    return (
        <div className={classes.dialog_wrapper}>
            <img src={avatarMini} alt=""/>
            <NavLink to={path} >{props.name}</NavLink>
        </div>
    )
}