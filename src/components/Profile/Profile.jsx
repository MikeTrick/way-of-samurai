import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./Posts/Posts";
import classes from './Profile.module.css'
import {StoreContext} from "../../StoreContext";


export const Profile = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const state= store.getState();
                    return (
                        <div className={classes.profile}>
                        <div className={classes.profileImage}>
                            <img src="https://3440x1440.com/wp-content/uploads/2019/03/look-up-3440x1440-1820x762.jpg"
                                 alt="каптинка"/>
                        </div>
                        <ProfileInfo avatar="https://99px.ru/sstorage/41/2016/01/image_41260116201523831638.jpg"
                                     city='Yekaterinburg' interests='snowboard, bmx, video, drift'
                                     birthDate='04.06.1996'
                                     education='Engineer' socialMedia='instagram.com/tricky_mike'
                                     name='TRICKY MIKE'/>
                        <Posts dispatch={store.dispatch}
                               postData={state.profilePage.postData}
                               newPostText={state.profilePage.newPostText}/>
                    </div>
                )}

            }


        </StoreContext.Consumer>
    )
}