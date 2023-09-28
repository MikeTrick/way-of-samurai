import React from "react";
import classes from './Navbar.module.css';

export const Navbar = () => {

    return (
        <nav>
            <div className={classes.navbarElements}>
                <button className={classes.navbarElement}>
                    <a>Profile</a>
                </button>

                <button className={`${classes.navbarElement} ${classes.active}` }>
                    <a>Messages</a>
                </button>

                <button className={classes.navbarElement}>
                    <a>Settings</a>
                </button>

                <button className={classes.navbarElement}>
                    <a>Music</a>
                </button>

                <button className={classes.navbarElement}>
                    <a>Video</a>
                </button>

                <button className={classes.navbarElement}>
                    <a>Friends</a>
                </button>

            </div>
        </nav>
    )
}