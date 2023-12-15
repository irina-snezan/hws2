import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import s from '../../s2-homeworks/hw01/friend-message/FriendMessage.module.css'
/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: UserType
    message: UserMessageType
}
export type UserType = {
    avatar: string
    name: string
}
export type UserMessageType = {
    text: string
    time: string
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: 'https://klike.net/uploads/posts/2022-09/1662808888_g-18.jpg',
        name: 'Tracy',
    },
    message: {
        text: 'Hello, Mark! How are you? Have not seen you for ages!',
        time: '22:02',
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: 'https://pikuli.top/uploads/posts/2023-03/1680020847_art-oir-mobi-p-chelovek-v-kruzhochke-art-instagram-36.jpg',
        name: 'Mark',
    },
    message: {
        text: 'Hello, Tracy! Just wonderful! Glad to see you.',
        time: '22:03',
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div className={s.generalStyle}>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
