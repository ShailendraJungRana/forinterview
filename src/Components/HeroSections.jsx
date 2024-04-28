import React from 'react'

const HeroSections = () => {
  return (
    <div
    style={{ backgroundImage: "url('/herosections.png')",  height: 'calc(50vh - 70px)' }} 
    className='bg-cover w-full h-80 bg-center relative -z-10 mt-5'
>
<div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
      
        <h1 className='text-white  mr-10 mb-4 mt-0 text-8xl ' style={{fontWeight:'1000'}}>
Let's work</h1>

<p className= ' text-center text-white text-x1 px-24 py-2 ' style={{ fontWeight:'300', fontFamily:'Noto, sans-serif' }}>
      See how we can work with you. You can <br/>schedule a call to get to know us.
    </p>
  
        <button className=' mt-4 bg-button  cursor-pointer  text-white px-4 py-2  rounded hover:bg-blue-600 '
        style={{ fontFamily: 'Noto, sans-serif'}}>Submit your schedule</button>
    <h1 className='text-white flex items-center mt-4  text-8xl ' style={{fontWeight:'1000'}}>
together</h1>
    </div>
</div>
  )
}

export default HeroSections
