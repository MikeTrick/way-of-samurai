import React from "react";
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import './App.css'


const App = () => {
    return (<div className='appWrapper'>
        <div className="header">
            <Header/>
        </div>
        <div className="nav">
            <Navbar/>
        </div>
        <div className="content">
            <Profile/>
        </div>

    </div>);
}

export default App;
