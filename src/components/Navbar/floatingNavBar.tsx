import React from 'react'
import { FaHome } from "react-icons/fa";

export const FloatingNavbar = () => {
  return (
    <nav className='flex sm:hidden absolute bottom-6 left-1/2 -translate-x-1/2  dark:text-white dark:bg-elevatedSurface-dark bg-elevatedSurface-light pr-4 pl-4  w-[90%] h-11  justify-center rounded-full'>

<ul className='flex flex-row justify-between items-center w-full'>
    <li className="">
        <a href="#"><FaHome /></a>
    </li>
    <li className="">
        <a href="#"><FaHome /></a>
    </li>
    <li className="">
        <a href="#"><FaHome /></a>
    </li>
    <li className="">
        <a href="#"><FaHome /></a>
    </li>
</ul>
   </nav>
  )
}
