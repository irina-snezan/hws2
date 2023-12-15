import React from 'react'
import s from './FriendMessage.module.css'

import {MessageType} from '../HW1';

// создать тип вместо any и отобразить приходящие данные
export type FriendMessageType = {
    message: MessageType
}

const FriendMessage = (props: FriendMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img src={'https://klike.net/uploads/posts/2022-09/1662808888_g-18.jpg'} alt={'avatar'}
                     id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент

                    //
                />
                <div
                    id={'hw1-friend-time-' + props.message.id}
                    className={s.friendTime}
                >
                    {}

                    {'22.16'}
                </div>
            </div>
            <div className={s.friendText}>
                <div
                    id={'hw1-friend-name-' + props.message.id}
                    className={s.friendName}
                >
                    {/*создаёт студент*/}

                    {'Mark'}
                </div>
                <pre
                    id={'hw1-friend-text-' + props.message.id}
                    className={s.friendMessageText}
                >
                        {/*создаёт студент*/}
                    {'Hello, Tracy! Just wonderful! Glad to see you.'}

                    </pre>
            </div>
        </div>

    )
}

export default FriendMessage
