import React from "react";
import classes from './Header.module.css'

export const Header = () => {
    return (
            <header className={classes.header}>
                <div className={classes.socialName}>
                    Tricky Mike's
                </div>
                <div className={classes.socialSocial}>
                    social network
                </div>
            </header>
    )
}