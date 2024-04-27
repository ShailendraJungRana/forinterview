import React,{useState} from 'react'
import beesoul from '../Assests/beesoul.png';

import { FaBars, FaTimes } from "react-icons/fa";
// import {Link} from "react-scroll";

const Navbar = () => {

  const [nav, setNav] =useState(false); //default pass



  const links =[ 
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'services'
    },
    {
      id: 3,
      link: 'about us'
    },
    {
      id: 4,
      link: 'contact us'
    },
  ]

  return (
 
<div className="flex justify-around items-center w-full h-20 text-black bg-white px-4 fixed">
    <div>
      <a className='' href='/'> 
        <img className=' ml-10  w-20 h-auto cursor-pointer capitalize hover:scale-110 duration-200  ' src={beesoul} alt =""/> 
       </a> 
    </div>
    <ul className='hidden md:flex mr-10 '>

      {links.map(({id, link}) => (
      <li 
      key={id}  
      className='px-4 ml-4 cursor-pointer capitalize hover:scale-110 duration-200'>
        {link}</li> 

))}
    </ul>
    <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
{nav ? <FaTimes size ={30}/> : <FaBars size= {30}/> }
    </div>

   {nav && (

    <ul className='flex flex-col justify-center  items-center absolute top-0 left-0 w-full 
    h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>

    {links.map(({id, link}) => (
       <li 
       key={id}  
       className='px-4 cursor-pointer  capitalize py-6 text-2xl '>
         {link}</li> 

    ))}
    </ul>
    )} 
 
</div>
  )
}

export default Navbar
