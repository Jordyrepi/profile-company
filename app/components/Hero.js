import Image from 'next/image'

const Hero = () => {
    return (
        <section className='relative lg:pt-20  h-screen w-full overflow-hidden'>
            <Image src={'/herobg-min.jpg'} layout='fill' quality={100} objectFit='cover' alt='background' />
            <div className='absolute grid lg:grid-cols-2 grid-cols-1 md:mx-2 mt-5 mx-5'>
                <div className='flex flex-col justify-center items-start lg:m-10 md:m-7'>
                    <div className='md:text-3xl text-xl font-bold text-black'>
                        Unleashing Insights, Mastering Data: Your Future in Our Algorithms.
                    </div>
                    <div className='text-black text-lg md:text-xl lg:text-sm max-w-xl md:mt-10 mt-5 md:mb-5 mb-3'>Transform data into strategic decisions. Our
                        data management & analyst services empower your business for success.With expertise in data
                        management & analysis, we help your business optimize operations and achieve strategic goals
                        with maximum efficiency.
                    </div>
                    <a href='#overview'>
                        <button className='bg-[#0C2327] hover:bg-[teal] rounded-lg text-white py-1 px-4'> let's start</button>
                    </a>
                </div>
                <div className='lg:pl-14 md:pl-6 mt-5'>
                    <Image src="/heropic-min.jpg" alt='hero picture' width={500} height={500} className='rounded-xl' />
                </div>
            </div>
        </section >
    )
}

export default Hero