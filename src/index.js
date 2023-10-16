import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addMessage, state, subscribe, updateMessageText, updateNewPostText} from "./redux/state";
import {addPost} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = () => {

    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}
                 addMessage={addMessage}
                 updateNewPostText={updateNewPostText}
                 updateMessageText={updateMessageText}
            />
        </React.StrictMode>
    );

    reportWebVitals();

}

rerenderEntireTree()
subscribe(rerenderEntireTree)
