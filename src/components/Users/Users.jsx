import React from "react";
import classes from './Users.module.css'
import {User} from "./User/User";

export const Users = (props) => {

    return (
        <div className={classes.users_wrapper}>
            <div className={classes.search}>
                <input type="text"/>
                <button>search</button>
            </div>
            <div>
                <User/>
            </div>
        </div>
    )
}