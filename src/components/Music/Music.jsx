import React from "react";
import classes from './Music.module.css'

import music from './30 Seconds To Mars - Capricorn (A Brand New Name) (320  kbps).mp3'
import {Track} from "./Track/Track";

export const Music = (props) => {
    // const state = store.getState();
    const trackList = props.musicPage.tracksData.map((track) => <Track id={track.id} track={track.track} artist={track.artist}/>)

    return (
        <div className={classes.music_wrapper}>
            <div className={classes.player}>
                <audio id='audio' src={music} controls></audio>
            </div>
            <div className={classes.tracks}>
                {trackList}
            </div>
        </div>
    )

}