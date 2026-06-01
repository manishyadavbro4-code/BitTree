"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname=usePathname() 
  const showNavbar=["/","/generate"].includes(pathname)
  return ( <>{showNavbar && <nav className=' bg-white w-[85vw] fixed right-[8vw] rounded-full p-3 top-10 flex justify-between items-center ' >
        <div className="logo flex gap-20 items-center ml-5">
            <Link href={"/"}><img width={100} src="/img.svg" alt="img" /></Link>
            <ul className='flex gap-10  text-gray-800'>
              <Link href={"/"}><li>Products</li></Link>
              <Link href={"/"}><li>Templates</li></Link>
              <Link href={"/"}><li>Marketplace</li></Link>
              <Link href={"/"}><li>Learn</li></Link>
              <Link href={"/"}><li>Pricing</li></Link>
            </ul>
        </div>
        <div className='flex gap-5 font-bold  '>
          <Link href={"/generate"}><button className='login bg-gray-100 p-4  text-black rounded-lg'>Log in</button></Link>
          <Link href={"/signup"}><button className='signup bg-black text-white p-4 rounded-full'>Sign up free</button></Link>
        </div>
    </nav>}</>
  )
}

export default Navbar
