import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Posts} from "./Posts/Posts";
import classes from './Profile.module.css'

const postData = [
    {
        textMessage: 'Misha',
        likesCount: '6',
        avatar: 'https://sun3-8.userapi.com/impg/c857636/v857636993/216ea8/nD9pHb4qoH8.jpg?size=1280x853&quality=96&sign=5ea556478a65bb57fbd39c2c6ac60b2a&type=album'
    },
    {
        textMessage: 'Tanya',
        likesCount: '55',
        avatar: 'https://sun3-3.userapi.com/impf/c848620/v848620116/4b6/B9RDTgs5nqA.jpg?size=1280x853&quality=96&sign=6fdcab7b8374f358ee59abab5ef64256&type=album'
    }
]

export const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div className={classes.profileImage}>
                <img src="https://3440x1440.com/wp-content/uploads/2019/03/look-up-3440x1440-1820x762.jpg"
                     alt="каптинка"/>
            </div>
            <ProfileInfo avatar="https://99px.ru/sstorage/41/2016/01/image_41260116201523831638.jpg"
                         city='Yekaterinburg' interests='snowboard, bmx, video, drift' birthDate='04.06.1996'
                         education='Engineer' socialMedia='instagram.com/tricky_mike'/>
            <Posts postData={postData}/>
        </div>
    )
}