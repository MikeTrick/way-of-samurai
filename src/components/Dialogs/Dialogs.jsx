import React from "react";

import classes from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
//
export const Dialogs = (props) => {
    return (
        <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs}>
                <Dialog name='Tanya'/>
                <div className={`${classes.dialogs} ${classes.active}`}>
                    <Dialog name='Andrey'/>
                </div>
                <Dialog name='Misha'/>
            </div>
            <hr/>
            <div className={classes.messages}>
                <Message textMessage='Привет!'/>
                <Message textMessage='Как дела?'/>
                <Message textMessage='И у меня все круто!'/>
                <Message textMessage='И у меня все круто!'/>
                <Message textMessage='И у меня все круто!'/>
                <Message textMessage='И у меня все круто!'/>
                <div className={classes.messageAdder_wrapper}>
                    <input type="text"/>
                    <button>Отправить</button>
                </div>

            </div>
        </div>


    )

}