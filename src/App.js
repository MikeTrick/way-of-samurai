import React from "react";

import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import './App.css'
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Videos} from "./components/Videos/Videos";
import {Friends} from "./components/Friends/Friends";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <div className="header">
                    <Header/>
                </div>
                <div className="nav">
                    <Navbar/>
                </div>
                <div className="content">
                    <Routes>
                        <Route path='/profile' element={<Profile profilePage={props.state.profilePage}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/music' element={<Music musicPage={props.state.musicPage}/>}/>
                        <Route path='/videos' element={<Videos/>}/>
                        <Route path='/friends' element={<Friends/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
