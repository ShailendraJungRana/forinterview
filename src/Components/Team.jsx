import React from 'react'


const Team = () => {
    return (
        <div>
        <div>
        <div className='flex pt-24 overflow-hidden justify-end'>
            <div className='bg-backgroundTeam w-4/5 h-auto py-14 shadow-md' style={{ borderTopLeftRadius: '200px' }}>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='text-3xl font-semibold'>Our Recent Projects</h2>
                    <h3 className='text-2xl font-thin'>By Our Team</h3>
                   <p className='mt-3 text-xs max-w-md break-words'>We build products close to our heart. We turn your ideas into reality and make your dreams successful with an awesome experience.</p>
                </div>

                <div className='flex gap-10 pl-56 mt-12 '>
                        <img className='w-4/3 h-70  ' src="/slider.png" alt=""  />
                </div>
            </div>
            
           
        </div>
            <p className='font-bold text-center py-2 mt-5'>We have colaborate and are trusted by these brands</p>
            </div>
            <div className='flex justify-center'>
            <img  className='w-1/2 h-30 justify-center   ' src="/brands.png" alt=''/>
            </div>
            </div>
    )
}

export default Team
