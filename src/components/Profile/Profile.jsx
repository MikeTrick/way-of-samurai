import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {Posts} from "./Posts";

export const Profile = () => {
    return (
        <div className='content'>
            <img src="#1" alt="каптинка"/>
            <ProfileInfo/>
            <Posts/>


        </div>
    )
}