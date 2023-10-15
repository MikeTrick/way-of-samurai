import React from "react";
import classes from './Settings.module.css'

export const Settings = () => {
    return (
        <div className={classes.settings_wrapper}>
            <div className={classes.privacy}>
                Настройки приватности
            </div>
            <div className={classes.privacy}>
                Настройки учетной записи
            </div>
            <div className={classes.privacy}>
                Настройки сообщений
            </div>
            <div className={classes.privacy}>
                Настройки стены
            </div>
            <div className={classes.privacy}>
                Настройки настроек
            </div>

        </div>
    )
}