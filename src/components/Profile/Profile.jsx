import React from "react";

export const Profile = () => {
    return (
        <div className='content'>
            <img src="#1" alt="каптинка"/>
            <div className="profile">
                <img src="" alt="Avatar"/>
                <div className="profile-info">
                    Date of birth
                    City
                    Interests
                    Education
                    Website
                </div>
            </div>
            <div className="my-posts">
                <div>
                    My posts
                </div>
                <div>
                    New Post
                </div>
                <div>
                    Post1
                </div>
                <div>
                    Post 2
                </div>

            </div>


        </div>
    )
}