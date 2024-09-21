import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand_store/useConversation';
import { extractTime } from '../../utils/extractTime';

function Message({message}) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const from_Me = message.senderId === authUser._id;  
  const chatClassName = from_Me ? 'chat-end' : 'chat-start';
  const profilePicture = from_Me ? authUser.profilePic : selectedConversation?.profilePic;
  const chatColor = from_Me ? 'bg-blue-500' : "";
  const formattedTime = extractTime(message.createdAt);
  
  return (
    <div className={`chat ${chatClassName}`} >
      <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt="Tailwind CSS chat bubble component" src={profilePicture} />
            </div>       
      </div>
      <div className={`chat-bubble text-white ${chatColor}`}>{message.message}</div>
      <div className='flex gap-2'>
          <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">{formattedTime}</div>
          {/* <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">Delivered</div> */}
      </div>
      
    </div>
  )
}

export default Message
