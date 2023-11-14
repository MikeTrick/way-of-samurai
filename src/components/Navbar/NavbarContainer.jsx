import React from "react";
import {Navbar} from "./Navbar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {navbar: state.navbar}
}

export const NavBarContainer = connect (mapStateToProps) (Navbar)