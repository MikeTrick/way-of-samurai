const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

export const dialogReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 4,
                textMessage: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state
        default:
            return state;


    }
}

export const addMessageActionCreator = () => {

    return {
        type: ADD_MESSAGE
    }
}
export const updateMessageText = (message) => {

    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: message
    }
}