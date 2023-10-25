const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    postData: [
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
    ],
    newPostText: 'Yoyo'
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            const newPost = {
                id: 5,
                textMessage: state.newPostText,
                likesCount: 0
            }
            state.postData.push(newPost)
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
