const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
    //     {
    //         id: 1, followed: false, fullName: 'Mikhail', age: '20', status: 'I am a boss',
    //         location: {city: 'Yekaterinburg', country: 'Russia'}
    //     },
    //     {
    //         id: 2, followed: true, fullName: 'Tanya', age: '20', status: 'I am a boss too',
    //         location: {city: 'Yekaterinburg', country: 'Russia'}
    //     },
    //     {
    //         id: 3, followed: true, fullName: 'Andrew', age: '22', status: 'I am a boss too',
    //         location: {city: 'Yekaterinburg', country: 'Russia'}
    //     },
    //
    ],
}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }

                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }

                    }
                    return u
                })
            }
        }
        case SET_USERS : {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }


        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
