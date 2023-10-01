import React from "react";

import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import './App.css'
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";




const App = () => {
    return (
        <div className='appWrapper'>
            <div className="header">
                <Header/>
            </div>
            <div className="nav">
                <Navbar/>
            </div>
            <div className="content">
                {/*<Profile/> */}
                <Dialogs/>
            </div>

        </div>);
}

export default App;
