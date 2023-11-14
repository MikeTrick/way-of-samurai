import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";


const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
        dispatch(updateNewPostTextActionCreator(text))},
        addPost: ()=> {
        dispatch(addPostActionCreator())}
    }
}

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

export const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts)