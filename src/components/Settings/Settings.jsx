import React from "react";
import classes from './Settings.module.css'
import {NavLink} from "react-router-dom";

export const Settings = () => {
    return (
        <div>
            <h1>Settings</h1>
            <div className={classes.settings_wrapper}>
                <div className={classes.settings_element}>
                    <NavLink to='' onClick={() => {
                        alert('тут пока не работает')
                    }}>Настройки приватности</NavLink>
                </div>
                <div className={classes.settings_element}>
                    <NavLink to="" onClick={() => {
                        alert('Тут тоже')
                    }}>Настройки учетной записи</NavLink>
                </div>
                <div className={classes.settings_element}>
                    <NavLink to="" onClick={() => {
                        alert('Думаешь сегодня что-то изменилось?')
                    }}>Настройки сообщений</NavLink>
                </div>
                <div className={classes.settings_element}>
                    <NavLink to="" onClick={() => {
                        alert('А изменилось! Сегодня сообщения работают !!')
                    }}>Настройки стены</NavLink>
                </div>
                <div className={classes.settings_element}>
                    <NavLink to="/dialogs" onClick={() => {
                        alert('Сейчас увидишь!')
                    }}>Настройки настроек</NavLink>
                </div>
            </div>
        </div>
    )
}