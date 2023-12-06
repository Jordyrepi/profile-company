import Image from 'next/image'
import React from 'react'

const History = () => {
    return (
        <div className='bg-[#0A3A40] py-10 px-6'>
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
                <div className='flex flex-col'>
                    <span className=' text-white w-fit px-4 py-1 rounded-md text-center bg-[#3C3D38]'>Data Management & Analyst</span>
                    <h1 className='text-5xl text-white md:mt-5 mt-3'>PalseSphare Tech</h1>
                    <p className='text-white text-2xl mt-4'>is a cutting-edge technology firm specializing in data management and analysis.
                        With a focus on harnessing the power of data, we provide innovative solutions to
                        help businesses thrive in the digital age. Our comprehensive suite of services
                        encompasses data collection, storage, processing, and advanced analytics,
                        ensuring that our clients gain valuable insights to make informed decisions
                    </p>
                </div>
                <div class=" w-full h-[500px] relative overflow-hidden rounded-lg mb-5">
                    <Image src="https://images.pexels.com/photos/7794059/pexels-photo-7794059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=" alt='meeting companny' quality={100} fill objectFit='cover' />
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 md:gap-6 md:mt-3'>
                <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Crisis Year</h2>
                    <p class="font-normal lg:text-sm md:text-xl text-gray-700 dark:text-gray-400 text-center">
                        In the early 2010s, after years of working in data analytics and management,
                        Olivia decided it was time to bring her vision to life. In a small garage nestled in
                        Silicon Valley, she, along with a group of like-minded individuals passionate about data,
                        founded PalseSphere Tech. The name, a fusion of Olivia's last name and the concept of a
                        sphere representing the holistic nature of their data services, 
                    </p>
                </div>
                <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">The Bright Spot</h2>
                    <p class="font-normal lg:text-sm md:text-xl text-gray-700 dark:text-gray-400 text-center">
                        PalseSphere Tech started as a modest startup with a handful of dedicated data scientists,
                        analysts, and engineers. Their mission was clear: to empower businesses with the tools to
                        transform raw data into actionable insights. Olivia and her team believed that informed
                        decision-making could drive not only efficiency but also innovation in every industry.
                    </p>
                </div>
                <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Stabilization</h2>
                    <p class="font-normal lg:text-sm md:text-xl text-gray-700 dark:text-gray-400 text-center">
                        Over the years, PalseSphere Tech evolved into a global leader in the field of data
                        management and analytics. Their solutions became indispensable for businesses navigating
                        the complexities of the digital age. From Fortune 500 companies to emerging startups,
                        organizations relied on PalseSphere Tech to unlock the full potential of their data
                    </p>
                </div>
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Our Future</h2>
                    <p class="font-normal lg:text-sm md:text-xl text-gray-700 dark:text-gray-400 text-center">
                        As the company continued to grow, Olivia Palse remained at the helm, steering
                        PalseSphere Tech towards new frontiers. The journey of PalseSphere Tech serves as
                        a testament to the transformative power of a dream, fueled by passion, expertise,
                        and a commitment to shaping a data-driven future for businesses worldwide.
                    </p>
                </a>
            </div>
        </div>
    )
}

export default History