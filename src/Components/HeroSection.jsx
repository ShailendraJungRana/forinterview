import React from 'react';

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: "url('/imagee.png')", height: 'calc(90vh - 80px)' }}
      className='bg-cover w-full bg-center relative -z-10'
    >
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-4 text-white text-center'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4' style={{ fontWeight: '1000' }}>
          Innovate, Collaborate, Thrive
        </h2>
        <p className='text-lg md:text-xl lg:text-2xl px-4 py-2 mb-4' style={{ fontWeight: '300', fontFamily: 'Noto, sans-serif' }}>
          Whether you're big, small or somewhere in between, we're here to help you think bigger, grow your business and replicate results, not work.
        </p>
        <button className='bg-button hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition duration-300 ease-in-out'>
          Book a free consultation
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
