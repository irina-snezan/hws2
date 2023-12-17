import React from 'react'
import s from './Message.module.css'
import {MessageType} from '../HW1';

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img src={'https://klike.net/uploads/posts/2022-09/1662808888_g-18.jpg'} alt={'avatar'}
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                    //src={}
                    //
                />
                <div id={'hw1-time-' + props.message.id} className={s.time}>
                    {/*создаёт студент*/}
                    {'22.02'}
                </div>
            </div>
            <div className={s.text}>
                <div id={'hw1-name-' + props.message.id} className={s.name}>
                    {/*создаёт студент*/}

                    {'Tracy'}
                </div>
                <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                    {props.message.message.text}
                    </pre>
            </div>
        </div>

    )
}

export default Message
