import React from "react";
import {Music} from "./Music";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        musicPage: state.musicPage
    }
}


export const MusicContainer = connect (mapStateToProps)(Music)