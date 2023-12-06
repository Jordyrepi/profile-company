import { Button } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'

const ProductsTesti = () => {
    return (
        <div className='h-full p-5 bg-[#0A3A40]'>
            <div className='text-white text-center'>
                <h1 className='text-3xl'>Our services & Products</h1>
                <p className='mt-2 mx-auto w-6/7 '>
                    We provide several services for you so you can develop your business and company
                </p>
            </div>
            <div className='mt-6'>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-2 lg:ml-[200px]">
                    <div className=' max-w-sm shadow-2xl rounded'>
                        <div class="max-w-sm rounded relative h-[250px] overflow-hidden ">
                            <Image src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg" alt='Consultant Data' fill objectFit='cover' />
                        </div>
                        <div class=" px-6 py-4">
                            <div class="font-bold text-xl text-cyan-50 mb-2">Consultant Data & analytics</div>
                            <p class="text-cyan-50 text-base">
                                Providing consulting services to help companies understand and optimize their
                                data management, as well as design analytical solutions that suit business needs.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Information Technology</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Technology Infrastructure</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Data Processing</span>
                        </div>
                    </div>
                    <div className=' max-w-sm shadow-2xl rounded'>
                        <div class="max-w-sm rounded relative h-[250px] overflow-hidden ">
                            <Image src="https://images.unsplash.com/photo-1656154291039-1a8fcb23c9e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Management Big Data' fill objectFit='cover' />
                        </div>
                        <div class=" px-6 py-4">
                            <div class="font-bold text-xl text-cyan-50 mb-2">Big Data management</div>
                            <p class="text-cyan-50 text-base">
                                We Build solutions to efficiently manage, store and process big data,
                                including appropriate analytical tools.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Information Technology</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Technology Infrastructure</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Data Processing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsTesti