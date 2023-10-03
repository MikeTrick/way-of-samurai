import React from "react";
import classes from './Navbar.module.css';

export const Navbar = () => {

    return (
        <nav>
            <div className={classes.navbarElements}>
                <button className={classes.navbarElement}>
                    <a href='/profile'>Profile</a>
                </button>

                <button className={`${classes.navbarElement} ${classes.active}`}>
                    <a href='/messages'>Messages</a>
                </button>

                <button className={classes.navbarElement}>
                    <a href='/settings'>Settings</a>
                </button>

                <button className={classes.navbarElement}>
                    <a href='/music'>Music</a>
                </button>

                <button className={classes.navbarElement}>
                    <a href='/videos'>Videos</a>
                </button>

                <button className={classes.navbarElement}>
                    <a href='/friends'>Friends</a>
                </button>

            </div>
        </nav>
    )
}