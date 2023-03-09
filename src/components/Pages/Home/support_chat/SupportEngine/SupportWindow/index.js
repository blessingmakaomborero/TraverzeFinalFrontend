import React, { useState } from "react"

import { styles } from "../styles";
import EmailForm from "./EmailForm";
import ChatEngine from "./ChatEngine";
import CustomizedDialogs from "../dialogchat";

const SupportWindow = props => {
    const [user, setUser] = useState(null)
    const [chat, setChat] = useState(null)

    return (
        <CustomizedDialogs >
        <div 
            className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '1' }
            }}
        >
            
              
               <EmailForm 
                visible={user === null || chat === null}
                setUser={user => setUser(user)} 
                setChat={chat => setChat(chat)} 
            />
                     
            <ChatEngine 
                visible={user !== null && chat !== null}
                user={user} 
                chat={chat} 
            />
        </div>
        </CustomizedDialogs >

    )
}

export default SupportWindow;
