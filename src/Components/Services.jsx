import React from 'react'


const Services = () => {
    return (
        <div className='flex pt-24 overflow-hidden items-center'>
            <div className='bg-backgroundService w-4/5 h-auto py-14 shadow-md' style={{ borderTopRightRadius: '200px' }}>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='text-3xl font-extrabold'>Service We Provide</h2>
                   <p className='mt-3 text-xs max-w-md break-words'>We build products close to our heart. We turn your ideas into reality and make your dreams successful with an awesome experience.</p>
                </div>

                <div className='flex gap-10 pl-56 mt-12'>
                    <div className='bg-white p-8 flex flex-col justify-between w-80 shadow-md'>
                        <img src="/unnamed2.png" alt="" className='h-12 w-12 bg-iconBg2 p-2' />

                        <div>
                            <h3 className='font-bold mt-3'>Startup MVP building</h3>
                            <p className='text-xs mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A unde qui voluptatem fugit repellat, atque possimus nisi distinctio dolorum iure?</p>
                        </div>
                    </div>
                    <div className='bg-white p-8 flex flex-col justify-between w-80 shadow-md'>
                        <img src="/unnamed.png" alt="" className='h-12 w-12 bg-iconBg p-2' />

                        <div>
                            <h3 className='font-bold mt-3'>Upscaling of Existing Business Solution</h3>
                            <p className='text-xs mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A unde qui voluptatem fugit repellat, atque possimus nisi distinctio dolorum iure?</p>
                        </div>
                    </div>
                    <div className='bg-white mr-3 p-8 flex flex-col justify-between w-80 shadow-md'>
                        <img src="/unnamed1.png" alt="" className='h-12 w-12 bg-iconBg p-2' />

                        <div>
                            <h3 className='font-bold mt-3'>Innovative Solutions</h3>
                            <p className='text-xs mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nemo praesentium expedita repellendus architecto quibusdam voluptatibus molestias veritatis et. Alias optio officiis dicta eveniet nobis.?</p>
                        </div>
                    </div>
                </div>
            </div>


           
        </div>
    )
}

export default Services
