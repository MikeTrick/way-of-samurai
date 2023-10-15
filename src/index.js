import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {addMessage, addPost, state, subscribe, updateMessageText, updateNewPostText} from "./redux/state";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {
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

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
