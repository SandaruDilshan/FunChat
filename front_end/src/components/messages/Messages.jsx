import React, { useEffect, useRef } from 'react'
import Message from './Message.jsx'
import useGetMessages from '../../hooks/useGetMessages.js'
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log(messages);
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    },100)
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto' >
      {/* Conditional rendering */}
      {!loading && messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      
      {loading && [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      
      {!loading && messages.length === 0 && (
        <p className='text-center' >Send a message to start to converation</p>
      )}
    </div>
  )
}

export default Messages



//STARTED CODE SNIPPET
// import React from 'react'
// import Message from './Message.jsx'
// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       <Message />
//       <Message />
//       <Message />
//       <Message />
//       <Message />
      
//     </div>
//   )
// }

// export default Messages
