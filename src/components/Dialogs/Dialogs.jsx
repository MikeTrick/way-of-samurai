import React from "react";

import classes from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

// import {StoreContext} from "../../StoreContext";

export const Dialogs = (props) => {
    const dialogElements = props.dialogsPage.dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name}
                                                                                                image={dialog.image}/>)
    const messagesElements = props.dialogsPage.messagesData.map(message => <Message textMessage={message.textMessage}
                                                                                                     id={message.id}/>)
    let textValue = props.dialogsPage.newMessageText;

    const newMessageElement = React.createRef();

    const messageUpdater = () => {
        const message = newMessageElement.current.value;
        props.messageUpdater(message)
    }
    const addMessage = () => {
        props.addMessage()
        newMessageElement.current.value = '';
    }
    return (
        <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs}>
                {dialogElements}
            </div>
            <hr/>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.messageAdder_wrapper}>
                    <input type="text"
                           placeholder='Напиши все, что хочешь сказать'
                           ref={newMessageElement}
                           value={textValue}
                           onChange={messageUpdater}/>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}