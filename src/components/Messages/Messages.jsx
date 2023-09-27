import React from "react";
import navbar from './messages.css';

export const Messages = () => {
    return (
        <nav className='nav'>
            <div className="navbar-wrapper">
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Video</a>
                </div>
                <div>
                    <a href="">Friends</a>
                </div>
            </div>
        </nav>
    )
}