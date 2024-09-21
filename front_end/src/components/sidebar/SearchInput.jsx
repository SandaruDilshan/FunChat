import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import useConversation from '../../zustand_store/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [Search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  //Search functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Search) return;
    if (Search.length < 3) {
      return toast.error('Search term must be at least 3 characters long')
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(Search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    }
    else {
      toast.error("No such user found .!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex item-center gap-2'>
      <input type="text" placeholder='Search' className='input input-border border-full'
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
      />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <IoIosSearch className='w-7 h-7 outline-none'/>
        </button>  
    </form>
  )
}

export default SearchInput
