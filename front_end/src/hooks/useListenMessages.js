import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand_store/useConversation';

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {   // why that ? put in  hear because, when socket is empty app not gonna crash
            setMessages([...messages, newMessage])
        })

        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
};

export default useListenMessages
