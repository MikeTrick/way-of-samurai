import React from "react";
import classes from './Friends.module.css'
import {Friend} from "./Friend/Friend";
import {StoreContext} from "../../StoreContext";

export const Friends = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    const state = store.getState();
                    const friends = state.friendsPage.friendData.map(
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
            }
        </StoreContext.Consumer>
    )
}