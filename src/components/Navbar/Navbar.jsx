import React from "react";
import navbar from './navbar.css';

export const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="navbar-elements">
                <div>
                    <button>
                        <a href="">Profile</a>
                    </button>

                </div>
                <div>
                    <button>
                        <a href="">Messages</a>
                    </button>

                </div>
                <div>
                    <button>
                        <a href="">Settings</a>
                    </button>

                </div>
                <div>
                    <button>
                        <a href="">Music</a>
                    </button>

                </div>
                <div>
                    <button>
                        <a href="">Video</a>
                    </button>

                </div>
                <div>
                    <button>
                        <a href="">Friends</a>
                    </button>

                </div>
            </div>
        </nav>
    )
}