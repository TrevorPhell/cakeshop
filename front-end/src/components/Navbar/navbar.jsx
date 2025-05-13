import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const [menu, setmenu] = useState('home')

  return (
    <div className='flex justify-around p-[16px] shadow-lg items-center'>
        <h1 className='text-[1.5rem] font-bold'>Cake Shop</h1>
        <ul className='flex items-center list-none gap-[20px] font-medium'>
            <li onClick={() => {setmenu('home')}} className=' cursor-pointer'> <Link to='/'>Home</Link> {menu === 'home'?<hr className=' border-none w-[100%] h-1 rounded-[10px] bg-pink-800 mt-0.5'/> :<></> } </li>
            <li onClick={() => {setmenu('products')}} className='cursor-pointer'> <Link to='/products'> Products</Link> {menu === 'products'?<hr className=' border-none w-[100%] h-1 rounded-[10px] bg-pink-800 mt-0.5'/> :<></> } </li>
            <li onClick={() => {setmenu('cart')}} className='cursor-pointer'> <Link to='/cart'>Cart</Link>  {menu === 'cart'?<hr className=' border-none w-[100%] h-1 rounded-[10px] bg-pink-800 mt-0.5'/> :<></> } </li>
            <li onClick={() => {setmenu('about-us')}} className='cursor-pointer'> <Link to='/about-us'> About Us </Link>{menu === 'about-us'?<hr className=' border-none w-[100%] h-1 rounded-[10px] bg-pink-800 mt-0.5'/> :<></> } </li>
            <li onClick={() => {setmenu('contact')}} className='cursor-pointer'> <Link to='/contact'>Contact Us</Link>  {menu === 'contact'?<hr className=' border-none w-[100%] h-1 rounded-[10px] bg-pink-800 mt-0.5'/> :<></> } </li>
        </ul>
        <button type="button" className='bg-pink-800 rounded-3xl py-2 px-4 cursor-pointer hover:bg-pink-600 duration-200 hover:scale-105 text-white font-bold active:bg-pink-700 active:outline-8' >Log In</button>
    </div>
  )
}

export default Navbar
