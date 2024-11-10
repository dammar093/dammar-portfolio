import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
const Header = () => {
  return (
    <header className='w-full flex justify-between p-2  md:px-10   h-16 items-center shadow-md sticky top-0 z-50 bg-[#f4f4f4]'>
      <div>
        <Link href={"/"}>
        <div className='text-white bg-blue-500 hover:bg-blue-600 text-2xl font-bold p-2 rounded-md hover:transition-all'>
          DAMMAR
        </div>
        </Link>
      </div>
      <div className='text-3xl font-medium text-blue-500 hover:text-blue-600'>
        <Link target='_blank' href={"https://github.com/dammar093"}>
        <FaGithub />
        </Link>
      </div>
    </header>
  )
}

export default Header