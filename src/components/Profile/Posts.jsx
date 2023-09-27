import React from "react";
import {Post} from "./Post";

export const Posts = () => {
    return (
        <div className="my-posts">
            <div>
                <input type="text" />
            </div>
            <div>
                <button>Отправить</button>
            </div>
            <div>
                New Post
            </div>
            <Post textMessage='Misha'/>
            <Post textMessage='Tanya'/>

        </div>
    )
}