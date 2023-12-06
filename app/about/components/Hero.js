import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='h-full md:p-5 px-4 bg-[#0A3A40]'>
            <div className='lg:w-[800px] md:w-[769px] w-[350px] h-[350px] lg:ml-[250px] pt-5 rounded-2xl relative overflow-hidden'>
                <Image src="https://images.pexels.com/photos/5439476/pexels-photo-5439476.jpeg" alt='our teams' fill objectFit='cover' />
            </div>
            <div className='flex flex-col mt-5  flex-wrap items-center'>
                <h3 className='text-white text-3xl'>Our Companny</h3>
                <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
                <div className='grid grid-cols-2 gap-5'>
                    <div className='text-white'>
                        <ul className='text-3xl'>
                            <li >visi</li>
                        </ul>
                        <p className='md:pl-7 md:text-lg'>
                            Menjadi pionir global dalam transformasi data, mendorong
                            perubahan positif melalui inovasi data yang memacu keunggulan bisnis dan
                            perkembangan masyarakat.
                        </p>
                    </div>
                    <div className='text-white'>
                        <ul className='text-3xl'>
                            <li >Misi</li>
                        </ul>
                        <p className='md:pl-7  md:text-lg'>
                            Inovasi Tanpa Batas dan mengembangkan solusi data management & analisis inovatif untuk
                            memberdayakan bisnis dan organisasi dalam mengatasi tantangan masa depan
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero