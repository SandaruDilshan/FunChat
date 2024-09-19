import React from 'react'
import Conversation from './Conversation.jsx'
import useGetConversation from '../../hooks/useGetConversation.js';


const Conversations = () => {
  
  const {loading, conversations} = useGetConversation();
  // console.log("CONVERSATIONS:", conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>

      {conversations.map((conversation, index) => (
        <Conversation
        key={conversation._id}
        conversation={conversation}
        lastIndex={index === conversations.length-1 }
        />
      ))}
    </div>
  )
}

export default Conversations


//STARTED CODE 
// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//        <Conversation />
//        <Conversation />
//        <Conversation />
//        <Conversation />
//     </div>
//   )
// }

// export default Conversations
