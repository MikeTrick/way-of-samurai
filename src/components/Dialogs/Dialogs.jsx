import React from "react";

import classes from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {

    const dialogElements = props.dialogsPage.dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name}
                                                                               image={dialog.image}/>
    )
    const messagesElements = props.dialogsPage.messagesData.map(message => <Message textMessage={message.textMessage}
                                                                                    id={message.id}/>)

    const newMessageElement = React.createRef();

    const addMessage = () => {
        const message = newMessageElement.current.value;
        alert(message);
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
                    <input type="text" placeholder='Напиши все, что хочешь сказать' ref={newMessageElement}/>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}