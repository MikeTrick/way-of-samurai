import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./Posts/Posts";
import classes from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={classes.profile}>
            <img src="https://3440x1440.com/wp-content/uploads/2019/03/look-up-3440x1440-1820x762.jpg" alt="каптинка"/>
            <ProfileInfo/>
            <Posts/>


        </div>
    )
}