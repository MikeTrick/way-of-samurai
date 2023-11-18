import React from "react";
import classes from './Users.module.css'
import {User} from "./User/User";

export const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, followed: false, fullName: 'Mikhail', age: '20', status: 'I am a boss',
                location: {city: 'Yekaterinburg', country: 'Russia'}
            },
            {
                id: 2, followed: true, fullName: 'Tanya', age: '20', status: 'I am a boss too',
                location: {city: 'Yekaterinburg', country: 'Russia'}
            },
            {
                id: 3, followed: true, fullName: 'Andrew', age: '22', status: 'I am a boss too',
                location: {city: 'Yekaterinburg', country: 'Russia'}
            },

        ],)
     }

    const user = props.users.map(u => <User key={u.id} fullName={u.fullName} city={u.location.country}
                                            country={u.location.country}
                                            id={u.id} followed={u.followed}
                                            age={u.age}
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
                {user}
            </div>
        </div>
    )
}