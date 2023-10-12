import React from "react";
import classes from './FriendOnline.module.css';

export const FriendOnline = (props) => {


    return (

        <div className={classes.friendOnline}>
            <img src={props.avatar} alt=""/>
            {props.name}
        </div>
    )
}