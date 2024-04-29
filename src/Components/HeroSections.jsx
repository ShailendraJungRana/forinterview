
import React from 'react';

const HeroSections = () => {
  return (
    <div
      style={{ backgroundImage: "url('/herosections.png')", height: 'calc(50vh - 70px)' }}
      className='bg-cover w-full h-80 bg-center relative mt-5'
    >
      <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
        <h1 className='text-white text-4xl md:text-8xl mb-4 mt-0 font-extrabold'>
          Let's work
        </h1>
        <p className='text-center text-white text-lg md:text-xl px-6 md:px-24 py-2 font-normal'>
          See how we can work with you. You can schedule a call to get to know us.
        </p>
        <button className='mt-4 bg-button cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600'>
          Schedule a Discovery Call
        </button>
        <h1 className='text-white flex items-center mt-4 text-4xl md:text-8xl font-extrabold'>
          together
        </h1>
      </div>
    </div>
  );
};

export default HeroSections;
