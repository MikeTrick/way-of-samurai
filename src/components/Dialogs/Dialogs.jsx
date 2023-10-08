import React from "react";

import classes from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = (props) => {

    const dialogsData = [
        {
            id: 1,
            name: 'Tanya',
            image: 'https://sun3-3.userapi.com/impf/c848620/v848620116/4b6/B9RDTgs5nqA.jpg?size=1280x853&quality=96&sign=6fdcab7b8374f358ee59abab5ef64256&type=album'
        },
        {
            id: 2,
            name: 'Misha',
            image: 'https://sun9-31.userapi.com/impg/MQVds1CFYpb4Lg9EDsc0HTT_ts7WHb_fU2B35A/W4SN_LPn5-Y.jpg?size=810x1080&quality=95&sign=e1b1bb0be2e9a0497b0e85bdbee17bd8&type=album'
        },
        {
            id: 3,
            name: 'Tanya',
            image: 'https://sun3-8.userapi.com/impg/c857636/v857636993/216ea8/nD9pHb4qoH8.jpg?size=1280x853&quality=96&sign=5ea556478a65bb57fbd39c2c6ac60b2a&type=album'
        }];
    const messagesData = [
        {id: 1, textMessage: 'Привет!'},
        {id: 2, textMessage: 'Как дела?!'},
        {id: 3, textMessage: 'У меня все хорошо!'},
        {id: 4, textMessage: 'И у меня все хорошо!'},
        {id: 5, textMessage: 'И у меня все хорошо!'},
        {id: 6, textMessage: 'И у меня все хорошо!'},
    ]

    const dialogElements = dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name}
                                                             image={dialog.image}/>
    )
    const messagesElements = messagesData.map(message => <Message textMessage={message.textMessage} id={message.id}/>)

    return (
        <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs}>
                    {dialogElements}
            </div>
            <hr/>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.messageAdder_wrapper}>
                    <input type="text" placeholder='Напиши все, что хочешь сказать'/>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    )
}