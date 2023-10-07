import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    return (
        <nav>
            <div className={classes.navbarElements}>
                <button className={classes.navbarElement}>
                    <NavLink to='/profile'
                             className={navData => navData.isActive ? classes.activeLink : classes.navbarElement}>
                        Profile
                    </NavLink>
                </button>

                <button className={`${classes.navbarElement} ${classes.active}`}>
                    <NavLink to='/dialogs/'
                             className={navData => navData.isActive ? classes.activeLink : classes.navbarElement}>
                        Messages
                    </NavLink>
                </button>

                <button className={classes.navbarElement}>
                    <NavLink to='/settings'
                             className={navData => navData.isActive ? classes.activeLink : classes.navbarElement}>Settings</NavLink>
                </button>

                <button className={classes.navbarElement}>
                    <NavLink to='/music'
                             className={navData => navData.isActive ? classes.activeLink : classes.navbarElement}>
                        Music
                    </NavLink>
                </button>

                <button className={classes.navbarElement}>
                    <NavLink to='/videos'
                             className={navData => navData.isActive ? classes.activeLink : classes.navbarElement}>
                        Videos
                    </NavLink>
                </button>

                <button className={classes.navbarElement}>
                    <NavLink to='/friends'
                             className={navData => navData.isActive ? classes.activeLink : classes.navbarElement}>
                        Friends
                    </NavLink>
                </button>

            </div>
        </nav>
    )
}