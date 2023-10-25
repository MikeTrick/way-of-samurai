import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {friendsReducer} from "./friends-reducer";
import {musicReducer} from "./music-reducer";
import {navbarReducer} from "./navbar-reducer";
import {dialogReducer} from "./dialogs-reducer";

const reducers = combineReducers({
    profilePage:profileReducer,
    friendsPage:friendsReducer,
    musicPage:musicReducer,
    navbar:navbarReducer,
    dialogsPage:dialogReducer
})


export const store = createStore(reducers)