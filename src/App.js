import React from "react";
import {Header} from "./components/Header/Header";
import './App.css'
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Videos} from "./components/Videos/Videos";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {MusicContainer} from "./components/Music/MusicContainer";
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import {NavBarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


const App = () => {
    return (
        <div className='appWrapper'>
            <div className="header">
                <Header/>
            </div>
            <div className="nav">
                <NavBarContainer/>
            </div>
            <div className="content">
                <Routes>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/music' element={<MusicContainer/>}/>
                    <Route path='/videos' element={<Videos/>}/>
                    <Route path='/friends' element={<FriendsContainer/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
