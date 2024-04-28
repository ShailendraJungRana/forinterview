import React from 'react'

const HeroSection = () => {
  return (
      <div
          style={{ backgroundImage: "url('/imagee.png')", height: 'calc(90vh - 80px)' }} 
          className='bg-cover w-full bg-center relative -z-10'
      >
          <div className='mb-4 absolute top-1/2 left-1/4 w-1/2 text-white text-center'>
              <h2 className='text-white  mr-10 mb-4 mt-0 text-4xl ' style={{fontWeight:'1000'}}>
                Innovate, Collaborate, Thrive</h2>
              <p className='text-white text-x1 px-24 py-2 ' style={{
                fontWeight:'300', fontFamily:'Noto, sans-serif' 
              }}>Whether you're big, small or somewhere in between, we're here to help you think bigger, 
              grow your business and replicate result,not work.</p>
              <button className='  bg-button  cursor-pointer  text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 '
              style={{ fontFamily: 'Noto, sans-serif'}}>Book a free consultation</button>
          </div>
      </div>
  )
}

export default HeroSection
