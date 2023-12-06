import Image from 'next/image'
import React from 'react'

const CardTeam = ({ team }) => {
    return (
        <section className='py-10 px-2'>
            <div className='bg-[#2FBCBC] shadow-2xl rounded-2xl'>
                <div className='lg:max-w-sm px-4 pt-5'>
                    <div className='flex justify-center'>
                        <Image
                            src={team.picture.large}
                            alt={`photo ${team.name.first}`}
                            objectFit='cover'
                            width={120}
                            height={100}
                            className='rounded-full'
                        />
                    </div>
                    <div className='text-center flex flex-col'>
                        <text className='text-[#1F1F1F] lg:text-[24px] md:text-4xl text-3xl font-semibold'>{`${team.name.first}`}</text>
                        <text className=' text-[#1F1F1F] lg:text-sm md:text-[23px] text-xl mb-1'>{`${team.phone}`}</text>
                        <div className=' text-[#1F1F1F] lg:text-sm md:text-[] text-xl mb-1'>{`${team.email}`}</div>
                        <text className=' text-[#1F1F1F] lg:text-sm md:text-2xl text-xl'>{`${team.location.city}`}</text>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardTeam