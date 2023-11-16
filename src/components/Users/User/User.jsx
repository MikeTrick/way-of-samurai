import React from "react";
import classes from './User.module.css'

export const User = (props) => {

    return (
        <div >
            <div className={classes.user_wrapper}>
                <div className={classes.user_preview}>
                    <img src="" alt=""/>
                    <button>
                        follow
                    </button>
                </div>
                <div className={classes.user_info}>
                    <div>name</div>
                    <div>city</div>
                    <div>interests</div>
                </div>
            </div>
        </div>
    )
}