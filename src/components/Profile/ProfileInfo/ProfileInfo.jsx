import React from "react";

import classes from './ProfileInfo.module.css'

export const ProfileInfo = (props) => {

    // const ProfileInfoElement = (props) => {
    //     return (
    //         <div className="profileInfo_element">
    //             {props.city}
    //         </div>
    //     )
    // }
    return (
        <div className={classes.profileInfo}>
            <div className={classes.profileInfo_elements}>
                <div className="profileInfo_elements__left">
                    <img src={props.avatar} alt="Avatar"/>
                    <div>
                        {props.birthDate}
                    </div>
                </div>
                <div className="profileInfo_elements__right">
                    <div className="profileInfo_element">
                        {props.city}
                    </div>
                    <div className="profileInfo_element">
                        {props.interests}
                    </div>
                    <div className="profileInfo_element">
                        {props.education}
                    </div>
                    <div className="profileInfo_element">
                        {props.socialMedia}
                    </div>
                </div>

            </div>
        </div>
    )
}