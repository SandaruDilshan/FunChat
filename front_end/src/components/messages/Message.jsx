import React from 'react'

function Message() {
  return (
    <div className=' chat chat-end'>
      <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>       
      </div>
      <div className="chat-bubble text-white ">You were the Chosen One!</div>
      <div className='flex gap-2'>
          <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">1.32</div>
          <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-white">Delivered</div>
      </div>
      
    </div>
  )
}

export default Message
