import React from "react";
import classes from './Friends.module.css'
import {Friend} from "./Friend/Friend";

export const Friends = (props) => {
    const friends = props.friendsPage.friendData.map(
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
                {/*<Friend name={props.friendsPage.friend.name[0]} birthDate={props.friendsPage.friend.birthDate[0]}*/}
                {/*        photo={props.friendsPage.friend.photo[0]} city={props.friendsPage.friend.city[0]}/>*/}
            </div>
        </div>
    )
}