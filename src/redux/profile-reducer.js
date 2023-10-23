const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

export const profileReducer = (state, action) => {

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
