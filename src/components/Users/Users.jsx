import React from "react";
import classes from './Users.module.css'
import {User} from "./User/User";
import axios from 'axios';

export const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    const users = props.users.map(u => <User key={u.id} name={u.name}
                                             id={u.id} followed={u.followed}
                                             smallPhoto={u.photos.small}
                                             status={u.status} follow={props.follow}
                                             unfollow={props.unfollow}
                                             setUsers={props.setUsers}
    />)
    return (
        <div className={classes.users_wrapper}>
            <div className={classes.search}>
                <input type="text"/>
                <button>search</button>
            </div>
            <div>
                {users}
            </div>
        </div>
    )
}
// {
//     id: 1, followed: false, fullName: 'Mikhail', age: '20', status: 'I am a boss',
//     location: {city: 'Yekaterinburg', country: 'Russia'}
// },
// {
//     id: 2, followed: true, fullName: 'Tanya', age: '20', status: 'I am a boss too',
//     location: {city: 'Yekaterinburg', country: 'Russia'}
// },
// {
//     id: 3, followed: true, fullName: 'Andrew', age: '22', status: 'I am a boss too',
//     location: {city: 'Yekaterinburg', country: 'Russia'}
// },