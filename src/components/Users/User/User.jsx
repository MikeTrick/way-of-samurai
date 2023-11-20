import React from "react";
import classes from './User.module.css'
import miniAva from '../../../media/photo.jpg'
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
                    <img src={props.smallPhoto != null? props.smallPhoto : miniAva} alt=''/>
                    <div className={classes.user_preview}>
                        {isFollowed()}
                    </div>
                </div>
                <div className={classes.user_info}>
                    <div>{props.name}</div>
                    <div>{props.status}</div>
                </div>
            </div>
        </div>
    )
}