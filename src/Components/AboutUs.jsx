// import React from 'react'
// import media from '../Assests/media.png'
// const AboutUs = () => {
//   return (
//     <div className='flex items-center justify-between' > 
//         <div>
//             <img className='mr-4 w-130  h-120 ' src={media} alt='Media' />
//         </div>
//         <div >
//             <h1 className='text-5xl font-bold mt-5 py-2' > About Us </h1>
//             <h2 className='text-3xl font-thin mt-0 py-2' > Who we are? </h2>
//             <p className= "text-sm flex mr-40 text-justify  font-medium "> Our vision is to redefine the possiblities of technology, empowering individuals and organizations to harness its potential for the greater good.
//             We aim to create a multinational company driven by passion and determination.<br/> 
//             <br/> 
//             To revolutionize industries through cutting-edge software solutions, fsatering innovation, and driving digital transformation. We will expand our global footprint, collaborate with visionary partners, and continuously push the boundaries of technology to share a brighter future.</p>
//             <button className=' bg-button  cursor-pointer  text-white px-4 py-2 mt-4  rounded hover:bg-blue-600   'style={{ fontFamily: 'Noto, sans-serif'}}>Blogs</button>
//         </div>

//     </div>
//   )
// }

// export default AboutUs
import React from 'react';
import media from '../Assests/media.png';

const AboutUs = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between'>
      <div>
        <img className='mr-4 w-130 h-120' src={media} alt='Media' />
      </div>
      <div className='md:w-1/2 mr-5 ml-5'>
        <h1 className='text-5xl font-bold mt-5 py-2'> About Us </h1>
        <h2 className='text-3xl font-thin mt-0 py-2'> Who we are? </h2>
        <p className='text-sm flex  text-justify font-medium '>
          Our vision is to redefine the possibilities of technology, empowering individuals and organizations to harness its potential for the greater good. We aim to create a multinational company driven by passion and determination.
          <br />
          <br />
          To revolutionize industries through cutting-edge software solutions, fostering innovation, and driving digital transformation. We will expand our global footprint, collaborate with visionary partners, and continuously push the boundaries of technology to share a brighter future.
        </p>
        <button className='bg-button cursor-pointer text-white px-4 py-2 mt-4  rounded hover:bg-blue-600' style={{ fontFamily: 'Noto, sans-serif' }}>Blogs</button>
      </div>
    </div>
  );
};

export default AboutUs;
