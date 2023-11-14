import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        messageUpdater: (message) => {
            dispatch(updateMessageTextActionCreator(message))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);