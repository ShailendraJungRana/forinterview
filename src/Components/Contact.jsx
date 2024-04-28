import React from 'react'

const Contact = () => {
  return (

  <div>
  <div className='ml-20 py-10'>
      <h2 className='text-2xl font-bold'>Hear what people have to say</h2>
      <div className='flex justify-between '>
        <img className='py-5' src='/contact.png' alt='Contact Image' />
        <div>
        <h2 className="text-3xl text-center  mr-60">Find out how Beesoul can help <br/> your business </h2> 
       

<div className="w-full max-w-md mx-auto p-6 border border-gray-300 mr-60 mt-10 rounded-md">
  <form>
    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        placeholder="Your name"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        placeholder="Your email"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
        Message
      </label>
      <textarea
        id="message"
        rows="4"
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        placeholder="Your message"
      ></textarea>
    </div>
    <div className="text-right">
      <button
        type="submit"
        className="bg-button hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </div>
  </form>
</div>
</div>
        </div>
      </div>
    </div>

  )
}

export default Contact
