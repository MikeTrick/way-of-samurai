import React from "react";
import classes from './Videos.module.css'
import {Video} from "./Video/Video";

export const Videos = () => {
    return (
     <div className={classes.video_wrapper}>
         <div className="searchBar_wrapper">
             <div className="searchBar_input">
                 <input type="text" placeholder='Введите название видео'/>
             </div>
             <div className="searchBar_button">
                 <button>Поиск</button>
             </div>
         </div>
         <div className="videos">
             <Video/>
         </div>
     </div>
    )
}