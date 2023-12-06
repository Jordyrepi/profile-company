import Image from 'next/image'
import React from 'react'

const Culture = () => {
    return (
        <div className='md:h-full pt-5 bg-[#0A3A40]'>
            <div className='flex flex-col text-center text-white'>
                <h1 className='text-4xl font-mono'>Culture & Events</h1>
                <p className='md:mx-40 lg:text-sm md:text-xl px-4 my-4 italic'>
                    Our company also holds regularenjoyable event where we celebrate moments, laughter, and
                    good vibes because at PalseSphere Tech, we believe in creating memories beyond business.
                </p>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:ml-[200px] pb-5'>
                <div className='md:max-w-sm px-5 shadow-2xl rounded'>
                    <div class="md:max-w-sm rounded relative h-[250px] overflow-hidden ">
                        <Image src="https://images.pexels.com/photos/5778895/pexels-photo-5778895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Gathering' fill objectFit='cover' />
                    </div>
                    <div class=" px-6 py-4">
                        <div class="font-bold text-xl text-cyan-50 mb-2">Gathering</div>
                        <p class="text-cyan-50 lg:text-sm md:text-xl text-base">
                            Don't forget, we also hold regular meetings and sometimes we also invite other
                            companies to build relationships
                        </p>
                    </div>
                </div>
                <div className=' md:max-w-sm px-5 shadow-2xl rounded'>
                    <div class="md:max-w-sm rounded relative h-[250px] overflow-hidden ">
                        <Image src="https://images.pexels.com/photos/7551752/pexels-photo-7551752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Outbond' fill objectFit='cover' />
                    </div>
                    <div class=" px-6 py-4">
                        <div class="font-bold text-xl text-cyan-50 mb-2">Outbond</div>
                        <p class="text-cyan-50 lg:text-sm md:text-xltext-base">
                            We also hold outbound events to refresh and take your mind off work for a moment,
                            indirectly this event is also to increase connectivity
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Culture