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
                <img src={'https://pikuli.top/uploads/posts/2023-03/1680020847_art-oir-mobi-p-chelovek-v-kruzhochke-art-instagram-36.jpg'} alt={'avatar'}
                     id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                />
                <div
                    id={'hw1-friend-time-' + props.message.id}
                    className={s.friendTime}
                >
                    {'22.03'}
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
