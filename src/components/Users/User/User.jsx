import React from "react";
import classes from './User.module.css'

export const User = (props) => {


    const isFollowed = () => {
        if (props.followed === true) {
            return (<button onClick={() => {
                props.unfollow(props.id)
            }}>unfollow</button>)
        }
        return (<button onClick={() => {
            props.follow(props.id)
        }}>follow</button>)
    }

    return (
        <div>
            <div className={classes.user_wrapper}>
                <div className={classes.user_preview}>
                    <img src="" alt="avatar"/>
                    <div className={classes.user_preview}>
                        {isFollowed()}
                    </div>
                </div>
                <div className={classes.user_info}>
                    <div>{props.fullName}</div>
                    <div>{props.country}</div>
                    <div>{props.city}</div>
                    <div>{props.status}</div>
                </div>
            </div>
        </div>
    )
}