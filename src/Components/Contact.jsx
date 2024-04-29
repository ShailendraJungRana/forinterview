import React from 'react';

const Contact = () => {
  return (
<div className="mx-auto max-w-4xl px-4">
<div className="ml-4 md:ml-20 py-10">
  <h2 className="text-2xl font-bold">Hear what people have to say</h2>
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-6">
    <img className=" w-3/2 h-auto md:my-0" src="/contact.png" alt="" />
    <div className="md:ml-10">
      <h2 className="text-3xl text-center md:text-left mb-4 py-4 ">
        Find out how Beesoul can help  your business
      </h2>
      <p className='text-center md:text-left'>
        Please tell us a bit about you, your project, and how best to reach you. We'll get right back to you.
      </p>
      <div>
      <div className="w-full items-center max-w-md mx-auto cursor-pointer mt-3 ">
        <form className='flex flex-col '>
          <div className=''>
          <input className=' border-2 py-2 text-gray-800  bg-gray-200 px-4 rounded' type='text' placeholder="Your Name" /><br/>
          <input className=' border-2 py-2 text-gray-800 mt-2 bg-gray-200 px-4 rounded' type='email' placeholder="Email Address" /> 
          <br/>
          <input className=' border-2 py-10 text-gray-800 mt-2  bg-gray-200 px-4 rounded' type='text' placeholder="Write a Message" />
          </div>
        </form>

      </div>
      </div>
      <button className="bg-button cursor-pointer text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">Schedule a discovery call</button>
    </div>
  </div>
</div>
</div>


  );
};

export default Contact;