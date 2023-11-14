import React from "react";
import classes from './Friends.module.css'
import {Friend} from "./Friend/Friend";

export const Friends = (props) => {
    // const state = store.getState();
    const friends = props.friends.map(
        friend => <Friend name={friend.name}
                          birthDate={friend.birthDate}
                          photo={friend.photo}
                          city={friend.city}/>
    )
    return (
        <div className={classes.friends_wrapper}>
            <div>
                searchbar
            </div>
            <div>
                {friends}
            </div>
        </div>


    )
}