import React from 'react';

const Contact = () => {
  return (
<div className="mx-auto max-w-4xl px-4">
<div className="ml-4 md:ml-20 py-10">
  <h2 className="text-2xl font-bold">Hear what people have to say</h2>
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-6">
    <img className=" w-2/3 h-auto md:my-0" src="/contact.png" alt="" />
    <div className="md:ml-10">
      <h2 className="text-3xl text-center md:text-left mb-4">
        Find out how Beesoul can help <br /> your business
      </h2>
      <div className="w-full max-w-md mx-auto p-6 border border-gray-300 rounded-md">
        <form className='w-full max-w-md mx-auto px-4'>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="text-center md:text-right">
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


  );
};

export default Contact;

// <div className="mx-auto max-w-4xl px-4">
// <div className="ml-4 md:ml-20 py-10">
//   <h2 className="text-2xl font-bold">Hear what people have to say</h2>
//   <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-6">
//     <img className=" w-2/3 h-auto md:my-0" src="/contact.png" alt="" />
//     <div className="md:ml-10">
//       <h2 className="text-3xl text-center md:text-left mb-4">
//         Find out how Beesoul can help <br /> your business
//       </h2>
//       <div className="w-full max-w-md mx-auto p-6 border border-gray-300 rounded-md">
//         <form className='w-full max-w-md mx-auto px-4'>
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//               placeholder="Your name"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//               placeholder="Your email"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="message"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows="4"
//               className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//               placeholder="Your message"
//             ></textarea>
//           </div>
//           <div className="text-center md:text-right">
//             <button
//               type="submit"
//               className="bg-button hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
// </div>

// {/* <>
// <div class="min-h-screen py-40" style="background-image: linear-gradient(115deg, #9F7AEA, #FEE2FE)">
//       <div class="container mx-auto">
//         <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
//         </div>
//           </div>
//           </div>
// </> */}