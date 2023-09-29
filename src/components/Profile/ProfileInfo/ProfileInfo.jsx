import React from "react";

import classes from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div className={classes.profileInfo}>
            <div className={classes.profileInfo_elements}>
                <div className="profileInfo_elements__left">
                    <img src="https://99px.ru/sstorage/41/2016/01/image_41260116201523831638.jpg" alt="Avatar"/>
                    <div>
                        Date of birth
                    </div>
                </div>
                <div className="profileInfo_elements__right">
                    <div className="profileInfo_element">
                        City
                    </div>
                    <div className="profileInfo_element">
                        Interests
                    </div>
                    <div className="profileInfo_element">
                        Education
                    </div>
                    <div className="profileInfo_element">
                        Website
                    </div>
                </div>

            </div>
        </div>
    )
}