import React from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form action="" className='flex item-center gap-2'>
        <input type="text" placeholder='Search' className='input input-border border-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <IoIosSearch className='w-7 h-7 outline-none'/>
        </button>  
    </form>
  )
}

export default SearchInput
