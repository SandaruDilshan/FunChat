import React from 'react'
import Message from './Message.jsx'
import useGetMessages from '../../hooks/useGetMessages.js'
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log(messages);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading && [...Array(3)].map((_,index) => <MessageSkeleton key={index}/> )}
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
