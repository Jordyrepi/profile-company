import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Overview = () => {
    return (
        <section className='bg-[#042326] md:h-full' id='overview'>
            <div className='md:h-screen'>
                <div className='pt-6'>
                    <h1 className='md:text-4xl text-2xl text-white text-center'>O V E R V I E W</h1>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 md:px-10 md:pt-7 pt-4 px-5'>
                    <div className='pl-20 w-full md:h-[500px] h-[250px] relative overflow-hidden rounded-lg'>
                        <Image src="https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Open Space' quality={100} fill objectFit='cover' />
                    </div>
                    <div className='' >
                        <span className='text-white w-fit px-4 py-1 rounded-md text-center bg-[#3C3D38]'>About Us</span>
                        <h2 className='md:text-5xl text-3xl text-white md:mt-5 mt-3'>PalseSphare Tech</h2>
                        <p className='text-white md:mt-4 mt-2'>is a cutting-edge technology firm specializing in data management and analysis.
                            With a focus on harnessing the power of data, we provide innovative solutions to
                            help businesses thrive in the digital age. Our comprehensive suite of services
                            encompasses data collection, storage, processing, and advanced analytics,
                            ensuring that our clients gain valuable insights to make informed decisions
                        </p>
                        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
                        <h3 className='text-xl text-[#F5F7F7]'>Companny History</h3>
                        <p className='mt-5 text-[#F5F7F7]'>in the fast-paced world of technological innovation, a visionary named Olivia
                            Palse had a dream. Olivia, armed with a profound understanding of the potential locked within vast
                            amounts of data, envisioned a company that could harness the power of information to
                            revolutionize decision-making for businesses worldwide
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview 