import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../../hooks/useSendMessage';

function MessageInput() {

  const [message, setMessage] = useState("");
  const {loading, sendMesages} = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;  // if there is o message do not run the handlesubmit function
    await sendMesages(message)  // or have message send the message
    setMessage(""); // after send message setMessage state is set as empty
  }

  return (
    <form action="" className='px-6 my-4' onSubmit={handleSubmit}>
        <div className=' w-full relative'>
          <input type="text"
            className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
            placeholder='Send a message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
              <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                {loading? <div className='loading loading-spinner'></div> : <IoMdSend className='text-white'/>}
              </button>
        </div>
    </form>
  )
}

export default MessageInput
