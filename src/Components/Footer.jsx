import React from 'react'

const Footer = () => {
  return (
      

<footer className="bg-gray-800 text-white-200 mt-10">
  <div className="container mx-auto py-5 px-6">
    <div className='grid md:grid-cols-12 grid-cols-1 gap-7'>
        <div className='lg:col-span-4 md:col-span-4 col-span-12'>

            <div>
                <ul className='list-none mt-6 space-y-2'>
                    <li>
                        <a href='#' className='text-white hover:text-gray-600 transition-all duration-500 ease-in-out' >Startup MVP Building</a>
                    </li>
                    <li>
                        <a href='#' className='text-white hover:text-gray-600 transition-all duration-500 ease-in-out' >Innovative Solutions</a>
                    </li>
                    <li>
                        <a href='#' className='text-white hover:text-gray-600 transition-all duration-500 ease-in-out' >Upscaling of Existing <br/>Business Solution</a>
                    </li>
                    <li>
                        <a href='#' className='text-white hover:text-gray-600 transition-all duration-500 ease-in-out' >Site Maintenance</a>
                    </li>
                </ul>
  
            </div>
        </div>
                <div className='lg:col-span-3 md:col-span-4 col-span-12'>
                <ul className='list-none mt-6 space-y-2'>
                    <li>
                        <a href='#' className='text-white hover:text-gray-600 transition-all duration-500 ease-in-out' >Who we are</a>
                    </li>
                    <li>
                        <a href='#' className='text-white hover:text-gray-600 transition-all duration-500 ease-in-out' >What we do</a>
                    </li>
                    <li>
                        <a href='#' className='text-white hover:text-gray-600 transition-all duration-500 ease-in-out' >Case Studies</a>
                    </li>
                    <li>
                        <a href='#' className='text-white hover:text-gray-600 transition-all duration-500 ease-in-out' >Discovery Call</a>
                    </li>
                    <li>
                        <a href='#' className='text-white hover:text-gray-600 transition-all duration-500 ease-in-out' >Contact Us</a>
                    </li>
                </ul>
                </div> 

                <div className='lg:col-span-5 md:col-span-4 col-span-12'>
                    <div className='mt-5 text-white text-4xl font-bold text-right'>
                        <h2> Lets Talk</h2>
                        <a className=' text-white text-sm font-normal hover:text-gray-600 transition-all duration-500 ease-in-out' href="mailto:info@beesoul.co">info@beesoul.co</a>
                        <p className='text-sm font-thin'>Richmond, California</p>
                        <p className='text-sm font-thin'>Kathmandu, Nepal</p>

                    </div>
                   
                </div>
    </div>
  </div>

    <p className="text-sm text-white font-bold text-center ">&copy; 2024 Your Company. All rights reserved.</p>

</footer>

  )
}

export default Footer

       
