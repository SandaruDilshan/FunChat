import React from 'react'
import Messages from './Messages.jsx'
import MessageInput from "./MessageInput.jsx"

const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
             <span className='text-gray-900'>John Deo</span>
        </div>
          
          <Messages />
          <MessageInput />
    </div>
  )
}

export default MessageContainer
