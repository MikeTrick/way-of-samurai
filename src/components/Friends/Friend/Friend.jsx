import React from "react";
import classes from './Friend.module.css'

export const Friend = (props) => {
    const photo = props.photo;
    const name = props.name;
    const birthDate = props.birthDate;
    const city = props.city;



    return (
        <div className={classes.friend_wrapper}>
            <div className={classes.friend_element}>
                <img src={photo} alt=""/>
            </div>
            <div>
                <div className={classes.friend_element}>{name}</div>
                <div className={classes.friend_element}>{birthDate}</div>
                <div className={classes.friend_element}>{city}</div>
            </div>
            <div>
                <button>Добавить</button>
            </div>
        </div>
    )
}