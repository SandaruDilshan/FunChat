import React from 'react' 

const Conversation = ({conversation, lastIndex}) => {
  console.log(lastIndex,conversation);
  // console.log(conversation.fullName);
  return (
    <>
          <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src={conversation.profilePic} alt="" />
                </div>   
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                <p className='front-bold text-gray-200'>{conversation.fullName }</p>      
                </div>
            </div>  
          </div> 

      {!lastIndex && <div className='divider my-0 py-0 h-1' />}
      
    </>
  )
}

export default Conversation;


//STARTED CODE 
// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//           <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//             <div className='avatar online'>
//                 <div className='w-12 rounded-full'>
//                     <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
//                 </div>   
//             </div>

//             <div className='flex flex-col flex-1'>
//                 <div className='flex gap-3 justify-between'>
//                     <p className='front-bold text-gray-200'>John Deo</p>      
//                 </div>
//             </div>  
//           </div> 

//           <div className='divider my-0 py-0 h-1' />
//     </>
//   )
// }

// export default Conversation;
