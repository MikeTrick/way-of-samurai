import React from "react";
import {Friends} from "./Friends";
import {connect} from "react-redux";

const mapStateToProps = (state)=> {
    return {
        friends: state.friendsPage.friendData
    }
}

export const FriendsContainer = connect (mapStateToProps) (Friends)