import React from "react";

import classes from './ProfileInfo.module.css'

export const ProfileInfo = (props) => {

    return (
        <div className={classes.profileInfo}>
            <div className={classes.profileInfo_elements}>
                <div className={classes.profileInfo_elements__left}>
                    <img src={props.avatar} alt="Avatar"/>
                    <div className={classes.name}>
                        {props.name}
                    </div>
                </div>
                <div className={classes.profileInfo_elements__right}>
                    <div className={classes.profileInfo_element}>
                        <span>Дата рождения</span>: {props.birthDate}
                    </div>
                    <div className={classes.profileInfo_element}>
                        <span>Город</span>: {props.city}
                    </div>
                    <div className={classes.profileInfo_element}>
                        <span>Интересы</span>: {props.interests}
                    </div>
                    <div className={classes.profileInfo_element}>
                        <span>Образование</span>: {props.education}
                    </div>
                    <div className={classes.profileInfo_element}>
                        <span>Социальные сети</span>: {props.socialMedia}
                    </div>
                </div>

            </div>
        </div>
    )
}