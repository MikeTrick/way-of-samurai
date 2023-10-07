import React from "react";

import classes from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {NavLink} from "react-router-dom";
//
export const Dialogs = (props) => {
    return (
        <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs}>
                <div>
                    <Dialog id='1' name=' Tanya'
                            image='https://sun3-3.userapi.com/impf/c848620/v848620116/4b6/B9RDTgs5nqA.jpg?size=1280x853&quality=96&sign=6fdcab7b8374f358ee59abab5ef64256&type=album'/>
                </div>
                <div>
                    <Dialog id='2' name='Misha'
                            image='https://sun9-31.userapi.com/impg/MQVds1CFYpb4Lg9EDsc0HTT_ts7WHb_fU2B35A/W4SN_LPn5-Y.jpg?size=810x1080&quality=95&sign=e1b1bb0be2e9a0497b0e85bdbee17bd8&type=album'/>
                </div>
                <div>
                    <Dialog id='3' name='Andrew'
                            image='https://sun3-8.userapi.com/impg/c857636/v857636993/216ea8/nD9pHb4qoH8.jpg?size=1280x853&quality=96&sign=5ea556478a65bb57fbd39c2c6ac60b2a&type=album'/>
                </div>

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