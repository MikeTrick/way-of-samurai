import React from "react";
import classes from './Track.module.css'


export const Track = (props) => {
    return (
        <div className={classes.track_wrapper}>
            <div>
                {props.artist} - {props.track}
            </div>

        </div>
    )
}